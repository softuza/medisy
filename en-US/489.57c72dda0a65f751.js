"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[489],{5489:(v,m,t)=>{t.r(m),t.d(m,{SpecimensModule:()=>U});var c=t(6814),i=t(6223),r=t(2296),l=t(7700),u=t(617),g=t(2032),E=t(8525),C=t(8109),M=t(758),A=t(5041),z=t(7239),p=t(3572),I=t(465),S=t(5048),T=t(9598),P=t(8721),f=t(8180),y=t(8034),Y=t(9157),h=t(4110),N=t(9004),e=t(5879),O=t(4622),F=t(6091);let Z=(()=>{class o extends h.Z2{constructor(n,s,d){super(s),this.fb=n,this.dialog=s,this.data=d,this.form=n.group({class:[d.class]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(l.so),e.Y36(l.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-laboratory-specimens-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(n,s){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e._UZ(2,"form",1),e.qZA(),e._UZ(3,"sz-ui-dialog-actions",2)),2&n&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[i.UX,i._Y,i.JL,i.sg,l.Is,l.xY,Y.lN,h.su,O.Y,F.t,N.g,y.FA],encapsulation:2}),o})();var D=t(3582),J=t(3144),L=t(2516);const R=[{path:"",component:(()=>{class o{constructor(n,s){this.dialog=n,this.specimenService=s,this.dataSource=new p.b2(T.J.pagedSorted("-createdAt")),this.get()}openFilterComponent(){this.dialog.open(Z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,f.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.specimenService.getSpecimens(this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,f.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(l.uw),e.Y36(S.E))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-laboratory-specimens"]],decls:5,vars:4,consts:function(){let a;return a="Specimens",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.qZA(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[D.K,J.f,L.z],encapsulation:2}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[S.E],imports:[c.ez,i.u5,i.UX,C.Bz.forChild(R),l.Is,g.c,u.Ps,r.ot,E.LD,p.Vn,z.h,M.E3,A.n,I.X]}),o})()},465:(v,m,t)=>{t.d(m,{X:()=>i});var c=t(5879);let i=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({}),r})()}}]);