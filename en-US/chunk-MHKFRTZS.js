import{a as i,b as e,c as $}from"./chunk-ASXUHVJK.js";import{r as w}from"./chunk-BKKXZCD4.js";import{K as m,da as l,ja as f}from"./chunk-5UGT7ICT.js";var r=class extends e{constructor(t,s){super(t,`${s}/v1/account`),this.http=t,this.basePath=s,this.laboratories=new e(this.http,`${this.path}/laboratories`)}};var p=class extends e{constructor(t,s){super(t,`${s}/v1/analyses`),this.http=t,this.basePath=s,this.tests=new i(this.http,this.path,"tests"),this.specimens=new i(this.http,this.path,"specimens"),this.events=new i(this.http,this.path,"events")}export(t,s){return this.http.put(`${this.path}/${t}/export`,s)}};var o=class extends e{constructor(t,s){super(t,`${s}/v1/laboratories`),this.http=t,this.basePath=s,this.testTypes=new i(this.http,this.path,"test-types")}};var a=class extends e{constructor(t,s){super(t,`${s}/v1/specimens`),this.http=t,this.basePath=s}};var n=class extends e{constructor(t,s){super(t,`${s}/v1/test-types`),this.http=t,this.basePath=s,this.specimenTypes=new i(this.http,this.path,"specimen-types"),this.resultOptions=new i(this.http,this.path,"result-options"),this.relationships=new i(this.http,this.path,"relationships"),this.clinicalCases=new i(this.http,this.path,"clinical-cases")}};var c=class extends e{constructor(t,s){super(t,`${s}/v1/tests`),this.http=t,this.basePath=s}updateResult(t,s){return this.http.put(`${this.path}/${t}/result`,s).pipe(m(1))}updateResultApproval(t,s){return this.http.put(`${this.path}/${t}/approval`,s).pipe(m(1))}};var J=(()=>{let t=class t extends ${constructor(){let u=f(w);super(u,"medisy-laboratory"),this.analyses=new p(this.http,this.basePath),this.laboratories=new o(this.http,this.basePath),this.referenceValues=new e(this.http,`${this.basePath}/v1/reference-values`),this.referenceGroups=new e(this.http,`${this.basePath}/v1/reference-groups`),this.specimenTypes=new e(this.http,`${this.basePath}/v1/specimen-types`),this.units=new e(this.http,`${this.basePath}/v1/units`),this.unitConverters=new e(this.http,`${this.basePath}/v1/unit-converters`),this.disciplines=new e(this.http,`${this.basePath}/v1/disciplines`),this.referrers=new e(this.http,`${this.basePath}/v1/referrers`),this.priceProfiles=new e(this.http,`${this.basePath}/v1/price-profiles`),this.account=new r(this.http,`${this.basePath}`),this.tests=new c(this.http,`${this.basePath}`),this.testTypes=new n(this.http,this.basePath),this.specimens=new a(this.http,this.basePath)}};t.\u0275fac=function(v){return new(v||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac});let h=t;return h})();export{J as a};
/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/
