"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[697],{1697:(Y,T,e)=>{e.r(T),e.d(T,{PersonsModule:()=>le});var u=e(6814),o=e(6223),P=e(4630),c=e(9014),N=e(2296),p=e(5195),R=e(5986),L=e(3680),S=e(8034),d=e(7700),h=e(617),D=e(2032),l=e(9038),m=e(7988),i=e(1476),E=e(5940),C=e(8525),f=e(3566),z=e(1545),Z=e(5313),x=e(2596),B=e(8109),X=e(6981),y=e(4407),A=e(5436),G=e(807),J=e(5041),Q=e(8766),I=e(3572),K=e(465),W=e(1886),v=e(5348),j=e(2191),F=e(5746),V=e(9598),H=e(2119),U=e(8180),t=e(5879),g=e(9157),b=e(5974),q=e(4622),w=e(6091),k=e(5741),ee=e(7336);let te=(()=>{class a extends A.Z2{constructor(n,s,r){super(s),this.fb=n,this.dialog=s,this.data=r,this.form=n.group({sex:[r.sex],title:[r.title],startBirthDate:[r.startBirthDate],endBirthDate:[r.endBirthDate],firstName:[r.firstName],lastName:[r.lastName],motherName:[r.motherName],fatherName:[r.fatherName],middleName:[r.middleName]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(o.qu),t.Y36(d.so),t.Y36(d.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-people-persons-filter"]],features:[t._Bn([v.R]),t.qOj],decls:22,vars:7,consts:function(){let _,n,s,r,M,$;return _="First name",n="Last name",s="Middle name",r="BirthDate",M="Start date",$="End date",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",_],["formControlName","lastName","label",n],["formControlName","middleName","label",s],["formControlName","sex"],["formControlName","title"],[1,"tw-flex-1"],r,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",M,"formControlName","startBirthDate"],["matEndDate","","placeholder",$,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(n,s){if(1&n&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),t._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),t.qZA(),t._UZ(6,"sz-ui-form-field-input",5),t.TgZ(7,"div",2),t._UZ(8,"medisy-form-field-sex",6)(9,"medisy-form-field-title",7),t.qZA(),t.TgZ(10,"mat-form-field",8)(11,"mat-label"),t.SDv(12,9),t.qZA(),t.TgZ(13,"mat-date-range-input",10),t._UZ(14,"input",11)(15,"input",12),t.qZA(),t.TgZ(16,"mat-hint"),t._uU(17,"YYYY-MM-DD - YYYY-MM-DD"),t.qZA(),t._UZ(18,"mat-datepicker-toggle",13)(19,"mat-date-range-picker",null,14),t.qZA()()(),t._UZ(21,"sz-ui-dialog-actions",15)),2&n){const r=t.MAs(20);t.Q6J("header",s.header),t.xp6(2),t.Q6J("formGroup",s.form),t.xp6(11),t.Q6J("rangePicker",r)("comparisonStart",s.form.controls.startBirthDate.value)("comparisonEnd",s.form.controls.endBirthDate.value),t.xp6(5),t.Q6J("for",r),t.xp6(3),t.Q6J("actions",s.actions)}},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,d.xY,g.KE,g.hX,g.bx,g.R9,b.g,q.Y,w.t,k.t,ee.e,S.nW,S.wx,S.zY,S.By,S._g],encapsulation:2}),a})();var oe=e(9692),ne=e(9288),re=e(2516);const se=[{path:"",component:(()=>{class a{constructor(n,s,r){this.dialog=n,this.personService=s,this.sexI18nPipe=r,this.dataSource=new I.b2(V.J.paged()),this.dataSource.columns=[j.h.nameHyperlink(M=>M.id,this.formatName,!1),I.UC.text("sex","Sex",M=>r.transform(M.sex)),I.UC.date("birthDate","BirthDate")],this.get()}openFilterComponent(){this.dialog.open(te,{data:this.dataSource.filterModel}).afterClosed().pipe((0,U.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}formatSex(n){return this.sexI18nPipe.transform(n.sex)}formatName(n){return n.names?`${n.names[0].firstName} ${n.names[0].lastName}`:""}get(){this.personService.getPersons(this.dataSource.filterModel).pipe((0,H.sU)(this.dataSource.indicator),(0,U.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(d.uw),t.Y36(v.R),t.Y36(F.l))},a.\u0275cmp=t.Xpm({type:a,selectors:[["medisy-people-persons"]],features:[t._Bn([F.l,u.uU])],decls:5,vars:4,consts:function(){let _;return _="Persons",[["start","",1,"sz-h5"],_,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),t.qZA(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return s.get()}),t.qZA()),2&n&&(t.xp6(3),t.Q6J("dataSource",s.dataSource),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[oe.K,ne.f,re.z],encapsulation:2}),a})()}];let le=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[v.R,W.r],imports:[u.ez,o.u5,o.UX,B.Bz.forChild(se),d.Is,P.Bb,Z.p0,i.TU,D.c,I.Vn,Q.h,y.E,G.g,A.su,X.F,J.n,R.p9,m.Tx,h.Ps,N.ot,C.LD,z.T5,x.AV,l.ie,f.JX,L.XK,p.QW,c.g,S.FA,E.Cq,K.L]}),a})()},5974:(Y,T,e)=>{e.d(T,{g:()=>D});var u=e(2757),o=e(5879),P=e(6223),c=e(6814),N=e(9157),p=e(2032);function R(l,m){if(1&l&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&l){const i=o.oxw();o.xp6(1),o.Oqu(i.label)}}function L(l,m){1&l&&(o.TgZ(0,"mat-error"),o.SDv(1,2),o.qZA())}function S(l,m){1&l&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function d(l,m){1&l&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function h(l,m){1&l&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let D=(()=>{class l extends u.l{constructor(i){super(i),this.ngControl=i}ngOnInit(){this.control=this.ngControl.control}writeValue(i){this.value=i}}return l.\u0275fac=function(i){return new(i||l)(o.Y36(P.a5,10))},l.\u0275cmp=o.Xpm({type:l,selectors:[["sz-ui-form-field-input"]],features:[o.qOj],decls:7,vars:8,consts:function(){let m,i,E,C;return m="This field is required",i="This field has insufficient length",E="This field exceeds the maximum length",C="Email is required",[[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],m,i,E,C]},template:function(i,E){1&i&&(o.TgZ(0,"mat-form-field"),o.YNc(1,R,2,1,"mat-label",0),o._UZ(2,"input",1),o.YNc(3,L,2,0,"mat-error",0),o.YNc(4,S,2,0,"mat-error",0),o.YNc(5,d,2,0,"mat-error",0),o.YNc(6,h,2,0,"mat-error",0),o.qZA()),2&i&&(o.xp6(1),o.Q6J("ngIf",E.label),o.xp6(1),o.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),o.xp6(1),o.Q6J("ngIf",E.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",E.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",E.control.hasError("maxlength")),o.xp6(1),o.Q6J("ngIf",E.control.hasError("email")))},dependencies:[c.O5,P.Fj,P.JJ,P.oH,N.KE,N.hX,N.TO,p.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),l})()}}]);