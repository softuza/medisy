"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(f,l,e)=>{e.r(l),e.d(l,{AnalysisModule:()=>M});var s=e(6814),r=e(2296),a=e(7700),u=e(617),m=e(8109),i=e(6883),h=e(3385),y=e(2516),v=e(157),t=e(5879),o=e(9060),$=e(2393),n=e(3562),c=e(9598),T=e(8180),E=e(8210),P=e(5807);function O(d,D){1&d&&t._UZ(0,"sz-ui-card",6),2&d&&t.Q6J("card",D.$implicit)}const A=[{path:"",component:(()=>{class d{constructor(p,z,C,g,U,B){this.dialog=p,this.route=z,this.router=C,this.mlabService=g,this.mpplService=U,this.personNamePipe=B,this.alert$=(0,t.tdS)(void 0),this.testsDataSource=new n.b2(c.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=v.Bw.more([v.NT.edit(()=>this.openEditComponent),v.NT.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const p={icon:"science",subtitle:"Tests",type:h.kD.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},z={icon:"label",subtitle:"Specimens",type:h.kD.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,c.J.count()).subscribe(C=>{p.title=C}),this.mlabService.analyses.specimens.count(this.analysis.id,c.J.count()).subscribe(C=>{z.title=C}),this.tiles.push(p),this.tiles.push(z)}getPerson(){this.analysis.personId&&this.mpplService.persons.getById(this.analysis.personId).pipe((0,T.q)(1)).subscribe(p=>{this.tiles.splice(0,0,{icon:"person",type:h.kD.Text,subtitle:"Patient",title:this.personNamePipe.transform(p),clickFn:()=>this.router.navigate([`mppl/persons/${p.id}`])})})}openEditComponent(){}static#e=this.\u0275fac=function(z){return new(z||d)(t.Y36(a.uw),t.Y36(m.gz),t.Y36(m.F0),t.Y36(i.t),t.Y36($.i),t.Y36(o.Y))};static#t=this.\u0275cmp=t.Xpm({type:d,selectors:[["medisy-laboratory-analysis"]],features:[t._Bn([i.t,$.i,o.Y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(z,C){1&z&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t._UZ(6,"sz-ui-menu",3),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,O,1,1,"sz-ui-card",5),t.qZA()),2&z&&(t.xp6(3),t.Oqu(C.analysis.code),t.xp6(2),t.Oqu(C.analysis.note),t.xp6(1),t.Q6J("menu",C.analysisMenu),t.xp6(2),t.Q6J("ngForOf",C.tiles))},dependencies:[s.sg,y.z,E.X,P.i],encapsulation:2})}return d})()},{path:"tests",loadComponent:()=>Promise.resolve().then(e.bind(e,1947)).then(d=>d.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>e.e(380).then(e.bind(e,2380)).then(d=>d.AnalysisSpecimensComponent)}];var S=e(1947);let M=(()=>{class d{static#e=this.\u0275fac=function(z){return new(z||d)};static#t=this.\u0275mod=t.oAB({type:d});static#s=this.\u0275inj=t.cJS({providers:[i.t],imports:[s.ez,m.Bz.forChild(A),a.Is,u.Ps,r.ot,y.z,h.X,v.iz,S.AnalysisTestsComponent]})}return d})()},1947:(f,l,e)=>{e.r(l),e.d(l,{AnalysisTestsComponent:()=>$});var s=e(8109),r=e(8262),a=e(7076),u=e(6883),m=e(2516),i=e(3562),h=e(9598),y=e(8721),v=e(8180),t=e(5879),o=e(8359);let $=(()=>{class n{constructor(T,E,P){this.route=T,this.mlabService=E,this.typeI18nPipe=P,this.dataSource=new i.b2(h.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(i.zP.default([i.UC.text("test.testclass","Test Class",O=>O.test.testClass.name),i.UC.text("test.state","State",O=>P.transform(O.test.state)),r.h.menu([])])),this.get()}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator)).pipe((0,v.q)(1)).subscribe(T=>{this.dataSource.set(T.items,T.count)})}static#e=this.\u0275fac=function(E){return new(E||n)(t.Y36(s.gz),t.Y36(u.t),t.Y36(a.y))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[t._Bn([u.t,a.y]),t.jDz],decls:7,vars:4,consts:function(){let T;return T="Tests",[["start",""],[1,"sz-h5"],T,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(E,P){1&E&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t.SDv(3,2),t.qZA(),t.TgZ(4,"a",3),t._uU(5),t.qZA()()(),t.TgZ(6,"sz-ui-table",4),t.NdJ("update",function(){return P.get()}),t.qZA()),2&E&&(t.xp6(5),t.Oqu(P.analysis.code),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",P.dataSource))},dependencies:[s.Bz,s.rH,i.Vn,o.K,m.z],encapsulation:2})}return n})()},8262:(f,l,e)=>{e.d(l,{h:()=>u});var s=e(3562),r=e(7311);const a={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class u{static menu(i){return s.UC.action("menu",i)}static code(){return s.UC.text("code","Code")}static createdAt(){return s.UC.date("createdAt",r.O.createdDate)}static updatedAt(){return s.UC.date("updatedAt",r.O.updatedDate)}static id(){return s.UC.text("id",r.O.id)}static nameHyperlink(i,h,y){return s.UC.hyperlink("name",r.O.name,i,h,y)}static nameText(i){return s.UC.text("name",r.O.name,i)}static phoneType(i){return s.UC.text("phoneType",a.phoneType,i)}static emailType(i){return s.UC.text("emailType",a.emailType,i)}static documentType(i){return s.UC.text("documentType",a.documentType,i)}static comparisonOperator(i){return s.UC.text("comparisonOperator",a.comparisonType,i)}}},7311:(f,l,e)=>{e.d(l,{O:()=>s});const s={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}},7076:(f,l,e)=>{e.d(l,{y:()=>t});var s=e(3712),r=e(1101),a=e(7263),u=function(o){return o.Validated="Validated",o.Returned="Returned",o.Forwarded="Forwarded",o.Destroyed="Destroyed",o.Collected="Collected",o.Accepted="Accepted",o.Created="Created",o}(u||{}),m=function(o){return o.Created="Created",o.Pending="Pending",o.Started="Started",o.Finished="Finished",o}(m||{}),i=e(1646),h=e(9155),y=e(6494),v=e(5879);let t=(()=>{class o{transform(n,c=!1){return n in a.v?this.transformComparisonOperator(n,c):n in m?this.transformTestState(n):n in u?this.transformSpecimenState(n):n in s.V?this.transformEmailType(n):n in r.z?this.transformPhoneType(n):n in h.m?this.transformSex(n):n in i.n?this.transformDocumentType(n):n in y.x?this.transformChannelType(n):""}transformComparisonOperator(n,c){switch(n){case a.v.Equal:return c?"==":"Equal";case a.v.GreaterThan:return c?">":"GreaterThan";case a.v.GreaterThanOrEqual:return c?">=":"GreaterThanOrEqual";case a.v.LessThan:return c?"<":"LessThan";case a.v.LessThanOrEqual:return c?"<=":"LessThanOrEqual";case a.v.RangeWithBoundaries:return c?"<==>":"RangeWithBoundaries";case a.v.RangeWithoutBoundaries:return c?"<>":"RangeWithoutBoundaries";case a.v.Not:return c?"!=":"Not";default:return""}}transformTestState(n){switch(n){case m.Created:return "Created";case m.Started:return "Started";case m.Finished:return "Finished";case m.Pending:return "Pending";default:return""}}transformSpecimenState(n){switch(n){case u.Accepted:return "Accepted";case u.Collected:return "Collected";case u.Destroyed:return "Destroyed";case u.Forwarded:return "Forwarded";case u.Validated:return "Validated";case u.Created:return "Created";default:return""}}transformEmailType(n){switch(n){case s.V.Private:return "Private";case s.V.Public:return "Public";case s.V.Work:return "Work";default:return""}}transformPhoneType(n){switch(n){case r.z.Home:return "Home";case r.z.Mobile:return "Mobile";case r.z.Work:return "Work";default:return""}}transformSex(n){switch(n){case h.m.Female:return "Female";case h.m.Male:return "Male";default:return""}}transformDocumentType(n){switch(n){case i.n.BankCard:return "Bank Card";case i.n.DriverLicense:return "Driver License";case i.n.NationalCard:return "National Card";case i.n.Passport:return "Passport";case i.n.TravelDocument:return "Travel Document";case i.n.Other:return "Other";default:return""}}transformChannelType(n){switch(n){case y.x.Email:return "Email";case y.x.Sms:return "SMS";case y.x.Push:return "Push";default:return""}}static#e=this.\u0275fac=function(c){return new(c||o)};static#t=this.\u0275pipe=v.Yjl({name:"typeI18n",type:o,pure:!0,standalone:!0})}return o})()},3712:(f,l,e)=>{e.d(l,{V:()=>s});var s=function(a){return a.Private="Private",a.Public="Public",a.Work="Work",a}(s||{});Object.keys(s).map(a=>s[a])},1101:(f,l,e)=>{e.d(l,{z:()=>s});var s=function(a){return a.Home="Home",a.Mobile="Mobile",a.Work="Work",a}(s||{});Object.keys(s).map(a=>s[a])},7263:(f,l,e)=>{e.d(l,{v:()=>s});var s=function(r){return r.Equal="Equal",r.GreaterThan="GreaterThan",r.GreaterThanOrEqual="GreaterThanOrEqual",r.LessThan="LessThan",r.LessThanOrEqual="LessThanOrEqual",r.Not="Not",r.RangeWithBoundaries="RangeWithBoundaries",r.RangeWithoutBoundaries="RangeWithoutBoundaries",r}(s||{})},1646:(f,l,e)=>{e.d(l,{n:()=>s});var s=function(a){return a.NationalCard="NationalCard",a.BankCard="BankCard",a.DriverLicense="DriverLicense",a.Passport="Passport",a.TravelDocument="TravelDocument",a.Other="Other",a}(s||{});Object.keys(s).map(a=>s[a])},9155:(f,l,e)=>{e.d(l,{m:()=>s});var s=function(a){return a.Male="Male",a.Female="Female",a}(s||{});Object.keys(s).map(a=>s[a])},6494:(f,l,e)=>{e.d(l,{x:()=>s});var s=function(r){return r.Email="Email",r.Sms="Sms",r.Push="Push",r}(s||{})}}]);