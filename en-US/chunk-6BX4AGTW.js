import{a as pe,b as le,c as de}from"./chunk-COJXIRBT.js";import{a as h}from"./chunk-YT24DFCT.js";import"./chunk-OHDMTJQR.js";import"./chunk-ADWWPOFC.js";import{a as te}from"./chunk-26R4Z6FV.js";import{a as ie}from"./chunk-MLK4TN6I.js";import"./chunk-5NLLDK4F.js";import{a as I}from"./chunk-GAO36QDF.js";import{a as g}from"./chunk-WOJCN5QI.js";import"./chunk-PGV7TNPH.js";import{e as me}from"./chunk-ITIEW4R3.js";import"./chunk-VSVSVBNB.js";import"./chunk-RMIHOFED.js";import{a as s}from"./chunk-UJRSINNB.js";import{e as ne,f as re,g as se,j as ae}from"./chunk-YFCTVS2V.js";import"./chunk-FR7UL7Q4.js";import{b as A}from"./chunk-SZPDKKKX.js";import{e as ee,g as p,h as oe}from"./chunk-T5LWAZSF.js";import{a as K,b as Q,d as W,e as Z,g as y}from"./chunk-7HHYVUIJ.js";import{t as k,z as J}from"./chunk-PR23273C.js";import{Ba as v,J as V,L as X,N as w,f as B,g as Y,k as $,m as G,p as j,q as x,t as U}from"./chunk-MNBERY7T.js";import"./chunk-4PXWNT7N.js";import{Ga as H,Ja as q,o as P}from"./chunk-6NFGCLSN.js";import{Ab as z,Fb as l,Gb as d,Hb as a,M as D,Vb as F,a as N,b as L,cb as b,fa as E,gb as f,hb as r,hc as C,kc as R,oa as S,ob as O,pa as T,rb as c,sb as _,tb as M,vb as m}from"./chunk-6OQDJKEQ.js";var ce=(()=>{let e=class e extends ne{constructor(i,t,n,u){super(n),this.mlabService=i,this.fb=t,this.dialog=n,this.data=u,this.form=t.group({note:[u?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,L(N({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(t){return new(t||e)(r(s),r(x),r(K),r(Q));},e.ɵcmp=S({type:e,selectors:[["medisy-analysis-save"]],standalone:!0,features:[C([s]),O,R],decls:5,vars:3,consts:()=>{let i;return i="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(t,n){t&1&&(a(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),d()(),a(4,"sz-ui-dialog-actions",3)),t&2&&(m("header",n.header),f(2),m("formGroup",n.form),f(2),m("actions",n.actions));},dependencies:[U,$,B,Y,G,j,y,Z,ae,re,se,J,k],encapsulation:2});let o=e;return o;})();var ye=()=>[I],Ae=()=>[g],he=()=>[h];function Ie(o,e){if(o&1&&a(0,"medisy-people-persons-common-person-card",5),o&2){let _e=F(2);m("personId",_e.analysis.personId);}}function ge(o,e){o&1&&(c(0,Ie,1,1),_(1,0,he),M());}function ve(o,e){o&1&&a(0,"medisy-laboratory-analysis-tests");}function Ne(o,e){o&1&&a(0,"medisy-laboratory-analysis-specimens");}var ue=(()=>{let e=class e{constructor(i,t,n,u){this.dialog=i,this.route=t,this.router=n,this.mlabService=u,this.alert$=b(void 0),this.tiles=[],this.analysisMenu=oe.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(v.publish,"publish",this.openPublishComponent),p.divider(),p.default(v.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ce,{data:this.analysis}).afterClosed().pipe(D(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(t){return new(t||e)(r(W),r(V),r(X),r(s));},e.ɵcmp=S({type:e,selectors:[["medisy-laboratory-analysis"]],features:[C([s,te])],decls:12,vars:4,consts:()=>{let i;i="Tests";let t;return t="Specimens",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",t],[3,"personId"]];},template:function(t,n){t&1&&(a(0,"sz-ui-header-info",0),l(1,"div",1),c(2,ge,3,0),d(),l(3,"mat-tab-group",2)(4,"mat-tab",3),c(5,ve,1,0),_(6,5,ye),M(),d(),l(8,"mat-tab",4),c(9,Ne,1,0),_(10,9,Ae),M(),d()()),t&2&&(m("title",n.analysis.code)("subtitle",n.analysis.note)("menu",n.analysisMenu),f(2),z(2,n.analysis.personId?2:-1));},dependencies:[pe,le,A],encapsulation:2});let o=e;return o;})();var Se=[{path:"",component:ue},{path:"tests",loadComponent:()=>import("./chunk-D7RB366T.js").then(o=>o.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-AOKPYHZO.js").then(o=>o.AnalysisSpecimensComponent)}];var Ao=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=T({type:e}),e.ɵinj=E({providers:[s],imports:[P,w.forChild(Se),y,q,H,me,de,A,ie,ee,I,g,h]});let o=e;return o;})();export{ue as AnalysisComponent,Ao as AnalysisModule};/**i18n:01970b5be1a6a06655fe4c3b2f38689bdabee61974e5aa4bcc571eb668de444c*/