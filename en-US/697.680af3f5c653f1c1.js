"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[697],{1697:(Y,N,t)=>{t.r(N),t.d(N,{PersonsModule:()=>j});var f=t(6814),O=t(2296),i=t(7700),T=t(617),E=t(8109),u=t(7163),g=t(758),C=t(5041),P=t(3572),$=t(7812),p=t(9060),I=t(7076),R=t(9598),F=t(8721),c=t(8180),_=t(6223),d=t(8034),m=t(9157),v=t(851),U=t(2670),y=t(5741),L=t(3576),z=t(9004),e=t(5879),Z=t(4622),X=t(6091),G=t(5974);let B=(()=>{class a extends L.Z2{constructor(n,s,o){super(s),this.fb=n,this.dialog=s,this.data=o,this.form=n.group({sex:[o.sex],title:[o.title],startBirthDate:[o.startBirthDate],endBirthDate:[o.endBirthDate],firstName:[o.firstName],lastName:[o.lastName],ssn:[o.ssn],nationalityId:[o.nationalityId],languageId:[o.languageId],motherName:[o.motherName],fatherName:[o.fatherName],middleName:[o.middleName],address:[o.address]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(_.qu),e.Y36(i.so),e.Y36(i.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-people-persons-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:28,vars:7,consts:function(){let r,n,s,o,M,l,D,A,h;return r="First name",n="Last name",s="Middle name",o="SSN",M="BirthDate",l="Start date",D="End date",A="Title",h="Address",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",r],["formControlName","lastName","label",n],["formControlName","middleName","label",s],["formControlName","nationalityId"],["formControlName","ssn","label",o],["formControlName","languageId"],[1,"tw-flex-1"],M,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",l,"formControlName","startBirthDate"],["matEndDate","","placeholder",D,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],["formControlName","sex"],["formControlName","title","label",A],["formControlName","address","label",h],[3,"actions"]]},template:function(n,s){if(1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"medisy-form-field-nationality",6)(9,"sz-ui-form-field-input",7),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"medisy-form-field-language",8),e.TgZ(12,"mat-form-field",9)(13,"mat-label"),e.SDv(14,10),e.qZA(),e.TgZ(15,"mat-date-range-input",11),e._UZ(16,"input",12)(17,"input",13),e.qZA(),e.TgZ(18,"mat-hint"),e._uU(19,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(20,"mat-datepicker-toggle",14)(21,"mat-date-range-picker",null,15),e.qZA()(),e.TgZ(23,"div",2),e._UZ(24,"medisy-form-field-sex",16)(25,"sz-ui-form-field-input",17),e.qZA(),e._UZ(26,"sz-ui-form-field-input",18),e.qZA()(),e._UZ(27,"sz-ui-dialog-actions",19)),2&n){const o=e.MAs(22);e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(13),e.Q6J("rangePicker",o)("comparisonStart",s.form.controls.startBirthDate.value)("comparisonEnd",s.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",o),e.xp6(7),e.Q6J("actions",s.actions)}},dependencies:[_.UX,_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,L.su,Z.Y,X.t,z.g,G.g,m.lN,m.KE,m.hX,m.bx,m.R9,d.FA,d.nW,d.wx,d.zY,d.By,d._g,i.Is,i.xY,U.V,v.d,y.t],encapsulation:2}),a})();var J=t(8359),x=t(3144),b=t(2516);const Q=[{path:"",component:(()=>{class a{constructor(n,s,o,M){this.dialog=n,this.mpplService=s,this.typeI18nPipe=o,this.personNamePipe=M,this.dataSource=new P.b2(R.J.paged()),this.dataSource.columns=[P.UC.hyperlink("names.firstName","Name",l=>l.id,l=>M.transform(l),!1),P.UC.text("sex","Sex",l=>o.transform(l.sex)),P.UC.date("birthDate","BirthDate")],this.get()}openFilterComponent(){this.dialog.open(B,{data:this.dataSource.filterModel}).afterClosed().pipe((0,c.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openPersonScanComponent(){this.dialog.open($.x).afterClosed().pipe((0,c.q)(1)).subscribe(s=>{s&&(this.dataSource.filterModel=R.J.paged(),this.dataSource.filterModel.ssn=s.ssn,this.get())})}get(){this.mpplService.persons.get(this.dataSource.filterModel).pipe((0,F.sU)(this.dataSource.indicator),(0,c.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(i.uw),e.Y36(u.i),e.Y36(I.y),e.Y36(p.Y))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-people-persons"]],features:[e._Bn([I.y,f.uU,p.Y])],decls:8,vars:4,consts:function(){let r;return r="Persons",[["start","",1,"sz-h5"],r,[3,"dataSource","search","filter"],["end","","mat-icon-button","",3,"click"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return s.openPersonScanComponent()}),e.TgZ(5,"mat-icon"),e._uU(6,"barcode"),e.qZA()()(),e.TgZ(7,"sz-ui-table",4),e.NdJ("update",function(){return s.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[O.RK,J.K,x.f,b.z,T.Hw],encapsulation:2}),a})()}];let j=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[u.i],imports:[f.ez,E.Bz.forChild(Q),i.Is,O.ot,P.Vn,g.E3,C.n,T.Ps]}),a})()},9060:(Y,N,t)=>{t.d(N,{Y:()=>O});var f=t(5879);let O=(()=>{class i{transform(E,u=!1){if(!E.names||0===E.names.length)return`${E.id}`;const g=E.names[0].firstName,C=E.names[0].lastName,P=C?`${g} ${C}`:`${g}`;return u&&E.birthDate?""+(+new Date-+E.birthDate):P}}return i.\u0275fac=function(E){return new(E||i)},i.\u0275pipe=f.Yjl({name:"personName",type:i,pure:!0,standalone:!0}),i})()}}]);