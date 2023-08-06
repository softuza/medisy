"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[11],{5011:(R,d,t)=>{t.r(d),t.d(d,{SpecimenTypesModule:()=>U});var T=t(6814),l=t(6223),v=t(2296),c=t(7700),C=t(617),g=t(2032),E=t(8109),M=t(6987),P=t(758),u=t(4110),z=t(9004),Y=t(5041),I=t(7239),m=t(3572),S=t(2191),a=(()=>((a=a||{}).Swab="Swab",a.Fluid="Fluid",a.Biopsy="Biopsy",a.Necropsy="Necropsy",a.Secretion="Secretion",a))(),e=t(5879);let f=(()=>{class s{transform(n){switch(n){case a.Biopsy:return "\u062E\u0632\u0639\u0629";case a.Necropsy:return "Necropsy";case a.Fluid:return "\u0633\u0627\u0626\u0644";case a.Swab:return "\u0645\u0633\u062D\u0629";case a.Secretion:return "Secretion";default:return""}}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275pipe=e.Yjl({name:"spceimenClassI18n",type:s,pure:!0,standalone:!0}),s})();var h=t(8518),A=t(9598),N=t(8721),y=t(8180),F=t(4622),Z=t(6091);let $=(()=>{class s extends u.Z2{constructor(n,o,r){super(o),this.fb=n,this.dialog=o,this.data=r,this.form=n.group({class:[r.class]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(l.qu),e.Y36(c.so),e.Y36(c.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-specimen-types-filter"]],features:[e._Bn([]),e.qOj],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(n,o){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e._UZ(2,"form",1),e.qZA(),e._UZ(3,"sz-ui-dialog-actions",2)),2&n&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[l._Y,l.JL,l.sg,c.xY,F.Y,Z.t],encapsulation:2}),s})();var O=t(3582),B=t(3144),J=t(2516);const b=[{path:"",component:(()=>{class s{constructor(n,o,r){this.dialog=n,this.specimenTypeService=o,this.specimenClassI18nPipe=r,this.dataSource=new m.b2(A.J.pagedSorted("name")),this.dataSource.columns=[S.h.nameText(p=>p.name),m.UC.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",p=>p.abbreviation),m.UC.text("class","Class",p=>r.transform(p.class)),S.h.createdAt()],this.get()}openFilterComponent(){this.dialog.open($,{data:this.dataSource.filterModel}).afterClosed().pipe((0,y.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.specimenTypeService.getSpecimenTypes(this.dataSource.filterModel).pipe((0,N.sU)(this.dataSource.indicator),(0,y.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(c.uw),e.Y36(h.I),e.Y36(f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-specimen-types"]],features:[e._Bn([h.I,f])],decls:5,vars:4,consts:function(){let i;return i="\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,o){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.qZA(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return o.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(1),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[O.K,B.f,J.z],encapsulation:2}),s})()}];let U=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[M.C],imports:[T.ez,l.u5,l.UX,E.Bz.forChild(b),c.Is,g.c,C.Ps,v.ot,m.Vn,I.h,P.E3,z.g,u.su,Y.n]}),s})()}}]);