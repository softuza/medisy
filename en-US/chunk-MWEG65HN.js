import{a as O}from"./chunk-UKEI5KKR.js";import{c as de}from"./chunk-MHCBG22D.js";import{a as Te,d as Oe,e as N,h as me,i as Ie,j as Me}from"./chunk-AJ53IAOZ.js";import"./chunk-YSNB3P37.js";import"./chunk-QVKWJFRG.js";import{b as _e,f as re,g as ae,h as Se,j as se,k as le}from"./chunk-ZQ3WWH5V.js";import"./chunk-AJFWP4NB.js";import{a as w,b as j,d as x,e as Q,g as u}from"./chunk-IVPZHVY6.js";import{c as Y,p as Z,q as ee,r as te,s as oe,t as ie}from"./chunk-SXZECFKA.js";import"./chunk-YMAJIOBZ.js";import"./chunk-PYOUUVMA.js";import{i as J}from"./chunk-YLO36JWT.js";import{d as G,f as b,g as D,l as U,n as v,q as y,r as B,t as H}from"./chunk-4DSQMHTF.js";import{b as l,c as ne}from"./chunk-UEBI7D6A.js";import{a as Ne}from"./chunk-5RP6DSGT.js";import"./chunk-B2AKHGYH.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import{a as W}from"./chunk-TCPYXQGZ.js";import"./chunk-BBLNUGHS.js";import{c as X,d as q}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as k,la as K}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as S,Kb as s,Lb as M,Vb as d,Wb as f,bb as T,ea as R,ja as r,mb as V,mc as E,na as I,nc as C,oa as z,yb as a}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var Ce=(()=>{let t=class t extends re{constructor(){let i=r(w);super(i),this.sntiService=r(O),this.fb=r(B),this.data=r(j),this.directions=["auto","ltr","rtl"],this.vibrations=[50,100,200,400,800],this.directionSelectConfig={emptyOption:!0};let o=this.fb;this.dialog=i;let e=this.data;this.form=o.group({name:[e?.name,[G.required]],title:[e?.title,[]],body:[e?.body,[]],icon:[e?.icon,[]],image:[e?.image,[]],badge:[e?.badge,[]],vibrate:[e?.vibrate,[]],dir:[e?.dir,[]],tag:[e?.tag,[]],lang:[e?.lang,[]],timestamp:[e?.timestamp,[]],data:[e?.data,[]],requireInteraction:[e?.requireInteraction,[]],renotify:[e?.renotify,[]],silent:[e?.silent,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationPushes.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationPushes.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=I({type:t,selectors:[["sz-mgmt-notification-notification-push-save"]],standalone:!0,features:[E([]),V,C],decls:21,vars:7,consts:()=>{let i;i="Name";let o;o="Title";let e;e="Body";let m;m="Icon";let c;c="Image";let g;g="Tag";let A;A="Direction";let P;P="Language";let L;L="Timestamp";let h;h="Silent";let F;F="Require Interaction";let $;return $="Renotify",[h,F,$,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","title","label",o],["formControlName","body","label",e],["formControlName","icon","label",m],["formControlName","image","label",c],["formControlName","tag","label",g],["formControlName","dir","label",A,3,"source","config"],["formControlName","lang","label",P],["formControlName","timestamp","label",L],[1,"sz-form-row"],["formControlName","silent"],["formControlName","requireInteraction"],["formControlName","renotify"],[3,"actions"]];},template:function(o,e){o&1&&(M(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4),M(3,"sz-ui-form-field-input",5)(4,"sz-ui-form-field-input",6)(5,"sz-ui-form-field-textarea",7)(6,"sz-ui-form-field-input",8)(7,"sz-ui-form-field-input",9)(8,"sz-ui-form-field-input",10)(9,"sz-ui-form-field-select",11)(10,"sz-ui-form-field-input",12)(11,"sz-ui-form-field-input",13),S(12,"div",14)(13,"mat-checkbox",15),d(14,0),s(),S(15,"mat-checkbox",16),d(16,1),s()(),S(17,"div",14)(18,"mat-checkbox",17),d(19,2),s()()()(),M(20,"sz-ui-dialog-actions",18)),o&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),T(2),a("formGroup",e.form),T(7),a("source",e.directions)("config",e.directionSelectConfig),T(11),a("actions",e.actions));},dependencies:[H,U,b,D,v,y,u,Q,ee,Z,J,de,le,ae,Se,ie,Y,oe,te],encapsulation:2});let n=t;return n;})();var p=(()=>{let t=class t{constructor(){this.dialog=r(x),this.sntiService=r(O),this.router=r(X),this.dataSource=new me(),this.appBarConfig={title:W.push_notification,menu:ne.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(N.uuid("id"),N.string("name").setValueClassFontBold(),N.string("title"),N.date("createdAt").setVisible(!1),N.date("updatedAt").setVisible(!1),N.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(Ce,{data:i}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openDeleteComponent(i){this.dialog.open(se,{data:_e.delete(this.sntiService.notificationPushes.delete(i.id),i)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.sntiService.notificationPushes.get(this.dataSource.getQuery()).pipe(Ie(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=I({type:t,selectors:[["sz-mgmt-notification-notification-pushes"]],standalone:!0,features:[E([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,e){o&1&&(S(0,"sz-ui-table-bar",0),f("changed",function(){return e.get();}),s(),S(1,"sz-ui-table",1),f("update",function(){return e.get();}),s()),o&2&&(a("config",e.appBarConfig)("dataSource",e.dataSource),T(),a("dataSource",e.dataSource));},dependencies:[Te,Oe],encapsulation:2});let n=t;return n;})();var nt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=z({type:t}),t.ɵinj=R({providers:[O],imports:[q.forChild([{path:"",component:p}]),u,K,Me,Ne,k,p]});let n=t;return n;})();export{nt as NotificationPushesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/