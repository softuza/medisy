import{a as i,b as s,c as b}from"./chunk-WI4VCGZL.js";import{s as w}from"./chunk-4JGETFRG.js";import{da as l,ia as y}from"./chunk-CWKZPVYH.js";var h=class extends s{constructor(t,e){super(t,`${e}/v1/account`),this.http=t,this.basePath=e,this.laboratories=new s(this.http,`${this.path}/laboratories`)}};var o=class extends s{constructor(t,e){super(t,`${e}/v1/analyses`),this.http=t,this.basePath=e,this.tests=new i(this.http,this.path,"tests"),this.specimens=new i(this.http,this.path,"specimens")}};var p=class extends s{constructor(t,e){super(t,`${e}/v1/laboratories`),this.http=t,this.basePath=e,this.testTypes=new i(this.http,this.path,"test-types")}};var n=class extends s{constructor(t,e){super(t,`${e}/v1/reference-values`),this.http=t,this.basePath=e,this.rules=new i(this.http,this.path,"rules")}};var a=class extends s{constructor(t,e){super(t,`${e}/v1/specimens`),this.http=t,this.basePath=e}};var c=class extends s{constructor(t,e){super(t,`${e}/v1/test-groups`),this.http=t,this.basePath=e,this.testTypes=new i(this.http,this.path,"test-types"),this.specimenTypes=new i(this.http,this.path,"specimen-types")}};var m=class extends s{constructor(t,e){super(t,`${e}/v1/test-types`),this.http=t,this.basePath=e,this.specimenTypes=new i(this.http,this.path,"specimen-types"),this.resultOptions=new i(this.http,this.path,"result-options")}};var u=class extends s{constructor(t,e){super(t,`${e}/v1/tests`),this.http=t,this.basePath=e,this.results=new i(this.http,this.path,"results")}};var W=(()=>{let t=class t extends b{constructor(f){super(f,"medisy-laboratory"),this.analyses=new o(this.http,this.basePath),this.laboratories=new p(this.http,this.basePath),this.referenceValues=new n(this.http,this.basePath),this.referenceGroups=new s(this.http,`${this.basePath}/v1/reference-groups`),this.specimenTypes=new s(this.http,`${this.basePath}/v1/specimen-types`),this.units=new s(this.http,`${this.basePath}/v1/units`),this.unitConverters=new s(this.http,`${this.basePath}/v1/unit-converters`),this.disciplines=new s(this.http,`${this.basePath}/v1/disciplines`),this.referrers=new s(this.http,`${this.basePath}/v1/referrers`),this.priceProfiles=new s(this.http,`${this.basePath}/v1/price-profiles`),this.account=new h(this.http,`${this.basePath}`),this.testGroups=new c(this.http,`${this.basePath}`),this.tests=new u(this.http,`${this.basePath}`),this.testTypes=new m(this.http,this.basePath),this.specimens=new a(this.http,this.basePath)}};t.\u0275fac=function(v){return new(v||t)(y(w))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let r=t;return r})();export{W as a};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
