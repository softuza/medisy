"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[343],{5343:(Y,p,r)=>{r.r(p),r.d(p,{LaboratoryReferenceValuesComponent:()=>z});var h=r(2296),E=r(5986),f=r(8109),S=r(8262),u=r(9899),y=r(5041),i=r(3572),C=r(9598),b=r(8721),c=r(8180),s=r(6223),d=r(7700),v=r(6814),R=r(5781),e=r(5879),m=r(6883);let L=(()=>{class n extends R.ms{constructor(o,a){super(o),this.ngControl=o,this.mlabService=a,this.options=[],this.label="Reference Value",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.optionContent=t=>t.testClass.name,this.optionValue=t=>t.id}ngOnInit(){this.control=this.ngControl.control,this.mlabService.referenceValues.getItems({pageIndex:1,pageSize:-1,includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe((0,b.sU)(this.indicator),(0,c.q)(1)).subscribe(o=>{this.options=o})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(s.a5,10),e.Y36(m.t))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-reference-value"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(a,t){1&a&&e._UZ(0,"sz-ui-form-field-select",0),2&a&&e.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[v.ez,s.UX,s.JJ,s.oH,R.E3],encapsulation:2})}return n})();var O=r(4622),V=r(6091);const A=function(){return[]},g=function(n){return[n]};let I=(()=>{class n extends u.Ku{constructor(o,a,t,l){super(t),this.mlabService=o,this.fb=a,this.dialog=t,this.data=l,this.form=a.group({referenceValueId:[l.laboratoryReferenceValue?.referenceValueId,[s.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryReferenceValue?this.mlabService.laboratories.referenceValues.update(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value):this.mlabService.laboratories.referenceValues.create(this.data.laboratoryId,this.form.value))}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(m.t),e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(a,t){1&a&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-reference-value",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&a&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",t.data.laboratoryReferenceValue?e.DdM(4,A):e.VKq(5,g,t.data.laboratoryId)),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,u.su,O.Y,V.t,d.Is,d.xY,E.p9,L],encapsulation:2})}return n})();var T=r(2516),N=r(8359),M=r(3144);let z=(()=>{class n{constructor(o,a,t){this.dialog=o,this.mlabService=a,this.route=t,this.dataSource=new i.b2(C.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[i.UC.text("referenceValue","Test Class",l=>l.referenceValue.testClass.name),S.h.createdAt(),S.h.menu([i.od.edit(l=>{this.openSaveComponent(l)}),i.od.delete(l=>{this.openLaboratoryReferenceValueDeleteComponent(l)})])],this.get()}openSaveComponent(o){this.dialog.open(I,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:o}}).afterClosed().pipe((0,c.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openLaboratoryReferenceValueDeleteComponent(o){this.dialog.open(u.fN,{data:u.cb.delete(this.mlabService.laboratories.referenceValues.delete(o.laboratoryId,o.id),o)}).afterClosed().pipe((0,c.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.laboratories.referenceValues.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,b.sU)(this.dataSource.indicator)).pipe((0,c.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(d.uw),e.Y36(m.t),e.Y36(f.gz))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let o,a;return o="Reference Values",a="Add",[["start",""],[1,"sz-h5"],o,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,t){1&a&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&a&&(e.xp6(5),e.Oqu(t.laboratory.name),e.xp6(1),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[f.Bz,f.rH,y.n,T.z,i.Vn,N.K,M.f,E.p9,h.ot,h.lW],encapsulation:2})}return n})()}}]);