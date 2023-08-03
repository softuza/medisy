"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[247],{2247:(C,P,t)=>{t.r(P),t.d(P,{PersonNamesComponent:()=>R});var s=t(2296),N=t(8109),p=t(2191),a=t(9060),E=t(4110),_=t(5041),S=t(3572),O=t(9598),f=t(8721),c=t(8180),d=t(6223),u=t(7700),A=t(6981),T=t(9004),e=t(5879),M=t(5348),g=t(4622),h=t(6091),v=t(5974),I=t(7553);let D=(()=>{class i extends E.Ku{constructor(o,n,r,m){super(r),this.personService=o,this.fb=n,this.dialog=r,this.data=m,this.form=n.group({firstName:[m.personName?.firstName,[d.kI.required,d.kI.minLength(1)]],lastName:[m.personName?.lastName,[]],middleName:[m.personName?.middleName,[]],languageId:[m.personName?.languageId,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personName?this.personService.updatePersonName(this.data.personId,this.data.personName.id,this.form.value):this.personService.createPersonName(this.data.personId,this.form.value))}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(M.R),e.Y36(d.qu),e.Y36(u.so),e.Y36(u.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-names-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:9,vars:3,consts:function(){let l,o,n;return l="First name",o="Last name",n="Middle name",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",l],["formControlName","lastName","label",o],["formControlName","middleName","label",n],["formControlName","languageId"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5)(7,"medisy-form-field-language",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(6),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,u.Is,u.xY,E.su,g.Y,h.t,T.g,v.g,A.F,I.d],encapsulation:2}),i})();var L=t(6939),$=t(3144),z=t(2516);let R=(()=>{class i{constructor(o,n,r){this.dialog=o,this.personService=n,this.route=r,this.dataSource=new S.b2(O.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[S.UC.text("firstName","First name"),S.UC.text("middleName","Middle name"),S.UC.text("lastName","Last name"),p.h.createdAt(),p.h.menu([S.od.edit(m=>this.openSaveComponent(m)),S.od.delete(m=>this.openPersonNameDeleteComponent(m))])],this.get()}openSaveComponent(o){this.dialog.open(D,{data:{personId:this.person.id,personName:o}}).afterClosed().pipe((0,c.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonNameDeleteComponent(o){this.dialog.open(E.fN,{data:E.cb.delete(this.personService.deletePersonName(o.personId,o.id),o)}).afterClosed().pipe((0,c.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.personService.getPersonNames(this.person.id,this.dataSource.filterModel).pipe((0,f.sU)(this.dataSource.indicator),(0,c.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(u.uw),e.Y36(M.R),e.Y36(N.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-person-names"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let l,o;return l="Names",o="Add",[["start",""],[1,"sz-h5"],l,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,n.person)),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[N.Bz,N.rH,s.ot,s.lW,S.Vn,L.K,$.f,_.n,z.z,a.Y],encapsulation:2}),i})()},2191:(C,P,t)=>{t.d(P,{h:()=>N});var s=t(3572);class N{static menu(a){return s.UC.action("menu",a)}static code(){return s.UC.text("code","Code")}static createdAt(){return s.UC.date("createdAt","Created Date")}static updatedAt(){return s.UC.date("updatedAt","Updated Date")}static id(){return s.UC.text("id","Id")}static nameHyperlink(a,E,_){return s.UC.hyperlink("name","Name",a,E,_)}static nameText(a){return s.UC.text("name","Name",a)}static phoneType(a){return s.UC.text("phoneType","Phone Type",a)}static emailType(a){return s.UC.text("emailType","Email Type",a)}static documentType(a){return s.UC.text("documentType","Document Type",a)}static comparisonOperator(a){return s.UC.text("comparisonOperator","Comparison Operator",a)}}}}]);