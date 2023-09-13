"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[767],{3767:(Z,h,n)=>{n.r(h),n.d(h,{PersonDocumentsComponent:()=>b});var C=n(2296),S=n(8109),f=n(2191),u=n(173),N=n(9060),c=n(3576),D=n(5041),m=n(3572),M=n(9598),T=n(8721),E=n(8180),i=n(6223),l=n(7700),P=n(1646),g=n(6893),v=n(8930),e=n(5879);let y=(()=>{class s extends g.m{constructor(t,o){super(t),this.ngControl=t,this.peopleI18nPipe=o,this.items=Object.keys(P.n).map(r=>P.n[r]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",this.contentFormat=r=>this.peopleI18nPipe.transform(r)}ngOnInit(){this.control=this.ngControl.control}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(i.a5,10),e.Y36(u.x))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-form-field-document-type"]],standalone:!0,features:[e._Bn([u.x]),e.qOj,e.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(t,o){1&t&&e._UZ(0,"sz-ui-form-field-select",0),2&t&&e.Q6J("formControl",o.control)("items",o.items)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)},dependencies:[i.UX,i.JJ,i.oH,v.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),s})();var I=n(9004),O=n(5348),A=n(5974),_=n(4622),z=n(6091);let Y=(()=>{class s extends c.Ku{constructor(t,o,r,p){super(r),this.personService=t,this.fb=o,this.dialog=r,this.data=p,this.form=o.group({referenceNumber:[p.personDocument?.referenceNumber,[i.kI.maxLength(128)]],documentType:[p.personDocument?.documentType??P.n.DriverLicense,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personDocument?this.personService.documents.update(this.data.personId,this.data.personDocument.id,this.form.value):this.personService.documents.create(this.data.personId,this.form.value))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(O.R),e.Y36(i.qu),e.Y36(l.so),e.Y36(l.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-documents-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:3,consts:function(){let a;return a="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","referenceNumber","placeholder",a],["formControlName","documentType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-document-type",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,l.Is,l.xY,I.g,A.g,c.su,_.Y,z.t,y],encapsulation:2}),s})();var U=n(8359),L=n(3144),R=n(2516);let b=(()=>{class s{constructor(t,o,r,p){this.dialog=t,this.personService=o,this.route=r,this.peopleI18nPipe=p,this.dataSource=new m.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[m.UC.text("referenceNumber","\u0627\u0644\u0631\u0642\u0645"),f.h.documentType(d=>this.peopleI18nPipe.transform(d.documentType)),f.h.createdAt(),f.h.menu([m.od.edit(d=>this.openSaveComponent(d)),m.od.delete(d=>this.openPersonDocumentDeleteComponent(d))])],this.get()}openSaveComponent(t){this.dialog.open(Y,{data:{personId:this.person.id,personDocument:t}}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonDocumentDeleteComponent(t){this.dialog.open(c.fN,{data:c.cb.delete(this.personService.documents.delete(t.personId,t.id),t)}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.documents.get(this.person.id,this.dataSource.filterModel).pipe((0,T.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l.uw),e.Y36(O.R),e.Y36(S.gz),e.Y36(u.x))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-documents"]],standalone:!0,features:[e._Bn([u.x]),e.jDz],decls:12,vars:7,consts:function(){let a,t;return a="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[S.Bz,S.rH,C.ot,C.lW,m.Vn,U.K,L.f,D.n,R.z,N.Y],encapsulation:2}),s})()}}]);