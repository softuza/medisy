import{a as u}from"./chunk-U5VXTRJO.js";import{c as ne}from"./chunk-PMNXHNSI.js";import{a as l,b as ee,d as te,f as ie,i as oe,j as re}from"./chunk-FLV77ZNO.js";import"./chunk-PKQHZDC2.js";import"./chunk-U6RDA7WY.js";import"./chunk-2YL7Y4RT.js";import"./chunk-2VKSNU5B.js";import{e as J,f as K,g as W,i as Y,j as Z,k as x}from"./chunk-7KMAVOQS.js";import{a as C}from"./chunk-U4HE3C36.js";import{h as N}from"./chunk-FFEI4TJI.js";import{a as G,b as B,d as U,e as $,g as M}from"./chunk-LWEVHPML.js";import"./chunk-Q5E2X3ET.js";import{c as X,s as q,t as Q}from"./chunk-DRKBOSD5.js";import{c as w}from"./chunk-RKXQ3MXD.js";import"./chunk-P4AS2ZYY.js";import"./chunk-SENF3LXQ.js";import{c as k}from"./chunk-4RWLRMTW.js";import{i as V}from"./chunk-NVBE6OT4.js";import{d as T,f as v,g as z,k as A,m as F,p as b,q as D,t as y}from"./chunk-QUQXR4SD.js";import"./chunk-PJX2DRWP.js";import{c as P,e as L}from"./chunk-ICYZO3QS.js";import"./chunk-MGIROLGZ.js";import{ha as R,ia as j,ka as H}from"./chunk-4AFHRSCT.js";import"./chunk-O3HRBZQI.js";import{Db as s,Nb as m,Ob as c,Pb as p,Zb as O,_b as S,hb as d,ib as a,ka as I,pc as _,qc as E,ua as f,ub as h,va as g}from"./chunk-UVDYGJ6P.js";var se=(()=>{let i=class i extends J{constructor(t,e,o,n){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({title:[n?.title,[T.required]],body:[n?.body,[T.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationPushes.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationPushes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(u),a(D),a(G),a(B));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-push-save"]],standalone:!0,features:[_([]),h,E],decls:6,vars:5,consts:()=>{let t;t="Title";let e;return e="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","title","label",t],["formControlName","body","label",e],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),c()(),p(5,"sz-ui-dialog-actions",4)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),d(2),s("formGroup",o.form),d(3),s("actions",o.actions));},dependencies:[y,A,v,z,F,b,M,$,V,ne,Z,K,W,Q,X,q],encapsulation:2});let r=i;return r;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=k.notifications,this.dataSource=new te(),this.dataSource.columnDefs.push(l.uuid("id"),l.string("subject").setValueClassFontBold(),l.string("replyToName"),l.string("replyToEmail"),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),ee.menu([N.edit(n=>this.openSaveComponent(n)),N.delete(n=>this.openDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(Y,{data:x.delete(this.sntiService.notificationPushes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationPushes.get(this.dataSource.getQuery()).pipe(w(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(U),a(u),a(P));},i.ɵcmp=f({type:i,selectors:[["sz-mgmt-notification-notification-pushes"]],features:[_([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),S("changed",function(){return o.get();}),m(2,"button",3),S("click",function(){return o.openSaveComponent();}),m(3,"span"),O(4,0),c()()(),m(5,"sz-ui-table",4),S("update",function(){return o.get();}),c()),e&2&&(s("title",o.title),d(),s("dataSource",o.dataSource),d(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[j,oe,ie,C],encapsulation:2});let r=i;return r;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=I({providers:[u],imports:[L.forChild([{path:"",component:me}]),M,H,re,C,R]});let r=i;return r;})();export{We as NotificationPushesModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/