import{a as T}from"./chunk-RAZH4BSY.js";import{a as Ce,b as ye,c as Me}from"./chunk-E36EASRH.js";import{a as g}from"./chunk-GGGU3EEM.js";import"./chunk-2PSMZ27T.js";import"./chunk-CNH2IQRD.js";import"./chunk-FPNG5O7I.js";import"./chunk-WDM7NHJO.js";import"./chunk-UIWPP4R2.js";import{a as pe}from"./chunk-RQBDCNFH.js";import"./chunk-DPWJWWKG.js";import{c as ue,i as Se}from"./chunk-34CATANC.js";import{a as v}from"./chunk-6IM22HHU.js";import"./chunk-LNG2NYUW.js";import"./chunk-QOL7E5DM.js";import"./chunk-YPB5TJMZ.js";import{e as _e}from"./chunk-NKCTOLS4.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{a as s}from"./chunk-5WIX5DGJ.js";import{e as le,f as de,g as fe,j as ce}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as h}from"./chunk-4MXM7XAT.js";import{d as E,e as se,g as N,i as me}from"./chunk-4TWVI3ON.js";import{a as K,b as Z,d as ee,e as te,g as A}from"./chunk-27MVQMP7.js";import{c as ne,v as ae}from"./chunk-SU66CAKG.js";import{b as I}from"./chunk-PPJOQ6MW.js";import"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{c as re}from"./chunk-LJX5OH5V.js";import"./chunk-YLP7B5XO.js";import{f as G,g as j,k as U,m as V,p as X,q as k,t as w}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{a as H,c as W,e as q}from"./chunk-WDXIMTZB.js";import"./chunk-ZMNH44QU.js";import{b as oe,c as ie}from"./chunk-62CSTUMD.js";import{ga as Q,ha as J}from"./chunk-47FGXJPX.js";import{o as x}from"./chunk-AFZEN52O.js";import{Eb as Y,Jb as p,Kb as l,Lb as m,P as O,Wb as B,Yb as y,a as D,b as L,eb as d,fb as r,fc as P,la as S,lc as M,ma as b,mc as $,pb as R,qb as F,vb as u,wb as _,xa as z,xb as C,zb as a}from"./chunk-HCTSIB2L.js";var Ie=(()=>{let t=class t extends le{constructor(i,o,n,c){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=c,this.form=o.group({note:[c?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,L(D({},this.data),{note:this.form.value.note})));}};t.ɵfac=function(o){return new(o||t)(r(s),r(k),r(K),r(Z));},t.ɵcmp=S({type:t,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[M([s]),F,$],decls:5,vars:3,consts:()=>{let i;return i="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,n){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2),l()(),m(4,"sz-ui-dialog-actions",3)),o&2&&(a("header",n.header),d(2),a("formGroup",n.form),d(2),a("actions",n.actions));},dependencies:[w,U,G,j,V,X,A,te,ce,de,fe,ae,ne],encapsulation:2});let e=t;return e;})();var Ee=()=>[v],Ne=()=>[T],De=()=>[g];function Le(e,t){if(e&1&&m(0,"sz-medisy-people-person-card",7),e&2){let f=y(2);a("personId",f.analysis.personId);}}function Oe(e,t){e&1&&(u(0,Le,1,1),_(1,0,De),C());}function be(e,t){if(e&1&&m(0,"sz-medisy-laboratory-analysis-tests",8),e&2){let f=y();a("analysis",f.analysis);}}function ze(e,t){if(e&1&&m(0,"sz-medisy-laboratory-analysis-specimens",8),e&2){let f=y();a("analysis",f.analysis);}}var he=(()=>{let t=class t{constructor(i,o,n,c){this.dialog=i,this.route=o,this.router=n,this.mlabService=c,this.alert=R(void 0),this.tiles=[],this.analysisMenu=me.more([N.edit(()=>this.openSaveComponent()),E.divider(),N.print(()=>this.opendPrintComponent),E.item(re.publish,"publish",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Ie,{data:this.analysis}).afterClosed().pipe(O(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}openBarcodeWriterComponent(){this.dialog.open(Se,{data:{format:ue.QR_CODE,msg:`analysisid.${this.analysis.id}`}}).afterClosed().subscribe({});}};t.ɵfac=function(o){return new(o||t)(r(ee),r(H),r(W),r(s));},t.ɵcmp=S({type:t,selectors:[["sz-medisy-laboratory-analysis"]],features:[M([s])],decls:16,vars:5,consts:()=>{let i;i="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let o;return o="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subtitle","menu"],["end","","mat-icon-button","",3,"click"],[3,"alert"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"],[3,"analysis"]];},template:function(o,n){o&1&&(p(0,"sz-ui-header-info",0)(1,"button",1),B("click",function(){return n.openBarcodeWriterComponent();}),p(2,"mat-icon"),P(3,"qr_code"),l()()(),m(4,"sz-ui-alert",2),p(5,"div",3),u(6,Oe,3,0),l(),p(7,"mat-tab-group",4)(8,"mat-tab",5),u(9,be,1,1),_(10,9,Ee),C(),l(),p(12,"mat-tab",6),u(13,ze,1,1),_(14,13,Ne),C(),l()()),o&2&&(a("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),d(4),a("alert",n.alert()),d(2),Y(6,n.analysis.personId?6:-1));},dependencies:[Q,oe,Ce,ye,h,I],encapsulation:2});let e=t;return e;})();var ge=[{path:"",component:he},{path:"tests",loadComponent:()=>import("./chunk-OVIKEM2K.js").then(e=>e.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-AT7SLFKH.js").then(e=>e.AnalysisSpecimensComponent)}];var bt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=b({type:t}),t.ɵinj=z({providers:[s],imports:[x,q.forChild(ge),A,J,ie,_e,Me,h,I,pe,se,v,T,g]});let e=t;return e;})();export{he as AnalysisComponent,bt as AnalysisModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/