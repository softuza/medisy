"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(z,c,e)=>{e.r(c),e.d(c,{PersonModule:()=>J});var i=e(6814),a=e(6223),n=e(2296),h=e(5195),d=e(7700),E=e(6385),O=e(617),u=e(7988),C=e(8109),p=e(2393),r=e(3385),v=e(9951),o=e(2516),t=e(157),M=e(6883),T=e(9598),D=e(7398),A=e(8180),N=e(2023),I=e(3404),$=e(2818),y=e(5781),s=e(5879),L=e(4622),R=e(6091),F=e(5974);let U=(()=>{class l extends v.Ku{constructor(f,m,P,g){super(P),this.mpplService=f,this.fb=m,this.dialog=P,this.data=g,this.form=m.group({sex:[g.sex,[a.kI.required]],languageId:[g.languageId,[a.kI.required]],title:[g.title,[]],ssn:[g.ssn,[]],nationalityId:[g.nationalityId,[]],birthDate:[g.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value))}static#e=this.\u0275fac=function(m){return new(m||l)(s.Y36(p.i),s.Y36(a.qu),s.Y36(d.so),s.Y36(d.WI))};static#t=this.\u0275cmp=s.Xpm({type:l,selectors:[["medisy-people-person-save"]],standalone:!0,features:[s._Bn([]),s.qOj,s.jDz],decls:12,vars:3,consts:function(){let f,m,P;return f="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",m="\u0627\u0644\u0644\u0642\u0628",P="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",f],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",m],["formControlName","birthDate","label",P],[3,"actions"]]},template:function(m,P){1&m&&(s._UZ(0,"sz-ui-dialog-header",0),s.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),s._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),s.qZA(),s._UZ(6,"medisy-form-field-language",5),s.TgZ(7,"div",2),s._UZ(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),s.qZA(),s._UZ(10,"sz-ui-form-field-date",8),s.qZA()(),s._UZ(11,"sz-ui-dialog-actions",9)),2&m&&(s.Q6J("header",P.header),s.xp6(2),s.Q6J("formGroup",P.form),s.xp6(9),s.Q6J("actions",P.actions))},dependencies:[a.UX,a._Y,a.JJ,a.JL,a.sg,a.u,v.su,L.Y,R.t,y.g2,F.g,d.Is,d.xY,I.V,y.LB,$.t,N.d],encapsulation:2})}return l})();var B=e(8210),W=e(5807),V=e(9060);function Y(l,K){1&l&&s._UZ(0,"sz-ui-card",4),2&l&&s.Q6J("card",K.$implicit)}const _=[{path:"",component:(()=>{class l{constructor(f,m,P,g){this.dialog=f,this.mlabService=m,this.route=P,this.router=g,this.items=[],this.personMenu=t.Bw.more([t.NT.edit(()=>this.openSaveComponent()),t.NT.divider(),t.NT.default("\u0627\u0644\u0627\u0633\u0645\u0627\u0621","info",()=>this.navigate("names")),t.NT.default("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.navigate("phones")),t.NT.default("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.navigate("emails")),t.NT.default("\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646","home",()=>this.navigate("addresses")),t.NT.default("\u0627\u0644\u0648\u062B\u0627\u0626\u0642","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;const S={title:0,type:r.kD.Counter,icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(S),this.getAnalysisCount(S)}navigate(f){this.router.navigate([f],{relativeTo:this.route})}getAnalysisCount(f){this.mlabService.analyses.get({...T.J.count(),personIds:[this.person.id]}).pipe((0,D.U)(m=>m.count)).subscribe(m=>{f.title=m})}openSaveComponent(){this.dialog.open(U,{data:this.person}).afterClosed().pipe((0,A.q)(1)).subscribe(m=>{m&&(this.person=m)})}static#e=this.\u0275fac=function(m){return new(m||l)(s.Y36(d.uw),s.Y36(M.t),s.Y36(C.gz),s.Y36(C.F0))};static#t=this.\u0275cmp=s.Xpm({type:l,selectors:[["medisy-peopel-person"]],features:[s._Bn([M.t])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(m,P){1&m&&(s.TgZ(0,"sz-ui-header-basic")(1,"h5",0),s._uU(2),s.ALo(3,"personName"),s.qZA(),s._UZ(4,"sz-ui-menu",1),s.qZA(),s.TgZ(5,"div",2),s.YNc(6,Y,1,1,"sz-ui-card",3),s.qZA()),2&m&&(s.xp6(2),s.Oqu(s.lcZ(3,3,P.person)),s.xp6(2),s.Q6J("menu",P.personMenu),s.xp6(2),s.Q6J("ngForOf",P.items))},dependencies:[i.sg,B.X,o.z,W.i,V.Y],encapsulation:2})}return l})()},{path:"names",loadComponent:()=>Promise.all([e.e(562),e.e(247)]).then(e.bind(e,2247)).then(l=>l.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([e.e(562),e.e(592),e.e(961)]).then(e.bind(e,1961)).then(l=>l.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([e.e(562),e.e(592),e.e(814)]).then(e.bind(e,1814)).then(l=>l.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([e.e(562),e.e(994)]).then(e.bind(e,2994)).then(l=>l.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([e.e(562),e.e(396)]).then(e.bind(e,4396)).then(l=>l.PersonAddressesComponent)}];let J=(()=>{class l{static#e=this.\u0275fac=function(m){return new(m||l)};static#t=this.\u0275mod=s.oAB({type:l});static#n=this.\u0275inj=s.cJS({providers:[p.i],imports:[i.ez,a.u5,C.Bz.forChild(_),h.QW,O.Ps,r.X,v.su,o.z,u.Tx,E.t,d.Is,n.ot,t.iz]})}return l})()},2023:(z,c,e)=>{e.d(c,{d:()=>C});var i=e(6814),a=e(6223),n=e(2393),h=e(5781),d=e(9598),E=e(8721),O=e(8180),u=e(5879);let C=(()=>{class p extends h.ms{constructor(v,o){super(v),this.ngControl=v,this.mpplService=o,this.options=[],this.label="\u0627\u0644\u0644\u063A\u0629",this.optionContent=t=>t.name,this.optionValue=t=>t.id,this.mpplService.languages.getItems(d.J.unpagedSorted("name")).pipe((0,E.sU)(this.indicator),(0,O.q)(1)).subscribe(t=>{this.options=t})}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(o){return new(o||p)(u.Y36(a.a5,10),u.Y36(n.i))};static#t=this.\u0275cmp=u.Xpm({type:p,selectors:[["medisy-form-field-language"]],standalone:!0,features:[u._Bn([n.i]),u.qOj,u.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(o,t){1&o&&u._UZ(0,"sz-ui-form-field-select",0),2&o&&u.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[i.ez,a.UX,a.JJ,a.oH,h.E3],encapsulation:2})}return p})()},3404:(z,c,e)=>{e.d(c,{V:()=>C});var i=e(6814),a=e(6223),n=e(2393),h=e(5781),d=e(9598),E=e(8721),O=e(8180),u=e(5879);let C=(()=>{class p extends h.ms{constructor(v,o){super(v),this.ngControl=v,this.mpplService=o,this.options=[],this.label="\u0627\u0644\u062C\u0646\u0633\u064A\u0629",this.optionContent=t=>t.name,this.optionValue=t=>t.id,this.mpplService.nationalities.getItems(d.J.unpagedSorted("name")).pipe((0,E.sU)(this.indicator),(0,O.q)(1)).subscribe(t=>{this.options=t})}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(o){return new(o||p)(u.Y36(a.a5,10),u.Y36(n.i))};static#t=this.\u0275cmp=u.Xpm({type:p,selectors:[["medisy-form-field-nationality"]],standalone:!0,features:[u._Bn([n.i]),u.qOj,u.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(o,t){1&o&&u._UZ(0,"sz-ui-form-field-select",0),2&o&&u.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[i.ez,a.UX,a.JJ,a.oH,h.E3],encapsulation:2})}return p})()},2818:(z,c,e)=>{e.d(c,{t:()=>E});var i=e(6223),a=e(7076),n=e(9155),h=e(5781),d=e(5879);let E=(()=>{class O extends h.ms{constructor(C,p){super(C),this.ngControl=C,this.typeI18nPipe=p,this.options=Object.keys(n.m).map(r=>n.m[r]),this.label="\u0627\u0644\u062C\u0646\u0633",this.optionContent=r=>this.typeI18nPipe.transform(r)}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(p){return new(p||O)(d.Y36(i.a5,10),d.Y36(a.y))};static#t=this.\u0275cmp=d.Xpm({type:O,selectors:[["medisy-form-field-sex"]],standalone:!0,features:[d._Bn([a.y]),d.qOj,d.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(p,r){1&p&&d._UZ(0,"sz-ui-form-field-select",0),2&p&&d.Q6J("formControl",r.control)("options",r.options)("label",r.label)("placeholder",r.placeholder)("emptyOption",r.emptyOption)("multiple",r.multiple)("szOptionContentFn",r.optionContent)},dependencies:[i.UX,i.JJ,i.oH,h.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return O})()},7076:(z,c,e)=>{e.d(c,{y:()=>p});var i=e(3712),a=e(1101),n=e(7263),h=function(r){return r.Validated="Validated",r.Returned="Returned",r.Forwarded="Forwarded",r.Destroyed="Destroyed",r.Collected="Collected",r.Accepted="Accepted",r.Created="Created",r}(h||{}),d=function(r){return r.Created="Created",r.Pending="Pending",r.Started="Started",r.Finished="Finished",r}(d||{}),E=e(1646),O=e(9155),u=e(6494),C=e(5879);let p=(()=>{class r{transform(o,t=!1){return o in n.v?this.transformComparisonOperator(o,t):o in d?this.transformTestState(o):o in h?this.transformSpecimenState(o):o in i.V?this.transformEmailType(o):o in a.z?this.transformPhoneType(o):o in O.m?this.transformSex(o):o in E.n?this.transformDocumentType(o):o in u.x?this.transformChannelType(o):""}transformComparisonOperator(o,t){switch(o){case n.v.Equal:return t?"==":"\u062A\u0633\u0627\u0648\u064A";case n.v.GreaterThan:return t?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case n.v.GreaterThanOrEqual:return t?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.v.LessThan:return t?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case n.v.LessThanOrEqual:return t?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.v.RangeWithBoundaries:return t?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case n.v.RangeWithoutBoundaries:return t?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case n.v.Not:return t?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(o){switch(o){case d.Created:return "\u0645\u0646\u0634\u0623\u0629";case d.Started:return "\u0628\u062F\u0623";case d.Finished:return "\u0627\u0646\u062A\u0647\u062A";case d.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(o){switch(o){case h.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case h.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case h.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case h.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case h.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case h.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(o){switch(o){case i.V.Private:return "\u062E\u0627\u0635";case i.V.Public:return "\u0639\u0627\u0645";case i.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(o){switch(o){case a.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case a.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case a.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(o){switch(o){case O.m.Female:return "\u0627\u0646\u062B\u0649";case O.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(o){switch(o){case E.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case E.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case E.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case E.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case E.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case E.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(o){switch(o){case u.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case u.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case u.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275pipe=C.Yjl({name:"typeI18n",type:r,pure:!0,standalone:!0})}return r})()},3712:(z,c,e)=>{e.d(c,{V:()=>i});var i=function(n){return n.Private="Private",n.Public="Public",n.Work="Work",n}(i||{});Object.keys(i).map(n=>i[n])},1101:(z,c,e)=>{e.d(c,{z:()=>i});var i=function(n){return n.Home="Home",n.Mobile="Mobile",n.Work="Work",n}(i||{});Object.keys(i).map(n=>i[n])},7263:(z,c,e)=>{e.d(c,{v:()=>i});var i=function(a){return a.Equal="Equal",a.GreaterThan="GreaterThan",a.GreaterThanOrEqual="GreaterThanOrEqual",a.LessThan="LessThan",a.LessThanOrEqual="LessThanOrEqual",a.Not="Not",a.RangeWithBoundaries="RangeWithBoundaries",a.RangeWithoutBoundaries="RangeWithoutBoundaries",a}(i||{})},1646:(z,c,e)=>{e.d(c,{n:()=>i});var i=function(n){return n.NationalCard="NationalCard",n.BankCard="BankCard",n.DriverLicense="DriverLicense",n.Passport="Passport",n.TravelDocument="TravelDocument",n.Other="Other",n}(i||{});Object.keys(i).map(n=>i[n])},9155:(z,c,e)=>{e.d(c,{m:()=>i});var i=function(n){return n.Male="Male",n.Female="Female",n}(i||{});Object.keys(i).map(n=>i[n])},6494:(z,c,e)=>{e.d(c,{x:()=>i});var i=function(a){return a.Email="Email",a.Sms="Sms",a.Push="Push",a}(i||{})}}]);