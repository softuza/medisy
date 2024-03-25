import{b as he}from"./chunk-CNH2IQRD.js";import{a as z,b as I}from"./chunk-FPNG5O7I.js";import{a as u}from"./chunk-WDM7NHJO.js";import{a as ft,b as ht,c as gt,d as Tt,e as Nt}from"./chunk-UIWPP4R2.js";import{a as ct}from"./chunk-RQBDCNFH.js";import{d as et,h as tt}from"./chunk-DPWJWWKG.js";import{a as Ot}from"./chunk-YPB5TJMZ.js";import{a as Ce,b as Mt,c as ue,d as Me,e as fe,f as V}from"./chunk-FPCXFWIA.js";import{a as dt}from"./chunk-5WIX5DGJ.js";import{e as Et,f as St,g as Ct,j as ut}from"./chunk-TL26OVT7.js";import{a as Ke,b as Je,e as Qe,g as Ue}from"./chunk-27MVQMP7.js";import{a as se,b as me,c as ot,d as nt,e as _e,f as pe,g as de,h as Ee,m as st,r as Se,s as mt,t as _t,v as pt}from"./chunk-SU66CAKG.js";import{c as P,d as ce,e as rt}from"./chunk-PPJOQ6MW.js";import{g as le}from"./chunk-4PE74OIY.js";import{a as ae,b as Y}from"./chunk-CJSQWSDQ.js";import{b as it,c as at,d as lt}from"./chunk-LJX5OH5V.js";import{a as te,b as ie,d as oe,h as ne,i as re}from"./chunk-YLP7B5XO.js";import{b as W,d as h,e as K,f as w,g as Ye,j as k,k as Ve,l as J,m as He,p as ke,q as qe,t as X}from"./chunk-HXGKKD7D.js";import{c as je,e as We}from"./chunk-WDXIMTZB.js";import{c as Ze}from"./chunk-62CSTUMD.js";import{$ as Q,ca as U,ga as Z,ha as ee}from"./chunk-47FGXJPX.js";import{Eb as S,Gb as D,Hb as B,Ib as G,Jb as l,Kb as r,Lb as _,Mb as Be,Nb as Ge,P as T,Pb as x,Vb as M,Wb as O,Yb as c,Zb as we,_b as Xe,a as v,b as xe,eb as a,ec as A,fb as d,fc as C,g as ze,gc as N,hc as H,la as R,lc as L,mc as y,pa as F,pb as De,qa as $,qb as b,qc as q,rc as j,vb as f,y as be,zb as p}from"./chunk-HCTSIB2L.js";function At(i,n){if(i&1&&(l(0,"mat-card-subtitle"),C(1),r()),i&2){let s=c(2);a(),N(s.person.primaryEmail);}}function Lt(i,n){if(i&1&&(Be(0,1),l(1,"mat-card-subtitle"),C(2),r(),l(3,"mat-card-subtitle"),C(4),r(),f(5,At,2,1,"mat-card-subtitle"),Ge()),i&2){let s=c();a(2),N(s.getSex()),a(2),N(s.getMobilePhone()),a(),S(5,s.person.primaryEmail?5:-1);}}var gi=(()=>{let n=class n{set personId(e){this._personId=e,this.getPerson(e);}get personId(){return this._personId;}constructor(e,t,o){this.mpplService=e,this.personNamePipe=t,this.router=o,this.indicator=De(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(e){this.mpplService.persons.getById(e).pipe(T(1),P(this.indicator)).subscribe(t=>{this.person=t,this.card.title=this.personNamePipe.transform(t);});}getSex(){return lt(this.person?.sex);}getMobilePhone(){return this.person.mobilePhone.countryCode&&this.person.mobilePhone.number?`${this.person.mobilePhone.countryCode}${this.person.mobilePhone.number}`:null;}};n.ɵfac=function(t){return new(t||n)(d(u),d(I),d(je));},n.ɵcmp=R({type:n,selectors:[["sz-medisy-people-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[L([I,z,u]),y],decls:2,vars:3,consts:[[3,"card","indicator"],["subtitle",""]],template:function(t,o){t&1&&(l(0,"sz-ui-card",0),f(1,Lt,6,3,"ng-container",1),r()),t&2&&(p("card",o.card)("indicator",o.indicator),a(),S(1,o.person?1:-1));},dependencies:[We,tt,et,ct,Y,it,Ze,V],encapsulation:2});let i=n;return i;})();function Dt(i,n){if(i&1){let s=x();l(0,"mat-chip-row",8),O("removed",function(){let o=F(s).$implicit,m=c(2);return $(m.removeSelection(o));}),C(1),q(2,"personName"),l(3,"button",9)(4,"mat-icon"),C(5,"cancel"),r()()();}if(i&2){let s=n.$implicit;a(),H(" ",j(2,1,s)," ");}}function Bt(i,n){if(i&1){let s=x();l(0,"mat-chip-grid",null,5),B(2,Dt,6,3,"mat-chip-row",null,D),r(),l(4,"input",6,7),O("matChipInputTokenEnd",function(){F(s);let t=c();return $(t.addSelection());}),r();}if(i&2){let s=A(1),e=c(),t=A(7);a(2),G(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Gt(i,n){if(i&1&&_(0,"input",10,7),i&2){let s=c(),e=A(7);p("matAutocomplete",e)("formControl",s.control);}}function wt(i,n){if(i&1&&(l(0,"small"),C(1),q(2,"personAge"),r()),i&2){let s=c().$implicit;a(),N(j(2,1,s==null?null:s.birthDate));}}function Xt(i,n){if(i&1&&(l(0,"mat-option",11)(1,"div",12)(2,"strong"),C(3),q(4,"personName"),r(),f(5,wt,3,3,"small"),r()()),i&2){let s=n.$implicit;p("value",s),a(3),N(j(4,3,s)),a(2),S(5,s!=null&&s.birthDate?5:-1);}}function Yt(i,n){i&1&&(l(0,"mat-error"),M(1,13),r());}function Vt(i,n){i&1&&(l(0,"mat-error"),M(1,14),r());}function Ht(i,n){i&1&&_(0,"mat-progress-bar",4);}var kt=[[["","suffix",""]]],qt=["[suffix]"],Bi=(()=>{let n=class n extends Ee{constructor(e,t,o,m){super(e),this.ngControl=e,this.mpplService=t,this.personNamePipe=o,this.personAgePipe=m,this.filter={},this.label="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",this.szOptionFormatFn=g=>this.personNamePipe.transform(g);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(ce(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let t=e.split(" ");t.length===2?(this.filter.firstName=t[0],this.filter.lastName=t[1]):this.filter.query=t[0];}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.filter={},this.totalPages=-1,this.pagination.pageIndex=1,this.options=[];}fetch(){this.mpplService.persons.get(v(v({},this.filter),this.pagination)).pipe(T(1),P(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(u),d(I),d(z));},n.ɵcmp=R({type:n,selectors:[["sz-medisy-people-person-search"]],standalone:!0,features:[L([u,z,I]),b,y],ngContentSelectors:qt,decls:15,vars:7,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["matSuffix",""],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],[1,"sz-form"],e,t];},template:function(t,o){t&1&&(we(kt),l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),C(3),r(),f(4,Bt,6,4)(5,Gt,2,2),l(6,"mat-autocomplete",1,2),O("optionSelected",function(g){return o.optionSelected(g);})("szScrolled",function(){return o.scroll();}),B(8,Xt,6,5,"mat-option",11,D),r(),f(10,Yt,2,0,"mat-error")(11,Vt,2,0,"mat-error"),l(12,"span",3),Xe(13),r()(),f(14,Ht,1,0,"mat-progress-bar",4),r()),t&2&&(a(3),N(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),G(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(3),S(14,o.indicator()?14:-1));},dependencies:[X,W,w,J,re,ne,te,ie,oe,de,_e,Q,pe,Y,ae,me,se,U,V,Me,fe,Ce,ue,ee,Z,Se,z,I],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();function jt(i,n){if(i&1){let s=x();l(0,"mat-chip-row",8),O("removed",function(){let o=F(s).$implicit,m=c(2);return $(m.removeSelection(o));}),C(1),l(2,"button",9)(3,"mat-icon"),C(4,"cancel"),r()()();}if(i&2){let s=n.$implicit,e=c(2);a(),H(" ",e.getSelectionFormat(s)," ");}}function Wt(i,n){if(i&1){let s=x();l(0,"mat-chip-grid",null,5),B(2,jt,5,1,"mat-chip-row",null,D),r(),l(4,"input",6,7),O("matChipInputTokenEnd",function(){F(s);let t=c();return $(t.addSelection());}),r();}if(i&2){let s=A(1),e=c(),t=A(7);a(2),G(e.selections),a(2),p("matAutocomplete",t)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Kt(i,n){if(i&1&&_(0,"input",10,7),i&2){let s=c(),e=A(7);p("matAutocomplete",e)("formControl",s.control);}}function Jt(i,n){if(i&1&&(l(0,"mat-option",11),C(1),r()),i&2){let s=n.$implicit,e=c();p("value",e.getOptionValue(s)),a(),H(" ",e.getOptionContent(s)," ");}}function Qt(i,n){i&1&&(l(0,"mat-error"),M(1,12),r());}function Ut(i,n){i&1&&(l(0,"mat-error"),M(1,13),r());}function Zt(i,n){if(i&1){let s=x();l(0,"mat-chip",14),O("click",function(){F(s);let t=c();return $(t.save());}),M(1,15),r();}}function ei(i,n){i&1&&_(0,"mat-progress-bar",4);}var It=(()=>{let n=class n extends Ee{constructor(e,t){super(e),this.ngControl=e,this.mpplService=t,this.label=at.title,this.query=null,this.orderBy=["name"],this.isNew=!1,this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(ce(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.fetch();}reset(){this.isNew=!1,this.query=null,this.totalPages=-1,this.options=[];}fetch(){this.mpplService.titles.get(xe(v({query:this.query},le.unpaged()),{orderBy:this.orderBy})).pipe(T(1),P(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,e.count==0&&this.query&&(this.isNew=!0);});}save(){this.mpplService.titles.create({name:this.query}).pipe(P(this.indicator),T(1)).subscribe(e=>{this.isNew=!1,this.control.setValue(e);});}getOptionValue(e){return e;}};n.ɵfac=function(t){return new(t||n)(d(K,10),d(u));},n.ɵcmp=R({type:n,selectors:[["sz-medisy-people-title-search"]],inputs:{query:"query",orderBy:"orderBy"},standalone:!0,features:[L([dt]),b,y],decls:14,vars:8,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let t;t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D";let o;return o="\u062D\u0641\u0638",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["class","tw-m-1","matSuffix","","color","accent"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],e,t,["matSuffix","","color","accent",1,"tw-m-1",3,"click"],o];},template:function(t,o){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),C(3),r(),f(4,Wt,6,4)(5,Kt,2,2),l(6,"mat-autocomplete",1,2),O("optionSelected",function(g){return o.optionSelected(g);})("szScrolled",function(){return o.scroll();}),B(8,Jt,2,2,"mat-option",11,D),r(),f(10,Qt,2,0,"mat-error")(11,Ut,2,0,"mat-error")(12,Zt,2,0,"mat-chip",3),r(),f(13,ei,1,0,"mat-progress-bar",4),r()),t&2&&(a(3),N(o.label),a(),S(4,o.multiple?4:5),a(2),p("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),a(2),G(o.options),a(2),S(10,o.control.hasError("required")?10:-1),a(),S(11,o.control.hasError("invalid")?11:-1),a(),S(12,o.isNew&&!o.indicator()?12:-1),a(),S(13,o.indicator()?13:-1));},dependencies:[X,W,w,J,re,ne,te,ie,oe,de,_e,Q,pe,Y,ae,me,se,U,V,Mt,Me,fe,Ce,ue,ee,Z,Se],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let i=n;return i;})();var Fo=(()=>{let n=class n extends Et{constructor(e,t,o,m){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=m,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(he).map(g=>he[g]),this.subscriptions=new ze(),this.form=t.group({firstName:t.control(m?.firstName,[h.required,h.maxLength(128)]),lastName:t.control(m?.lastName,[h.required,h.maxLength(128)]),fatherName:t.control(m?.fatherFirstName?`${m.fatherFirstName} ${m?.lastName}`:null,[h.maxLength(128)]),motherName:t.control(m?.motherName,[h.maxLength(128)]),birthDate:t.control(m?.birthDate,[]),nationalityId:t.control(null,[]),ssn:t.control(m?.ssn,[h.maxLength(128)]),languageId:t.control(null,[h.required]),sex:t.control(null,[h.required]),title:t.control(null,[Ot()]),primaryEmail:[null,[h.email]],secondaryEmail:[null,[h.email]],mobilePhone:new k(null),homePhone:new k(null),workPhone:new k(null),homeAddress:new k({street:m?.address?"":void 0,city:m?.address,country:m?.address?"":void 0,province:m?.address?"":void 0,postalCode:m?.address?"":void 0})}),this.subscibeChanges();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.updateSex(null),this.updateLanguageId(null);return;}else this.getGenders(e);}));}getGenders(e){this.mpplService.autosuggestions.getGenders(v({query:e},le.minimal())).pipe(be(t=>t.items),T(1)).subscribe(t=>{!t||t.length===0||(this.updateSex(t[0].sex),this.updateLanguageId(t[0].languageId));});}updateSex(e){this.form.controls.sex.setValue(e);}updateLanguageId(e){this.form.controls.languageId.setValue(e);}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone,homePhone:e.homePhone,workPhone:e.workPhone,homeAddress:e.homeAddress}).pipe(P(this.indicator),rt(this.alert),T(1)).subscribe(t=>{this.dialog.close(t);});}};n.ɵfac=function(t){return new(t||n)(d(u),d(qe),d(Ke),d(Je));},n.ɵcmp=R({type:n,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[L([u]),b,y],decls:47,vars:7,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let t;t="\u0627\u0644\u0643\u0646\u064A\u0629";let o;o="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628";let m;m="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645";let g;g="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let Ne;Ne="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let Oe;Oe="\u0627\u0644\u062C\u0646\u0633";let Pe;Pe="\u0627\u0644\u0644\u063A\u0629";let Ie;Ie="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let Re;Re="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let Ae;Ae="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062C\u0648\u0627\u0644";let Le;Le="\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0646\u0632\u0644";let ye;ye="\u0647\u0627\u062A\u0641 \u0627\u0644\u0639\u0645\u0644";let ve;ve="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let Fe;Fe="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let $e;return $e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title"],["formControlName","firstName","label",e],["formControlName","lastName","label",t],["formControlName","fatherName","label",o],["formControlName","motherName","label",m],["formControlName","nationalityId","label",g,3,"source"],["formControlName","ssn","label",Ne],["formControlName","sex","label",Oe,3,"source","localizedValue"],["formControlName","languageId","label",Pe,3,"source"],["formControlName","birthDate","label",Ie],[1,"tw-mb-4"],["multi",""],Re,["formControlName","homeAddress"],Ae,["formControlName","mobilePhone"],Le,["formControlName","homePhone"],ye,["formControlName","workPhone"],ve,["formControlName","primaryEmail","label",Fe],["formControlName","secondaryEmail","label",$e],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"div",2),_(4,"sz-medisy-people-title-search",3),r(),l(5,"div",2),_(6,"sz-ui-form-field-input",4)(7,"sz-ui-form-field-input",5),r(),l(8,"div",2),_(9,"sz-ui-form-field-input",6)(10,"sz-ui-form-field-input",7),r(),l(11,"div",2),_(12,"sz-ui-form-field-select",8)(13,"sz-ui-form-field-input",9),r(),l(14,"div",2),_(15,"sz-ui-form-field-select",10)(16,"sz-ui-form-field-select",11),r(),_(17,"sz-ui-form-field-date",12),l(18,"div",13)(19,"mat-accordion",14)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),M(23,15),r()(),_(24,"sz-ui-form-field-address",16),r(),l(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),M(28,17),r()(),_(29,"sz-ui-form-field-phone-number",18),r(),l(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),M(33,19),r()(),_(34,"sz-ui-form-field-phone-number",20),r(),l(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),M(38,21),r()(),_(39,"sz-ui-form-field-phone-number",22),r(),l(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),M(43,23),r()(),_(44,"sz-ui-form-field-input",24)(45,"sz-ui-form-field-input",25),r()()()()(),_(46,"sz-ui-dialog-actions",26)),t&2&&(p("header",o.header),a(2),p("formGroup",o.form),a(10),p("source",o.nationalities),a(3),p("source",o.sexes)("localizedValue",!0),a(),p("source",o.languages),a(30),p("actions",o.actions));},dependencies:[X,Ve,w,Ye,He,ke,Ue,Qe,Nt,Tt,ft,ht,gt,ut,St,Ct,pt,ot,mt,st,It,nt,_t],encapsulation:2});let i=n;return i;})();export{gi as a,Fo as b,Bi as c,It as d};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/