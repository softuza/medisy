import{a as E}from"./chunk-K7SRTLNW.js";import{a as Oe}from"./chunk-7I65MTVO.js";import{a as Ce}from"./chunk-CZSDKHXK.js";import{a as u,d as Ve,e as he,f as Le,i as ve,j as y}from"./chunk-N3YZ3GWE.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import{a as d}from"./chunk-ECHZ6EB4.js";import"./chunk-LZIUZOQU.js";import{b as Re,f as Ne,g as Te,h as ge,j as Ae,k as b}from"./chunk-BQ3MI4NW.js";import{b as M,e as I}from"./chunk-RNNBY4AW.js";import{d as Me,h as v}from"./chunk-VP6ZLF3H.js";import{a as ie,b as ne,d as V,e as ae,g as h}from"./chunk-WNUUIGGE.js";import{a as de,b as ce,q as L,r as fe,s as Se,t as Ee}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{h as le,i as se,k as me}from"./chunk-JACASQJP.js";import{b as w,d as g,f as j,g as k,k as q,l as H,n as W,q as Q,r as J,t as K,u as Z}from"./chunk-VXNH5PTX.js";import{Y as pe,Z as _e,r as te,t as oe}from"./chunk-KQ5MQZXD.js";import{a as A,e as ee}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as re,la as ue}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Fb as N,Kb as m,Lb as p,Mb as l,Xb as z,Zb as B,bb as s,cb as C,ea as Y,f as G,ja as _,na as f,oa as x,oc as S,pc as T,qb as X,vb as D,zb as a}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";function ye(r,e){if(r&1&&l(0,"sz-ui-form-field-select",4),r&2){let O=B();a("source",O.testTypeResultOptions);}}function De(r,e){r&1&&(m(0,"div",7)(1,"mat-form-field",8)(2,"label"),l(3,"input",9),p()(),m(4,"mat-form-field",8)(5,"label"),l(6,"input",10),p()()());}function ze(r,e){r&1&&(m(0,"mat-form-field",8)(1,"label"),l(2,"input",11),p()());}function Be(r,e){if(r&1&&D(0,De,7,0,"div",7)(1,ze,3,0,"mat-form-field",8),r&2){let O=B();N(O.isRange()?0:-1),s(),N(O.isRange()?-1:1);}}var Ie=(()=>{let e=class e extends Ne{constructor(t,o,i,n){super(i),this.mlabService=t,this.fb=o,this.dialog=i,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:te.Or,filters:oe.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(E).map(R=>E[R]),this.form=o.group({description:[n.referenceValueRule?.description,[g.maxLength(4096)]],comparisonOperator:new q(n.referenceValueRule?.comparisonOperator??E.Equal,[g.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[g.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]],testTypeResultOptionId:[n.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===E.RangeWithBoundaries||this.form.value.comparisonOperator===E.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(o){return new(o||e)(C(d),C(J),C(ie),C(ne));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[S([]),X,T],decls:9,vars:9,consts:()=>{let t;t="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let o;o="\u0627\u0644\u0639\u0645\u0644\u064A\u0629";let i;i="\u0642\u064A\u0645\u0629";let n;n="\u0627\u0644\u0648\u0635\u0641";let R;R="\u0628\u062F\u0627\u064A\u0629";let U;U="\u0646\u0647\u0627\u064A\u0629";let $;return $="\u0642\u064A\u0645\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","comparisonOperator","label",o,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",i,3,"source"],["formControlName","description","label",n],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",R],["autocomplete","off","formControlName","end","matInput","","placeholder",U],["autocomplete","off","formControlName","value","matInput","","placeholder",$]];},template:function(o,i){o&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),D(5,ye,1,1,"sz-ui-form-field-select",4)(6,Be,2,2),l(7,"sz-ui-form-field-textarea",5),p()(),l(8,"sz-ui-dialog-actions",6)),o&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.referenceGroups),s(),a("source",i.comparisonOperators)("localizedValue",!0),s(),N(i.data.referenceValue.testType.hasResultOptions?5:6),s(3),a("actions",i.actions));},dependencies:[Z,H,w,j,k,W,Q,ce,de,le,h,ae,se,L,b,Te,ge,Ee,Se,fe],encapsulation:2});let r=e;return r;})();var P=(()=>{let e=class e{constructor(){this.dialog=_(V),this.mlabService=_(d),this.route=_(A),this.dataSource=new Ve(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:pe.rules,subtitle:this.referenceValue.testType.nameEn,backEnabled:!0,backUrl:`/${Ce.ReferenceValues}`,actions:[M.add(this.openSaveComponent.bind(this)),M.menu([M.search(),M.filter()])]},this.dataSource.columnDefs.push(u.uuid("id"),u.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(u.string("referenceGroup.description").setStyleSmall()),u.enum("comparisonOperator").setValueGetter(t=>_e(t.comparisonOperator)),u.number("_value").setValueGetter(t=>t.testTypeResultOption?t.testTypeResultOption.nameEn:t.value!==null?t.value:`${t.start} - ${t.end}`).setHeaderSortable(!1),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([v.edit(this.openSaveComponent.bind(this)),v.divider(),v.delete(this.openReferenceValueRuleDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Ie,{data:{referenceValue:this.referenceValue,referenceValueRule:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueRuleDeleteComponent(t){this.dialog.open(Ae,{data:Re.delete(this.mlabService.referenceValues.rules.delete(t.referenceValueId,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.getQuery()).pipe(he(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],standalone:!0,features:[S([d]),T],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],["content","",3,"update","dataSource"]],template:function(o,i){o&1&&(m(0,"sz-ui-table-bar",0),z("changed",function(){return i.get();}),p(),m(1,"sz-ui-table",1),z("update",function(){return i.get();}),p()),o&2&&(a("config",i.appBarConfig)("dataSource",i.dataSource),s(),a("dataSource",i.dataSource));},dependencies:[y,ve,Le],encapsulation:2});let r=e;return r;})();var be=(()=>{let e=class e{constructor(){this.dialog=_(V),this.route=_(A),this.alert$=new G(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:this.referenceValue.testType.nameEn,subtitle:this.referenceValue.description,backEnabled:!0};}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[S([])],decls:1,vars:1,consts:[[3,"config"]],template:function(o,i){o&1&&l(0,"sz-ui-app-bar",0),o&2&&a("config",i.appBarConfig);},dependencies:[I],encapsulation:2});let r=e;return r;})();var qt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=x({type:e}),e.ɵinj=Y({providers:[d],imports:[K,ee.forChild([{path:"",component:be},{path:"rules",component:P}]),h,L,Me,re,ue,me,y,Oe,b,I,P]});let r=e;return r;})();export{qt as ReferenceValueModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/