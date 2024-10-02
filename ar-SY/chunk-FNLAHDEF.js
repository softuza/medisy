import{a as ue}from"./chunk-QW6HGORB.js";import{b as R}from"./chunk-AVG7V6BC.js";import{a as Te,b as Le,c as Ae,d as Ie,e as Re}from"./chunk-H4K2CSXH.js";import{b as D}from"./chunk-LAKXRLUC.js";import{a as N}from"./chunk-GJE2PQG7.js";import{a as I}from"./chunk-MJFSRKIR.js";import{f as fe,g as Ce,h as ce,k as he}from"./chunk-SQCF3S47.js";import{a as A}from"./chunk-74BP7MNC.js";import"./chunk-RSYANUDV.js";import{a as ne,b as ae,d as re,e as se,g as le}from"./chunk-FRBT2WCB.js";import{c as _e,d as Ee,h,j as Se,o as me,p as pe,q as de,r as Me,u as Oe}from"./chunk-ZTT2CFXD.js";import"./chunk-HLTWUKSH.js";import{c as L}from"./chunk-276RQCOC.js";import"./chunk-2IPEL4E4.js";import{d as O,f as w,g as H,k as q,l as j,n as J,q as K,r as Q,t as Z}from"./chunk-FY76SKRQ.js";import{a as Ne}from"./chunk-ZBDJ3JDC.js";import{a as d,b as M,c as Pe}from"./chunk-IDQKS733.js";import{a as ge}from"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import{a as p}from"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import{p as ee,r as oe,t as te,x as ie}from"./chunk-4I74CWZL.js";import"./chunk-3AQJ5CSK.js";import{Gb as Y,Hb as k,Ib as x,Jb as S,Kb as l,Lb as n,Vb as u,bb as m,gc as f,ja as _,kb as U,mb as X,mc as C,na as P,nc as c,yb as E}from"./chunk-YAUSGWXJ.js";import{a as g,b as T}from"./chunk-QXHRBTK3.js";var De=(()=>{let i=class i extends fe{constructor(){let e=_(ne);super(e),this.mpplService=_(I),this.fb=_(Q),this.data=_(ae),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(R).map(r=>R[r]),this.titles=this.mpplService.titles.get(T(g({},L.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:r=>(typeof r=="string"&&(this.titles=this.mpplService.titles.get(T(g({query:r},L.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:r=>r.name,optionValueFn:r=>r,suffixes:[{icon:d.save,tooltip:p.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:r=>this.mpplService.titles.create({name:r}).pipe(h(this.indicator))}]};let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({sex:[o.sex,[O.required]],languageId:[o.languageId,[O.required]],title:[o.title,[N.object()]],ssn:[o.ssn,[]],nationalityId:[o.nationalityId,[]],birthDate:[o.birthDate,[]],primaryEmail:[o?.primaryEmail,[O.email]],secondaryEmail:[o?.secondaryEmail,[O.email]],mobilePhone:t.control(o.mobilePhone,[N.startsWith("+")]),hasMobilePhoneWhatsapp:[o?.hasMobilePhoneWhatsapp??!1,[]],homePhone:t.control(o?.homePhone,[N.startsWith("+")]),hasHomePhoneWhatsapp:[o?.hasHomePhoneWhatsapp??!1,[]],workPhone:t.control(o?.workPhone,[N.startsWith("+")]),hasWorkPhoneWhatsapp:[o?.hasWorkPhoneWhatsapp??!1,[]],homeAddress:new q(o?.homeAddress)});}submit(){if(!this.IsValid())return;let e=this.form.value;this.save(this.mpplService.persons.update(this.data.id,{languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone===""?null:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone===""?null:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone===""?null:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddress:e.homeAddress}));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=P({type:i,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[C([I]),X,c],decls:38,vars:11,consts:()=>{let e;e="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let t;t="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let o;o="\u0627\u0644\u0644\u063A\u0629";let r;r="\u0627\u0644\u062C\u0646\u0633";let y;y="\u0627\u0644\u0644\u0642\u0628";let $;$="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let V;V="\u0627\u0644\u062C\u0648\u0627\u0644";let z;z="\u0627\u0644\u0645\u0646\u0632\u0644";let b;b="\u0627\u0644\u0639\u0645\u0644";let v;v="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let B;B="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let F;F="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let G;G="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let W;return W="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[F,G,W,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",e,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",r,3,"source","localizedValue"],["formControlName","title","label",y,3,"config","source"],["formControlName","birthDate","label",$],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",V],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",z],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",b],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",v],["formControlName","secondaryEmail","label",B],[3,"actions"]];},template:function(t,o){t&1&&(n(0,"sz-ui-dialog-header",3),S(1,"mat-dialog-content")(2,"form",4)(3,"div",5),n(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),l(),n(6,"sz-ui-form-field-select",8),S(7,"div",5),n(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),l(),n(10,"sz-ui-form-field-date",11),S(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),u(16,0),l()(),n(17,"sz-ui-form-field-address",14),l(),S(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),u(21,1),l()(),n(22,"sz-ui-form-field-input",15),S(23,"mat-checkbox",16),f(24,"WhatsApp"),l(),n(25,"sz-ui-form-field-input",17),S(26,"mat-checkbox",18),f(27,"WhatsApp"),l(),n(28,"sz-ui-form-field-input",19),S(29,"mat-checkbox",20),f(30,"WhatsApp"),l()(),S(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),u(34,2),l()(),n(35,"sz-ui-form-field-input",21)(36,"sz-ui-form-field-input",22),l()()()()(),n(37,"sz-ui-dialog-actions",23)),t&2&&(E("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),E("formGroup",o.form),m(2),E("source",o.nationalities),m(2),E("source",o.languages),m(2),E("source",o.sexes)("localizedValue",!0),m(),E("config",o.titleAutoCompleteConfig)("source",o.titles),m(28),E("actions",o.actions));},dependencies:[Z,j,w,H,J,K,he,Ce,ce,Oe,_e,me,Me,Se,le,se,de,pe,Re,Ie,Te,Le,Ae,Ee],encapsulation:2});let a=i;return a;})();function ze(a,i){if(a&1&&n(0,"sz-ui-card",2),a&2){let $e=i.$implicit;E("card",$e);}}var ye=(()=>{let i=class i{constructor(){this.dialog=_(re),this.mlabService=_(A),this.route=_(ee),this.router=_(oe),this.personNamePipe=_(D),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:Pe.default().setItems([M.menu([M.edit(this.openSaveComponent.bind(this)),M.divider(),M.default().setTitle(p.names).setIcon(d.info).setClickFn(()=>this.navigate("names")),M.default().setTitle(p.documents).setIcon(d.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let e={icon:d.science,header:{info:p.analyses,title:0},indicator:U(!0),clickFn:()=>this.router.navigate([Ne.Analyses],{state:{filter:{field:"personId",op:te.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:ie.create().equal("personId",this.person.id).filters()}).pipe(h(e.indicator)).subscribe(t=>{e.header&&(e.header.title=t);}),e;}navigate(e){this.router.navigate([e],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(De,{data:this.person}).afterClosed().subscribe(e=>{e&&(this.person=e);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=P({type:i,selectors:[["sz-medisy-people-person"]],standalone:!0,features:[C([A,D]),c],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(t,o){t&1&&(n(0,"sz-ui-app-bar",0),S(1,"div",1),k(2,ze,1,1,"sz-ui-card",2,Y),l()),t&2&&(E("config",o.appBarConfig),m(2),x(o.items));},dependencies:[ge,ue],encapsulation:2});let a=i;return a;})();var Lo=[{path:"",component:ye},{path:"names",loadComponent:()=>import("./chunk-SHVVA3RF.js").then(a=>a.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-23LTLZNL.js").then(a=>a.PersonDocumentsComponent)}];export{Lo as default};/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/