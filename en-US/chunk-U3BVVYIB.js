import{a as Ae,c as Le}from"./chunk-5ALZ3CD4.js";import"./chunk-ZO7FW6I4.js";import{b as R}from"./chunk-F6PFTMTW.js";import{a as O}from"./chunk-3VK5YRXI.js";import{a as Re,b as De,c as ye,d as $e,e as Ve}from"./chunk-DXXJJCHR.js";import{b as D}from"./chunk-ZSMAA2CB.js";import{a as I}from"./chunk-NRGCWEIT.js";import{g as fe,h as ce,i as ge,l as Te}from"./chunk-466VJTKM.js";import{a as L}from"./chunk-3CHAK4ER.js";import"./chunk-2YT4TIIL.js";import{a as le,b as Ee,d as Se,e as me,g as de}from"./chunk-KRRL7IVD.js";import{c as Me,g as pe,l as Oe,n as Ne,o as Pe,p as Ce,s as ue}from"./chunk-LTGHULWB.js";import{b as c}from"./chunk-5ZDKHU6W.js";import"./chunk-SN72RCND.js";import{c as T}from"./chunk-JHOCZ5YU.js";import"./chunk-D3M4DBPV.js";import{d as p,f as Q,g as Z,l as ee,o as oe,r as te,s as ie,u as ne}from"./chunk-74M55ZSL.js";import{a as A}from"./chunk-3FYYGPZQ.js";import{a as d,b as M,c as he}from"./chunk-KA6PA4V4.js";import{a as Ie}from"./chunk-67A3BINV.js";import"./chunk-OP3OZJ5W.js";import{c as m}from"./chunk-ULSP7SQP.js";import"./chunk-RQAKYFHA.js";import{p as _e,r as re,t as ae,x as se}from"./chunk-WQ25OTMI.js";import"./chunk-ELYMBAIC.js";import{Gb as j,Hb as J,Ib as K,Jb as s,Kb as a,Lb as n,Vb as P,bb as S,gc as C,ja as E,kb as H,mb as q,mc as u,na as N,nc as f,yb as l}from"./chunk-MF5XXDEZ.js";import{a as h,b as g}from"./chunk-GKLVXQPO.js";var ze=(()=>{let _=class _ extends fe{constructor(){super(E(le)),this.mpplService=E(I),this.fb=E(ie),this.data=E(Ee),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.countries=this.mpplService.countries.getAll({orderBy:["name"]}),this.sexes=Object.keys(R).map(t=>R[t]),this.titles=this.mpplService.titles.get(g(h({},T.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:t=>(typeof t=="string"&&(this.titles=this.mpplService.titles.get(g(h({query:t},T.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:t=>t.name,optionValueFn:t=>t,suffixes:[{icon:d.save,tooltip:m.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:t=>this.mpplService.titles.create({name:t}).pipe(c(this.indicator))}]};let e=this.fb,o=this.data;this.form=e.group({sex:[o.sex,[p.required]],languageId:[o.languageId,[p.required]],title:[o.title,[O.object()]],ssn:[o.ssn,[]],nationalityId:[o.nationalityId,[]],birthDate:[o.birthDate,[]],primaryEmail:[o?.primaryEmail,[p.email]],secondaryEmail:[o?.secondaryEmail,[p.email]],mobilePhone:e.control(o.mobilePhone,[O.phoneNumber()]),hasMobilePhoneWhatsapp:[o?.hasMobilePhoneWhatsapp??!1,[]],homePhone:e.control(o?.homePhone,[O.phoneNumber()]),hasHomePhoneWhatsapp:[o?.hasHomePhoneWhatsapp??!1,[]],workPhone:e.control(o?.workPhone,[O.phoneNumber()]),hasWorkPhoneWhatsapp:[o?.hasWorkPhoneWhatsapp??!1,[]],homeAddressCountryId:[o?.homeAddressCountryId,[]],homeAddressCity:[o?.homeAddressCity,[]],homeAddressStreet:[o?.homeAddressStreet,[]],homeAddressPostalCode:[o?.homeAddressPostalCode,[]],homeAddressProvince:[o?.homeAddressProvince,[]]});}submit(){if(!this.IsValid())return;let e=this.form.value;this.save(this.mpplService.persons.update(this.data.id,{languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone===""?null:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone===""?null:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone===""?null:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddressCountryId:e.homeAddressCountryId,homeAddressCity:e.homeAddressCity,homeAddressStreet:e.homeAddressStreet,homeAddressPostalCode:e.homeAddressPostalCode,homeAddressProvince:e.homeAddressProvince}));}};_.ɵfac=function(o){return new(o||_)();},_.ɵcmp=N({type:_,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[u([I]),q,f],decls:44,vars:12,consts:()=>{let e;e="Nationality";let o;o="SSN";let t;t="Language";let y;y="Sex";let $;$="Title";let V;V="BirthDate";let z;z="Country";let b;b="City";let v;v="Province";let B;B="Street";let G;G="Postal Code";let U;U="Mobile";let X;X="Home";let Y;Y="Work";let F;F="Primary Email";let x;x="Secondary Email";let W;W="Home Address";let k;k="Phones";let w;return w="Emails",[W,k,w,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",e,3,"source"],["formControlName","ssn","label",o],["formControlName","languageId","label",t,3,"source"],["formControlName","sex","label",y,3,"source","localizedValue"],["formControlName","title","label",$,3,"config","source"],["formControlName","birthDate","label",V],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddressCountryId","label",z,3,"source"],["formControlName","homeAddressCity","label",b],["formControlName","homeAddressProvince","label",v],["formControlName","homeAddressStreet","label",B],["formControlName","homeAddressPostalCode","label",G],["formControlName","mobilePhone","label",U],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",X],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",Y],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",x],[3,"actions"]];},template:function(o,t){o&1&&(n(0,"sz-ui-dialog-header",3),s(1,"mat-dialog-content")(2,"form",4)(3,"div",5),n(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input-text",7),a(),n(6,"sz-ui-form-field-select",8),s(7,"div",5),n(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),a(),n(10,"sz-ui-form-field-date",11),s(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),P(16,0),a()(),n(17,"sz-ui-form-field-select",14),s(18,"div",5),n(19,"sz-ui-form-field-input-text",15)(20,"sz-ui-form-field-input-text",16),a(),s(21,"div",5),n(22,"sz-ui-form-field-input-text",17)(23,"sz-ui-form-field-input-text",18),a()(),s(24,"mat-expansion-panel")(25,"mat-expansion-panel-header")(26,"mat-panel-title"),P(27,1),a()(),n(28,"sz-ui-form-field-input-text",19),s(29,"mat-checkbox",20),C(30,"WhatsApp"),a(),n(31,"sz-ui-form-field-input-text",21),s(32,"mat-checkbox",22),C(33,"WhatsApp"),a(),n(34,"sz-ui-form-field-input-text",23),s(35,"mat-checkbox",24),C(36,"WhatsApp"),a()(),s(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),P(40,2),a()(),n(41,"sz-ui-form-field-input-text",25)(42,"sz-ui-form-field-input-text",26),a()()()()(),n(43,"sz-ui-dialog-actions",27)),o&2&&(l("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),S(2),l("formGroup",t.form),S(2),l("source",t.nationalities),S(2),l("source",t.languages),S(2),l("source",t.sexes)("localizedValue",!0),S(),l("config",t.titleAutoCompleteConfig)("source",t.titles),S(8),l("source",t.countries),S(26),l("actions",t.actions));},dependencies:[ne,ee,Q,Z,oe,te,Te,ce,ge,ue,Me,Oe,Ce,pe,de,me,Pe,Ne,Ve,$e,Re,De,ye],encapsulation:2});let r=_;return r;})();function Ge(r,_){if(r&1&&n(0,"sz-ui-card",2),r&2){let ve=_.$implicit;l("card",ve);}}var be=(()=>{let _=class _{constructor(){this.dialog=E(Se),this.mlabService=E(L),this.route=E(_e),this.router=E(re),this.personNamePipe=E(D),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:he.default([M.menu([M.edit(this.openSaveComponent.bind(this)),M.divider(),M.default().setTitle(m.names).setIcon(d.info).setClickFn(()=>this.navigate("names")),M.default().setTitle(m.documents).setIcon(d.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let e={icon:d.science,header:{info:m.analyses,title:0},indicator:H(!0),actions:[new Le(m.add).setClickFn(()=>this.router.navigate([A.Analyses,"create"],{state:{personId:this.person.id}}))],clickFn:()=>this.router.navigate([A.Analyses],{state:{filter:{field:"personId",op:ae.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:se.create().equal("personId",this.person.id).filters()}).pipe(c(e.indicator)).subscribe(o=>{e.header&&(e.header.title=o);}),e;}navigate(e){this.router.navigate([e],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(ze,{data:this.person}).afterClosed().subscribe(e=>{e&&(this.person=e);});}};_.ɵfac=function(o){return new(o||_)();},_.ɵcmp=N({type:_,selectors:[["sz-medisy-people-person"]],standalone:!0,features:[u([L,D]),f],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(o,t){o&1&&(n(0,"sz-ui-app-bar",0),s(1,"div",1),J(2,Ge,1,1,"sz-ui-card",2,j),a()),o&2&&(l("config",t.appBarConfig),S(2),K(t.items));},dependencies:[Ie,Ae],encapsulation:2});let r=_;return r;})();var yo=[{path:"",component:be},{path:"names",loadComponent:()=>import("./chunk-YYLMGMRN.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-65QPEHJA.js").then(r=>r.PersonDocumentsComponent)}];export{yo as default};/**i18n:d3e3083c250d91c646b86472e18f8369ebb747da11392505520eb4a69fa49de0*/