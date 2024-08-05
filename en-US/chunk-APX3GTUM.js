import{c as ae}from"./chunk-2INYNTAT.js";import{a as u}from"./chunk-SPMGBNWG.js";import{a as p,b as ee,d as te,e as oe,g as ie,j as re,k as ne}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import"./chunk-HAWQZ3DL.js";import{e as x,f as J,g as K,i as W,j as Y,k as Z}from"./chunk-CZ3NOAZC.js";import{a as T}from"./chunk-4APH4GGR.js";import{h as N}from"./chunk-3HX3ISKW.js";import{a as V,b as $,d as B,e as j,g}from"./chunk-T2IQKITO.js";import{c as w,s as q,u as H,v as Q}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as E}from"./chunk-K3B67OJW.js";import{i as U}from"./chunk-SNWVCYUD.js";import{d as M,f as z,g as P,l as D,n as A,q as b,r as G,u as L}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{e as F}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as y,ja as X,la as k}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as l,Kb as S,Lb as d,Vb as O,Wb as _,bb as m,cb as s,ea as h,na as c,nc as f,oa as R,oc as v,qb as I,zb as a}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var C=function(r){return r.Thermal="Thermal",r.Inkjet="Inkjet",r;}(C||{});var me=(()=>{let i=class i extends x{constructor(o,e,t,n){super(t),this.srptService=o,this.fb=e,this.dialog=t,this.data=n,this.printMethods=Object.keys(C).map(pe=>C[pe]),this.form=e.group({name:[n?.name,[M.required]],description:[n?.description,[M.maxLength(4096)]],printMethod:[n?.printMethod,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(u),s(G),s(V),s($));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),I,v],decls:7,vars:7,consts:()=>{let o;o="Name";let e;e="Description";let t;return t="Method",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","printMethod","label",t,3,"source","localizedValue"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),a("formGroup",t.form),m(3),a("source",t.printMethods)("localizedValue",!0),m(),a("actions",t.actions));},dependencies:[L,D,z,P,A,b,g,j,U,ae,Y,J,K,Q,w,H,q],encapsulation:2});let r=i;return r;})();var le=(()=>{let i=class i{constructor(o,e){this.dialog=o,this.srptService=e,this.dataSource=new te(),this.appBarConfig={title:E.printers},this.dataSource.columnDefs.push(p.uuid("id"),p.string("name").setValueClassFontBold().setStacked(p.string("description").setValueClassFontSmall()),p.enum("printMethod").setName(E.method),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),ee.menu([N.edit(t=>this.openSaveComponent(t)),N.delete(t=>this.openReportDeleteComponent(t))])),this.get();}openSaveComponent(o){this.dialog.open(me,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(W,{data:Z.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(s(B),s(u));},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-printers"]],features:[f([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),_("changed",function(){return t.get();}),l(2,"button",3),_("click",function(){return t.openSaveComponent();}),l(3,"span"),O(4,0),S()()(),l(5,"sz-ui-table",4),_("update",function(){return t.get();}),S()),e&2&&(a("config",t.appBarConfig),m(),a("dataSource",t.dataSource),m(4),a("dataSource",t.dataSource));},dependencies:[X,re,ie,T],encapsulation:2});let r=i;return r;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=R({type:i}),i.ɵinj=h({providers:[u],imports:[F.forChild([{path:"",component:le}]),g,k,ne,T,y]});let r=i;return r;})();export{et as PrintersModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/