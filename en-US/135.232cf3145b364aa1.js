"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[135],{2135:(ve,$,i)=>{i.r($),i.d($,{PersonModule:()=>Ie});var R=i(6814),a=i(6223),N=i(2296),X=i(5195),G=i(5986),F=i(3680),_=i(7700),y=i(6385),O=i(9157),Z=i(617),z=i(2032),T=i(7988),V=i(1476),x=i(8525),Q=i(3566),q=i(5313),m=i(8109),H=i(6981),B=i(465),K=i(6576),p=i(5348),j=i(4407),W=i(2595),w=i(2169),d=i(5436),k=i(807),ee=i(5041),oe=i(8766),S=i(3572),c=i(2191),E=(()=>((E=E||{}).NationalCard="NationalCard",E.BankCard="BankCard",E.DriverLicense="DriverLicense",E.Passport="Passport",E.TravelDocument="TravelDocument",E.Other="Other",E))(),e=i(5879);let A=(()=>{class n{transform(o){switch(o){case E.BankCard:return "Bank Card";case E.DriverLicense:return "Driver License";case E.NationalCard:return "National Card";case E.Passport:return "Passport";case E.TravelDocument:return "Travel Document";case E.Other:return "Other";default:return""}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=e.Yjl({name:"documentTypeI18n",type:n,pure:!0}),n})();var D=i(9598),I=i(2119),u=i(8180),M=i(4622),f=i(6091),C=i(5974),te=i(6893),ne=i(8930);let se=(()=>{class n extends te.m{constructor(o,t){super(o),this.ngControl=o,this.documentTypeI18nPipe=t,this.items=Object.keys(E).map(r=>E[r]),this.label="Document Type",this.contentFormat=r=>this.documentTypeI18nPipe.transform(r)}ngOnInit(){this.control=this.ngControl.control}writeValue(o){this.value=o}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.a5,10),e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-document-type"]],features:[e._Bn([A]),e.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(o,t){1&o&&e._UZ(0,"sz-ui-form-field-select",0),2&o&&e.Q6J("formControl",t.control)("items",t.items)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("contentFn",t.contentFormat)},dependencies:[a.JJ,a.oH,ne.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})(),re=(()=>{class n extends d.Ku{constructor(o,t,r,l){super(r),this.personService=o,this.fb=t,this.dialog=r,this.data=l,this.form=t.group({referenceNumber:[l.personDocument?.referenceNumber,[a.kI.maxLength(128)]],documentType:[l.personDocument?.documentType??E.DriverLicense,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personDocument?this.personService.updatePersonDocument(this.data.personId,this.data.personDocument.id,this.form.value):this.personService.createPersonDocument(this.data.personId,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents-save"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let s;return s="Number",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","referenceNumber","placeholder",s],["formControlName","documentType"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("actions",t.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,M.Y,f.t,C.g,se,_.xY],encapsulation:2}),n})();var v=i(9692),L=i(9288),h=i(2516),g=i(9060);let ie=(()=>{class n{constructor(o,t,r,l){this.dialog=o,this.personService=t,this.route=r,this.documentTypeI18nPipe=l,this.dataSource=new S.b2(D.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("referenceNumber","Number"),c.h.documentType(P=>this.documentTypeI18nPipe.transform(P.documentType)),c.h.createdAt(),c.h.menu([S.od.edit(P=>this.openSaveComponent(P)),S.od.delete(P=>this.openPersonDocumentDeleteComponent(P))])],this.get()}openSaveComponent(o){this.dialog.open(re,{data:{personId:this.person.id,personDocument:o}}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonDocumentDeleteComponent(o){this.dialog.open(d.fN,{data:d.cb.delete(this.personService.deletePersonDocument(o.personId,o.id),o)}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonDocuments(this.person.id,this.dataSource.filterModel).pipe((0,I.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(m.gz),e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents"]],features:[e._Bn([A])],decls:12,vars:7,consts:function(){let s,o;return s="Documents",o="Add",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[m.rH,v.K,L.f,h.z,N.lW,g.Y],encapsulation:2}),n})();var U=i(8873),ae=i(2406);let le=(()=>{class n extends d.Ku{constructor(o,t,r,l){super(r),this.personService=o,this.fb=t,this.dialog=r,this.data=l,this.form=t.group({value:[l.personEmail?.value,[a.kI.required,a.kI.email]],emailType:[l.personEmail?.emailType,[a.kI.required]],description:[l.personEmail?.description,[]]})}submit(){this.IsValid()&&this.save(this.data.personEmail?this.personService.updatePersonEmail(this.data.personId,this.data.personEmail.id,this.form.value):this.personService.createPersonEmail(this.data.personId,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let s,o;return s="Description",o="Email",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","placeholder",s],["formControlName","value","placeholder",o],["formControlName","emailType"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("actions",t.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,M.Y,f.t,C.g,U.J,ae.N,_.xY],encapsulation:2}),n})(),_e=(()=>{class n{constructor(o,t,r){this.dialog=o,this.personService=t,this.route=r,this.dataSource=new S.b2(D.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("value","Email"),c.h.createdAt(),c.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonEmailDeleteComponent(l))])],this.get()}openSaveComponent(o){this.dialog.open(le,{data:{personId:this.person.id,personEmail:o}}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonEmailDeleteComponent(o){this.dialog.open(d.fN,{data:d.cb.delete(this.personService.deletePersonEmail(o.personId,o.id),o)}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonEmails(this.person.id,this.dataSource.filterModel).pipe((0,I.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails"]],decls:12,vars:7,consts:function(){let s,o;return s="Emails",o="Add",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[m.rH,v.K,L.f,h.z,N.lW,g.Y],encapsulation:2}),n})();var b=i(851);let Se=(()=>{class n extends d.Ku{constructor(o,t,r,l){super(r),this.personService=o,this.fb=t,this.dialog=r,this.data=l,this.form=t.group({firstName:[l.personName?.firstName,[a.kI.required,a.kI.minLength(1)]],lastName:[l.personName?.lastName,[]],middleName:[l.personName?.middleName,[]],languageId:[l.personName?.languageId,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personName?this.personService.updatePersonName(this.data.personId,this.data.personName.id,this.form.value):this.personService.createPersonName(this.data.personId,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names-save"]],features:[e._Bn([]),e.qOj],decls:9,vars:3,consts:function(){let s,o,t;return s="First name",o="Last name",t="Middle name",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",s],["formControlName","lastName","label",o],["formControlName","middleName","label",t],["formControlName","languageId"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("actions",t.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,M.Y,f.t,C.g,b.d,_.xY],encapsulation:2}),n})(),Ee=(()=>{class n{constructor(o,t,r){this.dialog=o,this.personService=t,this.route=r,this.dataSource=new S.b2(D.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("firstName","First name"),S.UC.text("middleName","Middle name"),S.UC.text("lastName","Last name"),c.h.createdAt(),c.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonNameDeleteComponent(l))])],this.get()}openSaveComponent(o){this.dialog.open(Se,{data:{personId:this.person.id,personName:o}}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonNameDeleteComponent(o){this.dialog.open(d.fN,{data:d.cb.delete(this.personService.deletePersonName(o.personId,o.id),o)}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonNames(this.person.id,this.dataSource.filterModel).pipe((0,I.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names"]],decls:12,vars:7,consts:function(){let s,o;return s="Names",o="Add",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[m.rH,v.K,L.f,h.z,N.lW,g.Y],encapsulation:2}),n})();var de=i(1101),ue=i(408);let me=(()=>{class n extends d.Ku{constructor(o,t,r,l){super(r),this.personService=o,this.fb=t,this.dialog=r,this.data=l,this.form=t.group({value:[l?.personPhone?.value,[a.kI.required]],description:[l?.personPhone?.description,[]],phoneType:[l?.personPhone?.phoneType??de.z.Mobile,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personPhone?this.personService.updatePersonPhone(this.data.personId,this.data.personPhone.id,this.form.value):this.personService.createPersonPhone(this.data.personId,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let s,o;return s="Description",o="Number",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",s],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("actions",t.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,M.Y,f.t,C.g,U.J,ue.I,_.xY],encapsulation:2}),n})(),pe=(()=>{class n{constructor(o,t,r){this.dialog=o,this.personService=t,this.route=r,this.dataSource=new S.b2(D.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("value","Phone"),c.h.createdAt(),c.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonPhoneDeleteComponent(l))])],this.get()}openSaveComponent(o){this.dialog.open(me,{data:{personId:this.person.id,personPhone:o}}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonPhoneDeleteComponent(o){this.dialog.open(d.fN,{data:d.cb.delete(this.personService.deletePersonPhone(o.personId,o.id),o)}).afterClosed().pipe((0,u.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonPhones(this.person.id,this.dataSource.filterModel).pipe((0,I.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones"]],decls:12,vars:7,consts:function(){let s,o;return s="Phones",o="Add",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[m.rH,v.K,L.f,h.z,N.lW,g.Y],encapsulation:2}),n})();var J=i(5738),Pe=i(2757),Y=i(8034);function ce(n,s){if(1&n&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.label)}}function Ne(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,5),e.qZA())}let Oe=(()=>{class n extends Pe.l{constructor(o){super(o),this.ngControl=o}ngOnInit(){this.control=this.ngControl.control}writeValue(o){this.value=o}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(a.a5,10))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sz-ui-form-field-date"]],features:[e.qOj],decls:9,vars:5,consts:function(){let s;return s="This field is required",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"matDatepicker","formControl"],["picker",""],["matSuffix","",3,"for"],s]},template:function(o,t){if(1&o&&(e.TgZ(0,"mat-form-field",0),e.YNc(1,ce,2,1,"mat-label",1),e._UZ(2,"input",2),e.TgZ(3,"mat-hint"),e._uU(4,"MM/DD/YYYY"),e.qZA(),e._UZ(5,"mat-datepicker",null,3)(7,"mat-datepicker-toggle",4),e.YNc(8,Ne,2,0,"mat-error",1),e.qZA()),2&o){const r=e.MAs(6);e.xp6(1),e.Q6J("ngIf",t.label),e.xp6(1),e.Q6J("matDatepicker",r)("formControl",t.control),e.xp6(5),e.Q6J("for",r),e.xp6(1),e.Q6J("ngIf",t.control.hasError("required"))}},dependencies:[R.O5,a.Fj,a.JJ,a.oH,O.KE,O.hX,O.bx,O.TO,O.R9,z.Nt,Y.Mq,Y.hl,Y.nW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var Me=i(5741),fe=i(7336),Ce=i(2160);let he=(()=>{class n extends d.Ku{constructor(o,t,r,l){super(r),this.personService=o,this.fb=t,this.dialog=r,this.data=l,this.form=t.group({sex:[l.sex,[a.kI.required]],languageId:[l.languageId,[a.kI.required]],title:[l.title,[]],ssn:[l.ssn,[]],nationalityId:[l.nationalityId,[]],birthDate:[l.birthDate,[]]})}submit(){console.log(this.form.value),this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-save"]],features:[e._Bn([]),e.qOj],decls:11,vars:3,consts:function(){let s,o;return s="SSN",o="BirthDate",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","sex"],["formControlName","title"],["formControlName","ssn","label",s],["formControlName","languageId"],["formControlName","nationalityId"],["formControlName","birthDate","label",o],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"medisy-form-field-sex",3)(5,"medisy-form-field-title",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6)(8,"medisy-form-field-nationality",7)(9,"sz-ui-form-field-date",8),e.qZA()(),e._UZ(10,"sz-ui-dialog-actions",9)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(8),e.Q6J("actions",t.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,M.Y,f.t,C.g,Oe,b.d,Me.t,fe.e,Ce.V,_.xY],encapsulation:2}),n})();var ge=i(8145),Te=i(2286);function Ae(n,s){if(1&n&&(e.TgZ(0,"sz-ui-card",15),e._UZ(1,"sz-ui-counter",16),e.qZA()),2&n){const o=s.$implicit;e.Q6J("card",o),e.xp6(1),e.Q6J("value",null==o?null:o.counter)}}const De=[{path:"",component:(()=>{class n{constructor(o,t,r,l){this.dialog=o,this.analysisService=t,this.route=r,this.router=l,this.items=[{counter:0,icon:"science",subtitle:"Analyses",loading:!0}],this.person=this.route.snapshot.data.person,this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({personIds:[this.person.id]}).subscribe(o=>{this.items[0].counter=o.count,this.items[0].loading=!1})}openSaveComponent(){this.dialog.open(he,{data:this.person}).afterClosed().pipe((0,u.q)(1)).subscribe(t=>{t&&(this.person=t)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.uw),e.Y36(J.K),e.Y36(m.gz),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-peopel-person"]],features:[e._Bn([J.K])],decls:37,vars:5,consts:function(){let s,o,t,r,l;return s="Edit",o="Names",t="Phones",r="Emails",l="Documents",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],s,["mat-menu-item","","routerLink","names"],o,["mat-menu-item","","routerLink","phones"],t,["mat-menu-item","","routerLink","emails"],r,["mat-menu-item","","routerLink","documents"],l,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(o,t){if(1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e._uU(2),e.ALo(3,"personName"),e.qZA(),e.TgZ(4,"button",1)(5,"mat-icon"),e._uU(6,"more_vert"),e.qZA()(),e.TgZ(7,"mat-menu",null,2)(9,"button",3),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(10,"mat-icon"),e._uU(11,"edit"),e.qZA(),e.TgZ(12,"span"),e.SDv(13,4),e.qZA()(),e._UZ(14,"mat-divider"),e.TgZ(15,"button",5)(16,"mat-icon"),e._uU(17,"info"),e.qZA(),e.TgZ(18,"span"),e.SDv(19,6),e.qZA()(),e.TgZ(20,"button",7)(21,"mat-icon"),e._uU(22,"phone"),e.qZA(),e.TgZ(23,"span"),e.SDv(24,8),e.qZA()(),e.TgZ(25,"button",9)(26,"mat-icon"),e._uU(27,"email"),e.qZA(),e.TgZ(28,"span"),e.SDv(29,10),e.qZA()(),e.TgZ(30,"button",11)(31,"mat-icon"),e._uU(32,"badge"),e.qZA(),e.TgZ(33,"span"),e.SDv(34,12),e.qZA()()()(),e.TgZ(35,"div",13),e.YNc(36,Ae,2,2,"sz-ui-card",14),e.qZA()),2&o){const r=e.MAs(8);e.xp6(2),e.Oqu(e.lcZ(3,3,t.person)),e.xp6(2),e.Q6J("matMenuTriggerFor",r),e.xp6(32),e.Q6J("ngForOf",t.items)}},dependencies:[R.sg,m.rH,Z.Hw,T.VK,T.OP,T.p6,ge.R,Te.A,h.z,y.d,N.RK,g.Y],encapsulation:2}),n})()},{path:"names",component:Ee},{path:"phones",component:pe},{path:"emails",component:_e},{path:"documents",component:ie}];let Ie=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p.R],imports:[R.ez,a.u5,a.UX,m.Bz.forChild(De),X.QW,Z.Ps,T.Tx,w.c,W.V,S.Vn,oe.h,j.E,d.su,k.g,H.F,ee.n,q.p0,V.TU,Q.JX,y.t,G.p9,_.Is,F.Ng,O.lN,N.ot,x.LD,z.c,K.f,B.L]}),n})()}}]);