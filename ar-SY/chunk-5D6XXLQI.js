import{c as x}from"./chunk-VY6EMQDZ.js";import{b as h,c as R}from"./chunk-QETWF4JQ.js";import{a as p}from"./chunk-KSG5U4K5.js";import{a as K,b as W,c as n,f as Y,g as Z}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as k,f as q,g as w,h as H,j as Q,k as J}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import{a as y,b as G,d as L,e as V,g as F}from"./chunk-HESHWLJQ.js";import{c as B,r as U,s as X,u as j}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import{i as $}from"./chunk-KVXHYQSU.js";import{d as _,f as z,g as P,l as I,o as v,r as b,s as A,u as D}from"./chunk-UR5GDBT7.js";import{b as m,c as N}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as T}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as u,Kb as S,Lb as f,Wb as C,bb as d,ja as s,mb as O,mc as M,na as c,nc as g,yb as r}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var ee=(()=>{let i=class i extends q{constructor(){let o=s(y);super(o),this.srptService=s(p),this.fb=s(A),this.data=s(G),this.printTechnologies=Object.keys(R).map(a=>R[a]),this.printMedias=Object.keys(h).map(a=>h[a]);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[_.required]],description:[e?.description,[_.maxLength(4096)]],printTechnology:[e?.printTechnology,[_.required]],printMedia:[e?.printMedia,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([p]),O,g],decls:8,vars:9,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u062A\u0642\u0646\u064A\u0629";let a;return a="\u0627\u0644\u0648\u0633\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","printTechnology","label",e,3,"source","localizedValue"],["formControlName","printMedia","label",a,3,"source","localizedValue"],[3,"actions"]];},template:function(t,e){t&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),S()(),f(7,"sz-ui-dialog-actions",6)),t&2&&(r("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),d(2),r("formGroup",e.form),d(3),r("source",e.printTechnologies)("localizedValue",!0),d(),r("source",e.printMedias)("localizedValue",!0),d(),r("actions",e.actions));},dependencies:[D,I,z,P,v,b,F,V,$,x,J,w,H,j,B,X,U],encapsulation:2});let l=i;return l;})();var te=(()=>{let i=class i{constructor(){this.dialog=s(L),this.srptService=s(p),this.dataSource=new Y(),this.appBarConfig={title:T.printers,menu:N.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setValueClassFontBold().setStacked(n.string("description").setValueClassFontSmall()),n.enum("printTechnology").setHeaderName(T.techonology).setResponsive(!0),n.enum("printMedia").setHeaderName(T.media).setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(N.more([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openReportDeleteComponent.bind(this))]))),this.get();}openSaveComponent(o){this.dialog.open(ee,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(Q,{data:k.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-printers"]],standalone:!0,features:[M([p]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(u(0,"sz-ui-table-bar",0),C("changed",function(){return e.get();}),S(),u(1,"sz-ui-table",1),C("update",function(){return e.get();}),S()),t&2&&(r("config",e.appBarConfig)("dataSource",e.dataSource),d(),r("dataSource",e.dataSource));},dependencies:[K,W],encapsulation:2});let l=i;return l;})();var ye=[{path:"",component:te}];export{ye as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/