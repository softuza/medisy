import{a as Re}from"./chunk-PI23EM4P.js";import"./chunk-EYGAI5PJ.js";import{a as Oe,c as Me,e as Ae,g,j as Ce,k as Te,l as s}from"./chunk-34MSZMSB.js";import"./chunk-6DXJR33O.js";import"./chunk-DI33WAJD.js";import{a as S}from"./chunk-UUIAGLIW.js";import{e as de,f as pe,g as fe,i as Ee,j as h,k as Se}from"./chunk-JH67BC54.js";import"./chunk-DIVK5N2T.js";import{b as P}from"./chunk-WN7LVT7X.js";import{d as ce,f as V}from"./chunk-MWQCS4K5.js";import{a as ue,b as me,d as T,e as _e,g as N}from"./chunk-NAVTPQ6X.js";import{g as Z,h as ee,l as oe,m as re,w as ae,x as ne,y as le,z as se}from"./chunk-OWPLOJQP.js";import{J as C,N as J,b as B,d as A,f as Y,g as q,j as w,k as j,m as X,p as x,q as W,s as k,t as H,za as ie}from"./chunk-YSD3E7UX.js";import"./chunk-QYJYVPVW.js";import{Ea as K,Ga as Q,Ja as te}from"./chunk-NQOK3G2M.js";import{Ab as L,Bc as G,Fb as _,Gb as p,Hb as c,M as O,Rb as $,Tb as M,fa as y,gb as d,hb as l,hc as E,kc as b,l as D,oa as f,ob as F,pa as z,rb as U,vb as u}from"./chunk-XEAZENSO.js";var n=function(t){return t.Equal="Equal",t.GreaterThan="GreaterThan",t.GreaterThanOrEqual="GreaterThanOrEqual",t.LessThan="LessThan",t.LessThanOrEqual="LessThanOrEqual",t.NotEqual="Not Equal",t.RangeWithBoundaries="RangeWithBoundaries",t.RangeWithoutBoundaries="RangeWithoutBoundaries",t;}(n||{});function Ne(t,e){switch(t){case n.Equal:return e?"==":"\u062A\u0633\u0627\u0648\u064A";case n.GreaterThan:return e?">":"\u0623\u0643\u0628\u0631 \u0645\u0646";case n.GreaterThanOrEqual:return e?">=":"\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.LessThan:return e?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case n.LessThanOrEqual:return e?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.RangeWithBoundaries:return e?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case n.RangeWithoutBoundaries:return e?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case n.NotEqual:return e?"!=":"\u0644\u0627 \u062A\u0633\u0627\u0648\u064A";default:return"";}}function Ie(t,e){t&1&&(_(0,"div",8)(1,"mat-form-field",9)(2,"label"),c(3,"input",10),p()(),_(4,"mat-form-field",9)(5,"label"),c(6,"input",11),p()()());}function De(t,e){t&1&&(_(0,"mat-form-field",9)(1,"label"),c(2,"input",12),p()());}var he=(()=>{let e=class e extends de{constructor(r,o,i,a){super(i),this.mlabService=r,this.fb=o,this.dialog=i,this.data=a,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(n).map(m=>n[m]),this.form=o.group({description:[a.referenceValueRule?.description,[A.maxLength(4096)]],comparisonOperator:new w(a.referenceValueRule?.comparisonOperator??n.Equal,[A.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[A.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===n.RangeWithBoundaries||this.form.value.comparisonOperator===n.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};e.ɵfac=function(o){return new(o||e)(l(S),l(W),l(ue),l(me));},e.ɵcmp=f({type:e,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[E([]),F,b],decls:9,vars:8,consts:()=>{let r;r="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let o;o="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let i;i="\u0627\u0644\u0648\u0635\u0641";let a;a="\u0628\u062F\u0627\u064A\u0629";let m;m="\u0646\u0647\u0627\u064A\u0629";let I;return I="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",r,3,"source"],["formControlName","comparisonOperator","label",o,3,"source","localizedValue"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4"],["class","tw-flex-1"],["formControlName","description","label",i],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",a],["autocomplete","off","formControlName","end","matInput","","placeholder",m],["autocomplete","off","formControlName","value","matInput","","placeholder",I]];},template:function(o,i){o&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),U(5,Ie,7,0,"div",4)(6,De,3,0,"mat-form-field",5),c(7,"sz-ui-form-field-textarea",6),p()(),c(8,"sz-ui-dialog-actions",7)),o&2&&(u("header",i.header),d(2),u("formGroup",i.form),d(),u("source",i.referenceGroups),d(),u("source",i.comparisonOperators)("localizedValue",!0),d(),L(5,i.isRange()?5:-1),d(),L(6,i.isRange()?-1:6),d(2),u("actions",i.actions));},dependencies:[H,j,B,Y,q,X,x,re,oe,Z,N,_e,ee,g,h,pe,fe,se,le,ne],encapsulation:2});let t=e;return t;})();var ge=(()=>{let e=class e{constructor(r,o,i,a){this.dialog=r,this.route=o,this.mlabService=i,this.locale=a,this.dataSource=new Me(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.fields.push(s.uuid("id"),s.uuid("referenceValueId"),s.uuid("referenceGroupId"),s.string("referenceGroup.name"),s.enum("comparisonOperator").setContentFormat(m=>Ne(m.comparisonOperator,!1)),s.number("value"),s.number("start"),s.number("end"),s.string("description"),s.date("createdAt",!1),s.date("updatedAt",!1),Oe.menu([V.edit(m=>this.openSaveComponent(m)),V.delete(m=>{this.openReferenceValueRuleDeleteComponent(m);})])),this.get();}openSaveComponent(r){this.dialog.open(he,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:r}}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Ee,{data:Se.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().pipe(O(1)).subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.buildRequest()).pipe(ie(this.dataSource.indicator),O(1)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(o){return new(o||e)(l(T),l(C),l(S),l(G));},e.ɵcmp=f({type:e,selectors:[["medisy-laboratory-reference-value-rules"]],features:[E([])],decls:5,vars:3,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],r,[3,"stateEnabled","dataSource","update"]];},template:function(o,i){o&1&&(_(0,"sz-ui-table-search-filter",0),M("changed",function(){return i.get();}),_(1,"button",1),M("click",function(){return i.openSaveComponent();}),_(2,"span"),$(3,2),p()()(),_(4,"sz-ui-table",3),M("update",function(){return i.get();}),p()),o&2&&(u("dataSource",i.dataSource),d(4),u("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[K,Ce,Ae],encapsulation:2});let t=e;return t;})();var Le=(()=>{let e=class e{constructor(r,o){this.dialog=r,this.route=o,this.alert$=new D(),this.referenceValue=this.route.snapshot.data.referenceValue;}};e.ɵfac=function(o){return new(o||e)(l(T),l(C));},e.ɵcmp=f({type:e,selectors:[["medisy-laboratory-reference-value"]],features:[E([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(o,i){o&1&&c(0,"sz-ui-header-info",0)(1,"medisy-laboratory-reference-value-rules"),o&2&&u("title",i.referenceValue.testType.name)("subtitle",i.referenceValue.description);},dependencies:[P,ge],encapsulation:2});let t=e;return t;})();var Ve=[{path:"",component:Le}];var qt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=z({type:e}),e.ɵinj=y({providers:[S],imports:[k,J.forChild(Ve),N,g,ce,te,Q,ae,Te,Re,h,P]});let t=e;return t;})();export{qt as ReferenceValueModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/