"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(v,l,t)=>{t.r(l),t.d(l,{AnalysisModule:()=>W});var e=t(6814),u=t(2296),r=t(7700),o=t(6385),c=t(617),m=t(7988),h=t(8109),C=t(5738),P=t(758),a=t(2595),O=t(5041),n=t(5807),s=t(5879),T=t(9060),E=t(5348),p=t(2430),S=t(5703),f=t(2764),A=t(3572),g=t(9598),D=t(8180),$=t(2516),B=t(6128);function L(i,z){1&i&&s._UZ(0,"sz-ui-card",6),2&i&&s.Q6J("card",z.$implicit)}const R=[{path:"",component:(()=>{class i{constructor(d,y,M,N,F,U){this.dialog=d,this.route=y,this.router=M,this.analysisService=N,this.personService=F,this.personNamePipe=U,this.alert$=(0,s.tdS)(void 0),this.testsDataSource=new A.b2(g.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=S.B.more([f.N.edit(()=>this.openEditComponent),f.N.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const d={icon:"science",subtitle:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:p.k.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},y={icon:"label",subtitle:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:p.k.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.analysisService.tests.count(this.analysis.id,g.J.count()).subscribe(M=>{d.title=M}),this.analysisService.specimens.count(this.analysis.id,g.J.count()).subscribe(M=>{y.title=M}),this.tiles.push(d),this.tiles.push(y)}getPerson(){this.analysis.personId&&this.personService.getById(this.analysis.personId).pipe((0,D.q)(1)).subscribe(d=>{this.tiles.splice(0,0,{icon:"person",type:p.k.Text,subtitle:"\u0627\u0644\u0645\u0631\u064A\u0636",title:this.personNamePipe.transform(d),clickFn:()=>this.router.navigate([`mppl/persons/${d.id}`])})})}openEditComponent(){}}return i.\u0275fac=function(d){return new(d||i)(s.Y36(r.uw),s.Y36(h.gz),s.Y36(h.F0),s.Y36(C.K),s.Y36(E.R),s.Y36(T.Y))},i.\u0275cmp=s.Xpm({type:i,selectors:[["medisy-laboratory-analysis"]],features:[s._Bn([C.K,E.R,T.Y])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(d,y){1&d&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s._UZ(6,"sz-ui-menu",3),s.qZA(),s.TgZ(7,"div",4),s.YNc(8,L,1,1,"sz-ui-card",5),s.qZA()),2&d&&(s.xp6(3),s.Oqu(y.analysis.code),s.xp6(2),s.Oqu(y.analysis.note),s.xp6(1),s.Q6J("menu",y.analysisMenu),s.xp6(2),s.Q6J("ngForOf",y.tiles))},dependencies:[e.sg,$.z,B.X,n.i],encapsulation:2}),i})()},{path:"tests",loadComponent:()=>Promise.resolve().then(t.bind(t,1947)).then(i=>i.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>t.e(380).then(t.bind(t,2380)).then(i=>i.AnalysisSpecimensComponent)}];var I=t(1947);let W=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({providers:[C.K],imports:[e.ez,h.Bz.forChild(R),r.Is,P.E3,m.Tx,c.Ps,u.ot,o.t,O.n,a.V,n.i,I.AnalysisTestsComponent]}),i})()},1947:(v,l,t)=>{t.r(l),t.d(l,{AnalysisTestsComponent:()=>s});var e=t(8109),u=t(1175),r=t(7076),o=t(5738),c=t(5041),m=t(3572),h=t(9598),C=t(8721),P=t(8180),a=t(5879),O=t(8359),n=t(2516);let s=(()=>{class T{constructor(p,S,f){this.route=p,this.analysisService=S,this.typeI18nPipe=f,this.dataSource=new m.b2(h.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[m.UC.text("test.testclass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",A=>A.test.testClass.name),m.UC.text("test.state","\u0627\u0644\u062D\u0627\u0644\u0629",A=>f.transform(A.test.state)),u.h.menu([])],this.get()}get(){this.analysisService.tests.get(this.analysis.id,this.dataSource.filterModel).pipe((0,C.sU)(this.dataSource.indicator)).pipe((0,P.q)(1)).subscribe(p=>{this.dataSource.set(p.items,p.count)})}}return T.\u0275fac=function(p){return new(p||T)(a.Y36(e.gz),a.Y36(o.K),a.Y36(r.y))},T.\u0275cmp=a.Xpm({type:T,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[a._Bn([o.K,r.y]),a.jDz],decls:7,vars:4,consts:function(){let E;return E="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start",""],[1,"sz-h5"],E,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(p,S){1&p&&(a.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),a.SDv(3,2),a.qZA(),a.TgZ(4,"a",3),a._uU(5),a.qZA()()(),a.TgZ(6,"sz-ui-table",4),a.NdJ("update",function(){return S.get()}),a.qZA()),2&p&&(a.xp6(5),a.Oqu(S.analysis.code),a.xp6(1),a.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",S.dataSource))},dependencies:[e.Bz,e.rH,m.Vn,O.K,c.n,n.z],encapsulation:2}),T})()},7076:(v,l,t)=>{t.d(l,{y:()=>P});var e=t(3712),u=t(1101),r=t(7263),o=(()=>((o=o||{}).Validated="Validated",o.Returned="Returned",o.Forwarded="Forwarded",o.Destroyed="Destroyed",o.Collected="Collected",o.Accepted="Accepted",o.Created="Created",o))(),c=(()=>((c=c||{}).Created="Created",c.Pending="Pending",c.Started="Started",c.Finished="Finished",c))(),m=t(1646),h=t(9155),C=t(5879);let P=(()=>{class a{transform(n,s=!1){return n in r.v?this.transformComparisonOperator(n,s):n in c?this.transformTestState(n):n in o?this.transformSpecimenState(n):n in e.V?this.transformEmailType(n):n in u.z?this.transformPhoneType(n):n in h.m?this.transformSex(n):n in m.n?this.transformDocumentType(n):""}transformComparisonOperator(n,s){switch(n){case r.v.Equal:return s?"==":"\u062A\u0633\u0627\u0648\u064A";case r.v.GreaterThan:return s?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case r.v.GreaterThanOrEqual:return s?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case r.v.LessThan:return s?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case r.v.LessThanOrEqual:return s?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case r.v.RangeWithBoundaries:return s?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case r.v.RangeWithoutBoundaries:return s?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case r.v.Not:return s?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(n){switch(n){case c.Created:return "\u0645\u0646\u0634\u0623\u0629";case c.Started:return "\u0628\u062F\u0623";case c.Finished:return "\u0627\u0646\u062A\u0647\u062A";case c.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(n){switch(n){case o.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case o.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case o.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case o.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case o.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case o.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(n){switch(n){case e.V.Private:return "\u062E\u0627\u0635";case e.V.Public:return "\u0639\u0627\u0645";case e.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(n){switch(n){case u.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case u.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case u.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(n){switch(n){case h.m.Female:return "\u0627\u0646\u062B\u0649";case h.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(n){switch(n){case m.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case m.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case m.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case m.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case m.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case m.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=C.Yjl({name:"typeI18n",type:a,pure:!0,standalone:!0}),a})()},3712:(v,l,t)=>{t.d(l,{V:()=>e});var e=(()=>((e=e||{}).Private="Private",e.Public="Public",e.Work="Work",e))();Object.keys(e).map(r=>e[r])},1101:(v,l,t)=>{t.d(l,{z:()=>e});var e=(()=>((e=e||{}).Home="Home",e.Mobile="Mobile",e.Work="Work",e))();Object.keys(e).map(r=>e[r])},7263:(v,l,t)=>{t.d(l,{i:()=>u,v:()=>e});var e=(()=>((e=e||{}).Equal="Equal",e.GreaterThan="GreaterThan",e.GreaterThanOrEqual="GreaterThanOrEqual",e.LessThan="LessThan",e.LessThanOrEqual="LessThanOrEqual",e.Not="Not",e.RangeWithBoundaries="RangeWithBoundaries",e.RangeWithoutBoundaries="RangeWithoutBoundaries",e))();const u=Object.keys(e).map(r=>e[r])},1646:(v,l,t)=>{t.d(l,{n:()=>e});var e=(()=>((e=e||{}).NationalCard="NationalCard",e.BankCard="BankCard",e.DriverLicense="DriverLicense",e.Passport="Passport",e.TravelDocument="TravelDocument",e.Other="Other",e))();Object.keys(e).map(r=>e[r])},9155:(v,l,t)=>{t.d(l,{m:()=>e});var e=(()=>((e=e||{}).Male="Male",e.Female="Female",e))();Object.keys(e).map(r=>e[r])}}]);