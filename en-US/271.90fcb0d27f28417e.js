"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[271],{3271:(Y,C,o)=>{o.r(C),o.d(C,{TestGroupTestClassesComponent:()=>R});var c=o(2296),T=o(8109),E=o(1175),i=o(3576),f=o(5041),S=o(3572),_=o(9598),O=o(8721),p=o(8180),d=o(6223),m=o(5986),u=o(7700),A=o(738),t=o(5879),h=o(6883),M=o(4622),g=o(6091);const G=function(){return[]},v=function(a){return[a]};let P=(()=>{class a extends i.Ku{constructor(e,s,r,n){super(r),this.mlabService=e,this.fb=s,this.dialog=r,this.data=n,this.form=s.group({testClassId:[n.testGroupTestClass?.testClassId,[d.kI.required]],enabled:[n.testGroupTestClass?.enabled??!0,[]]})}submit(){this.IsValid()&&this.save(this.data.testGroupTestClass?this.mlabService.testGroups.testClasses.update(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value):this.mlabService.testGroups.testClasses.create(this.data.testGroupId,this.form.value))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(h.t),t.Y36(d.qu),t.Y36(u.so),t.Y36(u.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:7,vars:7,consts:function(){let l;return l="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestGroupIds"],["formControlName","enabled"],l,[3,"actions"]]},template:function(e,s){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(t.Q6J("header",s.header),t.xp6(2),t.Q6J("formGroup",s.form),t.xp6(1),t.Q6J("excludeTestGroupIds",s.data.testGroupTestClass?t.DdM(4,G):t.VKq(5,v,s.data.testGroupId)),t.xp6(3),t.Q6J("actions",s.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,u.Is,u.xY,m.p9,m.oG,i.su,M.Y,g.t,A.U],encapsulation:2}),a})();var N=o(8359),I=o(3144),L=o(2516);let R=(()=>{class a{constructor(e,s,r){this.dialog=e,this.mlabService=s,this.route=r,this.dataSource=new S.b2(_.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columns=[S.UC.text("testClass","Test class",n=>n.testClass.name),E.h.createdAt(),S.UC.checkbox("enabled","Enabled",(n,b)=>{n.enabled=b,this.updateItem(n)}),E.h.menu([S.od.edit(n=>this.openSaveComponent(n)),S.od.delete(n=>this.openTestTypeTestClassDeleteComponent(n))])],this.get()}openSaveComponent(e){this.dialog.open(P,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe((0,p.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openTestTypeTestClassDeleteComponent(e){this.dialog.open(i.fN,{data:i.cb.delete(this.mlabService.testGroups.testClasses.delete(e.testGroupId,e.id),e)}).afterClosed().pipe((0,p.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}updateItem(e){this.mlabService.testGroups.testClasses.update(e.testGroupId,e.id,e).subscribe(s=>{this.dataSource.update(s)})}get(){this.mlabService.testGroups.testClasses.get(this.testGroup.id,this.dataSource.filterModel).pipe((0,O.sU)(this.dataSource.indicator),(0,p.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.uw),t.Y36(h.t),t.Y36(T.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let l,e;return l="Test Classes",e="Add",[["start",""],[1,"sz-h5"],l,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,s){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return s.get()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return s.get()}),t.qZA()),2&e&&(t.xp6(5),t.Oqu(s.testGroup.name),t.xp6(1),t.Q6J("dataSource",s.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[T.Bz,T.rH,c.ot,c.lW,S.Vn,N.K,I.f,f.n,L.z],encapsulation:2}),a})()}}]);