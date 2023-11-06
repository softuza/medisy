"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[267],{9267:(y,T,e)=>{e.r(T),e.d(T,{LaboratoryTestGroupsComponent:()=>v});var n=e(2296),d=e(5986),p=e(8109),O=e(8262),S=e(9899),i=e(2516),u=e(3562),b=e(9598),C=e(8721),h=e(8180),c=e(6223),m=e(7700),f=e(7195),t=e(5879),E=e(6883),A=e(4622),_=e(6091);const P=function(){return[]},M=function(l){return[l]};let g=(()=>{class l extends S.Ku{constructor(a,r,o,s){super(o),this.mlabService=a,this.fb=r,this.dialog=o,this.data=s,this.form=r.group({enabled:[s.laboratoryTestGroup?.enabled??!0,[c.kI.required]],testGroupId:[s.laboratoryTestGroup?.testGroupId,[c.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestGroup?this.mlabService.laboratories.testGroups.update(this.data.laboratoryId,this.data.laboratoryTestGroup?.id,this.form.value):this.mlabService.laboratories.testGroups.create(this.data.laboratoryId,this.form.value))}static#t=this.\u0275fac=function(r){return new(r||l)(t.Y36(E.t),t.Y36(c.qu),t.Y36(m.so),t.Y36(m.WI))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let a;return a="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupId",3,"excludeLaboratoryIds"],["formControlName","enabled"],a,[3,"actions"]]},template:function(r,o){1&r&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-group-select",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&r&&(t.Q6J("header",o.header),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("excludeLaboratoryIds",o.data.laboratoryTestGroup?t.DdM(4,P):t.VKq(5,M,o.data.laboratoryId)),t.xp6(3),t.Q6J("actions",o.actions))},dependencies:[c.UX,c._Y,c.JJ,c.JL,c.sg,c.u,S.su,A.Y,_.t,m.Is,m.xY,d.p9,d.oG,f.Q],encapsulation:2})}return l})();var G=e(8359),R=e(3144);let v=(()=>{class l{constructor(a,r,o){this.dialog=a,this.mlabService=r,this.route=o,this.dataSource=new u.b2(b.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(u.zP.default([u.UC.text("testGroup","Test Group",s=>s.testGroup.name),O.h.createdAt(),u.UC.checkbox("enabled","Enabled",(s,N)=>{s.enabled=N,this.mlabService.laboratories.testGroups.update(s.laboratoryId,s.id,s).pipe((0,h.q)(1)).subscribe(L=>{s=L})}),O.h.menu([u.od.edit(s=>{this.openSaveComponent(s)}),u.od.delete(s=>{this.openLaboratoryTestGroupDeleteComponent(s)})])])),this.get()}openSaveComponent(a){this.dialog.open(g,{data:{laboratoryId:this.laboratory.id,laboratoryTestGroup:a}}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{this.dataSource.updateOrPushItem(o)})}openLaboratoryTestGroupDeleteComponent(a){this.dialog.open(S.fN,{data:S.cb.delete(this.mlabService.laboratories.testGroups.delete(a.laboratoryId,a.id),a)}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{this.dataSource.delete(o)})}get(){this.mlabService.laboratories.testGroups.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,C.sU)(this.dataSource.indicator)).pipe((0,h.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#t=this.\u0275fac=function(r){return new(r||l)(t.Y36(m.uw),t.Y36(E.t),t.Y36(p.gz))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-groups"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let a,r;return a="Test Groups",r="Add",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(r,o){1&r&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return o.get()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return o.get()}),t.qZA()),2&r&&(t.xp6(5),t.Oqu(o.laboratory.name),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[p.Bz,p.rH,i.z,u.Vn,G.K,R.f,d.p9,n.ot,n.lW],encapsulation:2})}return l})()},8262:(y,T,e)=>{e.d(T,{h:()=>O});var n=e(3562),d=e(7311);const p={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class O{static menu(i){return n.UC.action("menu",i)}static code(){return n.UC.text("code","Code")}static createdAt(){return n.UC.date("createdAt",d.O.createdDate)}static updatedAt(){return n.UC.date("updatedAt",d.O.updatedDate)}static id(){return n.UC.text("id",d.O.id)}static nameHyperlink(i,u,b){return n.UC.hyperlink("name",d.O.name,i,u,b)}static nameText(i){return n.UC.text("name",d.O.name,i)}static phoneType(i){return n.UC.text("phoneType",p.phoneType,i)}static emailType(i){return n.UC.text("emailType",p.emailType,i)}static documentType(i){return n.UC.text("documentType",p.documentType,i)}static comparisonOperator(i){return n.UC.text("comparisonOperator",p.comparisonType,i)}}},7311:(y,T,e)=>{e.d(T,{O:()=>n});const n={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}}}]);