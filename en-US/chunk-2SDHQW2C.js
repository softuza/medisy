import{B as fe,b as ce}from"./chunk-V2R2LNEO.js";import"./chunk-X2PVQHUM.js";import{d as I}from"./chunk-CHPZASVR.js";import{b as Ee}from"./chunk-D7QF6LJS.js";import{a as g}from"./chunk-NE7X3SPH.js";import{a as O}from"./chunk-KYPQMVAD.js";import{h as te}from"./chunk-HGFYK4WW.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-F67EX4OT.js";import{a as C}from"./chunk-4A4DWX3B.js";import{f as Se,g as _e,h as ue,k as h}from"./chunk-QMA7Y45E.js";import"./chunk-WL4FKIHI.js";import"./chunk-CBIY2ZLG.js";import{b as N}from"./chunk-DVDPPXKO.js";import{d as me,g as S,h as le,j as pe,l as de}from"./chunk-7ZCIBZRX.js";import{a as Q,b as W,d as Z,e as ee,g as M}from"./chunk-UN7ZV7OU.js";import{k as re,l as ne,p as se,r as ae}from"./chunk-M6JNFYJK.js";import"./chunk-L2KLTZKL.js";import"./chunk-CJ662YDS.js";import"./chunk-RH3HJREX.js";import{b as ie,c as d}from"./chunk-4U6LIYO2.js";import"./chunk-3MHW6B4E.js";import{d as P,f as G,g as j,k as U,m as X,p as Y,q as x,s as k,t as w}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{a as q,c as H,e as J}from"./chunk-D3PLXWXH.js";import{c as oe}from"./chunk-AHPLM44D.js";import{ia as K}from"./chunk-Y7MZZUBM.js";import"./chunk-AD74A3E4.js";import{Eb as R,Fb as $,Gb as V,Hb as E,Ib as _,Jb as m,O as D,a as T,b as L,ha as y,ib as l,jb as s,jc as f,mc as F,pc as b,qa as c,qb as z,qc as B,ra as A,xb as a}from"./chunk-MNGWH3SB.js";var Ce=(()=>{let o=class o extends Se{constructor(i,t,r,n){super(r),this.mpplService=i,this.fb=t,this.dialog=r,this.data=n,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(I).map(p=>I[p]),this.form=t.group({sex:[n.sex,[P.required]],languageId:[n.languageId,[P.required]],title:[n.title,[ce()]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,L(T({},this.form.value),{titleId:this.form.value.title?.id})));}};o.ɵfac=function(t){return new(t||o)(s(g),s(x),s(Q),s(W));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[f([]),z,F],decls:12,vars:7,consts:()=>{let i;i="Nationality";let t;t="SSN";let r;r="Language";let n;n="Sex";let p;p="Title";let v;return v="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",i,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",r,3,"source"],["formControlName","sex","label",n,3,"source","localizedValue"],["formControlName","title","label",p],["formControlName","birthDate","label",v],[3,"actions"]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),E(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),_(),m(6,"sz-ui-form-field-select",5),E(7,"div",2),m(8,"sz-ui-form-field-select",6)(9,"sz-medisy-people-title-search",7),_(),m(10,"sz-ui-form-field-date",8),_()(),m(11,"sz-ui-dialog-actions",9)),t&2&&(a("header",r.header),l(2),a("formGroup",r.form),l(2),a("source",r.nationalities),l(2),a("source",r.languages),l(2),a("source",r.sexes)("localizedValue",!0),l(3),a("actions",r.actions));},dependencies:[w,U,G,j,X,Y,h,_e,ue,ae,ne,M,ee,re,fe,se],encapsulation:2});let e=o;return e;})();function Pe(e,o){if(e&1&&m(0,"sz-ui-card",2),e&2){let Oe=o.$implicit;a("card",Oe);}}var ge=(()=>{let o=class o{constructor(i,t,r,n){this.dialog=i,this.mlabService=t,this.route=r,this.router=n,this.items=[],this.personMenu=de.more([pe.edit(()=>this.openSaveComponent()),S.divider(),S.item(d.names,"info",()=>this.navigate("names")),S.item(d.phones,"phone",()=>this.navigate("phones")),S.item(d.emails,"alternate_email",()=>this.navigate("emails")),S.item(d.addresses,"home",()=>this.navigate("addresses")),S.item(d.documents,"badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let p={title:0,icon:"science",subtitle:d.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(p),this.getAnalysisCount(p);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.count().subscribe(t=>{i.title=t;});}openSaveComponent(){this.dialog.open(Ce,{data:this.person}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.person=i);});}};o.ɵfac=function(t){return new(t||o)(s(Z),s(C),s(q),s(H));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-person"]],features:[f([C])],decls:5,vars:4,consts:[[3,"title","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(t,r){t&1&&(m(0,"sz-ui-header-info",0),b(1,"personName"),E(2,"div",1),$(3,Pe,1,1,"sz-ui-card",2,R),_()),t&2&&(a("title",B(1,2,r.person))("menu",r.personMenu),l(3),V(r.items));},dependencies:[O,N,Ee],encapsulation:2});let e=o;return e;})();var Ne=[{path:"",component:ge},{path:"names",loadComponent:()=>import("./chunk-OZ2F6YTP.js").then(e=>e.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-JYO2PEXR.js").then(e=>e.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-PMZFXKDV.js").then(e=>e.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-EJPFCMVF.js").then(e=>e.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-4T5MGMMK.js").then(e=>e.PersonAddressesComponent)}];var No=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=A({type:o}),o.ɵinj=y({providers:[g],imports:[k,J.forChild(Ne),te,K,O,h,N,me,ie,M,oe,le]});let e=o;return e;})();export{No as PersonModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/