"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(v,u,t)=>{t.r(u),t.d(u,{PersonModule:()=>Q});var n=t(6814),s=t(6223),l=t(2296),E=t(5195),i=t(7700),o=t(6385),O=t(617),p=t(7988),a=t(8109),M=t(465),c=t(5348),r=t(758),g=t(2595),T=t(2169),d=t(4110),D=t(5041),_=t(5738),C=t(7398),N=t(8180),y=t(7553),R=t(2160),U=t(5741),F=t(7336),z=t(9004),e=t(5879),$=t(4622),Y=t(6091),Z=t(5974),B=t(1122);let K=(()=>{class m extends d.Ku{constructor(P,S,A,h){super(A),this.personService=P,this.fb=S,this.dialog=A,this.data=h,this.form=S.group({sex:[h.sex,[s.kI.required]],languageId:[h.languageId,[s.kI.required]],title:[h.title,[]],ssn:[h.ssn,[]],nationalityId:[h.nationalityId,[]],birthDate:[h.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return m.\u0275fac=function(P){return new(P||m)(e.Y36(c.R),e.Y36(s.qu),e.Y36(i.so),e.Y36(i.WI))},m.\u0275cmp=e.Xpm({type:m,selectors:[["medisy-people-person-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:12,vars:3,consts:function(){let f,P;return f="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",P="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",f],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],["formControlName","birthDate","label",P],[3,"actions"]]},template:function(P,S){1&P&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"medisy-form-field-language",5),e.TgZ(7,"div",2),e._UZ(8,"medisy-form-field-sex",6)(9,"medisy-form-field-title",7),e.qZA(),e._UZ(10,"sz-ui-form-field-date",8),e.qZA()(),e._UZ(11,"sz-ui-dialog-actions",9)),2&P&&(e.Q6J("header",S.header),e.xp6(2),e.Q6J("formGroup",S.form),e.xp6(9),e.Q6J("actions",S.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,d.su,$.Y,Y.t,z.g,Z.g,B.L,i.Is,i.xY,R.V,U.t,F.e,y.d],encapsulation:2}),m})();var W=t(5850),X=t(2516),J=t(8145),j=t(9060);function G(m,f){if(1&m&&(e.TgZ(0,"sz-ui-card",17),e._UZ(1,"sz-ui-counter",18),e.qZA()),2&m){const P=f.$implicit;e.Q6J("card",P),e.xp6(1),e.Q6J("task$",null==P?null:P.task$)}}const V=[{path:"",component:(()=>{class m{constructor(P,S,A,h){this.dialog=P,this.analysisService=S,this.route=A,this.router=h,this.items=[],this.person=this.route.snapshot.data.person,this.items.push({task$:this.analysisService.getAnalyses({personIds:[this.person.id],pageIndex:1,pageSize:0}).pipe((0,C.U)(L=>L.count)),icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",indicator:!0})}openSaveComponent(){this.dialog.open(K,{data:this.person}).afterClosed().pipe((0,N.q)(1)).subscribe(S=>{S&&(this.person=S)})}}return m.\u0275fac=function(P){return new(P||m)(e.Y36(i.uw),e.Y36(_.K),e.Y36(a.gz),e.Y36(a.F0))},m.\u0275cmp=e.Xpm({type:m,selectors:[["medisy-peopel-person"]],features:[e._Bn([_.K])],decls:42,vars:5,consts:function(){let f,P,S,A,h,L;return f="\u062A\u0639\u062F\u064A\u0644",P="\u0627\u0644\u0627\u0633\u0645\u0627\u0621",S="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",A="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",h="\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646",L="\u0627\u0644\u0648\u062B\u0627\u0626\u0642",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],f,["mat-menu-item","","routerLink","names"],P,["mat-menu-item","","routerLink","phones"],S,["mat-menu-item","","routerLink","emails"],A,["mat-menu-item","","routerLink","addresses"],h,["mat-menu-item","","routerLink","documents"],L,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",3,"task$"]]},template:function(P,S){if(1&P&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e._uU(2),e.ALo(3,"personName"),e.qZA(),e.TgZ(4,"button",1)(5,"mat-icon"),e._uU(6,"more_vert"),e.qZA()(),e.TgZ(7,"mat-menu",null,2)(9,"button",3),e.NdJ("click",function(){return S.openSaveComponent()}),e.TgZ(10,"mat-icon"),e._uU(11,"edit"),e.qZA(),e.TgZ(12,"span"),e.SDv(13,4),e.qZA()(),e._UZ(14,"mat-divider"),e.TgZ(15,"button",5)(16,"mat-icon"),e._uU(17,"info"),e.qZA(),e.TgZ(18,"span"),e.SDv(19,6),e.qZA()(),e.TgZ(20,"button",7)(21,"mat-icon"),e._uU(22,"phone"),e.qZA(),e.TgZ(23,"span"),e.SDv(24,8),e.qZA()(),e.TgZ(25,"button",9)(26,"mat-icon"),e._uU(27,"alternate_email"),e.qZA(),e.TgZ(28,"span"),e.SDv(29,10),e.qZA()(),e.TgZ(30,"button",11)(31,"mat-icon"),e._uU(32,"home"),e.qZA(),e.TgZ(33,"span"),e.SDv(34,12),e.qZA()(),e.TgZ(35,"button",13)(36,"mat-icon"),e._uU(37,"badge"),e.qZA(),e.TgZ(38,"span"),e.SDv(39,14),e.qZA()()()(),e.TgZ(40,"div",15),e.YNc(41,G,2,2,"sz-ui-card",16),e.qZA()),2&P){const A=e.MAs(8);e.xp6(2),e.Oqu(e.lcZ(3,3,S.person)),e.xp6(2),e.Q6J("matMenuTriggerFor",A),e.xp6(37),e.Q6J("ngForOf",S.items)}},dependencies:[n.sg,a.rH,O.Hw,W.X,X.z,J.R,p.VK,p.OP,p.p6,o.d,l.RK,j.Y],encapsulation:2}),m})()},{path:"names",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(247)]).then(t.bind(t,2247)).then(m=>m.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(961)]).then(t.bind(t,1961)).then(m=>m.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(814)]).then(t.bind(t,1814)).then(m=>m.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(699)]).then(t.bind(t,9699)).then(m=>m.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(396)]).then(t.bind(t,4396)).then(m=>m.PersonAddressesComponent)}];let Q=(()=>{class m{}return m.\u0275fac=function(P){return new(P||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({providers:[c.R],imports:[n.ez,s.u5,a.Bz.forChild(V),E.QW,O.Ps,g.V,r.E3,d.su,D.n,T.c,p.Tx,o.t,i.Is,l.ot,M.X]}),m})()},7553:(v,u,t)=>{t.d(u,{d:()=>c});var n=t(6814),s=t(6223),l=t(926),E=t(6893),i=t(9004),o=t(8721),O=t(8180),p=t(7398),a=t(5879),M=t(8930);let c=(()=>{class r extends E.m{constructor(T,d){super(T),this.ngControl=T,this.languageService=d,this.label="\u0627\u0644\u0644\u063A\u0629",this.contentFormat=D=>D.name,this.valueFormat=D=>D.id,this.items$=this.languageService.getLanguages().pipe((0,O.q)(1),(0,p.U)(D=>D.items)).pipe((0,o.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return r.\u0275fac=function(T){return new(T||r)(a.Y36(s.a5,10),a.Y36(l.T))},r.\u0275cmp=a.Xpm({type:r,selectors:[["medisy-form-field-language"]],standalone:!0,features:[a._Bn([l.T]),a.qOj,a.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(T,d){1&T&&(a._UZ(0,"sz-ui-form-field-select",0),a.ALo(1,"async")),2&T&&a.Q6J("formControl",d.control)("indicator",d.indicator)("items",a.lcZ(1,9,d.items$))("label",d.label)("placeholder",d.placeholder)("emptyOption",d.emptyOption)("multiple",d.multiple)("contentFn",d.contentFormat)("valueFn",d.valueFormat)},dependencies:[n.ez,n.Ov,s.UX,s.JJ,s.oH,i.g,M.E],encapsulation:2}),r})()},2160:(v,u,t)=>{t.d(u,{V:()=>T});var n=t(6814),s=t(6223),l=t(9862),E=t(3971),i=t(9598),o=t(5879);let O=(()=>{class d{constructor(_){this.http=_,this.path="medisy-people/v1/nationalities"}getNationalities(_=i.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new l.LE({fromObject:(0,E.c)(_)})})}}return d.\u0275fac=function(_){return new(_||d)(o.LFG(l.eN))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac}),d})();var p=t(6893),a=t(9004),M=t(8721),c=t(8180),r=t(7398),g=t(8930);let T=(()=>{class d extends p.m{constructor(_,C){super(_),this.ngControl=_,this.nationalityService=C,this.label="\u0627\u0644\u062C\u0646\u0633\u064A\u0629",this.contentFormat=N=>N.name,this.valueFormat=N=>N.id,this.items$=this.nationalityService.getNationalities().pipe((0,c.q)(1),(0,r.U)(N=>N.items)).pipe((0,M.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}}return d.\u0275fac=function(_){return new(_||d)(o.Y36(s.a5,10),o.Y36(O))},d.\u0275cmp=o.Xpm({type:d,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[o._Bn([O]),o.qOj,o.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(_,C){1&_&&(o._UZ(0,"sz-ui-form-field-select",0),o.ALo(1,"async")),2&_&&o.Q6J("formControl",C.control)("indicator",C.indicator)("items",o.lcZ(1,9,C.items$))("label",C.label)("placeholder",C.placeholder)("emptyOption",C.emptyOption)("multiple",C.multiple)("contentFn",C.contentFormat)("valueFn",C.valueFormat)},dependencies:[n.ez,n.Ov,s.UX,s.JJ,s.oH,a.g,g.E],encapsulation:2}),d})()},5741:(v,u,t)=>{t.d(u,{t:()=>p});var n=t(6223),s=t(5746),l=t(9155),E=t(6893),i=t(9004),o=t(5879),O=t(8930);let p=(()=>{class a extends E.m{constructor(c,r){super(c),this.ngControl=c,this.sexI18nPipe=r,this.items=Object.keys(l.m).map(g=>l.m[g]),this.label="\u0627\u0644\u062C\u0646\u0633",this.contentFormat=g=>this.sexI18nPipe.transform(g)}ngOnInit(){this.control=this.ngControl.control}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(n.a5,10),o.Y36(s.l))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[o._Bn([s.l]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(c,r){1&c&&o._UZ(0,"sz-ui-form-field-select",0),2&c&&o.Q6J("formControl",r.control)("items",r.items)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)},dependencies:[n.UX,n.JJ,n.oH,i.g,O.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})()},7336:(v,u,t)=>{t.d(u,{e:()=>p});var n=t(6223),s=t(1886),l=t(6439),E=t(6893),i=t(9004),o=t(5879),O=t(8930);let p=(()=>{class a extends E.m{constructor(c,r){super(c),this.ngControl=c,this.titleI18nPipe=r,this.items=Object.keys(l.D).map(g=>l.D[g]),this.label="\u0627\u0644\u0644\u0642\u0628",this.contentFormat=g=>this.titleI18nPipe.transform(g)}ngOnInit(){this.control=this.ngControl.control}}return a.\u0275fac=function(c){return new(c||a)(o.Y36(n.a5,10),o.Y36(s.r))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-form-field-title"]],standalone:!0,features:[o._Bn([s.r]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(c,r){1&c&&o._UZ(0,"sz-ui-form-field-select",0),2&c&&o.Q6J("formControl",r.control)("items",r.items)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("contentFn",r.contentFormat)},dependencies:[n.UX,n.JJ,n.oH,i.g,O.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})()},465:(v,u,t)=>{t.d(u,{X:()=>s});var n=t(5879);let s=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({}),l})()},9060:(v,u,t)=>{t.d(u,{Y:()=>s});var n=t(5879);let s=(()=>{class l{transform(i,o=!1){if(!i.names||0===i.names.length)return`${i.id}`;const O=i.names[0].firstName,p=i.names[0].lastName,a=p?`${O} ${p}`:`${O}`;return o&&i.birthDate?""+(+new Date-+i.birthDate):a}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275pipe=n.Yjl({name:"personName",type:l,pure:!0,standalone:!0}),l})()},5746:(v,u,t)=>{t.d(u,{l:()=>l});var n=t(9155),s=t(5879);let l=(()=>{class E{transform(o){switch(o){case n.m.Female:return "\u0627\u0646\u062B\u0649";case n.m.Male:return "\u0630\u0643\u0631";default:return""}}}return E.\u0275fac=function(o){return new(o||E)},E.\u0275pipe=s.Yjl({name:"sexI18n",type:E,pure:!0,standalone:!0}),E})()},1886:(v,u,t)=>{t.d(u,{r:()=>l});var n=t(6439),s=t(5879);let l=(()=>{class E{transform(o){switch(o){case n.D.Miss:return "\u0641\u062A\u0627\u0629";case n.D.Mr:return "\u0633\u064A\u062F";case n.D.Mrs:return "\u0633\u064A\u062F\u0629";case n.D.Ms:return "\u0633\u064A\u062F\u0629";default:return""}}}return E.\u0275fac=function(o){return new(o||E)},E.\u0275pipe=s.Yjl({name:"titleI18n",type:E,pure:!0,standalone:!0}),E})()},926:(v,u,t)=>{t.d(u,{T:()=>O});var n=t(9862),s=t(3971),l=t(9598),E=t(8180),i=t(7398),o=t(5879);let O=(()=>{class p{constructor(M){this.http=M,this.path="medisy-people/v1/languages",this.languages$=this.getLanguages().pipe((0,E.q)(1),(0,i.U)(c=>c.items))}getLanguages(M=l.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:(0,s.c)(M)})})}}return p.\u0275fac=function(M){return new(M||p)(o.LFG(n.eN))},p.\u0275prov=o.Yz7({token:p,factory:p.\u0275fac}),p})()},9155:(v,u,t)=>{t.d(u,{m:()=>n});var n=(()=>((n=n||{}).Male="Male",n.Female="Female",n))()},6439:(v,u,t)=>{t.d(u,{D:()=>n});var n=(()=>((n=n||{}).Mr="Mr",n.Mrs="Mrs",n.Miss="Miss",n.Ms="Ms",n))()}}]);