import{a as R}from"./chunk-VS3EBPBG.js";import{a as B}from"./chunk-7JMVDFTX.js";import{a as he,b as ve,c as Ae}from"./chunk-JUOG4ZM6.js";import{a as x}from"./chunk-ZYD6CTDS.js";import"./chunk-CIOSZXVV.js";import"./chunk-M3JYMMCO.js";import"./chunk-PQPLCZGC.js";import"./chunk-SYC4QJAZ.js";import"./chunk-7TQGJHPP.js";import{a as fe}from"./chunk-7KKGMXBU.js";import{b as Ce,f as Me}from"./chunk-4TTOFUXB.js";import"./chunk-SYIYZCT2.js";import{a as F}from"./chunk-PLECCBBA.js";import"./chunk-LBYKPEE6.js";import"./chunk-NKNOQ4Q5.js";import"./chunk-V6MFDJU5.js";import{e as ge}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{a as S}from"./chunk-DAMCUIWD.js";import{e as ue,f as Se,g as _e,j as ye}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import{a as M}from"./chunk-BYTIRDSX.js";import{e as w,f as de,h as j,j as ce}from"./chunk-POKYVS3O.js";import{a as D,b as z,d as L,e as ae,g as N}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{c as le,t as pe}from"./chunk-PX7G627R.js";import{b as O}from"./chunk-5QGBLY3O.js";import{a as Y}from"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as u}from"./chunk-JQFBSSR6.js";import"./chunk-YKI6444X.js";import{f as Q,g as J,k as K,m as Z,p as ee,q as te,t as ie}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{a as oe,c as ne,e as re}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{K as E,ha as T,ia as C,ka as se,la as me}from"./chunk-BC4NCYN6.js";import{o as H}from"./chunk-UQI5C6OQ.js";import{Ab as v,Bb as A,Db as l,Ib as I,Nb as r,Ob as a,Pb as s,_b as q,a as G,ac as b,b as U,hb as c,ib as m,jc as p,ka as V,pc as f,qc as y,tb as k,ua as d,ub as W,va as X,zb as _}from"./chunk-R6OEYYKK.js";var Ie=(()=>{let e=class e{constructor(o){this.dialog=o,this.title=u.templates;}};e.ɵfac=function(t){return new(t||e)(m(L));},e.ɵcmp=d({type:e,selectors:[["sz-mgmt-reporting-templates-mlab-analysis-1"]],standalone:!0,features:[f([]),y],decls:12,vars:0,consts:[["dir","ltr"],[1,"tw-flex","justify-between","items-center","py-4","px-6","bg-gray-900","text-white"],[1,"flex","items-center"],["src","path/to/logo.png","alt","Company Logo",1,"h-8","w-8"],[1,"ml-2","text-xl","font-bold"],[1,"mr-4"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"header",1)(2,"div",2),s(3,"img",3),r(4,"h1",4),p(5,"Company Name"),a()(),r(6,"div",2)(7,"span",5),p(8,"Phone: 123-456-7890"),a(),r(9,"span"),p(10,"Email: info.com"),a()()(),s(11,"div"),a());},dependencies:[C,E],encapsulation:2});let i=e;return i;})();function Le(i,e){i&1&&s(0,"sz-mgmt-reporting-templates-mlab-analysis-1");}var be=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.data=t,this.title=u.templates;}getTemplateIdentifier(){return this.data.template.templateIdentifier;}render(){}export(){}};e.ɵfac=function(t){return new(t||e)(m(D),m(z));},e.ɵcmp=d({type:e,selectors:[["sz-mgmt-reporting-templates-preview"]],standalone:!0,features:[f([]),y],decls:18,vars:2,consts:[["container",""],[3,"title"],["end","","mat-icon-button",""],["dir","ltr"],[1,"tw-flex","justify-between","items-center","py-4","px-6","bg-gray-900","text-white"],[1,"flex","items-center"],["src","path/to/logo.png","alt","Company Logo",1,"h-8","w-8"],[1,"ml-2","text-xl","font-bold"],[1,"mr-4"]],template:function(t,n){t&1&&(r(0,"sz-ui-app-bar",1)(1,"button",2)(2,"mat-icon"),p(3,"print"),a()()(),r(4,"div",3,0),_(6,Le,1,0,"sz-mgmt-reporting-templates-mlab-analysis-1"),r(7,"header",4)(8,"div",5),s(9,"img",6),r(10,"h1",7),p(11,"Company Name"),a()(),r(12,"div",5)(13,"span",8),p(14,"Phone: 123-456-7890"),a(),r(15,"span"),p(16,"Email: info.com"),a()()(),s(17,"div"),a()),t&2&&(l("title",n.title),c(6),I(6,n.getTemplateIdentifier()==="mlab-analysis-1"?6:-1));},dependencies:[C,T,E,M,Ie],encapsulation:2});let i=e;return i;})();var Ee=(()=>{let e=class e extends ue{constructor(o,t,n,h){super(n),this.mlabService=o,this.fb=t,this.dialog=n,this.data=h,this.form=t.group({note:[h?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,U(G({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(t){return new(t||e)(m(S),m(te),m(D),m(z));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[f([S]),W,y],decls:5,vars:5,consts:()=>{let o;return o="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",o],[3,"actions"]];},template:function(t,n){t&1&&(s(0,"sz-ui-dialog-header",0),r(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),a()(),s(4,"sz-ui-dialog-actions",3)),t&2&&(l("title",n.title)("subtitle",n.subtitle)("alert",n.alert()),c(2),l("formGroup",n.form),c(2),l("actions",n.actions));},dependencies:[ie,K,Q,J,Z,ee,N,ae,ye,Se,_e,pe,le],encapsulation:2});let i=e;return i;})();var Ne=()=>[F],Oe=()=>[B],Re=()=>[x];function xe(i,e){if(i&1&&s(0,"sz-medisy-people-person-card",7),i&2){let g=b(2);l("personId",g.analysis.personId);}}function Fe(i,e){i&1&&(_(0,xe,1,1),v(1,0,Re),A());}function Be(i,e){if(i&1&&s(0,"sz-medisy-laboratory-analysis-tests",8),i&2){let g=b();l("analysis",g.analysis);}}function Pe(i,e){if(i&1&&s(0,"sz-medisy-laboratory-analysis-specimens",8),i&2){let g=b();l("analysis",g.analysis);}}var Te=(()=>{let e=class e{constructor(o,t,n,h){this.dialog=o,this.route=t,this.router=n,this.srptService=h,this.alert=k(void 0),this.tiles=[],this.analysisMenu=ce.more([j.edit(()=>this.openSaveComponent()),w.divider(),j.print(()=>this.opendPrintComponent()),w.item(u.publish,"publish",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Ee,{data:this.analysis}).afterClosed().subscribe(o=>{o&&(this.analysis=o);});}opendPrintComponent(){let o=this.analysis.laboratory.analysisTemplateId;if(!o){this.alert.set({type:Y.Error,message:u.analysis_template_not_found,timeout:5e3});return;}this.srptService.reports.getById(o).subscribe(t=>{if(!t){this.alert.set({type:Y.Error,message:u.analysis_template_not_found,timeout:5e3});return;}this.openReportPreviewComponent();});}openReportPreviewComponent(){this.dialog.open(be,{data:this.analysis}).afterClosed().subscribe(()=>{});}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(Me,{data:{format:Ce.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};e.ɵfac=function(t){return new(t||e)(m(L),m(oe),m(ne),m(R));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[f([S,R])],decls:16,vars:5,consts:()=>{let o;o="Tests";let t;return t="Specimens",[[3,"title","subtitle","menu"],["end","","mat-icon-button","",3,"click"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",o],["label",t],[3,"personId"],[3,"analysis"]];},template:function(t,n){t&1&&(r(0,"sz-ui-app-bar",0)(1,"button",1),q("click",function(){return n.openBarcodeWriterComponent();}),r(2,"mat-icon"),p(3,"qr_code"),a()()(),s(4,"sz-ui-alert",2),r(5,"div",3),_(6,Fe,3,0),a(),r(7,"mat-tab-group",4)(8,"mat-tab",5),_(9,Be,1,1),v(10,9,Ne),A(),a(),r(12,"mat-tab",6),_(13,Pe,1,1),v(14,13,Oe),A(),a()()),t&2&&(l("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),c(4),l("alert",n.alert()),c(2),I(6,n.analysis.personId?6:-1));},dependencies:[T,se,he,ve,M,O],encapsulation:2});let i=e;return i;})();var Ht=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=X({type:e}),e.ɵinj=V({providers:[S],imports:[H,re.forChild([{path:"",component:Te},{path:"tests",loadComponent:()=>import("./chunk-HYN7MOQX.js").then(o=>o.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-LSHNPFV2.js").then(o=>o.AnalysisSpecimensComponent)}]),N,C,me,ge,Ae,M,O,fe,de,F,B,x]});let i=e;return i;})();export{Te as AnalysisComponent,Ht as AnalysisModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/