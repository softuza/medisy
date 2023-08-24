"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(D,p,s)=>{s.r(p),s.d(p,{AnalysisModule:()=>$});var a=s(6814),T=s(2296),h=s(7700),l=s(6385),E=s(617),r=s(7988),S=s(8109),M=s(465),C=s(5738),e=s(758),g=s(2595),O=s(5041),P=s(5807),t=s(5879),c=s(9060),o=s(2279),u=s(5348),y=s(2430),A=s(5703),I=s(2764),R=s(3572),f=s(9598),U=s(7398),z=s(8180),L=s(2516),Y=s(6128);function B(n,v){1&n&&t._UZ(0,"sz-ui-card",6),2&n&&t.Q6J("card",v.$implicit)}const K=[{path:"",component:(()=>{class n{constructor(i,d,m,F,Z,W){this.dialog=i,this.route=d,this.router=m,this.analysisService=F,this.personService=Z,this.personNamePipe=W,this.alert$=(0,t.tdS)(void 0),this.testsDataSource=new R.b2(f.J.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=A.B.more([I.N.edit(()=>this.openEditComponent),I.N.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.getPerson(),this.buildTiles()}buildTiles(){const i={icon:"science",subtitle:"Tests",type:y.k.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},d={icon:"label",subtitle:"Specimens",type:y.k.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.analysisService.getTests(this.analysis.id,f.J.count()).pipe((0,U.U)(m=>m.count),(0,z.q)(1)).subscribe(m=>{i.title=m}),this.analysisService.getSpecimens(this.analysis.id,f.J.count()).pipe((0,U.U)(m=>m.count),(0,z.q)(1)).subscribe(m=>{d.title=m}),this.tiles.push(i),this.tiles.push(d)}getPerson(){this.analysis.personId&&this.personService.getPerson(this.analysis.personId).pipe((0,z.q)(1)).subscribe(i=>{this.tiles.splice(0,0,{icon:"person",type:y.k.Text,subtitle:"Patient",title:this.personNamePipe.transform(i),clickFn:()=>this.router.navigate([`mppl/persons/${i.id}`])})})}openEditComponent(){}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(h.uw),t.Y36(S.gz),t.Y36(S.F0),t.Y36(C.K),t.Y36(u.R),t.Y36(c.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratory-analysis"]],features:[t._Bn([C.K,u.R,c.Y,o.C])],decls:9,vars:4,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(i,d){1&i&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t._UZ(6,"sz-ui-menu",3),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,B,1,1,"sz-ui-card",5),t.qZA()),2&i&&(t.xp6(3),t.Oqu(d.analysis.code),t.xp6(2),t.Oqu(d.analysis.note),t.xp6(1),t.Q6J("menu",d.analysisMenu),t.xp6(2),t.Q6J("ngForOf",d.tiles))},dependencies:[a.sg,L.z,Y.X,P.i],encapsulation:2}),n})()},{path:"tests",loadComponent:()=>Promise.resolve().then(s.bind(s,1947)).then(n=>n.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>Promise.all([s.e(592),s.e(380)]).then(s.bind(s,2380)).then(n=>n.AnalysisSpecimensComponent)}];var N=s(1947);let $=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[C.K],imports:[a.ez,S.Bz.forChild(K),h.Is,e.E3,r.Tx,E.Ps,T.ot,l.t,O.n,g.V,M.X,P.i,N.AnalysisTestsComponent]}),n})()},1947:(D,p,s)=>{s.r(p),s.d(p,{AnalysisTestsComponent:()=>P});var a=s(8109),T=s(2191),h=s(2279),l=s(5738),E=s(5041),r=s(3572),S=s(9598),M=s(8721),C=s(8180),e=s(5879),g=s(3582),O=s(2516);let P=(()=>{class t{constructor(o,u,y){this.route=o,this.analysisService=u,this.testStatei18nPipe=y,this.dataSource=new r.b2(S.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[r.UC.text("test.testclass","Test Class",A=>A.test.testClass.name),r.UC.text("test.state","State",A=>y.transform(A.test.state)),T.h.menu([])],this.get()}get(){this.analysisService.getTests(this.analysis.id,this.dataSource.filterModel).pipe((0,M.sU)(this.dataSource.indicator)).pipe((0,C.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.gz),e.Y36(l.K),e.Y36(h.C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[e._Bn([l.K,h.C]),e.jDz],decls:7,vars:4,consts:function(){let c;return c="Tests",[["start",""],[1,"sz-h5"],c,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,u){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table",4),e.NdJ("update",function(){return u.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(u.analysis.code),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",u.dataSource))},dependencies:[a.Bz,a.rH,r.Vn,g.K,E.n,O.z],encapsulation:2}),t})()},2279:(D,p,s)=>{s.d(p,{C:()=>h});var a=(()=>((a=a||{}).Created="Created",a.Pending="Pending",a.Started="Started",a.Finished="Finished",a))(),T=s(5879);let h=(()=>{class l{transform(r){switch(r){case a.Created:return "Created";case a.Started:return "Started";case a.Finished:return "Finished";case a.Pending:return "Pending";default:return""}}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275pipe=T.Yjl({name:"testStateI18n",type:l,pure:!0,standalone:!0}),l})()}}]);