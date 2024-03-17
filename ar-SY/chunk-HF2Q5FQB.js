import{a as u}from"./chunk-P2EJJG5V.js";import{c as se}from"./chunk-5PMLOUVG.js";import{a as l,b as ie,d as re,f as ae,k as ne,l as me}from"./chunk-HIIVZ5D6.js";import"./chunk-BNCWQA3T.js";import"./chunk-H4H3VVZS.js";import{f as W,g as Y,h as Z,j as ee,k as te,l as oe}from"./chunk-MPNDZ4AQ.js";import"./chunk-OUR5FABV.js";import"./chunk-YYI2KTIZ.js";import{b as g}from"./chunk-7VUQAUCM.js";import{j as N}from"./chunk-ULZQTCSN.js";import{a as B,b as j,d as U,e as X,g as E}from"./chunk-G7YVL4FE.js";import{c as q,q as Q,s as J,t as K}from"./chunk-FAH2ZQJC.js";import{c as x}from"./chunk-UGYRBBDO.js";import"./chunk-4PE74OIY.js";import"./chunk-7F6UAGLF.js";import{c as h}from"./chunk-UURSITNO.js";import{i as k}from"./chunk-JY7P4M5S.js";import{d as T,f as A,g as L,k as y,m as D,p as P,q as b,t as G}from"./chunk-ZM4DJUZ7.js";import"./chunk-VGHV2NBP.js";import{c as F,e as $}from"./chunk-4IVSKDIO.js";import"./chunk-FMJXIAKP.js";import{a as w,c as H}from"./chunk-74ZKMUCW.js";import{ia as V}from"./chunk-7OYUJW7P.js";import"./chunk-NPHC65O7.js";import{Ib as p,Jb as c,Kb as d,O as S,Ub as R,Wb as _,ha as v,jb as s,kb as n,kc as M,nc as I,qa as f,ra as O,rb as z,yb as m}from"./chunk-OUC2FABB.js";var C=function(a){return a.Laboratory="Laboratory",a;}(C||{});var le=(()=>{let o=class o extends W{constructor(t,e,i,r){super(i),this.srptService=t,this.fb=e,this.dialog=i,this.data=r,this.templateTypes=Object.keys(C).map(ue=>C[ue]),this.form=e.group({name:[r?.name,[T.required]],description:[r?.description,[T.maxLength(4096)]],templateType:[r?.templateType,[T.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(u),n(b),n(B),n(j));},o.ɵcmp=f({type:o,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),z,I],decls:7,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0627\u0644\u0646\u0645\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","templateType","label",i,3,"source","localizedValue"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),c()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(m("header",i.header),s(2),m("formGroup",i.form),s(3),m("source",i.templateTypes)("localizedValue",!0),s(),m("actions",i.actions));},dependencies:[G,y,A,L,D,P,E,X,k,se,te,Y,Z,K,q,J,Q],encapsulation:2});let a=o;return a;})();var de=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.srptService=e,this.router=i,this.title=h.templates,this.dataSource=new re(),this.dataSource.columnDefs.push(l.uuid("id"),l.hyperlink("name",r=>this.router.navigate([`/srpt/templates/${r.id}`])).setStacked(l.string("description").setValueClassFontSmall()),l.enum("templateType").setName(h.type),l.date("createdAt",!1),l.date("updatedAt",!1),ie.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(ee,{data:oe.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().pipe(S(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(x(this.dataSource.indicator),S(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(U),n(u),n(F));},o.ɵcmp=f({type:o,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(d(0,"sz-ui-header-info",0),p(1,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),p(2,"button",2),_("click",function(){return i.openSaveComponent();}),p(3,"span"),R(4,3),c()()(),p(5,"sz-ui-table",4),_("update",function(){return i.get();}),c()),e&2&&(m("title",i.title),s(),m("dataSource",i.dataSource),s(4),m("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[w,ne,ae,g],encapsulation:2});let a=o;return a;})();var ot=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=O({type:o}),o.ɵinj=v({providers:[u],imports:[$.forChild([{path:"",component:de}]),E,H,me,g,V]});let a=o;return a;})();export{ot as TemplatesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/