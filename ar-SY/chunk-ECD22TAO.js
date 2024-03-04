import{a as Ae,b as Ie,c as ve}from"./chunk-5BZVWQ54.js";import{a as z}from"./chunk-7EH6IRDN.js";import{a as O,d as ye,e as ge}from"./chunk-JPVVESPC.js";import"./chunk-TYMXJULZ.js";import"./chunk-7RLKX7FH.js";import"./chunk-KKMYL45Q.js";import{a as Se}from"./chunk-5UJGZ76M.js";import"./chunk-7RADG4HP.js";import{a as _e}from"./chunk-Q74SCDHI.js";import"./chunk-LBSGGZOT.js";import{a as b}from"./chunk-RHXZ67EA.js";import"./chunk-I2L2F3W4.js";import{e as Ce}from"./chunk-G6YSD6OC.js";import"./chunk-IRB4KQYF.js";import"./chunk-W4S4CWZJ.js";import{a as p}from"./chunk-5NOW5TCC.js";import"./chunk-7SF7UD7U.js";import{d as he,f as Me,g as L,h as N,k as R}from"./chunk-TMUUGOVG.js";import"./chunk-ZMIZD4OW.js";import{b as T}from"./chunk-6PUQQAJZ.js";import{g as h,h as fe,i as ce,j as $,l as ue}from"./chunk-AOXOSE6N.js";import{a as v,b as D,d as me,e as E,g as S}from"./chunk-FJEVQQCZ.js";import{c as le,t as de}from"./chunk-D7JFOMEO.js";import"./chunk-LRQ6V3TI.js";import{a as w}from"./chunk-HBWDAFFH.js";import"./chunk-P6BVRGDC.js";import{c as P}from"./chunk-RWAUFYWT.js";import"./chunk-477MI5B5.js";import{f as K,g as ee,k as te,m as ie,p as oe,q as A,t as I}from"./chunk-4M7GLITV.js";import"./chunk-2LTYI7XT.js";import{a as ne,c as re,e as ae}from"./chunk-X6M67BMY.js";import"./chunk-JB3WCZ5O.js";import{c as pe}from"./chunk-S5454LB4.js";import{ia as se}from"./chunk-FSWGSSPT.js";import{o as J}from"./chunk-4IMYWXKG.js";import{Cb as X,Hb as l,Ib as d,Jb as a,O as F,Xb as q,a as G,b as x,cc as W,dc as k,ea as Y,eb as U,ec as Z,f as Q,ha as V,ib as f,jb as r,jc as u,mc as g,pa as B,qa as c,qb as M,ra as H,tb as _,ub as C,vb as y,xb as m}from"./chunk-MU2MOHCU.js";var Fe=["container"],Ee=(()=>{let e=class e extends he{constructor(n,t,o){super(t),this.fb=n,this.dialog=t,this.data=o,this.minHeight=Y(200),this.minWidth=Y(200),this.quietZoneSize=4;}ngAfterViewInit(){this.generate();}generate(){return Q(this,null,function*(){this.containerElement||this.alert.set({message:"Container not found",type:w.Error,timeout:5e3});let n=this.containerElement.nativeElement.offsetWidth,t=this.containerElement.nativeElement.offsetHeight;console.log(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"));try{let o=ge.datamatrix("Your message here",!1),s=ye.toSVG(o,{dimension:256,padding:2,foreground:"#000000",background:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#f2f4f8":void 0,verbose:!1});this.containerElement.nativeElement.appendChild(s);}catch(o){let s=o.message||"Error generating QR code";this.alert.set({message:s,type:w.Error,timeout:5e3});}});}};e.ɵfac=function(t){return new(t||e)(r(A),r(v),r(D));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-laboratory-analysis-qr"]],viewQuery:function(t,o){if(t&1&&W(Fe,5),t&2){let s;k(s=Z())&&(o.containerElement=s.first);}},inputs:{minHeight:[B.SignalBased,"minHeight"],minWidth:[B.SignalBased,"minWidth"]},standalone:!0,features:[u([]),M,g],decls:5,vars:2,consts:[[3,"header"],["container",""],[3,"actions"]],template:function(t,o){t&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),a(2,"div",null,1),d(),a(4,"sz-ui-dialog-actions",2)),t&2&&(m("header",o.header),f(4),m("actions",o.actions));},dependencies:[I,S,E,R,L,N],encapsulation:2});let i=e;return i;})();var Te=(()=>{let e=class e extends Me{constructor(n,t,o,s){super(o),this.mlabService=n,this.fb=t,this.dialog=o,this.data=s,this.form=t.group({note:[s?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,x(G({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(t){return new(t||e)(r(p),r(A),r(v),r(D));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[u([p]),M,g],decls:5,vars:3,consts:()=>{let n;return n="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",n],[3,"actions"]];},template:function(t,o){t&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),t&2&&(m("header",o.header),f(2),m("formGroup",o.form),f(2),m("actions",o.actions));},dependencies:[I,te,K,ee,ie,oe,S,E,R,L,N,de,le],encapsulation:2});let i=e;return i;})();var Be=()=>[b],we=()=>[z],Pe=()=>[O];function $e(i,e){if(i&1&&a(0,"sz-medisy-people-person-card",5),i&2){let Re=q(2);m("personId",Re.analysis.personId);}}function je(i,e){i&1&&(_(0,$e,1,1),C(1,0,Pe),y());}function Ge(i,e){i&1&&a(0,"sz-medisy-laboratory-analysis-tests");}function xe(i,e){i&1&&a(0,"sz-medisy-laboratory-analysis-specimens");}var Le=(()=>{let e=class e{constructor(n,t,o,s){this.dialog=n,this.route=t,this.router=o,this.mlabService=s,this.alert$=U(void 0),this.tiles=[],this.analysisMenu=ue.more([$.edit(()=>this.openSaveComponent()),h.divider(),$.print(()=>this.opendPrintComponent),h.item(P.publish,"publish",this.openPublishComponent),h.divider(),h.item(P.qr,ce.qr,()=>this.openQRCodeComponent())]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Te,{data:this.analysis}).afterClosed().pipe(F(1)).subscribe(n=>{n&&(this.analysis=n);});}opendPrintComponent(){}openPublishComponent(){}openQRCodeComponent(){this.dialog.open(Ee,{data:this.analysis}).afterClosed().pipe(F(1)).subscribe({});}};e.ɵfac=function(t){return new(t||e)(r(me),r(ne),r(re),r(p));},e.ɵcmp=c({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[u([p,Se])],decls:12,vars:4,consts:()=>{let n;n="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let t;return t="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",n],["label",t],[3,"personId"]];},template:function(t,o){t&1&&(a(0,"sz-ui-header-info",0),l(1,"div",1),_(2,je,3,0),d(),l(3,"mat-tab-group",2)(4,"mat-tab",3),_(5,Ge,1,0),C(6,5,Be),y(),d(),l(8,"mat-tab",4),_(9,xe,1,0),C(10,9,we),y(),d()()),t&2&&(m("title",o.analysis.code)("subtitle",o.analysis.note)("menu",o.analysisMenu),f(2),X(2,o.analysis.personId?2:-1));},dependencies:[Ae,Ie,T],encapsulation:2});let i=e;return i;})();var Ne=[{path:"",component:Le},{path:"tests",loadComponent:()=>import("./chunk-VRP4LRAM.js").then(i=>i.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-ZJGHV7JT.js").then(i=>i.AnalysisSpecimensComponent)}];var Wt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=H({type:e}),e.ɵinj=V({providers:[p],imports:[J,ae.forChild(Ne),S,se,pe,Ce,ve,T,_e,fe,b,z,O]});let i=e;return i;})();export{Le as AnalysisComponent,Wt as AnalysisModule};/**i18n:a75ae641b91843c929bb3a5d156d611237f05c38297bc5d961c21a15cd95c6ef*/