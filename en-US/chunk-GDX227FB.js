import{a as m,b as ae,d as se,f as le,i as _e,j as me}from"./chunk-GEHKM7AM.js";import"./chunk-DQHODJGC.js";import"./chunk-3BFJGKYD.js";import"./chunk-RVZ7IXG4.js";import{a as _}from"./chunk-RWCEK4YQ.js";import{e as te,f as ie,g as oe,i as re,j as C,k as ne}from"./chunk-4PO5ZDJC.js";import"./chunk-WXIP2PM4.js";import{a as O}from"./chunk-IWOJX2OI.js";import{h as A}from"./chunk-HXGKJPWL.js";import{a as X,b as j,d as k,e as w,g as M}from"./chunk-6EVQMKN4.js";import"./chunk-BW5OH3R7.js";import{c as H,n as J,o as K,q as W,s as Z,t as ee}from"./chunk-BI6HPZ47.js";import{c as Q}from"./chunk-HMU3GC5F.js";import"./chunk-FIREYTYE.js";import"./chunk-XEDVQBDU.js";import{c as g}from"./chunk-BVKWOAP7.js";import"./chunk-45BT2WXK.js";import{d,f as y,g as P,k as z,m as Y,p as B,q as $,t as V}from"./chunk-7T6A67P3.js";import"./chunk-4ZNRG2C5.js";import{c as F,e as G}from"./chunk-C2CTAUG5.js";import"./chunk-Q4PMW3F2.js";import{ia as U,ja as q,la as x}from"./chunk-IU3SBL3R.js";import"./chunk-JEF2LJ7N.js";import{Hb as l,Ib as c,Jb as p,Tb as I,Ub as T,bb as S,cb as a,dc as D,ea as b,jc as f,kc as v,oa as E,ob as h,pa as L,xb as s}from"./chunk-BSOORNNN.js";import"./chunk-73BG4Q2P.js";var pe=(()=>{let i=class i extends te{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({nameEn:[r?.nameEn,[d.required,d.minLength(1)]],nameAr:[r?.nameAr,[d.required,d.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]],hasResultOptions:[r?.hasResultOptions,[d.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(_),a($),a(X),a(j));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[f([]),h,v],decls:12,vars:6,consts:()=>{let t;t="English Name";let e;e="Arabic Name";let o;o="Abbreviation";let r;r="Description";let N;N="Purpose";let R;return R="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",N],["formControlName","disciplineId","label",R,3,"source"],["formControlName","hasResultOptions","labelPosition","after"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),l(9,"mat-checkbox",8),D(10,"Has Result Options"),c()()(),p(11,"sz-ui-dialog-actions",9)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(6),s("source",o.disciplines),S(3),s("actions",o.actions));},dependencies:[V,z,y,P,Y,B,M,w,K,J,C,ie,oe,ee,H,Z,W],encapsulation:2});let n=i;return n;})();var de=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=g.test_types,this.dataSource=new se("nameEn"),this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("nameEn",r=>`/mlab/test-types/${r.id}`),m.string("code").setStyleSmall().setResponsive(!0),m.string("discipline.name").setName(g.discipline).setResponsive(!0),m.string("abbreviation").setStyleSmall().setResponsive(!0),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),ae.menu([A.edit(r=>this.openSaveComponent(r)),A.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(pe,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(re,{data:ne.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(Q(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(k),a(_),a(F));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types"]],features:[f([_])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),T("changed",function(){return o.get();}),l(2,"button",3),T("click",function(){return o.openSaveComponent();}),l(3,"span"),I(4,0),c()()(),l(5,"sz-ui-table",4),T("update",function(){return o.get();}),c()),e&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[q,_e,le,O],encapsulation:2});let n=i;return n;})();var it=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=L({type:i}),i.ɵinj=b({providers:[_],imports:[G.forChild([{path:"",component:de}]),M,U,x,me,C,O]});let n=i;return n;})();export{it as TestTypesModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/