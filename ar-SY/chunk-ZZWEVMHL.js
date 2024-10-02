import{b as Te,c as O}from"./chunk-RFWALLJC.js";import{a as M}from"./chunk-JJ24IJYG.js";import{a as p}from"./chunk-2JVWZG62.js";import{a as Ee,b as Re,c as Oe,d as de,e as me}from"./chunk-H4K2CSXH.js";import{f as re,g as Se,h as se,k as Ae}from"./chunk-SQCF3S47.js";import{a as f}from"./chunk-XY5F7KAL.js";import{a as K,b as Q,e as U,g as Z}from"./chunk-FRBT2WCB.js";import{c as ie,d as oe,p as ne,q as te,r as _e,s as le,u as ae}from"./chunk-ZTT2CFXD.js";import{i as ee}from"./chunk-2IPEL4E4.js";import{d as r,f as W,g as x,k as S,l as w,n as k,q,r as j,t as J}from"./chunk-FY76SKRQ.js";import{x as T}from"./chunk-4I74CWZL.js";import{Jb as _,Kb as o,Lb as n,Vb as E,bb as l,gc as d,ja as A,mb as X,mc as v,na as H,nc as F,yb as t}from"./chunk-YAUSGWXJ.js";var Fe=(()=>{let R=class R extends re{constructor(){let s=A(K);super(s),this.fb=A(j),this.data=A(Q),this.mlabService=A(f),this.srptService=A(p),this.sntiService=A(M),this.defaultPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:T.create().in("printTechnology",[O.Inkjet,O.Laser]).filters()}),this.labelPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:T.create().in("printTechnology",[O.DirectThermal,O.ThermalTransfer]).equal("printMedia",Te.Label).filters()}),this.templates=this.srptService.templates.getAll({orderBy:["name"]}),this.notifications=this.sntiService.notifications.getAll({orderBy:["name"]}),this.defaultPrinterSelectConfig={emptyOption:!0},this.labelPrinterSelectConfig={emptyOption:!0},this.analysisTransferInNotificationSelectConfig={emptyOption:!0},this.analysisCreatedNotificationSelectConfig={emptyOption:!0},this.analysisReportSelectConfig={emptyOption:!0},this.receiptReportSelectConfig={emptyOption:!0};let a=this.fb;this.dialog=s;let e=this.data;this.form=a.group({name:[e?.name,[r.required,r.minLength(1)]],description:[e?.description,[]],address:new S(e?.address),landlinePhone:new S(e?.landlinePhone),hasLandlinePhoneWhatsapp:new S(e?.hasLandlinePhoneWhatsapp??!1,[r.required]),mobilePhone1:new S(e?.mobilePhone1),hasMobile1PhoneWhatsapp:new S(e?.hasMobilePhone1Whatsapp??!1,[r.required]),mobilePhone2:new S(e?.mobilePhone2),hasMobile2PhoneWhatsapp:new S(e?.hasMobilePhone2Whatsapp??!1,[r.required]),primaryEmail:[e?.primaryEmail,[r.email]],secondaryEmail:[e?.secondaryEmail,[r.email]],defaultPrinterId:[e?.defaultPrinterId,[]],labelPrinterId:[e?.labelPrinterId,[]],analysisTemplateId:[e?.analysisTemplateId,[]],receiptTemplateId:[e?.receiptTemplateId,[]],labelTemplateId:[e?.labelTemplateId,[]],analysisTransferInNotificationId:[e?.analysisTransferInNotificationId,[]],analysisCreatedNotificationId:[e?.analysisCreatedNotificationId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};R.ɵfac=function(a){return new(a||R)();},R.ɵcmp=H({type:R,selectors:[["sz-medisy-laboratory-laboratory-save"]],standalone:!0,features:[v([f,p,M]),X,F],decls:51,vars:19,consts:()=>{let s;s="\u0627\u0644\u0627\u0633\u0645";let a;a="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let g;g="\u0627\u0644\u062C\u0648\u0627\u0644";let L;L="\u0627\u0644\u062C\u0648\u0627\u0644";let C;C="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0627\u0631\u0636\u064A";let c;c="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let N;N="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let u;u="\u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A";let I;I="\u0644\u0635\u0627\u0642\u0629";let B;B="\u0627\u0644\u062A\u062D\u0644\u064A\u0644";let Y;Y="\u0625\u064A\u0635\u0627\u0644";let $;$="\u0644\u0635\u0627\u0642\u0629";let D;D="\u062A\u062D\u0644\u064A\u0644 \u0645\u062D\u0648\u0644";let h;h="\u062A\u062D\u0644\u064A\u0644 \u0645\u0646\u0634\u0623";let P;P="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let V;V="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let y;y="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let b;b="\u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A";let z;z="\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631";let G;return G="\u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",[P,V,y,b,z,G,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",s],["formControlName","description","label",a],[1,"tw-mb-4"],["multi",""],["formControlName","address","label",e],["formControlName","mobilePhone1","label",g],["formControlName","hasMobilePhone1Whatsapp","labelPosition","after"],["formControlName","mobilePhone2","label",L],["formControlName","hasMobilePhone2Whatsapp","labelPosition","after"],["formControlName","landlinePhone","label",C],["formControlName","hasLandlinePhoneWhatsapp","labelPosition","after"],["formControlName","primaryEmail","label",c],["formControlName","secondaryEmail","label",N],["formControlName","defaultPrinterId","label",u,3,"source","config"],["formControlName","labelPrinterId","label",I,3,"source","config"],["formControlName","analysisTemplateId","label",B,3,"source","config"],["formControlName","receiptTemplateId","label",Y,3,"source","config"],["formControlName","labelTemplateId","label",$,3,"source","config"],["formControlName","analysisTransferInNotificationId","label",D,3,"source","config"],["formControlName","analysisCreatedNotificationId","label",h,3,"source","config"],[3,"actions"]];},template:function(a,e){a&1&&(n(0,"sz-ui-dialog-header",6),_(1,"mat-dialog-content")(2,"form",7),n(3,"sz-ui-form-field-input",8)(4,"sz-ui-form-field-textarea",9),_(5,"div",10)(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),E(10,0),o()(),n(11,"sz-ui-form-field-address",12),o(),_(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),E(15,1),o()(),n(16,"sz-ui-form-field-input",13),_(17,"mat-checkbox",14),d(18,"WhatsApp"),o(),n(19,"sz-ui-form-field-input",15),_(20,"mat-checkbox",16),d(21,"WhatsApp"),o(),n(22,"sz-ui-form-field-input",17),_(23,"mat-checkbox",18),d(24,"WhatsApp"),o()(),_(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),E(28,2),o()(),n(29,"sz-ui-form-field-input",19)(30,"sz-ui-form-field-input",20),o(),_(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),E(34,3),o()(),n(35,"sz-ui-form-field-select",21)(36,"sz-ui-form-field-select",22),o(),_(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),E(40,4),o()(),n(41,"sz-ui-form-field-select",23)(42,"sz-ui-form-field-select",24)(43,"sz-ui-form-field-select",25),o(),_(44,"mat-expansion-panel")(45,"mat-expansion-panel-header")(46,"mat-panel-title"),E(47,5),o()(),n(48,"sz-ui-form-field-select",26)(49,"sz-ui-form-field-select",27),o()()()()(),n(50,"sz-ui-dialog-actions",28)),a&2&&(t("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),t("formGroup",e.form),l(33),t("source",e.defaultPrinters)("config",e.defaultPrinterSelectConfig),l(),t("source",e.labelPrinters)("config",e.labelPrinterSelectConfig),l(5),t("source",e.templates)("config",e.analysisReportSelectConfig),l(),t("source",e.templates)("config",e.receiptReportSelectConfig),l(),t("source",e.templates)("config",e.receiptReportSelectConfig),l(5),t("source",e.notifications)("config",e.analysisTransferInNotificationSelectConfig),l(),t("source",e.notifications)("config",e.analysisCreatedNotificationSelectConfig),l(),t("actions",e.actions));},dependencies:[J,w,W,x,k,q,Z,U,ee,me,de,Ee,Re,Oe,te,ne,Ae,Se,se,ae,ie,le,_e,oe],encapsulation:2});let m=R;return m;})();export{Fe as a};/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/