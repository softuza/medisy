import{b as T}from"./chunk-ZDPRNFLQ.js";import{a as de,b as Ne,c as Oe,d as pe,e as ue}from"./chunk-CZVACMCC.js";import{a as Te}from"./chunk-INUIK7WM.js";import{a as u}from"./chunk-4RJ7HJNV.js";import{f as me,g as Se,h as Ce,k as Me}from"./chunk-LBDPOYNQ.js";import{a as J,b as K,e as Q,g as U}from"./chunk-XPOR4ANW.js";import{c as Z,d as ee,h as oe,i as te,j as ne,o as _e,p as le,q as Ee,r as ae,t as re}from"./chunk-M5NHCKZY.js";import{c as N}from"./chunk-PYOUUVMA.js";import{d as a,f as x,g as W,k,l as w,n as H,q as V,r as q,t as j}from"./chunk-H2FFMEH6.js";import{a as se}from"./chunk-3B2UHMBE.js";import{a as ie}from"./chunk-TCPYXQGZ.js";import{Jb as E,Kb as n,Lb as _,Vb as M,a as B,bb as s,gc as d,ja as S,mb as X,mc as Y,na as F,nc as v,s as G,yb as r}from"./chunk-GTR6A7KK.js";import{a as C,b as p}from"./chunk-NLUW4JS2.js";var Qe=(()=>{let m=class m extends me{constructor(){let e=S(J);super(e),this.mpplService=S(u),this.fb=S(q),this.data=S(K),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(T).map(l=>T[l]),this.subscriptions=new B(),this.titles=this.mpplService.titles.get(p(C({},N.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:l=>(typeof l=="string"&&(this.titles=this.mpplService.titles.get(p(C({query:l},N.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:l=>l.name,optionValueFn:l=>l,suffixes:[{icon:se.save,tooltip:ie.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:l=>this.mpplService.titles.create({name:l})}]};let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({firstName:o.control(t?.firstName,[a.required,a.maxLength(128)]),lastName:o.control(t?.lastName,[a.required,a.maxLength(128)]),fatherName:o.control(t?.fatherFirstName?`${t.fatherFirstName} ${t?.lastName}`:null,[a.maxLength(128)]),motherName:o.control(t?.motherName,[a.maxLength(128)]),birthDate:o.control(t?.birthDate,[]),nationalityId:o.control(null,[]),ssn:o.control(t?.ssn,[a.maxLength(128)]),languageId:o.control(null,[a.required]),sex:o.control(null,[a.required]),title:o.control(null,[Te()]),primaryEmail:[null,[a.email]],secondaryEmail:[null,[a.email]],mobilePhone:[null,[]],hasMobilePhoneWhatsapp:[!1,[]],homePhone:[null,[]],hasHomePhoneWhatsapp:[!1,[]],workPhone:[null,[]],hasWorkPhoneWhatsapp:[!1,[]],homeAddress:new k(t?.address)}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.form.patchValue({sex:null,languageId:null});return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders(C({query:e},N.minimal())).pipe(G(o=>o.items)).subscribe(o=>{!o||o.length===0||this.form.patchValue({sex:o[0].sex,languageId:o[0].languageId});});}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone===""?null:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone===""?null:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone===""?null:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddress:e.homeAddress}).pipe(oe(this.indicator),te(this.alert)).subscribe(o=>{this.dialog.close(o);});}};m.ɵfac=function(o){return new(o||m)();},m.ɵcmp=F({type:m,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[Y([u]),X,v],decls:45,vars:11,consts:()=>{let e;e="Title";let o;o="First name";let t;t="Last name";let l;l="Father name";let f;f="Mother name";let g;g="Nationality";let P;P="SSN";let R;R="Sex";let h;h="Language";let c;c="BirthDate";let A;A="Mobile";let I;I="Home";let L;L="Work";let $;$="Primary Email";let b;b="Secondary Email";let D;D="Home Address";let y;y="Phones";let z;return z="Emails",[D,y,z,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title","label",e,3,"source","config"],["formControlName","firstName","label",o],["formControlName","lastName","label",t],["formControlName","fatherName","label",l],["formControlName","motherName","label",f],["formControlName","nationalityId","label",g,3,"source"],["formControlName","ssn","label",P],["formControlName","sex","label",R,3,"source","localizedValue"],["formControlName","languageId","label",h,3,"source"],["formControlName","birthDate","label",c],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",A],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",I],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",L],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",$],["formControlName","secondaryEmail","label",b],[3,"actions"]];},template:function(o,t){o&1&&(_(0,"sz-ui-dialog-header",3),E(1,"mat-dialog-content")(2,"form",4)(3,"div",5),_(4,"sz-ui-form-field-autocomplete",6),n(),E(5,"div",5),_(6,"sz-ui-form-field-input",7)(7,"sz-ui-form-field-input",8),n(),E(8,"div",5),_(9,"sz-ui-form-field-input",9)(10,"sz-ui-form-field-input",10),n(),E(11,"div",5),_(12,"sz-ui-form-field-select",11)(13,"sz-ui-form-field-input",12),n(),E(14,"div",5),_(15,"sz-ui-form-field-select",13)(16,"sz-ui-form-field-select",14),n(),_(17,"sz-ui-form-field-date",15),E(18,"div",16)(19,"mat-accordion",17)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),M(23,0),n()(),_(24,"sz-ui-form-field-address",18),n(),E(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),M(28,1),n()(),_(29,"sz-ui-form-field-input",19),E(30,"mat-checkbox",20),d(31,"WhatsApp"),n(),_(32,"sz-ui-form-field-input",21),E(33,"mat-checkbox",22),d(34,"WhatsApp"),n(),_(35,"sz-ui-form-field-input",23),E(36,"mat-checkbox",24),d(37,"WhatsApp"),n()(),E(38,"mat-expansion-panel")(39,"mat-expansion-panel-header")(40,"mat-panel-title"),M(41,2),n()(),_(42,"sz-ui-form-field-input",25)(43,"sz-ui-form-field-input",26),n()()()()(),_(44,"sz-ui-dialog-actions",27)),o&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),r("formGroup",t.form),s(2),r("source",t.titles)("config",t.titleAutoCompleteConfig),s(8),r("source",t.nationalities),s(3),r("source",t.sexes)("localizedValue",!0),s(),r("source",t.languages),s(28),r("actions",t.actions));},dependencies:[j,w,x,W,H,V,U,Q,ue,pe,de,Ne,Oe,Ee,le,Me,Se,Ce,re,Z,_e,ae,ne,ee],encapsulation:2});let O=m;return O;})();export{Qe as a};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/