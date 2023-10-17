"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[820],{4681:(O,u,t)=>{t.r(u),t.d(u,{LaboratoryPhonesComponent:()=>b});var a=t(2296),l=t(8109),r=t(8262),c=t(9899),S=t(5041),m=t(3562),T=t(9598),P=t(8721),E=t(8180),d=t(6223),s=t(7700),y=t(7680),e=t(5879),h=t(4622),_=t(6091);let N=(()=>{class f extends c.Z2{constructor(i,o,n){super(o),this.fb=i,this.dialog=o,this.data=n,this.form=i.group({phoneType:[n.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(o){return new(o||f)(e.Y36(d.qu),e.Y36(s.so),e.Y36(s.WI))};static#t=this.\u0275cmp=e.Xpm({type:f,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,c.su,h.Y,_.t,s.Is,s.xY,y.I],encapsulation:2})}return f})();var A=t(1101),M=t(5781),C=t(6883),g=t(5974),z=t(8873);let v=(()=>{class f extends c.Ku{constructor(i,o,n,p){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=p,this.form=o.group({value:[p.laboratoryPhone?.value,[d.kI.required]],description:[p.laboratoryPhone?.description,[]],phoneType:[p.laboratoryPhone?.phoneType??A.z.Home,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value))}static#e=this.\u0275fac=function(o){return new(o||f)(e.Y36(C.t),e.Y36(d.qu),e.Y36(s.so),e.Y36(s.WI))};static#t=this.\u0275cmp=e.Xpm({type:f,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let i,o;return i="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,c.su,h.Y,_.t,s.Is,s.xY,M.g2,g.g,z.L,y.I],encapsulation:2})}return f})();var L=t(2516),R=t(8359),$=t(3144);let b=(()=>{class f{constructor(i,o,n){this.dialog=i,this.mlabService=o,this.route=n,this.dataSource=new m.b2(T.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(m.zP.default([m.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),r.h.createdAt(),r.h.menu([m.od.edit(p=>this.openSaveComponent(p)),m.od.delete(p=>this.openPhoneDeleteComponent(p))])])),this.get()}openSaveComponent(i){this.dialog.open(v,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:i}}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(N,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openPhoneDeleteComponent(i){this.dialog.open(c.fN,{data:c.cb.delete(this.mlabService.laboratories.phones.delete(i.laboratoryId,i.id),i)}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(i=>{this.dataSource.set(i.items,i.count)})}static#e=this.\u0275fac=function(o){return new(o||f)(e.Y36(s.uw),e.Y36(C.t),e.Y36(l.gz))};static#t=this.\u0275cmp=e.Xpm({type:f,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let i,o;return i="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(n.laboratory.name),e.xp6(1),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[l.Bz,l.rH,a.ot,a.lW,S.n,L.z,m.Vn,R.K,$.f],encapsulation:2})}return f})()},7076:(O,u,t)=>{t.d(u,{y:()=>d});var a=t(3712),l=t(1101),r=t(7263),c=function(s){return s.Validated="Validated",s.Returned="Returned",s.Forwarded="Forwarded",s.Destroyed="Destroyed",s.Collected="Collected",s.Accepted="Accepted",s.Created="Created",s}(c||{}),S=function(s){return s.Created="Created",s.Pending="Pending",s.Started="Started",s.Finished="Finished",s}(S||{}),m=t(1646),T=t(9155),P=t(6494),E=t(5879);let d=(()=>{class s{transform(e,h=!1){return e in r.v?this.transformComparisonOperator(e,h):e in S?this.transformTestState(e):e in c?this.transformSpecimenState(e):e in a.V?this.transformEmailType(e):e in l.z?this.transformPhoneType(e):e in T.m?this.transformSex(e):e in m.n?this.transformDocumentType(e):e in P.x?this.transformChannelType(e):""}transformComparisonOperator(e,h){switch(e){case r.v.Equal:return h?"==":"\u062A\u0633\u0627\u0648\u064A";case r.v.GreaterThan:return h?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case r.v.GreaterThanOrEqual:return h?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case r.v.LessThan:return h?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case r.v.LessThanOrEqual:return h?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case r.v.RangeWithBoundaries:return h?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case r.v.RangeWithoutBoundaries:return h?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case r.v.Not:return h?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(e){switch(e){case S.Created:return "\u0645\u0646\u0634\u0623\u0629";case S.Started:return "\u0628\u062F\u0623";case S.Finished:return "\u0627\u0646\u062A\u0647\u062A";case S.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(e){switch(e){case c.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case c.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case c.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case c.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case c.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case c.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(e){switch(e){case a.V.Private:return "\u062E\u0627\u0635";case a.V.Public:return "\u0639\u0627\u0645";case a.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(e){switch(e){case l.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case l.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case l.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(e){switch(e){case T.m.Female:return "\u0627\u0646\u062B\u0649";case T.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(e){switch(e){case m.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case m.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case m.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case m.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case m.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case m.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(e){switch(e){case P.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case P.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case P.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(h){return new(h||s)};static#t=this.\u0275pipe=E.Yjl({name:"typeI18n",type:s,pure:!0,standalone:!0})}return s})()},3712:(O,u,t)=>{t.d(u,{V:()=>a});var a=function(r){return r.Private="Private",r.Public="Public",r.Work="Work",r}(a||{});Object.keys(a).map(r=>a[r])},1101:(O,u,t)=>{t.d(u,{z:()=>a});var a=function(r){return r.Home="Home",r.Mobile="Mobile",r.Work="Work",r}(a||{});Object.keys(a).map(r=>a[r])},7263:(O,u,t)=>{t.d(u,{v:()=>a});var a=function(l){return l.Equal="Equal",l.GreaterThan="GreaterThan",l.GreaterThanOrEqual="GreaterThanOrEqual",l.LessThan="LessThan",l.LessThanOrEqual="LessThanOrEqual",l.Not="Not",l.RangeWithBoundaries="RangeWithBoundaries",l.RangeWithoutBoundaries="RangeWithoutBoundaries",l}(a||{})},1646:(O,u,t)=>{t.d(u,{n:()=>a});var a=function(r){return r.NationalCard="NationalCard",r.BankCard="BankCard",r.DriverLicense="DriverLicense",r.Passport="Passport",r.TravelDocument="TravelDocument",r.Other="Other",r}(a||{});Object.keys(a).map(r=>a[r])},9155:(O,u,t)=>{t.d(u,{m:()=>a});var a=function(r){return r.Male="Male",r.Female="Female",r}(a||{});Object.keys(a).map(r=>a[r])},6494:(O,u,t)=>{t.d(u,{x:()=>a});var a=function(l){return l.Email="Email",l.Sms="Sms",l.Push="Push",l}(a||{})}}]);