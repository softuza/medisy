import{a as p}from"./chunk-2VTN6ZCY.js";import{b as D}from"./chunk-C5IR2XVH.js";import"./chunk-VJDT2J3E.js";import{a as ie}from"./chunk-VWAA7TMI.js";import{a as u,c as me,e as ce,i as de,j as I}from"./chunk-AM5XCXL6.js";import"./chunk-YGU4JTYS.js";import"./chunk-ER72QF5P.js";import"./chunk-2A5GXBDS.js";import{b as re,f as ne,g as ae,h as se,j as pe,k as T}from"./chunk-FNEDC6UP.js";import{h as _}from"./chunk-7XRRPZKF.js";import{h as O,j as oe}from"./chunk-L65U5OHB.js";import{a as Q,b as K,d as v,e as W,g}from"./chunk-AEJUXZCG.js";import{q as x,r as ee,t as te}from"./chunk-LANNBXGX.js";import{b as j}from"./chunk-HBAIFRLQ.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-5ZGE7EDH.js";import{d as L,f as Z,g as V,l as G,n as w,q as U,r as $,u as q}from"./chunk-VXNH5PTX.js";import{Y,r as X,t as k}from"./chunk-XPJ4P4RZ.js";import{a as C,c as J,e as z}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as H,la as M}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Ec as P,Fa as b,Kb as c,Lb as d,Mb as m,Xb as R,bb as s,cb as f,ea as E,ja as n,na as l,oa as A,ob as F,oc as S,pc as h,qb as B,zb as a}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var le=(()=>{let e=class e extends ne{constructor(o,t,i){super(t),this.fb=o,this.dialog=t,this.data=i,this.cstnService=n(p),this.zones=this.cstnService.zones.getAll({orderBy:["name"],filterBehavior:X.Or,filters:k.create().equalIf("id",this.data?.projectZone?.zoneId).notAnyIf("projects.projectId",this.data?.projectId).filters()}),this.form=o.group({zoneId:[i?.projectZone?.zoneId,[L.required]]});}submit(){this.IsValid()&&(this.data?.projectZone?this.save(this.cstnService.projects.zones.update(this.data.projectId,this.data.projectZone.id,this.form.value)):this.save(this.cstnService.projects.zones.create(this.data.projectId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(f($),f(Q),f(K));},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-projects-zones-save"]],standalone:!0,features:[S([]),B,h],decls:5,vars:6,consts:()=>{let o;return o="\u0627\u0644\u0645\u0646\u0637\u0642\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","zoneId","label",o,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),d()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.zones),s(),a("actions",i.actions));},dependencies:[q,G,Z,V,w,U,g,W,x,T,ae,se,te,ee],encapsulation:2});let r=e;return r;})();var N=(()=>{let e=class e{constructor(){this.route=n(C),this.router=n(J),this.dialog=n(v),this.locale=n(P),this.cstnService=n(p),this.project=b.required(),this.dataSource=new me(["zone.name"]),this.card={header:{title:Y.zones},menu:oe.more([O.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.string("zone.name"),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([O.delete(o=>this.openDeleteComponent(o))]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(le,{data:{projectId:this.project().id,projectZone:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(pe,{data:re.delete(this.cstnService.projects.zones.delete(this.project().id,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.projects.zones.get(this.project().id,this.dataSource.getQuery()).pipe(ce(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-project-zones"]],inputs:{project:[1,"project"]},standalone:!0,features:[S([p]),h],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,i){t&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),R("update",function(){return i.get();}),d()()),t&2&&(a("card",i.card),s(),a("dataSource",i.dataSource));},dependencies:[z,I,de,M,ie],encapsulation:2});let r=e;return r;})();var ue=(()=>{let e=class e{constructor(){this.cstnService=n(p),this.route=n(C),this.dialog=n(v),this.project=this.route.snapshot.data.project,this.alert=F(void 0),this.appBarConfig={title:this.project.name,subtitle:this.project.description};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-project"]],decls:6,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"project"]],template:function(t,i){t&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),c(2,"div",2),m(3,"sz-constr-construction-project-map"),d(),c(4,"div",2),m(5,"sz-constr-construction-project-zones",3),d()),t&2&&(a("config",i.appBarConfig),s(),a("alert",i.alert()),s(4),a("project",i.project));},dependencies:[j,_,N,D],encapsulation:2});let r=e;return r;})();var Ct=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=A({type:e}),e.ɵinj=E({providers:[p],imports:[z.forChild([{path:"",component:ue}]),g,H,M,j,I,T,_,N,D]});let r=e;return r;})();export{Ct as ProjectModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/