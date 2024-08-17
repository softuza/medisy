import{a as R}from"./chunk-H37KS6RJ.js";import{b as $}from"./chunk-SID2K4ZA.js";import{a as ve,b as Ve,c as ze,d as be,e as Be}from"./chunk-QV5CRQW6.js";import{b as v}from"./chunk-5UXET42V.js";import{a as Fe}from"./chunk-MXNM5XST.js";import{a as I}from"./chunk-IH253LYB.js";import{a as Le}from"./chunk-CZSDKHXK.js";import{a as L}from"./chunk-HZWF5JWJ.js";import"./chunk-HWJ6IS6U.js";import{f as De,g as ye,h as $e,k as D}from"./chunk-SR3I6TMI.js";import{a as A}from"./chunk-CT6UCPJK.js";import{d as Ie,e as M,i as Ae,j as f,k as Re}from"./chunk-4MMSBRWE.js";import{a as pe,b as de,d as Me,e as fe,g as h}from"./chunk-4CSR7EPJ.js";import{c as ce,d as Pe,h as T,j as Ce,o as ge,r as he,t as Te}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import{c as y}from"./chunk-264QKOH6.js";import{h as Oe}from"./chunk-W4ZBAGNE.js";import{b as Ne}from"./chunk-AAHDAXVC.js";import"./chunk-IEUIBZ53.js";import{d as u,f as Q,g as Z,k as ee,l as oe,n as ie,q as te,r as ne,t as re,u as ae}from"./chunk-VXNH5PTX.js";import{Y as d,p as me,t as Se}from"./chunk-FZKM7RGV.js";import{a as se,c as le,e as _e}from"./chunk-DNH4OZS2.js";import{ia as Ee,la as ue}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Hb as H,Ib as q,Jb as J,Kb as S,Lb as _,Mb as a,Wb as P,bb as p,cb as E,ea as x,ic as C,ja as W,na as c,oa as k,ob as j,oc as g,pc as K,qb as w,zb as m}from"./chunk-G33TNFCW.js";import{a as O,b as N}from"./chunk-EAIILSS5.js";var Ue=(()=>{let e=class e extends De{constructor(o,i,t,n){super(t),this.mpplService=o,this.fb=i,this.dialog=t,this.data=n,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys($).map(s=>$[s]),this.titles=this.mpplService.titles.get(N(O({},y.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:s=>(typeof s=="string"&&(this.titles=this.mpplService.titles.get(N(O({query:s},y.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:s=>s.name,optionValueFn:s=>s,suffixes:[{icon:M.save,tooltip:d.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:s=>this.mpplService.titles.create({name:s}).pipe(T(this.indicator))}]},this.form=i.group({sex:[n.sex,[u.required]],languageId:[n.languageId,[u.required]],title:[n.title,[Fe()]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]],primaryEmail:[n?.primaryEmail,[u.email]],secondaryEmail:[n?.secondaryEmail,[u.email]],mobilePhone:[n?.mobilePhone,[]],hasMobilePhoneWhatsapp:[n?.hasMobilePhoneWhatsapp??!1,[]],homePhone:[n?.homePhone,[]],hasHomePhoneWhatsapp:[n?.hasHomePhoneWhatsapp??!1,[]],workPhone:[n?.workPhone,[]],hasWorkPhoneWhatsapp:[n?.hasWorkPhoneWhatsapp??!1,[]],homeAddress:new ee(n?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,N(O({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(i){return new(i||e)(E(I),E(ne),E(pe),E(de));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[g([]),w,K],decls:38,vars:11,consts:()=>{let o;o="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let i;i="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let t;t="\u0627\u0644\u0644\u063A\u0629";let n;n="\u0627\u0644\u062C\u0646\u0633";let s;s="\u0627\u0644\u0644\u0642\u0628";let V;V="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let z;z="\u0627\u0644\u062C\u0648\u0627\u0644";let b;b="\u0627\u0644\u0645\u0646\u0632\u0644";let B;B="\u0627\u0644\u0639\u0645\u0644";let F;F="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let G;G="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let U;U="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let X;X="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let Y;return Y="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[U,X,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",o,3,"source"],["formControlName","ssn","label",i],["formControlName","languageId","label",t,3,"source"],["formControlName","sex","label",n,3,"source","localizedValue"],["formControlName","title","label",s,3,"config","source"],["formControlName","birthDate","label",V],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",z],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",b],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",B],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",G],[3,"actions"]];},template:function(i,t){i&1&&(a(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4)(3,"div",5),a(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),_(),a(6,"sz-ui-form-field-select",8),S(7,"div",5),a(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),_(),a(10,"sz-ui-form-field-date",11),S(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),P(16,0),_()(),a(17,"sz-ui-form-field-address",14),_(),S(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),P(21,1),_()(),a(22,"sz-ui-form-field-input",15),S(23,"mat-checkbox",16),C(24,"WhatsApp"),_(),a(25,"sz-ui-form-field-input",17),S(26,"mat-checkbox",18),C(27,"WhatsApp"),_(),a(28,"sz-ui-form-field-input",19),S(29,"mat-checkbox",20),C(30,"WhatsApp"),_()(),S(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),P(34,2),_()(),a(35,"sz-ui-form-field-input",21)(36,"sz-ui-form-field-input",22),_()()()()(),a(37,"sz-ui-dialog-actions",23)),i&2&&(m("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),p(2),m("formGroup",t.form),p(2),m("source",t.nationalities),p(2),m("source",t.languages),p(2),m("source",t.sexes)("localizedValue",!0),p(),m("config",t.titleAutoCompleteConfig)("source",t.titles),p(28),m("actions",t.actions));},dependencies:[ae,oe,Q,Z,ie,te,D,ye,$e,Te,ce,ge,he,Ce,h,fe,Be,be,ve,Ve,ze,Pe],encapsulation:2});let r=e;return r;})();function ke(r,e){if(r&1&&a(0,"sz-ui-card",2),r&2){let xe=e.$implicit;m("card",xe);}}var Xe=(()=>{let e=class e{constructor(o,i,t,n){this.dialog=o,this.mlabService=i,this.route=t,this.router=n,this.personNamePipe=W(v),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:Re.default().setItems([f.menu([f.edit(this.openSaveComponent.bind(this)),f.divider(),f.default().setTitle(d.names).setIcon(M.info).setClickFn(()=>this.navigate("names")),f.default().setTitle(d.documents).setIcon(M.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let o={icon:M.science,header:{info:d.analyses,title:0},indicator:j(!0),clickFn:()=>this.router.navigate([Le.Analyses],{state:{filter:{field:"personId",op:me.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:Se.create().equal("personId",this.person.id).filters()}).pipe(T(o.indicator)).subscribe(i=>{o.header&&(o.header.title=i);}),o;}navigate(o){this.router.navigate([o],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(Ue,{data:this.person}).afterClosed().subscribe(o=>{o&&(this.person=o);});}};e.ɵfac=function(i){return new(i||e)(E(Me),E(L),E(se),E(le));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-people-person"]],features:[g([L,v])],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(i,t){i&1&&(a(0,"sz-ui-app-bar",0),S(1,"div",1),q(2,ke,1,1,"sz-ui-card",2,H),_()),i&2&&(m("config",t.appBarConfig),p(2),J(t.items));},dependencies:[R,A],encapsulation:2});let r=e;return r;})();var Ye=[{path:"",component:Xe},{path:"names",loadComponent:()=>import("./chunk-4CUKMF4M.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-6PKBRZY5.js").then(r=>r.PersonDocumentsComponent)}];var ii=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=k({type:e}),e.ɵinj=x({providers:[I],imports:[re,_e.forChild(Ye),Oe,Ee,R,D,A,Ie,Ne,h,ue,Ae]});let r=e;return r;})();export{ii as PersonModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/