import{b as R}from"./chunk-HKKNARWM.js";import{a as Ne,b as de,c as Oe,d as pe,e as ue}from"./chunk-KQNGY4RR.js";import{a as Te}from"./chunk-C5SGPCFT.js";import{a as p}from"./chunk-3CTEWNW5.js";import{f as me,g as Se,h as Me,k as Ce}from"./chunk-M637VPZN.js";import{e as se}from"./chunk-VK4CZRIZ.js";import{a as J,b as K,e as Q,g as U}from"./chunk-LXPLDGFP.js";import{c as ee,d as oe,h as ie,i as te,j as ne,o as _e,p as le,q as Ee,r as ae,t as re}from"./chunk-QEZI75P7.js";import{c as O}from"./chunk-TCCIVYCZ.js";import{d as r,f as x,g as W,k,l as H,n as V,q as w,r as j,u as q}from"./chunk-BHO3RGW2.js";import{Y as Z}from"./chunk-TGOP7ZDO.js";import{Jb as a,Kb as n,Lb as _,Vb as N,a as B,ab as m,bb as M,gc as d,mc as X,na as F,nc as Y,pb as v,s as G,yb as s}from"./chunk-2TFHNGIL.js";import{a as C,b as T}from"./chunk-IL567IQQ.js";var Ue=(()=>{let S=class S extends me{constructor(e,o,t,l){super(t),this.mpplService=e,this.fb=o,this.dialog=t,this.data=l,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(R).map(E=>R[E]),this.subscriptions=new B(),this.titles=this.mpplService.titles.get(T(C({},O.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:E=>(typeof E=="string"&&(this.titles=this.mpplService.titles.get(T(C({query:E},O.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:E=>E.name,optionValueFn:E=>E,suffixes:[{icon:se.save,tooltip:Z.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:E=>this.mpplService.titles.create({name:E})}]},this.form=o.group({firstName:o.control(l?.firstName,[r.required,r.maxLength(128)]),lastName:o.control(l?.lastName,[r.required,r.maxLength(128)]),fatherName:o.control(l?.fatherFirstName?`${l.fatherFirstName} ${l?.lastName}`:null,[r.maxLength(128)]),motherName:o.control(l?.motherName,[r.maxLength(128)]),birthDate:o.control(l?.birthDate,[]),nationalityId:o.control(null,[]),ssn:o.control(l?.ssn,[r.maxLength(128)]),languageId:o.control(null,[r.required]),sex:o.control(null,[r.required]),title:o.control(null,[Te()]),primaryEmail:[null,[r.email]],secondaryEmail:[null,[r.email]],mobilePhone:[null,[]],hasMobilePhoneWhatsapp:[!1,[]],homePhone:[null,[]],hasHomePhoneWhatsapp:[!1,[]],workPhone:[null,[]],hasWorkPhoneWhatsapp:[!1,[]],homeAddress:new k(l?.address)}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.form.patchValue({sex:null,languageId:null});return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders(C({query:e},O.minimal())).pipe(G(o=>o.items)).subscribe(o=>{!o||o.length===0||this.form.patchValue({sex:o[0].sex,languageId:o[0].languageId});});}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddress:e.homeAddress}).pipe(ie(this.indicator),te(this.alert)).subscribe(o=>{this.dialog.close(o);});}};S.ɵfac=function(o){return new(o||S)(M(p),M(j),M(J),M(K));},S.ɵcmp=F({type:S,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[X([p]),v,Y],decls:45,vars:11,consts:()=>{let e;e="Title";let o;o="First name";let t;t="Last name";let l;l="Father name";let E;E="Mother name";let g;g="Nationality";let P;P="SSN";let f;f="Sex";let c;c="Language";let h;h="BirthDate";let I;I="Mobile";let A;A="Home";let L;L="Work";let $;$="Primary Email";let D;D="Secondary Email";let y;y="Home Address";let z;z="Phones";let b;return b="Emails",[y,z,b,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title","label",e,3,"source","config"],["formControlName","firstName","label",o],["formControlName","lastName","label",t],["formControlName","fatherName","label",l],["formControlName","motherName","label",E],["formControlName","nationalityId","label",g,3,"source"],["formControlName","ssn","label",P],["formControlName","sex","label",f,3,"source","localizedValue"],["formControlName","languageId","label",c,3,"source"],["formControlName","birthDate","label",h],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",I],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",A],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",L],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",$],["formControlName","secondaryEmail","label",D],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",3),a(1,"mat-dialog-content")(2,"form",4)(3,"div",5),_(4,"sz-ui-form-field-autocomplete",6),n(),a(5,"div",5),_(6,"sz-ui-form-field-input",7)(7,"sz-ui-form-field-input",8),n(),a(8,"div",5),_(9,"sz-ui-form-field-input",9)(10,"sz-ui-form-field-input",10),n(),a(11,"div",5),_(12,"sz-ui-form-field-select",11)(13,"sz-ui-form-field-input",12),n(),a(14,"div",5),_(15,"sz-ui-form-field-select",13)(16,"sz-ui-form-field-select",14),n(),_(17,"sz-ui-form-field-date",15),a(18,"div",16)(19,"mat-accordion",17)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),N(23,0),n()(),_(24,"sz-ui-form-field-address",18),n(),a(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),N(28,1),n()(),_(29,"sz-ui-form-field-input",19),a(30,"mat-checkbox",20),d(31,"WhatsApp"),n(),_(32,"sz-ui-form-field-input",21),a(33,"mat-checkbox",22),d(34,"WhatsApp"),n(),_(35,"sz-ui-form-field-input",23),a(36,"mat-checkbox",24),d(37,"WhatsApp"),n()(),a(38,"mat-expansion-panel")(39,"mat-expansion-panel-header")(40,"mat-panel-title"),N(41,2),n()(),_(42,"sz-ui-form-field-input",25)(43,"sz-ui-form-field-input",26),n()()()()(),_(44,"sz-ui-dialog-actions",27)),o&2&&(s("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),s("formGroup",t.form),m(2),s("source",t.titles)("config",t.titleAutoCompleteConfig),m(8),s("source",t.nationalities),m(3),s("source",t.sexes)("localizedValue",!0),m(),s("source",t.languages),m(28),s("actions",t.actions));},dependencies:[q,H,x,W,V,w,U,Q,ue,pe,Ne,de,Oe,Ee,le,Ce,Se,Me,re,ee,_e,ae,ne,oe],encapsulation:2});let u=S;return u;})();export{Ue as a};/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/