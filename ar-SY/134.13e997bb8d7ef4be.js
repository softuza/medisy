"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[134],{2134:($,m,a)=>{a.r(m),a.d(m,{LaboratoryTestClassesComponent:()=>N});var p=a(2296),T=a(5986),C=a(8109),E=a(2191),S=a(4110),L=a(5041),u=a(3572),h=a(9598),y=a(8721),c=a(8180),n=a(6223),d=a(7700),f=a(6981),e=a(5879),_=a(4622),b=a(6091);let O=(()=>{class s extends S.Z2{constructor(t,o,l){super(o),this.fb=t,this.dialog=o,this.data=l,this.form=t.group({enabled:[l.enabled]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(n.qu),e.Y36(d.so),e.Y36(d.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:3,consts:function(){let r;return r="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),e.SDv(4,3),e.qZA()()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,_.Y,b.t,d.Is,d.xY,T.p9,T.oG,f.F],encapsulation:2}),s})();var A=a(8652),g=a(1175);const M=function(){return[]},v=function(s){return[s]};let R=(()=>{class s extends S.Ku{constructor(t,o,l,i){super(l),this.laboratoryService=t,this.fb=o,this.dialog=l,this.data=i,this.form=o.group({enabled:[i.laboratoryTestClass?.enabled??!0,[n.kI.required]],testClassId:[i.laboratoryTestClass?.testClassId,[n.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestClass?this.laboratoryService.updateLaboratoryTestClass(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value):this.laboratoryService.createLaboratoryTestClass(this.data.laboratoryId,this.form.value))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(A.v),e.Y36(n.qu),e.Y36(d.so),e.Y36(d.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:7,consts:function(){let r;return r="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-class",2),e.TgZ(4,"mat-checkbox",3),e.SDv(5,4),e.qZA()()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",o.data.laboratoryTestClass?e.DdM(4,M):e.VKq(5,v,o.data.laboratoryId)),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,_.Y,b.t,d.Is,d.xY,T.p9,T.oG,f.F,g.U],encapsulation:2}),s})();var I=a(2516),Y=a(6939),P=a(3144);let N=(()=>{class s{constructor(t,o,l){this.dialog=t,this.laboratoryService=o,this.route=l,this.dataSource=new u.b2(h.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",i=>i.testClass.name),E.h.createdAt(),u.UC.checkbox("enabled","\u0645\u0641\u0639\u0644",(i,D)=>{i.enabled=D,this.laboratoryService.updateLaboratoryTestClass(i.laboratoryId,i.id,i).pipe((0,c.q)(1)).subscribe(z=>{i=z})}),E.h.menu([u.od.edit(i=>{this.openSaveComponent(i)}),u.od.delete(i=>{this.openLaboratoryTestClassDeleteComponent(i)})])],this.get()}openSaveComponent(t){this.dialog.open(R,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:t}}).afterClosed().pipe((0,c.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openFilterComponent(){this.dialog.open(O,{data:this.dataSource.filterModel}).afterClosed().pipe((0,c.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openLaboratoryTestClassDeleteComponent(t){this.dialog.open(S.fN,{data:S.cb.delete(this.laboratoryService.deleteLaboratoryTestClass(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,c.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.laboratoryService.getLaboratoryTestClasses(this.laboratory.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator)).pipe((0,c.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(d.uw),e.Y36(A.v),e.Y36(C.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let r,t;return r="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[C.Bz,C.rH,L.n,I.z,u.Vn,Y.K,P.f,T.p9,p.ot,p.lW],encapsulation:2}),s})()}}]);