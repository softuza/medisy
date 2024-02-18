import{a as Me,b as Ae,c as Ce}from"./chunk-DYYPPKEQ.js";import{a as O}from"./chunk-ONL54GKN.js";import{h as Q}from"./chunk-EYGAI5PJ.js";import"./chunk-VULT3UDT.js";import"./chunk-EIQIWYIR.js";import{a as D}from"./chunk-LTYLJZW4.js";import{a as T}from"./chunk-W2XCN42V.js";import{a as L}from"./chunk-2GNYB436.js";import{a as E}from"./chunk-JVJCIEIB.js";import"./chunk-XTVLQUVA.js";import{d as _e}from"./chunk-DVLFNPXE.js";import"./chunk-GPY5KFVB.js";import{g as Se}from"./chunk-N4PGQPUM.js";import{a}from"./chunk-NYMMO734.js";import{e as de,f as ce,g as fe,j as ue}from"./chunk-5KCGOFE6.js";import"./chunk-7CVWEX57.js";import{b as N}from"./chunk-ZCWLIVXY.js";import{e as pe,f as p,g as le}from"./chunk-5WTG7ASM.js";import{a as ne,b as se,d as ae,e as me,g}from"./chunk-DP3KI4RQ.js";import{A as re,v as ie}from"./chunk-XWTEPPU5.js";import{Ca as b,Da as te,J as K,L as P,N as v,P as W,R as ee,f as V,g as X,k as w,m as k,p as H,q,t as J,za as oe}from"./chunk-5FPIMWAZ.js";import"./chunk-QYJYVPVW.js";import{Ga as I,Ja as Z,o as U}from"./chunk-NQOK3G2M.js";import{Ab as G,Fb as d,Gb as c,Hb as s,M,Vb as x,a as F,b as Y,cb as A,fa as $,gb as u,hb as n,hc as f,kc as h,oa as l,ob as B,pa as j,rb as _,sb as C,tb as y,vb as m}from"./chunk-XEAZENSO.js";var R=(()=>{let e=class e{set personId(i){this._personId=i,this.getPerson(i);}get personId(){return this._personId;}constructor(i,o,r){this.mpplService=i,this.personNamePipe=o,this.router=r,this.indicator=A(!1),this.card={icon:"person",clickFn:()=>this.router.navigate([`/mppl/persons/${this._personId}`]),actions:[]};}getPerson(i){this.mpplService.persons.getById(i).pipe(M(1),oe(this.indicator)).subscribe(o=>{this.card.title=this.personNamePipe.transform(o),this.card.subtitle=te(o?.sex);});}};e.ɵfac=function(o){return new(o||e)(n(T),n(D),n(P));},e.ɵcmp=l({type:e,selectors:[["medisy-people-persons-common-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[f([]),h],decls:1,vars:2,consts:[[3,"card","indicator"]],template:function(o,r){o&1&&s(0,"sz-ui-card",0),o&2&&m("card",r.card)("indicator",r.indicator);},dependencies:[v,Q,O,ee,W,I,Se],encapsulation:2});let t=e;return t;})();var ye=(()=>{let e=class e extends de{constructor(i,o,r,S){super(r),this.mlabService=i,this.fb=o,this.dialog=r,this.data=S,this.form=o.group({note:[S?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,Y(F({},this.data),{note:this.form.value.note})));}};e.ɵfac=function(o){return new(o||e)(n(a),n(q),n(ne),n(se));},e.ɵcmp=l({type:e,selectors:[["medisy-analysis-save"]],standalone:!0,features:[f([a]),B,h],decls:5,vars:3,consts:()=>{let i;return i="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",i],[3,"actions"]];},template:function(o,r){o&1&&(s(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),c()(),s(4,"sz-ui-dialog-actions",3)),o&2&&(m("header",r.header),u(2),m("formGroup",r.form),u(2),m("actions",r.actions));},dependencies:[J,w,V,X,k,H,g,me,ue,ce,fe,re,ie],encapsulation:2});let t=e;return t;})();var Oe=()=>[L],De=()=>[E],Le=()=>[R];function Ee(t,e){if(t&1&&s(0,"medisy-people-persons-common-person-card",5),t&2){let ve=x(2);m("personId",ve.analysis.personId);}}function Re(t,e){t&1&&(_(0,Ee,1,1),C(1,0,Le),y());}function be(t,e){t&1&&s(0,"medisy-laboratory-analysis-tests");}function ze(t,e){t&1&&s(0,"medisy-laboratory-analysis-specimens");}var he=(()=>{let e=class e{constructor(i,o,r,S){this.dialog=i,this.route=o,this.router=r,this.mlabService=S,this.alert$=A(void 0),this.tiles=[],this.analysisMenu=le.more([p.edit(()=>this.openSaveComponent()),p.divider(),p.print(()=>this.opendPrintComponent),p.default(b.publish,"publish",this.openPublishComponent),p.divider(),p.default(b.qr,"qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(ye,{data:this.analysis}).afterClosed().pipe(M(1)).subscribe(i=>{i&&(this.analysis=i);});}opendPrintComponent(){}openPublishComponent(){}};e.ɵfac=function(o){return new(o||e)(n(ae),n(K),n(P),n(a));},e.ɵcmp=l({type:e,selectors:[["medisy-laboratory-analysis"]],features:[f([a,T,D])],decls:12,vars:4,consts:()=>{let i;i="Tests";let o;return o="Specimens",[[3,"title","subtitle","menu"],[1,"sz-grid-card","tw-my-4"],["mat-stretch-tabs","false"],["label",i],["label",o],[3,"personId"]];},template:function(o,r){o&1&&(s(0,"sz-ui-header-info",0),d(1,"div",1),_(2,Re,3,0),c(),d(3,"mat-tab-group",2)(4,"mat-tab",3),_(5,be,1,0),C(6,5,Oe),y(),c(),d(8,"mat-tab",4),_(9,ze,1,0),C(10,9,De),y(),c()()),o&2&&(m("title",r.analysis.code)("subtitle",r.analysis.note)("menu",r.analysisMenu),u(2),G(2,r.analysis.personId?2:-1));},dependencies:[Me,Ae,N],encapsulation:2});let t=e;return t;})();var Pe=[{path:"",component:he},{path:"tests",loadComponent:()=>import("./chunk-GH7WSUMF.js").then(t=>t.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-LITB3BBS.js").then(t=>t.AnalysisSpecimensComponent)}];var Wo=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=j({type:e}),e.ɵinj=$({providers:[a],imports:[U,v.forChild(Pe),g,Z,I,_e,Ce,N,O,pe,L,E,R]});let t=e;return t;})();export{Wo as AnalysisModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/