import{a as de}from"./chunk-RQBDCNFH.js";import"./chunk-DPWJWWKG.js";import{a as E}from"./chunk-LNG2NYUW.js";import{a as s,b as Ce,d as Oe,f as Ne,i as Te,j as ge}from"./chunk-NKCTOLS4.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{a as S}from"./chunk-5WIX5DGJ.js";import{e as fe,f as Se,g as Ee,i as Me,j as V,k as Re}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as L}from"./chunk-4MXM7XAT.js";import{a as pe,g as I}from"./chunk-4TWVI3ON.js";import{a as K,b as Z,d as T,e as ee,g}from"./chunk-27MVQMP7.js";import{a as ne,b as ae,o as A,q as me,s as ue,u as _e,v as ce}from"./chunk-SU66CAKG.js";import{c as le}from"./chunk-PPJOQ6MW.js";import"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{d as se}from"./chunk-LJX5OH5V.js";import{h as te,i as oe}from"./chunk-YLP7B5XO.js";import{b as G,d as O,f as Y,g as w,j,k as X,m as x,p as k,q,s as H,t as W}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{a as N,e as Q}from"./chunk-WDXIMTZB.js";import"./chunk-ZMNH44QU.js";import{a as re,c as ie}from"./chunk-62CSTUMD.js";import{ha as J}from"./chunk-47FGXJPX.js";import"./chunk-AFZEN52O.js";import{Dc as $,Eb as h,Jb as _,Kb as p,Lb as c,P as R,Vb as F,Wb as C,eb as m,fb as a,l as b,la as d,lc as f,ma as y,mc as B,qb as U,vb as P,xa as z,zb as l}from"./chunk-HCTSIB2L.js";function De(i,t){i&1&&(_(0,"div",8)(1,"mat-form-field",9)(2,"label"),c(3,"input",10),p()(),_(4,"mat-form-field",9)(5,"label"),c(6,"input",11),p()()());}function be(i,t){i&1&&(_(0,"mat-form-field",9)(1,"label"),c(2,"input",12),p()());}var Le=(()=>{let t=class t extends fe{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(u=>E[u]),this.form=e.group({description:[n.referenceValueRule?.description,[O.maxLength(4096)]],comparisonOperator:new j(n.referenceValueRule?.comparisonOperator??E.Equal,[O.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[O.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(q),a(K),a(Z));},t.ɵcmp=d({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),U,B],decls:9,vars:8,consts:()=>{let o;o="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let e;e="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let r;r="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let u;u="\u0646\u0647\u0627\u064A\u0629";let D;return D="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",u],["autocomplete","off","formControlName","value","matInput","","placeholder",D]];},template:function(e,r){e&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),P(5,De,7,0,"div",4)(6,be,3,0,"mat-form-field",5),c(7,"sz-ui-form-field-textarea",6),p()(),c(8,"sz-ui-dialog-actions",7)),e&2&&(l("header",r.header),m(2),l("formGroup",r.form),m(),l("source",r.referenceGroups),m(),l("source",r.comparisonOperators)("localizedValue",!0),m(),h(5,r.isRange()?5:-1),m(),h(6,r.isRange()?-1:6),m(2),l("actions",r.actions));},dependencies:[W,X,G,Y,w,x,k,ae,ne,te,g,ee,oe,A,V,Se,Ee,ce,_e,ue],encapsulation:2});let i=t;return i;})();var Ve=(()=>{let t=class t{set referenceValue(o){this._referenceValue=o,this.get();}get referenceValue(){return this._referenceValue;}constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Oe(),this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("referenceValueId"),s.uuid("referenceGroupId"),s.string("referenceGroup.name"),s.enum("comparisonOperator").setValueGetter(u=>se(u.comparisonOperator)),s.number("value"),s.number("start"),s.number("end"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),Ce.menu([I.edit(u=>this.openSaveComponent(u)),I.delete(u=>{this.openReferenceValueRuleDeleteComponent(u);})]));}openSaveComponent(o){this.dialog.open(Le,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Me,{data:Re.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().pipe(R(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.getQuery()).pipe(le(this.dataSource.indicator),R(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(T),a(N),a(S),a($));},t.ɵcmp=d({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:"referenceValue"},features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(_(0,"sz-ui-table-search-filter",0),C("changed",function(){return r.get();}),_(1,"button",1),C("click",function(){return r.openSaveComponent();}),_(2,"span"),F(3,2),p()()(),_(4,"sz-ui-table",3),C("update",function(){return r.get();}),p()),e&2&&(l("dataSource",r.dataSource),m(4),l("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[re,Te,Ne],encapsulation:2});let i=t;return i;})();var he=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new b(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(T),a(N));},t.ɵcmp=d({type:t,selectors:[["sz-medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:3,consts:[[3,"title","subtitle"],[3,"referenceValue"]],template:function(e,r){e&1&&c(0,"sz-ui-header-info",0)(1,"sz-medisy-laboratory-reference-value-rules",1),e&2&&(l("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description),m(),l("referenceValue",r.referenceValue));},dependencies:[L,Ve],encapsulation:2});let i=t;return i;})();var Ie=[{path:"",component:he}];var Yt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=y({type:t}),t.ɵinj=z({providers:[S],imports:[H,Q.forChild(Ie),g,A,pe,J,ie,me,ge,de,V,L]});let i=t;return i;})();export{Yt as ReferenceValueModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/