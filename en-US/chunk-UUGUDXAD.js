import{b as N,c as h}from"./chunk-MXK35TKF.js";import{c as ae}from"./chunk-RDHXD6J7.js";import{a as u}from"./chunk-YWFRILZP.js";import{a as s,d as te,e as ie,f as oe,i as re,j as ne}from"./chunk-UMQZRE5E.js";import"./chunk-RCVS45O2.js";import"./chunk-PXWWDYTP.js";import"./chunk-R3ZFNPLW.js";import{b as K,f as W,g as Y,h as Z,j as x,k as ee}from"./chunk-UXK6PSGI.js";import{a as J}from"./chunk-LLZ7TKB3.js";import{j as d,k as Q}from"./chunk-EVGSYUOK.js";import{a as F,b as $,d as B,e as j,g as T}from"./chunk-M5V3PZRJ.js";import{c as w,r as k,s as q,t as H}from"./chunk-VUCYJ2HO.js";import"./chunk-CVH4P2E2.js";import"./chunk-443GWC6S.js";import"./chunk-SYXG226D.js";import"./chunk-J5ICTFNH.js";import{i as U}from"./chunk-D5DHQUZL.js";import{d as _,f as z,g as P,l as D,n as b,q as A,r as y,u as G}from"./chunk-EOQNX5GG.js";import{Y as E}from"./chunk-I2SD3VIP.js";import{d as L}from"./chunk-TM5JFVB7.js";import"./chunk-NUQX3XTB.js";import{ia as V,la as X}from"./chunk-Y7HMALTZ.js";import"./chunk-HTTNJI4B.js";import{Jb as S,Kb as c,Lb as M,Wb as C,ab as p,bb as l,ea as R,mc as g,na as f,nc as I,oa as O,pb as v,yb as a}from"./chunk-PGHKBHIM.js";import"./chunk-7NJ6IGLQ.js";var le=(()=>{let t=class t extends W{constructor(i,e,o,n){super(o),this.srptService=i,this.fb=e,this.dialog=o,this.data=n,this.printTechnologies=Object.keys(h).map(m=>h[m]),this.printMedias=Object.keys(N).map(m=>N[m]),this.form=e.group({name:[n?.name,[_.required]],description:[n?.description,[_.maxLength(4096)]],prinTechnology:[n?.printTechnology,[_.required]],printMedia:[n?.printMedia,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(l(u),l(y),l(F),l($));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[g([]),v,I],decls:8,vars:9,consts:()=>{let i;i="Name";let e;e="Description";let o;o="Technology";let n;return n="Media",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",e],["formControlName","prinTechnology","label",o,3,"source","localizedValue"],["formControlName","printMedia","label",n,3,"source","localizedValue"],[3,"actions"]];},template:function(e,o){e&1&&(M(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),M(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),c()(),M(7,"sz-ui-dialog-actions",6)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(3),a("source",o.printTechnologies)("localizedValue",!0),p(),a("source",o.printMedias)("localizedValue",!0),p(),a("actions",o.actions));},dependencies:[G,D,z,P,b,A,T,j,U,ae,ee,Y,Z,H,w,q,k],encapsulation:2});let r=t;return r;})();var me=(()=>{let t=class t{constructor(i,e){this.dialog=i,this.srptService=e,this.dataSource=new te(),this.appBarConfig={title:E.printers,menu:Q.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(s.uuid("id"),s.string("name").setValueClassFontBold().setStacked(s.string("description").setValueClassFontSmall()),s.enum("printTechnology").setHeaderName(E.techonology).setResponsive(!0),s.enum("printMedia").setHeaderName(E.media).setResponsive(!0),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),s.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(le,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(i){this.dialog.open(x,{data:K.delete(this.srptService.templates.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(e){return new(e||t)(l(B),l(u));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-reporting-printers"]],features:[g([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(S(0,"sz-ui-table-bar",0),C("changed",function(){return o.get();}),c(),S(1,"sz-ui-table",1),C("update",function(){return o.get();}),c()),e&2&&(a("config",o.appBarConfig)("dataSource",o.dataSource),p(),a("dataSource",o.dataSource));},dependencies:[re,oe],encapsulation:2});let r=t;return r;})();var Ke=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=O({type:t}),t.ɵinj=R({providers:[u],imports:[L.forChild([{path:"",component:me}]),T,X,ne,J,V]});let r=t;return r;})();export{Ke as PrintersModule};/**i18n:5a2c0bc94bbf1ef498664455a9d60582c29bc498832d9f320f89c95b436c0516*/