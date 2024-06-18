import{a as d}from"./chunk-WBEDTO3H.js";import{c as ne}from"./chunk-DEDCJZVG.js";import{a as c,b as ee,d as te,f as ie,i as oe,j as re}from"./chunk-OD34M2WV.js";import"./chunk-UE5ZVLL6.js";import"./chunk-XHAJJGHN.js";import"./chunk-J3ZGTMT7.js";import{e as J,f as K,g as W,i as Y,j as Z,k as x}from"./chunk-XU4OIEX3.js";import"./chunk-5XS2JNPH.js";import{a as T}from"./chunk-5EXH6KQ6.js";import{h as C}from"./chunk-VJQIJJGN.js";import{a as $,b as V,d as B,e as P,g as N}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as w,j as k,x as H,y as Q}from"./chunk-DTFZJJ2Y.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import"./chunk-O4THXITG.js";import{j}from"./chunk-4MKCL2OB.js";import{d as M,f as A,g as v,k as z,m as F,p as D,q as b,t as y}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{c as L,e as R}from"./chunk-HMSPALCE.js";import"./chunk-HR5OOZ7A.js";import{a as q}from"./chunk-6GZKHOTA.js";import{ha as G,ia as U,ka as X}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as m,Jb as p,Kb as S,Ub as E,Vb as f,ab as l,bb as a,ea as I,kc as _,lc as h,na as u,oa as g,ob as O,yb as s}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var se=(()=>{let i=class i extends J{constructor(t,e,o,r){super(o),this.sntiService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({name:[r?.name,[M.required]],originator:[r?.originator,[M.required]],body:[r?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(d),a(b),a($),a(V));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),O,h],decls:7,vars:5,consts:()=>{let t;t="Name";let e;e="Originator";let o;return o="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","originator","label",e],["formControlName","body","label",o],[3,"actions"]];},template:function(e,o){e&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),p()(),S(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),s("formGroup",o.form),l(4),s("actions",o.actions));},dependencies:[y,z,A,v,F,D,N,P,j,ne,Z,K,W,Q,w,H],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.sntiService=e,this.router=o,this.title=q.sms_notification,this.dataSource=new te(),this.dataSource.columnDefs.push(c.uuid("id"),c.string("originator").setValueClassFontBold(),c.date("createdAt").setVisible(!1),c.date("updatedAt").setVisible(!1),ee.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(se,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(t){this.dialog.open(Y,{data:x.delete(this.sntiService.notificationSmses.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(k(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(B),a(d),a(L));},i.ɵcmp=u({type:i,selectors:[["sz-mgmt-notification-notification-smses"]],features:[_([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),m(2,"button",3),f("click",function(){return o.openSaveComponent();}),m(3,"span"),E(4,0),p()()(),m(5,"sz-ui-table",4),f("update",function(){return o.get();}),p()),e&2&&(s("title",o.title),l(),s("dataSource",o.dataSource),l(4),s("dataSource",o.dataSource));},dependencies:[U,oe,ie,T],encapsulation:2});let n=i;return n;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=g({type:i}),i.ɵinj=I({providers:[d],imports:[R.forChild([{path:"",component:me}]),N,X,re,T,G]});let n=i;return n;})();export{We as NotificationSmssModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/