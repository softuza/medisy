"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[545],{5545:(F,d,e)=>{e.r(d),e.d(d,{SpecimenTypesModule:()=>b});var f=e(6814),i=e(6223),h=e(2296),r=e(7700),v=e(617),T=e(2032),g=e(8109),l=e(6883),E=e(758),m=e(9899),y=e(5781),C=e(5041),M=e(7239),c=e(3572),p=e(8262),P=e(9598),Y=e(8721),u=e(8180),t=e(5879),A=e(4622),z=e(6091);let I=(()=>{class a extends m.Z2{constructor(o,s,n){super(s),this.fb=o,this.dialog=s,this.data=n,this.form=o.group({})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(i.qu),t.Y36(r.so),t.Y36(r.WI))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-specimen-types-filter"]],features:[t._Bn([]),t.qOj],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(s,n){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content"),t._UZ(2,"form",1),t.qZA(),t._UZ(3,"sz-ui-dialog-actions",2)),2&s&&(t.Q6J("header",n.header),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("actions",n.actions))},dependencies:[i._Y,i.JL,i.sg,r.xY,A.Y,z.t],encapsulation:2})}return a})();var Z=e(8359),N=e(3144),O=e(2516);const J=[{path:"",component:(()=>{class a{constructor(o,s){this.dialog=o,this.mlabService=s,this.dataSource=new c.mZ(P.J.pagedSorted("name")),this.dataSource.addColumns([p.h.nameText(n=>n.name),c.UC.text("abbreviation","Abbreviation",n=>n.abbreviation),p.h.createdAt()]),this.get()}openFilterComponent(){this.dialog.open(I,{data:this.dataSource.filterModel}).afterClosed().pipe((0,u.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.mlabService.specimenTypes.get(this.dataSource.filterModel).pipe((0,Y.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(r.uw),t.Y36(l.t))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-laboratory-specimen-types"]],features:[t._Bn([l.t])],decls:5,vars:4,consts:function(){let o;return o="Specimen Types",[["start","",1,"sz-h5"],o,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,n){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return n.get()})("filter",function(){return n.openFilterComponent()}),t.qZA(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return n.get()}),t.qZA()),2&s&&(t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[Z.K,N.f,O.z],encapsulation:2})}return a})()}];let b=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({providers:[l.t],imports:[f.ez,i.u5,i.UX,g.Bz.forChild(J),r.Is,T.c,v.Ps,h.ot,c.Vn,M.h,E.E3,y.g2,m.su,C.n]})}return a})()}}]);