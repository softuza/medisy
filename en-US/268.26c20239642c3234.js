"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[268],{3268:(tt,c,t)=>{t.r(c),t.d(c,{TestGroupsModule:()=>w});var E=t(6814),i=t(6223),v=t(4630),f=t(2296),O=t(5195),M=t(5986),h=t(3680),d=t(7700),g=t(617),C=t(2032),P=t(9038),A=t(7988),G=t(1476),R=t(5940),N=t(8525),I=t(3566),Y=t(1545),D=t(5313),L=t(2596),U=t(8109),y=t(6981),m=t(6987),$=t(758),u=t(3524),z=t(4567),J=t(5041),B=t(8766),S=t(3572),T=t(2191),X=t(8652),Z=t(3590),V=t(9598),F=t(8721),p=t(8180),o=t(5879),Q=t(5974),x=t(8873),K=t(4622),W=t(6091),j=t(4889);let H=(()=>{class a extends u.Ku{constructor(e,s,n,l){super(n),this.testGroupService=e,this.fb=s,this.dialog=n,this.data=l,this.form=s.group({name:[l?.name,[i.kI.required,i.kI.minLength(1)]],description:[l?.description,[]],laboratoryId:[l?.laboratoryId,[i.kI.required]],isFavorite:[l?.isFavorite??!1,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.testGroupService.updateTestGroup(this.data.id,this.form.value):this.testGroupService.createTestGroup(this.form.value))}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(m.C),o.Y36(i.qu),o.Y36(d.so),o.Y36(d.WI))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-laboratory-test-groups-save"]],features:[o._Bn([]),o.qOj],decls:7,vars:3,consts:function(){let r,e;return r="Name",e="Description",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","laboratoryId"],[3,"actions"]]},template:function(e,s){1&e&&(o._UZ(0,"sz-ui-dialog-header",0),o.TgZ(1,"mat-dialog-content")(2,"form",1),o._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"medisy-form-field-laboratory",4),o.qZA()(),o._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(o.Q6J("header",s.header),o.xp6(2),o.Q6J("formGroup",s.form),o.xp6(4),o.Q6J("actions",s.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,Q.g,x.J,K.Y,W.t,j.w],encapsulation:2}),a})();var b=t(765),_=t(5893),k=t(2516);const q=[{path:"",component:(()=>{class a{constructor(e,s){this.dialog=e,this.testGroupService=s,this.dataSource=new S.b2(V.J.paged()),this.dataSource.columns=[T.h.nameHyperlink(n=>n.id,n=>n.name),T.h.code(),T.h.createdAt(),S.UC.slideToggle("isFavorite","Favorite",(n,l)=>{n.isFavorite=l,this.updateItem(n)}),T.h.menu([S.od.edit(n=>this.openSaveComponent(n)),S.od.delete(n=>this.openTestGroupDeleteComponent(n))])],this.get()}openSaveComponent(e){this.dialog.open(H,{data:e}).afterClosed().pipe((0,p.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openTestGroupDeleteComponent(e){this.dialog.open(u.fN,{data:u.cb.delete(this.testGroupService.deleteTestGroup(e.id),e)}).afterClosed().pipe((0,p.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}updateItem(e){this.testGroupService.updateTestGroup(e.id,e).subscribe(s=>{this.dataSource.update(s)})}get(){this.testGroupService.getTestGroups(this.dataSource.filterModel).pipe((0,F.sU)(this.dataSource.indicator),(0,p.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return a.\u0275fac=function(e){return new(e||a)(o.Y36(d.uw),o.Y36(m.C))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-laboratory-test-groups"]],features:[o._Bn([X.v,Z.L])],decls:8,vars:4,consts:function(){let r,e;return r="Test Groups",e="Add",[["start","",1,"sz-h5"],r,[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,s){1&e&&(o.TgZ(0,"sz-ui-header-basic")(1,"h5",0),o.SDv(2,1),o.qZA()(),o.TgZ(3,"sz-ui-table-filter",2),o.NdJ("search",function(){return s.get()}),o.TgZ(4,"button",3),o.NdJ("click",function(){return s.openSaveComponent()}),o.TgZ(5,"span"),o.SDv(6,4),o.qZA()()(),o.TgZ(7,"sz-ui-table",5),o.NdJ("update",function(){return s.get()}),o.qZA()),2&e&&(o.xp6(3),o.Q6J("dataSource",s.dataSource),o.xp6(4),o.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[b.K,_.f,k.z,f.lW],encapsulation:2}),a})()}];let w=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({providers:[m.C],imports:[E.ez,i.u5,i.UX,U.Bz.forChild(q),d.Is,v.Bb,D.p0,G.TU,C.c,S.Vn,B.h,$.E,z.g,u.su,y.F,J.n,M.p9,A.Tx,g.Ps,f.ot,N.LD,Y.T5,L.AV,P.ie,I.JX,h.XK,O.QW,R.Cq]}),a})()}}]);