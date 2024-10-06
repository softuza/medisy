import{a as ce}from"./chunk-PEAEHABN.js";import{b as R}from"./chunk-MRRWHADO.js";import{a as Ie,b as Re,c as De,d as ye,e as $e}from"./chunk-IBNNL3QX.js";import{b as D}from"./chunk-LR4VAZ7I.js";import{a as N}from"./chunk-GGX4DK4Y.js";import{a as I}from"./chunk-BIKHMDEI.js";import{f as he,g as ge,h as Te,k as Ae}from"./chunk-HJCF3HNF.js";import{a as L}from"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import{a as se,b as le,d as Ee,e as Se,g as me}from"./chunk-HESHWLJQ.js";import{c as de,h,j as Me,o as pe,p as Oe,q as Ne,r as Pe,u as Ce}from"./chunk-3Y4CYIVY.js";import"./chunk-WPGASEZJ.js";import{c as A}from"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d,f as K,g as Q,l as Z,o as ee,r as oe,s as te,u as ie}from"./chunk-UR5GDBT7.js";import{a as ue}from"./chunk-BDHKQB6K.js";import{a as p,b as O,c as fe}from"./chunk-CRJIWNDX.js";import{a as Le}from"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as M}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as ne,r as _e,t as re,x as ae}from"./chunk-TN5XOKTF.js";import"./chunk-75V32KEJ.js";import{Gb as q,Hb as j,Ib as J,Jb as l,Kb as a,Lb as n,Vb as C,bb as m,gc as u,ja as S,kb as H,mb as w,mc as f,na as P,nc as c,yb as E}from"./chunk-JPONW3XL.js";import{a as g,b as T}from"./chunk-RXNHEMMO.js";var Ve=(()=>{let _=class _ extends he{constructor(){let e=S(se);super(e),this.mpplService=S(I),this.fb=S(te),this.data=S(le),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.countries=this.mpplService.countries.getAll({orderBy:["name"]}),this.sexes=Object.keys(R).map(s=>R[s]),this.titles=this.mpplService.titles.get(T(g({},A.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:s=>(typeof s=="string"&&(this.titles=this.mpplService.titles.get(T(g({query:s},A.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:s=>s.name,optionValueFn:s=>s,suffixes:[{icon:p.save,tooltip:M.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:s=>this.mpplService.titles.create({name:s}).pipe(h(this.indicator))}]};let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({sex:[o.sex,[d.required]],languageId:[o.languageId,[d.required]],title:[o.title,[N.object()]],ssn:[o.ssn,[]],nationalityId:[o.nationalityId,[]],birthDate:[o.birthDate,[]],primaryEmail:[o?.primaryEmail,[d.email]],secondaryEmail:[o?.secondaryEmail,[d.email]],mobilePhone:t.control(o.mobilePhone,[N.phoneNumber()]),hasMobilePhoneWhatsapp:[o?.hasMobilePhoneWhatsapp??!1,[]],homePhone:t.control(o?.homePhone,[N.phoneNumber()]),hasHomePhoneWhatsapp:[o?.hasHomePhoneWhatsapp??!1,[]],workPhone:t.control(o?.workPhone,[N.phoneNumber()]),hasWorkPhoneWhatsapp:[o?.hasWorkPhoneWhatsapp??!1,[]],homeAddressCountryId:[o?.homeAddressCountryId,[d.required]],homeAddressCity:[o?.homeAddressCity,[]],homeAddressStreet:[o?.homeAddressStreet,[]],homeAddressPostalCode:[o?.homeAddressPostalCode,[]],homeAddressProvince:[o?.homeAddressProvince,[]]});}submit(){if(!this.IsValid())return;let e=this.form.value;this.save(this.mpplService.persons.update(this.data.id,{languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:e.mobilePhone===""?null:e.mobilePhone,hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:e.homePhone===""?null:e.homePhone,hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:e.workPhone===""?null:e.workPhone,hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddressCountryId:e.homeAddressCountryId,homeAddressCity:e.homeAddressCity,homeAddressStreet:e.homeAddressStreet,homeAddressPostalCode:e.homeAddressPostalCode,homeAddressProvince:e.homeAddressProvince}));}};_.ɵfac=function(t){return new(t||_)();},_.ɵcmp=P({type:_,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[f([I]),w,c],decls:44,vars:12,consts:()=>{let e;e="Nationality";let t;t="SSN";let o;o="Language";let s;s="Sex";let y;y="Title";let $;$="BirthDate";let V;V="Country";let z;z="City";let b;b="Province";let v;v="Street";let B;B="Postal Code";let G;G="Mobile";let U;U="Home";let X;X="Work";let Y;Y="Primary Email";let F;F="Secondary Email";let W;W="Home Address";let k;k="Phones";let x;return x="Emails",[W,k,x,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",e,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",s,3,"source","localizedValue"],["formControlName","title","label",y,3,"config","source"],["formControlName","birthDate","label",$],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddressCountryId","label",V,3,"source"],["formControlName","homeAddressCity","label",z],["formControlName","homeAddressProvince","label",b],["formControlName","homeAddressStreet","label",v],["formControlName","homeAddressPostalCode","label",B],["formControlName","mobilePhone","label",G],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhone","label",U],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhone","label",X],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",Y],["formControlName","secondaryEmail","label",F],[3,"actions"]];},template:function(t,o){t&1&&(n(0,"sz-ui-dialog-header",3),l(1,"mat-dialog-content")(2,"form",4)(3,"div",5),n(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),a(),n(6,"sz-ui-form-field-select",8),l(7,"div",5),n(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),a(),n(10,"sz-ui-form-field-date",11),l(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),C(16,0),a()(),n(17,"sz-ui-form-field-select",14),l(18,"div",5),n(19,"sz-ui-form-field-input",15)(20,"sz-ui-form-field-input",16),a(),l(21,"div",5),n(22,"sz-ui-form-field-input",17)(23,"sz-ui-form-field-input",18),a()(),l(24,"mat-expansion-panel")(25,"mat-expansion-panel-header")(26,"mat-panel-title"),C(27,1),a()(),n(28,"sz-ui-form-field-input",19),l(29,"mat-checkbox",20),u(30,"WhatsApp"),a(),n(31,"sz-ui-form-field-input",21),l(32,"mat-checkbox",22),u(33,"WhatsApp"),a(),n(34,"sz-ui-form-field-input",23),l(35,"mat-checkbox",24),u(36,"WhatsApp"),a()(),l(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),C(40,2),a()(),n(41,"sz-ui-form-field-input",25)(42,"sz-ui-form-field-input",26),a()()()()(),n(43,"sz-ui-dialog-actions",27)),t&2&&(E("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),E("formGroup",o.form),m(2),E("source",o.nationalities),m(2),E("source",o.languages),m(2),E("source",o.sexes)("localizedValue",!0),m(),E("config",o.titleAutoCompleteConfig)("source",o.titles),m(8),E("source",o.countries),m(26),E("actions",o.actions));},dependencies:[ie,Z,K,Q,ee,oe,Ae,ge,Te,Ce,de,pe,Pe,Me,me,Se,Ne,Oe,$e,ye,Ie,Re,De],encapsulation:2});let r=_;return r;})();function Be(r,_){if(r&1&&n(0,"sz-ui-card",2),r&2){let be=_.$implicit;E("card",be);}}var ze=(()=>{let _=class _{constructor(){this.dialog=S(Ee),this.mlabService=S(L),this.route=S(ne),this.router=S(_e),this.personNamePipe=S(D),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:fe.default().setItems([O.menu([O.edit(this.openSaveComponent.bind(this)),O.divider(),O.default().setTitle(M.names).setIcon(p.info).setClickFn(()=>this.navigate("names")),O.default().setTitle(M.documents).setIcon(p.badge).setClickFn(()=>this.navigate("documents"))])])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let e={icon:p.science,header:{info:M.analyses,title:0},indicator:H(!0),clickFn:()=>this.router.navigate([ue.Analyses],{state:{filter:{field:"personId",op:re.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:ae.create().equal("personId",this.person.id).filters()}).pipe(h(e.indicator)).subscribe(t=>{e.header&&(e.header.title=t);}),e;}navigate(e){this.router.navigate([e],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(Ve,{data:this.person}).afterClosed().subscribe(e=>{e&&(this.person=e);});}};_.ɵfac=function(t){return new(t||_)();},_.ɵcmp=P({type:_,selectors:[["sz-medisy-people-person"]],standalone:!0,features:[f([L,D]),c],decls:4,vars:1,consts:[[3,"config"],[1,"sz-grid-card"],[3,"card"]],template:function(t,o){t&1&&(n(0,"sz-ui-app-bar",0),l(1,"div",1),j(2,Be,1,1,"sz-ui-card",2,q),a()),t&2&&(E("config",o.appBarConfig),m(2),J(o.items));},dependencies:[Le,ce],encapsulation:2});let r=_;return r;})();var Do=[{path:"",component:ze},{path:"names",loadComponent:()=>import("./chunk-V7RJ2QAD.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-A57BXE4P.js").then(r=>r.PersonDocumentsComponent)}];export{Do as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/