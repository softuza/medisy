import{a as De}from"./chunk-YO2NPNFJ.js";import{a as Re,c as ve,e as Le,f as Fe,g as ze}from"./chunk-A7K6ECFI.js";import{a as c}from"./chunk-JW4WPU2G.js";import{e as Me,g as be,h as Ie,k as Oe}from"./chunk-JPJS6T7S.js";import{a as oe,b as ie,e as re,g as ne}from"./chunk-F346JCWS.js";import{a as _e,b as ue,e as Se,f as fe,g as Te,h as Ee,p as Ae,q as ge}from"./chunk-B3PKZLMT.js";import{c as he,d as ye}from"./chunk-IQYFXR2O.js";import{b as x,g as de}from"./chunk-4PI7GXRI.js";import{a as pe,b as ce}from"./chunk-5BXHORCT.js";import{c as Ce}from"./chunk-NISJVZZ2.js";import{a as ae,b as se,h as le,i as me}from"./chunk-7JHWGYAB.js";import{b as G,d as P,e as j,f as b,g as k,k as X,l as W,m as K,p as U,q as J,t as I}from"./chunk-KRLGIY64.js";import{aa as Q,da as Z,ha as ee,ia as te}from"./chunk-WZY2TOXR.js";import{Cb as T,Eb as F,Fb as z,Gb as D,Hb as l,Ib as a,Jb as _,Nb as Y,O as w,Tb as N,Vb as S,Xb as u,a as $,b as V,ea as O,fc as A,gc as h,hc as q,ib as n,ic as B,jb as p,jc as g,mb as H,mc as M,pa as R,qa as y,qb as C,tb as E,va as v,wa as L,xb as m}from"./chunk-XKM43KUH.js";function xe(o,r){if(o&1){let s=Y();l(0,"mat-chip-row",7),S("removed",function(){let t=v(s).$implicit,d=u(2);return L(d.removeSelection(t));}),h(1),l(2,"button",8)(3,"mat-icon"),h(4,"cancel"),a()()();}if(o&2){let s=r.$implicit,e=u(2);n(),B(" ",e.getSelectionFormat(s)," ");}}function $e(o,r){if(o&1){let s=Y();l(0,"mat-chip-grid",null,4),z(2,xe,5,1,"mat-chip-row",null,F),a(),l(4,"input",5,6),S("matChipInputTokenEnd",function(){v(s);let i=u();return L(i.addSelection());}),a();}if(o&2){let s=A(1),e=u(),i=A(7);n(2),D(e.selections),n(2),m("matAutocomplete",i)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Ve(o,r){if(o&1&&_(0,"input",9,6),o&2){let s=u(),e=A(7);m("matAutocomplete",e)("formControl",s.control);}}function we(o,r){if(o&1&&(l(0,"mat-option",10),h(1),a()),o&2){let s=r.$implicit,e=u();m("value",e.getOptionValue(s)),n(),B(" ",e.getOptionContent(s)," ");}}function He(o,r){o&1&&(l(0,"mat-error"),N(1,11),a());}function qe(o,r){o&1&&(l(0,"mat-error"),N(1,12),a());}function Ge(o,r){o&1&&_(0,"mat-progress-bar",3);}var Ye=(()=>{let r=class r extends Ee{constructor(e,i){super(e),this.ngControl=e,this.mlatService=i,this.query=null,this.label=Ce.testType,this.laboratoryId=O(""),this.filters=O([]),this.szOptionContentFn=t=>t.testType.name,this.szOptionValueFn=t=>t,this.szOptionFormatFn=t=>t?t.testType.name:"",H(()=>this.refresh(),{allowSignalWrites:!0});}ngOnInit(){this.control=this.ngControl.control,this.listenChanges(),this.fetch();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(ye(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mlatService.laboratories.testTypes.get(this.laboratoryId(),V($({query:this.query},de.minimal()),{orderBy:["-isFavorite","testType.name"],filters:this.filters()})).pipe(he(this.indicator),w(1)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,this.afterSourceUpdated();});}};r.ɵfac=function(i){return new(i||r)(p(j,10),p(c));},r.ɵcmp=y({type:r,selectors:[["sz-medisy-laboratory-laboratory-test-type-search"]],inputs:{query:"query",laboratoryId:[R.SignalBased,"laboratoryId"],filters:[R.SignalBased,"filters"]},standalone:!0,features:[g([c]),C,M],decls:13,vars:7,consts:()=>{let e;e="This field is required";let i;return i="This field is not valid",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],e,i];},template:function(i,t){i&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),h(3),a(),E(4,$e,6,4)(5,Ve,2,2),l(6,"mat-autocomplete",1,2),S("optionSelected",function(f){return t.optionSelected(f);})("szScrolled",function(){return t.scroll();}),z(8,we,2,2,"mat-option",10,F),a(),E(10,He,2,0,"mat-error")(11,qe,2,0,"mat-error"),a(),E(12,Ge,1,0,"mat-progress-bar",3),a()),i&2&&(n(3),q(t.label),n(),T(4,t.multiple?4:5),n(2),m("displayWith",t.szOptionFormatFn)("szScrollIgnored",t.indicator()),n(2),D(t.options),n(2),T(10,t.control.hasError("required")?10:-1),n(),T(11,t.control.hasError("invalid")?11:-1),n(),T(12,t.indicator()?12:-1));},dependencies:[I,G,b,W,me,le,ae,se,Te,Se,Q,fe,ce,pe,ue,_e,Z,ze,Le,Fe,Re,ve,te,ee,Ae],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=r;return o;})();var Nt=(()=>{let r=class r extends Me{constructor(e,i,t,d){super(i),this.fb=e,this.dialog=i,this.mlabService=t,this.data=d,this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"]}),this.laboratoryOptionValueFn=f=>f,this.testTypesFilters=[],this.laboratoryId=this.data,this.laboratorySelected(d),this.form=e.group({laboratory:[this.laboratoryId,[P.required]],testType:e.control(null,[P.required,De()])});}laboratorySelected(e){this.data===e?this.testTypesFilters=[{field:"locallyEnabled",op:x.Equal,value:this.data===e}]:this.testTypesFilters=[{field:"forwardEnabled",op:x.Equal,value:this.data!==e}],this.laboratoryId=e;}submit(){this.IsValid()&&this.dialog.close(this.form.value.testType);}};r.ɵfac=function(i){return new(i||r)(p(J),p(oe),p(c),p(ie));},r.ɵcmp=y({type:r,selectors:[["sz-medisy-laboratory-analysis-test-type-add"]],standalone:!0,features:[g([c]),C,M],decls:6,vars:6,consts:()=>{let e;return e="Laboratory",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","laboratory","label",e,3,"source","szOptionSelected"],["formControlName","testType",3,"laboratoryId","filters"],[3,"actions"]];},template:function(i,t){i&1&&(_(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"sz-ui-form-field-select",2),S("szOptionSelected",function(f){return t.laboratorySelected(f);}),a(),_(4,"sz-medisy-laboratory-laboratory-test-type-search",3),a()(),_(5,"sz-ui-dialog-actions",4)),i&2&&(m("header",t.header),n(2),m("formGroup",t.form),n(),m("source",t.laboratories),n(),m("laboratoryId",t.laboratoryId)("filters",t.testTypesFilters),n(),m("actions",t.actions));},dependencies:[I,X,b,k,K,U,ne,re,Oe,be,Ie,Ye,ge],encapsulation:2});let o=r;return o;})();export{Ye as a,Nt as b};/**i18n:df8cf631ed0f0b47c0cc2884b94f4c6fb066e2bafd1a49fc4d1fe04bf8893d3a*/