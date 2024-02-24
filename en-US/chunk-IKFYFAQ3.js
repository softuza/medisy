import{a as s,b as re,d as ne,f as ae,h as se,k as le,l as me}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as u}from"./chunk-YDMDVI6M.js";import{e as Z,f as ee,g as te,i as oe,j as N,k as ie}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as g}from"./chunk-HKZIVJYM.js";import{g as h}from"./chunk-PNII32UO.js";import{a as G,b as j,d as X,e as Y,g as C}from"./chunk-V6ACGGWJ.js";import{l as J,p as K,q as Q,r as W}from"./chunk-VBUQVK7Q.js";import{c as q}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as x}from"./chunk-2W3OIU7Y.js";import{i as k}from"./chunk-OIFHB67M.js";import{d as T,f as y,g as O,k as D,m as z,p as V,q as F,s as $,t as M}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{c as B,e as U}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as w,c as H}from"./chunk-B3RLTRYJ.js";import{ha as P}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as p,Gb as S,Hb as d,M as c,Rb as I,Tb as f,fa as A,gb as m,hb as l,hc as v,kc as b,oa as E,ob as R,pa as L,vb as a}from"./chunk-UDYUYOMJ.js";var de=(()=>{let i=class i extends Z{constructor(t,e,r,o){super(r),this.mlabService=t,this.fb=e,this.dialog=r,this.data=o,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["latinName"]}),this.form=e.group({description:[o?.description,[T.maxLength(4096)]],testTypeId:[o?.testTypeId,[T.required]],unitId:[o?.unitId,[]],multiplier:[o?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(l(u),l(F),l(G),l(j));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-mlab-reference-values-save"]],standalone:!0,features:[v([]),R,b],decls:8,vars:5,consts:()=>{let t;t="Test Type";let e;e="Unit";let r;r="Multiplier";let o;return o="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",t,3,"source"],["formControlName","unitId","label",e,3,"source"],["formControlName","multiplier","label",r],["formControlName","description","label",o],[3,"actions"]];},template:function(e,r){e&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5),S()(),d(7,"sz-ui-dialog-actions",6)),e&2&&(a("header",r.header),m(2),a("formGroup",r.form),m(),a("source",r.testTypes),m(),a("source",r.units),m(3),a("actions",r.actions));},dependencies:[M,D,y,O,z,V,C,Y,k,se,N,ee,te,W,J,Q,K],encapsulation:2});let n=i;return n;})();var ue=(()=>{let i=class i{constructor(t,e,r){this.dialog=t,this.mlabService=e,this.router=r,this.title=x.referenceValues,this.dataSource=new ne(),this.dataSource.columns.push(s.uuid("id"),s.uuid("testTypeId"),s.uuid("unitId"),s.hyperlink("testType.name",o=>this.router.navigate([`/mlab/reference-values/${o.id}`])),s.string("unit").setContentFormat(o=>o.multiplier?`10^${o.multiplier.toExponential(0).split("e").map(_=>Number(_))[1]}/${o.unit?.abbreviation}`:o.unit?.abbreviation),s.number("multiplier"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),re.menu([h.edit(o=>this.openSaveComponent(o)),h.delete(o=>this.openReferenceValueDeleteComponent(o))])),this.get();}openSaveComponent(t){this.dialog.open(de,{data:t}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(t){this.dialog.open(oe,{data:ie.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe(q(this.dataSource.indicator),c(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(l(X),l(u),l(B));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-mlab-reference-values"]],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(d(0,"sz-ui-header-info",0),p(1,"sz-ui-table-search-filter",1),f("changed",function(){return r.get();}),p(2,"button",2),f("click",function(){return r.openSaveComponent();}),p(3,"span"),I(4,3),S()()(),p(5,"sz-ui-table",4),f("update",function(){return r.get();}),S()),e&2&&(a("title",r.title),m(),a("dataSource",r.dataSource),m(4),a("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[w,g,le,ae],encapsulation:2});let n=i;return n;})();var _e=[{path:"",component:ue}];var mt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=L({type:i}),i.ɵinj=A({providers:[u],imports:[$,M,U.forChild(_e),C,P,H,g,me,N]});let n=i;return n;})();export{mt as ReferenceValuesModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/