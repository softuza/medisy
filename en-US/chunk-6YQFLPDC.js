import{a as b}from"./chunk-BPJVQ7Q5.js";import{a as z}from"./chunk-7JMVDFTX.js";import{a as Ae,b as ge,c as he}from"./chunk-JUOG4ZM6.js";import{a as N}from"./chunk-ZYD6CTDS.js";import"./chunk-CIOSZXVV.js";import"./chunk-M3JYMMCO.js";import"./chunk-PQPLCZGC.js";import"./chunk-SYC4QJAZ.js";import"./chunk-7TQGJHPP.js";import{a as fe}from"./chunk-7KKGMXBU.js";import{b as ye,f as Ce}from"./chunk-4TTOFUXB.js";import"./chunk-SYIYZCT2.js";import{a as O}from"./chunk-PLECCBBA.js";import"./chunk-LBYKPEE6.js";import"./chunk-NKNOQ4Q5.js";import"./chunk-V6MFDJU5.js";import{e as Me}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{a as l}from"./chunk-DAMCUIWD.js";import{e as ce,f as ue,g as Se,j as _e}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import{a as L}from"./chunk-BYTIRDSX.js";import{e as F,f as le,h as B,j as de}from"./chunk-POKYVS3O.js";import{a as v,b as E,d as ne,e as re,g as T}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{c as me,t as pe}from"./chunk-PX7G627R.js";import{b as D}from"./chunk-5QGBLY3O.js";import{a as R}from"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as S}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import{f as k,g as W,k as q,m as H,p as Q,q as J,t as K}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{a as Z,c as ee,e as te}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{K as ie,ha as oe,ia as I,ka as ae,la as se}from"./chunk-BC4NCYN6.js";import{o as X}from"./chunk-UQI5C6OQ.js";import{Ab as M,Bb as A,Db as p,Ib as U,Nb as a,Ob as s,Pb as m,_b as V,a as Y,ac as g,b as P,hb as f,ib as r,jc as c,ka as $,pc as u,qc as h,tb as w,ua as d,ub as G,va as j,zb as C}from"./chunk-R6OEYYKK.js";var ve=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.data=i,this.title=S.templates;}};e.ɵfac=function(i){return new(i||e)(r(v),r(E));},e.ɵcmp=d({type:e,selectors:[["sz-mgmt-reporting-preview"]],standalone:!0,features:[u([]),h],decls:12,vars:0,consts:[["dir","ltr"],[1,"tw-flex","justify-between","items-center","py-4","px-6","bg-gray-900","text-white"],[1,"flex","items-center"],["src","path/to/logo.png","alt","Company Logo",1,"h-8","w-8"],[1,"ml-2","text-xl","font-bold"],[1,"mr-4"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"header",1)(2,"div",2),m(3,"img",3),a(4,"h1",4),c(5,"Company Name"),s()(),a(6,"div",2)(7,"span",5),c(8,"Phone: 123-456-7890"),s(),a(9,"span"),c(10,"Email: info.com"),s()()(),m(11,"div"),s());},dependencies:[I,ie],encapsulation:2});let o=e;return o;})();var Ee=(()=>{let e=class e extends ce{constructor(t,i,n,y){super(n),this.mlabService=t,this.fb=i,this.dialog=n,this.data=y,this.form=i.group({note:[y?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,P(Y({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(i){return new(i||e)(r(l),r(J),r(v),r(E));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[u([l]),G,h],decls:5,vars:5,consts:()=>{let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",t],[3,"actions"]];},template:function(i,n){i&1&&(m(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2),s()(),m(4,"sz-ui-dialog-actions",3)),i&2&&(p("title",n.title)("subtitle",n.subtitle)("alert",n.alert()),f(2),p("formGroup",n.form),f(2),p("actions",n.actions));},dependencies:[K,q,k,W,H,Q,T,re,_e,ue,Se,pe,me],encapsulation:2});let o=e;return o;})();var De=()=>[O],be=()=>[z],Le=()=>[N];function Ne(o,e){if(o&1&&m(0,"sz-medisy-people-person-card",7),o&2){let _=g(2);p("personId",_.analysis.personId);}}function Oe(o,e){o&1&&(C(0,Ne,1,1),M(1,0,Le),A());}function ze(o,e){if(o&1&&m(0,"sz-medisy-laboratory-analysis-tests",8),o&2){let _=g();p("analysis",_.analysis);}}function Re(o,e){if(o&1&&m(0,"sz-medisy-laboratory-analysis-specimens",8),o&2){let _=g();p("analysis",_.analysis);}}var Te=(()=>{let e=class e{constructor(t,i,n,y){this.dialog=t,this.route=i,this.router=n,this.srptService=y,this.alert=w(void 0),this.tiles=[],this.analysisMenu=de.more([B.edit(()=>this.openSaveComponent()),F.divider(),B.print(()=>this.opendPrintComponent()),F.item(S.publish,"publish",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Ee,{data:this.analysis}).afterClosed().subscribe(t=>{t&&(this.analysis=t);});}opendPrintComponent(){let t=this.analysis.laboratory.analysisTemplateId;if(!t){this.alert.set({type:R.Error,message:S.analysis_template_not_found,timeout:5e3});return;}this.srptService.templates.getById(t).subscribe(i=>{if(!i){this.alert.set({type:R.Error,message:S.analysis_template_not_found,timeout:5e3});return;}this.openReportPreviewComponent();});}openReportPreviewComponent(){this.dialog.open(ve,{data:this.analysis}).afterClosed().subscribe(()=>{});}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(Ce,{data:{format:ye.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(i){return new(i||e)(r(ne),r(Z),r(ee),r(b));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[u([l,b])],decls:16,vars:5,consts:()=>{let t;t="Tests";let i;return i="Specimens",[[3,"title","subtitle","menu"],["end","","mat-icon-button","",3,"click"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",t],["label",i],[3,"personId"],[3,"analysis"]];},template:function(i,n){i&1&&(a(0,"sz-ui-app-bar",0)(1,"button",1),V("click",function(){return n.openBarcodeWriterComponent();}),a(2,"mat-icon"),c(3,"qr_code"),s()()(),m(4,"sz-ui-alert",2),a(5,"div",3),C(6,Oe,3,0),s(),a(7,"mat-tab-group",4)(8,"mat-tab",5),C(9,ze,1,1),M(10,9,De),A(),s(),a(12,"mat-tab",6),C(13,Re,1,1),M(14,13,be),A(),s()()),i&2&&(p("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),f(4),p("alert",n.alert()),f(2),U(6,n.analysis.personId?6:-1));},dependencies:[oe,ae,Ae,ge,L,D],encapsulation:2});let o=e;return o;})();var jt=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=j({type:e}),e.ɵinj=$({providers:[l],imports:[X,te.forChild([{path:"",component:Te},{path:"tests",loadComponent:()=>import("./chunk-HYN7MOQX.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-LSHNPFV2.js").then(t=>t.AnalysisSpecimensComponent)}]),T,I,se,Me,he,L,D,fe,le,O,z,N]});let o=e;return o;})();export{Te as AnalysisComponent,jt as AnalysisModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/