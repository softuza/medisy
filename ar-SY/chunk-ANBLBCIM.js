import{a as i,b as s,c as f}from"./chunk-4P4RPOWU.js";import{s as c}from"./chunk-ZZK427TV.js";import{da as a,ia as m}from"./chunk-3KG4VHVC.js";var r=class extends s{constructor(t,e){super(t,`${e}/v1/projects`),this.http=t,this.basePath=e,this.zones=new i(this.http,this.path,"zones")}};var h=class extends s{constructor(t,e){super(t,`${e}/v1/teams`),this.http=t,this.basePath=e,this.employees=new i(this.http,this.path,"employees"),this.groups=new i(this.http,this.path,"groups")}};var p=class extends s{constructor(t,e){super(t,`${e}/v1/zones`),this.http=t,this.basePath=e,this.teams=new i(this.http,this.path,"teams")}};var N=(()=>{let t=class t extends f{constructor(n){super(n,"constr-construction"),this.projects=new r(this.http,this.basePath),this.teams=new h(this.http,this.basePath),this.zones=new p(this.http,this.basePath),this.employees=new s(this.http,`${this.basePath}/v1/employees`),this.designations=new s(this.http,`${this.basePath}/v1/designations`),this.equipment=new s(this.http,`${this.basePath}/v1/equipment`)}};t.\u0275fac=function(u){return new(u||t)(m(c))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let o=t;return o})();export{N as a};
/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/