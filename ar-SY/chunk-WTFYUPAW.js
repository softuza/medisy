import{a as p}from"./chunk-UFRSHZ2Z.js";import{c as oe}from"./chunk-PTZVMM4E.js";import{a as s,b as Y,d as Z,k as ee,l as te}from"./chunk-5VZ5D5YF.js";import"./chunk-XUBC2NFI.js";import"./chunk-JBDAZZD3.js";import{f as k,g as q,h as Q,j as J,k as K,l as W}from"./chunk-ZRJSRLOM.js";import"./chunk-UXLKEBN7.js";import"./chunk-UABDP5X2.js";import{b as _}from"./chunk-HXBNSFNL.js";import{j as C}from"./chunk-NGPQWUJL.js";import{a as y,b as G,d as V,e as $,g}from"./chunk-YRNLLR6T.js";import{l as x,q as X,r as H}from"./chunk-MWZUS7D7.js";import{c as U}from"./chunk-HOUCADFY.js";import"./chunk-P2QQ56TC.js";import"./chunk-GKM5F2GI.js";import{c as w}from"./chunk-4UQFGTYA.js";import{i as j}from"./chunk-JJRCRC6G.js";import{d as h,f as D,g as I,k as R,m as O,p as A,q as F,t as b}from"./chunk-3KPG26UX.js";import"./chunk-S3GYVJTQ.js";import{e as L}from"./chunk-33HQZPUZ.js";import"./chunk-3BHDG2TW.js";import{c as B}from"./chunk-NQMSNWCW.js";import{ia as P}from"./chunk-WLYMVNMU.js";import"./chunk-J2LOM5YY.js";import{Hb as f,Ib as S,Jb as m,O as c,Vb as z,ha as E,ib as l,jb as a,jc as M,mc as N,qa as u,qb as v,ra as T,xb as n}from"./chunk-CQRLKO4M.js";var re=(()=>{let t=class t extends k{constructor(o,e,i,d){super(i),this.srptService=o,this.fb=e,this.dialog=i,this.data=d,this.form=e.group({name:[d?.name,[h.required]],description:[d?.description,[h.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(p),a(F),a(y),a(G));},t.ɵcmp=u({type:t,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),v,N],decls:6,vars:3,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let e;return e="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],[3,"actions"]];},template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),m(5,"sz-ui-dialog-actions",4)),e&2&&(n("header",i.header),l(2),n("formGroup",i.form),l(3),n("actions",i.actions));},dependencies:[b,R,D,I,O,A,g,$,j,oe,K,q,Q,H,x,X],encapsulation:2});let r=t;return r;})();var ae=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.srptService=e,this.title=w.templates,this.dataSource=new Z(),this.dataSource.columnDefs.push(s.uuid("id"),s.string("name"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),Y.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(o){this.dialog.open(re,{data:o}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(o){this.dialog.open(J,{data:W.delete(this.srptService.templates.delete(o.id),o)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(U(this.dataSource.indicator),c(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(V),a(p));},t.ɵcmp=u({type:t,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:2,vars:3,consts:[[3,"title"],[3,"stateEnabled","dataSource","update"]],template:function(e,i){e&1&&(m(0,"sz-ui-header-info",0),f(1,"sz-ui-table",1),z("update",function(){return i.get();}),S()),e&2&&(n("title",i.title),l(),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ee,_],encapsulation:2});let r=t;return r;})();var He=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=T({type:t}),t.ɵinj=E({providers:[p],imports:[L.forChild([{path:"",component:ae}]),g,B,te,_,P]});let r=t;return r;})();export{He as TemplatesModule};/**i18n:142b184bcc765aafabe38132ddf8b8010494004de549a9ae50380341c89792e9*/