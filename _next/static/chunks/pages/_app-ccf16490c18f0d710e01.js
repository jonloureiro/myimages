_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"6w4r":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),s=n("elyg"),u=n("nOHt"),i=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function h(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],d=(0,u.useRouter)(),v=d&&d.pathname||"/",g=c.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href);return{href:t,as:e.as?(0,s.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),m=g.href,y=g.as;c.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,s.isLocalURL)(m)&&!l[m+"%"+y])return p(a,(function(){h(d,m,y)}))}),[t,a,m,y,d]);var b=e.children,w=e.replace,E=e.shallow,_=e.scroll;"string"===typeof b&&(b=c.default.createElement("a",null,b));var N=c.Children.only(b),O={ref:function(e){e&&i(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,m,y,w,E,_)}};return t&&(O.onMouseEnter=function(e){(0,s.isLocalURL)(m)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),h(d,m,y,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(O.href=(0,s.addBasePath)(y)),c.default.cloneElement(N,O)};t.default=d},hUgY:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t);var o=n("q1tI"),a=n.n(o),c=n("nOHt"),s=n("YFqc"),u=n.n(s),i=a.a.createElement;function f(){return i("nav",{className:"navbar"},i("div",{className:"container-fluid"},i("div",{className:"navbar-brand"},i("a",{className:"text-secondary h2 text-decoration-none",href:""},"jonloureiro"),i("span",{className:"text-secondary mx-2 h2"},"/"),i(u.a,{href:"/"},i("a",{className:"h2 text-decoration-none"},"myimages"))),i("button",{className:"btn btn-outline-danger d-flex justify-content-center align-items-center",style:{width:"2.5rem",height:"2.5rem"}},i("i",{className:"gg-log-in"}))))}n("6w4r");var l=a.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps,s=Object(o.useState)(!1),u=s[0],i=s[1],p=Object(c.useRouter)();return Object(o.useEffect)((function(){!u&&p.pathname.startsWith("/dashboard")&&p.push("login")}),[u]),Object(o.useEffect)((function(){function e(e){!u&&e.startsWith("/dashboard")&&p.push("login")}return p.events.on("routeChangeStart",e),function(){p.events.off("routeChangeStart",e)}}),[]),l(a.a.Fragment,null,l(f,null),l(t,r({},n,{user:u,setUser:i})))}}},[[0,0,1,2]]]);