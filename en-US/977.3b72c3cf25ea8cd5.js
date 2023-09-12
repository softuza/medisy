"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(T,M,e)=>{e.r(M),e.d(M,{PersonModule:()=>G});var m=e(6814),t=e(6223),f=e(2296),a=e(5195),r=e(7700),o=e(6385),P=e(617),S=e(7988),p=e(8109),C=e(5348),O=e(758),E=e(2595),s=e(3576),l=e(5041),d=e(5807),g=e(5738),I=e(2430),D=e(5703),A=e(2764),_=e(9598),y=e(7398),L=e(8180),z=e(7553),R=e(2160),U=e(5741),B=e(9004),$=e(1122),n=e(5879),Y=e(4622),X=e(6091),Z=e(5974);let x=(()=>{class i extends s.Ku{constructor(u,c,N,v){super(N),this.personService=u,this.fb=c,this.dialog=N,this.data=v,this.form=c.group({sex:[v.sex,[t.kI.required]],languageId:[v.languageId,[t.kI.required]],title:[v.title,[]],ssn:[v.ssn,[]],nationalityId:[v.nationalityId,[]],birthDate:[v.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return i.\u0275fac=function(u){return new(u||i)(n.Y36(C.R),n.Y36(t.qu),n.Y36(r.so),n.Y36(r.WI))},i.\u0275cmp=n.Xpm({type:i,selectors:[["medisy-people-person-save"]],standalone:!0,features:[n._Bn([]),n.qOj,n.jDz],decls:12,vars:3,consts:function(){let h,u,c;return h="SSN",u="Title",c="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",h],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",u],["formControlName","birthDate","label",c],[3,"actions"]]},template:function(u,c){1&u&&(n._UZ(0,"sz-ui-dialog-header",0),n.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),n._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),n.qZA(),n._UZ(6,"medisy-form-field-language",5),n.TgZ(7,"div",2),n._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),n.qZA(),n._UZ(10,"sz-ui-form-field-date",8),n.qZA()(),n._UZ(11,"sz-ui-dialog-actions",9)),2&u&&(n.Q6J("header",c.header),n.xp6(2),n.Q6J("formGroup",c.form),n.xp6(9),n.Q6J("actions",c.actions))},dependencies:[t.UX,t._Y,t.JJ,t.JL,t.sg,t.u,s.su,Y.Y,X.t,B.g,Z.g,r.Is,r.xY,R.V,$.L,U.t,z.d],encapsulation:2}),i})();var K=e(6128),W=e(2516),J=e(9060);function V(i,h){1&i&&n._UZ(0,"sz-ui-card",4),2&i&&n.Q6J("card",h.$implicit)}const j=[{path:"",component:(()=>{class i{constructor(u,c,N,v){this.dialog=u,this.analysisService=c,this.route=N,this.router=v,this.items=[],this.personMenu=D.B.more([A.N.edit(()=>this.openSaveComponent()),A.N.divider(),A.N.custom("Names","info",()=>this.navigate("names")),A.N.custom("Phones","phone",()=>this.navigate("phones")),A.N.custom("Emails","alternate_email",()=>this.navigate("emails")),A.N.custom("Addresses","home",()=>this.navigate("addresses")),A.N.custom("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const F={title:0,type:I.k.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(F),this.getAnalysisCount(F)}navigate(u){this.router.navigate([u],{relativeTo:this.route})}getAnalysisCount(u){this.analysisService.get({..._.J.count(),personIds:[this.person.id]}).pipe((0,y.U)(c=>c.count)).subscribe(c=>{u.title=c})}openSaveComponent(){this.dialog.open(x,{data:this.person}).afterClosed().pipe((0,L.q)(1)).subscribe(c=>{c&&(this.person=c)})}}return i.\u0275fac=function(u){return new(u||i)(n.Y36(r.uw),n.Y36(g.K),n.Y36(p.gz),n.Y36(p.F0))},i.\u0275cmp=n.Xpm({type:i,selectors:[["medisy-peopel-person"]],features:[n._Bn([g.K])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(u,c){1&u&&(n.TgZ(0,"sz-ui-header-basic")(1,"h5",0),n._uU(2),n.ALo(3,"personName"),n.qZA(),n._UZ(4,"sz-ui-menu",1),n.qZA(),n.TgZ(5,"div",2),n.YNc(6,V,1,1,"sz-ui-card",3),n.qZA()),2&u&&(n.xp6(2),n.Oqu(n.lcZ(3,3,c.person)),n.xp6(2),n.Q6J("menu",c.personMenu),n.xp6(2),n.Q6J("ngForOf",c.items))},dependencies:[m.sg,K.X,W.z,d.i,J.Y],encapsulation:2}),i})()},{path:"names",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(247)]).then(e.bind(e,2247)).then(i=>i.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(961)]).then(e.bind(e,1961)).then(i=>i.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(814)]).then(e.bind(e,1814)).then(i=>i.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(699)]).then(e.bind(e,9699)).then(i=>i.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(396)]).then(e.bind(e,4396)).then(i=>i.PersonAddressesComponent)}];let G=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[C.R],imports:[m.ez,t.u5,p.Bz.forChild(j),a.QW,P.Ps,E.V,O.E3,s.su,l.n,S.Tx,o.t,r.Is,f.ot,d.i]}),i})()},7553:(T,M,e)=>{e.d(M,{d:()=>C});var m=e(6814),t=e(6223),f=e(926),a=e(6893),r=e(8930),o=e(9598),P=e(8721),S=e(8180),p=e(5879);let C=(()=>{class O extends a.m{constructor(s,l){super(s),this.ngControl=s,this.languageService=l,this.label="Language",this.contentFormat=d=>d.name,this.valueFormat=d=>d.id,this.items$=this.languageService.getItems(o.J.unpagedSorted("name")).pipe((0,S.q)(1),(0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return O.\u0275fac=function(s){return new(s||O)(p.Y36(t.a5,10),p.Y36(f.T))},O.\u0275cmp=p.Xpm({type:O,selectors:[["medisy-form-field-language"]],standalone:!0,features:[p._Bn([f.T]),p.qOj,p.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(s,l){1&s&&(p._UZ(0,"sz-ui-form-field-select",0),p.ALo(1,"async")),2&s&&p.Q6J("formControl",l.control)("indicator",l.indicator)("items",p.lcZ(1,9,l.items$))("label",l.label)("placeholder",l.placeholder)("emptyOption",l.emptyOption)("multiple",l.multiple)("contentFn",l.contentFormat)("valueFn",l.valueFormat)},dependencies:[m.ez,m.Ov,t.UX,t.JJ,t.oH,r.E],encapsulation:2}),O})()},2160:(T,M,e)=>{e.d(M,{V:()=>E});var m=e(6814),t=e(6223),f=e(4949),a=e(5879),r=e(9862);let o=(()=>{class s extends f.e{constructor(d){super(d,"medisy-people/v1/nationalities"),this.http=d}}return s.\u0275fac=function(d){return new(d||s)(a.LFG(r.eN))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac}),s})();var P=e(6893),S=e(8930),p=e(9598),C=e(8721),O=e(8180);let E=(()=>{class s extends P.m{constructor(d,g){super(d),this.ngControl=d,this.nationalityService=g,this.label="Nationality",this.contentFormat=I=>I.name,this.valueFormat=I=>I.id,this.items$=this.nationalityService.getItems(p.J.unpagedSorted("name")).pipe((0,O.q)(1),(0,C.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return s.\u0275fac=function(d){return new(d||s)(a.Y36(t.a5,10),a.Y36(o))},s.\u0275cmp=a.Xpm({type:s,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[a._Bn([o]),a.qOj,a.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(d,g){1&d&&(a._UZ(0,"sz-ui-form-field-select",0),a.ALo(1,"async")),2&d&&a.Q6J("formControl",g.control)("indicator",g.indicator)("items",a.lcZ(1,9,g.items$))("label",g.label)("placeholder",g.placeholder)("emptyOption",g.emptyOption)("multiple",g.multiple)("contentFn",g.contentFormat)("valueFn",g.valueFormat)},dependencies:[m.ez,m.Ov,t.UX,t.JJ,t.oH,S.E],encapsulation:2}),s})()},5741:(T,M,e)=>{e.d(M,{t:()=>P});var m=e(6223),t=e(5746),f=e(9155),a=e(6893),r=e(8930),o=e(5879);let P=(()=>{class S extends a.m{constructor(C,O){super(C),this.ngControl=C,this.sexI18nPipe=O,this.items=Object.keys(f.m).map(E=>f.m[E]),this.label="Sex",this.contentFormat=E=>this.sexI18nPipe.transform(E)}ngOnInit(){this.control=this.ngControl.control}}return S.\u0275fac=function(C){return new(C||S)(o.Y36(m.a5,10),o.Y36(t.l))},S.\u0275cmp=o.Xpm({type:S,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[o._Bn([t.l]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(C,O){1&C&&o._UZ(0,"sz-ui-form-field-select",0),2&C&&o.Q6J("formControl",O.control)("items",O.items)("label",O.label)("placeholder",O.placeholder)("emptyOption",O.emptyOption)("multiple",O.multiple)("contentFn",O.contentFormat)},dependencies:[m.UX,m.JJ,m.oH,r.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),S})()},5746:(T,M,e)=>{e.d(M,{l:()=>f});var m=e(9155),t=e(5879);let f=(()=>{class a{transform(o){switch(o){case m.m.Female:return "Female";case m.m.Male:return "Male";default:return""}}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=t.Yjl({name:"sexI18n",type:a,pure:!0,standalone:!0}),a})()},926:(T,M,e)=>{e.d(M,{T:()=>a});var m=e(4949),t=e(5879),f=e(9862);let a=(()=>{class r extends m.e{constructor(P){super(P,"medisy-people/v1/languages"),this.http=P}}return r.\u0275fac=function(P){return new(P||r)(t.LFG(f.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})()},9155:(T,M,e)=>{e.d(M,{m:()=>m});var m=(()=>((m=m||{}).Male="Male",m.Female="Female",m))()},8873:(T,M,e)=>{e.d(M,{L:()=>O});var m=e(6814),t=e(6223),f=e(9157),a=e(2032),r=e(2757),o=e(5879);function P(E,s){if(1&E&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&E){const l=o.oxw();o.xp6(1),o.Oqu(l.label)}}function S(E,s){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function p(E,s){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function C(E,s){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let O=(()=>{class E extends r.l{constructor(l){super(l),this.ngControl=l}ngOnInit(){this.control=this.ngControl.control}writeValue(l){this.value=l}}return E.\u0275fac=function(l){return new(l||E)(o.Y36(t.a5,10))},E.\u0275cmp=o.Xpm({type:E,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[o.qOj,o.jDz],decls:7,vars:7,consts:function(){let s,l,d;return s="This field is required",l="This field has insufficient length",d="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],s,l,d]},template:function(l,d){1&l&&(o.TgZ(0,"mat-form-field",0),o.YNc(1,P,2,1,"mat-label",1),o.TgZ(2,"textarea",2),o._uU(3,"  "),o.qZA(),o.YNc(4,S,2,0,"mat-error",1),o.YNc(5,p,2,0,"mat-error",1),o.YNc(6,C,2,0,"mat-error",1),o.qZA()),2&l&&(o.xp6(1),o.Q6J("ngIf",d.label),o.xp6(1),o.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),o.xp6(2),o.Q6J("ngIf",d.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",d.control.hasError("maxlength")))},dependencies:[m.ez,m.O5,t.UX,t.Fj,t.JJ,t.oH,f.lN,f.KE,f.hX,f.TO,a.c,a.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),E})()},9004:(T,M,e)=>{e.d(M,{g:()=>a});var m=e(5974),t=e(8873),f=e(5879);let a=(()=>{class r{}return r.\u0275fac=function(P){return new(P||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[m.g,t.L]}),r})()}}]);