"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[247],{2247:(M,N,o)=>{o.r(N),o.d(N,{PersonNamesComponent:()=>z});var s=o(8109),u=o(2191),_=o(9060),a=o(4110),p=o(5041),m=o(3572),C=o(9598),O=o(8721),P=o(8180),d=o(6223),E=o(7700),f=o(6981),A=o(9004),e=o(5879),c=o(5348),T=o(4622),g=o(6091),h=o(5974),v=o(851);let I=(()=>{class i extends a.Ku{constructor(t,n,r,S){super(r),this.personService=t,this.fb=n,this.dialog=r,this.data=S,this.form=n.group({firstName:[S.personName?.firstName,[d.kI.required,d.kI.minLength(1)]],lastName:[S.personName?.lastName,[]],middleName:[S.personName?.middleName,[]],languageId:[S.personName?.languageId,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personName?this.personService.updatePersonName(this.data.personId,this.data.personName.id,this.form.value):this.personService.createPersonName(this.data.personId,this.form.value))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.R),e.Y36(d.qu),e.Y36(E.so),e.Y36(E.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:9,vars:3,consts:function(){let l,t,n;return l="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",t="\u0627\u0644\u0643\u0646\u064A\u0629",n="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",l],["formControlName","lastName","label",t],["formControlName","middleName","label",n],["formControlName","languageId"],[3,"actions"]]},template:function(t,n){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&t&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(6),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,E.Is,E.xY,a.su,T.Y,g.t,A.g,h.g,f.F,v.d],encapsulation:2}),i})();var D=o(6273),L=o(4624),$=o(2516);let z=(()=>{class i{constructor(t,n,r){this.dialog=t,this.personService=n,this.route=r,this.dataSource=new m.b2(C.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[m.UC.text("firstName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),m.UC.text("middleName","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637"),m.UC.text("lastName","\u0627\u0644\u0643\u0646\u064A\u0629"),u.h.createdAt(),u.h.menu([m.od.edit(S=>this.openSaveComponent(S)),m.od.delete(S=>this.openPersonNameDeleteComponent(S))])],this.get()}openSaveComponent(t){this.dialog.open(I,{data:{personId:this.person.id,personName:t}}).afterClosed().pipe((0,P.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonNameDeleteComponent(t){this.dialog.open(a.fN,{data:a.cb.delete(this.personService.deletePersonName(t.personId,t.id),t)}).afterClosed().pipe((0,P.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonNames(this.person.id,this.dataSource.filterModel).pipe((0,O.sU)(this.dataSource.indicator),(0,P.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(E.uw),e.Y36(c.R),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-names"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let l,t;return l="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",t="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],l,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,n){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,5,n.person)),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[s.Bz,s.rH,m.Vn,D.K,L.f,p.n,$.z,_.Y],encapsulation:2}),i})()},2191:(M,N,o)=>{o.d(N,{h:()=>u});var s=o(3572);class u{static menu(a){return s.UC.action("menu",a)}static code(){return s.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return s.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return s.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return s.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(a,p,m){return s.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",a,p,m)}static nameText(a){return s.UC.text("name","\u0627\u0644\u0627\u0633\u0645",a)}static phoneType(a){return s.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",a)}static emailType(a){return s.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",a)}static documentType(a){return s.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",a)}static comparisonOperator(a){return s.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",a)}}}}]);