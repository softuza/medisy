import{a as Se,b as _e}from"./chunk-ZHSCUXPH.js";import{a as ce}from"./chunk-VBWVL6AE.js";import{e as le,f as de,g as fe,j as h}from"./chunk-VT3WYR67.js";import{p as ee,s as oe,v as te}from"./chunk-RQNRD2JQ.js";import{a as pe,b as E}from"./chunk-S376QVGE.js";import{h as Q}from"./chunk-PD6EMHNS.js";import{a as g,b as l,c as Me}from"./chunk-XZKIKMRN.js";import{b as W}from"./chunk-KGIHDKZN.js";import{a as ue}from"./chunk-O4JAUULY.js";import{a as M}from"./chunk-ZJOQORU4.js";import"./chunk-3UYL57HA.js";import{a as ie,b as re,d as ne,e as ae,g as S}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import"./chunk-3VGQRMVI.js";import"./chunk-SIM3MWAY.js";import{d as se}from"./chunk-UNCYENX6.js";import"./chunk-VRISEVPV.js";import{d as P,g as j,h as G,l as x,n as B,o as U,p as X,r as q,s as w,v as K}from"./chunk-GJY7U5GZ.js";import{a as _}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as me}from"./chunk-PIKBUH2I.js";import{a as C}from"./chunk-QDC3ZTFW.js";import{I as H,K as k,M as J,Wa as Z,i as V,q as Y}from"./chunk-NC2N2FCX.js";import{Ab as f,Bb as p,Cb as m,L as z,Wb as F,Xb as R,Zb as c,a as N,ac as L,b as D,ea as y,eb as d,ec as $,fb as a,fc as b,ma as u,mb as A,na as I,pb as s,v as O,vb as T}from"./chunk-3CXVAQY6.js";var Ce=(()=>{let t=class t extends le{constructor(i,e,r,n){super(r),this.mpplService=i,this.fb=e,this.dialog=r,this.data=n,this.form=e.group({sex:[n.sex,[P.required]],languageId:[n.languageId,[P.required]],title:[n.title,[]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,this.form.value));}};t.ɵfac=function(e){return new(e||t)(a(M),a(X),a(ie),a(re));},t.ɵcmp=u({type:t,selectors:[["medisy-people-person-save"]],standalone:!0,features:[c([]),A,L],decls:12,vars:3,consts:()=>{let i;i="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let e;e="\u0627\u0644\u0644\u0642\u0628";let r;return r="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",i],["formControlName","languageId"],["formControlName","sex"],["formControlName","title","label",e],["formControlName","birthDate","label",r],[3,"actions"]];},template:function(e,r){e&1&&(m(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),p(),m(6,"medisy-form-field-language",5),f(7,"div",2),m(8,"medisy-form-field-sex",6)(9,"sz-ui-form-field-input",7),p(),m(10,"sz-ui-form-field-date",8),p()(),m(11,"sz-ui-dialog-actions",9)),e&2&&(s("header",r.header),d(2),s("formGroup",r.form),d(9),s("actions",r.actions));},dependencies:[w,x,j,G,B,U,h,de,fe,te,oe,S,ae,Se,ee,_e,ce],encapsulation:2});let o=t;return o;})();function Ne(o,t){if(o&1&&m(0,"sz-ui-card",4),o&2){let Pe=t.$implicit;s("card",Pe);}}var he=(()=>{let t=class t{constructor(i,e,r,n){this.dialog=i,this.mlabService=e,this.route=r,this.router=n,this.items=[],this.personMenu=Me.more([l.edit(()=>this.openSaveComponent()),l.divider(),l.default("\u0627\u0644\u0627\u0633\u0645\u0627\u0621","info",()=>this.navigate("names")),l.default("\u0627\u0644\u0647\u0648\u0627\u062A\u0641","phone",()=>this.navigate("phones")),l.default("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A","alternate_email",()=>this.navigate("emails")),l.default("\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646","home",()=>this.navigate("addresses")),l.default("\u0627\u0644\u0648\u062B\u0627\u0626\u0642","badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let v={title:0,type:pe.Counter,icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(v),this.getAnalysisCount(v);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.get(D(N({},me.count()),{personIds:[this.person.id]})).pipe(O(e=>e.count)).subscribe(e=>{i.title=e;});}openSaveComponent(){this.dialog.open(Ce,{data:this.person}).afterClosed().pipe(z(1)).subscribe(e=>{e&&(this.person=e);});}};t.ɵfac=function(e){return new(e||t)(a(ne),a(_),a(H),a(k));},t.ɵcmp=u({type:t,selectors:[["medisy-peopel-person"]],features:[c([_])],decls:7,vars:5,consts:[["start","",1,"sz-h5"],["end","",3,"menu"],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(e,r){e&1&&(f(0,"sz-ui-header-basic")(1,"h5",0),F(2),$(3,"personName"),p(),m(4,"sz-ui-menu",1),p(),f(5,"div",2),T(6,Ne,1,1,"sz-ui-card",3),p()),e&2&&(d(2),R(b(3,3,r.person)),d(2),s("menu",r.personMenu),d(2),s("ngForOf",r.items));},dependencies:[V,E,C,g,ue],encapsulation:2});let o=t;return o;})();var ge=[{path:"",component:he},{path:"names",loadComponent:()=>import("./chunk-LHSZYSMW.js").then(o=>o.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-BH76F5O4.js").then(o=>o.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-S3EPLN6W.js").then(o=>o.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-HXTBAHVZ.js").then(o=>o.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-ISNITLCE.js").then(o=>o.PersonAddressesComponent)}];var Do=(()=>{let t=class t{};t.ɵfac=function(e){return new(e||t)();},t.ɵmod=I({type:t}),t.ɵinj=y({providers:[M],imports:[Y,q,J.forChild(ge),Q,Z,E,h,C,se,W,S,K,g]});let o=t;return o;})();export{Do as PersonModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/