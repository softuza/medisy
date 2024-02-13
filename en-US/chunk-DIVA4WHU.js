import{b as fe}from"./chunk-JX3K33KH.js";import{a as Me,c as ye,e as Ce,g as Ee,q as he,r as ge,s as _}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{a as y}from"./chunk-FM3SPM6Z.js";import{c as I,h as de,i as ce,j as _e,l as Se,m as ue,n as Te}from"./chunk-2HDHNYMU.js";import"./chunk-L6PAJN6E.js";import{b as le}from"./chunk-7V4QNR7X.js";import{a as N,g as A}from"./chunk-BJEOQME3.js";import{a as re,b as ae,d as se,e as me,g as pe}from"./chunk-SG6HY6JP.js";import{a as K,b as Q,g as W,o as ie,w as oe,x as ne}from"./chunk-XXBVSRTN.js";import{J as k,N as w,Q as Z,R as ee,d as Y,e as G,f as O,g as j,k as x,l as B,m as U,p as H,q as X,t as v,xa as te}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ea as V,Ga as J,ya as q}from"./chunk-QRXQW4KS.js";import{Bb as z,Cb as L,Db as $,Eb as a,Fb as s,Gb as d,M as S,Qb as T,Sb as f,Ub as F,a as D,b as R,dc as g,ec as b,fb as r,gb as p,gc as P,jc as M,na as u,nb as h,qb as C,ub as l,zb as c}from"./chunk-CIWRZFHR.js";function Fe(n,o){if(n&1&&(a(0,"mat-label"),g(1),s()),n&2){let E=F();r(),b(E.label);}}function be(n,o){n&1&&(a(0,"mat-option"),g(1,"-"),s());}function Ae(n,o){if(n&1&&(a(0,"mat-option",4),g(1),s()),n&2){let E=o.$implicit,e=F();l("value",e.getOptionValue(E)),r(),b(e.getOptionContent(E));}}function De(n,o){n&1&&(a(0,"mat-error"),T(1,5),s());}function Re(n,o){n&1&&(a(0,"mat-error"),T(1,6),s());}function ze(n,o){n&1&&(a(0,"mat-error"),T(1,7),s());}function Le(n,o){n&1&&d(0,"mat-progress-bar",3);}var ve=(()=>{let o=class o extends ie{constructor(e,i){super(e),this.ngControl=e,this.mlabService=i,this.label=N.specimenType;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.specimenTypes.get(R(D({},te.unpaged()),{orderBy:"name"})).pipe(I(this.indicator),S(1)).subscribe(e=>{this.totalPages=e.totalPages,this.options=e.items;});}};o.ɵfac=function(i){return new(i||o)(p(G,10),p(y));},o.ɵcmp=u({type:o,selectors:[["medisy-form-field-specimen-type"]],standalone:!0,features:[P([]),h,M],decls:11,vars:10,consts:()=>{let e;e="This field is required";let i;i="This field does not the minimum length";let t;return t="This field exceeds the maximum length",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],e,i,t];},template:function(i,t){i&1&&(a(0,"div",0)(1,"mat-form-field",1),C(2,Fe,2,1,"mat-label"),a(3,"mat-select",2),f("szScrolled",function(){return t.scroll();}),C(4,be,2,0,"mat-option"),L(5,Ae,2,2,"mat-option",4,z),s(),C(7,De,2,0,"mat-error")(8,Re,2,0,"mat-error")(9,ze,2,0,"mat-error"),s(),C(10,Le,1,0,"mat-progress-bar",3),s()),i&2&&(r(2),c(2,t.label?2:-1),r(),l("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),r(),c(4,t.emptyOption?4:-1),r(),$(t.options),r(2),c(7,t.control.hasError("required")?7:-1),r(),c(8,t.control.hasError("min")?8:-1),r(),c(9,t.control.hasError("max")?9:-1),r(),c(10,t.indicator()?10:-1));},dependencies:[v,O,B,ne,W,K,Q,oe,q,ee,Z,fe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let n=o;return n;})();var Ne=(()=>{let o=class o extends de{constructor(e,i,t,m){super(t),this.mlabService=e,this.fb=i,this.dialog=t,this.data=m,this.form=i.group({specimenTypeId:[m.testTypeSpecimenType?.specimenTypeId,[Y.required]]});}submit(){this.IsValid()&&(this.data.testTypeSpecimenType?this.save(this.mlabService.testTypes.specimenTypes.update(this.data.testTypeId,this.data.testTypeSpecimenType?.id,this.form.value)):this.save(this.mlabService.testTypes.specimenTypes.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(i){return new(i||o)(p(y),p(X),p(re),p(ae));},o.ɵcmp=u({type:o,selectors:[["medisy-test-type-specimen-types-save"]],standalone:!0,features:[P([]),h,M],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId"],[3,"actions"]],template:function(i,t){i&1&&(d(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),d(3,"medisy-form-field-specimen-type",2),s()(),d(4,"sz-ui-dialog-actions",3)),i&2&&(l("header",t.header),r(2),l("formGroup",t.form),r(2),l("actions",t.actions));},dependencies:[v,x,O,j,U,H,pe,me,Ee,ue,ce,_e,ve],encapsulation:2});let n=o;return n;})();var At=(()=>{let o=class o{constructor(e,i,t){this.dialog=e,this.mlabService=i,this.route=t,this.title=N.specimenTypes,this.dataSource=new ye(),this.testType=this.route.snapshot.data.testType,this.dataSource.fields.push(_.uuid("id"),_.uuid("specimenTypeId"),_.uuid("testTypeId"),_.string("specimenType.name"),_.date("createdAt",!1),_.date("updatedAt",!1),Me.menu([A.edit(m=>this.openSaveComponent(m)),A.delete(m=>this.openTestTypeSpecimenTypeDeleteComponent(m))])),this.get();}openSaveComponent(e){this.dialog.open(Ne,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().pipe(S(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(Se,{data:Te.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(i=>{this.dataSource.delete(i);});}updateItem(e){this.mlabService.testTypes.specimenTypes.update(e.testTypeId,e.id,e).subscribe(i=>{this.dataSource.update(i);});}get(){this.mlabService.testTypes.specimenTypes.get(this.testType.id,this.dataSource.buildRequest()).pipe(I(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)(p(se),p(y),p(k));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-test-type-specimen-types"]],standalone:!0,features:[M],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,t){i&1&&(d(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),f("changed",function(){return t.get();}),a(2,"button",2),f("click",function(){return t.openSaveComponent();}),a(3,"span"),T(4,3),s()()(),a(5,"sz-ui-table",4),f("update",function(){return t.get();}),s()),i&2&&(l("title",t.title)("subtitle",t.testType.name),r(),l("dataSource",t.dataSource),r(4),l("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[w,J,V,ge,he,Ce,le],encapsulation:2});let n=o;return n;})();export{At as TestTypeSpecimenTypesComponent};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/