"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[697],{1697:(j,N,o)=>{o.r(N),o.d(N,{PersonsModule:()=>b});var m=o(6814),O=o(2296),r=o(7700),f=o(617),D=o(8109),T=o(2393),A=o(758),h=o(5041),l=o(3562),Y=o(7812),u=o(9060),g=o(365),c=o(9598),$=o(8721),M=o(8180),E=o(6223),P=o(8034),d=o(9157),F=o(2023),v=o(8210),U=o(2818),C=o(9899),z=o(5781),e=o(5879),y=o(4622),Z=o(6091),X=o(5974);let G=(()=>{class i extends C.Z2{constructor(s,n,t){super(n),this.fb=s,this.dialog=n,this.data=t,this.form=s.group({sex:[t.sex],title:[t.title],startBirthDate:[t.startBirthDate],endBirthDate:[t.endBirthDate],firstName:[t.firstName],lastName:[t.lastName],ssn:[t.ssn],nationalityId:[t.nationalityId],languageId:[t.languageId],motherName:[t.motherName],fatherName:[t.fatherName],middleName:[t.middleName],address:[t.address]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(E.qu),e.Y36(r.so),e.Y36(r.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-persons-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:28,vars:7,consts:function(){let s,n,t,a,S,I,R,L,p;return s="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",n="\u0627\u0644\u0643\u0646\u064A\u0629",t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",a="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",S="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",I="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629",R="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",L="\u0627\u0644\u0644\u0642\u0628",p="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",s],["formControlName","lastName","label",n],["formControlName","middleName","label",t],["formControlName","nationalityId"],["formControlName","ssn","label",a],["formControlName","languageId"],[1,"tw-flex-1"],S,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",I,"formControlName","startBirthDate"],["matEndDate","","placeholder",R,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],["formControlName","sex"],["formControlName","title","label",L],["formControlName","address","label",p],[3,"actions"]]},template:function(n,t){if(1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"medisy-form-field-nationality",6)(9,"sz-ui-form-field-input",7),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"medisy-form-field-language",8),e.TgZ(12,"mat-form-field",9)(13,"mat-label"),e.SDv(14,10),e.qZA(),e.TgZ(15,"mat-date-range-input",11),e._UZ(16,"input",12)(17,"input",13),e.qZA(),e.TgZ(18,"mat-hint"),e._uU(19,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(20,"mat-datepicker-toggle",14)(21,"mat-date-range-picker",null,15),e.qZA()(),e.TgZ(23,"div",2),e._UZ(24,"medisy-form-field-sex",16)(25,"sz-ui-form-field-input",17),e.qZA(),e._UZ(26,"sz-ui-form-field-input",18),e.qZA()(),e._UZ(27,"sz-ui-dialog-actions",19)),2&n){const a=e.MAs(22);e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(13),e.Q6J("rangePicker",a)("comparisonStart",t.form.controls.startBirthDate.value)("comparisonEnd",t.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",a),e.xp6(7),e.Q6J("actions",t.actions)}},dependencies:[E.UX,E._Y,E.Fj,E.JJ,E.JL,E.sg,E.u,C.su,y.Y,Z.t,z.g2,X.g,d.lN,d.KE,d.hX,d.bx,d.R9,P.FA,P.nW,P.wx,P.zY,P.By,P._g,r.Is,r.xY,v.V,F.d,U.t],encapsulation:2})}return i})();var B=o(8359),J=o(3144),x=o(2516);const Q=[{path:"",component:(()=>{class i{constructor(s,n,t,a){this.dialog=s,this.mpplService=n,this.typeI18nPipe=t,this.personNamePipe=a,this.dataSource=new l.b2(c.J.paged()),this.dataSource.addRows(l.zP.default([l.UC.hyperlink("names.firstName","\u0627\u0644\u0627\u0633\u0645",S=>S.id,S=>a.transform(S),!1),l.UC.text("sex","\u0627\u0644\u062C\u0646\u0633",S=>t.transform(S.sex)),l.UC.date("birthDate","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629")])),this.get()}openFilterComponent(){this.dialog.open(G,{data:this.dataSource.filterModel}).afterClosed().pipe((0,M.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}openPersonScanComponent(){this.dialog.open(Y.x).afterClosed().pipe((0,M.q)(1)).subscribe(n=>{n&&(this.dataSource.filterModel=c.J.paged(),this.dataSource.filterModel.ssn=n.ssn,this.get())})}get(){this.mpplService.persons.get(this.dataSource.filterModel).pipe((0,$.sU)(this.dataSource.indicator),(0,M.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(r.uw),e.Y36(T.i),e.Y36(g.y),e.Y36(u.Y))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-people-persons"]],features:[e._Bn([g.y,m.uU,u.Y])],decls:8,vars:4,consts:function(){let s;return s="\u0627\u0644\u0623\u0641\u0631\u0627\u062F",[["start","",1,"sz-h5"],s,[3,"dataSource","search","filter"],["end","","mat-icon-button","",3,"click"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,t){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return t.openPersonScanComponent()}),e.TgZ(5,"mat-icon"),e._uU(6,"barcode"),e.qZA()()(),e.TgZ(7,"sz-ui-table",4),e.NdJ("update",function(){return t.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[O.RK,B.K,J.f,x.z,f.Hw],encapsulation:2})}return i})()}];let b=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({providers:[T.i],imports:[m.ez,D.Bz.forChild(Q),r.Is,O.ot,l.Vn,A.E3,h.n,f.Ps]})}return i})()}}]);