"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[135],{2135:(v,O,s)=>{s.r(O),s.d(O,{PersonModule:()=>ve});var _=s(6814),a=s(6223),p=s(2296),m=s(5195),d=s(5986),N=s(3680),S=s(7700),M=s(6385),f=s(9157),E=s(617),u=s(2032),T=s(7988),x=s(1476),B=s(8525),Q=s(3566),K=s(5313),g=s(8109),W=s(6981),H=s(465),j=s(8472),A=s(5348),q=s(4407),w=s(2595),k=s(2169),C=s(3524),ee=s(807),te=s(5041),oe=s(8766),P=s(3572),I=s(2191),c=(()=>((c=c||{}).NationalCard="NationalCard",c.BankCard="BankCard",c.DriverLicense="DriverLicense",c.Passport="Passport",c.TravelDocument="TravelDocument",c.Other="Other",c))(),e=s(5879);let z=(()=>{class n{transform(t){switch(t){case c.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case c.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case c.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case c.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case c.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case c.Other:return "\u0623\u062E\u0631\u0649";default:return""}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"documentTypeI18n",type:n,pure:!0}),n})();var U=s(9598),Z=s(2119),h=s(8180),L=s(4622),R=s(6091),Y=s(5974),ne=s(6893),se=s(8930);let re=(()=>{class n extends ne.m{constructor(t,o){super(t),this.ngControl=t,this.documentTypeI18nPipe=o,this.items=Object.keys(c).map(i=>c[i]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",this.contentFormat=i=>this.documentTypeI18nPipe.transform(i)}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.a5,10),e.Y36(z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-document-type"]],features:[e._Bn([z]),e.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(t,o){1&t&&e._UZ(0,"sz-ui-form-field-select",0),2&t&&e.Q6J("formControl",o.control)("items",o.items)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)},dependencies:[a.JJ,a.oH,se.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})(),ie=(()=>{class n extends C.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({referenceNumber:[l.personDocument?.referenceNumber,[a.kI.maxLength(128)]],documentType:[l.personDocument?.documentType??c.DriverLicense,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personDocument?this.personService.updatePersonDocument(this.data.personId,this.data.personDocument.id,this.form.value):this.personService.createPersonDocument(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.R),e.Y36(a.qu),e.Y36(S.so),e.Y36(S.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents-save"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let r;return r="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","referenceNumber","placeholder",r],["formControlName","documentType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,L.Y,R.t,Y.g,re,S.xY],encapsulation:2}),n})();var b=s(9692),F=s(9288),y=s(2516),$=s(9060);let ae=(()=>{class n{constructor(t,o,i,l){this.dialog=t,this.personService=o,this.route=i,this.documentTypeI18nPipe=l,this.dataSource=new P.b2(U.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[P.UC.text("referenceNumber","\u0627\u0644\u0631\u0642\u0645"),I.h.documentType(D=>this.documentTypeI18nPipe.transform(D.documentType)),I.h.createdAt(),I.h.menu([P.od.edit(D=>this.openSaveComponent(D)),P.od.delete(D=>this.openPersonDocumentDeleteComponent(D))])],this.get()}openSaveComponent(t){this.dialog.open(ie,{data:{personId:this.person.id,personDocument:t}}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonDocumentDeleteComponent(t){this.dialog.open(C.fN,{data:C.cb.delete(this.personService.deletePersonDocument(t.personId,t.id),t)}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonDocuments(this.person.id,this.dataSource.filterModel).pipe((0,Z.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.uw),e.Y36(A.R),e.Y36(g.gz),e.Y36(z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents"]],features:[e._Bn([z])],decls:12,vars:7,consts:function(){let r,t;return r="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[g.rH,b.K,F.f,y.z,p.lW,$.Y],encapsulation:2}),n})();var X=s(8873),le=s(2406);let _e=(()=>{class n extends C.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({value:[l.personEmail?.value,[a.kI.required,a.kI.email]],emailType:[l.personEmail?.emailType,[a.kI.required]],description:[l.personEmail?.description,[]]})}submit(){this.IsValid()&&this.save(this.data.personEmail?this.personService.updatePersonEmail(this.data.personId,this.data.personEmail.id,this.form.value):this.personService.createPersonEmail(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.R),e.Y36(a.qu),e.Y36(S.so),e.Y36(S.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let r,t;return r="\u0627\u0644\u0648\u0635\u0641",t="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","placeholder",r],["formControlName","value","placeholder",t],["formControlName","emailType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,L.Y,R.t,Y.g,X.J,le.N,S.xY],encapsulation:2}),n})(),me=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new P.b2(U.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[P.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),I.h.createdAt(),I.h.menu([P.od.edit(l=>this.openSaveComponent(l)),P.od.delete(l=>this.openPersonEmailDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(_e,{data:{personId:this.person.id,personEmail:t}}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonEmailDeleteComponent(t){this.dialog.open(C.fN,{data:C.cb.delete(this.personService.deletePersonEmail(t.personId,t.id),t)}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonEmails(this.person.id,this.dataSource.filterModel).pipe((0,Z.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.uw),e.Y36(A.R),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails"]],decls:12,vars:7,consts:function(){let r,t;return r="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[g.rH,b.K,F.f,y.z,p.lW,$.Y],encapsulation:2}),n})();var G=s(851);let Se=(()=>{class n extends C.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({firstName:[l.personName?.firstName,[a.kI.required,a.kI.minLength(1)]],lastName:[l.personName?.lastName,[]],middleName:[l.personName?.middleName,[]],languageId:[l.personName?.languageId,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personName?this.personService.updatePersonName(this.data.personId,this.data.personName.id,this.form.value):this.personService.createPersonName(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.R),e.Y36(a.qu),e.Y36(S.so),e.Y36(S.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names-save"]],features:[e._Bn([]),e.qOj],decls:9,vars:3,consts:function(){let r,t,o;return r="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",t="\u0627\u0644\u0643\u0646\u064A\u0629",o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",r],["formControlName","lastName","label",t],["formControlName","middleName","label",o],["formControlName","languageId"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,L.Y,R.t,Y.g,G.d,S.xY],encapsulation:2}),n})(),de=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new P.b2(U.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[P.UC.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),P.UC.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),P.UC.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),I.h.createdAt(),I.h.menu([P.od.edit(l=>this.openSaveComponent(l)),P.od.delete(l=>this.openPersonNameDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(Se,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonNameDeleteComponent(t){this.dialog.open(C.fN,{data:C.cb.delete(this.personService.deletePersonName(t.personId,t.id),t)}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonNames(this.person.id,this.dataSource.filterModel).pipe((0,Z.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.uw),e.Y36(A.R),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names"]],decls:12,vars:7,consts:function(){let r,t;return r="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[g.rH,b.K,F.f,y.z,p.lW,$.Y],encapsulation:2}),n})();var Ee=s(1101),ue=s(408);let pe=(()=>{class n extends C.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({value:[l?.personPhone?.value,[a.kI.required]],description:[l?.personPhone?.description,[]],phoneType:[l?.personPhone?.phoneType??Ee.z.Mobile,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personPhone?this.personService.updatePersonPhone(this.data.personId,this.data.personPhone.id,this.form.value):this.personService.createPersonPhone(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.R),e.Y36(a.qu),e.Y36(S.so),e.Y36(S.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let r,t;return r="\u0627\u0644\u0648\u0635\u0641",t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",r],["formControlName","value","label",t],["formControlName","phoneType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,L.Y,R.t,Y.g,X.J,ue.I,S.xY],encapsulation:2}),n})(),Pe=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new P.b2(U.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[P.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),I.h.createdAt(),I.h.menu([P.od.edit(l=>this.openSaveComponent(l)),P.od.delete(l=>this.openPersonPhoneDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(pe,{data:{personId:this.person.id,personPhone:t}}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonPhoneDeleteComponent(t){this.dialog.open(C.fN,{data:C.cb.delete(this.personService.deletePersonPhone(t.personId,t.id),t)}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonPhones(this.person.id,this.dataSource.filterModel).pipe((0,Z.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.uw),e.Y36(A.R),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones"]],decls:12,vars:7,consts:function(){let r,t;return r="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[g.rH,b.K,F.f,y.z,p.lW,$.Y],encapsulation:2}),n})();var V=s(5738),ce=s(2757),J=s(8034);function Me(n,r){if(1&n&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function Oe(n,r){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,5),e.qZA())}let Ne=(()=>{class n extends ce.l{constructor(t){super(t),this.ngControl=t}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.a5,10))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sz-ui-form-field-date"]],features:[e.qOj],decls:9,vars:5,consts:function(){let r;return r="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"matDatepicker","formControl"],["picker",""],["matSuffix","",3,"for"],r]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field",0),e.YNc(1,Me,2,1,"mat-label",1),e._UZ(2,"input",2),e.TgZ(3,"mat-hint"),e._uU(4,"MM/DD/YYYY"),e.qZA(),e._UZ(5,"mat-datepicker",null,3)(7,"mat-datepicker-toggle",4),e.YNc(8,Oe,2,0,"mat-error",1),e.qZA()),2&t){const i=e.MAs(6);e.xp6(1),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matDatepicker",i)("formControl",o.control),e.xp6(5),e.Q6J("for",i),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[_.O5,a.Fj,a.JJ,a.oH,f.KE,f.hX,f.bx,f.TO,f.R9,u.Nt,J.Mq,J.hl,J.nW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var fe=s(5741),Ce=s(7336),he=s(2160);let Te=(()=>{class n extends C.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({sex:[l.sex,[a.kI.required]],languageId:[l.languageId,[a.kI.required]],title:[l.title,[]],ssn:[l.ssn,[]],nationalityId:[l.nationalityId,[]],birthDate:[l.birthDate,[]]})}submit(){console.log(this.form.value),this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.R),e.Y36(a.qu),e.Y36(S.so),e.Y36(S.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-save"]],features:[e._Bn([]),e.qOj],decls:11,vars:3,consts:function(){let r,t;return r="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",t="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","sex"],["formControlName","title"],["formControlName","ssn","label",r],["formControlName","languageId"],["formControlName","nationalityId"],["formControlName","birthDate","label",t],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"medisy-form-field-sex",3)(5,"medisy-form-field-title",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6)(8,"medisy-form-field-nationality",7)(9,"sz-ui-form-field-date",8),e.qZA()(),e._UZ(10,"sz-ui-dialog-actions",9)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,L.Y,R.t,Y.g,Ne,G.d,fe.t,Ce.e,he.V,S.xY],encapsulation:2}),n})();var ge=s(8145),Ae=s(2286);function De(n,r){if(1&n&&(e.TgZ(0,"sz-ui-card",15),e._UZ(1,"sz-ui-counter",16),e.qZA()),2&n){const t=r.$implicit;e.Q6J("card",t),e.xp6(1),e.Q6J("value",null==t?null:t.counter)}}const Ie=[{path:"",component:(()=>{class n{constructor(t,o,i,l){this.dialog=t,this.analysisService=o,this.route=i,this.router=l,this.items=[{counter:0,icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",loading:!0}],this.person=this.route.snapshot.data.person,this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({personIds:[this.person.id]}).subscribe(t=>{this.items[0].counter=t.count,this.items[0].loading=!1})}openSaveComponent(){this.dialog.open(Te,{data:this.person}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{o&&(this.person=o)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.uw),e.Y36(V.K),e.Y36(g.gz),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-peopel-person"]],features:[e._Bn([V.K])],decls:37,vars:5,consts:function(){let r,t,o,i,l;return r="\u062A\u0639\u062F\u064A\u0644",t="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",o="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",i="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",l="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],r,["mat-menu-item","","routerLink","names"],t,["mat-menu-item","","routerLink","phones"],o,["mat-menu-item","","routerLink","emails"],i,["mat-menu-item","","routerLink","documents"],l,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e._uU(2),e.ALo(3,"personName"),e.qZA(),e.TgZ(4,"button",1)(5,"mat-icon"),e._uU(6,"more_vert"),e.qZA()(),e.TgZ(7,"mat-menu",null,2)(9,"button",3),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(10,"mat-icon"),e._uU(11,"edit"),e.qZA(),e.TgZ(12,"span"),e.SDv(13,4),e.qZA()(),e._UZ(14,"mat-divider"),e.TgZ(15,"button",5)(16,"mat-icon"),e._uU(17,"info"),e.qZA(),e.TgZ(18,"span"),e.SDv(19,6),e.qZA()(),e.TgZ(20,"button",7)(21,"mat-icon"),e._uU(22,"phone"),e.qZA(),e.TgZ(23,"span"),e.SDv(24,8),e.qZA()(),e.TgZ(25,"button",9)(26,"mat-icon"),e._uU(27,"email"),e.qZA(),e.TgZ(28,"span"),e.SDv(29,10),e.qZA()(),e.TgZ(30,"button",11)(31,"mat-icon"),e._uU(32,"badge"),e.qZA(),e.TgZ(33,"span"),e.SDv(34,12),e.qZA()()()(),e.TgZ(35,"div",13),e.YNc(36,De,2,2,"sz-ui-card",14),e.qZA()),2&t){const i=e.MAs(8);e.xp6(2),e.Oqu(e.lcZ(3,3,o.person)),e.xp6(2),e.Q6J("matMenuTriggerFor",i),e.xp6(32),e.Q6J("ngForOf",o.items)}},dependencies:[_.sg,g.rH,E.Hw,T.VK,T.OP,T.p6,ge.R,Ae.A,y.z,M.d,p.RK,$.Y],encapsulation:2}),n})()},{path:"names",component:de},{path:"phones",component:Pe},{path:"emails",component:me},{path:"documents",component:ae}];let ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[A.R],imports:[_.ez,a.u5,a.UX,g.Bz.forChild(Ie),m.QW,E.Ps,T.Tx,k.c,w.V,P.Vn,oe.h,q.E,C.su,ee.g,W.F,te.n,K.p0,x.TU,Q.JX,M.t,d.p9,S.Is,N.Ng,f.lN,p.ot,B.LD,u.c,j.f,H.L]}),n})()},5741:(v,O,s)=>{s.d(O,{t:()=>S});var _=s(5746),a=s(9155),p=s(6893),m=s(5879),d=s(6223),N=s(8930);let S=(()=>{class M extends p.m{constructor(E,u){super(E),this.ngControl=E,this.sexI18nPipe=u,this.items=Object.keys(a.m).map(T=>a.m[T]),this.label="\u0627\u0644\u062C\u0646\u0633",this.contentFormat=T=>this.sexI18nPipe.transform(T)}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return M.\u0275fac=function(E){return new(E||M)(m.Y36(d.a5,10),m.Y36(_.l))},M.\u0275cmp=m.Xpm({type:M,selectors:[["medisy-form-field-sex"]],features:[m._Bn([_.l]),m.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(E,u){1&E&&m._UZ(0,"sz-ui-form-field-select",0),2&E&&m.Q6J("formControl",u.control)("items",u.items)("label",u.label)("placeholder",u.placeholder)("emptyOption",u.emptyOption)("multiple",u.multiple)("contentFn",u.contentFormat)},dependencies:[d.JJ,d.oH,N.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),M})()},7336:(v,O,s)=>{s.d(O,{e:()=>S});var _=s(1886),a=s(6439),p=s(6893),m=s(5879),d=s(6223),N=s(8930);let S=(()=>{class M extends p.m{constructor(E,u){super(E),this.ngControl=E,this.titleI18nPipe=u,this.items=Object.keys(a.D).map(T=>a.D[T]),this.label="\u0627\u0644\u0644\u0642\u0628",this.contentFormat=T=>this.titleI18nPipe.transform(T)}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return M.\u0275fac=function(E){return new(E||M)(m.Y36(d.a5,10),m.Y36(_.r))},M.\u0275cmp=m.Xpm({type:M,selectors:[["medisy-form-field-title"]],features:[m._Bn([_.r]),m.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(E,u){1&E&&m._UZ(0,"sz-ui-form-field-select",0),2&E&&m.Q6J("formControl",u.control)("items",u.items)("label",u.label)("placeholder",u.placeholder)("emptyOption",u.emptyOption)("multiple",u.multiple)("contentFn",u.contentFormat)},dependencies:[d.JJ,d.oH,N.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),M})()},9060:(v,O,s)=>{s.d(O,{Y:()=>a});var _=s(5879);let a=(()=>{class p{transform(d,N=!1){if(!d.names||0===d.names.length)return`${d.id}`;const S=d.names[0].firstName,M=d.names[0].lastName,f=M?`${S} ${M}`:`${S}`;return N&&d.birthDate?""+(+new Date-+d.birthDate):f}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275pipe=_.Yjl({name:"personName",type:p,pure:!0}),p})()},5746:(v,O,s)=>{s.d(O,{l:()=>p});var _=s(9155),a=s(5879);let p=(()=>{class m{transform(N){switch(N){case _.m.Female:return "\u0627\u0646\u062B\u0649";case _.m.Male:return "\u0630\u0643\u0631";default:return""}}}return m.\u0275fac=function(N){return new(N||m)},m.\u0275pipe=a.Yjl({name:"sexI18n",type:m,pure:!0}),m})()},1886:(v,O,s)=>{s.d(O,{r:()=>p});var _=s(6439),a=s(5879);let p=(()=>{class m{transform(N){switch(N){case _.D.Miss:return "\u0641\u062A\u0627\u0629";case _.D.Mr:return "\u0633\u064A\u062F";case _.D.Mrs:return "\u0633\u064A\u062F\u0629";case _.D.Ms:return "\u0633\u064A\u062F\u0629";default:return""}}}return m.\u0275fac=function(N){return new(N||m)},m.\u0275pipe=a.Yjl({name:"titleI18n",type:m,pure:!0}),m})()},9155:(v,O,s)=>{s.d(O,{m:()=>_});var _=(()=>((_=_||{}).Male="Male",_.Female="Female",_))()},6439:(v,O,s)=>{s.d(O,{D:()=>_});var _=(()=>((_=_||{}).Mr="Mr",_.Mrs="Mrs",_.Miss="Miss",_.Ms="Ms",_))()}}]);