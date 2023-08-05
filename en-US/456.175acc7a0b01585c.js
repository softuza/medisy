"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[456],{3158:(g,p,t)=>{t.r(p),t.d(p,{SpecimenTypesModule:()=>B});var m=t(6814),r=t(6223),l=t(2296),c=t(7700),d=t(617),E=t(2032),C=t(8109),M=t(6981),P=t(6987),z=t(758),S=t(4110),A=t(9004),Y=t(5041),I=t(7239),u=t(3572),f=t(2191),h=t(9862),F=t(3971),v=t(9598),e=t(5879);let y=(()=>{class o{constructor(n){this.http=n,this.path="medisy-laboratory/v1/specimen-types"}getSpecimenTypes(n=v.J.pagedSorted("name")){return this.http.get(`${this.path}`,{params:new h.LE({fromObject:(0,F.c)(n)})})}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(h.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var O=t(8721),T=t(8180),N=t(4622),J=t(6091);let Z=(()=>{class o extends S.Z2{constructor(n,s,i){super(s),this.fb=n,this.dialog=s,this.data=i,this.form=n.group({class:[i.class]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.qu),e.Y36(c.so),e.Y36(c.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-specimen-types-filter"]],features:[e._Bn([]),e.qOj],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(n,s){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e._UZ(2,"form",1),e.qZA(),e._UZ(3,"sz-ui-dialog-actions",2)),2&n&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[r._Y,r.JL,r.sg,c.xY,N.Y,J.t],encapsulation:2}),o})();var L=t(6939),D=t(3144),R=t(2516);const U=[{path:"",component:(()=>{class o{constructor(n,s){this.dialog=n,this.specimenTypeService=s,this.dataSource=new u.b2(v.J.pagedSorted("name")),this.dataSource.columns=[f.h.nameHyperlink(i=>i.id,i=>i.name),u.UC.text("abbreviation","Abbreviation",i=>i.abbreviation),f.h.createdAt()],this.get()}openFilterComponent(){this.dialog.open(Z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,T.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.specimenTypeService.getSpecimenTypes(this.dataSource.filterModel).pipe((0,O.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(c.uw),e.Y36(y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["medisy-laboratory-specimen-types"]],features:[e._Bn([y])],decls:5,vars:4,consts:function(){let a;return a="Specimen Types",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.qZA(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[L.K,D.f,R.z],encapsulation:2}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[P.C],imports:[m.ez,r.u5,r.UX,C.Bz.forChild(U),c.Is,E.c,d.Ps,l.ot,u.Vn,I.h,z.E3,A.g,S.su,M.F,Y.n]}),o})()},465:(g,p,t)=>{t.d(p,{X:()=>r});var m=t(5879);let r=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({}),l})()}}]);