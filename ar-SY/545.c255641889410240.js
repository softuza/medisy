"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[545],{5545:(U,m,t)=>{t.r(m),t.d(m,{SpecimenTypesModule:()=>R});var f=t(6814),r=t(6223),h=t(2296),l=t(7700),T=t(617),v=t(2032),y=t(8109),g=t(6987),C=t(758),c=t(4110),E=t(9004),M=t(5041),P=t(7239),p=t(3572),d=t(2191),u=t(8518),Y=t(9598),A=t(8721),S=t(8180),e=t(5879),z=t(4622),I=t(6091);let N=(()=>{class o extends c.Z2{constructor(n,s,i){super(s),this.fb=n,this.dialog=s,this.data=i,this.form=n.group({})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.qu),e.Y36(l.so),e.Y36(l.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-specimen-types-filter"]],features:[e._Bn([]),e.qOj],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(n,s){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e._UZ(2,"form",1),e.qZA(),e._UZ(3,"sz-ui-dialog-actions",2)),2&n&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[r._Y,r.JL,r.sg,l.xY,z.Y,I.t],encapsulation:2}),o})();var Z=t(3582),O=t(3144),F=t(2516);const J=[{path:"",component:(()=>{class o{constructor(n,s){this.dialog=n,this.specimenTypeService=s,this.dataSource=new p.b2(Y.J.pagedSorted("name")),this.dataSource.columns=[d.h.nameText(i=>i.name),p.UC.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",i=>i.abbreviation),d.h.createdAt()],this.get()}openFilterComponent(){this.dialog.open(N,{data:this.dataSource.filterModel}).afterClosed().pipe((0,S.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.specimenTypeService.getSpecimenTypes(this.dataSource.filterModel).pipe((0,A.sU)(this.dataSource.indicator),(0,S.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(l.uw),e.Y36(u.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-laboratory-specimen-types"]],features:[e._Bn([u.I])],decls:5,vars:4,consts:function(){let a;return a="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.qZA(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[Z.K,O.f,F.z],encapsulation:2}),o})()}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[g.C],imports:[f.ez,r.u5,r.UX,y.Bz.forChild(J),l.Is,v.c,T.Ps,h.ot,p.Vn,P.h,C.E3,E.g,c.su,M.n]}),o})()}}]);