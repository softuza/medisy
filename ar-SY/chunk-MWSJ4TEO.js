import{a as pe,b as le,c as de}from"./chunk-COJXIRBT.js";import{a as h}from"./chunk-NCBVCJT5.js";import"./chunk-OHDMTJQR.js";import"./chunk-SNZRD74K.js";import"./chunk-ADWWPOFC.js";import{a as oe}from"./chunk-O3K3BHG5.js";import{a as ie}from"./chunk-MLK4TN6I.js";import"./chunk-5NLLDK4F.js";import{a as I}from"./chunk-HODHIBSJ.js";import{a as g}from"./chunk-NZEZEKFY.js";import"./chunk-PGV7TNPH.js";import{e as me}from"./chunk-ITIEW4R3.js";import"./chunk-VSVSVBNB.js";import"./chunk-RMIHOFED.js";import{a as s}from"./chunk-UJRSINNB.js";import{e as ne,f as re,g as se,j as ae}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as A}from"./chunk-SZPDKKKX.js";import{e as ee,g as p,h as te}from"./chunk-T5LWAZSF.js";import{a as K,b as Q,d as W,e as Z,g as y}from"./chunk-7HHYVUIJ.js";import{t as k,z as J}from"./chunk-PR23273C.js";import{Ba as v,J as V,L as X,N as w,f as B,g as Y,k as $,m as G,p as j,q as x,t as U}from"./chunk-MNBERY7T.js";import"./chunk-4PXWNT7N.js";import{Ga as H,Ja as q,o as P}from"./chunk-6NFGCLSN.js";import{Ab as O,Fb as l,Gb as d,Hb as a,M as D,Vb as F,a as N,b as L,cb as b,fa as E,gb as f,hb as r,hc as C,kc as R,oa as S,ob as z,pa as T,rb as c,sb as _,tb as M,vb as m}from"./chunk-6OQDJKEQ.js";var ce=(()=>{let e=class e extends ne{constructor(i,o,n,u){super(n),this.mlabService=i,this.fb=o,this.dialog=n,this.data=u,this.form=o.group({note:[u?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,L(N({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(o){return new(o||e)(r(s),r(x),r(K),r(Q));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-mlab-analysis-save"]],standalone:!0,features:[C([s]),z,R],decls:5,vars:3,consts:()=>{let i;return i="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,n){o&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),o&2&&(m("header",n.header),f(2),m("formGroup",n.form),f(2),m("actions",n.actions));},dependencies:[U,$,B,Y,G,j,y,Z,ae,re,se,J,k],encapsulation:2});let t=e;return t;})();var ye=()=>[I],Ae=()=>[g],he=()=>[h];function Ie(t,e){if(t&1&&a(0,"sz-medisy-mppl-person-card",5),t&2){let _e=F(2);m("personId",_e.analysis.personId);}}function ge(t,e){t&1&&(c(0,Ie,1,1),_(1,0,he),M());}function ve(t,e){t&1&&a(0,"sz-medisy-mlab-analysis-tests");}function Ne(t,e){t&1&&a(0,"sz-medisy-mlab-analysis-specimens");}var ue=(()=>{let e=class e{constructor(i,o,n,u){this.dialog=i,this.route=o,this.router=n,this.mlabService=u,this.alert$=b(void 0),this.tiles=[],this.analysisMenu=te.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(v.publish,"publish",this.openPublishComponent),p.divider(),p.default(v.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ce,{data:this.analysis}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(o){return new(o||e)(r(W),r(V),r(X),r(s));},e.ɵcmp=S({type:e,selectors:[["sz-medisy-mlab-analysis"]],features:[C([s,oe])],decls:12,vars:4,consts:()=>{let i;i="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let o;return o="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"]];},template:function(o,n){o&1&&(a(0,"sz-ui-header-info",0),l(1,"div",1),c(2,ge,3,0),d(),l(3,"mat-tab-group",2)(4,"mat-tab",3),c(5,ve,1,0),_(6,5,ye),M(),d(),l(8,"mat-tab",4),c(9,Ne,1,0),_(10,9,Ae),M(),d()()),o&2&&(m("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),f(2),O(2,n.analysis.personId?2:-1));},dependencies:[pe,le,A],encapsulation:2});let t=e;return t;})();var Se=[{path:"",component:ue},{path:"tests",loadComponent:()=>import("./chunk-4BAAS4AG.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-6P6LG2FA.js").then(t=>t.AnalysisSpecimensComponent)}];var yt=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=T({type:e}),e.ɵinj=E({providers:[s],imports:[P,w.forChild(Se),y,q,H,me,de,A,ie,ee,I,g,h]});let t=e;return t;})();export{ue as AnalysisComponent,yt as AnalysisModule};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/