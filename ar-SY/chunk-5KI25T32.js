import{a as fe}from"./chunk-H2RM5A4J.js";import"./chunk-EKSQVKSV.js";import{a as E}from"./chunk-JITIZZPB.js";import{a as s,b as Oe,d as Ne,f as ge,i as Te,j as Ae}from"./chunk-7U2WIWHF.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import{a as S}from"./chunk-5KKUQUDS.js";import{e as Se,f as Ee,g as Me,i as Re,j as L,k as Ce}from"./chunk-WN2NFEA2.js";import"./chunk-6FUK3GWV.js";import{b as A}from"./chunk-XCAJ3ZHI.js";import{d as pe,h as I}from"./chunk-Q5LDCOCY.js";import{a as Z,b as ee,d as N,e as te,g}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import{a as ae,b as le,o as T,q as _e,s as ce,t as de}from"./chunk-3ZKUNSZU.js";import{c as se}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{d as me}from"./chunk-LMCANXRL.js";import{h as oe,i as re,k as ue}from"./chunk-AIP5TNUP.js";import{b as Y,d as C,f as j,g as X,j as w,k,m as q,p as x,q as H,s as W,t as Q}from"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{a as O,e as J}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ha as K,ia as ie,ka as ne}from"./chunk-WG6MZMNK.js";import"./chunk-6DPHD5PI.js";import{Db as l,Hc as G,Ib as V,Ma as U,Nb as _,Ob as d,Pb as c,Zb as B,_b as R,hb as m,ib as a,ka as b,l as D,pc as f,qc as $,ta as y,ua as p,ub as F,va as z,zb as P}from"./chunk-WLX3OMWV.js";function be(i,t){i&1&&(_(0,"div",4)(1,"mat-form-field",5)(2,"label"),c(3,"input",8),d()(),_(4,"mat-form-field",5)(5,"label"),c(6,"input",9),d()()());}function ye(i,t){i&1&&(_(0,"mat-form-field",5)(1,"label"),c(2,"input",10),d()());}var Ve=(()=>{let t=class t extends Se{constructor(o,e,r,n){super(r),this.mlabService=o,this.fb=e,this.dialog=r,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["name"]}),this.comparisonOperators=Object.keys(E).map(u=>E[u]),this.form=e.group({description:[n.referenceValueRule?.description,[C.maxLength(4096)]],comparisonOperator:new w(n.referenceValueRule?.comparisonOperator??E.Equal,[C.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[C.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)(a(S),a(H),a(Z),a(ee));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[f([]),F,$],decls:9,vars:10,consts:()=>{let o;o="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let e;e="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let r;r="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let u;u="\u0646\u0647\u0627\u064A\u0629";let v;return v="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",o,3,"source"],["formControlName","comparisonOperator","label",e,3,"source","localizedValue"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["formControlName","description","label",r],[3,"actions"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",u],["autocomplete","off","formControlName","value","matInput","","placeholder",v]];},template:function(e,r){e&1&&(c(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),P(5,be,7,0,"div",4)(6,ye,3,0,"mat-form-field",5),c(7,"sz-ui-form-field-textarea",6),d()(),c(8,"sz-ui-dialog-actions",7)),e&2&&(l("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),m(2),l("formGroup",r.form),m(),l("source",r.referenceGroups),m(),l("source",r.comparisonOperators)("localizedValue",!0),m(),V(5,r.isRange()?5:-1),m(),V(6,r.isRange()?-1:6),m(2),l("actions",r.actions));},dependencies:[Q,k,Y,j,X,q,x,le,ae,oe,g,te,re,T,L,Ee,Me,de,ce,_e],encapsulation:2});let i=t;return i;})();var Ie=(()=>{let t=class t{constructor(o,e,r,n){this.dialog=o,this.route=e,this.mlabService=r,this.locale=n,this.dataSource=new Ne(),this.referenceValueId=U.required(),this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("referenceValueId"),s.uuid("referenceGroupId"),s.string("referenceGroup.name"),s.enum("comparisonOperator").setValueGetter(u=>me(u.comparisonOperator)),s.number("value"),s.number("start"),s.number("end"),s.string("description"),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),Oe.menu([I.edit(u=>this.openSaveComponent(u)),I.delete(u=>{this.openReferenceValueRuleDeleteComponent(u);})]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(Ve,{data:{referenceValueId:this.referenceValueId(),referenceValueRule:o}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueRuleDeleteComponent(o){this.dialog.open(Re,{data:Ce.delete(this.mlabService.referenceValues.rules.delete(o.referenceValueId,o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValueId(),this.dataSource.getQuery()).pipe(se(this.dataSource.indicator)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)(a(N),a(O),a(S),a(G));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValueId:[y.SignalBased,"referenceValueId"]},features:[f([])],decls:5,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,r){e&1&&(_(0,"sz-ui-table-search-filter",1),R("changed",function(){return r.get();}),_(1,"button",2),R("click",function(){return r.openSaveComponent();}),_(2,"span"),B(3,0),d()()(),_(4,"sz-ui-table",3),R("update",function(){return r.get();}),d()),e&2&&(l("dataSource",r.dataSource),m(4),l("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[ie,Te,ge],encapsulation:2});let i=t;return i;})();var he=(()=>{let t=class t{constructor(o,e){this.dialog=o,this.route=e,this.alert$=new D(),this.referenceValue=this.route.snapshot.data.referenceValue;}};t.ɵfac=function(e){return new(e||t)(a(N),a(O));},t.ɵcmp=p({type:t,selectors:[["sz-medisy-laboratory-reference-value"]],features:[f([])],decls:2,vars:3,consts:[[3,"title","subtitle"],[3,"referenceValueId"]],template:function(e,r){e&1&&c(0,"sz-ui-header-info",0)(1,"sz-medisy-laboratory-reference-value-rules",1),e&2&&(l("title",r.referenceValue.testType.name)("subtitle",r.referenceValue.description),m(),l("referenceValueId",r.referenceValue.id));},dependencies:[A,Ie],encapsulation:2});let i=t;return i;})();var ve=[{path:"",component:he}];var Gt=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=z({type:t}),t.ɵinj=b({providers:[S],imports:[W,J.forChild(ve),g,T,pe,K,ne,ue,Ae,fe,L,A]});let i=t;return i;})();export{Gt as ReferenceValueModule};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/