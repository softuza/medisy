import{a as C}from"./chunk-K7SRTLNW.js";import{a as Oe}from"./chunk-H37KS6RJ.js";import{a as Ee}from"./chunk-CZSDKHXK.js";import{a as u,d as Ve,e as he,f as Le,i as ve,j as b}from"./chunk-D3A4DG3E.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import{a as c}from"./chunk-HZWF5JWJ.js";import"./chunk-HWJ6IS6U.js";import{b as Re,f as Ne,g as Te,h as ge,j as Ae,k as I}from"./chunk-SR3I6TMI.js";import{a as v}from"./chunk-CT6UCPJK.js";import{d as Ce,j as _,k as Me}from"./chunk-4MMSBRWE.js";import{a as re,b as ie,d as V,e as ne,g as h}from"./chunk-4CSR7EPJ.js";import{a as _e,b as de,q as L,r as ce,s as fe,t as Se}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{h as ae,i as le,k as ue}from"./chunk-IEUIBZ53.js";import{b as X,d as g,f as w,g as j,k,l as q,n as H,q as W,r as Q,t as J,u as K}from"./chunk-VXNH5PTX.js";import{Y as me,Z as pe,r as ee,t as te}from"./chunk-FZKM7RGV.js";import{a as A,e as Z}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as oe,la as se}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Fb as N,Kb as m,Lb as p,Mb as l,Xb as D,Zb as z,bb as s,cb as M,ea as G,f as $,ja as d,na as S,oa as Y,oc as E,pc as T,qb as x,vb as y,zb as a}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";function ye(r,e){if(r&1&&l(0,"sz-ui-form-field-select",4),r&2){let O=z();a("source",O.testTypeResultOptions);}}function De(r,e){r&1&&(m(0,"div",7)(1,"mat-form-field",8)(2,"label"),l(3,"input",9),p()(),m(4,"mat-form-field",8)(5,"label"),l(6,"input",10),p()()());}function ze(r,e){r&1&&(m(0,"mat-form-field",8)(1,"label"),l(2,"input",11),p()());}function Be(r,e){if(r&1&&y(0,De,7,0,"div",7)(1,ze,3,0,"mat-form-field",8),r&2){let O=z();N(O.isRange()?0:-1),s(),N(O.isRange()?-1:1);}}var Ie=(()=>{let e=class e extends Ne{constructor(t,o,i,n){super(i),this.mlabService=t,this.fb=o,this.dialog=i,this.data=n,this.referenceGroups=this.mlabService.referenceGroups.getAll({orderBy:["nameEn"],filterBehavior:ee.Or,filters:te.create().equalIf("id",this.data.referenceValueRule?.referenceGroupId).notAny("referenceValueRules.referenceValueId",[this.data.referenceValue.id]).filters()}),this.testTypeResultOptions=this.mlabService.testTypes.resultOptions.getAll(this.data.referenceValue.testTypeId,{orderBy:["nameEn"]}),this.comparisonOperators=Object.keys(C).map(R=>C[R]),this.form=o.group({description:[n.referenceValueRule?.description,[g.maxLength(4096)]],comparisonOperator:new k(n.referenceValueRule?.comparisonOperator??C.Equal,[g.required]),referenceGroupId:[n.referenceValueRule?.referenceGroupId,[g.required]],value:[n.referenceValueRule?.value,[]],start:[n.referenceValueRule?.start,[]],end:[n.referenceValueRule?.end,[]],testTypeResultOptionId:[n.referenceValueRule?.testTypeResultOptionId,[]]});}isRange(){return this.form.value.comparisonOperator===C.RangeWithBoundaries||this.form.value.comparisonOperator===C.RangeWithoutBoundaries;}submit(){this.IsValid()&&(this.data.referenceValueRule?this.save(this.mlabService.referenceValues.rules.update(this.data.referenceValue.id,this.data.referenceValueRule.id,this.form.value)):this.save(this.mlabService.referenceValues.rules.create(this.data.referenceValue.id,this.form.value)));}};e.ɵfac=function(o){return new(o||e)(M(c),M(Q),M(re),M(ie));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[E([]),x,T],decls:9,vars:9,consts:()=>{let t;t="Reference Group";let o;o="Comparison Operator";let i;i="Value";let n;n="Description";let R;R="Start";let P;P="End";let U;return U="Value",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","referenceGroupId","label",t,3,"source"],["formControlName","comparisonOperator","label",o,3,"source","localizedValue"],["formControlName","testTypeResultOptionId","label",i,3,"source"],["formControlName","description","label",n],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",R],["autocomplete","off","formControlName","end","matInput","","placeholder",P],["autocomplete","off","formControlName","value","matInput","","placeholder",U]];},template:function(o,i){o&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3),y(5,ye,1,1,"sz-ui-form-field-select",4)(6,Be,2,2),l(7,"sz-ui-form-field-textarea",5),p()(),l(8,"sz-ui-dialog-actions",6)),o&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.referenceGroups),s(),a("source",i.comparisonOperators)("localizedValue",!0),s(),N(i.data.referenceValue.testType.hasResultOptions?5:6),s(3),a("actions",i.actions));},dependencies:[K,q,X,w,j,H,W,de,_e,ae,h,ne,le,L,I,Te,ge,Se,fe,ce],encapsulation:2});let r=e;return r;})();var F=(()=>{let e=class e{constructor(){this.dialog=d(V),this.mlabService=d(c),this.route=d(A),this.dataSource=new Ve(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:me.rules,subtitle:this.referenceValue.testType.nameEn,backEnabled:!0,backUrl:`/${Ee.ReferenceValues}`,menu:Me.default().setItems([_.add(this.openSaveComponent.bind(this)),_.menu([_.search(),_.filter()])])},this.dataSource.columnDefs.push(u.uuid("id"),u.string("referenceGroup.nameEn").setValueClassFontBold().setStacked(u.string("referenceGroup.description").setStyleSmall()),u.enum("comparisonOperator").setValueGetter(t=>pe(t.comparisonOperator)),u.number("_value").setValueGetter(t=>t.testTypeResultOption?t.testTypeResultOption.nameEn:t.value!==null?t.value:`${t.start} - ${t.end}`).setHeaderSortable(!1),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([_.edit(this.openSaveComponent.bind(this)),_.divider(),_.delete(this.openReferenceValueRuleDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(t){this.dialog.open(Ie,{data:{referenceValue:this.referenceValue,referenceValueRule:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReferenceValueRuleDeleteComponent(t){this.dialog.open(Ae,{data:Re.delete(this.mlabService.referenceValues.rules.delete(t.referenceValueId,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.getQuery()).pipe(he(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=S({type:e,selectors:[["sz-medisy-laboratory-reference-value-rules"]],standalone:!0,features:[E([c]),T],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],["content","",3,"update","dataSource"]],template:function(o,i){o&1&&(m(0,"sz-ui-table-bar",0),D("changed",function(){return i.get();}),p(),m(1,"sz-ui-table",1),D("update",function(){return i.get();}),p()),o&2&&(a("config",i.appBarConfig)("dataSource",i.dataSource),s(),a("dataSource",i.dataSource));},dependencies:[b,ve,Le],encapsulation:2});let r=e;return r;})();var be=(()=>{let e=class e{constructor(){this.dialog=d(V),this.route=d(A),this.alert$=new $(),this.referenceValue=this.route.snapshot.data.referenceValue,this.appBarConfig={title:this.referenceValue.testType.nameEn,subtitle:this.referenceValue.description,backEnabled:!0};}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=S({type:e,selectors:[["sz-medisy-laboratory-reference-value"]],features:[E([])],decls:1,vars:1,consts:[[3,"config"]],template:function(o,i){o&1&&l(0,"sz-ui-app-bar",0),o&2&&a("config",i.appBarConfig);},dependencies:[v],encapsulation:2});let r=e;return r;})();var kt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=Y({type:e}),e.ɵinj=G({providers:[c],imports:[J,Z.forChild([{path:"",component:be},{path:"rules",component:F}]),h,L,Ce,oe,se,ue,b,Oe,I,v,F]});let r=e;return r;})();export{kt as ReferenceValueModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/