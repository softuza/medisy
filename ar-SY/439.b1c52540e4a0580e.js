"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[439],{9439:(U,S,s)=>{s.r(S),s.d(S,{TestGroupSpecimenTypesComponent:()=>F});var T=s(2296),d=s(8109),h=s(2191),c=s(3576),v=s(5041),m=s(3572),g=s(9598),y=s(8721),u=s(8180),i=s(6223),P=s(5986),l=s(7700),f=s(6814),E=s(8518),G=s(6893),O=s(8930),M=s(7398),e=s(5879);let I=(()=>{class n extends G.m{constructor(t,o){super(t),this.ngControl=t,this.testClassService=o,this.label="\u0646\u0645\u0637 \u0627\u0644\u0639\u064A\u0646\u0629",this.contentFormat=p=>p.name,this.valueFormat=p=>p.id}ngOnInit(){this.control=this.ngControl.control,this.items$=this.testClassService.getSpecimenTypes({pageIndex:1,pageSize:20}).pipe((0,y.sU)(this.indicator),(0,M.U)(t=>t.items))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.a5,10),e.Y36(E.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-specimen-type"]],standalone:!0,features:[e._Bn([E.I]),e.qOj,e.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("indicator",o.indicator)("items",e.lcZ(1,9,o.items$))("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[f.ez,f.Ov,i.UX,i.JJ,i.oH,O.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var C=s(6987),N=s(4622),Y=s(6091);let A=(()=>{class n extends c.Ku{constructor(t,o,p,r){super(p),this.testGroupService=t,this.fb=o,this.dialog=p,this.data=r,this.form=o.group({specimenTypeId:[r.testGroupSpecimenType?.specimenTypeId,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.testGroupSpecimenType?this.testGroupService.updateTestGroupSpecimenType(this.data.testGroupId,this.data.testGroupSpecimenType?.id,this.form.value):this.testGroupService.createTestGroupSpecimenType(this.data.testGroupId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.C),e.Y36(i.qu),e.Y36(l.so),e.Y36(l.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-test-group-specimen-types-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-specimen-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("actions",o.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,l.Is,l.xY,P.p9,c.su,N.Y,Y.t,I],encapsulation:2}),n})();var z=s(3582),R=s(3144),D=s(2516);let F=(()=>{class n{constructor(t,o,p){this.dialog=t,this.testGroupService=o,this.route=p,this.dataSource=new m.b2(g.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.columns=[m.UC.text("specimenType","\u0646\u0645\u0637 \u0627\u0644\u0639\u064A\u0646\u0629",r=>r.specimenType.name),h.h.createdAt(),h.h.menu([m.od.edit(r=>this.openSaveComponent(r)),m.od.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])],this.get()}openSaveComponent(t){this.dialog.open(A,{data:{testGroupId:this.testGroup.id,testGroupSpecimenType:t}}).afterClosed().pipe((0,u.q)(1)).subscribe(p=>{this.dataSource.updateOrPushItem(p)})}openTestTypeSpecimenTypeDeleteComponent(t){this.dialog.open(c.fN,{data:c.cb.delete(this.testGroupService.deleteTestGroupSpecimenType(t.testGroupId,t.id),t)}).afterClosed().pipe((0,u.q)(1)).subscribe(p=>{this.dataSource.delete(p)})}updateItem(t){this.testGroupService.updateTestGroupSpecimenType(t.testGroupId,t.id,t).subscribe(o=>{this.dataSource.update(o)})}get(){this.testGroupService.getTestGroupSpecimenTypes(this.testGroup.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.uw),e.Y36(C.C),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-test-group-specimen-types"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let a,t;return a="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.testGroup.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[d.Bz,d.rH,T.ot,T.lW,m.Vn,z.K,R.f,v.n,D.z],encapsulation:2}),n})()}}]);