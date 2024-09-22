import{a as P,b as z}from"./chunk-GXBARVDJ.js";import{a as O}from"./chunk-BMJ3S5XZ.js";import{a as se}from"./chunk-ML6BNME4.js";import"./chunk-JSCEI2V4.js";import{a as ue}from"./chunk-P65LEUZI.js";import{a as ye}from"./chunk-CIBNBXNL.js";import"./chunk-65XUGUD6.js";import{a as ne}from"./chunk-7VZFPPSX.js";import{b as T}from"./chunk-3BKWN24B.js";import"./chunk-EJOLYYLC.js";import"./chunk-U4N237WM.js";import"./chunk-2SZNFHCN.js";import"./chunk-GPAES7OP.js";import"./chunk-DSJR6L5G.js";import"./chunk-XDEHVO3T.js";import{a as I}from"./chunk-LG6CZU73.js";import{b as he}from"./chunk-ZKARLY33.js";import{a as ce}from"./chunk-2BMNYJ3Z.js";import{f as le,g as pe,h as me,k as de}from"./chunk-AKE4IGL4.js";import{a as c}from"./chunk-AOV25AXW.js";import"./chunk-ODYGSBAJ.js";import{b as ee}from"./chunk-QERRRZIA.js";import{a as H,b as Q,d as J,e as K,g as Z}from"./chunk-MHLQ5ASK.js";import{c as re,h as b,i as M,j as ie,u as oe}from"./chunk-UPM3BUO4.js";import{b as te}from"./chunk-ZDS23LK5.js";import{c as F}from"./chunk-WX4XW32G.js";import"./chunk-Q4QLTUTU.js";import{f as V,g as Y,l as U,n as G,q as k,r as w,t as X}from"./chunk-R425IBES.js";import{a as h,b as u,c as ae}from"./chunk-6YJUGZYY.js";import{a as fe}from"./chunk-KPHZXQ4R.js";import"./chunk-53QS6UIR.js";import"./chunk-TM26YT7E.js";import{a as f,b as v}from"./chunk-KDY7YLUU.js";import"./chunk-FZND2MZR.js";import{p as j,r as W,x as q}from"./chunk-CVZW7JYW.js";import"./chunk-GBJNACNX.js";import"./chunk-IJWI4VMJ.js";import"./chunk-OKKKBEFN.js";import{Fb as L,Hb as B,Ib as $,Jb as m,Kb as d,Lb as l,bb as p,ja as a,kb as E,mb as R,mc as C,na as _,nc as g,r as N,yb as n}from"./chunk-K7VHIDZW.js";import{a as S,b as A,i as D}from"./chunk-VARUJZUG.js";function Ce(t){return t===1?/^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:t===2?/^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:t===3?/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:t===4?/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:t===5?/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:null;}function Se(t,o){if(typeof t!="string")return!1;let y=Ce(o??4);return y?y.test(t):!1;}var Ae=(()=>{let o=class o extends le{constructor(){let r=a(H);super(r),this.fb=a(w),this.data=a(Q),this.mlabService=a(c),this.referrers=this.mlabService.referrers.get(A(S({},F.minimal()),{orderBy:["name"]})),this.referrerAutoCompleteConfig={optionDisplayWithFn:s=>s.name,optionValueFn:s=>s,valueChangedFn:s=>{if(typeof s=="string"){let x=Se(s);this.referrers=this.mlabService.referrers.get(A(S({query:x?"":s,filters:q.create().equalIf("id",x?s:null).filters()},F.minimal()),{orderBy:["name"]}));}else if(typeof s=="object"&&s)return!1;return!0;},suffixes:[{icon:h.save,tooltip:f.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:s=>this.mlabService.referrers.create({name:s}).pipe(b(this.indicator))}]};let i=this.fb;this.dialog=r;let e=this.data;this.form=i.group({note:[e?.note,[]],reportNote:[e?.reportNote,[]],referrer:[e?.referrer,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,A(S({},this.data),{note:this.form.value.note,reportNote:this.form.value.reportNote,referrerId:this.form.value.referrer?.id})));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[C([c]),R,g],decls:7,vars:7,consts:()=>{let r;r="Note";let i;i="Report Note";let e;return e="Referrer",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",r],["formControlName","reportNote","label",i],["formControlName","referrer","label",e,3,"source","config"],[3,"actions"]];},template:function(i,e){i&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-autocomplete",4),d()(),l(6,"sz-ui-dialog-actions",5)),i&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),p(2),n("formGroup",e.form),p(3),n("source",e.referrers)("config",e.referrerAutoCompleteConfig),p(),n("actions",e.actions));},dependencies:[X,U,V,Y,G,k,Z,K,de,pe,me,oe,re,ie],encapsulation:2});let t=o;return t;})();function be(t,o){if(t&1&&l(0,"sz-ui-card",3),t&2){let y=o.$implicit;n("card",y);}}var _e=(()=>{let o=class o{constructor(){this.dialog=a(J),this.router=a(W),this.route=a(j),this.srptService=a(O),this.mpplService=a(I),this.mlabService=a(c),this.personNamePipe=a(T),this.pdfService=a(z),this.snackbar=a(ee),this.alert=E(void 0),this.cards=[],this.analysis=this.route.snapshot.data.analysis,this.appBarConfig={title:this.analysis.code,subtitle:()=>this.analysis.note,menu:ae.default().setItems([u.menu([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.report(this.openReportComponent.bind(this))])])},this.analysis.personId&&this.cards.push(this.buildPersonCard(this.analysis.personId)),this.analysis.referrerId&&this.analysis.referrer&&this.cards.push(this.buildReferrerCard(this.analysis.referrer));}buildReferrerCard(r){return{id:"referrer",header:{info:f.referrer,title:r.name,subtitle:r.primaryPhone},icon:h.people_outline};}buildPersonCard(r){let i={id:"person",icon:h.person,indicator:E(!1),clickFn:()=>this.router.navigate([`${se.Persons}/${r}`])};return this.mpplService.persons.getById(r).pipe(b(i.indicator),M(this.alert)).subscribe(e=>{this.person=e,i.header={info:e.title?.name??f.patient,title:this.personNamePipe.transform(e),subtitle:v(e.sex)};}),i;}openSaveComponent(){this.dialog.open(Ae,{data:this.analysis}).afterClosed().subscribe(r=>{if(r){this.analysis=r;let i=this.cards.find(e=>e.id==="referrer");i&&this.cards.splice(this.cards.indexOf(i),1),this.analysis.referrerId&&this.analysis.referrer&&this.cards.push(this.buildReferrerCard(this.analysis.referrer));}});}openReportComponent(){return D(this,null,function*(){if(!this.analysis.laboratory.analysisTemplateId){this.snackbar.open("No report template is assigned to this analysis.");return;}let r=yield N(this.srptService.templates.getById(this.analysis.laboratory.analysisTemplateId).pipe(M(this.alert,{timeout:5e3})));if(!r){this.snackbar.open("No report template is assigned to this analysis.");return;}if(!r.baseTemplate.content){this.snackbar.open("No report template content is assigned.");return;}if(!this.person){this.snackbar.open(f.person_not_found);return;}let i=yield N(this.mlabService.analyses.tests.getAllItems(this.analysis.id).pipe(M(this.alert,{timeout:5e3}))),e=P.fromString(r.baseTemplate.content);P.setValues(e,{title:this.analysis.laboratory.name,companyName:this.analysis.laboratory.name,companyAddressCity:this.analysis.laboratory.address?.city,companyAddressCountry:this.analysis.laboratory.address?.country,companyAddressStreet:this.analysis.laboratory.address?.street,companyAddressPostalCode:this.analysis.laboratory.address?.postalCode,companyAddressProvince:this.analysis.laboratory.address?.province,companyLandlinePhone:this.analysis.laboratory.landlinePhone,companyMobilePhone:this.analysis.laboratory.mobilePhone,companyPrimaryEmail:this.analysis.laboratory.primaryEmail,companySecondaryEmail:this.analysis.laboratory.secondaryEmail,personName:this.personNamePipe.transform(this.person),personAddressCity:this.person.homeAddress.city,personAddressCountry:this.person.homeAddress.country,personAddressStreet:this.person.homeAddress.street,personAddressPostalCode:this.person.homeAddress.postalCode,personAddressProvince:this.person.homeAddress.province,personBirthDate:this.person.birthDate?.toLocaleDateString(),personMobilePhone:this.person.mobilePhone,personSex:v(this.person.sex)}),this.pdfService.generate(e).then(s=>{this.pdfService.open(s);});});}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(he,{data:{format:ce.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=_({type:o,selectors:[["sz-medisy-laboratory-analysis"]],standalone:!0,features:[C([c,I,O,T,z]),g],decls:9,vars:2,consts:[[3,"config"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],[3,"card"],[1,"tw-my-4"]],template:function(i,e){i&1&&(l(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),m(2,"div",2),B(3,be,1,1,"sz-ui-card",3,L),d(),m(5,"div",4),l(6,"sz-medisy-laboratory-analysis-tests"),d(),m(7,"div",4),l(8,"sz-medisy-laboratory-analysis-specimens"),d()),i&2&&(n("config",e.appBarConfig),p(),n("alert",e.alert()),p(2),$(e.cards));},dependencies:[fe,te,ne,ye,ue],encapsulation:2});let t=o;return t;})();var _t=[{path:"",component:_e},{path:"tests",loadComponent:()=>import("./chunk-AGHSZ2J5.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-TCMTOQAR.js").then(t=>t.AnalysisSpecimensComponent)}];export{_t as default};/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/