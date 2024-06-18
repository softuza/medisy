import{a as zt}from"./chunk-MOPAGSIE.js";import{a as c}from"./chunk-E4K3ZOYS.js";import{a as Ot,c as Mt,d as Rt,e as Lt,f as vt}from"./chunk-J3ZGTMT7.js";import{d as bt,f as At,g as It,j as gt}from"./chunk-XU4OIEX3.js";import{a as tt,b as et,e as ot,g as it}from"./chunk-XLS5ADJU.js";import{c as dt,d as ct,g as _t,h as ut,i as ft,j as Tt,k as yt,m as ht,u as Ct,v as Et}from"./chunk-DTFZJJ2Y.js";import{b as pt}from"./chunk-BQGY2E4W.js";import{i as lt,j as mt}from"./chunk-2O3PA6GN.js";import{b as rt,c as nt,i as at,j as st}from"./chunk-4MKCL2OB.js";import{b as w,d as $,e as H,f as R,g as G,k as q,l as j,m as X,p as k,q as W,t as L}from"./chunk-D2M35WMU.js";import{t as K}from"./chunk-FDTJH5UN.js";import{a as St}from"./chunk-6GZKHOTA.js";import{$ as U,ca as J,ga as Q,ha as Z}from"./chunk-XX5UC3BF.js";import{Db as _,Fa as B,Fb as v,Gb as z,Hb as F,Ib as l,Jb as s,Kb as u,Nc as V,Ob as I,Ub as D,Vb as T,Xb as p,ab as n,bb as d,dc as g,ec as E,fc as x,gc as Y,kc as O,lc as M,na as b,ob as A,ub as f,wa as h,xa as C,yb as m}from"./chunk-MR5DLTC3.js";import{a as N,b as P}from"./chunk-XTPTFZB3.js";function Bt(o,r){if(o&1){let a=I();l(0,"mat-chip-row",11),T("removed",function(){let i=h(a).$implicit,e=p(2);return C(e.removeSelection(i));}),E(1),l(2,"button",12)(3,"mat-icon"),E(4,"cancel"),s()()();}if(o&2){let a=r.$implicit,t=p(2);n(),Y(" ",t.getSelectionFormat(a)," ");}}function xt(o,r){if(o&1){let a=I();l(0,"mat-chip-grid",null,1),z(2,Bt,5,1,"mat-chip-row",null,v),s(),l(4,"input",10,2),T("matChipInputTokenEnd",function(){h(a);let i=p();return C(i.addSelection());}),s();}if(o&2){let a=g(1),t=p(),i=g(7);n(2),F(t.selections),n(2),m("matAutocomplete",i)("formControl",t.control)("matChipInputFor",a)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes);}}function Vt(o,r){if(o&1&&u(0,"input",6,2),o&2){let a=p(),t=g(7);m("matAutocomplete",t)("formControl",a.control);}}function wt(o,r){if(o&1&&(l(0,"mat-option",8),E(1),s()),o&2){let a=r.$implicit,t=p();m("value",t.getOptionValue(a)),n(),Y(" ",t.getOptionContent(a)," ");}}function $t(o,r){o&1&&(l(0,"mat-error"),D(1,3),s());}function Ht(o,r){o&1&&(l(0,"mat-error"),D(1,4),s());}function Gt(o,r){o&1&&u(0,"mat-progress-bar",9);}var Ft=(()=>{let r=class r extends ht{get laboratoryId(){return this._laboratoryId;}set laboratoryId(t){t!==this._laboratoryId&&(this._laboratoryId=t,this.reset());}constructor(t,i){super(t),this.ngControl=t,this.mlatService=i,this.query=null,this.label=St.test_type,this._laboratoryId="",this.filters=B([]),this.szOptionContentFn=e=>e.testType.nameEn,this.szOptionValueFn=e=>e,this.szOptionFormatFn=e=>e?e.testType.nameEn:"",V(()=>this.refresh(),{allowSignalWrites:!0});}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(yt(400)).subscribe(t=>{t!==null&&this.handleValueChanged(t);}));}handleValueChanged(t){if(this.reset(),typeof t=="string")this.query=t;else if(typeof t=="object"&&t)return;this.fetch();}reset(){this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mlatService.laboratories.testTypes.get(this._laboratoryId,P(N({query:this.query},pt.minimal()),{orderBy:["-isFavorite","testType.nameEn"],filters:this.filters()})).pipe(Tt(this.indicator)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages,this.afterSourceUpdated();});}};r.ɵfac=function(i){return new(i||r)(d(H,10),d(c));},r.ɵcmp=b({type:r,selectors:[["sz-medisy-laboratory-laboratory-test-type-search"]],inputs:{query:"query",laboratoryId:"laboratoryId",filters:[1,"filters"]},standalone:!0,features:[O([c]),A,M],decls:13,vars:7,consts:()=>{let t;t="This field is required";let i;return i="This field is not valid",[["auto","matAutocomplete"],["chipGrid",""],["input",""],t,i,[1,"container"],["matInput","",3,"matAutocomplete","formControl"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""]];},template:function(i,e){if(i&1){let y=I();l(0,"div",5)(1,"mat-form-field")(2,"mat-label"),E(3),s(),f(4,xt,6,4)(5,Vt,2,2,"input",6),l(6,"mat-autocomplete",7,0),T("optionSelected",function(Dt){return h(y),C(e.optionSelected(Dt));})("szScrolled",function(){return h(y),C(e.scroll());}),z(8,wt,2,2,"mat-option",8,v),s(),f(10,$t,2,0,"mat-error")(11,Ht,2,0,"mat-error"),s(),f(12,Gt,1,0,"mat-progress-bar",9),s();}i&2&&(n(3),x(e.label),n(),_(e.multiple()?4:5),n(2),m("displayWith",e.szOptionFormatFn)("szScrollIgnored",e.indicator()),n(2),F(e.options),n(2),_(e.control.hasError("required")?10:-1),n(),_(e.control.hasError("invalid")?11:-1),n(),_(e.indicator()?12:-1));},dependencies:[L,w,R,j,st,at,rt,nt,ft,_t,U,ut,mt,lt,ct,dt,J,vt,Rt,Lt,Ot,Mt,Z,Q,Ct],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=r;return o;})();function qt(o,r){if(o&1&&u(0,"sz-ui-form-field-select",3),o&2){let a=p();m("source",a.laboratories)("emptyOption",!0);}}var Ye=(()=>{let r=class r extends bt{constructor(t,i,e,y){super(i),this.fb=t,this.dialog=i,this.mlabService=e,this.data=y,this.laboratories=null,this.laboratoryOptionValueFn=S=>S,this.testTypesFilters=[],this.laboratoryId=this.data,this.form=t.group({transferOutLaboratoryId:[null,[]],testType:t.control(null,[$.required,zt()])});}isTranferOutEnabled(){return this.form.value?.testType?.transferOutEnabled;}testTypeChanged(t){this.form.patchValue({transferOutLaboratoryId:t.transferOutLaboratoryId}),t.transferOutLaboratoryId?this.form.controls.transferOutLaboratoryId.disable():this.form.controls.transferOutLaboratoryId.enable(),t.transferOutEnabled&&(this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:K.create().notEqual("id",this.data).any("testTypes.testTypeId",t.testTypeId).any("testTypes.enabled",!0).any("testTypes.transferInEnabled",!0).filters()}));}submit(){this.IsValid()&&this.dialog.close({laboratoryTestType:this.form.value.testType,transferOutLaboratoryId:this.form.getRawValue().transferOutLaboratoryId});}};r.ɵfac=function(i){return new(i||r)(d(W),d(tt),d(c),d(et));},r.ɵcmp=b({type:r,selectors:[["sz-medisy-laboratory-analysis-test-type-add"]],standalone:!0,features:[O([c]),A,M],decls:6,vars:8,consts:()=>{let t;return t="Transfer Out Laboratory",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testType",3,"szOptionSelected","laboratoryId","filters"],["formControlName","transferOutLaboratoryId","label",t,3,"source","emptyOption"],[3,"actions"]];},template:function(i,e){i&1&&(u(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"sz-medisy-laboratory-laboratory-test-type-search",2),T("szOptionSelected",function(S){return e.testTypeChanged(S);}),s(),f(4,qt,1,2,"sz-ui-form-field-select",3),s()(),u(5,"sz-ui-dialog-actions",4)),i&2&&(m("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),n(2),m("formGroup",e.form),n(),m("laboratoryId",e.laboratoryId)("filters",e.testTypesFilters),n(),_(e.isTranferOutEnabled()?4:-1),n(),m("actions",e.actions));},dependencies:[L,q,R,G,X,k,it,ot,gt,At,It,Ft,Et],encapsulation:2});let o=r;return o;})();export{Ye as a};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/