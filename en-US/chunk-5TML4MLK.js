import{c as Z}from"./chunk-VY6EMQDZ.js";import{a as u}from"./chunk-KLF2JPT6.js";import{a as J,b as K,c as n,f as W,g as Y}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as j,f as q,g as w,h as H,j as Q,k}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import{a as y,b as D,d as R,e as V,g as G}from"./chunk-HESHWLJQ.js";import{c as P,s as U,u as X}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import{i as $}from"./chunk-KVXHYQSU.js";import{d as S,f as g,g as A,l as h,o as b,r as F,s as L,u as z}from"./chunk-UR5GDBT7.js";import{b as l,c as C}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as B}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as v}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as _,Kb as d,Lb as T,Wb as I,bb as m,ja as a,mb as O,mc as c,na as N,nc as M,yb as s}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var x=(()=>{let i=class i extends q{constructor(){let o=a(y);super(o),this.sntiService=a(u),this.fb=a(L),this.data=a(D);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[S.required]],subject:[e?.subject,[S.required]],replyToEmail:[e?.replyToEmail,[S.email]],replyToName:[e?.replyToName,[]],body:[e?.body,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationEmails.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationEmails.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=N({type:i,selectors:[["sz-mgmt-notification-notification-email-save"]],standalone:!0,features:[c([u]),O,M],decls:9,vars:5,consts:()=>{let o;o="Name";let t;t="Subject";let e;e="Email";let p;p="Name";let E;return E="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","subject","label",t],["formControlName","replyToEmail","label",e],["formControlName","replyToName","label",p],["formControlName","body","label",E],[3,"actions"]];},template:function(t,e){t&1&&(T(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),T(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-textarea",6),d()(),T(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),s("formGroup",e.form),m(6),s("actions",e.actions));},dependencies:[z,h,g,A,b,F,G,V,$,Z,k,w,H,X,P,U],encapsulation:2});let r=i;return r;})();var ee=(()=>{let i=class i{constructor(){this.dialog=a(R),this.sntiService=a(u),this.router=a(v),this.dataSource=new W(),this.appBarConfig={title:B.email_notification,menu:C.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setValueClassFontBold(),n.string("subject").setResponsive(!0),n.string("replyToName").setResponsive(!0),n.string("replyToEmail").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(C.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openDeleteComponent.bind(this))]))),this.get();}openSaveComponent(o){this.dialog.open(x,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(Q,{data:j.delete(this.sntiService.notificationEmails.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notificationEmails.get(this.dataSource.getQuery()).pipe(Y(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=N({type:i,selectors:[["sz-mgmt-notification-notification-emails"]],standalone:!0,features:[c([]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(_(0,"sz-ui-table-bar",0),I("changed",function(){return e.get();}),d(),_(1,"sz-ui-table",1),I("update",function(){return e.get();}),d()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),m(),s("dataSource",e.dataSource));},dependencies:[J,K],encapsulation:2});let r=i;return r;})();var ze=[{path:"",component:ee}];export{ze as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/