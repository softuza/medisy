import{b as N,c as h}from"./chunk-YRVPE5ZN.js";import{c as x}from"./chunk-5OX6AIYI.js";import{a as T}from"./chunk-TSMWRB3H.js";import{a as K,b as W,c as n,f as Y,g as Z}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as k,f as q,g as w,h as H,j as Q,k as J}from"./chunk-ZUXIOQ5W.js";import"./chunk-BJI27WIG.js";import{a as D,b as G,d as y,e as L,g as V}from"./chunk-XPOR4ANW.js";import{c as $,r as B,s as U,t as X}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import{i as F}from"./chunk-OLKWA3AP.js";import{d as S,f as O,g as z,l as P,n as I,q as v,r as b,t as A}from"./chunk-H2FFMEH6.js";import{b as m,c as j}from"./chunk-QW5IGDYW.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as g}from"./chunk-TCPYXQGZ.js";import"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as p,Kb as u,Lb as c,Wb as C,bb as d,ja as s,mb as R,mc as f,na as _,nc as M,yb as r}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var ee=(()=>{let i=class i extends q{constructor(){let o=s(D);super(o),this.srptService=s(T),this.fb=s(b),this.data=s(G),this.printTechnologies=Object.keys(h).map(a=>h[a]),this.printMedias=Object.keys(N).map(a=>N[a]);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[S.required]],description:[e?.description,[S.maxLength(4096)]],printTechnology:[e?.printTechnology,[S.required]],printMedia:[e?.printMedia,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),R,M],decls:8,vars:9,consts:()=>{let o;o="Name";let t;t="Description";let e;e="Technology";let a;return a="Media",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","printTechnology","label",e,3,"source","localizedValue"],["formControlName","printMedia","label",a,3,"source","localizedValue"],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),u()(),c(7,"sz-ui-dialog-actions",6)),t&2&&(r("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),d(2),r("formGroup",e.form),d(3),r("source",e.printTechnologies)("localizedValue",!0),d(),r("source",e.printMedias)("localizedValue",!0),d(),r("actions",e.actions));},dependencies:[A,P,O,z,I,v,V,L,F,x,J,w,H,X,$,U,B],encapsulation:2});let l=i;return l;})();var te=(()=>{let i=class i{constructor(){this.dialog=s(y),this.srptService=s(T),this.dataSource=new Y(),this.appBarConfig={title:g.printers,menu:j.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setValueClassFontBold().setStacked(n.string("description").setValueClassFontSmall()),n.enum("printTechnology").setHeaderName(g.techonology).setResponsive(!0),n.enum("printMedia").setHeaderName(g.media).setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(ee,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(Q,{data:k.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-mgmt-reporting-printers"]],standalone:!0,features:[f([]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(p(0,"sz-ui-table-bar",0),C("changed",function(){return e.get();}),u(),p(1,"sz-ui-table",1),C("update",function(){return e.get();}),u()),t&2&&(r("config",e.appBarConfig)("dataSource",e.dataSource),d(),r("dataSource",e.dataSource));},dependencies:[K,W],encapsulation:2});let l=i;return l;})();var Ge=[{path:"",component:te}];export{Ge as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/