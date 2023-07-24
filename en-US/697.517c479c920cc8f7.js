"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[697],{1697:(de,O,t)=>{t.r(O),t.d(O,{PersonsModule:()=>Se});var T=t(6814),r=t(6223),L=t(4630),_=t(9014),g=t(2296),D=t(5195),h=t(5986),v=t(3680),E=t(8034),d=t(7700),u=t(617),A=t(2032),Y=t(9038),F=t(7988),$=t(1476),U=t(5940),Z=t(8525),y=t(3566),z=t(1545),X=t(5313),x=t(2596),G=t(8109),B=t(6981),J=t(4407),C=t(3524),Q=t(807),V=t(5041),K=t(8766),m=t(3572),j=t(465),W=t(1886),M=t(5348),H=t(2191),b=t(6512),c=t(9060),p=t(5746),I=t(9598),w=t(2119),N=t(8180),e=t(5879),f=t(9157),q=t(5974),k=t(4622),ee=t(6091),te=t(851),oe=t(5741),ne=t(7336),se=t(2160);let ae=(()=>{class a extends C.Z2{constructor(n,s,o){super(s),this.fb=n,this.dialog=s,this.data=o,this.form=n.group({sex:[o.sex],title:[o.title],startBirthDate:[o.startBirthDate],endBirthDate:[o.endBirthDate],firstName:[o.firstName],lastName:[o.lastName],ssn:[o.ssn],nationalityId:[o.nationalityId],languageId:[o.languageId],motherName:[o.motherName],fatherName:[o.fatherName],middleName:[o.middleName]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(r.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-people-persons-filter"]],features:[e._Bn([M.R]),e.qOj],decls:26,vars:7,consts:function(){let l,n,s,o,P,i,R;return l="First name",n="Last name",s="Middle name",o="SSN",P="BirthDate",i="Start date",R="End date",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",l],["formControlName","lastName","label",n],["formControlName","middleName","label",s],["formControlName","nationalityId"],["formControlName","ssn","label",o],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],[1,"tw-flex-1"],P,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",i,"formControlName","startBirthDate"],["matEndDate","","placeholder",R,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(n,s){if(1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"medisy-form-field-nationality",6)(9,"sz-ui-form-field-input",7),e.qZA(),e._UZ(10,"medisy-form-field-language",8),e.TgZ(11,"div",2),e._UZ(12,"medisy-form-field-sex",9)(13,"medisy-form-field-title",10),e.qZA(),e.TgZ(14,"mat-form-field",11)(15,"mat-label"),e.SDv(16,12),e.qZA(),e.TgZ(17,"mat-date-range-input",13),e._UZ(18,"input",14)(19,"input",15),e.qZA(),e.TgZ(20,"mat-hint"),e._uU(21,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(22,"mat-datepicker-toggle",16)(23,"mat-date-range-picker",null,17),e.qZA()()(),e._UZ(25,"sz-ui-dialog-actions",18)),2&n){const o=e.MAs(24);e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(15),e.Q6J("rangePicker",o)("comparisonStart",s.form.controls.startBirthDate.value)("comparisonEnd",s.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",o),e.xp6(3),e.Q6J("actions",s.actions)}},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.xY,f.KE,f.hX,f.bx,f.R9,q.g,k.Y,ee.t,te.d,oe.t,ne.e,se.V,E.nW,E.wx,E.zY,E.By,E._g],encapsulation:2}),a})();var le=t(9692),re=t(9288),ie=t(2516);const Ee=[{path:"",component:(()=>{class a{constructor(n,s,o,P){this.dialog=n,this.personService=s,this.sexI18nPipe=o,this.personNamePipe=P,this.dataSource=new m.b2(I.J.paged()),this.dataSource.columns=[H.h.nameHyperlink(i=>i.id,i=>P.transform(i),!1),m.UC.text("sex","Sex",i=>o.transform(i.sex)),m.UC.date("birthDate","BirthDate")],this.get()}openFilterComponent(){this.dialog.open(ae,{data:this.dataSource.filterModel}).afterClosed().pipe((0,N.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openPersonScanComponent(){this.dialog.open(b.x).afterClosed().pipe((0,N.q)(1)).subscribe(s=>{s&&(this.dataSource.filterModel=I.J.paged(),this.dataSource.filterModel.ssn=s.ssn,this.get())})}get(){this.personService.getPersons(this.dataSource.filterModel).pipe((0,w.sU)(this.dataSource.indicator),(0,N.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(d.uw),e.Y36(M.R),e.Y36(p.l),e.Y36(c.Y))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-people-persons"]],features:[e._Bn([p.l,T.uU,c.Y])],decls:8,vars:4,consts:function(){let l;return l="Persons",[["start","",1,"sz-h5"],l,[3,"dataSource","search","filter"],["end","","mat-icon-button","",3,"click"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return s.openPersonScanComponent()}),e.TgZ(5,"mat-icon"),e._uU(6,"barcode"),e.qZA()()(),e.TgZ(7,"sz-ui-table",4),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[le.K,re.f,ie.z,u.Hw,g.RK],encapsulation:2}),a})()}];let Se=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[M.R,W.r],imports:[T.ez,r.u5,r.UX,G.Bz.forChild(Ee),d.Is,L.Bb,X.p0,$.TU,A.c,m.Vn,K.h,J.E,Q.g,C.su,B.F,V.n,h.p9,F.Tx,u.Ps,g.ot,Z.LD,z.T5,x.AV,Y.ie,y.JX,v.XK,D.QW,_.g,E.FA,U.Cq,j.L]}),a})()}}]);