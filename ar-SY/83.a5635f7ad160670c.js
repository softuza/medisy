"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[83],{8083:(L,p,a)=>{a.r(p),a.d(p,{LaboratoryReferenceValuesComponent:()=>Z});var E=a(2296),d=a(5986),f=a(8109),S=a(1175),l=a(3576),v=a(5041),u=a(3572),b=a(9598),y=a(8721),h=a(8180),s=a(6223),m=a(7700),R=a(6814),g=a(926),O=a(5828),V=a(8930),A=a(7398),e=a(5879),T=a(8380);let I=(()=>{class r extends O.m{constructor(t,o){super(t),this.ngControl=t,this.referenceValueService=o,this.label="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.contentFormat=n=>n.testClass.name,this.valueFormat=n=>n.id}ngOnInit(){this.control=this.ngControl.control,this.items$=this.referenceValueService.get({pageIndex:1,pageSize:50,includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe((0,h.q)(1),(0,A.U)(t=>t.items)).pipe((0,y.sU)(this.indicator))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.a5,10),e.Y36(T.U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[e._Bn([g.T]),e.qOj,e.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","optionContentFn","optionValueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("indicator",o.indicator)("items",e.lcZ(1,9,o.items$))("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("optionContentFn",o.contentFormat)("optionValueFn",o.valueFormat)},dependencies:[R.ez,R.Ov,s.UX,s.JJ,s.oH,V.E],encapsulation:2}),r})();var C=a(8652),M=a(4622),N=a(6091);const P=function(){return[]},F=function(r){return[r]};let Y=(()=>{class r extends l.Ku{constructor(t,o,n,c){super(n),this.laboratoryService=t,this.fb=o,this.dialog=n,this.data=c,this.form=o.group({referenceValueId:[c.laboratoryReferenceValue?.referenceValueId,[s.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryReferenceValue?this.laboratoryService.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value):this.laboratoryService.referenceValues.create(this.data.laboratoryId,this.form.value))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C.v),e.Y36(s.qu),e.Y36(m.so),e.Y36(m.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-reference-value",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",o.data.laboratoryReferenceValue?e.DdM(4,P):e.VKq(5,F,o.data.laboratoryId)),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,l.su,M.Y,N.t,m.Is,m.xY,d.p9,I],encapsulation:2}),r})();var z=a(2516),U=a(8359),D=a(3144);let Z=(()=>{class r{constructor(t,o,n){this.dialog=t,this.laboratoryService=o,this.route=n,this.dataSource=new u.b2(b.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("referenceValue","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",c=>c.referenceValue.testClass.name),S.h.createdAt(),S.h.menu([u.od.edit(c=>{this.openSaveComponent(c)}),u.od.delete(c=>{this.openLaboratoryReferenceValueDeleteComponent(c)})])],this.get()}openSaveComponent(t){this.dialog.open(Y,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:t}}).afterClosed().pipe((0,h.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openLaboratoryReferenceValueDeleteComponent(t){this.dialog.open(l.fN,{data:l.cb.delete(this.laboratoryService.referenceValues.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,h.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.referenceValues.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator)).pipe((0,h.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.uw),e.Y36(C.v),e.Y36(f.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let i,t;return i="\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[f.Bz,f.rH,v.n,z.z,u.Vn,U.K,D.f,d.p9,E.ot,E.lW],encapsulation:2}),r})()},926:(L,p,a)=>{a.d(p,{T:()=>S});var E=a(2462),d=a(5879),f=a(9862);let S=(()=>{class l extends E.p{constructor(u){super(u,"medisy-people/v1/languages"),this.http=u}}return l.\u0275fac=function(u){return new(u||l)(d.LFG(f.eN))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})()}}]);