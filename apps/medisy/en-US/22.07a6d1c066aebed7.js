"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[22],{6022:(V,S,o)=>{o.r(S),o.d(S,{ReferenceValueModule:()=>Oe});var R=o(6814),n=o(6223),_=o(4630),M=o(9014),O=o(2296),g=o(5195),A=o(5986),C=o(3680),T=o(8034),f=o(7700),p=o(617),i=o(2032),c=o(9038),m=o(7988),d=o(1476),v=o(5940),B=o(8525),Z=o(3566),x=o(1545),X=o(5313),J=o(2596),P=o(8109),G=o(6981),W=o(465),K=o(6576),L=o(4485),Q=o(4407),j=o(2595),H=o(696),b=o(2169),h=o(6750),q=o(9004),w=o(5041),k=o(8766),N=o(8874),ee=o(8645),e=o(5879),oe=o(2516),D=o(2191),te=o(7277),ne=o(2119),I=o(8180),re=o(6187),U=o(6202),E=o(7263);let F=(()=>{class a{transform(t,r=!1){switch(t){case E.v.Equal:return r?"==":"Equal";case E.v.GreaterThan:return r?">":"GreaterThan";case E.v.GreaterThanOrEqual:return r?">=":"GreaterThanOrEqual";case E.v.LessThan:return r?"<":"LessThan";case E.v.LessThanOrEqual:return r?"<=":"LessThanOrEqual";case E.v.RangeWithBoundaries:return r?"<==>":"RangeWithBoundaries";case E.v.RangeWithoutBoundaries:return r?"<>":"RangeWithoutBoundaries";case E.v.Not:return r?"!=":"Not";default:return""}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=e.Yjl({name:"comparisonOperatorI18n",type:a,pure:!0}),a})();var ae=o(6893),le=o(8930);let Y=(()=>{class a extends ae.m{constructor(t,r){super(t),this.ngControl=t,this.comparisonOperatorI18nPipe=r,this.items=Object.keys(E.v).map(s=>E.v[s]),this.label="Comparison Operator",this.contentFormat=s=>this.comparisonOperatorI18nPipe.transform(s)}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(n.a5,10),e.Y36(F))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-form-field-comparison-operator"]],features:[e._Bn([F]),e.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(t,r){1&t&&e._UZ(0,"sz-ui-form-field-select",0),2&t&&e.Q6J("formControl",r.control)("items",r.items)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)},dependencies:[n.JJ,n.oH,le.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})();var y=o(4622),z=o(6091);let se=(()=>{class a extends h.Z2{constructor(t,r,s){super(r),this.fb=t,this.dialog=r,this.data=s,this.form=t.group({referenceGroupId:[s.referenceGroupId],comparisonOperator:[s.comparisonOperator]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(n.qu),e.Y36(f.so),e.Y36(f.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-reference-value-rules-filter"]],features:[e._Bn([re.T]),e.qOj],decls:6,vars:4,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId"],[3,"actions"]],template:function(t,r){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-gourp",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(2),e.Q6J("actions",r.actions))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.xY,U.P,Y,y.Y,z.t],encapsulation:2}),a})();var $=o(8380),ie=o(9157),ue=o(8873);function me(a,l){1&a&&(e.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),e._UZ(3,"input",10),e.qZA()(),e.TgZ(4,"mat-form-field",9)(5,"label"),e._UZ(6,"input",11),e.qZA()()())}function fe(a,l){1&a&&(e.TgZ(0,"mat-form-field",9)(1,"label"),e._UZ(2,"input",12),e.qZA()())}let ce=(()=>{class a extends h.Ku{constructor(t,r,s,u){super(s),this.referenceValueService=t,this.fb=r,this.dialog=s,this.data=u,this.form=r.group({description:[u.referenceValueRule?.description,[n.kI.maxLength(4096)]],comparisonOperator:[u.referenceValueRule?.comparisonOperator??E.v.Equal,[n.kI.required]],referenceGroupId:[u.referenceValueRule?.referenceGroupId,[n.kI.required]],value:[u.referenceValueRule?.value,[]],start:[u.referenceValueRule?.start,[]],end:[u.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===E.v.RangeWithBoundaries||this.form.value.comparisonOperator===E.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.referenceValueService.updateReferenceValueRule(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.referenceValueService.createReferenceValueRule(this.data.referenceValueId,this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36($.U),e.Y36(n.qu),e.Y36(f.so),e.Y36(f.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-reference-value-rules-save"]],features:[e._Bn([L.D]),e.qOj],decls:9,vars:5,consts:function(){let l,t,r,s;return l="Description",t="Start",r="End",s="Value",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",l],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",t],["autocomplete","off","formControlName","end","matInput","","placeholder",r],["autocomplete","off","formControlName","value","matInput","","placeholder",s]]},template:function(t,r){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),e.YNc(5,me,7,0,"div",4),e.YNc(6,fe,3,0,"mat-form-field",5),e._UZ(7,"medisy-form-field-reference-gourp",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&t&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(3),e.Q6J("ngIf",r.isRange()),e.xp6(1),e.Q6J("ngIf",!r.isRange()),e.xp6(2),e.Q6J("actions",r.actions))},dependencies:[R.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,f.xY,i.Nt,ie.KE,ue.J,U.P,Y,y.Y,z.t],encapsulation:2}),a})();var de=o(9692),Ee=o(9288);let pe=(()=>{class a{constructor(t,r,s){this.dialog=t,this.route=r,this.referenceValueService=s,this.dataSource=new N.b2(te.q.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[N.De.column.hyperlink("referenceGroup","Reference group",u=>u.id,u=>u.referenceGroup.name),D.m.createdAt(),D.m.menu([N.De.action.edit(u=>this.openSaveComponent(u)),N.De.action.delete(u=>{this.openReferenceValueRuleDeleteComponent(u)})])],this.get()}openSaveComponent(t){this.dialog.open(ce,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:t}}).afterClosed().pipe((0,I.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(se,{data:this.dataSource.filterModel}).afterClosed().pipe((0,I.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openReferenceValueRuleDeleteComponent(t){this.dialog.open(h.fN,{data:h.a8.delete(this.referenceValueService.deleteReferenceValueRule(t.refereceValueId,t.id),t.id)}).afterClosed().pipe((0,I.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}formatData(t){return t.value?t.value:`${t.start} - ${t.end}`}get(){this.referenceValueService.getReferenceValueRules(this.referenceValue.id,this.dataSource.filterModel).pipe((0,ne.sU)(this.dataSource.indicator),(0,I.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(f.uw),e.Y36(P.gz),e.Y36($.U))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-reference-value-rules"]],decls:5,vars:4,consts:function(){let l;return l="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],l,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,r){1&t&&(e.TgZ(0,"sz-ui-table-filter",0),e.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),e.TgZ(1,"button",1),e.NdJ("click",function(){return r.openSaveComponent()}),e.TgZ(2,"span"),e.SDv(3,2),e.qZA()()(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return r.get()}),e.qZA()),2&t&&(e.Q6J("dataSource",r.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[O.lW,de.K,Ee.f],encapsulation:2}),a})();const _e=[{path:"",component:(()=>{class a{constructor(t,r){this.dialog=t,this.route=r,this.alert$=new ee.x,this.referenceValue=this.route.snapshot.data.referenceValue}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(f.uw),e.Y36(P.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-reference-value"]],features:[e._Bn([])],decls:7,vars:2,consts:[["start",""],[1,"sz-h5"],["routerLink","../",1,"tw-underline","tw-text-sm"]],template:function(t,r){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"a",2),e._uU(5),e.qZA()()(),e._UZ(6,"medisy-laboratory-reference-value-rules")),2&t&&(e.xp6(3),e.Oqu(r.referenceValue.testClass.name),e.xp6(2),e.Oqu(r.referenceValue.testClass.name))},dependencies:[P.rH,oe.z,pe],encapsulation:2}),a})()}];let Oe=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[L.D],imports:[R.ez,n.u5,n.UX,P.Bz.forChild(_e),f.Is,_.Bb,i.c,H.S,A.p9,m.Tx,p.Ps,O.ot,B.LD,x.T5,J.AV,c.ie,g.QW,v.Cq,C.XK,T.FA,X.p0,d.TU,Z.JX,Q.E,N.Vn,b.c,j.V,k.h,q.g,G.F,h.su,w.n,W.L,d.TU,f.Is,C.Ng,M.g,K.f]}),a})()},2595:(V,S,o)=>{o.d(S,{V:()=>f});var R=o(6814),n=o(2296),_=o(5195),M=o(6385),O=o(617),g=o(6007),A=o(2169),C=o(7280),T=o(5879);let f=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=T.oAB({type:p}),p.\u0275inj=T.cJS({imports:[R.ez,O.Ps,_.QW,A.c,C.o,g.Cv,M.t,n.ot]}),p})()},8873:(V,S,o)=>{o.d(S,{J:()=>p});var R=o(2757),n=o(5879),_=o(6223),M=o(6814),O=o(9157),g=o(2032);function A(i,c){if(1&i&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&i){const m=n.oxw();n.xp6(1),n.Oqu(m.label)}}function C(i,c){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function T(i,c){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function f(i,c){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let p=(()=>{class i extends R.l{constructor(m){super(m),this.ngControl=m}ngOnInit(){this.control=this.ngControl.control}writeValue(m){this.value=m}}return i.\u0275fac=function(m){return new(m||i)(n.Y36(_.a5,10))},i.\u0275cmp=n.Xpm({type:i,selectors:[["sz-ui-form-field-textarea"]],features:[n.qOj],decls:7,vars:7,consts:function(){let c,m,d;return c="This field is required",m="This field has insufficient length",d="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],c,m,d]},template:function(m,d){1&m&&(n.TgZ(0,"mat-form-field",0),n.YNc(1,A,2,1,"mat-label",1),n.TgZ(2,"textarea",2),n._uU(3,"  "),n.qZA(),n.YNc(4,C,2,0,"mat-error",1),n.YNc(5,T,2,0,"mat-error",1),n.YNc(6,f,2,0,"mat-error",1),n.qZA()),2&m&&(n.xp6(1),n.Q6J("ngIf",d.label),n.xp6(1),n.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),n.xp6(2),n.Q6J("ngIf",d.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",d.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",d.control.hasError("maxlength")))},dependencies:[M.O5,_.Fj,_.JJ,_.oH,O.KE,O.hX,O.TO,g.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),i})()}}]);