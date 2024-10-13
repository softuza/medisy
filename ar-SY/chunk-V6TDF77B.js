import{b as h}from"./chunk-D36G4E66.js";import{e as ee}from"./chunk-XBZDPRMS.js";import{b as te}from"./chunk-6C7CPNQG.js";import{c as J,d as K,e as n,h as W,i as Z}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{a as p}from"./chunk-3O3VW7JO.js";import{b as j,f as w,g as k,h as q,j as H,k as Q}from"./chunk-XVW27JLP.js";import"./chunk-AW4VH2GC.js";import{a as y,b as F,d as V,e as R,g as $}from"./chunk-DORI46RQ.js";import{c as x,r as B,s as U,t as X,v as Y}from"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import"./chunk-CWOC6VYL.js";import{d as C,f as D,g as b,l as v,o as z,r as L,s as P,u as I}from"./chunk-ZWU3YGKZ.js";import{b as l,c as M}from"./chunk-FWFWESWL.js";import"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as G}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{r as A}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import{n as O}from"./chunk-TXVIAXH2.js";import{Kb as S,Lb as u,Mb as f,Xb as g,cb as d,ja as r,lb as T,na as c,nb as N,qc as _,rc as E,zb as a}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var ie=(()=>{let o=class o extends w{constructor(){let i=r(y);super(i),this.mpplService=r(p),this.fb=r(P),this.data=r(F),this.sexes=Object.keys(h).map(m=>h[m]),this.sexSelectConfig={emptyOption:!0};let t=this.fb;this.dialog=i;let e=this.data;this.form=t.group({name:[e?.name,[C.required,C.minLength(1)]],description:[e?.description,[]],sex:[e?.sex]});}submit(){this.IsValid()&&(this.data?this.save(this.mpplService.titles.update(this.data.id,this.form.value)):this.save(this.mpplService.titles.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles-save"]],standalone:!0,features:[_([p]),N,E],decls:7,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let e;return e="\u0627\u0644\u062C\u0646\u0633",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",t],["formControlName","sex","label",e,3,"source","localizedValue","config"],[3,"actions"]];},template:function(t,e){t&1&&(f(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),f(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),d(2),a("formGroup",e.form),d(3),a("source",e.sexes)("localizedValue",!0)("config",e.sexSelectConfig),d(),a("actions",e.actions));},dependencies:[I,v,D,b,z,L,$,R,Q,k,q,Y,x,X,U,B,ee],encapsulation:2});let s=o;return s;})();var oe=(()=>{let o=class o{constructor(){this.dialog=r(V),this.mpplService=r(p),this.router=r(A),this.dataSource=new W("-createdAt"),this.alert=T(void 0),this.appBarConfig={title:G.titles,menu:M.default([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name"),n.string("abbreviation").setVisible(!1),n.enum("sex"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(M.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTitleDeleteComponent.bind(this))]))),this.get();}openSaveComponent(i){this.dialog.open(ie,{data:i}).afterClosed().subscribe(t=>{t&&this.dataSource.addOrUpdateItem(t);});}openTitleDeleteComponent(i){this.dialog.open(H,{data:j.delete(this.mpplService.titles.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.titles.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles"]],standalone:!0,features:[_([O,te,p]),E],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(S(0,"sz-ui-table-bar",0),g("changed",function(){return e.get();}),u(),S(1,"sz-ui-table",1),g("update",function(){return e.get();}),u()),t&2&&(a("config",e.appBarConfig)("dataSource",e.dataSource),d(),a("dataSource",e.dataSource));},dependencies:[J,K],encapsulation:2});let s=o;return s;})();var xe=[{path:"",component:oe}];export{xe as default};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/