import{a as u}from"./chunk-ODL4XQ4G.js";import{c as Z}from"./chunk-DEF6I2JA.js";import{a as J,b as K,c as n,f as W,g as Y}from"./chunk-YUC45UAG.js";import"./chunk-GPAES7OP.js";import"./chunk-DSJR6L5G.js";import"./chunk-XDEHVO3T.js";import{b as j,f as q,g as w,h as H,j as Q,k}from"./chunk-LUZYQH3A.js";import"./chunk-ODYGSBAJ.js";import{a as v,b as y,d as D,e as R,g as V}from"./chunk-MHLQ5ASK.js";import{c as $,s as B,u as U}from"./chunk-EMVR6TPU.js";import"./chunk-ZDS23LK5.js";import"./chunk-WX4XW32G.js";import{i as G}from"./chunk-Q4QLTUTU.js";import{d as S,f as O,g,l as A,n as h,q as b,r as F,t as L}from"./chunk-R425IBES.js";import{b as l,c as X}from"./chunk-MFJGOIE4.js";import"./chunk-KPHZXQ4R.js";import"./chunk-53QS6UIR.js";import"./chunk-TM26YT7E.js";import{a as P}from"./chunk-XYHX3JVK.js";import"./chunk-FZND2MZR.js";import{r as z}from"./chunk-CVZW7JYW.js";import"./chunk-GBJNACNX.js";import"./chunk-IJWI4VMJ.js";import"./chunk-OKKKBEFN.js";import{Jb as _,Kb as d,Lb as T,Wb as I,bb as m,ja as a,mb as E,mc as c,na as N,nc as M,yb as s}from"./chunk-K7VHIDZW.js";import"./chunk-VARUJZUG.js";var x=(()=>{let i=class i extends q{constructor(){let o=a(v);super(o),this.sntiService=a(u),this.fb=a(F),this.data=a(y);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[S.required]],subject:[e?.subject,[S.required]],replyToEmail:[e?.replyToEmail,[S.email]],replyToName:[e?.replyToName,[]],body:[e?.body,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=N({type:i,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[c([u]),E,M],decls:9,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0645\u0648\u0636\u0648\u0639";let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let p;p="\u0627\u0644\u0627\u0633\u0645";let C;return C="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","subject","label",t],["formControlName","replyToEmail","label",e],["formControlName","replyToName","label",p],["formControlName","body","label",C],[3,"actions"]];},template:function(t,e){t&1&&(T(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),T(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),d()(),T(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),s("formGroup",e.form),m(6),s("actions",e.actions));},dependencies:[L,A,O,g,h,b,V,R,G,Z,k,w,H,U,$,B],encapsulation:2});let r=i;return r;})();var ee=(()=>{let i=class i{constructor(){this.dialog=a(D),this.sntiService=a(u),this.router=a(z),this.dataSource=new W(),this.appBarConfig={title:P.email_notification,menu:X.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setValueClassFontBold(),n.string("subject").setResponsive(!0),n.string("replyToName").setResponsive(!0),n.string("replyToEmail").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(x,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(Q,{data:j.delete(this.sntiService.notificationEmails.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(Y(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=N({type:i,selectors:[["sz-mgmt-notification-notification-emails"]],standalone:!0,features:[c([]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),I("changed",function(){return e.get();}),d(),_(1,"sz-ui-table",1),I("update",function(){return e.get();}),d()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),m(),s("dataSource",e.dataSource));},dependencies:[J,K],encapsulation:2});let r=i;return r;})();var ze=[{path:"",component:ee}];export{ze as default};/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/