import{a as fe}from"./chunk-HAD2RXAL.js";import{b as I}from"./chunk-ZDPRNFLQ.js";import{a as he,b as Te,c as Le,d as Ae,e as Ie}from"./chunk-CZVACMCC.js";import{b as R}from"./chunk-MXFEPOMM.js";import{a as Re}from"./chunk-INUIK7WM.js";import{a as A}from"./chunk-4RJ7HJNV.js";import{f as ue,g as Pe,h as Ce,k as ce}from"./chunk-ZUXIOQ5W.js";import{a as L}from"./chunk-IVJ2NFMZ.js";import"./chunk-BJI27WIG.js";import{a as ie,b as ne,d as ae,e as re,g as _e}from"./chunk-XPOR4ANW.js";import{c as se,d as le,h,j as Ee,o as Se,p as me,q as de,r as pe,t as Me}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import{c as T}from"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import{d as O,f as W,g as H,k as w,l as q,n as j,q as J,r as K,t as Q}from"./chunk-H2FFMEH6.js";import{a as Oe}from"./chunk-3PK3EJJB.js";import{a as p,b as M,c as Ne}from"./chunk-QW5IGDYW.js";import{a as ge}from"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as d}from"./chunk-TCPYXQGZ.js";import{p as Z,r as ee,t as oe,x as te}from"./chunk-TW5J4YO6.js";import"./chunk-OIZYHDJE.js";import{Gb as Y,Hb as x,Ib as k,Jb as S,Kb as s,Lb as n,Vb as P,bb as m,gc as C,ja as l,kb as U,mb as X,mc as c,na as u,nc as g,yb as E}from"./chunk-GTR6A7KK.js";import{a as N,b as f}from"./chunk-NLUW4JS2.js";var De=(()=>{let i=class i extends ue{constructor(){let o=l(ie);super(o),this.mpplService=l(A),this.fb=l(K),this.data=l(ne),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(I).map(r=>I[r]),this.titles=this.mpplService.titles.get(f(N({},T.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:r=>(typeof r=="string"&&(this.titles=this.mpplService.titles.get(f(N({query:r},T.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:r=>r.name,optionValueFn:r=>r,suffixes:[{icon:p.save,tooltip:d.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:r=>this.mpplService.titles.create({name:r}).pipe(h(this.indicator))}]};let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({sex:[e.sex,[O.required]],languageId:[e.languageId,[O.required]],title:[e.title,[Re()]],ssn:[e.ssn,[]],nationalityId:[e.nationalityId,[]],birthDate:[e.birthDate,[]],primaryEmail:[e?.primaryEmail,[O.email]],secondaryEmail:[e?.secondaryEmail,[O.email]],mobilePhone:[e?.mobilePhone,[]],hasMobilePhoneWhatsapp:[e?.hasMobilePhoneWhatsapp??!1,[]],homePhone:[e?.homePhone,[]],hasHomePhoneWhatsapp:[e?.hasHomePhoneWhatsapp??!1,[]],workPhone:[e?.workPhone,[]],hasWorkPhoneWhatsapp:[e?.hasWorkPhoneWhatsapp??!1,[]],homeAddress:new w(e?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,f(N({},this.form.value),{titleId:this.form.value.title?.id})));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[c([A]),X,g],decls:38,vars:11,consts:()=>{let o;o="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let t;t="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let e;e="\u0627\u0644\u0644\u063A\u0629";let r;r="\u0627\u0644\u062C\u0646\u0633";let D;D="\u0627\u0644\u0644\u0642\u0628";let $;$="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let y;y="\u0627\u0644\u062C\u0648\u0627\u0644";let V;V="\u0627\u0644\u0645\u0646\u0632\u0644";let z;z="\u0627\u0644\u0639\u0645\u0644";let v;v="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let b;b="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let B;B="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let F;F="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let G;return G="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[B,F,G,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",o,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",e,3,"source"],["formControlName","sex","label",r,3,"source","localizedValue"],["formControlName","title","label",D,3,"config","source"],["formControlName","birthDate","label",$],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",y],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",V],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",z],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",v],["formControlName","secondaryEmail","label",b],[3,"actions"]];},template:function(t,e){t&1&&(n(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4)(3,"div",5),n(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),s(),n(6,"sz-ui-form-field-select",8),S(7,"div",5),n(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),s(),n(10,"sz-ui-form-field-date",11),S(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),P(16,0),s()(),n(17,"sz-ui-form-field-address",14),s(),S(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),P(21,1),s()(),n(22,"sz-ui-form-field-input",15),S(23,"mat-checkbox",16),C(24,"WhatsApp"),s(),n(25,"sz-ui-form-field-input",17),S(26,"mat-checkbox",18),C(27,"WhatsApp"),s(),n(28,"sz-ui-form-field-input",19),S(29,"mat-checkbox",20),C(30,"WhatsApp"),s()(),S(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),P(34,2),s()(),n(35,"sz-ui-form-field-input",21)(36,"sz-ui-form-field-input",22),s()()()()(),n(37,"sz-ui-dialog-actions",23)),t&2&&(E("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),E("formGroup",e.form),m(2),E("source",e.nationalities),m(2),E("source",e.languages),m(2),E("source",e.sexes)("localizedValue",!0),m(),E("config",e.titleAutoCompleteConfig)("source",e.titles),m(28),E("actions",e.actions));},dependencies:[Q,q,W,H,j,J,ce,Pe,Ce,Me,se,Se,pe,Ee,_e,re,de,me,Ie,Ae,he,Te,Le,le],encapsulation:2});let a=i;return a;})();function ze(a,i){if(a&1&&n(0,"sz-ui-card",2),a&2){let ye=i.$implicit;E("card",ye);}}var $e=(()=>{let i=class i{constructor(){this.dialog=l(ae),this.mlabService=l(L),this.route=l(Z),this.router=l(ee),this.personNamePipe=l(R),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:Ne.default().setItems([M.menu([M.edit(this.openSaveComponent.bind(this)),M.divider(),M.default().setTitle(d.names).setIcon(p.info).setClickFn(()=>this.navigate("names")),M.default().setTitle(d.documents).setIcon(p.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let o={icon:p.science,header:{info:d.analyses,title:0},indicator:U(!0),clickFn:()=>this.router.navigate([Oe.Analyses],{state:{filter:{field:"personId",op:oe.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:te.create().equal("personId",this.person.id).filters()}).pipe(h(o.indicator)).subscribe(t=>{o.header&&(o.header.title=t);}),o;}navigate(o){this.router.navigate([o],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(De,{data:this.person}).afterClosed().subscribe(o=>{o&&(this.person=o);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=u({type:i,selectors:[["sz-medisy-people-person"]],standalone:!0,features:[c([L,R]),g],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(t,e){t&1&&(n(0,"sz-ui-app-bar",0),S(1,"div",1),x(2,ze,1,1,"sz-ui-card",2,Y),s()),t&2&&(E("config",e.appBarConfig),m(2),k(e.items));},dependencies:[ge,fe],encapsulation:2});let a=i;return a;})();var Lo=[{path:"",component:$e},{path:"names",loadComponent:()=>import("./chunk-MX4PWNFY.js").then(a=>a.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-I46L7NSW.js").then(a=>a.PersonDocumentsComponent)}];export{Lo as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/