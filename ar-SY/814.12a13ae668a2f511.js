"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[814],{1814:(_,S,t)=>{t.r(S),t.d(S,{PersonEmailsComponent:()=>$});var s=t(8109),u=t(2191),M=t(9060),a=t(4110),c=t(5041),m=t(3572),O=t(9598),f=t(8721),P=t(8180),d=t(6223),p=t(7700),N=t(6981),h=t(9004),e=t(5879),C=t(5348),T=t(5974),A=t(8873),g=t(4622),v=t(6091),I=t(2406);let L=(()=>{class i extends a.Ku{constructor(o,n,l,E){super(l),this.personService=o,this.fb=n,this.dialog=l,this.data=E,this.form=n.group({value:[E.personEmail?.value,[d.kI.required,d.kI.email]],emailType:[E.personEmail?.emailType,[d.kI.required]],description:[E.personEmail?.description,[]]})}submit(){this.IsValid()&&this.save(this.data.personEmail?this.personService.updatePersonEmail(this.data.personId,this.data.personEmail.id,this.form.value):this.personService.createPersonEmail(this.data.personId,this.form.value))}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(C.R),e.Y36(d.qu),e.Y36(p.so),e.Y36(p.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let r,o;return r="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","placeholder",r],["formControlName","value","placeholder",o],["formControlName","emailType"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,p.Is,p.xY,h.g,T.g,A.J,a.su,g.Y,v.t,N.F,I.N],encapsulation:2}),i})();var D=t(6273),z=t(4624),y=t(2516);let $=(()=>{class i{constructor(o,n,l){this.dialog=o,this.personService=n,this.route=l,this.dataSource=new m.b2(O.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[m.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),u.h.createdAt(),u.h.menu([m.od.edit(E=>this.openSaveComponent(E)),m.od.delete(E=>this.openPersonEmailDeleteComponent(E))])],this.get()}openSaveComponent(o){this.dialog.open(L,{data:{personId:this.person.id,personEmail:o}}).afterClosed().pipe((0,P.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openPersonEmailDeleteComponent(o){this.dialog.open(a.fN,{data:a.cb.delete(this.personService.deletePersonEmail(o.personId,o.id),o)}).afterClosed().pipe((0,P.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.personService.getPersonEmails(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,P.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(p.uw),e.Y36(C.R),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let r,o;return r="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,n.person)),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[s.Bz,s.rH,m.Vn,D.K,z.f,c.n,y.z,M.Y],encapsulation:2}),i})()},2191:(_,S,t)=>{t.d(S,{h:()=>u});var s=t(3572);class u{static menu(a){return s.UC.action("menu",a)}static code(){return s.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return s.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return s.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return s.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(a,c,m){return s.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",a,c,m)}static nameText(a){return s.UC.text("name","\u0627\u0644\u0627\u0633\u0645",a)}static phoneType(a){return s.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",a)}static emailType(a){return s.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",a)}static documentType(a){return s.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",a)}static comparisonOperator(a){return s.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",a)}}}}]);