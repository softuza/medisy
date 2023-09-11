"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[22],{6022:(P,T,n)=>{n.r(T),n.d(T,{ReferenceValueModule:()=>oe});var i=n(6814),e=n(6223),u=n(2296),m=n(5986),c=n(7700),a=n(617),g=n(7988),A=n(8525),v=n(8109),L=n(465),I=n(6987),S=n(758),h=n(2595),E=n(2169),p=n(3576),z=n(5041),F=n(7239),V=n(3572),y=n(8645),t=n(5879),x=n(2516),U=n(2191),M=n(7263);let l=(()=>{class s{transform(o,r=!1){switch(o){case M.v.Equal:return r?"==":"Equal";case M.v.GreaterThan:return r?">":"GreaterThan";case M.v.GreaterThanOrEqual:return r?">=":"GreaterThanOrEqual";case M.v.LessThan:return r?"<":"LessThan";case M.v.LessThanOrEqual:return r?"<=":"LessThanOrEqual";case M.v.RangeWithBoundaries:return r?"<==>":"RangeWithBoundaries";case M.v.RangeWithoutBoundaries:return r?"<>":"RangeWithoutBoundaries";case M.v.Not:return r?"!=":"Not";default:return""}}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275pipe=t.Yjl({name:"comparisonOperatorI18n",type:s,pure:!0,standalone:!0}),s})();var O=n(9598),d=n(8721),C=n(8180),Z=n(6893),Y=n(8930);let D=(()=>{class s extends Z.m{constructor(o,r){super(o),this.ngControl=o,this.comparisonOperatorI18nPipe=r,this.items=Object.keys(M.v).map(f=>M.v[f]),this.label="Comparison Operator",this.contentFormat=f=>this.comparisonOperatorI18nPipe.transform(f)}ngOnInit(){this.control=this.ngControl.control}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(e.a5,10),t.Y36(l))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[t._Bn([l]),t.qOj,t.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(o,r){1&o&&t._UZ(0,"sz-ui-form-field-select",0),2&o&&t.Q6J("formControl",r.control)("items",r.items)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)},dependencies:[e.UX,e.JJ,e.oH,Y.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),s})();var $=n(2557),W=n(6187),B=n(4622),J=n(6091);let j=(()=>{class s extends p.Z2{constructor(o,r,f){super(r),this.fb=o,this.dialog=r,this.data=f,this.form=o.group({referenceGroupId:[f.referenceGroupId],comparisonOperator:[f.comparisonOperator]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(e.qu),t.Y36(c.so),t.Y36(c.WI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[t._Bn([W.T]),t.qOj,t.jDz],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(o,r){1&o&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(t.Q6J("header",r.header),t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("emptyOption",!0),t.xp6(1),t.Q6J("emptyOption",!0),t.xp6(1),t.Q6J("actions",r.actions))},dependencies:[i.ez,e.UX,e._Y,e.JJ,e.JL,e.sg,e.u,c.Is,c.xY,m.p9,p.su,B.Y,J.t,$.P,D],encapsulation:2}),s})();var X=n(9157),G=n(2032),K=n(9004),Q=n(8380),H=n(8873);function b(s,_){1&s&&(t.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),t._UZ(3,"input",10),t.qZA()(),t.TgZ(4,"mat-form-field",9)(5,"label"),t._UZ(6,"input",11),t.qZA()()())}function w(s,_){1&s&&(t.TgZ(0,"mat-form-field",9)(1,"label"),t._UZ(2,"input",12),t.qZA()())}let q=(()=>{class s extends p.Ku{constructor(o,r,f,R){super(f),this.referenceValueService=o,this.fb=r,this.dialog=f,this.data=R,this.form=r.group({description:[R.referenceValueRule?.description,[e.kI.maxLength(4096)]],comparisonOperator:[R.referenceValueRule?.comparisonOperator??M.v.Equal,[e.kI.required]],referenceGroupId:[R.referenceValueRule?.referenceGroupId,[e.kI.required]],value:[R.referenceValueRule?.value,[]],start:[R.referenceValueRule?.start,[]],end:[R.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===M.v.RangeWithBoundaries||this.form.value.comparisonOperator===M.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.referenceValueService.updateRule(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.referenceValueService.createRule(this.data.referenceValueId,this.form.value))}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(Q.U),t.Y36(e.qu),t.Y36(c.so),t.Y36(c.WI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[t._Bn([I.C]),t.qOj,t.jDz],decls:9,vars:5,consts:function(){let _,o,r,f;return _="Description",o="Start",r="End",f="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",_],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",o],["autocomplete","off","formControlName","end","matInput","","placeholder",r],["autocomplete","off","formControlName","value","matInput","","placeholder",f]]},template:function(o,r){1&o&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),t.YNc(5,b,7,0,"div",4),t.YNc(6,w,3,0,"mat-form-field",5),t._UZ(7,"medisy-form-field-reference-group",6),t.qZA()(),t._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(t.Q6J("header",r.header),t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(3),t.Q6J("ngIf",r.isRange()),t.xp6(1),t.Q6J("ngIf",!r.isRange()),t.xp6(2),t.Q6J("actions",r.actions))},dependencies:[i.ez,i.O5,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,G.c,G.Nt,X.KE,c.Is,c.xY,X.lN,m.p9,p.su,B.Y,J.t,K.g,H.L,$.P,D],encapsulation:2}),s})();var k=n(3582),ee=n(3144);let te=(()=>{class s{constructor(o,r,f,R){this.dialog=o,this.route=r,this.referenceValueService=f,this.comparisonOperatorI18nPipe=R,this.dataSource=new V.b2(O.J.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[V.UC.text("referenceGroup","Reference group",N=>N.referenceGroup.name),U.h.comparisonOperator(N=>R.transform(N.comparisonOperator)),V.UC.text("value","Value",N=>N.value?N.value:`${N.start} - ${N.end}`),U.h.createdAt(),U.h.menu([V.od.edit(N=>this.openSaveComponent(N)),V.od.delete(N=>{this.openReferenceValueRuleDeleteComponent(N)})])],this.get()}openSaveComponent(o){this.dialog.open(q,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe((0,C.q)(1)).subscribe(f=>{this.dataSource.updateOrPushItem(f)})}openFilterComponent(){this.dialog.open(j,{data:this.dataSource.filterModel}).afterClosed().pipe((0,C.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openReferenceValueRuleDeleteComponent(o){this.dialog.open(p.fN,{data:p.cb.delete(this.referenceValueService.deleteRule(o.referenceValueId,o.id),o)}).afterClosed().pipe((0,C.q)(1)).subscribe(f=>{this.dataSource.delete(f)})}get(){this.referenceValueService.getRules(this.referenceValue.id,this.dataSource.filterModel).pipe((0,d.sU)(this.dataSource.indicator),(0,C.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(c.uw),t.Y36(v.gz),t.Y36(Q.U),t.Y36(l))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-reference-value-rules"]],features:[t._Bn([l])],decls:5,vars:4,consts:function(){let _;return _="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],_,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,r){1&o&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return r.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return r.get()}),t.qZA()),2&o&&(t.Q6J("dataSource",r.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[u.lW,k.K,ee.f],encapsulation:2}),s})();const ne=[{path:"",component:(()=>{class s{constructor(o,r){this.dialog=o,this.route=r,this.alert$=new y.x,this.referenceValue=this.route.snapshot.data.referenceValue}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(c.uw),t.Y36(v.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-reference-value"]],features:[t._Bn([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(o,r){1&o&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"button",3)(7,"mat-icon"),t._uU(8,"arrow_back"),t.qZA()()(),t._UZ(9,"medisy-laboratory-reference-value-rules")),2&o&&(t.xp6(3),t.Oqu(r.referenceValue.testClass.name),t.xp6(2),t.Oqu(r.referenceValue.description))},dependencies:[v.rH,a.Hw,u.RK,x.z,te],encapsulation:2}),s})()}];let oe=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[I.C],imports:[i.ez,e.u5,v.Bz.forChild(ne),c.Is,m.p9,g.Tx,a.Ps,u.ot,A.LD,S.E3,V.Vn,E.c,h.V,F.h,p.su,z.n,L.X]}),s})()},465:(P,T,n)=>{n.d(T,{X:()=>e});var i=n(5879);let e=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=i.oAB({type:u}),u.\u0275inj=i.cJS({}),u})()},2595:(P,T,n)=>{n.d(T,{V:()=>u});var i=n(6128),e=n(5879);let u=(()=>{class m{}return m.\u0275fac=function(a){return new(a||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[i.X]}),m})()},6128:(P,T,n)=>{n.d(T,{X:()=>M});var i=n(6814),e=n(5879),u=n(5195),m=n(6385),c=n(617),a=n(6007),g=n(2169);let A=(()=>{class l{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(d,C){1&d&&(e.TgZ(0,"span",0),e._uU(1),e.qZA()),2&d&&(e.Q6J("className",C.getClass()),e.uIk("data-icon",C.getIcon()),e.xp6(1),e.Oqu(C.getIcon()))},dependencies:[i.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),l})(),v=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[A]}),l})();var L=n(2430),I=n(8145);function S(l,O){if(1&l&&(e.ynx(0),e._UZ(1,"sz-ui-counter",8),e.BQk()),2&l){const d=e.oxw();e.xp6(1),e.Q6J("value",d.getValue())}}function h(l,O){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const d=e.oxw(2);e.xp6(1),e.hij(" ",d.card.title," ")}}function E(l,O){1&l&&e.Hsn(0,2)}function p(l,O){if(1&l&&(e.ynx(0),e.YNc(1,h,2,1,"div",9),e.YNc(2,E,1,0,"ng-template",null,10,e.W1O),e.BQk()),2&l){const d=e.MAs(3),C=e.oxw();e.xp6(1),e.Q6J("ngIf",C.card.title)("ngIfElse",d)}}function z(l,O){if(1&l&&e._UZ(0,"sz-ui-icon",11),2&l){const d=e.oxw();e.Q6J("icon",d.card.icon)}}function F(l,O){1&l&&e._UZ(0,"mat-divider")}function V(l,O){if(1&l){const d=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const Y=e.CHM(d).$implicit,D=e.oxw(2);return e.KtG(D.cardActionClick(Y))}),e._uU(1),e.qZA()}if(2&l){const d=O.$implicit;e.xp6(1),e.hij(" ",d.title," ")}}function y(l,O){if(1&l&&(e.TgZ(0,"mat-card-actions"),e.YNc(1,V,2,1,"button",12),e.qZA()),2&l){const d=e.oxw();e.xp6(1),e.Q6J("ngForOf",d.card.actions)}}function t(l,O){1&l&&e._UZ(0,"mat-progress-bar",14)}const x=[[["","content",""]],[["","footer",""]],[["","title",""]]],U=["[content]","[footer]","[title]"];let M=(()=>{class l{constructor(){this.szCardType=L.k,this.indicator=(0,e.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(d){this.card&&d&&d.clickFn&&d?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[e.jDz],ngContentSelectors:U,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(d,C){1&d&&(e.F$t(x),e.TgZ(0,"mat-card",0)(1,"mat-card-header",1),e.NdJ("click",function(){return C.cardClick()}),e.TgZ(2,"mat-card-subtitle"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-title",2),e.YNc(5,S,2,1,"ng-container",3),e.YNc(6,p,4,2,"ng-container",3),e.qZA(),e._UZ(7,"span",4),e.YNc(8,z,1,1,"sz-ui-icon",5),e.qZA(),e.TgZ(9,"mat-card-content"),e.Hsn(10),e.YNc(11,F,1,0,"mat-divider",6),e.YNc(12,y,2,1,"mat-card-actions",6),e.qZA(),e.TgZ(13,"mat-card-footer"),e.Hsn(14,1),e.YNc(15,t,1,0,"mat-progress-bar",7),e.qZA()()),2&d&&(e.xp6(3),e.Oqu(C.card.subtitle),e.xp6(1),e.Q6J("ngSwitch",C.card.type),e.xp6(1),e.Q6J("ngSwitchCase",C.szCardType.Counter),e.xp6(1),e.Q6J("ngSwitchCase",C.szCardType.Text),e.xp6(2),e.Q6J("ngIf",C.hasIcon()),e.xp6(3),e.Q6J("ngIf",C.hasActions()),e.xp6(1),e.Q6J("ngIf",C.hasActions()),e.xp6(3),e.Q6J("ngIf",C.indicator()))},dependencies:[i.ez,i.sg,i.O5,i.RF,i.n9,u.QW,u.a8,u.hq,u.dn,u.rt,u.dk,u.$j,u.n5,c.Ps,m.t,m.d,a.Cv,a.pW,v,A,g.c,I.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),l})()},2430:(P,T,n)=>{n.d(T,{k:()=>i});var i=(()=>((i=i||{})[i.Counter=0]="Counter",i[i.Text=1]="Text",i))()},8145:(P,T,n)=>{n.d(T,{R:()=>m});var i=n(6814),e=n(5879);const u=["*"];let m=(()=>{class c{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(g){g&&(this.animate(this.oldValue,g),this.oldValue=g)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(g,A){const v=A-g;let I=Math.abs(Math.floor(this.duration/v));I=Math.max(I,50);const h=(new Date).getTime()+this.duration,E=()=>{const p=(new Date).getTime(),z=Math.max((h-p)/this.duration,0),F=Math.round(A-z*v);this.currentValue=F,Math.round(F)===Math.round(A)&&clearInterval(this.timer)};this.timer=setInterval(E,I),E()}}return c.\u0275fac=function(g){return new(g||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[e.jDz],ngContentSelectors:u,decls:3,vars:1,template:function(g,A){1&g&&(e.F$t(),e.TgZ(0,"span"),e._uU(1),e.Hsn(2),e.qZA()),2&g&&(e.xp6(1),e.hij(" ",A.currentValue," "))},dependencies:[i.ez],encapsulation:2}),c})()},2169:(P,T,n)=>{n.d(T,{c:()=>u});var i=n(8145),e=n(5879);let u=(()=>{class m{}return m.\u0275fac=function(a){return new(a||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[i.R]}),m})()},8873:(P,T,n)=>{n.d(T,{L:()=>I});var i=n(6814),e=n(6223),u=n(9157),m=n(2032),c=n(2757),a=n(5879);function g(S,h){if(1&S&&(a.TgZ(0,"mat-label"),a._uU(1),a.qZA()),2&S){const E=a.oxw();a.xp6(1),a.Oqu(E.label)}}function A(S,h){1&S&&(a.TgZ(0,"mat-error"),a.SDv(1,3),a.qZA())}function v(S,h){1&S&&(a.TgZ(0,"mat-error"),a.SDv(1,4),a.qZA())}function L(S,h){1&S&&(a.TgZ(0,"mat-error"),a.SDv(1,5),a.qZA())}let I=(()=>{class S extends c.l{constructor(E){super(E),this.ngControl=E}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return S.\u0275fac=function(E){return new(E||S)(a.Y36(e.a5,10))},S.\u0275cmp=a.Xpm({type:S,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[a.qOj,a.jDz],decls:7,vars:7,consts:function(){let h,E,p;return h="This field is required",E="This field has insufficient length",p="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],h,E,p]},template:function(E,p){1&E&&(a.TgZ(0,"mat-form-field",0),a.YNc(1,g,2,1,"mat-label",1),a.TgZ(2,"textarea",2),a._uU(3,"  "),a.qZA(),a.YNc(4,A,2,0,"mat-error",1),a.YNc(5,v,2,0,"mat-error",1),a.YNc(6,L,2,0,"mat-error",1),a.qZA()),2&E&&(a.xp6(1),a.Q6J("ngIf",p.label),a.xp6(1),a.Q6J("formControl",p.control)("value",p.value)("placeholder",p.placeholder),a.xp6(2),a.Q6J("ngIf",p.control.hasError("required")),a.xp6(1),a.Q6J("ngIf",p.control.hasError("minlength")),a.xp6(1),a.Q6J("ngIf",p.control.hasError("maxlength")))},dependencies:[i.ez,i.O5,e.UX,e.Fj,e.JJ,e.oH,u.lN,u.KE,u.hX,u.TO,m.c,m.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),S})()},9004:(P,T,n)=>{n.d(T,{g:()=>m});var i=n(5974),e=n(8873),u=n(5879);let m=(()=>{class c{}return c.\u0275fac=function(g){return new(g||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[i.g,e.L]}),c})()}}]);