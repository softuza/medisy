"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[271],{3271:(b,p,o)=>{o.r(p),o.d(p,{TestGroupTestClassesComponent:()=>R});var c=o(2296),u=o(8109),C=o(8262),S=o(9899),h=o(5041),d=o(3562),f=o(9598),_=o(8721),T=o(8180),l=o(6223),E=o(5986),i=o(7700),O=o(738),t=o(5879),m=o(6883),A=o(4622),M=o(6091);const g=function(){return[]},P=function(r){return[r]};let G=(()=>{class r extends S.Ku{constructor(e,a,s,n){super(s),this.mlabService=e,this.fb=a,this.dialog=s,this.data=n,this.form=a.group({testClassId:[n.testGroupTestClass?.testClassId,[l.kI.required]],enabled:[n.testGroupTestClass?.enabled??!0,[]]})}submit(){this.IsValid()&&this.save(this.data.testGroupTestClass?this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value):this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value))}static#t=this.\u0275fac=function(a){return new(a||r)(t.Y36(m.t),t.Y36(l.qu),t.Y36(i.so),t.Y36(i.WI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:7,vars:7,consts:function(){let e;return e="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],e,[3,"actions"]]},template:function(a,s){1&a&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&a&&(t.Q6J("header",s.header),t.xp6(2),t.Q6J("formGroup",s.form),t.xp6(1),t.Q6J("excludeTestGroupIds",s.data.testGroupTestClass?t.DdM(4,g):t.VKq(5,P,s.data.testGroupId)),t.xp6(3),t.Q6J("actions",s.actions))},dependencies:[l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,i.Is,i.xY,E.p9,E.oG,S.su,A.Y,M.t,O.U],encapsulation:2})}return r})();var v=o(8359),N=o(3144),I=o(2516);let R=(()=>{class r{constructor(e,a,s){this.dialog=e,this.mlabService=a,this.route=s,this.dataSource=new d.b2(f.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(d.zP.default([d.UC.text("testClass","Test class",n=>n.testClass.name),C.h.createdAt(),d.UC.checkbox("enabled","Enabled",(n,L)=>{n.enabled=L,this.updateItem(n)}),C.h.menu([d.od.edit(n=>this.openSaveComponent(n)),d.od.delete(n=>this.openTestTypeTestClassDeleteComponent(n))])])),this.get()}openSaveComponent(e){this.dialog.open(G,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe((0,T.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openTestTypeTestClassDeleteComponent(e){this.dialog.open(S.fN,{data:S.cb.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe((0,T.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(a=>{this.dataSource.update(a)})}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe((0,_.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}static#t=this.\u0275fac=function(a){return new(a||r)(t.Y36(i.uw),t.Y36(m.t),t.Y36(u.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let e,a;return e="Test Classes",a="Add",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,s){1&a&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return s.get()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return s.get()}),t.qZA()),2&a&&(t.xp6(5),t.Oqu(s.testGroup.name),t.xp6(1),t.Q6J("dataSource",s.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[u.Bz,u.rH,c.ot,c.lW,d.Vn,v.K,N.f,h.n,I.z],encapsulation:2})}return r})()}}]);