"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[67],{1067:(nt,c,s)=>{s.r(c),s.d(c,{TestGroupModule:()=>ot});var E=s(6814),d=s(6223),G=s(4630),A=s(9014),C=s(2296),O=s(5195),M=s(5986),v=s(3680),y=s(8034),u=s(7700),P=s(617),N=s(2032),I=s(9038),Y=s(7988),f=s(1476),L=s(5940),R=s(8525),h=s(2599),U=s(3566),D=s(1545),z=s(5313),Z=s(2596),p=s(8109),J=s(6981),$=s(465),S=s(6987),X=s(758),B=s(2595),V=s(5341),F=s(2169),T=s(4110),Q=s(4567),x=s(5041),K=s(7239),i=s(3572),t=s(5879),W=s(2516),g=s(2191),j=s(9598),H=s(8721),m=s(8180),b=s(1175),q=s(4622),w=s(6091);let k=(()=>{class o extends T.Ku{constructor(e,a,r,l){super(r),this.testGroupService=e,this.fb=a,this.dialog=r,this.data=l,this.form=a.group({testClassId:[l.testGroupTestClass?.testClassId,[d.kI.required]],enabled:[l.testGroupTestClass?.enabled??!0,[]]})}submit(){this.IsValid()&&this.save(this.data.testGroupTestClass?this.testGroupService.updateTestGroupTestClass(this.data.testGroupId,this.data.testGroupTestClass?.id,this.form.value):this.testGroupService.createTestGroupTestClass(this.data.testGroupId,this.form.value))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S.C),t.Y36(d.qu),t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-test-group-test-classes-save"]],features:[t._Bn([]),t.qOj],decls:7,vars:3,consts:function(){let n;return n="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testClassId"],["formControlName","enabled"],n,[3,"actions"]]},template:function(e,a){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-slide-toggle",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(4),t.Q6J("actions",a.actions))},dependencies:[d._Y,d.JJ,d.JL,d.sg,d.u,u.xY,b.U,q.Y,w.t,h.Rr],encapsulation:2}),o})();var _=s(765),tt=s(4624);let st=(()=>{class o{constructor(e,a,r){this.dialog=e,this.testGroupService=a,this.route=r,this.dataSource=new i.b2(j.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columns=[i.UC.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",l=>l.testClass.name),g.h.createdAt(),i.UC.slideToggle("enabled","\u0645\u0641\u0639\u0644",(l,at)=>{l.enabled=at,this.updateItem(l)}),g.h.menu([i.od.edit(l=>this.openSaveComponent(l)),i.od.delete(l=>this.openTestTypeTestClassDeleteComponent(l))])],this.get()}openSaveComponent(e){this.dialog.open(k,{data:{testGroupId:this.testGroup.id,testGroupTestClass:e}}).afterClosed().pipe((0,m.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openTestTypeTestClassDeleteComponent(e){this.dialog.open(T.fN,{data:T.cb.delete(this.testGroupService.deleteTestGroupTestClass(e.testGroupId,e.id),e)}).afterClosed().pipe((0,m.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}updateItem(e){this.testGroupService.updateTestGroupTestClass(e.testGroupId,e.id,e).subscribe(a=>{this.dataSource.update(a)})}get(){this.testGroupService.getTestGroupTestClasses(this.testGroup.id,this.dataSource.filterModel).pipe((0,H.sU)(this.dataSource.indicator),(0,m.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.uw),t.Y36(S.C),t.Y36(p.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group-test-classes"]],decls:5,vars:4,consts:function(){let n;return n="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,a){1&e&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return a.get()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return a.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return a.get()}),t.qZA()),2&e&&(t.Q6J("dataSource",a.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[C.lW,_.K,tt.f],encapsulation:2}),o})();const et=[{path:"",component:(()=>{class o{constructor(e,a){this.dialog=e,this.route=a,this.testGroup=this.route.snapshot.data.testGroup}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.uw),t.Y36(p.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[t._Bn([])],decls:7,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"]],template:function(e,a){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()()(),t._UZ(6,"medisy-laboratory-test-group-test-classes")),2&e&&(t.xp6(3),t.Oqu(a.testGroup.name),t.xp6(2),t.Oqu(a.testGroup.description))},dependencies:[W.z,st],encapsulation:2}),o})()}];let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[S.C],imports:[E.ez,d.u5,d.UX,p.Bz.forChild(et),u.Is,G.Bb,N.c,V.SD,M.p9,Y.Tx,P.Ps,C.ot,R.LD,D.T5,Z.AV,I.ie,O.QW,L.Cq,v.XK,y.FA,z.p0,f.TU,U.JX,X.E,i.Vn,F.c,B.V,K.h,Q.g,J.F,T.su,x.n,$.L,f.TU,u.Is,v.Ng,A.g,h.rP]}),o})()}}]);