import{a as u,c as r,d as s,e as f}from"./chunk-BI2SJY2U.js";import{m,n as c}from"./chunk-MQ7PCRXN.js";import{ca as p,ia as n}from"./chunk-FNRYDH3S.js";var h=class{constructor(t,e){this.http=t,this.basePath=e,this.path="",this.path=`${e}/v1/autosuggestions`}getGenders(t){return this.http.get(`${this.path}/genders`,{params:new m({fromObject:u(t)})})}};var a=class extends f{constructor(t,e){super(t,`${e}/v1/persons`),this.http=t,this.basePath=e,this.emails=new s(this.http,this.path,"emails"),this.phones=new s(this.http,this.path,"phones"),this.names=new s(this.http,this.path,"names"),this.documents=new s(this.http,this.path,"documents"),this.addresses=new s(this.http,this.path,"addresses")}};var C=(()=>{let t=class t{constructor(o){this.http=o,this.basePath="medisy-people",this.persons=new a(this.http,this.basePath),this.nationalities=new r(this.http,`${this.basePath}/v1/nationalities`),this.languages=new r(this.http,`${this.basePath}/v1/languages`),this.autosuggestions=new h(this.http,this.basePath)}};t.\u0275fac=function(l){return new(l||t)(n(c))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})();export{C as a};
/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/
