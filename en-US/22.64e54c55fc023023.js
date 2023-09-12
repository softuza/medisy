"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[22],{6022:(L,O,n)=>{n.r(O),n.d(O,{ReferenceValueModule:()=>oe});var c=n(6814),e=n(6223),p=n(2296),d=n(5986),i=n(7700),a=n(617),T=n(7988),A=n(8525),v=n(8109),z=n(6987),P=n(758),C=n(2595),h=n(2169),f=n(3576),g=n(5041),V=n(7239),I=n(3572),D=n(8645),t=n(5879),x=n(2516),y=n(2191),M=n(7263);let F=(()=>{class l{transform(o,r=!1){switch(o){case M.v.Equal:return r?"==":"Equal";case M.v.GreaterThan:return r?">":"GreaterThan";case M.v.GreaterThanOrEqual:return r?">=":"GreaterThanOrEqual";case M.v.LessThan:return r?"<":"LessThan";case M.v.LessThanOrEqual:return r?"<=":"LessThanOrEqual";case M.v.RangeWithBoundaries:return r?"<==>":"RangeWithBoundaries";case M.v.RangeWithoutBoundaries:return r?"<>":"RangeWithoutBoundaries";case M.v.Not:return r?"!=":"Not";default:return""}}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275pipe=t.Yjl({name:"comparisonOperatorI18n",type:l,pure:!0,standalone:!0}),l})();var S=n(9598),u=n(8721),E=n(8180),Z=n(6893),Y=n(8930);let U=(()=>{class l extends Z.m{constructor(o,r){super(o),this.ngControl=o,this.comparisonOperatorI18nPipe=r,this.items=Object.keys(M.v).map(_=>M.v[_]),this.label="Comparison Operator",this.contentFormat=_=>this.comparisonOperatorI18nPipe.transform(_)}ngOnInit(){this.control=this.ngControl.control}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(e.a5,10),t.Y36(F))},l.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[t._Bn([F]),t.qOj,t.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(o,r){1&o&&t._UZ(0,"sz-ui-form-field-select",0),2&o&&t.Q6J("formControl",r.control)("items",r.items)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)},dependencies:[e.UX,e.JJ,e.oH,Y.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),l})();var $=n(884),W=n(6187),B=n(4622),J=n(6091);let j=(()=>{class l extends f.Z2{constructor(o,r,_){super(r),this.fb=o,this.dialog=r,this.data=_,this.form=o.group({referenceGroupId:[_.referenceGroupId],comparisonOperator:[_.comparisonOperator]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(e.qu),t.Y36(i.so),t.Y36(i.WI))},l.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[t._Bn([W.T]),t.qOj,t.jDz],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(o,r){1&o&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(t.Q6J("header",r.header),t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("emptyOption",!0),t.xp6(1),t.Q6J("emptyOption",!0),t.xp6(1),t.Q6J("actions",r.actions))},dependencies:[c.ez,e.UX,e._Y,e.JJ,e.JL,e.sg,e.u,i.Is,i.xY,d.p9,f.su,B.Y,J.t,$.P,U],encapsulation:2}),l})();var X=n(9157),G=n(2032),K=n(9004),Q=n(8380),b=n(8873);function H(l,m){1&l&&(t.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),t._UZ(3,"input",10),t.qZA()(),t.TgZ(4,"mat-form-field",9)(5,"label"),t._UZ(6,"input",11),t.qZA()()())}function w(l,m){1&l&&(t.TgZ(0,"mat-form-field",9)(1,"label"),t._UZ(2,"input",12),t.qZA()())}let q=(()=>{class l extends f.Ku{constructor(o,r,_,R){super(_),this.referenceValueService=o,this.fb=r,this.dialog=_,this.data=R,this.form=r.group({description:[R.referenceValueRule?.description,[e.kI.maxLength(4096)]],comparisonOperator:[R.referenceValueRule?.comparisonOperator??M.v.Equal,[e.kI.required]],referenceGroupId:[R.referenceValueRule?.referenceGroupId,[e.kI.required]],value:[R.referenceValueRule?.value,[]],start:[R.referenceValueRule?.start,[]],end:[R.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===M.v.RangeWithBoundaries||this.form.value.comparisonOperator===M.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.referenceValueService.updateRule(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.referenceValueService.createRule(this.data.referenceValueId,this.form.value))}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(Q.U),t.Y36(e.qu),t.Y36(i.so),t.Y36(i.WI))},l.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[t._Bn([z.C]),t.qOj,t.jDz],decls:9,vars:5,consts:function(){let m,o,r,_;return m="Description",o="Start",r="End",_="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",m],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",o],["autocomplete","off","formControlName","end","matInput","","placeholder",r],["autocomplete","off","formControlName","value","matInput","","placeholder",_]]},template:function(o,r){1&o&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),t.YNc(5,H,7,0,"div",4),t.YNc(6,w,3,0,"mat-form-field",5),t._UZ(7,"medisy-form-field-reference-group",6),t.qZA()(),t._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(t.Q6J("header",r.header),t.xp6(2),t.Q6J("formGroup",r.form),t.xp6(3),t.Q6J("ngIf",r.isRange()),t.xp6(1),t.Q6J("ngIf",!r.isRange()),t.xp6(2),t.Q6J("actions",r.actions))},dependencies:[c.ez,c.O5,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,G.c,G.Nt,X.KE,i.Is,i.xY,X.lN,d.p9,f.su,B.Y,J.t,K.g,b.L,$.P,U],encapsulation:2}),l})();var k=n(8359),ee=n(3144);let te=(()=>{class l{constructor(o,r,_,R){this.dialog=o,this.route=r,this.referenceValueService=_,this.comparisonOperatorI18nPipe=R,this.dataSource=new I.b2(S.J.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[I.UC.text("referenceGroup","Reference group",N=>N.referenceGroup.name),y.h.comparisonOperator(N=>R.transform(N.comparisonOperator)),I.UC.text("value","Value",N=>N.value?N.value:`${N.start} - ${N.end}`),y.h.createdAt(),y.h.menu([I.od.edit(N=>this.openSaveComponent(N)),I.od.delete(N=>{this.openReferenceValueRuleDeleteComponent(N)})])],this.get()}openSaveComponent(o){this.dialog.open(q,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe((0,E.q)(1)).subscribe(_=>{this.dataSource.updateOrPushItem(_)})}openFilterComponent(){this.dialog.open(j,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openReferenceValueRuleDeleteComponent(o){this.dialog.open(f.fN,{data:f.cb.delete(this.referenceValueService.deleteRule(o.referenceValueId,o.id),o)}).afterClosed().pipe((0,E.q)(1)).subscribe(_=>{this.dataSource.delete(_)})}get(){this.referenceValueService.getRules(this.referenceValue.id,this.dataSource.filterModel).pipe((0,u.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(i.uw),t.Y36(v.gz),t.Y36(Q.U),t.Y36(F))},l.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules"]],features:[t._Bn([F])],decls:5,vars:4,consts:function(){let m;return m="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],m,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,r){1&o&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return r.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return r.get()}),t.qZA()),2&o&&(t.Q6J("dataSource",r.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[p.lW,k.K,ee.f],encapsulation:2}),l})();const ne=[{path:"",component:(()=>{class l{constructor(o,r){this.dialog=o,this.route=r,this.alert$=new D.x,this.referenceValue=this.route.snapshot.data.referenceValue}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(i.uw),t.Y36(v.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-reference-value"]],features:[t._Bn([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(o,r){1&o&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"button",3)(7,"mat-icon"),t._uU(8,"arrow_back"),t.qZA()()(),t._UZ(9,"medisy-laboratory-reference-value-rules")),2&o&&(t.xp6(3),t.Oqu(r.referenceValue.testClass.name),t.xp6(2),t.Oqu(r.referenceValue.description))},dependencies:[v.rH,a.Hw,p.RK,x.z,te],encapsulation:2}),l})()}];let oe=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[z.C],imports:[c.ez,e.u5,v.Bz.forChild(ne),i.Is,d.p9,T.Tx,a.Ps,p.ot,A.LD,P.E3,I.Vn,h.c,C.V,V.h,f.su,g.n]}),l})()},2595:(L,O,n)=>{n.d(O,{V:()=>p});var c=n(6128),e=n(5879);let p=(()=>{class d{}return d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[c.X]}),d})()},6128:(L,O,n)=>{n.d(O,{X:()=>F});var c=n(6814),e=n(5879),p=n(5195),d=n(6385),i=n(617),a=n(6007),T=n(2169);let A=(()=>{class s{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return s.\u0275fac=function(u){return new(u||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(u,E){1&u&&(e.TgZ(0,"span",0),e._uU(1),e.qZA()),2&u&&(e.Q6J("className",E.getClass()),e.uIk("data-icon",E.getIcon()),e.xp6(1),e.Oqu(E.getIcon()))},dependencies:[c.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),s})(),v=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[A]}),s})();var z=n(2430),P=n(8145);function C(s,S){if(1&s&&(e.ynx(0),e._UZ(1,"sz-ui-counter",8),e.BQk()),2&s){const u=e.oxw();e.xp6(1),e.Q6J("value",u.getValue())}}function h(s,S){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&s){const u=e.oxw(2);e.xp6(1),e.hij(" ",u.card.title," ")}}function f(s,S){1&s&&e.Hsn(0,2)}function g(s,S){if(1&s&&(e.ynx(0),e.YNc(1,h,2,1,"div",9),e.YNc(2,f,1,0,"ng-template",null,10,e.W1O),e.BQk()),2&s){const u=e.MAs(3),E=e.oxw();e.xp6(1),e.Q6J("ngIf",E.card.title)("ngIfElse",u)}}function V(s,S){if(1&s&&e._UZ(0,"sz-ui-icon",11),2&s){const u=e.oxw();e.Q6J("icon",u.card.icon)}}function I(s,S){1&s&&e._UZ(0,"mat-divider")}function D(s,S){if(1&s){const u=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const Y=e.CHM(u).$implicit,U=e.oxw(2);return e.KtG(U.cardActionClick(Y))}),e._uU(1),e.qZA()}if(2&s){const u=S.$implicit;e.xp6(1),e.hij(" ",u.title," ")}}function t(s,S){if(1&s&&(e.TgZ(0,"mat-card-actions"),e.YNc(1,D,2,1,"button",12),e.qZA()),2&s){const u=e.oxw();e.xp6(1),e.Q6J("ngForOf",u.card.actions)}}function x(s,S){1&s&&e._UZ(0,"mat-progress-bar",14)}const y=[[["","content",""]],[["","footer",""]],[["","title",""]]],M=["[content]","[footer]","[title]"];let F=(()=>{class s{constructor(){this.szCardType=z.k,this.indicator=(0,e.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(u){this.card&&u&&u.clickFn&&u?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}}return s.\u0275fac=function(u){return new(u||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[e.jDz],ngContentSelectors:M,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(u,E){1&u&&(e.F$t(y),e.TgZ(0,"mat-card",0)(1,"mat-card-header",1),e.NdJ("click",function(){return E.cardClick()}),e.TgZ(2,"mat-card-subtitle"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-title",2),e.YNc(5,C,2,1,"ng-container",3),e.YNc(6,g,4,2,"ng-container",3),e.qZA(),e._UZ(7,"span",4),e.YNc(8,V,1,1,"sz-ui-icon",5),e.qZA(),e.TgZ(9,"mat-card-content"),e.Hsn(10),e.YNc(11,I,1,0,"mat-divider",6),e.YNc(12,t,2,1,"mat-card-actions",6),e.qZA(),e.TgZ(13,"mat-card-footer"),e.Hsn(14,1),e.YNc(15,x,1,0,"mat-progress-bar",7),e.qZA()()),2&u&&(e.xp6(3),e.Oqu(E.card.subtitle),e.xp6(1),e.Q6J("ngSwitch",E.card.type),e.xp6(1),e.Q6J("ngSwitchCase",E.szCardType.Counter),e.xp6(1),e.Q6J("ngSwitchCase",E.szCardType.Text),e.xp6(2),e.Q6J("ngIf",E.hasIcon()),e.xp6(3),e.Q6J("ngIf",E.hasActions()),e.xp6(1),e.Q6J("ngIf",E.hasActions()),e.xp6(3),e.Q6J("ngIf",E.indicator()))},dependencies:[c.ez,c.sg,c.O5,c.RF,c.n9,p.QW,p.a8,p.hq,p.dn,p.rt,p.dk,p.$j,p.n5,i.Ps,d.t,d.d,a.Cv,a.pW,v,A,T.c,P.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),s})()},2430:(L,O,n)=>{n.d(O,{k:()=>c});var c=(()=>((c=c||{})[c.Counter=0]="Counter",c[c.Text=1]="Text",c))()},8145:(L,O,n)=>{n.d(O,{R:()=>d});var c=n(6814),e=n(5879);const p=["*"];let d=(()=>{class i{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(T){T&&(this.animate(this.oldValue,T),this.oldValue=T)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(T,A){const v=A-T;let P=Math.abs(Math.floor(this.duration/v));P=Math.max(P,50);const h=(new Date).getTime()+this.duration,f=()=>{const g=(new Date).getTime(),V=Math.max((h-g)/this.duration,0),I=Math.round(A-V*v);this.currentValue=I,Math.round(I)===Math.round(A)&&clearInterval(this.timer)};this.timer=setInterval(f,P),f()}}return i.\u0275fac=function(T){return new(T||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[e.jDz],ngContentSelectors:p,decls:3,vars:1,template:function(T,A){1&T&&(e.F$t(),e.TgZ(0,"span"),e._uU(1),e.Hsn(2),e.qZA()),2&T&&(e.xp6(1),e.hij(" ",A.currentValue," "))},dependencies:[c.ez],encapsulation:2}),i})()},2169:(L,O,n)=>{n.d(O,{c:()=>p});var c=n(8145),e=n(5879);let p=(()=>{class d{}return d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[c.R]}),d})()},8873:(L,O,n)=>{n.d(O,{L:()=>P});var c=n(6814),e=n(6223),p=n(9157),d=n(2032),i=n(2757),a=n(5879);function T(C,h){if(1&C&&(a.TgZ(0,"mat-label"),a._uU(1),a.qZA()),2&C){const f=a.oxw();a.xp6(1),a.Oqu(f.label)}}function A(C,h){1&C&&(a.TgZ(0,"mat-error"),a.SDv(1,3),a.qZA())}function v(C,h){1&C&&(a.TgZ(0,"mat-error"),a.SDv(1,4),a.qZA())}function z(C,h){1&C&&(a.TgZ(0,"mat-error"),a.SDv(1,5),a.qZA())}let P=(()=>{class C extends i.l{constructor(f){super(f),this.ngControl=f}ngOnInit(){this.control=this.ngControl.control}writeValue(f){this.value=f}}return C.\u0275fac=function(f){return new(f||C)(a.Y36(e.a5,10))},C.\u0275cmp=a.Xpm({type:C,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[a.qOj,a.jDz],decls:7,vars:7,consts:function(){let h,f,g;return h="This field is required",f="This field has insufficient length",g="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],h,f,g]},template:function(f,g){1&f&&(a.TgZ(0,"mat-form-field",0),a.YNc(1,T,2,1,"mat-label",1),a.TgZ(2,"textarea",2),a._uU(3,"  "),a.qZA(),a.YNc(4,A,2,0,"mat-error",1),a.YNc(5,v,2,0,"mat-error",1),a.YNc(6,z,2,0,"mat-error",1),a.qZA()),2&f&&(a.xp6(1),a.Q6J("ngIf",g.label),a.xp6(1),a.Q6J("formControl",g.control)("value",g.value)("placeholder",g.placeholder),a.xp6(2),a.Q6J("ngIf",g.control.hasError("required")),a.xp6(1),a.Q6J("ngIf",g.control.hasError("minlength")),a.xp6(1),a.Q6J("ngIf",g.control.hasError("maxlength")))},dependencies:[c.ez,c.O5,e.UX,e.Fj,e.JJ,e.oH,p.lN,p.KE,p.hX,p.TO,d.c,d.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),C})()},9004:(L,O,n)=>{n.d(O,{g:()=>d});var c=n(5974),e=n(8873),p=n(5879);let d=(()=>{class i{}return i.\u0275fac=function(T){return new(T||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({imports:[c.g,e.L]}),i})()}}]);