"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[961],{1961:(N,u,o)=>{o.r(u),o.d(u,{PersonPhonesComponent:()=>U});var a=o(8109),E=o(2191),h=o(9060),s=o(4110),c=o(5041),p=o(3572),C=o(9598),_=o(8721),m=o(8180),d=o(6223),S=o(7700),f=o(6981),M=o(1101),T=o(9004),e=o(5879),O=o(5348),v=o(4622),g=o(6091),A=o(5974),D=o(8873),I=o(408);let y=(()=>{class r extends s.Ku{constructor(t,n,l,P){super(l),this.personService=t,this.fb=n,this.dialog=l,this.data=P,this.form=n.group({value:[P?.personPhone?.value,[d.kI.required]],description:[P?.personPhone?.description,[]],phoneType:[P?.personPhone?.phoneType??M.z.Mobile,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personPhone?this.personService.updatePersonPhone(this.data.personId,this.data.personPhone.id,this.form.value):this.personService.createPersonPhone(this.data.personId,this.form.value))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(O.R),e.Y36(d.qu),e.Y36(S.so),e.Y36(S.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let i,t;return i="\u0627\u0644\u0648\u0635\u0641",t="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",t],["formControlName","phoneType"],[3,"actions"]]},template:function(t,n){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,S.Is,S.xY,s.su,v.Y,g.t,T.g,A.g,D.J,f.F,I.I],encapsulation:2}),r})();var z=o(2516),$=o(6273),L=o(4624);let U=(()=>{class r{constructor(t,n,l){this.dialog=t,this.personService=n,this.route=l,this.dataSource=new p.b2(C.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[p.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),E.h.createdAt(),E.h.menu([p.od.edit(P=>this.openSaveComponent(P)),p.od.delete(P=>this.openPersonPhoneDeleteComponent(P))])],this.get()}openSaveComponent(t){this.dialog.open(y,{data:{personId:this.person.id,personPhone:t}}).afterClosed().pipe((0,m.q)(1)).subscribe(l=>{this.dataSource.updateOrPushItem(l)})}openPersonPhoneDeleteComponent(t){this.dialog.open(s.fN,{data:s.cb.delete(this.personService.deletePersonPhone(t.personId,t.id),t)}).afterClosed().pipe((0,m.q)(1)).subscribe(l=>{this.dataSource.delete(l)})}get(){this.personService.getPersonPhones(this.person.id,this.dataSource.filterModel).pipe((0,_.sU)(this.dataSource.indicator),(0,m.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(S.uw),e.Y36(O.R),e.Y36(a.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let i,t;return i="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,n){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,n.person)),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[a.Bz,a.rH,c.n,z.z,p.Vn,$.K,L.f,h.Y],encapsulation:2}),r})()},2191:(N,u,o)=>{o.d(u,{h:()=>E});var a=o(3572);class E{static menu(s){return a.UC.action("menu",s)}static code(){return a.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return a.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return a.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return a.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(s,c,p){return a.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",s,c,p)}static nameText(s){return a.UC.text("name","\u0627\u0644\u0627\u0633\u0645",s)}static phoneType(s){return a.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",s)}static emailType(s){return a.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",s)}static documentType(s){return a.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",s)}static comparisonOperator(s){return a.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",s)}}}}]);