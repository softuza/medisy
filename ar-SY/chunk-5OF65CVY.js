import{a as I}from"./chunk-PDK7QLXN.js";import{c as Ee}from"./chunk-2INYNTAT.js";import{a as O,b as Ne,d as Te,e as me,g as Ie,j as Oe,k as Me}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import"./chunk-HAWQZ3DL.js";import{e as _e,f as re,g as Se,i as ae,j as le,k as se}from"./chunk-CZ3NOAZC.js";import{a as d}from"./chunk-4APH4GGR.js";import{h as u}from"./chunk-3HX3ISKW.js";import{a as q,b as w,d as x,e as Q,g as f}from"./chunk-T2IQKITO.js";import{c as Y,q as ee,r as te,s as oe,u as ie,v as ne}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as Z}from"./chunk-K3B67OJW.js";import{i as J}from"./chunk-SNWVCYUD.js";import{d as U,f as D,g as V,l as v,n as b,q as y,r as B,u as H}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{c as X,e as j}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as k,ja as K,la as W}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as S,Kb as N,Lb as T,Vb as m,Wb as E,bb as s,cb as a,ea as $,na as M,nc as C,oa as R,oc as G,qb as z,zb as l}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var fe=(()=>{let n=class n extends _e{constructor(o,t,i,e){super(i),this.sntiService=o,this.fb=t,this.dialog=i,this.data=e,this.directions=["auto","ltr","rtl"],this.vibrations=[50,100,200,400,800],this.directionSelectConfig={emptyOption:!0},this.form=t.group({name:[e?.name,[U.required]],title:[e?.title,[]],body:[e?.body,[]],icon:[e?.icon,[]],image:[e?.image,[]],badge:[e?.badge,[]],vibrate:[e?.vibrate,[]],dir:[e?.dir,[]],tag:[e?.tag,[]],lang:[e?.lang,[]],timestamp:[e?.timestamp,[]],data:[e?.data,[]],requireInteraction:[e?.requireInteraction,[]],renotify:[e?.renotify,[]],silent:[e?.silent,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationPushes.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationPushes.create(this.form.value)));}};n.ɵfac=function(t){return new(t||n)(a(I),a(B),a(q),a(w));},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-notification-notification-push-save"]],standalone:!0,features:[C([]),z,G],decls:21,vars:7,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0644\u0642\u0628";let i;i="\u0627\u0644\u0645\u062D\u062A\u0648\u0649";let e;e="\u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629";let c;c="\u0627\u0644\u0635\u0648\u0631\u0629";let p;p="\u0627\u0644\u0648\u0627\u0633\u0645\u0629";let g;g="\u0627\u0644\u0627\u062A\u062C\u0627\u0647";let A;A="\u0627\u0644\u0644\u063A\u0629";let P;P="\u0628\u0635\u0645\u0629 \u0627\u0644\u0648\u0642\u062A";let L;L="\u0635\u0627\u0645\u062A";let F;F="\u062A\u062D\u062A\u0627\u062C \u062A\u062F\u0627\u062E\u0644";let h;return h="\u0627\u0639\u0627\u062F\u0629 \u0627\u0634\u0639\u0627\u0631",[L,F,h,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","title","label",t],["formControlName","body","label",i],["formControlName","icon","label",e],["formControlName","image","label",c],["formControlName","tag","label",p],["formControlName","dir","label",g,3,"source","config"],["formControlName","lang","label",A],["formControlName","timestamp","label",P],[1,"sz-form-row"],["formControlName","silent"],["formControlName","requireInteraction"],["formControlName","renotify"],[3,"actions"]];},template:function(t,i){t&1&&(T(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4),T(3,"sz-ui-form-field-input",5)(4,"sz-ui-form-field-input",6)(5,"sz-ui-form-field-textarea",7)(6,"sz-ui-form-field-input",8)(7,"sz-ui-form-field-input",9)(8,"sz-ui-form-field-input",10)(9,"sz-ui-form-field-select",11)(10,"sz-ui-form-field-input",12)(11,"sz-ui-form-field-input",13),S(12,"div",14)(13,"mat-checkbox",15),m(14,0),N(),S(15,"mat-checkbox",16),m(16,1),N()(),S(17,"div",14)(18,"mat-checkbox",17),m(19,2),N()()()(),T(20,"sz-ui-dialog-actions",18)),t&2&&(l("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),l("formGroup",i.form),s(7),l("source",i.directions)("config",i.directionSelectConfig),s(11),l("actions",i.actions));},dependencies:[H,v,D,V,b,y,f,Q,te,ee,J,Ee,le,re,Se,ne,Y,ie,oe],encapsulation:2});let _=n;return _;})();var de=(()=>{let n=class n{constructor(o,t,i){this.dialog=o,this.sntiService=t,this.router=i,this.dataSource=new Te(),this.appBarConfig={title:Z.push_notification},this.dataSource.columnDefs.push(O.uuid("id"),O.string("name").setValueClassFontBold(),O.string("title"),O.date("createdAt").setVisible(!1),O.date("updatedAt").setVisible(!1),Ne.menu([u.edit(e=>this.openSaveComponent(e)),u.delete(e=>this.openDeleteComponent(e))])),this.get();}openSaveComponent(o){this.dialog.open(fe,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(ae,{data:se.delete(this.sntiService.notificationPushes.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notificationPushes.get(this.dataSource.getQuery()).pipe(me(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};n.ɵfac=function(t){return new(t||n)(a(x),a(I),a(X));},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-notification-notification-pushes"]],features:[C([])],decls:6,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(T(0,"sz-ui-app-bar",1),S(1,"sz-ui-table-search-filter",2),E("changed",function(){return i.get();}),S(2,"button",3),E("click",function(){return i.openSaveComponent();}),S(3,"span"),m(4,0),N()()(),S(5,"sz-ui-table",4),E("update",function(){return i.get();}),N()),t&2&&(l("config",i.appBarConfig),s(),l("dataSource",i.dataSource),s(4),l("dataSource",i.dataSource));},dependencies:[K,Oe,Ie,d],encapsulation:2});let _=n;return _;})();var lt=(()=>{let n=class n{};n.ɵfac=function(t){return new(t||n)();},n.ɵmod=R({type:n}),n.ɵinj=$({providers:[I],imports:[j.forChild([{path:"",component:de}]),f,W,Me,d,k]});let _=n;return _;})();export{lt as NotificationPushesModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/