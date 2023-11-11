import{a as X}from"./chunk-EZ5PROWQ.js";import{d as Te,e as ye,f as B,g as x,i as De,j as v,k as Fe}from"./chunk-SO5WW7X3.js";import{d as Me,e as Ce,g as Re,t as ge,u as he,v as ve}from"./chunk-BXKAZQ64.js";import{b as Ie}from"./chunk-PF7HVV5B.js";import"./chunk-XLSE5NCB.js";import{a as $,b as G,d as Y,e as w,g}from"./chunk-VWPRYYV7.js";import"./chunk-UKCE2Q4Z.js";import{f as p}from"./chunk-3VGQRMVI.js";import{a as S}from"./chunk-SIM3MWAY.js";import{b as k}from"./chunk-BYYBYZIV.js";import{a as J,b as Ve,c as be,d as Le,f as N,n as ze,o as Ue}from"./chunk-CQQPNAJZ.js";import{b as K}from"./chunk-HEEN2CKG.js";import{d as Ae}from"./chunk-E7VUVWEF.js";import{b as Pe}from"./chunk-XJ54ZRFR.js";import{D as de,E as _e,b as ne,d as y,da as Oe,f as ae,g as R,h as D,k as F,l as V,m as me,n as b,o as L,p as z,r as le,s as O,t as ue,u as ce,v as fe}from"./chunk-X72CBQLP.js";import{a as h}from"./chunk-Y376CRI2.js";import"./chunk-SNR3XRMI.js";import{a as Ne}from"./chunk-PIKBUH2I.js";import{a as j}from"./chunk-3HWNDRT6.js";import{F as U,I as se,J as pe,Ua as Se,Va as Ee,n as C}from"./chunk-P44VDH7R.js";import{Ab as l,Bb as f,Cb as s,L as A,Mb as ie,Pb as P,Wb as T,Xb as W,Zb as _,ac as M,ea as te,eb as u,fb as a,k as ee,ma as d,mb as E,na as oe,pb as c,vb as re,wb as H}from"./chunk-3CXVAQY6.js";var q=(()=>{let o=class o extends Re{constructor(r,e){super(r),this.ngControl=r,this.typeI18nPipe=e,this.options=Object.keys(S).map(t=>S[t]),this.label="Comparison Operator",this.optionContent=t=>this.typeI18nPipe.transform(t);}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(e){return new(e||o)(a(ae,10),a(p));},o.ɵcmp=d({type:o,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[_([p]),E,M],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(e,t){e&1&&s(0,"sz-ui-form-field-select",0),e&2&&c("formControl",t.control)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent);},dependencies:[O,R,me,ge],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=o;return i;})();var Ge=(()=>{let o=class o extends Te{constructor(r,e,t,m){super(e),this.fb=r,this.dialog=e,this.typeI18nPipe=t,this.data=m,this.form=r.group({referenceGroupId:[m.referenceGroupId],comparisonOperator:new F(m.comparisonOperator)});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(a(z),a($),a(p),a(G));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[_([p]),E,M],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),s(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),f()(),s(5,"sz-ui-dialog-actions",4)),e&2&&(c("header",t.header),u(2),c("formGroup",t.form),u(1),c("emptyOption",!0),u(1),c("emptyOption",!0),u(1),c("actions",t.actions));},dependencies:[C,O,V,R,D,b,L,g,w,N,v,B,x,X,q],encapsulation:2});let i=o;return i;})();function qe(i,o){i&1&&(l(0,"div",8)(1,"mat-form-field",9)(2,"label"),s(3,"input",10),f()(),l(4,"mat-form-field",9)(5,"label"),s(6,"input",11),f()()());}function He(i,o){i&1&&(l(0,"mat-form-field",9)(1,"label"),s(2,"input",12),f()());}var Ye=(()=>{let o=class o extends ye{constructor(r,e,t,m,n){super(m),this.mlabService=r,this.typeI18nPipe=e,this.fb=t,this.dialog=m,this.data=n,this.form=t.group({description:[n.referenceValueRule?.description,[y.maxLength(4096)]],comparisonOperator:new F(n.referenceValueRule?.comparisonOperator??S.Equal,[y.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[y.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===S.RangeWithBoundaries||this.form.value.comparisonOperator===S.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(h),a(p),a(z),a($),a(G));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[_([p]),E,M],decls:9,vars:5,consts:()=>{let r;r="Description";let e;e="Start";let t;t="End";let m;return m="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",e],["autocomplete","off","formControlName","end","matInput","","placeholder",t],["autocomplete","off","formControlName","value","matInput","","placeholder",m]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),re(5,qe,7,0,"div",4)(6,He,3,0,"mat-form-field",5),s(7,"medisy-form-field-reference-group",6),f()(),s(8,"sz-ui-dialog-actions",7)),e&2&&(c("header",t.header),u(2),c("formGroup",t.form),u(3),H(5,t.isRange()?5:-1),u(1),H(6,t.isRange()?-1:6),u(2),c("actions",t.actions));},dependencies:[C,O,V,ne,R,D,b,L,Ce,Me,de,g,w,_e,N,v,B,x,ve,he,X,q],encapsulation:2});let i=o;return i;})();var we=(()=>{let o=class o{constructor(r,e,t,m){this.dialog=r,this.route=e,this.mlabService=t,this.typeI18nPipe=m,this.dataSource=new Ve(Ne.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.addRows(be.default([J.text("referenceGroup","Reference group",n=>n.referenceGroup.locales[0].name),k.comparisonOperator(n=>m.transform(n.comparisonOperator)),J.text("value","Value",n=>n.value?n.value:`${n.start} - ${n.end}`),k.createdAt(),k.menu([K.edit(n=>this.openSaveComponent(n)),K.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})])])),this.get();}openSaveComponent(r){this.dialog.open(Ye,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(A(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t);});}openFilterComponent(){this.dialog.open(Ge,{data:this.dataSource.filterModel}).afterClosed().pipe(A(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(De,{data:Fe.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(A(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe(Pe(this.dataSource.indicator),A(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};o.ɵfac=function(e){return new(e||o)(a(Y),a(U),a(h),a(p));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value-rules"]],features:[_([p])],decls:5,vars:4,consts:()=>{let r;return r="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(l(0,"sz-ui-table-filter",0),P("search",function(){return t.get();})("filter",function(){return t.openFilterComponent();}),l(1,"button",1),P("click",function(){return t.openSaveComponent();}),l(2,"span"),ie(3,2),f()()(),l(4,"sz-ui-table",3),P("update",function(){return t.get();}),f()),e&2&&(c("dataSource",t.dataSource),u(4),c("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[ue,ze,Le],encapsulation:2});let i=o;return i;})();var je=(()=>{let o=class o{constructor(r,e){this.dialog=r,this.route=e,this.alert$=new ee(),this.referenceValue=this.route.snapshot.data.referenceValue;}};o.ɵfac=function(e){return new(e||o)(a(Y),a(U));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-value"]],features:[_([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(e,t){e&1&&(l(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),T(3),f(),l(4,"span",2),T(5),f()(),l(6,"button",3)(7,"mat-icon"),T(8,"arrow_back"),f()()(),s(9,"medisy-laboratory-reference-value-rules")),e&2&&(u(3),W(t.referenceValue.testClass.name),u(2),W(t.referenceValue.description));},dependencies:[se,Se,ce,j,we],encapsulation:2});let i=o;return i;})();var Be=[{path:"",component:je}];var vo=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=oe({type:o}),o.ɵinj=te({providers:[h],imports:[C,le,pe.forChild(Be),g,N,Ae,Ee,fe,Oe,Ue,Ie,v,j]});let i=o;return i;})();export{vo as ReferenceValueModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/