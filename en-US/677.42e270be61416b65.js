"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(z,c,e)=>{e.r(c),e.d(c,{AnalysisModule:()=>L});var a=e(6814),r=e(2296),t=e(7700),m=e(6385),E=e(617),u=e(7988),v=e(8109),P=e(758),C=e(8308),o=e(5041),i=e(157),n=e(5879),s=e(9060),l=e(6883),S=e(2393),p=e(3572),y=e(9598),O=e(8180),M=e(2516),A=e(6128),g=e(5807);function $(d,R){1&d&&n._UZ(0,"sz-ui-card",6),2&d&&n.Q6J("card",R.$implicit)}const D=[{path:"",component:(()=>{class d{constructor(h,f,T,W,I,N){this.dialog=h,this.route=f,this.router=T,this.mlabService=W,this.mpplService=I,this.personNamePipe=N,this.alert$=(0,n.tdS)(void 0),this.testsDataSource=new p.b2(y.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=i.Bw.more([i.NT.edit(()=>this.openEditComponent),i.NT.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const h={icon:"science",subtitle:"Tests",type:C.kD.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},f={icon:"label",subtitle:"Specimens",type:C.kD.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,y.J.count()).subscribe(T=>{h.title=T}),this.mlabService.analyses.specimens.count(this.analysis.id,y.J.count()).subscribe(T=>{f.title=T}),this.tiles.push(h),this.tiles.push(f)}getPerson(){this.analysis.personId&&this.mpplService.persons.getById(this.analysis.personId).pipe((0,O.q)(1)).subscribe(h=>{this.tiles.splice(0,0,{icon:"person",type:C.kD.Text,subtitle:"Patient",title:this.personNamePipe.transform(h),clickFn:()=>this.router.navigate([`mppl/persons/${h.id}`])})})}openEditComponent(){}static#e=this.\u0275fac=function(f){return new(f||d)(n.Y36(t.uw),n.Y36(v.gz),n.Y36(v.F0),n.Y36(l.t),n.Y36(S.i),n.Y36(s.Y))};static#t=this.\u0275cmp=n.Xpm({type:d,selectors:[["medisy-laboratory-analysis"]],features:[n._Bn([l.t,S.i,s.Y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(f,T){1&f&&(n.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),n._uU(3),n.qZA(),n.TgZ(4,"span",2),n._uU(5),n.qZA()(),n._UZ(6,"sz-ui-menu",3),n.qZA(),n.TgZ(7,"div",4),n.YNc(8,$,1,1,"sz-ui-card",5),n.qZA()),2&f&&(n.xp6(3),n.Oqu(T.analysis.code),n.xp6(2),n.Oqu(T.analysis.note),n.xp6(1),n.Q6J("menu",T.analysisMenu),n.xp6(2),n.Q6J("ngForOf",T.tiles))},dependencies:[a.sg,M.z,A.X,g.i],encapsulation:2})}return d})()},{path:"tests",loadComponent:()=>Promise.resolve().then(e.bind(e,1947)).then(d=>d.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>e.e(380).then(e.bind(e,2380)).then(d=>d.AnalysisSpecimensComponent)}];var B=e(1947);let L=(()=>{class d{static#e=this.\u0275fac=function(f){return new(f||d)};static#t=this.\u0275mod=n.oAB({type:d});static#s=this.\u0275inj=n.cJS({providers:[l.t],imports:[a.ez,v.Bz.forChild(D),t.Is,P.E3,u.Tx,E.Ps,r.ot,m.t,o.n,C.VH,i.iz,B.AnalysisTestsComponent]})}return d})()},1947:(z,c,e)=>{e.r(c),e.d(c,{AnalysisTestsComponent:()=>s});var a=e(8109),r=e(8262),t=e(7076),m=e(6883),E=e(5041),u=e(3572),v=e(9598),P=e(8721),C=e(8180),o=e(5879),i=e(8359),n=e(2516);let s=(()=>{class l{constructor(p,y,O){this.route=p,this.mlabService=y,this.typeI18nPipe=O,this.dataSource=new u.b2(v.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[u.UC.text("test.testclass","Test Class",M=>M.test.testClass.name),u.UC.text("test.state","State",M=>O.transform(M.test.state)),r.h.menu([])],this.get()}get(){this.mlabService.analyses.tests.get(this.analysis.id,this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator)).pipe((0,C.q)(1)).subscribe(p=>{this.dataSource.set(p.items,p.count)})}static#e=this.\u0275fac=function(y){return new(y||l)(o.Y36(a.gz),o.Y36(m.t),o.Y36(t.y))};static#t=this.\u0275cmp=o.Xpm({type:l,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[o._Bn([m.t,t.y]),o.jDz],decls:7,vars:4,consts:function(){let p;return p="Tests",[["start",""],[1,"sz-h5"],p,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(y,O){1&y&&(o.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),o.SDv(3,2),o.qZA(),o.TgZ(4,"a",3),o._uU(5),o.qZA()()(),o.TgZ(6,"sz-ui-table",4),o.NdJ("update",function(){return O.get()}),o.qZA()),2&y&&(o.xp6(5),o.Oqu(O.analysis.code),o.xp6(1),o.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",O.dataSource))},dependencies:[a.Bz,a.rH,u.Vn,i.K,E.n,n.z],encapsulation:2})}return l})()},7076:(z,c,e)=>{e.d(c,{y:()=>o});var a=e(3712),r=e(1101),t=e(7263),m=function(i){return i.Validated="Validated",i.Returned="Returned",i.Forwarded="Forwarded",i.Destroyed="Destroyed",i.Collected="Collected",i.Accepted="Accepted",i.Created="Created",i}(m||{}),E=function(i){return i.Created="Created",i.Pending="Pending",i.Started="Started",i.Finished="Finished",i}(E||{}),u=e(1646),v=e(9155),P=e(6494),C=e(5879);let o=(()=>{class i{transform(s,l=!1){return s in t.v?this.transformComparisonOperator(s,l):s in E?this.transformTestState(s):s in m?this.transformSpecimenState(s):s in a.V?this.transformEmailType(s):s in r.z?this.transformPhoneType(s):s in v.m?this.transformSex(s):s in u.n?this.transformDocumentType(s):s in P.x?this.transformChannelType(s):""}transformComparisonOperator(s,l){switch(s){case t.v.Equal:return l?"==":"Equal";case t.v.GreaterThan:return l?">":"GreaterThan";case t.v.GreaterThanOrEqual:return l?">=":"GreaterThanOrEqual";case t.v.LessThan:return l?"<":"LessThan";case t.v.LessThanOrEqual:return l?"<=":"LessThanOrEqual";case t.v.RangeWithBoundaries:return l?"<==>":"RangeWithBoundaries";case t.v.RangeWithoutBoundaries:return l?"<>":"RangeWithoutBoundaries";case t.v.Not:return l?"!=":"Not";default:return""}}transformTestState(s){switch(s){case E.Created:return "Created";case E.Started:return "Started";case E.Finished:return "Finished";case E.Pending:return "Pending";default:return""}}transformSpecimenState(s){switch(s){case m.Accepted:return "Accepted";case m.Collected:return "Collected";case m.Destroyed:return "Destroyed";case m.Forwarded:return "Forwarded";case m.Validated:return "Validated";case m.Created:return "Created";default:return""}}transformEmailType(s){switch(s){case a.V.Private:return "Private";case a.V.Public:return "Public";case a.V.Work:return "Work";default:return""}}transformPhoneType(s){switch(s){case r.z.Home:return "Home";case r.z.Mobile:return "Mobile";case r.z.Work:return "Work";default:return""}}transformSex(s){switch(s){case v.m.Female:return "Female";case v.m.Male:return "Male";default:return""}}transformDocumentType(s){switch(s){case u.n.BankCard:return "Bank Card";case u.n.DriverLicense:return "Driver License";case u.n.NationalCard:return "National Card";case u.n.Passport:return "Passport";case u.n.TravelDocument:return "Travel Document";case u.n.Other:return "Other";default:return""}}transformChannelType(s){switch(s){case P.x.Email:return "Email";case P.x.Sms:return "SMS";case P.x.Push:return "Push";default:return""}}static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275pipe=C.Yjl({name:"typeI18n",type:i,pure:!0,standalone:!0})}return i})()},3712:(z,c,e)=>{e.d(c,{V:()=>a});var a=function(t){return t.Private="Private",t.Public="Public",t.Work="Work",t}(a||{});Object.keys(a).map(t=>a[t])},1101:(z,c,e)=>{e.d(c,{z:()=>a});var a=function(t){return t.Home="Home",t.Mobile="Mobile",t.Work="Work",t}(a||{});Object.keys(a).map(t=>a[t])},7263:(z,c,e)=>{e.d(c,{v:()=>a});var a=function(r){return r.Equal="Equal",r.GreaterThan="GreaterThan",r.GreaterThanOrEqual="GreaterThanOrEqual",r.LessThan="LessThan",r.LessThanOrEqual="LessThanOrEqual",r.Not="Not",r.RangeWithBoundaries="RangeWithBoundaries",r.RangeWithoutBoundaries="RangeWithoutBoundaries",r}(a||{})},1646:(z,c,e)=>{e.d(c,{n:()=>a});var a=function(t){return t.NationalCard="NationalCard",t.BankCard="BankCard",t.DriverLicense="DriverLicense",t.Passport="Passport",t.TravelDocument="TravelDocument",t.Other="Other",t}(a||{});Object.keys(a).map(t=>a[t])},9155:(z,c,e)=>{e.d(c,{m:()=>a});var a=function(t){return t.Male="Male",t.Female="Female",t}(a||{});Object.keys(a).map(t=>a[t])},6494:(z,c,e)=>{e.d(c,{x:()=>a});var a=function(r){return r.Email="Email",r.Sms="Sms",r.Push="Push",r}(a||{})}}]);