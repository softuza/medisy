import{a as i,b as s,c as f}from"./chunk-2DOHZQYD.js";import{r as c}from"./chunk-CYOOLWM5.js";import{da as a,ja as m}from"./chunk-6EDHPT3A.js";var h=class extends s{constructor(t,e){super(t,`${e}/v1/projects`),this.http=t,this.basePath=e,this.zones=new i(this.http,this.path,"zones")}};var r=class extends s{constructor(t,e){super(t,`${e}/v1/teams`),this.http=t,this.basePath=e,this.employees=new i(this.http,this.path,"employees"),this.groups=new i(this.http,this.path,"groups")}};var p=class extends s{constructor(t,e){super(t,`${e}/v1/zones`),this.http=t,this.basePath=e,this.teams=new i(this.http,this.path,"teams")}};var I=(()=>{let t=class t extends f{constructor(){let n=m(c);super(n,"constr-construction"),this.projects=new h(this.http,this.basePath),this.teams=new r(this.http,this.basePath),this.zones=new p(this.http,this.basePath),this.employees=new s(this.http,`${this.basePath}/v1/employees`),this.designations=new s(this.http,`${this.basePath}/v1/designations`),this.equipment=new s(this.http,`${this.basePath}/v1/equipment`)}};t.\u0275fac=function(u){return new(u||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac});let o=t;return o})();export{I as a};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
