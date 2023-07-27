"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[188],{2188:(T,c,n)=>{n.r(c),n.d(c,{AnalysisModule:()=>_});var l=n(6814),m=n(6223),o=n(4630),d=n(2296),i=n(5195),g=n(5986),p=n(3680),A=n(8034),S=n(7700),h=n(617),O=n(2032),I=n(9038),y=n(7988),L=n(1476),D=n(5940),Z=n(8525),R=n(3566),$=n(1545),z=n(5313),U=n(2596),E=n(8109),F=n(465),f=n(5738),B=n(758),J=n(2595),X=n(5341),K=n(2169),j=n(5041),M=n(3572),P=n(9060),N=n(5348),Q=n(8645),G=n(8180),t=n(5879),x=n(6385),V=n(2516),W=n(5850),v=n(9862),C=n(3971);let Y=(()=>{class e{constructor(s){this.http=s,this.path="medisy-laboratory/v1/tests"}getTests(s){return this.http.get(`${this.path}`,{params:new v.LE({fromObject:(0,C.c)(s)})})}getTestsCount(s){return this.http.get(`${this.path}/count`,{params:new v.LE({fromObject:(0,C.c)(s)})})}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(v.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var H=n(9598),b=n(765);let w=(()=>{class e{set analysis(s){this._analysis=s,this.get()}constructor(s){this.testService=s,this._analysis=null,this.dataSource=new M.b2(H.J.pagedSorted("-createdAt"))}get(){}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["medisy-laboratory-analysis-tests"]],inputs:{analysis:"analysis"},features:[t._Bn([Y])],decls:1,vars:3,consts:[[3,"paginationEnabled","stateEnabled","dataSource","update"]],template:function(s,r){1&s&&(t.TgZ(0,"sz-ui-table",0),t.NdJ("update",function(){return r.get()}),t.qZA()),2&s&&t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource)},dependencies:[b.K],encapsulation:2}),e})();function k(e,a){1&e&&t._UZ(0,"sz-ui-card",10),2&e&&t.Q6J("card",a.$implicit)}const q=[{path:"",component:(()=>{class e{constructor(s,r,u,tt,nt){this.dialog=s,this.route=r,this.analysisService=u,this.personService=tt,this.personNamePipe=nt,this.alert$=new Q.x,this.cards=[{counter:0,url:"samples",icon:"science",title:"\u0639\u064A\u0646\u0627\u062A"}],this.analysis=this.route.snapshot.data.analysis,this.analysis.personId&&this.getPerson()}getPerson(){this.personService.getPerson(this.analysis.personId).pipe((0,G.q)(1)).subscribe(s=>{this.cards.splice(0,0,{subtitle:"\u0627\u0644\u0634\u062E\u0635",icon:"person",title:this.personNamePipe.transform(s)}),console.log(this.personNamePipe.transform(s))})}openEditComponent(){}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(S.uw),t.Y36(E.gz),t.Y36(f.K),t.Y36(N.R),t.Y36(P.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["medisy-laboratory-analysis"]],features:[t._Bn([f.K,N.R,P.Y])],decls:23,vars:4,consts:function(){let a,s;return a="\u062A\u0639\u062F\u064A\u0644",s="\u0637\u0628\u0627\u0639\u0629",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],a,s,[1,"tw-grid","lg:tw-grid-cols-4","tw-grid-rows-1","tw-gap-2","tw-py-2"],[3,"card",4,"ngFor","ngForOf"],[1,"tw-flex","tw-flex-col","tw-gap-2"],[1,"tw-flex-1",3,"analysis"],[3,"card"]]},template:function(s,r){if(1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t._uU(2),t.qZA(),t.TgZ(3,"button",1)(4,"mat-icon"),t._uU(5,"more_vert"),t.qZA()(),t.TgZ(6,"mat-menu",null,2)(8,"button",3),t.NdJ("click",function(){return r.openEditComponent()}),t.TgZ(9,"mat-icon"),t._uU(10,"edit"),t.qZA(),t.TgZ(11,"span"),t.SDv(12,4),t.qZA()(),t._UZ(13,"mat-divider"),t.TgZ(14,"button",3),t.NdJ("click",function(){return r.openEditComponent()}),t.TgZ(15,"mat-icon"),t._uU(16,"print"),t.qZA(),t.TgZ(17,"span"),t.SDv(18,5),t.qZA()()()(),t.TgZ(19,"div",6),t.YNc(20,k,1,1,"sz-ui-card",7),t.qZA(),t.TgZ(21,"div",8),t._UZ(22,"medisy-laboratory-analysis-tests",9),t.qZA()),2&s){const u=t.MAs(7);t.xp6(2),t.Oqu(r.analysis.code),t.xp6(1),t.Q6J("matMenuTriggerFor",u),t.xp6(17),t.Q6J("ngForOf",r.cards),t.xp6(2),t.Q6J("analysis",r.analysis)}},dependencies:[l.sg,y.VK,y.OP,y.p6,h.Hw,d.RK,x.d,V.z,W.X,w],encapsulation:2}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[f.K],imports:[l.ez,m.u5,m.UX,E.Bz.forChild(q),S.Is,o.Bb,O.c,B.E,X.SD,g.p9,y.Tx,h.Ps,d.ot,Z.LD,$.T5,U.AV,I.ie,i.QW,D.Cq,p.XK,A.FA,M.Vn,j.n,z.p0,L.TU,R.JX,K.c,J.V,F.L]}),e})()},465:(T,c,n)=>{n.d(c,{L:()=>m});var l=n(5879);let m=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({}),o})()},9060:(T,c,n)=>{n.d(c,{Y:()=>m});var l=n(5879);let m=(()=>{class o{transform(i,g=!1){if(!i.names||0===i.names.length)return`${i.id}`;const p=i.names[0].firstName,A=i.names[0].lastName,S=A?`${p} ${A}`:`${p}`;return g&&i.birthDate?""+(+new Date-+i.birthDate):S}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275pipe=l.Yjl({name:"personName",type:o,pure:!0,standalone:!0}),o})()}}]);