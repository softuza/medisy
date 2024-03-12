import{a as u}from"./chunk-UN6KEGQR.js";import{c as se}from"./chunk-52RHL6I7.js";import{a as p,b as oe,d as ie,f as re,k as ae,l as ne}from"./chunk-O7NMWRYR.js";import"./chunk-NE2FJIGN.js";import"./chunk-PBJGFLAZ.js";import{f as K,g as W,h as Y,j as Z,k as ee,l as te}from"./chunk-DHOS3PR4.js";import"./chunk-4P35ERGT.js";import"./chunk-UMJXJL2N.js";import{b as g}from"./chunk-OSERNDEW.js";import{j as h}from"./chunk-ZOSUD6WZ.js";import{a as V,b as B,d as j,e as U,g as E}from"./chunk-LR6GUTIR.js";import{c as H,q as x,s as Q,t as J}from"./chunk-RIMZTZOB.js";import{c as q}from"./chunk-RNDCCMR3.js";import"./chunk-Y5OMJY5V.js";import"./chunk-ALHR4HEP.js";import{c as N}from"./chunk-TG74CNA3.js";import{i as X}from"./chunk-E4SPABR5.js";import{d as T,f as A,g as L,k as y,m as D,p as P,q as b,t as G}from"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{e as F}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as k,c as w}from"./chunk-42MYF47R.js";import{ia as $}from"./chunk-5MDONEI4.js";import"./chunk-6TGWOZSV.js";import{Hb as l,Ib as S,Jb as d,O as c,Tb as R,Vb as f,ha as O,ib as m,jb as s,jc as M,mc as I,qa as _,qb as z,ra as v,xb as n}from"./chunk-OHUDUA2T.js";var C=function(r){return r.Laboratory="Laboratory",r;}(C||{});var le=(()=>{let o=class o extends K{constructor(t,e,i,a){super(i),this.srptService=t,this.fb=e,this.dialog=i,this.data=a,this.templateTypes=Object.keys(C).map(de=>C[de]),this.form=e.group({name:[a?.name,[T.required]],description:[a?.description,[T.maxLength(4096)]],templateType:[a?.templateType,[T.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(u),s(b),s(V),s(B));},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),z,I],decls:7,vars:5,consts:()=>{let t;t="Name";let e;e="Description";let i;return i="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","templateType","label",i,3,"source","localizedValue"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(n("header",i.header),m(2),n("formGroup",i.form),m(3),n("source",i.templateTypes)("localizedValue",!0),m(),n("actions",i.actions));},dependencies:[G,y,A,L,D,P,E,U,X,se,ee,W,Y,J,H,Q,x],encapsulation:2});let r=o;return r;})();var pe=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.srptService=e,this.title=N.templates,this.dataSource=new ie(),this.dataSource.columnDefs.push(p.uuid("id"),p.string("name").setValueClassFontBold().setStacked(p.string("description").setValueClassFontSmall()),p.enum("templateType").setName(N.type),p.date("createdAt",!1),p.date("updatedAt",!1),oe.menu([h.edit(i=>this.openSaveComponent(i)),h.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(Z,{data:te.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator),c(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(s(j),s(u));},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(d(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),l(2,"button",2),f("click",function(){return i.openSaveComponent();}),l(3,"span"),R(4,3),S()()(),l(5,"sz-ui-table",4),f("update",function(){return i.get();}),S()),e&2&&(n("title",i.title),m(),n("dataSource",i.dataSource),m(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,ae,re,g],encapsulation:2});let r=o;return r;})();var et=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=v({type:o}),o.ɵinj=O({providers:[u],imports:[F.forChild([{path:"",component:pe}]),E,w,ne,g,$]});let r=o;return r;})();export{et as TemplatesModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/