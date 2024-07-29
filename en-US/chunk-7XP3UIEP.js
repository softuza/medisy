import{a as p}from"./chunk-PMGZB256.js";import{a as re}from"./chunk-H7B2FXCV.js";import{a as l,b as pe,d as le,e as ue,j as de,k as w}from"./chunk-YWT2EA4M.js";import"./chunk-L4AIUAS4.js";import"./chunk-72FHVNNU.js";import"./chunk-GO5Q2O4Z.js";import"./chunk-V5DZRW4C.js";import"./chunk-UBUNO3NI.js";import{e as ie,f as ne,g as ae,i as se,j as v,k as me}from"./chunk-KVT2Y44B.js";import{a as R}from"./chunk-ZCG62LHU.js";import{e as oe,h as k,j as T}from"./chunk-IGQXTHNA.js";import{a as H,b as Q,d as M,e as J,g as h}from"./chunk-ARJDRL2D.js";import"./chunk-ILMMVNTQ.js";import{A as te,b as E,t as Z,v as x,x as ee}from"./chunk-QOPKBTR3.js";import"./chunk-SV7OQSW7.js";import"./chunk-CXCVSTK4.js";import{c as Y}from"./chunk-WP4QADEO.js";import"./chunk-5TZ2K576.js";import{d as D,f as L,g as U,l as V,n as $,q as B,r as K,u as j}from"./chunk-S24KQKNZ.js";import"./chunk-WZNJXRSX.js";import{a as O,c as X,e as N}from"./chunk-XU6WJOFR.js";import"./chunk-MOKWSACW.js";import{ia as q,la as g}from"./chunk-57EQYW4O.js";import"./chunk-2UTMVH6A.js";import{Fa as F,Fc as W,Jb as d,Kb as S,Lb as m,Wb as P,bb as s,cb as C,ea as I,ja as n,na as c,nc as f,oa as A,ob as b,oc as _,qb as y,zb as a}from"./chunk-OD2PBDQL.js";import"./chunk-MYK76I3Y.js";var ce=(()=>{let e=class e extends ie{constructor(r,t,o){super(t),this.fb=r,this.dialog=t,this.data=o,this.cstnService=n(p),this.workers=this.cstnService.workers.getAll({orderBy:["firstName","lastName"]}),this.workerFormatFn=u=>u?`${u.firstName} ${u.lastName}`:"",this.form=r.group({workerId:[o?.workGroupWorker?.workerId,[D.required]],startDate:[o?.workGroupWorker?.startDate,[D.required]],endDate:[o?.workGroupWorker?.endDate,[]]});}submit(){this.IsValid()&&(this.data?.workGroupWorker?this.save(this.cstnService.workGroups.workers.update(this.data.workGroupId,this.data.workGroupWorker.id,this.form.value)):this.save(this.cstnService.workGroups.workers.create(this.data.workGroupId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(C(K),C(H),C(Q));},e.ɵcmp=c({type:e,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[f([]),y,_],decls:8,vars:7,consts:()=>{let r;r="Worker";let t;t="Start Date";let o;return o="End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","workerId","label",r,3,"source","szOptionContentFn"],[1,"sz-form-row"],["formControlName","startDate","label",t],["formControlName","endDate","label",o],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),d(4,"div",3),m(5,"sz-ui-form-field-date",4)(6,"sz-ui-form-field-date",5),S()()(),m(7,"sz-ui-dialog-actions",6)),t&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),s(2),a("formGroup",o.form),s(),a("source",o.workers)("szOptionContentFn",o.workerFormatFn),s(4),a("actions",o.actions));},dependencies:[j,V,L,U,$,B,h,J,x,v,ne,ae,te,Z,ee],encapsulation:2});let i=e;return i;})();var z=(()=>{let e=class e{constructor(){this.route=n(O),this.router=n(X),this.dialog=n(M),this.locale=n(W),this.cstnService=n(p),this.workGroup=F.required(),this.dataSource=new le([]),this.card={title:Y.workers,menu:T.more([k.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(l.uuid("id"),l.string("worker.firstName"),l.string("worker.lastName"),l.date("startDate"),l.date("endDate"),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),pe.menu([k.edit(r=>this.openSaveComponent(r)),oe.divider(),k.delete(r=>this.openDeleteComponent(r))]));}ngOnInit(){this.get();}openSaveComponent(r){this.dialog.open(ce,{data:{workGroupId:this.workGroup().id,workGroupWorker:r}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(r){this.dialog.open(se,{data:me.delete(this.cstnService.workGroups.workers.delete(this.workGroup().id,r.id),r)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.workGroups.workers.get(this.workGroup().id,this.dataSource.getQuery()).pipe(ue(this.dataSource.state)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=c({type:e,selectors:[["sz-constr-construction-work-groups-workers"]],inputs:{workGroup:[1,"workGroup"]},standalone:!0,features:[f([p]),_],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),P("update",function(){return o.get();}),S()()),t&2&&(a("card",o.card),s(),a("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[N,w,de,g,re],encapsulation:2});let i=e;return i;})();var Se=(()=>{let e=class e{constructor(){this.cstnService=n(p),this.route=n(O),this.dialog=n(M),this.alert=b(void 0),this.menu=T.more([]),this.workGroup=this.route.snapshot.data.workGroup;}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=c({type:e,selectors:[["sz-constr-construction-work-group"]],features:[f([])],decls:5,vars:5,consts:[[3,"title","subtitle","menu"],[3,"alert"],[1,"tw-my-4"],[3,"workGroup"]],template:function(t,o){t&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),d(2,"div",2),m(3,"sz-constr-construction-work-groups-workers",3),S(),m(4,"div",2)),t&2&&(a("title",o.workGroup.name)("subtitle",o.workGroup.description)("menu",o.menu),s(),a("alert",o.alert()),s(2),a("workGroup",o.workGroup));},dependencies:[E,R,z],encapsulation:2});let i=e;return i;})();var Ct=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=A({type:e}),e.ɵinj=I({providers:[p],imports:[N.forChild([{path:"",component:Se}]),h,q,g,E,w,v,R,z]});let i=e;return i;})();export{Ct as WorkGroupModule};/**i18n:4fd1e3784121426a165aad39e5b179e99241f431f66c0843478e7b7dba7da7b9*/