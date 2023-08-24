/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import type { ContentsWithRoot } from '@nextcloud/files'
import type { FileStat, ResponseDataDetailed, DAVResultResponseProps } from 'webdav'

import { File, Folder, davParsePermissions } from '@nextcloud/files'
import { generateRemoteUrl } from '@nextcloud/router'
import { getCurrentUser } from '@nextcloud/auth'

import { getClient, rootPath } from './WebdavClient'
import { getDavNameSpaces, getDavProperties, getDefaultPropfind } from './DavProperties'

const client = getClient()

const reportPayload = `<?xml version="1.0"?>
<oc:filter-files ${getDavNameSpaces()}>
	<d:prop>
		${getDavProperties()}
	</d:prop>
	<oc:filter-rules>
		<oc:favorite>1</oc:favorite>
	</oc:filter-rules>
</oc:filter-files>`

interface ResponseProps extends DAVResultResponseProps {
	permissions: string,
	fileid: number,
	size: number,
}

const resultToNode = function(node: FileStat): File | Folder {
	const props = node.props as ResponseProps
	const permissions = davParsePermissions(props?.permissions)
	const owner = getCurrentUser()?.uid as string

	const nodeData = {
		id: props?.fileid as number || 0,
		source: generateRemoteUrl('dav' + rootPath + node.filename),
		mtime: new Date(node.lastmod),
		mime: node.mime as string,
		size: props?.size as number || 0,
		permissions,
		owner,
		root: rootPath,
		attributes: {
			...node,
			...props,
			hasPreview: props?.['has-preview'],
		},
	}

	delete nodeData.attributes.props

	return node.type === 'file'
		? new File(nodeData)
		: new Folder(nodeData)
}

export const getContents = async (path = '/'): Promise<ContentsWithRoot> => {
	const propfindPayload = getDefaultPropfind()

	// Get root folder
	let rootResponse
	if (path === '/') {
		rootResponse = await client.stat(path, {
			details: true,
			data: getDefaultPropfind(),
		}) as ResponseDataDetailed<FileStat>
	}

	const contentsResponse = await client.getDirectoryContents(path, {
		details: true,
		// Only filter favorites if we're at the root
		data: path === '/' ? reportPayload : propfindPayload,
		headers: {
			// Patched in WebdavClient.ts
			method: path === '/' ? 'REPORT' : 'PROPFIND',
		},
		includeSelf: true,
	}) as ResponseDataDetailed<FileStat[]>

	const root = rootResponse?.data || contentsResponse.data[0]
	const contents = contentsResponse.data.filter(node => node.filename !== path)

	return {
		folder: resultToNode(root) as Folder,
		contents: contents.map(resultToNode),
	}
}
