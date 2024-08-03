import{a as S,b as x,d as ee,e as te,g as oe,j as ie,k as re}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{a as m}from"./chunk-6VGSXMTA.js";import"./chunk-4NTC2VLV.js";import{e as Q,f as J,g as K,i as W,j as O,k as Z}from"./chunk-76IND4GV.js";import{a as g}from"./chunk-ZPKIPVTE.js";import{h as A}from"./chunk-TIEHGEOE.js";import{a as V,b as G,d as U,e as X,g as T}from"./chunk-QCMAXDKX.js";import{e as k,w as H,x as N}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as q}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import{d as E,f as R,g as v,l as y,n as z,q as Y,r as B,t as $,u as C}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{e as F}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ja as j,la as w}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as l,Kb as d,Lb as p,Vb as P,Wb as f,bb as _,cb as a,ea as b,na as c,nc as M,oa as L,oc as D,qb as h,zb as s}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var ae=(()=>{let i=class i extends Q{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.form=e.group({nameEn:[r?.nameEn,[E.required,E.minLength(1)]],nameAr:[r?.nameAr,[E.required,E.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(m),a(B),a(V),a(G));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[M([]),h,D],decls:9,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let o;o="\u0623\u062E\u062A\u0635\u0627\u0631";let r;r="\u0627\u0644\u0648\u0635\u0641";let I;return I="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",I],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),s("formGroup",o.form),_(6),s("actions",o.actions));},dependencies:[C,y,R,v,z,Y,T,X,O,J,K,N,k,H],encapsulation:2});let n=i;return n;})();var se=(()=>{let i=class i{constructor(t,e){this.dialog=t,this.mlabService=e,this.title=q.specimen_types,this.dataSource=new ee(),this.dataSource.columnDefs.push(S.uuid("id"),S.string("nameEn"),S.string("nameAr"),S.string("abbreviation"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),x.menu([A.edit(o=>this.openSaveComponent(o)),A.delete(o=>this.openSpecimenTypeDeleteComponent(o))])),this.get();}openSaveComponent(t){this.dialog.open(ae,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openSpecimenTypeDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.mlabService.specimenTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(U),a(m));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[M([m])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),l(2,"button",3),f("click",function(){return o.openSaveComponent();}),l(3,"span"),P(4,0),d()()(),l(5,"sz-ui-table",4),f("update",function(){return o.get();}),d()),e&2&&(s("title",o.title),_(),s("dataSource",o.dataSource),_(4),s("dataSource",o.dataSource));},dependencies:[j,ie,oe,g],encapsulation:2});let n=i;return n;})();var Qe=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=L({type:i}),i.ɵinj=b({providers:[m],imports:[$,C,F.forChild([{path:"",component:se}]),T,w,re,N,O,g]});let n=i;return n;})();export{Qe as SpecimenTypesModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/