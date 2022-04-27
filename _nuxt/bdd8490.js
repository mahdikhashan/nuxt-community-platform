(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,4,5,6,7,8],{267:function(t,e,n){"use strict";n.r(e);var l={name:"Tag"},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[n("nuxt-link",{staticClass:"flex bg-gray-50 hover:text-gray-600 hover:border-gray-600 text-gray-500 border-[1px] border-gray-400 px-3 text-[11px] justify-center items-center py-[1px] rounded-full",attrs:{to:"/"}},[n("div",[t._t("default")],2)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(108).default})},268:function(t,e,n){"use strict";n.r(e);var l={name:"Banner"},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-center items-center bg-blue-900 py-[4.5rem]"},[n("div",{staticClass:"w-2/3 items-center justify-center"},[n("h1",{staticClass:"text-white text-2xl xl:text-4xl text-center"},[t._v("Community Platform")]),t._v(" "),n("h4",{staticClass:"text-white text-md xl:px-32 pt-4 text-center"},[t._v("\n      Answers to all your Expensify questions. Find support for user and admin\n      questions from the Expensify Community.\n    ")]),t._v(" "),n("div",{staticClass:"flex w-full items-center justify-center mt-4"},[n("form",{staticClass:"w-full xl:w-2/3 flex flex-row"},[n("div",{staticClass:"flex flex-auto relative items-center pt-4"},[n("span",{staticClass:"translate-x-9 text-gray-400"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[n("path",{attrs:{d:"M10.01 4.543c-3.036 0-5.496 2.453-5.496 5.48 0 3.027 2.46 5.48 5.496 5.48 3.034 0 5.495-2.453 5.495-5.48 0-3.027-2.46-5.48-5.495-5.48m10.647 16.072l-.024.025c-.043.043-.09.083-.14.12-.518.388-1.254.287-1.712-.17l-4.819-4.82a6.988 6.988 0 01-3.95 1.218C6.14 16.988 3 13.857 3 9.994S6.14 3 10.011 3c3.874 0 7.013 3.131 7.013 6.994 0 1.47-.458 2.835-1.236 3.962l4.805 4.806c.504.505.556 1.337.064 1.853",fill:"currentColor","fill-rule":"evenodd"}})])]),t._v(" "),n("input",{ref:"search",staticClass:"w-full p-2 pl-14 rounded-l-md",attrs:{type:"search",name:"search",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"w-2/12 bg-transparent hover:bg-green-500 rounded-r-md p-2 text-white"},[t._v("Search")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(108).default})},269:function(t,e,n){"use strict";n.r(e);var l={name:"Sticker"},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex\n    bg-gray-200\n    items-center\n    justify-between\n    p-4\n    rounded-md\n    border-gray-700\n    border-[1px]\n  "},[n("div",{},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);var l={name:"Button",props:{}},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"\n    flex\n    gap-4\n    bg-green-500\n    hover:bg-green-600\n    px-6\n    text-white\n    justify-center\n    items-center\n    py-3\n    rounded-full\n    shadow-xl\n  ",on:{click:function(e){return t.$emit("click")}}},[n("svg",{staticClass:"w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","aria-hidden":"true"}},[n("title",[t._v("New Post")]),t._v(" "),n("path",{attrs:{d:"M8,0A1,1,0,0,1,9,1V7h6a1,1,0,0,1,.993.883L16,8a1,1,0,0,1-1,1H9v6a1,1,0,0,1-.883.993L8,16a1,1,0,0,1-1-1V9H1a1,1,0,0,1-.993-.883L0,8A1,1,0,0,1,1,7H7V1A1,1,0,0,1,7.883.006Z",fill:"currentColor"}})]),t._v(" "),n("pre",{staticClass:"font-semibold"},[t._v("New Post")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(108).default})},271:function(t,e,n){"use strict";var l=n(11),r=n(1),o=n(3),c=n(110),v=n(21),f=n(16),x=n(195),d=n(42),m=n(109),_=n(194),h=n(4),w=n(79).f,C=n(36).f,y=n(18).f,k=n(272),A=n(273).trim,E="Number",j=r.Number,N=j.prototype,S=r.TypeError,P=o("".slice),M=o("".charCodeAt),T=function(t){var e=_(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,n,l,r,o,c,v,code,f=_(t,"number");if(m(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=A(f),43===(e=M(f,0))||45===e){if(88===(n=M(f,2))||120===n)return NaN}else if(48===e){switch(M(f,1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+f}for(c=(o=P(f,2)).length,v=0;v<c;v++)if((code=M(o,v))<48||code>r)return NaN;return parseInt(o,l)}return+f};if(c(E,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var I,V=function(t){var e=arguments.length<1?0:j(T(t)),n=this;return d(N,n)&&h((function(){k(n)}))?x(Object(e),n,V):e},L=l?w(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;L.length>D;D++)f(j,I=L[D])&&!f(V,I)&&y(V,I,C(j,I));V.prototype=N,N.constructor=V,v(r,E,V)}},272:function(t,e,n){var l=n(3);t.exports=l(1..valueOf)},273:function(t,e,n){var l=n(3),r=n(20),o=n(12),c=n(274),v=l("".replace),f="["+c+"]",x=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t){return function(e){var n=o(r(e));return 1&t&&(n=v(n,x,"")),2&t&&(n=v(n,d,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},274:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},276:function(t,e,n){"use strict";n.r(e);n(271);var l={name:"MiniDiscussion",props:{avatar:String,author:String,type:String,views:Number,comments:Number,date:String,bookmarked:Boolean},data:function(){return{mainProps:{blankColor:"#777",width:40,height:40,class:"m1"}}}},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-[80px] last:border-b-[1px] last:border-gray-300 before:content-[''] before:border-t-[1px] before:block before:border-gray-300 before:w-[100%]"},[n("div",{staticClass:"flex justify-between items-center h-full w-full relative"},[n("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-col ml-2"},[n("nuxt-link",{staticClass:"font-normal text-lg",attrs:{to:"/categories"}},[t._v('Announcing the "Expensify CPA Card", built specifically for\n          accountants')]),t._v(" "),n("div",[n("span",[n("Tag",[t._v("Announcement")]),t._v(" "),n("nuxt-link",{attrs:{to:"/categories"}},[n("span",[t._v(t._s(t.author))])]),t._v(" "),n("span",{staticClass:"text-xs inline-block text-gray-500 my-[2px] mx-[4px]"},[t._v("5.9K views")]),t._v(" "),n("span",{staticClass:"text-xs inline-block text-gray-500 my-[2px] mx-[4px]"},[t._v("0 comments")]),t._v(" "),n("span",{staticClass:"text-xs inline-block text-gray-500 my-[2px] mx-[4px]"},[t._v("Started by\n              "),n("nuxt-link",{attrs:{to:"/categories"}},[n("span",[t._v(t._s(t.author))])])],1),t._v(" "),n("span",{staticClass:"text-xs inline-block text-gray-500 my-[2px] mx-[4px]"},[t._v("November 2021")]),t._v(" "),n("nuxt-link",{attrs:{to:"/categories"}},[n("span",[t._v("Expensify news")])])],1)])],1)]),t._v(" "),n("div",{staticClass:"absolute top-2 right-1 flex items-center justify-center gap-1"},[n("nuxt-link",{attrs:{to:"/categories"}},[n("img",{staticStyle:{width:"15px"},attrs:{src:"bookmark.svg",alt:"booked"}})]),t._v(" "),n("nuxt-link",{attrs:{to:"/categories"}},[n("img",{staticStyle:{width:"25px"},attrs:{src:"dots.svg",alt:"booked"}})])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-4"},[e("img",{staticClass:"rounded-full w-11 h-11",attrs:{src:"avatar.jpg",alt:"Circle image"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Tag:n(267).default})},277:function(t,e,n){"use strict";n.r(e);var l={name:"Notification"},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex\n    bg-gray-100\n    items-center\n    justify-between\n    p-4\n    rounded-md\n    border-[1px]\n  "},[n("div",{},[t._t("default")],2),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"w-4"},[e("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAnElEQVRIie2VSw6DMAwFB+7QCC5Y7guoSPQw6caRgFapP7DjbcmbIUg2cMeRJ5AcvSTdagYgA5NRkoBZukPt4AMY5eAC9Er4tOl0/woWiRlukbjhGkkYXpOcBv8lWQV6GnwreQk4A28tvA1Im0B3l+MnKjfRzokaXoCeYVTDNc/C8LDEUjRLPG9l6pR1PWNf12W6q+saLv7h3PnKB/1VUtVNViCxAAAAAElFTkSuQmCC"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(108).default})},280:function(t,e,n){"use strict";n.r(e);var l=n(268),r=n(270),o=n(276),c=n(277),v=n(269),f={name:"IndexPage",data:function(){return{isAuthenticated:!0,items:[{text:"Admin",href:"#"},{text:"Manage",href:"#"},{text:"Library",active:!0}],discussions:[{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1},{avatar:"https://us.v-cdn.net/6030147/uploads/userpics/138/nXPSYL5PE8V87.jpg",author:"Mahdi Khashan",type:"Announcement",views:200,comments:3,date:"March 2021",bookmarked:!1}],pages:100,currentPage:5}},components:{Banner:l.default,NewPost:r.default,MiniDiscussion:o.default,Notification:c.default,Sticker:v.default}},x=n(13),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner"),t._v(" "),n("main",{staticClass:"\n      container\n      mx-auto\n      flex\n      lg:flex-col\n      xl:flex-row\n      justify-between\n      mt-8\n    "},[n("section",{staticClass:"w-full xl:w-[70%] px-6 py-4 flex flex-col gap-2"},[n("Notification",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing\n        elit.")]),t._v(" "),n("Sticker",[t._v("Are you receiving SNAP/EBT benefits? The Expensify.org/SNAP-VAX\n        campaign is live and accepting new members. Learn more about receiving\n        $50 for submitting a SNAP receipt and $50 for getting your COVID-19\n        vaccine here and join today!")]),t._v(" "),n("div",{staticClass:"my-4"},t._l([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],(function(t){return n("MiniDiscussion",{key:t})})),1)],1),t._v(" "),n("aside",{staticClass:"w-full xl:w-[30%] px-6 py-4"},[t.isAuthenticated?n("div",{staticClass:"flex flex-col gap-3 mb-8"},[n("span",{staticClass:"text-black font-bold text-xl"},[t._v("Welcome!")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-700"},[t._v("It looks like you're new here. Sign in or register to get started.")]),t._v(" "),n("div",{staticClass:"flex gap-4"},[n("Button",[t._v("Sign In")]),t._v(" "),n("Button",{attrs:{gray:"true"}},[t._v("Register")])],1)]):t._e(),t._v(" "),n("NewPost"),t._v(" "),n("section",{staticClass:"w-full"},[n("h3",{staticClass:"font-bold text-lg pt-4 pb-2"},[t._v("Quick Links")]),t._v(" "),n("ul",{staticClass:"w-full text-sm flex flex-col gap-[6px]"},[n("li",{staticClass:"hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("All Categories")])],1),t._v(" "),n("li",{staticClass:"hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Recent Discussions")])],1),t._v(" "),n("li",{staticClass:"hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Activity")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("My Bookmarks")]),t._v(" "),n("span",[t._v("2")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("My Discussions")]),t._v(" "),n("span",[t._v("2")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("My Drafts")]),t._v(" "),n("span",[t._v("2")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Unanswered")]),t._v(" "),n("span",[t._v("2")])],1),t._v(" "),n("li",{staticClass:"hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Best Of")])],1)])]),t._v(" "),n("section",[n("h3",{staticClass:"font-bold text-lg pt-4 pb-2"},[t._v("Categories")]),t._v(" "),n("ul",{staticClass:"text-sm flex flex-col gap-[6px]"},[n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("All Categories")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Announcements")]),t._v(" "),n("span",[t._v("201")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Help Docs and Webinars")]),t._v(" "),n("span",[t._v("504")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Questions about community")]),t._v(" "),n("span",[t._v("2.1K")])],1),t._v(" "),n("li",{staticClass:"w-full flex flex-auto justify-between hover:text-blue-600"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Community.org")]),t._v(" "),n("span",[t._v("151")])],1)])]),t._v(" "),n("section",{staticClass:"block"},[n("h3",{staticClass:"font-bold text-lg pt-4 pb-2"},[t._v("Popular Tags")]),t._v(" "),n("Tag",[t._v("Deep Dive 230")]),t._v(" "),n("Tag",[t._v("Track 50")]),t._v(" "),n("Tag",[t._v("How-to 390")]),t._v(" "),n("Tag",[t._v("FAQ 290")]),t._v(" "),n("Tag",[t._v("Success approved! 212")]),t._v(" "),n("Tag",[t._v("tax")]),t._v(" "),n("Tag",[t._v("demo 1")]),t._v(" "),n("Tag",[t._v("newsletter")]),t._v(" "),n("Tag",[t._v("Webinar")]),t._v(" "),n("Tag",[t._v("Cash")]),t._v(" "),n("Tag",[t._v("Travel 125")]),t._v(" "),n("Tag",[t._v("Two Factor Authentication (2FA)")])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Banner:n(268).default,Notification:n(277).default,Sticker:n(269).default,MiniDiscussion:n(276).default,Button:n(108).default,NewPost:n(270).default,Tag:n(267).default})}}]);