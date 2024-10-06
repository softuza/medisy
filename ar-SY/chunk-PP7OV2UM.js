import{b as T}from"./chunk-MRRWHADO.js";import{a as fe,b as Re,c as pe,d as he,e as ce}from"./chunk-IBNNL3QX.js";import{a as Ae}from"./chunk-4VOEDM67.js";import{a as P}from"./chunk-BIKHMDEI.js";import{f as ue,g as ge,h as Pe,k as Te}from"./chunk-INGRYE55.js";import{a as ne,b as te,e as ie,g as _e}from"./chunk-HESHWLJQ.js";import{c as Ee,h as re,i as ae,j as Ce,o as me,p as Se,q as Me,r as de,u as Ne}from"./chunk-UC5SOJIH.js";import{c as O}from"./chunk-H6274ZKL.js";import{d as r,f as J,g as K,l as Q,o as U,r as Z,s as ee,u as oe}from"./chunk-UR5GDBT7.js";import{a as Oe}from"./chunk-CRJIWNDX.js";import{a as se}from"./chunk-YJ25L3AZ.js";import{b as le}from"./chunk-NHB37XS6.js";import{Jb as l,Kb as _,Lb as E,Vb as d,a as W,bb as s,gc as N,ja as S,mb as H,mc as j,na as w,nc as q,s as V,yb as a}from"./chunk-JPONW3XL.js";import{a as M,b as g}from"./chunk-RXNHEMMO.js";var lo=(()=>{let m=class m extends ue{constructor(){let e=S(ne);super(e),this.mpplService=S(P),this.fb=S(ee),this.data=S(te),this.nationalities=this.mpplService.nationalities.getAll({orderBy:["name"]}),this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.countries=[],this.sexes=Object.keys(T).map(i=>T[i]),this.subscriptions=new W(),this.titles=this.mpplService.titles.get(g(M({},O.unpaged()),{orderBy:"name"})),this.countrySelectConfig={emptyOption:!0,optionContentFn:i=>i.latinName??"",optionSelectedFn:(i,C)=>{C&&(this.form.value.mobilePhoneCallingCode||this.form.patchValue({mobilePhoneCallingCode:C.callingCode}),this.form.value.homePhoneCallingCode||this.form.patchValue({homePhoneCallingCode:C.callingCode}),this.form.value.workPhoneCallingCode||this.form.patchValue({workPhoneCallingCode:C.callingCode}));}},this.callingCodeConfig={optionValueFn:i=>i.callingCode,optionContentFn:i=>i.callingCode},this.titleAutoCompleteConfig={valueChangedFn:i=>(typeof i=="string"&&(this.titles=this.mpplService.titles.get(g(M({query:i},O.default()),{orderBy:"name"}))),!1),optionSelectedFn:i=>{i&&(this.form.value.sex||this.form.patchValue({sex:i.sex}));},optionDisplayWithFn:i=>i.name,optionValueFn:i=>i,suffixes:[{icon:Oe.save,tooltip:se.save,hideOnLoading:!0,hideOnValid:!0,hideOnEmpty:!0,clickFn:i=>this.mpplService.titles.create({name:i})}]};let o=this.fb;this.dialog=e;let n=this.data;this.form=o.group({firstName:o.control(n?.firstName,[r.required,r.maxLength(128)]),lastName:o.control(n?.lastName,[r.required,r.maxLength(128)]),fatherName:o.control(n?.fatherFirstName?`${n.fatherFirstName} ${n?.lastName}`:null,[r.maxLength(128)]),motherName:o.control(n?.motherName,[r.maxLength(128)]),birthDate:o.control(n?.birthDate,[]),nationalityId:o.control(null,[]),ssn:o.control(n?.ssn,[r.maxLength(128)]),languageId:o.control(null,[r.required]),sex:o.control(null,[r.required]),title:o.control(null,[Ae.object()]),primaryEmail:[null,[r.email]],secondaryEmail:[null,[r.email]],mobilePhoneCallingCode:[null,[]],mobilePhone:o.control(null,[r.pattern("^[0-9]*$")]),hasMobilePhoneWhatsapp:[!1,[]],homePhoneCallingCode:[null,[]],homePhone:o.control(null,[r.pattern("^[0-9]*$")]),hasHomePhoneWhatsapp:[!1,[]],workPhoneCallingCode:[null,[]],workPhone:o.control(null,[r.pattern("^[0-9]*$")]),hasWorkPhoneWhatsapp:[!1,[]],homeAddressCountryId:[null,[]],homeAddressCity:[null,[]],homeAddressStreet:[null,[]],homeAddressPostalCode:[null,[]],homeAddressProvince:[null,[]]}),this.subscibeChanges(),this.getCountries();}subscibeChanges(){this.subscriptions.add(this.form.get("firstName")?.valueChanges.subscribe(e=>{if(!e||e===""){this.form.patchValue({sex:null,languageId:null});return;}else this.getGenders(e);}));}getCountries(){this.mpplService.countries.getAllItems({orderBy:["latinName"]}).subscribe(e=>{this.countries=e;});}getGenders(e){!e||e.length<3||this.mpplService.autosuggestions.getGenders(M({query:e},O.minimal())).pipe(V(o=>o.items)).subscribe(o=>{!o||o.length===0||(this.form.value.sex||this.form.patchValue({sex:o[0].sex}),this.form.value.languageId||this.form.patchValue({languageId:o[0].languageId}));});}getPhoneNumber(e,o){return!e||e===""?null:(e=e.replace(/^0+/,""),o?`${o}${e}`:e);}submit(){if(!this.IsValid())return;let e=this.form.value;this.mpplService.persons.create({languageId:e.languageId,nationalityId:e.nationalityId,sex:e.sex,titleId:e.title?.id,birthDate:e.birthDate,nationalitiyId:e.nationalitiyId,ssn:e.ssn,names:[{firstName:e.firstName,lastName:e.lastName,fatherName:e.fatherName,motherName:e.motherName,languageId:e.languageId}],primaryEmail:e.primaryEmail,secondaryEmail:e.secondaryEmail,mobilePhone:this.getPhoneNumber(e.mobilePhone,e.mobilePhoneCallingCode),hasMobilePhoneWhatsapp:e.hasMobilePhoneWhatsapp,homePhone:this.getPhoneNumber(e.homePhone,e.homePhoneCallingCode),hasHomePhoneWhatsapp:e.hasHomePhoneWhatsapp,workPhone:this.getPhoneNumber(e.workPhone,e.workPhoneCallingCode),hasWorkPhoneWhatsapp:e.hasWorkPhoneWhatsapp,homeAddressCountryId:e.homeAddressCountryId,homeAddressCity:e.homeAddressCity,homeAddressStreet:e.homeAddressStreet,homeAddressPostalCode:e.homeAddressPostalCode,homeAddressProvince:e.homeAddressProvince}).pipe(re(this.indicator),ae(this.alert)).subscribe(o=>{this.dialog.close(o);});}};m.ɵfac=function(o){return new(o||m)();},m.ɵcmp=w({type:m,selectors:[["sz-medisy-people-person-create"]],standalone:!0,features:[j([P]),H,q],decls:57,vars:19,consts:()=>{let e;e="\u0627\u0644\u0644\u0642\u0628";let o;o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let n;n="\u0627\u0644\u0643\u0646\u064A\u0629";let i;i="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628";let C;C="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645";let f;f="\u0627\u0644\u062C\u0646\u0633\u064A\u0629";let R;R="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A";let p;p="\u0627\u0644\u062C\u0646\u0633";let h;h="\u0627\u0644\u0644\u063A\u0629";let c;c="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629";let A;A="\u0627\u0644\u062F\u0648\u0644\u0629";let I;I="\u0627\u0644\u0645\u062F\u064A\u0646\u0629";let L;L="\u0627\u0644\u0645\u0642\u0627\u0637\u0639\u0629";let $;$="\u0627\u0644\u0634\u0627\u0631\u0639";let y;y="\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A";let b;b="\u0627\u0644\u0631\u0645\u0632";let D;D="\u0627\u0644\u062C\u0648\u0627\u0644";let z;z="\u0627\u0644\u0631\u0645\u0632";let B;B="\u0627\u0644\u0645\u0646\u0632\u0644";let G;G="\u0627\u0644\u0631\u0645\u0632";let X;X="\u0627\u0644\u0639\u0645\u0644";let Y;Y="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let v;v="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let F;F="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0632\u0644";let x;x="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let k;return k="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[F,x,k,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","title","label",e,3,"source","config"],["formControlName","firstName","label",o],["formControlName","lastName","label",n],["formControlName","fatherName","label",i],["formControlName","motherName","label",C],["formControlName","nationalityId","label",f,3,"source"],["formControlName","ssn","label",R],["formControlName","sex","label",p,3,"source","localizedValue"],["formControlName","languageId","label",h,3,"source"],["formControlName","birthDate","label",c],[1,"tw-mb-4"],["multi",""],["formControlName","homeAddressCountryId","label",A,3,"source","config"],["formControlName","homeAddressCity","label",I],["formControlName","homeAddressProvince","label",L],["formControlName","homeAddressStreet","label",$],["formControlName","homeAddressPostalCode","label",y],["formControlName","mobilePhoneCallingCode","label",b,3,"source","config"],["formControlName","mobilePhone","label",D],["formControlName","hasMobilePhoneWhatsapp"],["formControlName","homePhoneCallingCode","label",z,3,"source","config"],["formControlName","homePhone","label",B],["formControlName","hasHomePhoneWhatsapp"],["formControlName","workPhoneCallingCode","label",G,3,"source","config"],["formControlName","workPhone","label",X],["formControlName","hasWorkPhoneWhatsapp"],["formControlName","primaryEmail","label",Y],["formControlName","secondaryEmail","label",v],[3,"actions"]];},template:function(o,n){o&1&&(E(0,"sz-ui-dialog-header",3),l(1,"mat-dialog-content")(2,"form",4)(3,"div",5),E(4,"sz-ui-form-field-autocomplete",6),_(),l(5,"div",5),E(6,"sz-ui-form-field-input",7)(7,"sz-ui-form-field-input",8),_(),l(8,"div",5),E(9,"sz-ui-form-field-input",9)(10,"sz-ui-form-field-input",10),_(),l(11,"div",5),E(12,"sz-ui-form-field-select",11)(13,"sz-ui-form-field-input",12),_(),l(14,"div",5),E(15,"sz-ui-form-field-select",13)(16,"sz-ui-form-field-select",14),_(),E(17,"sz-ui-form-field-date",15),l(18,"div",16)(19,"mat-accordion",17)(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),d(23,0),_()(),E(24,"sz-ui-form-field-select",18),l(25,"div",5),E(26,"sz-ui-form-field-input",19)(27,"sz-ui-form-field-input",20),_(),l(28,"div",5),E(29,"sz-ui-form-field-input",21)(30,"sz-ui-form-field-input",22),_()(),l(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),d(34,1),_()(),l(35,"div",5),E(36,"sz-ui-form-field-select",23)(37,"sz-ui-form-field-input",24),_(),l(38,"mat-checkbox",25),N(39,"WhatsApp"),_(),l(40,"div",5),E(41,"sz-ui-form-field-select",26)(42,"sz-ui-form-field-input",27),_(),l(43,"mat-checkbox",28),N(44,"WhatsApp"),_(),l(45,"div",5),E(46,"sz-ui-form-field-select",29)(47,"sz-ui-form-field-input",30),_(),l(48,"mat-checkbox",31),N(49,"WhatsApp"),_()(),l(50,"mat-expansion-panel")(51,"mat-expansion-panel-header")(52,"mat-panel-title"),d(53,2),_()(),E(54,"sz-ui-form-field-input",32)(55,"sz-ui-form-field-input",33),_()()()()(),E(56,"sz-ui-dialog-actions",34)),o&2&&(a("title",n.title)("subtitle",n.subtitle)("alert",n.alert()),s(2),a("formGroup",n.form),s(2),a("source",n.titles)("config",n.titleAutoCompleteConfig),s(8),a("source",n.nationalities),s(3),a("source",n.sexes)("localizedValue",!0),s(),a("source",n.languages),s(8),a("source",n.countries)("config",n.countrySelectConfig),s(12),a("source",n.countries)("config",n.callingCodeConfig),s(5),a("source",n.countries)("config",n.callingCodeConfig),s(5),a("source",n.countries)("config",n.callingCodeConfig),s(10),a("actions",n.actions));},dependencies:[oe,Q,J,K,U,Z,_e,ie,ce,he,fe,Re,pe,Me,Se,le,Te,ge,Pe,Ne,Ee,me,de,Ce],encapsulation:2});let u=m;return u;})();export{lo as a};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/