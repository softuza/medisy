"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(z,u,t)=>{t.r(u),t.d(u,{PersonModule:()=>j});var i=t(6814),s=t(6223),n=t(2296),h=t(5195),d=t(7700),E=t(6385),O=t(617),c=t(7988),C=t(8109),p=t(2393),r=t(758),v=t(8308),e=t(9899),a=t(5041),M=t(157),y=t(6883),D=t(9598),A=t(7398),N=t(8180),I=t(2023),$=t(8210),L=t(2818),S=t(5781),o=t(5879),R=t(4622),F=t(6091),U=t(5974);let B=(()=>{class l extends e.Ku{constructor(f,m,P,g){super(P),this.mpplService=f,this.fb=m,this.dialog=P,this.data=g,this.form=m.group({sex:[g.sex,[s.kI.required]],languageId:[g.languageId,[s.kI.required]],title:[g.title,[]],ssn:[g.ssn,[]],nationalityId:[g.nationalityId,[]],birthDate:[g.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value))}static#t=this.\u0275fac=function(m){return new(m||l)(o.Y36(p.i),o.Y36(s.qu),o.Y36(d.so),o.Y36(d.WI))};static#e=this.\u0275cmp=o.Xpm({type:l,selectors:[["medisy-people-person-save"]],standalone:!0,features:[o._Bn([]),o.qOj,o.jDz],decls:12,vars:3,consts:function(){let f,m,P;return f="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",m="\u0627\u0644\u0644\u0642\u0628",P="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",f],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",m],["formControlName","birthDate","label",P],[3,"actions"]]},template:function(m,P){1&m&&(o._UZ(0,"sz-ui-dialog-header",0),o.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),o._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),o.qZA(),o._UZ(6,"medisy-form-field-language",5),o.TgZ(7,"div",2),o._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),o.qZA(),o._UZ(10,"sz-ui-form-field-date",8),o.qZA()(),o._UZ(11,"sz-ui-dialog-actions",9)),2&m&&(o.Q6J("header",P.header),o.xp6(2),o.Q6J("formGroup",P.form),o.xp6(9),o.Q6J("actions",P.actions))},dependencies:[s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,e.su,R.Y,F.t,S.g2,U.g,d.Is,d.xY,$.V,S.LB,L.t,I.d],encapsulation:2})}return l})();var W=t(6128),V=t(2516),Y=t(5807),J=t(9060);function K(l,G){1&l&&o._UZ(0,"sz-ui-card",4),2&l&&o.Q6J("card",G.$implicit)}const Z=[{path:"",component:(()=>{class l{constructor(f,m,P,g){this.dialog=f,this.mlabService=m,this.route=P,this.router=g,this.items=[],this.personMenu=M.Bw.more([M.NT.edit(()=>this.openSaveComponent()),M.NT.divider(),M.NT.custom("\u0627\u0644\u0627\u0633\u0645\u0627\u0621","info",()=>this.navigate("names")),M.NT.custom("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.navigate("phones")),M.NT.custom("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.navigate("emails")),M.NT.custom("\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646","home",()=>this.navigate("addresses")),M.NT.custom("\u0627\u0644\u0648\u062B\u0627\u0626\u0642","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const T={title:0,type:v.kD.Counter,icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(T),this.getAnalysisCount(T)}navigate(f){this.router.navigate([f],{relativeTo:this.route})}getAnalysisCount(f){this.mlabService.analyses.get({...D.J.count(),personIds:[this.person.id]}).pipe((0,A.U)(m=>m.count)).subscribe(m=>{f.title=m})}openSaveComponent(){this.dialog.open(B,{data:this.person}).afterClosed().pipe((0,N.q)(1)).subscribe(m=>{m&&(this.person=m)})}static#t=this.\u0275fac=function(m){return new(m||l)(o.Y36(d.uw),o.Y36(y.t),o.Y36(C.gz),o.Y36(C.F0))};static#e=this.\u0275cmp=o.Xpm({type:l,selectors:[["medisy-peopel-person"]],features:[o._Bn([y.t])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(m,P){1&m&&(o.TgZ(0,"sz-ui-header-basic")(1,"h5",0),o._uU(2),o.ALo(3,"personName"),o.qZA(),o._UZ(4,"sz-ui-menu",1),o.qZA(),o.TgZ(5,"div",2),o.YNc(6,K,1,1,"sz-ui-card",3),o.qZA()),2&m&&(o.xp6(2),o.Oqu(o.lcZ(3,3,P.person)),o.xp6(2),o.Q6J("menu",P.personMenu),o.xp6(2),o.Q6J("ngForOf",P.items))},dependencies:[i.sg,W.X,V.z,Y.i,J.Y],encapsulation:2})}return l})()},{path:"names",loadComponent:()=>Promise.all([t.e(562),t.e(986),t.e(247)]).then(t.bind(t,2247)).then(l=>l.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([t.e(562),t.e(986),t.e(592),t.e(961)]).then(t.bind(t,1961)).then(l=>l.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([t.e(562),t.e(986),t.e(592),t.e(814)]).then(t.bind(t,1814)).then(l=>l.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([t.e(562),t.e(986),t.e(994)]).then(t.bind(t,2994)).then(l=>l.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([t.e(562),t.e(986),t.e(396)]).then(t.bind(t,4396)).then(l=>l.PersonAddressesComponent)}];let j=(()=>{class l{static#t=this.\u0275fac=function(m){return new(m||l)};static#e=this.\u0275mod=o.oAB({type:l});static#n=this.\u0275inj=o.cJS({providers:[p.i],imports:[i.ez,s.u5,C.Bz.forChild(Z),h.QW,O.Ps,v.VH,r.E3,e.su,a.n,c.Tx,E.t,d.Is,n.ot,M.iz]})}return l})()},2023:(z,u,t)=>{t.d(u,{d:()=>C});var i=t(6814),s=t(6223),n=t(2393),h=t(5781),d=t(9598),E=t(8721),O=t(8180),c=t(5879);let C=(()=>{class p extends h.ms{constructor(v,e){super(v),this.ngControl=v,this.mpplService=e,this.options=[],this.label="\u0627\u0644\u0644\u063A\u0629",this.optionContent=a=>a.name,this.optionValue=a=>a.id,this.mpplService.languages.getItems(d.J.unpagedSorted("name")).pipe((0,E.sU)(this.indicator),(0,O.q)(1)).subscribe(a=>{this.options=a})}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(e){return new(e||p)(c.Y36(s.a5,10),c.Y36(n.i))};static#e=this.\u0275cmp=c.Xpm({type:p,selectors:[["medisy-form-field-language"]],standalone:!0,features:[c._Bn([n.i]),c.qOj,c.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(e,a){1&e&&c._UZ(0,"sz-ui-form-field-select",0),2&e&&c.Q6J("formControl",a.control)("indicator",a.indicator)("options",a.options)("label",a.label)("placeholder",a.placeholder)("emptyOption",a.emptyOption)("multiple",a.multiple)("szOptionContentFn",a.optionContent)("szOptionValueFn",a.optionValue)},dependencies:[i.ez,s.UX,s.JJ,s.oH,h.E3],encapsulation:2})}return p})()},8210:(z,u,t)=>{t.d(u,{V:()=>C});var i=t(6814),s=t(6223),n=t(2393),h=t(5781),d=t(9598),E=t(8721),O=t(8180),c=t(5879);let C=(()=>{class p extends h.ms{constructor(v,e){super(v),this.ngControl=v,this.mpplService=e,this.options=[],this.label="\u0627\u0644\u062C\u0646\u0633\u064A\u0629",this.optionContent=a=>a.name,this.optionValue=a=>a.id,this.mpplService.nationalities.getItems(d.J.unpagedSorted("name")).pipe((0,E.sU)(this.indicator),(0,O.q)(1)).subscribe(a=>{this.options=a})}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(e){return new(e||p)(c.Y36(s.a5,10),c.Y36(n.i))};static#e=this.\u0275cmp=c.Xpm({type:p,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[c._Bn([n.i]),c.qOj,c.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(e,a){1&e&&c._UZ(0,"sz-ui-form-field-select",0),2&e&&c.Q6J("formControl",a.control)("indicator",a.indicator)("options",a.options)("label",a.label)("placeholder",a.placeholder)("emptyOption",a.emptyOption)("multiple",a.multiple)("szOptionContentFn",a.optionContent)("szOptionValueFn",a.optionValue)},dependencies:[i.ez,s.UX,s.JJ,s.oH,h.E3],encapsulation:2})}return p})()},2818:(z,u,t)=>{t.d(u,{t:()=>E});var i=t(6223),s=t(7076),n=t(9155),h=t(5781),d=t(5879);let E=(()=>{class O extends h.ms{constructor(C,p){super(C),this.ngControl=C,this.typeI18nPipe=p,this.options=Object.keys(n.m).map(r=>n.m[r]),this.label="\u0627\u0644\u062C\u0646\u0633",this.optionContent=r=>this.typeI18nPipe.transform(r)}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(p){return new(p||O)(d.Y36(i.a5,10),d.Y36(s.y))};static#e=this.\u0275cmp=d.Xpm({type:O,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[d._Bn([s.y]),d.qOj,d.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(p,r){1&p&&d._UZ(0,"sz-ui-form-field-select",0),2&p&&d.Q6J("formControl",r.control)("options",r.options)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("szOptionContentFn",r.optionContent)},dependencies:[i.UX,i.JJ,i.oH,h.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return O})()},7076:(z,u,t)=>{t.d(u,{y:()=>p});var i=t(3712),s=t(1101),n=t(7263),h=function(r){return r.Validated="Validated",r.Returned="Returned",r.Forwarded="Forwarded",r.Destroyed="Destroyed",r.Collected="Collected",r.Accepted="Accepted",r.Created="Created",r}(h||{}),d=function(r){return r.Created="Created",r.Pending="Pending",r.Started="Started",r.Finished="Finished",r}(d||{}),E=t(1646),O=t(9155),c=t(6494),C=t(5879);let p=(()=>{class r{transform(e,a=!1){return e in n.v?this.transformComparisonOperator(e,a):e in d?this.transformTestState(e):e in h?this.transformSpecimenState(e):e in i.V?this.transformEmailType(e):e in s.z?this.transformPhoneType(e):e in O.m?this.transformSex(e):e in E.n?this.transformDocumentType(e):e in c.x?this.transformChannelType(e):""}transformComparisonOperator(e,a){switch(e){case n.v.Equal:return a?"==":"\u062A\u0633\u0627\u0648\u064A";case n.v.GreaterThan:return a?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case n.v.GreaterThanOrEqual:return a?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.v.LessThan:return a?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case n.v.LessThanOrEqual:return a?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.v.RangeWithBoundaries:return a?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case n.v.RangeWithoutBoundaries:return a?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case n.v.Not:return a?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(e){switch(e){case d.Created:return "\u0645\u0646\u0634\u0623\u0629";case d.Started:return "\u0628\u062F\u0623";case d.Finished:return "\u0627\u0646\u062A\u0647\u062A";case d.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(e){switch(e){case h.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case h.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case h.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case h.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case h.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case h.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(e){switch(e){case i.V.Private:return "\u062E\u0627\u0635";case i.V.Public:return "\u0639\u0627\u0645";case i.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(e){switch(e){case s.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case s.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case s.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(e){switch(e){case O.m.Female:return "\u0627\u0646\u062B\u0649";case O.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(e){switch(e){case E.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case E.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case E.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case E.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case E.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case E.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(e){switch(e){case c.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case c.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case c.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275pipe=C.Yjl({name:"typeI18n",type:r,pure:!0,standalone:!0})}return r})()},3712:(z,u,t)=>{t.d(u,{V:()=>i});var i=function(n){return n.Private="Private",n.Public="Public",n.Work="Work",n}(i||{});Object.keys(i).map(n=>i[n])},1101:(z,u,t)=>{t.d(u,{z:()=>i});var i=function(n){return n.Home="Home",n.Mobile="Mobile",n.Work="Work",n}(i||{});Object.keys(i).map(n=>i[n])},7263:(z,u,t)=>{t.d(u,{v:()=>i});var i=function(s){return s.Equal="Equal",s.GreaterThan="GreaterThan",s.GreaterThanOrEqual="GreaterThanOrEqual",s.LessThan="LessThan",s.LessThanOrEqual="LessThanOrEqual",s.Not="Not",s.RangeWithBoundaries="RangeWithBoundaries",s.RangeWithoutBoundaries="RangeWithoutBoundaries",s}(i||{})},1646:(z,u,t)=>{t.d(u,{n:()=>i});var i=function(n){return n.NationalCard="NationalCard",n.BankCard="BankCard",n.DriverLicense="DriverLicense",n.Passport="Passport",n.TravelDocument="TravelDocument",n.Other="Other",n}(i||{});Object.keys(i).map(n=>i[n])},9155:(z,u,t)=>{t.d(u,{m:()=>i});var i=function(n){return n.Male="Male",n.Female="Female",n}(i||{});Object.keys(i).map(n=>i[n])},6494:(z,u,t)=>{t.d(u,{x:()=>i});var i=function(s){return s.Email="Email",s.Sms="Sms",s.Push="Push",s}(i||{})}}]);