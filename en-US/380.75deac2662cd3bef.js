"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[380],{2380:(C,E,s)=>{s.r(E),s.d(E,{AnalysisSpecimensComponent:()=>A});var l=s(8109),d=s(2191),m=s(4211),r=s(5041),_=s(3572),S=s(9598),p=s(8721),u=s(8180),e=s(5879),M=s(5738),P=s(3582),O=s(2516);let A=(()=>{class a{constructor(t,o,c){this.route=t,this.analysisService=o,this.specimenStateI18nPipe=c,this.dataSource=new _.b2(S.J.pagedSorted("-createdAt")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.columns=[_.UC.hyperlink("code","Code",n=>n.id,n=>n.specimen.code.toString()),_.UC.text("specimen.type","Type",n=>n.specimen.type.name),_.UC.text("specimen.state","State",n=>c.transform(n.specimen.state)),d.h.menu([])],this.get()}get(){this.analysisService.getSpecimens(this.analysis.id,this.dataSource.filterModel).pipe((0,p.sU)(this.dataSource.indicator)).pipe((0,u.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(l.gz),e.Y36(M.K),e.Y36(m.T))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[e._Bn([m.T]),e.jDz],decls:7,vars:4,consts:function(){let i;return i="Specimens",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table",4),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.analysis.code),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[l.Bz,l.rH,_.Vn,P.K,r.n,O.z],encapsulation:2}),a})()}}]);