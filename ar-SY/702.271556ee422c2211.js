"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[702],{9260:(h,u,e)=>{e.r(u),e.d(u,{TestClassesModule:()=>B});var m=e(6814),a=e(6223),i=e(2296),d=e(7700),c=e(617),v=e(2032),g=e(8109),E=e(6981),M=e(6987),A=e(758),p=e(4110),y=e(9004),I=e(5041),z=e(7239),f=e(3572),S=e(2191),C=e(3590),L=e(9598),J=e(8721),T=e(8180),t=e(5879),Y=e(4622),O=e(6091),P=e(4889),F=e(5467);let Z=(()=>{class o extends p.Z2{constructor(s,n,r){super(n),this.fb=s,this.dialog=n,this.data=r,this.form=s.group({includeLaboratoryIds:[r.includeLaboratoryIds],includeTestGroupIds:[r.includeTestGroupIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(a.qu),t.Y36(d.so),t.Y36(d.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-test-classes-filter"]],features:[t._Bn([]),t.qOj],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(s,n){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&s&&(t.Q6J("header",n.header),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("actions",n.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,d.xY,Y.Y,O.t,P.w,F.Q],encapsulation:2}),o})();var N=e(6939),D=e(3144),R=e(2516);const U=[{path:"",component:(()=>{class o{constructor(s,n){this.dialog=s,this.testClassService=n,this.dataSource=new f.b2(L.J.pagedSorted("name")),this.dataSource.columns=[S.h.nameText(r=>r.name),f.UC.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",r=>r.abbreviation),S.h.createdAt()],this.get()}openFilterComponent(){this.dialog.open(Z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,T.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}get(){this.testClassService.getTestClasses(this.dataSource.filterModel).pipe((0,J.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(d.uw),t.Y36(C.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-classes"]],features:[t._Bn([C.L])],decls:5,vars:4,consts:function(){let l;return l="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start","",1,"sz-h5"],l,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,n){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),t.qZA(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return n.get()}),t.qZA()),2&s&&(t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[N.K,D.f,R.z],encapsulation:2}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[M.C],imports:[m.ez,a.u5,a.UX,g.Bz.forChild(U),d.Is,v.c,c.Ps,i.ot,f.Vn,z.h,A.E3,y.g,p.su,E.F,I.n]}),o})()},465:(h,u,e)=>{e.d(u,{X:()=>a});var m=e(5879);let a=(()=>{class i{}return i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({}),i})()}}]);