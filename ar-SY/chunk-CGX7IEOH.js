import{a as p}from"./chunk-W3FPSF3O.js";import{c as T}from"./chunk-A4ATVV7F.js";import{a as ie}from"./chunk-A6TORLXH.js";import{a as u,b as me,d as ce,e as le,j as de,k as I}from"./chunk-RC4NVD73.js";import"./chunk-7CZWRR2T.js";import"./chunk-DLB4ZJGU.js";import"./chunk-PNN4LVXW.js";import"./chunk-YQMAQTBA.js";import{e as re,f as ne,g as ae,i as se,j as _,k as pe}from"./chunk-AKDPENJM.js";import{a as D}from"./chunk-BC7DYV2K.js";import{h as y,j as oe}from"./chunk-JBUG7NFA.js";import{a as Q,b as K,d as g,e as W,g as v}from"./chunk-7THGKJI5.js";import{b as j,t as x,u as ee,x as te}from"./chunk-OJ6T2UWM.js";import"./chunk-GNVHXVX2.js";import"./chunk-Q5KZECGG.js";import{c as Y}from"./chunk-C6CCG6BQ.js";import"./chunk-3H4GFC5C.js";import{d as L,f as Z,g as V,l as G,n as w,q as U,r as $,u as q}from"./chunk-5GTA5B7Y.js";import{r as X,t as k}from"./chunk-FOLKFRV4.js";import{a as h,c as J,e as z}from"./chunk-77AMUORV.js";import"./chunk-6QVS4ASI.js";import{ia as H,la as M}from"./chunk-KPEIRPFT.js";import"./chunk-ACPIYRBG.js";import{Dc as P,Fa as A,Jb as c,Kb as l,Lb as m,Wb as B,bb as s,cb as f,ea as O,ja as n,na as d,nc as S,oa as b,ob as F,oc as C,qb as R,zb as a}from"./chunk-D2V4YQ64.js";import"./chunk-X4FHBMAQ.js";var ue=(()=>{let e=class e extends re{constructor(o,t,i){super(t),this.fb=o,this.dialog=t,this.data=i,this.cstnService=n(p),this.zones=this.cstnService.zones.getAll({orderBy:["name"],filterBehavior:X.Or,filters:k.create().equalIf("id",this.data?.projectZone?.zoneId).notAnyIf("projects.projectId",this.data?.projectId).filters()}),this.form=o.group({zoneId:[i?.projectZone?.zoneId,[L.required]]});}submit(){this.IsValid()&&(this.data?.projectZone?this.save(this.cstnService.projects.zones.update(this.data.projectId,this.data.projectZone.id,this.form.value)):this.save(this.cstnService.projects.zones.create(this.data.projectId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(f($),f(Q),f(K));},e.ɵcmp=d({type:e,selectors:[["sz-constr-construction-projects-zones-save"]],standalone:!0,features:[S([]),R,C],decls:5,vars:6,consts:()=>{let o;return o="\u0627\u0644\u0645\u0646\u0637\u0642\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","zoneId","label",o,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),l()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.zones),s(),a("actions",i.actions));},dependencies:[q,G,Z,V,w,U,v,W,x,_,ne,ae,te,ee],encapsulation:2});let r=e;return r;})();var N=(()=>{let e=class e{constructor(){this.route=n(h),this.router=n(J),this.dialog=n(g),this.locale=n(P),this.cstnService=n(p),this.project=A.required(),this.dataSource=new ce(["zone.name"]),this.card={title:Y.zones,menu:oe.more([y.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.string("zone.name"),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),me.menu([y.delete(o=>this.openDeleteComponent(o))]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ue,{data:{projectId:this.project().id,projectZone:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(se,{data:pe.delete(this.cstnService.projects.zones.delete(this.project().id,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.projects.zones.get(this.project().id,this.dataSource.getQuery()).pipe(le(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=d({type:e,selectors:[["sz-constr-construction-project-zones"]],inputs:{project:[1,"project"]},standalone:!0,features:[S([p]),C],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),B("update",function(){return i.get();}),l()()),t&2&&(a("card",i.card),s(),a("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[z,I,de,M,ie],encapsulation:2});let r=e;return r;})();var fe=(()=>{let e=class e{constructor(){this.cstnService=n(p),this.route=n(h),this.dialog=n(g),this.project=this.route.snapshot.data.project,this.alert=F(void 0),this.appBarConfig={title:this.project.name,subtitle:this.project.description};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=d({type:e,selectors:[["sz-constr-construction-project"]],decls:6,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"project"]],template:function(t,i){t&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),c(2,"div",2),m(3,"sz-constr-construction-project-map"),l(),c(4,"div",2),m(5,"sz-constr-construction-project-zones",3),l()),t&2&&(a("config",i.appBarConfig),s(),a("alert",i.alert()),s(4),a("project",i.project));},dependencies:[j,D,N,T],encapsulation:2});let r=e;return r;})();var zt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=b({type:e}),e.ɵinj=O({providers:[p],imports:[z.forChild([{path:"",component:fe}]),v,H,M,j,I,_,D,N,T]});let r=e;return r;})();export{zt as ProjectModule};/**i18n:9149e2db890ef5b3eae9bf80dd164277eac0436f561e848a63fe9f462929c08f*/