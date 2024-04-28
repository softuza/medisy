import{a as Ft}from"./chunk-V6MFDJU5.js";import{a as Mt,c as Rt,d as Lt,e as vt,f as zt}from"./chunk-ZOEJNRTW.js";import{a as c}from"./chunk-3DDSOTC2.js";import{d as gt,f as At,g as It,j as Ot}from"./chunk-6FINNKG2.js";import{a as et,b as ot,e as it,g as rt}from"./chunk-2NHKG2HK.js";import{a as ct,b as _t,e as ut,f as ft,g as Tt,h as Ct,p as Et,q as bt}from"./chunk-JL7PUK3E.js";import{c as yt,d as St}from"./chunk-MH7APIJE.js";import{b as dt}from"./chunk-FIREYTYE.js";import{i as mt,j as pt}from"./chunk-RVCMAY6K.js";import{c as ht}from"./chunk-CL3FEQQS.js";import{a as nt,b as at,h as st,i as lt}from"./chunk-NUEU2NYQ.js";import{b as $,d as H,e as G,f as R,g as q,k as j,l as X,m as k,p as W,q as K,t as L}from"./chunk-7T6A67P3.js";import{t as U}from"./chunk-MCLBUENY.js";import{$ as J,ca as Q,ga as Z,ha as tt}from"./chunk-5SVBE3KQ.js";import{Cb as _,Eb as v,Fb as z,Ga as x,Gb as F,Hb as l,Ib as s,Jb as u,Lc as w,Nb as A,Tb as D,Ub as T,Wb as p,bb as n,cb as d,cc as I,dc as E,ec as V,fc as Y,jc as O,kc as M,na as P,oa as b,ob as g,tb as f,xa as h,xb as m,ya as C}from"./chunk-BSOORNNN.js";import{a as N,b as B}from"./chunk-73BG4Q2P.js";function xt(o,r){if(o&1){let a=A();l(0,"mat-chip-row",10),T("removed",function(){let i=h(a).$implicit,e=p(2);return C(e.removeSelection(i));}),E(1),l(2,"button",11)(3,"mat-icon"),E(4,"cancel"),s()()();}if(o&2){let a=r.$implicit,t=p(2);n(),Y(" ",t.getSelectionFormat(a)," ");}}function Vt(o,r){if(o&1){let a=A();l(0,"mat-chip-grid",null,1),z(2,xt,5,1,"mat-chip-row",null,v),s(),l(4,"input",9,2),T("matChipInputTokenEnd",function(){h(a);let i=p();return C(i.addSelection());}),s();}if(o&2){let a=I(1),t=p(),i=I(7);n(2),F(t.selections),n(2),m("matAutocomplete",i)("formControl",t.control)("matChipInputFor",a)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes);}}function wt(o,r){if(o&1&&u(0,"input",12,2),o&2){let a=p(),t=I(7);m("matAutocomplete",t)("formControl",a.control);}}function $t(o,r){if(o&1&&(l(0,"mat-option",7),E(1),s()),o&2){let a=r.$implicit,t=p();m("value",t.getOptionValue(a)),n(),Y(" ",t.getOptionContent(a)," ");}}function Ht(o,r){o&1&&(l(0,"mat-error"),D(1,3),s());}function Gt(o,r){o&1&&(l(0,"mat-error"),D(1,4),s());}function qt(o,r){o&1&&u(0,"mat-progress-bar",8);}var Dt=(()=>{let r=class r extends Ct{get laboratoryId(){return this._laboratoryId;}set laboratoryId(t){t!==this._laboratoryId&&(this._laboratoryId=t,this.reset());}constructor(t,i){super(t),this.ngControl=t,this.mlatService=i,this.query=null,this.label=ht.test_type,this._laboratoryId="",this.filters=x([]),this.szOptionContentFn=e=>e.testType.nameEn,this.szOptionValueFn=e=>e,this.szOptionFormatFn=e=>e?e.testType.nameEn:"",w(()=>this.refresh(),{allowSignalWrites:!0});}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(St(400)).subscribe(t=>{t!==null&&this.handleValueChanged(t);}));}handleValueChanged(t){if(this.reset(),typeof t=="string")this.query=t;else if(typeof t=="object"&&t)return;this.fetch();}reset(){this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mlatService.laboratories.testTypes.get(this._laboratoryId,B(N({query:this.query},dt.minimal()),{orderBy:["-isFavorite","testType.nameEn"],filters:this.filters()})).pipe(yt(this.indicator)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages,this.afterSourceUpdated();});}};r.ɵfac=function(i){return new(i||r)(d(G,10),d(c));},r.ɵcmp=b({type:r,selectors:[["sz-medisy-laboratory-laboratory-test-type-search"]],inputs:{query:"query",laboratoryId:"laboratoryId",filters:[P.SignalBased,"filters"]},standalone:!0,features:[O([c]),g,M],decls:13,vars:7,consts:()=>{let t;t="This field is required";let i;return i="This field is not valid",[["auto","matAutocomplete"],["chipGrid",""],["input",""],t,i,[1,"container"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"]];},template:function(i,e){if(i&1){let y=A();l(0,"div",5)(1,"mat-form-field")(2,"mat-label"),E(3),s(),f(4,Vt,6,4)(5,wt,2,2),l(6,"mat-autocomplete",6,0),T("optionSelected",function(Yt){return h(y),C(e.optionSelected(Yt));})("szScrolled",function(){return h(y),C(e.scroll());}),z(8,$t,2,2,"mat-option",7,v),s(),f(10,Ht,2,0,"mat-error")(11,Gt,2,0,"mat-error"),s(),f(12,qt,1,0,"mat-progress-bar",8),s();}i&2&&(n(3),V(e.label),n(),_(4,e.multiple()?4:5),n(2),m("displayWith",e.szOptionFormatFn)("szScrollIgnored",e.indicator()),n(2),F(e.options),n(2),_(10,e.control.hasError("required")?10:-1),n(),_(11,e.control.hasError("invalid")?11:-1),n(),_(12,e.indicator()?12:-1));},dependencies:[L,$,R,X,lt,st,nt,at,Tt,ut,J,ft,pt,mt,_t,ct,Q,zt,Lt,vt,Mt,Rt,tt,Z,Et],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=r;return o;})();function jt(o,r){if(o&1&&u(0,"sz-ui-form-field-select",3),o&2){let a=p();m("source",a.laboratories)("emptyOption",!0);}}var Ne=(()=>{let r=class r extends gt{constructor(t,i,e,y){super(i),this.fb=t,this.dialog=i,this.mlabService=e,this.data=y,this.laboratories=null,this.laboratoryOptionValueFn=S=>S,this.testTypesFilters=[],this.laboratoryId=this.data,this.form=t.group({transferOutLaboratoryId:[null,[]],testType:t.control(null,[H.required,Ft()])});}isTranferOutEnabled(){return this.form.value?.testType?.transferOutEnabled;}testTypeChanged(t){this.form.patchValue({transferOutLaboratoryId:t.transferOutLaboratoryId}),t.transferOutLaboratoryId?this.form.controls.transferOutLaboratoryId.disable():this.form.controls.transferOutLaboratoryId.enable(),t.transferOutEnabled&&(this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:U.create().notEqual("id",this.data).any("testTypes.testTypeId",t.testTypeId).any("testTypes.enabled",!0).any("testTypes.transferInEnabled",!0).filters()}));}submit(){this.IsValid()&&this.dialog.close({laboratoryTestType:this.form.value.testType,transferOutLaboratoryId:this.form.getRawValue().transferOutLaboratoryId});}};r.ɵfac=function(i){return new(i||r)(d(K),d(et),d(c),d(ot));},r.ɵcmp=b({type:r,selectors:[["sz-medisy-laboratory-analysis-test-type-add"]],standalone:!0,features:[O([c]),g,M],decls:6,vars:8,consts:()=>{let t;return t="Transfer Out Laboratory",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testType",3,"szOptionSelected","laboratoryId","filters"],["formControlName","transferOutLaboratoryId","label",t,3,"source","emptyOption"],[3,"actions"]];},template:function(i,e){i&1&&(u(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"sz-medisy-laboratory-laboratory-test-type-search",2),T("szOptionSelected",function(S){return e.testTypeChanged(S);}),s(),f(4,jt,1,2,"sz-ui-form-field-select",3),s()(),u(5,"sz-ui-dialog-actions",4)),i&2&&(m("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),n(2),m("formGroup",e.form),n(),m("laboratoryId",e.laboratoryId)("filters",e.testTypesFilters),n(),_(4,e.isTranferOutEnabled()?4:-1),n(),m("actions",e.actions));},dependencies:[L,j,R,q,k,W,rt,it,Ot,At,It,Dt,bt],encapsulation:2});let o=r;return o;})();export{Ne as a};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/