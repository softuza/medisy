import{a as o,b as s,c}from"./chunk-PIF3LXPQ.js";import{s as m}from"./chunk-DTCSWDXN.js";import{da as n,ia as a}from"./chunk-7IDM2VXI.js";var h=class extends s{constructor(t,i){super(t,`${i}/v1/projects`),this.http=t,this.basePath=i,this.zones=new o(this.http,this.path,"zones")}};var r=class extends s{constructor(t,i){super(t,`${i}/v1/teams`),this.http=t,this.basePath=i,this.employees=new o(this.http,this.path,"employees"),this.groups=new o(this.http,this.path,"groups")}};var j=(()=>{let t=class t extends c{constructor(p){super(p,"constr-construction"),this.projects=new h(this.http,this.basePath),this.teams=new r(this.http,this.basePath),this.employees=new s(this.http,`${this.basePath}/v1/employees`),this.zones=new s(this.http,`${this.basePath}/v1/zones`),this.designations=new s(this.http,`${this.basePath}/v1/designations`),this.units=new s(this.http,`${this.basePath}/v1/units`),this.equipment=new s(this.http,`${this.basePath}/v1/equipment`)}};t.\u0275fac=function(f){return new(f||t)(a(m))},t.\u0275prov=n({token:t,factory:t.\u0275fac});let e=t;return e})();export{j as a};
/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/