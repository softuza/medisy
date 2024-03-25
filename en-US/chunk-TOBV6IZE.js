import{d as Ge}from"./chunk-GGGU3EEM.js";import"./chunk-2PSMZ27T.js";import{b as A}from"./chunk-CNH2IQRD.js";import{b as $e}from"./chunk-FPNG5O7I.js";import{a as g}from"./chunk-WDM7NHJO.js";import{a as ve,b as ze,c as Ve,d as be,e as Be}from"./chunk-UIWPP4R2.js";import{a as L}from"./chunk-RQBDCNFH.js";import{h as Me}from"./chunk-DPWJWWKG.js";import{c as De,i as ye}from"./chunk-34CATANC.js";import{a as Fe}from"./chunk-YPB5TJMZ.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{a as C}from"./chunk-5WIX5DGJ.js";import{e as he,f as Ae,g as Re,j as I}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as T}from"./chunk-4MXM7XAT.js";import{a as ge,d as P,e as Te,g as Le,i as Ie}from"./chunk-4TWVI3ON.js";import{a as me,b as se,d as Se,e as Ee,g as f}from"./chunk-27MVQMP7.js";import{c as ue,d as Ne,m as fe,s as ce,t as Pe,v as Ce}from"./chunk-SU66CAKG.js";import"./chunk-PPJOQ6MW.js";import{b as h}from"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{b as Oe,c}from"./chunk-LJX5OH5V.js";import"./chunk-YLP7B5XO.js";import{d as M,f as Q,g as J,j as O,k as K,m as Z,p as ee,q as oe,s as ie,t as te}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{a as ne,c as re,e as ae}from"./chunk-WDXIMTZB.js";import{b as de,c as pe}from"./chunk-62CSTUMD.js";import{ga as _e,ha as le}from"./chunk-47FGXJPX.js";import"./chunk-AFZEN52O.js";import{Gb as Y,Hb as x,Ib as j,Jb as l,Kb as a,Lb as _,Vb as p,Wb as w,a as B,b as F,eb as E,fb as s,fc as k,la as u,lc as N,ma as G,mc as H,qb as X,qc as q,rc as W,xa as U,zb as S}from"./chunk-HCTSIB2L.js";var Xe=(()=>{let e=class e extends he{constructor(r,o,i,t){super(i),this.mpplService=r,this.fb=o,this.dialog=i,this.data=t,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(A).map(d=>A[d]),this.form=o.group({sex:[t.sex,[M.required]],languageId:[t.languageId,[M.required]],title:[t.title,[Fe()]],ssn:[t.ssn,[]],nationalityId:[t.nationalityId,[]],birthDate:[t.birthDate,[]],primaryEmail:[t?.primaryEmail,[M.email]],secondaryEmail:[t?.secondaryEmail,[M.email]],mobilePhone:new O(t?.mobilePhone),homePhone:new O(t?.homePhone),workPhone:new O(t?.workPhone),homeAddress:new O(t?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,F(B({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(o){return new(o||e)(s(g),s(oe),s(me),s(se));},e.ɵcmp=u({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[N([]),X,H],decls:40,vars:7,consts:()=>{let r;r="Nationality";let o;o="SSN";let i;i="Language";let t;t="Sex";let d;d="Title";let R;R="BirthDate";let D;D="Home Address";let y;y="Mobile Phone";let $;$="Home Phone";let v;v="Work Phone";let z;z="Emails";let V;V="Primary Email";let b;return b="Secondary Email",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",r,3,"source"],["formControlName","ssn","label",o],["formControlName","languageId","label",i,3,"source"],["formControlName","sex","label",t,3,"source","localizedValue"],["formControlName","title","label",d],["formControlName","birthDate","label",R],[1,"tw-mb-4"],["multi",""],D,["formControlName","homeAddress"],y,["formControlName","mobilePhone"],$,["formControlName","homePhone"],v,["formControlName","workPhone"],z,["formControlName","primaryEmail","label",V],["formControlName","secondaryEmail","label",b],[3,"actions"]];},template:function(o,i){o&1&&(_(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1)(3,"div",2),_(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),a(),_(6,"sz-ui-form-field-select",5),l(7,"div",2),_(8,"sz-ui-form-field-select",6)(9,"sz-medisy-people-title-search",7),a(),_(10,"sz-ui-form-field-date",8),l(11,"div",9)(12,"mat-accordion",10)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),p(16,11),a()(),_(17,"sz-ui-form-field-address",12),a(),l(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),p(21,13),a()(),_(22,"sz-ui-form-field-phone-number",14),a(),l(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),p(26,15),a()(),_(27,"sz-ui-form-field-phone-number",16),a(),l(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),p(31,17),a()(),_(32,"sz-ui-form-field-phone-number",18),a(),l(33,"mat-expansion-panel")(34,"mat-expansion-panel-header")(35,"mat-panel-title"),p(36,19),a()(),_(37,"sz-ui-form-field-input",20)(38,"sz-ui-form-field-input",21),a()()()()(),_(39,"sz-ui-dialog-actions",22)),o&2&&(S("header",i.header),E(2),S("formGroup",i.form),E(2),S("source",i.nationalities),E(2),S("source",i.languages),E(2),S("source",i.sexes)("localizedValue",!0),E(31),S("actions",i.actions));},dependencies:[te,K,Q,J,Z,ee,I,Ae,Re,Ce,ue,f,Ee,Be,be,ve,ze,Ve,fe,Ge,ce,Ne,Pe],encapsulation:2});let n=e;return n;})();function ke(n,e){if(n&1&&_(0,"sz-ui-card",3),n&2){let je=e.$implicit;S("card",je);}}var Ye=(()=>{let e=class e{constructor(r,o,i,t){this.dialog=r,this.mlabService=o,this.route=i,this.router=t,this.items=[],this.personMenu=Ie.more([Le.edit(()=>this.openSaveComponent()),P.divider(),P.item(c.names,"info",()=>this.navigate("names")),P.item(c.documents,"badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let d={title:0,icon:"science",subtitle:c.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{state:{filter:{field:"personId",op:h.Equal,value:this.person.id}}})};this.items.push(d),this.getAnalysisCount(d);}navigate(r){this.router.navigate([r],{relativeTo:this.route});}getAnalysisCount(r){this.mlabService.analyses.count({filters:[{field:"personId",op:h.Equal,value:this.person.id}]}).subscribe(o=>{r.title=o;});}openSaveComponent(){this.dialog.open(Xe,{data:this.person}).afterClosed().subscribe(r=>{r&&(this.person=r);});}openBarcodeWriterComponent(){this.dialog.open(ye,{data:{format:De.QR_CODE,msg:`personid.${this.person.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(o){return new(o||e)(s(Se),s(C),s(ne),s(re));},e.ɵcmp=u({type:e,selectors:[["sz-medisy-people-person"]],features:[N([C])],decls:8,vars:4,consts:[[3,"title","menu"],["end","","mat-icon-button","",3,"click"],[1,"sz-grid-card"],[3,"card"]],template:function(o,i){o&1&&(l(0,"sz-ui-header-info",0),q(1,"personName"),l(2,"button",1),w("click",function(){return i.openBarcodeWriterComponent();}),l(3,"mat-icon"),k(4,"qr_code"),a()()(),l(5,"div",2),x(6,ke,1,1,"sz-ui-card",3,Y),a()),o&2&&(S("title",W(1,2,i.person))("menu",i.personMenu),E(6),j(i.items));},dependencies:[_e,L,T,de,$e],encapsulation:2});let n=e;return n;})();var xe=[{path:"",component:Ye},{path:"names",loadComponent:()=>import("./chunk-VJ7GGEHO.js").then(n=>n.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-L2HTGRTK.js").then(n=>n.PersonDocumentsComponent)}];var Wo=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=G({type:e}),e.ɵinj=U({providers:[g],imports:[ie,ae.forChild(xe),Me,le,L,I,T,ge,Oe,f,pe,Te]});let n=e;return n;})();export{Wo as PersonModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/