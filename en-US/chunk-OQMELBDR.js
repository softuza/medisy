import{a as pe,b as le,c as de}from"./chunk-JEUTT6H6.js";import{a as g}from"./chunk-NKIHA4UL.js";import{a as h}from"./chunk-HKBVL2T7.js";import"./chunk-46TYKK4H.js";import"./chunk-7ICGQMMS.js";import"./chunk-LUEEPCT5.js";import{a as oe}from"./chunk-SJAHXW3C.js";import{a as ie}from"./chunk-NIVYARTS.js";import"./chunk-JUXA3TTM.js";import{a as I}from"./chunk-XUTXTOR4.js";import"./chunk-BPPQPRVU.js";import{e as me}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as s}from"./chunk-YDMDVI6M.js";import{e as ne,f as re,g as se,j as ae}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as A}from"./chunk-HKZIVJYM.js";import{e as ee,g as p,h as te}from"./chunk-PNII32UO.js";import{a as q,b as k,d as J,e as K,g as y}from"./chunk-V6ACGGWJ.js";import{l as W,r as Z}from"./chunk-VBUQVK7Q.js";import"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as v}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{f as B,g as Y,k as $,m as G,p as j,q as x,t as U}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{a as V,c as X,e as w}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{c as Q}from"./chunk-B3RLTRYJ.js";import{ha as H}from"./chunk-PMB5EPNY.js";import{o as P}from"./chunk-2HDHH4PW.js";import{Ab as O,Fb as l,Gb as d,Hb as a,M as D,Vb as F,a as N,b as L,cb as b,fa as E,gb as f,hb as r,hc as C,kc as R,oa as S,ob as z,pa as T,rb as c,sb as _,tb as M,vb as m}from"./chunk-UDYUYOMJ.js";var ce=(()=>{let e=class e extends ne{constructor(i,o,n,u){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=u,this.form=o.group({note:[u?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,L(N({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(o){return new(o||e)(r(s),r(x),r(q),r(k));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-mlab-analysis-save"]],standalone:!0,features:[C([s]),z,R],decls:5,vars:3,consts:()=>{let i;return i="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,n){o&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),o&2&&(m("header",n.header),f(2),m("formGroup",n.form),f(2),m("actions",n.actions));},dependencies:[U,$,B,Y,G,j,y,K,ae,re,se,Z,W],encapsulation:2});let t=e;return t;})();var ye=()=>[I],Ae=()=>[g],he=()=>[h];function Ie(t,e){if(t&1&&a(0,"sz-medisy-mppl-person-card",5),t&2){let _e=F(2);m("personId",_e.analysis.personId);}}function ge(t,e){t&1&&(c(0,Ie,1,1),_(1,0,he),M());}function ve(t,e){t&1&&a(0,"sz-medisy-mlab-analysis-tests");}function Ne(t,e){t&1&&a(0,"sz-medisy-mlab-analysis-specimens");}var ue=(()=>{let e=class e{constructor(i,o,n,u){this.dialog=i,this.route=o,this.router=n,this.mlabService=u,this.alert$=b(void 0),this.tiles=[],this.analysisMenu=te.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(v.publish,"publish",this.openPublishComponent),p.divider(),p.default(v.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ce,{data:this.analysis}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(o){return new(o||e)(r(J),r(V),r(X),r(s));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-mlab-analysis"]],features:[C([s,oe])],decls:12,vars:4,consts:()=>{let i;i="Tests";let o;return o="Specimens",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"]];},template:function(o,n){o&1&&(a(0,"sz-ui-header-info",0),l(1,"div",1),c(2,ge,3,0),d(),l(3,"mat-tab-group",2)(4,"mat-tab",3),c(5,ve,1,0),_(6,5,ye),M(),d(),l(8,"mat-tab",4),c(9,Ne,1,0),_(10,9,Ae),M(),d()()),o&2&&(m("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),f(2),O(2,n.analysis.personId?2:-1));},dependencies:[pe,le,A],encapsulation:2});let t=e;return t;})();var Se=[{path:"",component:ue},{path:"tests",loadComponent:()=>import("./chunk-FEZGUAUT.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-4DR4GZBA.js").then(t=>t.AnalysisSpecimensComponent)}];var yt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=T({type:e}),e.ɵinj=E({providers:[s],imports:[P,w.forChild(Se),y,H,Q,me,de,A,ie,ee,I,g,h]});let t=e;return t;})();export{ue as AnalysisComponent,yt as AnalysisModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/