"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(S,M,e)=>{e.r(M),e.d(M,{PersonModule:()=>G});var t=e(6814),s=e(6223),p=e(2296),d=e(5195),a=e(7700),o=e(6385),P=e(617),h=e(7988),f=e(8109),g=e(5348),O=e(758),E=e(2595),l=e(3576),i=e(5041),m=e(5807),C=e(5738),D=e(2430),I=e(5703),A=e(2764),F=e(9598),y=e(7398),L=e(8180),z=e(7553),R=e(2160),U=e(5741),$=e(9004),B=e(1122),n=e(5879),Y=e(4622),X=e(6091),Z=e(5974);let K=(()=>{class r extends l.Ku{constructor(u,c,N,T){super(N),this.personService=u,this.fb=c,this.dialog=N,this.data=T,this.form=c.group({sex:[T.sex,[s.kI.required]],languageId:[T.languageId,[s.kI.required]],title:[T.title,[]],ssn:[T.ssn,[]],nationalityId:[T.nationalityId,[]],birthDate:[T.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.personService.update(this.data.id,this.form.value))}}return r.\u0275fac=function(u){return new(u||r)(n.Y36(g.R),n.Y36(s.qu),n.Y36(a.so),n.Y36(a.WI))},r.\u0275cmp=n.Xpm({type:r,selectors:[["medisy-people-person-save"]],standalone:!0,features:[n._Bn([]),n.qOj,n.jDz],decls:12,vars:3,consts:function(){let v,u,c;return v="SSN",u="Title",c="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",v],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",u],["formControlName","birthDate","label",c],[3,"actions"]]},template:function(u,c){1&u&&(n._UZ(0,"sz-ui-dialog-header",0),n.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),n._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),n.qZA(),n._UZ(6,"medisy-form-field-language",5),n.TgZ(7,"div",2),n._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),n.qZA(),n._UZ(10,"sz-ui-form-field-date",8),n.qZA()(),n._UZ(11,"sz-ui-dialog-actions",9)),2&u&&(n.Q6J("header",c.header),n.xp6(2),n.Q6J("formGroup",c.form),n.xp6(9),n.Q6J("actions",c.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,l.su,Y.Y,X.t,$.g,Z.g,a.Is,a.xY,R.V,B.L,U.t,z.d],encapsulation:2}),r})();var x=e(6128),W=e(2516),J=e(9060);function V(r,v){1&r&&n._UZ(0,"sz-ui-card",4),2&r&&n.Q6J("card",v.$implicit)}const j=[{path:"",component:(()=>{class r{constructor(u,c,N,T){this.dialog=u,this.analysisService=c,this.route=N,this.router=T,this.items=[],this.personMenu=I.B.more([A.N.edit(()=>this.openSaveComponent()),A.N.divider(),A.N.custom("Names","info",()=>this.navigate("names")),A.N.custom("Phones","phone",()=>this.navigate("phones")),A.N.custom("Emails","alternate_email",()=>this.navigate("emails")),A.N.custom("Addresses","home",()=>this.navigate("addresses")),A.N.custom("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const _={title:0,type:D.k.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(_),this.getAnalysisCount(_)}navigate(u){this.router.navigate([u],{relativeTo:this.route})}getAnalysisCount(u){this.analysisService.get({...F.J.count(),personIds:[this.person.id]}).pipe((0,y.U)(c=>c.count)).subscribe(c=>{u.title=c})}openSaveComponent(){this.dialog.open(K,{data:this.person}).afterClosed().pipe((0,L.q)(1)).subscribe(c=>{c&&(this.person=c)})}}return r.\u0275fac=function(u){return new(u||r)(n.Y36(a.uw),n.Y36(C.K),n.Y36(f.gz),n.Y36(f.F0))},r.\u0275cmp=n.Xpm({type:r,selectors:[["medisy-peopel-person"]],features:[n._Bn([C.K])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(u,c){1&u&&(n.TgZ(0,"sz-ui-header-basic")(1,"h5",0),n._uU(2),n.ALo(3,"personName"),n.qZA(),n._UZ(4,"sz-ui-menu",1),n.qZA(),n.TgZ(5,"div",2),n.YNc(6,V,1,1,"sz-ui-card",3),n.qZA()),2&u&&(n.xp6(2),n.Oqu(n.lcZ(3,3,c.person)),n.xp6(2),n.Q6J("menu",c.personMenu),n.xp6(2),n.Q6J("ngForOf",c.items))},dependencies:[t.sg,x.X,W.z,m.i,J.Y],encapsulation:2}),r})()},{path:"names",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(247)]).then(e.bind(e,2247)).then(r=>r.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(961)]).then(e.bind(e,1961)).then(r=>r.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(814)]).then(e.bind(e,1814)).then(r=>r.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(767)]).then(e.bind(e,3767)).then(r=>r.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([e.e(572),e.e(986),e.e(592),e.e(396)]).then(e.bind(e,4396)).then(r=>r.PersonAddressesComponent)}];let G=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({providers:[g.R],imports:[t.ez,s.u5,f.Bz.forChild(j),d.QW,P.Ps,E.V,O.E3,l.su,i.n,h.Tx,o.t,a.Is,p.ot,m.i]}),r})()},7553:(S,M,e)=>{e.d(M,{d:()=>g});var t=e(6814),s=e(6223),p=e(926),d=e(6893),a=e(8930),o=e(9598),P=e(8721),h=e(8180),f=e(5879);let g=(()=>{class O extends d.m{constructor(l,i){super(l),this.ngControl=l,this.languageService=i,this.label="Language",this.contentFormat=m=>m.name,this.valueFormat=m=>m.id,this.items$=this.languageService.getItems(o.J.unpagedSorted("name")).pipe((0,h.q)(1),(0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return O.\u0275fac=function(l){return new(l||O)(f.Y36(s.a5,10),f.Y36(p.T))},O.\u0275cmp=f.Xpm({type:O,selectors:[["medisy-form-field-language"]],standalone:!0,features:[f._Bn([p.T]),f.qOj,f.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(l,i){1&l&&(f._UZ(0,"sz-ui-form-field-select",0),f.ALo(1,"async")),2&l&&f.Q6J("formControl",i.control)("indicator",i.indicator)("items",f.lcZ(1,9,i.items$))("label",i.label)("placeholder",i.placeholder)("emptyOption",i.emptyOption)("multiple",i.multiple)("contentFn",i.contentFormat)("valueFn",i.valueFormat)},dependencies:[t.ez,t.Ov,s.UX,s.JJ,s.oH,a.E],encapsulation:2}),O})()},2160:(S,M,e)=>{e.d(M,{V:()=>E});var t=e(6814),s=e(6223),p=e(2462),d=e(5879),a=e(9862);let o=(()=>{class l extends p.p{constructor(m){super(m,"medisy-people/v1/nationalities"),this.http=m}}return l.\u0275fac=function(m){return new(m||l)(d.LFG(a.eN))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})();var P=e(6893),h=e(8930),f=e(9598),g=e(8721),O=e(8180);let E=(()=>{class l extends P.m{constructor(m,C){super(m),this.ngControl=m,this.nationalityService=C,this.label="Nationality",this.contentFormat=D=>D.name,this.valueFormat=D=>D.id,this.items$=this.nationalityService.getItems(f.J.unpagedSorted("name")).pipe((0,O.q)(1),(0,g.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return l.\u0275fac=function(m){return new(m||l)(d.Y36(s.a5,10),d.Y36(o))},l.\u0275cmp=d.Xpm({type:l,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[d._Bn([o]),d.qOj,d.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(m,C){1&m&&(d._UZ(0,"sz-ui-form-field-select",0),d.ALo(1,"async")),2&m&&d.Q6J("formControl",C.control)("indicator",C.indicator)("items",d.lcZ(1,9,C.items$))("label",C.label)("placeholder",C.placeholder)("emptyOption",C.emptyOption)("multiple",C.multiple)("contentFn",C.contentFormat)("valueFn",C.valueFormat)},dependencies:[t.ez,t.Ov,s.UX,s.JJ,s.oH,h.E],encapsulation:2}),l})()},5741:(S,M,e)=>{e.d(M,{t:()=>P});var t=e(6223),s=e(173),p=e(9155),d=e(6893),a=e(8930),o=e(5879);let P=(()=>{class h extends d.m{constructor(g,O){super(g),this.ngControl=g,this.sexI18nPipe=O,this.items=Object.keys(p.m).map(E=>p.m[E]),this.label="Sex",this.contentFormat=E=>this.sexI18nPipe.transform(E)}ngOnInit(){this.control=this.ngControl.control}}return h.\u0275fac=function(g){return new(g||h)(o.Y36(t.a5,10),o.Y36(s.x))},h.\u0275cmp=o.Xpm({type:h,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[o._Bn([s.x]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(g,O){1&g&&o._UZ(0,"sz-ui-form-field-select",0),2&g&&o.Q6J("formControl",O.control)("items",O.items)("label",O.label)("placeholder",O.placeholder)("emptyOption",O.emptyOption)("multiple",O.multiple)("contentFn",O.contentFormat)},dependencies:[t.UX,t.JJ,t.oH,a.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),h})()},173:(S,M,e)=>{e.d(M,{x:()=>d});var t=e(1646),s=e(9155),p=e(5879);let d=(()=>{class a{transform(P){switch(P){case s.m.Female:return "Female";case s.m.Male:return "Male";case t.n.BankCard:return "Bank Card";case t.n.DriverLicense:return "Driver License";case t.n.NationalCard:return "National Card";case t.n.Passport:return "Passport";case t.n.TravelDocument:return "Travel Document";case t.n.Other:return "Other";default:return""}}}return a.\u0275fac=function(P){return new(P||a)},a.\u0275pipe=p.Yjl({name:"peopleI18n",type:a,pure:!0,standalone:!0}),a})()},926:(S,M,e)=>{e.d(M,{T:()=>d});var t=e(2462),s=e(5879),p=e(9862);let d=(()=>{class a extends t.p{constructor(P){super(P,"medisy-people/v1/languages"),this.http=P}}return a.\u0275fac=function(P){return new(P||a)(s.LFG(p.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})()},1646:(S,M,e)=>{e.d(M,{n:()=>t});var t=(()=>((t=t||{}).NationalCard="NationalCard",t.BankCard="BankCard",t.DriverLicense="DriverLicense",t.Passport="Passport",t.TravelDocument="TravelDocument",t.Other="Other",t))()},9155:(S,M,e)=>{e.d(M,{m:()=>t});var t=(()=>((t=t||{}).Male="Male",t.Female="Female",t))()},8873:(S,M,e)=>{e.d(M,{L:()=>O});var t=e(6814),s=e(6223),p=e(9157),d=e(2032),a=e(2757),o=e(5879);function P(E,l){if(1&E&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&E){const i=o.oxw();o.xp6(1),o.Oqu(i.label)}}function h(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function f(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function g(E,l){1&E&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let O=(()=>{class E extends a.l{constructor(i){super(i),this.ngControl=i}ngOnInit(){this.control=this.ngControl.control}writeValue(i){this.value=i}}return E.\u0275fac=function(i){return new(i||E)(o.Y36(s.a5,10))},E.\u0275cmp=o.Xpm({type:E,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[o.qOj,o.jDz],decls:7,vars:7,consts:function(){let l,i,m;return l="This field is required",i="This field has insufficient length",m="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,i,m]},template:function(i,m){1&i&&(o.TgZ(0,"mat-form-field",0),o.YNc(1,P,2,1,"mat-label",1),o.TgZ(2,"textarea",2),o._uU(3,"  "),o.qZA(),o.YNc(4,h,2,0,"mat-error",1),o.YNc(5,f,2,0,"mat-error",1),o.YNc(6,g,2,0,"mat-error",1),o.qZA()),2&i&&(o.xp6(1),o.Q6J("ngIf",m.label),o.xp6(1),o.Q6J("formControl",m.control)("value",m.value)("placeholder",m.placeholder),o.xp6(2),o.Q6J("ngIf",m.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",m.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",m.control.hasError("maxlength")))},dependencies:[t.ez,t.O5,s.UX,s.Fj,s.JJ,s.oH,p.lN,p.KE,p.hX,p.TO,d.c,d.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),E})()},9004:(S,M,e)=>{e.d(M,{g:()=>d});var t=e(5974),s=e(8873),p=e(5879);let d=(()=>{class a{}return a.\u0275fac=function(P){return new(P||a)},a.\u0275mod=p.oAB({type:a}),a.\u0275inj=p.cJS({imports:[t.g,s.L]}),a})()}}]);