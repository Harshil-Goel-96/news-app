(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(91),a(35)),i=a(82),s=a.n(i),m=a(80),d=a.n(m),u=a(81),h=a.n(u),f=a(79),p=a.n(f),g=a(173),E=a(43),b=a.n(E),y=(a(92),a(175)),x=a(172),w=a(176),v=a(169),C=a(166),N=a(167),k=a(168),j=a(170),I=a(171),O=a(174),B=Object(O.a)({container:{maxWidth:"400px",height:"445px",display:"flex",flexDirection:"column",justifyContent:"space-between"},activecard:{borderBottom:"5px solid #3f51b5"},media:{height:"160px"},header:{display:"flex",justifyContent:"space-between",alignItems:"center"},actionarea:{display:"flex",justifyContent:"space-between"}}),S=a(74),T=a.n(S),A=function(e){var t=e.article,a=t.title,l=t.description,o=t.urlToImage,i=t.url,s=t.publishedAt,m=(t.author,t.source),d=e.i,u=e.newIndex,h=B();console.log("Card");var f=Object(n.useState)([]),p=Object(c.a)(f,2),g=p[0],E=p[1];return Object(n.useEffect)((function(){E((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;d===u&&g[u]&&(e=g[u],window.scroll(0,e.current.offsetTop-50))}),[d,u,g]),r.a.createElement(w.a,{ref:g[d],className:T()(h.container,u===d?h.activecard:"null"),elevation:4},r.a.createElement(C.a,{href:i,target:"_blank"},r.a.createElement(N.a,{className:h.media,image:o||"https://ak.picdn.net/shutterstock/videos/10027844/thumb/2.jpg",title:a}),r.a.createElement(k.a,{className:h.header},r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},m.name),r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},new Date(s).toDateString())),r.a.createElement(k.a,null,r.a.createElement(v.a,{gutterBottom:!0,variant:"body1",color:"textPrimary"},a),r.a.createElement(v.a,{variant:"body2",color:"textSecondary",noWrap:!0},l))),r.a.createElement(j.a,{className:h.actionarea},r.a.createElement(I.a,{variant:"outlined",size:"small",href:i,target:"_blank"},"Learn More"),r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},d+1)))},W=Object(O.a)({gridItem:{display:"flex",justifyContent:"center",alignItems:"center"},homeCard:{flexBasis:"350px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:"450px",color:"#E0F2F1",padding:"20px",textAlign:"center"}}),D=[{heading:"News By Country",textColor:"White",bgColor:"#1976D2",Example:"India, USA, China, Australia etc",Desc:"Give me the latest news from India"},{heading:"News By Source",textColor:"White",bgColor:"#26A69A",Example:"BBC News, ABC News, CNN, IGN, TechCrunch etc",Desc:"Give me the top headlines from BBC News OR Tell me the top headlines from CNN"},{heading:"News By Topic",textColor:"White",bgColor:"#0097A7",Example:"Trump, PS5, Coronavirus, Cars etc",Desc:"What about trump OR Tell me something about PS5"},{heading:"News By Category",textColor:"White",bgColor:"#5C6BC0",Example:"Business, Technology, Entertainment etc",Desc:"What are the technology headlines from India OR What is the business news from India"}],z=function(e){var t=e.articles,a=e.newIndex;console.log("NewsCards");var n=W();return t.length?r.a.createElement("div",{style:{padding:"20px 20px 20px 20px"}},r.a.createElement(x.a,{container:!0,className:n.container,spacing:2,justify:"center",alignItems:"center"},t.map((function(e,t){return r.a.createElement(x.a,{key:t,item:!0,xs:12,sm:6,lg:4,className:n.gridItem},r.a.createElement(A,{article:e,i:t,newIndex:a}))})))):r.a.createElement(y.a,{in:!0,timeout:500},r.a.createElement("div",{style:{padding:"35px 20px 20px 20px"}},r.a.createElement(x.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},D.map((function(e,t){return r.a.createElement(x.a,{key:t,item:!0,xs:12,sm:6,md:3,lg:3,className:n.gridItem},r.a.createElement(w.a,{className:n.homeCard,style:{backgroundColor:e.bgColor},elevation:5},r.a.createElement(v.a,{variant:"h5"},e.heading),r.a.createElement(v.a,{variant:"body1"},r.a.createElement("strong",null,e.heading.split(" ")[2]," : "),e.Example),r.a.createElement(v.a,{variant:"body2"},r.a.createElement("strong",null,"Try Saying : "),e.Desc)))})))))},G=a(78),H=a.n(G),_=function(){console.log("App");var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(-1),i=Object(c.a)(o,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){console.log("Before alan useEffect"),b()({key:"3f5bfbc63a56197c18c361921f07ef3c2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=(e.index,e.number);if("TopHeadlines"===t)console.log("inside alan"),l(a),u(-1);else if("ReadHeadlines"===t)u((function(e){return e+1}));else if("Open"===t){var r=n.length>2?H()(n,{fuzzy:!0}):n,o=a[r-1];r>20?b()().playText("Please try again"):a.length?window.open(o.url,"_blank"):b()().playText("No article available to open. Please try something different")}}}),console.log("After alan useEffect")}),[]),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-heading",onClick:function(){return l([])}},r.a.createElement("h1",null,"Hey ! Ask me about NEWS")),r.a.createElement("div",{className:"hero-para"},a.length?r.a.createElement("p",null,"Try saying : ",r.a.createElement("span",{style:{fontSize:"1.2rem",fontWeight:"bolder"}}," Go back Or Open article number 2")):r.a.createElement("p",null,"Try pressing the Hovering Mic button ",r.a.createElement(p.a,{style:{fontSize:"1rem"}})," at the bottom of this page and ask Alan about the Latest News or about some other stuff."))),r.a.createElement("div",{style:{backgroundColor:"#e0f2f1",flexGrow:1}},r.a.createElement(z,{articles:a,newIndex:m})),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("strong",null,"\xa9 Harshil Corp")),r.a.createElement("div",{className:"follow-pal"},r.a.createElement("p",null,r.a.createElement("strong",null,"Follow : ")),r.a.createElement(g.a,{href:"https://www.facebook.com/harshil.goel.60",target:"_blank",color:"inherit"},r.a.createElement(d.a,{className:"icon"})),r.a.createElement(g.a,{href:"https://www.twitter.com/harshilgoel96?s=01",target:"_blank",color:"inherit"},r.a.createElement(h.a,{className:"icon"})),r.a.createElement(g.a,{href:"https://github.com/Harshil-Goel-96/news-app",target:"_blank",color:"inherit",size:"small"},r.a.createElement(s.a,{className:"icon"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(151)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.57d5442a.chunk.js.map