import{a as ce,c as he}from"./chunk-QZKOUDB3.js";import{b as D}from"./chunk-XEQAIVVX.js";import{a as N}from"./chunk-2VVNM32O.js";import{a as Re,b as De,c as ye,d as $e,e as Ve}from"./chunk-I7CCWA7X.js";import{b as y}from"./chunk-NGQ27WSC.js";import{a as R}from"./chunk-CKTY72HA.js";import{f as ge,g as Ae,h as Te,k as Le}from"./chunk-ZILQN7IV.js";import{a as I}from"./chunk-XBTOAGNR.js";import"./chunk-7JFHPBQA.js";import{a as le,b as Ee,d as Se,e as me,g as de}from"./chunk-WP7GINVA.js";import{c as Me,h,j as pe,o as Oe,p as Ne,q as Pe,r as Ce,u as ue}from"./chunk-WKQOW3L7.js";import"./chunk-SWSR2FHM.js";import{c as T}from"./chunk-YGAFJZ7Z.js";import"./chunk-7ES6GSH3.js";import{d as O,f as Q,g as Z,l as ee,o as oe,r as te,s as ie,u as ne}from"./chunk-GJE2CTRJ.js";import{a as L}from"./chunk-5VRLPNEL.js";import{a as M,b as p,c as fe}from"./chunk-UJCFOIFA.js";import{a as Ie}from"./chunk-IDEFMHWN.js";import"./chunk-EQLT65ZB.js";import"./chunk-K465E5EJ.js";import{a as d}from"./chunk-CLMOD2EC.js";import"./chunk-FPHQ27E5.js";import{p as _e,r as re,t as ae,x as se}from"./chunk-FMLZPT37.js";import"./chunk-VE4VSZJT.js";import{Hb as j,Ib as J,Jb as K,Kb as l,Lb as a,Mb as n,Wb as C,cb as m,hc as u,ja as S,lb as H,na as P,nb as q,qc as f,rc as c,zb as E}from"./chunk-2H67EYAB.js";import{a as g,b as A}from"./chunk-ZA5F7ID5.js";var ze=(()=>{let _=class _ extends ge{constructor(){let e=S(le);super(e),this.mpplService=S(R),this.fb=S(ie),this.data=S(Ee),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.countries=this.mpplService.countries.getAll({orderBy:["name"]}),this.sexes=Object.keys(D).map(s=>D[s]),this.titles=this.mpplService.titles.get(A(g({},T.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:s=>(typeof s=="string"&&(this.titles=this.mpplService.titles.get(A(g({query:s},T.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:s=>s.name,optionValueFn:s=>s,suffixes:[{icon:M.save,tooltip:d.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:s=>this.mpplService.titles.create({name:s}).pipe(h(this.indicator))}]};let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({sex:[o.sex,[O.required]],languageId:[o.languageId,[O.required]],title:[o.title,[N.object()]],ssn:[o.ssn,[]],nationalityId:[o.nationalityId,[]],birthDate:[o.birthDate,[]],primaryEmail:[o?.primaryEmail,[O.email]],secondaryEmail:[o?.secondaryEmail,[O.email]],mobilePhone:t.control(o.mobilePhone,[N.phoneNumber()]),hasMobilePhoneWhatsapp:[o?.hasMobilePhoneWhatsapp??!1,[]],homePhone:t.control(o?.homePhone,[N.phoneNumber()]),hasHomePhoneWhatsapp:[o?.hasHomePhoneWhatsapp??!1,[]],workPhone:t.control(o?.workPhone,[N.phoneNumber()]),hasWorkPhoneWhatsapp:[o?.hasWorkPhoneWhatsapp??!1,[]],homeAddressCountryId:[o?.homeAddressCountryId,[]],homeAddressCity:[o?.homeAddressCity,[]],homeAddressStreet:[o?.homeAddressStreet,[]],homeAddressPostalCode:[o?.homeAddressPostalCode,[]],homeAddressProvince:[o?.homeAddressProvince,[]]});}submit(){if(!this.IsValid())return;let e=this.form.value;this.save(this.mpplService.persons.update(this.data.id,{languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone===""?null:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone===""?null:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone===""?null:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddressCountryId:e.homeAddressCountryId,homeAddressCity:e.homeAddressCity,homeAddressStreet:e.homeAddressStreet,homeAddressPostalCode:e.homeAddressPostalCode,homeAddressProvince:e.homeAddressProvince}));}};_.ɵfac=function(t){return new(t||_)();},_.ɵcmp=P({type:_,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[f([R]),q,c],decls:44,vars:12,consts:()=>{let e;e="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let t;t="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let o;o="\u0627\u0644\u0644\u063A\u0629";let s;s="\u0627\u0644\u062C\u0646\u0633";let $;$="\u0627\u0644\u0644\u0642\u0628";let V;V="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let z;z="\u0627\u0644\u062F\u0648\u0644\u0629";let b;b="\u0627\u0644\u0645\u062F\u064A\u0646\u0629";let v;v="\u0627\u0644\u0645\u0642\u0627\u0637\u0639\u0629";let B;B="\u0627\u0644\u0634\u0627\u0631\u0639";let G;G="\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A";let U;U="\u0627\u0644\u062C\u0648\u0627\u0644";let X;X="\u0627\u0644\u0645\u0646\u0632\u0644";let Y;Y="\u0627\u0644\u0639\u0645\u0644";let F;F="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let W;W="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let k;k="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let x;x="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let w;return w="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[k,x,w,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",e,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",s,3,"source","localizedValue"],["formControlName","title","label",$,3,"config","source"],["formControlName","birthDate","label",V],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddressCountryId","label",z,3,"source"],["formControlName","homeAddressCity","label",b],["formControlName","homeAddressProvince","label",v],["formControlName","homeAddressStreet","label",B],["formControlName","homeAddressPostalCode","label",G],["formControlName","mobilePhone","label",U],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",X],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",Y],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",W],[3,"actions"]];},template:function(t,o){t&1&&(n(0,"sz-ui-dialog-header",3),l(1,"mat-dialog-content")(2,"form",4)(3,"div",5),n(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),a(),n(6,"sz-ui-form-field-select",8),l(7,"div",5),n(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),a(),n(10,"sz-ui-form-field-date",11),l(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),C(16,0),a()(),n(17,"sz-ui-form-field-select",14),l(18,"div",5),n(19,"sz-ui-form-field-input",15)(20,"sz-ui-form-field-input",16),a(),l(21,"div",5),n(22,"sz-ui-form-field-input",17)(23,"sz-ui-form-field-input",18),a()(),l(24,"mat-expansion-panel")(25,"mat-expansion-panel-header")(26,"mat-panel-title"),C(27,1),a()(),n(28,"sz-ui-form-field-input",19),l(29,"mat-checkbox",20),u(30,"WhatsApp"),a(),n(31,"sz-ui-form-field-input",21),l(32,"mat-checkbox",22),u(33,"WhatsApp"),a(),n(34,"sz-ui-form-field-input",23),l(35,"mat-checkbox",24),u(36,"WhatsApp"),a()(),l(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),C(40,2),a()(),n(41,"sz-ui-form-field-input",25)(42,"sz-ui-form-field-input",26),a()()()()(),n(43,"sz-ui-dialog-actions",27)),t&2&&(E("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),E("formGroup",o.form),m(2),E("source",o.nationalities),m(2),E("source",o.languages),m(2),E("source",o.sexes)("localizedValue",!0),m(),E("config",o.titleAutoCompleteConfig)("source",o.titles),m(8),E("source",o.countries),m(26),E("actions",o.actions));},dependencies:[ne,ee,Q,Z,oe,te,Le,Ae,Te,ue,Me,Oe,Ce,pe,de,me,Pe,Ne,Ve,$e,Re,De,ye],encapsulation:2});let r=_;return r;})();function Ge(r,_){if(r&1&&n(0,"sz-ui-card",2),r&2){let ve=_.$implicit;E("card",ve);}}var be=(()=>{let _=class _{constructor(){this.dialog=S(Se),this.mlabService=S(I),this.route=S(_e),this.router=S(re),this.personNamePipe=S(y),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:fe.default([p.menu([p.edit(this.openSaveComponent.bind(this)),p.divider(),p.default().setTitle(d.names).setIcon(M.info).setClickFn(()=>this.navigate("names")),p.default().setTitle(d.documents).setIcon(M.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let e={icon:M.science,header:{info:d.analyses,title:0},indicator:H(!0),actions:[new he(d.add).setClickFn(()=>this.router.navigate([L.Analyses,"create"],{state:{personId:this.person.id}}))],clickFn:()=>this.router.navigate([L.Analyses],{state:{filter:{field:"personId",op:ae.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:se.create().equal("personId",this.person.id).filters()}).pipe(h(e.indicator)).subscribe(t=>{e.header&&(e.header.title=t);}),e;}navigate(e){this.router.navigate([e],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(ze,{data:this.person}).afterClosed().subscribe(e=>{e&&(this.person=e);});}};_.ɵfac=function(t){return new(t||_)();},_.ɵcmp=P({type:_,selectors:[["sz-medisy-people-person"]],standalone:!0,features:[f([I,y]),c],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(t,o){t&1&&(n(0,"sz-ui-app-bar",0),l(1,"div",1),J(2,Ge,1,1,"sz-ui-card",2,j),a()),t&2&&(E("config",o.appBarConfig),m(2),K(o.items));},dependencies:[Ie,ce],encapsulation:2});let r=_;return r;})();var yo=[{path:"",component:be},{path:"names",loadComponent:()=>import("./chunk-U5NK5N7X.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-KIJHQ2AM.js").then(r=>r.PersonDocumentsComponent)}];export{yo as default};/**i18n:9054193bb4dcc24d51a6dba534830e37dcd91e77a8a9ecb6b346a792eb872c67*/