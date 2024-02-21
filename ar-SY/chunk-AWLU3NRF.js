import{a as fe}from"./chunk-K2KI6L7K.js";import{d as I}from"./chunk-SNZRD74K.js";import{b as ue}from"./chunk-ADWWPOFC.js";import{a as g}from"./chunk-26R4Z6FV.js";import{a as h}from"./chunk-MLK4TN6I.js";import{h as Q}from"./chunk-5NLLDK4F.js";import"./chunk-RMIHOFED.js";import{a as C}from"./chunk-UJRSINNB.js";import{e as de,f as Se,g as _e,j as P}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as N}from"./chunk-SZPDKKKX.js";import{d as me,e as le,g as p,h as pe}from"./chunk-T5LWAZSF.js";import{a as re,b as ne,d as ae,e as se,g as E}from"./chunk-7HHYVUIJ.js";import{s as ee,t as oe,x as te,z as ie}from"./chunk-PR23273C.js";import{Ba as S,J as q,L as H,N as J,P as W,d as O,f as G,g as j,k as U,m as X,p as Y,q as x,s as k,t as w}from"./chunk-MNBERY7T.js";import{Ga as K,Ja as Z}from"./chunk-6NFGCLSN.js";import{Cb as z,Db as $,Eb as V,Fb as f,Gb as _,Hb as m,M as D,a as T,b as L,fa as y,gb as l,hb as a,hc as M,kc as F,nc as b,oa as c,ob as R,oc as B,pa as A,vb as s}from"./chunk-6OQDJKEQ.js";var Me=(()=>{let o=class o extends de{constructor(i,t,r,n){super(r),this.mpplService=i,this.fb=t,this.dialog=r,this.data=n,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(I).map(d=>I[d]),this.form=t.group({sex:[n.sex,[O.required]],languageId:[n.languageId,[O.required]],title:[n.title,[fe()]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,L(T({},this.form.value),{titleId:this.form.value.title?.id})));}};o.ɵfac=function(t){return new(t||o)(a(g),a(x),a(re),a(ne));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person-save"]],standalone:!0,features:[M([]),R,F],decls:12,vars:7,consts:()=>{let i;i="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let t;t="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let r;r="\u0627\u0644\u0644\u063A\u0629";let n;n="\u0627\u0644\u062C\u0646\u0633";let d;d="\u0627\u0644\u0644\u0642\u0628";let v;return v="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",i,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",r,3,"source"],["formControlName","sex","label",n,3,"source","localizedValue"],["formControlName","title","label",d],["formControlName","birthDate","label",v],[3,"actions"]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),_(),m(6,"sz-ui-form-field-select",5),f(7,"div",2),m(8,"sz-ui-form-field-select",6)(9,"medisy-form-field-title-search",7),_(),m(10,"sz-ui-form-field-date",8),_()(),m(11,"sz-ui-dialog-actions",9)),t&2&&(s("header",r.header),l(2),s("formGroup",r.form),l(2),s("source",r.nationalities),l(2),s("source",r.languages),l(2),s("source",r.sexes)("localizedValue",!0),l(3),s("actions",r.actions));},dependencies:[w,U,G,j,X,Y,P,Se,_e,ie,oe,E,se,ee,te],encapsulation:2});let e=o;return e;})();function he(e,o){if(e&1&&m(0,"sz-ui-card",2),e&2){let ge=o.$implicit;s("card",ge);}}var Ee=(()=>{let o=class o{constructor(i,t,r,n){this.dialog=i,this.mlabService=t,this.route=r,this.router=n,this.items=[],this.personMenu=pe.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.default(S.names,"info",()=>this.navigate("names")),p.default(S.phones,"phone",()=>this.navigate("phones")),p.default(S.emails,"alternate_email",()=>this.navigate("emails")),p.default(S.addresses,"home",()=>this.navigate("addresses")),p.default(S.documents,"badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let d={title:0,icon:"science",subtitle:S.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(d),this.getAnalysisCount(d);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.count().subscribe(t=>{i.title=t;});}openSaveComponent(){this.dialog.open(Me,{data:this.person}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.person=i);});}};o.ɵfac=function(t){return new(t||o)(a(ae),a(C),a(q),a(H));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person"]],features:[M([C])],decls:5,vars:4,consts:[[3,"title","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(t,r){t&1&&(m(0,"sz-ui-header-info",0),b(1,"personName"),f(2,"div",1),$(3,he,1,1,"sz-ui-card",2,z),_()),t&2&&(s("title",B(1,2,r.person))("menu",r.personMenu),l(3),V(r.items));},dependencies:[h,N,ue],encapsulation:2});let e=o;return e;})();var Ce=[{path:"",component:Ee},{path:"names",loadComponent:()=>import("./chunk-3XOZLPY5.js").then(e=>e.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-VBIW4HSL.js").then(e=>e.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-Z6FTUMFV.js").then(e=>e.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-2ARIRRQR.js").then(e=>e.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-CVGQVGE4.js").then(e=>e.PersonAddressesComponent)}];var go=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=A({type:o}),o.ɵinj=y({providers:[g],imports:[k,J.forChild(Ce),Q,Z,h,P,N,me,W,E,K,le]});let e=o;return e;})();export{go as PersonModule};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/