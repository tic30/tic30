(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){e.exports=a(88)},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(21),o=a.n(i),r=(a(64),a(4)),l=a(5),s=a(7),m=a(6),d=a(8),u=a(27),h=a(23),p=(a(65),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={animationCount:0,redirect:!1},a.setRedirect=function(){var e=a.state.animationCount;e>=2?a.setState({redirect:!0}):a.setState({animationCount:e+1})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.redirect?c.a.createElement(h.a,{push:!0,to:"/home"}):c.a.createElement("div",{className:"preloader-wrapper"},c.a.createElement("div",{className:"preloader-header",onAnimationEnd:this.setRedirect},c.a.createElement("div",{className:"preloader-header-text"},"Hello, this is Tim Chu")))}}]),t}(n.Component)),g=a(39),E=a(15),b=a(103),v=a(53),f=a.n(v),y=a(104),w=(a(70),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).nav=c.a.createRef(),a.toggleMobileNav=a.toggleMobileNav.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=0,t=this.nav.current;document.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop;a>e?t.classList.add("scrolled"):t.classList.remove("scrolled"),e=a<=0?0:a},!1)}},{key:"toggleMobileNav",value:function(){var e=this.nav.current.classList;e.contains("stuck")?e.remove("stuck"):e.add("stuck")}},{key:"render",value:function(){return c.a.createElement("div",{className:"nav",ref:this.nav},c.a.createElement(b.a,{container:!0,className:"nav-container"},c.a.createElement(b.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.a,{href:"#sec2"},"About Me"))),c.a.createElement(b.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.a,{href:"#sec3"},"Projects"))),c.a.createElement(b.a,{item:!0,xs:12,sm:!0,className:"logo-wrapper"},c.a.createElement("div",{className:"nav-item logo"},c.a.createElement(u.b,{to:"/home",className:"logo-text"}))),c.a.createElement(b.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.a,{href:"#sec4"},"Contact"))),c.a.createElement(b.a,{item:!0,xs:12,sm:!0},c.a.createElement("div",{className:"nav-item"},c.a.createElement(y.a,{href:"https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8",target:"_blank",rel:"noreferrer"},"Resume")))),c.a.createElement("div",{className:"nav-hamburger",onClick:this.toggleMobileNav},c.a.createElement("div",{className:"nav-hamburger-bars"})))}}]),t}(n.Component)),N=(a(80),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.direction,a=e.animated,n=e.content,i=e.callFlyer;return c.a.createElement("div",{className:"flyer flyer-"+t+(a?"":" noanimation")},c.a.createElement("div",{className:"flyer-inner"},n.titleIcon&&c.a.createElement("div",{className:"flyer-title-icon"},c.a.createElement("img",{src:"/imgs/"+n.titleIcon,alt:"Flyer Title Icon"})),c.a.createElement("h3",null,n.title),c.a.createElement("div",{className:"hr"}),c.a.createElement("p",{className:a?"animated":""},n.content),c.a.createElement("div",{className:"icons"},n.icons&&n.icons.map(function(e,t){return c.a.createElement("div",{key:t,className:"flyer-icon","data-target":e.dataTarget,onClick:i},c.a.createElement("img",{src:"/imgs/"+e.src,alt:"Flyer Icon"}))}))))}}]),t}(n.Component)),j=a(107),O=a(105),k=a(106),T=(a(81),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a.bubble=c.a.createRef(),a.popup=c.a.createRef(),a.togglePopup=a.togglePopup.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"togglePopup",value:function(){var e=this.state.open;if(this.popup.current){var t=this.popup.current.classList;e||setTimeout(function(){t.add("show2")},100),this.setState({open:!e})}}},{key:"render",value:function(){var e,t=this.state.open;return e=t?c.a.createElement(O.a,null):c.a.createElement(k.a,null),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contact-bubble",ref:this.bubble},c.a.createElement(j.a,{className:"contact-bubble-cta",onClick:this.togglePopup},e),c.a.createElement("div",{className:"contact-bubble-popup-container ".concat(t?"show1":""),ref:this.popup},c.a.createElement("div",{className:"contact-bubble-popup-item",id:"linkedin"},c.a.createElement(y.a,{className:"contact-bubble-popup-item-btn",href:"https://www.linkedin.com/in/tim-chu-980881a4",target:"_blank",rel:"noreferrer"},c.a.createElement("img",{src:"/imgs/icons/linkedin.svg",alt:"LinkedIn Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"Connect on LinkedIn\xa0\xa0\xa0")),c.a.createElement("div",{className:"contact-bubble-popup-item",id:"github"},c.a.createElement(y.a,{className:"contact-bubble-popup-item-btn",href:"https://github.com/tic30",target:"_blank",rel:"noreferrer"},c.a.createElement("img",{src:"/imgs/icons/github.svg",alt:"GitHub Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"Follow me on GitHub\xa0\xa0\xa0")),c.a.createElement("div",{className:"contact-bubble-popup-item",id:"email"},c.a.createElement(y.a,{className:"contact-bubble-popup-item-btn",href:"mailto:chutianxin@gmail.com"},c.a.createElement("img",{src:"/imgs/icons/email.svg",alt:"Email Icon"})),c.a.createElement("p",{className:"contact-bubble-popup-item-text"},"chutianxin@gmail.com\xa0\xa0\xa0")))),c.a.createElement("div",{className:"backdrop ".concat(t?"show":""),onClick:this.togglePopup}))}}]),t}(n.Component)),x=a(108),I=(a(82),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={open:!1,redirect:""},a.card=c.a.createRef(),a.backdrop=c.a.createRef(),a.clickCard=a.clickCard.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"clickCard",value:function(e){var t=this.card.current.getBoundingClientRect(),a=t.x,n=t.y,c=t.width,i=t.height,o=this.card.current,r=this;o.style.left="".concat(a,"px"),o.style.top="".concat(n,"px"),o.style.width="".concat(c,"px"),o.style.height="".concat(i,"px"),this.setState({open:!0}),setTimeout(function(){o.style.left="0",o.style.top="0",o.style.width="".concat(window.innerWidth,"px"),o.style.height="".concat(window.innerHeight,"px"),setTimeout(function(){r.setState({redirect:e})},1e3)},200)}},{key:"render",value:function(){var e=this.props,t=e.large,a=e.content,n=this.state,i=n.open,o=n.redirect;return""!==o?c.a.createElement(h.a,{push:!0,to:o}):c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{className:"portfolio-card ".concat(t?"portfolio-card-large":""," ").concat(i?"open":""),ref:this.card},c.a.createElement("div",{className:"portfolio-card-container"}," ",c.a.createElement("div",{className:"portfolio-card-img",style:{backgroundImage:"url(/imgs/".concat(a.imgUrl,")")},alt:"Portfolio"}),c.a.createElement("div",{className:"portfolio-card-text-wrapper ".concat(i?"open":"")},c.a.createElement("h4",null,a.title),c.a.createElement("div",{className:"portfolio-card-content"},c.a.createElement("p",null,a.subTitle),c.a.createElement("div",{className:"portfolio-card-btn"},a.btnText))))),i?c.a.createElement("div",{className:"placeHolder-card"}):"")}}]),t}(n.Component)),C=(a(83),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"scrollHint-wrapper"},c.a.createElement("div",{className:"scrollHint"}))}}]),t}(n.Component)),S={Hero:{title:"Hi, Welcome!",content:"This is Tim Chu, an open-minded problem solver, UX explorer and front end coder."},SelfIntro:{title:"I seek challenges, \n within and without of work.",content:"I embrace them, break them down into practical tasks and improve myself along the way. ",icons:[{src:"icons/archery.svg"},{src:"icons/pingpong.svg"},{src:"icons/soccer.svg"},{src:"icons/reading.svg"}]},Company:{title:"UX, \n Front end, and Fun",content:"Working at Indeed.com as a Design Technologist, I have hands on experience with UX research & design, front end prototyping and production level coding.",icons:[{src:"icons/indeed.png",dataTarget:"Indeed"},{src:"icons/siemens.svg",dataTarget:"Siemens"},{src:"icons/deephow.png",dataTarget:"Deephow"},{src:"icons/cmu.png",dataTarget:"Cmu"}]},Indeed:{titleIcon:"icons/indeed.png",content:"I am currently a Design Technologist, or some know as UX Engineer in Indeed. The motivation for me to go to work everyday is simply straightforward: to help people get jobs. The major chord of my work includes studying user, creating solutions and validating the effectiveness of the solutions through fast iterations of prototyping, testing, optimization and finally push to production."},Deephow:{titleIcon:"icons/deephow.png",content:"This AI start-up is incubated in Techstar by the hands of talents from Siemens UX team. I lead the front end architecture design and MVP development in early phase of the company. During the short journey I established a component-based, highly-reusable and efficient development ecosystem, introduced a fully automated process from coding, testing, building, to deployment and toubleshooting, and I advocated code ownership to boost productivity."},Siemens:{titleIcon:"icons/siemens.svg",content:"The experience at Siemens is fast-paced. Engineers and designers sync daily to enable development and design to run in parallel. Thanks to the close engagement with stake holder, I am able to test creative sometimes crazy ideas, collect feedback and iterate quickly on not only functions and feature but also tools, platforms and service systems."},Cmu:{titleIcon:"icons/cmu.png",content:"I joined a group of HCI student to create AR application and study its social impact. I received my degree of Master of Science in Software Engineering at Carnegie Mellon University(CMU) in 2018. CMU courses paved solid ground in engineering which I benefit from util today and encouraged me to pursue a life-long learning."},ITS:{title:"Intelligent Tutoring Systems",imgUrl:"its.png",subTitle:"Better teaching with AR.",btnText:"Coming Soon",pageUrl:"/its"},DealFindMe:{title:"DealFindMe",imgUrl:"dealfindme.png",subTitle:"Coupon at hand for the store I am standing in.",btnText:"Coming Soon",pageUrl:"/dfm"},Milu:{title:"Milu",imgUrl:"milu.png",subTitle:"An image content search engine.",btnText:"Coming Soon",pageUrl:"/milu"},EthereumWallet:{title:"Ethereum Wallet",imgUrl:"ethereumwallet.png",subTitle:"Checkout with Ethereum using this extension.",btnText:"Coming Soon",pageUrl:"/ethereumwallet"},MovieEmodex:{title:"Movie.Emodex",imgUrl:"movie.png",subTitle:"New movie rating based on emotional impact.",btnText:"Coming Soon",pageUrl:"/movieemodex"},ITSHero:{title:"INTELLIGENT TUTORING SYSTEMS",content:"Research Project @ CMU.HCII"}},F=function(e){var t=e.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,c=t.top<=a&&t.top+t.height>=0,i=t.left<=n&&t.left+t.width>=0;return c&&i};window.lastScrollTop=0;a(84);var H=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dynamicFlyer:"",timeouts:[]},a.contactBubble=c.a.createRef(),a.hand=c.a.createRef(),a.smile=c.a.createRef(),a.footer=c.a.createRef(),a.logoHover=a.logoHover.bind(Object(E.a)(a)),a.logoHoverEnd=a.logoHoverEnd.bind(Object(E.a)(a)),a.callFlyer=a.callFlyer.bind(Object(E.a)(a)),a.closeFlyer=a.closeFlyer.bind(Object(E.a)(a)),a.scrollEvent=a.scrollEvent.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"logoHover",value:function(){this.hand.current.classList.remove("animated","handTada"),this.hand.current.classList.add("visible","animated","handTada"),this.smile.current.classList.add("visible")}},{key:"logoHoverEnd",value:function(){var e=this.state.timeouts,t=this,a=setTimeout(function(){t.hand.current.classList.remove("visible","animated","handTada"),t.smile.current.classList.remove("visible")},800);this.setState({timeouts:[].concat(Object(g.a)(e),[a])})}},{key:"callFlyer",value:function(e){var t=e.currentTarget.getAttribute("data-target");this.setState({dynamicFlyer:t})}},{key:"closeFlyer",value:function(){this.setState({dynamicFlyer:""})}},{key:"componentDidMount",value:function(){var e,t=this.state.timeouts,a=this,n=document.querySelectorAll(".portfolio-card"),c=this.contactBubble.current,i=setTimeout(function(){a.logoHover(),a.logoHoverEnd()},2e3);this.setState({timeouts:[].concat(Object(g.a)(t),[i])}),n.forEach(function(e){F(e)&&e.classList.add("come-in")}),document.addEventListener("scroll",this.scrollEvent,!1),e=function(e){"up"===e&&window.innerHeight+window.scrollY+300<=document.body.offsetHeight&&document.querySelector(".contact-bubble-popup-container").classList.contains("show1")&&c.togglePopup()},document.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop,a="";return a=t>window.lastScrollTop?"down":"up",window.lastScrollTop=t<=0?0:t,e(a)},!1)}},{key:"scrollEvent",value:function(){document.querySelectorAll(".portfolio-card").forEach(function(e){F(e)&&e.classList.add("come-in")}),window.innerWidth>=960&&window.innerHeight+window.scrollY>=document.body.offsetHeight&&!document.querySelector(".contact-bubble-popup-container").classList.contains("show1")&&this.contactBubble.current.togglePopup()}},{key:"componentWillUnmount",value:function(){this.state.timeouts.forEach(function(e){clearTimeout(e)}),document.removeEventListener("scroll",this.scrollEvent,!1)}},{key:"render",value:function(){var e=this.state.dynamicFlyer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,null),c.a.createElement(T,{ref:this.contactBubble}),c.a.createElement("section",{id:"sec1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{id:"img-container",onMouseEnter:this.logoHover,onMouseLeave:this.logoHoverEnd},c.a.createElement("img",{id:"chu-logo",src:"/imgs/chu-logo.png",alt:"Loading Logo..."}),c.a.createElement("div",{id:"hand",ref:this.hand},c.a.createElement("img",{src:"/imgs/hand.png",alt:"Loading hand..."})),c.a.createElement("img",{id:"smile",src:"/imgs/smile.png",alt:"Loading smile...",ref:this.smile})),c.a.createElement("h1",null,S.Hero.title),c.a.createElement("p",{className:"contentText"},S.Hero.content)),c.a.createElement(C,null)),c.a.createElement("section",{id:"sec2"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"About me")),c.a.createElement("div",{className:"container"},e&&c.a.createElement(N,{direction:"left",animated:!0,content:S[e]}),c.a.createElement(N,{direction:"left",animated:!1,content:S.SelfIntro}),c.a.createElement("div",{className:"flyer-divider"},e&&c.a.createElement("div",{className:"closeBtn",onClick:this.closeFlyer},c.a.createElement(f.a,null))),c.a.createElement(N,{direction:"right",animated:!1,content:S.Company,callFlyer:this.callFlyer}))),c.a.createElement("section",{id:"sec3"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Projects")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container-inner container-inner-wrap"},c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container grid-container-left"},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(I,{large:!0,content:S.ITS}))),c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container grid-container-right"},c.a.createElement(b.a,{item:!0,xs:12,sm:6,md:12},c.a.createElement(I,{content:S.DealFindMe})),c.a.createElement(b.a,{item:!0,xs:12,sm:6,md:12},c.a.createElement(I,{content:S.Milu})))),c.a.createElement("div",{className:"container-inner"},c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container"},c.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:4},c.a.createElement(I,{content:S.EthereumWallet})),c.a.createElement(b.a,{item:!0,xs:12,sm:6,lg:8},c.a.createElement(I,{content:S.MovieEmodex})))))),c.a.createElement("section",{id:"sec4"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Lets chat"),c.a.createElement("h1",null,"I am open to",c.a.createElement("br",null),"creative ideas!")),c.a.createElement("footer",{ref:this.footer},"Copyright \xa9 2016 - 2019 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component),M=(a(86),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dynamicFlyer:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state.dynamicFlyer;return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,null),c.a.createElement(T,null),c.a.createElement("section",{id:"its-sec1"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,S.ITSHero.title),c.a.createElement("p",{className:"contentText"},S.ITSHero.content)),c.a.createElement(C,null)),c.a.createElement("section",{id:"its-sec2"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"About me")),c.a.createElement("div",{className:"container"},e&&c.a.createElement(N,{direction:"left",animated:"true",content:S[e]}),c.a.createElement(N,{direction:"left",animated:"false",content:S.SelfIntro}),c.a.createElement(N,{direction:"right",animated:"false",content:S.Company,callFlyer:this.callFlyer}))),c.a.createElement("section",{id:"its-sec3"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Projects")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container-inner"},c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container grid-container-left"},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(I,{large:!0,content:S.ITS}))),c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container grid-container-right"},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(I,{content:S.DealFindMe})),c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(I,{content:S.Milu})))),c.a.createElement("div",{className:"container-inner"},c.a.createElement(b.a,{container:!0,spacing:3,className:"grid-container"},c.a.createElement(b.a,{item:!0,xs:12,sm:6,md:4},c.a.createElement(I,{content:S.EthereumWallet})),c.a.createElement(b.a,{item:!0,xs:12,sm:6,md:8},c.a.createElement(I,{content:S.MovieEmodex})))))),c.a.createElement("section",{id:"its-sec4"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h2",null,"Lets chat"),c.a.createElement("h1",null,"I am open to",c.a.createElement("br",null),"creative ideas!")),c.a.createElement("footer",{ref:this.footer},"Copyright \xa9 2016 - 2019 Chu, Tianxin. All rights reserved.")))}}]),t}(n.Component)),L=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"dij")}}]),t}(n.Component),U=(a(87),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(h.b,{path:"/",exact:!0,component:p}),c.a.createElement(h.b,{path:"/home",component:H}),c.a.createElement(h.b,{path:"/its",component:M}),c.a.createElement(h.b,{path:"/dfm",component:L})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.263d8467.chunk.js.map