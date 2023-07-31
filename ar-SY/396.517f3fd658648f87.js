"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[396],{4396:(C,c,t)=>{t.r(c),t.d(c,{PersonAddressesComponent:()=>z});var r=t(2296),P=t(8109),_=t(2191),n=t(9060),E=t(4110),m=t(5041),p=t(3572),M=t(9598),N=t(8721),A=t(8180),S=t(6223),u=t(7700),f=t(6981),D=t(9004),e=t(5879),O=t(5348),T=t(5974),h=t(8873),g=t(4622),v=t(6091);let R=(()=>{class d extends E.Ku{constructor(s,o,a,l){super(a),this.personService=s,this.fb=o,this.dialog=a,this.data=l,this.form=o.group({value:[l?.personAddress?.value,[S.kI.required]],description:[l?.personAddress?.description,[]],isPrimary:[l?.personAddress?.isPrimary??!1,[S.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personAddress?this.personService.updatePersonAddress(this.data.personId,this.data.personAddress.id,this.form.value):this.personService.createPersonAddress(this.data.personId,this.form.value))}}return d.\u0275fac=function(s){return new(s||d)(e.Y36(O.R),e.Y36(S.qu),e.Y36(u.so),e.Y36(u.WI))},d.\u0275cmp=e.Xpm({type:d,selectors:[["medisy-people-person-addresses-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:8,vars:3,consts:function(){let i,s,o;return i="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",s="\u0627\u0644\u0648\u0635\u0641",o="\u0623\u0633\u0627\u0633\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",i],["formControlName","description","label",s],["formControlName","isPrimary"],o,[3,"actions"]]},template:function(s,o){1&s&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),e.TgZ(5,"mat-checkbox",4),e.SDv(6,5),e.qZA()()(),e._UZ(7,"sz-ui-dialog-actions",6)),2&s&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(5),e.Q6J("actions",o.actions))},dependencies:[S.UX,S._Y,S.JJ,S.JL,S.sg,S.u,u.Is,u.xY,D.g,T.g,h.J,E.su,g.Y,v.t,f.F],encapsulation:2}),d})();var I=t(6939),$=t(3144),L=t(2516);let z=(()=>{class d{constructor(s,o,a){this.dialog=s,this.personService=o,this.route=a,this.dataSource=new p.b2(M.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[p.UC.text("value","\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),_.h.createdAt(),_.h.menu([p.od.edit(l=>this.openSaveComponent(l)),p.od.delete(l=>this.openPersonAddressDeleteComponent(l))])],this.get()}openSaveComponent(s){this.dialog.open(R,{data:{personId:this.person.id,personAddress:s}}).afterClosed().pipe((0,A.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openPersonAddressDeleteComponent(s){this.dialog.open(E.fN,{data:E.cb.delete(this.personService.deletePersonAddress(s.personId,s.id),s)}).afterClosed().pipe((0,A.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}get(){this.personService.getPersonAddresses(this.person.id,this.dataSource.filterModel).pipe((0,N.sU)(this.dataSource.indicator),(0,A.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}}return d.\u0275fac=function(s){return new(s||d)(e.Y36(u.uw),e.Y36(O.R),e.Y36(P.gz))},d.\u0275cmp=e.Xpm({type:d,selectors:[["medisy-people-person-addresses"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let i,s;return i="\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646",s="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],s,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,o){1&s&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&s&&(e.xp6(5),e.Oqu(e.lcZ(6,5,o.person)),e.xp6(2),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[P.Bz,P.rH,r.ot,r.lW,p.Vn,I.K,$.f,m.n,L.z,n.Y],encapsulation:2}),d})()},2191:(C,c,t)=>{t.d(c,{h:()=>P});var r=t(3572);class P{static menu(n){return r.UC.action("menu",n)}static code(){return r.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return r.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return r.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return r.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(n,E,m){return r.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",n,E,m)}static nameText(n){return r.UC.text("name","\u0627\u0644\u0627\u0633\u0645",n)}static phoneType(n){return r.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",n)}static emailType(n){return r.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",n)}static documentType(n){return r.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",n)}static comparisonOperator(n){return r.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",n)}}}}]);