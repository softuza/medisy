import{b as fe}from"./chunk-HKBVL2T7.js";import"./chunk-46TYKK4H.js";import{d as I}from"./chunk-7ICGQMMS.js";import{b as ue}from"./chunk-LUEEPCT5.js";import{a as g}from"./chunk-SJAHXW3C.js";import{a as h}from"./chunk-NIVYARTS.js";import{h as te}from"./chunk-JUXA3TTM.js";import"./chunk-E7V2G3VZ.js";import{a as C}from"./chunk-YDMDVI6M.js";import{e as de,f as Se,g as _e,j as P}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as N}from"./chunk-HKZIVJYM.js";import{d as me,e as le,g as p,h as pe}from"./chunk-PNII32UO.js";import{a as Q,b as W,d as Z,e as ee,g as E}from"./chunk-V6ACGGWJ.js";import{k as re,l as ne,p as ae,r as se}from"./chunk-VBUQVK7Q.js";import"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{b as ie,c as S}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as O,f as G,g as j,k as U,m as X,p as Y,q as x,s as k,t as w}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as q,c as H,e as J}from"./chunk-YYZRSXTZ.js";import{c as oe}from"./chunk-B3RLTRYJ.js";import{ha as K}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Cb as z,Db as $,Eb as V,Fb as f,Gb as _,Hb as m,M as D,a as T,b as L,fa as y,gb as l,hb as a,hc as M,kc as F,nc as b,oa as c,ob as R,oc as B,pa as A,vb as s}from"./chunk-UDYUYOMJ.js";var Me=(()=>{let o=class o extends de{constructor(i,t,r,n){super(r),this.mpplService=i,this.fb=t,this.dialog=r,this.data=n,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(I).map(d=>I[d]),this.form=t.group({sex:[n.sex,[O.required]],languageId:[n.languageId,[O.required]],title:[n.title,[fe()]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]]});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,L(T({},this.form.value),{titleId:this.form.value.title?.id})));}};o.ɵfac=function(t){return new(t||o)(a(g),a(x),a(Q),a(W));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person-save"]],standalone:!0,features:[M([]),R,F],decls:12,vars:7,consts:()=>{let i;i="Nationality";let t;t="SSN";let r;r="Language";let n;n="Sex";let d;d="Title";let v;return v="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",i,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",r,3,"source"],["formControlName","sex","label",n,3,"source","localizedValue"],["formControlName","title","label",d],["formControlName","birthDate","label",v],[3,"actions"]];},template:function(t,r){t&1&&(m(0,"sz-ui-dialog-header",0),f(1,"mat-dialog-content")(2,"form",1)(3,"div",2),m(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-input",4),_(),m(6,"sz-ui-form-field-select",5),f(7,"div",2),m(8,"sz-ui-form-field-select",6)(9,"medisy-form-field-title-search",7),_(),m(10,"sz-ui-form-field-date",8),_()(),m(11,"sz-ui-dialog-actions",9)),t&2&&(s("header",r.header),l(2),s("formGroup",r.form),l(2),s("source",r.nationalities),l(2),s("source",r.languages),l(2),s("source",r.sexes)("localizedValue",!0),l(3),s("actions",r.actions));},dependencies:[w,U,G,j,X,Y,P,Se,_e,se,ne,E,ee,re,ae],encapsulation:2});let e=o;return e;})();function he(e,o){if(e&1&&m(0,"sz-ui-card",2),e&2){let ge=o.$implicit;s("card",ge);}}var Ee=(()=>{let o=class o{constructor(i,t,r,n){this.dialog=i,this.mlabService=t,this.route=r,this.router=n,this.items=[],this.personMenu=pe.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.default(S.names,"info",()=>this.navigate("names")),p.default(S.phones,"phone",()=>this.navigate("phones")),p.default(S.emails,"alternate_email",()=>this.navigate("emails")),p.default(S.addresses,"home",()=>this.navigate("addresses")),p.default(S.documents,"badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let d={title:0,icon:"science",subtitle:S.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{queryParams:{personIds:[this.person.id]}})};this.items.push(d),this.getAnalysisCount(d);}navigate(i){this.router.navigate([i],{relativeTo:this.route});}getAnalysisCount(i){this.mlabService.analyses.count().subscribe(t=>{i.title=t;});}openSaveComponent(){this.dialog.open(Me,{data:this.person}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.person=i);});}};o.ɵfac=function(t){return new(t||o)(a(Z),a(C),a(q),a(H));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-mppl-person"]],features:[M([C])],decls:5,vars:4,consts:[[3,"title","menu"],[1,"sz-grid-card"],[3,"card"]],template:function(t,r){t&1&&(m(0,"sz-ui-header-info",0),b(1,"personName"),f(2,"div",1),$(3,he,1,1,"sz-ui-card",2,z),_()),t&2&&(s("title",B(1,2,r.person))("menu",r.personMenu),l(3),V(r.items));},dependencies:[h,N,ue],encapsulation:2});let e=o;return e;})();var Ce=[{path:"",component:Ee},{path:"names",loadComponent:()=>import("./chunk-S7SA6J6F.js").then(e=>e.PersonNamesComponent)},{path:"phones",loadComponent:()=>import("./chunk-TGPHVLZX.js").then(e=>e.PersonPhonesComponent)},{path:"emails",loadComponent:()=>import("./chunk-SK3JFV5J.js").then(e=>e.PersonEmailsComponent)},{path:"documents",loadComponent:()=>import("./chunk-DRBXHUJW.js").then(e=>e.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>import("./chunk-HQEGHPTI.js").then(e=>e.PersonAddressesComponent)}];var go=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=A({type:o}),o.ɵinj=y({providers:[g],imports:[k,J.forChild(Ce),te,K,h,P,N,me,ie,E,oe,le]});let e=o;return e;})();export{go as PersonModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/