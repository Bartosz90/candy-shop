(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/bee.6dc4e4dc.png"},25:function(e,t,a){e.exports=a.p+"static/media/sweets1.826b92a5.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/sweets2.334e06df.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/sweets3.1b2bfc55.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/sweets4.e7ae6f5b.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/sweets5.8baca748.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/donut.068a6eea.png"},31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),i=a.n(o),r=(a(36),a(9)),s=a(10),l=a(12),m=a(11),u=a(13),p=a(7),d=(a(37),a(38),a(22)),f=a.n(d),h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"welcome welcome-1"}),c.a.createElement("div",{className:"welcome welcome-2"}),c.a.createElement("div",{className:"welcome welcome-3"}),c.a.createElement("div",{className:"welcome welcome-4"}),c.a.createElement("div",{className:"msg"},c.a.createElement("img",{src:f.a,alt:"",className:"bee"})),c.a.createElement("div",{className:"author"},"Icons made by"," ",c.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",c.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")))},b=(a(39),function(e){var t=e.active,a=e.click,n=e.sections.map(function(e){return c.a.createElement(p.b,{to:e.path,exact:!0,key:e.id,activeClassName:"active-menu-btn",onClick:a},c.a.createElement("button",{onClick:a,className:"menu-btn btn-".concat(e.id)},e.name))});return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:t?"nav-burger active":"nav-burger",onClick:a},c.a.createElement("span",{className:"span-1"}),c.a.createElement("span",{className:"span-2"}),c.a.createElement("span",{className:"span-3"})),c.a.createElement("nav",{className:t?"nav active":"nav"},n))}),v=(a(44),a(5)),E=(a(20),a(25)),g=a.n(E),w=a(26),y=a.n(w),k=a(27),N=a.n(k),x=a(28),D=a.n(x),C=a(29),j=a.n(C),A=a(30),O=a.n(A),S=[{letter:"c",id:1,delay:.3,bgc:"#e4508f"},{letter:"a",id:2,delay:.8,bgc:"#ff8364"},{letter:"n",id:3,delay:.4,bgc:"#e4508f"},{letter:"d",id:4,delay:0,bgc:"#ff8364"},{letter:"y",id:5,delay:.6,bgc:"#e4508f"},{letter:"s",id:6,delay:.5,bgc:"#ff8364"},{letter:"h",id:7,delay:.1,bgc:"#e4508f"},{letter:"o",id:8,delay:.7,bgc:"#ff8364"},{letter:"p",id:9,delay:.2,bgc:"#e4508f"},{letter:"!",id:10,delay:.9,bgc:"#ff8364"}],I=["#72d6c9","#ffc785","#72d6c9","#484c7f","#60a9a6","#ab93c9","#b0deff","#99ddcc","#efca8c"],M=function(e){var t=e.animationDone,a=S.map(function(e){return c.a.createElement("span",{className:"letter",key:e.id,style:{animationDelay:"".concat(t?e.delay+.5:e.delay+5,"s"),color:"".concat(I[Math.floor(Math.random()*(I.length-1-0+1))+0]),backgroundColor:"".concat(e.bgc)}},e.letter)});return c.a.createElement("header",{className:"home-header"},a)},L=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={activeSentenceIndex:0,textOpacity:"1",topLipAnimation:"speak-up .1s linear 8",botLipAnimation:"speak-down .1s linear 8"},a.images=[g.a,y.a,N.a,D.a,j.a],a.donutSentences=["Hi, check out the menu above.","Hey you! Wanna buy a donut?","How'r you doin?","What's up, fella?","How's ur day, friend?","I'm hungry... need a sweet!","Has anyone seen some candies?!","I need some sugar. "],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.animationDone&&this.setState({activeSentenceIndex:Math.floor(Math.random()*(this.donutSentences.length-1-1+1))+1}),this.timer=setTimeout(function(){e.timer2=setInterval(function(){e.setState({textOpacity:"0",topLipAnimation:"none",botLipAnimation:"none"}),e.timer3=setTimeout(function(){e.setState({textOpacity:"1",topLipAnimation:"speak-up .1s linear 8",botLipAnimation:"speak-down .1s linear 8",activeSentenceIndex:Math.floor(Math.random()*(e.donutSentences.length-1-1+1))+1})},1e3)},6e3)},this.props.animationDone?100:5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),clearInterval(this.timer2),clearTimeout(this.timer3)}},{key:"render",value:function(){return c.a.createElement("section",{className:"home main-section"},c.a.createElement(M,{animationDone:this.props.animationDone}),c.a.createElement("div",{className:"donut",style:{backgroundImage:"url(".concat(O.a,")"),right:"".concat(this.props.animationDone?"48%":"-100px"),animation:"".concat(this.props.animationDone?"none":"walk 3s linear 5.5s forwards, step .1s linear 5.5s 30")}},c.a.createElement("div",{className:"top-lip",style:{animation:this.state.topLipAnimation,animationDelay:"".concat(this.props.animationDone?"1s":"8.8s")}}),c.a.createElement("div",{className:"bot-lip",style:{animation:this.state.botLipAnimation,animationDelay:"".concat(this.props.animationDone?"1s":"8.8s")}}),c.a.createElement("div",{className:"text-1",style:{animationDelay:"".concat(this.props.animationDone?"1s":"8.8s"),opacity:"".concat(this.state.textOpacity)}}),c.a.createElement("div",{className:"text-2",style:{animationDelay:"".concat(this.props.animationDone?"1.2s":"9s"),opacity:"".concat(this.state.textOpacity)}},this.donutSentences[this.state.activeSentenceIndex])))}}]),t}(n.Component),P=function(){return c.a.createElement("section",{className:"about main-section"},c.a.createElement("h1",null,"About"))},B=function(){return c.a.createElement("section",{className:"aroducts main-section"},c.a.createElement("h1",null,"Products"))},F=function(){return c.a.createElement("section",{className:"aontact main-section"},c.a.createElement("h1",null,"Contact"))},H=function(e){var t=e.animationDone;return c.a.createElement("main",{className:"main"},c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",exact:!0,render:function(){return c.a.createElement(L,{animationDone:t})}}),c.a.createElement(v.a,{path:"/about",exact:!0,component:P}),c.a.createElement(v.a,{path:"/products",exact:!0,component:B}),c.a.createElement(v.a,{path:"/contact",exact:!0,component:F}),c.a.createElement(v.a,{exact:!0,component:L})))},T=(a(45),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"https://github.com/Bartosz90",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github-square"})),c.a.createElement("a",{href:"https://www.facebook.com/bartek.krupa.503",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/bartosz-krupa-95b715159/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin"}))),c.a.createElement("h1",null,"2019"," ",c.a.createElement("a",{href:"https://bartosz90.github.io/Portfolio/",target:"_blank",rel:"noopener noreferrer"},"B. Krupa")))}),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={welcomePageCounter:0,isNavActive:!1,sections:[{name:"home",id:1,path:"/"},{name:"about",id:2,path:"/about"},{name:"products",id:3,path:"/products"},{name:"contact",id:4,path:"/contact"}],animationDone:!1},a.handleMenu=function(){a.setState({isNavActive:!a.state.isNavActive})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.setState({welcomePageCounter:e.state.welcomePageCounter+1}),e.state.welcomePageCounter>7&&clearInterval(t)},1e3);setTimeout(function(){e.setState({animationDone:!0})},1e4)}},{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(c.a.Fragment,null,this.state.welcomePageCounter<7&&c.a.createElement(h,null),c.a.createElement(b,{active:this.state.isNavActive,click:this.handleMenu,sections:this.state.sections}),c.a.createElement(H,{sections:this.state.sections,animationDone:this.state.animationDone}),c.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.6ab5fa26.chunk.js.map