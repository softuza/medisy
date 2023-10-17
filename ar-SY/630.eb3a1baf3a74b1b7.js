"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[630],{7630:(D,C,o)=>{o.r(C),o.d(C,{LaboratoryTestClassesComponent:()=>I});var E=o(2296),u=o(5986),T=o(8109),_=o(8262),S=o(9899),O=o(5041),d=o(3562),h=o(9598),A=o(8721),c=o(8180),n=o(6223),i=o(7700),t=o(5879),m=o(4622),f=o(6091);let b=(()=>{class l extends S.Z2{constructor(e,s,a){super(s),this.fb=e,this.dialog=s,this.data=a,this.form=e.group({enabled:[a.enabled]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(n.qu),t.Y36(i.so),t.Y36(i.WI))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-classes-filter"]],standalone:!0,features:[t.qOj,t.jDz],decls:6,vars:3,consts:function(){let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],e,[3,"actions"]]},template:function(s,a){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),t.SDv(4,3),t.qZA()()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&s&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(3),t.Q6J("actions",a.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,m.Y,f.t,i.Is,i.xY,u.p9,u.oG],encapsulation:2})}return l})();var M=o(738),p=o(6883);const L=function(){return[]},g=function(l){return[l]};let N=(()=>{class l extends S.Ku{constructor(e,s,a,r){super(a),this.mlabService=e,this.fb=s,this.dialog=a,this.data=r,this.form=s.group({enabled:[r.laboratoryTestClass?.enabled??!0,[n.kI.required]],testClassId:[r.laboratoryTestClass?.testClassId,[n.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestClass?this.mlabService.laboratories.testClasses.update(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value):this.mlabService.laboratories.testClasses.create(this.data.laboratoryId,this.form.value))}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(p.t),t.Y36(n.qu),t.Y36(i.so),t.Y36(i.WI))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-classes-save"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeLaboratoryIds"],["formControlName","enabled"],e,[3,"actions"]]},template:function(s,a){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-class",2),t.TgZ(4,"mat-checkbox",3),t.SDv(5,4),t.qZA()()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&s&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(1),t.Q6J("excludeLaboratoryIds",a.data.laboratoryTestClass?t.DdM(4,L):t.VKq(5,g,a.data.laboratoryId)),t.xp6(3),t.Q6J("actions",a.actions))},dependencies:[n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,S.su,m.Y,f.t,i.Is,i.xY,u.p9,u.oG,M.U],encapsulation:2})}return l})();var y=o(2516),P=o(8359),R=o(3144);let I=(()=>{class l{constructor(e,s,a){this.dialog=e,this.mlabService=s,this.route=a,this.dataSource=new d.b2(h.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(d.zP.default([d.UC.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",r=>r.testClass.name),_.h.createdAt(),d.UC.checkbox("enabled","\u0645\u0641\u0639\u0644",(r,Y)=>{r.enabled=Y,this.mlabService.laboratories.testClasses.update(r.laboratoryId,r.id,r).pipe((0,c.q)(1)).subscribe(v=>{r=v})}),_.h.menu([d.od.edit(r=>{this.openSaveComponent(r)}),d.od.delete(r=>{this.openLaboratoryTestClassDeleteComponent(r)})])])),this.get()}openSaveComponent(e){this.dialog.open(N,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:e}}).afterClosed().pipe((0,c.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openFilterComponent(){this.dialog.open(b,{data:this.dataSource.filterModel}).afterClosed().pipe((0,c.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openLaboratoryTestClassDeleteComponent(e){this.dialog.open(S.fN,{data:S.cb.delete(this.mlabService.laboratories.testClasses.delete(e.laboratoryId,e.id),e)}).afterClosed().pipe((0,c.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}get(){this.mlabService.laboratories.testClasses.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,A.sU)(this.dataSource.indicator)).pipe((0,c.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(i.uw),t.Y36(p.t),t.Y36(T.gz))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-classes"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let e,s;return e="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",s="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],e,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],s,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,a){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return a.get()})("filter",function(){return a.openFilterComponent()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return a.get()}),t.qZA()),2&s&&(t.xp6(5),t.Oqu(a.laboratory.name),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[T.Bz,T.rH,O.n,y.z,d.Vn,P.K,R.f,u.p9,E.ot,E.lW],encapsulation:2})}return l})()}}]);