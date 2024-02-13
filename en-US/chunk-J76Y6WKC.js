import{a as Me,b as Ae,c as Ce}from"./chunk-EUFTFOE6.js";import{a as O}from"./chunk-MN4PJX3R.js";import{h as Q}from"./chunk-5HLDPKOX.js";import"./chunk-OFONPY25.js";import"./chunk-ML7RS7NI.js";import{b as Se}from"./chunk-YKVXE6EG.js";import{a as D}from"./chunk-ELSFETOK.js";import{a as T}from"./chunk-CY3TPSGT.js";import{a as L}from"./chunk-IG42IZVW.js";import{a as R}from"./chunk-G6AWQ76Z.js";import"./chunk-TPNMU6YZ.js";import{d as ue,n as _e}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{a}from"./chunk-FM3SPM6Z.js";import{c as pe,h as le,i as de,j as ce,m as fe}from"./chunk-2HDHNYMU.js";import"./chunk-L6PAJN6E.js";import{b as N}from"./chunk-7V4QNR7X.js";import{a as b,f as ae,g as p,h as me}from"./chunk-BJEOQME3.js";import{a as ie,b as re,d as ne,e as se,g}from"./chunk-SG6HY6JP.js";import{A as te,v as oe}from"./chunk-XXBVSRTN.js";import{J as K,L as P,N as v,P as W,R as ee,f as V,g as X,k as w,m as k,p as H,q,t as J}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ga as I,Ja as Z,o as U}from"./chunk-QRXQW4KS.js";import{Eb as d,Fb as c,Gb as s,M,Ub as x,a as F,b as Y,bb as A,ea as $,fb as u,gb as n,gc as f,jc as h,na as l,nb as B,oa as j,qb as _,rb as C,sb as y,ub as m,zb as G}from"./chunk-CIWRZFHR.js";var E=(()=>{let e=class e{set personId(i){this._personId=i,this.getPerson(i);}get personId(){return this._personId;}constructor(i,o,r){this.mpplService=i,this.personNamePipe=o,this.router=r,this.indicator=A(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(i){this.mpplService.persons.getById(i).pipe(M(1),pe(this.indicator)).subscribe(o=>{this.card.title=this.personNamePipe.transform(o),this.card.subtitle=Se(o?.sex);});}};e.ɵfac=function(o){return new(o||e)(n(T),n(D),n(P));},e.ɵcmp=l({type:e,selectors:[["medisy-people-persons-common-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[f([]),h],decls:1,vars:2,consts:[[3,"card","indicator"]],template:function(o,r){o&1&&s(0,"sz-ui-card",0),o&2&&m("card",r.card)("indicator",r.indicator);},dependencies:[v,Q,O,ee,W,I,_e],encapsulation:2});let t=e;return t;})();var ye=(()=>{let e=class e extends le{constructor(i,o,r,S){super(r),this.mlabService=i,this.fb=o,this.dialog=r,this.data=S,this.form=o.group({note:[S?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,Y(F({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(o){return new(o||e)(n(a),n(q),n(ie),n(re));},e.ɵcmp=l({type:e,selectors:[["medisy-analysis-save"]],standalone:!0,features:[f([a]),B,h],decls:5,vars:3,consts:()=>{let i;return i="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,r){o&1&&(s(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),c()(),s(4,"sz-ui-dialog-actions",3)),o&2&&(m("header",r.header),u(2),m("formGroup",r.form),u(2),m("actions",r.actions));},dependencies:[J,w,V,X,k,H,g,se,fe,de,ce,te,oe],encapsulation:2});let t=e;return t;})();var Oe=()=>[L],De=()=>[R],Le=()=>[E];function Re(t,e){if(t&1&&s(0,"medisy-people-persons-common-person-card",5),t&2){let ve=x(2);m("personId",ve.analysis.personId);}}function Ee(t,e){t&1&&(_(0,Re,1,1),C(1,0,Le),y());}function be(t,e){t&1&&s(0,"medisy-laboratory-analysis-tests");}function ze(t,e){t&1&&s(0,"medisy-laboratory-analysis-specimens");}var he=(()=>{let e=class e{constructor(i,o,r,S){this.dialog=i,this.route=o,this.router=r,this.mlabService=S,this.alert$=A(void 0),this.tiles=[],this.analysisMenu=me.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(b.publish,"publish",this.openPublishComponent),p.divider(),p.default(b.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ye,{data:this.analysis}).afterClosed().pipe(M(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(o){return new(o||e)(n(ne),n(K),n(P),n(a));},e.ɵcmp=l({type:e,selectors:[["medisy-laboratory-analysis"]],features:[f([a,T,D])],decls:12,vars:4,consts:()=>{let i;i="Tests";let o;return o="Specimens",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"]];},template:function(o,r){o&1&&(s(0,"sz-ui-header-info",0),d(1,"div",1),_(2,Ee,3,0),c(),d(3,"mat-tab-group",2)(4,"mat-tab",3),_(5,be,1,0),C(6,5,Oe),y(),c(),d(8,"mat-tab",4),_(9,ze,1,0),C(10,9,De),y(),c()()),o&2&&(m("title",r.analysis.code)("subtitle",r.analysis.note)("menu",r.analysisMenu),u(2),G(2,r.analysis.personId?2:-1));},dependencies:[Me,Ae,N],encapsulation:2});let t=e;return t;})();var Pe=[{path:"",component:he},{path:"tests",loadComponent:()=>import("./chunk-H5KHAX7I.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-5HUFNZXG.js").then(t=>t.AnalysisSpecimensComponent)}];var Wo=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=j({type:e}),e.ɵinj=$({providers:[a],imports:[U,v.forChild(Pe),g,Z,I,ue,Ce,N,O,ae,L,R,E]});let t=e;return t;})();export{Wo as AnalysisModule};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/