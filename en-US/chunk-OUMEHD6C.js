import{a as c}from"./chunk-UFRSHZ2Z.js";import{c as ne}from"./chunk-PTZVMM4E.js";import{a as d,b as ee,d as te,f as oe,k as ie,l as re}from"./chunk-5VZ5D5YF.js";import"./chunk-XUBC2NFI.js";import"./chunk-JBDAZZD3.js";import{f as Q,g as J,h as K,j as W,k as Y,l as Z}from"./chunk-ZRJSRLOM.js";import"./chunk-UXLKEBN7.js";import"./chunk-UABDP5X2.js";import{b as T}from"./chunk-HXBNSFNL.js";import{j as C}from"./chunk-NGPQWUJL.js";import{a as y,b as $,d as V,e as B,g}from"./chunk-YRNLLR6T.js";import{l as H,q,r as x}from"./chunk-MWZUS7D7.js";import{c as k}from"./chunk-HOUCADFY.js";import"./chunk-P2QQ56TC.js";import"./chunk-GKM5F2GI.js";import{c as w}from"./chunk-4UQFGTYA.js";import{i as j}from"./chunk-JJRCRC6G.js";import{d as E,f as R,g as D,k as O,m as A,p as L,q as P,t as b}from"./chunk-3KPG26UX.js";import"./chunk-S3GYVJTQ.js";import{e as F}from"./chunk-33HQZPUZ.js";import"./chunk-3BHDG2TW.js";import{a as U,c as X}from"./chunk-NQMSNWCW.js";import{ia as G}from"./chunk-WLYMVNMU.js";import"./chunk-J2LOM5YY.js";import{Hb as m,Ib as u,Jb as l,O as S,Tb as z,Vb as _,ha as h,ib as p,jb as n,jc as M,mc as I,qa as f,qb as N,ra as v,xb as a}from"./chunk-CQRLKO4M.js";var me=(()=>{let o=class o extends Q{constructor(t,e,i,s){super(i),this.srptService=t,this.fb=e,this.dialog=i,this.data=s,this.form=e.group({name:[s?.name,[E.required]],description:[s?.description,[E.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(c),n(P),n(y),n($));},o.ɵcmp=f({type:o,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),N,I],decls:6,vars:3,consts:()=>{let t;t="Name";let e;return e="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],[3,"actions"]];},template:function(e,i){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),u()(),l(5,"sz-ui-dialog-actions",4)),e&2&&(a("header",i.header),p(2),a("formGroup",i.form),p(3),a("actions",i.actions));},dependencies:[b,O,R,D,A,L,g,B,j,ne,Y,J,K,x,H,q],encapsulation:2});let r=o;return r;})();var se=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.srptService=e,this.title=w.templates,this.dataSource=new te(),this.dataSource.columnDefs.push(d.uuid("id"),d.string("name"),d.string("description"),d.date("createdAt",!1),d.date("updatedAt",!1),ee.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(k(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(V),n(c));},o.ɵcmp=f({type:o,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(l(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),m(2,"button",2),_("click",function(){return i.openSaveComponent();}),m(3,"span"),z(4,3),u()()(),m(5,"sz-ui-table",4),_("update",function(){return i.get();}),u()),e&2&&(a("title",i.title),p(),a("dataSource",i.dataSource),p(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[U,ie,oe,T],encapsulation:2});let r=o;return r;})();var Ke=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=v({type:o}),o.ɵinj=h({providers:[c],imports:[F.forChild([{path:"",component:se}]),g,X,re,T,G]});let r=o;return r;})();export{Ke as TemplatesModule};/**i18n:142b184bcc765aafabe38132ddf8b8010494004de549a9ae50380341c89792e9*/