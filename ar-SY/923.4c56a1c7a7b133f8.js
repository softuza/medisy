"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[923],{4923:(C,h,a)=>{a.r(h),a.d(h,{LaboratoryPhonesComponent:()=>R});var s=a(8109),S=a(2191),c=a(4110),i=a(5041),m=a(3572),P=a(9598),T=a(8721),f=a(8180),r=a(6223),u=a(7700),_=a(6981),e=a(5879),y=a(4622),O=a(6091),E=a(408);let b=(()=>{class n extends c.Z2{constructor(o,t,l){super(t),this.fb=o,this.dialog=t,this.data=l,this.form=o.group({phoneType:[l.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.qu),e.Y36(u.so),e.Y36(u.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,c.su,y.Y,O.t,u.Is,u.xY,_.F,E.I],encapsulation:2}),n})();var M=a(1101),A=a(8652);let g=(()=>{class n extends c.Ku{constructor(o,t,l,p){super(l),this.laboratoryService=o,this.fb=t,this.dialog=l,this.data=p,this.form=t.group({value:[p.laboratoryPhone?.value,[r.kI.required]],description:[p.laboratoryPhone?.description,[]],phoneType:[p.laboratoryPhone?.phoneType??M.z.Home,[r.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.laboratoryService.updateLaboratoryPhone(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.laboratoryService.createLaboratoryPhone(this.data.laboratoryId,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(A.v),e.Y36(r.qu),e.Y36(u.so),e.Y36(u.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let d,o;return d="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",d],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("actions",t.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,c.su,y.Y,O.t,u.Is,u.xY,_.F,E.I],encapsulation:2}),n})();var L=a(2516),N=a(6273),v=a(4624);let R=(()=>{class n{constructor(o,t,l){this.dialog=o,this.laboratoryService=t,this.route=l,this.dataSource=new m.b2(P.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[m.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),S.h.createdAt(),S.h.menu([m.od.edit(p=>this.openSaveComponent(p)),m.od.delete(p=>this.openPhoneDeleteComponent(p))])],this.get()}openSaveComponent(o){this.dialog.open(g,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:o}}).afterClosed().pipe((0,f.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openFilterComponent(){this.dialog.open(b,{data:this.dataSource.filterModel}).afterClosed().pipe((0,f.q)(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get()})}openPhoneDeleteComponent(o){this.dialog.open(c.fN,{data:c.cb.delete(this.laboratoryService.deleteLaboratoryPhone(o.laboratoryId,o.id),o)}).afterClosed().pipe((0,f.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.laboratoryService.getLaboratoryPhones(this.laboratory.id,this.dataSource.filterModel).pipe((0,T.sU)(this.dataSource.indicator),(0,f.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u.uw),e.Y36(A.v),e.Y36(s.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let d,o;return d="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],d,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(t.laboratory.name),e.xp6(1),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[s.Bz,s.rH,i.n,L.z,m.Vn,N.K,v.f],encapsulation:2}),n})()},2191:(C,h,a)=>{a.d(h,{h:()=>S});var s=a(3572);class S{static menu(i){return s.UC.action("menu",i)}static code(){return s.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return s.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return s.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return s.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(i,m,P){return s.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",i,m,P)}static nameText(i){return s.UC.text("name","\u0627\u0644\u0627\u0633\u0645",i)}static phoneType(i){return s.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",i)}static emailType(i){return s.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",i)}static documentType(i){return s.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",i)}static comparisonOperator(i){return s.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",i)}}}}]);