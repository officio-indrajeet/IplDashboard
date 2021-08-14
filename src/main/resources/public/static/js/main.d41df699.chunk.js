(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),m=c(11),h=c(4),o=(c(28),c(0)),d=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/team/".concat(a),s=t===c.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h1",{children:Object(o.jsx)(h.b,{to:n,children:a})}),Object(o.jsx)("h2",{className:"match-date",children:c.date}),Object(o.jsxs)("h3",{className:"match-venue",children:[" at ",c.venue]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(o.jsxs)("div",{className:"additional-detail",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:c.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:c.team2}),Object(o.jsx)("h3",{children:"Man of the match"}),Object(o.jsx)("p",{children:c.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[c.umpire1," , ",c.umpire2]})]})]})},u=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/team/".concat(a),s=t===c.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h3",{children:Object(o.jsx)(h.b,{to:n,children:a})}),Object(o.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),b=c(2),O=c(20),x=function(e){return null==e||null==e.team?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("div",{className:"win-loss-section",children:[Object(o.jsx)("h5",{style:{margin:"10px"},children:"Wins / Losses"}),Object(o.jsx)(O.PieChart,{data:[{title:"Losses",value:e.team.totalMatches-e.team.totalWins,color:"#a34d5d"},{title:"Wins",value:e.team.totalWins,color:"#4da375"}]})]})},f=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsx)("div",{className:"win-loss-section",children:Object(o.jsx)(x,{team:c})}),Object(o.jsxs)("div",{className:"match-detail-card-section",children:[Object(o.jsx)("h3",{children:"Latest Matches"}),Object(o.jsx)(d,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(o.jsx)(u,{teamName:c.teamName,match:e},e.id)})),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsxs)(h.b,{to:"/team/".concat(s,"/matches/").concat("2020"),children:["More ",">"]})})]}):Object(o.jsx)("h1",{children:"Team Not Found!"})}),v=(c(37),function(e){var t=e.teamName,c=[],a="2008",n="2020";console.log("Start Year2008"),console.log("End Year2020");for(var s=a;s<=n;s++)c.push(s);return console.log("year:"+c),Object(o.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/team/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),N=(c(38),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(b.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year"}),Object(o.jsx)(v,{teamName:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(o.jsx)(d,{teamName:r,match:e},e.id)}))]})]})}),p=(c(39),function(e){var t=e.teamName;return Object(o.jsx)("div",{className:"TeamTile",children:Object(o.jsx)("h1",{children:Object(o.jsx)(h.b,{to:"/team/".concat(t),children:t})})})}),g=(c(40),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(o.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(o.jsx)(p,{teamName:e.teamName},e.id)}))})]})}),w=(c(41),function(){return Object(o.jsx)("div",{className:"NavBar",children:Object(o.jsx)(h.b,{to:"",children:"Team Dashboard"})})});var y=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(w,{}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/team/:teamName/matches/:year",children:Object(o.jsx)(N,{})}),Object(o.jsx)(b.a,{path:"/team/:teamName",children:Object(o.jsx)(f,{})}),Object(o.jsx)(b.a,{path:"/",children:Object(o.jsx)(g,{})})]})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),M()}},[[42,1,2]]]);
//# sourceMappingURL=main.d41df699.chunk.js.map