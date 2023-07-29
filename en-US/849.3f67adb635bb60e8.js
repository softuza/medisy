"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[849],{849:(M,E,a)=>{a.r(E),a.d(E,{LaboratoryEmailsComponent:()=>Y});var s=a(2296),p=a(8109),f=a(2191),r=a(4110),A=a(5041),c=a(3572),O=a(9598),L=a(8721),S=a(8180),i=a(6223),d=a(7700),y=a(6981),e=a(5879),_=a(4622),C=a(6091),T=a(2406);let b=(()=>{class n extends r.Z2{constructor(t,o,l){super(o),this.fb=t,this.dialog=o,this.data=l,this.form=t.group({emailType:[l.emailType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-emails-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-email-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("actions",o.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,r.su,_.Y,C.t,d.Is,d.xY,y.F,T.N],encapsulation:2}),n})();var g=a(3712),h=a(8652);let v=(()=>{class n extends r.Ku{constructor(t,o,l,u){super(l),this.laboratoryService=t,this.fb=o,this.dialog=l,this.data=u,this.form=o.group({value:[u.laboratoryEmail?.value,[i.kI.required,i.kI.email]],description:[u.laboratoryEmail?.description,[]],emailType:[u.laboratoryEmail?.emailType??g.V.Public,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryEmail?this.laboratoryService.updateLaboratoryEmail(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value):this.laboratoryService.createLaboratoryEmail(this.data.laboratoryId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.v),e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let m,t;return m="Description",t="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",m],["formControlName","value","label",t],["formControlName","emailType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,r.su,_.Y,C.t,d.Is,d.xY,y.F,T.N],encapsulation:2}),n})();var I=a(2516),P=a(6273),R=a(4624);let Y=(()=>{class n{constructor(t,o,l){this.dialog=t,this.laboratoryService=o,this.route=l,this.dataSource=new c.b2(O.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[c.UC.text("value","Email"),f.h.createdAt(),f.h.menu([c.od.edit(u=>{this.openSaveComponent(u)}),c.od.delete(u=>{this.openEmailDeleteComponent(u)})])],this.get()}openSaveComponent(t){this.dialog.open(v,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:t}}).afterClosed().pipe((0,S.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openFilterComponent(){this.dialog.open(b,{data:this.dataSource.filterModel}).afterClosed().pipe((0,S.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openEmailDeleteComponent(t){this.dialog.open(r.fN,{data:r.cb.delete(this.laboratoryService.deleteLaboratoryEmail(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,S.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.laboratoryService.getLaboratoryEmails(this.laboratory.id,this.dataSource.filterModel).pipe((0,L.sU)(this.dataSource.indicator)).pipe((0,S.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.uw),e.Y36(h.v),e.Y36(p.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let m,t;return m="Emails",t="Add",[["start",""],[1,"sz-h5"],m,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[p.Bz,p.rH,s.ot,s.lW,A.n,I.z,c.Vn,P.K,R.f],encapsulation:2}),n})()},2191:(M,E,a)=>{a.d(E,{h:()=>p});var s=a(3572);class p{static menu(r){return s.UC.action("menu",r)}static code(){return s.UC.text("code","Code")}static createdAt(){return s.UC.date("createdAt","Created Date")}static updatedAt(){return s.UC.date("updatedAt","Updated Date")}static id(){return s.UC.text("id","Id")}static nameHyperlink(r,A,c){return s.UC.hyperlink("name","Name",r,A,c)}static nameText(r){return s.UC.text("name","Name",r)}static phoneType(r){return s.UC.text("phoneType","Phone Type",r)}static emailType(r){return s.UC.text("emailType","Email Type",r)}static documentType(r){return s.UC.text("documentType","Document Type",r)}static comparisonOperator(r){return s.UC.text("comparisonOperator","Comparison Operator",r)}}}}]);