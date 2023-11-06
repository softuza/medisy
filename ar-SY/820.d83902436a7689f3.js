"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[820],{4681:(O,c,t)=>{t.r(c),t.d(c,{LaboratoryPhonesComponent:()=>R});var a=t(2296),r=t(8109),o=t(8262),m=t(9899),S=t(2516),l=t(3562),P=t(9598),T=t(8721),y=t(8180),u=t(6223),i=t(7700),E=t(7680),e=t(5879),h=t(4622),C=t(6091);let A=(()=>{class p extends m.Z2{constructor(d,n,s){super(n),this.fb=d,this.dialog=n,this.data=s,this.form=d.group({phoneType:[s.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(u.qu),e.Y36(i.so),e.Y36(i.WI))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(n,s){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&n&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[u.UX,u._Y,u.JJ,u.JL,u.sg,u.u,m.su,h.Y,C.t,i.Is,i.xY,E.I],encapsulation:2})}return p})();var z=t(1101),N=t(5781),_=t(6883),M=t(5974),g=t(8873);let v=(()=>{class p extends m.Ku{constructor(d,n,s,f){super(s),this.mlabService=d,this.fb=n,this.dialog=s,this.data=f,this.form=n.group({value:[f.laboratoryPhone?.value,[u.kI.required]],description:[f.laboratoryPhone?.description,[]],phoneType:[f.laboratoryPhone?.phoneType??z.z.Home,[u.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value))}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(_.t),e.Y36(u.qu),e.Y36(i.so),e.Y36(i.WI))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[e.qOj,e.jDz],decls:7,vars:3,consts:function(){let d,n;return d="\u0627\u0644\u0648\u0635\u0641",n="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",d],["formControlName","value","label",n],["formControlName","phoneType"],[3,"actions"]]},template:function(n,s){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&n&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(4),e.Q6J("actions",s.actions))},dependencies:[u.UX,u._Y,u.JJ,u.JL,u.sg,u.u,m.su,h.Y,C.t,i.Is,i.xY,N.g2,M.g,g.L,E.I],encapsulation:2})}return p})();var $=t(8359),L=t(3144);let R=(()=>{class p{constructor(d,n,s){this.dialog=d,this.mlabService=n,this.route=s,this.dataSource=new l.b2(P.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(l.zP.default([l.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),o.h.createdAt(),o.h.menu([l.od.edit(f=>this.openSaveComponent(f)),l.od.delete(f=>this.openPhoneDeleteComponent(f))])])),this.get()}openSaveComponent(d){this.dialog.open(v,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:d}}).afterClosed().pipe((0,y.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(A,{data:this.dataSource.filterModel}).afterClosed().pipe((0,y.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}openPhoneDeleteComponent(d){this.dialog.open(m.fN,{data:m.cb.delete(this.mlabService.laboratories.phones.delete(d.laboratoryId,d.id),d)}).afterClosed().pipe((0,y.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filterModel).pipe((0,T.sU)(this.dataSource.indicator),(0,y.q)(1)).subscribe(d=>{this.dataSource.set(d.items,d.count)})}static#e=this.\u0275fac=function(n){return new(n||p)(e.Y36(i.uw),e.Y36(_.t),e.Y36(r.gz))};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[e.jDz],decls:11,vars:5,consts:function(){let d,n;return d="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",n="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],d,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return s.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(5),e.Oqu(s.laboratory.name),e.xp6(1),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[r.Bz,r.rH,a.ot,a.lW,S.z,l.Vn,$.K,L.f],encapsulation:2})}return p})()},8262:(O,c,t)=>{t.d(c,{h:()=>m});var a=t(3562),r=t(7311);const o={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class m{static menu(l){return a.UC.action("menu",l)}static code(){return a.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return a.UC.date("createdAt",r.O.createdDate)}static updatedAt(){return a.UC.date("updatedAt",r.O.updatedDate)}static id(){return a.UC.text("id",r.O.id)}static nameHyperlink(l,P,T){return a.UC.hyperlink("name",r.O.name,l,P,T)}static nameText(l){return a.UC.text("name",r.O.name,l)}static phoneType(l){return a.UC.text("phoneType",o.phoneType,l)}static emailType(l){return a.UC.text("emailType",o.emailType,l)}static documentType(l){return a.UC.text("documentType",o.documentType,l)}static comparisonOperator(l){return a.UC.text("comparisonOperator",o.comparisonType,l)}}},7311:(O,c,t)=>{t.d(c,{O:()=>a});const a={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}},7076:(O,c,t)=>{t.d(c,{y:()=>u});var a=t(3712),r=t(1101),o=t(7263),m=function(i){return i.Validated="Validated",i.Returned="Returned",i.Forwarded="Forwarded",i.Destroyed="Destroyed",i.Collected="Collected",i.Accepted="Accepted",i.Created="Created",i}(m||{}),S=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i}(S||{}),l=t(1646),P=t(9155),T=t(6494),y=t(5879);let u=(()=>{class i{transform(e,h=!1){return e in o.v?this.transformComparisonOperator(e,h):e in S?this.transformTestState(e):e in m?this.transformSpecimenState(e):e in a.V?this.transformEmailType(e):e in r.z?this.transformPhoneType(e):e in P.m?this.transformSex(e):e in l.n?this.transformDocumentType(e):e in T.x?this.transformChannelType(e):""}transformComparisonOperator(e,h){switch(e){case o.v.Equal:return h?"==":"\u062A\u0633\u0627\u0648\u064A";case o.v.GreaterThan:return h?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case o.v.GreaterThanOrEqual:return h?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case o.v.LessThan:return h?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case o.v.LessThanOrEqual:return h?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case o.v.RangeWithBoundaries:return h?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case o.v.RangeWithoutBoundaries:return h?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case o.v.Not:return h?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(e){switch(e){case S.Created:return "\u0645\u0646\u0634\u0623\u0629";case S.Started:return "\u0628\u062F\u0623";case S.Finished:return "\u0627\u0646\u062A\u0647\u062A";case S.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(e){switch(e){case m.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case m.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case m.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case m.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case m.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case m.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(e){switch(e){case a.V.Private:return "\u062E\u0627\u0635";case a.V.Public:return "\u0639\u0627\u0645";case a.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(e){switch(e){case r.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case r.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case r.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(e){switch(e){case P.m.Female:return "\u0627\u0646\u062B\u0649";case P.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(e){switch(e){case l.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case l.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case l.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case l.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case l.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case l.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(e){switch(e){case T.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case T.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case T.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(h){return new(h||i)};static#t=this.\u0275pipe=y.Yjl({name:"typeI18n",type:i,pure:!0,standalone:!0})}return i})()},3712:(O,c,t)=>{t.d(c,{V:()=>a});var a=function(o){return o.Private="Private",o.Public="Public",o.Work="Work",o}(a||{});Object.keys(a).map(o=>a[o])},1101:(O,c,t)=>{t.d(c,{z:()=>a});var a=function(o){return o.Home="Home",o.Mobile="Mobile",o.Work="Work",o}(a||{});Object.keys(a).map(o=>a[o])},7263:(O,c,t)=>{t.d(c,{v:()=>a});var a=function(r){return r.Equal="Equal",r.GreaterThan="GreaterThan",r.GreaterThanOrEqual="GreaterThanOrEqual",r.LessThan="LessThan",r.LessThanOrEqual="LessThanOrEqual",r.Not="Not",r.RangeWithBoundaries="RangeWithBoundaries",r.RangeWithoutBoundaries="RangeWithoutBoundaries",r}(a||{})},1646:(O,c,t)=>{t.d(c,{n:()=>a});var a=function(o){return o.NationalCard="NationalCard",o.BankCard="BankCard",o.DriverLicense="DriverLicense",o.Passport="Passport",o.TravelDocument="TravelDocument",o.Other="Other",o}(a||{});Object.keys(a).map(o=>a[o])},9155:(O,c,t)=>{t.d(c,{m:()=>a});var a=function(o){return o.Male="Male",o.Female="Female",o}(a||{});Object.keys(a).map(o=>a[o])},6494:(O,c,t)=>{t.d(c,{x:()=>a});var a=function(r){return r.Email="Email",r.Sms="Sms",r.Push="Push",r}(a||{})}}]);