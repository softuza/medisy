import{b as h}from"./chunk-X33J3AOR.js";import{e as ee}from"./chunk-U6WTYH5D.js";import{b as te}from"./chunk-QQNGBUTR.js";import{c as J,d as K,e as n,h as W,i as Z}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{a as p}from"./chunk-LE4GDFAR.js";import{b as j,f as w,g as k,h as q,j as H,k as Q}from"./chunk-TDTPOOYH.js";import"./chunk-VU2DRYWU.js";import{a as y,b as F,d as V,e as R,g as $}from"./chunk-QHAXF6DJ.js";import{c as x,r as B,s as U,t as X,v as Y}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import"./chunk-2VIOUMQX.js";import{d as C,f as D,g as b,l as v,o as z,r as L,s as P,u as I}from"./chunk-4NISFW37.js";import{b as l,c as M}from"./chunk-RY6DPLLN.js";import"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as G}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{r as A}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import{n as O}from"./chunk-PR5SF5XM.js";import{Kb as d,Lb as S,Mb as f,Xb as g,cb as m,ja as r,lb as T,na as c,nb as N,qc as _,rc as E,zb as a}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";var ie=(()=>{let o=class o extends w{constructor(){super(r(y)),this.mpplService=r(p),this.fb=r(P),this.data=r(F),this.sexes=Object.keys(h).map(t=>h[t]),this.sexSelectConfig={emptyOption:!0};let i=this.fb,e=this.data;this.form=i.group({name:[e?.name,[C.required,C.minLength(1)]],description:[e?.description,[]],sex:[e?.sex]});}submit(){this.IsValid()&&(this.data?this.save(this.mpplService.titles.update(this.data.id,this.form.value)):this.save(this.mpplService.titles.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles-save"]],standalone:!0,features:[_([p]),N,E],decls:7,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let t;return t="\u0627\u0644\u062C\u0646\u0633",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",e],["formControlName","sex","label",t,3,"source","localizedValue","config"],[3,"actions"]];},template:function(e,t){e&1&&(f(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),f(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),a("formGroup",t.form),m(3),a("source",t.sexes)("localizedValue",!0)("config",t.sexSelectConfig),m(),a("actions",t.actions));},dependencies:[I,v,D,b,z,L,$,R,Q,k,q,Y,x,X,U,B,ee],encapsulation:2});let s=o;return s;})();var oe=(()=>{let o=class o{constructor(){this.dialog=r(V),this.mpplService=r(p),this.router=r(A),this.dataSource=new W("-createdAt"),this.alert=T(void 0),this.appBarConfig={title:G.titles,menu:M.default([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name"),n.string("abbreviation").setVisible(!1),n.enum("sex"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(M.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTitleDeleteComponent.bind(this))]))),this.get();}openSaveComponent(i){this.dialog.open(ie,{data:i}).afterClosed().subscribe(e=>{e&&this.dataSource.addOrUpdateItem(e);});}openTitleDeleteComponent(i){this.dialog.open(H,{data:j.delete(this.mpplService.titles.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.titles.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles"]],standalone:!0,features:[_([O,te,p]),E],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(d(0,"sz-ui-table-bar",0),g("changed",function(){return t.get();}),S(),d(1,"sz-ui-table",1),g("update",function(){return t.get();}),S()),e&2&&(a("config",t.appBarConfig)("dataSource",t.dataSource),m(),a("dataSource",t.dataSource));},dependencies:[J,K],encapsulation:2});let s=o;return s;})();var xe=[{path:"",component:oe}];export{xe as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/