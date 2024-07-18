import{a as S,b as x,d as ee,e as te,g as ie,j as oe,k as re}from"./chunk-RT2DOIX4.js";import"./chunk-FE7PUGPV.js";import"./chunk-WFQLTXIP.js";import{a as m}from"./chunk-D36Z2HMB.js";import"./chunk-OK2QS2H3.js";import{e as Q,f as J,g as K,i as W,j as O,k as Z}from"./chunk-CR4T7ICE.js";import"./chunk-JLE7ID76.js";import{a as g}from"./chunk-HCDVJ2I2.js";import{h as A}from"./chunk-DINSQL77.js";import{a as V,b as G,d as U,e as X,g as T}from"./chunk-XG5XEC3X.js";import"./chunk-VZOUZHWP.js";import{e as k,y as H,z as N}from"./chunk-NP4UDNU2.js";import"./chunk-KGY6UELD.js";import"./chunk-QO44V4EG.js";import{c as q}from"./chunk-SXV3ZUGK.js";import"./chunk-DPTX3R7K.js";import{d as E,f as R,g as v,l as y,n as z,q as Y,r as B,t as $,u as C}from"./chunk-5RALKHWD.js";import"./chunk-CDJ3WT4B.js";import{e as F}from"./chunk-6KMSPDBU.js";import"./chunk-DC3E3YM6.js";import{ja as j,la as w}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Jb as l,Kb as d,Lb as p,Vb as P,Wb as f,bb as _,cb as a,ea as b,na as c,nc as M,oa as L,oc as D,qb as h,zb as s}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";var ae=(()=>{let o=class o extends Q{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({nameEn:[r?.nameEn,[E.required,E.minLength(1)]],nameAr:[r?.nameAr,[E.required,E.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(m),a(B),a(V),a(G));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[M([]),h,D],decls:9,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let i;i="\u0623\u062E\u062A\u0635\u0627\u0631";let r;r="\u0627\u0644\u0648\u0635\u0641";let I;return I="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",i],["formControlName","description","label",r],["formControlName","purpose","label",I],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),_(2),s("formGroup",i.form),_(6),s("actions",i.actions));},dependencies:[C,y,R,v,z,Y,T,X,O,J,K,N,k,H],encapsulation:2});let n=o;return n;})();var se=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.mlabService=e,this.title=q.specimen_types,this.dataSource=new ee(),this.dataSource.columnDefs.push(S.uuid("id"),S.string("nameEn"),S.string("nameAr"),S.string("abbreviation"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),x.menu([A.edit(i=>this.openSaveComponent(i)),A.delete(i=>this.openSpecimenTypeDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(ae,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openSpecimenTypeDeleteComponent(t){this.dialog.open(W,{data:Z.delete(this.mlabService.specimenTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(a(U),a(m));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[M([m])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,i){e&1&&(p(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),f("changed",function(){return i.get();}),l(2,"button",3),f("click",function(){return i.openSaveComponent();}),l(3,"span"),P(4,0),d()()(),l(5,"sz-ui-table",4),f("update",function(){return i.get();}),d()),e&2&&(s("title",i.title),_(),s("dataSource",i.dataSource),_(4),s("dataSource",i.dataSource));},dependencies:[j,oe,ie,g],encapsulation:2});let n=o;return n;})();var Qe=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=L({type:o}),o.ɵinj=b({providers:[m],imports:[$,C,F.forChild([{path:"",component:se}]),T,w,re,N,O,g]});let n=o;return n;})();export{Qe as SpecimenTypesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/