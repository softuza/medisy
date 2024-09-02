import{a as A}from"./chunk-7W4DPCX5.js";import{b as $}from"./chunk-ZDPRNFLQ.js";import{a as ze,b as ve,c as be,d as Be,e as Fe}from"./chunk-IBEGBZPR.js";import{b as y}from"./chunk-XCI3HIRX.js";import{a as Ge}from"./chunk-INUIK7WM.js";import{a as T}from"./chunk-AFDVYKVT.js";import{a as Ae}from"./chunk-5TNDWLJL.js";import{a as D}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{f as $e,g as ye,h as Ve,k as I}from"./chunk-JDBQ45YP.js";import{a as L}from"./chunk-ZGUTF2MC.js";import{d as Ie,e as d,i as Re,j as M,k as De}from"./chunk-53DZ6NLX.js";import{a as Ee,b as pe,d as de,e as Me,g}from"./chunk-7B3GMYBR.js";import{c as Ne,d as Ce,h,j as Pe,o as ce,p as ge,q as he,r as Te,t as Le}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import{c as R}from"./chunk-PYOUUVMA.js";import{h as Oe}from"./chunk-ODIMT2GD.js";import{b as ue}from"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as f,f as K,g as Q,k as Z,l as ee,n as oe,q as te,r as ie,t as ne,u as re}from"./chunk-QZRJHJEV.js";import{Y as p,p as _e,t as me}from"./chunk-4QPQ7IQ3.js";import{a as ae,c as se,d as le}from"./chunk-WMCOMOML.js";import{ia as Se,la as fe}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Gb as H,Hb as j,Ib as q,Jb as S,Kb as l,Lb as r,Vb as C,bb as E,ea as x,gc as P,ja as _,kb as W,mb as w,mc as c,na as N,nc as J,oa as k,yb as m}from"./chunk-6EDHPT3A.js";import{a as O,b as u}from"./chunk-NLUW4JS2.js";var Xe=(()=>{let o=class o extends $e{constructor(){let t=_(Ee);super(t),this.mpplService=_(T),this.fb=_(ie),this.data=_(pe),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys($).map(a=>$[a]),this.titles=this.mpplService.titles.get(u(O({},R.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:a=>(typeof a=="string"&&(this.titles=this.mpplService.titles.get(u(O({query:a},R.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:a=>a.name,optionValueFn:a=>a,suffixes:[{icon:d.save,tooltip:p.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:a=>this.mpplService.titles.create({name:a}).pipe(h(this.indicator))}]};let n=this.fb;this.dialog=t;let e=this.data;this.form=n.group({sex:[e.sex,[f.required]],languageId:[e.languageId,[f.required]],title:[e.title,[Ge()]],ssn:[e.ssn,[]],nationalityId:[e.nationalityId,[]],birthDate:[e.birthDate,[]],primaryEmail:[e?.primaryEmail,[f.email]],secondaryEmail:[e?.secondaryEmail,[f.email]],mobilePhone:[e?.mobilePhone,[]],hasMobilePhoneWhatsapp:[e?.hasMobilePhoneWhatsapp??!1,[]],homePhone:[e?.homePhone,[]],hasHomePhoneWhatsapp:[e?.hasHomePhoneWhatsapp??!1,[]],workPhone:[e?.workPhone,[]],hasWorkPhoneWhatsapp:[e?.hasWorkPhoneWhatsapp??!1,[]],homeAddress:new Z(e?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,u(O({},this.form.value),{titleId:this.form.value.title?.id})));}};o.ɵfac=function(n){return new(n||o)();},o.ɵcmp=N({type:o,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[c([]),w,J],decls:38,vars:11,consts:()=>{let t;t="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let n;n="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let e;e="\u0627\u0644\u0644\u063A\u0629";let a;a="\u0627\u0644\u062C\u0646\u0633";let V;V="\u0627\u0644\u0644\u0642\u0628";let z;z="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let v;v="\u0627\u0644\u062C\u0648\u0627\u0644";let b;b="\u0627\u0644\u0645\u0646\u0632\u0644";let B;B="\u0627\u0644\u0639\u0645\u0644";let F;F="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let G;G="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let U;U="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let X;X="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let Y;return Y="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[U,X,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",t,3,"source"],["formControlName","ssn","label",n],["formControlName","languageId","label",e,3,"source"],["formControlName","sex","label",a,3,"source","localizedValue"],["formControlName","title","label",V,3,"config","source"],["formControlName","birthDate","label",z],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",v],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",b],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",B],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",G],[3,"actions"]];},template:function(n,e){n&1&&(r(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4)(3,"div",5),r(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),l(),r(6,"sz-ui-form-field-select",8),S(7,"div",5),r(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),l(),r(10,"sz-ui-form-field-date",11),S(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),C(16,0),l()(),r(17,"sz-ui-form-field-address",14),l(),S(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),C(21,1),l()(),r(22,"sz-ui-form-field-input",15),S(23,"mat-checkbox",16),P(24,"WhatsApp"),l(),r(25,"sz-ui-form-field-input",17),S(26,"mat-checkbox",18),P(27,"WhatsApp"),l(),r(28,"sz-ui-form-field-input",19),S(29,"mat-checkbox",20),P(30,"WhatsApp"),l()(),S(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),C(34,2),l()(),r(35,"sz-ui-form-field-input",21)(36,"sz-ui-form-field-input",22),l()()()()(),r(37,"sz-ui-dialog-actions",23)),n&2&&(m("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),E(2),m("formGroup",e.form),E(2),m("source",e.nationalities),E(2),m("source",e.languages),E(2),m("source",e.sexes)("localizedValue",!0),E(),m("config",e.titleAutoCompleteConfig)("source",e.titles),E(28),m("actions",e.actions));},dependencies:[re,ee,K,Q,oe,te,I,ye,Ve,Le,Ne,ce,Te,Pe,g,Me,he,ge,Fe,Be,ze,ve,be,Ce],encapsulation:2});let i=o;return i;})();function We(i,o){if(i&1&&r(0,"sz-ui-card",2),i&2){let ke=o.$implicit;m("card",ke);}}var Ye=(()=>{let o=class o{constructor(){this.dialog=_(de),this.mlabService=_(D),this.route=_(ae),this.router=_(se),this.personNamePipe=_(y),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:De.default().setItems([M.menu([M.edit(this.openSaveComponent.bind(this)),M.divider(),M.default().setTitle(p.names).setIcon(d.info).setClickFn(()=>this.navigate("names")),M.default().setTitle(p.documents).setIcon(d.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let t={icon:d.science,header:{info:p.analyses,title:0},indicator:W(!0),clickFn:()=>this.router.navigate([Ae.Analyses],{state:{filter:{field:"personId",op:_e.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:me.create().equal("personId",this.person.id).filters()}).pipe(h(t.indicator)).subscribe(n=>{t.header&&(t.header.title=n);}),t;}navigate(t){this.router.navigate([t],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(Xe,{data:this.person}).afterClosed().subscribe(t=>{t&&(this.person=t);});}};o.ɵfac=function(n){return new(n||o)();},o.ɵcmp=N({type:o,selectors:[["sz-medisy-people-person"]],features:[c([D,y])],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(n,e){n&1&&(r(0,"sz-ui-app-bar",0),S(1,"div",1),j(2,We,1,1,"sz-ui-card",2,H),l()),n&2&&(m("config",e.appBarConfig),E(2),q(e.items));},dependencies:[A,L],encapsulation:2});let i=o;return i;})();var xe=[{path:"",component:Ye},{path:"names",loadComponent:()=>import("./chunk-MCEYWZZA.js").then(i=>i.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-UNOUR3VA.js").then(i=>i.PersonDocumentsComponent)}];var tt=(()=>{let o=class o{};o.ɵfac=function(n){return new(n||o)();},o.ɵmod=k({type:o}),o.ɵinj=x({providers:[T],imports:[ne,le.forChild(xe),Oe,Se,A,I,L,Ie,ue,g,fe,Re]});let i=o;return i;})();export{tt as PersonModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/