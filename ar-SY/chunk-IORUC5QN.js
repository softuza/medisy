import{a as R}from"./chunk-YPZF7YKS.js";import{a as Me}from"./chunk-RO2GEY6U.js";import{a as c,b as ge,d as Le,e as Ve,g as he,j as Ie,k as ve}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import"./chunk-QHHLUO4M.js";import{a as E}from"./chunk-UYGPYJU5.js";import"./chunk-WB6GSLJI.js";import{e as Oe,f as Ce,g as Ne,i as Te,j as h,k as Ae}from"./chunk-ATQTF7V2.js";import{a as V}from"./chunk-XTD4P5RM.js";import{d as Re,h as D}from"./chunk-SE7A63UJ.js";import{a as ie,b as ne,d as A,e as ae,g}from"./chunk-KXHITGXF.js";import{c as pe,d as ce,t as L,u as de,w as Se,x as Ee}from"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import"./chunk-BVTPLI23.js";import{d as fe}from"./chunk-MJ3OXUGM.js";import{h as le,i as se,k as _e}from"./chunk-EFKI6RZJ.js";import{b as x,d as N,f as w,g as k,k as q,l as H,n as W,q as Q,r as J,t as K,u as Z}from"./chunk-4JGOPH4G.js";import{r as te,t as oe}from"./chunk-UFIT6BFN.js";import{a as T,e as ee}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{ia as re,ja as ue,la as me}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Dc as j,Eb as O,Fa as $,Jb as _,Kb as p,Lb as u,Vb as Y,Wb as C,Yb as y,bb as s,cb as m,ea as P,f as B,ja as I,na as d,nc as S,oa as F,oc as X,qb as G,vb as v,zb as l}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";function Pe(o,e){if(o&1&&u(0,"sz-ui-form-field-select",4),o&2){let M=y();l("source",M.testTypeResultOptions);}}function Fe(o,e){o&1&&(_(0,"div",7)(1,"mat-form-field",8)(2,"label"),u(3,"input",9),p()(),_(4,"mat-form-field",8)(5,"label"),u(6,"input",10),p()()());}function $e(o,e){o&1&&(_(0,"mat-form-field",8)(1,"label"),u(2,"input",11),p()());}function Ge(o,e){if(o&1&&v(0,Fe,7,0,"div",7)(1,$e,3,0,"mat-form-field",8),o&2){let M=y();O(M.isRange()?0:-1),s(),O(M.isRange()?-1:1);}}var ye=(()=>{let e=class e extends Oe{constructor(r,t,i,a){super(i),this.mlabService=r,this.fb=t,this.dialog=i,this.data=a,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:te.Or,filters:oe.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(R).map(n=>R[n]),this.form=t.group({description:[a.referenceValueRule?.description,[N.maxLength(4096)]],comparisonOperator:new q(a.referenceValueRule?.comparisonOperator??R.Equal,[N.required]),referenceGroupId:[a.referenceValueRule?.referenceGroupId,[N.required]],value:[a.referenceValueRule?.value,[]],start:[a.referenceValueRule?.start,[]],end:[a.referenceValueRule?.end,[]],testTypeResultOptionId:[a.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===R.RangeWithBoundaries||this.form.value.comparisonOperator===R.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(m(E),m(J),m(ie),m(ne));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[S([]),G,X],decls:9,vars:9,consts:()=>{let r;r="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let i;i="\u0642\u064A\u0645\u0629";let a;a="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0628\u062F\u0627\u064A\u0629";let z;z="\u0646\u0647\u0627\u064A\u0629";let U;return U="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",r,3,"source"],["formControlName","comparisonOperator","label",t,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",i,3,"source"],["formControlName","description","label",a],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",n],["autocomplete","off","formControlName","end","matInput","","placeholder",z],["autocomplete","off","formControlName","value","matInput","","placeholder",U]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),v(5,Pe,1,1,"sz-ui-form-field-select",4)(6,Ge,2,2),u(7,"sz-ui-form-field-textarea",5),p()(),u(8,"sz-ui-dialog-actions",6)),t&2&&(l("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),l("formGroup",i.form),s(),l("source",i.referenceGroups),s(),l("source",i.comparisonOperators)("localizedValue",!0),s(),O(i.data.referenceValue.testType.hasResultOptions?5:6),s(3),l("actions",i.actions));},dependencies:[Z,H,x,w,k,W,Q,ce,pe,le,g,ae,se,L,h,Ce,Ne,Ee,Se,de],encapsulation:2});let o=e;return o;})();var De=(()=>{let e=class e{constructor(r,t,i,a){this.dialog=r,this.route=t,this.mlabService=i,this.locale=a,this.dataSource=new Le(),this.referenceValue=$.required(),this.dataSource.columnDefs.push(c.uuid("id"),c.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(c.string("referenceGroup.description").setStyleSmall()),c.enum("comparisonOperator").setValueGetter(n=>fe(n.comparisonOperator)),c.number("_value").setValueGetter(n=>n.testTypeResultOption?n.testTypeResultOption.nameEn:n.value!==null?n.value:`${n.start} - ${n.end}`).setHeaderSortable(!1),c.date("createdAt").setVisible(!1),c.date("updatedAt").setVisible(!1),ge.menu([D.edit(n=>this.openSaveComponent(n)),D.delete(n=>{this.openReferenceValueRuleDeleteComponent(n);})]));}ngOnInit(){this.get();}openSaveComponent(r){this.dialog.open(ye,{data:{referenceValue:this.referenceValue(),referenceValueRule:r}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Te,{data:Ae.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue().id,this.dataSource.getQuery()).pipe(Ve(this.dataSource.state)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(t){return new(t||e)(m(A),m(T),m(E),m(j));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:[1,"referenceValue"]},features:[S([])],decls:5,vars:2,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[r,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(_(0,"sz-ui-table-search-filter",1),C("changed",function(){return i.get();}),_(1,"button",2),C("click",function(){return i.openSaveComponent();}),_(2,"span"),Y(3,0),p()()(),_(4,"sz-ui-table",3),C("update",function(){return i.get();}),p()),t&2&&(l("dataSource",i.dataSource),s(4),l("dataSource",i.dataSource));},dependencies:[ue,Ie,he],encapsulation:2});let o=e;return o;})();var be=(()=>{let e=class e{constructor(){this.dialog=I(A),this.route=I(T),this.alert$=new B(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:this.referenceValue.testType.nameEn,subtitle:this.referenceValue.description,backEnabled:!0};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[S([])],decls:2,vars:2,consts:[[3,"config"],[3,"referenceValue"]],template:function(t,i){t&1&&u(0,"sz-ui-app-bar",0)(1,"sz-medisy-laboratory-reference-value-rules",1),t&2&&(l("config",i.appBarConfig),s(),l("referenceValue",i.referenceValue));},dependencies:[V,De],encapsulation:2});let o=e;return o;})();var ze=[{path:"",component:be}];var Zt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=F({type:e}),e.ɵinj=P({providers:[E],imports:[K,ee.forChild(ze),g,L,Re,re,me,_e,ve,Me,h,V]});let o=e;return o;})();export{Zt as ReferenceValueModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/