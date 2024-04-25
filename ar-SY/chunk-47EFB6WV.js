import{p as C}from"./chunk-UQI5C6OQ.js";import{C as R,D as y,Dc as K,F as I,Fc as Z,I as O,J as h,Ja as V,K as d,Q as l,Qc as _,Rc as G,S as A,Ta as S,Y as D,a as u,b as N,ca as g,fa as F,ja as v,ka as j,l as P,ma as L,oa as T,pb as x,s as w,t as k,tb as B,va as U,y as c,ya as W}from"./chunk-R6OEYYKK.js";var m=class{constructor(){this.stateLocation="@state",this.state=B({})}select(e){return _(()=>this.state()[e])}pmutate(e,s){this.state.update(t=>N(u({},t),{[e]:s}))}mutate(e){this.state.update(s=>u(u({},s),e))}set(e){this.state.set(e)}get(){return this.state}load(){let e=localStorage.getItem(this.stateLocation);if(!e)return null;try{let s=JSON.parse(e);return this.set(s),s}catch{return null}}save(e){localStorage.setItem(this.stateLocation,JSON.stringify(e))}listen(){G(()=>{this.save(this.state())})}};var ae=(()=>{let e=class e extends m{constructor(){super(),this.stateLocation="@appState",this.init(),this.listen()}init(){this.load()||this.set({header:{title:"Dashboard"},sidebar:{visible:!0},theme:{selector:void 0}})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac});let r=e;return r})();var b="Service workers are disabled or not supported by this browser";function Q(r){return y(()=>k(new Error(r)))}var f=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=Q(b);else{let t=I(e,"controllerchange").pipe(c(()=>e.controller)),i=y(()=>w(e.controller)),n=R(i,t);this.worker=n.pipe(d(p=>!!p)),this.registration=this.worker.pipe(g(()=>e.getRegistration()));let M=I(e,"message").pipe(c(p=>p.data)).pipe(d(p=>p&&p.type)).pipe(D());M.connect(),this.events=M}}postMessage(e,s){return this.worker.pipe(l(1),F(t=>{t.postMessage(u({action:e},s))})).toPromise().then(()=>{})}postMessageWithOperation(e,s,t){let i=this.waitForOperationCompleted(t),n=this.postMessage(e,s);return Promise.all([n,i]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let s;return typeof e=="string"?s=t=>t.type===e:s=t=>e.includes(t.type),this.events.pipe(d(s))}nextEventOfType(e){return this.eventsOfType(e).pipe(l(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(d(s=>s.nonce===e),l(1),c(s=>{if(s.result!==void 0)return s.result;throw new Error(s.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},q=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new P,!t.isEnabled){this.messages=h,this.notificationClicks=h,this.subscription=h;return}this.messages=this.sw.eventsOfType("PUSH").pipe(c(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(c(n=>n.data)),this.pushManager=this.sw.registration.pipe(c(n=>n.pushManager));let i=this.pushManager.pipe(g(n=>n.getSubscription()));this.subscription=O(i,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(b));let i={userVisibleOnly:!0},n=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(n.length));for(let o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return i.applicationServerKey=a,this.pushManager.pipe(g(o=>o.subscribe(i)),l(1)).toPromise().then(o=>(this.subscriptionChanges.next(o),o))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(b));let t=i=>{if(i===null)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(l(1),g(t)).toPromise()}decodeBase64(t){return atob(t)}};e.\u0275fac=function(i){return new(i||e)(T(f))},e.\u0275prov=v({token:e,factory:e.\u0275fac});let r=e;return r})(),z=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=h,this.unrecoverable=h;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(b));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(b));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}};e.\u0275fac=function(i){return new(i||e)(T(f))},e.\u0275prov=v({token:e,factory:e.\u0275fac});let r=e;return r})();var H=new L("");function X(r,e,s,t){return()=>{if(!(C(t)&&"serviceWorker"in navigator&&s.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let i;if(typeof s.registrationStrategy=="function")i=s.registrationStrategy();else{let[a,...o]=(s.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":i=w(null);break;case"registerWithDelay":i=J(+o[0]||0);break;case"registerWhenStable":i=o[0]?O($(r),J(+o[0])):$(r);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${s.registrationStrategy}`)}}r.get(x).runOutsideAngular(()=>i.pipe(l(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:s.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function J(r){return w(null).pipe(A(r))}function $(r){return r.get(Z).isStable.pipe(d(s=>s))}function ee(r,e){return new f(C(e)&&r.enabled!==!1?navigator.serviceWorker:void 0)}var E=class{};function te(r,e={}){return W([q,z,{provide:H,useValue:r},{provide:E,useValue:e},{provide:f,useFactory:ee,deps:[E,S]},{provide:K,useFactory:X,deps:[V,H,E,S],multi:!0}])}var be=(()=>{let e=class e{static register(t,i={}){return{ngModule:e,providers:[te(t,i)]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=U({type:e}),e.\u0275inj=j({providers:[q,z]});let r=e;return r})();export{ae as a,q as b,be as c};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/