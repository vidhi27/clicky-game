(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{id:1,image:"assets/images/1.png",clicked:!1},{id:2,image:"assets/images/2.png",clicked:!1},{id:3,image:"assets/images/3.png",clicked:!1},{id:4,image:"assets/images/4.png",clicked:!1},{id:5,image:"assets/images/5.png",clicked:!1},{id:6,image:"assets/images/6.png",clicked:!1},{id:7,image:"assets/images/7.png",clicked:!1},{id:8,image:"assets/images/8.png",clicked:!1},{id:9,image:"assets/images/9.png",clicked:!1},{id:10,image:"assets/images/10.png",clicked:!1},{id:11,image:"assets/images/11.png",clicked:!1},{id:12,image:"assets/images/12.png",clicked:!1}]},18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(3),s=a.n(i),r=(a(23),a(17)),o=a(4),l=a(5),m=a(7),u=a(6),g=a(8),d=(a(25),function(e){return c.a.createElement("main",{className:"container"},e.children)}),f=(a(27),function(e){return c.a.createElement("div",{role:"img","aria-label":"click item",className:"gameCard ".concat(e.animate?"animated wobble":""),style:{backgroundImage:'url("'.concat(e.image,'")')},onClick:function(){return e.handleClick(e.id)}})}),h=a(16),p=(a(29),function(e){return c.a.createElement("div",{className:"jumbo"},c.a.createElement(h.a,null,c.a.createElement("h3",{className:" animated fadeInDown instructions"},e.message)))}),k=(a(33),a(35),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={animating:!1,message:""},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click a character to begin!"}},a.addAnimation=function(){switch(a.state.message){case"correct":return"animated pulse";case"incorrect":return"animated wobble";default:return""}},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t={animating:!0},a=e.score,n=e.topScore;t.message=0===a&&0===n?"":0!==a&&n>0?"correct":"incorrect",a===this.props.score&&this.state.message===t.message||this.setState(t)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:" \n              gameMessage \n              ".concat(this.state.animating?this.addAnimation():"","  \n              ").concat(this.state.animating?this.state.message:"black","\n            "),id:"".concat(this.state.message),onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component)),v=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h2",{className:" title animated swing"},"Clicky Game")),c.a.createElement(k,{score:e.score,topScore:e.topScore}),c.a.createElement("li",{id:"score"},"Score: ",e.score," | Top Score: ",e.topScore)))},w=(a(37),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},c.a.createElement("ul",{id:"footer-list"},c.a.createElement("li",null,c.a.createElement("span",null,c.a.createElement("img",{className:"logo",id:"reactLogo",alt:"reactLogo",src:"assets/images/react-logo.png"}))," Clicky Game!"),c.a.createElement("li",null,"@ 2018 Vidhi Panchal"),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/vidhi27/clicky-game",target:"blank"},c.a.createElement("span",null,c.a.createElement("img",{className:"logo",alt:"github",src:"assets/images/github.png"}))," Github")))))}),E=a(15),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:E,score:0,topScore:0,message:"Click as many images as you can without repeating"},a.shuffleDeck=function(e){return e.sort(function(e,t){return.5-Math.random()})},a.resetDeck=function(e){var t=e.map(function(e){return Object(r.a)({},e,{clicked:!1})});return a.shuffleDeck(t)},a.correctGuess=function(e){var t=a.state.score;t++;var n=Math.max(t,a.state.topScore);a.setState({data:a.shuffleDeck(e),score:t,topScore:n,animation:"animated swing"})},a.wrongGuess=function(e){a.setState({data:a.resetDeck(e),score:0})},a.gameCardClick=function(e){var t=!1,n=a.state.data.map(function(a){return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a});t?a.correctGuess(n):a.wrongGuess(n)},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleDeck(this.state.data)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(v,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(p,{message:this.state.message}),c.a.createElement(d,null,this.state.data.map(function(t){return c.a.createElement("div",{className:"animated rollIn"},c.a.createElement(f,{key:t.id,id:t.id,image:t.image,animate:!e.state.score&&e.state.topScore,clicked:t.clicked,handleClick:e.gameCardClick}))})),c.a.createElement(w,null))}}]),t}(n.Component),y=function(){return c.a.createElement(b,null)},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(39);s.a.render(c.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clicky-game","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.f6474b55.chunk.js.map