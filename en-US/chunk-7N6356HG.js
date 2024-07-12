import{d as Xe}from"./chunk-GYN3G7UU.js";import"./chunk-VEQUXVGW.js";import{b as A}from"./chunk-OJ4Z6HIC.js";import{b as Ve}from"./chunk-NTYCM6SJ.js";import{a as ve,b as be,c as Be,d as Fe,e as Ge}from"./chunk-W7X77SM5.js";import{a as Ue}from"./chunk-MOPAGSIE.js";import{a as g}from"./chunk-NO2WGSKU.js";import{a as L}from"./chunk-HIF2EYTK.js";import"./chunk-V3IDSUBA.js";import{b as ye,f as ze}from"./chunk-RKH42NA5.js";import"./chunk-4WMKGAQA.js";import{a as P}from"./chunk-E4K3ZOYS.js";import"./chunk-4XEE4I4T.js";import{e as he,f as De,g as $e,j as I}from"./chunk-JDQ4W3QS.js";import"./chunk-5XS2JNPH.js";import{a as T}from"./chunk-3TCVELMY.js";import{d as Le,e as C,f as Ie,h as Ae,j as Re}from"./chunk-VN32AWOL.js";import{a as me,b as Ee,d as pe,e as de,g as f}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as fe,f as ce,r as Ce,v as Pe,w as ge,y as Te}from"./chunk-HZVTZU6E.js";import"./chunk-BQGY2E4W.js";import{h as Ne}from"./chunk-2O3PA6GN.js";import{b as ue,c}from"./chunk-NXGV7MLA.js";import"./chunk-QN2XJZ42.js";import{d,f as Q,g as J,k as M,l as K,n as Z,q as ee,r as oe,t as ie,u as te}from"./chunk-YQYD3PHP.js";import{p as ae,t as le}from"./chunk-FDTJH5UN.js";import{a as ne,c as re,e as _e}from"./chunk-HMSPALCE.js";import{ga as se,ha as Se,ja as Me,ka as Oe}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Fb as Y,Gb as x,Hb as j,Ib as s,Jb as a,Kb as l,Ub as N,Vb as w,ab as E,bb as S,ea as G,ec as k,kc as u,lc as H,na as O,oa as U,ob as X,pc as q,qc as W,yb as m}from"./chunk-MR5DLTC3.js";import{a as B,b as F}from"./chunk-XTPTFZB3.js";var xe=(()=>{let e=class e extends he{constructor(r,o,i,t){super(i),this.mpplService=r,this.fb=o,this.dialog=i,this.data=t,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(A).map(p=>A[p]),this.form=o.group({sex:[t.sex,[d.required]],languageId:[t.languageId,[d.required]],title:[t.title,[Ue()]],ssn:[t.ssn,[]],nationalityId:[t.nationalityId,[]],birthDate:[t.birthDate,[]],primaryEmail:[t?.primaryEmail,[d.email]],secondaryEmail:[t?.secondaryEmail,[d.email]],mobilePhone:new M(t?.mobilePhone),homePhone:new M(t?.homePhone),workPhone:new M(t?.workPhone),homeAddress:new M(t?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,F(B({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(o){return new(o||e)(S(g),S(oe),S(me),S(Ee));},e.ɵcmp=O({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[u([]),X,H],decls:32,vars:9,consts:()=>{let r;r="Nationality";let o;o="SSN";let i;i="Language";let t;t="Sex";let p;p="Title";let R;R="BirthDate";let h;h="Mobile";let D;D="Home";let $;$="Work";let y;y="Primary Email";let z;z="Secondary Email";let V;V="Home Address";let v;v="Phones";let b;return b="Emails",[V,v,b,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",r,3,"source"],["formControlName","ssn","label",o],["formControlName","languageId","label",i,3,"source"],["formControlName","sex","label",t,3,"source","localizedValue"],["formControlName","title","label",p],["formControlName","birthDate","label",R],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",h],["formControlName","homePhone","label",D],["formControlName","workPhone","label",$],["formControlName","primaryEmail","label",y],["formControlName","secondaryEmail","label",z],[3,"actions"]];},template:function(o,i){o&1&&(l(0,"sz-ui-dialog-header",3),s(1,"mat-dialog-content")(2,"form",4)(3,"div",5),l(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),a(),l(6,"sz-ui-form-field-select",8),s(7,"div",5),l(8,"sz-ui-form-field-select",9)(9,"sz-medisy-people-title-search",10),a(),l(10,"sz-ui-form-field-date",11),s(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),N(16,0),a()(),l(17,"sz-ui-form-field-address",14),a(),s(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),N(21,1),a()(),l(22,"sz-ui-form-field-phone-number",15)(23,"sz-ui-form-field-phone-number",16)(24,"sz-ui-form-field-phone-number",17),a(),s(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),N(28,2),a()(),l(29,"sz-ui-form-field-input",18)(30,"sz-ui-form-field-input",19),a()()()()(),l(31,"sz-ui-dialog-actions",20)),o&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),E(2),m("formGroup",i.form),E(2),m("source",i.nationalities),E(2),m("source",i.languages),E(2),m("source",i.sexes)("localizedValue",!0),E(23),m("actions",i.actions));},dependencies:[te,K,Q,J,Z,ee,I,De,$e,Te,fe,f,de,Ge,Fe,ve,be,Be,Ce,Xe,Pe,ce,ge],encapsulation:2});let n=e;return n;})();function qe(n,e){if(n&1&&l(0,"sz-ui-card",3),n&2){let ke=e.$implicit;m("card",ke);}}var je=(()=>{let e=class e{constructor(r,o,i,t){this.dialog=r,this.mlabService=o,this.route=i,this.router=t,this.items=[],this.personMenu=Re.more([Ae.edit(()=>this.openSaveComponent()),C.divider(),C.item(c.names,"info",()=>this.navigate("names")),C.item(c.documents,"badge",()=>this.navigate("documents"))]),this.person=this.route.snapshot.data.person;let p={title:0,icon:"science",subtitle:c.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{state:{filter:{field:"personId",op:ae.Equal,value:this.person.id}}})};this.items.push(p),this.getAnalysisCount(p);}navigate(r){this.router.navigate([r],{relativeTo:this.route});}getAnalysisCount(r){this.mlabService.analyses.count({filters:le.create().equal("personId",this.person.id).filters()}).subscribe(o=>{r.title=o;});}openSaveComponent(){this.dialog.open(xe,{data:this.person}).afterClosed().subscribe(r=>{r&&(this.person=r);});}openBarcodeWriterComponent(){this.dialog.open(ze,{data:{format:ye.QR_CODE,msg:`personid.${this.person.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(o){return new(o||e)(S(pe),S(P),S(ne),S(re));},e.ɵcmp=O({type:e,selectors:[["sz-medisy-people-person"]],features:[u([P])],decls:8,vars:4,consts:[[3,"title","menu"],["end","","mat-icon-button","",3,"click"],[1,"sz-grid-card"],[3,"card"]],template:function(o,i){o&1&&(s(0,"sz-ui-app-bar",0),q(1,"personName"),s(2,"button",1),w("click",function(){return i.openBarcodeWriterComponent();}),s(3,"mat-icon"),k(4,"qr_code"),a()()(),s(5,"div",2),x(6,qe,1,1,"sz-ui-card",3,Y),a()),o&2&&(m("title",W(1,2,i.person))("menu",i.personMenu),E(6),j(i.items));},dependencies:[se,L,T,Me,Ve],encapsulation:2});let n=e;return n;})();var we=[{path:"",component:je},{path:"names",loadComponent:()=>import("./chunk-EQUQI6O7.js").then(n=>n.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-OWD3MHPI.js").then(n=>n.PersonDocumentsComponent)}];var Jo=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=U({type:e}),e.ɵinj=G({providers:[g],imports:[ie,_e.forChild(we),Ne,Se,L,I,T,Le,ue,f,Oe,Ie]});let n=e;return n;})();export{Jo as PersonModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/