"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(O,m,t)=>{t.r(m),t.d(m,{AnalysisModule:()=>z});var e=t(6814),u=t(2296),a=t(7700),r=t(6385),i=t(617),d=t(7988),p=t(8109),h=t(465),T=t(5738),n=t(758),y=t(1462),v=t(5041),s=t(5879),E=t(9060),P=t(2279),c=t(5348),_=t(3572),M=t(9598),C=t(7398),D=t(8180),I=t(2516),N=t(6128);function L(o,S){1&o&&s._UZ(0,"sz-ui-card",10),2&o&&s.Q6J("card",S.$implicit)}const Y=[{path:"",component:(()=>{class o{constructor(l,A,g,$,U,B){this.dialog=l,this.route=A,this.router=g,this.analysisService=$,this.personService=U,this.personNamePipe=B,this.alert$=(0,s.tdS)(void 0),this.testsDataSource=new _.b2(M.J.pagedSorted("-createdAt")),this.tiles=[],this.analysis=this.route.snapshot.data.analysis,this.tiles.push({icon:"science",subtitle:"Tests",type:y.k.Counter,task$:this.analysisService.getAnalysisTests(this.analysis.id,M.J.count()).pipe((0,C.U)(f=>f.count)),clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},{icon:"label",subtitle:"Specimens",type:y.k.Counter,task$:this.analysisService.getAnalysisSpecimens(this.analysis.id,M.J.count()).pipe((0,C.U)(f=>f.count)),clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})}),this.analysis.personId&&this.getPerson()}getPerson(){this.personService.getPerson(this.analysis.personId).pipe((0,D.q)(1)).subscribe(l=>{this.tiles.splice(0,0,{icon:"person",type:y.k.Text,subtitle:"Patient",title:this.personNamePipe.transform(l),clickFn:()=>this.router.navigate([`mppl/persons/${l.id}`])})})}openEditComponent(){}}return o.\u0275fac=function(l){return new(l||o)(s.Y36(a.uw),s.Y36(p.gz),s.Y36(p.F0),s.Y36(T.K),s.Y36(c.R),s.Y36(E.Y))},o.\u0275cmp=s.Xpm({type:o,selectors:[["medisy-laboratory-analysis"]],features:[s._Bn([T.K,c.R,E.Y,P.C])],decls:24,vars:4,consts:function(){let S,l;return S="Edit",l="Print",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],S,l,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]]},template:function(l,A){if(1&l&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s.TgZ(6,"button",3)(7,"mat-icon"),s._uU(8,"more_vert"),s.qZA()(),s.TgZ(9,"mat-menu",null,4)(11,"button",5),s.NdJ("click",function(){return A.openEditComponent()}),s.TgZ(12,"mat-icon"),s._uU(13,"edit"),s.qZA(),s.TgZ(14,"span"),s.SDv(15,6),s.qZA()(),s._UZ(16,"mat-divider"),s.TgZ(17,"button",5),s.NdJ("click",function(){return A.openEditComponent()}),s.TgZ(18,"mat-icon"),s._uU(19,"print"),s.qZA(),s.TgZ(20,"span"),s.SDv(21,7),s.qZA()()()(),s.TgZ(22,"div",8),s.YNc(23,L,1,1,"sz-ui-card",9),s.qZA()),2&l){const g=s.MAs(10);s.xp6(3),s.Oqu(A.analysis.code),s.xp6(2),s.Oqu(A.analysis.note),s.xp6(1),s.Q6J("matMenuTriggerFor",g),s.xp6(17),s.Q6J("ngForOf",A.tiles)}},dependencies:[e.sg,d.VK,d.OP,d.p6,i.Hw,u.RK,r.d,I.z,N.X],encapsulation:2}),o})()},{path:"tests",loadComponent:()=>Promise.resolve().then(t.bind(t,1947)).then(o=>o.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>Promise.all([t.e(592),t.e(380)]).then(t.bind(t,2380)).then(o=>o.AnalysisSpecimensComponent)}];var R=t(1947);let z=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({providers:[T.K],imports:[e.ez,p.Bz.forChild(Y),a.Is,n.E3,d.Tx,i.Ps,u.ot,r.t,v.n,y.V,h.X,R.AnalysisTestsComponent]}),o})()},1947:(O,m,t)=>{t.r(m),t.d(m,{AnalysisTestsComponent:()=>s});var e=t(8109),u=t(2191),a=t(2279),r=t(5738),i=t(5041),d=t(3572),p=t(9598),h=t(8721),T=t(8180),n=t(5879),y=t(3582),v=t(2516);let s=(()=>{class E{constructor(c,_,M){this.route=c,this.analysisService=_,this.testStatei18nPipe=M,this.dataSource=new d.b2(p.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[d.UC.text("test.testclass","Test Class",C=>C.test.testClass.name),d.UC.text("test.state","State",C=>M.transform(C.test.state)),u.h.menu([])],this.get()}get(){this.analysisService.getAnalysisTests(this.analysis.id,this.dataSource.filterModel).pipe((0,h.sU)(this.dataSource.indicator)).pipe((0,T.q)(1)).subscribe(c=>{this.dataSource.set(c.items,c.count)})}}return E.\u0275fac=function(c){return new(c||E)(n.Y36(e.gz),n.Y36(r.K),n.Y36(a.C))},E.\u0275cmp=n.Xpm({type:E,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[n._Bn([r.K,a.C]),n.jDz],decls:7,vars:4,consts:function(){let P;return P="Tests",[["start",""],[1,"sz-h5"],P,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(c,_){1&c&&(n.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),n.SDv(3,2),n.qZA(),n.TgZ(4,"a",3),n._uU(5),n.qZA()()(),n.TgZ(6,"sz-ui-table",4),n.NdJ("update",function(){return _.get()}),n.qZA()),2&c&&(n.xp6(5),n.Oqu(_.analysis.code),n.xp6(1),n.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",_.dataSource))},dependencies:[e.Bz,e.rH,d.Vn,y.K,i.n,v.z],encapsulation:2}),E})()},465:(O,m,t)=>{t.d(m,{X:()=>u});var e=t(5879);let u=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a})()},9060:(O,m,t)=>{t.d(m,{Y:()=>u});var e=t(5879);let u=(()=>{class a{transform(i,d=!1){if(!i.names||0===i.names.length)return`${i.id}`;const p=i.names[0].firstName,h=i.names[0].lastName,T=h?`${p} ${h}`:`${p}`;return d&&i.birthDate?""+(+new Date-+i.birthDate):T}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275pipe=e.Yjl({name:"personName",type:a,pure:!0,standalone:!0}),a})()},2279:(O,m,t)=>{t.d(m,{C:()=>a});var e=(()=>((e=e||{}).Created="Created",e.Pending="Pending",e.Started="Started",e.Finished="Finished",e))(),u=t(5879);let a=(()=>{class r{transform(d){switch(d){case e.Created:return "Created";case e.Started:return "Started";case e.Finished:return "Finished";case e.Pending:return "Pending";default:return""}}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275pipe=u.Yjl({name:"testStateI18n",type:r,pure:!0,standalone:!0}),r})()}}]);