"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[267],{9267:(I,T,o)=>{o.r(T),o.d(T,{LaboratoryTestGroupsComponent:()=>v});var m=o(2296),p=o(5986),c=o(8109),O=o(8262),u=o(3576),b=o(5041),l=o(3572),h=o(9598),f=o(8721),S=o(8180),i=o(6223),d=o(7700),A=o(7195),t=o(5879),E=o(6883),_=o(4622),g=o(6091);const M=function(){return[]},P=function(n){return[n]};let G=(()=>{class n extends u.Ku{constructor(a,s,e,r){super(e),this.mlabService=a,this.fb=s,this.dialog=e,this.data=r,this.form=s.group({enabled:[r.laboratoryTestGroup?.enabled??!0,[i.kI.required]],testGroupId:[r.laboratoryTestGroup?.testGroupId,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestGroup?this.mlabService.laboratories.testGroups.update(this.data.laboratoryId,this.data.laboratoryTestGroup?.id,this.form.value):this.mlabService.laboratories.testGroups.create(this.data.laboratoryId,this.form.value))}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(E.t),t.Y36(i.qu),t.Y36(d.so),t.Y36(d.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let a;return a="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId",3,"excludeLaboratoryIds"],["formControlName","enabled"],a,[3,"actions"]]},template:function(s,e){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-group-select",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&s&&(t.Q6J("header",e.header),t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(1),t.Q6J("excludeLaboratoryIds",e.data.laboratoryTestGroup?t.DdM(4,M):t.VKq(5,P,e.data.laboratoryId)),t.xp6(3),t.Q6J("actions",e.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,u.su,_.Y,g.t,d.Is,d.xY,p.p9,p.oG,A.Q],encapsulation:2})}return n})();var C=o(2516),y=o(8359),R=o(3144);let v=(()=>{class n{constructor(a,s,e){this.dialog=a,this.mlabService=s,this.route=e,this.dataSource=new l.b2(h.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[l.UC.text("testGroup","Test Group",r=>r.testGroup.name),O.h.createdAt(),l.UC.checkbox("enabled","Enabled",(r,N)=>{r.enabled=N,this.mlabService.laboratories.testGroups.update(r.laboratoryId,r.id,r).pipe((0,S.q)(1)).subscribe(L=>{r=L})}),O.h.menu([l.od.edit(r=>{this.openSaveComponent(r)}),l.od.delete(r=>{this.openLaboratoryTestGroupDeleteComponent(r)})])],this.get()}openSaveComponent(a){this.dialog.open(G,{data:{laboratoryId:this.laboratory.id,laboratoryTestGroup:a}}).afterClosed().pipe((0,S.q)(1)).subscribe(e=>{this.dataSource.updateOrPushItem(e)})}openLaboratoryTestGroupDeleteComponent(a){this.dialog.open(u.fN,{data:u.cb.delete(this.mlabService.laboratories.testGroups.delete(a.laboratoryId,a.id),a)}).afterClosed().pipe((0,S.q)(1)).subscribe(e=>{this.dataSource.delete(e)})}get(){this.mlabService.laboratories.testGroups.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator)).pipe((0,S.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(d.uw),t.Y36(E.t),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratory-test-groups"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let a,s;return a="Test Groups",s="Add",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],s,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,e){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return e.get()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return e.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return e.get()}),t.qZA()),2&s&&(t.xp6(5),t.Oqu(e.laboratory.name),t.xp6(1),t.Q6J("dataSource",e.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource))},dependencies:[c.Bz,c.rH,b.n,C.z,l.Vn,y.K,R.f,p.p9,m.ot,m.lW],encapsulation:2})}return n})()}}]);