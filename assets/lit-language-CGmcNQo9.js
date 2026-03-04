(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,D=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,H=Symbol(),z=new WeakMap;let F=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==H)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(D&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&z.set(t,e))}return e}toString(){return this.cssText}};const re=r=>new F(typeof r=="string"?r:r+"",void 0,H),G=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new F(t,r,H)},oe=(r,e)=>{if(D)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},I=D?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return re(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ne,defineProperty:ae,getOwnPropertyDescriptor:he,getOwnPropertyNames:le,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,N=globalThis,B=N.trustedTypes,ue=B?B.emptyScript:"",pe=N.reactiveElementPolyfillSupport,S=(r,e)=>r,O={toAttribute(r,e){switch(e){case Boolean:r=r?ue:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Q=(r,e)=>!ne(r,e),j={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=j){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ae(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=he(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return i?.call(this)},set(n){const u=i?.call(this);o.call(this,n),this.requestUpdate(e,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??j}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=de(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,s=[...le(t),...ce(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(I(i))}else e!==void 0&&t.push(I(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:O;this._$Em=i,this[i]=n.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s,i=!1,o){if(e!==void 0){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??Q)(i?o:this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(e){}firstUpdated(e){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[S("elementProperties")]=new Map,y[S("finalized")]=new Map,pe?.({ReactiveElement:y}),(N.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,P=R.trustedTypes,W=P?P.createPolicy("lit-html",{createHTML:r=>r}):void 0,X="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,Y="?"+g,me=`<${Y}>`,_=document,C=()=>_.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",ee=Array.isArray,ge=r=>ee(r)||typeof r?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,q=/>/g,$=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,Z=/"/g,te=/^(?:script|style|textarea|title)$/i,$e=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),se=$e(1),v=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),J=new WeakMap,f=_.createTreeWalker(_,129);function ie(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return W!==void 0?W.createHTML(e):e}const fe=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":"",n=E;for(let u=0;u<t;u++){const a=r[u];let l,d,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===E?d[1]==="!--"?n=V:d[1]!==void 0?n=q:d[2]!==void 0?(te.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=$):d[3]!==void 0&&(n=$):n===$?d[0]===">"?(n=i??E,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?$:d[3]==='"'?Z:K):n===Z||n===K?n=$:n===V||n===q?n=E:(n=$,i=void 0);const m=n===$&&r[u+1].startsWith("/>")?" ":"";o+=n===E?a+me:h>=0?(s.push(l),a.slice(0,h)+X+a.slice(h)+g+m):a+g+(h===-2?u:m)}return[ie(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class w{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const u=e.length-1,a=this.parts,[l,d]=fe(e,t);if(this.el=w.createElement(l,s),f.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=f.nextNode())!==null&&a.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(X)){const p=d[n++],m=i.getAttribute(h).split(g),T=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:T[2],strings:m,ctor:T[1]==="."?ye:T[1]==="?"?Ae:T[1]==="@"?ve:U}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(te.test(i.tagName)){const h=i.textContent.split(g),p=h.length-1;if(p>0){i.textContent=P?P.emptyScript:"";for(let m=0;m<p;m++)i.append(h[m],C()),f.nextNode(),a.push({type:2,index:++o});i.append(h[p],C())}}}else if(i.nodeType===8)if(i.data===Y)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(e,t){const s=_.createElement("template");return s.innerHTML=e,s}}function b(r,e,t=r,s){if(e===v)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const o=x(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=b(r,i._$AS(r,e.values),i,s)),e}class _e{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??_).importNode(t,!0);f.currentNode=i;let o=f.nextNode(),n=0,u=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new k(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new be(o,this,e)),this._$AV.push(l),a=s[++u]}n!==a?.index&&(o=f.nextNode(),n++)}return f.currentNode=_,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=b(this,e,t),x(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ge(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==c&&x(this._$AH)?this._$AA.nextSibling.data=e:this.$(_.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=w.createElement(ie(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new _e(i,this),n=o.u(this.options);o.p(t),this.$(n),this._$AH=o}}_$AC(e){let t=J.get(e.strings);return t===void 0&&J.set(e.strings,t=new w(e)),t}T(e){ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new k(this.k(C()),this.k(C()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=b(this,e,t,0),n=!x(e)||e!==this._$AH&&e!==v,n&&(this._$AH=e);else{const u=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=b(this,u[s+a],t,a),l===v&&(l=this._$AH[a]),n||=!x(l)||l!==this._$AH[a],l===c?e=c:e!==c&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!i&&this.O(e)}O(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ye extends U{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===c?void 0:e}}class Ae extends U{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class ve extends U{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=b(this,e,t,0)??c)===v)return;const s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class be{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){b(this,e)}}const Ee=R.litHtmlPolyfillSupport;Ee?.(w,k),(R.litHtmlVersions??=[]).push("3.1.0");const Se=(r,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const o=t?.renderBefore??null;s._$litPart$=i=new k(e.insertBefore(C(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v}}A._$litElement$=!0,A.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:A});const Ce=globalThis.litElementPolyfillSupport;Ce?.({LitElement:A});(globalThis.litElementVersions??=[]).push("4.0.2");class xe extends A{static properties={isDarkMode:{type:Boolean}};constructor(){super(),this.isDarkMode=!0,this.initializeTheme()}connectedCallback(){super.connectedCallback();const e=localStorage.getItem("theme");e&&(this.isDarkMode=e==="dark"),this.applyTheme(),this.updateComplete.then(()=>{this.applyTheme(),this.notifyThemeChange()})}notifyThemeChange(){this.dispatchEvent(new CustomEvent("theme-changed",{detail:{isDarkMode:this.isDarkMode},bubbles:!0,composed:!0}))}toggleTheme(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("theme",this.isDarkMode?"dark":"light"),this.applyTheme(),this.notifyThemeChange()}initializeTheme(){const e=localStorage.getItem("theme");e?this.isDarkMode=e==="dark":(this.isDarkMode=!0,localStorage.setItem("theme","dark"))}applyTheme(){this.isDarkMode?(document.documentElement.setAttribute("data-theme","dark"),document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode")):(document.documentElement.setAttribute("data-theme","light"),document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"))}toggleTheme(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("theme",this.isDarkMode?"dark":"light"),this.applyTheme(),this.dispatchEvent(new CustomEvent("theme-changed",{detail:{isDarkMode:this.isDarkMode},bubbles:!0,composed:!0}))}static styles=G`
    :host {
      display: inline-block;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .theme-icon {
      font-size: 1rem;
      color: var(--header-text, #ffffff);
      transition: color 0.3s ease, transform 0.2s ease;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      user-select: none;
    }

    .theme-icon:hover {
      transform: scale(1.1);
      background: var(--theme-icon-hover-bg, rgba(255, 255, 255, 0.1));
    }

    .theme-icon:active {
      transform: scale(0.95);
    }

    .theme-label {
      font-size: 0.9rem;
      color: var(--header-text-secondary, #cccccc);
      margin-left: 0.5rem;
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      .theme-label {
        display: none;
      }
    }

    /* 深色模式样式 */
    :host([data-theme="dark"]) {
      --header-text: #ffffff;
      --header-text-secondary: #cccccc;
      --theme-icon-hover-bg: rgba(255, 255, 255, 0.1);
    }

    /* 浅色模式样式 */
    :host([data-theme="light"]) {
      --header-text: #333333;
      --header-text-secondary: #666666;
      --theme-icon-hover-bg: rgba(0, 0, 0, 0.1);
    }
  `;render(){return se`
      <div class="theme-toggle">
        <span
          class="theme-icon"
          @click=${this.toggleTheme}
          title="${this.isDarkMode?"切换到浅色模式":"切换到深色模式"}"
        >
          ${this.isDarkMode?"🌙":"☀️"}
        </span>
      </div>
    `}updated(e){super.updated(e),e.has("isDarkMode")&&this.setAttribute("data-theme",this.isDarkMode?"dark":"light")}}customElements.define("lit-theme-mode",xe);class we extends A{static properties={currentLanguage:{type:String}};constructor(){super(),this.currentLanguage=localStorage.getItem("language")||"zh-CN"}static styles=G`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      user-select: none;
    }

    .language-switch {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .language-option {
      padding: 4px 8px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease;
      color: var(--text-secondary, #666);
      font-weight: 500;
    }

    .language-option:hover {
      background: var(--hover-bg, rgba(0, 123, 255, 0.1));
      color: var(--text-primary, #333);
    }

    .language-option.active {
      background: var(--primary-color, #007bff);
      color: white;
    }

    .separator {
      color: var(--text-secondary, #666);
      margin: 0 2px;
    }

    /* 深色模式样式 */
    :host([data-theme="dark"]) {
      --text-primary: #ffffff;
      --text-secondary: #cccccc;
      --hover-bg: rgba(0, 123, 255, 0.2);
      --primary-color: #007bff;
    }

    /* 浅色模式样式 */
    :host([data-theme="light"]) {
      --text-primary: #333333;
      --text-secondary: #666666;
      --hover-bg: rgba(0, 123, 255, 0.1);
      --primary-color: #007bff;
    }
  `;connectedCallback(){super.connectedCallback(),document.addEventListener("theme-changed",this.handleThemeChange),this.syncInitialTheme()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("theme-changed",this.handleThemeChange)}syncInitialTheme(){const e=localStorage.getItem("theme"),t=e?e==="dark":!0;this.setAttribute("data-theme",t?"dark":"light")}handleThemeChange=e=>{const{isDarkMode:t}=e.detail;this.setAttribute("data-theme",t?"dark":"light")};switchLanguage(e){if(this.currentLanguage===e)return;this.currentLanguage=e,localStorage.setItem("language",e);const t=new CustomEvent("language-changed",{detail:{language:e,dataDir:e==="zh-CN"?"/assets/json/zh-CN":"/assets/json/en"},bubbles:!0,composed:!0});this.dispatchEvent(t),window.location.reload()}render(){return se`
      <div class="language-switch">
        <span 
          class="language-option ${this.currentLanguage==="zh-CN"?"active":""}"
          @click=${()=>this.switchLanguage("zh-CN")}
        >
          中
        </span>
        <span class="separator">|</span>
        <span 
          class="language-option ${this.currentLanguage==="en"?"active":""}"
          @click=${()=>this.switchLanguage("en")}
        >
          EN
        </span>
      </div>
    `}}customElements.define("lit-language",we);export{G as i,A as s,se as x};
