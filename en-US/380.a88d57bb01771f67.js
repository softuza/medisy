"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[380],{2380:(A,l,t)=>{t.r(l),t.d(l,{AnalysisSpecimensComponent:()=>O});var E=t(8109),d=t(8262),c=t(365),m=t(5041),n=t(3562),r=t(9598),S=t(8721),u=t(8180),e=t(5879),M=t(6883),p=t(8359),P=t(2516);let O=(()=>{class o{constructor(s,a,i){this.route=s,this.mlabService=a,this.typeI18nPipe=i,this.dataSource=new n.b2(r.J.pagedSorted("-createdAt")),this.analysis=this.route.snapshot.data.analysis,this.dataSource.addRows(n.zP.default([n.UC.hyperlink("code","Code",_=>_.id,_=>_.specimen.code.toString()),n.UC.text("specimen.type","Type",_=>_.specimen.type.name),n.UC.text("specimen.state","State",_=>i.transform(_.specimen.state)),d.h.menu([])])),this.get()}get(){this.mlabService.analyses.specimens.get(this.analysis.id,this.dataSource.filterModel).pipe((0,S.sU)(this.dataSource.indicator)).pipe((0,u.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(E.gz),e.Y36(M.t),e.Y36(c.y))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-laboratory-analysis-specimens"]],standalone:!0,features:[e._Bn([c.y]),e.jDz],decls:7,vars:4,consts:function(){let s;return s="Specimens",[["start",""],[1,"sz-h5"],s,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,i){1&a&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table",4),e.NdJ("update",function(){return i.get()}),e.qZA()),2&a&&(e.xp6(5),e.Oqu(i.analysis.code),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource))},dependencies:[E.Bz,E.rH,n.Vn,p.K,m.n,P.z],encapsulation:2})}return o})()}}]);