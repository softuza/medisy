import{a,b as o,db as c,eb as h,ga as n,mb as l}from"./chunk-JGYGEXT3.js";var i=class{constructor(){this.stateLocation="@state",this.state=h({})}select(t){return c(()=>this.state()[t])}pmutate(t,e){this.state.update(r=>o(a({},r),{[t]:e}))}mutate(t){this.state.update(e=>a(a({},e),t))}set(t){this.state.set(t)}get(){return this.state}load(){let t=localStorage.getItem(this.stateLocation);if(!t)return null;try{let e=JSON.parse(t);return this.set(e),e}catch{return null}}save(t){localStorage.setItem(this.stateLocation,JSON.stringify(t))}listen(){l(()=>{this.save(this.state())})}};var b=(()=>{let t=class t extends i{constructor(){super(),this.stateLocation="@appState",this.init(),this.listen()}init(){this.load()||this.set({header:{title:"Dashboard"},sidebar:{visible:!0},theme:{dark:!1}})}};t.\u0275fac=function(u){return new(u||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac});let s=t;return s})();export{b as a};
/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/