"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(K,h,o)=>{o.r(h),o.d(h,{PersonModule:()=>W});var E=o(6814),i=o(6223),u=o(2296),N=o(5195),r=o(7700),p=o(6385),M=o(617),c=o(7988),S=o(8109),f=o(7163),O=o(758),A=o(2595),P=o(3576),T=o(5041),v=o(5807),g=o(6883),y=o(2430),I=o(5703),m=o(2764),z=o(9598),D=o(7398),Y=o(8180),$=o(851),L=o(2670),Z=o(5741),R=o(9004),U=o(1122),n=o(5879),V=o(4622),J=o(6091),X=o(5974);let x=(()=>{class t extends P.Ku{constructor(s,e,d,l){super(d),this.mpplService=s,this.fb=e,this.dialog=d,this.data=l,this.form=e.group({sex:[l.sex,[i.kI.required]],languageId:[l.languageId,[i.kI.required]],title:[l.title,[]],ssn:[l.ssn,[]],nationalityId:[l.nationalityId,[]],birthDate:[l.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value))}}return t.\u0275fac=function(s){return new(s||t)(n.Y36(f.i),n.Y36(i.qu),n.Y36(r.so),n.Y36(r.WI))},t.\u0275cmp=n.Xpm({type:t,selectors:[["medisy-people-person-save"]],standalone:!0,features:[n._Bn([]),n.qOj,n.jDz],decls:12,vars:3,consts:function(){let a,s,e;return a="SSN",s="Title",e="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",a],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",s],["formControlName","birthDate","label",e],[3,"actions"]]},template:function(s,e){1&s&&(n._UZ(0,"sz-ui-dialog-header",0),n.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),n._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),n.qZA(),n._UZ(6,"medisy-form-field-language",5),n.TgZ(7,"div",2),n._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),n.qZA(),n._UZ(10,"sz-ui-form-field-date",8),n.qZA()(),n._UZ(11,"sz-ui-dialog-actions",9)),2&s&&(n.Q6J("header",e.header),n.xp6(2),n.Q6J("formGroup",e.form),n.xp6(9),n.Q6J("actions",e.actions))},dependencies:[i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,P.su,V.Y,J.t,R.g,X.g,r.Is,r.xY,L.V,U.L,Z.t,$.d],encapsulation:2}),t})();var F=o(6128),G=o(2516),B=o(9060);function Q(t,a){1&t&&n._UZ(0,"sz-ui-card",4),2&t&&n.Q6J("card",a.$implicit)}const j=[{path:"",component:(()=>{class t{constructor(s,e,d,l){this.dialog=s,this.mlabService=e,this.route=d,this.router=l,this.items=[],this.personMenu=I.B.more([m.N.edit(()=>this.openSaveComponent()),m.N.divider(),m.N.custom("Names","info",()=>this.navigate("names")),m.N.custom("Phones","phone",()=>this.navigate("phones")),m.N.custom("Emails","alternate_email",()=>this.navigate("emails")),m.N.custom("Addresses","home",()=>this.navigate("addresses")),m.N.custom("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const C={title:0,type:y.k.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(C),this.getAnalysisCount(C)}navigate(s){this.router.navigate([s],{relativeTo:this.route})}getAnalysisCount(s){this.mlabService.analyses.get({...z.J.count(),personIds:[this.person.id]}).pipe((0,D.U)(e=>e.count)).subscribe(e=>{s.title=e})}openSaveComponent(){this.dialog.open(x,{data:this.person}).afterClosed().pipe((0,Y.q)(1)).subscribe(e=>{e&&(this.person=e)})}}return t.\u0275fac=function(s){return new(s||t)(n.Y36(r.uw),n.Y36(g.t),n.Y36(S.gz),n.Y36(S.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["medisy-peopel-person"]],features:[n._Bn([g.t])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(s,e){1&s&&(n.TgZ(0,"sz-ui-header-basic")(1,"h5",0),n._uU(2),n.ALo(3,"personName"),n.qZA(),n._UZ(4,"sz-ui-menu",1),n.qZA(),n.TgZ(5,"div",2),n.YNc(6,Q,1,1,"sz-ui-card",3),n.qZA()),2&s&&(n.xp6(2),n.Oqu(n.lcZ(3,3,e.person)),n.xp6(2),n.Q6J("menu",e.personMenu),n.xp6(2),n.Q6J("ngForOf",e.items))},dependencies:[E.sg,F.X,G.z,v.i,B.Y],encapsulation:2}),t})()},{path:"names",loadComponent:()=>Promise.all([o.e(572),o.e(986),o.e(592),o.e(247)]).then(o.bind(o,2247)).then(t=>t.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([o.e(572),o.e(986),o.e(592),o.e(961)]).then(o.bind(o,1961)).then(t=>t.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([o.e(572),o.e(986),o.e(592),o.e(814)]).then(o.bind(o,1814)).then(t=>t.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([o.e(572),o.e(986),o.e(592),o.e(767)]).then(o.bind(o,3767)).then(t=>t.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([o.e(572),o.e(986),o.e(592),o.e(396)]).then(o.bind(o,4396)).then(t=>t.PersonAddressesComponent)}];let W=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[f.i],imports:[E.ez,i.u5,S.Bz.forChild(j),N.QW,M.Ps,A.V,O.E3,P.su,T.n,c.Tx,p.t,r.Is,u.ot,v.i]}),t})()}}]);