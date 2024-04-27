import{a as Ie}from"./chunk-RSTTZCYH.js";import{a as B}from"./chunk-UTG62W5W.js";import{a as w}from"./chunk-DB6VLABB.js";import{a as De,b as be,c as Te}from"./chunk-JUOG4ZM6.js";import{a as P}from"./chunk-D7CHQR3F.js";import"./chunk-CIOSZXVV.js";import"./chunk-M3JYMMCO.js";import"./chunk-PQPLCZGC.js";import"./chunk-SYC4QJAZ.js";import"./chunk-RMOHURRN.js";import{a as _e}from"./chunk-7KKGMXBU.js";import{b as he,f as ve}from"./chunk-QXEDKE3T.js";import"./chunk-SYIYZCT2.js";import{a as Y}from"./chunk-OMQDQCZT.js";import"./chunk-LBYKPEE6.js";import"./chunk-SFONCT2D.js";import"./chunk-V6MFDJU5.js";import{e as Ae}from"./chunk-JVPTXS5K.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{a as u}from"./chunk-XQHKRK6L.js";import{e as ye,f as Ce,g as Me,j as ge}from"./chunk-RXJCJ6DU.js";import"./chunk-LLD2ZUEU.js";import{a as M}from"./chunk-BYTIRDSX.js";import{e as $,f as ue,h as G,j as Se}from"./chunk-POKYVS3O.js";import{a as E,b as z,d as L,e as le,g as N}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{c as de,t as fe}from"./chunk-GKKLWW6E.js";import{b as F,e as ce}from"./chunk-IAFQZILE.js";import"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as x}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import{f as ee,g as te,k as ie,m as oe,p as ne,q as re,t as ae}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{a as se,c as me,e as pe}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{K as b,ha as T,ia as C,ka as R,la as O}from"./chunk-BC4NCYN6.js";import{o as Z}from"./chunk-UQI5C6OQ.js";import{Ab as h,Bb as v,Da as q,Db as p,Ea as H,Ib as A,Nb as r,Ob as a,Pb as m,Tb as K,_b as I,a as k,ac as D,b as U,hb as l,ib as s,jc as d,ka as X,pc as f,qc as y,tb as Q,ua as c,ub as J,va as W,zb as _}from"./chunk-R6OEYYKK.js";var Ee=(()=>{let e=class e{constructor(t){this.dialog=t,this.title=x.templates;}};e.ɵfac=function(o){return new(o||e)(s(L));},e.ɵcmp=c({type:e,selectors:[["sz-mgmt-reporting-templates-mlab-analysis-1"]],standalone:!0,features:[f([]),y],decls:12,vars:0,consts:[["dir","ltr"],[1,"tw-flex","justify-between","items-center","py-4","px-6","bg-gray-900","text-white"],[1,"flex","items-center"],["src","path/to/logo.png","alt","Company Logo",1,"h-8","w-8"],[1,"ml-2","text-xl","font-bold"],[1,"mr-4"]],template:function(o,n){o&1&&(r(0,"div",0)(1,"header",1)(2,"div",2),m(3,"img",3),r(4,"h1",4),d(5,"Company Name"),a()(),r(6,"div",2)(7,"span",5),d(8,"Phone: 123-456-7890"),a(),r(9,"span"),d(10,"Email: info.com"),a()()(),m(11,"div"),a());},dependencies:[C,b],encapsulation:2});let i=e;return i;})();function xe(i,e){i&1&&m(0,"sz-mgmt-reporting-templates-mlab-analysis-1");}var ze=(()=>{let e=class e{constructor(t,o){this.dialog=t,this.data=o;}getTemplateDirection(){return this.data.report.pageDirection?this.data.report.pageDirection===Ie.LTR?"ltr":"rtl":"auto";}getTemplateIdentifier(){return this.data.report.templateIdentifier;}getReportTitle(){return this.data.report.name;}render(){}export(){}};e.ɵfac=function(o){return new(o||e)(s(E),s(z));},e.ɵcmp=c({type:e,selectors:[["sz-mgmt-reporting-templates-preview"]],standalone:!0,features:[f([]),y],decls:11,vars:3,consts:[["container",""],[1,"tw-m-2",3,"title"],["end",""],["mat-icon-button",""],["mat-icon-button","",3,"click"],[3,"dir"]],template:function(o,n){if(o&1){let S=K();r(0,"sz-ui-app-bar",1)(1,"div",2)(2,"button",3)(3,"mat-icon"),d(4,"print"),a()(),r(5,"button",4),I("click",function(){return q(S),H(n.export());}),r(6,"mat-icon"),d(7,"download"),a()()()(),r(8,"div",5,0),_(10,xe,1,0,"sz-mgmt-reporting-templates-mlab-analysis-1"),a();}o&2&&(p("title",n.getReportTitle()),l(8),p("dir",n.getTemplateDirection()),l(2),A(10,n.getTemplateIdentifier()==="mlab-analysis-1"?10:-1));},dependencies:[C,T,b,O,R,M,Ee],encapsulation:2});let i=e;return i;})();var Le=(()=>{let e=class e extends ye{constructor(t,o,n,S){super(n),this.mlabService=t,this.fb=o,this.dialog=n,this.data=S,this.form=o.group({note:[S?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,U(k({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(o){return new(o||e)(s(u),s(re),s(E),s(z));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[f([u]),J,y],decls:5,vars:5,consts:()=>{let t;return t="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",t],[3,"actions"]];},template:function(o,n){o&1&&(m(0,"sz-ui-dialog-header",0),r(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2),a()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(p("title",n.title)("subtitle",n.subtitle)("alert",n.alert()),l(2),p("formGroup",n.form),l(2),p("actions",n.actions));},dependencies:[ae,ie,ee,te,oe,ne,N,le,ge,Ce,Me,fe,de],encapsulation:2});let i=e;return i;})();var Be=()=>[Y],Pe=()=>[w],Ye=()=>[P];function we(i,e){if(i&1&&m(0,"sz-medisy-people-person-card",7),i&2){let g=D(2);p("personId",g.analysis.personId);}}function je(i,e){i&1&&(_(0,we,1,1),h(1,0,Ye),v());}function $e(i,e){if(i&1&&m(0,"sz-medisy-laboratory-analysis-tests",8),i&2){let g=D();p("analysis",g.analysis);}}function Ge(i,e){if(i&1&&m(0,"sz-medisy-laboratory-analysis-specimens",8),i&2){let g=D();p("analysis",g.analysis);}}var Ne=(()=>{let e=class e{constructor(t,o,n,S){this.dialog=t,this.route=o,this.router=n,this.srptService=S,this.alert=Q(void 0),this.tiles=[],this.analysisMenu=Se.more([G.edit(()=>this.openSaveComponent()),$.divider(),G.print(()=>this.opendPrintComponent()),$.item(x.publish,"publish",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Le,{data:this.analysis}).afterClosed().subscribe(t=>{t&&(this.analysis=t);});}opendPrintComponent(){this.srptService.reports.getById(this.analysis.laboratory.analysisReportId).pipe(ce(this.alert,5e3)).subscribe(t=>{t&&this.openReportPreviewComponent(t);});}openReportPreviewComponent(t){this.dialog.open(ze,{data:{report:t,data:this.analysis}}).afterClosed().subscribe(()=>{});}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(ve,{data:{format:he.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(o){return new(o||e)(s(L),s(se),s(me),s(B));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[f([u,B])],decls:16,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let o;return o="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subtitle","menu"],["end","","mat-icon-button","",3,"click"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",t],["label",o],[3,"personId"],[3,"analysis"]];},template:function(o,n){o&1&&(r(0,"sz-ui-app-bar",0)(1,"button",1),I("click",function(){return n.openBarcodeWriterComponent();}),r(2,"mat-icon"),d(3,"qr_code"),a()()(),m(4,"sz-ui-alert",2),r(5,"div",3),_(6,je,3,0),a(),r(7,"mat-tab-group",4)(8,"mat-tab",5),_(9,$e,1,1),h(10,9,Be),v(),a(),r(12,"mat-tab",6),_(13,Ge,1,1),h(14,13,Pe),v(),a()()),o&2&&(p("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),l(4),p("alert",n.alert()),l(2),A(6,n.analysis.personId?6:-1));},dependencies:[T,R,De,be,M,F],encapsulation:2});let i=e;return i;})();var ti=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=W({type:e}),e.ɵinj=X({providers:[u],imports:[Z,pe.forChild([{path:"",component:Ne},{path:"tests",loadComponent:()=>import("./chunk-OTEVLPU3.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-EF6BAIK2.js").then(t=>t.AnalysisSpecimensComponent)}]),N,C,O,Ae,Te,M,F,_e,ue,Y,w,P]});let i=e;return i;})();export{Ne as AnalysisComponent,ti as AnalysisModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/