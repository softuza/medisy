import{a as de}from"./chunk-WRFLPEIA.js";import"./chunk-R3TS6Q6E.js";import{a as E}from"./chunk-SYMCIFNI.js";import{a as l,b as Re,d as Ce,f as Oe,i as Ne,j as Te}from"./chunk-Y4PXEVQT.js";import"./chunk-3HDGXHIW.js";import"./chunk-75JUXYDU.js";import{a as S}from"./chunk-KR7XUBMS.js";import{e as pe,f as fe,g as Se,i as Ee,j as L,k as Me}from"./chunk-HPZYOYE3.js";import"./chunk-OMX5NFNR.js";import{b as A}from"./chunk-ABFS4SEB.js";import{d as ce,j as V}from"./chunk-TOOE4O45.js";import{a as J,b as K,d as N,e as Z,g as T}from"./chunk-IZ32KJRN.js";import{a as ie,b as ne,o as g,q as se,s as me,u as ue,v as _e}from"./chunk-LMOPJ72O.js";import{c as ae}from"./chunk-2AWDEL7N.js";import"./chunk-624ACHJE.js";import"./chunk-M7S7TTRL.js";import{d as le}from"./chunk-XNWVOXZG.js";import{h as ee,i as te}from"./chunk-HAIELHQF.js";import{b as $,d as C,f as G,g as Y,j,k as X,m as w,p as x,q as k,s as q,t as H}from"./chunk-4JTOADFE.js";import"./chunk-QQ2344AC.js";import{a as O,e as W}from"./chunk-FA7A5F5K.js";import"./chunk-AXAUKDRF.js";import{a as oe,c as re}from"./chunk-AYP3BRJS.js";import{ha as Q}from"./chunk-HULPMCJY.js";import"./chunk-QECXQAYY.js";import{Cb as s,Gc as B,Hb as h,Mb as u,Nb as d,Ob as _,Yb as P,Zb as R,gb as c,hb as a,ka as b,l as D,oc as f,pc as F,tb as z,ua as p,va as y,yb as U}from"./chunk-XJDYJDV7.js";function ve(i,t){i&1&&(u(0,"div",4)(1,"mat-form-field",5)(2,"label"),_(3,"input",8),d()(),u(4,"mat-form-field",5)(5,"label"),_(6,"input",9),d()()());}function De(i,t){i&1&&(u(0,"mat-form-field",5)(1,"label"),_(2,"input",10),d()());}var Ae=(()=>{let t=class t extends pe{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(m=>E[m]),this.form=e.group({description:[n.referenceValueRule?.description,[C.maxLength(4096)]],comparisonOperator:new j(n.referenceValueRule?.comparisonOperator??E.Equal,[C.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[C.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(k),a(J),a(K));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),z,F],decls:9,vars:8,consts:()=>{let o;o="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let e;e="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let r;r="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let m;m="\u0646\u0647\u0627\u064A\u0629";let v;return v="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["formControlName","description","label",r],[3,"actions"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",m],["autocomplete","off","formControlName","value","matInput","","placeholder",v]];},template:function(e,r){e&1&&(_(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),U(5,ve,7,0,"div",4)(6,De,3,0,"mat-form-field",5),_(7,"sz-ui-form-field-textarea",6),d()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",r.header),c(2),s("formGroup",r.form),c(),s("source",r.referenceGroups),c(),s("source",r.comparisonOperators)("localizedValue",!0),c(),h(5,r.isRange()?5:-1),c(),h(6,r.isRange()?-1:6),c(2),s("actions",r.actions));},dependencies:[H,X,$,G,Y,w,x,ne,ie,ee,T,Z,te,g,L,fe,Se,_e,ue,me],encapsulation:2});let i=t;return i;})();var Le=(()=>{let t=class t{constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Ce(),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columnDefs.push(l.uuid("id"),l.uuid("referenceValueId"),l.uuid("referenceGroupId"),l.string("referenceGroup.name"),l.enum("comparisonOperator").setValueGetter(m=>le(m.comparisonOperator)),l.number("value"),l.number("start"),l.number("end"),l.string("description"),l.date("createdAt",!1),l.date("updatedAt",!1),Re.menu([V.edit(m=>this.openSaveComponent(m)),V.delete(m=>{this.openReferenceValueRuleDeleteComponent(m);})])),this.get();}openSaveComponent(o){this.dialog.open(Ae,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Ee,{data:Me.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.getQuery()).pipe(ae(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(N),a(O),a(S),a(B));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules"]],features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,r){e&1&&(u(0,"sz-ui-table-search-filter",1),R("changed",function(){return r.get();}),u(1,"button",2),R("click",function(){return r.openSaveComponent();}),u(2,"span"),P(3,0),d()()(),u(4,"sz-ui-table",3),R("update",function(){return r.get();}),d()),e&2&&(s("dataSource",r.dataSource),c(4),s("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[oe,Ne,Oe],encapsulation:2});let i=t;return i;})();var he=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new D(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(N),a(O));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:2,consts:[[3,"title","subtitle"]],template:function(e,r){e&1&&_(0,"sz-ui-header-info",0)(1,"sz-medisy-laboratory-reference-value-rules"),e&2&&s("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description);},dependencies:[A,Le],encapsulation:2});let i=t;return i;})();var Ve=[{path:"",component:he}];var Bt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=y({type:t}),t.ɵinj=b({providers:[S],imports:[q,W.forChild(Ve),T,g,ce,Q,re,se,Te,de,L,A]});let i=t;return i;})();export{Bt as ReferenceValueModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/