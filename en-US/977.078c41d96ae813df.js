"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(T,M,e)=>{e.r(M),e.d(M,{PersonModule:()=>Q});var m=e(6814),t=e(6223),p=e(2296),a=e(5195),r=e(7700),o=e(6385),P=e(617),S=e(7988),O=e(8109),C=e(465),c=e(5348),E=e(758),l=e(2595),s=e(3576),d=e(5041),g=e(5807),I=e(5738),D=e(2430),y=e(5703),A=e(2764),_=e(9598),L=e(7398),z=e(8180),R=e(7553),U=e(2160),B=e(5741),$=e(9004),Y=e(1122),n=e(5879),X=e(4622),Z=e(6091),x=e(5974);let K=(()=>{class i extends s.Ku{constructor(u,f,N,v){super(N),this.personService=u,this.fb=f,this.dialog=N,this.data=v,this.form=f.group({sex:[v.sex,[t.kI.required]],languageId:[v.languageId,[t.kI.required]],title:[v.title,[]],ssn:[v.ssn,[]],nationalityId:[v.nationalityId,[]],birthDate:[v.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return i.\u0275fac=function(u){return new(u||i)(n.Y36(c.R),n.Y36(t.qu),n.Y36(r.so),n.Y36(r.WI))},i.\u0275cmp=n.Xpm({type:i,selectors:[["medisy-people-person-save"]],standalone:!0,features:[n._Bn([]),n.qOj,n.jDz],decls:12,vars:3,consts:function(){let h,u,f;return h="SSN",u="Title",f="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",h],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",u],["formControlName","birthDate","label",f],[3,"actions"]]},template:function(u,f){1&u&&(n._UZ(0,"sz-ui-dialog-header",0),n.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),n._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),n.qZA(),n._UZ(6,"medisy-form-field-language",5),n.TgZ(7,"div",2),n._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),n.qZA(),n._UZ(10,"sz-ui-form-field-date",8),n.qZA()(),n._UZ(11,"sz-ui-dialog-actions",9)),2&u&&(n.Q6J("header",f.header),n.xp6(2),n.Q6J("formGroup",f.form),n.xp6(9),n.Q6J("actions",f.actions))},dependencies:[t.UX,t._Y,t.JJ,t.JL,t.sg,t.u,s.su,X.Y,Z.t,$.g,x.g,r.Is,r.xY,U.V,Y.L,B.t,R.d],encapsulation:2}),i})();var W=e(6128),J=e(2516),V=e(9060);function j(i,h){1&i&&n._UZ(0,"sz-ui-card",4),2&i&&n.Q6J("card",h.$implicit)}const G=[{path:"",component:(()=>{class i{constructor(u,f,N,v){this.dialog=u,this.analysisService=f,this.route=N,this.router=v,this.items=[],this.personMenu=y.B.more([A.N.edit(()=>this.openSaveComponent()),A.N.divider(),A.N.custom("Names","info",()=>this.navigate("names")),A.N.custom("Phones","phone",()=>this.navigate("phones")),A.N.custom("Emails","alternate_email",()=>this.navigate("emails")),A.N.custom("Addresses","home",()=>this.navigate("addresses")),A.N.custom("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const F={title:0,type:D.k.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(F),this.getAnalysisCount(F)}navigate(u){this.router.navigate([u],{relativeTo:this.route})}getAnalysisCount(u){this.analysisService.get({..._.J.count(),personIds:[this.person.id]}).pipe((0,L.U)(f=>f.count)).subscribe(f=>{u.title=f})}openSaveComponent(){this.dialog.open(K,{data:this.person}).afterClosed().pipe((0,z.q)(1)).subscribe(f=>{f&&(this.person=f)})}}return i.\u0275fac=function(u){return new(u||i)(n.Y36(r.uw),n.Y36(I.K),n.Y36(O.gz),n.Y36(O.F0))},i.\u0275cmp=n.Xpm({type:i,selectors:[["medisy-peopel-person"]],features:[n._Bn([I.K])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(u,f){1&u&&(n.TgZ(0,"sz-ui-header-basic")(1,"h5",0),n._uU(2),n.ALo(3,"personName"),n.qZA(),n._UZ(4,"sz-ui-menu",1),n.qZA(),n.TgZ(5,"div",2),n.YNc(6,j,1,1,"sz-ui-card",3),n.qZA()),2&u&&(n.xp6(2),n.Oqu(n.lcZ(3,3,f.person)),n.xp6(2),n.Q6J("menu",f.personMenu),n.xp6(2),n.Q6J("ngForOf",f.items))},dependencies:[m.sg,W.X,J.z,g.i,V.Y],encapsulation:2}),i})()},{path:"names",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(247)]).then(e.bind(e,2247)).then(i=>i.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(961)]).then(e.bind(e,1961)).then(i=>i.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(814)]).then(e.bind(e,1814)).then(i=>i.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(699)]).then(e.bind(e,9699)).then(i=>i.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(396)]).then(e.bind(e,4396)).then(i=>i.PersonAddressesComponent)}];let Q=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[c.R],imports:[m.ez,t.u5,O.Bz.forChild(G),a.QW,P.Ps,l.V,E.E3,s.su,d.n,S.Tx,o.t,r.Is,p.ot,C.X,g.i]}),i})()},7553:(T,M,e)=>{e.d(M,{d:()=>C});var m=e(6814),t=e(6223),p=e(926),a=e(6893),r=e(8930),o=e(9598),P=e(8721),S=e(8180),O=e(5879);let C=(()=>{class c extends a.m{constructor(l,s){super(l),this.ngControl=l,this.languageService=s,this.label="Language",this.contentFormat=d=>d.name,this.valueFormat=d=>d.id,this.items$=this.languageService.getItems(o.J.unpagedSorted("name")).pipe((0,S.q)(1),(0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return c.\u0275fac=function(l){return new(l||c)(O.Y36(t.a5,10),O.Y36(p.T))},c.\u0275cmp=O.Xpm({type:c,selectors:[["medisy-form-field-language"]],standalone:!0,features:[O._Bn([p.T]),O.qOj,O.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(l,s){1&l&&(O._UZ(0,"sz-ui-form-field-select",0),O.ALo(1,"async")),2&l&&O.Q6J("formControl",s.control)("indicator",s.indicator)("items",O.lcZ(1,9,s.items$))("label",s.label)("placeholder",s.placeholder)("emptyOption",s.emptyOption)("multiple",s.multiple)("contentFn",s.contentFormat)("valueFn",s.valueFormat)},dependencies:[m.ez,m.Ov,t.UX,t.JJ,t.oH,r.E],encapsulation:2}),c})()},2160:(T,M,e)=>{e.d(M,{V:()=>E});var m=e(6814),t=e(6223),p=e(4949),a=e(5879),r=e(9862);let o=(()=>{class l extends p.e{constructor(d){super(d,"medisy-people/v1/nationalities"),this.http=d}}return l.\u0275fac=function(d){return new(d||l)(a.LFG(r.eN))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac}),l})();var P=e(6893),S=e(8930),O=e(9598),C=e(8721),c=e(8180);let E=(()=>{class l extends P.m{constructor(d,g){super(d),this.ngControl=d,this.nationalityService=g,this.label="Nationality",this.contentFormat=I=>I.name,this.valueFormat=I=>I.id,this.items$=this.nationalityService.getItems(O.J.unpagedSorted("name")).pipe((0,c.q)(1),(0,C.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return l.\u0275fac=function(d){return new(d||l)(a.Y36(t.a5,10),a.Y36(o))},l.\u0275cmp=a.Xpm({type:l,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[a._Bn([o]),a.qOj,a.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(d,g){1&d&&(a._UZ(0,"sz-ui-form-field-select",0),a.ALo(1,"async")),2&d&&a.Q6J("formControl",g.control)("indicator",g.indicator)("items",a.lcZ(1,9,g.items$))("label",g.label)("placeholder",g.placeholder)("emptyOption",g.emptyOption)("multiple",g.multiple)("contentFn",g.contentFormat)("valueFn",g.valueFormat)},dependencies:[m.ez,m.Ov,t.UX,t.JJ,t.oH,S.E],encapsulation:2}),l})()},5741:(T,M,e)=>{e.d(M,{t:()=>P});var m=e(6223),t=e(5746),p=e(9155),a=e(6893),r=e(8930),o=e(5879);let P=(()=>{class S extends a.m{constructor(C,c){super(C),this.ngControl=C,this.sexI18nPipe=c,this.items=Object.keys(p.m).map(E=>p.m[E]),this.label="Sex",this.contentFormat=E=>this.sexI18nPipe.transform(E)}ngOnInit(){this.control=this.ngControl.control}}return S.\u0275fac=function(C){return new(C||S)(o.Y36(m.a5,10),o.Y36(t.l))},S.\u0275cmp=o.Xpm({type:S,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[o._Bn([t.l]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(C,c){1&C&&o._UZ(0,"sz-ui-form-field-select",0),2&C&&o.Q6J("formControl",c.control)("items",c.items)("label",c.label)("placeholder",c.placeholder)("emptyOption",c.emptyOption)("multiple",c.multiple)("contentFn",c.contentFormat)},dependencies:[m.UX,m.JJ,m.oH,r.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),S})()},5746:(T,M,e)=>{e.d(M,{l:()=>p});var m=e(9155),t=e(5879);let p=(()=>{class a{transform(o){switch(o){case m.m.Female:return "Female";case m.m.Male:return "Male";default:return""}}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=t.Yjl({name:"sexI18n",type:a,pure:!0,standalone:!0}),a})()},926:(T,M,e)=>{e.d(M,{T:()=>a});var m=e(4949),t=e(5879),p=e(9862);let a=(()=>{class r extends m.e{constructor(P){super(P,"medisy-people/v1/languages"),this.http=P}}return r.\u0275fac=function(P){return new(P||r)(t.LFG(p.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})()},9155:(T,M,e)=>{e.d(M,{m:()=>m});var m=(()=>((m=m||{}).Male="Male",m.Female="Female",m))()},8873:(T,M,e)=>{e.d(M,{L:()=>c});var m=e(6814),t=e(6223),p=e(9157),a=e(2032),r=e(2757),o=e(5879);function P(E,l){if(1&E&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&E){const s=o.oxw();o.xp6(1),o.Oqu(s.label)}}function S(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function O(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function C(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let c=(()=>{class E extends r.l{constructor(s){super(s),this.ngControl=s}ngOnInit(){this.control=this.ngControl.control}writeValue(s){this.value=s}}return E.\u0275fac=function(s){return new(s||E)(o.Y36(t.a5,10))},E.\u0275cmp=o.Xpm({type:E,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[o.qOj,o.jDz],decls:7,vars:7,consts:function(){let l,s,d;return l="This field is required",s="This field has insufficient length",d="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,s,d]},template:function(s,d){1&s&&(o.TgZ(0,"mat-form-field",0),o.YNc(1,P,2,1,"mat-label",1),o.TgZ(2,"textarea",2),o._uU(3,"  "),o.qZA(),o.YNc(4,S,2,0,"mat-error",1),o.YNc(5,O,2,0,"mat-error",1),o.YNc(6,C,2,0,"mat-error",1),o.qZA()),2&s&&(o.xp6(1),o.Q6J("ngIf",d.label),o.xp6(1),o.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),o.xp6(2),o.Q6J("ngIf",d.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("maxlength")))},dependencies:[m.ez,m.O5,t.UX,t.Fj,t.JJ,t.oH,p.lN,p.KE,p.hX,p.TO,a.c,a.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),E})()},9004:(T,M,e)=>{e.d(M,{g:()=>a});var m=e(5974),t=e(8873),p=e(5879);let a=(()=>{class r{}return r.\u0275fac=function(P){return new(P||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[m.g,t.L]}),r})()}}]);