(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,a){e.exports=a(89)},65:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),i=a.n(o),l=(a(65),a(4)),r=a(5),s=a(7),m=a(6),d=a(8),u=a(29),h=a(23),p=(a(66),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={animationCount:0,redirect:window.matchMedia("(max-width: 599px)").matches},a.setRedirect=function(){var e=a.state.animationCount;e>=2?a.setState({redirect:!0}):a.setState({animationCount:e+1})},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.redirect?c.a.createElement(h.c,{push:!0,to:"/home"}):c.a.createElement("div",{className:"preloader-wrapper"},c.a.createElement("div",{className:"preloader-header",onAnimationEnd:this.setRedirect},c.a.createElement("div",{className:"preloader-header-text"},"Hello, this is Tim Chu")))}}]),t}(n.Component)),g=a(40),b=a(13),v=a(104),E=a(54),f=a.n(E),y=a(28),w=a(105),N=(a(71),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).nav=c.a.createRef(),a.toggleMobileNav=a.toggleMobileNav.bind(Object(b.a)(a)),a.logoClickHandler=a.logoClickHandler.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=0,t=this.nav.current;document.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop;a>e?t.classList.add("scrolled"):t.classList.remove("scrolled"),e=a<=0?0:a},!1)}},{key:"toggleMobileNav",value:function(){var e=this.nav.current.classList;e.contains("stuck")?e.remove("stuck"):e.add("stuck")}},{key:"logoClickHandler",value:function(e){"home"===this.props.pageId&&(e.preventDefault(),window.scrollTo({top:document.documentElement.offsetTop,left:0,behavior:"smooth"}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"nav",ref:this.nav},c.a.createElement(v.a,{container:!0,className:"nav-container"},c.a.createElement(v.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.HashLink,{to:"#sec2"},c.a.createElement(w.a,null,"About Me")))),c.a.createElement(v.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.HashLink,{to:"#sec3"},c.a.createElement(w.a,null,"Projects")))),c.a.createElement(v.a,{item:!0,xs:12,sm:!0,className:"logo-wrapper"},c.a.createElement("div",{className:"nav-item logo"},c.a.createElement(y.HashLink,{to:"/home",className:"logo-text",onClick:this.logoClickHandler}))),c.a.createElement(v.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.HashLink,{to:"#sec4"},c.a.createElement(w.a,null,"Contact")))),c.a.createElement(v.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.HashLink,{to:"https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8",target:"_blank",rel:"noreferrer"},c.a.createElement(w.a,null,"Resume"))))),c.a.createElement("div",{className:"nav-hamburger",onClick:this.toggleMobileNav},c.a.createElement("div",{className:"nav-hamburger-bars"})))}}]),t}(n.Component)),k=(a(81),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.direction,a=e.animated,n=e.content,o=e.callFlyer;return c.a.createElement("div",{className:"flyer flyer-"+t+(a?"":" noanimation")},c.a.createElement("div",{className:"flyer-inner"},n.titleIcon&&c.a.createElement("div",{className:"flyer-title-icon"},c.a.createElement("img",{src:"/imgs/"+n.titleIcon,alt:"Flyer Title Icon"})),c.a.createElement("h3",null,n.title),c.a.createElement("p",{className:a?"animated":""},n.content),c.a.createElement("div",{className:"icons"},n.icons&&n.icons.map(function(e,t){return c.a.createElement("div",{key:t,className:"flyer-icon","data-target":e.dataTarget,onClick:o},c.a.createElement("img",{src:"/imgs/"+e.src,alt:"Flyer Icon"}))}))))}}]),t}(n.Component)),j=a(108),O=a(106),T=a(107),C=(a(82),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a.bubble=c.a.createRef(),a.popup=c.a.createRef(),a.togglePopup=a.togglePopup.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"togglePopup",value:function(){var e=this.state.open;if(this.popup.current){var t=this.popup.current.classList;e||setTimeout(function(){t.add("show2")},100),this.setState({open:!e})}}},{key:"render",value:function(){var e,t=this.state.open;return e=t?c.a.createElement(O.a,null):c.a.createElement(T.a,null),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contact-bubble",ref:this.bubble},c.a.createElement(j.a,{className:"contact-bubble-cta",onClick:this.togglePopup},e),c.a.createElement("div",{className:"contact-bubble-popup-container ".concat(t?"show1":""),ref:this.popup},c.a.createElement("div",{className:"contact-bubble-popup-item",id:"linkedin"},c.a.createElement(w.a,{className:"contact-bubble-popup-item-btn",href:"https://www.linkedin.com/in/tim-chu-980881a4",target:"_blank",rel:"noreferrer"},c.a.createElement("img",{src:"/imgs/icons/linkedin.svg",alt:"LinkedIn Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"Connect")),c.a.createElement("div",{className:"contact-bubble-popup-item",id:"github"},c.a.createElement(w.a,{className:"contact-bubble-popup-item-btn",href:"https://github.com/tic30",target:"_blank",rel:"noreferrer"},c.a.createElement("img",{src:"/imgs/icons/github.svg",alt:"GitHub Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"Follow me: tic30")),c.a.createElement("div",{className:"contact-bubble-popup-item",id:"email"},c.a.createElement(w.a,{className:"contact-bubble-popup-item-btn",href:"mailto:chutianxin@gmail.com"},c.a.createElement("img",{src:"/imgs/icons/email.svg",alt:"Email Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"chutianxin@gmail.com")))),c.a.createElement("div",{className:"backdrop ".concat(t?"show":""),onClick:this.togglePopup}))}}]),t}(n.Component)),I=a(109),x=(a(83),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={open:!1,redirect:""},a.card=c.a.createRef(),a.backdrop=c.a.createRef(),a.clickCard=a.clickCard.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"clickCard",value:function(e){var t=this.card.current.getBoundingClientRect(),a=t.x,n=t.y,c=t.width,o=t.height,i=this.card.current,l=this;i.style.left="".concat(a,"px"),i.style.top="".concat(n,"px"),i.style.width="".concat(c,"px"),i.style.height="".concat(o,"px"),this.setState({open:!0}),setTimeout(function(){i.style.left="0",i.style.top="0",i.style.width="".concat(window.innerWidth,"px"),i.style.height="".concat(window.innerHeight,"px"),setTimeout(function(){l.setState({redirect:e})},1e3)},200)}},{key:"render",value:function(){var e=this,t=this.props,a=t.large,n=t.content,o=this.state,i=o.open,l=o.redirect;return""!==l?c.a.createElement(h.c,{push:!0,to:l}):c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{className:"portfolio-card ".concat(a?"portfolio-card-large":""," ").concat(i?"open":""),ref:this.card},c.a.createElement("div",{className:"portfolio-card-container",onClick:function(){return e.clickCard(n.pageUrl)}},c.a.createElement("div",{className:"portfolio-card-img",style:{backgroundImage:"url(/imgs/".concat(n.imgUrl,")")},alt:"Portfolio"}),c.a.createElement("div",{className:"portfolio-card-text-wrapper ".concat(i?"open":"")},c.a.createElement("h4",null,n.title),c.a.createElement("div",{className:"portfolio-card-content"},c.a.createElement("p",null,n.subTitle),c.a.createElement("div",{className:"portfolio-card-btn"},n.btnText))))),i?c.a.createElement("div",{className:"placeHolder-card"}):"")}}]),t}(n.Component)),H=(a(84),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"scrollHint-wrapper"},c.a.createElement("div",{className:"scrollHint"}))}}]),t}(n.Component)),S={Hero:{title:"Hi, Welcome!",content:"This is Tim Chu, an open-minded problem solver, UX explorer and front end coder."},SelfIntro:{title:"I seek challenges, \n within and without of work.",content:"I embrace them, break them down into practical tasks and improve myself along the way.",icons:[{src:"icons/archery.svg"},{src:"icons/pingpong.svg"},{src:"icons/soccer.svg"},{src:"icons/reading.svg"}]},Company:{title:"UX, \n Front end, and Fun",content:"I have hands on experience with UX research & design, front end prototyping and production level coding.",icons:[{src:"icons/indeed.png",dataTarget:"Indeed"},{src:"icons/siemens.svg",dataTarget:"Siemens"},{src:"icons/deephow.png",dataTarget:"Deephow"},{src:"icons/cmu.png",dataTarget:"Cmu"}]},Indeed:{titleIcon:"icons/indeed.png",content:"I am working as a UX Developer at Indeed. The motivation for me to go to work everyday is simply straightforward: to help people get jobs. The major chord of my work includes studying user, creating solutions and validating the effectiveness of the solutions through fast iterations of prototyping, testing, optimization and finally push to production."},Deephow:{titleIcon:"icons/deephow.png",content:"This AI start-up is incubated in Techstar by the hands of talents from Siemens UX team. I lead the front end architecture design and MVP development in early phase of the company. During the short journey I established a component-based, highly-reusable and efficient development ecosystem, introduced a fully automated process from coding, testing, building, to deployment and toubleshooting, and I advocated code ownership to boost productivity."},Siemens:{titleIcon:"icons/siemens.svg",content:"The experience at Siemens is fast-paced. Engineers and designers sync daily to enable development and design to run in parallel. Thanks to the close engagement with stake holder, I am able to test creative sometimes crazy ideas, collect feedback and iterate quickly on not only functions and feature but also tools, platforms and service systems."},Cmu:{titleIcon:"icons/cmu.png",content:"I joined a group of HCI student to create AR application and study its social impact. I received my degree of Master of Science in Software Engineering at Carnegie Mellon University(CMU) in 2018. CMU courses paved solid ground in engineering which I benefit from util today and encouraged me to pursue a life-long learning."},ITS:{title:"Intelligent Tutoring Systems",imgUrl:"its.png",subTitle:"Better teaching with AR.",btnText:"Coming Soon",pageUrl:"/its"},DealFindMe:{title:"DealFindMe",imgUrl:"dealfindme.png",subTitle:"Coupon at hand for the store I am standing in.",btnText:"Coming Soon",pageUrl:"/dfm"},Milu:{title:"Milu",imgUrl:"milu.png",subTitle:"An image content search engine.",btnText:"Coming Soon",pageUrl:"/milu"},EthereumWallet:{title:"Ethereum Wallet",imgUrl:"ethereumwallet.png",subTitle:"Checkout with Ethereum using this extension.",btnText:"Coming Soon",pageUrl:"/ethereumwallet"},MovieEmodex:{title:"Movie.Emodex",imgUrl:"movie.png",subTitle:"New movie rating based on emotional impact.",btnText:"Coming Soon",pageUrl:"/movieemodex"},ITSHero:{title:"INTELLIGENT TUTORING SYSTEMS",content:"Research Project @ CMU.HCII"}},L=function(e){var t=e.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,c=t.top<=a&&t.top+t.height>=0,o=t.left<=n&&t.left+t.width>=0;return c&&o};window.lastScrollTop=0;a(85);var F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dynamicFlyer:"",timeouts:[]},a.contactBubble=c.a.createRef(),a.hand=c.a.createRef(),a.smile=c.a.createRef(),a.footer=c.a.createRef(),a.logoHover=a.logoHover.bind(Object(b.a)(a)),a.logoHoverEnd=a.logoHoverEnd.bind(Object(b.a)(a)),a.callFlyer=a.callFlyer.bind(Object(b.a)(a)),a.closeFlyer=a.closeFlyer.bind(Object(b.a)(a)),a.scrollEvent=a.scrollEvent.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"logoHover",value:function(){this.hand.current.classList.remove("animated","handTada"),this.hand.current.classList.add("visible","animated","handTada"),this.smile.current.classList.add("visible")}},{key:"logoHoverEnd",value:function(){var e=this.state.timeouts,t=this,a=setTimeout(function(){t.hand.current.classList.remove("visible","animated","handTada"),t.smile.current.classList.remove("visible")},800);this.setState({timeouts:[].concat(Object(g.a)(e),[a])})}},{key:"callFlyer",value:function(e){var t=e.currentTarget.getAttribute("data-target");this.setState({dynamicFlyer:t})}},{key:"closeFlyer",value:function(){this.setState({dynamicFlyer:""})}},{key:"scrollEvent",value:function(){document.querySelectorAll(".portfolio-card").forEach(function(e){L(e)&&e.classList.add("come-in")}),window.innerWidth>=960&&window.innerHeight+window.scrollY>=document.body.offsetHeight&&!document.querySelector(".contact-bubble-popup-container").classList.contains("show1")&&this.contactBubble.current.togglePopup()}},{key:"componentDidMount",value:function(){var e,t=this.state.timeouts,a=this,n=document.querySelectorAll(".portfolio-card"),c=this.contactBubble.current,o=setTimeout(function(){a.logoHover(),a.logoHoverEnd()},2e3);this.setState({timeouts:[].concat(Object(g.a)(t),[o])}),n.forEach(function(e){L(e)&&e.classList.add("come-in")}),window.addEventListener("scroll",this.scrollEvent),e=function(e){"up"===e&&window.innerHeight+window.scrollY+300<=document.body.offsetHeight&&document.querySelector(".contact-bubble-popup-container").classList.contains("show1")&&c.togglePopup()},document.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop,a="";return a=t>window.lastScrollTop?"down":"up",window.lastScrollTop=t<=0?0:t,e(a)},!1)}},{key:"componentWillUnmount",value:function(){this.state.timeouts.forEach(function(e){clearTimeout(e)}),window.removeEventListener("scroll",this.scrollEvent)}},{key:"render",value:function(){var e=this.state.dynamicFlyer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{pageId:"home"}),c.a.createElement(C,{ref:this.contactBubble}),c.a.createElement("section",{id:"sec1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{id:"img-container",onMouseEnter:this.logoHover,onMouseLeave:this.logoHoverEnd},c.a.createElement("img",{id:"chu-logo",src:"/imgs/chu-logo.png",alt:"Loading Logo..."}),c.a.createElement("div",{id:"hand",ref:this.hand},c.a.createElement("img",{src:"/imgs/hand.png",alt:"Loading hand..."})),c.a.createElement("img",{id:"smile",src:"/imgs/smile.png",alt:"Loading smile...",ref:this.smile})),c.a.createElement("h1",null,S.Hero.title),c.a.createElement("p",{className:"contentText"},S.Hero.content)),c.a.createElement(H,null)),c.a.createElement("section",{id:"sec2"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"About me")),c.a.createElement("div",{className:"container"},e&&c.a.createElement(k,{direction:"left",animated:!0,content:S[e]}),c.a.createElement(k,{direction:"left",animated:!1,content:S.SelfIntro}),c.a.createElement("div",{className:"flyer-divider"},e&&c.a.createElement("div",{className:"closeBtn",onClick:this.closeFlyer},c.a.createElement(f.a,null))),c.a.createElement(k,{direction:"right",animated:!1,content:S.Company,callFlyer:this.callFlyer}))),c.a.createElement("section",{id:"sec3"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Projects")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container-inner container-inner-wrap"},c.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container grid-container-left"},c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(x,{large:!0,content:S.ITS}))),c.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container grid-container-right"},c.a.createElement(v.a,{item:!0,xs:12,sm:6,md:12},c.a.createElement(x,{content:S.DealFindMe})),c.a.createElement(v.a,{item:!0,xs:12,sm:6,md:12},c.a.createElement(x,{content:S.Milu})))),c.a.createElement("div",{className:"container-inner"},c.a.createElement(v.a,{container:!0,spacing:3,className:"grid-container"},c.a.createElement(v.a,{item:!0,xs:12,sm:6,lg:4},c.a.createElement(x,{content:S.EthereumWallet})),c.a.createElement(v.a,{item:!0,xs:12,sm:6,lg:8},c.a.createElement(x,{content:S.MovieEmodex})))))),c.a.createElement("section",{id:"sec4"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Lets chat"),c.a.createElement("h1",null,"I am open to",c.a.createElement("br",null),"creative ideas!")),c.a.createElement("footer",{ref:this.footer},"Copyright \xa9 2016 - 2019 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component),M=(a(87),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dynamicFlyer:""},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){this.state.dynamicFlyer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,null),c.a.createElement(C,null),c.a.createElement("section",{id:"its-sec1"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,S.ITSHero.title),c.a.createElement("p",{className:"contentText"},S.ITSHero.content)),c.a.createElement(H,null)),c.a.createElement("section",{id:"its-sec2"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"About me")),c.a.createElement("div",{className:"container"})),c.a.createElement("section",{id:"its-sec3"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Projects")),c.a.createElement("div",{className:"container"})),c.a.createElement("section",{id:"its-sec4"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Lets chat"),c.a.createElement("h1",null,"I am open to",c.a.createElement("br",null),"creative ideas!")),c.a.createElement("footer",{ref:this.footer},"Copyright \xa9 2016 - 2019 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component)),U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"dij")}}]),t}(n.Component),R=(a(88),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(u.HashRouter,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(h.g,null,c.a.createElement(h.d,{path:"/",exact:!0,component:p}),c.a.createElement(h.d,{path:"/home",component:F}),c.a.createElement(h.d,{path:"/its",component:M}),c.a.createElement(h.d,{path:"/dfm",component:U}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.1906cc6b.chunk.js.map