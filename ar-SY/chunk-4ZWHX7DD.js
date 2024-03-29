import{a as Ft}from"./chunk-TXRHKTMR.js";import{a as Mt,c as Rt,d as Lt,e as vt,f as zt}from"./chunk-DLGQULAM.js";import{a as c}from"./chunk-7DOS4EQT.js";import{d as bt,f as gt,g as It,j as Ot}from"./chunk-RWBKTNX4.js";import{a as et,b as ot,e as it,g as rt}from"./chunk-TDAALCJW.js";import{a as ct,b as _t,e as ut,f as ft,g as St,h as Ct,r as Et,s as At}from"./chunk-LJNLPR6O.js";import{c as Tt,d as yt}from"./chunk-Y365ANJD.js";import{b as dt}from"./chunk-624ACHJE.js";import{a as mt,b as pt}from"./chunk-D5DPYT77.js";import{c as ht}from"./chunk-OPRLBPJZ.js";import{a as nt,b as at,h as st,i as lt}from"./chunk-3I6XO3BT.js";import{b as w,d as H,e as G,f as I,g as q,k as j,l as X,m as k,p as W,q as K,t as O}from"./chunk-ZBCFQZ6O.js";import{p as U}from"./chunk-ILI4DACJ.js";import{$ as J,ca as Q,ga as Z,ha as tt}from"./chunk-VGXLPPL2.js";import{Bb as m,Gb as _,Ib as L,Jb as v,Kb as z,Lb as l,Mb as s,Nb as u,Qc as $,Rb as F,Xb as D,Yb as T,_b as p,a as N,b as B,gb as n,gc as A,hb as d,hc as h,ia as P,ic as V,jc as Y,ma as x,na as C,nc as b,oc as g,ra as M,sa as R,sb as E,xb as S}from"./chunk-75X3YXCS.js";function Pt(o,i){if(o&1){let a=F();l(0,"mat-chip-row",7),T("removed",function(){let e=M(a).$implicit,f=p(2);return R(f.removeSelection(e));}),h(1),l(2,"button",8)(3,"mat-icon"),h(4,"cancel"),s()()();}if(o&2){let a=i.$implicit,t=p(2);n(),Y(" ",t.getSelectionFormat(a)," ");}}function xt(o,i){if(o&1){let a=F();l(0,"mat-chip-grid",null,4),v(2,Pt,5,1,"mat-chip-row",null,L),s(),l(4,"input",5,6),T("matChipInputTokenEnd",function(){M(a);let r=p();return R(r.addSelection());}),s();}if(o&2){let a=A(1),t=p(),r=A(7);n(2),z(t.selections),n(2),m("matAutocomplete",r)("formControl",t.control)("matChipInputFor",a)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes);}}function Vt(o,i){if(o&1&&u(0,"input",9,6),o&2){let a=p(),t=A(7);m("matAutocomplete",t)("formControl",a.control);}}function $t(o,i){if(o&1&&(l(0,"mat-option",10),h(1),s()),o&2){let a=i.$implicit,t=p();m("value",t.getOptionValue(a)),n(),Y(" ",t.getOptionContent(a)," ");}}function wt(o,i){o&1&&(l(0,"mat-error"),D(1,11),s());}function Ht(o,i){o&1&&(l(0,"mat-error"),D(1,12),s());}function Gt(o,i){o&1&&u(0,"mat-progress-bar",3);}var Dt=(()=>{let i=class i extends Ct{get laboratoryId(){return this._laboratoryId;}set laboratoryId(t){t!==this._laboratoryId&&(this._laboratoryId=t,this.reset());}constructor(t,r){super(t),this.ngControl=t,this.mlatService=r,this.query=null,this.label=ht.testType,this._laboratoryId="",this.filters=P([]),this.szOptionContentFn=e=>e.testType.name,this.szOptionValueFn=e=>e,this.szOptionFormatFn=e=>e?e.testType.name:"",$(()=>this.refresh(),{allowSignalWrites:!0});}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(yt(400)).subscribe(t=>{t!==null&&this.handleValueChanged(t);}));}handleValueChanged(t){if(this.reset(),typeof t=="string")this.query=t;else if(typeof t=="object"&&t)return;this.fetch();}reset(){this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mlatService.laboratories.testTypes.get(this._laboratoryId,B(N({query:this.query},dt.minimal()),{orderBy:["-isFavorite","testType.name"],filters:this.filters()})).pipe(Tt(this.indicator)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages,this.afterSourceUpdated();});}};i.ɵfac=function(r){return new(r||i)(d(G,10),d(c));},i.ɵcmp=C({type:i,selectors:[["sz-medisy-laboratory-laboratory-test-type-search"]],inputs:{query:"query",laboratoryId:"laboratoryId",filters:[x.SignalBased,"filters"]},standalone:!0,features:[b([c]),E,g],decls:13,vars:7,consts:()=>{let t;t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let r;return r="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],t,r];},template:function(r,e){r&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),h(3),s(),S(4,xt,6,4)(5,Vt,2,2),l(6,"mat-autocomplete",1,2),T("optionSelected",function(y){return e.optionSelected(y);})("szScrolled",function(){return e.scroll();}),v(8,$t,2,2,"mat-option",10,L),s(),S(10,wt,2,0,"mat-error")(11,Ht,2,0,"mat-error"),s(),S(12,Gt,1,0,"mat-progress-bar",3),s()),r&2&&(n(3),V(e.label),n(),_(4,e.multiple?4:5),n(2),m("displayWith",e.szOptionFormatFn)("szScrollIgnored",e.indicator()),n(2),z(e.options),n(2),_(10,e.control.hasError("required")?10:-1),n(),_(11,e.control.hasError("invalid")?11:-1),n(),_(12,e.indicator()?12:-1));},dependencies:[O,w,I,X,lt,st,nt,at,St,ut,J,ft,pt,mt,_t,ct,Q,zt,Lt,vt,Mt,Rt,tt,Z,Et],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=i;return o;})();function qt(o,i){if(o&1&&u(0,"sz-ui-form-field-select",3),o&2){let a=p();m("source",a.laboratories);}}var Ye=(()=>{let i=class i extends bt{constructor(t,r,e,f){super(r),this.fb=t,this.dialog=r,this.mlabService=e,this.data=f,this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:[{field:"id",op:U.NotEqual,value:this.data}]}),this.laboratoryOptionValueFn=y=>y,this.testTypesFilters=[],this.laboratoryId=this.data,this.form=t.group({transferOutLaboratoryId:[null,[]],testType:t.control(null,[H.required,Ft()])});}isTranferOutEnabled(){return this.form.value?.testType?.transferOutEnabled;}testTypeSelected(t){this.form.patchValue({transferOutLaboratoryId:t.transferOutLaboratoryId}),t.transferOutLaboratoryId?this.form.controls.transferOutLaboratoryId.disable():this.form.controls.transferOutLaboratoryId.enable();}submit(){this.IsValid()&&this.dialog.close({laboratoryTestType:this.form.value.testType,transferOutLaboratoryId:this.form.getRawValue().transferOutLaboratoryId});}};i.ɵfac=function(r){return new(r||i)(d(K),d(et),d(c),d(ot));},i.ɵcmp=C({type:i,selectors:[["sz-medisy-laboratory-analysis-test-type-add"]],standalone:!0,features:[b([c]),E,g],decls:6,vars:6,consts:()=>{let t;return t="\u0627\u0644\u0645\u062E\u0628\u0631 \u0627\u0644\u0645\u062D\u0648\u0644 \u0644\u0647",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testType",3,"laboratoryId","filters","szOptionSelected"],["formControlName","transferOutLaboratoryId","label",t,3,"source"],[3,"actions"]];},template:function(r,e){r&1&&(u(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"sz-medisy-laboratory-laboratory-test-type-search",2),T("szOptionSelected",function(y){return e.testTypeSelected(y);}),s(),S(4,qt,1,1,"sz-ui-form-field-select",3),s()(),u(5,"sz-ui-dialog-actions",4)),r&2&&(m("header",e.header),n(2),m("formGroup",e.form),n(),m("laboratoryId",e.laboratoryId)("filters",e.testTypesFilters),n(),_(4,e.isTranferOutEnabled()?4:-1),n(),m("actions",e.actions));},dependencies:[O,j,I,q,k,W,rt,it,Ot,gt,It,Dt,At],encapsulation:2});let o=i;return o;})();export{Ye as a};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/