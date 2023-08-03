"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[49],{6049:(h,p,t)=>{t.r(p),t.d(p,{ReferenceValueModule:()=>ne});var u=t(6814),a=t(6223),d=t(2296),i=t(5986),S=t(3680),m=t(7700),A=t(617),T=t(2032),L=t(7988),y=t(8525),C=t(8109),Y=t(6981),D=t(465),v=t(6987),z=t(758),$=t(2595),Z=t(2169),R=t(4110),x=t(9004),F=t(5041),J=t(7239),E=t(3572),G=t(8645),e=t(5879),B=t(2516),_=t(2191),N=t(5837),X=t(9598),Q=t(8721),O=t(8180),b=t(6187),V=t(2557),g=t(4257),P=t(4622),U=t(6091);let W=(()=>{class r extends R.Z2{constructor(o,n,s){super(n),this.fb=o,this.dialog=n,this.data=s,this.form=o.group({referenceGroupId:[s.referenceGroupId],comparisonOperator:[s.comparisonOperator]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(a.qu),e.Y36(m.so),e.Y36(m.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-value-rules-filter"]],features:[e._Bn([b.T]),e.qOj],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",n.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,m.xY,V.P,g.f,P.Y,U.t],encapsulation:2}),r})();var M=t(7263),I=t(8380),j=t(9157),K=t(8873);function H(r,l){1&r&&(e.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),e._UZ(3,"input",10),e.qZA()(),e.TgZ(4,"mat-form-field",9)(5,"label"),e._UZ(6,"input",11),e.qZA()()())}function w(r,l){1&r&&(e.TgZ(0,"mat-form-field",9)(1,"label"),e._UZ(2,"input",12),e.qZA()())}let q=(()=>{class r extends R.Ku{constructor(o,n,s,c){super(s),this.referenceValueService=o,this.fb=n,this.dialog=s,this.data=c,this.form=n.group({description:[c.referenceValueRule?.description,[a.kI.maxLength(4096)]],comparisonOperator:[c.referenceValueRule?.comparisonOperator??M.v.Equal,[a.kI.required]],referenceGroupId:[c.referenceValueRule?.referenceGroupId,[a.kI.required]],value:[c.referenceValueRule?.value,[]],start:[c.referenceValueRule?.start,[]],end:[c.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===M.v.RangeWithBoundaries||this.form.value.comparisonOperator===M.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.referenceValueService.updateReferenceValueRule(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.referenceValueService.createReferenceValueRule(this.data.referenceValueId,this.form.value))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(I.U),e.Y36(a.qu),e.Y36(m.so),e.Y36(m.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-value-rules-save"]],features:[e._Bn([v.C]),e.qOj],decls:9,vars:5,consts:function(){let l,o,n,s;return l="\u0627\u0644\u0648\u0635\u0641",o="\u0628\u062F\u0627\u064A\u0629",n="\u0646\u0647\u0627\u064A\u0629",s="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",l],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",o],["autocomplete","off","formControlName","end","matInput","","placeholder",n],["autocomplete","off","formControlName","value","matInput","","placeholder",s]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),e.YNc(5,H,7,0,"div",4),e.YNc(6,w,3,0,"mat-form-field",5),e._UZ(7,"medisy-form-field-reference-group",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(3),e.Q6J("ngIf",n.isRange()),e.xp6(1),e.Q6J("ngIf",!n.isRange()),e.xp6(2),e.Q6J("actions",n.actions))},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,m.xY,T.Nt,j.KE,K.J,V.P,g.f,P.Y,U.t],encapsulation:2}),r})();var k=t(6939),ee=t(3144);let te=(()=>{class r{constructor(o,n,s,c){this.dialog=o,this.route=n,this.referenceValueService=s,this.comparisonOperatorI18nPipe=c,this.dataSource=new E.b2(X.J.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[E.UC.text("referenceGroup","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",f=>f.referenceGroup.name),_.h.comparisonOperator(f=>c.transform(f.comparisonOperator)),E.UC.text("value","\u0642\u064A\u0645\u0629",f=>f.value?f.value:`${f.start} - ${f.end}`),_.h.createdAt(),_.h.menu([E.od.edit(f=>this.openSaveComponent(f)),E.od.delete(f=>{this.openReferenceValueRuleDeleteComponent(f)})])],this.get()}openSaveComponent(o){this.dialog.open(q,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:o}}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe((0,O.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}openReferenceValueRuleDeleteComponent(o){this.dialog.open(R.fN,{data:R.cb.delete(this.referenceValueService.deleteReferenceValueRule(o.referenceValueId,o.id),o)}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.referenceValueService.getReferenceValueRules(this.referenceValue.id,this.dataSource.filterModel).pipe((0,Q.sU)(this.dataSource.indicator),(0,O.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(m.uw),e.Y36(C.gz),e.Y36(I.U),e.Y36(N.Q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-value-rules"]],features:[e._Bn([N.Q])],decls:5,vars:4,consts:function(){let l;return l="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],l,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-table-filter",0),e.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),e.TgZ(1,"button",1),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(2,"span"),e.SDv(3,2),e.qZA()()(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[d.lW,k.K,ee.f],encapsulation:2}),r})();const oe=[{path:"",component:(()=>{class r{constructor(o,n){this.dialog=o,this.route=n,this.alert$=new G.x,this.referenceValue=this.route.snapshot.data.referenceValue}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(m.uw),e.Y36(C.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-value"]],features:[e._Bn([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA()(),e.TgZ(6,"button",3)(7,"mat-icon"),e._uU(8,"arrow_back"),e.qZA()()(),e._UZ(9,"medisy-laboratory-reference-value-rules")),2&o&&(e.xp6(3),e.Oqu(n.referenceValue.testClass.name),e.xp6(2),e.Oqu(n.referenceValue.description))},dependencies:[C.rH,A.Hw,d.RK,B.z,te],encapsulation:2}),r})()}];let ne=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[v.C],imports:[u.ez,a.u5,a.UX,C.Bz.forChild(oe),m.Is,T.c,i.p9,L.Tx,A.Ps,S.Ng,d.ot,y.LD,z.E3,E.Vn,Z.c,$.V,J.h,x.g,Y.F,R.su,F.n,D.X]}),r})()},2191:(h,p,t)=>{t.d(p,{h:()=>a});var u=t(3572);class a{static menu(i){return u.UC.action("menu",i)}static code(){return u.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return u.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return u.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return u.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(i,S,m){return u.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",i,S,m)}static nameText(i){return u.UC.text("name","\u0627\u0644\u0627\u0633\u0645",i)}static phoneType(i){return u.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",i)}static emailType(i){return u.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",i)}static documentType(i){return u.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",i)}static comparisonOperator(i){return u.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",i)}}},465:(h,p,t)=>{t.d(p,{X:()=>a});var u=t(5879);let a=(()=>{class d{}return d.\u0275fac=function(S){return new(S||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({}),d})()}}]);