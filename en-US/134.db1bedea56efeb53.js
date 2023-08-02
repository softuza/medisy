"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[134],{2134:(h,m,o)=>{o.r(m),o.d(m,{LaboratoryTestClassesComponent:()=>D});var c=o(2296),T=o(5986),_=o(8109),n=o(2191),S=o(4110),E=o(5041),C=o(3572),L=o(9598),O=o(8721),p=o(8180),l=o(6223),u=o(7700),f=o(6981),e=o(5879),A=o(4622),b=o(6091);let M=(()=>{class s extends S.Z2{constructor(t,a,i){super(a),this.fb=t,this.dialog=a,this.data=i,this.form=t.group({enabled:[i.enabled]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l.qu),e.Y36(u.so),e.Y36(u.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:3,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,a){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),e.SDv(4,3),e.qZA()()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(3),e.Q6J("actions",a.actions))},dependencies:[l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,S.su,A.Y,b.t,u.Is,u.xY,T.p9,T.oG,f.F],encapsulation:2}),s})();var y=o(8652),g=o(1175);const v=function(){return[]},R=function(s){return[s]};let I=(()=>{class s extends S.Ku{constructor(t,a,i,d){super(i),this.laboratoryService=t,this.fb=a,this.dialog=i,this.data=d,this.form=a.group({enabled:[d.laboratoryTestClass?.enabled??!0,[l.kI.required]],testClassId:[d.laboratoryTestClass?.testClassId,[l.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestClass?this.laboratoryService.updateLaboratoryTestClass(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value):this.laboratoryService.createLaboratoryTestClass(this.data.laboratoryId,this.form.value))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y.v),e.Y36(l.qu),e.Y36(u.so),e.Y36(u.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:7,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,a){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-class",2),e.TgZ(4,"mat-checkbox",3),e.SDv(5,4),e.qZA()()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",a.data.laboratoryTestClass?e.DdM(4,v):e.VKq(5,R,a.data.laboratoryId)),e.xp6(3),e.Q6J("actions",a.actions))},dependencies:[l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,S.su,A.Y,b.t,u.Is,u.xY,T.p9,T.oG,f.F,g.U],encapsulation:2}),s})();var P=o(2516),Y=o(6939),N=o(3144);let D=(()=>{class s{constructor(t,a,i){this.dialog=t,this.laboratoryService=a,this.route=i,this.dataSource=new C.b2(L.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[C.UC.text("testClass","Test Class",d=>d.testClass.name),n.h.createdAt(),C.UC.checkbox("enabled","Enabled",(d,z)=>{d.enabled=z,this.laboratoryService.updateLaboratoryTestClass(d.laboratoryId,d.id,d).pipe((0,p.q)(1)).subscribe(U=>{d=U})}),n.h.menu([C.od.edit(d=>{this.openSaveComponent(d)}),C.od.delete(d=>{this.openLaboratoryTestClassDeleteComponent(d)})])],this.get()}openSaveComponent(t){this.dialog.open(I,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:t}}).afterClosed().pipe((0,p.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openFilterComponent(){this.dialog.open(M,{data:this.dataSource.filterModel}).afterClosed().pipe((0,p.q)(1)).subscribe(a=>{this.dataSource.updateFilterModel(a),this.get()})}openLaboratoryTestClassDeleteComponent(t){this.dialog.open(S.fN,{data:S.cb.delete(this.laboratoryService.deleteLaboratoryTestClass(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,p.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.laboratoryService.getLaboratoryTestClasses(this.laboratory.id,this.dataSource.filterModel).pipe((0,O.sU)(this.dataSource.indicator)).pipe((0,p.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.uw),e.Y36(y.v),e.Y36(_.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let r,t;return r="Test Classes",t="Add",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,a){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return a.get()})("filter",function(){return a.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return a.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return a.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(a.laboratory.name),e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[_.Bz,_.rH,E.n,P.z,C.Vn,Y.K,N.f,T.p9,c.ot,c.lW],encapsulation:2}),s})()},2191:(h,m,o)=>{o.d(m,{h:()=>T});var c=o(3572);class T{static menu(n){return c.UC.action("menu",n)}static code(){return c.UC.text("code","Code")}static createdAt(){return c.UC.date("createdAt","Created Date")}static updatedAt(){return c.UC.date("updatedAt","Updated Date")}static id(){return c.UC.text("id","Id")}static nameHyperlink(n,S,E){return c.UC.hyperlink("name","Name",n,S,E)}static nameText(n){return c.UC.text("name","Name",n)}static phoneType(n){return c.UC.text("phoneType","Phone Type",n)}static emailType(n){return c.UC.text("emailType","Email Type",n)}static documentType(n){return c.UC.text("documentType","Document Type",n)}static comparisonOperator(n){return c.UC.text("comparisonOperator","Comparison Operator",n)}}}}]);