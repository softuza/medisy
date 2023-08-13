"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[267],{9267:(Y,O,e)=>{e.r(O),e.d(O,{LaboratoryTestGroupsComponent:()=>L});var m=e(2296),T=e(5986),c=e(8109),E=e(2191),S=e(3576),f=e(5041),u=e(3572),h=e(9598),y=e(8721),p=e(8180),d=e(6223),i=e(7700),A=e(5467),t=e(5879),b=e(8652),G=e(4622),C=e(6091);const _=function(){return[]},g=function(s){return[s]};let M=(()=>{class s extends S.Ku{constructor(o,a,l,r){super(l),this.laboratoryService=o,this.fb=a,this.dialog=l,this.data=r,this.form=a.group({enabled:[r.laboratoryTestGroup?.enabled??!0,[d.kI.required]],testGroupId:[r.laboratoryTestGroup?.testGroupId,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestGroup?this.laboratoryService.updateTestGroup(this.data.laboratoryId,this.data.laboratoryTestGroup?.id,this.form.value):this.laboratoryService.createTestGroup(this.data.laboratoryId,this.form.value))}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(b.v),t.Y36(d.qu),t.Y36(i.so),t.Y36(i.WI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let n;return n="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId",3,"excludeLaboratoryIds"],["formControlName","enabled"],n,[3,"actions"]]},template:function(o,a){1&o&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-group-select",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(1),t.Q6J("excludeLaboratoryIds",a.data.laboratoryTestGroup?t.DdM(4,_):t.VKq(5,g,a.data.laboratoryId)),t.xp6(3),t.Q6J("actions",a.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,S.su,G.Y,C.t,i.Is,i.xY,T.p9,T.oG,A.Q],encapsulation:2}),s})();var P=e(2516),v=e(3582),R=e(3144);let L=(()=>{class s{constructor(o,a,l){this.dialog=o,this.laboratoryService=a,this.route=l,this.dataSource=new u.b2(h.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("testGroup","Test Group",r=>r.testGroup.name),E.h.createdAt(),u.UC.checkbox("enabled","Enabled",(r,N)=>{r.enabled=N,this.laboratoryService.updateTestGroup(r.laboratoryId,r.id,r).pipe((0,p.q)(1)).subscribe(I=>{r=I})}),E.h.menu([u.od.edit(r=>{this.openSaveComponent(r)}),u.od.delete(r=>{this.openLaboratoryTestGroupDeleteComponent(r)})])],this.get()}openSaveComponent(o){this.dialog.open(M,{data:{laboratoryId:this.laboratory.id,laboratoryTestGroup:o}}).afterClosed().pipe((0,p.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openLaboratoryTestGroupDeleteComponent(o){this.dialog.open(S.fN,{data:S.cb.delete(this.laboratoryService.deleteTestGroup(o.laboratoryId,o.id),o)}).afterClosed().pipe((0,p.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.laboratoryService.getTestGroups(this.laboratory.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator)).pipe((0,p.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(i.uw),t.Y36(b.v),t.Y36(c.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-test-groups"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let n,o;return n="Test Groups",o="Add",[["start",""],[1,"sz-h5"],n,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,a){1&o&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return a.get()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return a.get()}),t.qZA()),2&o&&(t.xp6(5),t.Oqu(a.laboratory.name),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[c.Bz,c.rH,f.n,P.z,u.Vn,v.K,R.f,T.p9,m.ot,m.lW],encapsulation:2}),s})()}}]);