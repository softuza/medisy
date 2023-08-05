"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[157],{8157:(P,E,t)=>{t.r(E),t.d(E,{LaboratoryReferenceValuesComponent:()=>N});var R=t(2296),S=t(5986),f=t(8109),p=t(2191),c=t(4110),y=t(5041),u=t(3572),b=t(9598),v=t(8721),m=t(8180),s=t(6223),d=t(7700),L=t(6981),e=t(5879),h=t(8652),C=t(4622),A=t(6091),V=t(1965);const g=function(){return[]},T=function(r){return[r]};let O=(()=>{class r extends c.Ku{constructor(a,o,n,i){super(n),this.laboratoryService=a,this.fb=o,this.dialog=n,this.data=i,this.form=o.group({referenceValueId:[i.laboratoryReferenceValue?.referenceValueId,[s.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryReferenceValue?this.laboratoryService.updateLaboratoryReferenceValue(this.data.laboratoryId,this.data.laboratoryReferenceValue?.id,this.form.value):this.laboratoryService.createLaboratoryReferenceValue(this.data.laboratoryId,this.form.value))}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(h.v),e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:7,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceValueId",3,"excludeLaboratoryIds"],[3,"actions"]],template:function(a,o){1&a&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-reference-value",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&a&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",o.data.laboratoryReferenceValue?e.DdM(4,g):e.VKq(5,T,o.data.laboratoryId)),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,c.su,C.Y,A.t,d.Is,d.xY,S.p9,L.F,V.c],encapsulation:2}),r})();var M=t(2516),I=t(6939),Y=t(3144);let N=(()=>{class r{constructor(a,o,n){this.dialog=a,this.laboratoryService=o,this.route=n,this.dataSource=new u.b2(b.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("referenceValue","Test Class",i=>i.referenceValue.testClass.name),p.h.createdAt(),p.h.menu([u.od.edit(i=>{this.openSaveComponent(i)}),u.od.delete(i=>{this.openLaboratoryReferenceValueDeleteComponent(i)})])],this.get()}openSaveComponent(a){this.dialog.open(O,{data:{laboratoryId:this.laboratory.id,laboratoryReferenceValue:a}}).afterClosed().pipe((0,m.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openLaboratoryReferenceValueDeleteComponent(a){this.dialog.open(c.fN,{data:c.cb.delete(this.laboratoryService.deleteLaboratoryReferenceValue(a.laboratoryId,a.id),a)}).afterClosed().pipe((0,m.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryReferenceValues(this.laboratory.id,this.dataSource.filterModel).pipe((0,v.sU)(this.dataSource.indicator)).pipe((0,m.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(d.uw),e.Y36(h.v),e.Y36(f.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-reference-values"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let l,a;return l="Reference Values",a="Add",[["start",""],[1,"sz-h5"],l,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,o){1&a&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&a&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[f.Bz,f.rH,y.n,M.z,u.Vn,I.K,Y.f,S.p9,R.ot,R.lW],encapsulation:2}),r})()}}]);