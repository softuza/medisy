import{a as Me,b as Ee}from"./chunk-U2XST3DI.js";import{a as _e}from"./chunk-KHJII6TV.js";import{e as de,f as ue,g as fe,j as h}from"./chunk-SO5WW7X3.js";import{p as oe,s as te,v as ie}from"./chunk-BXKAZQ64.js";import{a as le,b as E}from"./chunk-PF7HVV5B.js";import{h as W}from"./chunk-XLSE5NCB.js";import{a as Se}from"./chunk-O4JAUULY.js";import{a as M}from"./chunk-3BKI5RJX.js";import{a as re,b as ne,d as ae,e as me,g as S}from"./chunk-VWPRYYV7.js";import"./chunk-UKCE2Q4Z.js";import"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import{a as P,b as p,c as ce}from"./chunk-HEEN2CKG.js";import{d as pe}from"./chunk-E7VUVWEF.js";import"./chunk-XJ54ZRFR.js";import{d as g,g as G,h as B,l as x,n as U,o as X,p as q,r as w,s as k,v as Q}from"./chunk-X72CBQLP.js";import{a as _}from"./chunk-Y376CRI2.js";import"./chunk-SNR3XRMI.js";import{a as se}from"./chunk-PIKBUH2I.js";import{a as C}from"./chunk-3HWNDRT6.js";import{F as H,H as J,J as K,Sa as Z,Va as ee,n as j}from"./chunk-P44VDH7R.js";import{Ab as u,Bb as s,Cb as m,L as I,Wb as L,Xb as $,Zb as c,a as N,ac as b,b as D,ea as z,eb as d,ec as V,fb as a,fc as Y,ma as f,mb as A,na as O,pb as l,v as y,xb as T,yb as F,zb as R}from"./chunk-3CXVAQY6.js";var he=(()=>{let t=class t extends de{constructor(i,e,r,n){super(r),this.mpplService=i,this.fb=e,this.dialog=r,this.data=n,this.form=e.group({sex:[n.sex,[g.required]],languageId:[n.languageId,[g.required]],title:[n.title,[]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value));}};t.ɵfac=function(e){return new(e||t)(a(M),a(q),a(re),a(ne));},t.ɵcmp=f({type:t,selectors:[["medisy-people-person-save"]],standalone:!0,features:[c([]),A,b],decls:12,vars:3,consts:()=>{let i;i="SSN";let e;e="Title";let r;return r="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",i],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",e],["formControlName","birthDate","label",r],[3,"actions"]];},template:function(e,r){e&1&&(m(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),s(),m(6,"medisy-form-field-language",5),u(7,"div",2),m(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),s(),m(10,"sz-ui-form-field-date",8),s()(),m(11,"sz-ui-dialog-actions",9)),e&2&&(l("header",r.header),d(2),l("formGroup",r.form),d(9),l("actions",r.actions));},dependencies:[k,x,G,B,U,X,h,ue,fe,ie,te,S,me,Me,oe,Ee,_e],encapsulation:2});let o=t;return o;})();function De(o,t){if(o&1&&m(0,"sz-ui-card",3),o&2){let ve=t.$implicit;l("card",ve);}}var Pe=(()=>{let t=class t{constructor(i,e,r,n){this.dialog=i,this.mlabService=e,this.route=r,this.router=n,this.items=[],this.personMenu=ce.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.default("Names","info",()=>this.navigate("names")),p.default("Phones","phone",()=>this.navigate("phones")),p.default("Emails","alternate_email",()=>this.navigate("emails")),p.default("Addresses","home",()=>this.navigate("addresses")),p.default("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let v={title:0,type:le.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(v),this.getAnalysisCount(v);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.get(D(N({},se.count()),{personIds:[this.person.id]})).pipe(y(e=>e.count)).subscribe(e=>{i.title=e;});}openSaveComponent(){this.dialog.open(he,{data:this.person}).afterClosed().pipe(I(1)).subscribe(e=>{e&&(this.person=e);});}};t.ɵfac=function(e){return new(e||t)(a(ae),a(_),a(H),a(J));},t.ɵcmp=f({type:t,selectors:[["medisy-peopel-person"]],features:[c([_])],decls:8,vars:4,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card"]],template:function(e,r){e&1&&(u(0,"sz-ui-header-basic")(1,"h5",0),L(2),V(3,"personName"),s(),m(4,"sz-ui-menu",1),s(),u(5,"div",2),F(6,De,1,1,"sz-ui-card",3,T),s()),e&2&&(d(2),$(Y(3,2,r.person)),d(2),l("menu",r.personMenu),R(6,r.items));},dependencies:[E,C,P,Se],encapsulation:2});let o=t;return o;})();var ge=[{path:"",component:Pe},{path:"names",loadComponent:()=>import("./chunk-UITEKPU7.js").then(o=>o.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-SXPR6AQC.js").then(o=>o.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-JVTBGVAH.js").then(o=>o.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-3BF4UWZH.js").then(o=>o.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-2U6UQO5O.js").then(o=>o.PersonAddressesComponent)}];var Do=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=O({type:t}),t.ɵinj=z({providers:[M],imports:[j,w,K.forChild(ge),W,ee,E,h,C,pe,Z,S,Q,P]});let o=t;return o;})();export{Do as PersonModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/