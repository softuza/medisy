import{b as Te,c as g}from"./chunk-BHDG2RT7.js";import{a as f}from"./chunk-MLOCCUPT.js";import{a as p}from"./chunk-YWFRILZP.js";import{a as Ee,b as Re,c as Oe,d as me,e as de}from"./chunk-ZOSUNZW2.js";import{a as M}from"./chunk-75LL5PNS.js";import{f as ae,g as Se,h as se,k as Ae}from"./chunk-UXK6PSGI.js";import{a as K,b as Q,e as U,g as Z}from"./chunk-M5V3PZRJ.js";import{c as ie,d as oe,p as ne,q as te,r as _e,s as le,t as re}from"./chunk-VUCYJ2HO.js";import{i as ee}from"./chunk-D5DHQUZL.js";import{d as s,f as x,g as W,k as E,l as w,n as j,q,r as k,u as J}from"./chunk-EOQNX5GG.js";import{t as T}from"./chunk-I2SD3VIP.js";import{Jb as r,Kb as o,Lb as t,Vb as S,ab as l,bb as O,gc as d,ja as R,mc as v,na as H,nc as F,pb as X,yb as n}from"./chunk-PGHKBHIM.js";var we=(()=>{let A=class A extends ae{constructor(a,_,e){super(_),this.fb=a,this.dialog=_,this.data=e,this.mlabService=R(M),this.srptService=R(p),this.sntiService=R(f),this.defaultPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:T.create().equal("printTechnology",g.Inkjet).filters()}),this.labelPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:T.create().equal("printTechnology",g.Thermal).equal("printMedia",Te.Label).filters()}),this.templates=this.srptService.templates.getAll({orderBy:["name"]}),this.notifications=this.sntiService.notifications.getAll({orderBy:["name"]}),this.defaultPrinterSelectConfig={emptyOption:!0},this.labelPrinterSelectConfig={emptyOption:!0},this.analysisTransferInNotificationSelectConfig={emptyOption:!0},this.analysisCreatedNotificationSelectConfig={emptyOption:!0},this.analysisReportSelectConfig={emptyOption:!0},this.receiptReportSelectConfig={emptyOption:!0},this.form=a.group({name:[e?.name,[s.required,s.minLength(1)]],description:[e?.description,[]],address:new E(e?.address),landlinePhone:new E(e?.landlinePhone),hasLandlinePhoneWhatsapp:new E(e?.hasLandlinePhoneWhatsapp??!1,[s.required]),mobilePhone:new E(e?.mobilePhone),hasMobilePhoneWhatsapp:new E(e?.hasMobilePhoneWhatsapp??!1,[s.required]),primaryEmail:[e?.primaryEmail,[s.email]],secondaryEmail:[e?.secondaryEmail,[s.email]],defaultPrinterId:[e?.defaultPrinterId,[]],labelPrinterId:[e?.labelPrinterId,[]],analysisTemplateId:[e?.analysisTemplateId,[]],receiptTemplateId:[e?.receiptTemplateId,[]],labelTemplateId:[e?.labelTemplateId,[]],analysisTransferInNotificationId:[e?.analysisTransferInNotificationId,[]],analysisCreatedNotificationId:[e?.analysisCreatedNotificationId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};A.ɵfac=function(_){return new(_||A)(O(k),O(K),O(Q));},A.ɵcmp=H({type:A,selectors:[["sz-medisy-laboratory-laboratory-save"]],standalone:!0,features:[v([M,p,f]),X,F],decls:48,vars:19,consts:()=>{let a;a="\u0627\u0644\u0627\u0633\u0645";let _;_="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let c;c="\u0627\u0644\u062C\u0648\u0627\u0644";let L;L="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0627\u0631\u0636\u064A";let C;C="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let u;u="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let I;I="\u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A";let N;N="\u0644\u0635\u0627\u0642\u0629";let B;B="\u0627\u0644\u062A\u062D\u0644\u064A\u0644";let Y;Y="\u0625\u064A\u0635\u0627\u0644";let $;$="\u0644\u0635\u0627\u0642\u0629";let D;D="\u062A\u062D\u0644\u064A\u0644 \u0645\u062D\u0648\u0644";let V;V="\u062A\u062D\u0644\u064A\u0644 \u0645\u0646\u0634\u0623";let y;y="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let P;P="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let h;h="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let b;b="\u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A";let z;z="\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631";let G;return G="\u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",[y,P,h,b,z,G,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",a],["formControlName","description","label",_],[1,"tw-mb-4"],["multi",""],["formControlName","address","label",e],["formControlName","mobilePhone","label",c],["formControlName","hasMobilePhoneWhatsapp","labelPosition","after"],["formControlName","landlinePhone","label",L],["formControlName","hasLandlinePhoneWhatsapp","labelPosition","after"],["formControlName","primaryEmail","label",C],["formControlName","secondaryEmail","label",u],["formControlName","defaultPrinterId","label",I,3,"source","config"],["formControlName","labelPrinterId","label",N,3,"source","config"],["formControlName","analysisTemplateId","label",B,3,"source","config"],["formControlName","receiptTemplateId","label",Y,3,"source","config"],["formControlName","labelTemplateId","label",$,3,"source","config"],["formControlName","analysisTransferInNotificationId","label",D,3,"source","config"],["formControlName","analysisCreatedNotificationId","label",V,3,"source","config"],[3,"actions"]];},template:function(_,e){_&1&&(t(0,"sz-ui-dialog-header",6),r(1,"mat-dialog-content")(2,"form",7),t(3,"sz-ui-form-field-input",8)(4,"sz-ui-form-field-textarea",9),r(5,"div",10)(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),S(10,0),o()(),t(11,"sz-ui-form-field-address",12),o(),r(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),S(15,1),o()(),t(16,"sz-ui-form-field-input",13),r(17,"mat-checkbox",14),d(18,"WhatsApp"),o(),t(19,"sz-ui-form-field-input",15),r(20,"mat-checkbox",16),d(21,"WhatsApp"),o()(),r(22,"mat-expansion-panel")(23,"mat-expansion-panel-header")(24,"mat-panel-title"),S(25,2),o()(),t(26,"sz-ui-form-field-input",17)(27,"sz-ui-form-field-input",18),o(),r(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),S(31,3),o()(),t(32,"sz-ui-form-field-select",19)(33,"sz-ui-form-field-select",20),o(),r(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),S(37,4),o()(),t(38,"sz-ui-form-field-select",21)(39,"sz-ui-form-field-select",22)(40,"sz-ui-form-field-select",23),o(),r(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),S(44,5),o()(),t(45,"sz-ui-form-field-select",24)(46,"sz-ui-form-field-select",25),o()()()()(),t(47,"sz-ui-dialog-actions",26)),_&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),n("formGroup",e.form),l(30),n("source",e.defaultPrinters)("config",e.defaultPrinterSelectConfig),l(),n("source",e.labelPrinters)("config",e.labelPrinterSelectConfig),l(5),n("source",e.templates)("config",e.analysisReportSelectConfig),l(),n("source",e.templates)("config",e.receiptReportSelectConfig),l(),n("source",e.templates)("config",e.receiptReportSelectConfig),l(5),n("source",e.notifications)("config",e.analysisTransferInNotificationSelectConfig),l(),n("source",e.notifications)("config",e.analysisCreatedNotificationSelectConfig),l(),n("actions",e.actions));},dependencies:[J,w,x,W,j,q,Z,U,ee,de,me,Ee,Re,Oe,te,ne,Ae,Se,se,re,ie,le,_e,oe],encapsulation:2});let m=A;return m;})();export{we as a};/**i18n:5a2c0bc94bbf1ef498664455a9d60582c29bc498832d9f320f89c95b436c0516*/