"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[961],{1961:(z,u,n)=>{n.r(u),n.d(u,{PersonPhonesComponent:()=>y});var h=n(2296),d=n(8109),m=n(1175),N=n(9060),S=n(3576),c=n(5041),P=n(3572),f=n(9598),M=n(8721),E=n(8180),i=n(6223),l=n(7700),C=n(7680),_=n(1101),g=n(9004),e=n(5879),O=n(2393),v=n(4622),T=n(6091),A=n(5974),I=n(8873);let D=(()=>{class s extends S.Ku{constructor(o,t,r,p){super(r),this.mpplService=o,this.fb=t,this.dialog=r,this.data=p,this.form=t.group({value:[p?.personPhone?.value,[i.kI.required]],description:[p?.personPhone?.description,[]],phoneType:[p?.personPhone?.phoneType??_.z.Mobile,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.personPhone?this.mpplService.persons.phones.update(this.data.personId,this.data.personPhone.id,this.form.value):this.mpplService.persons.phones.create(this.data.personId,this.form.value))}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(O.i),e.Y36(i.qu),e.Y36(l.so),e.Y36(l.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let a,o;return a="Description",o="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",a],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("actions",t.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,l.Is,l.xY,S.su,v.Y,T.t,g.g,A.g,I.L,C.I],encapsulation:2}),s})();var L=n(2516),Y=n(8359),R=n(3144);let y=(()=>{class s{constructor(o,t,r){this.dialog=o,this.mpplService=t,this.route=r,this.dataSource=new P.b2(f.J.paged()),this.person=this.route.snapshot.data.person,this.dataSource.columns=[P.UC.text("value","Phone"),m.h.createdAt(),m.h.menu([P.od.edit(p=>this.openSaveComponent(p)),P.od.delete(p=>this.openPersonPhoneDeleteComponent(p))])],this.get()}openSaveComponent(o){this.dialog.open(D,{data:{personId:this.person.id,personPhone:o}}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.updateOrPushItem(r)})}openPersonPhoneDeleteComponent(o){this.dialog.open(S.fN,{data:S.cb.delete(this.mpplService.persons.phones.delete(o.personId,o.id),o)}).afterClosed().pipe((0,E.q)(1)).subscribe(r=>{this.dataSource.delete(r)})}get(){this.mpplService.persons.phones.get(this.person.id,this.dataSource.filterModel).pipe((0,M.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(l.uw),e.Y36(O.i),e.Y36(d.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-people-person-phones"]],standalone:!0,features:[e.jDz],decls:12,vars:7,consts:function(){let a,o;return a="Phones",o="Add",[["start",""],[1,"sz-h5"],a,["routerLink","../",1,"tw-underline"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.ALo(6,"personName"),e.qZA()()(),e.TgZ(7,"sz-ui-table-filter",4),e.NdJ("search",function(){return t.get()}),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(9,"span"),e.SDv(10,6),e.qZA()()(),e.TgZ(11,"sz-ui-table",7),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,5,t.person)),e.xp6(2),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[d.Bz,d.rH,h.ot,h.lW,c.n,L.z,P.Vn,Y.K,R.f,N.Y],encapsulation:2}),s})()}}]);