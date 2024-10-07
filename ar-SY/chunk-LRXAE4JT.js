import{b as fe,c as d}from"./chunk-QETWF4JQ.js";import{a as p}from"./chunk-KLF2JPT6.js";import{a as g}from"./chunk-KSG5U4K5.js";import{a as Re,b as de,c as Oe,d as me,e as Te}from"./chunk-IBNNL3QX.js";import{a as m}from"./chunk-4VOEDM67.js";import{f as Se,g as se,h as Ae,k as Ee}from"./chunk-INGRYE55.js";import{a as M}from"./chunk-XQ6KMBLS.js";import{a as Q,b as U,e as Z,g as ee}from"./chunk-HESHWLJQ.js";import{c as oe,d as ne,p as te,q as _e,r as le,s as ae,u as re}from"./chunk-UC5SOJIH.js";import{i as ie}from"./chunk-KVXHYQSU.js";import{d as r,f as x,g as w,k as S,l as k,o as q,r as j,s as J,u as K}from"./chunk-UR5GDBT7.js";import{x as f}from"./chunk-TN5XOKTF.js";import{Jb as _,Kb as o,Lb as n,Vb as E,bb as l,gc as O,ja as A,mb as v,mc as F,na as X,nc as W,yb as t}from"./chunk-JPONW3XL.js";var xe=(()=>{let R=class R extends Se{constructor(){let s=A(Q);super(s),this.fb=A(J),this.data=A(U),this.mlabService=A(M),this.srptService=A(g),this.sntiService=A(p),this.defaultPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:f.create().in("printTechnology",[d.Inkjet,d.Laser]).filters()}),this.labelPrinters=this.srptService.printers.getAll({orderBy:["name"],filters:f.create().in("printTechnology",[d.DirectThermal,d.ThermalTransfer]).equal("printMedia",fe.Label).filters()}),this.templates=this.srptService.templates.getAll({orderBy:["name"]}),this.notifications=this.sntiService.notifications.getAll({orderBy:["name"]}),this.defaultPrinterSelectConfig={emptyOption:!0},this.labelPrinterSelectConfig={emptyOption:!0},this.analysisTransferInNotificationSelectConfig={emptyOption:!0},this.analysisCreatedNotificationSelectConfig={emptyOption:!0},this.analysisReportSelectConfig={emptyOption:!0},this.receiptReportSelectConfig={emptyOption:!0};let a=this.fb;this.dialog=s;let e=this.data;this.form=a.group({name:[e?.name,[r.required,r.minLength(1)]],description:[e?.description,[]],address:new S(e?.address),landlinePhone:new S(e?.landlinePhone,m.phoneNumber()),hasLandlinePhoneWhatsapp:new S(e?.hasLandlinePhoneWhatsapp??!1,[r.required]),mobilePhone1:new S(e?.mobilePhone1,m.phoneNumber()),hasMobilePhone1Whatsapp:new S(e?.hasMobilePhone1Whatsapp??!1,[r.required]),mobilePhone2:new S(e?.mobilePhone2,m.phoneNumber()),hasMobilePhone2Whatsapp:new S(e?.hasMobilePhone2Whatsapp??!1,[r.required]),primaryEmail:[e?.primaryEmail,[r.email]],secondaryEmail:[e?.secondaryEmail,[r.email]],defaultPrinterId:[e?.defaultPrinterId,[]],labelPrinterId:[e?.labelPrinterId,[]],analysisTemplateId:[e?.analysisTemplateId,[]],receiptTemplateId:[e?.receiptTemplateId,[]],labelTemplateId:[e?.labelTemplateId,[]],analysisTransferInNotificationId:[e?.analysisTransferInNotificationId,[]],analysisCreatedNotificationId:[e?.analysisCreatedNotificationId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.laboratories.update(this.data.id,this.form.value)):this.save(this.mlabService.laboratories.create(this.form.value)));}};R.ɵfac=function(a){return new(a||R)();},R.ɵcmp=X({type:R,selectors:[["sz-medisy-laboratory-laboratory-save"]],standalone:!0,features:[F([M,g,p]),v,W],decls:51,vars:19,consts:()=>{let s;s="\u0627\u0644\u0627\u0633\u0645";let a;a="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let L;L="\u0627\u0644\u062C\u0648\u0627\u0644";let C;C="\u0627\u0644\u062C\u0648\u0627\u0644";let c;c="\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0627\u0631\u0636\u064A";let N;N="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A";let u;u="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A";let I;I="\u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A";let B;B="\u0644\u0635\u0627\u0642\u0629";let Y;Y="\u0627\u0644\u062A\u062D\u0644\u064A\u0644";let $;$="\u0625\u064A\u0635\u0627\u0644";let D;D="\u0644\u0635\u0627\u0642\u0629";let h;h="\u062A\u062D\u0644\u064A\u0644 \u0645\u062D\u0648\u0644";let P;P="\u062A\u062D\u0644\u064A\u0644 \u0645\u0646\u0634\u0623";let V;V="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let y;y="\u0627\u0644\u0647\u0648\u0627\u062A\u0641";let b;b="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let z;z="\u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A";let G;G="\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631";let H;return H="\u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",[V,y,b,z,G,H,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",s],["formControlName","description","label",a],[1,"tw-mb-4"],["multi",""],["formControlName","address","label",e],["formControlName","mobilePhone1","label",L],["formControlName","hasMobilePhone1Whatsapp","labelPosition","after"],["formControlName","mobilePhone2","label",C],["formControlName","hasMobilePhone2Whatsapp","labelPosition","after"],["formControlName","landlinePhone","label",c],["formControlName","hasLandlinePhoneWhatsapp","labelPosition","after"],["formControlName","primaryEmail","label",N],["formControlName","secondaryEmail","label",u],["formControlName","defaultPrinterId","label",I,3,"source","config"],["formControlName","labelPrinterId","label",B,3,"source","config"],["formControlName","analysisTemplateId","label",Y,3,"source","config"],["formControlName","receiptTemplateId","label",$,3,"source","config"],["formControlName","labelTemplateId","label",D,3,"source","config"],["formControlName","analysisTransferInNotificationId","label",h,3,"source","config"],["formControlName","analysisCreatedNotificationId","label",P,3,"source","config"],[3,"actions"]];},template:function(a,e){a&1&&(n(0,"sz-ui-dialog-header",6),_(1,"mat-dialog-content")(2,"form",7),n(3,"sz-ui-form-field-input",8)(4,"sz-ui-form-field-textarea",9),_(5,"div",10)(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),E(10,0),o()(),n(11,"sz-ui-form-field-address",12),o(),_(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),E(15,1),o()(),n(16,"sz-ui-form-field-input",13),_(17,"mat-checkbox",14),O(18,"WhatsApp"),o(),n(19,"sz-ui-form-field-input",15),_(20,"mat-checkbox",16),O(21,"WhatsApp"),o(),n(22,"sz-ui-form-field-input",17),_(23,"mat-checkbox",18),O(24,"WhatsApp"),o()(),_(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),E(28,2),o()(),n(29,"sz-ui-form-field-input",19)(30,"sz-ui-form-field-input",20),o(),_(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),E(34,3),o()(),n(35,"sz-ui-form-field-select",21)(36,"sz-ui-form-field-select",22),o(),_(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),E(40,4),o()(),n(41,"sz-ui-form-field-select",23)(42,"sz-ui-form-field-select",24)(43,"sz-ui-form-field-select",25),o(),_(44,"mat-expansion-panel")(45,"mat-expansion-panel-header")(46,"mat-panel-title"),E(47,5),o()(),n(48,"sz-ui-form-field-select",26)(49,"sz-ui-form-field-select",27),o()()()()(),n(50,"sz-ui-dialog-actions",28)),a&2&&(t("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),t("formGroup",e.form),l(33),t("source",e.defaultPrinters)("config",e.defaultPrinterSelectConfig),l(),t("source",e.labelPrinters)("config",e.labelPrinterSelectConfig),l(5),t("source",e.templates)("config",e.analysisReportSelectConfig),l(),t("source",e.templates)("config",e.receiptReportSelectConfig),l(),t("source",e.templates)("config",e.receiptReportSelectConfig),l(5),t("source",e.notifications)("config",e.analysisTransferInNotificationSelectConfig),l(),t("source",e.notifications)("config",e.analysisCreatedNotificationSelectConfig),l(),t("actions",e.actions));},dependencies:[K,k,x,w,q,j,ee,Z,ie,Te,me,Re,de,Oe,_e,te,Ee,se,Ae,re,oe,ae,le,ne],encapsulation:2});let T=R;return T;})();export{xe as a};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/