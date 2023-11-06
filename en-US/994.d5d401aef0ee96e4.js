"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[994],{2994:(N,u,o)=>{o.r(u),o.d(u,{PersonDocumentsComponent:()=>$});var i=o(2296),l=o(8109),c=o(8262),E=o(9060),S=o(7076),a=o(9899),f=o(2516),d=o(3562),D=o(9598),M=o(8721),O=o(8180),p=o(6223),h=o(7700),T=o(1646),P=o(5781),e=o(5879);let g=(()=>{class r extends P.ms{constructor(n,s){super(n),this.ngControl=n,this.typeI18nPipe=s,this.options=Object.keys(T.n).map(t=>T.n[t]),this.label="Document Type",this.optionContent=t=>this.typeI18nPipe.transform(t)}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(p.a5,10),e.Y36(S.y))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-form-field-document-type"]],standalone:!0,features:[e._Bn([S.y]),e.qOj,e.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(s,t){1&s&&e._UZ(0,"sz-ui-form-field-select",0),2&s&&e.Q6J("formControl",t.control)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)},dependencies:[p.UX,p.JJ,p.oH,P.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return r})();var y=o(2393),v=o(5974),_=o(4622),z=o(6091);let U=(()=>{class r extends a.Ku{constructor(n,s,t,m){super(t),this.mpplService=n,this.fb=s,this.dialog=t,this.data=m,this.form=s.group({referenceNumber:[m.personDocument?.referenceNumber,[p.kI.maxLength(128)]],documentType:[m.personDocument?.documentType??T.n.DriverLicense,[p.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personDocument?this.mpplService.persons.documents.update(this.data.personId,this.data.personDocument.id,this.form.value):this.mpplService.persons.documents.create(this.data.personId,this.form.value))}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(y.i),e.Y36(p.qu),e.Y36(h.so),e.Y36(h.WI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:3,consts:function(){let n;return n="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",n],["formControlName","documentType"],[3,"actions"]]},template:function(s,t){1&s&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&s&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("actions",t.actions))},dependencies:[p.UX,p._Y,p.JJ,p.JL,p.sg,p.u,h.Is,h.xY,P.g2,v.g,a.su,_.Y,z.t,g],encapsulation:2})}return r})();var A=o(8359),I=o(3144);let $=(()=>{class r{constructor(n,s,t,m){this.dialog=n,this.mpplService=s,this.route=t,this.typeI18nPipe=m,this.dataSource=new d.b2(D.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(d.zP.default([d.UC.text("referenceNumber","Number"),c.h.documentType(C=>this.typeI18nPipe.transform(C.documentType)),c.h.createdAt(),c.h.menu([d.od.edit(C=>this.openSaveComponent(C)),d.od.delete(C=>this.openPersonDocumentDeleteComponent(C))])])),this.get()}openSaveComponent(n){this.dialog.open(U,{data:{personId:this.person.id,personDocument:n}}).afterClosed().pipe((0,O.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openPersonDocumentDeleteComponent(n){this.dialog.open(a.fN,{data:a.cb.delete(this.mpplService.persons.documents.delete(n.personId,n.id),n)}).afterClosed().pipe((0,O.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mpplService.persons.documents.get(this.person.id,this.dataSource.filterModel).pipe((0,M.sU)(this.dataSource.indicator),(0,O.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(h.uw),e.Y36(y.i),e.Y36(l.gz),e.Y36(S.y))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[e._Bn([S.y]),e.jDz],decls:12,vars:7,consts:function(){let n,s;return n="Documents",s="Add",[["start",""],[1,"sz-h5"],n,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],s,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,t){1&s&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&s&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[l.Bz,l.rH,i.ot,i.lW,d.Vn,A.K,I.f,f.z,E.Y],encapsulation:2})}return r})()},8262:(N,u,o)=>{o.d(u,{h:()=>E});var i=o(3562),l=o(7311);const c={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class E{static menu(a){return i.UC.action("menu",a)}static code(){return i.UC.text("code","Code")}static createdAt(){return i.UC.date("createdAt",l.O.createdDate)}static updatedAt(){return i.UC.date("updatedAt",l.O.updatedDate)}static id(){return i.UC.text("id",l.O.id)}static nameHyperlink(a,f,d){return i.UC.hyperlink("name",l.O.name,a,f,d)}static nameText(a){return i.UC.text("name",l.O.name,a)}static phoneType(a){return i.UC.text("phoneType",c.phoneType,a)}static emailType(a){return i.UC.text("emailType",c.emailType,a)}static documentType(a){return i.UC.text("documentType",c.documentType,a)}static comparisonOperator(a){return i.UC.text("comparisonOperator",c.comparisonType,a)}}},7311:(N,u,o)=>{o.d(u,{O:()=>i});const i={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}}}]);