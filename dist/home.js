(()=>{(()=>{function t(...n){let s=n.length;for(let r=0;r<s;r++){let o=n[r];o.nodeType===1||o.nodeType===11?this.appendChild(o):this.appendChild(document.createTextNode(String(o)))}}function e(...n){for(;this.lastChild;)this.removeChild(this.lastChild);n.length&&this.append(...n)}function i(...n){let s=this.parentNode,r=n.length;if(!!s)for(r||s.removeChild(this);r--;){let o=n[r];typeof o!="object"?o=this.ownerDocument.createTextNode(o):o.parentNode&&o.parentNode.removeChild(o),r?s.insertBefore(this.previousSibling,o):s.replaceChild(o,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function x(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((i,n)=>{let s=Object.getOwnPropertyDescriptor(Object(t),n),r=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(i,n,r||s)},{})}function N(t){return typeof t=="string"}function F(t){return Array.isArray(t)}function P(t={}){let e=x(t),i;return e.types!==void 0?i=e.types:e.split!==void 0&&(i=e.split),i!==void 0&&(e.types=(N(i)||F(i)?String(i):"").split(",").map(n=>String(n).trim()).filter(n=>/((line)|(word)|(char))/i.test(n))),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function H(t){let e=N(t)||F(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function D(t){return t!==null&&typeof t=="object"}function ct(t){return D(t)&&/^(1|3|11)$/.test(t.nodeType)}function at(t){return typeof t=="number"&&t>-1&&t%1===0}function dt(t){return D(t)&&at(t.length)}function W(t){return F(t)?t:t==null?[]:dt(t)?Array.prototype.slice.call(t):[t]}function q(t){let e=t;return N(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),W(e).reduce((i,n)=>[...i,...W(n).filter(ct)],[])}var{entries:pt,keys:Pt,values:vt}=Object,v="_splittype",b={},ft=0;function y(t,e,i){if(!D(t))return console.warn("[data.set] owner is not an object"),null;let n=t[v]||(t[v]=++ft),s=b[n]||(b[n]={});return i===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(b[n]={...s,...e}):e!==void 0&&(s[e]=i),i}function T(t,e){let i=D(t)?t[v]:null,n=i&&b[i]||{};return e===void 0?n:n[e]}function I(t){let e=t&&t[v];e&&(delete t[e],delete b[e])}function ht(){pt(b).forEach(([t,{isRoot:e,isSplit:i}])=>{(!e||!i)&&(b[t]=null,delete b[t])})}function ut(t,e=" "){return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}var B="\\ud800-\\udfff",U="\\u0300-\\u036f\\ufe20-\\ufe23",Y="\\u20d0-\\u20f0",X="\\ufe0e\\ufe0f",mt=`[${B}]`,R=`[${U}${Y}]`,k="\\ud83c[\\udffb-\\udfff]",gt=`(?:${R}|${k})`,Z=`[^${B}]`,G="(?:\\ud83c[\\udde6-\\uddff]){2}",J="[\\ud800-\\udbff][\\udc00-\\udfff]",K="\\u200d",Q=`${gt}?`,tt=`[${X}]?`,yt="(?:"+K+"(?:"+[Z,G,J].join("|")+")"+tt+Q+")*",wt=tt+Q+yt,bt=`(?:${[`${Z}${R}?`,R,G,J,mt].join("|")}
)`,$t=RegExp(`${k}(?=${k})|${bt}${wt}`,"g"),St=[K,B,U,Y,X],Ct=RegExp(`[${St.join("")}]`);function Et(t){return t.split("")}function et(t){return Ct.test(t)}function xt(t){return t.match($t)||[]}function Tt(t){return et(t)?xt(t):Et(t)}function Wt(t){return t==null?"":String(t)}function At(t,e=""){return t=Wt(t),t&&N(t)&&!e&&et(t)?Tt(t):t.split(e)}function M(t,e){let i=document.createElement(t);return e&&Object.keys(e).forEach(n=>{let s=e[n],r=N(s)?s.trim():s;r===null||r===""||(n==="children"?i.append(...W(r)):i.setAttribute(n,r))}),i}var V={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Ot(t,e){e=x(V,e);let i=H(e.types),n=e.tagName,s=t.nodeValue,r=document.createDocumentFragment(),o=[],l=[];return/^\s/.test(s)&&r.append(" "),o=ut(s).reduce((d,f,c,m)=>{let w,h;return i.chars&&(h=At(f).map(S=>{let g=M(n,{class:`${e.splitClass} ${e.charClass}`,style:"display: inline-block;",children:S});return y(g,"isChar",!0),l=[...l,g],g})),i.words||i.lines?(w=M(n,{class:`${e.wordClass} ${e.splitClass}`,style:`display: inline-block; ${i.words&&e.absolute?"position: relative;":""}`,children:i.chars?h:f}),y(w,{isWord:!0,isWordStart:!0,isWordEnd:!0}),r.appendChild(w)):h.forEach(S=>{r.appendChild(S)}),c<m.length-1&&r.append(" "),i.words?d.concat(w):d},[]),/\s$/.test(s)&&r.append(" "),t.replaceWith(r),{words:o,chars:l}}function it(t,e){let i=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(i))return n;if(i===3&&/\S/.test(t.nodeValue))return Ot(t,e);let s=W(t.childNodes);if(s.length&&(y(t,"isSplit",!0),!T(t).isRoot)){t.style.display="inline-block",t.style.position="relative";let r=t.nextSibling,o=t.previousSibling,l=t.textContent||"",d=r?r.textContent:" ",f=o?o.textContent:" ";y(t,{isWordEnd:/\s$/.test(l)||/^\s/.test(d),isWordStart:/^\s/.test(l)||/\s$/.test(f)})}return s.reduce((r,o)=>{let{words:l,chars:d}=it(o,e);return{words:[...r.words,...l],chars:[...r.chars,...d]}},n)}function jt(t,e,i,n){if(!i.absolute)return{top:e?t.offsetTop:null};let s=t.offsetParent,[r,o]=n,l=0,d=0;if(s&&s!==document.body){let g=s.getBoundingClientRect();l=g.x+r,d=g.y+o}let{width:f,height:c,x:m,y:w}=t.getBoundingClientRect(),h=w+o-d,S=m+r-l;return{width:f,height:c,top:h,left:S}}function nt(t){T(t).isWord?(I(t),t.replaceWith(...t.childNodes)):W(t.children).forEach(e=>nt(e))}var Nt=()=>document.createDocumentFragment();function _t(t,e,i){let n=H(e.types),s=e.tagName,r=t.getElementsByTagName("*"),o=[],l=[],d=null,f,c,m,w=[],h=t.parentElement,S=t.nextElementSibling,g=Nt(),z=window.getComputedStyle(t),st=z.textAlign,rt=parseFloat(z.fontSize)*.2;return e.absolute&&(m={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},c=t.offsetWidth,f=t.offsetHeight,y(t,{cssWidth:t.style.width,cssHeight:t.style.height})),W(r).forEach(a=>{let p=a.parentElement===t,{width:u,height:A,top:E,left:j}=jt(a,p,e,i);/^br$/i.test(a.nodeName)||(n.lines&&p&&((d===null||E-d>=rt)&&(d=E,o.push(l=[])),l.push(a)),e.absolute&&y(a,{top:E,left:j,width:u,height:A}))}),h&&h.removeChild(t),n.lines&&(w=o.map(a=>{let p=M(s,{class:`${e.splitClass} ${e.lineClass}`,style:`display: block; text-align: ${st}; width: 100%;`});y(p,"isLine",!0);let u={height:0,top:1e4};return g.appendChild(p),a.forEach((A,E,j)=>{let{isWordEnd:_,top:L,height:ot}=T(A),lt=j[E+1];u.height=Math.max(u.height,ot),u.top=Math.min(u.top,L),p.appendChild(A),_&&T(lt).isWordStart&&p.append(" ")}),e.absolute&&y(p,{height:u.height,top:u.top}),p}),n.words||nt(g),t.replaceChildren(g)),e.absolute&&(t.style.width=`${t.style.width||c}px`,t.style.height=`${f}px`,W(r).forEach(a=>{let{isLine:p,top:u,left:A,width:E,height:j}=T(a),_=T(a.parentElement),L=!p&&_.isLine;a.style.top=`${L?u-_.top:u}px`,a.style.left=p?`${m.left}px`:`${A-(L?m.left:0)}px`,a.style.height=`${j}px`,a.style.width=p?`${m.width}px`:`${E}px`,a.style.position="absolute"})),h&&(S?h.insertBefore(t,S):h.appendChild(t)),w}var O=x(V,{}),C=class{static get data(){return b}static get defaults(){return O}static set defaults(e){O=x(O,P(e))}static setDefaults(e){return O=x(O,P(e)),V}static revert(e){q(e).forEach(i=>{let{isSplit:n,html:s,cssWidth:r,cssHeight:o}=T(i);n&&(i.innerHTML=s,i.style.width=r||"",i.style.height=o||"",I(i))})}static create(e,i){return new C(e,i)}constructor(e,i){this.isSplit=!1,this.settings=x(O,P(i)),this.elements=q(e),this.split()}split(e){this.revert(),this.elements.forEach(s=>{y(s,"html",s.innerHTML)}),this.lines=[],this.words=[],this.chars=[];let i=[window.pageXOffset,window.pageYOffset];e!==void 0&&(this.settings=x(this.settings,P(e)));let n=H(this.settings.types);n.none||(this.elements.forEach(s=>{y(s,"isRoot",!0);let{words:r,chars:o}=it(s,this.settings);this.words=[...this.words,...r],this.chars=[...this.chars,...o]}),this.elements.forEach(s=>{if(n.lines||this.settings.absolute){let r=_t(s,this.settings,i);this.lines=[...this.lines,...r]}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),ht())}revert(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),C.revert(this.elements)}};window.Webflow||=[];window.Webflow.push(()=>{console.log("webflow laoded"),gsap.registerPlugin(ScrollTrigger),lenis.on("scroll",()=>{!ScrollTrigger||ScrollTrigger.update()});let t=new C("h1",{types:"lines, words",tagName:"span"});function e(){let o=new C(".testimonial_quote",{types:"lines"});$(".testimonial_quote").find(".line").each(function(l){$(this).append("<div class='line-mask is-gradient'></div>"),$(this).append("<div class='line-mask is-grey'></div>")})}function i(){let o=$(".section_home-header"),l=gsap.timeline({scrollTrigger:{markers:!1,trigger:o,start:"10% top",end:"bottom top",scrub:.5},defaults:{duration:1}});l.to(".home-header_image-brand-wrap",{y:"20%"},0),l.to(".home-header_image-voice-overs-wrap",{y:"50%"},0),l.to(".home-header_lightbox-wrap",{y:"-15%"},0),l.to(".home-header_image-gradient-wrap",{y:"-20%"},0),l.to(".home-header_crop-grid",{height:"50%"},0)}function n(){let o=$(".commercials_component"),l=gsap.timeline({scrollTrigger:{markers:!1,trigger:o,start:"top 80%",end:"bottom 10%",scrub:.25},defaults:{duration:1,ease:"none"}});l.fromTo(".commercials_layout",{rotationZ:6},{rotationZ:2},"<"),l.fromTo(".commercials_row.is-top",{xPercent:20},{xPercent:-30},"<"),l.fromTo(".commercials_row.is-bottom",{xPercent:-30},{xPercent:30},"<")}function s(){$(".line").each(function(o){let l=gsap.timeline({scrollTrigger:{trigger:$(this),start:"top center",end:"bottom center",scrub:1}});l.to($(this).find(".line-mask.is-grey"),{width:"0%",duration:1}),l.to($(this).find(".line-mask.is-gradient"),{width:"100%",duration:1},"<")})}gsap.matchMedia().add({isAnimationSafe:"(prefers-reduced-motion: no-preference)",isDesktop:"(min-width: 768px)"},o=>{let{isAnimationSafe:l,isDesktop:d}=o.conditions;function f(){let c=gsap.timeline({delay:.5});c.set(".section_home-header",{opacity:1}),c.from(".home-header_crop-grid",{width:"100%",ease:"power3.out",duration:1.4}),c.from("h1 .line, [home-header-item], .section_home-header .button_wrapper",{y:l?"50%":"5%",opacity:0,stagger:{each:l?.2:0,from:"left"},ease:"power2.out",duration:.8},"<"),c.set("body",{overflow:"visible"},"<.8"),c.from(".home-header_image-gradient",{y:l?"2rem":"0rem",opacity:0,ease:"power2.out",duration:1.2},"<")}if(f(),l){i(),n(),e(),s();let c=$(window).innerWidth();window.addEventListener("resize",function(){c!==$(window).innerWidth()&&(c=$(window).innerWidth(),elementsToSplit.each(function(m){instancesOfSplit[m].revert()}),e(),s())})}l||($(".line-mask").style.display="none")})});})();
