import{a as i,b as e,c as y}from"./chunk-YH634QHT.js";import{s as l}from"./chunk-AD74A3E4.js";import{ga as f,ma as u}from"./chunk-MNGWH3SB.js";var h=class extends e{constructor(t,s){super(t,`${s}/v1/analyses`),this.http=t,this.basePath=s,this.tests=new i(this.http,this.path,"tests"),this.specimens=new i(this.http,this.path,"specimens")}};var p=class extends e{constructor(t,s){super(t,`${s}/v1/laboratories`),this.http=t,this.basePath=s,this.testTypes=new i(this.http,this.path,"test-types"),this.referenceValues=new i(this.http,this.path,"reference-values")}};var o=class extends e{constructor(t,s){super(t,`${s}/v1/reference-values`),this.http=t,this.basePath=s,this.rules=new i(this.http,this.path,"rules")}};var n=class extends e{constructor(t,s){super(t,`${s}/v1/specimens`),this.http=t,this.basePath=s}};var a=class extends e{constructor(t,s){super(t,`${s}/v1/test-types`),this.http=t,this.basePath=s,this.specimenTypes=new i(this.http,this.path,"specimen-types"),this.disciplines=new i(this.http,this.path,"disciplines")}};var c=class extends e{constructor(t,s){super(t,`${s}/v1/tests`),this.http=t,this.basePath=s}};var B=(()=>{let t=class t extends y{constructor(m){super(m,"medisy-laboratory"),this.analyses=new h(this.http,this.basePath),this.laboratories=new p(this.http,this.basePath),this.referenceValues=new o(this.http,this.basePath),this.referenceGroups=new e(this.http,`${this.basePath}/v1/reference-groups`),this.specimenTypes=new e(this.http,`${this.basePath}/v1/specimen-types`),this.units=new e(this.http,`${this.basePath}/v1/units`),this.disciplines=new e(this.http,`${this.basePath}/v1/disciplines`),this.tests=new c(this.http,`${this.basePath}/v1/units`),this.testTypes=new a(this.http,this.basePath),this.specimens=new n(this.http,this.basePath)}};t.\u0275fac=function(w){return new(w||t)(u(l))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let r=t;return r})();export{B as a};
/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/
