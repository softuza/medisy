"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(S,o,t)=>{t.r(o),t.d(o,{AnalysisModule:()=>W});var e=t(6814),m=t(2296),n=t(7700),r=t(6385),l=t(617),d=t(7988),T=t(8109),z=t(758),P=t(2595),a=t(5041),O=t(5807),s=t(5879),i=t(9060),C=t(6883),M=t(2393),u=t(2430),E=t(5703),v=t(2764),f=t(3572),A=t(9598),g=t(8180),D=t(2516),$=t(6128);function B(c,I){1&c&&s._UZ(0,"sz-ui-card",6),2&c&&s.Q6J("card",I.$implicit)}const L=[{path:"",component:(()=>{class c{constructor(h,p,y,N,F,U){this.dialog=h,this.route=p,this.router=y,this.mlabService=N,this.mpplService=F,this.personNamePipe=U,this.alert$=(0,s.tdS)(void 0),this.testsDataSource=new f.b2(A.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=E.B.more([v.N.edit(()=>this.openEditComponent),v.N.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const h={icon:"science",subtitle:"Tests",type:u.k.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},p={icon:"label",subtitle:"Specimens",type:u.k.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,A.J.count()).subscribe(y=>{h.title=y}),this.mlabService.analyses.specimens.count(this.analysis.id,A.J.count()).subscribe(y=>{p.title=y}),this.tiles.push(h),this.tiles.push(p)}getPerson(){this.analysis.personId&&this.mpplService.persons.getById(this.analysis.personId).pipe((0,g.q)(1)).subscribe(h=>{this.tiles.splice(0,0,{icon:"person",type:u.k.Text,subtitle:"Patient",title:this.personNamePipe.transform(h),clickFn:()=>this.router.navigate([`mppl/persons/${h.id}`])})})}openEditComponent(){}static#e=this.\u0275fac=function(p){return new(p||c)(s.Y36(n.uw),s.Y36(T.gz),s.Y36(T.F0),s.Y36(C.t),s.Y36(M.i),s.Y36(i.Y))};static#t=this.\u0275cmp=s.Xpm({type:c,selectors:[["medisy-laboratory-analysis"]],features:[s._Bn([C.t,M.i,i.Y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(p,y){1&p&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s._UZ(6,"sz-ui-menu",3),s.qZA(),s.TgZ(7,"div",4),s.YNc(8,B,1,1,"sz-ui-card",5),s.qZA()),2&p&&(s.xp6(3),s.Oqu(y.analysis.code),s.xp6(2),s.Oqu(y.analysis.note),s.xp6(1),s.Q6J("menu",y.analysisMenu),s.xp6(2),s.Q6J("ngForOf",y.tiles))},dependencies:[e.sg,D.z,$.X,O.i],encapsulation:2})}return c})()},{path:"tests",loadComponent:()=>Promise.resolve().then(t.bind(t,1947)).then(c=>c.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>t.e(380).then(t.bind(t,2380)).then(c=>c.AnalysisSpecimensComponent)}];var R=t(1947);let W=(()=>{class c{static#e=this.\u0275fac=function(p){return new(p||c)};static#t=this.\u0275mod=s.oAB({type:c});static#s=this.\u0275inj=s.cJS({providers:[C.t],imports:[e.ez,T.Bz.forChild(L),n.Is,z.E3,d.Tx,l.Ps,m.ot,r.t,a.n,P.V,O.i,R.AnalysisTestsComponent]})}return c})()},1947:(S,o,t)=>{t.r(o),t.d(o,{AnalysisTestsComponent:()=>i});var e=t(8109),m=t(8262),n=t(7076),r=t(6883),l=t(5041),d=t(3572),T=t(9598),z=t(8721),P=t(8180),a=t(5879),O=t(8359),s=t(2516);let i=(()=>{class C{constructor(u,E,v){this.route=u,this.mlabService=E,this.typeI18nPipe=v,this.dataSource=new d.b2(T.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[d.UC.text("test.testclass","Test Class",f=>f.test.testClass.name),d.UC.text("test.state","State",f=>v.transform(f.test.state)),m.h.menu([])],this.get()}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.filterModel).pipe((0,z.sU)(this.dataSource.indicator)).pipe((0,P.q)(1)).subscribe(u=>{this.dataSource.set(u.items,u.count)})}static#e=this.\u0275fac=function(E){return new(E||C)(a.Y36(e.gz),a.Y36(r.t),a.Y36(n.y))};static#t=this.\u0275cmp=a.Xpm({type:C,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[a._Bn([r.t,n.y]),a.jDz],decls:7,vars:4,consts:function(){let u;return u="Tests",[["start",""],[1,"sz-h5"],u,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(E,v){1&E&&(a.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),a.SDv(3,2),a.qZA(),a.TgZ(4,"a",3),a._uU(5),a.qZA()()(),a.TgZ(6,"sz-ui-table",4),a.NdJ("update",function(){return v.get()}),a.qZA()),2&E&&(a.xp6(5),a.Oqu(v.analysis.code),a.xp6(1),a.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",v.dataSource))},dependencies:[e.Bz,e.rH,d.Vn,O.K,l.n,s.z],encapsulation:2})}return C})()},7076:(S,o,t)=>{t.d(o,{y:()=>P});var e=t(3712),m=t(1101),n=t(7263),r=(()=>((r=r||{}).Validated="Validated",r.Returned="Returned",r.Forwarded="Forwarded",r.Destroyed="Destroyed",r.Collected="Collected",r.Accepted="Accepted",r.Created="Created",r))(),l=(()=>((l=l||{}).Created="Created",l.Pending="Pending",l.Started="Started",l.Finished="Finished",l))(),d=t(1646),T=t(9155),z=t(5879);let P=(()=>{class a{transform(s,i=!1){return s in n.v?this.transformComparisonOperator(s,i):s in l?this.transformTestState(s):s in r?this.transformSpecimenState(s):s in e.V?this.transformEmailType(s):s in m.z?this.transformPhoneType(s):s in T.m?this.transformSex(s):s in d.n?this.transformDocumentType(s):""}transformComparisonOperator(s,i){switch(s){case n.v.Equal:return i?"==":"Equal";case n.v.GreaterThan:return i?">":"GreaterThan";case n.v.GreaterThanOrEqual:return i?">=":"GreaterThanOrEqual";case n.v.LessThan:return i?"<":"LessThan";case n.v.LessThanOrEqual:return i?"<=":"LessThanOrEqual";case n.v.RangeWithBoundaries:return i?"<==>":"RangeWithBoundaries";case n.v.RangeWithoutBoundaries:return i?"<>":"RangeWithoutBoundaries";case n.v.Not:return i?"!=":"Not";default:return""}}transformTestState(s){switch(s){case l.Created:return "Created";case l.Started:return "Started";case l.Finished:return "Finished";case l.Pending:return "Pending";default:return""}}transformSpecimenState(s){switch(s){case r.Accepted:return "Accepted";case r.Collected:return "Collected";case r.Destroyed:return "Destroyed";case r.Forwarded:return "Forwarded";case r.Validated:return "Validated";case r.Created:return "Created";default:return""}}transformEmailType(s){switch(s){case e.V.Private:return "Private";case e.V.Public:return "Public";case e.V.Work:return "Work";default:return""}}transformPhoneType(s){switch(s){case m.z.Home:return "Home";case m.z.Mobile:return "Mobile";case m.z.Work:return "Work";default:return""}}transformSex(s){switch(s){case T.m.Female:return "Female";case T.m.Male:return "Male";default:return""}}transformDocumentType(s){switch(s){case d.n.BankCard:return "Bank Card";case d.n.DriverLicense:return "Driver License";case d.n.NationalCard:return "National Card";case d.n.Passport:return "Passport";case d.n.TravelDocument:return "Travel Document";case d.n.Other:return "Other";default:return""}}static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275pipe=z.Yjl({name:"typeI18n",type:a,pure:!0,standalone:!0})}return a})()},3712:(S,o,t)=>{t.d(o,{V:()=>e});var e=(()=>((e=e||{}).Private="Private",e.Public="Public",e.Work="Work",e))();Object.keys(e).map(n=>e[n])},1101:(S,o,t)=>{t.d(o,{z:()=>e});var e=(()=>((e=e||{}).Home="Home",e.Mobile="Mobile",e.Work="Work",e))();Object.keys(e).map(n=>e[n])},7263:(S,o,t)=>{t.d(o,{v:()=>e});var e=(()=>((e=e||{}).Equal="Equal",e.GreaterThan="GreaterThan",e.GreaterThanOrEqual="GreaterThanOrEqual",e.LessThan="LessThan",e.LessThanOrEqual="LessThanOrEqual",e.Not="Not",e.RangeWithBoundaries="RangeWithBoundaries",e.RangeWithoutBoundaries="RangeWithoutBoundaries",e))()},1646:(S,o,t)=>{t.d(o,{n:()=>e});var e=(()=>((e=e||{}).NationalCard="NationalCard",e.BankCard="BankCard",e.DriverLicense="DriverLicense",e.Passport="Passport",e.TravelDocument="TravelDocument",e.Other="Other",e))();Object.keys(e).map(n=>e[n])},9155:(S,o,t)=>{t.d(o,{m:()=>e});var e=(()=>((e=e||{}).Male="Male",e.Female="Female",e))();Object.keys(e).map(n=>e[n])}}]);