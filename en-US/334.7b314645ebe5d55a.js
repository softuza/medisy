"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[334],{334:(C,S,t)=>{t.r(S),t.d(S,{LaboratoriesModule:()=>B});var i=t(6814),d=t(6223),m=t(2296),n=t(7700),A=t(617),E=t(8109),O=t(8652),_=t(758),c=t(4110),f=t(9004),R=t(5041),L=t(7239),p=t(3572),T=t(2191),P=t(9598),h=t(8721),M=t(8180),g=t(3590),e=t(5879),v=t(5974),N=t(8873),I=t(4622),y=t(6091);let D=(()=>{class r extends c.Ku{constructor(o,a,s,u){super(s),this.laboratoryService=o,this.fb=a,this.dialog=s,this.data=u,this.form=a.group({name:[u?.name,[d.kI.required,d.kI.minLength(1)]],description:[u?.description,[]],address:[u?.address,[]]})}submit(){this.IsValid()&&this.save(this.data?this.laboratoryService.updateLaboratory(this.data.id,this.form.value):this.laboratoryService.createLaboratory(this.form.value))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(O.v),e.Y36(d.qu),e.Y36(n.so),e.Y36(n.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratories-save"]],features:[e._Bn([g.L]),e.qOj],decls:7,vars:3,consts:function(){let l,o,a;return l="Name",o="Description",a="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",l],["formControlName","description","label",o],["formControlName","address","label",a],[3,"actions"]]},template:function(o,a){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(4),e.Q6J("actions",a.actions))},dependencies:[d._Y,d.JJ,d.JL,d.sg,d.u,n.xY,v.g,N.J,I.Y,y.t],encapsulation:2}),r})();var Y=t(6939),b=t(3144),$=t(2516);const z=[{path:"",component:(()=>{class r{constructor(o,a){this.dialog=o,this.laboratoryService=a,this.dataSource=new p.b2(P.J.pagedSorted("name")),this.dataSource.columns=[T.h.nameHyperlink(s=>s.id),T.h.createdAt(),T.h.menu([p.od.edit(s=>this.openSaveComponent(s))])],this.get()}openSaveComponent(o){this.dialog.open(D,{data:o}).afterClosed().pipe((0,M.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openLaboratoryDeleteComponent(o){this.dialog.open(c.fN,{data:c.cb.delete(this.laboratoryService.deleteLaboratory(o.id),o)}).afterClosed().pipe((0,M.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.laboratoryService.getLaboratories(this.dataSource.filterModel).pipe((0,h.sU)(this.dataSource.indicator),(0,M.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(n.uw),e.Y36(O.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:function(){let l,o;return l="Laboratories",o="Add",[["start","",1,"sz-h5"],l,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,a){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return a.get()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return a.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return a.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",a.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[m.lW,Y.K,b.f,$.z],encapsulation:2}),r})()}];let B=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[O.v],imports:[i.ez,d.u5,d.UX,E.Bz.forChild(z),n.Is,A.Ps,m.ot,p.Vn,L.h,_.E3,f.g,R.n,c.su]}),r})()},2191:(C,S,t)=>{t.d(S,{h:()=>d});var i=t(3572);class d{static menu(n){return i.UC.action("menu",n)}static code(){return i.UC.text("code","Code")}static createdAt(){return i.UC.date("createdAt","Created Date")}static updatedAt(){return i.UC.date("updatedAt","Updated Date")}static id(){return i.UC.text("id","Id")}static nameHyperlink(n,A,E){return i.UC.hyperlink("name","Name",n,A,E)}static nameText(n){return i.UC.text("name","Name",n)}static phoneType(n){return i.UC.text("phoneType","Phone Type",n)}static emailType(n){return i.UC.text("emailType","Email Type",n)}static documentType(n){return i.UC.text("documentType","Document Type",n)}static comparisonOperator(n){return i.UC.text("comparisonOperator","Comparison Operator",n)}}}}]);