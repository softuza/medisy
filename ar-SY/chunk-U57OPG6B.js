import{a as R}from"./chunk-FC5ILIMN.js";import{a as Me}from"./chunk-SWDDLJWD.js";import{a as c,b as ge,d as Le,e as Ve,g as he,j as Ie,k as ve}from"./chunk-DJIUHHUG.js";import"./chunk-OKGOWQL5.js";import"./chunk-NEHTWZRD.js";import"./chunk-72Z2OCSQ.js";import{a as E}from"./chunk-4DEPVHVX.js";import"./chunk-7CWIHV7X.js";import{b as Oe,f as Ce,g as Ne,h as Te,j as Ae,k as I}from"./chunk-6Y6J7VB6.js";import{a as h}from"./chunk-UBZLFVIM.js";import{d as Re,h as V}from"./chunk-3Z7DPVQN.js";import{a as ie,b as ne,d as A,e as ae,g}from"./chunk-EJOHO2EB.js";import{a as ce,b as de,q as L,r as fe,s as Se,t as Ee}from"./chunk-YZKNUD65.js";import"./chunk-UFKQJOL3.js";import"./chunk-TL57E7RA.js";import"./chunk-GOMTDU6R.js";import"./chunk-HVAN3DT6.js";import{h as le,i as se,k as _e}from"./chunk-F2RDDOGN.js";import{b as x,d as N,f as w,g as k,k as q,l as H,n as W,q as Q,r as J,t as K,u as Z}from"./chunk-MGV73Q32.js";import{Z as pe,r as te,t as oe}from"./chunk-I7PR7JM4.js";import{a as T,e as ee}from"./chunk-5XANXOAJ.js";import"./chunk-N5JOJLCN.js";import{ia as re,ja as ue,la as me}from"./chunk-IM7EI72R.js";import"./chunk-327W6FQA.js";import{Ec as j,Fa as $,Fb as O,Kb as _,Lb as p,Mb as u,Wb as Y,Xb as C,Zb as y,bb as s,cb as m,ea as P,f as U,ja as v,na as f,oa as F,oc as S,pc as X,qb as G,vb as D,zb as l}from"./chunk-UELVXDXK.js";import"./chunk-2GMD7R3L.js";function Pe(o,e){if(o&1&&u(0,"sz-ui-form-field-select",4),o&2){let M=y();l("source",M.testTypeResultOptions);}}function Fe(o,e){o&1&&(_(0,"div",7)(1,"mat-form-field",8)(2,"label"),u(3,"input",9),p()(),_(4,"mat-form-field",8)(5,"label"),u(6,"input",10),p()()());}function $e(o,e){o&1&&(_(0,"mat-form-field",8)(1,"label"),u(2,"input",11),p()());}function Ge(o,e){if(o&1&&D(0,Fe,7,0,"div",7)(1,$e,3,0,"mat-form-field",8),o&2){let M=y();O(M.isRange()?0:-1),s(),O(M.isRange()?-1:1);}}var De=(()=>{let e=class e extends Ce{constructor(r,t,i,n){super(i),this.mlabService=r,this.fb=t,this.dialog=i,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:te.Or,filters:oe.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(R).map(a=>R[a]),this.form=t.group({description:[n.referenceValueRule?.description,[N.maxLength(4096)]],comparisonOperator:new q(n.referenceValueRule?.comparisonOperator??R.Equal,[N.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[N.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]],testTypeResultOptionId:[n.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===R.RangeWithBoundaries||this.form.value.comparisonOperator===R.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(m(E),m(J),m(ie),m(ne));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[S([]),G,X],decls:9,vars:9,consts:()=>{let r;r="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let t;t="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let i;i="\u0642\u064A\u0645\u0629";let n;n="\u0627\u0644\u0648\u0635\u0641";let a;a="\u0628\u062F\u0627\u064A\u0629";let z;z="\u0646\u0647\u0627\u064A\u0629";let B;return B="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",r,3,"source"],["formControlName","comparisonOperator","label",t,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",i,3,"source"],["formControlName","description","label",n],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",a],["autocomplete","off","formControlName","end","matInput","","placeholder",z],["autocomplete","off","formControlName","value","matInput","","placeholder",B]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),u(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),D(5,Pe,1,1,"sz-ui-form-field-select",4)(6,Ge,2,2),u(7,"sz-ui-form-field-textarea",5),p()(),u(8,"sz-ui-dialog-actions",6)),t&2&&(l("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),l("formGroup",i.form),s(),l("source",i.referenceGroups),s(),l("source",i.comparisonOperators)("localizedValue",!0),s(),O(i.data.referenceValue.testType.hasResultOptions?5:6),s(3),l("actions",i.actions));},dependencies:[Z,H,x,w,k,W,Q,de,ce,le,g,ae,se,L,I,Ne,Te,Ee,Se,fe],encapsulation:2});let o=e;return o;})();var ye=(()=>{let e=class e{constructor(r,t,i,n){this.dialog=r,this.route=t,this.mlabService=i,this.locale=n,this.dataSource=new Le(),this.referenceValue=$.required(),this.dataSource.columnDefs.push(c.uuid("id"),c.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(c.string("referenceGroup.description").setStyleSmall()),c.enum("comparisonOperator").setValueGetter(a=>pe(a.comparisonOperator)),c.number("_value").setValueGetter(a=>a.testTypeResultOption?a.testTypeResultOption.nameEn:a.value!==null?a.value:`${a.start} - ${a.end}`).setHeaderSortable(!1),c.date("createdAt").setVisible(!1),c.date("updatedAt").setVisible(!1),ge.menu([V.edit(this.openSaveComponent.bind(this)),V.divider(),V.delete(this.openReferenceValueRuleDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(r){this.dialog.open(De,{data:{referenceValue:this.referenceValue(),referenceValueRule:r}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueRuleDeleteComponent(r){this.dialog.open(Ae,{data:Oe.delete(this.mlabService.referenceValues.rules.delete(r.referenceValueId,r.id),r)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue().id,this.dataSource.getQuery()).pipe(Ve(this.dataSource.state)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};e.ɵfac=function(t){return new(t||e)(m(A),m(T),m(E),m(j));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],inputs:{referenceValue:[1,"referenceValue"]},features:[S([])],decls:5,vars:2,consts:()=>{let r;return r="\u0625\u0636\u0627\u0641\u0629",[r,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(_(0,"sz-ui-table-search-filter",1),C("changed",function(){return i.get();}),_(1,"button",2),C("click",function(){return i.openSaveComponent();}),_(2,"span"),Y(3,0),p()()(),_(4,"sz-ui-table",3),C("update",function(){return i.get();}),p()),t&2&&(l("dataSource",i.dataSource),s(4),l("dataSource",i.dataSource));},dependencies:[ue,Ie,he],encapsulation:2});let o=e;return o;})();var be=(()=>{let e=class e{constructor(){this.dialog=v(A),this.route=v(T),this.alert$=new U(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:this.referenceValue.testType.nameEn,subtitle:this.referenceValue.description,backEnabled:!0};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[S([])],decls:2,vars:2,consts:[[3,"config"],[3,"referenceValue"]],template:function(t,i){t&1&&u(0,"sz-ui-app-bar",0)(1,"sz-medisy-laboratory-reference-value-rules",1),t&2&&(l("config",i.appBarConfig),s(),l("referenceValue",i.referenceValue));},dependencies:[h,ye],encapsulation:2});let o=e;return o;})();var ze=[{path:"",component:be}];var Zt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=F({type:e}),e.ɵinj=P({providers:[E],imports:[K,ee.forChild(ze),g,L,Re,re,me,_e,ve,Me,I,h]});let o=e;return o;})();export{Zt as ReferenceValueModule};/**i18n:fe59e4cec730fb22fcad5443103077b4b8cf7932d5cc1616a4c03edd493e1605*/