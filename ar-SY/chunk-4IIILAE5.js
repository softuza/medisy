import{b as ge}from"./chunk-OJ4Z6HIC.js";import{a as $,b as A}from"./chunk-BPNIIRGV.js";import{a as ht,b as gt,c as Tt,d as Nt,e as Ot}from"./chunk-XUADGNEA.js";import{a as Pt}from"./chunk-MOPAGSIE.js";import{a as C}from"./chunk-NTQ56MMI.js";import{a as Et}from"./chunk-7PXL34CK.js";import{a as ct}from"./chunk-POWNH4PO.js";import{a as Ce,b as ft,c as Me,d as fe,e as he,f as V}from"./chunk-OK2QS2H3.js";import{e as St,f as ut,g as Ct,j as Mt}from"./chunk-FREEXNMO.js";import{a as Je,b as Qe,e as Ue,g as Ze}from"./chunk-XG5XEC3X.js";import{c as me,d as _e,e as nt,f as rt,g as pe,h as de,i as ce,j as R,k as Ee,l as at,m as Se,r as mt,u as ue,v as _t,w as pt,y as dt}from"./chunk-D2NQAH4S.js";import{b as se}from"./chunk-BQGY2E4W.js";import{d as tt,h as it,i as le,j as Y}from"./chunk-QO44V4EG.js";import{b as ot,c as lt,d as st}from"./chunk-VGKLEGC7.js";import{b as ie,c as oe,e as ne,i as re,j as ae}from"./chunk-DPTX3R7K.js";import{b as W,d as f,e as K,f as w,g as Ve,k as q,l as He,m as J,n as qe,q as ke,r as je,u as X}from"./chunk-5RALKHWD.js";import{t as Q}from"./chunk-CDJ3WT4B.js";import{c as We,e as Ke}from"./chunk-6KMSPDBU.js";import{aa as U,da as Z,ha as ee,ia as te,la as et}from"./chunk-EMK4LBFH.js";import{Eb as S,Gb as D,Hb as B,Ib as G,Jb as s,Kb as r,Lb as p,Mb as Ge,Nb as we,Pb as P,Vb as T,Wb as I,Yb as c,Zb as Xe,_b as Ye,a as be,bb as a,cb as d,gc as y,hc as u,ic as O,jc as H,na as L,nc as v,ob as Be,oc as F,qb as b,s as De,sc as k,tc as j,vb as M,wa as h,xa as g,zb as _}from"./chunk-34GBQTTX.js";import{a as x,b as xe}from"./chunk-43YHV5VG.js";function Lt(i,n){if(i&1&&(s(0,"mat-card-subtitle"),u(1),r()),i&2){let l=c(2);a(),O(l.person.primaryEmail);}}function yt(i,n){if(i&1&&(Ge(0,1),s(1,"mat-card-subtitle"),u(2),r(),s(3,"mat-card-subtitle"),u(4),r(),M(5,Lt,2,1,"mat-card-subtitle"),we()),i&2){let l=c();a(2),O(l.getSex()),a(2),O(l.getMobilePhone()),a(),S(l.person.primaryEmail?5:-1);}}var gi=(()=>{let n=class n{set personId(e){this._personId=e,this.getPerson(e);}get personId(){return this._personId;}constructor(e,t,o){this.mpplService=e,this.personNamePipe=t,this.router=o,this.indicator=Be(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(e){this.mpplService.persons.getById(e).pipe(R(this.indicator)).subscribe(t=>{this.person=t,this.card.title=this.personNamePipe.transform(t);});}getSex(){return st(this.person?.sex);}getMobilePhone(){return this.person.mobilePhone.number?`${this.person.mobilePhone.number}`:null;}};n.ɵfac=function(t){return new(t||n)(d(C),d(A),d(We));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[v([A,$,C]),F],decls:2,vars:3,consts:[[3,"card","indicator"],["subtitle",""]],template:function(t,o){t&1&&(s(0,"sz-ui-card",0),M(1,yt,6,3,"ng-container",1),r()),t&2&&(_("card",o.card)("indicator",o.indicator),a(),S(o.person?1:-1));},dependencies:[Ke,it,tt,Et,Y,ot,et,V],encapsulation:2});let i=n;return i;})();var Bt=[[["","suffix",""]]],Gt=["[suffix]"];function wt(i,n){if(i&1){let l=P();s(0,"mat-chip-row",12),I("removed",function(){let t=h(l).$implicit,o=c(2);return g(o.removeSelection(t));}),u(1),k(2,"personName"),s(3,"button",13)(4,"mat-icon"),u(5,"cancel"),r()()();}if(i&2){let l=n.$implicit;a(),H(" ",j(2,1,l)," ");}}function Xt(i,n){if(i&1){let l=P();s(0,"mat-chip-grid",null,1),B(2,wt,6,3,"mat-chip-row",null,D),r(),s(4,"input",11,2),I("matChipInputTokenEnd",function(){h(l);let t=c();return g(t.addSelection());}),r();}if(i&2){let l=y(1),e=c(),t=y(7);a(2),G(e.selections),a(2),_("matAutocomplete",t)("formControl",e.control)("matChipInputFor",l)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Yt(i,n){if(i&1&&p(0,"input",6,2),i&2){let l=c(),e=y(7);_("matAutocomplete",e)("formControl",l.control);}}function Vt(i,n){if(i&1&&(s(0,"small"),u(1),k(2,"personAge"),r()),i&2){let l=c().$implicit;a(),O(j(2,1,l==null?null:l.birthDate));}}function Ht(i,n){if(i&1&&(s(0,"mat-option",8)(1,"div",14)(2,"strong"),u(3),k(4,"personName"),r(),M(5,Vt,3,3,"small"),r()()),i&2){let l=n.$implicit;_("value",l),a(3),O(j(4,3,l)),a(2),S(l!=null&&l.birthDate?5:-1);}}function qt(i,n){i&1&&(s(0,"mat-error"),T(1,3),r());}function kt(i,n){i&1&&(s(0,"mat-error"),T(1,4),r());}function jt(i,n){i&1&&p(0,"mat-progress-bar",10);}var Bi=(()=>{let n=class n extends Se{constructor(e,t,o,m){super(e),this.ngControl=e,this.mpplService=t,this.personNamePipe=o,this.personAgePipe=m,this.query="",this.filtration=Q.create(),this.label="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",this.szOptionFormatFn=N=>this.personNamePipe.transform(N);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(Ee(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let t=e.split(" ");t.length===2?this.filtration=Q.create().iAny("names.firstName",t[0]).iAny("names.lastName",t[1]):this.query=t[0];}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.filtration=Q.create(),this.totalPages=-1,this.pagination.pageIndex=1,this.options=[];}fetch(){this.mpplService.persons.get(x({query:this.query,filters:this.filtration.filters()},this.pagination)).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C),d(A),d($));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-search"]],standalone:!0,features:[v([C,$,A]),b,F],ngContentSelectors:Gt,decls:15,vars:7,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,[1,"container"],["matInput","",3,"matAutocomplete","formControl"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix",""],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],[1,"sz-form"]];},template:function(t,o){if(t&1){let m=P();Xe(Bt),s(0,"div",5)(1,"mat-form-field")(2,"mat-label"),u(3),r(),M(4,Xt,6,4)(5,Yt,2,2,"input",6),s(6,"mat-autocomplete",7,0),I("optionSelected",function(z){return h(m),g(o.optionSelected(z));})("szScrolled",function(){return h(m),g(o.scroll());}),B(8,Ht,6,5,"mat-option",8,D),r(),M(10,qt,2,0,"mat-error")(11,kt,2,0,"mat-error"),s(12,"span",9),Ye(13),r()(),M(14,jt,1,0,"mat-progress-bar",10),r();}t&2&&(a(3),O(o.label),a(),S(o.multiple()?4:5),a(2),_("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),G(o.options),a(2),S(o.control.hasError("required")?10:-1),a(),S(o.control.hasError("invalid")?11:-1),a(3),S(o.indicator()?14:-1));},dependencies:[X,W,w,J,ae,re,ie,oe,ne,ce,pe,U,de,Y,le,_e,me,Z,V,fe,he,Ce,Me,te,ee,ue,$,A],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();function Wt(i,n){if(i&1){let l=P();s(0,"mat-chip-row",13),I("removed",function(){let t=h(l).$implicit,o=c(2);return g(o.removeSelection(t));}),u(1),s(2,"button",14)(3,"mat-icon"),u(4,"cancel"),r()()();}if(i&2){let l=n.$implicit,e=c(2);a(),H(" ",e.getSelectionFormat(l)," ");}}function Kt(i,n){if(i&1){let l=P();s(0,"mat-chip-grid",null,1),B(2,Wt,5,1,"mat-chip-row",null,D),r(),s(4,"input",12,2),I("matChipInputTokenEnd",function(){h(l);let t=c();return g(t.addSelection());}),r();}if(i&2){let l=y(1),e=c(),t=y(7);a(2),G(e.selections),a(2),_("matAutocomplete",t)("formControl",e.control)("matChipInputFor",l)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Jt(i,n){if(i&1&&p(0,"input",7,2),i&2){let l=c(),e=y(7);_("matAutocomplete",e)("formControl",l.control);}}function Qt(i,n){if(i&1&&(s(0,"mat-option",9),u(1),r()),i&2){let l=n.$implicit,e=c();_("value",e.getOptionValue(l)),a(),H(" ",e.getOptionContent(l)," ");}}function Ut(i,n){i&1&&(s(0,"mat-error"),T(1,3),r());}function Zt(i,n){i&1&&(s(0,"mat-error"),T(1,4),r());}function ei(i,n){if(i&1){let l=P();s(0,"mat-chip",15),I("click",function(){h(l);let t=c();return g(t.save());}),T(1,5),r();}}function ti(i,n){i&1&&p(0,"mat-progress-bar",11);}var Rt=(()=>{let n=class n extends Se{constructor(e,t){super(e),this.ngControl=e,this.mpplService=t,this.label=lt.title,this.query=null,this.orderBy=["name"],this.isNew=!1,this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(Ee(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.isNew=!1,this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mpplService.titles.get(xe(x({query:this.query},se.unpaged()),{orderBy:this.orderBy})).pipe(R(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,e.count==0&&this.query&&(this.isNew=!0);});}save(){this.mpplService.titles.create({name:this.query}).pipe(R(this.indicator)).subscribe(e=>{this.isNew=!1,this.control.setValue(e);});}getOptionValue(e){return e;}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(C));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-title-search"]],inputs:{query:"query",orderBy:"orderBy"},standalone:!0,features:[v([ct]),b,F],decls:14,vars:8,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let t;t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D";let o;return o="\u062D\u0641\u0638",[["auto","matAutocomplete"],["chipGrid",""],["input",""],e,t,o,[1,"container"],["matInput","",3,"matAutocomplete","formControl"],[3,"optionSelected","szScrolled","displayWith","szScrollIgnored"],[3,"value"],["matSuffix","","color","accent",1,"tw-m-1"],["mode","indeterminate"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"removed"],["matChipRemove",""],["matSuffix","","color","accent",1,"tw-m-1",3,"click"]];},template:function(t,o){if(t&1){let m=P();s(0,"div",6)(1,"mat-form-field")(2,"mat-label"),u(3),r(),M(4,Kt,6,4)(5,Jt,2,2,"input",7),s(6,"mat-autocomplete",8,0),I("optionSelected",function(z){return h(m),g(o.optionSelected(z));})("szScrolled",function(){return h(m),g(o.scroll());}),B(8,Qt,2,2,"mat-option",9,D),r(),M(10,Ut,2,0,"mat-error")(11,Zt,2,0,"mat-error")(12,ei,2,0,"mat-chip",10),r(),M(13,ti,1,0,"mat-progress-bar",11),r();}t&2&&(a(3),O(o.label),a(),S(o.multiple()?4:5),a(2),_("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),G(o.options),a(2),S(o.control.hasError("required")?10:-1),a(),S(o.control.hasError("invalid")?11:-1),a(),S(o.isNew&&!o.indicator()?12:-1),a(),S(o.indicator()?13:-1));},dependencies:[X,W,w,J,ae,re,ie,oe,ne,ce,pe,U,de,Y,le,_e,me,Z,V,ft,fe,he,Ce,Me,te,ee,ue],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();var vo=(()=>{let n=class n extends St{constructor(e,t,o,m){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=m,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(ge).map(N=>ge[N]),this.subscriptions=new be(),this.form=t.group({firstName:t.control(m?.firstName,[f.required,f.maxLength(128)]),lastName:t.control(m?.lastName,[f.required,f.maxLength(128)]),fatherName:t.control(m?.fatherFirstName?`${m.fatherFirstName} ${m?.lastName}`:null,[f.maxLength(128)]),motherName:t.control(m?.motherName,[f.maxLength(128)]),birthDate:t.control(m?.birthDate,[]),nationalityId:t.control(null,[]),ssn:t.control(m?.ssn,[f.maxLength(128)]),languageId:t.control(null,[f.required]),sex:t.control(null,[f.required]),title:t.control(null,[Pt()]),primaryEmail:[null,[f.email]],secondaryEmail:[null,[f.email]],mobilePhone:new q(null),homePhone:new q(null),workPhone:new q(null),homeAddress:new q({street:m?.address?"":void 0,city:m?.address,country:m?.address?"":void 0,province:m?.address?"":void 0,postalCode:m?.address?"":void 0})}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.updateSex(null),this.updateLanguageId(null);return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders(x({query:e},se.minimal())).pipe(De(t=>t.items)).subscribe(t=>{!t||t.length===0||(this.updateSex(t[0].sex),this.updateLanguageId(t[0].languageId));});}updateSex(e){this.form.controls.sex.setValue(e);}updateLanguageId(e){this.form.controls.languageId.setValue(e);}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone,homePhone:e.homePhone,workPhone:e.workPhone,homeAddress:e.homeAddress}).pipe(R(this.indicator),at(this.alert)).subscribe(t=>{this.dialog.close(t);});}};n.ɵfac=function(t){return new(t||n)(d(C),d(je),d(Je),d(Qe));},n.ɵcmp=L({type:n,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[v([C]),b,F],decls:39,vars:9,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let t;t="\u0627\u0644\u0643\u0646\u064A\u0629";let o;o="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628";let m;m="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645";let N;N="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let z;z="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let Oe;Oe="\u0627\u0644\u062C\u0646\u0633";let Pe;Pe="\u0627\u0644\u0644\u063A\u0629";let Ie;Ie="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let Re;Re="\u0627\u0644\u062C\u0648\u0627\u0644";let Ae;Ae="\u0627\u0644\u0645\u0646\u0632\u0644";let Le;Le="\u0627\u0644\u0639\u0645\u0644";let ye;ye="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let ve;ve="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let Fe;Fe="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let $e;$e="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let ze;return ze="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[Fe,$e,ze,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title"],["formControlName","firstName","label",e],["formControlName","lastName","label",t],["formControlName","fatherName","label",o],["formControlName","motherName","label",m],["formControlName","nationalityId","label",N,3,"source"],["formControlName","ssn","label",z],["formControlName","sex","label",Oe,3,"source","localizedValue"],["formControlName","languageId","label",Pe,3,"source"],["formControlName","birthDate","label",Ie],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",Re],["formControlName","homePhone","label",Ae],["formControlName","workPhone","label",Le],["formControlName","primaryEmail","label",ye],["formControlName","secondaryEmail","label",ve],[3,"actions"]];},template:function(t,o){t&1&&(p(0,"sz-ui-dialog-header",3),s(1,"mat-dialog-content")(2,"form",4)(3,"div",5),p(4,"sz-medisy-people-title-search",6),r(),s(5,"div",5),p(6,"sz-ui-form-field-input",7)(7,"sz-ui-form-field-input",8),r(),s(8,"div",5),p(9,"sz-ui-form-field-input",9)(10,"sz-ui-form-field-input",10),r(),s(11,"div",5),p(12,"sz-ui-form-field-select",11)(13,"sz-ui-form-field-input",12),r(),s(14,"div",5),p(15,"sz-ui-form-field-select",13)(16,"sz-ui-form-field-select",14),r(),p(17,"sz-ui-form-field-date",15),s(18,"div",16)(19,"mat-accordion",17)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),T(23,0),r()(),p(24,"sz-ui-form-field-address",18),r(),s(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),T(28,1),r()(),p(29,"sz-ui-form-field-phone-number",19)(30,"sz-ui-form-field-phone-number",20)(31,"sz-ui-form-field-phone-number",21),r(),s(32,"mat-expansion-panel")(33,"mat-expansion-panel-header")(34,"mat-panel-title"),T(35,2),r()(),p(36,"sz-ui-form-field-input",22)(37,"sz-ui-form-field-input",23),r()()()()(),p(38,"sz-ui-dialog-actions",24)),t&2&&(_("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),_("formGroup",o.form),a(10),_("source",o.nationalities),a(3),_("source",o.sexes)("localizedValue",!0),a(),_("source",o.languages),a(22),_("actions",o.actions));},dependencies:[X,He,w,Ve,qe,ke,Ze,Ue,Ot,Nt,ht,gt,Tt,Mt,ut,Ct,dt,nt,_t,mt,Rt,rt,pt],encapsulation:2});let i=n;return i;})();export{gi as a,vo as b,Bi as c,Rt as d};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/