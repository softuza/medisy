import{a as M}from"./chunk-RLYTRSWS.js";import{c as W}from"./chunk-5OX6AIYI.js";import{a as Q,b as k,c as m,f as J,g as K}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as U,f as X,g as q,h as w,j,k as H}from"./chunk-ZUXIOQ5W.js";import"./chunk-BJI27WIG.js";import{a as z,b as F,d as D,e as y,g as L}from"./chunk-XPOR4ANW.js";import{c as B,s as P,t as R}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import{i as V}from"./chunk-OLKWA3AP.js";import{d as C,f as T,g as O,l as I,n as h,q as E,r as A,t as b}from"./chunk-H2FFMEH6.js";import{b as s,c as $}from"./chunk-QW5IGDYW.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as G}from"./chunk-TCPYXQGZ.js";import{r as v}from"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as d,Kb as S,Lb as f,Wb as N,bb as l,ja as n,mb as g,mc as _,na as p,nc as c,yb as r}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var Y=(()=>{let o=class o extends X{constructor(){let i=n(z);super(i),this.sntiService=n(M),this.fb=n(A),this.data=n(F);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name,[C.required]],originator:[t?.originator,[C.required]],body:[t?.body,[C.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),g,c],decls:7,vars:5,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0645\u0631\u0633\u0644";let t;return t="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","originator","label",e],["formControlName","body","label",t],[3,"actions"]];},template:function(e,t){e&1&&(f(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),S()(),f(6,"sz-ui-dialog-actions",5)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(4),r("actions",t.actions));},dependencies:[b,I,T,O,h,E,L,y,V,W,H,q,w,R,B,P],encapsulation:2});let a=o;return a;})();var Z=(()=>{let o=class o{constructor(){this.dialog=n(D),this.sntiService=n(M),this.router=n(v),this.dataSource=new J(),this.appBarConfig={title:G.sms_notification,menu:$.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(m.uuid("id"),m.string("originator").setValueClassFontBold(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),m.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(Y,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(i){this.dialog.open(j,{data:U.delete(this.sntiService.notificationSmses.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notification-smses"]],standalone:!0,features:[_([]),c],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(d(0,"sz-ui-table-bar",0),N("changed",function(){return t.get();}),S(),d(1,"sz-ui-table",1),N("update",function(){return t.get();}),S()),e&2&&(r("config",t.appBarConfig)("dataSource",t.dataSource),l(),r("dataSource",t.dataSource));},dependencies:[Q,k],encapsulation:2});let a=o;return a;})();var ve=[{path:"",component:Z}];export{ve as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/