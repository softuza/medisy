"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[14],{7014:(A,m,t)=>{t.r(m),t.d(m,{ReferenceValuesModule:()=>X});var i=t(6814),l=t(6223),d=t(2296),s=t(7700),p=t(617),C=t(8109),g=t(6981),_=t(465),R=t(8380),N=t(758),E=t(4110),I=t(9004),P=t(5041),y=t(7239),f=t(3572),h=t(2191),U=t(9598),V=t(8721),S=t(8180),L=t(7263),e=t(5879),Y=t(4889),M=t(1175),v=t(9692),T=t(4622),O=t(6091);let z=(()=>{class r extends E.Z2{constructor(o,n,a){super(n),this.fb=o,this.dialog=n,this.data=a,this.comparisonOperators=Object.values(L.v),this.form=o.group({testClassId:[a.testClassId],unitId:[a.unitId],includeLaboratoryIds:[a.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.qu),e.Y36(s.so),e.Y36(s.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-reference-values-filter"]],features:[e._Bn([]),e.qOj],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",n.actions))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,s.xY,Y.w,M.U,v.V,T.Y,O.t],encapsulation:2}),r})();var D=t(6187),$=t(5974),F=t(8873);let J=(()=>{class r extends E.Ku{constructor(o,n,a,c){super(a),this.referenceValueService=o,this.fb=n,this.dialog=a,this.data=c,this.form=n.group({description:[c?.description,[l.kI.maxLength(4096)]],testClassId:[c?.testClassId,[l.kI.required]],unitId:[c?.unitId,[]],multiplier:[c?.multiplier,[]]})}submit(){this.IsValid()&&this.save(this.data?this.referenceValueService.updateReferenceValue(this.data.id,this.form.value):this.referenceValueService.createReferenceValue(this.form.value))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(R.U),e.Y36(l.qu),e.Y36(s.so),e.Y36(s.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-analysis-management-reference-values-save"]],features:[e._Bn([D.T]),e.qOj],decls:8,vars:3,consts:function(){let u,o;return u="\u0627\u0644\u0648\u0635\u0641",o="\u0645\u0636\u0627\u0639\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",u],["formControlName","unitId"],["formControlName","multiplier","label",o],["formControlName","testClassId"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),e.qZA()(),e._UZ(7,"sz-ui-dialog-actions",6)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("actions",n.actions))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,s.xY,$.g,F.J,M.U,v.V,T.Y,O.t],encapsulation:2}),r})();var Z=t(2516),b=t(6939),x=t(3144);const B=[{path:"",component:(()=>{class r{constructor(o,n){this.dialog=o,this.valueReferenceService=n,this.dataSource=new f.b2(U.J.paged()),this.dataSource.columns=[f.UC.hyperlink("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",a=>a.id,a=>a.testClass.name),f.UC.text("unit","\u0648\u062D\u062F\u0629",a=>a.multiplier?`10^${a.multiplier.toExponential(0).split("e").map(c=>Number(c))[1]}/${a.unit?.abbreviation}`:a.unit?.abbreviation),h.h.createdAt(),h.h.menu([f.od.edit(a=>this.openSaveComponent(a)),f.od.delete(a=>this.openReferenceValueDeleteComponent(a))])],this.get()}openSaveComponent(o){this.dialog.open(J,{data:o}).afterClosed().pipe((0,S.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openFilterComponent(){this.dialog.open(z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,S.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}openReferenceValueDeleteComponent(o){this.dialog.open(E.fN,{data:E.cb.delete(this.valueReferenceService.deleteReferenceValue(o.id),o)}).afterClosed().pipe((0,S.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}get(){this.valueReferenceService.getReferenceValues(this.dataSource.filterModel).pipe((0,V.sU)(this.dataSource.indicator),(0,S.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(s.uw),e.Y36(R.U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:function(){let u,o;return u="\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",o="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],u,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[d.lW,Z.z,b.K,x.f],encapsulation:2}),r})()}];let X=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[R.U],imports:[i.ez,l.u5,l.UX,C.Bz.forChild(B),s.Is,p.Ps,d.ot,P.n,f.Vn,y.h,I.g,g.F,N.E3,E.su,_.X]}),r})()},2191:(A,m,t)=>{t.d(m,{h:()=>l});var i=t(3572);class l{static menu(s){return i.UC.action("menu",s)}static code(){return i.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return i.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return i.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return i.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(s,p,C){return i.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",s,p,C)}static nameText(s){return i.UC.text("name","\u0627\u0644\u0627\u0633\u0645",s)}static phoneType(s){return i.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",s)}static emailType(s){return i.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",s)}static documentType(s){return i.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",s)}static comparisonOperator(s){return i.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",s)}}},465:(A,m,t)=>{t.d(m,{X:()=>l});var i=t(5879);let l=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({}),d})()}}]);