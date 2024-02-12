import{b as he}from"./chunk-QP7T6DKG.js";import{a as be,c as Re,e as ge,g as L,q as Oe,r as ye,s as p}from"./chunk-QPBSIFHN.js";import"./chunk-OLH6GLAT.js";import{a as v}from"./chunk-63BDPR5Z.js";import{a as M}from"./chunk-3HOMBLD6.js";import{a as T,h as _e,i as fe,j as Se,l as Ee,m as Ce,n as Me}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as ue}from"./chunk-AZIM6N3H.js";import{g as P}from"./chunk-F2NCOJMX.js";import{a as se,b as me,d as de,e as ce,g as pe}from"./chunk-GX7FEJ3W.js";import{a as Z,b as ee,g as te,o as ae,w as ne,x as le}from"./chunk-HN3QCICR.js";import{J as q,N as J,Q as oe,R as ie,d as G,e as B,f as O,g as j,k,l as H,m as X,p as w,q as Y,t as y,xa as re}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as Q,Ga as W,ya as K}from"./chunk-ILHRA673.js";import{Bb as D,Cb as V,Db as z,Eb as n,Fb as l,Gb as c,M as _,Qb as S,Sb as E,Ub as F,a as N,b as I,dc as g,ec as A,fb as a,gb as m,gc as $,jc as C,kc as U,lc as x,na as f,nb as R,qb as h,ub as d,zb as u}from"./chunk-ORGLCS6N.js";function Pe(o,r){if(o&1&&(n(0,"mat-label"),g(1),l()),o&2){let b=F();a(),A(b.label);}}function Ne(o,r){o&1&&(n(0,"mat-option"),g(1,"-"),l());}function Ie(o,r){if(o&1&&(n(0,"mat-option",4),g(1),l()),o&2){let b=r.$implicit,t=F();d("value",t.getOptionValue(b)),a(),A(t.getOptionContent(b));}}function De(o,r){o&1&&(n(0,"mat-error"),S(1,5),l());}function Ve(o,r){o&1&&(n(0,"mat-error"),S(1,6),l());}function ze(o,r){o&1&&(n(0,"mat-error"),S(1,7),l());}function $e(o,r){o&1&&c(0,"mat-progress-bar",3);}var Le=(()=>{let r=class r extends ae{constructor(t,i){super(t),this.ngControl=t,this.mlabService=i,this.label=v.referenceValue,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.szOptionContentFn=e=>e.testClass.name;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.referenceValues.get(I(N({},re.unpaged()),{includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds})).pipe(T(this.indicator),_(1)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages;});}};r.ɵfac=function(i){return new(i||r)(m(B,10),m(M));},r.ɵcmp=f({type:r,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[$([]),R,C],decls:11,vars:10,consts:()=>{let t;t="This field is required";let i;i="This field does not the minimum length";let e;return e="This field exceeds the maximum length",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],t,i,e];},template:function(i,e){i&1&&(n(0,"div",0)(1,"mat-form-field",1),h(2,Pe,2,1,"mat-label"),n(3,"mat-select",2),E("szScrolled",function(){return e.scroll();}),h(4,Ne,2,0,"mat-option"),V(5,Ie,2,2,"mat-option",4,D),l(),h(7,De,2,0,"mat-error")(8,Ve,2,0,"mat-error")(9,ze,2,0,"mat-error"),l(),h(10,$e,1,0,"mat-progress-bar",3),l()),i&2&&(a(2),u(2,e.label?2:-1),a(),d("formControl",e.control)("multiple",e.multiple)("placeholder",e.placeholder)("szScrollIgnored",e.indicator()),a(),u(4,e.emptyOption?4:-1),a(),z(e.options),a(2),u(7,e.control.hasError("required")?7:-1),a(),u(8,e.control.hasError("min")?8:-1),a(),u(9,e.control.hasError("max")?9:-1),a(),u(10,e.indicator()?10:-1));},dependencies:[y,O,H,le,te,Z,ee,ne,K,ie,oe,he],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let o=r;return o;})();var xe=()=>[],Ge=o=>[o],Fe=(()=>{let r=class r extends _e{constructor(t,i,e,s){super(e),this.mlabService=t,this.fb=i,this.dialog=e,this.data=s,this.form=i.group({referenceValueId:[s.laboratoryReferenceValue?.referenceValueId,[G.required]]});}submit(){this.IsValid()&&(this.data.laboratoryReferenceValue?this.save(this.mlabService.laboratories.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value)):this.save(this.mlabService.laboratories.referenceValues.create(this.data.laboratoryId,this.form.value)));}};r.ɵfac=function(i){return new(i||r)(m(M),m(Y),m(se),m(me));},r.ɵcmp=f({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[R,C],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(i,e){i&1&&(c(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),c(3,"medisy-form-field-reference-value",2),l()(),c(4,"sz-ui-dialog-actions",3)),i&2&&(d("header",e.header),a(2),d("formGroup",e.form),a(),d("excludeLaboratoryIds",e.data.laboratoryReferenceValue?U(4,xe):x(5,Ge,e.data.laboratoryId)),a(),d("actions",e.actions));},dependencies:[y,k,O,j,X,w,Ce,fe,Se,pe,ce,L,Le],encapsulation:2});let o=r;return o;})();var zt=(()=>{let r=class r{constructor(t,i,e){this.dialog=t,this.mlabService=i,this.route=e,this.title=v.referenceValues,this.dataSource=new Re(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.fields.push(p.uuid("id"),p.uuid("laboratoryId"),p.uuid("referenceValueId"),p.string("referenceValue.testClass.name"),p.string("referenceValue.unit.abbreviation"),p.date("createdAt",!1),p.date("updatedAt",!1),be.menu([P.edit(s=>this.openSaveComponent(s)),P.delete(s=>this.openLaboratoryReferenceValueDeleteComponent(s))])),this.get();}openSaveComponent(t){this.dialog.open(Fe,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:t}}).afterClosed().pipe(_(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openLaboratoryReferenceValueDeleteComponent(t){this.dialog.open(Ee,{data:Me.delete(this.mlabService.laboratories.referenceValues.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(_(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.laboratories.referenceValues.get(this.laboratory.id,this.dataSource.buildRequest()).pipe(T(this.dataSource.indicator)).pipe(_(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(i){return new(i||r)(m(de),m(M),m(q));},r.ɵcmp=f({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[C],decls:6,vars:5,consts:()=>{let t;return t="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(i,e){i&1&&(c(0,"sz-ui-header-info",0),n(1,"sz-ui-table-search-filter",1),E("changed",function(){return e.get();}),n(2,"button",2),E("click",function(){return e.openSaveComponent();}),n(3,"span"),S(4,3),l()()(),n(5,"sz-ui-table",4),E("update",function(){return e.get();}),l()),i&2&&(d("title",e.title)("subtitle",e.laboratory.name),a(),d("dataSource",e.dataSource),a(4),d("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[J,ue,ye,Oe,ge,L,W,Q],encapsulation:2});let o=r;return o;})();export{zt as LaboratoryReferenceValuesComponent};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/