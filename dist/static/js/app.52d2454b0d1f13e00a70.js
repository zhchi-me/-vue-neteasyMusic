webpackJsonp([0],{"+QZ9":function(t,s){},"2C1L":function(t,s){},Mueu:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),n=i("NYxO"),a={state:{isShow:!1},mutations:{showBar:function(t){t.isShow=!0},hideBar:function(t){t.isShow=!1}},actions:{showSideBar:function(t){(0,t.commit)("showBar")},hideSideBar:function(t){(0,t.commit)("hideBar")}},getters:{isShowMethod:function(){return this.state.isShow}}},o={state:{showMusicDetail:!1,showSongSheet:!1,playing:!1},mutations:{play:function(t){t.playing=!0},pause:function(t){t.playing=!1},togglePlay:function(t){t.playing?t.playing=!1:t.playing=!0},setIsShowSongSheet:function(t,s){t.showSongSheet=s.isShow},toggerMusicDetail:function(t){t.showMusicDetail=!t.showMusicDetail},setMusicDetail:function(t,s){t.showMusicDetail=s.isShow}},actions:{set_MusicDetail:function(t,s){(0,t.commit)("setMusicDetail",s)}},getters:{getIsShowSongSheet:function(t){return t.showSongSheet},getMusicDetail:function(t){return t.showMusicDetail},getIsPlaying:function(t){return t.playing}}},c={state:{isShow:!1},mutations:{showMenu:function(t){t.isShow=!0},hideMenu:function(t){t.isShow=!1}},actions:{showMenuList:function(t){(0,t.commit)("showMenu")},hideMenuList:function(t){(0,t.commit)("hideMenu")}},getters:{getIsShow:function(t){return t.isShow}}};e.a.use(n.a);var r=new n.a.Store({state:{allInfo:[]},getters:{},mutations:{},actions:{},modules:{sideBar:a,audioInfo:o,menuList:c}}),l={props:{index:{type:Number,default:0}},data:function(){return{}},methods:{showMenu:function(){console.log("showMenu"),r.dispatch({type:"showSideBar"})},hideMenu:function(){r.dispatch({type:"hideSideBar"})}}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"header-warpper"},[s("i",{staticClass:"menu icon-menu",on:{click:this.showMenu}}),this._v(" "),s("div",{staticClass:"centermenu",on:{click:this.hideMenu}},[s("router-link",{attrs:{tag:"i",to:"/mymusic"}},[s("i",{staticClass:"music icon-music"})]),this._v(" "),s("router-link",{attrs:{tag:"i",to:"/findmusic"}},[s("i",{staticClass:"find icon-wangyi"})]),this._v(" "),s("router-link",{attrs:{tag:"i",to:"/community"}},[s("i",{staticClass:"community icon-community"})])],1),this._v(" "),s("i",{staticClass:"search icon-search"})]),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var h=i("VU/8")(l,u,!1,function(t){i("VsYe")},null,null).exports,d={methods:{hideMenu:function(){console.log("hideMenu"),r.dispatch({type:"hideSideBar"})}},computed:{isReallShow:function(){return r.state.sideBar.isShow}}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sidebar"},[s("transition",{attrs:{name:"fade"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.isReallShow,expression:"isReallShow"}],staticClass:"menu-mask",on:{click:this.hideMenu}})]),this._v(" "),s("transition",{attrs:{name:"side"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.isReallShow,expression:"isReallShow"}],staticClass:"menu-content"})])],1)},staticRenderFns:[]};var p=i("VU/8")(d,m,!1,function(t){i("ZI0e")},null,null).exports,v={data:function(){return{}},methods:{showMusicDetail:function(){console.log("showMusicDetail"),r.dispatch({type:"set_MusicDetail",isShow:!0})}}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-bar",on:{click:this.showMusicDetail}},[this._m(0),this._v(" "),s("div",{staticClass:"playpause"},[s("i",{staticClass:"icon-play",on:{click:function(t){t.stopPropagation()}}})]),this._v(" "),s("i",{staticClass:"music-list icon-list-music",on:{click:function(t){t.stopPropagation()}}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"music-info"},[s("img",{staticClass:"music-pic",attrs:{src:i("StLl")}}),this._v(" "),s("div",{staticClass:"music-detail"},[s("p",{staticClass:"music-name"},[this._v("不醉不会")]),this._v(" "),s("p",{staticClass:"music-singer"},[this._v("田馥甄")])])])}]};var g=i("VU/8")(v,f,!1,function(t){i("2C1L")},null,null).exports,w={methods:{hideSongSheet:function(){r.commit({type:"setIsShowSongSheet",isShow:!1})}},computed:{showSongSheet:function(){return this.isShow=!!this.$store.getters.getIsShowSongSheet&&this.$store.getters.getIsShowSongSheet,this.isShow}},components:{"bottom-bar":g}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"sliderUpHideRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSongSheet,expression:"showSongSheet"}],ref:"songsheet",staticClass:"songsheet"},[i("div",{staticClass:"songheader"},[i("i",{staticClass:"back icon-back",on:{click:function(s){return s.stopPropagation(),t.hideSongSheet(s)}}}),t._v(" "),i("p",{staticClass:"title"},[t._v("歌单")]),t._v(" "),i("i",{staticClass:"search icon-search"}),t._v(" "),i("i",{staticClass:"menu icon-list-circle"})]),t._v(" "),i("bottom-bar")],1)])},staticRenderFns:[]};var C=i("VU/8")(w,_,!1,function(t){i("whrq")},null,null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"range"})},staticRenderFns:[]};var y=i("VU/8")({data:function(){return{}}},S,!1,function(t){i("jtrG")},null,null).exports,b=i("StLl"),M=i.n(b),k={data:function(){return{isPlay:!1,filterbg:M.a,showCD:!0}},methods:{hideMusicDetail:function(){r.dispatch({type:"set_MusicDetail",isShow:!1})},playPause:function(){r.commit("togglePlay")}},computed:{isShowMusicDetail:function(){return this.$store.getters.getMusicDetail},isPlaying:function(){return this.isPlay=this.$store.getters.getIsPlaying,this.$store.getters.getIsPlaying?this.$store.getters.getIsPlaying:""}},components:{range:y}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"sliderUpHideRight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMusicDetail,expression:"isShowMusicDetail"}],staticClass:"musicdetail"},[e("div",{staticClass:"filterbg",style:{backgroundImage:"url("+t.filterbg+")",backgroundSize:"cover",backgroundPosition:"center center"}}),t._v(" "),e("div",{staticClass:"detailcontent"},[e("div",{staticClass:"content-header"},[e("i",{staticClass:"back icon-back",on:{click:t.hideMusicDetail}}),t._v(" "),e("div",{staticClass:"musicTopDetail"},[e("p",{staticClass:"name"},[t._v("不醉不会")]),t._v(" "),e("p",{staticClass:"singer"},[t._v("田馥甄")])]),t._v(" "),e("i",{staticClass:"share icon-share"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCD,expression:"showCD"}],staticClass:"content-wrapper"},[e("div",{staticClass:"cd"},[e("div",{staticClass:"swith-line"},[e("div",{staticClass:"triger",class:t.isPlaying?"":"pause"})]),t._v(" "),e("div",{staticClass:"cd-content"},[e("div",{ref:"cd",staticClass:"wrapper",class:t.isPlaying?"animate ":""},[e("div",{staticClass:"cd-bg"}),t._v(" "),e("img",{staticClass:"img",attrs:{src:i("StLl")}})])])]),t._v(" "),e("div",{staticClass:"musicDo"},[e("i",{staticClass:"icon icon-like"}),t._v(" "),e("i",{staticClass:"icon icon-download"}),t._v(" "),e("i",{staticClass:"icon icon-msg"}),t._v(" "),e("i",{staticClass:"icon icon-list-circle-small"})])]),t._v(" "),e("div",{staticClass:"content-footer"},[e("div",{staticClass:"div-range"},[e("range")],1),t._v(" "),e("div",{staticClass:"musicDetailCtrl"},[e("i",{staticClass:"playType icon-music-shunxu"}),t._v(" "),e("i",{staticClass:"prev icon-prevdetail"}),t._v(" "),e("i",{staticClass:"playPause",class:t.isPlaying?"icon-pause-detail":"icon-playdetail",on:{click:function(s){return s.stopPropagation(),t.playPause(s)}}}),t._v(" "),e("i",{staticClass:"next icon-nextdetail"}),t._v(" "),e("i",{staticClass:"menu icon-list-music"})])])])])])},staticRenderFns:[]};var x={data:function(){return{info:{}}},components:{"v-header":h,"side-bar":p,"bottom-bar":g,"song-sheet":C,"music-detail":i("VU/8")(k,P,!1,function(t){i("WPsW")},null,null).exports}},$={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-header",{attrs:{index:2}}),this._v(" "),s("side-bar",{attrs:{info:this.info}}),this._v(" "),s("bottom-bar"),this._v(" "),s("song-sheet"),this._v(" "),s("music-detail")],1)},staticRenderFns:[]};var I=i("VU/8")(x,$,!1,function(t){i("V3a6")},null,null).exports,D=i("/ocq"),E={props:{name:{type:String,default:"zhchi"},count:{type:String,default:"1"},hasBorder:{type:Boolean,default:!0},playing:{type:Boolean,default:!1},iconinfo:{type:String},bgcolor:{type:String,default:"#f7f7f7"}},data:function(){return{listName:"",listCount:"0",showBorder:!0,isPlaying:!1,iconInfo:"",typelistbg:""}},computed:{showCount:function(){return"none"!==this.count}},created:function(){this.listName=this.name,this.listCount=this.count,this.showBorder=this.hasBorder,this.isPlaying=this.playing,this.iconInfo=this.iconinfo,this.typelistbg=this.bgcolor}},R={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"typelist"},[i("i",{staticClass:"info",class:t.iconInfo}),t._v(" "),i("div",{staticClass:"typelist-detail"},[i("span",{staticClass:"name"},[t._v(t._s(t.listName))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.showCount,expression:"showCount"}],staticClass:"count"},[t._v("("+t._s(t.listCount)+")")]),t._v(" "),t.showBorder?i("p",{staticClass:"border-1px"}):t._e(),t._v(" "),t.isPlaying?i("i",{staticClass:"isPlaying icon-volume-medium"}):t._e()])])},staticRenderFns:[]};var N={props:{},data:function(){return{isShow:!1,showDownloadImage:!1,sheetData:{}}},methods:{showSongSheet:function(t){console.log("showSongSheet"),r.commit({type:"setIsShowSongSheet",isShow:!0})},showMenu:function(){console.log("showMenu"),r.dispatch({type:"showMenuList"})}}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"musicsheet"},[e("div",{staticClass:"title"},[e("i",{ref:"toggleicon",staticClass:"toggle icon-down"}),t._v(" "),t._m(0)]),t._v(" "),e("div",{on:{click:function(s){return s.stopPropagation(),t.showSongSheet(s)}}},[e("div",{staticClass:"content"},[e("img",{staticClass:"sheetimg",attrs:{alt:"",src:i("S7Pk")}}),t._v(" "),e("div",{staticClass:"detail"},[e("p",{staticClass:"name"},[t._v("我喜欢的音乐")]),t._v(" "),e("p",{staticClass:"count"},[t._v("1首歌曲")]),t._v(" "),e("i",{staticClass:"setting icon-list-circle",on:{click:function(s){return s.stopPropagation(),t.showMenu(s)}}})])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"detail"},[s("span",{staticClass:"name"},[this._v("我创建的歌单")]),this._v(" "),s("span",{staticClass:"count"},[this._v("(1)")]),this._v(" "),s("i",{staticClass:"setting icon-setting"})])}]};var V={data:function(){return{isShow:!1}},methods:{stopTouch:function(t){},hideMenuList:function(){r.dispatch({type:"hideMenuList"})}},computed:{showMenu:function(){return this.isShow=!!this.$store.getters.getIsShow&&this.$store.getters.getIsShow,!!this.$store.getters.getIsShow&&this.$store.getters.getIsShow}}},B={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"menulist"},[i("transition",{attrs:{name:"sideUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],ref:"content",staticClass:"content"},[i("p",{staticClass:"title"},[t._v("\n\t\t\t\t删除歌单\n\t\t\t")])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"mask",on:{click:t.hideMenuList,touchmove:function(s){s.stopPropagation(),s.preventDefault(),t.stopTouch(s)}}})])],1)},staticRenderFns:[]};var F={data:function(){return{}},components:{list:i("VU/8")(E,R,!1,function(t){i("r6hN")},null,null).exports,musicsheet:i("VU/8")(N,U,!1,function(t){i("mEw4")},null,null).exports,menulist:i("VU/8")(V,B,!1,function(t){i("iPHZ")},null,null).exports}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mymusic"},[s("list",{attrs:{name:"本地音乐",iconinfo:"icon-music",count:"28",playing:!0}}),this._v(" "),s("list",{attrs:{name:"最近播放",iconinfo:"icon-zuijinplay",count:"8"}}),this._v(" "),s("list",{attrs:{name:"下载管理",iconinfo:"icon-zuijinplay",count:"8"}}),this._v(" "),s("list",{attrs:{name:"我的电台",iconinfo:"icon-diantai",count:"2"}}),this._v(" "),s("list",{attrs:{name:"我的收藏",iconinfo:"icon-collect",count:"3"}}),this._v(" "),s("musicsheet"),this._v(" "),s("menulist")],1)},staticRenderFns:[]};var z=i("VU/8")(F,j,!1,function(t){i("othz")},"data-v-f917e8e6",null).exports,L=(i("v2ns"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"findsheettitle"},[s("span",{staticClass:"name"},[this._v("推荐歌单")]),this._v(" "),s("i",{staticClass:"icon icon-right"})])}]});var Z=i("VU/8")({},L,!1,function(t){i("li4e")},null,null).exports,H={props:{listpadding:{type:String,default:"0"},imagesrc:{type:String},showbottomtitle:{type:Boolean,default:!0},bottomtitle:{type:String},listwidth:{type:String}}},O={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"findsheetlist",style:{width:t.listwidth,padding:t.listpadding}},[i("div",{staticClass:"content"},[i("div",{staticClass:"image",style:{backgroundImage:"url("+t.imagesrc+")",backgroundSize:"cover",backgroundPosition:"center"}})]),t._v(" "),t.showbottomtitle?i("div",{staticClass:"title"},[t._v(t._s(t.bottomtitle))]):t._e()])},staticRenderFns:[]};var T=i("VU/8")(H,O,!1,function(t){i("p2IR")},null,null).exports,W=i("7QTg"),q=i.n(W),Q={data:function(){return{listwidth:"33.3%",padding:"0.5%",showbottomtitle:!0,listNum:[{id:1,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum1.jpg",bottomtitle:"甜味摇滚丨温柔在耳边凝成絮语"},{id:2,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum2.jpg",bottomtitle:"我多想再见你，哪怕匆匆一眼就别离"},{id:3,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum3.jpg",bottomtitle:"当三首情歌遇上一个伤感的故事"},{id:4,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum4.jpg",bottomtitle:"盘尼西林&落日飞车"},{id:5,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum5.jpg",bottomtitle:"欧美治愈|决定转身的时候就不要频频回头"},{id:6,imgsrc:"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum6.jpg",bottomtitle:"慢慢喜欢你-陈一发儿"}],items:["https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/taylor-swift.jpg","https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/xusong.jpg","https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/linjunjie.jpg"],swiperOption:{autoplay:3e3,grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,autoplayDisableOnInteraction:!1,observeParents:!0,loop:!0}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{showSongSheet:function(){console.log("showSongSheet"),r.commit({type:"setIsShowSongSheet",isShow:!0})}},components:{swiper:W.swiper,swiperSlide:W.swiperSlide,findsheettitle:Z,findsheetlist:T}},Y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"findrecommend"},[i("div",{staticClass:"mySwiper"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.items,function(t,s){return i("swiper-slide",{key:s},[i("img",{staticClass:"image",attrs:{src:t}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),t._m(0),t._v(" "),i("findsheettitle"),t._v(" "),i("div",{staticClass:"recommend-list",on:{click:t.showSongSheet}},t._l(t.listNum,function(s,e){return i("findsheetlist",{key:s.id,attrs:{imagesrc:s.imgsrc,listwidth:t.listwidth,listpadding:t.padding,showbottomtitle:s.showbottomtitle,bottomtitle:s.bottomtitle}})}))],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"recommend-type"},[i("div",{staticClass:"div-type"},[i("i",{staticClass:"icon-type icon-fm"}),t._v(" "),i("p",{staticClass:"title"},[t._v("私人FM")])]),t._v(" "),i("div",{staticClass:"div-type"},[i("i",{staticClass:"icon-type icon-date"}),t._v(" "),i("p",{staticClass:"title"},[t._v("每日听歌推荐")])]),t._v(" "),i("div",{staticClass:"div-type"},[i("i",{staticClass:"icon-type icon-rank-list"}),t._v(" "),i("p",{staticClass:"title"},[t._v("云音乐热歌榜")])])])}]};var A=i("VU/8")(Q,Y,!1,function(t){i("Zqbu")},null,null).exports,G={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"findsheet"},[s("p",[this._v("歌单")])])}]};var J=i("VU/8")({},G,!1,function(t){i("+QZ9")},null,null).exports,K={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"findradio"},[s("p",[this._v("电台")])])}]};var X=i("VU/8")({},K,!1,function(t){i("uIO+")},null,null).exports,tt={components:{findrecommend:A,findsheet:J,findradio:X}},st={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"findmusic"},[s("div",{staticClass:"find-menu"},[s("router-link",{staticClass:"menu-list",attrs:{tag:"div",to:"/findmusic/findrecommend"}},[s("div",{staticClass:"menu-list-div"},[this._v("推荐")])]),this._v(" "),s("router-link",{staticClass:"menu-list",attrs:{tag:"div",to:"/findmusic/findsheet"}},[s("div",{staticClass:"menu-list-div"},[this._v("歌单")])]),this._v(" "),s("router-link",{staticClass:"menu-list",attrs:{tag:"div",to:"/findmusic/findradio"}},[s("div",{staticClass:"menu-list-div"},[this._v("电台")])])],1),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var it=i("VU/8")(tt,st,!1,function(t){i("Mueu")},null,null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"community"},[s("p",[this._v("敬请期待")])])}]};var nt=i("VU/8")({},et,!1,function(t){i("uUI2")},"data-v-4a0b7d84",null).exports;e.a.use(D.a);var at=new D.a({routes:[{path:"/",redirect:"/mymusic"},{path:"/mymusic",component:z},{path:"/findmusic",component:it,children:[{path:"",redirect:"/findmusic/findrecommend"},{path:"/findmusic/findrecommend",component:A},{path:"/findmusic/findsheet",component:J},{path:"/findmusic/findradio",component:X}]},{path:"/community",component:nt}]});e.a.use(q.a),e.a.config.productionTip=!1,new e.a({el:"#app",store:r,router:at,components:{App:I},template:"<App/>"})},S7Pk:function(t,s,i){t.exports=i.p+"static/img/coverImg.2ebabfa.jpg"},StLl:function(t,s,i){t.exports=i.p+"static/img/tianfuzhen.33fb771.jpg"},V3a6:function(t,s){},VsYe:function(t,s){},WPsW:function(t,s){},ZI0e:function(t,s){},Zqbu:function(t,s){},iPHZ:function(t,s){},jtrG:function(t,s){},li4e:function(t,s){},mEw4:function(t,s){},othz:function(t,s){},p2IR:function(t,s){},r6hN:function(t,s){},"uIO+":function(t,s){},uUI2:function(t,s){},v2ns:function(t,s){},whrq:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.52d2454b0d1f13e00a70.js.map