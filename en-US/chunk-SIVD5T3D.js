import{a as O}from"./chunk-WBEDTO3H.js";import{c as Ee}from"./chunk-DEDCJZVG.js";import{a as I,b as Te,d as me,f as Oe,i as Ie,j as Me}from"./chunk-OD34M2WV.js";import"./chunk-UE5ZVLL6.js";import"./chunk-XHAJJGHN.js";import"./chunk-J3ZGTMT7.js";import{e as re,f as Se,g as ae,i as le,j as se,k as Ne}from"./chunk-XU4OIEX3.js";import"./chunk-5XS2JNPH.js";import{a as u}from"./chunk-5EXH6KQ6.js";import{h as f}from"./chunk-VJQIJJGN.js";import{a as q,b as w,d as x,e as Q,g as d}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as Y,j as Z,s as te,t as oe,v as ie,x as ne,y as _e}from"./chunk-DTFZJJ2Y.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import"./chunk-O4THXITG.js";import{j as J}from"./chunk-4MKCL2OB.js";import{d as U,f as D,g as V,k as v,m as b,p as y,q as B,t as H}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{c as X,e as j}from"./chunk-HMSPALCE.js";import"./chunk-HR5OOZ7A.js";import{a as ee}from"./chunk-6GZKHOTA.js";import{ha as k,ia as K,ka as W}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as S,Jb as N,Kb as T,Ub as m,Vb as E,ab as s,bb as a,ea as $,kc as C,lc as G,na as M,oa as R,ob as z,yb as l}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var de=(()=>{let i=class i extends re{constructor(o,t,n,e){super(n),this.sntiService=o,this.fb=t,this.dialog=n,this.data=e,this.directions=["auto","ltr","rtl"],this.vibrations=[50,100,200,400,800],this.form=t.group({name:[e?.name,[U.required]],title:[e?.title,[]],body:[e?.body,[]],icon:[e?.icon,[]],image:[e?.image,[]],badge:[e?.badge,[]],vibrate:[e?.vibrate,[]],dir:[e?.dir,[]],tag:[e?.tag,[]],lang:[e?.lang,[]],timestamp:[e?.timestamp,[]],data:[e?.data,[]],requireInteraction:[e?.requireInteraction,[]],renotify:[e?.renotify,[]],silent:[e?.silent,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationPushes.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationPushes.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)(a(O),a(B),a(q),a(w));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-notification-notification-push-save"]],standalone:!0,features:[C([]),z,G],decls:21,vars:7,consts:()=>{let o;o="Name";let t;t="Title";let n;n="Body";let e;e="Icon";let c;c="Image";let p;p="Tag";let g;g="Direction";let A;A="Language";let P;P="Timestamp";let L;L="Silent";let F;F="Require Interaction";let h;return h="Renotify",[L,F,h,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","title","label",t],["formControlName","body","label",n],["formControlName","icon","label",e],["formControlName","image","label",c],["formControlName","tag","label",p],["formControlName","dir","label",g,3,"source","emptyOption"],["formControlName","lang","label",A],["formControlName","timestamp","label",P],[1,"sz-form-row"],["formControlName","silent"],["formControlName","requireInteraction"],["formControlName","renotify"],[3,"actions"]];},template:function(t,n){t&1&&(T(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4),T(3,"sz-ui-form-field-input",5)(4,"sz-ui-form-field-input",6)(5,"sz-ui-form-field-textarea",7)(6,"sz-ui-form-field-input",8)(7,"sz-ui-form-field-input",9)(8,"sz-ui-form-field-input",10)(9,"sz-ui-form-field-select",11)(10,"sz-ui-form-field-input",12)(11,"sz-ui-form-field-input",13),S(12,"div",14)(13,"mat-checkbox",15),m(14,0),N(),S(15,"mat-checkbox",16),m(16,1),N()(),S(17,"div",14)(18,"mat-checkbox",17),m(19,2),N()()()(),T(20,"sz-ui-dialog-actions",18)),t&2&&(l("title",n.title)("subtitle",n.subtitle)("alert",n.alert()),s(2),l("formGroup",n.form),s(7),l("source",n.directions)("emptyOption",!0),s(11),l("actions",n.actions));},dependencies:[H,v,D,V,b,y,d,Q,oe,te,J,Ee,se,Se,ae,_e,Y,ne,ie],encapsulation:2});let _=i;return _;})();var ue=(()=>{let i=class i{constructor(o,t,n){this.dialog=o,this.sntiService=t,this.router=n,this.title=ee.push_notification,this.dataSource=new me(),this.dataSource.columnDefs.push(I.uuid("id"),I.string("name").setValueClassFontBold(),I.string("title"),I.date("createdAt").setVisible(!1),I.date("updatedAt").setVisible(!1),Te.menu([f.edit(e=>this.openSaveComponent(e)),f.delete(e=>this.openDeleteComponent(e))])),this.get();}openSaveComponent(o){this.dialog.open(de,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(le,{data:Ne.delete(this.sntiService.notificationPushes.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notificationPushes.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(a(x),a(O),a(X));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-notification-notification-pushes"]],features:[C([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,n){t&1&&(T(0,"sz-ui-app-bar",1),S(1,"sz-ui-table-search-filter",2),E("changed",function(){return n.get();}),S(2,"button",3),E("click",function(){return n.openSaveComponent();}),S(3,"span"),m(4,0),N()()(),S(5,"sz-ui-table",4),E("update",function(){return n.get();}),N()),t&2&&(l("title",n.title),s(),l("dataSource",n.dataSource),s(4),l("dataSource",n.dataSource));},dependencies:[K,Ie,Oe,u],encapsulation:2});let _=i;return _;})();var lt=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=R({type:i}),i.ɵinj=$({providers:[O],imports:[j.forChild([{path:"",component:ue}]),d,W,Me,u,k]});let _=i;return _;})();export{lt as NotificationPushesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/