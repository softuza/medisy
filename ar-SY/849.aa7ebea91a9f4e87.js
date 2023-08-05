"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[849],{849:(D,p,a)=>{a.r(p),a.d(p,{LaboratoryEmailsComponent:()=>N});var c=a(2296),S=a(8109),f=a(2191),d=a(4110),_=a(5041),u=a(3572),L=a(9598),O=a(8721),E=a(8180),r=a(6223),l=a(7700),A=a(2406),t=a(5879),y=a(4622),h=a(6091);let T=(()=>{class i extends d.Z2{constructor(e,o,n){super(o),this.fb=e,this.dialog=o,this.data=n,this.form=e.group({emailType:[n.emailType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(l.so),t.Y36(l.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["medisy-laboratory-emails-filter"]],standalone:!0,features:[t.qOj,t.jDz],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(e,o){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-email-type",2),t.qZA()(),t._UZ(4,"sz-ui-dialog-actions",3)),2&e&&(t.Q6J("header",o.header),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("actions",o.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,d.su,y.Y,h.t,l.Is,l.xY,A.N],encapsulation:2}),i})();var C=a(3712),g=a(9004),M=a(8652),b=a(5974),v=a(8873);let I=(()=>{class i extends d.Ku{constructor(e,o,n,m){super(n),this.laboratoryService=e,this.fb=o,this.dialog=n,this.data=m,this.form=o.group({value:[m.laboratoryEmail?.value,[r.kI.required,r.kI.email]],description:[m.laboratoryEmail?.description,[]],emailType:[m.laboratoryEmail?.emailType??C.V.Public,[r.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryEmail?this.laboratoryService.updateLaboratoryEmail(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value):this.laboratoryService.createLaboratoryEmail(this.data.laboratoryId,this.form.value))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(M.v),t.Y36(r.qu),t.Y36(l.so),t.Y36(l.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["medisy-laboratory-emails-save"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:3,consts:function(){let s,e;return s="\u0627\u0644\u0648\u0635\u0641",e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",s],["formControlName","value","label",e],["formControlName","emailType"],[3,"actions"]]},template:function(e,o){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),t.qZA()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(t.Q6J("header",o.header),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(4),t.Q6J("actions",o.actions))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,d.su,y.Y,h.t,l.Is,l.xY,g.g,b.g,v.J,A.N],encapsulation:2}),i})();var R=a(2516),Y=a(3582),P=a(3144);let N=(()=>{class i{constructor(e,o,n){this.dialog=e,this.laboratoryService=o,this.route=n,this.dataSource=new u.b2(L.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[u.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),f.h.createdAt(),f.h.menu([u.od.edit(m=>{this.openSaveComponent(m)}),u.od.delete(m=>{this.openEmailDeleteComponent(m)})])],this.get()}openSaveComponent(e){this.dialog.open(I,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:e}}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(T,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openEmailDeleteComponent(e){this.dialog.open(d.fN,{data:d.cb.delete(this.laboratoryService.deleteLaboratoryEmail(e.laboratoryId,e.id),e)}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryEmails(this.laboratory.id,this.dataSource.filterModel).pipe((0,O.sU)(this.dataSource.indicator)).pipe((0,E.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.uw),t.Y36(M.v),t.Y36(S.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["medisy-laboratory-emails"]],standalone:!0,features:[t.jDz],decls:11,vars:5,consts:function(){let s,e;return s="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",e="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,o){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table-filter",4),t.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.openSaveComponent()}),t.TgZ(8,"span"),t.SDv(9,6),t.qZA()()(),t.TgZ(10,"sz-ui-table",7),t.NdJ("update",function(){return o.get()}),t.qZA()),2&e&&(t.xp6(5),t.Oqu(o.laboratory.name),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[S.Bz,S.rH,c.ot,c.lW,_.n,R.z,u.Vn,Y.K,P.f],encapsulation:2}),i})()}}]);