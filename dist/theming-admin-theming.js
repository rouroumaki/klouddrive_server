/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*! For license information please see NcColorPicker.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={4462:(e,t,a)=>{"use strict";a.d(t,{default:()=>k});const o={name:"NcButton",props:{disabled:{type:Boolean,default:!1},type:{type:String,validator:e=>-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e),default:"secondary"},nativeType:{type:String,validator:e=>-1!==["submit","reset","button"].indexOf(e),default:"button"},wide:{type:Boolean,default:!1},ariaLabel:{type:String,default:null},href:{type:String,default:null},to:{type:[String,Object],default:null},exact:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null}},render(e){var t,a,o,i,n,r=this;const s=null===(t=this.$slots.default)||void 0===t||null===(a=t[0])||void 0===a||null===(o=a.text)||void 0===o||null===(i=o.trim)||void 0===i?void 0:i.call(o),l=!!s,c=null===(n=this.$slots)||void 0===n?void 0:n.icon;s||this.ariaLabel||console.warn("You need to fill either the text or the ariaLabel props in the button component.",{text:s,ariaLabel:this.ariaLabel},this);const u=function(){let{navigate:t,isActive:a,isExactActive:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(r.to||!r.href?"button":"a",{class:["button-vue",{"button-vue--icon-only":c&&!l,"button-vue--text-only":l&&!c,"button-vue--icon-and-text":c&&l,["button-vue--vue-".concat(r.type)]:r.type,"button-vue--wide":r.wide,active:a,"router-link-exact-active":o}],attrs:{"aria-label":r.ariaLabel,disabled:r.disabled,type:r.href?null:r.nativeType,role:r.href?"button":null,href:!r.to&&r.href?r.href:null,...r.$attrs},on:{...r.$listeners,click:e=>{var a,o;null===(a=r.$listeners)||void 0===a||null===(o=a.click)||void 0===o||o.call(a,e),null==t||t(e)}}},[e("span",{class:"button-vue__wrapper"},[c?e("span",{class:"button-vue__icon",attrs:{"aria-hidden":r.ariaHidden}},[r.$slots.icon]):null,l?e("span",{class:"button-vue__text"},[s]):null])])};return this.to?e("router-link",{props:{custom:!0,to:this.to,exact:this.exact},scopedSlots:{default:u}}):u()}};var i=a(3379),n=a.n(i),r=a(7795),s=a.n(r),l=a(569),c=a.n(l),u=a(3565),d=a.n(u),m=a(9216),p=a.n(m),g=a(4589),A=a.n(g),h=a(7196),v={};v.styleTagTransform=A(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p();n()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;var b=a(1900),C=a(2102),y=a.n(C),f=(0,b.Z)(o,undefined,undefined,!1,null,"4d05be2c",null);"function"==typeof y()&&y()(f);const k=f.exports},2297:(e,t,a)=>{"use strict";a.d(t,{default:()=>j});var o=a(9454),i=a(4505),n=a(1206);const r={name:"NcPopover",components:{Dropdown:o.Dropdown},inheritAttrs:!1,props:{popoverBaseClass:{type:String,default:""},focusTrap:{type:Boolean,default:!0},setReturnFocus:{default:void 0,type:[HTMLElement,SVGElement,String,Boolean]}},emits:["after-show","after-hide"],beforeDestroy(){this.clearFocusTrap()},methods:{async useFocusTrap(){var e,t;if(await this.$nextTick(),!this.focusTrap)return;const a=null===(e=this.$refs.popover)||void 0===e||null===(t=e.$refs.popperContent)||void 0===t?void 0:t.$el;a&&(this.$focusTrap=(0,i.createFocusTrap)(a,{escapeDeactivates:!1,allowOutsideClick:!0,setReturnFocus:this.setReturnFocus,trapStack:(0,n.L)()}),this.$focusTrap.activate())},clearFocusTrap(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t;null===(t=this.$focusTrap)||void 0===t||t.deactivate(e),this.$focusTrap=null}catch(e){console.warn(e)}},afterShow(){this.$nextTick((()=>{this.$emit("after-show"),this.useFocusTrap()}))},afterHide(){this.$emit("after-hide"),this.clearFocusTrap()}}},s=r;var l=a(3379),c=a.n(l),u=a(7795),d=a.n(u),m=a(569),p=a.n(m),g=a(3565),A=a.n(g),h=a(9216),v=a.n(h),b=a(4589),C=a.n(b),y=a(1625),f={};f.styleTagTransform=C(),f.setAttributes=A(),f.insert=p().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=v();c()(y.Z,f);y.Z&&y.Z.locals&&y.Z.locals;var k=a(1900),S=a(2405),w=a.n(S),z=(0,k.Z)(s,(function(){var e=this;return(0,e._self._c)("Dropdown",e._g(e._b({ref:"popover",attrs:{distance:10,"arrow-padding":10,"no-auto-focus":!0,"popper-class":e.popoverBaseClass},on:{"apply-show":e.afterShow,"apply-hide":e.afterHide},scopedSlots:e._u([{key:"popper",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"Dropdown",e.$attrs,!1),e.$listeners),[e._t("trigger")],2)}),[],!1,null,null,null);"function"==typeof w()&&w()(z);const j=z.exports},932:(e,t,a)=>{"use strict";a.d(t,{t:()=>r});var o=a(7931);const i=(0,o.getGettextBuilder)().detectLocale();[{locale:"ar",translations:{"{tag} (invisible)":"{tag} (غير مرئي)","{tag} (restricted)":"{tag} (مقيد)",Actions:"الإجراءات",Activities:"النشاطات","Animals & Nature":"الحيوانات والطبيعة","Anything shared with the same group of people will show up here":"أي مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا","Avatar of {displayName}":"صورة {displayName} الرمزية","Avatar of {displayName}, {status}":"صورة {displayName} الرمزية، {status}","Cancel changes":"إلغاء التغييرات","Change title":"تغيير العنوان",Choose:"إختيار","Clear text":"مسح النص",Close:"أغلق","Close modal":"قفل الشرط","Close navigation":"إغلاق المتصفح","Close sidebar":"قفل الشريط الجانبي","Confirm changes":"تأكيد التغييرات",Custom:"مخصص","Edit item":"تعديل عنصر","Error getting related resources":"خطأ في تحصيل مصادر ذات صلة","External documentation for {title}":"الوثائق الخارجية لـ{title}",Favorite:"مفضلة",Flags:"الأعلام","Food & Drink":"الطعام والشراب","Frequently used":"كثيرا ما تستخدم",Global:"عالمي","Go back to the list":"العودة إلى القائمة","Hide password":"إخفاء كلمة السر","Message limit of {count} characters reached":"تم الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف","More items …":"عناصر أخرى ...",Next:"التالي","No emoji found":"لم يتم العثور على أي رمز تعبيري","No results":"ليس هناك أية نتيجة",Objects:"الأشياء",Open:"فتح",'Open link to "{resourceTitle}"':'فتح رابط إلى "{resourceTitle}"',"Open navigation":"فتح المتصفح","Password is secure":"كلمة السر مُؤمّنة","Pause slideshow":"إيقاف العرض مؤقتًا","People & Body":"الناس والجسم","Pick an emoji":"اختر رمزًا تعبيريًا","Please select a time zone:":"الرجاء تحديد المنطقة الزمنية:",Previous:"السابق","Related resources":"مصادر ذات صلة",Search:"بحث","Search results":"نتائج البحث","Select a tag":"اختر علامة",Settings:"الإعدادات","Settings navigation":"إعدادات المتصفح","Show password":"أعرض كلمة السر","Smileys & Emotion":"الوجوه و الرموز التعبيرية","Start slideshow":"بدء العرض",Submit:"إرسال",Symbols:"الرموز","Travel & Places":"السفر والأماكن","Type to search time zone":"اكتب للبحث عن منطقة زمنية","Unable to search the group":"تعذر البحث في المجموعة","Undo changes":"التراجع عن التغييرات","Write message, @ to mention someone, : for emoji autocompletion …":"اكتب رسالة، @ للإشارة إلى شخص ما، : للإكمال التلقائي للرموز التعبيرية ..."}},{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura","Anything shared with the same group of people will show up here":"Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancel·la els canvis","Change title":"Canviar títol",Choose:"Tria","Clear text":"Netejar text",Close:"Tanca","Close modal":"Tancar el mode","Close navigation":"Tanca la navegació","Close sidebar":"Tancar la barra lateral","Confirm changes":"Confirmeu els canvis",Custom:"Personalitzat","Edit item":"Edita l'element","Error getting related resources":"Error obtenint els recursos relacionats","Error parsing svg":"Error en l'anàlisi del svg","External documentation for {title}":"Documentació externa per a {title}",Favorite:"Preferit",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment",Global:"Global","Go back to the list":"Torna a la llista","Hide password":"Amagar contrasenya","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge","More items …":"Més artícles...",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes",Open:"Obrir",'Open link to "{resourceTitle}"':'Obrir enllaç a "{resourceTitle}"',"Open navigation":"Obre la navegació","Password is secure":"Contrasenya segura<br>","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji","Please select a time zone:":"Seleccioneu una zona horària:",Previous:"Anterior","Related resources":"Recursos relacionats",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Seleccioneu una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Show password":"Mostrar contrasenya","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Submit:"Envia",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Type to search time zone":"Escriviu per cercar la zona horària","Unable to search the group":"No es pot cercar el grup","Undo changes":"Desfés els canvis",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escriu missatge, fes servir "@" per esmentar algú, fes servir ":" per autocompletar emojis...'}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda","Anything shared with the same group of people will show up here":"Cokoli nasdíleného stejné skupině lidí se zobrazí zde","Avatar of {displayName}":"Zástupný obrázek uživatele {displayName}","Avatar of {displayName}, {status}":"Zástupný obrázek uživatele {displayName}, {status}","Cancel changes":"Zrušit změny","Change title":"Změnit nadpis",Choose:"Zvolit","Clear text":"Čitelný text",Close:"Zavřít","Close modal":"Zavřít dialogové okno","Close navigation":"Zavřít navigaci","Close sidebar":"Zavřít postranní panel","Confirm changes":"Potvrdit změny",Custom:"Uživatelsky určené","Edit item":"Upravit položku","Error getting related resources":"Chyba při získávání souvisejících prostředků","Error parsing svg":"Chyba při zpracovávání svg","External documentation for {title}":"Externí dokumentace k {title}",Favorite:"Oblíbené",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané",Global:"Globální","Go back to the list":"Jít zpět na seznam","Hide password":"Skrýt heslo","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy","More items …":"Další položky…",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty",Open:"Otevřít",'Open link to "{resourceTitle}"':"Otevřít odkaz na „{resourceTitle}“","Open navigation":"Otevřít navigaci","Password is secure":"Heslo je bezpečné","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji","Please select a time zone:":"Vyberte časovou zónu:",Previous:"Předchozí","Related resources":"Související prostředky",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Show password":"Zobrazit heslo","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Type to search time zone":"Psaním vyhledejte časovou zónu","Unable to search the group":"Nedaří se hledat skupinu","Undo changes":"Vzít změny zpět",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem „@“ (zavináč); automatické doplňování emotikonů zahájíte napsáním „:“ (dvojtečky)…"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur","Anything shared with the same group of people will show up here":"Alt der deles med samme gruppe af personer vil vises her","Avatar of {displayName}":"Avatar af {displayName}","Avatar of {displayName}, {status}":"Avatar af {displayName}, {status}","Cancel changes":"Annuller ændringer","Change title":"Ret titel",Choose:"Vælg","Clear text":"Ryd tekst",Close:"Luk","Close modal":"Luk vindue","Close navigation":"Luk navigation","Close sidebar":"Luk sidepanel","Confirm changes":"Bekræft ændringer",Custom:"Brugerdefineret","Edit item":"Rediger emne","Error getting related resources":"Kunne ikke hente tilknyttede data","Error parsing svg":"Fejl ved analysering af svg","External documentation for {title}":"Ekstern dokumentation for {title}",Favorite:"Favorit",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt",Global:"Global","Go back to the list":"Tilbage til listen","Hide password":"Skjul kodeord","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået","More items …":"Mere ...",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter",Open:"Åbn",'Open link to "{resourceTitle}"':'Åbn link til "{resourceTitle}"',"Open navigation":"Åbn navigation","Password is secure":"Kodeordet er sikkert","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji","Please select a time zone:":"Vælg venligst en tidszone:",Previous:"Forrige","Related resources":"Relaterede emner",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Show password":"Vis kodeord","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Type to search time zone":"Indtast for at søge efter tidszone","Unable to search the group":"Kan ikke søge på denne gruppe","Undo changes":"Fortryd ændringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv besked, brug "@" for at nævne nogen, brug ":" til emoji-autofuldførelse ...'}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte wählen Sie eine Zeitzone:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um Zeitzone zu suchen","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Objekte",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte eine Zeitzone auswählen:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um eine Zeitzone zu suchen","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση","Anything shared with the same group of people will show up here":"Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ","Avatar of {displayName}":"Άβαταρ του {displayName}","Avatar of {displayName}, {status}":"Άβαταρ του {displayName}, {status}","Cancel changes":"Ακύρωση αλλαγών","Change title":"Αλλαγή τίτλου",Choose:"Επιλογή","Clear text":"Εκκαθάριση κειμένου",Close:"Κλείσιμο","Close modal":"Βοηθητικό κλείσιμο","Close navigation":"Κλείσιμο πλοήγησης","Close sidebar":"Κλείσιμο πλευρικής μπάρας","Confirm changes":"Επιβεβαίωση αλλαγών",Custom:"Προσαρμογή","Edit item":"Επεξεργασία","Error getting related resources":"Σφάλμα λήψης σχετικών πόρων","Error parsing svg":"Σφάλμα ανάλυσης svg","External documentation for {title}":"Εξωτερική τεκμηρίωση για {title}",Favorite:"Αγαπημένα",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Global:"Καθολικό","Go back to the list":"Επιστροφή στην αρχική λίστα ","Hide password":"Απόκρυψη κωδικού πρόσβασης","Message limit of {count} characters reached":"Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος","More items …":"Περισσότερα στοιχεία …",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα",Open:"Άνοιγμα",'Open link to "{resourceTitle}"':'Άνοιγμα συνδέσμου στο "{resourceTitle}"',"Open navigation":"Άνοιγμα πλοήγησης","Password is secure":"Ο κωδικός πρόσβασης είναι ασφαλής","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji","Please select a time zone:":"Παρακαλούμε επιλέξτε μια ζώνη ώρας:",Previous:"Προηγούμενο","Related resources":"Σχετικοί πόροι",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Settings navigation":"Πλοήγηση ρυθμίσεων","Show password":"Εμφάνιση κωδικού πρόσβασης","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Submit:"Υποβολή",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Type to search time zone":"Πληκτρολογήστε για αναζήτηση ζώνης ώρας","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας","Undo changes":"Αναίρεση Αλλαγών",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Γράψτε μήνυμα, χρησιμοποιείστε "@" για να αναφέρετε κάποιον, χρησιμοποιείστε ":" για αυτόματη συμπλήρωση emoji …'}},{locale:"en_GB",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Actions",Activities:"Activities","Animals & Nature":"Animals & Nature","Anything shared with the same group of people will show up here":"Anything shared with the same group of people will show up here","Avatar of {displayName}":"Avatar of {displayName}","Avatar of {displayName}, {status}":"Avatar of {displayName}, {status}","Cancel changes":"Cancel changes","Change title":"Change title",Choose:"Choose","Clear text":"Clear text",Close:"Close","Close modal":"Close modal","Close navigation":"Close navigation","Close sidebar":"Close sidebar","Confirm changes":"Confirm changes",Custom:"Custom","Edit item":"Edit item","Error getting related resources":"Error getting related resources","Error parsing svg":"Error parsing svg","External documentation for {title}":"External documentation for {title}",Favorite:"Favourite",Flags:"Flags","Food & Drink":"Food & Drink","Frequently used":"Frequently used",Global:"Global","Go back to the list":"Go back to the list","Hide password":"Hide password","Message limit of {count} characters reached":"Message limit of {count} characters reached","More items …":"More items …",Next:"Next","No emoji found":"No emoji found","No results":"No results",Objects:"Objects",Open:"Open",'Open link to "{resourceTitle}"':'Open link to "{resourceTitle}"',"Open navigation":"Open navigation","Password is secure":"Password is secure","Pause slideshow":"Pause slideshow","People & Body":"People & Body","Pick an emoji":"Pick an emoji","Please select a time zone:":"Please select a time zone:",Previous:"Previous","Related resources":"Related resources",Search:"Search","Search results":"Search results","Select a tag":"Select a tag",Settings:"Settings","Settings navigation":"Settings navigation","Show password":"Show password","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start slideshow",Submit:"Submit",Symbols:"Symbols","Travel & Places":"Travel & Places","Type to search time zone":"Type to search time zone","Unable to search the group":"Unable to search the group","Undo changes":"Undo changes",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Write message, use "@" to mention someone, use ":" for emoji autocompletion …'}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza","Anything shared with the same group of people will show up here":"Cualquier cosa que sea compartida con el mismo grupo de personas se mostrará aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar cambios","Change title":"Cambiar título",Choose:"Elegir","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Error getting related resources":"Se encontró un error al obtener los recursos relacionados","Error parsing svg":"Error procesando svg","External documentation for {title}":"Documentacion externa de {title}",Favorite:"Favorito",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres","More items …":"Más ítems...",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos",Open:"Abrir",'Open link to "{resourceTitle}"':'Abrir enlace a "{resourceTitle}"',"Open navigation":"Abrir navegación","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji","Please select a time zone:":"Por favor elige un huso de horario:",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Show password":"Mostrar contraseña","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Type to search time zone":"Escribe para buscar un huso de horario","Unable to search the group":"No es posible buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, utilice "@" para mencionar a alguien, utilice ":" para autocompletado de emojis ...'}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Actions:"Ekintzak",Activities:"Jarduerak","Animals & Nature":"Animaliak eta Natura","Anything shared with the same group of people will show up here":"Pertsona-talde berarekin partekatutako edozer agertuko da hemen","Avatar of {displayName}":"{displayName}-(e)n irudia","Avatar of {displayName}, {status}":"{displayName} -(e)n irudia, {status}","Cancel changes":"Ezeztatu aldaketak","Change title":"Aldatu titulua",Choose:"Aukeratu","Clear text":"Garbitu testua",Close:"Itxi","Close modal":"Itxi modala","Close navigation":"Itxi nabigazioa","Close sidebar":"Itxi albo-barra","Confirm changes":"Baieztatu aldaketak",Custom:"Pertsonalizatua","Edit item":"Editatu elementua","Error getting related resources":"Errorea erlazionatutako baliabideak lortzerakoan","Error parsing svg":"Errore bat gertatu da svg-a analizatzean","External documentation for {title}":"Kanpoko dokumentazioa {title}(r)entzat",Favorite:"Gogokoa",Flags:"Banderak","Food & Drink":"Janaria eta edariak","Frequently used":"Askotan erabilia",Global:"Globala","Go back to the list":"Bueltatu zerrendara","Hide password":"Ezkutatu pasahitza","Message limit of {count} characters reached":"Mezuaren {count} karaketere-limitera heldu zara","More items …":"Elementu gehiago …",Next:"Hurrengoa","No emoji found":"Ez da emojirik aurkitu","No results":"Emaitzarik ez",Objects:"Objektuak",Open:"Ireki",'Open link to "{resourceTitle}"':'Ireki esteka: "{resourceTitle}"',"Open navigation":"Ireki nabigazioa","Password is secure":"Pasahitza segurua da","Pause slideshow":"Pausatu diaporama","People & Body":"Jendea eta gorputza","Pick an emoji":"Hautatu emoji bat","Please select a time zone:":"Mesedez hautatu ordu-zona bat:",Previous:"Aurrekoa","Related resources":"Erlazionatutako baliabideak",Search:"Bilatu","Search results":"Bilaketa emaitzak","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Settings navigation":"Nabigazio ezarpenak","Show password":"Erakutsi pasahitza","Smileys & Emotion":"Smileyak eta emozioa","Start slideshow":"Hasi diaporama",Submit:"Bidali",Symbols:"Sinboloak","Travel & Places":"Bidaiak eta lekuak","Type to search time zone":"Idatzi ordu-zona bat bilatzeko","Unable to search the group":"Ezin izan da taldea bilatu","Undo changes":"Aldaketak desegin",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Idatzi mezua, erabili "@" norbait aipatzeko, erabili ":" emojiak automatikoki osatzeko...'}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto","Avatar of {displayName}":"Käyttäjän {displayName} avatar","Avatar of {displayName}, {status}":"Käyttäjän {displayName} avatar, {status}","Cancel changes":"Peruuta muutokset",Choose:"Valitse",Close:"Sulje","Close navigation":"Sulje navigaatio","Confirm changes":"Vahvista muutokset",Custom:"Mukautettu","Edit item":"Muokkaa kohdetta","External documentation for {title}":"Ulkoinen dokumentaatio kohteelle {title}",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt",Global:"Yleinen","Go back to the list":"Siirry takaisin listaan","Message limit of {count} characters reached":"Viestin merkken enimmäisimäärä {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Open navigation":"Avaa navigaatio","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji","Please select a time zone:":"Valitse aikavyöhyke:",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt & tunteet","Start slideshow":"Aloita diaesitys",Submit:"Lähetä",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Type to search time zone":"Kirjoita etsiäksesi aikavyöhyke","Unable to search the group":"Ryhmää ei voi hakea","Undo changes":"Kumoa muutokset","Write message, @ to mention someone, : for emoji autocompletion …":"Kirjoita viesti, @ mainitaksesi käyttäjän, : emojin automaattitäydennykseen…"}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature","Anything shared with the same group of people will show up here":"Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Annuler les modifications","Change title":"Modifier le titre",Choose:"Choisir","Clear text":"Effacer le texte",Close:"Fermer","Close modal":"Fermer la fenêtre","Close navigation":"Fermer la navigation","Close sidebar":"Fermer la barre latérale","Confirm changes":"Confirmer les modifications",Custom:"Personnalisé","Edit item":"Éditer l'élément","Error getting related resources":"Erreur à la récupération des ressources liées","Error parsing svg":"Erreur d'analyse SVG","External documentation for {title}":"Documentation externe pour {title}",Favorite:"Favori",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment",Global:"Global","Go back to the list":"Retourner à la liste","Hide password":"Cacher le mot de passe","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte","More items …":"Plus d'éléments...",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets",Open:"Ouvrir",'Open link to "{resourceTitle}"':'Ouvrir le lien vers "{resourceTitle}"',"Open navigation":"Ouvrir la navigation","Password is secure":"Le mot de passe est sécurisé","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji","Please select a time zone:":"Sélectionnez un fuseau horaire : ",Previous:"Précédent","Related resources":"Ressources liées",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Show password":"Afficher le mot de passe","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Submit:"Valider",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Type to search time zone":"Saisissez les premiers lettres pour rechercher un fuseau horaire","Unable to search the group":"Impossible de chercher le groupe","Undo changes":"Annuler les changements",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Écrire un message, utiliser "@" pour mentionner une personne, ":" pour l\'autocomplétion des émojis...'}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza","Cancel changes":"Cancelar os cambios",Choose:"Escoller",Close:"Pechar","Confirm changes":"Confirma os cambios",Custom:"Personalizado","External documentation for {title}":"Documentación externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación polos axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet","Anything shared with the same group of people will show up here":"Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni","Avatar of {displayName}":"{displayName} profilképe","Avatar of {displayName}, {status}":"{displayName} profilképe, {status}","Cancel changes":"Változtatások elvetése","Change title":"Cím megváltoztatása",Choose:"Válassszon","Clear text":"Szöveg törlése",Close:"Bezárás","Close modal":"Ablak bezárása","Close navigation":"Navigáció bezárása","Close sidebar":"Oldalsáv bezárása","Confirm changes":"Változtatások megerősítése",Custom:"Egyéni","Edit item":"Elem szerkesztése","Error getting related resources":"Hiba a kapcsolódó erőforrások lekérésekor","Error parsing svg":"Hiba az SVG feldolgozásakor","External documentation for {title}":"Külső dokumentáció ehhez: {title}",Favorite:"Kedvenc",Flags:"Zászlók","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt",Global:"Globális","Go back to the list":"Ugrás vissza a listához","Hide password":"Jelszó elrejtése","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve","More items …":"További elemek...",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak",Open:"Megnyitás",'Open link to "{resourceTitle}"':"A(z) „{resourceTitle}” hivatkozásának megnyitása","Open navigation":"Navigáció megnyitása","Password is secure":"A jelszó biztonságos","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit","Please select a time zone:":"Válasszon időzónát:",Previous:"Előző","Related resources":"Kapcsolódó erőforrások",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Show password":"Jelszó megjelenítése","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Submit:"Beküldés",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Type to search time zone":"Gépeljen az időzóna kereséséhez","Unable to search the group":"A csoport nem kereshető","Undo changes":"Változtatások visszavonása",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Írjon egy üzenetet, használja a „@”-ot valaki megemlítéséhet, illetve a „:”-ot az emodzsik automatikus kiegészítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura","Anything shared with the same group of people will show up here":"Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui","Avatar of {displayName}":"Avatar di {displayName}","Avatar of {displayName}, {status}":"Avatar di {displayName}, {status}","Cancel changes":"Annulla modifiche","Change title":"Modifica il titolo",Choose:"Scegli","Clear text":"Cancella il testo",Close:"Chiudi","Close modal":"Chiudi il messaggio modale","Close navigation":"Chiudi la navigazione","Close sidebar":"Chiudi la barra laterale","Confirm changes":"Conferma modifiche",Custom:"Personalizzato","Edit item":"Modifica l'elemento","Error getting related resources":"Errore nell'ottenere risorse correlate","Error parsing svg":"Errore nell'analizzare l'svg","External documentation for {title}":"Documentazione esterna per {title}",Favorite:"Preferito",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente",Global:"Globale","Go back to the list":"Torna all'elenco","Hide password":"Nascondi la password","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto","More items …":"Più elementi ...",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti",Open:"Apri",'Open link to "{resourceTitle}"':'Apri il link a "{resourceTitle}"',"Open navigation":"Apri la navigazione","Password is secure":"La password è sicura","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji","Please select a time zone:":"Si prega di selezionare un fuso orario:",Previous:"Precedente","Related resources":"Risorse correlate",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Show password":"Mostra la password","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Type to search time zone":"Digita per cercare un fuso orario","Unable to search the group":"Impossibile cercare il gruppo","Undo changes":"Cancella i cambiamenti",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrivi un messaggio, "@" per menzionare qualcuno, ":" per il completamento automatico delle emoji ...'}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然","Anything shared with the same group of people will show up here":"同じグループで共有しているものは、全てここに表示されます","Avatar of {displayName}":"{displayName} のアバター","Avatar of {displayName}, {status}":"{displayName}, {status} のアバター","Cancel changes":"変更をキャンセル","Change title":"タイトルを変更",Choose:"選択","Clear text":"テキストをクリア",Close:"閉じる","Close modal":"モーダルを閉じる","Close navigation":"ナビゲーションを閉じる","Close sidebar":"サイドバーを閉じる","Confirm changes":"変更を承認",Custom:"カスタム","Edit item":"編集","Error getting related resources":"関連リソースの取得エラー","Error parsing svg":"svgの解析エラー","External documentation for {title}":"{title} のための添付文書",Favorite:"お気に入り",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの",Global:"全体","Go back to the list":"リストに戻る","Hide password":"パスワードを非表示","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています","More items …":"他のアイテム",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物",Open:"開く",'Open link to "{resourceTitle}"':'"{resourceTitle}"のリンクを開く',"Open navigation":"ナビゲーションを開く","Password is secure":"パスワードは保護されています","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択","Please select a time zone:":"タイムゾーンを選んで下さい：",Previous:"前","Related resources":"関連リソース",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Show password":"パスワードを表示","Smileys & Emotion":"感情表現","Start slideshow":"スライドショーを開始",Submit:"提出",Symbols:"記号","Travel & Places":"旅行と場所","Type to search time zone":"タイムゾーン検索のため入力してください","Unable to search the group":"グループを検索できません","Undo changes":"変更を取り消し",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'メッセージを記入、"@"でメンション、"："で絵文字の自動補完 ...'}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа","Avatar of {displayName}":"Аватар на {displayName}","Avatar of {displayName}, {status}":"Аватар на {displayName}, {status}","Cancel changes":"Откажи ги промените","Change title":"Промени наслов",Choose:"Избери",Close:"Затвори","Close modal":"Затвори модал","Close navigation":"Затвори навигација","Confirm changes":"Потврди ги промените",Custom:"Прилагодени","Edit item":"Уреди","External documentation for {title}":"Надворешна документација за {title}",Favorite:"Фаворити",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени",Global:"Глобално","Go back to the list":"Врати се на листата",items:"ставки","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато","More {dashboardItemType} …":"Повеќе {dashboardItemType} …",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти",Open:"Отвори","Open navigation":"Отвори навигација","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон","Please select a time zone:":"Изберете временска зона:",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Submit:"Испрати",Symbols:"Симболи","Travel & Places":"Патувања & Места","Type to search time zone":"Напишете за да пребарате временска зона","Unable to search the group":"Неможе да се принајде групата","Undo changes":"Врати ги промените","Write message, @ to mention someone, : for emoji autocompletion …":"Напиши порака, @ за да спомнете некого, : за емотинони автоатско комплетирање ..."}},{locale:"my",translations:{"{tag} (invisible)":"{tag} (ကွယ်ဝှက်ထား)","{tag} (restricted)":"{tag} (ကန့်သတ်)",Actions:"လုပ်ဆောင်ချက်များ",Activities:"ပြုလုပ်ဆောင်တာများ","Animals & Nature":"တိရစ္ဆာန်များနှင့် သဘာဝ","Avatar of {displayName}":"{displayName} ၏ ကိုယ်ပွား","Cancel changes":"ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်",Choose:"ရွေးချယ်ရန်",Close:"ပိတ်ရန်","Confirm changes":"ပြောင်းလဲမှုများ အတည်ပြုရန်",Custom:"အလိုကျချိန်ညှိမှု","External documentation for {title}":"{title} အတွက် ပြင်ပ စာရွက်စာတမ်း",Flags:"အလံများ","Food & Drink":"အစားအသောက်","Frequently used":"မကြာခဏအသုံးပြုသော",Global:"ကမ္ဘာလုံးဆိုင်ရာ","Message limit of {count} characters reached":"ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ",Next:"နောက်သို့ဆက်ရန်","No emoji found":"အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ","No results":"ရလဒ်မရှိပါ",Objects:"အရာဝတ္ထုများ","Pause slideshow":"စလိုက်ရှိုး ခေတ္တရပ်ရန်","People & Body":"လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်","Pick an emoji":"အီမိုဂျီရွေးရန်","Please select a time zone:":"ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",Previous:"ယခင်",Search:"ရှာဖွေရန်","Search results":"ရှာဖွေမှု ရလဒ်များ","Select a tag":"tag ရွေးချယ်ရန်",Settings:"ချိန်ညှိချက်များ","Settings navigation":"ချိန်ညှိချက်အညွှန်း","Smileys & Emotion":"စမိုင်လီများနှင့် အီမိုရှင်း","Start slideshow":"စလိုက်ရှိုးအား စတင်ရန်",Submit:"တင်သွင်းရန်",Symbols:"သင်္ကေတများ","Travel & Places":"ခရီးသွားလာခြင်းနှင့် နေရာများ","Type to search time zone":"ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ","Unable to search the group":"အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ","Write message, @ to mention someone …":"စာရေးသားရန်၊ တစ်စုံတစ်ဦးအား @ အသုံးပြု ရည်ညွှန်းရန်..."}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur","Anything shared with the same group of people will show up here":"Alt som er delt med den samme gruppen vil vises her","Avatar of {displayName}":"Avataren til {displayName}","Avatar of {displayName}, {status}":"{displayName}'s avatar, {status}","Cancel changes":"Avbryt endringer","Change title":"Endre tittel",Choose:"Velg","Clear text":"Fjern tekst",Close:"Lukk","Close modal":"Lukk modal","Close navigation":"Lukk navigasjon","Close sidebar":"Lukk sidepanel","Confirm changes":"Bekreft endringer",Custom:"Tilpasset","Edit item":"Rediger","Error getting related resources":"Feil ved henting av relaterte ressurser","Error parsing svg":"Feil ved parsing av svg","External documentation for {title}":"Ekstern dokumentasjon for {title}",Favorite:"Favoritt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Global:"Global","Go back to the list":"Gå tilbake til listen","Hide password":"Skjul passord","Message limit of {count} characters reached":"Karakter begrensing {count} nådd i melding","More items …":"Flere gjenstander...",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter",Open:"Åpne",'Open link to "{resourceTitle}"':'Åpne link til "{resourceTitle}"',"Open navigation":"Åpne navigasjon","Password is secure":"Passordet er sikkert","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji","Please select a time zone:":"Vennligst velg tidssone",Previous:"Forrige","Related resources":"Relaterte ressurser",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Settings navigation":"Navigasjonsinstillinger","Show password":"Vis passord","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Reise og steder","Type to search time zone":"Tast for å søke etter tidssone","Unable to search the group":"Kunne ikke søke i gruppen","Undo changes":"Tilbakestill endringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv melding, bruk "@" for å nevne noen, bruk ":" for autofullføring av emoji...'}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur","Avatar of {displayName}":"Avatar van {displayName}","Avatar of {displayName}, {status}":"Avatar van {displayName}, {status}","Cancel changes":"Wijzigingen annuleren",Choose:"Kies",Close:"Sluiten","Close navigation":"Navigatie sluiten","Confirm changes":"Wijzigingen bevestigen",Custom:"Aangepast","Edit item":"Item bewerken","External documentation for {title}":"Externe documentatie voor {title}",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt",Global:"Globaal","Go back to the list":"Ga terug naar de lijst","Message limit of {count} characters reached":"Berichtlimiet van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Open navigation":"Navigatie openen","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji","Please select a time zone:":"Selecteer een tijdzone:",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Submit:"Verwerken",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Type to search time zone":"Type om de tijdzone te zoeken","Unable to search the group":"Kan niet in de groep zoeken","Undo changes":"Wijzigingen ongedaan maken","Write message, @ to mention someone, : for emoji autocompletion …":"Schrijf bericht, @ om iemand te noemen, : voor emoji auto-aanvullen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura","Anything shared with the same group of people will show up here":"Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób","Avatar of {displayName}":"Awatar {displayName}","Avatar of {displayName}, {status}":"Awatar {displayName}, {status}","Cancel changes":"Anuluj zmiany","Change title":"Zmień tytuł",Choose:"Wybierz","Clear text":"Wyczyść tekst",Close:"Zamknij","Close modal":"Zamknij modal","Close navigation":"Zamknij nawigację","Close sidebar":"Zamknij pasek boczny","Confirm changes":"Potwierdź zmiany",Custom:"Zwyczajne","Edit item":"Edytuj element","Error getting related resources":"Błąd podczas pobierania powiązanych zasobów","Error parsing svg":"Błąd podczas analizowania svg","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Favorite:"Ulubiony",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane",Global:"Globalnie","Go back to the list":"Powrót do listy","Hide password":"Ukryj hasło","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków","More items …":"Więcej pozycji…",Next:"Następny","No emoji found":"Nie znaleziono emoji","No results":"Brak wyników",Objects:"Obiekty",Open:"Otwórz",'Open link to "{resourceTitle}"':'Otwórz link do "{resourceTitle}"',"Open navigation":"Otwórz nawigację","Password is secure":"Hasło jest bezpieczne","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji","Please select a time zone:":"Wybierz strefę czasową:",Previous:"Poprzedni","Related resources":"Powiązane zasoby",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Ustawienia nawigacji","Show password":"Pokaż hasło","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Type to search time zone":"Wpisz, aby wyszukać strefę czasową","Unable to search the group":"Nie można przeszukać grupy","Undo changes":"Cofnij zmiany",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Napisz wiadomość, "@" aby o kimś wspomnieć, ":" dla autouzupełniania emoji…'}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar alterações","Change title":"Alterar título",Choose:"Escolher","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Error getting related resources":"Erro ao obter recursos relacionados","Error parsing svg":"Erro ao analisar svg","External documentation for {title}":"Documentação externa para {title}",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados",Global:"Global","Go back to the list":"Volte para a lista","Hide password":"Ocultar a senha","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido","More items …":"Mais itens …",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos",Open:"Aberto",'Open link to "{resourceTitle}"':'Abrir link para "{resourceTitle}"',"Open navigation":"Abrir navegação","Password is secure":"A senha é segura","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Selecione um fuso horário: ",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não foi possível pesquisar o grupo","Undo changes":"Desfazer modificações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva mensagens, use "@" para mencionar algum, use ":" for autocompletar emoji …'}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ro",translations:{"{tag} (invisible)":"{tag} (invizibil)","{tag} (restricted)":"{tag} (restricționat)",Actions:"Acțiuni",Activities:"Activități","Animals & Nature":"Animale și natură","Anything shared with the same group of people will show up here":"Tot ceea ce este partajat cu același grup de persoane va fi afișat aici","Avatar of {displayName}":"Avatarul lui {displayName}","Avatar of {displayName}, {status}":"Avatarul lui {displayName}, {status}","Cancel changes":"Anulează modificările","Change title":"Modificați titlul",Choose:"Alegeți","Clear text":"Șterge textul",Close:"Închideți","Close modal":"Închideți modulul","Close navigation":"Închideți navigarea","Close sidebar":"Închide bara laterală","Confirm changes":"Confirmați modificările",Custom:"Personalizat","Edit item":"Editați elementul","Error getting related resources":" Eroare la returnarea resurselor legate","Error parsing svg":"Eroare de analizare a svg","External documentation for {title}":"Documentație externă pentru {title}",Favorite:"Favorit",Flags:"Marcaje","Food & Drink":"Alimente și băuturi","Frequently used":"Utilizate frecvent",Global:"Global","Go back to the list":"Întoarceți-vă la listă","Hide password":"Ascunde parola","Message limit of {count} characters reached":"Limita mesajului de {count} caractere a fost atinsă","More items …":"Mai multe articole ...",Next:"Următorul","No emoji found":"Nu s-a găsit niciun emoji","No results":"Nu există rezultate",Objects:"Obiecte",Open:"Deschideți",'Open link to "{resourceTitle}"':'Deschide legătura la "{resourceTitle}"',"Open navigation":"Deschideți navigația","Password is secure":"Parola este sigură","Pause slideshow":"Pauză prezentare de diapozitive","People & Body":"Oameni și corp","Pick an emoji":"Alege un emoji","Please select a time zone:":"Vă rugăm să selectați un fus orar:",Previous:"Anterior","Related resources":"Resurse legate",Search:"Căutare","Search results":"Rezultatele căutării","Select a tag":"Selectați o etichetă",Settings:"Setări","Settings navigation":"Navigare setări","Show password":"Arată parola","Smileys & Emotion":"Zâmbete și emoții","Start slideshow":"Începeți prezentarea de diapozitive",Submit:"Trimiteți",Symbols:"Simboluri","Travel & Places":"Călătorii și locuri","Type to search time zone":"Tastați pentru a căuta fusul orar","Unable to search the group":"Imposibilitatea de a căuta în grup","Undo changes":"Anularea modificărilor",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrie un mesaj, folosește "@" pentru a menționa pe cineva, folosește ":" pentru autocompletarea cu emoji ...'}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Actions:"Действия ",Activities:"События","Animals & Nature":"Животные и природа ","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Фотография {displayName}, {status}","Cancel changes":"Отменить изменения",Choose:"Выберите",Close:"Закрыть","Close modal":"Закрыть модальное окно","Close navigation":"Закрыть навигацию","Confirm changes":"Подтвердить изменения",Custom:"Пользовательское","Edit item":"Изменить элемент","External documentation for {title}":"Внешняя документация для {title}",Flags:"Флаги","Food & Drink":"Еда, напиток","Frequently used":"Часто используемый",Global:"Глобальный","Go back to the list":"Вернуться к списку",items:"элементов","Message limit of {count} characters reached":"Достигнуто ограничение на количество символов в {count}","More {dashboardItemType} …":"Больше {dashboardItemType} …",Next:"Следующее","No emoji found":"Эмодзи не найдено","No results":"Результаты отсуствуют",Objects:"Объекты",Open:"Открыть","Open navigation":"Открыть навигацию","Pause slideshow":"Приостановить показ слйдов","People & Body":"Люди и тело","Pick an emoji":"Выберите эмодзи","Please select a time zone:":"Пожалуйста, выберите часовой пояс:",Previous:"Предыдущее",Search:"Поиск","Search results":"Результаты поиска","Select a tag":"Выберите метку",Settings:"Параметры","Settings navigation":"Навигация по настройкам","Smileys & Emotion":"Смайлики и эмоции","Start slideshow":"Начать показ слайдов",Submit:"Утвердить",Symbols:"Символы","Travel & Places":"Путешествия и места","Type to search time zone":"Введите для поиска часового пояса","Unable to search the group":"Невозможно найти группу","Undo changes":"Отменить изменения","Write message, @ to mention someone, : for emoji autocompletion …":"Напишите сообщение, @ - чтобы упомянуть кого-то, : - для автозаполнения эмодзи …"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda","Avatar of {displayName}":"Avatar {displayName}","Avatar of {displayName}, {status}":"Avatar {displayName}, {status}","Cancel changes":"Zrušiť zmeny",Choose:"Vybrať",Close:"Zatvoriť","Close navigation":"Zavrieť navigáciu","Confirm changes":"Potvrdiť zmeny",Custom:"Zvyk","Edit item":"Upraviť položku","External documentation for {title}":"Externá dokumentácia pre {title}",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Global:"Globálne","Go back to the list":"Naspäť na zoznam","Message limit of {count} characters reached":"Limit správy na {count} znakov dosiahnutý",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Open navigation":"Otvoriť navigáciu","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži","Please select a time zone:":"Prosím vyberte časovú zónu:",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Settings navigation":"Navigácia v nastaveniach","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Submit:"Odoslať",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Type to search time zone":"Začníte písať pre vyhľadávanie časovej zóny","Unable to search the group":"Skupinu sa nepodarilo nájsť","Undo changes":"Vrátiť zmeny","Write message, @ to mention someone, : for emoji autocompletion …":"Napíšte správu, @ ak chcete niekoho spomenúť, : pre automatické dopĺňanie emotikonov…"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava","Avatar of {displayName}":"Podoba {displayName}","Avatar of {displayName}, {status}":"Prikazna slika {displayName}, {status}","Cancel changes":"Prekliči spremembe","Change title":"Spremeni naziv",Choose:"Izbor","Clear text":"Počisti besedilo",Close:"Zapri","Close modal":"Zapri pojavno okno","Close navigation":"Zapri krmarjenje","Close sidebar":"Zapri stransko vrstico","Confirm changes":"Potrdi spremembe",Custom:"Po meri","Edit item":"Uredi predmet","Error getting related resources":"Napaka pridobivanja povezanih virov","External documentation for {title}":"Zunanja dokumentacija za {title}",Favorite:"Priljubljeno",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe",Global:"Splošno","Go back to the list":"Vrni se na seznam","Hide password":"Skrij geslo","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.","More items …":"Več predmetov ...",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti",Open:"Odpri",'Open link to "{resourceTitle}"':"Odpri povezavo do »{resourceTitle}«","Open navigation":"Odpri krmarjenje","Password is secure":"Geslo je varno","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick a date":"Izbor datuma","Pick a date and a time":"Izbor datuma in časa","Pick a month":"Izbor meseca","Pick a time":"Izbor časa","Pick a week":"Izbor tedna","Pick a year":"Izbor leta","Pick an emoji":"Izbor izrazne ikone","Please select a time zone:":"Izbor časovnega pasu:",Previous:"Predhodni","Related resources":"Povezani viri",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Show password":"Pokaži geslo","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Type to search time zone":"Vpišite niz za iskanje časovnega pasu","Unable to search the group":"Ni mogoče iskati po skupini","Undo changes":"Razveljavi spremembe","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite sporočilo, za omembo pred ime postavite@, začnite z : za vstavljanje izraznih ikon …"}},{locale:"sr",translations:{"{tag} (invisible)":"{tag} (nevidljivo)","{tag} (restricted)":"{tag} (ograničeno)",Actions:"Radnje",Activities:"Aktivnosti","Animals & Nature":"Životinje i Priroda","Avatar of {displayName}":"Avatar za {displayName}","Avatar of {displayName}, {status}":"Avatar za {displayName}, {status}","Cancel changes":"Otkaži izmene","Change title":"Izmeni naziv",Choose:"Изаберите",Close:"Затвори","Close modal":"Zatvori modal","Close navigation":"Zatvori navigaciju","Close sidebar":"Zatvori bočnu traku","Confirm changes":"Potvrdite promene",Custom:"Po meri","Edit item":"Uredi stavku","External documentation for {title}":"Eksterna dokumentacija za {title}",Favorite:"Omiljeni",Flags:"Zastave","Food & Drink":"Hrana i Piće","Frequently used":"Često korišćeno",Global:"Globalno","Go back to the list":"Natrag na listu",items:"stavke","Message limit of {count} characters reached":"Dostignuto je ograničenje za poruke od {count} znakova","More {dashboardItemType} …":"Više  {dashboardItemType} …",Next:"Следеће","No emoji found":"Nije pronađen nijedan emodži","No results":"Нема резултата",Objects:"Objekti",Open:"Otvori","Open navigation":"Otvori navigaciju","Pause slideshow":"Паузирај слајд шоу","People & Body":"Ljudi i Telo","Pick an emoji":"Izaberi emodži","Please select a time zone:":"Molimo izaberite vremensku zonu:",Previous:"Претходно",Search:"Pretraži","Search results":"Rezultati pretrage","Select a tag":"Изаберите ознаку",Settings:"Поставке","Settings navigation":"Navigacija u podešavanjima","Smileys & Emotion":"Smajli i Emocije","Start slideshow":"Покрени слајд шоу",Submit:"Prihvati",Symbols:"Simboli","Travel & Places":"Putovanja i Mesta","Type to search time zone":"Ukucaj da pretražiš vremenske zone","Unable to search the group":"Nije moguće pretražiti grupu","Undo changes":"Poništi promene","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite poruku, @ da pomenete nekoga, : za automatsko dovršavanje emodžija…"}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur","Anything shared with the same group of people will show up here":"Något som delats med samma grupp av personer kommer att visas här","Avatar of {displayName}":"{displayName}s avatar","Avatar of {displayName}, {status}":"{displayName}s avatar, {status}","Cancel changes":"Avbryt ändringar","Change title":"Ändra titel",Choose:"Välj","Clear text":"Ta bort text",Close:"Stäng","Close modal":"Stäng modal","Close navigation":"Stäng navigering","Close sidebar":"Stäng sidopanel","Confirm changes":"Bekräfta ändringar",Custom:"Anpassad","Edit item":"Ändra","Error getting related resources":"Problem att hämta relaterade resurser","Error parsing svg":"Fel vid inläsning av svg","External documentation for {title}":"Extern dokumentation för {title}",Favorite:"Favorit",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta",Global:"Global","Go back to the list":"Gå tillbaka till listan","Hide password":"Göm lössenordet","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används","More items …":"Fler objekt",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt",Open:"Öppna",'Open link to "{resourceTitle}"':'Öppna länk till "{resourceTitle}"',"Open navigation":"Öppna navigering","Password is secure":"Lössenordet är säkert","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji","Please select a time zone:":"Välj tidszon:",Previous:"Föregående","Related resources":"Relaterade resurser",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Show password":"Visa lössenordet","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Submit:"Skicka",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Type to search time zone":"Skriv för att välja tidszon","Unable to search the group":"Kunde inte söka i gruppen","Undo changes":"Ångra ändringar",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv meddelande, använd "@" för att nämna någon, använd ":" för automatiska emojiförslag ...'}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa","Anything shared with the same group of people will show up here":"Aynı kişi grubu ile paylaşılan herşey burada görüntülenir","Avatar of {displayName}":"{displayName} avatarı","Avatar of {displayName}, {status}":"{displayName}, {status} avatarı","Cancel changes":"Değişiklikleri iptal et","Change title":"Başlığı değiştir",Choose:"Seçin","Clear text":"Metni temizle",Close:"Kapat","Close modal":"Üste açılan pencereyi kapat","Close navigation":"Gezinmeyi kapat","Close sidebar":"Yan çubuğu kapat","Confirm changes":"Değişiklikleri onayla",Custom:"Özel","Edit item":"Ögeyi düzenle","Error getting related resources":"İlgili kaynaklar alınırken sorun çıktı","Error parsing svg":"svg işlenirken sorun çıktı","External documentation for {title}":"{title} için dış belgeler",Favorite:"Sık kullanılanlara ekle",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar",Global:"Evrensel","Go back to the list":"Listeye dön","Hide password":"Parolayı gizle","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı","More items …":"Diğer ögeler…",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler",Open:"Aç",'Open link to "{resourceTitle}"':'"{resourceTitle}" bağlantısını aç',"Open navigation":"Gezinmeyi aç","Password is secure":"Parola güvenli","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin","Please select a time zone:":"Lütfen bir saat dilimi seçin:",Previous:"Önceki","Related resources":"İlgili kaynaklar",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Show password":"Parolayı görüntüle","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Type to search time zone":"Saat dilimi aramak için yazmaya başlayın","Unable to search the group":"Grupta arama yapılamadı","Undo changes":"Değişiklikleri geri al",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'İleti yazın, birini anmak için @, otomatik emoji tamamlamak için ":" kullanın…'}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (невидимий)","{tag} (restricted)":"{tag} (обмежений)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Аватар {displayName}, {status}","Cancel changes":"Скасувати зміни","Change title":"Змінити назву",Choose:"ВиберітьВиберіть","Clear text":"Очистити текст",Close:"Закрити","Close modal":"Закрити модаль","Close navigation":"Закрити навігацію","Close sidebar":"Закрити бічну панель","Confirm changes":"Підтвердити зміни",Custom:"Власне","Edit item":"Редагувати елемент","External documentation for {title}":"Зовнішня документація для {title}",Favorite:"Улюблений",Flags:"Прапори","Food & Drink":"Їжа та напої","Frequently used":"Найчастіші",Global:"Глобальний","Go back to the list":"Повернутися до списку","Hide password":"Приховати пароль",items:"елементи","Message limit of {count} characters reached":"Вичерпано ліміт у {count} символів для повідомлення","More {dashboardItemType} …":"Більше {dashboardItemType}…",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти",Open:"Відкрити","Open navigation":"Відкрити навігацію","Password is secure":"Пароль безпечний","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку","Please select a time zone:":"Виберіть часовий пояс:",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Settings navigation":"Навігація у налаштуваннях","Show password":"Показати пароль","Smileys & Emotion":"Смайли та емоції","Start slideshow":"Почати показ слайдів",Submit:"Надіслати",Symbols:"Символи","Travel & Places":"Поїздки та місця","Type to search time zone":"Введіть для пошуку часовий пояс","Unable to search the group":"Неможливо шукати в групі","Undo changes":"Скасувати зміни","Write message, @ to mention someone, : for emoji autocompletion …":"Напишіть повідомлення, @, щоб згадати когось, : для автозаповнення емодзі…"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然","Anything shared with the same group of people will show up here":"与同组用户分享的所有内容都会显示于此","Avatar of {displayName}":"{displayName}的头像","Avatar of {displayName}, {status}":"{displayName}的头像，{status}","Cancel changes":"取消更改","Change title":"更改标题",Choose:"选择","Clear text":"清除文本",Close:"关闭","Close modal":"关闭窗口","Close navigation":"关闭导航","Close sidebar":"关闭侧边栏","Confirm changes":"确认更改",Custom:"自定义","Edit item":"编辑项目","Error getting related resources":"获取相关资源时出错","Error parsing svg":"解析 svg 时出错","External documentation for {title}":"{title}的外部文档",Favorite:"喜爱",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用",Global:"全局","Go back to the list":"返回至列表","Hide password":"隐藏密码","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制","More items …":"更多项目…",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体",Open:"打开",'Open link to "{resourceTitle}"':'打开"{resourceTitle}"的连接',"Open navigation":"开启导航","Password is secure":"密码安全","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情","Please select a time zone:":"请选择一个时区：",Previous:"上一个","Related resources":"相关资源",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Show password":"显示密码","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Submit:"提交",Symbols:"符号","Travel & Places":"旅游 & 地点","Type to search time zone":"打字以搜索时区","Unable to search the group":"无法搜索分组","Undo changes":"撤销更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'写信息，使用"@"来提及某人，使用":"进行表情符号自动完成 ...'}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然","Anything shared with the same group of people will show up here":"與同一組人共享的任何內容都會顯示在此處","Avatar of {displayName}":"{displayName} 的頭像","Avatar of {displayName}, {status}":"{displayName} 的頭像，{status}","Cancel changes":"取消更改","Change title":"更改標題",Choose:"選擇","Clear text":"清除文本",Close:"關閉","Close modal":"關閉模態","Close navigation":"關閉導航","Close sidebar":"關閉側邊欄","Confirm changes":"確認更改",Custom:"自定義","Edit item":"編輯項目","Error getting related resources":"獲取相關資源出錯","Error parsing svg":"解析 svg 時出錯","External documentation for {title}":"{title} 的外部文檔",Favorite:"喜愛",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用",Global:"全球的","Go back to the list":"返回清單","Hide password":"隱藏密碼","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"更多項目 …",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件",Open:"打開",'Open link to "{resourceTitle}"':"打開指向 “{resourceTitle}” 的鏈結","Open navigation":"開啟導航","Password is secure":"密碼是安全的","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號","Please select a time zone:":"請選擇時區：",Previous:"上一個","Related resources":"相關資源",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Show password":"顯示密碼","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"鍵入以搜索時區","Unable to search the group":"無法搜尋群組","Undo changes":"取消更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'寫訊息，使用 "@" 來指代某人，使用 ":" 用於表情符號自動填充 ...'}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((e=>{const t={};for(const a in e.translations)e.translations[a].pluralId?t[a]={msgid:a,msgid_plural:e.translations[a].pluralId,msgstr:e.translations[a].msgstr}:t[a]={msgid:a,msgstr:[e.translations[a]]};i.addTranslation(e.locale,{translations:{"":t}})}));const n=i.build(),r=(n.ngettext.bind(n),n.gettext.bind(n))},6609:(e,t,a)=>{"use strict";function o(e,t,a){this.r=e,this.g=t,this.b=a}function i(e,t,a){const i=[];i.push(t);const n=function(e,t){const a=new Array(3);return a[0]=(t[1].r-t[0].r)/e,a[1]=(t[1].g-t[0].g)/e,a[2]=(t[1].b-t[0].b)/e,a}(e,[t,a]);for(let a=1;a<e;a++){const e=parseInt(t.r+n[0]*a,10),r=parseInt(t.g+n[1]*a,10),s=parseInt(t.b+n[2]*a,10);i.push(new o(e,r,s))}return i}a.d(t,{Z:()=>n});const n=function(e){e||(e=6);const t=new o(182,70,157),a=new o(221,203,85),n=new o(0,130,201),r=i(e,t,a),s=i(e,a,n),l=i(e,n,t);return r.concat(s).concat(l)}},1206:(e,t,a)=>{"use strict";a.d(t,{L:()=>o});a(4505);const o=function(){return Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap}},7196:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon[data-v-4d05be2c]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-4d05be2c]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:bold;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-4d05be2c],.button-vue span[data-v-4d05be2c]{cursor:pointer}.button-vue[data-v-4d05be2c]:focus{outline:none}.button-vue[data-v-4d05be2c]:disabled{cursor:default;opacity:.5;filter:saturate(0.7)}.button-vue:disabled *[data-v-4d05be2c]{cursor:default}.button-vue[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-4d05be2c]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-4d05be2c]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue__icon[data-v-4d05be2c]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-4d05be2c]{font-weight:bold;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-4d05be2c]{width:44px !important}.button-vue--text-only[data-v-4d05be2c]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-4d05be2c]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-4d05be2c]{padding:0 16px 0 4px}.button-vue--wide[data-v-4d05be2c]{width:100%}.button-vue[data-v-4d05be2c]:focus-visible{outline:2px solid var(--color-main-text) !important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:rgba(0,0,0,0)}.button-vue--vue-primary[data-v-4d05be2c]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-4d05be2c]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-4d05be2c]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-4d05be2c]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color);background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{color:var(--color-primary-element-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-success[data-v-4d05be2c]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-4d05be2c]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-4d05be2c]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-4d05be2c]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-4d05be2c]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-4d05be2c]:active{background-color:var(--color-error)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcButton/NcButton.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kCAAA,CACA,gBAAA,CACA,eCcgB,CDbhB,cCagB,CDZhB,YAAA,CACA,kBAAA,CACA,sBAAA,CAGA,cAAA,CAKA,kBAAA,CACA,uDAAA,CACA,uBAAA,CACA,iCAAA,CAkBA,6CAAA,CACA,mDAAA,CA1BA,iEAEC,cAAA,CAQD,mCACC,YAAA,CAGD,sCACC,cAAA,CAIA,UCIiB,CDFjB,oBAAA,CALA,wCACC,cAAA,CAUF,kDACC,yDAAA,CAKD,oCACC,mDAAA,CAGD,sCACC,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGD,mCACC,WCvCe,CDwCf,UCxCe,CDyCf,eCzCe,CD0Cf,cC1Ce,CD2Cf,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,mCACC,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAID,wCACC,qBAAA,CAID,wCACC,cAAA,CACA,0DACC,eAAA,CACA,gBAAA,CAKF,4CACC,oBAAA,CAID,mCACC,UAAA,CAGD,2CACC,mDAAA,CACA,+EACC,mDAAA,CACA,kCAAA,CACA,8BAAA,CAOF,0CACC,6CAAA,CACA,uCAAA,CACA,+DACC,mDAAA,CAID,iDACC,6CAAA,CAKF,4CACC,6CAAA,CACA,mDAAA,CACA,iEACC,6CAAA,CACA,yDAAA,CAKF,2CACC,4BAAA,CACA,8BAAA,CACA,gEACC,6BAAA,CACA,8CAAA,CAKF,yDACC,4BAAA,CACA,8BAAA,CACA,8EACC,8BAAA,CAKF,sDACC,uCAAA,CACA,8BAAA,CAEA,2EACC,8BAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,wCACC,mCAAA,CACA,UAAA,CACA,6DACC,yCAAA,CAID,+CACC,mCAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.button-vue {\n\tposition: relative;\n\twidth: fit-content;\n\toverflow: hidden;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\tmin-height: $clickable-area;\n\tmin-width: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t// Cursor pointer on element and all children\n\tcursor: pointer;\n\t& *,\n\tspan {\n\t\tcursor: pointer;\n\t}\n\tborder-radius: math.div($clickable-area, 2);\n\ttransition-property: color, border-color, background-color;\n\ttransition-duration: 0.1s;\n\ttransition-timing-function: linear;\n\n\t// No outline feedback for focus. Handled with a toggled class in js (see data)\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:disabled {\n\t\tcursor: default;\n\t\t& * {\n\t\t\tcursor: default;\n\t\t}\n\t\topacity: $opacity_disabled;\n\t\t// Gives a wash out effect\n\t\tfilter: saturate($opacity_normal);\n\t}\n\n\t// Default button type\n\tcolor: var(--color-primary-element-light-text);\n\tbackground-color: var(--color-primary-element-light);\n\t&:hover:not(:disabled) {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\t// Back to the default color for this button when active\n\t// TODO: add ripple effect\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n\n\t&__wrapper {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t&__icon {\n\t\theight: $clickable-area;\n\t\twidth: $clickable-area;\n\t\tmin-height: $clickable-area;\n\t\tmin-width: $clickable-area;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t&__text {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 1px;\n\t\tpadding: 2px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t// Icon-only button\n\t&--icon-only {\n\t\twidth: $clickable-area !important;\n\t}\n\n\t// Text-only button\n\t&--text-only {\n\t\tpadding: 0 12px;\n\t\t& .button-vue__text {\n\t\t\tmargin-left: 4px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n\n\t// Icon and text button\n\t&--icon-and-text {\n\t\tpadding: 0 16px 0 4px;\n\t}\n\n\t// Wide button spans the whole width of the container\n\t&--wide {\n\t\twidth: 100%;\n\t}\n\n\t&:focus-visible {\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t\t&.button-vue--vue-tertiary-on-primary {\n\t\t\toutline: 2px solid var(--color-primary-element-text);\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Button types\n\n\t// Primary\n\t&--vue-primary {\n\t\tbackground-color: var(--color-primary-element);\n\t\tcolor: var(--color-primary-element-text);\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-primary-element-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t// Secondary\n\t&--vue-secondary {\n\t\tcolor: var(--color-primary-element-light-text);\n\t\tbackground-color: var(--color-primary-element-light);\n\t\t&:hover:not(:disabled) {\n\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t}\n\t}\n\n\t// Tertiary\n\t&--vue-tertiary {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color);\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n\n\t// Tertiary, no background\n\t&--vue-tertiary-no-background {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Tertiary on primary color (like the header)\n\t&--vue-tertiary-on-primary {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: transparent;\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Success\n\t&--vue-success {\n\t\tbackground-color: var(--color-success);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-success-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// : add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t}\n\n\t// Warning\n\t&--vue-warning {\n\t\tbackground-color: var(--color-warning);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-warning-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-warning);\n\t\t}\n\t}\n\n\t// Error\n\t&--vue-error {\n\t\tbackground-color: var(--color-error);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-error-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},3246:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon[data-v-6cccc0ac]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.color-picker[data-v-6cccc0ac]{display:flex;overflow:hidden;align-content:flex-end;flex-direction:column;justify-content:space-between;box-sizing:content-box !important;width:176px;padding:8px;border-radius:3px}.color-picker--advanced-fields[data-v-6cccc0ac]{width:264px}.color-picker__simple[data-v-6cccc0ac]{display:grid;grid-template-columns:repeat(auto-fit, 44px);grid-auto-rows:44px}.color-picker__simple-color-circle[data-v-6cccc0ac]{display:flex;align-items:center;justify-content:center;width:34px;height:34px;min-height:34px;margin:auto;padding:0;color:#fff;border:1px solid rgba(0,0,0,.25);border-radius:50%;font-size:16px}.color-picker__simple-color-circle[data-v-6cccc0ac]:hover{opacity:.6}.color-picker__simple-color-circle--active[data-v-6cccc0ac]{width:38px;height:38px;min-height:38px;transition:all 100ms ease-in-out;opacity:1 !important}.color-picker__advanced[data-v-6cccc0ac]{box-shadow:none !important}.color-picker__navigation[data-v-6cccc0ac]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}[data-v-6cccc0ac]  .vc-chrome{width:unset;background-color:var(--color-main-background)}[data-v-6cccc0ac]  .vc-chrome-color-wrap{width:30px;height:30px}[data-v-6cccc0ac]  .vc-chrome-active-color{width:34px;height:34px;border-radius:17px}[data-v-6cccc0ac]  .vc-chrome-body{padding:14px 0 0 0;background-color:var(--color-main-background)}[data-v-6cccc0ac]  .vc-chrome-body .vc-input__input{box-shadow:none}[data-v-6cccc0ac]  .vc-chrome-toggle-btn{filter:var(--background-invert-if-dark)}[data-v-6cccc0ac]  .vc-chrome-saturation-wrap{border-radius:3px}[data-v-6cccc0ac]  .vc-chrome-saturation-circle{width:20px;height:20px}.slide-enter[data-v-6cccc0ac]{transform:translateX(-50%);opacity:0}.slide-enter-to[data-v-6cccc0ac]{transform:translateX(0);opacity:1}.slide-leave[data-v-6cccc0ac]{transform:translateX(0);opacity:1}.slide-leave-to[data-v-6cccc0ac]{transform:translateX(-50%);opacity:0}.slide-enter-active[data-v-6cccc0ac],.slide-leave-active[data-v-6cccc0ac]{transition:all 50ms ease-in-out}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcColorPicker/NcColorPicker.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,+BACC,YAAA,CACA,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,6BAAA,CACA,iCAAA,CACA,WAAA,CACA,WAAA,CACA,iBAAA,CAEA,gDACC,WAAA,CAGD,uCACC,YAAA,CACA,4CAAA,CACA,mBCKe,CDHf,oDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,SAAA,CACA,UAAA,CACA,gCAAA,CACA,iBAAA,CACA,cAAA,CACA,0DACC,UAAA,CAED,4DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,gCAAA,CACA,oBAAA,CAKH,yCACC,0BAAA,CAGD,2CACC,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,eAAA,CAKD,8BACC,WAAA,CACA,6CAAA,CAEA,yCACC,UAAA,CACA,WAAA,CAGD,2CACC,UAAA,CACA,WAAA,CACA,kBAAA,CAGD,mCACC,kBAAA,CACA,6CAAA,CACA,oDACC,eAAA,CAIF,yCACC,uCAAA,CAIA,8CACC,iBAAA,CAGD,gDACC,UAAA,CACA,WAAA,CAOH,8BACC,0BAAA,CACA,SAAA,CAED,iCACC,uBAAA,CACA,SAAA,CAED,8BACC,uBAAA,CACA,SAAA,CAED,iCACC,0BAAA,CACA,SAAA,CAED,0EAEC,+BAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n.color-picker {\n\tdisplay: flex;\n\toverflow: hidden;\n\talign-content: flex-end;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbox-sizing: content-box !important;\n\twidth: 176px;\n\tpadding: 8px;\n\tborder-radius: 3px;\n\n\t&--advanced-fields {\n\t\twidth: 264px;\n\t}\n\n\t&__simple {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fit, $clickable-area);\n\t\tgrid-auto-rows: $clickable-area;\n\n\t\t&-color-circle {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 34px;\n\t\t\theight: 34px;\n\t\t\tmin-height: 34px;\n\t\t\tmargin: auto;\n\t\t\tpadding: 0;\n\t\t\tcolor: white;\n\t\t\tborder: 1px solid rgba(0, 0, 0, 0.25);\n\t\t\tborder-radius: 50%;\n\t\t\tfont-size: 16px;\n\t\t\t&:hover {\n\t\t\t\topacity: .6;\n\t\t\t}\n\t\t\t&--active {\n\t\t\t\twidth: 38px;\n\t\t\t\theight: 38px;\n\t\t\t\tmin-height: 38px;\n\t\t\t\ttransition: all 100ms ease-in-out;\n\t\t\t\topacity: 1 !important;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__advanced {\n\t\tbox-shadow: none !important;\n\t}\n\n\t&__navigation {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 10px;\n\t}\n}\n\n:deep() .vc {\n\t&-chrome {\n\t\twidth: unset;\n\t\tbackground-color: var(--color-main-background);\n\n\t\t&-color-wrap {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t}\n\n\t\t&-active-color {\n\t\t\twidth: 34px;\n\t\t\theight: 34px;\n\t\t\tborder-radius: 17px;\n\t\t}\n\n\t\t&-body {\n\t\t\tpadding: 14px 0 0 0;\n\t\t\tbackground-color: var(--color-main-background);\n\t\t\t.vc-input__input {\n\t\t\t\tbox-shadow: none;\n\t\t\t}\n\t\t}\n\n\t\t&-toggle-btn {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\n\t\t&-saturation {\n\t\t\t&-wrap {\n\t\t\t\tborder-radius: 3px;\n\t\t\t}\n\n\t\t\t&-circle {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.slide {\n\t&-enter {\n\t\ttransform: translateX(-50%);\n\t\topacity: 0;\n\t}\n\t&-enter-to {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\t&-leave {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\t&-leave-to {\n\t\ttransform: translateX(-50%);\n\t\topacity: 0;\n\t}\n\t&-enter-active,\n\t&-leave-active {\n\t\ttransition: all 50ms ease-in-out;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},1625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:rgba(0,0,0,0);pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown.v-popper__popper{z-index:100000;top:0;left:0;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-dropdown.v-popper__popper .v-popper__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius-large);overflow:hidden;background:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{left:-10px;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity var(--animation-quick);opacity:1}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcPopover/NcPopover.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,iBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CAGD,wBACC,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,UAAA,CAMA,2CACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CAEA,sDAAA,CAEA,4DACC,SAAA,CACA,4BAAA,CACA,wCAAA,CACA,eAAA,CACA,uCAAA,CAGD,sEACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBA1BW,CA6BZ,kGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAGD,qGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAGD,oGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAGD,mGACC,WAAA,CACA,oBAAA,CACA,8CAAA,CAGD,6DACC,iBAAA,CACA,2EAAA,CACA,SAAA,CAGD,8DACC,kBAAA,CACA,yCAAA,CACA,SAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.resize-observer {\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:-1;\n\twidth:100%;\n\theight:100%;\n\tborder:none;\n\tbackground-color:transparent;\n\tpointer-events:none;\n\tdisplay:block;\n\toverflow:hidden;\n\topacity:0\n}\n\n.resize-observer object {\n\tdisplay:block;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\theight:100%;\n\twidth:100%;\n\toverflow:hidden;\n\tpointer-events:none;\n\tz-index:-1\n}\n\n$arrow-width: 10px;\n\n.v-popper--theme-dropdown {\n\t&.v-popper__popper {\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block !important;\n\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t.v-popper__inner {\n\t\t\tpadding: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--color-main-background);\n\t\t}\n\n\t\t.v-popper__arrow-container {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: transparent;\n\t\t\tborder-width: $arrow-width;\n\t\t}\n\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tleft: -$arrow-width;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tright: -$arrow-width;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",o=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),o&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),o&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,o,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(void 0!==n&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=n),a&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=a):u[2]=a),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),n="/*# ".concat(i," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},3379:e=>{"use strict";var t=[];function a(e){for(var a=-1,o=0;o<t.length;o++)if(t[o].identifier===e){a=o;break}return a}function o(e,o){for(var n={},r=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1;var m=a(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var g=i(p,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:g,references:1})}r.push(d)}return r}function i(e,t){var a=t.domAPI(t);a.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var n=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var s=a(n[r]);t[s].references--}for(var l=o(e,i),c=0;c<n.length;c++){var u=a(n[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}n=l}}},569:e=>{"use strict";var t={};e.exports=function(e,a){var o=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,a)=>{"use strict";e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,i&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},2102:()=>{},1554:()=>{},2405:()=>{},1900:(e,t,a)=>{"use strict";function o(e,t,a,o,i,n,r,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}a.d(t,{Z:()=>o})},7931:e=>{"use strict";e.exports=__webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},9454:e=>{"use strict";e.exports=__webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js")},4505:e=>{"use strict";e.exports=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js")},6921:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/ArrowLeft.vue */ "./node_modules/vue-material-design-icons/ArrowLeft.vue")},6915:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue")},1441:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue")}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var o={};return(()=>{"use strict";a.r(o),a.d(o,{default:()=>B});var e=a(4462),t=a(2297),i=a(932),n=a(6609),r=a(6921),s=a.n(r),l=a(6915),c=a.n(l),u=a(1441),d=a.n(u);const m=__webpack_require__(/*! vue-color */ "./node_modules/vue-color/dist/vue-color.min.js"),p=function(e){const t=e.toString(16);return 1===t.length?"0"+t:t},g={name:"NcColorPicker",components:{ArrowLeft:s(),Check:c(),Chrome:m.Chrome,DotsHorizontal:d(),NcButton:e.default,NcPopover:t.default},props:{value:{type:String,required:!0},advancedFields:{type:Boolean,default:!1},palette:{type:Array,default:()=>(0,n.Z)(4).map((e=>"#"+p(e.r)+p(e.g)+p(e.b))),validator:e=>e.every((e=>/^#([a-f0-9]{3}|[a-f0-9]{6})$/i.test(e)))}},emits:["submit","close","update:open","update:value","input"],data(){return{currentColor:this.value,advanced:!1,ariaBack:(0,i.t)("Back"),ariaMore:(0,i.t)("More options")}},watch:{value(e){this.currentColor=e}},methods:{t:i.t,handleConfirm(){this.$emit("submit",this.currentColor),this.handleClose(),this.advanced=!1},handleClose(){this.$emit("close"),this.$emit("update:open",!1)},handleBack(){this.advanced=!1},handleMoreSettings(){this.advanced=!0},pickColor(e){"string"!=typeof e&&(e=this.currentColor.hex),this.currentColor=e,this.$emit("update:value",e),this.$emit("input",e)}}};var A=a(3379),h=a.n(A),v=a(7795),b=a.n(v),C=a(569),y=a.n(C),f=a(3565),k=a.n(f),S=a(9216),w=a.n(S),z=a(4589),j=a.n(z),N=a(3246),P={};P.styleTagTransform=j(),P.setAttributes=k(),P.insert=y().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=w();h()(N.Z,P);N.Z&&N.Z.locals&&N.Z.locals;var x=a(1900),E=a(1554),T=a.n(E),F=(0,x.Z)(g,(function(){var e=this,t=e._self._c;return t("NcPopover",e._g(e._b({on:{"apply-hide":e.handleClose},scopedSlots:e._u([{key:"trigger",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[e._v(" "),t("div",{staticClass:"color-picker",class:{"color-picker--advanced-fields":e.advanced&&e.advancedFields}},[t("transition",{attrs:{name:"slide",mode:"out-in"}},[e.advanced?e._e():t("div",{staticClass:"color-picker__simple"},e._l(e.palette,(function(a,o){return t("button",{key:o,staticClass:"color-picker__simple-color-circle",class:{"color-picker__simple-color-circle--active":a===e.currentColor},style:{"background-color":a},attrs:{type:"button"},on:{click:function(t){return e.pickColor(a)}}},[a===e.currentColor?t("Check",{attrs:{size:20}}):e._e()],1)})),0),e._v(" "),e.advanced?t("Chrome",{staticClass:"color-picker__advanced",attrs:{"disable-alpha":!0,"disable-fields":!e.advancedFields},on:{input:e.pickColor},model:{value:e.currentColor,callback:function(t){e.currentColor=t},expression:"currentColor"}}):e._e()],1),e._v(" "),t("div",{staticClass:"color-picker__navigation"},[e.advanced?t("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaBack},on:{click:e.handleBack},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}):e._e(),e._v(" "),e.advanced?e._e():t("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaMore},on:{click:e.handleMoreSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[t("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1056868794)}),e._v(" "),e.advanced?t("NcButton",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("\n\t\t\t\t"+e._s(e.t("Choose"))+"\n\t\t\t")]):e._e()],1)],1)])}),[],!1,null,"6cccc0ac",null);"function"==typeof T()&&T()(F);const B=F.exports})(),o})()));
//# sourceMappingURL=NcColorPicker.js.map

/***/ }),

/***/ "./apps/theming/src/admin-settings.js":
/*!********************************************!*\
  !*** ./apps/theming/src/admin-settings.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _AdminTheming_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTheming.vue */ "./apps/theming/src/AdminTheming.vue");
/* harmony import */ var _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/refreshStyles.js */ "./apps/theming/src/helpers/refreshStyles.js");
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
var View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_AdminTheming_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
var theming = new View();
theming.$mount('#admin-theming');
theming.$on('update:theming', _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__.refreshStyles);

/***/ }),

/***/ "./apps/theming/src/helpers/refreshStyles.js":
/*!***************************************************!*\
  !*** ./apps/theming/src/helpers/refreshStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshStyles: function() { return /* binding */ refreshStyles; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var refreshStyles = function refreshStyles() {
  // Refresh server-side generated theming CSS
  _toConsumableArray(document.head.querySelectorAll('link.theme')).forEach(function (theme) {
    var url = new URL(theme.href);
    url.searchParams.set('v', Date.now());
    var newTheme = theme.cloneNode();
    newTheme.href = url.toString();
    newTheme.onload = function () {
      return theme.remove();
    };
    document.head.append(newTheme);
  });
};

/***/ }),

/***/ "./apps/theming/src/mixins/admin/FieldMixin.js":
/*!*****************************************************!*\
  !*** ./apps/theming/src/mixins/admin/FieldMixin.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var styleRefreshFields = ['color', 'logo', 'background', 'logoheader', 'favicon', 'disable-user-theming'];
/* harmony default export */ __webpack_exports__["default"] = ({
  emits: ['update:theming'],
  data: function data() {
    return {
      showSuccess: false,
      errorMessage: ''
    };
  },
  computed: {
    id: function id() {
      return "admin-theming-".concat(this.name);
    }
  },
  methods: {
    reset: function reset() {
      this.showSuccess = false;
      this.errorMessage = '';
    },
    handleSuccess: function handleSuccess() {
      var _this = this;
      this.showSuccess = true;
      setTimeout(function () {
        _this.showSuccess = false;
      }, 2000);
      if (styleRefreshFields.includes(this.name)) {
        this.$emit('update:theming');
      }
    }
  }
});

/***/ }),

/***/ "./apps/theming/src/mixins/admin/TextValueMixin.js":
/*!*********************************************************!*\
  !*** ./apps/theming/src/mixins/admin/TextValueMixin.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _FieldMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldMixin.js */ "./apps/theming/src/mixins/admin/FieldMixin.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_FieldMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  watch: {
    value: function value(_value) {
      this.localValue = _value;
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  methods: {
    save: function save() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, valueToPost, _e$response$data$data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.reset();
              url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/updateStylesheet'); // Convert boolean to string as server expects string value
              valueToPost = _this.localValue === true ? 'yes' : _this.localValue === false ? 'no' : _this.localValue;
              _context.prev = 3;
              _context.next = 6;
              return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
                setting: _this.name,
                value: valueToPost
              });
            case 6:
              _this.$emit('update:value', _this.localValue);
              _this.handleSuccess();
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              _this.errorMessage = (_e$response$data$data = _context.t0.response.data.data) === null || _e$response$data$data === void 0 ? void 0 : _e$response$data$data.message;
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 10]]);
      }))();
    },
    undo: function undo() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, _e$response$data$data2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.reset();
              url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/undoChanges');
              _context2.prev = 2;
              _context2.next = 5;
              return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
                setting: _this2.name
              });
            case 5:
              _this2.$emit('update:value', _this2.defaultValue);
              _this2.handleSuccess();
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              _this2.errorMessage = (_e$response$data$data2 = _context2.t0.response.data.data) === null || _e$response$data$data2 === void 0 ? void 0 : _e$response$data$data2.message;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_CheckboxField_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/CheckboxField.vue */ "./apps/theming/src/components/admin/CheckboxField.vue");
/* harmony import */ var _components_admin_ColorPickerField_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/ColorPickerField.vue */ "./apps/theming/src/components/admin/ColorPickerField.vue");
/* harmony import */ var _components_admin_FileInputField_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/FileInputField.vue */ "./apps/theming/src/components/admin/FileInputField.vue");
/* harmony import */ var _components_admin_TextField_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/TextField.vue */ "./apps/theming/src/components/admin/TextField.vue");







var _loadState = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('theming', 'adminThemingParameters'),
  backgroundMime = _loadState.backgroundMime,
  canThemeIcons = _loadState.canThemeIcons,
  color = _loadState.color,
  docUrl = _loadState.docUrl,
  docUrlIcons = _loadState.docUrlIcons,
  faviconMime = _loadState.faviconMime,
  isThemable = _loadState.isThemable,
  legalNoticeUrl = _loadState.legalNoticeUrl,
  logoheaderMime = _loadState.logoheaderMime,
  logoMime = _loadState.logoMime,
  name = _loadState.name,
  notThemableErrorMessage = _loadState.notThemableErrorMessage,
  privacyPolicyUrl = _loadState.privacyPolicyUrl,
  slogan = _loadState.slogan,
  url = _loadState.url,
  userThemingDisabled = _loadState.userThemingDisabled;
var textFields = [{
  name: 'name',
  value: name,
  defaultValue: 'Nextcloud',
  type: 'text',
  displayName: t('theming', 'Name'),
  placeholder: t('theming', 'Name'),
  maxlength: 250
}, {
  name: 'url',
  value: url,
  defaultValue: 'https://nextcloud.com',
  type: 'url',
  displayName: t('theming', 'Web link'),
  placeholder: 'https://…',
  maxlength: 500
}, {
  name: 'slogan',
  value: slogan,
  defaultValue: t('theming', 'a safe home for all your data'),
  type: 'text',
  displayName: t('theming', 'Slogan'),
  placeholder: t('theming', 'Slogan'),
  maxlength: 500
}];
var colorPickerField = {
  name: 'color',
  value: color,
  defaultValue: '#0082c9',
  displayName: t('theming', 'Color')
};
var fileInputFields = [{
  name: 'logo',
  mimeName: 'logoMime',
  mimeValue: logoMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Logo'),
  ariaLabel: t('theming', 'Upload new logo')
}, {
  name: 'background',
  mimeName: 'backgroundMime',
  mimeValue: backgroundMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Background and login image'),
  ariaLabel: t('theming', 'Upload new background and login image')
}];
var advancedTextFields = [{
  name: 'imprintUrl',
  value: legalNoticeUrl,
  defaultValue: '',
  type: 'url',
  displayName: t('theming', 'Legal notice link'),
  placeholder: 'https://…',
  maxlength: 500
}, {
  name: 'privacyUrl',
  value: privacyPolicyUrl,
  defaultValue: '',
  type: 'url',
  displayName: t('theming', 'Privacy policy link'),
  placeholder: 'https://…',
  maxlength: 500
}];
var advancedFileInputFields = [{
  name: 'logoheader',
  mimeName: 'logoheaderMime',
  mimeValue: logoheaderMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Header logo'),
  ariaLabel: t('theming', 'Upload new header logo')
}, {
  name: 'favicon',
  mimeName: 'faviconMime',
  mimeValue: faviconMime,
  defaultMimeValue: '',
  displayName: t('theming', 'Favicon'),
  ariaLabel: t('theming', 'Upload new favicon')
}];
var userThemingField = {
  name: 'disable-user-theming',
  value: userThemingDisabled,
  defaultValue: false,
  displayName: t('theming', 'User settings'),
  label: t('theming', 'Disable user theming'),
  description: t('theming', 'Although you can select and customize your instance, users can change their background and colors. If you want to enforce your customization, you can toggle this on.')
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdminTheming',
  components: {
    CheckboxField: _components_admin_CheckboxField_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ColorPickerField: _components_admin_ColorPickerField_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileInputField: _components_admin_FileInputField_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_2___default()),
    TextField: _components_admin_TextField_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  emits: ['update:theming'],
  data: function data() {
    return {
      textFields: textFields,
      colorPickerField: colorPickerField,
      fileInputFields: fileInputFields,
      advancedTextFields: advancedTextFields,
      advancedFileInputFields: advancedFileInputFields,
      userThemingField: userThemingField,
      canThemeIcons: canThemeIcons,
      docUrl: docUrl,
      docUrlIcons: docUrlIcons,
      isThemable: isThemable,
      notThemableErrorMessage: notThemableErrorMessage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CheckboxField',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_0___default()),
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1___default())
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    defaultValue: {
      type: Boolean,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcColorPicker.js */ "./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/UndoVariant.vue */ "./node_modules/vue-material-design-icons/UndoVariant.vue");
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorPickerField',
  components: {
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1___default()),
    NcColorPicker: (_nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_3___default()),
    Undo: vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    }
  },
  methods: {
    debounceSave: (0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.save();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    })), 200)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/UndoVariant.vue */ "./node_modules/vue-material-design-icons/UndoVariant.vue");
/* harmony import */ var vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Upload.vue */ "./node_modules/vue-material-design-icons/Upload.vue");
/* harmony import */ var _mixins_admin_FieldMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/admin/FieldMixin.js */ "./apps/theming/src/mixins/admin/FieldMixin.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var _loadState = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('theming', 'adminThemingParameters', {}),
  allowedMimeTypes = _loadState.allowedMimeTypes;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileInputField',
  components: {
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcLoadingIcon: (_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4___default()),
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_5___default()),
    Undo: vue_material_design_icons_UndoVariant_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Upload: vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixins_admin_FieldMixin_js__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    mimeName: {
      type: String,
      required: true
    },
    mimeValue: {
      type: String,
      required: true
    },
    defaultMimeValue: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      showLoading: false,
      acceptMime: (allowedMimeTypes[this.name] || ['image/jpeg', 'image/png', 'image/gif', 'image/webp']).join(',')
    };
  },
  computed: {
    showReset: function showReset() {
      return this.mimeValue !== this.defaultMimeValue;
    },
    showRemove: function showRemove() {
      if (this.name === 'background') {
        if (this.mimeValue.startsWith('image/')) {
          return true;
        }
        if (this.mimeValue === this.defaultMimeValue) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    activateLocalFilePicker: function activateLocalFilePicker() {
      this.reset();
      // Set to null so that selecting the same file will trigger the change event
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
    onChange: function onChange(e) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var file, formData, url, _e$response$data$data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              file = e.target.files[0];
              formData = new FormData();
              formData.append('key', _this.name);
              formData.append('image', file);
              url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/uploadImage');
              _context.prev = 5;
              _this.showLoading = true;
              _context.next = 9;
              return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formData);
            case 9:
              _this.showLoading = false;
              _this.$emit('update:mime-value', file.type);
              _this.handleSuccess();
              _context.next = 18;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](5);
              _this.showLoading = false;
              _this.errorMessage = (_e$response$data$data = _context.t0.response.data.data) === null || _e$response$data$data === void 0 ? void 0 : _e$response$data$data.message;
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[5, 14]]);
      }))();
    },
    undo: function undo() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url, _e$response$data$data2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.reset();
              url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/undoChanges');
              _context2.prev = 2;
              _context2.next = 5;
              return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
                setting: _this2.mimeName
              });
            case 5:
              _this2.$emit('update:mime-value', _this2.defaultMimeValue);
              _this2.handleSuccess();
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              _this2.errorMessage = (_e$response$data$data2 = _context2.t0.response.data.data) === null || _e$response$data$data2 === void 0 ? void 0 : _e$response$data$data2.message;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 9]]);
      }))();
    },
    removeBackground: function removeBackground() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var url, _e$response$data$data3;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.reset();
              url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/theming/ajax/updateStylesheet');
              _context3.prev = 2;
              _context3.next = 5;
              return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
                setting: _this3.mimeName,
                value: 'backgroundColor'
              });
            case 5:
              _this3.$emit('update:mime-value', 'backgroundColor');
              _this3.handleSuccess();
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              _this3.errorMessage = (_e$response$data$data3 = _context3.t0.response.data.data) === null || _e$response$data$data3 === void 0 ? void 0 : _e$response$data$data3.message;
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/admin/TextValueMixin.js */ "./apps/theming/src/mixins/admin/TextValueMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextField',
  components: {
    NcTextField: (_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_0___default())
  },
  mixins: [_mixins_admin_TextValueMixin_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    maxlength: {
      type: Number,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", [_c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Theming"),
      description: _vm.t("theming", "Theming makes it possible to easily customize the look and feel of your instance and supported clients. This will be visible for all users."),
      "doc-url": _vm.docUrl,
      "data-admin-theming-settings": ""
    }
  }, [_c("div", {
    staticClass: "admin-theming"
  }, [!_vm.isThemable ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.notThemableErrorMessage))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.textFields, function (field) {
    return _c("TextField", {
      key: field.name,
      attrs: {
        "data-admin-theming-setting-field": field.name,
        "default-value": field.defaultValue,
        "display-name": field.displayName,
        maxlength: field.maxlength,
        name: field.name,
        placeholder: field.placeholder,
        type: field.type,
        value: field.value
      },
      on: {
        "update:value": function updateValue($event) {
          return _vm.$set(field, "value", $event);
        },
        "update:theming": function updateTheming($event) {
          return _vm.$emit("update:theming");
        }
      }
    });
  }), _vm._v(" "), _c("ColorPickerField", {
    attrs: {
      name: _vm.colorPickerField.name,
      "default-value": _vm.colorPickerField.defaultValue,
      "display-name": _vm.colorPickerField.displayName,
      value: _vm.colorPickerField.value,
      "data-admin-theming-setting-primary-color": ""
    },
    on: {
      "update:value": function updateValue($event) {
        return _vm.$set(_vm.colorPickerField, "value", $event);
      },
      "update:theming": function updateTheming($event) {
        return _vm.$emit("update:theming");
      }
    }
  }), _vm._v(" "), _vm._l(_vm.fileInputFields, function (field) {
    return _c("FileInputField", {
      key: field.name,
      attrs: {
        "aria-label": field.ariaLabel,
        "data-admin-theming-setting-file": field.name,
        "default-mime-value": field.defaultMimeValue,
        "display-name": field.displayName,
        "mime-name": field.mimeName,
        "mime-value": field.mimeValue,
        name: field.name
      },
      on: {
        "update:mimeValue": function updateMimeValue($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:mime-value": function updateMimeValue($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:theming": function updateTheming($event) {
          return _vm.$emit("update:theming");
        }
      }
    });
  }), _vm._v(" "), _c("div", {
    staticClass: "admin-theming__preview",
    attrs: {
      "data-admin-theming-preview": ""
    }
  }, [_c("div", {
    staticClass: "admin-theming__preview-logo",
    attrs: {
      "data-admin-theming-preview-logo": ""
    }
  })])], 2)]), _vm._v(" "), _c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Advanced options")
    }
  }, [_c("div", {
    staticClass: "admin-theming-advanced"
  }, [_vm._l(_vm.advancedTextFields, function (field) {
    return _c("TextField", {
      key: field.name,
      attrs: {
        name: field.name,
        value: field.value,
        "default-value": field.defaultValue,
        type: field.type,
        "display-name": field.displayName,
        placeholder: field.placeholder,
        maxlength: field.maxlength
      },
      on: {
        "update:value": function updateValue($event) {
          return _vm.$set(field, "value", $event);
        },
        "update:theming": function updateTheming($event) {
          return _vm.$emit("update:theming");
        }
      }
    });
  }), _vm._v(" "), _vm._l(_vm.advancedFileInputFields, function (field) {
    return _c("FileInputField", {
      key: field.name,
      attrs: {
        name: field.name,
        "mime-name": field.mimeName,
        "mime-value": field.mimeValue,
        "default-mime-value": field.defaultMimeValue,
        "display-name": field.displayName,
        "aria-label": field.ariaLabel
      },
      on: {
        "update:mimeValue": function updateMimeValue($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:mime-value": function updateMimeValue($event) {
          return _vm.$set(field, "mimeValue", $event);
        },
        "update:theming": function updateTheming($event) {
          return _vm.$emit("update:theming");
        }
      }
    });
  }), _vm._v(" "), _c("CheckboxField", {
    attrs: {
      name: _vm.userThemingField.name,
      value: _vm.userThemingField.value,
      "default-value": _vm.userThemingField.defaultValue,
      "display-name": _vm.userThemingField.displayName,
      label: _vm.userThemingField.label,
      description: _vm.userThemingField.description,
      "data-admin-theming-setting-disable-user-theming": ""
    },
    on: {
      "update:theming": function updateTheming($event) {
        return _vm.$emit("update:theming");
      }
    }
  }), _vm._v(" "), !_vm.canThemeIcons ? _c("a", {
    attrs: {
      href: _vm.docUrlIcons,
      rel: "noreferrer noopener"
    }
  }, [_c("em", [_vm._v(_vm._s(_vm.t("theming", "Install the ImageMagick PHP extension with support for SVG images to automatically generate favicons based on the uploaded logo and color.")))])]) : _vm._e()], 2)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      id: _vm.id,
      checked: _vm.localValue
    },
    on: {
      "update:checked": [function ($event) {
        _vm.localValue = $event;
      }, _vm.save]
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.label) + "\n\t\t")])], 1), _vm._v(" "), _c("p", {
    staticClass: "field__description"
  }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcColorPicker", {
    attrs: {
      value: _vm.localValue,
      "advanced-fields": true
    },
    on: {
      "update:value": [function ($event) {
        _vm.localValue = $event;
      }, _vm.debounceSave]
    }
  }, [_c("NcButton", {
    staticClass: "field__button",
    attrs: {
      type: "primary",
      id: _vm.id,
      "aria-label": _vm.t("theming", "Select a custom color"),
      "data-admin-theming-setting-primary-color-picker": ""
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.value) + "\n\t\t\t")])], 1), _vm._v(" "), _vm.value !== _vm.defaultValue ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Reset to default"),
      "data-admin-theming-setting-primary-color-reset": ""
    },
    on: {
      click: _vm.undo
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("Undo", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 33666776)
  }) : _vm._e()], 1), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("label", {
    attrs: {
      for: _vm.id
    }
  }, [_vm._v(_vm._s(_vm.displayName))]), _vm._v(" "), _c("div", {
    staticClass: "field__row"
  }, [_c("NcButton", {
    attrs: {
      type: "secondary",
      id: _vm.id,
      "aria-label": _vm.ariaLabel,
      "data-admin-theming-setting-file-picker": ""
    },
    on: {
      click: _vm.activateLocalFilePicker
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("Upload", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "Upload")) + "\n\t\t")]), _vm._v(" "), _vm.showReset ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Reset to default"),
      "data-admin-theming-setting-file-reset": ""
    },
    on: {
      click: _vm.undo
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("Undo", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 33666776)
  }) : _vm._e(), _vm._v(" "), _vm.showRemove ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("theming", "Remove background image"),
      "data-admin-theming-setting-file-remove": ""
    },
    on: {
      click: _vm.removeBackground
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function fn() {
        return [_c("Delete", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 2705356561)
  }) : _vm._e(), _vm._v(" "), _vm.showLoading ? _c("NcLoadingIcon", {
    staticClass: "field__loading-icon",
    attrs: {
      size: 20
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.name === "logoheader" || _vm.name === "favicon") && _vm.mimeValue !== _vm.defaultMimeValue ? _c("div", {
    staticClass: "field__preview",
    class: {
      "field__preview--logoheader": _vm.name === "logoheader",
      "field__preview--favicon": _vm.name === "favicon"
    }
  }) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c("NcNoteCard", {
    attrs: {
      type: "error",
      "show-alert": true
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "input",
    attrs: {
      accept: _vm.acceptMime,
      type: "file"
    },
    on: {
      change: _vm.onChange
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "field"
  }, [_c("NcTextField", {
    attrs: {
      value: _vm.localValue,
      label: _vm.displayName,
      "label-visible": true,
      placeholder: _vm.placeholder,
      type: _vm.type,
      maxlength: _vm.maxlength,
      spellcheck: false,
      success: _vm.showSuccess,
      error: Boolean(_vm.errorMessage),
      "helper-text": _vm.errorMessage,
      "show-trailing-button": _vm.value !== _vm.defaultValue,
      "trailing-button-icon": "undo"
    },
    on: {
      "update:value": function updateValue($event) {
        _vm.localValue = $event;
      },
      "trailing-button-click": _vm.undo,
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.save.apply(null, arguments);
      },
      blur: _vm.save
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../core/img/logo/logo.svg */ "./core/img/logo/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".admin-theming[data-v-c42c152c],\n.admin-theming-advanced[data-v-c42c152c] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px 0;\n}\n.admin-theming__preview[data-v-c42c152c] {\n  width: 230px;\n  height: 140px;\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n  margin-top: 10px;\n  /* This is basically https://github.com/nextcloud/server/blob/master/core/css/guest.css\n     But without the user variables. That way the admin can preview the render as guest*/\n  /* As guest, there is no user color color-background-plain */\n  background-color: var(--color-primary-element-default, #0082c9);\n  /* As guest, there is no user background (--image-background)\n  1. Empty background if defined\n  2. Else default background\n  3. Finally default gradient (should not happened, the background is always defined anyway) */\n  background-image: var(--image-background-plain, var(--image-background-default, linear-gradient(40deg, #0082c9 0%, #30b6ff 100%)));\n}\n.admin-theming__preview-logo[data-v-c42c152c] {\n  width: 20%;\n  height: 20%;\n  margin-top: 20px;\n  display: inline-block;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: var(--image-logo, url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "));\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\n *\n * @author Christopher Ng <chrng8@gmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.field[data-v-2f632a9e] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px 0;\n}\n.field__row[data-v-2f632a9e] {\n  display: flex;\n  gap: 0 4px;\n}\n.field__description[data-v-2f632a9e] {\n  color: var(--color-text-maxcontrast);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\n *\n * @author Christopher Ng <chrng8@gmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.field[data-v-041d23df] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px 0;\n}\n.field__row[data-v-041d23df] {\n  display: flex;\n  gap: 0 4px;\n}\n.field__button[data-v-041d23df] {\n  width: 230px !important;\n  border-radius: var(--border-radius-large) !important;\n  background-color: var(--color-primary-default) !important;\n}\n.field__button[data-v-041d23df]:hover::after {\n  background-color: white;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0.2;\n  filter: var(--primary-invert-if-bright);\n}\n.field__button[data-v-041d23df] * {\n  z-index: 1;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * @copyright 2022 Christopher Ng <chrng8@gmail.com>\n *\n * @author Christopher Ng <chrng8@gmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n.field[data-v-1856abbc] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px 0;\n}\n.field__row[data-v-1856abbc] {\n  display: flex;\n  gap: 0 4px;\n}\n.field__loading-icon[data-v-1856abbc] {\n  width: 44px;\n  height: 44px;\n}\n.field__preview[data-v-1856abbc] {\n  width: 70px;\n  height: 70px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 10px 0;\n}\n.field__preview--logoheader[data-v-1856abbc] {\n  background-image: var(--image-logoheader);\n}\n.field__preview--favicon[data-v-1856abbc] {\n  background-image: var(--image-favicon);\n}\ninput[type=file][data-v-1856abbc] {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".field[data-v-495c4cf2] {\n  max-width: 400px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue":
/*!*******************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true& */ "./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true&");
/* harmony import */ var _AdminTheming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=script&lang=js& */ "./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& */ "./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminTheming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c42c152c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/AdminTheming.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue":
/*!*************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true& */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true&");
/* harmony import */ var _CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js&");
/* harmony import */ var _CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& */ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f632a9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/CheckboxField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue":
/*!****************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true& */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true&");
/* harmony import */ var _ColorPickerField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js&");
/* harmony import */ var _ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& */ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorPickerField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "041d23df",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/ColorPickerField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue":
/*!**************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=template&id=1856abbc&scoped=true& */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true&");
/* harmony import */ var _FileInputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& */ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileInputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1856abbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/FileInputField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue":
/*!*********************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField.vue?vue&type=template&id=495c4cf2&scoped=true& */ "./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true&");
/* harmony import */ var _TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js&");
/* harmony import */ var _TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& */ "./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "495c4cf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/admin/TextField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Upload.vue":
/*!***********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Upload.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload.vue?vue&type=template&id=6adfd2a6& */ "./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6&");
/* harmony import */ var _Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Upload.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UploadIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_template_id_c42c152c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=template&id=c42c152c&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_2f632a9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=template&id=2f632a9e&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_template_id_041d23df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=template&id=041d23df&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_template_id_1856abbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=template&id=1856abbc&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=template&id=1856abbc&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_495c4cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=template&id=495c4cf2&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=template&id=495c4cf2&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTheming_vue_vue_type_style_index_0_id_c42c152c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/AdminTheming.vue?vue&type=style&index=0&id=c42c152c&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_style_index_0_id_2f632a9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/CheckboxField.vue?vue&type=style&index=0&id=2f632a9e&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPickerField_vue_vue_type_style_index_0_id_041d23df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/ColorPickerField.vue?vue&type=style&index=0&id=041d23df&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInputField_vue_vue_type_style_index_0_id_1856abbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/FileInputField.vue?vue&type=style&index=0&id=1856abbc&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_style_index_0_id_495c4cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/admin/TextField.vue?vue&type=style&index=0&id=495c4cf2&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Upload.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6&":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_template_id_6adfd2a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Upload.vue?vue&type=template&id=6adfd2a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Upload.vue?vue&type=template&id=6adfd2a6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon upload-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            { attrs: { d: "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" } },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./core/img/logo/logo.svg":
/*!********************************!*\
  !*** ./core/img/logo/logo.svg ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjEyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjU2IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTI4IDdjLTI1Ljg3MSAwLTQ3LjgxNyAxNy40ODUtNTQuNzEzIDQxLjIwOS01Ljk3OTUtMTIuNDYxLTE4LjY0Mi0yMS4yMDktMzMuMjg3LTIxLjIwOS0yMC4zMDQgMC0zNyAxNi42OTYtMzcgMzdzMTYuNjk2IDM3IDM3IDM3YzE0LjY0NSAwIDI3LjMwOC04Ljc0ODEgMzMuMjg3LTIxLjIwOSA2Ljg5NTcgMjMuNzI0IDI4Ljg0MiA0MS4yMDkgNTQuNzEzIDQxLjIwOXM0Ny44MTctMTcuNDg1IDU0LjcxMy00MS4yMDljNS45Nzk1IDEyLjQ2MSAxOC42NDIgMjEuMjA5IDMzLjI4NyAyMS4yMDkgMjAuMzA0IDAgMzctMTYuNjk2IDM3LTM3cy0xNi42OTYtMzctMzctMzdjLTE0LjY0NSAwLTI3LjMwOCA4Ljc0ODEtMzMuMjg3IDIxLjIwOS02Ljg5NTctMjMuNzI0LTI4Ljg0Mi00MS4yMDktNTQuNzEzLTQxLjIwOXptMCAyMmMxOS40NiAwIDM1IDE1LjU0IDM1IDM1cy0xNS41NCAzNS0zNSAzNS0zNS0xNS41NC0zNS0zNSAxNS41NC0zNSAzNS0zNXptLTg4IDIwYzguNDE0NiAwIDE1IDYuNTg1NCAxNSAxNXMtNi41ODU0IDE1LTE1IDE1LTE1LTYuNTg1NC0xNS0xNSA2LjU4NTQtMTUgMTUtMTV6bTE3NiAwYzguNDE0NiAwIDE1IDYuNTg1NCAxNSAxNXMtNi41ODU0IDE1LTE1IDE1LTE1LTYuNTg1NC0xNS0xNSA2LjU4NTQtMTUgMTUtMTV6IiBjb2xvcj0iIzAwMDAwMCIgZmlsbD0iI2ZmZiIgc3R5bGU9Ii1pbmtzY2FwZS1zdHJva2U6bm9uZSIvPjwvc3ZnPgo=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"theming-admin-theming": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/theming/src/admin-settings.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=theming-admin-theming.js.map?v=e848e7d97db0acd2f36a