import{a as l}from"./chunk-FIC3SOU7.js";import{c as oe}from"./chunk-4EMICZOF.js";import{a as d,d as Z,e as x,f as ee,i as te,j as ie}from"./chunk-D3A4DG3E.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import"./chunk-HWJ6IS6U.js";import{b as Q,f as k,g as J,h as K,j as W,k as Y}from"./chunk-SR3I6TMI.js";import{a as H}from"./chunk-CT6UCPJK.js";import{j as m,k as q}from"./chunk-4MMSBRWE.js";import{a as B,b as R,d as V,e as G,g as C}from"./chunk-4CSR7EPJ.js";import{c as U,s as X,t as w}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as P}from"./chunk-IEUIBZ53.js";import{d as M,f as h,g as v,l as E,n as z,q as A,r as b,u as F}from"./chunk-VXNH5PTX.js";import{Y as j}from"./chunk-FZKM7RGV.js";import{c as D,e as y}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as L,la as $}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as S,Lb as u,Mb as c,Xb as N,bb as p,cb as a,ea as g,na as f,oa as T,oc as _,pc as O,qb as I,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var ne=(()=>{let t=class t extends k{constructor(i,e,o,n){super(o),this.sntiService=i,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({name:[n?.name,[M.required]],originator:[n?.originator,[M.required]],body:[n?.body,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notificationSmses.update(this.data.id,this.form.value)):this.save(this.sntiService.notificationSmses.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(l),a(b),a(B),a(R));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-notification-notification-sms-save"]],standalone:!0,features:[_([]),I,O],decls:7,vars:5,consts:()=>{let i;i="Name";let e;e="Originator";let o;return o="Body",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","originator","label",e],["formControlName","body","label",o],[3,"actions"]];},template:function(e,o){e&1&&(c(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),u()(),c(6,"sz-ui-dialog-actions",5)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),s("formGroup",o.form),p(4),s("actions",o.actions));},dependencies:[F,E,h,v,z,A,C,G,P,oe,Y,J,K,w,U,X],encapsulation:2});let r=t;return r;})();var ae=(()=>{let t=class t{constructor(i,e,o){this.dialog=i,this.sntiService=e,this.router=o,this.dataSource=new Z(),this.appBarConfig={title:j.sms_notification,menu:q.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(d.uuid("id"),d.string("originator").setValueClassFontBold(),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(ne,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(i){this.dialog.open(W,{data:Q.delete(this.sntiService.notificationSmses.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.sntiService.notificationSmses.get(this.dataSource.getQuery()).pipe(x(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(e){return new(e||t)(a(V),a(l),a(D));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-notification-notification-smses"]],features:[_([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(S(0,"sz-ui-table-bar",0),N("changed",function(){return o.get();}),u(),S(1,"sz-ui-table",1),N("update",function(){return o.get();}),u()),e&2&&(s("config",o.appBarConfig)("dataSource",o.dataSource),p(),s("dataSource",o.dataSource));},dependencies:[te,ee],encapsulation:2});let r=t;return r;})();var qe=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=T({type:t}),t.ɵinj=g({providers:[l],imports:[y.forChild([{path:"",component:ae}]),C,$,ie,H,L]});let r=t;return r;})();export{qe as NotificationSmssModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/