"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[260],{9260:(U,c,e)=>{e.r(c),e.d(c,{TestClassesModule:()=>N});var m=e(6814),r=e(6223),S=e(2296),i=e(7700),T=e(617),C=e(2032),v=e(8109),l=e(6883),g=e(758),d=e(3576),E=e(5041),y=e(7239),u=e(3572),f=e(8262),A=e(9598),M=e(8721),p=e(8180),z=e(7106),I=e(7195),t=e(5879),J=e(4622),L=e(6091);let Y=(()=>{class n extends d.Z2{constructor(a,s,o){super(s),this.fb=a,this.dialog=s,this.data=o,this.form=a.group({includeLaboratoryIds:[o.includeLaboratoryIds],includeTestGroupIds:[o.includeTestGroupIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(r.qu),t.Y36(i.so),t.Y36(i.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-test-classes-filter"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(s,o){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&s&&(t.Q6J("header",o.header),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("actions",o.actions))},dependencies:[m.ez,r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,i.Is,i.xY,d.su,J.Y,L.t,z.w,I.Q],encapsulation:2})}return n})();var b=e(8359),Z=e(3144),O=e(2516);const P=[{path:"",component:(()=>{class n{constructor(a,s){this.dialog=a,this.mlabService=s,this.dataSource=new u.b2(A.J.pagedSorted("name")),this.dataSource.columns=[f.h.nameText(o=>o.name),u.UC.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",o=>o.abbreviation),f.h.createdAt()],this.get()}openFilterComponent(){this.dialog.open(Y,{data:this.dataSource.filterModel}).afterClosed().pipe((0,p.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.mlabService.testClasses.get(this.dataSource.filterModel).pipe((0,M.sU)(this.dataSource.indicator),(0,p.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(i.uw),t.Y36(l.t))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratory-test-classes"]],features:[t._Bn([l.t])],decls:5,vars:4,consts:function(){let a;return a="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,o){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),t.qZA(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return o.get()}),t.qZA()),2&s&&(t.xp6(3),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[b.K,Z.f,O.z],encapsulation:2})}return n})()}];let N=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#s=this.\u0275inj=t.cJS({providers:[l.t],imports:[m.ez,r.u5,r.UX,v.Bz.forChild(P),i.Is,C.c,T.Ps,S.ot,u.Vn,y.h,g.E3,d.su,E.n]})}return n})()}}]);