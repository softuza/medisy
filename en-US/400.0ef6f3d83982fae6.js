"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[400],{6400:(f,S,e)=>{e.r(S),e.d(S,{AnalysisModule:()=>J});var c=e(6814),m=e(2296),a=e(5195),A=e(7700),o=e(6385),g=e(617),u=e(7988),P=e(8525),p=e(8109),I=e(465),M=e(5738),v=e(758),O=e(2595),D=e(2169),L=e(5041),T=e(3572),t=e(5879),$=e(2191),h=e(9060),r=(()=>((r=r||{}).Created="Created",r.Pending="Pending",r.Started="Started",r.Finished="Finished",r))();let y=(()=>{class s{transform(n){switch(n){case r.Created:return "Created";case r.Started:return "Started";case r.Finished:return "Finished";case r.Pending:return "Pending";default:return""}}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275pipe=t.Yjl({name:"testStateI18n",type:s,pure:!0,standalone:!0}),s})();var N=e(5348),R=e(9598),z=e(8721),C=e(8180),Z=e(3582),U=e(2516),_=e(5850);function F(s,l){1&s&&t._UZ(0,"sz-ui-card",12),2&s&&t.Q6J("card",l.$implicit)}const B=[{path:"",component:(()=>{class s{constructor(n,i,d,X,K,G,Y){this.dialog=n,this.route=i,this.router=d,this.analysisService=X,this.personService=K,this.personNamePipe=G,this.testStatei18nPipe=Y,this.alert$=(0,t.tdS)(void 0),this.testsDataSource=new T.b2(R.J.pagedSorted("-createdAt")),this.tiles=[{icon:"science",subtitle:"Specimens"}],this.analysis=this.route.snapshot.data.analysis,this.analysis.personId&&this.getPerson(),this.testsDataSource.columns=[T.UC.text("test.testclass","Test Class",E=>E.test.testClass.name),T.UC.text("test.state","State",E=>Y.transform(E.test.state)),$.h.menu([])],this.getAnalysisTests()}getPerson(){this.personService.getPerson(this.analysis.personId).pipe((0,C.q)(1)).subscribe(n=>{this.tiles.splice(0,0,{subtitle:"Patient",icon:"person",title:this.personNamePipe.transform(n),clickFn:()=>this.router.navigate([`mppl/persons/${n.id}`])})})}openEditComponent(){}getAnalysisTests(){this.analysisService.getAnalysisTests(this.analysis.id,this.testsDataSource.filterModel).pipe((0,z.sU)(this.testsDataSource.indicator)).pipe((0,C.q)(1)).subscribe(n=>{this.testsDataSource.set(n.items,n.count)})}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(A.uw),t.Y36(p.gz),t.Y36(p.F0),t.Y36(M.K),t.Y36(N.R),t.Y36(h.Y),t.Y36(y))},s.\u0275cmp=t.Xpm({type:s,selectors:[["medisy-laboratory-analysis"]],features:[t._Bn([M.K,N.R,h.Y,y])],decls:28,vars:7,consts:function(){let l,n,i;return l="Edit",n="Print",i="Tests",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],l,n,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],i,[3,"paginationEnabled","stateEnabled","dataSource","update"],[3,"card"]]},template:function(n,i){if(1&n&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"button",3)(7,"mat-icon"),t._uU(8,"more_vert"),t.qZA()(),t.TgZ(9,"mat-menu",null,4)(11,"button",5),t.NdJ("click",function(){return i.openEditComponent()}),t.TgZ(12,"mat-icon"),t._uU(13,"edit"),t.qZA(),t.TgZ(14,"span"),t.SDv(15,6),t.qZA()(),t._UZ(16,"mat-divider"),t.TgZ(17,"button",5),t.NdJ("click",function(){return i.openEditComponent()}),t.TgZ(18,"mat-icon"),t._uU(19,"print"),t.qZA(),t.TgZ(20,"span"),t.SDv(21,7),t.qZA()()()(),t.TgZ(22,"div",8),t.YNc(23,F,1,1,"sz-ui-card",9),t.qZA(),t.TgZ(24,"sz-ui-header-basic")(25,"strong",0),t.SDv(26,10),t.qZA()(),t.TgZ(27,"sz-ui-table",11),t.NdJ("update",function(){return i.getAnalysisTests()}),t.qZA()),2&n){const d=t.MAs(10);t.xp6(3),t.Oqu(i.analysis.code),t.xp6(2),t.Oqu(i.analysis.note),t.xp6(1),t.Q6J("matMenuTriggerFor",d),t.xp6(17),t.Q6J("ngForOf",i.tiles),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.testsDataSource)}},dependencies:[c.sg,u.VK,u.OP,u.p6,g.Hw,m.RK,Z.K,U.z,o.d,_.X],encapsulation:2}),s})()}];let J=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[M.K],imports:[c.ez,p.Bz.forChild(B),A.Is,v.E3,u.Tx,g.Ps,m.ot,P.LD,a.QW,T.Vn,L.n,o.t,D.c,O.V,I.X]}),s})()},465:(f,S,e)=>{e.d(S,{X:()=>m});var c=e(5879);let m=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({}),a})()},9060:(f,S,e)=>{e.d(S,{Y:()=>m});var c=e(5879);let m=(()=>{class a{transform(o,g=!1){if(!o.names||0===o.names.length)return`${o.id}`;const u=o.names[0].firstName,P=o.names[0].lastName,p=P?`${u} ${P}`:`${u}`;return g&&o.birthDate?""+(+new Date-+o.birthDate):p}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=c.Yjl({name:"personName",type:a,pure:!0,standalone:!0}),a})()}}]);