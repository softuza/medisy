import{a as y,b as r,c as e,d as i,e as w}from"./chunk-D6GK7FD3.js";import{r as f}from"./chunk-5FPJF3YL.js";import{ca as l,ia as d}from"./chunk-QHZO24TE.js";var p=class extends i{constructor(t,s){super(t,`${s}/v1/analyses`),this.http=t,this.basePath=s,this.tests=new w(this.http,this.path,"tests"),this.specimens=new y(this.http,this.path,"specimens")}};var o=class extends i{constructor(t,s){super(t,`${s}/v1/laboratories`),this.http=t,this.basePath=s,this.emails=new e(this.http,this.path,"emails"),this.phones=new e(this.http,this.path,"phones"),this.testTypes=new e(this.http,this.path,"test-types"),this.referenceValues=new e(this.http,this.path,"reference-values")}};var a=class extends i{constructor(t,s){super(t,`${s}/v1/reference-values`),this.http=t,this.basePath=s,this.rules=new e(this.http,this.path,"rules")}};var n=class extends i{constructor(t,s){super(t,`${s}/v1/specimens`),this.http=t,this.basePath=s}};var c=class extends i{constructor(t,s){super(t,`${s}/v1/test-types`),this.http=t,this.basePath=s,this.testClasses=new e(this.http,this.path,"test-classes"),this.specimenTypes=new e(this.http,this.path,"specimen-types"),this.disciplines=new e(this.http,this.path,"disciplines")}};var m=class extends r{constructor(t,s){super(t,`${s}/v1/tests`),this.http=t,this.basePath=s}};var D=(()=>{let t=class t{constructor(u){this.http=u,this.basePath="medisy-laboratory",this.analyses=new p(this.http,this.basePath),this.laboratories=new o(this.http,this.basePath),this.testClasses=new r(this.http,`${this.basePath}/v1/test-classes`),this.referenceValues=new a(this.http,this.basePath),this.referenceGroups=new r(this.http,`${this.basePath}/v1/reference-groups`),this.specimenTypes=new r(this.http,`${this.basePath}/v1/specimen-types`),this.units=new r(this.http,`${this.basePath}/v1/units`),this.disciplines=new r(this.http,`${this.basePath}/v1/disciplines`),this.tests=new m(this.http,`${this.basePath}/v1/units`),this.testTypes=new c(this.http,this.basePath),this.specimens=new n(this.http,this.basePath)}};t.\u0275fac=function(b){return new(b||t)(d(f))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let h=t;return h})();export{D as a};
/**i18n:57dc3d08d446ad135ce8eaf97a2b2ecae498355fbf7683f31ebc8820589c1c80*/
