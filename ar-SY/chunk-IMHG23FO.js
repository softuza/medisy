import{b as Ne}from"./chunk-FXTW2TJ3.js";import{a as F}from"./chunk-OTTXER4X.js";import{b as y,c as ye,e as be,i as Pe,j as he,k as I,u as ge,v as Ae}from"./chunk-GHEGCXEZ.js";import{a as c}from"./chunk-BUSYHZDZ.js";import{a as S}from"./chunk-VU3TSLPI.js";import{c as N,h as ue,i as Ee,j as Me,l as fe,m as Oe,n as Ce}from"./chunk-DJTHGJMD.js";import{b as Te}from"./chunk-KIWKP6WG.js";import"./chunk-EVZ4I5QA.js";import{a as de,b as me,d as pe,e as Se,g as ce}from"./chunk-VQ3CVIXE.js";import{a as te,b as oe,g as ie,o as ne,v as le,w as se,x as _e}from"./chunk-75XLR4TY.js";import{A as ae,d as C,e as X,f as g,g as k,k as j,l as q,m as w,p as H,q as J,t as A,u as K,y as Q,z as re}from"./chunk-VZUJMTKN.js";import{i as D}from"./chunk-FVDEVSJ2.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ea as Z,Ga as ee,ya as W}from"./chunk-TT7ZQ2V6.js";import{Bb as $,Cb as B,Db as x,Eb as l,Fb as s,Gb as p,M as T,Qb as m,Sb as M,Ub as v,a as Y,b as z,dc as h,ec as R,fb as n,gb as _,gc as G,jc as f,kc as V,lc as U,na as E,nb as P,qb as O,ub as d,zb as u}from"./chunk-CQJO6ZYU.js";function Ye(i,r){if(i&1&&(l(0,"mat-label"),h(1),s()),i&2){let b=v();n(),R(b.label);}}function ze(i,r){i&1&&(l(0,"mat-option"),h(1,"-"),s());}function $e(i,r){if(i&1&&(l(0,"mat-option",4),h(1),s()),i&2){let b=r.$implicit,e=v();d("value",e.getOptionValue(b)),n(),R(e.getOptionContent(b));}}function Be(i,r){i&1&&(l(0,"mat-error"),m(1,5),s());}function xe(i,r){i&1&&(l(0,"mat-error"),m(1,6),s());}function Ge(i,r){i&1&&(l(0,"mat-error"),m(1,7),s());}function Ve(i,r){i&1&&p(0,"mat-progress-bar",3);}var ve=(()=>{let r=class r extends ne{constructor(e,o){super(e),this.ngControl=e,this.mlabService=o,this.label=c.testType,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[];}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.testTypes.get(z(Y({},this.pagination),{orderBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds})).pipe(N(this.indicator),T(1)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};r.ɵfac=function(o){return new(o||r)(_(X,10),_(S));},r.ɵcmp=E({type:r,selectors:[["medisy-form-field-test-type-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[G([S]),P,f],decls:11,vars:10,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],e,o,t];},template:function(o,t){o&1&&(l(0,"div",0)(1,"mat-form-field",1),O(2,Ye,2,1,"mat-label"),l(3,"mat-select",2),M("szScrolled",function(){return t.scroll();}),O(4,ze,2,0,"mat-option"),B(5,$e,2,2,"mat-option",4,$),s(),O(7,Be,2,0,"mat-error")(8,xe,2,0,"mat-error")(9,Ge,2,0,"mat-error"),s(),O(10,Ve,1,0,"mat-progress-bar",3),s()),o&2&&(n(2),u(2,t.label?2:-1),n(),d("formControl",t.control)("multiple",t.multiple)("placeholder",t.placeholder)("szScrollIgnored",t.indicator()),n(),u(4,t.emptyOption?4:-1),n(),x(t.options),n(2),u(7,t.control.hasError("required")?7:-1),n(),u(8,t.control.hasError("min")?8:-1),n(),u(9,t.control.hasError("max")?9:-1),n(),u(10,t.indicator()?10:-1));},dependencies:[A,g,q,_e,ie,te,oe,se,W,ae,re,Ne],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=r;return i;})();var Xe=()=>[],ke=i=>[i],Re=(()=>{let r=class r extends ue{constructor(e,o,t,a){super(t),this.mlabService=e,this.fb=o,this.dialog=t,this.data=a,this.form=o.group({enabled:[a.laboratoryTestType?.enabled??!0,[C.required]],price:[a.laboratoryTestType?.price??0,[C.required]],isFavorite:[a.laboratoryTestType?.isFavorite??!1,[C.required]],testTypeId:[a.laboratoryTestType?.testTypeId,[C.required]]});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(o){return new(o||r)(_(S),_(J),_(de),_(me));},r.ɵcmp=E({type:r,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[P,f],decls:10,vars:7,consts:()=>{let e;e="\u0627\u0644\u0633\u0639\u0631";let o;o="\u0645\u0641\u0636\u0644\u0629";let t;return t="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId",3,"excludeLaboratoryIds"],["formControlName","price","label",e],["formControlName","isFavorite"],o,["formControlName","enabled"],t,[3,"actions"]];},template:function(o,t){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"medisy-form-field-test-type-select",2)(4,"sz-ui-form-field-input",3),l(5,"mat-checkbox",4),m(6,5),s(),l(7,"mat-checkbox",6),m(8,7),s()()(),p(9,"sz-ui-dialog-actions",8)),o&2&&(d("header",t.header),n(2),d("formGroup",t.form),n(),d("excludeLaboratoryIds",t.data.laboratoryTestType?V(4,Xe):U(5,ke,t.data.laboratoryId)),n(6),d("actions",t.actions));},dependencies:[A,j,g,k,w,H,Oe,Ee,Me,ce,Se,I,he,ve,le],encapsulation:2});let i=r;return i;})();var Gt=(()=>{let r=class r{constructor(e,o,t){this.dialog=e,this.mlabService=o,this.route=t,this.title=c.testTypes,this.dataSource=new be(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ye.default([y.text("testType.name",c.testType),y.text("price",c.price),F.createdAt(),y.checkbox("isFavorite",c.favorite,(a,L)=>{a.isFavorite=L,this.updateItem(a);}),y.checkbox("enabled",c.enabled,(a,L)=>{a.enabled=L,this.mlabService.laboratories.testTypes.update(a.laboratoryId,a.id,a).pipe(T(1)).subscribe(De=>{a=De;});}),F.menu([D.edit(a=>this.openSaveComponent(a)),D.delete(a=>this.openLaboratoryTestTypeDeleteComponent(a))])])),this.get();}openSaveComponent(e){this.dialog.open(Re,{data:{laboratoryId:this.laboratory.id,laboratoryTestType:e}}).afterClosed().pipe(T(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryTestTypeDeleteComponent(e){this.dialog.open(fe,{data:Ce.delete(this.mlabService.laboratories.testTypes.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe(T(1)).subscribe(o=>{this.dataSource.delete(o);});}updateItem(e){this.mlabService.laboratories.testTypes.update(e.laboratoryId,e.id,e).subscribe(o=>{this.dataSource.update(o);});}get(){this.mlabService.laboratories.testTypes.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(N(this.dataSource.indicator)).pipe(T(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(o){return new(o||r)(_(pe),_(S),_(K));},r.ɵcmp=E({type:r,selectors:[["medisy-laboratory-test-types"]],standalone:!0,features:[f],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,t){o&1&&(p(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),M("changed",function(){return t.get();}),l(2,"button",2),M("click",function(){return t.openSaveComponent();}),l(3,"span"),m(4,3),s()()(),l(5,"sz-ui-table",4),M("update",function(){return t.get();}),s()),o&2&&(d("title",t.title)("subTitle",t.laboratory.name),n(),d("dataSource",t.dataSource),n(4),d("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[Q,Te,Ae,ge,Pe,I,ee,Z],encapsulation:2});let i=r;return i;})();export{Gt as LaboratoryTestTypesComponent};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/