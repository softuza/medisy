import{a as _e,b as Me}from"./chunk-Q33HRNTO.js";import{a as Se}from"./chunk-QYWGHZAL.js";import{e as le,f as de,g as ue,j as h}from"./chunk-GIQHEGBP.js";import{p as ee,s as oe,v as te}from"./chunk-7LSJKDZJ.js";import{a as pe,b as E}from"./chunk-NHIBZTKH.js";import{h as Q}from"./chunk-UOUO5U2Y.js";import{a as ce}from"./chunk-BG2A7CNR.js";import{a as M}from"./chunk-MDSSYVUI.js";import{a as ie,b as re,d as ne,e as ae,g as S}from"./chunk-XVVRHKJW.js";import"./chunk-5FPHEJQ4.js";import"./chunk-UIYAEPV5.js";import"./chunk-SIM3MWAY.js";import{a as P,b as p,c as fe}from"./chunk-CP6SNK6A.js";import{d as se}from"./chunk-S2JVRKMZ.js";import"./chunk-OI3RYSYI.js";import{d as g,g as j,h as G,l as B,n as x,o as U,p as X,r as q,s as w,v as K}from"./chunk-WLSYRODT.js";import{a as _}from"./chunk-YF2PEFAH.js";import"./chunk-424JH55D.js";import{a as me}from"./chunk-OFOYSQTQ.js";import{a as C}from"./chunk-6S4N3MHV.js";import{E as k,G as H,I as J,Ra as W,Ua as Z}from"./chunk-2EUQTENK.js";import{$b as b,Ab as s,Bb as m,L as I,Vb as L,Wb as $,Yb as c,a as N,b as D,da as z,db as d,dc as V,eb as a,ec as Y,la as f,lb as A,ma as O,ob as l,v as y,wb as T,xb as F,yb as R,zb as u}from"./chunk-5RJFZK6E.js";var Ce=(()=>{let t=class t extends le{constructor(i,e,r,n){super(r),this.mpplService=i,this.fb=e,this.dialog=r,this.data=n,this.form=e.group({sex:[n.sex,[g.required]],languageId:[n.languageId,[g.required]],title:[n.title,[]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value));}};t.ɵfac=function(e){return new(e||t)(a(M),a(X),a(ie),a(re));},t.ɵcmp=f({type:t,selectors:[["medisy-people-person-save"]],standalone:!0,features:[c([]),A,b],decls:12,vars:3,consts:()=>{let i;i="SSN";let e;e="Title";let r;return r="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",i],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",e],["formControlName","birthDate","label",r],[3,"actions"]];},template:function(e,r){e&1&&(m(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),s(),m(6,"medisy-form-field-language",5),u(7,"div",2),m(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),s(),m(10,"sz-ui-form-field-date",8),s()(),m(11,"sz-ui-dialog-actions",9)),e&2&&(l("header",r.header),d(2),l("formGroup",r.form),d(9),l("actions",r.actions));},dependencies:[w,B,j,G,x,U,h,de,ue,te,oe,S,ae,_e,ee,Me,Se],encapsulation:2});let o=t;return o;})();function Ne(o,t){if(o&1&&m(0,"sz-ui-card",3),o&2){let ge=t.$implicit;l("card",ge);}}var he=(()=>{let t=class t{constructor(i,e,r,n){this.dialog=i,this.mlabService=e,this.route=r,this.router=n,this.items=[],this.personMenu=fe.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.default("Names","info",()=>this.navigate("names")),p.default("Phones","phone",()=>this.navigate("phones")),p.default("Emails","alternate_email",()=>this.navigate("emails")),p.default("Addresses","home",()=>this.navigate("addresses")),p.default("Documents","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let v={title:0,type:pe.Counter,icon:"science",subtitle:"Analyses",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(v),this.getAnalysisCount(v);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.get(D(N({},me.count()),{personIds:[this.person.id]})).pipe(y(e=>e.count)).subscribe(e=>{i.title=e;});}openSaveComponent(){this.dialog.open(Ce,{data:this.person}).afterClosed().pipe(I(1)).subscribe(e=>{e&&(this.person=e);});}};t.ɵfac=function(e){return new(e||t)(a(ne),a(_),a(k),a(H));},t.ɵcmp=f({type:t,selectors:[["medisy-peopel-person"]],features:[c([_])],decls:8,vars:4,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card"]],template:function(e,r){e&1&&(u(0,"sz-ui-header-basic")(1,"h5",0),L(2),V(3,"personName"),s(),m(4,"sz-ui-menu",1),s(),u(5,"div",2),F(6,Ne,1,1,"sz-ui-card",3,T),s()),e&2&&(d(2),$(Y(3,2,r.person)),d(2),l("menu",r.personMenu),R(6,r.items));},dependencies:[E,C,P,ce],encapsulation:2});let o=t;return o;})();var Pe=[{path:"",component:he},{path:"names",loadComponent:()=>import("./chunk-7ETWHR2J.js").then(o=>o.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-CFOC3KGQ.js").then(o=>o.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-M2QC6QGB.js").then(o=>o.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-ZZZ7KDDY.js").then(o=>o.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-J7ION42R.js").then(o=>o.PersonAddressesComponent)}];var vo=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=O({type:t}),t.ɵinj=z({providers:[M],imports:[q,J.forChild(Pe),Q,Z,E,h,C,se,W,S,K,P]});let o=t;return o;})();export{vo as PersonModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/