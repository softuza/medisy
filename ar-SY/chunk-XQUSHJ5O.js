import{a as pe}from"./chunk-MLK4TN6I.js";import"./chunk-5NLLDK4F.js";import{a as E}from"./chunk-PGV7TNPH.js";import{a as l,b as Ne,d as Re,f as Oe,h as A,k as ge,l as Le}from"./chunk-ITIEW4R3.js";import"./chunk-VSVSVBNB.js";import"./chunk-RMIHOFED.js";import{a as S}from"./chunk-UJRSINNB.js";import{e as fe,f as Se,g as Ee,i as Me,j as h,k as Ce}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as T}from"./chunk-SZPDKKKX.js";import{d as de,g as I}from"./chunk-T5LWAZSF.js";import{a as ue,b as _e,d as g,e as ce,g as L}from"./chunk-7HHYVUIJ.js";import{g as Z,h as ee,l as oe,m as re,v as ae,x as le,y as se,z as me}from"./chunk-PR23273C.js";import{Ca as ne,J as O,N as J,b as G,d as R,f as w,g as j,j as X,k as Y,m as x,p as k,q,s as H,t as W,ya as ie}from"./chunk-MNBERY7T.js";import"./chunk-4PXWNT7N.js";import{Ea as K,Ga as Q,Ja as te}from"./chunk-6NFGCLSN.js";import{Ab as V,Ac as $,Fb as u,Gb as d,Hb as _,M as C,Rb as z,Tb as N,fa as y,gb as c,hb as a,hc as f,kc as B,l as b,oa as p,ob as F,pa as U,rb as P,vb as s}from"./chunk-6OQDJKEQ.js";function De(i,t){i&1&&(u(0,"div",8)(1,"mat-form-field",9)(2,"label"),_(3,"input",10),d()(),u(4,"mat-form-field",9)(5,"label"),_(6,"input",11),d()()());}function be(i,t){i&1&&(u(0,"mat-form-field",9)(1,"label"),_(2,"input",12),d()());}var he=(()=>{let t=class t extends fe{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(m=>E[m]),this.form=e.group({description:[n.referenceValueRule?.description,[R.maxLength(4096)]],comparisonOperator:new X(n.referenceValueRule?.comparisonOperator??E.Equal,[R.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[R.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(q),a(ue),a(_e));},t.ɵcmp=p({type:t,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),F,B],decls:9,vars:8,consts:()=>{let o;o="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let e;e="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let r;r="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let m;m="\u0646\u0647\u0627\u064A\u0629";let D;return D="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",r],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",m],["autocomplete","off","formControlName","value","matInput","","placeholder",D]];},template:function(e,r){e&1&&(_(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),P(5,De,7,0,"div",4)(6,be,3,0,"mat-form-field",5),_(7,"sz-ui-form-field-textarea",6),d()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",r.header),c(2),s("formGroup",r.form),c(),s("source",r.referenceGroups),c(),s("source",r.comparisonOperators)("localizedValue",!0),c(),V(5,r.isRange()?5:-1),c(),V(6,r.isRange()?-1:6),c(2),s("actions",r.actions));},dependencies:[W,Y,G,w,j,x,k,re,oe,Z,L,ce,ee,A,h,Se,Ee,me,se,le],encapsulation:2});let i=t;return i;})();var Ae=(()=>{let t=class t{constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Re(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.fields.push(l.uuid("id"),l.uuid("referenceValueId"),l.uuid("referenceGroupId"),l.string("referenceGroup.name"),l.enum("comparisonOperator").setContentFormat(m=>ne(m.comparisonOperator)),l.number("value"),l.number("start"),l.number("end"),l.string("description"),l.date("createdAt",!1),l.date("updatedAt",!1),Ne.menu([I.edit(m=>this.openSaveComponent(m)),I.delete(m=>{this.openReferenceValueRuleDeleteComponent(m);})])),this.get();}openSaveComponent(o){this.dialog.open(he,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe(C(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Me,{data:Ce.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().pipe(C(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(ie(this.dataSource.indicator),C(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(g),a(O),a(S),a($));},t.ɵcmp=p({type:t,selectors:[["medisy-laboratory-reference-value-rules"]],features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(u(0,"sz-ui-table-search-filter",0),N("changed",function(){return r.get();}),u(1,"button",1),N("click",function(){return r.openSaveComponent();}),u(2,"span"),z(3,2),d()()(),u(4,"sz-ui-table",3),N("update",function(){return r.get();}),d()),e&2&&(s("dataSource",r.dataSource),c(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[K,ge,Oe],encapsulation:2});let i=t;return i;})();var Ve=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new b(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(g),a(O));},t.ɵcmp=p({type:t,selectors:[["medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(e,r){e&1&&_(0,"sz-ui-header-info",0)(1,"medisy-laboratory-reference-value-rules"),e&2&&s("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description);},dependencies:[T,Ae],encapsulation:2});let i=t;return i;})();var Ie=[{path:"",component:Ve}];var Gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=U({type:t}),t.ɵinj=y({providers:[S],imports:[H,J.forChild(Ie),L,A,de,te,Q,ae,Le,pe,h,T]});let i=t;return i;})();export{Gt as ReferenceValueModule};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/