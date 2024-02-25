import{a as fe}from"./chunk-UH4N7RZF.js";import"./chunk-HGFYK4WW.js";import{a as E}from"./chunk-Z6KDOQJY.js";import{a as l,b as Oe,d as Ne,f as Te,h,k as ge,l as Ae}from"./chunk-YTTKWU5B.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-F67EX4OT.js";import{a as S}from"./chunk-IOPD2V3H.js";import{e as Se,f as Ee,g as Me,i as Re,j as L,k as Ce}from"./chunk-6NGWUBFB.js";import"./chunk-CZ6HOLLH.js";import"./chunk-MD2D7NOU.js";import{b as A}from"./chunk-FDR5DFP4.js";import{d as pe,j as I}from"./chunk-HVOKSMGD.js";import{a as Q,b as Z,d as T,e as ee,g}from"./chunk-UN7ZV7OU.js";import{d as ne,e as ae,n as ue,p as _e,q as ce,r as de}from"./chunk-76JBXDWC.js";import{c as le}from"./chunk-E2TGOG7B.js";import"./chunk-SCUUWQJ7.js";import"./chunk-RH3HJREX.js";import{c as se,d as me}from"./chunk-4U6LIYO2.js";import{h as te,i as oe}from"./chunk-3MHW6B4E.js";import{b as G,d as O,f as Y,g as w,j,k as X,m as x,p as k,q,s as H,t as W}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as N,e as J}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as re,c as ie}from"./chunk-AHPLM44D.js";import{ia as K}from"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Cb as V,Cc as $,Hb as u,Ib as d,Jb as _,O as R,Tb as P,Vb as C,ha as y,ib as c,jb as a,jc as f,l as b,mc as B,qa as p,qb as F,ra as z,tb as U,xb as s}from"./chunk-MNGWH3SB.js";function be(i,t){i&1&&(u(0,"div",8)(1,"mat-form-field",9)(2,"label"),_(3,"input",10),d()(),u(4,"mat-form-field",9)(5,"label"),_(6,"input",11),d()()());}function ye(i,t){i&1&&(u(0,"mat-form-field",9)(1,"label"),_(2,"input",12),d()());}var he=(()=>{let t=class t extends Se{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(m=>E[m]),this.form=e.group({description:[n.referenceValueRule?.description,[O.maxLength(4096)]],comparisonOperator:new j(n.referenceValueRule?.comparisonOperator??E.Equal,[O.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[O.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(q),a(Q),a(Z));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),F,B],decls:9,vars:8,consts:()=>{let o;o="Reference Group";let e;e="Comparison Operator";let r;r="Description";let n;n="Start";let m;m="End";let D;return D="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",m],["autocomplete","off","formControlName","value","matInput","","placeholder",D]];},template:function(e,r){e&1&&(_(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),U(5,be,7,0,"div",4)(6,ye,3,0,"mat-form-field",5),_(7,"sz-ui-form-field-textarea",6),d()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",r.header),c(2),s("formGroup",r.form),c(),s("source",r.referenceGroups),c(),s("source",r.comparisonOperators)("localizedValue",!0),c(),V(5,r.isRange()?5:-1),c(),V(6,r.isRange()?-1:6),c(2),s("actions",r.actions));},dependencies:[W,X,G,Y,w,x,k,ae,ne,te,g,ee,oe,h,L,Ee,Me,de,ce,_e],encapsulation:2});let i=t;return i;})();var Ve=(()=>{let t=class t{constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Ne(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns.push(l.uuid("id"),l.uuid("referenceValueId").setFieldFilterable(!1),l.uuid("referenceGroupId").setFieldFilterable(!1),l.string("referenceGroup.name").setName(se.referenceGroup),l.enum("comparisonOperator").setContentFormat(m=>me(m.comparisonOperator)),l.number("value"),l.number("start"),l.number("end"),l.string("description"),l.date("createdAt",!1),l.date("updatedAt",!1),Oe.menu([I.edit(m=>this.openSaveComponent(m)),I.delete(m=>{this.openReferenceValueRuleDeleteComponent(m);})])),this.get();}openSaveComponent(o){this.dialog.open(he,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Re,{data:Ce.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(le(this.dataSource.indicator),R(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(T),a(N),a(S),a($));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules"]],features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(u(0,"sz-ui-table-search-filter",0),C("changed",function(){return r.get();}),u(1,"button",1),C("click",function(){return r.openSaveComponent();}),u(2,"span"),P(3,2),d()()(),u(4,"sz-ui-table",3),C("update",function(){return r.get();}),d()),e&2&&(s("dataSource",r.dataSource),c(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[re,ge,Te],encapsulation:2});let i=t;return i;})();var Ie=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new b(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(T),a(N));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(e,r){e&1&&_(0,"sz-ui-header-info",0)(1,"sz-medisy-laboratory-reference-value-rules"),e&2&&s("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description);},dependencies:[A,Ve],encapsulation:2});let i=t;return i;})();var ve=[{path:"",component:Ie}];var Yt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=z({type:t}),t.ɵinj=y({providers:[S],imports:[H,J.forChild(ve),g,h,pe,K,ie,ue,Ae,fe,L,A]});let i=t;return i;})();export{Yt as ReferenceValueModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/