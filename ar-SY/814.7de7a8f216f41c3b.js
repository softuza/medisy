"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[814],{1814:(z,P,t)=>{t.r(P),t.d(P,{PersonEmailsComponent:()=>R});var u=t(2296),m=t(8109),c=t(2191),f=t(9060),d=t(3576),O=t(5041),E=t(3572),N=t(9598),_=t(8721),p=t(8180),r=t(6223),S=t(7700),C=t(5972),h=t(9004),e=t(5879),M=t(5348),A=t(5974),g=t(8873),v=t(4622),T=t(6091);let I=(()=>{class s extends d.Ku{constructor(o,n,i,l){super(i),this.personService=o,this.fb=n,this.dialog=i,this.data=l,this.form=n.group({value:[l.personEmail?.value,[r.kI.required,r.kI.email]],emailType:[l.personEmail?.emailType,[r.kI.required]],description:[l.personEmail?.description,[]]})}submit(){this.IsValid()&&this.save(this.data.personEmail?this.personService.updatePersonEmail(this.data.personId,this.data.personEmail.id,this.form.value):this.personService.createPersonEmail(this.data.personId,this.form.value))}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(M.R),e.Y36(r.qu),e.Y36(S.so),e.Y36(S.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let a,o;return a="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","placeholder",a],["formControlName","value","placeholder",o],["formControlName","emailType"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("actions",n.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,S.Is,S.xY,h.g,A.g,g.L,d.su,v.Y,T.t,C.N],encapsulation:2}),s})();var L=t(8359),D=t(3144),Y=t(2516);let R=(()=>{class s{constructor(o,n,i){this.dialog=o,this.personService=n,this.route=i,this.dataSource=new E.b2(N.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[E.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),c.h.createdAt(),c.h.menu([E.od.edit(l=>this.openSaveComponent(l)),E.od.delete(l=>this.openPersonEmailDeleteComponent(l))])],this.get()}openSaveComponent(o){this.dialog.open(I,{data:{personId:this.person.id,personEmail:o}}).afterClosed().pipe((0,p.q)(1)).subscribe(i=>{this.dataSource.updateOrPushItem(i)})}openPersonEmailDeleteComponent(o){this.dialog.open(d.fN,{data:d.cb.delete(this.personService.deletePersonEmail(o.personId,o.id),o)}).afterClosed().pipe((0,p.q)(1)).subscribe(i=>{this.dataSource.delete(i)})}get(){this.personService.getPersonEmails(this.person.id,this.dataSource.filterModel).pipe((0,_.sU)(this.dataSource.indicator),(0,p.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(S.uw),e.Y36(M.R),e.Y36(m.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let a,o;return a="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,n.person)),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[m.Bz,m.rH,u.ot,u.lW,E.Vn,L.K,D.f,O.n,Y.z,f.Y],encapsulation:2}),s})()}}]);