import{b as Ce}from"./chunk-JX3K33KH.js";import{a as ye,c as Pe,e as be,f as Ae,g as L,q as ge,r as he,s as m}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{a as c}from"./chunk-FM3SPM6Z.js";import{c as N,h as Te,i as ue,j as Ee,l as fe,m as Oe,n as Me}from"./chunk-2HDHNYMU.js";import"./chunk-L6PAJN6E.js";import{b as ce}from"./chunk-7V4QNR7X.js";import{a as y,g as F}from"./chunk-BJEOQME3.js";import{a as de,b as _e,d as me,e as pe,g as Se}from"./chunk-SG6HY6JP.js";import{a as ee,b as te,g as oe,o as ae,v as ne,w as le,x as se}from"./chunk-XXBVSRTN.js";import{J,N as K,Q as ie,R as re,d as C,e as U,f as g,g as X,k,l as j,m as q,p as H,q as w,t as h}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ea as W,Ga as Z,ya as Q}from"./chunk-QRXQW4KS.js";import{Bb as Y,Cb as $,Db as B,Eb as l,Fb as s,Gb as S,M as T,Qb as p,Sb as f,Ub as v,a as D,b as z,dc as A,ec as I,fb as n,gb as d,gc as x,jc as O,kc as G,lc as V,na as E,nb as b,qb as M,ub as _,zb as u}from"./chunk-CIWRZFHR.js";function De(i,r){if(i&1&&(l(0,"mat-label"),A(1),s()),i&2){let P=v();n(),I(P.label);}}function ze(i,r){i&1&&(l(0,"mat-option"),A(1,"-"),s());}function Ye(i,r){if(i&1&&(l(0,"mat-option",4),A(1),s()),i&2){let P=r.$implicit,e=v();_("value",e.getOptionValue(P)),n(),I(e.getOptionContent(P));}}function $e(i,r){i&1&&(l(0,"mat-error"),p(1,5),s());}function Be(i,r){i&1&&(l(0,"mat-error"),p(1,6),s());}function xe(i,r){i&1&&(l(0,"mat-error"),p(1,7),s());}function Ge(i,r){i&1&&S(0,"mat-progress-bar",3);}var Re=(()=>{let r=class r extends ae{constructor(e,o){super(e),this.ngControl=e,this.mlabService=o,this.label=y.testType,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testTypes.get(z(D({},this.pagination),{orderBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds})).pipe(N(this.indicator),T(1)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};r.ɵfac=function(o){return new(o||r)(d(U,10),d(c));},r.ɵcmp=E({type:r,selectors:[["medisy-form-field-test-type-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[x([c]),b,O],decls:11,vars:10,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],e,o,t];},template:function(o,t){o&1&&(l(0,"div",0)(1,"mat-form-field",1),M(2,De,2,1,"mat-label"),l(3,"mat-select",2),f("szScrolled",function(){return t.scroll();}),M(4,ze,2,0,"mat-option"),$(5,Ye,2,2,"mat-option",4,Y),s(),M(7,$e,2,0,"mat-error")(8,Be,2,0,"mat-error")(9,xe,2,0,"mat-error"),s(),M(10,Ge,1,0,"mat-progress-bar",3),s()),o&2&&(n(2),u(2,t.label?2:-1),n(),_("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),u(4,t.emptyOption?4:-1),n(),B(t.options),n(2),u(7,t.control.hasError("required")?7:-1),n(),u(8,t.control.hasError("min")?8:-1),n(),u(9,t.control.hasError("max")?9:-1),n(),u(10,t.indicator()?10:-1));},dependencies:[h,g,j,se,oe,ee,te,le,Q,re,ie,Ce],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=r;return i;})();var Ue=()=>[],Xe=i=>[i],ve=(()=>{let r=class r extends Te{constructor(e,o,t,a){super(t),this.mlabService=e,this.fb=o,this.dialog=t,this.data=a,this.form=o.group({enabled:[a.laboratoryTestType?.enabled??!0,[C.required]],price:[a.laboratoryTestType?.price??0,[C.required]],isFavorite:[a.laboratoryTestType?.isFavorite??!1,[C.required]],testTypeId:[a.laboratoryTestType?.testTypeId,[C.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(o){return new(o||r)(d(c),d(w),d(de),d(_e));},r.ɵcmp=E({type:r,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[b,O],decls:10,vars:7,consts:()=>{let e;e="\u0627\u0644\u0633\u0639\u0631";let o;o="\u0645\u0641\u0636\u0644\u0629";let t;return t="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId",3,"excludeLaboratoryIds"],["formControlName","price","label",e],["formControlName","isFavorite"],o,["formControlName","enabled"],t,[3,"actions"]];},template:function(o,t){o&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"medisy-form-field-test-type-select",2)(4,"sz-ui-form-field-input",3),l(5,"mat-checkbox",4),p(6,5),s(),l(7,"mat-checkbox",6),p(8,7),s()()(),S(9,"sz-ui-dialog-actions",8)),o&2&&(_("header",t.header),n(2),_("formGroup",t.form),n(),_("excludeLaboratoryIds",t.data.laboratoryTestType?G(4,Ue):V(5,Xe,t.data.laboratoryId)),n(6),_("actions",t.actions));},dependencies:[h,k,g,X,q,H,Oe,ue,Ee,Se,pe,L,Ae,Re,ne],encapsulation:2});let i=r;return i;})();var xt=(()=>{let r=class r{constructor(e,o,t){this.dialog=e,this.mlabService=o,this.route=t,this.title=y.testTypes,this.dataSource=new Pe(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(m.uuid("id"),m.uuid("laboratoryId"),m.uuid("testTypeId"),m.string("testType.name"),m.number("price"),m.date("createdAt",!1),m.date("updatedAt",!1),m.boolean("isFavorite",(a,R)=>{a.isFavorite=R,this.updateItem(a);}).setDisplayName(y.favorite),m.boolean("enabled",(a,R)=>{a.enabled=R,this.mlabService.laboratories.testTypes.update(a.laboratoryId,a.id,a).pipe(T(1)).subscribe(Ie=>{a=Ie;});}),ye.menu([F.edit(a=>this.openSaveComponent(a)),F.delete(a=>this.openLaboratoryTestTypeDeleteComponent(a))])),this.get();}openSaveComponent(e){this.dialog.open(ve,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().pipe(T(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(fe,{data:Me.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(T(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(N(this.dataSource.indicator)).pipe(T(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(o){return new(o||r)(d(me),d(c),d(J));},r.ɵcmp=E({type:r,selectors:[["medisy-laboratory-test-types"]],standalone:!0,features:[O],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(S(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),f("changed",function(){return t.get();}),l(2,"button",2),f("click",function(){return t.openSaveComponent();}),l(3,"span"),p(4,3),s()()(),l(5,"sz-ui-table",4),f("update",function(){return t.get();}),s()),o&2&&(_("title",t.title)("subtitle",t.laboratory.name),n(),_("dataSource",t.dataSource),n(4),_("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[K,ce,he,ge,be,L,Z,W],encapsulation:2});let i=r;return i;})();export{xt as LaboratoryTestTypesComponent};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/