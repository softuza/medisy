import{a as p}from"./chunk-U5VXTRJO.js";import{c as ne}from"./chunk-PMNXHNSI.js";import{a as c,b as ee,d as te,f as ie,i as oe,j as re}from"./chunk-FLV77ZNO.js";import"./chunk-PKQHZDC2.js";import"./chunk-U6RDA7WY.js";import"./chunk-2YL7Y4RT.js";import"./chunk-2VKSNU5B.js";import{e as J,f as K,g as W,i as Y,j as Z,k as x}from"./chunk-7KMAVOQS.js";import{a as C}from"./chunk-U4HE3C36.js";import{h as g}from"./chunk-FFEI4TJI.js";import{a as B,b as $,d as V,e as P,g as M}from"./chunk-LWEVHPML.js";import"./chunk-Q5E2X3ET.js";import{c as w,s as H,t as Q}from"./chunk-DRKBOSD5.js";import{c as k}from"./chunk-RKXQ3MXD.js";import"./chunk-P4AS2ZYY.js";import"./chunk-SENF3LXQ.js";import{c as q}from"./chunk-4RWLRMTW.js";import{i as j}from"./chunk-NVBE6OT4.js";import{d as T,f as z,g as E,k as A,m as F,p as b,q as D,t as y}from"./chunk-QUQXR4SD.js";import"./chunk-PJX2DRWP.js";import{c as L,e as R}from"./chunk-ICYZO3QS.js";import"./chunk-MGIROLGZ.js";import{ha as G,ia as U,ka as X}from"./chunk-4AFHRSCT.js";import"./chunk-O3HRBZQI.js";import{Db as s,Nb as m,Ob as S,Pb as d,Zb as h,_b as f,hb as l,ib as a,ka as N,pc as _,qc as v,ua as u,ub as O,va as I}from"./chunk-UVDYGJ6P.js";var se=(()=>{let i=class i extends J{constructor(t,e,o,n){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({originator:[n?.originator,[T.required]],body:[n?.body,[T.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmss.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmss.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(p),a(D),a(B),a($));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),O,v],decls:6,vars:5,consts:()=>{let t;t="Originator";let e;return e="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","originator","label",t],["formControlName","body","label",e],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),d(5,"sz-ui-dialog-actions",4)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(3),s("actions",o.actions));},dependencies:[y,A,z,E,F,b,M,P,j,ne,Z,K,W,Q,w,H],encapsulation:2});let r=i;return r;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=q.notifications,this.dataSource=new te(),this.dataSource.columnDefs.push(c.uuid("id"),c.string("originator").setValueClassFontBold(),c.date("createdAt").setVisible(!1),c.date("updatedAt").setVisible(!1),ee.menu([g.edit(n=>this.openSaveComponent(n)),g.delete(n=>this.openDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(Y,{data:x.delete(this.sntiService.notificationSmss.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmss.get(this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(V),a(p),a(L));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-smss"]],features:[_([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(d(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),m(2,"button",3),f("click",function(){return o.openSaveComponent();}),m(3,"span"),h(4,0),S()()(),m(5,"sz-ui-table",4),f("update",function(){return o.get();}),S()),e&2&&(s("title",o.title),l(),s("dataSource",o.dataSource),l(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[U,oe,ie,C],encapsulation:2});let r=i;return r;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=I({type:i}),i.ɵinj=N({providers:[p],imports:[R.forChild([{path:"",component:me}]),M,X,re,C,G]});let r=i;return r;})();export{We as NotificationSmssModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/