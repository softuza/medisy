import{a as C}from"./chunk-D2USBXNE.js";import{b as N,c as oe,e as ie,i as re,u as ne,v as ae}from"./chunk-47P25T34.js";import{a as O}from"./chunk-WBYPLE6B.js";import{a as _}from"./chunk-LAXXIHXK.js";import{c as K,h as Q,i as W,j as Z,l as ee,m as P,n as te}from"./chunk-SK6APAT5.js";import{b as A}from"./chunk-AQRFGV44.js";import"./chunk-I5QX4CCA.js";import{a as H,b as q,d as x,e as J,g as M}from"./chunk-3NLMA3OD.js";import{A as w,v as j,z as k}from"./chunk-7ERNPK3U.js";import{d,f as y,g as Y,k as L,m as z,p as $,q as V,t as F,y as B}from"./chunk-HA3OCK63.js";import{i as g}from"./chunk-UVKSHNQV.js";import"./chunk-QFHU2GEW.js";import"./chunk-SRHI3DNT.js";import{Ea as G,Ga as U,Ja as X}from"./chunk-T2UVNK6V.js";import{Eb as m,Fb as p,Gb as l,M as u,Qb as I,Sb as c,ea as b,fb as S,gb as a,gc as f,jc as v,na as T,nb as R,oa as h,ub as s}from"./chunk-T2ST7G6M.js";var _e=(()=>{let i=class i extends Q{constructor(o,e,t,r){super(t),this.mlabService=o,this.fb=e,this.dialog=t,this.data=r,this.form=e.group({name:[r?.name,[d.required,d.minLength(1)]],latinName:[r?.latinName,[d.required,d.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(_),a(V),a(H),a(q));},i.ɵcmp=T({type:i,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[f([]),R,v],decls:9,vars:3,consts:()=>{let o;o="Name";let e;e="Latin";let t;t="Abbreviation";let r;r="Description";let D;return D="Purpose",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","latinName","label",e],["formControlName","abbreviation","label",t],["formControlName","description","label",r],["formControlName","purpose","label",D],[3,"actions"]];},template:function(e,t){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),p()(),l(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",t.header),S(2),s("formGroup",t.form),S(6),s("actions",t.actions));},dependencies:[F,L,y,Y,z,$,M,J,P,W,Z,w,j,k],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(o,e){this.dialog=o,this.mlabService=e,this.title=O.testTypes,this.dataSource=new ie(),this.dataSource.addRows(oe.default([C.code().makeCompact(),C.nameHyperlink(t=>t.id,t=>t.name),N.text("abbreviation",O.abbreviation),C.createdAt(),N.menu([g.edit(t=>this.openSaveComponent(t)),g.delete(t=>this.openTestTypeDeleteComponent(t))])])),this.get();}openSaveComponent(o){this.dialog.open(_e,{data:o}).afterClosed().pipe(u(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(o){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.delete(o.id),o)}).afterClosed().pipe(u(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.buildRequest()).pipe(K(this.dataSource.indicator),u(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)(a(x),a(_));},i.ɵcmp=T({type:i,selectors:[["medisy-laboratory-test-types"]],features:[f([_])],decls:6,vars:4,consts:()=>{let o;return o="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"stateEnabled","dataSource","update"]];},template:function(e,t){e&1&&(l(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),c("changed",function(){return t.get();}),m(2,"button",2),c("click",function(){return t.openSaveComponent();}),m(3,"span"),I(4,3),p()()(),m(5,"sz-ui-table",4),c("update",function(){return t.get();}),p()),e&2&&(s("title",t.title),S(),s("dataSource",t.dataSource),S(4),s("stateEnabled",!0)("dataSource",t.dataSource));},dependencies:[G,ne,re,A],encapsulation:2});let n=i;return n;})();var Se=[{path:"",component:me}];var ot=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=b({providers:[_],imports:[B.forChild(Se),M,X,U,ae,P,A]});let n=i;return n;})();export{ot as TestTypesModule};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/