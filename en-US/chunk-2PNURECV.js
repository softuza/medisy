import{a as Ge,b as je,c as xe}from"./chunk-7AGUCOKQ.js";import{a as L}from"./chunk-TO22RBSF.js";import{b as De}from"./chunk-HWOUZEAB.js";import{a as ae,b as se,c as me,d as pe,e as de,f as le,g as ce,h as Se}from"./chunk-YGCATYA7.js";import{b as Ne,c as F}from"./chunk-QW4XCJB2.js";import{a as $e}from"./chunk-DJWTHWUI.js";import{a as M}from"./chunk-7ZD52CWE.js";import{a as v}from"./chunk-JRXQDBB2.js";import{a as R}from"./chunk-JU3K2J4G.js";import"./chunk-UZV5LP6K.js";import{a as Fe,b as Be,g as T}from"./chunk-AYD4YNQF.js";import"./chunk-ZENDRPYK.js";import"./chunk-BDAURDQS.js";import{b as Ye,d as ze}from"./chunk-UWWSZ6EK.js";import{c as Oe,h as Te,i as Re,j as Le,m as be}from"./chunk-TZHDOS7D.js";import{a as Ae,b as he,d as Ie,e as ye,g as N}from"./chunk-MLSRSUWT.js";import{q as Pe,t as Ee}from"./chunk-DPUIQT2Q.js";import"./chunk-32W7D3XL.js";import{g as Q,h as J,l as K,n as W,o as Z,p as ee,s as te}from"./chunk-UZRVZSRL.js";import{b as D,c,d as ve}from"./chunk-VXIMUH5R.js";import"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{a as l}from"./chunk-KYTCDYCU.js";import{a as O}from"./chunk-O5KLIVQ3.js";import"./chunk-4KTV3HE2.js";import{a as ge}from"./chunk-HSBTPXYW.js";import{a as ie,c as oe,d as ne,e as y,f as Me,g as Ce}from"./chunk-7EL7DJOA.js";import{a as _e,b as fe}from"./chunk-YSHIJLQQ.js";import"./chunk-PHZ6OWUT.js";import{a as re,c as g}from"./chunk-45S7AHWB.js";import{Ra as ue,o as q}from"./chunk-5YRGD4YU.js";import{$b as I,Ab as m,Bb as r,Cb as p,L as E,Mb as Y,Qb as V,Vb as _,Wb as f,Yb as u,_a as A,a as G,b as j,bc as k,cb as a,da as x,db as s,dc as z,ec as $,kb as X,la as S,ma as U,nb as d,tb as C,ub as h,yb as H,zb as w}from"./chunk-MK3KDUIH.js";function ke(n,i){n&1&&(m(0,"mat-card-footer"),p(1,"mat-progress-bar",5),r());}var qe=n=>[n],b=(()=>{let i=class i{set personId(t){this._personId=t,this.getPerson(t);}get personId(){return this._personId;}constructor(t,e,o){this.mpplService=t,this.typeI18nPipe=e,this.personNamePipe=o,this.indicator=A(!1),this.attributes={items:[]};}addAttributes(t){if(t.phones&&t.phones.length>0){let e=t.phones.find(o=>o.phoneType===Be.Mobile)?.value;e&&this.attributes.items.push(F.text(e,"phone"));}if(t.emails&&t.emails.length>0){let e=t.emails.find(o=>o.emailType===Fe.Private)?.value;e&&this.attributes.items.push(F.text(e,"email"));}}getPerson(t){this.mpplService.persons.getById(t).pipe(E(1),Oe(this.indicator)).subscribe(e=>{this.person=e,this.addAttributes(e);});}};i.ɵfac=function(e){return new(e||i)(s(v),s(T),s(M));},i.ɵcmp=S({type:i,selectors:[["medisy-people-persons-common-person-card"]],inputs:{personId:"personId"},standalone:!0,features:[u([T]),I],decls:17,vars:11,consts:()=>{let t;t="Patient";let e;return e="More",[[1,"example-card"],t,[3,"list"],["mat-button","",3,"routerLink"],e,["mode","indeterminate"]];},template:function(e,o){e&1&&(m(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-subtitle"),Y(3,1),r(),m(4,"mat-card-title"),_(5),z(6,"personName"),r()(),m(7,"mat-card-content")(8,"p"),_(9),z(10,"personAge"),r(),p(11,"sz-ui-list-simple",2)(12,"mat-divider"),r(),m(13,"mat-card-actions")(14,"button",3),Y(15,4),r()(),C(16,ke,2,0,"mat-card-footer"),r()),e&2&&(a(5),f($(6,5,o.person)),a(4),f($(10,7,o.person==null?null:o.person.birthDate)),a(2),d("list",o.attributes),a(3),d("routerLink",k(9,qe,"/mppl/persons/"+o.personId)),a(2),h(16,o.indicator()?16:-1));},dependencies:[y,ne,Se,ae,de,me,ce,le,pe,se,Ne,Ce,Me,fe,_e,g,re,M,$e],encapsulation:2});let n=i;return n;})();var Ue=(()=>{let i=class i extends Te{constructor(t,e,o,P){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=P,this.form=e.group({note:[P?.note,[]]});}submit(){this.IsValid()&&this.data&&this.save(this.mlabService.analyses.update(this.data.id,j(G({},this.data),{note:this.form.value.note})));}};i.ɵfac=function(e){return new(e||i)(s(l),s(ee),s(Ae),s(he));},i.ɵcmp=S({type:i,selectors:[["medisy-analysis-save"]],standalone:!0,features:[u([l]),X,I],decls:5,vars:3,consts:()=>{let t;return t="Note",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","note","label",t],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2),r()(),p(4,"sz-ui-dialog-actions",3)),e&2&&(d("header",o.header),a(2),d("formGroup",o.form),a(2),d("actions",o.actions));},dependencies:[te,K,Q,J,W,Z,N,ye,be,Re,Le,Ee,Pe],encapsulation:2});let n=i;return n;})();var We=()=>[L];function Ze(n,i){if(n&1&&p(0,"medisy-people-persons-common-person-card",5),n&2){let we=V();d("personId",we.analysis.personId);}}function et(n,i){n&1&&p(0,"medisy-laboratory-analysis-specimens");}var Xe=(()=>{let i=class i{constructor(t,e,o,P){this.dialog=t,this.route=e,this.router=o,this.mlabService=P,this.alert$=A(void 0),this.testsDataSource=new Ye(ge.pagedSorted("-createdAt")),this.tiles=[],this.analysisMenu=ve.more([c.edit(()=>this.openSaveComponent()),c.divider(),c.print(()=>this.opendPrintComponent),c.default("Publish","publish",this.openPublishComponent),c.divider(),c.default("QR Code","qr_code",this.openPublishComponent)]),this.analysis=this.route.snapshot.data.analysis;}openSaveComponent(){this.dialog.open(Ue,{data:this.analysis}).afterClosed().pipe(E(1)).subscribe(t=>{t&&(this.analysis=t);});}opendPrintComponent(){}openPublishComponent(){}};i.ɵfac=function(e){return new(e||i)(s(Ie),s(ie),s(oe),s(l));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-analysis"]],features:[u([l,v,M])],decls:16,vars:4,consts:()=>{let t;t="Tests";let e;return e="Specimens",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["end","",3,"menu"],[1,"sz-grid-card","tw-my-4"],[3,"personId"],["mat-stretch-tabs","false"],["label",t],["label",e]];},template:function(e,o){e&1&&(m(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),_(3),r(),m(4,"span",2),_(5),r()(),p(6,"sz-ui-menu",3),r(),m(7,"div",4),C(8,Ze,1,1,"medisy-people-persons-common-person-card",5),r(),m(9,"mat-tab-group",6)(10,"mat-tab",7),p(11,"medisy-laboratory-analysis-tests"),r(),m(12,"mat-tab",8),C(13,et,1,0),H(14,13,We),w(),r()()),e&2&&(a(3),f(o.analysis.code),a(2),f(o.analysis.note),a(1),d("menu",o.analysisMenu),a(2),h(8,o.analysis.personId?8:-1));},dependencies:[Ge,je,O,D,R,b],encapsulation:2});let n=i;return n;})();var He=[{path:"",component:Xe},{path:"tests",loadComponent:()=>import("./chunk-R43OBEKQ.js").then(n=>n.AnalysisTestsComponent)},{path:"specimens",loadComponent:()=>import("./chunk-KMXYOLPJ.js").then(n=>n.AnalysisSpecimensComponent)}];var hi=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=U({type:i}),i.ɵinj=x({providers:[l],imports:[q,y.forChild(He),N,ue,g,ze,xe,O,De,D,R,L,b]});let n=i;return n;})();export{hi as AnalysisModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/