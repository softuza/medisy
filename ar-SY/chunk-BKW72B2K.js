import{a as pe,b as le,c as de}from"./chunk-JEUTT6H6.js";import{a as g}from"./chunk-WLBM37KY.js";import{a as h}from"./chunk-ADARUX7L.js";import"./chunk-46TYKK4H.js";import"./chunk-GXK5DAM4.js";import"./chunk-X6SJ6HWT.js";import{a as te}from"./chunk-GSY2T3N2.js";import{a as ie}from"./chunk-KZB2PTJ6.js";import"./chunk-JUXA3TTM.js";import{a as I}from"./chunk-ZAMQG43S.js";import"./chunk-D7AZRYQ2.js";import{e as me}from"./chunk-O5BA4X6Q.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as s}from"./chunk-6KCGB4R6.js";import{e as ne,f as re,g as se,j as ae}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as A}from"./chunk-5X4W32FI.js";import{e as ee,g as p,h as oe}from"./chunk-EUJFTM5S.js";import{a as q,b as k,d as J,e as K,g as y}from"./chunk-V6ACGGWJ.js";import{l as W,r as Z}from"./chunk-VBUQVK7Q.js";import"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as v}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{f as P,g as B,k as $,m as G,p as j,q as x,t as U}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as V,c as X,e as w}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{c as Q}from"./chunk-B3RLTRYJ.js";import{ha as H}from"./chunk-PMB5EPNY.js";import{o as F}from"./chunk-2HDHH4PW.js";import{Ab as R,Fb as l,Gb as d,Hb as a,M as L,Vb as z,a as N,b as T,cb as O,fa as D,gb as f,hb as r,hc as C,kc as Y,oa as S,ob as b,pa as E,rb as c,sb as _,tb as M,vb as m}from"./chunk-UDYUYOMJ.js";var ce=(()=>{let e=class e extends ne{constructor(i,t,n,u){super(n),this.mlabService=i,this.fb=t,this.dialog=n,this.data=u,this.form=t.group({note:[u?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,T(N({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(t){return new(t||e)(r(s),r(x),r(q),r(k));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-laboratory-analysis-save"]],standalone:!0,features:[C([s]),b,Y],decls:5,vars:3,consts:()=>{let i;return i="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(t,n){t&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),t&2&&(m("header",n.header),f(2),m("formGroup",n.form),f(2),m("actions",n.actions));},dependencies:[U,$,P,B,G,j,y,K,ae,re,se,Z,W],encapsulation:2});let o=e;return o;})();var ye=()=>[I],Ae=()=>[g],he=()=>[h];function Ie(o,e){if(o&1&&a(0,"sz-medisy-people-person-card",5),o&2){let _e=z(2);m("personId",_e.analysis.personId);}}function ge(o,e){o&1&&(c(0,Ie,1,1),_(1,0,he),M());}function ve(o,e){o&1&&a(0,"sz-medisy-laboratory-analysis-tests");}function Ne(o,e){o&1&&a(0,"sz-medisy-laboratory-analysis-specimens");}var ue=(()=>{let e=class e{constructor(i,t,n,u){this.dialog=i,this.route=t,this.router=n,this.mlabService=u,this.alert$=O(void 0),this.tiles=[],this.analysisMenu=oe.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(v.publish,"publish",this.openPublishComponent),p.divider(),p.default(v.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ce,{data:this.analysis}).afterClosed().pipe(L(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(t){return new(t||e)(r(J),r(V),r(X),r(s));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-laboratory-analysis"]],features:[C([s,te])],decls:12,vars:4,consts:()=>{let i;i="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let t;return t="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",t],[3,"personId"]];},template:function(t,n){t&1&&(a(0,"sz-ui-header-info",0),l(1,"div",1),c(2,ge,3,0),d(),l(3,"mat-tab-group",2)(4,"mat-tab",3),c(5,ve,1,0),_(6,5,ye),M(),d(),l(8,"mat-tab",4),c(9,Ne,1,0),_(10,9,Ae),M(),d()()),t&2&&(m("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),f(2),R(2,n.analysis.personId?2:-1));},dependencies:[pe,le,A],encapsulation:2});let o=e;return o;})();var Se=[{path:"",component:ue},{path:"tests",loadComponent:()=>import("./chunk-CAMPA7IY.js").then(o=>o.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-U6GJIVOV.js").then(o=>o.AnalysisSpecimensComponent)}];var Ao=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=E({type:e}),e.ɵinj=D({providers:[s],imports:[F,w.forChild(Se),y,H,Q,me,de,A,ie,ee,I,g,h]});let o=e;return o;})();export{ue as AnalysisComponent,Ao as AnalysisModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/