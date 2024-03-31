import{b as ge}from"./chunk-H44SFEIM.js";import{a as $,b as A}from"./chunk-2XX547FZ.js";import{a as ft,b as ht,c as gt,d as Tt,e as Nt}from"./chunk-ROKHJRAW.js";import{a as C}from"./chunk-CCXKVL2W.js";import{a as ct}from"./chunk-PHZERCY2.js";import{d as et,h as tt}from"./chunk-GWX4UPVQ.js";import{a as Ot}from"./chunk-JSLRBKRE.js";import{a as Ce,b as Mt,c as Me,d as fe,e as he,f as Y}from"./chunk-GF52CWG5.js";import{a as dt}from"./chunk-A4WL3FYI.js";import{e as Et,f as St,g as ut,j as Ct}from"./chunk-NORSX7AN.js";import{a as Ke,b as Je,e as Qe,g as Ue}from"./chunk-4Z4QG25E.js";import{a as me,b as _e,c as ot,d as nt,e as pe,f as de,g as ce,h as Se,m as st,p as ue,q as mt,r as _t,t as pt}from"./chunk-RIHPS5KS.js";import{c as R,d as Ee,e as rt}from"./chunk-IWL564QK.js";import{b as se}from"./chunk-NDMBF3VG.js";import{a as le,b as X}from"./chunk-ZADXNDER.js";import{b as it,c as at,d as lt}from"./chunk-XVKVAOPG.js";import{a as ie,b as oe,d as ne,h as re,i as ae}from"./chunk-2HLVRV4Y.js";import{b as W,d as h,e as K,f as G,g as Xe,j as q,k as Ye,l as J,m as He,p as qe,q as ke,t as V}from"./chunk-QB7MQTPZ.js";import{t as Q}from"./chunk-6PBKCSCG.js";import{c as je,e as We}from"./chunk-NU73GHW6.js";import{$ as U,ca as Z,ga as ee,ha as te,ka as Ze}from"./chunk-CJMWB6ZO.js";import{Da as g,Db as p,Ea as T,Ib as S,Kb as D,Lb as B,Mb as w,Nb as l,Ob as r,Pb as _,Qb as Be,Rb as we,Tb as P,Zb as M,_b as I,a as x,ac as c,b as ze,bc as Ge,cc as Ve,g as xe,hb as a,ib as d,ic as y,jc as u,kc as O,lc as H,pc as v,qc as F,tb as De,ua as L,ub as b,uc as k,vc as j,y as be,zb as f}from"./chunk-HNAKTLBJ.js";function At(i,n){if(i&1&&(l(0,"mat-card-subtitle"),u(1),r()),i&2){let s=c(2);a(),O(s.person.primaryEmail);}}function Lt(i,n){if(i&1&&(Be(0,1),l(1,"mat-card-subtitle"),u(2),r(),l(3,"mat-card-subtitle"),u(4),r(),f(5,At,2,1,"mat-card-subtitle"),we()),i&2){let s=c();a(2),O(s.getSex()),a(2),O(s.getMobilePhone()),a(),S(5,s.person.primaryEmail?5:-1);}}var hi=(()=>{let n=class n{set personId(e){this._personId=e,this.getPerson(e);}get personId(){return this._personId;}constructor(e,t,o){this.mpplService=e,this.personNamePipe=t,this.router=o,this.indicator=De(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(e){this.mpplService.persons.getById(e).pipe(R(this.indicator)).subscribe(t=>{this.person=t,this.card.title=this.personNamePipe.transform(t);});}getSex(){return lt(this.person?.sex);}getMobilePhone(){return this.person.mobilePhone.countryCode&&this.person.mobilePhone.number?`${this.person.mobilePhone.countryCode}${this.person.mobilePhone.number}`:null;}};n.ɵfac=function(t){return new(t||n)(d(C),d(A),d(je));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[v([A,$,C]),F],decls:2,vars:3,consts:[[3,"card","indicator"],["subtitle",""]],template:function(t,o){t&1&&(l(0,"sz-ui-card",0),f(1,Lt,6,3,"ng-container",1),r()),t&2&&(p("card",o.card)("indicator",o.indicator),a(),S(1,o.person?1:-1));},dependencies:[We,tt,et,ct,X,it,Ze,Y],encapsulation:2});let i=n;return i;})();var Dt=[[["","suffix",""]]],Bt=["[suffix]"];function wt(i,n){if(i&1){let s=P();l(0,"mat-chip-row",11),I("removed",function(){let t=g(s).$implicit,o=c(2);return T(o.removeSelection(t));}),u(1),k(2,"personName"),l(3,"button",12)(4,"mat-icon"),u(5,"cancel"),r()()();}if(i&2){let s=n.$implicit;a(),H(" ",j(2,1,s)," ");}}function Gt(i,n){if(i&1){let s=P();l(0,"mat-chip-grid",null,1),B(2,wt,6,3,"mat-chip-row",null,D),r(),l(4,"input",10,2),I("matChipInputTokenEnd",function(){g(s);let t=c();return T(t.addSelection());}),r();}if(i&2){let s=y(1),e=c(),t=y(7);a(2),w(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Vt(i,n){if(i&1&&_(0,"input",13,2),i&2){let s=c(),e=y(7);p("matAutocomplete",e)("formControl",s.control);}}function Xt(i,n){if(i&1&&(l(0,"small"),u(1),k(2,"personAge"),r()),i&2){let s=c().$implicit;a(),O(j(2,1,s==null?null:s.birthDate));}}function Yt(i,n){if(i&1&&(l(0,"mat-option",7)(1,"div",14)(2,"strong"),u(3),k(4,"personName"),r(),f(5,Xt,3,3,"small"),r()()),i&2){let s=n.$implicit;p("value",s),a(3),O(j(4,3,s)),a(2),S(5,s!=null&&s.birthDate?5:-1);}}function Ht(i,n){i&1&&(l(0,"mat-error"),M(1,3),r());}function qt(i,n){i&1&&(l(0,"mat-error"),M(1,4),r());}function kt(i,n){i&1&&_(0,"mat-progress-bar",9);}var Di=(()=>{let n=class n extends Se{constructor(e,t,o,m){super(e),this.ngControl=e,this.mpplService=t,this.personNamePipe=o,this.personAgePipe=m,this.query="",this.filtration=Q.create(),this.label="Name, phone, or email",this.szOptionFormatFn=N=>this.personNamePipe.transform(N);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(Ee(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let t=e.split(" ");t.length===2?this.filtration=Q.create().iAny("names.firstName",t[0]).iAny("names.lastName",t[1]):this.query=t[0];}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.filtration=Q.create(),this.totalPages=-1,this.pagination.pageIndex=1,this.options=[];}fetch(){this.mpplService.persons.get(x({query:this.query,filters:this.filtration.filters()},this.pagination)).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C),d(A),d($));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-search"]],standalone:!0,features:[v([C,$,A]),b,F],ngContentSelectors:Bt,decls:15,vars:7,consts:()=>{let e;e="This field is required";let t;return t="This field is not valid",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,[1,"container"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix",""],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[1,"sz-form"]];},template:function(t,o){if(t&1){let m=P();Ge(Dt),l(0,"div",5)(1,"mat-form-field")(2,"mat-label"),u(3),r(),f(4,Gt,6,4)(5,Vt,2,2),l(6,"mat-autocomplete",6,0),I("optionSelected",function(z){return g(m),T(o.optionSelected(z));})("szScrolled",function(){return g(m),T(o.scroll());}),B(8,Yt,6,5,"mat-option",7,D),r(),f(10,Ht,2,0,"mat-error")(11,qt,2,0,"mat-error"),l(12,"span",8),Ve(13),r()(),f(14,kt,1,0,"mat-progress-bar",9),r();}t&2&&(a(3),O(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),w(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(3),S(14,o.indicator()?14:-1));},dependencies:[V,W,G,J,ae,re,ie,oe,ne,ce,pe,U,de,X,le,_e,me,Z,Y,fe,he,Ce,Me,te,ee,ue,$,A],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();function jt(i,n){if(i&1){let s=P();l(0,"mat-chip-row",12),I("removed",function(){let t=g(s).$implicit,o=c(2);return T(o.removeSelection(t));}),u(1),l(2,"button",13)(3,"mat-icon"),u(4,"cancel"),r()()();}if(i&2){let s=n.$implicit,e=c(2);a(),H(" ",e.getSelectionFormat(s)," ");}}function Wt(i,n){if(i&1){let s=P();l(0,"mat-chip-grid",null,1),B(2,jt,5,1,"mat-chip-row",null,D),r(),l(4,"input",11,2),I("matChipInputTokenEnd",function(){g(s);let t=c();return T(t.addSelection());}),r();}if(i&2){let s=y(1),e=c(),t=y(7);a(2),w(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Kt(i,n){if(i&1&&_(0,"input",14,2),i&2){let s=c(),e=y(7);p("matAutocomplete",e)("formControl",s.control);}}function Jt(i,n){if(i&1&&(l(0,"mat-option",8),u(1),r()),i&2){let s=n.$implicit,e=c();p("value",e.getOptionValue(s)),a(),H(" ",e.getOptionContent(s)," ");}}function Qt(i,n){i&1&&(l(0,"mat-error"),M(1,3),r());}function Ut(i,n){i&1&&(l(0,"mat-error"),M(1,4),r());}function Zt(i,n){if(i&1){let s=P();l(0,"mat-chip",15),I("click",function(){g(s);let t=c();return T(t.save());}),M(1,5),r();}}function ei(i,n){i&1&&_(0,"mat-progress-bar",10);}var It=(()=>{let n=class n extends Se{constructor(e,t){super(e),this.ngControl=e,this.mpplService=t,this.label=at.title,this.query=null,this.orderBy=["name"],this.isNew=!1,this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(Ee(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.isNew=!1,this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mpplService.titles.get(ze(x({query:this.query},se.unpaged()),{orderBy:this.orderBy})).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,e.count==0&&this.query&&(this.isNew=!0);});}save(){this.mpplService.titles.create({name:this.query}).pipe(R(this.indicator)).subscribe(e=>{this.isNew=!1,this.control.setValue(e);});}getOptionValue(e){return e;}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-title-search"]],inputs:{query:"query",orderBy:"orderBy"},standalone:!0,features:[v([dt]),b,F],decls:14,vars:8,consts:()=>{let e;e="This field is required";let t;t="This field is not valid";let o;return o="Save",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,o,[1,"container"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix","","color","accent",1,"tw-m-1"],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],["matSuffix","","color","accent",1,"tw-m-1",3,"click"]];},template:function(t,o){if(t&1){let m=P();l(0,"div",6)(1,"mat-form-field")(2,"mat-label"),u(3),r(),f(4,Wt,6,4)(5,Kt,2,2),l(6,"mat-autocomplete",7,0),I("optionSelected",function(z){return g(m),T(o.optionSelected(z));})("szScrolled",function(){return g(m),T(o.scroll());}),B(8,Jt,2,2,"mat-option",8,D),r(),f(10,Qt,2,0,"mat-error")(11,Ut,2,0,"mat-error")(12,Zt,2,0,"mat-chip",9),r(),f(13,ei,1,0,"mat-progress-bar",10),r();}t&2&&(a(3),O(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),w(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(),S(12,o.isNew&&!o.indicator()?12:-1),a(),S(13,o.indicator()?13:-1));},dependencies:[V,W,G,J,ae,re,ie,oe,ne,ce,pe,U,de,X,le,_e,me,Z,Y,Mt,fe,he,Ce,Me,te,ee,ue],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();var yo=(()=>{let n=class n extends Et{constructor(e,t,o,m){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=m,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(ge).map(N=>ge[N]),this.subscriptions=new xe(),this.form=t.group({firstName:t.control(m?.firstName,[h.required,h.maxLength(128)]),lastName:t.control(m?.lastName,[h.required,h.maxLength(128)]),fatherName:t.control(m?.fatherFirstName?`${m.fatherFirstName} ${m?.lastName}`:null,[h.maxLength(128)]),motherName:t.control(m?.motherName,[h.maxLength(128)]),birthDate:t.control(m?.birthDate,[]),nationalityId:t.control(null,[]),ssn:t.control(m?.ssn,[h.maxLength(128)]),languageId:t.control(null,[h.required]),sex:t.control(null,[h.required]),title:t.control(null,[Ot()]),primaryEmail:[null,[h.email]],secondaryEmail:[null,[h.email]],mobilePhone:new q(null),homePhone:new q(null),workPhone:new q(null),homeAddress:new q({street:m?.address?"":void 0,city:m?.address,country:m?.address?"":void 0,province:m?.address?"":void 0,postalCode:m?.address?"":void 0})}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.updateSex(null),this.updateLanguageId(null);return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders(x({query:e},se.minimal())).pipe(be(t=>t.items)).subscribe(t=>{!t||t.length===0||(this.updateSex(t[0].sex),this.updateLanguageId(t[0].languageId));});}updateSex(e){this.form.controls.sex.setValue(e);}updateLanguageId(e){this.form.controls.languageId.setValue(e);}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone,homePhone:e.homePhone,workPhone:e.workPhone,homeAddress:e.homeAddress}).pipe(R(this.indicator),rt(this.alert)).subscribe(t=>{this.dialog.close(t);});}};n.ɵfac=function(t){return new(t||n)(d(C),d(ke),d(Ke),d(Je));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[v([C]),b,F],decls:47,vars:7,consts:()=>{let e;e="First name";let t;t="Last name";let o;o="Father name";let m;m="Mother name";let N;N="Nationality";let z;z="SSN";let Oe;Oe="Sex";let Pe;Pe="Language";let Ie;Ie="BirthDate";let Re;Re="Primary Email";let Ae;Ae="Secondary Email";let Le;Le="Home Address";let ye;ye="Mobile Phone";let ve;ve="Home Phone";let Fe;Fe="Work Phone";let $e;return $e="Emails",[Le,ye,ve,Fe,$e,[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title"],["formControlName","firstName","label",e],["formControlName","lastName","label",t],["formControlName","fatherName","label",o],["formControlName","motherName","label",m],["formControlName","nationalityId","label",N,3,"source"],["formControlName","ssn","label",z],["formControlName","sex","label",Oe,3,"source","localizedValue"],["formControlName","languageId","label",Pe,3,"source"],["formControlName","birthDate","label",Ie],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone"],["formControlName","homePhone"],["formControlName","workPhone"],["formControlName","primaryEmail","label",Re],["formControlName","secondaryEmail","label",Ae],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",5),l(1,"mat-dialog-content")(2,"form",6)(3,"div",7),_(4,"sz-medisy-people-title-search",8),r(),l(5,"div",7),_(6,"sz-ui-form-field-input",9)(7,"sz-ui-form-field-input",10),r(),l(8,"div",7),_(9,"sz-ui-form-field-input",11)(10,"sz-ui-form-field-input",12),r(),l(11,"div",7),_(12,"sz-ui-form-field-select",13)(13,"sz-ui-form-field-input",14),r(),l(14,"div",7),_(15,"sz-ui-form-field-select",15)(16,"sz-ui-form-field-select",16),r(),_(17,"sz-ui-form-field-date",17),l(18,"div",18)(19,"mat-accordion",19)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),M(23,0),r()(),_(24,"sz-ui-form-field-address",20),r(),l(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),M(28,1),r()(),_(29,"sz-ui-form-field-phone-number",21),r(),l(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),M(33,2),r()(),_(34,"sz-ui-form-field-phone-number",22),r(),l(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),M(38,3),r()(),_(39,"sz-ui-form-field-phone-number",23),r(),l(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),M(43,4),r()(),_(44,"sz-ui-form-field-input",24)(45,"sz-ui-form-field-input",25),r()()()()(),_(46,"sz-ui-dialog-actions",26)),t&2&&(p("header",o.header),a(2),p("formGroup",o.form),a(10),p("source",o.nationalities),a(3),p("source",o.sexes)("localizedValue",!0),a(),p("source",o.languages),a(30),p("actions",o.actions));},dependencies:[V,Ye,G,Xe,He,qe,Ue,Qe,Nt,Tt,ft,ht,gt,Ct,St,ut,pt,ot,mt,st,It,nt,_t],encapsulation:2});let i=n;return i;})();export{hi as a,yo as b,Di as c,It as d};/**i18n:8ad4cf760c87d08b695a94cb80f4844ffbc4e33bdc339c4d5a0bbc09e28e3eac*/