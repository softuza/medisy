import{c as x}from"./chunk-Z3DSEDYU.js";import{b as h,c as R}from"./chunk-PFWYQX3D.js";import{a as m}from"./chunk-2T3VJL2I.js";import{c as K,d as W,e as n,h as Y,i as Z}from"./chunk-25OCZQ76.js";import"./chunk-RB3G63CU.js";import"./chunk-4NLUKIZF.js";import"./chunk-E3TIAARS.js";import{b as k,f as q,g as w,h as H,j as Q,k as J}from"./chunk-ZILQN7IV.js";import"./chunk-7JFHPBQA.js";import{a as y,b as G,d as L,e as V,g as F}from"./chunk-WP7GINVA.js";import{c as B,r as U,s as X,u as j}from"./chunk-WKQOW3L7.js";import"./chunk-SWSR2FHM.js";import"./chunk-YGAFJZ7Z.js";import{i as $}from"./chunk-7ES6GSH3.js";import{d as _,f as z,g as P,l as v,o as I,r as b,s as A,u as D}from"./chunk-GJE2CTRJ.js";import{b as p,c as N}from"./chunk-UJCFOIFA.js";import"./chunk-IDEFMHWN.js";import"./chunk-EQLT65ZB.js";import"./chunk-K465E5EJ.js";import{a as T}from"./chunk-CLMOD2EC.js";import"./chunk-FPHQ27E5.js";import"./chunk-FMLZPT37.js";import"./chunk-WW2QO4XN.js";import"./chunk-DMIN26VD.js";import"./chunk-VE4VSZJT.js";import{Kb as u,Lb as S,Mb as f,Xb as C,cb as d,ja as s,na as c,nb as O,qc as M,rc as g,zb as r}from"./chunk-2H67EYAB.js";import"./chunk-ZA5F7ID5.js";var ee=(()=>{let i=class i extends q{constructor(){let o=s(y);super(o),this.srptService=s(m),this.fb=s(A),this.data=s(G),this.printTechnologies=Object.keys(R).map(a=>R[a]),this.printMedias=Object.keys(h).map(a=>h[a]);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[_.required]],description:[e?.description,[_.maxLength(4096)]],printTechnology:[e?.printTechnology,[_.required]],printMedia:[e?.printMedia,[_.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([m]),O,g],decls:8,vars:9,consts:()=>{let o;o="Name";let t;t="Description";let e;e="Technology";let a;return a="Media",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","printTechnology","label",e,3,"source","localizedValue"],["formControlName","printMedia","label",a,3,"source","localizedValue"],[3,"actions"]];},template:function(t,e){t&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),S()(),f(7,"sz-ui-dialog-actions",6)),t&2&&(r("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),d(2),r("formGroup",e.form),d(3),r("source",e.printTechnologies)("localizedValue",!0),d(),r("source",e.printMedias)("localizedValue",!0),d(),r("actions",e.actions));},dependencies:[D,v,z,P,I,b,F,V,$,x,J,w,H,j,B,X,U],encapsulation:2});let l=i;return l;})();var te=(()=>{let i=class i{constructor(){this.dialog=s(L),this.srptService=s(m),this.dataSource=new Y(),this.appBarConfig={title:T.printers,menu:N.default([p.add(this.openSaveComponent.bind(this)),p.menu([p.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setValueClassFontBold().setStacked(n.string("description").setValueClassFontSmall()),n.enum("printTechnology").setHeaderName(T.techonology).setResponsive(!0),n.enum("printMedia").setHeaderName(T.media).setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(N.more([p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openReportDeleteComponent.bind(this))]))),this.get();}openSaveComponent(o){this.dialog.open(ee,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(Q,{data:k.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-mgmt-reporting-printers"]],standalone:!0,features:[M([m]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(u(0,"sz-ui-table-bar",0),C("changed",function(){return e.get();}),S(),u(1,"sz-ui-table",1),C("update",function(){return e.get();}),S()),t&2&&(r("config",e.appBarConfig)("dataSource",e.dataSource),d(),r("dataSource",e.dataSource));},dependencies:[K,W],encapsulation:2});let l=i;return l;})();var ye=[{path:"",component:te}];export{ye as default};/**i18n:9054193bb4dcc24d51a6dba534830e37dcd91e77a8a9ecb6b346a792eb872c67*/