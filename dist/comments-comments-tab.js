/*! For license information please see comments-comments-tab.js.LICENSE.txt */
(()=>{"use strict";let e=null;const s=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-message-reply-text" viewBox="0 0 24 24"><path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" /></svg>',async mount(t,s,n){e&&e.$destroy(),e=new OCA.Comments.View("files",{parent:n}),await e.update(s.id),e.$mount(t)},update(t){e.update(t.id)},destroy(){e.$destroy(),e=null},scrollBottomReached(){e.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(s)}))})();
//# sourceMappingURL=comments-comments-tab.js.map?v=33814ecdcacdd351bdf2