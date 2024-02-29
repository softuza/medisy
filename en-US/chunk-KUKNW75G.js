import{a as pe}from"./chunk-7FA4ZYOE.js";import"./chunk-HGFYK4WW.js";import{a as E}from"./chunk-Z6KDOQJY.js";import{a as l,b as Ce,d as Oe,f as Ne,h,k as Te,l as ge}from"./chunk-SBZ6SE5I.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import{a as S}from"./chunk-4A4DWX3B.js";import{f as fe,g as Se,h as Ee,j as Me,k as L,l as Re}from"./chunk-ZZAXMQCW.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as A}from"./chunk-WZL7BTCT.js";import{d as de,j as I}from"./chunk-J5QZPDV7.js";import{a as K,b as Z,d as T,e as ee,g}from"./chunk-UN7ZV7OU.js";import{d as ne,e as ae,n as me,p as ue,q as _e,r as ce}from"./chunk-YSCQPVVT.js";import{c as le}from"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{d as se}from"./chunk-O6G4W4SF.js";import{h as te,i as oe}from"./chunk-3MHW6B4E.js";import{b as G,d as O,f as Y,g as w,j,k as X,m as x,p as k,q,s as H,t as W}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as N,e as Q}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{a as re,c as ie}from"./chunk-AHPLM44D.js";import{ia as J}from"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Cb as V,Cc as $,Hb as u,Ib as d,Jb as _,O as R,Tb as P,Vb as C,ha as y,ib as c,jb as a,jc as f,l as b,mc as B,qa as p,qb as U,ra as z,tb as F,xb as s}from"./chunk-MNGWH3SB.js";function De(i,t){i&1&&(u(0,"div",8)(1,"mat-form-field",9)(2,"label"),_(3,"input",10),d()(),u(4,"mat-form-field",9)(5,"label"),_(6,"input",11),d()()());}function be(i,t){i&1&&(u(0,"mat-form-field",9)(1,"label"),_(2,"input",12),d()());}var Le=(()=>{let t=class t extends fe{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(m=>E[m]),this.form=e.group({description:[n.referenceValueRule?.description,[O.maxLength(4096)]],comparisonOperator:new j(n.referenceValueRule?.comparisonOperator??E.Equal,[O.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[O.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(q),a(K),a(Z));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),U,B],decls:9,vars:8,consts:()=>{let o;o="Reference Group";let e;e="Comparison Operator";let r;r="Description";let n;n="Start";let m;m="End";let D;return D="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",m],["autocomplete","off","formControlName","value","matInput","","placeholder",D]];},template:function(e,r){e&1&&(_(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),F(5,De,7,0,"div",4)(6,be,3,0,"mat-form-field",5),_(7,"sz-ui-form-field-textarea",6),d()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",r.header),c(2),s("formGroup",r.form),c(),s("source",r.referenceGroups),c(),s("source",r.comparisonOperators)("localizedValue",!0),c(),V(5,r.isRange()?5:-1),c(),V(6,r.isRange()?-1:6),c(2),s("actions",r.actions));},dependencies:[W,X,G,Y,w,x,k,ae,ne,te,g,ee,oe,h,L,Se,Ee,ce,_e,ue],encapsulation:2});let i=t;return i;})();var he=(()=>{let t=class t{constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Oe(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns.push(l.uuid("id"),l.uuid("referenceValueId"),l.uuid("referenceGroupId"),l.string("referenceGroup.name"),l.enum("comparisonOperator").setContentFormat(m=>se(m.comparisonOperator)),l.number("value"),l.number("start"),l.number("end"),l.string("description"),l.date("createdAt",!1),l.date("updatedAt",!1),Ce.menu([I.edit(m=>this.openSaveComponent(m)),I.delete(m=>{this.openReferenceValueRuleDeleteComponent(m);})])),this.get();}openSaveComponent(o){this.dialog.open(Le,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Me,{data:Re.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.getQuery()).pipe(le(this.dataSource.indicator),R(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(T),a(N),a(S),a($));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules"]],features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="Add",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(u(0,"sz-ui-table-search-filter",0),C("changed",function(){return r.get();}),u(1,"button",1),C("click",function(){return r.openSaveComponent();}),u(2,"span"),P(3,2),d()()(),u(4,"sz-ui-table",3),C("update",function(){return r.get();}),d()),e&2&&(s("dataSource",r.dataSource),c(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[re,Te,Ne],encapsulation:2});let i=t;return i;})();var Ve=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new b(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(T),a(N));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(e,r){e&1&&_(0,"sz-ui-header-info",0)(1,"sz-medisy-laboratory-reference-value-rules"),e&2&&s("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description);},dependencies:[A,he],encapsulation:2});let i=t;return i;})();var Ie=[{path:"",component:Ve}];var Gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=z({type:t}),t.ɵinj=y({providers:[S],imports:[H,Q.forChild(Ie),g,h,de,J,ie,me,ge,pe,L,A]});let i=t;return i;})();export{Gt as ReferenceValueModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/