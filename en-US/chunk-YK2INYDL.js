import{a as oe,c as ie,e as re,q as ne,r as ae,s}from"./chunk-QPBSIFHN.js";import"./chunk-OLH6GLAT.js";import{a as J}from"./chunk-63BDPR5Z.js";import{a as m}from"./chunk-3HOMBLD6.js";import{a as K,h as Q,i as W,j as Z,l as ee,m as O,n as te}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as P}from"./chunk-AZIM6N3H.js";import{g as C}from"./chunk-F2NCOJMX.js";import{a as w,b as q,d as H,e as x,g as A}from"./chunk-GX7FEJ3W.js";import{A as k,v as X,z as j}from"./chunk-HN3QCICR.js";import{L as F,N as V,d as T,f as v,g as y,k as D,m as I,p as z,q as Y,t as $}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as B,Ga as G,Ja as U}from"./chunk-ILHRA673.js";import{Eb as l,Fb as d,Gb as p,M as c,Qb as L,Sb as E,ea as N,fb as S,gb as a,gc as M,jc as b,na as f,nb as h,oa as R,ub as _}from"./chunk-ORGLCS6N.js";var _e=(()=>{let o=class o extends Q{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({name:[r?.name,[T.required,T.minLength(1)]],latinName:[r?.latinName,[T.required,T.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(m),a(Y),a(w),a(q));},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[M([]),h,b],decls:9,vars:3,consts:()=>{let t;t="Name";let e;e="Latin";let i;i="Abbreviation";let r;r="Description";let g;return g="Purpose",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","latinName","label",e],["formControlName","abbreviation","label",i],["formControlName","description","label",r],["formControlName","purpose","label",g],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(_("header",i.header),S(2),_("formGroup",i.form),S(6),_("actions",i.actions));},dependencies:[$,D,v,y,I,z,A,x,O,W,Z,k,X,j],encapsulation:2});let n=o;return n;})();var me=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.router=i,this.title=J.testTypes,this.dataSource=new ie(),this.dataSource.fields.push(s.uuid("id"),s.hyperlink("name",r=>this.router.navigate([`/mlab/test-types/${r.id}`])),s.string("code"),s.string("latinName"),s.string("description"),s.string("abbreviation"),s.date("createdAt",!1),s.date("updatedAt",!1),oe.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.buildRequest()).pipe(K(this.dataSource.indicator),c(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(a(H),a(m),a(F));},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-test-types"]],features:[M([m])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(p(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),E("changed",function(){return i.get();}),l(2,"button",2),E("click",function(){return i.openSaveComponent();}),l(3,"span"),L(4,3),d()()(),l(5,"sz-ui-table",4),E("update",function(){return i.get();}),d()),e&2&&(_("title",i.title),S(),_("dataSource",i.dataSource),S(4),_("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[B,ne,re,P],encapsulation:2});let n=o;return n;})();var le=[{path:"",component:me}];var it=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=R({type:o}),o.ɵinj=N({providers:[m],imports:[V.forChild(le),A,U,G,ae,O,P]});let n=o;return n;})();export{it as TestTypesModule};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/