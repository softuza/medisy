import{a as De}from"./chunk-K4OOKUQ2.js";import{a as R}from"./chunk-HLRWMEWV.js";import{b as $}from"./chunk-L4YNU5ME.js";import{a as Ue,b as Xe,c as Ye,d as xe,e as je}from"./chunk-VDRIOQRH.js";import{b as v}from"./chunk-LXK4YWXJ.js";import{a as ke}from"./chunk-2IH6W6RH.js";import{a as A}from"./chunk-JDLKSXQ6.js";import{b as Fe,h as Ge}from"./chunk-K7QJU5W4.js";import"./chunk-K6V7CDNO.js";import{a as I}from"./chunk-ORS2JBK4.js";import"./chunk-HDESHI6J.js";import{e as Ve,f as Be,g as be,j as D}from"./chunk-FU2YQI4O.js";import{a as h}from"./chunk-RZMF5OBM.js";import{d as ye,e as T,f as $e,g as L,h as ve,j as ze}from"./chunk-2H57PQRQ.js";import{a as Me,b as fe,d as ue,e as Oe,g as P}from"./chunk-5Z2AVCMQ.js";import{c as ge,d as Te,h as g,j as Le,p as Ie,s as Ae,t as he,v as Re}from"./chunk-OTQOREXX.js";import"./chunk-ZFDGA7FN.js";import{c as y}from"./chunk-RVYZ6BY4.js";import{h as Ce}from"./chunk-WSRIOYTJ.js";import{b as Pe,c as d}from"./chunk-4NIIIJVR.js";import"./chunk-NSDPW5NR.js";import{d as M,f as ee,g as oe,k as f,l as ie,n as te,q as ne,r as re,t as _e,u as ae}from"./chunk-HCMVICB7.js";import{p as Se,t as Ee}from"./chunk-6FRRGOY6.js";import{a as se,c as le,e as me}from"./chunk-OML62A3D.js";import{ha as pe,ia as de,ka as Ne,la as ce}from"./chunk-YDNNJYIT.js";import"./chunk-7BDCTZU5.js";import{Hb as H,Ib as W,Jb as Q,Kb as E,Lb as s,Mb as l,Wb as c,Xb as J,bb as p,cb as S,ea as x,ic as K,ja as j,na as N,oa as k,ob as w,oc as C,pc as Z,qb as q,zb as m}from"./chunk-5JWJCQP4.js";import{a as u,b as O}from"./chunk-E7WAML37.js";var qe=(()=>{let e=class e extends Ve{constructor(i,t,o,n){super(o),this.mpplService=i,this.fb=t,this.dialog=o,this.data=n,this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.sexes=Object.keys($).map(_=>$[_]),this.titles=this.mpplService.titles.get(O(u({},y.unpaged()),{orderBy:"name"})),this.titleAutoCompleteConfig={valueChangedFn:_=>(typeof _=="string"&&(this.titles=this.mpplService.titles.get(O(u({query:_},y.default()),{orderBy:"name"}))),!1),optionDisplayWithFn:_=>_.name,optionValueFn:_=>_,suffixes:[{icon:L.save,tooltip:d.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:_=>this.mpplService.titles.create({name:_}).pipe(g(this.indicator))}]},this.form=t.group({sex:[n.sex,[M.required]],languageId:[n.languageId,[M.required]],title:[n.title,[ke()]],ssn:[n.ssn,[]],nationalityId:[n.nationalityId,[]],birthDate:[n.birthDate,[]],primaryEmail:[n?.primaryEmail,[M.email]],secondaryEmail:[n?.secondaryEmail,[M.email]],mobilePhone:new f(n?.mobilePhone),homePhone:new f(n?.homePhone),workPhone:new f(n?.workPhone),homeAddress:new f(n?.homeAddress)});}submit(){this.IsValid()&&this.save(this.mpplService.persons.update(this.data.id,O(u({},this.form.value),{titleId:this.form.value.title?.id})));}};e.ɵfac=function(t){return new(t||e)(S(A),S(re),S(Me),S(fe));},e.ɵcmp=N({type:e,selectors:[["sz-medisy-people-person-save"]],standalone:!0,features:[C([]),q,Z],decls:32,vars:11,consts:()=>{let i;i="Nationality";let t;t="SSN";let o;o="Language";let n;n="Sex";let _;_="Title";let z;z="BirthDate";let V;V="Mobile";let B;B="Home";let b;b="Work";let F;F="Primary Email";let G;G="Secondary Email";let U;U="Home Address";let X;X="Phones";let Y;return Y="Emails",[U,X,Y,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId","label",i,3,"source"],["formControlName","ssn","label",t],["formControlName","languageId","label",o,3,"source"],["formControlName","sex","label",n,3,"source","localizedValue"],["formControlName","title","label",_,3,"config","source"],["formControlName","birthDate","label",z],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddress"],["formControlName","mobilePhone","label",V],["formControlName","homePhone","label",B],["formControlName","workPhone","label",b],["formControlName","primaryEmail","label",F],["formControlName","secondaryEmail","label",G],[3,"actions"]];},template:function(t,o){t&1&&(l(0,"sz-ui-dialog-header",3),E(1,"mat-dialog-content")(2,"form",4)(3,"div",5),l(4,"sz-ui-form-field-select",6)(5,"sz-ui-form-field-input",7),s(),l(6,"sz-ui-form-field-select",8),E(7,"div",5),l(8,"sz-ui-form-field-select",9)(9,"sz-ui-form-field-autocomplete",10),s(),l(10,"sz-ui-form-field-date",11),E(11,"div",12)(12,"mat-accordion",13)(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),c(16,0),s()(),l(17,"sz-ui-form-field-address",14),s(),E(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),c(21,1),s()(),l(22,"sz-ui-form-field-phone-number",15)(23,"sz-ui-form-field-phone-number",16)(24,"sz-ui-form-field-phone-number",17),s(),E(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),c(28,2),s()(),l(29,"sz-ui-form-field-input",18)(30,"sz-ui-form-field-input",19),s()()()()(),l(31,"sz-ui-dialog-actions",20)),t&2&&(m("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),m("formGroup",o.form),p(2),m("source",o.nationalities),p(2),m("source",o.languages),p(2),m("source",o.sexes)("localizedValue",!0),p(),m("config",o.titleAutoCompleteConfig)("source",o.titles),p(22),m("actions",o.actions));},dependencies:[ae,ie,ee,oe,te,ne,D,Be,be,Re,ge,Ie,Ae,Le,P,Oe,je,xe,Ue,Xe,Ye,Te,he],encapsulation:2});let r=e;return r;})();function Ke(r,e){if(r&1&&l(0,"sz-ui-card",3),r&2){let Qe=e.$implicit;m("card",Qe);}}var He=(()=>{let e=class e{constructor(i,t,o,n){this.dialog=i,this.mlabService=t,this.route=o,this.router=n,this.personNamePipe=j(v),this.items=[],this.person=this.route.snapshot.data.person,this.appBarConfig={title:this.personNamePipe.transform(this.person),menu:ze.more([ve.edit(()=>this.openSaveComponent()),T.divider(),T.item(d.names,"info",()=>this.navigate("names")),T.item(d.documents,"badge",()=>this.navigate("documents"))])},this.items.push(this.buildAnalysesCard());}buildAnalysesCard(){let i={icon:L.science,header:{info:d.analyses,title:0},indicator:w(!0),clickFn:()=>this.router.navigate([De.Analyses],{state:{filter:{field:"personId",op:Se.Equal,value:this.person.id}}})};return this.mlabService.analyses.count({filters:Ee.create().equal("personId",this.person.id).filters()}).pipe(g(i.indicator)).subscribe(t=>{i.header&&(i.header.title=t);}),i;}navigate(i){this.router.navigate([i],{relativeTo:this.route});}openSaveComponent(){this.dialog.open(qe,{data:this.person}).afterClosed().subscribe(i=>{i&&(this.person=i);});}openBarcodeWriterComponent(){this.dialog.open(Ge,{data:{format:Fe.QR_CODE,msg:`personid.${this.person.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(t){return new(t||e)(S(ue),S(I),S(se),S(le));},e.ɵcmp=N({type:e,selectors:[["sz-medisy-people-person"]],features:[C([I,v])],decls:7,vars:1,consts:[[3,"config"],["end","","mat-icon-button","",3,"click"],[1,"sz-grid-card"],[3,"card"]],template:function(t,o){t&1&&(E(0,"sz-ui-app-bar",0)(1,"button",1),J("click",function(){return o.openBarcodeWriterComponent();}),E(2,"mat-icon"),K(3,"qr_code"),s()()(),E(4,"div",2),W(5,Ke,1,1,"sz-ui-card",3,H),s()),t&2&&(m("config",o.appBarConfig),p(5),Q(o.items));},dependencies:[pe,R,h,Ne],encapsulation:2});let r=e;return r;})();var We=[{path:"",component:He},{path:"names",loadComponent:()=>import("./chunk-7RSXCU42.js").then(r=>r.PersonNamesComponent)},{path:"documents",loadComponent:()=>import("./chunk-2CKOHFH6.js").then(r=>r.PersonDocumentsComponent)}];var Ei=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=k({type:e}),e.ɵinj=x({providers:[A],imports:[_e,me.forChild(We),Ce,de,R,D,h,ye,Pe,P,ce,$e]});let r=e;return r;})();export{Ei as PersonModule};/**i18n:0723fdc6bb4a61bdf6e4521b7e87431ed83fc9fa1984f79dc75da1b4dd886659*/