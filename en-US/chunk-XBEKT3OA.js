import{a,b as re,d as ne,f as ae,k as se,l as le}from"./chunk-Z4ESK7G7.js";import"./chunk-ETFQ3B2W.js";import"./chunk-2RZN6UXW.js";import{a as _}from"./chunk-6OX5UKSI.js";import{e as Z,f as ee,g as te,i as ie,j as g,k as oe}from"./chunk-FXT3AS6A.js";import"./chunk-5NCCBRRS.js";import"./chunk-FMQFZLQI.js";import{b as O}from"./chunk-A2WVAG3X.js";import{j as A}from"./chunk-NHZHW3G6.js";import{a as X,b as j,d as k,e as w,g as C}from"./chunk-LEHA6VA4.js";import{l as J,p as K,q as Q,r as W}from"./chunk-G5AGS2UW.js";import{c as x}from"./chunk-HNFKXZJS.js";import"./chunk-RP3MHAIP.js";import"./chunk-UTECTUGK.js";import{c as N}from"./chunk-3S3P6JML.js";import"./chunk-CJB7PFBQ.js";import{d as u,f as y,g as z,k as P,m as Y,p as $,q as B,t as V}from"./chunk-JUV6646Q.js";import"./chunk-VUDMPJS3.js";import{c as F,e as G}from"./chunk-WGP57T36.js";import"./chunk-M4RGWOV5.js";import{a as q,c as H}from"./chunk-6V4W7LPQ.js";import{ia as U}from"./chunk-N73FV7OW.js";import"./chunk-CV2WHQQT.js";import{Hb as S,Ib as c,Jb as d,O as T,Tb as b,Vb as f,ha as R,ib as m,jb as s,jc as M,mc as v,qa as E,qb as D,ra as h,xb as l}from"./chunk-XKRBGLCU.js";var me=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[u.required,u.minLength(1)]],localizedName:[r?.localizedName,[u.required,u.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(_),s(B),s(X),s(j));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[M([]),D,v],decls:10,vars:4,consts:()=>{let t;t="Name";let e;e="Latin";let o;o="Abbreviation";let r;r="Description";let L;L="Purpose";let I;return I="Discipline",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","localizedName","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",L],["formControlName","disciplineId","label",I,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),c()(),d(9,"sz-ui-dialog-actions",8)),e&2&&(l("header",o.header),m(2),l("formGroup",o.form),m(6),l("source",o.disciplines),m(),l("actions",o.actions));},dependencies:[V,P,y,z,Y,$,C,w,g,ee,te,W,J,Q,K],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=N.testTypes,this.dataSource=new ne(),this.dataSource.columns.push(a.uuid("id"),a.hyperlink("name",r=>this.router.navigate([`/mlab/test-types/${r.id}`])),a.string("code"),a.string("localizedName"),a.uuid("disciplineId"),a.string("discipline.name").setName(N.discipline),a.string("description"),a.string("abbreviation"),a.date("createdAt",!1),a.date("updatedAt",!1),re.menu([A.edit(r=>this.openSaveComponent(r)),A.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().pipe(T(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ie,{data:oe.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().pipe(T(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.buildRequest()).pipe(x(this.dataSource.indicator),T(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(k),s(_),s(F));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types"]],features:[M([_])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(d(0,"sz-ui-header-info",0),S(1,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),S(2,"button",2),f("click",function(){return o.openSaveComponent();}),S(3,"span"),b(4,3),c()()(),S(5,"sz-ui-table",4),f("update",function(){return o.get();}),c()),e&2&&(l("title",o.title),m(),l("dataSource",o.dataSource),m(4),l("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[q,se,ae,O],encapsulation:2});let n=i;return n;})();var de=[{path:"",component:Se}];var rt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[_],imports:[G.forChild(de),C,U,H,le,g,O]});let n=i;return n;})();export{rt as TestTypesModule};/**i18n:ce9ae1b8b067a31d7d6a4605b83492db03c265ea8c4fa49ce44e4fe9b82d798e*/