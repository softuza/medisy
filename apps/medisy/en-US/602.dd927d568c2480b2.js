"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[602],{2602:(X,h,t)=>{t.r(h),t.d(h,{ReferenceValuesModule:()=>de});var v=t(6814),o=t(6223),u=t(4630),g=t(9014),E=t(2296),M=t(5195),A=t(5986),R=t(3680),c=t(7700),N=t(617),I=t(2032),i=t(9038),f=t(7988),m=t(1476),d=t(5940),O=t(8525),Z=t(3566),x=t(1545),B=t(5313),Q=t(2596),G=t(8109),K=t(6981),W=t(465),_=t(8380),j=t(4407),p=t(6750),b=t(9004),H=t(5041),q=t(8766),C=t(8874),F=t(2191),y=t(7277),L=t(2119),S=t(8180),w=t(7263),e=t(5879),P=t(4889),U=t(1175),D=t(9862),k=t(3971),V=t(7398);let Y=(()=>{class a{constructor(n){this.http=n,this.path="medisy-laboratory/v1/units",this.units$=this.getUnits().pipe((0,S.q)(1)).pipe((0,V.U)(r=>r.items))}getUnits(n=y.q.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new D.LE({fromObject:(0,k.c)(n)})})}}return a.\u0275fac=function(n){return new(n||a)(e.LFG(D.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var ee=t(6893),te=t(8930);let z=(()=>{class a extends ee.m{constructor(n,r){super(n),this.ngControl=n,this.unitService=r,this.label="Unit",this.indicator=(0,e.tdS)(!0),this.contentFormat=s=>s.name,this.valueFormat=s=>s.id,this.items$=this.unitService.getUnits().pipe((0,S.q)(1),(0,V.U)(s=>s.items)).pipe((0,L.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}writeValue(n){this.value=n}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(o.a5,10),e.Y36(Y))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-form-field-unit"]],features:[e._Bn([Y]),e.qOj],decls:2,vars:11,consts:[[3,"formControl","loading","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(n,r){1&n&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&n&&e.Q6J("formControl",r.control)("loading",r.indicator())("items",e.lcZ(1,9,r.items$))("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)("valueFn",r.valueFormat)},dependencies:[o.JJ,o.oH,te.E,v.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})();var $=t(4622),J=t(6091);let oe=(()=>{class a extends p.Z2{constructor(n,r,s){super(r),this.fb=n,this.dialog=r,this.data=s,this.comparisonOperators=Object.values(w.v),this.form=n.group({testClassId:[s.testClassId],unitId:[s.unitId],laboratoryId:[s.laboratoryId]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(o.qu),e.Y36(c.so),e.Y36(c.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-reference-values-filter"]],features:[e._Bn([]),e.qOj],decls:7,vars:6,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","laboratoryId",3,"emptyOption"],[3,"actions"]],template:function(n,r){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&n&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",r.actions))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,c.xY,P.w,U.U,z,$.Y,J.t],encapsulation:2}),a})();var ne=t(6187),re=t(8873);let ae=(()=>{class a extends p.Ku{constructor(n,r,s,T){super(s),this.referenceValueService=n,this.fb=r,this.dialog=s,this.data=T,this.form=r.group({description:[T?.description,[o.kI.maxLength(4096)]],testClassId:[T?.testClassId,[o.kI.required]],unitId:[T?.unitId,[]],laboratoryId:[T?.laboratoryId,[o.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.referenceValueService.updateReferenceValue(this.data.id,this.form.value):this.referenceValueService.createReferenceValue(this.form.value))}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.U),e.Y36(o.qu),e.Y36(c.so),e.Y36(c.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-analysis-management-reference-values-save"]],features:[e._Bn([ne.T]),e.qOj],decls:8,vars:3,consts:function(){let l;return l="Description",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",l],["formControlName","unitId"],["formControlName","testClassId"],["formControlName","laboratoryId"],[3,"actions"]]},template:function(n,r){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"medisy-form-field-test-class",4)(6,"medisy-form-field-laboratory",5),e.qZA()(),e._UZ(7,"sz-ui-dialog-actions",6)),2&n&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("actions",r.actions))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,c.xY,re.J,P.w,U.U,z,$.Y,J.t],encapsulation:2}),a})();var se=t(2516),le=t(9692),ie=t(9288);const me=[{path:"",component:(()=>{class a{constructor(n,r){this.dialog=n,this.valueReferenceService=r,this.dataSource=new C.b2(y.q.paged()),this.dataSource.columns=[C.De.column.hyperlink("testClass","Test class",s=>s.id,s=>s.testClass.name),F.N.column.createdAt(),F.N.column.menu([C.De.action.edit(s=>this.openSaveComponent(s)),C.De.action.delete(s=>this.openReferenceValueDeleteComponent(s))])],this.get()}openSaveComponent(n){this.dialog.open(ae,{data:n}).afterClosed().pipe((0,S.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(oe,{data:this.dataSource.filterModel}).afterClosed().pipe((0,S.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openReferenceValueDeleteComponent(n){this.dialog.open(p.fN,{data:p.a8.delete(this.valueReferenceService.deleteReferenceValue(n.id),n.id)}).afterClosed().pipe((0,S.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.valueReferenceService.getReferenceValues(this.dataSource.filterModel).pipe((0,L.sU)(this.dataSource.indicator),(0,S.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(c.uw),e.Y36(_.U))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:function(){let l,n;return l="Reference Values",n="Add",[["start","",1,"sz-h5"],l,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,r){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return r.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return r.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",r.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[se.z,le.K,ie.f,E.lW],encapsulation:2}),a})()}];let de=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[_.U],imports:[v.ez,o.u5,o.UX,G.Bz.forChild(me),c.Is,u.Bb,B.p0,m.TU,I.c,H.n,C.Vn,q.h,b.g,K.F,j.E,p.su,A.p9,f.Tx,N.Ps,E.ot,O.LD,x.T5,Q.AV,i.ie,Z.JX,g.g,R.XK,M.QW,d.Cq,W.L,p.su]}),a})()},8873:(X,h,t)=>{t.d(h,{J:()=>I});var v=t(2757),o=t(5879),u=t(6223),g=t(6814),E=t(9157),M=t(2032);function A(i,f){if(1&i&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&i){const m=o.oxw();o.xp6(1),o.Oqu(m.label)}}function R(i,f){1&i&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function c(i,f){1&i&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function N(i,f){1&i&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let I=(()=>{class i extends v.l{constructor(m){super(m),this.ngControl=m}ngOnInit(){this.control=this.ngControl.control}writeValue(m){this.value=m}}return i.\u0275fac=function(m){return new(m||i)(o.Y36(u.a5,10))},i.\u0275cmp=o.Xpm({type:i,selectors:[["sz-ui-form-field-textarea"]],features:[o.qOj],decls:7,vars:7,consts:function(){let f,m,d;return f="This field is required",m="This field has insufficient length",d="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],f,m,d]},template:function(m,d){1&m&&(o.TgZ(0,"mat-form-field",0),o.YNc(1,A,2,1,"mat-label",1),o.TgZ(2,"textarea",2),o._uU(3,"  "),o.qZA(),o.YNc(4,R,2,0,"mat-error",1),o.YNc(5,c,2,0,"mat-error",1),o.YNc(6,N,2,0,"mat-error",1),o.qZA()),2&m&&(o.xp6(1),o.Q6J("ngIf",d.label),o.xp6(1),o.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),o.xp6(2),o.Q6J("ngIf",d.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("maxlength")))},dependencies:[g.O5,u.Fj,u.JJ,u.oH,E.KE,E.hX,E.TO,M.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),i})()}}]);