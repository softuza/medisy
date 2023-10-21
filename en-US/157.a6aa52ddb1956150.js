"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[157],{3157:(f,m,s)=>{s.r(m),s.d(m,{TestGroupSpecimenTypesComponent:()=>Y});var i=s(2296),c=s(8109),d=s(8262),u=s(9899),E=s(5041),a=s(3562),S=s(9598),h=s(8721),y=s(8180),r=s(6223),v=s(5986),T=s(7700),P=s(6814),O=s(5781),e=s(5879),C=s(6883);let g=(()=>{class p extends O.ms{constructor(o,n){super(o),this.ngControl=o,this.mlabService=n,this.options=[],this.label="Specimen Type",this.optionContent=t=>t.name,this.optionValue=t=>t.id}ngOnInit(){this.control=this.ngControl.control,this.mlabService.specimenTypes.getItems(S.J.unpagedSorted("name")).pipe((0,h.sU)(this.indicator),(0,y.q)(1)).subscribe(o=>{this.options=o})}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(r.a5,10),e.Y36(C.t))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-form-field-specimen-type"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(n,t){1&n&&e._UZ(0,"sz-ui-form-field-select",0),2&n&&e.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[P.ez,r.UX,r.JJ,r.oH,O.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return p})();var M=s(4622),z=s(6091);let I=(()=>{class p extends u.Ku{constructor(o,n,t,l){super(t),this.mlabService=o,this.fb=n,this.dialog=t,this.data=l,this.form=n.group({specimenTypeId:[l.testGroupSpecimenType?.specimenTypeId,[r.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.testGroupSpecimenType?this.mlabService.testGroups.specimenTypes.update(this.data.testGroupId,this.data.testGroupSpecimenType?.id,this.form.value):this.mlabService.testGroups.specimenTypes.create(this.data.testGroupId,this.form.value))}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(C.t),e.Y36(r.qu),e.Y36(T.so),e.Y36(T.WI))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-test-group-specimen-types-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId"],[3,"actions"]],template:function(n,t){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-specimen-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&n&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(2),e.Q6J("actions",t.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,T.Is,T.xY,v.p9,u.su,M.Y,z.t,g],encapsulation:2})}return p})();var G=s(8359),N=s(3144),A=s(2516);let Y=(()=>{class p{constructor(o,n,t){this.dialog=o,this.mlabService=n,this.route=t,this.dataSource=new a.b2(S.J.paged()),this.testGroup=this.route.snapshot.data.testGroup,this.dataSource.addRows(a.zP.default([a.UC.text("specimenType","Specimen Type",l=>l.specimenType.name),d.h.createdAt(),d.h.menu([a.od.edit(l=>this.openSaveComponent(l)),a.od.delete(l=>this.openTestTypeSpecimenTypeDeleteComponent(l))])])),this.get()}openSaveComponent(o){this.dialog.open(I,{data:{testGroupId:this.testGroup.id,testGroupSpecimenType:o}}).afterClosed().pipe((0,y.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openTestTypeSpecimenTypeDeleteComponent(o){this.dialog.open(u.fN,{data:u.cb.delete(this.mlabService.testGroups.specimenTypes.delete(o.testGroupId,o.id),o)}).afterClosed().pipe((0,y.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}updateItem(o){this.mlabService.testGroups.specimenTypes.update(o.testGroupId,o.id,o).subscribe(n=>{this.dataSource.update(n)})}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroup.id,this.dataSource.filterModel).pipe((0,h.sU)(this.dataSource.indicator),(0,y.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(T.uw),e.Y36(C.t),e.Y36(c.gz))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-laboratory-test-group-specimen-types"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let o,n;return o="Specimen Types",n="Add",[["start",""],[1,"sz-h5"],o,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,t){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&n&&(e.xp6(5),e.Oqu(t.testGroup.name),e.xp6(1),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[c.Bz,c.rH,i.ot,i.lW,a.Vn,G.K,N.f,E.n,A.z],encapsulation:2})}return p})()},8262:(f,m,s)=>{s.d(m,{h:()=>u});var i=s(3562),c=s(7311);const d={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class u{static menu(a){return i.UC.action("menu",a)}static code(){return i.UC.text("code","Code")}static createdAt(){return i.UC.date("createdAt",c.O.createdDate)}static updatedAt(){return i.UC.date("updatedAt",c.O.updatedDate)}static id(){return i.UC.text("id",c.O.id)}static nameHyperlink(a,S,h){return i.UC.hyperlink("name",c.O.name,a,S,h)}static nameText(a){return i.UC.text("name",c.O.name,a)}static phoneType(a){return i.UC.text("phoneType",d.phoneType,a)}static emailType(a){return i.UC.text("emailType",d.emailType,a)}static documentType(a){return i.UC.text("documentType",d.documentType,a)}static comparisonOperator(a){return i.UC.text("comparisonOperator",d.comparisonType,a)}}},7311:(f,m,s)=>{s.d(m,{O:()=>i});const i={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}}}]);