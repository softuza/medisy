import{b as y}from"./chunk-4ZXKVXKP.js";import{b as D}from"./chunk-E5MJL4EQ.js";import{a as Fe,b as Ge,c as Ue,d as Xe,e as Ye}from"./chunk-I7UQCMDJ.js";import{a as xe}from"./chunk-Q7YRED3C.js";import{a as L}from"./chunk-BBUHI33F.js";import{a as A}from"./chunk-WO6X2WJ6.js";import{b as Be,h as be}from"./chunk-BCSTBLMZ.js";import"./chunk-7GEYLSOC.js";import{a as T}from"./chunk-BC6TH3PO.js";import"./chunk-UYYWHWBI.js";import{e as ve,f as ze,g as Ve,j as h}from"./chunk-5NWVIDQT.js";import{a as I}from"./chunk-NXQ5VREG.js";import{d as he,e as g,f as Re,g as De,h as ye,j as $e}from"./chunk-HWSLRHWT.js";import{a as Ee,b as pe,d as de,e as Me,g as P}from"./chunk-Z2LVGH3F.js";import{c as ce,d as Ce,h as Pe,j as ge,p as Te,s as Le,t as Ie,v as Ae}from"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import{b as R}from"./chunk-KCMCGJDS.js";import{h as fe}from"./chunk-ZSZINKJW.js";import{b as Ne,c as d}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import{d as M,f as J,g as K,k as u,l as Z,n as ee,q as oe,r as ie,t as te,u as ne}from"./chunk-WH3JX6YX.js";import{p as se,t as le}from"./chunk-HWVQOC2X.js";import{a as re,c as _e,e as ae}from"./chunk-LCFIH6IT.js";import{ha as me,ia as Se,ka as ue,la as Oe}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Gb as k,Hb as w,Ib as q,Jb as E,Kb as s,Lb as l,Vb as c,Wb as H,bb as p,cb as S,ea as X,hc as W,ja as Y,na as N,nc as C,oa as x,oc as Q,qb as j,zb as m}from"./chunk-ID6V6OOS.js";import{a as O,b as f}from"./chunk-YPLVL3HC.js";var ke=(()=>{let e=class e extends ve{constructor(r,i,o,t){super(o),this.mpplService=r,this.fb=i,this.dialog=o,this.data=t,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys(y).map(_=>y[_]),this.titles=this.mpplService.titles.get(f(O({},R.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:_=>(typeof _=="string"&&(this.titles=this.mpplService.titles.get(f(O({query:_},R.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:_=>_.name,optionValueFn:_=>_,suffixes:[{icon:De.save,tooltip:d.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:_=>this.mpplService.titles.create({name:_}).pipe(Pe(this.indicator))}]},this.form=i.group({sex:[t.sex,[M.required]],languageId:[t.languageId,[M.required]],title:[t.title,[xe()]],ssn:[t.ssn,[]],nationalityId:[t.nationalityId,[]],birthDate:[t.birthDate,[]],primaryEmail:[t?.primaryEmail,[M.email]],secondaryEmail:[t?.secondaryEmail,[M.email]],mobilePhone:new u(t?.mobilePhone),homePhone:new u(t?.homePhone),workPhone:new u(t?.workPhone),homeAddress:new u(t?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,f(O({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(i){return new(i||e)(S(L),S(ie),S(Ee),S(pe));},e.ɵcmp=N({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[C([]),j,Q],decls:32,vars:11,consts:()=>{let r;r="Nationality";let i;i="SSN";let o;o="Language";let t;t="Sex";let _;_="Title";let $;$="BirthDate";let v;v="Mobile";let z;z="Home";let V;V="Work";let B;B="Primary Email";let b;b="Secondary Email";let F;F="Home Address";let G;G="Phones";let U;return U="Emails",[F,G,U,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",r,3,"source"],["formControlName","ssn","label",i],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",t,3,"source","localizedValue"],["formControlName","title","label",_,3,"config","source"],["formControlName","birthDate","label",$],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",v],["formControlName","homePhone","label",z],["formControlName","workPhone","label",V],["formControlName","primaryEmail","label",B],["formControlName","secondaryEmail","label",b],[3,"actions"]];},template:function(i,o){i&1&&(l(0,"sz-ui-dialog-header",3),E(1,"mat-dialog-content")(2,"form",4)(3,"div",5),l(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),s(),l(6,"sz-ui-form-field-select",8),E(7,"div",5),l(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),s(),l(10,"sz-ui-form-field-date",11),E(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),c(16,0),s()(),l(17,"sz-ui-form-field-address",14),s(),E(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),c(21,1),s()(),l(22,"sz-ui-form-field-phone-number",15)(23,"sz-ui-form-field-phone-number",16)(24,"sz-ui-form-field-phone-number",17),s(),E(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),c(28,2),s()(),l(29,"sz-ui-form-field-input",18)(30,"sz-ui-form-field-input",19),s()()()()(),l(31,"sz-ui-dialog-actions",20)),i&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),m("formGroup",o.form),p(2),m("source",o.nationalities),p(2),m("source",o.languages),p(2),m("source",o.sexes)("localizedValue",!0),p(),m("config",o.titleAutoCompleteConfig)("source",o.titles),p(22),m("actions",o.actions));},dependencies:[ne,Z,J,K,ee,oe,h,ze,Ve,Ae,ce,Te,Le,P,Me,Ye,Xe,Fe,Ge,Ue,Ce,Ie,ge],encapsulation:2});let n=e;return n;})();function Qe(n,e){if(n&1&&l(0,"sz-ui-card",3),n&2){let He=e.$implicit;m("card",He);}}var we=(()=>{let e=class e{constructor(r,i,o,t){this.dialog=r,this.mlabService=i,this.route=o,this.router=t,this.personNamePipe=Y(D),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:$e.more([ye.edit(()=>this.openSaveComponent()),g.divider(),g.item(d.names,"info",()=>this.navigate("names")),g.item(d.documents,"badge",()=>this.navigate("documents"))])};let _={title:0,icon:"science",subtitle:d.analyses,indicator:!0,clickFn:()=>this.router.navigate(["/mlab/analyses"],{state:{filter:{field:"personId",op:se.Equal,value:this.person.id}}})};this.items.push(_),this.getAnalysisCount(_);}navigate(r){this.router.navigate([r],{relativeTo:this.route});}getAnalysisCount(r){this.mlabService.analyses.count({filters:le.create().equal("personId",this.person.id).filters()}).subscribe(i=>{r.title=i;});}openSaveComponent(){this.dialog.open(ke,{data:this.person}).afterClosed().subscribe(r=>{r&&(this.person=r);});}openBarcodeWriterComponent(){this.dialog.open(be,{data:{format:Be.QR_CODE,msg:`personid.${this.person.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(i){return new(i||e)(S(de),S(T),S(re),S(_e));},e.ɵcmp=N({type:e,selectors:[["sz-medisy-people-person"]],features:[C([T,D])],decls:7,vars:1,consts:[[3,"config"],["end","","mat-icon-button","",3,"click"],[1,"sz-grid-card"],[3,"card"]],template:function(i,o){i&1&&(E(0,"sz-ui-app-bar",0)(1,"button",1),H("click",function(){return o.openBarcodeWriterComponent();}),E(2,"mat-icon"),W(3,"qr_code"),s()()(),E(4,"div",2),w(5,Qe,1,1,"sz-ui-card",3,k),s()),i&2&&(m("config",o.appBarConfig),p(5),q(o.items));},dependencies:[me,A,I,ue],encapsulation:2});let n=e;return n;})();var qe=[{path:"",component:we},{path:"names",loadComponent:()=>import("./chunk-XTIHTO3K.js").then(n=>n.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-66T2C3R3.js").then(n=>n.PersonDocumentsComponent)}];var _i=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=x({type:e}),e.ɵinj=X({providers:[L],imports:[te,ae.forChild(qe),fe,Se,A,h,I,he,Ne,P,Oe,Re]});let n=e;return n;})();export{_i as PersonModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/