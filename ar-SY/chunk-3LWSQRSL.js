import{a as ue,b as fe,c as Me}from"./chunk-23OOMF5X.js";import{a as z,b as pe}from"./chunk-HFYY4TZJ.js";import{a as J,b as K,c as Q,d as V,e as W,f as Z,g as ee,h as te}from"./chunk-OKU4SN6A.js";import{a as Se}from"./chunk-NFR6WWHE.js";import{a as d}from"./chunk-CRATQ45Z.js";import{a as f}from"./chunk-JRPXAMU2.js";import{a as re,b as se}from"./chunk-6SRMRYZC.js";import{a as D}from"./chunk-MK4LYUKQ.js";import"./chunk-ENCF6XTC.js";import{d as ae,g as me}from"./chunk-WBZAM75Y.js";import{a as L}from"./chunk-3GAZU7X5.js";import{f as g}from"./chunk-ACGKKLNQ.js";import"./chunk-SUXNJZRF.js";import"./chunk-ISAWOBMZ.js";import{b as de,d as ce}from"./chunk-L6BMLV26.js";import{a as R,b as x,c as _e}from"./chunk-5ODKHLUD.js";import"./chunk-LOBLBQWK.js";import{b as le}from"./chunk-ER63VEFB.js";import"./chunk-GTAADJAG.js";import{t as q,v}from"./chunk-QNNLOUIR.js";import{a as u}from"./chunk-A6X3MAXG.js";import"./chunk-VOZDMMGN.js";import{a as T}from"./chunk-NAIGIBUH.js";import{a as O}from"./chunk-CBGBJVBN.js";import{D as X,F as k,G as w,H as N,Pa as ie,Qa as oe,Ta as ne,l as U}from"./chunk-F5GW25TI.js";import{$b as H,Ab as p,Kb as Y,L as B,Ob as P,Tb as l,Ub as S,Vb as $,Wb as h,Zb as G,_a as y,bc as E,cb as s,cc as A,da as j,db as m,la as I,ma as F,nb as M,tb as C,ub as _,yb as a,zb as r}from"./chunk-PWEA5SW5.js";function Te(e,o){if(e&1&&(a(0,"p"),l(1),E(2,"personName"),r()),e&2){let c=P();s(1),$("",A(2,1,c.person==null?null:c.person.father)," ");}}function Oe(e,o){if(e&1&&(a(0,"p"),l(1),E(2,"personName"),r()),e&2){let c=P();s(1),$("",A(2,1,c.person==null?null:c.person.mother)," ");}}function Re(e,o){e&1&&(a(0,"mat-card-footer"),p(1,"mat-progress-bar",4),r());}var ge=e=>[e],b=(()=>{let o=class o{set personId(n){this._personId=n,this.getPerson(n);}get personId(){return this._personId;}constructor(n,t,i){this.mpplService=n,this.typeI18nPipe=t,this.personNamePipe=i,this.indicator=y(!1);}getPerson(n){this.mpplService.persons.getById(n).pipe(B(1),le(this.indicator)).subscribe(t=>{this.person=t;});}};o.ɵfac=function(t){return new(t||o)(m(f),m(g),m(d));},o.ɵcmp=I({type:o,selectors:[["medisy-people-persons-common-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[h([g]),G],decls:18,vars:12,consts:()=>{let n;n="\u0627\u0644\u0645\u0631\u064A\u0636";let t;return t="\u0627\u0644\u0645\u0632\u064A\u062F",[[1,"example-card"],n,["mat-button","",3,"routerLink"],t,["mode","indeterminate"]];},template:function(t,i){t&1&&(a(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-subtitle"),Y(3,1),r(),a(4,"mat-card-title"),l(5),E(6,"personName"),r()(),a(7,"mat-card-content")(8,"p"),l(9),E(10,"personAge"),r(),C(11,Te,3,3,"p")(12,Oe,3,3,"p"),p(13,"mat-divider"),r(),a(14,"mat-card-actions")(15,"button",2),Y(16,3),r()(),C(17,Re,2,0,"mat-card-footer"),r()),t&2&&(s(5),S(A(6,6,i.person)),s(4),S(A(10,8,i.person==null?null:i.person.birthDate)),s(2),_(11,i.person!=null&&i.person.father?11:-1),s(1),_(12,i.person!=null&&i.person.mother?12:-1),s(3),M("routerLink",H(10,ge,"/mppl/persons/"+i.personId)),s(2),_(17,i.indicator()?17:-1));},dependencies:[N,w,te,J,W,Q,ee,Z,V,K,se,re,oe,ie,v,q,d,Se],encapsulation:2});let e=o;return e;})();function Le(e,o){if(e&1&&p(0,"medisy-people-persons-common-person-card",5),e&2){let c=P();M("personId",c.analysis.personId);}}var Pe=(()=>{let o=class o{constructor(n,t,i,Ae,Ie,ye){this.dialog=n,this.route=t,this.router=i,this.mlabService=Ae,this.mpplService=Ie,this.personNamePipe=ye,this.alert$=y(void 0),this.testsDataSource=new de(T.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=_e.more([x.edit(()=>this.openEditComponent),x.print(()=>this.openEditComponent)]),this.analysis=this.route.snapshot.data.analysis,this.buildTiles();}buildTiles(){let n={icon:"science",subtitle:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",type:z.Counter,clickFn:()=>this.router.navigate(["tests"],{relativeTo:this.route})},t={icon:"label",subtitle:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",type:z.Counter,clickFn:()=>this.router.navigate(["specimens"],{relativeTo:this.route})};this.mlabService.analyses.tests.count(this.analysis.id,T.count()).subscribe(i=>{n.title=i;}),this.mlabService.analyses.specimens.count(this.analysis.id,T.count()).subscribe(i=>{t.title=i;}),this.tiles.push(n),this.tiles.push(t);}openEditComponent(){}};o.ɵfac=function(t){return new(t||o)(m(ae),m(X),m(k),m(u),m(f),m(d));},o.ɵcmp=I({type:o,selectors:[["medisy-laboratory-analysis"]],features:[h([u,f,d])],decls:15,vars:4,consts:()=>{let n;n="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A";let t;return t="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card","tw-my-4"],[3,"personId"],["mat-stretch-tabs","false"],["label",n],["label",t]];},template:function(t,i){t&1&&(a(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),l(3),r(),a(4,"span",2),l(5),r()(),p(6,"sz-ui-menu",3),r(),a(7,"div",4),C(8,Le,1,1,"medisy-people-persons-common-person-card",5),r(),a(9,"div")(10,"mat-tab-group",6)(11,"mat-tab",7),p(12,"medisy-laboratory-analysis-tests"),r(),a(13,"mat-tab",8),p(14,"medisy-laboratory-analysis-specimens"),r()()()),t&2&&(s(3),S(i.analysis.code),s(2),S(i.analysis.note),s(1),M("menu",i.analysisMenu),s(2),_(8,i.analysis.personId?8:-1));},dependencies:[ue,fe,O,R,D,L,b],encapsulation:2});let e=o;return e;})();var Ee=[{path:"",component:Pe},{path:"tests",loadComponent:()=>import("./chunk-BIRU4QL5.js").then(e=>e.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-COOMLGAK.js").then(e=>e.AnalysisSpecimensComponent)}];var xt=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=F({type:o}),o.ɵinj=j({providers:[u],imports:[U,N.forChild(Ee),me,ne,v,ce,Me,O,pe,R,D,L,b]});let e=o;return e;})();export{xt as AnalysisModule};/**i18n:1d16e7d3b6b09b5ca5f11aee33f3c6ee9a8e446806802ef706aaf87e85c9b2b7*/