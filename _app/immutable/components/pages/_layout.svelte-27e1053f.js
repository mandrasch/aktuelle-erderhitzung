import{S,i as w,s as x,k as p,q as v,a as I,l as _,m as h,r as b,h as u,c as P,n as $,b as y,C as m,D as J,u as V,B as D,w as T,x as q,p as C,y as F,f as k,t as N,z as H,E as G,F as L,G as M,H as R}from"../../chunks/index-a0c02d7a.js";import{g as O}from"../../chunks/stores-c2bb45ed.js";/* empty css                                                                              */function U(o){let t,a,s,r,l,n=JSON.stringify(o[0])+"",e,i,c,E,z,A;return{c(){t=p("div"),a=p("p"),s=v("Du hast der Nutzung und Einbettung folgender "),r=p("br"),l=v("Dienste zugestimmt: "),e=v(n),i=I(),c=p("button"),E=v("Einstellungen zurücksetzen"),this.h()},l(d){t=_(d,"DIV",{class:!0});var f=h(t);a=_(f,"P",{class:!0});var g=h(a);s=b(g,"Du hast der Nutzung und Einbettung folgender "),r=_(g,"BR",{}),l=b(g,"Dienste zugestimmt: "),e=b(g,n),g.forEach(u),i=P(f),c=_(f,"BUTTON",{class:!0});var B=h(c);E=b(B,"Einstellungen zurücksetzen"),B.forEach(u),f.forEach(u),this.h()},h(){$(a,"class","svelte-e7mmie"),$(c,"class","outline"),$(t,"class","container container-gdpr svelte-e7mmie")},m(d,f){y(d,t,f),m(t,a),m(a,s),m(a,r),m(a,l),m(a,e),m(t,i),m(t,c),m(c,E),z||(A=J(c,"click",o[1]),z=!0)},p(d,[f]){f&1&&n!==(n=JSON.stringify(d[0])+"")&&V(e,n)},i:D,o:D,d(d){d&&u(t),z=!1,A()}}}function j(o,t,a){let s=[];O.subscribe(l=>{a(0,s=l)});async function r(){O.update([])}return[s,r]}class K extends S{constructor(t){super(),w(this,t,j,U,x,{})}}function Q(o){let t,a,s,r,l,n;return t=new K({}),{c(){T(t.$$.fragment),a=I(),s=p("div"),r=p("a"),l=v("Datenschutz & Impressum"),this.h()},l(e){q(t.$$.fragment,e),a=P(e),s=_(e,"DIV",{class:!0,style:!0});var i=h(s);r=_(i,"A",{href:!0});var c=h(r);l=b(c,"Datenschutz & Impressum"),c.forEach(u),i.forEach(u),this.h()},h(){$(r,"href","https://matthias-andrasch.eu/blog/impressum-datenschutz/"),$(s,"class","container"),C(s,"text-align","center"),C(s,"margin-bottom","30px")},m(e,i){F(t,e,i),y(e,a,i),y(e,s,i),m(s,r),m(r,l),n=!0},p:D,i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){H(t,e),e&&u(a),e&&u(s)}}}class W extends S{constructor(t){super(),w(this,t,null,Q,x,{})}}function X(o){let t,a,s,r;const l=o[1].default,n=G(l,o,o[0],null);return s=new W({}),{c(){t=p("main"),n&&n.c(),a=I(),T(s.$$.fragment),this.h()},l(e){t=_(e,"MAIN",{class:!0});var i=h(t);n&&n.l(i),i.forEach(u),a=P(e),q(s.$$.fragment,e),this.h()},h(){$(t,"class","container")},m(e,i){y(e,t,i),n&&n.m(t,null),y(e,a,i),F(s,e,i),r=!0},p(e,[i]){n&&n.p&&(!r||i&1)&&L(n,l,e,e[0],r?R(l,e[0],i,null):M(e[0]),null)},i(e){r||(k(n,e),k(s.$$.fragment,e),r=!0)},o(e){N(n,e),N(s.$$.fragment,e),r=!1},d(e){e&&u(t),n&&n.d(e),e&&u(a),H(s,e)}}}function Y(o,t,a){let{$$slots:s={},$$scope:r}=t;return o.$$set=l=>{"$$scope"in l&&a(0,r=l.$$scope)},[r,s]}class se extends S{constructor(t){super(),w(this,t,Y,X,x,{})}}export{se as default};
