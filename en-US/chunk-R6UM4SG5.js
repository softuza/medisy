import{a as i,b as e,c as x}from"./chunk-3HSHJW6B.js";import{s as w}from"./chunk-EIB4LKCD.js";import{ja as y,oa as l}from"./chunk-NXFEVB6F.js";var r=class extends e{constructor(t,s){super(t,`${s}/v1/analyses`),this.http=t,this.basePath=s,this.tests=new i(this.http,this.path,"tests"),this.specimens=new i(this.http,this.path,"specimens")}};var p=class extends e{constructor(t,s){super(t,`${s}/v1/laboratories`),this.http=t,this.basePath=s,this.testTypes=new i(this.http,this.path,"test-types"),this.referenceValues=new i(this.http,this.path,"reference-values")}};var o=class extends e{constructor(t,s){super(t,`${s}/v1/reference-values`),this.http=t,this.basePath=s,this.rules=new i(this.http,this.path,"rules")}};var n=class extends e{constructor(t,s){super(t,`${s}/v1/specimens`),this.http=t,this.basePath=s}};var a=class extends e{constructor(t,s){super(t,`${s}/v1/test-groups`),this.http=t,this.basePath=s,this.testTypes=new i(this.http,this.path,"test-types"),this.specimenTypes=new i(this.http,this.path,"specimen-types")}};var m=class extends e{constructor(t,s){super(t,`${s}/v1/test-types`),this.http=t,this.basePath=s,this.specimenTypes=new i(this.http,this.path,"specimen-types"),this.units=new i(this.http,this.path,"units"),this.resultOptions=new i(this.http,this.path,"result-options")}};var c=class extends e{constructor(t,s){super(t,`${s}/v1/tests`),this.http=t,this.basePath=s}};var u=class extends e{constructor(t,s){super(t,`${s}/v1/user-settings`),this.http=t,this.basePath=s}me(){return this.http.get(`${this.path}/me`)}};var W=(()=>{let t=class t extends x{constructor(f){super(f,"medisy-laboratory"),this.analyses=new r(this.http,this.basePath),this.laboratories=new p(this.http,this.basePath),this.referenceValues=new o(this.http,this.basePath),this.referenceGroups=new e(this.http,`${this.basePath}/v1/reference-groups`),this.specimenTypes=new e(this.http,`${this.basePath}/v1/specimen-types`),this.units=new e(this.http,`${this.basePath}/v1/units`),this.unitConverters=new e(this.http,`${this.basePath}/v1/unit-converters`),this.disciplines=new e(this.http,`${this.basePath}/v1/disciplines`),this.userSettings=new u(this.http,`${this.basePath}`),this.testGroups=new a(this.http,`${this.basePath}`),this.tests=new c(this.http,`${this.basePath}`),this.testTypes=new m(this.http,this.basePath),this.specimens=new n(this.http,this.basePath)}};t.\u0275fac=function(v){return new(v||t)(l(w))},t.\u0275prov=y({token:t,factory:t.\u0275fac});let h=t;return h})();export{W as a};
/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/
