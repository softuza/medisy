import{a,b as e,c as g}from"./chunk-RSYANUDV.js";import{z as l}from"./chunk-4I74CWZL.js";import{q as f,r as u}from"./chunk-3AQJ5CSK.js";import{K as n,da as m,ja as c}from"./chunk-YAUSGWXJ.js";import{a as h}from"./chunk-QXHRBTK3.js";var r=class{constructor(t,s){this.http=t,this.basePath=s,this.path="",this.path=`${s}/v1/autosuggestions`}getGenders(t,s){return this.http.get(`${this.path}/genders`,{params:new f({fromObject:l(h(h({},t),s))})}).pipe(n(1))}};var o=class extends e{constructor(t,s){super(t,`${s}/v1/persons`),this.http=t,this.basePath=s,this.names=new a(this.http,this.path,"names"),this.documents=new a(this.http,this.path,"documents")}};var G=(()=>{let t=class t extends g{constructor(){let p=c(u);super(p,"medisy-people"),this.persons=new o(this.http,this.basePath),this.nationalities=new e(this.http,`${this.basePath}/v1/nationalities`),this.languages=new e(this.http,`${this.basePath}/v1/languages`),this.titles=new e(this.http,`${this.basePath}/v1/titles`),this.autosuggestions=new r(this.http,this.basePath)}};t.\u0275fac=function(w){return new(w||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac});let i=t;return i})();export{G as a};
/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/