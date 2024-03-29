import{b as he}from"./chunk-XMGOBE6T.js";import{a as z,b as A}from"./chunk-6RMEHHF6.js";import{a as C}from"./chunk-NT6G46S7.js";import{a as Mt,b as ft,c as ht,d as gt,e as Tt}from"./chunk-AR72GZ5P.js";import{a as dt}from"./chunk-WRFLPEIA.js";import{d as Ze,h as et}from"./chunk-R3TS6Q6E.js";import{a as Nt}from"./chunk-TXRHKTMR.js";import{a as ue,b as Ct,c as Ce,d as Me,e as fe,f as Y}from"./chunk-75JUXYDU.js";import{a as pt}from"./chunk-KR7XUBMS.js";import{e as ct,f as Et,g as St,j as ut}from"./chunk-HPZYOYE3.js";import{a as We,b as Ke,e as Je,g as Qe}from"./chunk-IZ32KJRN.js";import{a as se,b as me,c as it,d as ot,e as _e,f as pe,g as de,h as Ee,m as lt,r as Se,s as st,t as mt,v as _t}from"./chunk-LMOPJ72O.js";import{c as R,d as ce,e as nt}from"./chunk-2AWDEL7N.js";import{b as le}from"./chunk-624ACHJE.js";import{a as ae,b as X}from"./chunk-M7S7TTRL.js";import{b as tt,c as rt,d as at}from"./chunk-XNWVOXZG.js";import{a as te,b as ie,d as oe,h as ne,i as re}from"./chunk-HAIELHQF.js";import{b as W,d as h,e as K,f as G,g as Ve,j as k,k as Xe,l as J,m as Ye,p as He,q as ke,t as V}from"./chunk-4JTOADFE.js";import{c as qe,e as je}from"./chunk-FA7A5F5K.js";import{c as Ue}from"./chunk-AYP3BRJS.js";import{$ as Q,ca as U,ga as Z,ha as ee}from"./chunk-HULPMCJY.js";import{$b as c,Cb as p,Da as g,Ea as T,Hb as S,Jb as D,Kb as B,Lb as w,Mb as l,Nb as r,Ob as _,Pb as De,Qb as Be,Sb as P,Yb as M,Zb as I,a as $,ac as we,b as $e,bc as Ge,g as ze,gb as a,hb as d,hc as y,ic as u,jc as O,kc as H,oc as v,pc as F,sb as be,tb as b,tc as q,ua as L,uc as j,y as xe,yb as f}from"./chunk-XJDYJDV7.js";function Rt(i,n){if(i&1&&(l(0,"mat-card-subtitle"),u(1),r()),i&2){let s=c(2);a(),O(s.person.primaryEmail);}}function At(i,n){if(i&1&&(De(0,1),l(1,"mat-card-subtitle"),u(2),r(),l(3,"mat-card-subtitle"),u(4),r(),f(5,Rt,2,1,"mat-card-subtitle"),Be()),i&2){let s=c();a(2),O(s.getSex()),a(2),O(s.getMobilePhone()),a(),S(5,s.person.primaryEmail?5:-1);}}var fi=(()=>{let n=class n{set personId(e){this._personId=e,this.getPerson(e);}get personId(){return this._personId;}constructor(e,t,o){this.mpplService=e,this.personNamePipe=t,this.router=o,this.indicator=be(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(e){this.mpplService.persons.getById(e).pipe(R(this.indicator)).subscribe(t=>{this.person=t,this.card.title=this.personNamePipe.transform(t);});}getSex(){return at(this.person?.sex);}getMobilePhone(){return this.person.mobilePhone.countryCode&&this.person.mobilePhone.number?`${this.person.mobilePhone.countryCode}${this.person.mobilePhone.number}`:null;}};n.ɵfac=function(t){return new(t||n)(d(C),d(A),d(qe));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[v([A,z,C]),F],decls:2,vars:3,consts:[[3,"card","indicator"],["subtitle",""]],template:function(t,o){t&1&&(l(0,"sz-ui-card",0),f(1,At,6,3,"ng-container",1),r()),t&2&&(p("card",o.card)("indicator",o.indicator),a(),S(1,o.person?1:-1));},dependencies:[je,et,Ze,dt,X,tt,Ue,Y],encapsulation:2});let i=n;return i;})();var bt=[[["","suffix",""]]],Dt=["[suffix]"];function Bt(i,n){if(i&1){let s=P();l(0,"mat-chip-row",11),I("removed",function(){let t=g(s).$implicit,o=c(2);return T(o.removeSelection(t));}),u(1),q(2,"personName"),l(3,"button",12)(4,"mat-icon"),u(5,"cancel"),r()()();}if(i&2){let s=n.$implicit;a(),H(" ",j(2,1,s)," ");}}function wt(i,n){if(i&1){let s=P();l(0,"mat-chip-grid",null,1),B(2,Bt,6,3,"mat-chip-row",null,D),r(),l(4,"input",10,2),I("matChipInputTokenEnd",function(){g(s);let t=c();return T(t.addSelection());}),r();}if(i&2){let s=y(1),e=c(),t=y(7);a(2),w(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Gt(i,n){if(i&1&&_(0,"input",13,2),i&2){let s=c(),e=y(7);p("matAutocomplete",e)("formControl",s.control);}}function Vt(i,n){if(i&1&&(l(0,"small"),u(1),q(2,"personAge"),r()),i&2){let s=c().$implicit;a(),O(j(2,1,s==null?null:s.birthDate));}}function Xt(i,n){if(i&1&&(l(0,"mat-option",7)(1,"div",14)(2,"strong"),u(3),q(4,"personName"),r(),f(5,Vt,3,3,"small"),r()()),i&2){let s=n.$implicit;p("value",s),a(3),O(j(4,3,s)),a(2),S(5,s!=null&&s.birthDate?5:-1);}}function Yt(i,n){i&1&&(l(0,"mat-error"),M(1,3),r());}function Ht(i,n){i&1&&(l(0,"mat-error"),M(1,4),r());}function kt(i,n){i&1&&_(0,"mat-progress-bar",9);}var xi=(()=>{let n=class n extends Ee{constructor(e,t,o,m){super(e),this.ngControl=e,this.mpplService=t,this.personNamePipe=o,this.personAgePipe=m,this.filter={},this.label="Name, phone, or email",this.szOptionFormatFn=N=>this.personNamePipe.transform(N);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(ce(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let t=e.split(" ");t.length===2?(this.filter.firstName=t[0],this.filter.lastName=t[1]):this.filter.query=t[0];}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.filter={},this.totalPages=-1,this.pagination.pageIndex=1,this.options=[];}fetch(){this.mpplService.persons.get($($({},this.filter),this.pagination)).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C),d(A),d(z));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-search"]],standalone:!0,features:[v([C,z,A]),b,F],ngContentSelectors:Dt,decls:15,vars:7,consts:()=>{let e;e="This field is required";let t;return t="This field is not valid",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,[1,"container"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix",""],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[1,"sz-form"]];},template:function(t,o){if(t&1){let m=P();we(bt),l(0,"div",5)(1,"mat-form-field")(2,"mat-label"),u(3),r(),f(4,wt,6,4)(5,Gt,2,2),l(6,"mat-autocomplete",6,0),I("optionSelected",function(x){return g(m),T(o.optionSelected(x));})("szScrolled",function(){return g(m),T(o.scroll());}),B(8,Xt,6,5,"mat-option",7,D),r(),f(10,Yt,2,0,"mat-error")(11,Ht,2,0,"mat-error"),l(12,"span",8),Ge(13),r()(),f(14,kt,1,0,"mat-progress-bar",9),r();}t&2&&(a(3),O(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),w(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(3),S(14,o.indicator()?14:-1));},dependencies:[V,W,G,J,re,ne,te,ie,oe,de,_e,Q,pe,X,ae,me,se,U,Y,Me,fe,ue,Ce,ee,Z,Se,z,A],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();function qt(i,n){if(i&1){let s=P();l(0,"mat-chip-row",12),I("removed",function(){let t=g(s).$implicit,o=c(2);return T(o.removeSelection(t));}),u(1),l(2,"button",13)(3,"mat-icon"),u(4,"cancel"),r()()();}if(i&2){let s=n.$implicit,e=c(2);a(),H(" ",e.getSelectionFormat(s)," ");}}function jt(i,n){if(i&1){let s=P();l(0,"mat-chip-grid",null,1),B(2,qt,5,1,"mat-chip-row",null,D),r(),l(4,"input",11,2),I("matChipInputTokenEnd",function(){g(s);let t=c();return T(t.addSelection());}),r();}if(i&2){let s=y(1),e=c(),t=y(7);a(2),w(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Wt(i,n){if(i&1&&_(0,"input",14,2),i&2){let s=c(),e=y(7);p("matAutocomplete",e)("formControl",s.control);}}function Kt(i,n){if(i&1&&(l(0,"mat-option",8),u(1),r()),i&2){let s=n.$implicit,e=c();p("value",e.getOptionValue(s)),a(),H(" ",e.getOptionContent(s)," ");}}function Jt(i,n){i&1&&(l(0,"mat-error"),M(1,3),r());}function Qt(i,n){i&1&&(l(0,"mat-error"),M(1,4),r());}function Ut(i,n){if(i&1){let s=P();l(0,"mat-chip",15),I("click",function(){g(s);let t=c();return T(t.save());}),M(1,5),r();}}function Zt(i,n){i&1&&_(0,"mat-progress-bar",10);}var Pt=(()=>{let n=class n extends Ee{constructor(e,t){super(e),this.ngControl=e,this.mpplService=t,this.label=rt.title,this.query=null,this.orderBy=["name"],this.isNew=!1,this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(ce(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.isNew=!1,this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mpplService.titles.get($e($({query:this.query},le.unpaged()),{orderBy:this.orderBy})).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,e.count==0&&this.query&&(this.isNew=!0);});}save(){this.mpplService.titles.create({name:this.query}).pipe(R(this.indicator)).subscribe(e=>{this.isNew=!1,this.control.setValue(e);});}getOptionValue(e){return e;}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-title-search"]],inputs:{query:"query",orderBy:"orderBy"},standalone:!0,features:[v([pt]),b,F],decls:14,vars:8,consts:()=>{let e;e="This field is required";let t;t="This field is not valid";let o;return o="Save",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,o,[1,"container"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix","","color","accent",1,"tw-m-1"],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],["matSuffix","","color","accent",1,"tw-m-1",3,"click"]];},template:function(t,o){if(t&1){let m=P();l(0,"div",6)(1,"mat-form-field")(2,"mat-label"),u(3),r(),f(4,jt,6,4)(5,Wt,2,2),l(6,"mat-autocomplete",7,0),I("optionSelected",function(x){return g(m),T(o.optionSelected(x));})("szScrolled",function(){return g(m),T(o.scroll());}),B(8,Kt,2,2,"mat-option",8,D),r(),f(10,Jt,2,0,"mat-error")(11,Qt,2,0,"mat-error")(12,Ut,2,0,"mat-chip",9),r(),f(13,Zt,1,0,"mat-progress-bar",10),r();}t&2&&(a(3),O(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),w(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(),S(12,o.isNew&&!o.indicator()?12:-1),a(),S(13,o.indicator()?13:-1));},dependencies:[V,W,G,J,re,ne,te,ie,oe,de,_e,Q,pe,X,ae,me,se,U,Y,Ct,Me,fe,ue,Ce,ee,Z,Se],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();var Ao=(()=>{let n=class n extends ct{constructor(e,t,o,m){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=m,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(he).map(N=>he[N]),this.subscriptions=new ze(),this.form=t.group({firstName:t.control(m?.firstName,[h.required,h.maxLength(128)]),lastName:t.control(m?.lastName,[h.required,h.maxLength(128)]),fatherName:t.control(m?.fatherFirstName?`${m.fatherFirstName} ${m?.lastName}`:null,[h.maxLength(128)]),motherName:t.control(m?.motherName,[h.maxLength(128)]),birthDate:t.control(m?.birthDate,[]),nationalityId:t.control(null,[]),ssn:t.control(m?.ssn,[h.maxLength(128)]),languageId:t.control(null,[h.required]),sex:t.control(null,[h.required]),title:t.control(null,[Nt()]),primaryEmail:[null,[h.email]],secondaryEmail:[null,[h.email]],mobilePhone:new k(null),homePhone:new k(null),workPhone:new k(null),homeAddress:new k({street:m?.address?"":void 0,city:m?.address,country:m?.address?"":void 0,province:m?.address?"":void 0,postalCode:m?.address?"":void 0})}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.updateSex(null),this.updateLanguageId(null);return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders($({query:e},le.minimal())).pipe(xe(t=>t.items)).subscribe(t=>{!t||t.length===0||(this.updateSex(t[0].sex),this.updateLanguageId(t[0].languageId));});}updateSex(e){this.form.controls.sex.setValue(e);}updateLanguageId(e){this.form.controls.languageId.setValue(e);}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone,homePhone:e.homePhone,workPhone:e.workPhone,homeAddress:e.homeAddress}).pipe(R(this.indicator),nt(this.alert)).subscribe(t=>{this.dialog.close(t);});}};n.ɵfac=function(t){return new(t||n)(d(C),d(ke),d(We),d(Ke));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[v([C]),b,F],decls:47,vars:7,consts:()=>{let e;e="First name";let t;t="Last name";let o;o="Father name";let m;m="Mother name";let N;N="Nationality";let x;x="SSN";let Ne;Ne="Sex";let Oe;Oe="Language";let Pe;Pe="BirthDate";let Ie;Ie="Primary Email";let Re;Re="Secondary Email";let Ae;Ae="Home Address";let Le;Le="Mobile Phone";let ye;ye="Home Phone";let ve;ve="Work Phone";let Fe;return Fe="Emails",[Ae,Le,ye,ve,Fe,[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title"],["formControlName","firstName","label",e],["formControlName","lastName","label",t],["formControlName","fatherName","label",o],["formControlName","motherName","label",m],["formControlName","nationalityId","label",N,3,"source"],["formControlName","ssn","label",x],["formControlName","sex","label",Ne,3,"source","localizedValue"],["formControlName","languageId","label",Oe,3,"source"],["formControlName","birthDate","label",Pe],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone"],["formControlName","homePhone"],["formControlName","workPhone"],["formControlName","primaryEmail","label",Ie],["formControlName","secondaryEmail","label",Re],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",5),l(1,"mat-dialog-content")(2,"form",6)(3,"div",7),_(4,"sz-medisy-people-title-search",8),r(),l(5,"div",7),_(6,"sz-ui-form-field-input",9)(7,"sz-ui-form-field-input",10),r(),l(8,"div",7),_(9,"sz-ui-form-field-input",11)(10,"sz-ui-form-field-input",12),r(),l(11,"div",7),_(12,"sz-ui-form-field-select",13)(13,"sz-ui-form-field-input",14),r(),l(14,"div",7),_(15,"sz-ui-form-field-select",15)(16,"sz-ui-form-field-select",16),r(),_(17,"sz-ui-form-field-date",17),l(18,"div",18)(19,"mat-accordion",19)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),M(23,0),r()(),_(24,"sz-ui-form-field-address",20),r(),l(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),M(28,1),r()(),_(29,"sz-ui-form-field-phone-number",21),r(),l(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),M(33,2),r()(),_(34,"sz-ui-form-field-phone-number",22),r(),l(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),M(38,3),r()(),_(39,"sz-ui-form-field-phone-number",23),r(),l(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),M(43,4),r()(),_(44,"sz-ui-form-field-input",24)(45,"sz-ui-form-field-input",25),r()()()()(),_(46,"sz-ui-dialog-actions",26)),t&2&&(p("header",o.header),a(2),p("formGroup",o.form),a(10),p("source",o.nationalities),a(3),p("source",o.sexes)("localizedValue",!0),a(),p("source",o.languages),a(30),p("actions",o.actions));},dependencies:[V,Xe,G,Ve,Ye,He,Qe,Je,Tt,gt,Mt,ft,ht,ut,Et,St,_t,it,st,lt,Pt,ot,mt],encapsulation:2});let i=n;return i;})();export{fi as a,Ao as b,xi as c,Pt as d};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/