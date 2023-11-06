"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(f,l,t)=>{t.r(l),t.d(l,{AnalysisModule:()=>U});var s=t(6814),n=t(2296),a=t(7700),d=t(6385),y=t(617),r=t(7988),T=t(8109),m=t(6883),$=t(758),i=t(8308),o=t(2516),P=t(157),e=t(5879),u=t(9060),h=t(2393),v=t(3562),C=t(9598),O=t(8180),A=t(6128),S=t(5807);function M(c,B){1&c&&e._UZ(0,"sz-ui-card",6),2&c&&e.Q6J("card",B.$implicit)}const D=[{path:"",component:(()=>{class c{constructor(p,z,E,L,R,N){this.dialog=p,this.route=z,this.router=E,this.mlabService=L,this.mpplService=R,this.personNamePipe=N,this.alert$=(0,e.tdS)(void 0),this.testsDataSource=new v.b2(C.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=P.Bw.more([P.NT.edit(()=>this.openEditComponent),P.NT.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const p={icon:"science",subtitle:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:i.kD.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},z={icon:"label",subtitle:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:i.kD.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,C.J.count()).subscribe(E=>{p.title=E}),this.mlabService.analyses.specimens.count(this.analysis.id,C.J.count()).subscribe(E=>{z.title=E}),this.tiles.push(p),this.tiles.push(z)}getPerson(){this.analysis.personId&&this.mpplService.persons.getById(this.analysis.personId).pipe((0,O.q)(1)).subscribe(p=>{this.tiles.splice(0,0,{icon:"person",type:i.kD.Text,subtitle:"\u0627\u0644\u0645\u0631\u064A\u0636",title:this.personNamePipe.transform(p),clickFn:()=>this.router.navigate([`mppl/persons/${p.id}`])})})}openEditComponent(){}static#e=this.\u0275fac=function(z){return new(z||c)(e.Y36(a.uw),e.Y36(T.gz),e.Y36(T.F0),e.Y36(m.t),e.Y36(h.i),e.Y36(u.Y))};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["medisy-laboratory-analysis"]],features:[e._Bn([m.t,h.i,u.Y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(z,E){1&z&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA()(),e._UZ(6,"sz-ui-menu",3),e.qZA(),e.TgZ(7,"div",4),e.YNc(8,M,1,1,"sz-ui-card",5),e.qZA()),2&z&&(e.xp6(3),e.Oqu(E.analysis.code),e.xp6(2),e.Oqu(E.analysis.note),e.xp6(1),e.Q6J("menu",E.analysisMenu),e.xp6(2),e.Q6J("ngForOf",E.tiles))},dependencies:[s.sg,o.z,A.X,S.i],encapsulation:2})}return c})()},{path:"tests",loadComponent:()=>Promise.resolve().then(t.bind(t,1947)).then(c=>c.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>t.e(380).then(t.bind(t,2380)).then(c=>c.AnalysisSpecimensComponent)}];var g=t(1947);let U=(()=>{class c{static#e=this.\u0275fac=function(z){return new(z||c)};static#t=this.\u0275mod=e.oAB({type:c});static#s=this.\u0275inj=e.cJS({providers:[m.t],imports:[s.ez,T.Bz.forChild(D),a.Is,$.E3,r.Tx,y.Ps,n.ot,d.t,o.z,i.VH,P.iz,g.AnalysisTestsComponent]})}return c})()},1947:(f,l,t)=>{t.r(l),t.d(l,{AnalysisTestsComponent:()=>P});var s=t(8109),n=t(8262),a=t(7076),d=t(6883),y=t(2516),r=t(3562),T=t(9598),m=t(8721),$=t(8180),i=t(5879),o=t(8359);let P=(()=>{class e{constructor(h,v,C){this.route=h,this.mlabService=v,this.typeI18nPipe=C,this.dataSource=new r.b2(T.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(r.zP.default([r.UC.text("test.testclass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",O=>O.test.testClass.name),r.UC.text("test.state","\u0627\u0644\u062D\u0627\u0644\u0629",O=>C.transform(O.test.state)),n.h.menu([])])),this.get()}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.filterModel).pipe((0,m.sU)(this.dataSource.indicator)).pipe((0,$.q)(1)).subscribe(h=>{this.dataSource.set(h.items,h.count)})}static#e=this.\u0275fac=function(v){return new(v||e)(i.Y36(s.gz),i.Y36(d.t),i.Y36(a.y))};static#t=this.\u0275cmp=i.Xpm({type:e,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[i._Bn([d.t,a.y]),i.jDz],decls:7,vars:4,consts:function(){let h;return h="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start",""],[1,"sz-h5"],h,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(v,C){1&v&&(i.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),i.SDv(3,2),i.qZA(),i.TgZ(4,"a",3),i._uU(5),i.qZA()()(),i.TgZ(6,"sz-ui-table",4),i.NdJ("update",function(){return C.get()}),i.qZA()),2&v&&(i.xp6(5),i.Oqu(C.analysis.code),i.xp6(1),i.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",C.dataSource))},dependencies:[s.Bz,s.rH,r.Vn,o.K,y.z],encapsulation:2})}return e})()},8262:(f,l,t)=>{t.d(l,{h:()=>d});var s=t(3562),n=t(7311);const a={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class d{static menu(r){return s.UC.action("menu",r)}static code(){return s.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return s.UC.date("createdAt",n.O.createdDate)}static updatedAt(){return s.UC.date("updatedAt",n.O.updatedDate)}static id(){return s.UC.text("id",n.O.id)}static nameHyperlink(r,T,m){return s.UC.hyperlink("name",n.O.name,r,T,m)}static nameText(r){return s.UC.text("name",n.O.name,r)}static phoneType(r){return s.UC.text("phoneType",a.phoneType,r)}static emailType(r){return s.UC.text("emailType",a.emailType,r)}static documentType(r){return s.UC.text("documentType",a.documentType,r)}static comparisonOperator(r){return s.UC.text("comparisonOperator",a.comparisonType,r)}}},7311:(f,l,t)=>{t.d(l,{O:()=>s});const s={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}},7076:(f,l,t)=>{t.d(l,{y:()=>i});var s=t(3712),n=t(1101),a=t(7263),d=function(o){return o.Validated="Validated",o.Returned="Returned",o.Forwarded="Forwarded",o.Destroyed="Destroyed",o.Collected="Collected",o.Accepted="Accepted",o.Created="Created",o}(d||{}),y=function(o){return o.Created="Created",o.Pending="Pending",o.Started="Started",o.Finished="Finished",o}(y||{}),r=t(1646),T=t(9155),m=t(6494),$=t(5879);let i=(()=>{class o{transform(e,u=!1){return e in a.v?this.transformComparisonOperator(e,u):e in y?this.transformTestState(e):e in d?this.transformSpecimenState(e):e in s.V?this.transformEmailType(e):e in n.z?this.transformPhoneType(e):e in T.m?this.transformSex(e):e in r.n?this.transformDocumentType(e):e in m.x?this.transformChannelType(e):""}transformComparisonOperator(e,u){switch(e){case a.v.Equal:return u?"==":"\u062A\u0633\u0627\u0648\u064A";case a.v.GreaterThan:return u?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case a.v.GreaterThanOrEqual:return u?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case a.v.LessThan:return u?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case a.v.LessThanOrEqual:return u?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case a.v.RangeWithBoundaries:return u?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case a.v.RangeWithoutBoundaries:return u?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case a.v.Not:return u?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(e){switch(e){case y.Created:return "\u0645\u0646\u0634\u0623\u0629";case y.Started:return "\u0628\u062F\u0623";case y.Finished:return "\u0627\u0646\u062A\u0647\u062A";case y.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(e){switch(e){case d.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case d.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case d.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case d.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case d.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case d.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(e){switch(e){case s.V.Private:return "\u062E\u0627\u0635";case s.V.Public:return "\u0639\u0627\u0645";case s.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(e){switch(e){case n.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case n.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case n.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(e){switch(e){case T.m.Female:return "\u0627\u0646\u062B\u0649";case T.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(e){switch(e){case r.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case r.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case r.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case r.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case r.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case r.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(e){switch(e){case m.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case m.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case m.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(u){return new(u||o)};static#t=this.\u0275pipe=$.Yjl({name:"typeI18n",type:o,pure:!0,standalone:!0})}return o})()},3712:(f,l,t)=>{t.d(l,{V:()=>s});var s=function(a){return a.Private="Private",a.Public="Public",a.Work="Work",a}(s||{});Object.keys(s).map(a=>s[a])},1101:(f,l,t)=>{t.d(l,{z:()=>s});var s=function(a){return a.Home="Home",a.Mobile="Mobile",a.Work="Work",a}(s||{});Object.keys(s).map(a=>s[a])},7263:(f,l,t)=>{t.d(l,{v:()=>s});var s=function(n){return n.Equal="Equal",n.GreaterThan="GreaterThan",n.GreaterThanOrEqual="GreaterThanOrEqual",n.LessThan="LessThan",n.LessThanOrEqual="LessThanOrEqual",n.Not="Not",n.RangeWithBoundaries="RangeWithBoundaries",n.RangeWithoutBoundaries="RangeWithoutBoundaries",n}(s||{})},1646:(f,l,t)=>{t.d(l,{n:()=>s});var s=function(a){return a.NationalCard="NationalCard",a.BankCard="BankCard",a.DriverLicense="DriverLicense",a.Passport="Passport",a.TravelDocument="TravelDocument",a.Other="Other",a}(s||{});Object.keys(s).map(a=>s[a])},9155:(f,l,t)=>{t.d(l,{m:()=>s});var s=function(a){return a.Male="Male",a.Female="Female",a}(s||{});Object.keys(s).map(a=>s[a])},6494:(f,l,t)=>{t.d(l,{x:()=>s});var s=function(n){return n.Email="Email",n.Sms="Sms",n.Push="Push",n}(s||{})}}]);