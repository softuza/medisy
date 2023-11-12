import{a as k}from"./chunk-FED66NHY.js";import{d as Pe,e as Te,f as j,g as B,i as ye,j as h,k as De}from"./chunk-WR4GG44T.js";import{d as Ee,e as Me,g as Ce,r as Oe,s as ge,t as he}from"./chunk-XIKUJ2RB.js";import{b as Ae}from"./chunk-B6YRJ72V.js";import"./chunk-ZC5VE3PD.js";import{a as U,b as $,d as G,e as Y,g as O}from"./chunk-U5WHS54P.js";import"./chunk-USWRGYS2.js";import{f as p}from"./chunk-A4RP7L5Q.js";import{a as S}from"./chunk-SIM3MWAY.js";import{b as x}from"./chunk-SYJ5COXL.js";import{a as W,b as Fe,c as Ve,d as be,f as v,n as Le,o as ze}from"./chunk-X7AK5RKT.js";import{b as J}from"./chunk-V4HCCL3Z.js";import{d as Ne}from"./chunk-A4OPY5TW.js";import{b as Ie}from"./chunk-37GZDSHT.js";import{h as fe,i as de,k as Re}from"./chunk-FJNI2GB6.js";import{b as ie,d as T,f as ne,g as C,h as y,k as D,l as F,m as ae,n as V,o as b,p as L,r as le,s as R,t as pe,u as ue,v as ce}from"./chunk-FEFUQJM2.js";import{a as g}from"./chunk-ESAZXDOZ.js";import"./chunk-UPQBKJGY.js";import{a as ve}from"./chunk-NW5OYJVI.js";import{a as w}from"./chunk-CVLFG5YI.js";import{D as z,G as me,H as se,Sa as _e,Ta as Se}from"./chunk-RQMADBIK.js";import{Ab as s,Kb as re,L as N,Mb as I,Tb as P,Ub as H,Wb as _,Zb as M,cb as u,da as ee,db as a,k as Z,kb as E,la as d,ma as te,nb as c,tb as oe,ub as q,yb as m,zb as f}from"./chunk-3PI2VV3G.js";var X=(()=>{let o=class o extends Ce{constructor(r,e){super(r),this.ngControl=r,this.typeI18nPipe=e,this.options=Object.keys(S).map(t=>S[t]),this.label="\u0627\u0644\u0639\u0645\u0644\u064A\u0629",this.optionContent=t=>this.typeI18nPipe.transform(t);}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(e){return new(e||o)(a(ne,10),a(p));},o.ɵcmp=d({type:o,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[_([p]),E,M],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,t){e&1&&s(0,"sz-ui-form-field-select",0),e&2&&c("formControl",t.control)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent);},dependencies:[R,C,ae,Oe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=o;return i;})();var $e=(()=>{let o=class o extends Pe{constructor(r,e,t,l){super(e),this.fb=r,this.dialog=e,this.typeI18nPipe=t,this.data=l,this.form=r.group({referenceGroupId:[l.referenceGroupId],comparisonOperator:new D(l.comparisonOperator)});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(a(L),a(U),a(p),a($));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[_([p]),E,M],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),s(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),f()(),s(5,"sz-ui-dialog-actions",4)),e&2&&(c("header",t.header),u(2),c("formGroup",t.form),u(1),c("emptyOption",!0),u(1),c("emptyOption",!0),u(1),c("actions",t.actions));},dependencies:[R,F,C,y,V,b,O,Y,v,h,j,B,k,X],encapsulation:2});let i=o;return i;})();function Xe(i,o){i&1&&(m(0,"div",8)(1,"mat-form-field",9)(2,"label"),s(3,"input",10),f()(),m(4,"mat-form-field",9)(5,"label"),s(6,"input",11),f()()());}function qe(i,o){i&1&&(m(0,"mat-form-field",9)(1,"label"),s(2,"input",12),f()());}var Ge=(()=>{let o=class o extends Te{constructor(r,e,t,l,n){super(l),this.mlabService=r,this.typeI18nPipe=e,this.fb=t,this.dialog=l,this.data=n,this.form=t.group({description:[n.referenceValueRule?.description,[T.maxLength(4096)]],comparisonOperator:new D(n.referenceValueRule?.comparisonOperator??S.Equal,[T.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[T.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===S.RangeWithBoundaries||this.form.value.comparisonOperator===S.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(g),a(p),a(L),a(U),a($));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[_([p]),E,M],decls:9,vars:5,consts:()=>{let r;r="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0628\u062F\u0627\u064A\u0629";let t;t="\u0646\u0647\u0627\u064A\u0629";let l;return l="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",e],["autocomplete","off","formControlName","end","matInput","","placeholder",t],["autocomplete","off","formControlName","value","matInput","","placeholder",l]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),oe(5,Xe,7,0,"div",4)(6,qe,3,0,"mat-form-field",5),s(7,"medisy-form-field-reference-group",6),f()(),s(8,"sz-ui-dialog-actions",7)),e&2&&(c("header",t.header),u(2),c("formGroup",t.form),u(3),q(5,t.isRange()?5:-1),u(1),q(6,t.isRange()?-1:6),u(2),c("actions",t.actions));},dependencies:[R,F,ie,C,y,V,b,Me,Ee,fe,O,Y,de,v,h,j,B,he,ge,k,X],encapsulation:2});let i=o;return i;})();var Ye=(()=>{let o=class o{constructor(r,e,t,l){this.dialog=r,this.route=e,this.mlabService=t,this.typeI18nPipe=l,this.dataSource=new Fe(ve.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(Ve.default([W.text("referenceGroup","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",n=>n.referenceGroup.locales[0].name),x.comparisonOperator(n=>l.transform(n.comparisonOperator)),W.text("value","\u0642\u064A\u0645\u0629",n=>n.value?n.value:`${n.start} - ${n.end}`),x.createdAt(),x.menu([J.edit(n=>this.openSaveComponent(n)),J.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})])])),this.get();}openSaveComponent(r){this.dialog.open(Ge,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(N(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open($e,{data:this.dataSource.filterModel}).afterClosed().pipe(N(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(ye,{data:De.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(N(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe(Ie(this.dataSource.indicator),N(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};o.ɵfac=function(e){return new(e||o)(a(G),a(z),a(g),a(p));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules"]],features:[_([p])],decls:5,vars:4,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(m(0,"sz-ui-table-filter",0),I("search",function(){return t.get();})("filter",function(){return t.openFilterComponent();}),m(1,"button",1),I("click",function(){return t.openSaveComponent();}),m(2,"span"),re(3,2),f()()(),m(4,"sz-ui-table",3),I("update",function(){return t.get();}),f()),e&2&&(c("dataSource",t.dataSource),u(4),c("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[pe,Le,be],encapsulation:2});let i=o;return i;})();var we=(()=>{let o=class o{constructor(r,e){this.dialog=r,this.route=e,this.alert$=new Z(),this.referenceValue=this.route.snapshot.data.referenceValue;}};o.ɵfac=function(e){return new(e||o)(a(G),a(z));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value"]],features:[_([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(e,t){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),P(3),f(),m(4,"span",2),P(5),f()(),m(6,"button",3)(7,"mat-icon"),P(8,"arrow_back"),f()()(),s(9,"medisy-laboratory-reference-value-rules")),e&2&&(u(3),H(t.referenceValue.testClass.name),u(2),H(t.referenceValue.description));},dependencies:[me,_e,ue,w,Ye],encapsulation:2});let i=o;return i;})();var je=[{path:"",component:we}];var Ro=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=te({type:o}),o.ɵinj=ee({providers:[g],imports:[le,se.forChild(je),O,v,Ne,Se,ce,Re,ze,Ae,h,w]});let i=o;return i;})();export{Ro as ReferenceValueModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/