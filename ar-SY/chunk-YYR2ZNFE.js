import{a as Ge,b as je,c as Ue}from"./chunk-WMQISCVH.js";import{a as x}from"./chunk-ZHPLDZOR.js";import{b as Te}from"./chunk-3OJ3K3QJ.js";import{b as ve,d as G}from"./chunk-7YT5T3JN.js";import{a as xe}from"./chunk-RKDKE2AU.js";import{a as A}from"./chunk-UYAJRTBM.js";import{a as Y}from"./chunk-RMREJQO4.js";import{a as $}from"./chunk-Z6OGLX4X.js";import{a as Fe,b as Be,g as I}from"./chunk-7X3HZZWH.js";import"./chunk-RCF34KUN.js";import"./chunk-YJ66KLW4.js";import{a as se,b as me,c as pe,d as le,e as de,f as _e,g as ce,h as fe}from"./chunk-VU4DCVQ3.js";import"./chunk-IWR3KYJK.js";import{f as ze,p as $e}from"./chunk-LIUTUGIN.js";import"./chunk-SUUMCV2R.js";import{c as Oe,h as Re,i as be,j as Le,m as Ye}from"./chunk-TXP6BBJB.js";import{a as Ie,b as he,d as ye,e as De,g as L}from"./chunk-BVSJJDLC.js";import{D as Ae,y as Ee}from"./chunk-GXEPFKEQ.js";import{g as K,h as Q,l as W,n as Z,o as ee,p as te,s as ie}from"./chunk-2OZGA6L4.js";import{a as j}from"./chunk-YG5GW4EW.js";import{a as _}from"./chunk-KQSWIXX2.js";import{b as z}from"./chunk-SNKHLPW5.js";import"./chunk-WM5ABWWX.js";import"./chunk-WKFGKHHI.js";import{a as oe,c as ne,d as re,e as R,f as Ce,g as Pe}from"./chunk-KIPWFCJ2.js";import{f as ge,i as S,j as Ne}from"./chunk-Y2P4J75K.js";import{a as ue,b as Se}from"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as ae,Ra as b,Ua as Me,o as J}from"./chunk-KZIHA7KF.js";import{$b as E,Ab as g,Bb as r,Cb as a,Db as p,L as y,Nb as B,Tb as C,Yb as u,Zb as P,_a as D,a as X,b as H,cb as s,cc as N,da as V,db as m,ec as q,gc as T,hc as O,kb as w,la as M,ma as k,nb as d,tb as c,ub as f,zb as v}from"./chunk-6MBKLWBV.js";function we(e,o){if(e&1&&(r(0,"mat-card-subtitle"),u(1),a()),e&2){let l=C();s(1),P(l.person==null?null:l.person.title);}}function qe(e,o){e&1&&(r(0,"mat-card-subtitle"),B(1,4),a());}function Je(e,o){if(e&1&&(r(0,"span"),u(1),T(2,"typeI18n"),a()),e&2){let l=C();s(1),P(O(2,1,l.person==null?null:l.person.sex));}}function Ke(e,o){e&1&&(r(0,"span"),u(1," - "),a());}function Qe(e,o){if(e&1&&(r(0,"span"),u(1),T(2,"personAge"),a()),e&2){let l=C();s(1),P(O(2,1,l.person==null?null:l.person.birthDate));}}function We(e,o){e&1&&(r(0,"mat-card-footer"),p(1,"mat-progress-bar",5),a());}var Ze=e=>[e],F=(()=>{let o=class o{set personId(n){this._personId=n,this.getPerson(n);}get personId(){return this._personId;}constructor(n,i,t){this.mpplService=n,this.typeI18nPipe=i,this.personNamePipe=t,this.indicator=D(!1),this.attributes={items:[]};}addAttributes(n){if(n.phones&&n.phones.length>0){let i=n.phones.find(t=>t.phoneType===Be.Mobile)?.value;i&&this.attributes.items.push(G.text(i,"phone"));}if(n.emails&&n.emails.length>0){let i=n.emails.find(t=>t.emailType===Fe.Private)?.value;i&&this.attributes.items.push(G.text(i,"email"));}}getPerson(n){this.mpplService.persons.getById(n).pipe(y(1),Oe(this.indicator)).subscribe(i=>{this.person=i,this.addAttributes(i);});}};o.ɵfac=function(i){return new(i||o)(m(Y),m(I),m(A));},o.ɵcmp=M({type:o,selectors:[["medisy-people-persons-common-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[E([I]),N],decls:22,vars:13,consts:()=>{let n;n="\u0627\u0644\u0645\u0632\u064A\u062F";let i;return i="\u0627\u0644\u0645\u0631\u064A\u0636",[[1,"example-card"],[3,"list"],["mat-button","",3,"routerLink"],n,i,["mode","indeterminate"]];},template:function(i,t){i&1&&(r(0,"mat-card",0)(1,"mat-card-header"),c(2,we,2,1,"mat-card-subtitle")(3,qe,2,0),r(4,"mat-card-title"),u(5),T(6,"personName"),a(),r(7,"mat-card-subtitle"),c(8,Je,3,3,"span")(9,Ke,2,0,"span")(10,Qe,3,3,"span"),a()(),r(11,"mat-card-content")(12,"p"),u(13),a()(),r(14,"mat-card-content"),p(15,"sz-ui-list-compact",1),a(),r(16,"mat-card-content"),p(17,"mat-divider"),a(),r(18,"mat-card-actions")(19,"button",2),B(20,3),a()(),c(21,We,2,0,"mat-card-footer"),a()),i&2&&(s(2),f(2,t.person!=null&&t.person.title?2:3),s(3),P(O(6,9,t.person)),s(3),f(8,t.person!=null&&t.person.sex?8:-1),s(1),f(9,t.person!=null&&t.person.sex&&t.person!=null&&t.person.birthDate?9:-1),s(1),f(10,t.person!=null&&t.person.birthDate?10:-1),s(3),P(t.person==null?null:t.person.note),s(2),d("list",t.attributes),s(4),d("routerLink",q(11,Ze,"/mppl/persons/"+t.personId)),s(2),f(21,t.indicator()?21:-1));},dependencies:[R,re,fe,se,de,pe,ce,_e,le,me,ve,Pe,Ce,Se,ue,b,ae,$e,I,A,xe],encapsulation:2});let e=o;return e;})();var Xe=(()=>{let o=class o extends Re{constructor(n,i,t,h){super(t),this.mlabService=n,this.fb=i,this.dialog=t,this.data=h,this.form=i.group({note:[h?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,H(X({},this.data),{note:this.form.value.note})));}};o.ɵfac=function(i){return new(i||o)(m(_),m(te),m(Ie),m(he));},o.ɵcmp=M({type:o,selectors:[["medisy-analysis-save"]],standalone:!0,features:[E([_]),w,N],decls:5,vars:3,consts:()=>{let n;return n="\u0645\u0644\u0627\u062D\u0638\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",n],[3,"actions"]];},template:function(i,t){i&1&&(p(0,"sz-ui-dialog-header",0),r(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),a()(),p(4,"sz-ui-dialog-actions",3)),i&2&&(d("header",t.header),s(2),d("formGroup",t.form),s(2),d("actions",t.actions));},dependencies:[ie,W,K,Q,Z,ee,L,De,Ye,be,Le,Ae,Ee],encapsulation:2});let e=o;return e;})();var ot=()=>[$],nt=()=>[x],rt=()=>[F];function at(e,o){if(e&1&&p(0,"medisy-people-persons-common-person-card",5),e&2){let l=C(2);d("personId",l.analysis.personId);}}function st(e,o){e&1&&(c(0,at,1,1),v(1,0,rt),g());}function mt(e,o){e&1&&p(0,"medisy-laboratory-analysis-tests");}function pt(e,o){e&1&&p(0,"medisy-laboratory-analysis-specimens");}var He=(()=>{let o=class o{constructor(n,i,t,h){this.dialog=n,this.route=i,this.router=t,this.mlabService=h,this.alert$=D(void 0),this.tiles=[],this.analysisMenu=Ne.more([S.edit(()=>this.openSaveComponent()),S.divider(),S.print(()=>this.opendPrintComponent),S.default(j.publish,"publish",this.openPublishComponent),S.divider(),S.default(j.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Xe,{data:this.analysis}).afterClosed().pipe(y(1)).subscribe(n=>{n&&(this.analysis=n);});}opendPrintComponent(){}openPublishComponent(){}};o.ɵfac=function(i){return new(i||o)(m(ye),m(oe),m(ne),m(_));},o.ɵcmp=M({type:o,selectors:[["medisy-laboratory-analysis"]],features:[E([_,Y,A])],decls:12,vars:4,consts:()=>{let n;n="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let i;return i="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[[3,"title","subTitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",n],["label",i],[3,"personId"]];},template:function(i,t){i&1&&(p(0,"sz-ui-header-info",0),r(1,"div",1),c(2,st,3,0),a(),r(3,"mat-tab-group",2)(4,"mat-tab",3),c(5,mt,1,0),v(6,5,ot),g(),a(),r(8,"mat-tab",4),c(9,pt,1,0),v(10,9,nt),g(),a()()),i&2&&(d("title",t.analysis.code)("subTitle",t.analysis.note)("menu",t.analysisMenu),s(2),f(2,t.analysis.personId?2:-1));},dependencies:[Ge,je,z],encapsulation:2});let e=o;return e;})();var Ve=[{path:"",component:He},{path:"tests",loadComponent:()=>import("./chunk-ICXT3RYR.js").then(e=>e.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-RF7VHMPL.js").then(e=>e.AnalysisSpecimensComponent)}];var Ni=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=k({type:o}),o.ɵinj=V({providers:[_],imports:[J,R.forChild(Ve),L,Me,b,ze,Ue,z,Te,ge,$,x,F]});let e=o;return e;})();export{Ni as AnalysisModule};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/