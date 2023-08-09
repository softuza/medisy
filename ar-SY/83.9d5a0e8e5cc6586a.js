"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[83],{8083:(C,h,t)=>{t.r(h),t.d(h,{LaboratoryReferenceValuesComponent:()=>_});var f=t(2296),S=t(5986),p=t(8109),v=t(2191),m=t(3576),R=t(5041),d=t(3572),u=t(9598),y=t(8721),i=t(8180),s=t(6223),E=t(7700),L=t(6814),O=t(926),b=t(6893),A=t(8930),V=t(7398),e=t(5879),T=t(8380);let I=(()=>{class r extends b.m{constructor(a,o){super(a),this.ngControl=a,this.referenceValueService=o,this.label="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.contentFormat=n=>n.testClass.name,this.valueFormat=n=>n.id}ngOnInit(){this.control=this.ngControl.control,this.items$=this.referenceValueService.getReferenceValues({pageIndex:1,pageSize:50,includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe((0,i.q)(1),(0,V.U)(a=>a.items)).pipe((0,y.sU)(this.indicator))}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(s.a5,10),e.Y36(T.U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[e._Bn([O.T]),e.qOj,e.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(a,o){1&a&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&a&&e.Q6J("formControl",o.control)("indicator",o.indicator)("items",e.lcZ(1,9,o.items$))("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[L.ez,L.Ov,s.UX,s.JJ,s.oH,A.E],encapsulation:2}),r})();var g=t(8652),M=t(4622),P=t(6091);const N=function(){return[]},D=function(r){return[r]};let U=(()=>{class r extends m.Ku{constructor(a,o,n,c){super(n),this.laboratoryService=a,this.fb=o,this.dialog=n,this.data=c,this.form=o.group({referenceValueId:[c.laboratoryReferenceValue?.referenceValueId,[s.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryReferenceValue?this.laboratoryService.updateLaboratoryReferenceValue(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value):this.laboratoryService.createLaboratoryReferenceValue(this.data.laboratoryId,this.form.value))}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(g.v),e.Y36(s.qu),e.Y36(E.so),e.Y36(E.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(a,o){1&a&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-reference-value",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&a&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",o.data.laboratoryReferenceValue?e.DdM(4,N):e.VKq(5,D,o.data.laboratoryId)),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,m.su,M.Y,P.t,E.Is,E.xY,S.p9,I],encapsulation:2}),r})();var z=t(2516),F=t(3582),Y=t(3144);let _=(()=>{class r{constructor(a,o,n){this.dialog=a,this.laboratoryService=o,this.route=n,this.dataSource=new d.b2(u.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[d.UC.text("referenceValue","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",c=>c.referenceValue.testClass.name),v.h.createdAt(),v.h.menu([d.od.edit(c=>{this.openSaveComponent(c)}),d.od.delete(c=>{this.openLaboratoryReferenceValueDeleteComponent(c)})])],this.get()}openSaveComponent(a){this.dialog.open(U,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:a}}).afterClosed().pipe((0,i.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openLaboratoryReferenceValueDeleteComponent(a){this.dialog.open(m.fN,{data:m.cb.delete(this.laboratoryService.deleteLaboratoryReferenceValue(a.laboratoryId,a.id),a)}).afterClosed().pipe((0,i.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryReferenceValues(this.laboratory.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator)).pipe((0,i.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(E.uw),e.Y36(g.v),e.Y36(p.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let l,a;return l="\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",a="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],l,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,o){1&a&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&a&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[p.Bz,p.rH,R.n,z.z,d.Vn,F.K,Y.f,S.p9,f.ot,f.lW],encapsulation:2}),r})()},926:(C,h,t)=>{t.d(h,{T:()=>d});var f=t(9862),S=t(3971),p=t(9598),v=t(8180),m=t(7398),R=t(5879);let d=(()=>{class u{constructor(i){this.http=i,this.path="medisy-people/v1/languages",this.languages$=this.getLanguages().pipe((0,v.q)(1),(0,m.U)(s=>s.items))}getLanguages(i=p.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:(0,S.c)(i)})})}}return u.\u0275fac=function(i){return new(i||u)(R.LFG(f.eN))},u.\u0275prov=R.Yz7({token:u,factory:u.\u0275fac}),u})()}}]);