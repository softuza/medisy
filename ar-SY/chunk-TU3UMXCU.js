import{b as N,c as h}from"./chunk-IJIH5RGJ.js";import{c as ae}from"./chunk-WVKE4VWW.js";import{a as u}from"./chunk-F3T3HJ24.js";import{a as s,d as te,e as ie,f as oe,i as re,j as ne}from"./chunk-XEULOFBS.js";import"./chunk-2QTMKERI.js";import"./chunk-IHQG5GMW.js";import"./chunk-IXZ6DQ7B.js";import{b as K,f as W,g as Y,h as Z,j as x,k as ee}from"./chunk-WTX7CTBX.js";import{a as J}from"./chunk-K4OUI2I7.js";import{j as d,k as Q}from"./chunk-56JEG75R.js";import{a as F,b as $,d as B,e as j,g as T}from"./chunk-HBLN4P7Q.js";import{c as w,r as k,s as q,t as H}from"./chunk-7LMGUYSN.js";import"./chunk-O7K6RJUU.js";import"./chunk-SIEE5NVR.js";import"./chunk-JF3ETUTM.js";import"./chunk-C46I2LQQ.js";import{i as U}from"./chunk-SLUFCTGK.js";import{d as _,f as z,g as P,l as D,n as b,q as A,r as y,u as G}from"./chunk-MG47MIP7.js";import{Y as E}from"./chunk-4TPPKEJT.js";import{d as L}from"./chunk-LG4R76EB.js";import"./chunk-ZR32ULJR.js";import{ia as V,la as X}from"./chunk-X5U2H5U7.js";import"./chunk-2ETGTTNK.js";import{Jb as S,Kb as c,Lb as M,Wb as C,ab as p,bb as l,ea as R,mc as g,na as f,nc as I,oa as O,pb as v,yb as a}from"./chunk-5WGYIALG.js";import"./chunk-URPFZQKB.js";var le=(()=>{let t=class t extends W{constructor(i,e,o,n){super(o),this.srptService=i,this.fb=e,this.dialog=o,this.data=n,this.printTechnologies=Object.keys(h).map(m=>h[m]),this.printMedias=Object.keys(N).map(m=>N[m]),this.form=e.group({name:[n?.name,[_.required]],description:[n?.description,[_.maxLength(4096)]],printTechnology:[n?.printTechnology,[_.required]],printMedia:[n?.printMedia,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(l(u),l(y),l(F),l($));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[g([]),v,I],decls:8,vars:9,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let o;o="\u0627\u0644\u062A\u0642\u0646\u064A\u0629";let n;return n="\u0627\u0644\u0648\u0633\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",e],["formControlName","printTechnology","label",o,3,"source","localizedValue"],["formControlName","printMedia","label",n,3,"source","localizedValue"],[3,"actions"]];},template:function(e,o){e&1&&(M(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),M(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),c()(),M(7,"sz-ui-dialog-actions",6)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),a("formGroup",o.form),p(3),a("source",o.printTechnologies)("localizedValue",!0),p(),a("source",o.printMedias)("localizedValue",!0),p(),a("actions",o.actions));},dependencies:[G,D,z,P,b,A,T,j,U,ae,ee,Y,Z,H,w,q,k],encapsulation:2});let r=t;return r;})();var me=(()=>{let t=class t{constructor(i,e){this.dialog=i,this.srptService=e,this.dataSource=new te(),this.appBarConfig={title:E.printers,menu:Q.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(s.uuid("id"),s.string("name").setValueClassFontBold().setStacked(s.string("description").setValueClassFontSmall()),s.enum("printTechnology").setHeaderName(E.techonology).setResponsive(!0),s.enum("printMedia").setHeaderName(E.media).setResponsive(!0),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),s.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(le,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(i){this.dialog.open(x,{data:K.delete(this.srptService.templates.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};t.ɵfac=function(e){return new(e||t)(l(B),l(u));},t.ɵcmp=f({type:t,selectors:[["sz-mgmt-reporting-printers"]],features:[g([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,o){e&1&&(S(0,"sz-ui-table-bar",0),C("changed",function(){return o.get();}),c(),S(1,"sz-ui-table",1),C("update",function(){return o.get();}),c()),e&2&&(a("config",o.appBarConfig)("dataSource",o.dataSource),p(),a("dataSource",o.dataSource));},dependencies:[re,oe],encapsulation:2});let r=t;return r;})();var Ke=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=O({type:t}),t.ɵinj=R({providers:[u],imports:[L.forChild([{path:"",component:me}]),T,X,ne,J,V]});let r=t;return r;})();export{Ke as PrintersModule};/**i18n:64f0a82fe8883fe2832a834cd098ce75d23bf770c70b5a88fbadf3a791ffdbcf*/