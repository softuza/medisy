"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[489],{5489:(f,l,e)=>{e.r(l),e.d(l,{SpecimensModule:()=>x});var a=e(6814),s=e(2296),t=e(7700),h=e(617),z=e(8109),i=e(7076),y=e(6883),C=e(758),S=e(2516),v=e(7239),o=e(3562),g=e(8262),n=e(9598),u=e(8721),E=e(8180),$=e(6223),M=e(8034),O=e(9157),P=e(9899),A=e(5781),r=e(5879),D=e(4622),U=e(6091);let F=(()=>{class m extends P.Z2{constructor(d,c,p){super(c),this.fb=d,this.dialog=c,this.data=p,this.form=d.group({})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#e=this.\u0275fac=function(c){return new(c||m)(r.Y36($.qu),r.Y36(t.so),r.Y36(t.WI))};static#t=this.\u0275cmp=r.Xpm({type:m,selectors:[["medisy-laboratory-specimens-filter"]],standalone:!0,features:[r._Bn([]),r.qOj,r.jDz],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(c,p){1&c&&(r._UZ(0,"sz-ui-dialog-header",0),r.TgZ(1,"mat-dialog-content"),r._UZ(2,"form",1),r.qZA(),r._UZ(3,"sz-ui-dialog-actions",2)),2&c&&(r.Q6J("header",p.header),r.xp6(2),r.Q6J("formGroup",p.form),r.xp6(1),r.Q6J("actions",p.actions))},dependencies:[$.UX,$._Y,$.JL,$.sg,t.Is,t.xY,O.lN,P.su,D.Y,U.t,A.g2,M.FA],encapsulation:2})}return m})();var N=e(8359),L=e(3144);const R=[{path:"",component:(()=>{class m{constructor(d,c,p){this.dialog=d,this.mlabService=c,this.typeI18nPipe=p,this.dataSource=new o.b2(n.J.pagedSorted("-createdAt")),this.dataSource.addRows(o.zP.default([o.UC.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",T=>T.id),o.UC.text("type","\u0627\u0644\u0646\u0645\u0637",T=>T.type.name),o.UC.text("state","\u0627\u0644\u062D\u0627\u0644\u0629",T=>p.transform(T.state)),o.UC.date("collectedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0645\u0639"),g.h.createdAt(),g.h.menu([])])),this.get()}openFilterComponent(){this.dialog.open(F,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(c=>{this.dataSource.updateFilterModel(c),this.get()})}get(){this.mlabService.specimens.get(this.dataSource.filterModel).pipe((0,u.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(d=>{this.dataSource.set(d.items,d.count)})}static#e=this.\u0275fac=function(c){return new(c||m)(r.Y36(t.uw),r.Y36(y.t),r.Y36(i.y))};static#t=this.\u0275cmp=r.Xpm({type:m,selectors:[["medisy-laboratory-specimens"]],decls:5,vars:4,consts:function(){let d;return d="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],d,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(c,p){1&c&&(r.TgZ(0,"sz-ui-header-basic")(1,"h5",0),r.SDv(2,1),r.qZA()(),r.TgZ(3,"sz-ui-table-filter",2),r.NdJ("search",function(){return p.get()})("filter",function(){return p.openFilterComponent()}),r.qZA(),r.TgZ(4,"sz-ui-table",3),r.NdJ("update",function(){return p.get()}),r.qZA()),2&c&&(r.xp6(3),r.Q6J("dataSource",p.dataSource),r.xp6(1),r.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",p.dataSource))},dependencies:[N.K,L.f,S.z],encapsulation:2})}return m})()}];let x=(()=>{class m{static#e=this.\u0275fac=function(c){return new(c||m)};static#t=this.\u0275mod=r.oAB({type:m});static#a=this.\u0275inj=r.cJS({providers:[y.t,i.y],imports:[a.ez,z.Bz.forChild(R),t.Is,h.Ps,s.ot,o.Vn,v.h,C.E3,S.z]})}return m})()},8262:(f,l,e)=>{e.d(l,{h:()=>h});var a=e(3562),s=e(7311);const t={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class h{static menu(i){return a.UC.action("menu",i)}static code(){return a.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return a.UC.date("createdAt",s.O.createdDate)}static updatedAt(){return a.UC.date("updatedAt",s.O.updatedDate)}static id(){return a.UC.text("id",s.O.id)}static nameHyperlink(i,y,C){return a.UC.hyperlink("name",s.O.name,i,y,C)}static nameText(i){return a.UC.text("name",s.O.name,i)}static phoneType(i){return a.UC.text("phoneType",t.phoneType,i)}static emailType(i){return a.UC.text("emailType",t.emailType,i)}static documentType(i){return a.UC.text("documentType",t.documentType,i)}static comparisonOperator(i){return a.UC.text("comparisonOperator",t.comparisonType,i)}}},7311:(f,l,e)=>{e.d(l,{O:()=>a});const a={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}},7076:(f,l,e)=>{e.d(l,{y:()=>v});var a=e(3712),s=e(1101),t=e(7263),h=function(o){return o.Validated="Validated",o.Returned="Returned",o.Forwarded="Forwarded",o.Destroyed="Destroyed",o.Collected="Collected",o.Accepted="Accepted",o.Created="Created",o}(h||{}),z=function(o){return o.Created="Created",o.Pending="Pending",o.Started="Started",o.Finished="Finished",o}(z||{}),i=e(1646),y=e(9155),C=e(6494),S=e(5879);let v=(()=>{class o{transform(n,u=!1){return n in t.v?this.transformComparisonOperator(n,u):n in z?this.transformTestState(n):n in h?this.transformSpecimenState(n):n in a.V?this.transformEmailType(n):n in s.z?this.transformPhoneType(n):n in y.m?this.transformSex(n):n in i.n?this.transformDocumentType(n):n in C.x?this.transformChannelType(n):""}transformComparisonOperator(n,u){switch(n){case t.v.Equal:return u?"==":"\u062A\u0633\u0627\u0648\u064A";case t.v.GreaterThan:return u?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case t.v.GreaterThanOrEqual:return u?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case t.v.LessThan:return u?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case t.v.LessThanOrEqual:return u?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case t.v.RangeWithBoundaries:return u?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case t.v.RangeWithoutBoundaries:return u?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case t.v.Not:return u?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(n){switch(n){case z.Created:return "\u0645\u0646\u0634\u0623\u0629";case z.Started:return "\u0628\u062F\u0623";case z.Finished:return "\u0627\u0646\u062A\u0647\u062A";case z.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(n){switch(n){case h.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case h.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case h.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case h.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case h.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case h.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(n){switch(n){case a.V.Private:return "\u062E\u0627\u0635";case a.V.Public:return "\u0639\u0627\u0645";case a.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(n){switch(n){case s.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case s.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case s.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(n){switch(n){case y.m.Female:return "\u0627\u0646\u062B\u0649";case y.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(n){switch(n){case i.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case i.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case i.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case i.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case i.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case i.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(n){switch(n){case C.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case C.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case C.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(u){return new(u||o)};static#t=this.\u0275pipe=S.Yjl({name:"typeI18n",type:o,pure:!0,standalone:!0})}return o})()},3712:(f,l,e)=>{e.d(l,{V:()=>a});var a=function(t){return t.Private="Private",t.Public="Public",t.Work="Work",t}(a||{});Object.keys(a).map(t=>a[t])},1101:(f,l,e)=>{e.d(l,{z:()=>a});var a=function(t){return t.Home="Home",t.Mobile="Mobile",t.Work="Work",t}(a||{});Object.keys(a).map(t=>a[t])},7263:(f,l,e)=>{e.d(l,{v:()=>a});var a=function(s){return s.Equal="Equal",s.GreaterThan="GreaterThan",s.GreaterThanOrEqual="GreaterThanOrEqual",s.LessThan="LessThan",s.LessThanOrEqual="LessThanOrEqual",s.Not="Not",s.RangeWithBoundaries="RangeWithBoundaries",s.RangeWithoutBoundaries="RangeWithoutBoundaries",s}(a||{})},1646:(f,l,e)=>{e.d(l,{n:()=>a});var a=function(t){return t.NationalCard="NationalCard",t.BankCard="BankCard",t.DriverLicense="DriverLicense",t.Passport="Passport",t.TravelDocument="TravelDocument",t.Other="Other",t}(a||{});Object.keys(a).map(t=>a[t])},9155:(f,l,e)=>{e.d(l,{m:()=>a});var a=function(t){return t.Male="Male",t.Female="Female",t}(a||{});Object.keys(a).map(t=>a[t])},6494:(f,l,e)=>{e.d(l,{x:()=>a});var a=function(s){return s.Email="Email",s.Sms="Sms",s.Push="Push",s}(a||{})}}]);