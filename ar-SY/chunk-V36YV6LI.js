import{$a as h,_a as c,aa as n,hb as l}from"./chunk-34MB7EVY.js";import{a,b as o}from"./chunk-NWZBVKCY.js";var i=class{constructor(){this.stateLocation="@state",this.state=h({})}select(t){return c(()=>this.state()[t])}pmutate(t,e){this.state.update(r=>o(a({},r),{[t]:e}))}mutate(t){this.state.update(e=>a(a({},e),t))}set(t){this.state.set(t)}get(){return this.state}load(){let t=localStorage.getItem(this.stateLocation);if(!t)return null;try{let e=JSON.parse(t);return this.set(e),e}catch{return null}}save(t){localStorage.setItem(this.stateLocation,JSON.stringify(t))}listen(){l(()=>{this.save(this.state())})}};var b=(()=>{let t=class t extends i{constructor(){super(),this.stateLocation="@appState",this.init(),this.listen()}init(){this.load()||this.set({header:{title:"Dashboard"},sidebar:{visible:!0},theme:{selector:void 0}})}};t.\u0275fac=function(u){return new(u||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac});let s=t;return s})();export{b as a};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
