(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0782":function(e,t,a){"use strict";var n=a("8220"),r=a.n(n);r.a},"0aac":function(e,t,a){},"47b0":function(e,t,a){"use strict";var n=a("de39"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=a("f309");n["a"].use(r["a"]);var s=new r["a"]({}),o=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"black",color:"white"}},[a("v-app-bar",{attrs:{app:"",color:"dark-grey",dark:"","hide-on-scroll":""}},[a("div",{staticClass:"d-flex"},[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{"align-self":"start"}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("h1",{staticStyle:{color:"green"}},[e._v("BC")])])],1),a("v-col",{attrs:{"align-self":"center"}},[a("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"black--text",attrs:{color:"rgba(100, 100, 50, 1)"}},"v-btn",r,!1),n),[e._v(" Database ")])]}}])})],1),a("v-col",{attrs:{"align-self":"center"}},[a("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"black--text",attrs:{color:"rgba(100, 100, 50, 1)"}},"v-btn",r,!1),n),[e._v(" Tools ")])]}}])})],1),a("v-col",{attrs:{"align-self":"center"}},[a("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"black--text",attrs:{color:"rgba(100, 100, 50, 1)"}},"v-btn",r,!1),n),[e._v(" Guides ")])]}}])})],1),a("v-col",{attrs:{"align-self":"center"}},[a("v-menu",{attrs:{"open-on-hover":!0,"close-on-click":!0,"close-on-content-click":!0,"offset-y":!0},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"black--text",attrs:{color:"rgba(100, 100, 50, 1)"}},"v-btn",r,!1),n),[e._v(" More ")])]}}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-list",{attrs:{dark:"",dense:""}},e._l(e.menuMore,(function(t,n){return a("v-list-item",{key:n,attrs:{dark:"",dense:"",to:t.link}},[a("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1)],1),a("v-col",{attrs:{"align-self":"end"}},[a("v-toolbar",{staticStyle:{position:"absolute",top:"8px",right:"10px"},attrs:{dark:"",width:"400",dense:""}},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.search()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchParams,expression:"searchParams"}],staticStyle:{width:"300px",color:"white",outline:"none"},attrs:{type:"text",placeholder:"Search.."},domProps:{value:e.searchParams},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.target.blur()},input:function(t){t.target.composing||(e.searchParams=t.target.value)}}}),a("input",{staticStyle:{color:"white"},attrs:{id:"submitButton",type:"submit",value:"Search"}})])],1)],1)],1)],1)]),a("v-main",{attrs:{id:"app"}},[a("router-view",{key:this.$route.fullPath})],1)],1)},l=[],c=(a("bc3a"),{name:"App",data:function(){return{searchParams:"",searchResults:null,value:!1,menuMore:[{title:"Patch Notes",link:"/notes"},{title:"Blue Tracker",link:"/blue"}]}},methods:{search:function(){""!==this.searchParams&&this.$router.push("/search?q=".concat(this.searchParams)),this.searchParams=""},handleClick:function(){}}}),u=c,d=a("2877"),f=a("6544"),h=a.n(f),p=a("7496"),v=a("40dc"),m=a("8336"),g=a("62ad"),_=a("4bd4"),b=a("8860"),y=a("da13"),k=a("5d23"),w=a("f6c4"),x=a("e449"),P=a("0fd9"),T=a("71d9"),S=Object(d["a"])(u,i,l,!1,null,null,null),A=S.exports;h()(S,{VApp:p["a"],VAppBar:v["a"],VBtn:m["a"],VCol:g["a"],VForm:_["a"],VList:b["a"],VListItem:y["a"],VListItemTitle:k["b"],VMain:w["a"],VMenu:x["a"],VRow:P["a"],VToolbar:T["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tabs",[a("tab",{attrs:{title:"Items"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",[e._v(" Items "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Filter Results","hide-details":"",dark:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.itemHeaders,items:e.filteredItems,"items-per-page":10,search:e.search,dark:"",loading:e.isLoading},scopedSlots:e._u([{key:"top",fn:function(e){var t=e.pagination,n=e.options,r=e.updateOptions;return[a("v-data-footer",{attrs:{pagination:t,options:n,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText"},on:{"update:options":r}})]}},{key:"item.name",fn:function(t){var n=t.item;return[a("router-link",{class:"router-link-"+n.Quality,attrs:{to:"/item="+n.entry+"/"+n.name}},[e._v(e._s(n.name)+" ")])]}}])})],1)],1),a("tab",{attrs:{title:"NPCs"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",[e._v(" NPCs "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Filter Results","hide-details":"",dark:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.npcHeaders,items:e.filteredCreatures,"items-per-page":10,search:e.search,dark:"",loading:e.isLoading},scopedSlots:e._u([{key:"top",fn:function(e){var t=e.pagination,n=e.options,r=e.updateOptions;return[a("v-data-footer",{attrs:{pagination:t,options:n,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText"},on:{"update:options":r}})]}},{key:"item.Name",fn:function(t){var n=t.item;return[a("router-link",{staticClass:"npc",attrs:{to:"/npc="+n.Entry+"/"+n.Name}},[e._v(e._s(n.Name))])]}}])})],1)],1),a("tab",{attrs:{title:"Quests"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",[e._v(" Quests "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Filter Results","hide-details":"",dark:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.questHeaders,items:e.filteredQuests,"items-per-page":10,search:e.search,dark:"",loading:e.isLoading},scopedSlots:e._u([{key:"top",fn:function(e){var t=e.pagination,n=e.options,r=e.updateOptions;return[a("v-data-footer",{attrs:{pagination:t,options:n,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText"},on:{"update:options":r}})]}},{key:"item.Title",fn:function(t){var n=t.item;return[a("router-link",{staticClass:"quest",attrs:{to:"/quest="+n.entry+"/"+n.Title}},[e._v(e._s(n.Title))])]}}])})],1)],1)],1)],1)},D=[],O=(a("4160"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[e._t("default")],2)}),N=[],M={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},L=M,E=Object(d["a"])(L,O,N,!1,null,null,null),V=E.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{tabs__light:"light"===e.mode,tabs__dark:"dark"===e.mode}},[a("ul",{staticClass:"tabs__header"},e._l(e.tabs,(function(t,n){return a("li",{key:t.title,class:{tab__selected:n==e.selectedIndex},on:{click:function(t){return e.selectTab(n)}}},[e._v(" "+e._s(t.title)+" ")])})),0),e._t("default")],2)},$=[],j={props:{mode:{type:String,default:"dark"}},data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(e){this.selectedIndex=e,this.tabs.forEach((function(t,a){t.isActive=a===e}))}}},R=j,I=(a("47b0"),Object(d["a"])(R,B,$,!1,null,null,null)),J=I.exports,H=a("bc3a"),q={name:"Search",components:{Tab:V,Tabs:J},data:function(){return{filteredItems:[],filteredCreatures:[],filteredQuests:[],search:"",questHeaders:[{text:"Name",align:"start",value:"Title"},{text:"Quest Level",align:"start",value:"QuestLevel"},{text:"Min. Level",align:"start",value:"MinLevel"}],itemHeaders:[{text:"Name",align:"start",value:"name"},{text:"Item Level",align:"start",value:"ItemLevel"},{text:"Req. Level",align:"start",value:"RequiredLevel"},{text:"Type",align:"start",value:"class"}],npcHeaders:[{text:"Name",align:"start",value:"Name"},{text:"Sub Name",align:"start",value:"SubName"}],isLoading:!0}},methods:{getSearchResults:function(){var e=this;this.isLoading=!0,H.get("/search?q=".concat(this.$route.query.q)).then((function(t){e.filteredItems=t.data.items,e.filteredItems.forEach((function(t){t.class=e.determineItemType(t.class)})),e.filteredCreatures=t.data.creatures,e.filteredQuests=t.data.quests,e.isLoading=!1}))},determineItemType:function(e){switch(e){case 0:return"Consumable";case 1:return"Container";case 2:return"Weapon";case 3:return"Gem";case 4:return"Armor";case 5:return"Reagent";case 6:return"Projectile";case 7:return"Tradeskill";case 8:return"Item Enhancement";case 9:return"Recipe";case 11:return"Quiver";case 12:return"Quest Item";case 13:return"Key";case 15:return"Miscellaneous";case 16:return"Glyph";case 17:return"Battle Pets";case 18:return"WoW Token"}}},mounted:function(){this.getSearchResults()}},z=q,F=(a("0782"),a("b0af")),Q=a("99d9"),W=a("f41f"),G=a("8fea"),U=a("2fa4"),Y=a("8654"),K=Object(d["a"])(z,C,D,!1,null,null,null),Z=K.exports;h()(K,{VCard:F["a"],VCardTitle:Q["a"],VDataFooter:W["a"],VDataTable:G["a"],VSpacer:U["a"],VTextField:Y["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-data-table",{staticClass:"elevation-1 blueposts",attrs:{headers:e.headers,items:e.bluePosts,"items-per-page":5,dark:"",dense:"","disable-sort":"","hide-default-footer":!0},scopedSlots:e._u([{key:"item.title",fn:function(t){var n=t.item;return[a("a",{attrs:{href:e.createURL(n.url),target:"_blank",title:n.excerpt}},[e._v(e._s(n.title))])]}}])})],1)],1)},ee=[],te=(a("fb6a"),a("b64b"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("bc3a")),ae={name:"Home",data:function(){return{bluePosts:[],headers:[{text:"Blizzard Posts",align:"start",value:"title"},{align:"start",value:"created"}]}},methods:{getBluePosts:function(){var e=this;te.get("/blue").then((function(t){e.bluePosts=t.data.rows,e.bluePosts.sort(e.sortByDate),e.bluePosts.forEach((function(t){t.created=e.dateDifference(new Date(t.created))})),e.bluePosts=e.bluePosts.slice(0,5)}))},sortByDate:function(e,t){return new Date(t.created).getTime()-new Date(e.created).getTime()},dateDifference:function(e){var t=(new Date).getTime(),a=Math.abs(t-e)/1e3,n={},r={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};return Object.keys(r).forEach((function(e){n[e]=Math.floor(a/r[e]),a-=n[e]*r[e]})),n.year>0?n.year>1?n.year+" Years Ago":n.year+" Year Ago":n.month>0?n.month>1?n.month+" Months Ago":n.month+" Month Ago":n.week>0?n.week>1?n.week+" Weeks Ago":n.week+" Week Ago":n.day>0?n.day>1?n.day+" Days Ago":n.day+" Day Ago":n.hour>0?n.hour>1?n.hour+" Hours Ago":n.hour+" Hour Ago":n.minute>0?n.minute>1?n.minute+" Minutes Ago":n.minute+" Minute Ago":n.second>1?n.second+" Seconds Ago":n.second+" Second Ago"},createURL:function(e){return new URL("/en/wow"+e,"https://us.forums.blizzard.com/")}},mounted:function(){this.getBluePosts()}},ne=ae,re=(a("8b71"),a("a523")),se=Object(d["a"])(ne,X,ee,!1,null,null,null),oe=se.exports;h()(se,{VContainer:re["a"],VDataTable:G["a"],VRow:P["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.bluePosts,"items-per-page":10,dark:"",loading:e.isLoading},scopedSlots:e._u([{key:"item.title",fn:function(t){var n=t.item;return[a("a",{attrs:{href:e.createURL(n.url),target:"_blank",title:n.excerpt}},[e._v(e._s(n.title))])]}}])})},le=[],ce=a("bc3a"),ue={name:"Blue",data:function(){return{bluePosts:[],headers:[{text:"Topic",align:"start",value:"title"},{text:"Blue Poster",align:"start",value:"user"},{text:"Forum",align:"start",value:"category"},{text:"Date",align:"start",value:"created"}],isLoading:!0}},methods:{getBluePosts:function(){var e=this;this.isLoading=!0,ce.get("/blue").then((function(t){e.bluePosts=t.data.rows,e.bluePosts.sort(e.sortByDate),e.bluePosts.forEach((function(t){t.created=e.dateDifference(new Date(t.created))})),e.bluePosts.forEach((function(t){return[t.category=e.determineCategory(t.category)]})),e.isLoading=!1}))},determineCategory:function(e){switch(e){case 12:return"Support";case 14:return"Service Status";case 171:return"General Discussion";case 172:return"WoW Classic General Discussion";case 173:return"Oceanic General Discussion";case 199:return"Wow Classic Bug Report";case 244:return"Shadowlands Beta General Discussion";case 246:return"Shadowlands Beta Classes and Covenants";case 249:return"Shadowlands Beta Dungeons and Raids"}},sortByDate:function(e,t){return new Date(t.created).getTime()-new Date(e.created).getTime()},dateDifference:function(e){var t=(new Date).getTime(),a=Math.abs(t-e)/1e3,n={},r={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};return Object.keys(r).forEach((function(e){n[e]=Math.floor(a/r[e]),a-=n[e]*r[e]})),n.year>0?n.year>1?n.year+" Years Ago":n.year+" Year Ago":n.month>0?n.month>1?n.month+" Months Ago":n.month+" Month Ago":n.week>0?n.week>1?n.week+" Weeks Ago":n.week+" Week Ago":n.day>0?n.day>1?n.day+" Days Ago":n.day+" Day Ago":n.hour>0?n.hour>1?n.hour+" Hours Ago":n.hour+" Hour Ago":n.minute>0?n.minute>1?n.minute+" Minutes Ago":n.minute+" Minute Ago":n.second>1?n.second+" Seconds Ago":n.second+" Second Ago"},createURL:function(e){return new URL("/en/wow"+e,"https://us.forums.blizzard.com/")}},mounted:function(){this.getBluePosts()}},de=ue,fe=Object(d["a"])(de,ie,le,!1,null,null,null),he=fe.exports;h()(fe,{VDataTable:G["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Original Patch Notes")]),a("br"),e._m(0),a("NotesTable",{attrs:{data:e.notes_data.two_zero}}),a("br"),e._m(1),a("NotesTable",{attrs:{data:e.notes_data.two_one}}),a("br"),e._m(2),a("NotesTable",{attrs:{data:e.notes_data.two_two}}),a("br"),e._m(3),a("NotesTable",{attrs:{data:e.notes_data.two_three}}),a("br"),e._m(4),a("NotesTable",{attrs:{data:e.notes_data.two_four}})],1)},ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("h2",[e._v("Patch 2.0: Before the Storm / The Burning Crusade")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("h2",[e._v("Patch 2.1: The Black Temple")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("h2",[e._v("Patch 2.2: Voice Chat!")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("h2",[e._v("Patch 2.3: The Gods of Zul'Aman")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("h2",[e._v("Patch 2.4: Fury of the Sunwell")])])}],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-simple-table",{staticClass:"notesTable",attrs:{dark:"",dense:""}},[a("tbody",[a("tr",e._l(e.data,(function(t,n){return a("td",{key:n,staticStyle:{"text-align":"center","font-size":"18px"},attrs:{dark:"",dense:"",to:t.link}},[[a("router-link",{attrs:{to:t.link}},[e._v(e._s(t.title))])],a("v-col",{staticStyle:{"font-size":"15px"}},[e._v("Released (US):"),a("br"),e._v(" "+e._s(t.release))])],2)})),0)])])},ge=[],_e={props:{data:{}}},be=_e,ye=a("1f4f"),ke=Object(d["a"])(be,me,ge,!1,null,null,null),we=ke.exports;h()(ke,{VCol:g["a"],VSimpleTable:ye["a"]});a("bc3a");var xe={name:"Notes",data:function(){return{notes_data:{}}},mounted:function(){this.notes_data=a("d127")},components:{NotesTable:we}},Pe=xe,Te=(a("fa3f"),Object(d["a"])(Pe,pe,ve,!1,null,null,null)),Se=Te.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticStyle:{"white-space":"pre-wrap",color:"darkgoldenrod"},domProps:{innerHTML:e._s(e.patchNotes)}},[e._v(e._s(this.patchNotes))])},Ce=[],De=a("bc3a"),Oe={name:"Original",data:function(){return{patchNotes:""}},methods:{getPatchNotes:function(){var e=this;De.get("/notes/original/".concat(this.$route.params.version)).then((function(t){e.patchNotes=t.data}))}},mounted:function(){this.getPatchNotes()}},Ne=Oe,Me=Object(d["a"])(Ne,Ae,Ce,!1,null,null,null),Le=Me.exports;n["a"].use(o["a"]);var Ee=new o["a"]({mode:"history",routes:[{path:"/",component:oe},{path:"/search",component:Z},{path:"/blue",component:he},{path:"/notes",component:Se},{path:"/notes/original/:version",component:Le}]});new n["a"]({el:"#app",template:"<App/>",components:{App:A},vuetify:s,router:Ee,render:function(e){return e(A)}}).$mount("#app")},8220:function(e,t,a){},"8b71":function(e,t,a){"use strict";var n=a("ce77"),r=a.n(n);r.a},ce77:function(e,t,a){},d127:function(e){e.exports=JSON.parse('{"two_zero":[{"title":"2.0.1","link":"notes/original/2_0_1","release":"December 5, 2006"},{"title":"2.0.3","link":"notes/original/2_0_3","release":"January 9, 2007"},{"title":"2.0.4","link":"notes/original/2_0_4","release":"January 12, 2007"},{"title":"2.0.5","link":"notes/original/2_0_5","release":"January 14, 2007"},{"title":"2.0.6","link":"notes/original/2_0_6","release":"January 23, 2007"},{"title":"2.0.7","link":"notes/original/2_0_7","release":"February 13, 2007"},{"title":"2.0.8","link":"notes/original/2_0_8","release":"February 16, 2007"},{"title":"2.0.10","link":"notes/original/2_0_10","release":"March 6, 2007"},{"title":"2.0.12","link":"notes/original/2_0_12","release":"April 3, 2007"}],"two_one":[{"title":"2.1.0","link":"notes/original/2_1_0","release":"May 22, 2007"},{"title":"2.1.1","link":"notes/original/2_1_1","release":"June 5, 2007"},{"title":"2.1.2","link":"notes/original/2_1_2","release":"June 19, 2007"},{"title":"2.1.3","link":"notes/original/2_1_3","release":"July 10, 2007"}],"two_two":[{"title":"2.2.0","link":"notes/original/2_2_0","release":"September 25, 2007"},{"title":"2.2.2","link":"notes/original/2_2_2","release":"October 2, 2007"},{"title":"2.2.3","link":"notes/original/2_2_3","release":"October 9, 2007"}],"two_three":[{"title":"2.3.0","link":"notes/original/2_3_0","release":"November 13, 2007"},{"title":"2.3.2","link":"notes/original/2_3_2","release":"January 8, 2008"},{"title":"2.3.3","link":"notes/original/2_3_3","release":"January 22, 2008"}],"two_four":[{"title":"2.4.0","link":"notes/original/2_4_0","release":"March 25, 2008"},{"title":"2.4.1","link":"notes/original/2_4_1","release":"April 1, 2008"},{"title":"2.4.2","link":"notes/original/2_4_2","release":"May 13, 2008"},{"title":"2.4.3","link":"notes/original/2_4_3","release":"July 15, 2008"}]}')},de39:function(e,t,a){},fa3f:function(e,t,a){"use strict";var n=a("0aac"),r=a.n(n);r.a}});
//# sourceMappingURL=app.74d3750f.js.map