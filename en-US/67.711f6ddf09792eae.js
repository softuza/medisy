"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[67],{1067:(E,T,s)=>{s.r(T),s.d(T,{TestGroupModule:()=>Z});var r=s(6814),u=s(6223),d=s(2296),a=s(7700),m=s(617),C=s(8109),g=s(465),h=s(6987),O=s(758),S=s(4110),A=s(5041),M=s(7239),c=s(3572),v=s(2191),P=s(9598),z=s(8721),f=s(8180),G=s(5986),I=s(6981),t=s(5879),U=s(4622),N=s(6091),D=s(1175);let Y=(()=>{class o extends S.Ku{constructor(e,n,p,i){super(p),this.testGroupService=e,this.fb=n,this.dialog=p,this.data=i,this.form=n.group({testClassId:[i.testGroupTestClass?.testClassId,[u.kI.required]],enabled:[i.testGroupTestClass?.enabled??!0,[]]})}submit(){this.IsValid()&&this.save(this.data.testGroupTestClass?this.testGroupService.updateTestGroupTestClass(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value):this.testGroupService.createTestGroupTestClass(this.data.testGroupId,this.form.value))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.C),t.Y36(u.qu),t.Y36(a.so),t.Y36(a.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-test-group-test-classes-save"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:7,vars:3,consts:function(){let l;return l="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId"],["formControlName","enabled"],l,[3,"actions"]]},template:function(e,n){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(t.Q6J("header",n.header),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(4),t.Q6J("actions",n.actions))},dependencies:[u.UX,u._Y,u.JJ,u.JL,u.sg,u.u,a.Is,a.xY,G.p9,G.oG,S.su,U.Y,N.t,I.F,D.U],encapsulation:2}),o})();var R=s(6939),$=s(3144);let y=(()=>{class o{constructor(e,n,p){this.dialog=e,this.testGroupService=n,this.route=p,this.dataSource=new c.b2(P.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columns=[c.UC.text("testClass","Test class",i=>i.testClass.name),v.h.createdAt(),c.UC.checkbox("enabled","Enabled",(i,_)=>{i.enabled=_,this.updateItem(i)}),v.h.menu([c.od.edit(i=>this.openSaveComponent(i)),c.od.delete(i=>this.openTestTypeTestClassDeleteComponent(i))])],this.get()}openSaveComponent(e){this.dialog.open(Y,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe((0,f.q)(1)).subscribe(p=>{this.dataSource.updateOrPushItem(p)})}openTestTypeTestClassDeleteComponent(e){this.dialog.open(S.fN,{data:S.cb.delete(this.testGroupService.deleteTestGroupTestClass(e.testGroupId,e.id),e)}).afterClosed().pipe((0,f.q)(1)).subscribe(p=>{this.dataSource.delete(p)})}updateItem(e){this.testGroupService.updateTestGroupTestClass(e.testGroupId,e.id,e).subscribe(n=>{this.dataSource.update(n)})}get(){this.testGroupService.getTestGroupTestClasses(this.testGroup.id,this.dataSource.filterModel).pipe((0,z.sU)(this.dataSource.indicator),(0,f.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.uw),t.Y36(h.C),t.Y36(C.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group-test-classes"]],standalone:!0,features:[t.jDz],decls:5,vars:4,consts:function(){let l;return l="Add",[[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],l,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,n){1&e&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return n.get()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return n.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return n.get()}),t.qZA()),2&e&&(t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[d.ot,d.lW,c.Vn,R.K,$.f],encapsulation:2}),o})();var L=s(2516);const b=[{path:"",component:(()=>{class o{constructor(e,n){this.dialog=e,this.route=n,this.testGroup=this.route.snapshot.data.testGroup}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.uw),t.Y36(C.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[t._Bn([])],decls:7,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()()(),t._UZ(6,"medisy-laboratory-test-group-test-classes")),2&e&&(t.xp6(3),t.Oqu(n.testGroup.name),t.xp6(2),t.Oqu(n.testGroup.description))},dependencies:[L.z,y],encapsulation:2}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[h.C],imports:[r.ez,u.u5,u.UX,C.Bz.forChild(b),a.Is,m.Ps,d.ot,O.E3,c.Vn,M.h,S.su,A.n,g.X,y]}),o})()},2191:(E,T,s)=>{s.d(T,{h:()=>u});var r=s(3572);class u{static menu(a){return r.UC.action("menu",a)}static code(){return r.UC.text("code","Code")}static createdAt(){return r.UC.date("createdAt","Created Date")}static updatedAt(){return r.UC.date("updatedAt","Updated Date")}static id(){return r.UC.text("id","Id")}static nameHyperlink(a,m,C){return r.UC.hyperlink("name","Name",a,m,C)}static nameText(a){return r.UC.text("name","Name",a)}static phoneType(a){return r.UC.text("phoneType","Phone Type",a)}static emailType(a){return r.UC.text("emailType","Email Type",a)}static documentType(a){return r.UC.text("documentType","Document Type",a)}static comparisonOperator(a){return r.UC.text("comparisonOperator","Comparison Operator",a)}}},465:(E,T,s)=>{s.d(T,{X:()=>u});var r=s(5879);let u=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({}),d})()}}]);