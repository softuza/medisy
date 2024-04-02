import{a as T}from"./chunk-MFM5XJ64.js";import{a as _e,b as Ce,c as ye}from"./chunk-FU7H7IQB.js";import{a as g}from"./chunk-CTGJSLRJ.js";import"./chunk-5FMJ4CB2.js";import"./chunk-KIS3J6T2.js";import"./chunk-IJ2TUSAM.js";import"./chunk-QFV2XZZI.js";import"./chunk-LSLYIXXD.js";import{a as me}from"./chunk-RH6HLQGV.js";import"./chunk-EKSQVKSV.js";import{c as ce,g as ue}from"./chunk-VKVPCVAD.js";import{a as v}from"./chunk-7PKXNQXM.js";import"./chunk-JITIZZPB.js";import"./chunk-X7D5FT2M.js";import"./chunk-GAZDG4RJ.js";import{e as Se}from"./chunk-BP3AKEMN.js";import"./chunk-IDRLCJEK.js";import"./chunk-6G3NMOEL.js";import"./chunk-RZHQ5QL7.js";import{a as s}from"./chunk-FIBGLEVR.js";import{e as pe,f as le,g as de,j as fe}from"./chunk-ON6JN5JS.js";import"./chunk-6FUK3GWV.js";import{b as h}from"./chunk-4B6EYRF3.js";import{e as E,f as ae,h as N,j as se}from"./chunk-T2EPBTEY.js";import{a as J,b as K,d as Z,e as ee,g as A}from"./chunk-IAMBMKDI.js";import"./chunk-LGJQHWSD.js";import{c as ie,t as re}from"./chunk-3ZKUNSZU.js";import{b as I}from"./chunk-KVZ22XWW.js";import"./chunk-PZABDFIU.js";import"./chunk-K44WW3SG.js";import{c as ne}from"./chunk-LMCANXRL.js";import"./chunk-AIP5TNUP.js";import{f as x,g as G,k as j,m as U,p as V,q as X,t as w}from"./chunk-KAOE4CKM.js";import"./chunk-3K5ERU5F.js";import{a as k,c as H,e as W}from"./chunk-4YTU7KIA.js";import"./chunk-5S3D3WJX.js";import{ga as q,ha as Q,ja as te,ka as oe}from"./chunk-WG6MZMNK.js";import{o as $}from"./chunk-6DPHD5PI.js";import{Ab as _,Bb as C,Db as a,Ib as F,Nb as p,Ob as l,Pb as m,_b as Y,a as D,ac as y,b as L,hb as d,ib as r,jc as B,ka as O,pc as M,qc as P,tb as z,ua as S,ub as R,va as b,zb as u}from"./chunk-WLX3OMWV.js";var Ae=(()=>{let t=class t extends pe{constructor(i,o,n,c){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=c,this.form=o.group({note:[c?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,L(D({},this.data),{note:this.form.value.note})));}};t.ɵfac=function(o){return new(o||t)(r(s),r(X),r(J),r(K));},t.ɵcmp=S({type:t,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[M([s]),R,P],decls:5,vars:3,consts:()=>{let i;return i="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,n){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2),l()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(a("header",n.header),d(2),a("formGroup",n.form),d(2),a("actions",n.actions));},dependencies:[w,j,x,G,U,V,A,ee,fe,le,de,re,ie],encapsulation:2});let e=t;return e;})();var Te=()=>[v],Ee=()=>[T],Ne=()=>[g];function De(e,t){if(e&1&&m(0,"sz-medisy-people-person-card",7),e&2){let f=y(2);a("personId",f.analysis.personId);}}function Le(e,t){e&1&&(u(0,De,1,1),_(1,0,Ne),C());}function Oe(e,t){if(e&1&&m(0,"sz-medisy-laboratory-analysis-tests",8),e&2){let f=y();a("analysis",f.analysis);}}function be(e,t){if(e&1&&m(0,"sz-medisy-laboratory-analysis-specimens",8),e&2){let f=y();a("analysis",f.analysis);}}var Ie=(()=>{let t=class t{constructor(i,o,n,c){this.dialog=i,this.route=o,this.router=n,this.mlabService=c,this.alert=z(void 0),this.tiles=[],this.analysisMenu=se.more([N.edit(()=>this.openSaveComponent()),E.divider(),N.print(()=>this.opendPrintComponent),E.item(ne.publish,"publish",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Ae,{data:this.analysis}).afterClosed().subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(ue,{data:{format:ce.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};t.ɵfac=function(o){return new(o||t)(r(Z),r(k),r(H),r(s));},t.ɵcmp=S({type:t,selectors:[["sz-medisy-laboratory-analysis"]],features:[M([s])],decls:16,vars:5,consts:()=>{let i;i="Tests";let o;return o="Specimens",[[3,"title","subtitle","menu"],["end","","mat-icon-button","",3,"click"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"],[3,"analysis"]];},template:function(o,n){o&1&&(p(0,"sz-ui-header-info",0)(1,"button",1),Y("click",function(){return n.openBarcodeWriterComponent();}),p(2,"mat-icon"),B(3,"qr_code"),l()()(),m(4,"sz-ui-alert",2),p(5,"div",3),u(6,Le,3,0),l(),p(7,"mat-tab-group",4)(8,"mat-tab",5),u(9,Oe,1,1),_(10,9,Te),C(),l(),p(12,"mat-tab",6),u(13,be,1,1),_(14,13,Ee),C(),l()()),o&2&&(a("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),d(4),a("alert",n.alert()),d(2),F(6,n.analysis.personId?6:-1));},dependencies:[q,te,_e,Ce,h,I],encapsulation:2});let e=t;return e;})();var he=[{path:"",component:Ie},{path:"tests",loadComponent:()=>import("./chunk-FCD7T4XF.js").then(e=>e.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-MYMXZI7R.js").then(e=>e.AnalysisSpecimensComponent)}];var Lt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=O({providers:[s],imports:[$,W.forChild(he),A,Q,oe,Se,ye,h,I,me,ae,v,T,g]});let e=t;return e;})();export{Ie as AnalysisComponent,Lt as AnalysisModule};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/