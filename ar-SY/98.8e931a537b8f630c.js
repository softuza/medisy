"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[98],{1098:(ye,y,r)=>{r.r(y),r.d(y,{PersonModule:()=>Ye});var D=r(6814),a=r(6223),N=r(2296),x=r(5195),Q=r(5986),q=r(3680),_=r(7700),$=r(6385),O=r(9157),z=r(617),Z=r(2032),I=r(7988),H=r(1476),B=r(8525),K=r(3566),j=r(5313),u=r(8109),W=r(6981),w=r(465),k=r(6576),p=r(5348),ee=r(4407),te=r(2595),oe=r(2169),m=r(5436),ne=r(807),se=r(5041),ie=r(8766),S=r(3572),P=r(2191),d=(()=>((d=d||{}).NationalCard="NationalCard",d.BankCard="BankCard",d.DriverLicense="DriverLicense",d.Passport="Passport",d.TravelDocument="TravelDocument",d.Other="Other",d))(),e=r(5879);let v=(()=>{class n{transform(t){switch(t){case d.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case d.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case d.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case d.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case d.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case d.Other:return "\u0623\u062E\u0631\u0649";default:return""}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"documentTypeI18n",type:n,pure:!0}),n})();var M=r(9598),f=r(2119),E=r(8180),C=r(4622),h=r(6091),g=r(5974),U=r(6893),b=r(8930);let re=(()=>{class n extends U.m{constructor(t,o){super(t),this.ngControl=t,this.documentTypeI18nPipe=o,this.items=Object.keys(d).map(i=>d[i]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",this.contentFormat=i=>this.documentTypeI18nPipe.transform(i)}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.a5,10),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-document-type"]],features:[e._Bn([v]),e.qOj],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(t,o){1&t&&e._UZ(0,"sz-ui-form-field-select",0),2&t&&e.Q6J("formControl",o.control)("items",o.items)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)},dependencies:[a.JJ,a.oH,b.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})(),ae=(()=>{class n extends m.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({referenceNumber:[l.personDocument?.referenceNumber,[a.kI.maxLength(128)]],documentType:[l.personDocument?.documentType??d.DriverLicense,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personDocument?this.personService.updatePersonDocument(this.data.personId,this.data.personDocument.id,this.form.value):this.personService.createPersonDocument(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents-save"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let s;return s="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","referenceNumber","placeholder",s],["formControlName","documentType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,C.Y,h.t,g.g,re,_.xY],encapsulation:2}),n})();var L=r(9692),R=r(9288),T=r(2516),A=r(9060);let le=(()=>{class n{constructor(t,o,i,l){this.dialog=t,this.personService=o,this.route=i,this.documentTypeI18nPipe=l,this.dataSource=new S.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("referenceNumber","\u0627\u0644\u0631\u0642\u0645"),P.h.documentType(c=>this.documentTypeI18nPipe.transform(c.documentType)),P.h.createdAt(),P.h.menu([S.od.edit(c=>this.openSaveComponent(c)),S.od.delete(c=>this.openPersonDocumentDeleteComponent(c))])],this.get()}openSaveComponent(t){this.dialog.open(ae,{data:{personId:this.person.id,personDocument:t}}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonDocumentDeleteComponent(t){this.dialog.open(m.fN,{data:m.cb.delete(this.personService.deletePersonDocument(t.personId,t.id),t.id)}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonDocuments(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(u.gz),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-documents"]],features:[e._Bn([v])],decls:12,vars:7,consts:function(){let s,t;return s="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[u.rH,L.K,R.f,T.z,N.lW,A.Y],encapsulation:2}),n})();var J=r(8873),_e=r(2406);let Se=(()=>{class n extends m.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({value:[l.personEmail?.value,[a.kI.required,a.kI.email]],emailType:[l.personEmail?.emailType,[a.kI.required]],description:[l.personEmail?.description,[]]})}submit(){this.IsValid()&&this.save(this.data.personEmail?this.personService.updatePersonEmail(this.data.personId,this.data.personEmail.id,this.form.value):this.personService.createPersonEmail(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let s,t;return s="\u0627\u0644\u0648\u0635\u0641",t="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","placeholder",s],["formControlName","value","placeholder",t],["formControlName","emailType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,C.Y,h.t,g.g,J.J,_e.N,_.xY],encapsulation:2}),n})(),de=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new S.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),P.h.createdAt(),P.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonEmailDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(Se,{data:{personId:this.person.id,personEmail:t}}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonEmailDeleteComponent(t){this.dialog.open(m.fN,{data:m.cb.delete(this.personService.deletePersonEmail(t.personId,t.id),t.id)}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonEmails(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-emails"]],decls:12,vars:7,consts:function(){let s,t;return s="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[u.rH,L.K,R.f,T.z,N.lW,A.Y],encapsulation:2}),n})();var F=r(851);let me=(()=>{class n extends m.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({firstName:[l.personName?.firstName,[a.kI.required,a.kI.minLength(1)]],lastName:[l.personName?.lastName,[]],middleName:[l.personName?.middleName,[]],languageId:[l.personName?.languageId,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personName?this.personService.updatePersonName(this.data.personId,this.data.personName.id,this.form.value):this.personService.createPersonName(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names-save"]],features:[e._Bn([]),e.qOj],decls:9,vars:3,consts:function(){let s,t,o;return s="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",t="\u0627\u0644\u0643\u0646\u064A\u0629",o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",s],["formControlName","lastName","label",t],["formControlName","middleName","label",o],["formControlName","languageId"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,C.Y,h.t,g.g,F.d,_.xY],encapsulation:2}),n})(),Ee=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new S.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),S.UC.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),S.UC.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),P.h.createdAt(),P.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonNameDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(me,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonNameDeleteComponent(t){this.dialog.open(m.fN,{data:m.cb.delete(this.personService.deletePersonName(t.personId,t.id),t.id)}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonNames(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-names"]],decls:12,vars:7,consts:function(){let s,t;return s="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[u.rH,L.K,R.f,T.z,N.lW,A.Y],encapsulation:2}),n})();var ue=r(1101),pe=r(408);let ce=(()=>{class n extends m.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({value:[l?.personPhone?.value,[a.kI.required]],description:[l?.personPhone?.description,[]],phoneType:[l?.personPhone?.phoneType??ue.z.Mobile,[a.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personPhone?this.personService.updatePersonPhone(this.data.personId,this.data.personPhone.id,this.form.value):this.personService.createPersonPhone(this.data.personId,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let s,t;return s="\u0627\u0644\u0648\u0635\u0641",t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",s],["formControlName","value","label",t],["formControlName","phoneType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,C.Y,h.t,g.g,J.J,pe.I,_.xY],encapsulation:2}),n})(),Pe=(()=>{class n{constructor(t,o,i){this.dialog=t,this.personService=o,this.route=i,this.dataSource=new S.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),P.h.createdAt(),P.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPersonPhoneDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(ce,{data:{personId:this.person.id,personPhone:t}}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonPhoneDeleteComponent(t){this.dialog.open(m.fN,{data:m.cb.delete(this.personService.deletePersonPhone(t.personId,t.id),t.id)}).afterClosed().pipe((0,E.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonPhones(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.uw),e.Y36(p.R),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-phones"]],decls:12,vars:7,consts:function(){let s,t;return s="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[u.rH,L.K,R.f,T.z,N.lW,A.Y],encapsulation:2}),n})();var X=r(5738),Ne=r(2757),Y=r(8034);function Oe(n,s){if(1&n&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function Me(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,5),e.qZA())}let fe=(()=>{class n extends Ne.l{constructor(t){super(t),this.ngControl=t}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.a5,10))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sz-ui-form-field-date"]],features:[e.qOj],decls:9,vars:5,consts:function(){let s;return s="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"matDatepicker","formControl"],["picker",""],["matSuffix","",3,"for"],s]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field",0),e.YNc(1,Oe,2,1,"mat-label",1),e._UZ(2,"input",2),e.TgZ(3,"mat-hint"),e._uU(4,"MM/DD/YYYY"),e.qZA(),e._UZ(5,"mat-datepicker",null,3)(7,"mat-datepicker-toggle",4),e.YNc(8,Me,2,0,"mat-error",1),e.qZA()),2&t){const i=e.MAs(6);e.xp6(1),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matDatepicker",i)("formControl",o.control),e.xp6(5),e.Q6J("for",i),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[D.O5,a.Fj,a.JJ,a.oH,O.KE,O.hX,O.bx,O.TO,O.R9,Z.Nt,Y.Mq,Y.hl,Y.nW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var Ce=r(5741),he=r(7336),G=r(9862),ge=r(3971);let V=(()=>{class n{constructor(t){this.http=t,this.path="medisy-people/v1/nationalities"}getNationalities(t=M.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new G.LE({fromObject:(0,ge.c)(t)})})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(G.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var Te=r(7398);let Ae=(()=>{class n extends U.m{constructor(t,o){super(t),this.ngControl=t,this.nationalityService=o,this.label="\u0627\u0644\u062C\u0646\u0633\u064A\u0629",this.indicator=(0,e.tdS)(!0),this.contentFormat=i=>i.name,this.valueFormat=i=>i.id,this.items$=this.nationalityService.getNationalities().pipe((0,E.q)(1),(0,Te.U)(i=>i.items)).pipe((0,f.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.a5,10),e.Y36(V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-nationality"]],features:[e._Bn([V]),e.qOj],decls:2,vars:11,consts:[[3,"formControl","loading","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-select",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("loading",o.indicator())("items",e.lcZ(1,9,o.items$))("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[a.JJ,a.oH,b.E,D.Ov],encapsulation:2}),n})(),De=(()=>{class n extends m.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.form=o.group({sex:[l.sex,[a.kI.required]],languageId:[l.languageId,[a.kI.required]],title:[l.title,[]],ssn:[l.ssn,[]],nationalityId:[l.nationalityId,[]],birthDate:[l.birthDate,[]]})}submit(){console.log(this.form.value),this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.R),e.Y36(a.qu),e.Y36(_.so),e.Y36(_.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-person-save"]],features:[e._Bn([]),e.qOj],decls:11,vars:3,consts:function(){let s,t;return s="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",t="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","sex"],["formControlName","title"],["formControlName","ssn","label",s],["formControlName","languageId"],["formControlName","nationalityId"],["formControlName","birthDate","label",t],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"medisy-form-field-sex",3)(5,"medisy-form-field-title",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6)(8,"medisy-form-field-nationality",7)(9,"sz-ui-form-field-date",8),e.qZA()(),e._UZ(10,"sz-ui-dialog-actions",9)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("actions",o.actions))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,C.Y,h.t,g.g,fe,F.d,Ce.t,he.e,Ae,_.xY],encapsulation:2}),n})();var Ie=r(8145),ve=r(2286);function Le(n,s){if(1&n&&(e.TgZ(0,"sz-ui-card",15),e._UZ(1,"sz-ui-counter",16),e.qZA()),2&n){const t=s.$implicit;e.Q6J("card",t),e.xp6(1),e.Q6J("value",null==t?null:t.counter)}}const Re=[{path:"",component:(()=>{class n{constructor(t,o,i,l){this.dialog=t,this.analysisService=o,this.route=i,this.router=l,this.items=[{counter:0,icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",loading:!0}],this.person=this.route.snapshot.data.person,this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({personIds:[this.person.id]}).subscribe(t=>{this.items[0].counter=t.count,this.items[0].loading=!1})}openSaveComponent(){this.dialog.open(De,{data:this.person}).afterClosed().pipe((0,E.q)(1)).subscribe(o=>{o&&(this.person=o)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.uw),e.Y36(X.K),e.Y36(u.gz),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-peopel-person"]],features:[e._Bn([X.K])],decls:37,vars:5,consts:function(){let s,t,o,i,l;return s="\u062A\u0639\u062F\u064A\u0644",t="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",o="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",i="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",l="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],s,["mat-menu-item","","routerLink","names"],t,["mat-menu-item","","routerLink","phones"],o,["mat-menu-item","","routerLink","emails"],i,["mat-menu-item","","routerLink","documents"],l,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e._uU(2),e.ALo(3,"personName"),e.qZA(),e.TgZ(4,"button",1)(5,"mat-icon"),e._uU(6,"more_vert"),e.qZA()(),e.TgZ(7,"mat-menu",null,2)(9,"button",3),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(10,"mat-icon"),e._uU(11,"edit"),e.qZA(),e.TgZ(12,"span"),e.SDv(13,4),e.qZA()(),e._UZ(14,"mat-divider"),e.TgZ(15,"button",5)(16,"mat-icon"),e._uU(17,"info"),e.qZA(),e.TgZ(18,"span"),e.SDv(19,6),e.qZA()(),e.TgZ(20,"button",7)(21,"mat-icon"),e._uU(22,"phone"),e.qZA(),e.TgZ(23,"span"),e.SDv(24,8),e.qZA()(),e.TgZ(25,"button",9)(26,"mat-icon"),e._uU(27,"email"),e.qZA(),e.TgZ(28,"span"),e.SDv(29,10),e.qZA()(),e.TgZ(30,"button",11)(31,"mat-icon"),e._uU(32,"badge"),e.qZA(),e.TgZ(33,"span"),e.SDv(34,12),e.qZA()()()(),e.TgZ(35,"div",13),e.YNc(36,Le,2,2,"sz-ui-card",14),e.qZA()),2&t){const i=e.MAs(8);e.xp6(2),e.Oqu(e.lcZ(3,3,o.person)),e.xp6(2),e.Q6J("matMenuTriggerFor",i),e.xp6(32),e.Q6J("ngForOf",o.items)}},dependencies:[D.sg,u.rH,z.Hw,I.VK,I.OP,I.p6,Ie.R,ve.A,T.z,$.d,N.RK,A.Y],encapsulation:2}),n})()},{path:"names",component:Ee},{path:"phones",component:Pe},{path:"emails",component:de},{path:"documents",component:le}];let Ye=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p.R],imports:[D.ez,a.u5,a.UX,u.Bz.forChild(Re),x.QW,z.Ps,I.Tx,oe.c,te.V,S.Vn,ie.h,ee.E,m.su,ne.g,W.F,se.n,j.p0,H.TU,K.JX,$.t,Q.p9,_.Is,q.Ng,O.lN,N.ot,B.LD,Z.c,k.f,w.L]}),n})()}}]);