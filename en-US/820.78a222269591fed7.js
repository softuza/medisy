"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[820],{4681:(O,u,t)=>{t.r(u),t.d(u,{LaboratoryPhonesComponent:()=>b});var a=t(2296),l=t(8109),r=t(8262),c=t(9899),S=t(5041),p=t(3572),T=t(9598),P=t(8721),E=t(8180),d=t(6223),s=t(7700),y=t(7680),e=t(5879),h=t(4622),_=t(6091);let N=(()=>{class m extends c.Z2{constructor(i,o,n){super(o),this.fb=i,this.dialog=o,this.data=n,this.form=i.group({phoneType:[n.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(o){return new(o||m)(e.Y36(d.qu),e.Y36(s.so),e.Y36(s.WI))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,c.su,h.Y,_.t,s.Is,s.xY,y.I],encapsulation:2})}return m})();var A=t(1101),M=t(5781),C=t(6883),g=t(5974),z=t(8873);let v=(()=>{class m extends c.Ku{constructor(i,o,n,f){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=f,this.form=o.group({value:[f.laboratoryPhone?.value,[d.kI.required]],description:[f.laboratoryPhone?.description,[]],phoneType:[f.laboratoryPhone?.phoneType??A.z.Home,[d.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value))}static#e=this.\u0275fac=function(o){return new(o||m)(e.Y36(C.t),e.Y36(d.qu),e.Y36(s.so),e.Y36(s.WI))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let i,o;return i="Description",o="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,n){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",n.header),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("actions",n.actions))},dependencies:[d.UX,d._Y,d.JJ,d.JL,d.sg,d.u,c.su,h.Y,_.t,s.Is,s.xY,M.g2,g.g,z.L,y.I],encapsulation:2})}return m})();var L=t(2516),R=t(8359),$=t(3144);let b=(()=>{class m{constructor(i,o,n){this.dialog=i,this.mlabService=o,this.route=n,this.dataSource=new p.b2(T.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[p.UC.text("value","Phone"),r.h.createdAt(),r.h.menu([p.od.edit(f=>this.openSaveComponent(f)),p.od.delete(f=>this.openPhoneDeleteComponent(f))])],this.get()}openSaveComponent(i){this.dialog.open(v,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:i}}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(N,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openPhoneDeleteComponent(i){this.dialog.open(c.fN,{data:c.cb.delete(this.mlabService.laboratories.phones.delete(i.laboratoryId,i.id),i)}).afterClosed().pipe((0,E.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(i=>{this.dataSource.set(i.items,i.count)})}static#e=this.\u0275fac=function(o){return new(o||m)(e.Y36(s.uw),e.Y36(C.t),e.Y36(l.gz))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let i,o;return i="Phones",o="Add",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,n){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return n.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(n.laboratory.name),e.xp6(1),e.Q6J("dataSource",n.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[l.Bz,l.rH,a.ot,a.lW,S.n,L.z,p.Vn,R.K,$.f],encapsulation:2})}return m})()},7076:(O,u,t)=>{t.d(u,{y:()=>d});var a=t(3712),l=t(1101),r=t(7263),c=function(s){return s.Validated="Validated",s.Returned="Returned",s.Forwarded="Forwarded",s.Destroyed="Destroyed",s.Collected="Collected",s.Accepted="Accepted",s.Created="Created",s}(c||{}),S=function(s){return s.Created="Created",s.Pending="Pending",s.Started="Started",s.Finished="Finished",s}(S||{}),p=t(1646),T=t(9155),P=t(6494),E=t(5879);let d=(()=>{class s{transform(e,h=!1){return e in r.v?this.transformComparisonOperator(e,h):e in S?this.transformTestState(e):e in c?this.transformSpecimenState(e):e in a.V?this.transformEmailType(e):e in l.z?this.transformPhoneType(e):e in T.m?this.transformSex(e):e in p.n?this.transformDocumentType(e):e in P.x?this.transformChannelType(e):""}transformComparisonOperator(e,h){switch(e){case r.v.Equal:return h?"==":"Equal";case r.v.GreaterThan:return h?">":"GreaterThan";case r.v.GreaterThanOrEqual:return h?">=":"GreaterThanOrEqual";case r.v.LessThan:return h?"<":"LessThan";case r.v.LessThanOrEqual:return h?"<=":"LessThanOrEqual";case r.v.RangeWithBoundaries:return h?"<==>":"RangeWithBoundaries";case r.v.RangeWithoutBoundaries:return h?"<>":"RangeWithoutBoundaries";case r.v.Not:return h?"!=":"Not";default:return""}}transformTestState(e){switch(e){case S.Created:return "Created";case S.Started:return "Started";case S.Finished:return "Finished";case S.Pending:return "Pending";default:return""}}transformSpecimenState(e){switch(e){case c.Accepted:return "Accepted";case c.Collected:return "Collected";case c.Destroyed:return "Destroyed";case c.Forwarded:return "Forwarded";case c.Validated:return "Validated";case c.Created:return "Created";default:return""}}transformEmailType(e){switch(e){case a.V.Private:return "Private";case a.V.Public:return "Public";case a.V.Work:return "Work";default:return""}}transformPhoneType(e){switch(e){case l.z.Home:return "Home";case l.z.Mobile:return "Mobile";case l.z.Work:return "Work";default:return""}}transformSex(e){switch(e){case T.m.Female:return "Female";case T.m.Male:return "Male";default:return""}}transformDocumentType(e){switch(e){case p.n.BankCard:return "Bank Card";case p.n.DriverLicense:return "Driver License";case p.n.NationalCard:return "National Card";case p.n.Passport:return "Passport";case p.n.TravelDocument:return "Travel Document";case p.n.Other:return "Other";default:return""}}transformChannelType(e){switch(e){case P.x.Email:return "Email";case P.x.Sms:return "SMS";case P.x.Push:return "Push";default:return""}}static#e=this.\u0275fac=function(h){return new(h||s)};static#t=this.\u0275pipe=E.Yjl({name:"typeI18n",type:s,pure:!0,standalone:!0})}return s})()},3712:(O,u,t)=>{t.d(u,{V:()=>a});var a=function(r){return r.Private="Private",r.Public="Public",r.Work="Work",r}(a||{});Object.keys(a).map(r=>a[r])},1101:(O,u,t)=>{t.d(u,{z:()=>a});var a=function(r){return r.Home="Home",r.Mobile="Mobile",r.Work="Work",r}(a||{});Object.keys(a).map(r=>a[r])},7263:(O,u,t)=>{t.d(u,{v:()=>a});var a=function(l){return l.Equal="Equal",l.GreaterThan="GreaterThan",l.GreaterThanOrEqual="GreaterThanOrEqual",l.LessThan="LessThan",l.LessThanOrEqual="LessThanOrEqual",l.Not="Not",l.RangeWithBoundaries="RangeWithBoundaries",l.RangeWithoutBoundaries="RangeWithoutBoundaries",l}(a||{})},1646:(O,u,t)=>{t.d(u,{n:()=>a});var a=function(r){return r.NationalCard="NationalCard",r.BankCard="BankCard",r.DriverLicense="DriverLicense",r.Passport="Passport",r.TravelDocument="TravelDocument",r.Other="Other",r}(a||{});Object.keys(a).map(r=>a[r])},9155:(O,u,t)=>{t.d(u,{m:()=>a});var a=function(r){return r.Male="Male",r.Female="Female",r}(a||{});Object.keys(a).map(r=>a[r])},6494:(O,u,t)=>{t.d(u,{x:()=>a});var a=function(l){return l.Email="Email",l.Sms="Sms",l.Push="Push",l}(a||{})}}]);