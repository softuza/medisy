"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[630],{7630:(z,E,o)=>{o.r(E),o.d(E,{LaboratoryTestClassesComponent:()=>I});var _=o(2296),T=o(5986),c=o(8109),m=o(1175),S=o(3576),O=o(5041),u=o(3572),A=o(9598),h=o(8721),C=o(8180),n=o(6223),d=o(7700),e=o(5879),p=o(4622),f=o(6091);let L=(()=>{class a extends S.Z2{constructor(t,s,l){super(s),this.fb=t,this.dialog=s,this.data=l,this.form=t.group({enabled:[l.enabled]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(n.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:3,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,s){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),e.SDv(4,3),e.qZA()()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(3),e.Q6J("actions",s.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,p.Y,f.t,d.Is,d.xY,T.p9,T.oG],encapsulation:2}),a})();var M=o(738),b=o(6883);const g=function(){return[]},y=function(a){return[a]};let N=(()=>{class a extends S.Ku{constructor(t,s,l,i){super(l),this.mlabService=t,this.fb=s,this.dialog=l,this.data=i,this.form=s.group({enabled:[i.laboratoryTestClass?.enabled??!0,[n.kI.required]],testClassId:[i.laboratoryTestClass?.testClassId,[n.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestClass?this.mlabService.laboratories.testClasses.update(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value):this.mlabService.laboratories.testClasses.create(this.data.laboratoryId,this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.t),e.Y36(n.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:7,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,s){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-class",2),e.TgZ(4,"mat-checkbox",3),e.SDv(5,4),e.qZA()()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("excludeLaboratoryIds",s.data.laboratoryTestClass?e.DdM(4,g):e.VKq(5,y,s.data.laboratoryId)),e.xp6(3),e.Q6J("actions",s.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,p.Y,f.t,d.Is,d.xY,T.p9,T.oG,M.U],encapsulation:2}),a})();var P=o(2516),R=o(8359),v=o(3144);let I=(()=>{class a{constructor(t,s,l){this.dialog=t,this.mlabService=s,this.route=l,this.dataSource=new u.b2(A.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("testClass","Test Class",i=>i.testClass.name),m.h.createdAt(),u.UC.checkbox("enabled","Enabled",(i,Y)=>{i.enabled=Y,this.mlabService.laboratories.testClasses.update(i.laboratoryId,i.id,i).pipe((0,C.q)(1)).subscribe(D=>{i=D})}),m.h.menu([u.od.edit(i=>{this.openSaveComponent(i)}),u.od.delete(i=>{this.openLaboratoryTestClassDeleteComponent(i)})])],this.get()}openSaveComponent(t){this.dialog.open(N,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:t}}).afterClosed().pipe((0,C.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openFilterComponent(){this.dialog.open(L,{data:this.dataSource.filterModel}).afterClosed().pipe((0,C.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openLaboratoryTestClassDeleteComponent(t){this.dialog.open(S.fN,{data:S.cb.delete(this.mlabService.laboratories.testClasses.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,C.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.mlabService.laboratories.testClasses.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,h.sU)(this.dataSource.indicator)).pipe((0,C.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.uw),e.Y36(b.t),e.Y36(c.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let r,t;return r="Test Classes",t="Add",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,s){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return s.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return s.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(s.laboratory.name),e.xp6(1),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[c.Bz,c.rH,O.n,P.z,u.Vn,R.K,v.f,T.p9,_.ot,_.lW],encapsulation:2}),a})()}}]);