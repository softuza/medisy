import{a as d}from"./chunk-A6TSXGJH.js";import{c as ae}from"./chunk-NVRDIZSJ.js";import{a as f,b as ee,d as te,e as ie,g as oe,j as re,k as ne}from"./chunk-EBBH4FQM.js";import"./chunk-5UEHPFTG.js";import"./chunk-ALIV2OXE.js";import"./chunk-ZEHAKVPV.js";import{e as J,f as K,g as W,i as Y,j as Z,k as x}from"./chunk-JIVZM3NB.js";import{a as C}from"./chunk-XX3GN2Z5.js";import{e as Q,h as T}from"./chunk-RXZ6CL54.js";import{a as B,b as $,d as V,e as P,g as N}from"./chunk-GOK5DQ4J.js";import{c as w,t as q,u as H}from"./chunk-NXCSCXM6.js";import"./chunk-GQUZCUGH.js";import"./chunk-QQ6G4KQ5.js";import"./chunk-XUXOODGA.js";import{c as k}from"./chunk-ASLHFDBF.js";import{i as j}from"./chunk-JORX5F6J.js";import{d as M,f as A,g as v,l as z,n as F,q as D,r as b,u as y}from"./chunk-X7FJYQVI.js";import"./chunk-S4MBIRCZ.js";import{c as L,e as R}from"./chunk-7SMEEYI6.js";import"./chunk-5KW76B2T.js";import{ia as G,ja as U,la as X}from"./chunk-FJQ67ICA.js";import"./chunk-7CHLL7QZ.js";import{Kb as m,Lb as p,Mb as S,Wb as E,Xb as c,bb as l,cb as a,ea as I,na as u,oa as g,oc as _,pc as h,qb as O,zb as s}from"./chunk-MI4BGEGZ.js";import"./chunk-2JROAFGL.js";var me=(()=>{let i=class i extends J{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[M.required]],originator:[r?.originator,[M.required]],body:[r?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(d),a(b),a(B),a($));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),O,h],decls:7,vars:5,consts:()=>{let t;t="Name";let e;e="Originator";let o;return o="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","originator","label",e],["formControlName","body","label",o],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),p()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(4),s("actions",o.actions));},dependencies:[y,z,A,v,F,D,N,P,j,ae,Z,K,W,H,w,q],encapsulation:2});let n=i;return n;})();var le=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.dataSource=new te(),this.appBarConfig={title:k.sms_notification},this.dataSource.columnDefs.push(f.uuid("id"),f.string("originator").setValueClassFontBold(),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),ee.menu([T.edit(r=>this.openSaveComponent(r)),Q.divider(),T.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(Y,{data:x.delete(this.sntiService.notificationSmses.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(V),a(d),a(L));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],features:[_([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),c("changed",function(){return o.get();}),m(2,"button",3),c("click",function(){return o.openSaveComponent();}),m(3,"span"),E(4,0),p()()(),m(5,"sz-ui-table",4),c("update",function(){return o.get();}),p()),e&2&&(s("config",o.appBarConfig),l(),s("dataSource",o.dataSource),l(4),s("dataSource",o.dataSource));},dependencies:[U,re,oe,C],encapsulation:2});let n=i;return n;})();var Ke=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=I({providers:[d],imports:[R.forChild([{path:"",component:le}]),N,X,ne,C,G]});let n=i;return n;})();export{Ke as NotificationSmssModule};/**i18n:432eaf37c61bb291e8f30b0de1096d88a542ed89f4aba48a7a5a6c27385da906*/