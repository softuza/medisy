import{a,b as i,c as l}from"./chunk-SEOQS6VP.js";import{a as u}from"./chunk-X72KAAKT.js";import{r as c,s as f}from"./chunk-LHVP4JEO.js";import{a as h,ga as p,ma as m}from"./chunk-UMI4LSI3.js";var r=class{constructor(t,s){this.http=t,this.basePath=s,this.path="",this.path=`${s}/v1/autosuggestions`}getGenders(t,s){return this.http.get(`${this.path}/genders`,{params:new c({fromObject:u(h(h({},t),s))})})}};var o=class extends i{constructor(t,s){super(t,`${s}/v1/persons`),this.http=t,this.basePath=s,this.names=new a(this.http,this.path,"names"),this.documents=new a(this.http,this.path,"documents")}};var C=(()=>{let t=class t extends l{constructor(n){super(n,"medisy-people"),this.persons=new o(this.http,this.basePath),this.nationalities=new i(this.http,`${this.basePath}/v1/nationalities`),this.languages=new i(this.http,`${this.basePath}/v1/languages`),this.titles=new i(this.http,`${this.basePath}/v1/titles`),this.autosuggestions=new r(this.http,this.basePath)}};t.\u0275fac=function(g){return new(g||t)(m(f))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let e=t;return e})();export{C as a};
/**i18n:16c9224f5b668b40e6178402b9ae5cba52679b665b9b111ce72150c0a38fe8d5*/
