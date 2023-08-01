"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[448],{4243:(M,c,o)=>{o.r(c),o.d(c,{TestGroupsModule:()=>B});var l=o(6814),i=o(6223),d=o(2296),n=o(7700),m=o(617),C=o(2032),_=o(8109),g=o(6981),h=o(6987),A=o(758),S=o(4110),P=o(9004),G=o(5041),R=o(7239),T=o(3572),f=o(2191),I=o(8652),N=o(3590),U=o(9598),y=o(8721),E=o(8180),e=o(5879),O=o(4622),v=o(6091),Y=o(4889);let z=(()=>{class a extends S.Z2{constructor(t,s,r){super(s),this.fb=t,this.dialog=s,this.data=r,this.form=t.group({includeLaboratoryIds:[r.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(n.so),e.Y36(n.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-test-groups-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(t,s){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-laboratory",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,n.xY,O.Y,v.t,Y.w],encapsulation:2}),a})();var D=o(5974),L=o(8873);let $=(()=>{class a extends S.Ku{constructor(t,s,r,p){super(r),this.testGroupService=t,this.fb=s,this.dialog=r,this.data=p,this.form=s.group({name:[p?.name,[i.kI.required,i.kI.minLength(1)]],description:[p?.description,[]],isFavorite:[p?.isFavorite??!1,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.testGroupService.updateTestGroup(this.data.id,this.form.value):this.testGroupService.createTestGroup(this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(h.C),e.Y36(i.qu),e.Y36(n.so),e.Y36(n.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-groups-save"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let u,t;return u="Name",t="Description",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",u],["formControlName","description","label",t],[3,"actions"]]},template:function(t,s){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(3),e.Q6J("actions",s.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,n.xY,D.g,L.J,O.Y,v.t],encapsulation:2}),a})();var J=o(6939),Z=o(3144),F=o(2516);const b=[{path:"",component:(()=>{class a{constructor(t,s){this.dialog=t,this.testGroupService=s,this.dataSource=new T.b2(U.J.paged()),this.dataSource.columns=[f.h.nameHyperlink(r=>r.id,r=>r.name),f.h.code(),f.h.createdAt(),T.UC.checkbox("isFavorite","Favorite",(r,p)=>{r.isFavorite=p,this.updateItem(r)}),f.h.menu([T.od.edit(r=>this.openSaveComponent(r)),T.od.delete(r=>this.openTestGroupDeleteComponent(r))])],this.get()}openFilterComponent(){this.dialog.open(z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openSaveComponent(t){this.dialog.open($,{data:t}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openTestGroupDeleteComponent(t){this.dialog.open(S.fN,{data:S.cb.delete(this.testGroupService.deleteTestGroup(t.id),t)}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}updateItem(t){this.testGroupService.updateTestGroup(t.id,t).subscribe(s=>{this.dataSource.update(s)})}get(){this.testGroupService.getTestGroups(this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(n.uw),e.Y36(h.C))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-groups"]],features:[e._Bn([I.v,N.L])],decls:8,vars:4,consts:function(){let u,t;return u="Test Groups",t="Add",[["start","",1,"sz-h5"],u,[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,s){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return s.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return s.get()}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[d.lW,J.K,Z.f,F.z],encapsulation:2}),a})()}];let B=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[h.C],imports:[l.ez,i.u5,i.UX,_.Bz.forChild(b),n.Is,C.c,m.Ps,d.ot,T.Vn,R.h,A.E3,P.g,S.su,g.F,G.n]}),a})()},2191:(M,c,o)=>{o.d(c,{h:()=>i});var l=o(3572);class i{static menu(n){return l.UC.action("menu",n)}static code(){return l.UC.text("code","Code")}static createdAt(){return l.UC.date("createdAt","Created Date")}static updatedAt(){return l.UC.date("updatedAt","Updated Date")}static id(){return l.UC.text("id","Id")}static nameHyperlink(n,m,C){return l.UC.hyperlink("name","Name",n,m,C)}static nameText(n){return l.UC.text("name","Name",n)}static phoneType(n){return l.UC.text("phoneType","Phone Type",n)}static emailType(n){return l.UC.text("emailType","Email Type",n)}static documentType(n){return l.UC.text("documentType","Document Type",n)}static comparisonOperator(n){return l.UC.text("comparisonOperator","Comparison Operator",n)}}},465:(M,c,o)=>{o.d(c,{X:()=>i});var l=o(5879);let i=(()=>{class d{}return d.\u0275fac=function(m){return new(m||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({}),d})()}}]);