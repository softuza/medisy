import{a as Re}from"./chunk-CZSDKHXK.js";import{a as R}from"./chunk-KPFTDPHF.js";import{b as $}from"./chunk-SID2K4ZA.js";import{a as Be,b as Fe,c as Ge,d as Ue,e as Xe}from"./chunk-GXSSRYIF.js";import{b as v}from"./chunk-5UXET42V.js";import{a as Ye}from"./chunk-MXNM5XST.js";import{a as I}from"./chunk-HLK77XB7.js";import{b as Ve,h as be}from"./chunk-7LYOXI2T.js";import"./chunk-WK7ZT6NW.js";import{a as L}from"./chunk-U2WYP6YP.js";import"./chunk-3UZWCLUR.js";import{f as $e,g as ve,h as ze,k as D}from"./chunk-TFN2F5ZD.js";import{a as u,b as A}from"./chunk-RW5IOOBQ.js";import{d as De,f as ye,g as f}from"./chunk-X2F6JBJU.js";import"./chunk-KXCYUAIP.js";import{a as Me,b as fe,d as ue,e as Oe,g as h}from"./chunk-HPPZ7ERW.js";import{c as ge,d as he,h as T,j as Te,o as Le,r as Ie,t as Ae}from"./chunk-RXHMJFXO.js";import"./chunk-WQZWGPYI.js";import{c as y}from"./chunk-264QKOH6.js";import{h as Ce}from"./chunk-W4ZBAGNE.js";import{b as Pe}from"./chunk-AAHDAXVC.js";import"./chunk-2XCX2PRG.js";import{d as O,f as Z,g as ee,k as oe,l as ie,n as te,q as ne,r as re,t as ae,u as se}from"./chunk-VXNH5PTX.js";import{Y as M,p as Se,t as Ee}from"./chunk-Z63FN5EJ.js";import{a as le,c as _e,e as me}from"./chunk-DNH4OZS2.js";import{ha as pe,ia as de,ka as ce,la as Ne}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Hb as H,Ib as q,Jb as Q,Kb as m,Lb as a,Mb as s,Wb as P,Xb as J,bb as p,cb as E,ea as x,ic as d,ja as W,na as C,oa as k,ob as j,oc as g,pc as K,qb as w,zb as S}from"./chunk-G33TNFCW.js";import{a as c,b as N}from"./chunk-EAIILSS5.js";var We=(()=>{let e=class e extends $e{constructor(t,n,o,i){super(o),this.mpplService=t,this.fb=n,this.dialog=o,this.data=i,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys($).map(l=>$[l]),this.titles=this.mpplService.titles.get(N(c({},y.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:l=>(typeof l=="string"&&(this.titles=this.mpplService.titles.get(N(c({query:l},y.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:l=>l.name,optionValueFn:l=>l,suffixes:[{icon:f.save,tooltip:M.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:l=>this.mpplService.titles.create({name:l}).pipe(T(this.indicator))}]},this.form=n.group({sex:[i.sex,[O.required]],languageId:[i.languageId,[O.required]],title:[i.title,[Ye()]],ssn:[i.ssn,[]],nationalityId:[i.nationalityId,[]],birthDate:[i.birthDate,[]],primaryEmail:[i?.primaryEmail,[O.email]],secondaryEmail:[i?.secondaryEmail,[O.email]],mobilePhone:[i?.mobilePhone,[]],hasMobilePhoneWhatsapp:[i?.hasMobilePhoneWhatsapp??!1,[]],homePhone:[i?.homePhone,[]],hasHomePhoneWhatsapp:[i?.hasHomePhoneWhatsapp??!1,[]],workPhone:[i?.workPhone,[]],hasWorkPhoneWhatsapp:[i?.hasWorkPhoneWhatsapp??!1,[]],homeAddress:new oe(i?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,N(c({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(n){return new(n||e)(E(I),E(re),E(Me),E(fe));},e.ɵcmp=C({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[g([]),w,K],decls:38,vars:11,consts:()=>{let t;t="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let n;n="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let o;o="\u0627\u0644\u0644\u063A\u0629";let i;i="\u0627\u0644\u062C\u0646\u0633";let l;l="\u0627\u0644\u0644\u0642\u0628";let z;z="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let V;V="\u0627\u0644\u062C\u0648\u0627\u0644";let b;b="\u0627\u0644\u0645\u0646\u0632\u0644";let B;B="\u0627\u0644\u0639\u0645\u0644";let F;F="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let G;G="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let U;U="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let X;X="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let Y;return Y="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[U,X,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",t,3,"source"],["formControlName","ssn","label",n],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",i,3,"source","localizedValue"],["formControlName","title","label",l,3,"config","source"],["formControlName","birthDate","label",z],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",V],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",b],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",B],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",G],[3,"actions"]];},template:function(n,o){n&1&&(s(0,"sz-ui-dialog-header",3),m(1,"mat-dialog-content")(2,"form",4)(3,"div",5),s(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),a(),s(6,"sz-ui-form-field-select",8),m(7,"div",5),s(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),a(),s(10,"sz-ui-form-field-date",11),m(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),P(16,0),a()(),s(17,"sz-ui-form-field-address",14),a(),m(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),P(21,1),a()(),s(22,"sz-ui-form-field-input",15),m(23,"mat-checkbox",16),d(24,"WhatsApp"),a(),s(25,"sz-ui-form-field-input",17),m(26,"mat-checkbox",18),d(27,"WhatsApp"),a(),s(28,"sz-ui-form-field-input",19),m(29,"mat-checkbox",20),d(30,"WhatsApp"),a()(),m(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),P(34,2),a()(),s(35,"sz-ui-form-field-input",21)(36,"sz-ui-form-field-input",22),a()()()()(),s(37,"sz-ui-dialog-actions",23)),n&2&&(S("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),S("formGroup",o.form),p(2),S("source",o.nationalities),p(2),S("source",o.languages),p(2),S("source",o.sexes)("localizedValue",!0),p(),S("config",o.titleAutoCompleteConfig)("source",o.titles),p(28),S("actions",o.actions));},dependencies:[se,ie,Z,ee,te,ne,D,ve,ze,Ae,ge,Le,Ie,Te,h,Oe,Xe,Ue,Be,Fe,Ge,he],encapsulation:2});let r=e;return r;})();function qe(r,e){if(r&1&&s(0,"sz-ui-card",3),r&2){let we=e.$implicit;S("card",we);}}var ke=(()=>{let e=class e{constructor(t,n,o,i){this.dialog=t,this.mlabService=n,this.route=o,this.router=i,this.personNamePipe=W(v),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),actions:[u.menu([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.default().setTitle(M.names).setIcon(f.info).setClickFn(()=>this.navigate("names")),u.default().setTitle(M.documents).setIcon(f.badge).setClickFn(()=>this.navigate("documents"))])]},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let t={icon:f.science,header:{info:M.analyses,title:0},indicator:j(!0),clickFn:()=>this.router.navigate([Re.Analyses],{state:{filter:{field:"personId",op:Se.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:Ee.create().equal("personId",this.person.id).filters()}).pipe(T(t.indicator)).subscribe(n=>{t.header&&(t.header.title=n);}),t;}navigate(t){this.router.navigate([t],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(We,{data:this.person}).afterClosed().subscribe(t=>{t&&(this.person=t);});}openBarcodeWriterComponent(){this.dialog.open(be,{data:{format:Ve.QR_CODE,msg:`personid.${this.person.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(n){return new(n||e)(E(ue),E(L),E(le),E(_e));},e.ɵcmp=C({type:e,selectors:[["sz-medisy-people-person"]],features:[g([L,v])],decls:7,vars:1,consts:[[3,"config"],["end","","mat-icon-button","",3,"click"],[1,"sz-grid-card"],[3,"card"]],template:function(n,o){n&1&&(m(0,"sz-ui-app-bar",0)(1,"button",1),J("click",function(){return o.openBarcodeWriterComponent();}),m(2,"mat-icon"),d(3,"qr_code"),a()()(),m(4,"div",2),q(5,qe,1,1,"sz-ui-card",3,H),a()),n&2&&(S("config",o.appBarConfig),p(5),Q(o.items));},dependencies:[pe,R,A,ce],encapsulation:2});let r=e;return r;})();var je=[{path:"",component:ke},{path:"names",loadComponent:()=>import("./chunk-2QFWCWYK.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-BOK4SZK6.js").then(r=>r.PersonDocumentsComponent)}];var mi=(()=>{let e=class e{};e.ɵfac=function(n){return new(n||e)();},e.ɵmod=k({type:e}),e.ɵinj=x({providers:[I],imports:[ae,me.forChild(je),Ce,de,R,D,A,De,Pe,h,Ne,ye]});let r=e;return r;})();export{mi as PersonModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/