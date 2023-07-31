"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[67],{1067:(v,c,e)=>{e.r(c),e.d(c,{TestGroupModule:()=>x});var r=e(6814),u=e(6223),p=e(2296),a=e(7700),m=e(617),S=e(2032),h=e(8109),G=e(6981),y=e(465),f=e(6987),O=e(758),A=e(2595),M=e(2169),C=e(4110),P=e(9004),I=e(5041),U=e(7239),T=e(3572),t=e(5879),N=e(2516),g=e(2191),z=e(9598),Y=e(8721),E=e(8180),D=e(1175),L=e(4622),R=e(6091);let $=(()=>{class o extends C.Ku{constructor(s,n,i,d){super(i),this.testGroupService=s,this.fb=n,this.dialog=i,this.data=d,this.form=n.group({testClassId:[d.testGroupTestClass?.testClassId,[u.kI.required]],enabled:[d.testGroupTestClass?.enabled??!0,[]]})}submit(){this.IsValid()&&this.save(this.data.testGroupTestClass?this.testGroupService.updateTestGroupTestClass(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value):this.testGroupService.createTestGroupTestClass(this.data.testGroupId,this.form.value))}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(f.C),t.Y36(u.qu),t.Y36(a.so),t.Y36(a.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-test-group-test-classes-save"]],features:[t._Bn([]),t.qOj],decls:7,vars:3,consts:function(){let l;return l="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId"],["formControlName","enabled"],l,[3,"actions"]]},template:function(s,n){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-slide-toggle",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&s&&(t.Q6J("header",n.header),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(4),t.Q6J("actions",n.actions))},dependencies:[u._Y,u.JJ,u.JL,u.sg,u.u,a.xY,D.U,L.Y,R.t],encapsulation:2}),o})();var Z=e(1139),b=e(4624);let J=(()=>{class o{constructor(s,n,i){this.dialog=s,this.testGroupService=n,this.route=i,this.dataSource=new T.b2(z.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columns=[T.UC.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",d=>d.testClass.name),g.h.createdAt(),T.UC.checkbox("enabled","\u0645\u0641\u0639\u0644",(d,X)=>{d.enabled=X,this.updateItem(d)}),g.h.menu([T.od.edit(d=>this.openSaveComponent(d)),T.od.delete(d=>this.openTestTypeTestClassDeleteComponent(d))])],this.get()}openSaveComponent(s){this.dialog.open($,{data:{testGroupId:this.testGroup.id,testGroupTestClass:s}}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openTestTypeTestClassDeleteComponent(s){this.dialog.open(C.fN,{data:C.cb.delete(this.testGroupService.deleteTestGroupTestClass(s.testGroupId,s.id),s)}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}updateItem(s){this.testGroupService.updateTestGroupTestClass(s.testGroupId,s.id,s).subscribe(n=>{this.dataSource.update(n)})}get(){this.testGroupService.getTestGroupTestClasses(this.testGroup.id,this.dataSource.filterModel).pipe((0,Y.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(a.uw),t.Y36(f.C),t.Y36(h.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group-test-classes"]],decls:5,vars:4,consts:function(){let l;return l="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],l,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,n){1&s&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return n.get()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return n.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return n.get()}),t.qZA()),2&s&&(t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[p.lW,Z.K,b.f],encapsulation:2}),o})();const B=[{path:"",component:(()=>{class o{constructor(s,n){this.dialog=s,this.route=n,this.testGroup=this.route.snapshot.data.testGroup}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(a.uw),t.Y36(h.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[t._Bn([])],decls:7,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"]],template:function(s,n){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()()(),t._UZ(6,"medisy-laboratory-test-group-test-classes")),2&s&&(t.xp6(3),t.Oqu(n.testGroup.name),t.xp6(2),t.Oqu(n.testGroup.description))},dependencies:[N.z,J],encapsulation:2}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[f.C],imports:[r.ez,u.u5,u.UX,h.Bz.forChild(B),a.Is,S.c,m.Ps,p.ot,O.E3,T.Vn,M.c,A.V,U.h,P.g,G.F,C.su,I.n,y.L,a.Is]}),o})()},2191:(v,c,e)=>{e.d(c,{h:()=>u});var r=e(3572);class u{static menu(a){return r.UC.action("menu",a)}static code(){return r.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return r.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return r.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return r.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(a,m,S){return r.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",a,m,S)}static nameText(a){return r.UC.text("name","\u0627\u0644\u0627\u0633\u0645",a)}static phoneType(a){return r.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",a)}static emailType(a){return r.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",a)}static documentType(a){return r.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",a)}static comparisonOperator(a){return r.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",a)}}},465:(v,c,e)=>{e.d(c,{L:()=>u});var r=e(5879);let u=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275mod=r.oAB({type:p}),p.\u0275inj=r.cJS({}),p})()}}]);