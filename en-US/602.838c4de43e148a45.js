"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[602],{2602:(g,C,t)=>{t.r(C),t.d(C,{ReferenceValuesModule:()=>H});var f=t(6814),s=t(6223),m=t(2296),d=t(7700),p=t(617),n=t(8109),T=t(465),O=t(8380),h=t(758),S=t(3576),v=t(5041),c=t(7239),E=t(3572),u=t(2191),_=t(9598),A=t(8721),R=t(8180),U=t(4889),N=t(1175),D=t(4949),e=t(5879),y=t(9862);let I=(()=>{class l extends D.e{constructor(o){super(o,"medisy-laboratory/v1/units"),this.http=o}}return l.\u0275fac=function(o){return new(o||l)(e.LFG(y.eN))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac}),l})();var z=t(6893),Y=t(8930);let F=(()=>{class l extends z.m{constructor(o,r){super(o),this.ngControl=o,this.unitService=r,this.label="Unit",this.contentFormat=a=>a.name,this.valueFormat=a=>a.id,this.items$=this.unitService.getItems(_.J.unpagedSorted("name")).pipe((0,R.q)(1),(0,A.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(s.a5,10),e.Y36(I))},l.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[e._Bn([I]),e.qOj,e.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(o,r){1&o&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&o&&e.Q6J("formControl",r.control)("indicator",r.indicator)("items",e.lcZ(1,9,r.items$))("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)("valueFn",r.valueFormat)},dependencies:[f.ez,f.Ov,s.UX,s.JJ,s.oH,Y.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),l})();var V=t(7263),P=t(4622),L=t(6091);let $=(()=>{class l extends S.Z2{constructor(o,r,a){super(r),this.fb=o,this.dialog=r,this.data=a,this.comparisonOperators=Object.values(V.v),this.form=o.group({testClassId:[a.testClassId],unitId:[a.unitId],includeLaboratoryIds:[a.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))},l.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,r){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",r.actions))},dependencies:[f.ez,s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,d.Is,d.xY,S.su,P.Y,L.t,N.U,F,U.w],encapsulation:2}),l})();var X=t(5986),J=t(9157),Z=t(6187),B=t(9004),x=t(5974),G=t(8873);let Q=(()=>{class l extends S.Ku{constructor(o,r,a,M){super(a),this.referenceValueService=o,this.fb=r,this.dialog=a,this.data=M,this.form=r.group({description:[M?.description,[s.kI.maxLength(4096)]],testClassId:[M?.testClassId,[s.kI.required]],unitId:[M?.unitId,[]],multiplier:[M?.multiplier,[]]})}submit(){this.IsValid()&&this.save(this.data?this.referenceValueService.update(this.data.id,this.form.value):this.referenceValueService.create(this.form.value))}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(O.U),e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))},l.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-analysis-management-reference-values-save"]],standalone:!0,features:[e._Bn([Z.T]),e.qOj,e.jDz],decls:8,vars:3,consts:function(){let i,o;return i="Description",o="Multiplier",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","unitId"],["formControlName","multiplier","label",o],["formControlName","testClassId"],[3,"actions"]]},template:function(o,r){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),e.qZA()(),e._UZ(7,"sz-ui-dialog-actions",6)),2&o&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("actions",r.actions))},dependencies:[f.ez,s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,d.Is,d.xY,J.lN,X.p9,S.su,P.Y,L.t,B.g,x.g,G.L,F,N.U],encapsulation:2}),l})();var b=t(2516),j=t(3582),K=t(3144);const W=[{path:"",component:(()=>{class l{constructor(o,r){this.dialog=o,this.valueReferenceService=r,this.dataSource=new E.b2(_.J.paged()),this.dataSource.columns=[E.UC.hyperlink("testClass","Test class",a=>a.id,a=>a.testClass.name),E.UC.text("unit","Unit",a=>a.multiplier?`10^${a.multiplier.toExponential(0).split("e").map(M=>Number(M))[1]}/${a.unit?.abbreviation}`:a.unit?.abbreviation),u.h.createdAt(),u.h.menu([E.od.edit(a=>this.openSaveComponent(a)),E.od.delete(a=>this.openReferenceValueDeleteComponent(a))])],this.get()}openSaveComponent(o){this.dialog.open(Q,{data:o}).afterClosed().pipe((0,R.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openFilterComponent(){this.dialog.open($,{data:this.dataSource.filterModel}).afterClosed().pipe((0,R.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openReferenceValueDeleteComponent(o){this.dialog.open(S.fN,{data:S.cb.delete(this.valueReferenceService.delete(o.id),o)}).afterClosed().pipe((0,R.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}get(){this.valueReferenceService.get(this.dataSource.filterModel).pipe((0,A.sU)(this.dataSource.indicator),(0,R.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(d.uw),e.Y36(O.U))},l.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:function(){let i,o;return i="Reference Values",o="Add",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,r){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return r.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return r.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",r.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[m.lW,b.z,j.K,K.f],encapsulation:2}),l})()}];let H=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[O.U],imports:[f.ez,s.u5,s.UX,n.Bz.forChild(W),d.Is,p.Ps,m.ot,v.n,E.Vn,c.h,h.E3,S.su,T.X]}),l})()},465:(g,C,t)=>{t.d(C,{X:()=>s});var f=t(5879);let s=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=f.oAB({type:m}),m.\u0275inj=f.cJS({}),m})()},8873:(g,C,t)=>{t.d(C,{L:()=>v});var f=t(6814),s=t(6223),m=t(9157),d=t(2032),p=t(2757),n=t(5879);function T(c,E){if(1&c&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&c){const u=n.oxw();n.xp6(1),n.Oqu(u.label)}}function O(c,E){1&c&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function h(c,E){1&c&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function S(c,E){1&c&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let v=(()=>{class c extends p.l{constructor(u){super(u),this.ngControl=u}ngOnInit(){this.control=this.ngControl.control}writeValue(u){this.value=u}}return c.\u0275fac=function(u){return new(u||c)(n.Y36(s.a5,10))},c.\u0275cmp=n.Xpm({type:c,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[n.qOj,n.jDz],decls:7,vars:7,consts:function(){let E,u,_;return E="This field is required",u="This field has insufficient length",_="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],E,u,_]},template:function(u,_){1&u&&(n.TgZ(0,"mat-form-field",0),n.YNc(1,T,2,1,"mat-label",1),n.TgZ(2,"textarea",2),n._uU(3,"  "),n.qZA(),n.YNc(4,O,2,0,"mat-error",1),n.YNc(5,h,2,0,"mat-error",1),n.YNc(6,S,2,0,"mat-error",1),n.qZA()),2&u&&(n.xp6(1),n.Q6J("ngIf",_.label),n.xp6(1),n.Q6J("formControl",_.control)("value",_.value)("placeholder",_.placeholder),n.xp6(2),n.Q6J("ngIf",_.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",_.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",_.control.hasError("maxlength")))},dependencies:[f.ez,f.O5,s.UX,s.Fj,s.JJ,s.oH,m.lN,m.KE,m.hX,m.TO,d.c,d.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),c})()},9004:(g,C,t)=>{t.d(C,{g:()=>d});var f=t(5974),s=t(8873),m=t(5879);let d=(()=>{class p{}return p.\u0275fac=function(T){return new(T||p)},p.\u0275mod=m.oAB({type:p}),p.\u0275inj=m.cJS({imports:[f.g,s.L]}),p})()}}]);