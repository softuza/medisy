"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[677],{677:(O,c,t)=>{t.r(c),t.d(c,{AnalysisModule:()=>R});var e=t(6814),u=t(2296),a=t(7700),r=t(6385),i=t(617),d=t(7988),p=t(8109),M=t(465),P=t(5738),n=t(758),g=t(2595),v=t(5041),s=t(5879),T=t(9060),_=t(2279),m=t(5348),S=t(2430),C=t(3572),h=t(9598),f=t(8180),D=t(2516),I=t(6128);function N(o,A){1&o&&s._UZ(0,"sz-ui-card",10),2&o&&s.Q6J("card",A.$implicit)}const L=[{path:"",component:(()=>{class o{constructor(l,E,y,z,$,U){this.dialog=l,this.route=E,this.router=y,this.analysisService=z,this.personService=$,this.personNamePipe=U,this.alert$=(0,s.tdS)(void 0),this.testsDataSource=new C.b2(h.J.pagedSorted("-createdAt")),this.tiles=[],this.analysis=this.route.snapshot.data.analysis,this.tiles.push({icon:"science",subtitle:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:S.k.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},{icon:"label",subtitle:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:S.k.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})}),this.analysis.personId&&this.getPerson()}getPerson(){this.personService.getPerson(this.analysis.personId).pipe((0,f.q)(1)).subscribe(l=>{this.tiles.splice(0,0,{icon:"person",type:S.k.Text,subtitle:"\u0627\u0644\u0645\u0631\u064A\u0636",title:this.personNamePipe.transform(l),clickFn:()=>this.router.navigate([`mppl/persons/${l.id}`])})})}openEditComponent(){}}return o.\u0275fac=function(l){return new(l||o)(s.Y36(a.uw),s.Y36(p.gz),s.Y36(p.F0),s.Y36(P.K),s.Y36(m.R),s.Y36(T.Y))},o.\u0275cmp=s.Xpm({type:o,selectors:[["medisy-laboratory-analysis"]],features:[s._Bn([P.K,m.R,T.Y,_.C])],decls:24,vars:4,consts:function(){let A,l;return A="\u062A\u0639\u062F\u064A\u0644",l="\u0637\u0628\u0627\u0639\u0629",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],A,l,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]]},template:function(l,E){if(1&l&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s.TgZ(6,"button",3)(7,"mat-icon"),s._uU(8,"more_vert"),s.qZA()(),s.TgZ(9,"mat-menu",null,4)(11,"button",5),s.NdJ("click",function(){return E.openEditComponent()}),s.TgZ(12,"mat-icon"),s._uU(13,"edit"),s.qZA(),s.TgZ(14,"span"),s.SDv(15,6),s.qZA()(),s._UZ(16,"mat-divider"),s.TgZ(17,"button",5),s.NdJ("click",function(){return E.openEditComponent()}),s.TgZ(18,"mat-icon"),s._uU(19,"print"),s.qZA(),s.TgZ(20,"span"),s.SDv(21,7),s.qZA()()()(),s.TgZ(22,"div",8),s.YNc(23,N,1,1,"sz-ui-card",9),s.qZA()),2&l){const y=s.MAs(10);s.xp6(3),s.Oqu(E.analysis.code),s.xp6(2),s.Oqu(E.analysis.note),s.xp6(1),s.Q6J("matMenuTriggerFor",y),s.xp6(17),s.Q6J("ngForOf",E.tiles)}},dependencies:[e.sg,d.VK,d.OP,d.p6,i.Hw,u.RK,r.d,D.z,I.X],encapsulation:2}),o})()},{path:"tests",loadComponent:()=>Promise.resolve().then(t.bind(t,1947)).then(o=>o.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>Promise.all([t.e(592),t.e(380)]).then(t.bind(t,2380)).then(o=>o.AnalysisSpecimensComponent)}];var Y=t(1947);let R=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({providers:[P.K],imports:[e.ez,p.Bz.forChild(L),a.Is,n.E3,d.Tx,i.Ps,u.ot,r.t,v.n,g.V,M.X,Y.AnalysisTestsComponent]}),o})()},1947:(O,c,t)=>{t.r(c),t.d(c,{AnalysisTestsComponent:()=>s});var e=t(8109),u=t(2191),a=t(2279),r=t(5738),i=t(5041),d=t(3572),p=t(9598),M=t(8721),P=t(8180),n=t(5879),g=t(3582),v=t(2516);let s=(()=>{class T{constructor(m,S,C){this.route=m,this.analysisService=S,this.testStatei18nPipe=C,this.dataSource=new d.b2(p.J.pagedSorted("test.testClass")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[d.UC.text("test.testclass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",h=>h.test.testClass.name),d.UC.text("test.state","\u0627\u0644\u062D\u0627\u0644\u0629",h=>C.transform(h.test.state)),u.h.menu([])],this.get()}get(){this.analysisService.getTests(this.analysis.id,this.dataSource.filterModel).pipe((0,M.sU)(this.dataSource.indicator)).pipe((0,P.q)(1)).subscribe(m=>{this.dataSource.set(m.items,m.count)})}}return T.\u0275fac=function(m){return new(m||T)(n.Y36(e.gz),n.Y36(r.K),n.Y36(a.C))},T.\u0275cmp=n.Xpm({type:T,selectors:[["medisy-laboratory-analysis-tests"]],standalone:!0,features:[n._Bn([r.K,a.C]),n.jDz],decls:7,vars:4,consts:function(){let _;return _="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start",""],[1,"sz-h5"],_,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(m,S){1&m&&(n.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),n.SDv(3,2),n.qZA(),n.TgZ(4,"a",3),n._uU(5),n.qZA()()(),n.TgZ(6,"sz-ui-table",4),n.NdJ("update",function(){return S.get()}),n.qZA()),2&m&&(n.xp6(5),n.Oqu(S.analysis.code),n.xp6(1),n.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",S.dataSource))},dependencies:[e.Bz,e.rH,d.Vn,g.K,i.n,v.z],encapsulation:2}),T})()},465:(O,c,t)=>{t.d(c,{X:()=>u});var e=t(5879);let u=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a})()},9060:(O,c,t)=>{t.d(c,{Y:()=>u});var e=t(5879);let u=(()=>{class a{transform(i,d=!1){if(!i.names||0===i.names.length)return`${i.id}`;const p=i.names[0].firstName,M=i.names[0].lastName,P=M?`${p} ${M}`:`${p}`;return d&&i.birthDate?""+(+new Date-+i.birthDate):P}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275pipe=e.Yjl({name:"personName",type:a,pure:!0,standalone:!0}),a})()},2279:(O,c,t)=>{t.d(c,{C:()=>a});var e=(()=>((e=e||{}).Created="Created",e.Pending="Pending",e.Started="Started",e.Finished="Finished",e))(),u=t(5879);let a=(()=>{class r{transform(d){switch(d){case e.Created:return "\u0645\u0646\u0634\u0623\u0629";case e.Started:return "\u0628\u062F\u0623";case e.Finished:return "\u0627\u0646\u062A\u0647\u062A";case e.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275pipe=u.Yjl({name:"testStateI18n",type:r,pure:!0,standalone:!0}),r})()}}]);