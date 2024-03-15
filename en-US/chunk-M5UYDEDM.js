import{a as z}from"./chunk-KMLVPXFM.js";import{a as Ae,b as Ie,c as ve}from"./chunk-A67VOE4Z.js";import{a as O,c as Ce,d as ye,e as ge}from"./chunk-R6UWTIGB.js";import"./chunk-OU5JOCLY.js";import"./chunk-BXRRBUXH.js";import"./chunk-6AM7ELCK.js";import"./chunk-ORO6ZTIP.js";import"./chunk-NK5BUI3W.js";import{a as Se}from"./chunk-YYQ4FBPL.js";import"./chunk-V3ZQCSM4.js";import{a as b}from"./chunk-T6KIBCSI.js";import"./chunk-UT6LTUPF.js";import"./chunk-YDQ3FVOF.js";import"./chunk-RZK5BQ6B.js";import{e as Me}from"./chunk-G2IFBR42.js";import"./chunk-XUW55ZPC.js";import"./chunk-QDFHX7IX.js";import{a as l}from"./chunk-JQJBUEG5.js";import{d as _e,f as he,g as L,h as R,k as N}from"./chunk-TQ67CQZ2.js";import"./chunk-JDSQU7UA.js";import"./chunk-FJN7IPRV.js";import{b as T}from"./chunk-CQ6LVFEY.js";import{g as h,h as ce,i as fe,j as $,l as ue}from"./chunk-5NMFMVP3.js";import{a as v,b as D,d as me,e as E,g as S}from"./chunk-YWX36TB2.js";import{c as pe,t as de}from"./chunk-HJYMXJEH.js";import"./chunk-AIREYCF6.js";import{a as w}from"./chunk-TLW5FHGJ.js";import"./chunk-T6BCLI2C.js";import{c as P}from"./chunk-QMJWEZPO.js";import"./chunk-UO2UFEHS.js";import{f as K,g as ee,k as te,m as ie,p as oe,q as A,t as I}from"./chunk-YALI5IZX.js";import"./chunk-34ICKWYC.js";import{a as ne,c as re,e as ae}from"./chunk-MUEZWKIH.js";import"./chunk-U2AKNAEH.js";import{c as le}from"./chunk-YEEVKOOT.js";import{ia as se}from"./chunk-GAHCHFY3.js";import{o as J}from"./chunk-YR55CBIC.js";import{Cb as U,Hb as p,Ib as d,Jb as a,O as F,Xb as X,a as G,b as x,cc as W,dc as k,ea as B,eb as q,ec as Z,f as Q,ha as V,ib as c,jb as r,jc as u,mc as g,pa as Y,qa as f,qb as M,ra as H,tb as _,ub as C,vb as y,xb as m}from"./chunk-SOOFBSF3.js";var Fe=["container"],Ee=(()=>{let e=class e extends _e{constructor(n,t,o){super(t),this.fb=n,this.dialog=t,this.data=o,this.minHeight=B(200),this.minWidth=B(200),this.quietZoneSize=4;}ngAfterViewInit(){this.generate();}generate(){return Q(this,null,function*(){this.containerElement||this.alert.set({message:"Container not found",type:w.Error,timeout:5e3});let n=this.containerElement.nativeElement.offsetWidth,t=this.containerElement.nativeElement.offsetHeight;console.log(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"));try{let o=ge.qr("test",ye.M),s=Ce.toSVG(o,{dimension:256,padding:2,foreground:"#000000",background:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#f2f4f8":void 0,verbose:!1});this.containerElement.nativeElement.appendChild(s);}catch(o){let s=o.message||"Error generating QR code";this.alert.set({message:s,type:w.Error});}});}};e.ɵfac=function(t){return new(t||e)(r(A),r(v),r(D));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-analysis-qr"]],viewQuery:function(t,o){if(t&1&&W(Fe,5),t&2){let s;k(s=Z())&&(o.containerElement=s.first);}},inputs:{minHeight:[Y.SignalBased,"minHeight"],minWidth:[Y.SignalBased,"minWidth"]},standalone:!0,features:[u([]),M,g],decls:5,vars:2,consts:[[3,"header"],["container",""],[3,"actions"]],template:function(t,o){t&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content"),a(2,"div",null,1),d(),a(4,"sz-ui-dialog-actions",2)),t&2&&(m("header",o.header),c(4),m("actions",o.actions));},dependencies:[I,S,E,N,L,R],encapsulation:2});let i=e;return i;})();var Te=(()=>{let e=class e extends he{constructor(n,t,o,s){super(o),this.mlabService=n,this.fb=t,this.dialog=o,this.data=s,this.form=t.group({note:[s?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,x(G({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(t){return new(t||e)(r(l),r(A),r(v),r(D));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[u([l]),M,g],decls:5,vars:3,consts:()=>{let n;return n="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",n],[3,"actions"]];},template:function(t,o){t&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),t&2&&(m("header",o.header),c(2),m("formGroup",o.form),c(2),m("actions",o.actions));},dependencies:[I,te,K,ee,ie,oe,S,E,N,L,R,de,pe],encapsulation:2});let i=e;return i;})();var Ye=()=>[b],we=()=>[z],Pe=()=>[O];function $e(i,e){if(i&1&&a(0,"sz-medisy-people-person-card",5),i&2){let Ne=X(2);m("personId",Ne.analysis.personId);}}function je(i,e){i&1&&(_(0,$e,1,1),C(1,0,Pe),y());}function Ge(i,e){i&1&&a(0,"sz-medisy-laboratory-analysis-tests");}function xe(i,e){i&1&&a(0,"sz-medisy-laboratory-analysis-specimens");}var Le=(()=>{let e=class e{constructor(n,t,o,s){this.dialog=n,this.route=t,this.router=o,this.mlabService=s,this.alert$=q(void 0),this.tiles=[],this.analysisMenu=ue.more([$.edit(()=>this.openSaveComponent()),h.divider(),$.print(()=>this.opendPrintComponent),h.item(P.publish,"publish",this.openPublishComponent),h.divider(),h.item(P.qr,fe.qr,()=>this.openQRCodeComponent())]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Te,{data:this.analysis}).afterClosed().pipe(F(1)).subscribe(n=>{n&&(this.analysis=n);});}opendPrintComponent(){}openPublishComponent(){}openQRCodeComponent(){this.dialog.open(Ee,{data:this.analysis}).afterClosed().pipe(F(1)).subscribe({});}};e.ɵfac=function(t){return new(t||e)(r(me),r(ne),r(re),r(l));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[u([l])],decls:12,vars:4,consts:()=>{let n;n="Tests";let t;return t="Specimens",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",n],["label",t],[3,"personId"]];},template:function(t,o){t&1&&(a(0,"sz-ui-header-info",0),p(1,"div",1),_(2,je,3,0),d(),p(3,"mat-tab-group",2)(4,"mat-tab",3),_(5,Ge,1,0),C(6,5,Ye),y(),d(),p(8,"mat-tab",4),_(9,xe,1,0),C(10,9,we),y(),d()()),t&2&&(m("title",o.analysis.code)("subtitle",o.analysis.note)("menu",o.analysisMenu),c(2),U(2,o.analysis.personId?2:-1));},dependencies:[Ae,Ie,T],encapsulation:2});let i=e;return i;})();var Re=[{path:"",component:Le},{path:"tests",loadComponent:()=>import("./chunk-HNW2CTDJ.js").then(i=>i.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-RIRVL6PF.js").then(i=>i.AnalysisSpecimensComponent)}];var Xt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=H({type:e}),e.ɵinj=V({providers:[l],imports:[J,ae.forChild(Re),S,se,le,Me,ve,T,Se,ce,b,z,O]});let i=e;return i;})();export{Le as AnalysisComponent,Xt as AnalysisModule};/**i18n:3c79f61dd4ae219236c62485f036b897dde9f999c4ae619f8589958cf23779e7*/