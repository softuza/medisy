import{a as A,b as _,e as E,f as pt,g as x}from"./chunk-FNLNZMXX.js";import{i as nt,p as st,u as lt,v as mt}from"./chunk-IUM5Y4DP.js";import{g as m}from"./chunk-HXVM5UCI.js";import{Pa as at,Ra as ct}from"./chunk-53RWJDYX.js";import{A as H,Bb as l,Cb as c,Db as d,H as L,Hb as et,J as N,L as S,O as W,P,Pb as it,Rb as C,Sb as ot,Tb as G,Wb as u,X as U,Xb as D,Yb as rt,_a as B,ac as h,cb as a,da as q,db as g,gb as X,kb as z,la as f,ma as J,nb as p,q as V,qa as K,ra as Q,tb as k,ub as I,wb as Y,xb as Z,yb as tt}from"./chunk-M2QTEBXZ.js";function O(e){return e&&!e.valid?(Object.keys(e.controls).forEach(t=>{let r=e?.get(t);r instanceof nt&&O(r),r?.markAsTouched({onlySelf:!0});}),!1):!0;}var dt=e=>t=>H(()=>(e(),t)),F=e=>t=>t.pipe(dt(()=>e.set(!0)),P(()=>e.set(!1))),Ft=e=>t=>t.pipe(U(null),N(e),W()),T=(e,t=void 0)=>r=>r.pipe(dt(()=>{e&&e.set(void 0);}),L(o=>{let i="";return o.error instanceof ErrorEvent?i=o.error.message:o&&(o.error?i=o.error.message:i=o.statusText),e&&e.set({message:t||i,type:lt.Error}),V(()=>i);}));var v=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(v||{});var s=class{static close(t,r){return{text:m.close,type:v.Close,task:t,indicator:r};}static confirm(t){return{text:m.confirm,type:v.Submit,task:t};}static save(t,r){return{text:m.save,type:v.Submit,color:"primary",task:t,indicator:r};}static reset(t,r){return{text:m.reset,type:v.Reset,task:t,indicator:r};}static delete(t,r){return{text:m.delete,type:v.Submit,color:"warn",task:t,indicator:r};}};var M=class{constructor(t){this.indicator=B(!1),this.alert=B(void 0),this.header={title:"",alert:this.alert},this.dialogRef=t;}},j=class extends M{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&X(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return O(this.form);}},w=class extends M{constructor(t){super(t),this.header.title=m.delete;}},R=class extends M{constructor(t){super(t),this.header.title=m.confirm;}},ft=class extends j{constructor(t){super(t),this.header.title=m.filter,this.actions=[s.close(()=>t.close()),s.reset(()=>this.form.reset()),s.save(()=>this.submit(),this.indicator)];}},ut=class extends j{constructor(t){super(t),this.header.title=m.save,this.actions=[s.close(()=>t.close()),s.reset(()=>{this.form.reset(),this.alert.set(void 0);}),s.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(F(this.indicator),T(this.alert),S(1)).subscribe(r=>{this.dialogRef.close(r);});}};function Dt(e,t){if(e&1){let r=et();l(0,"button",0),it("click",function(){let n=K(r).$implicit,vt=C();return Q(vt.actionClicked(n));}),u(1),c();}if(e&2){let r=t.$implicit,o=C();p("disabled",o.isActionDisabled(r))("color",r.color),a(1),rt(" ",r.text," ");}}var b=(()=>{let t=class t{constructor(){this.actions=[];}actionClicked(o){o.task&&o.task();}isActionDisabled(o){return!!(o.indicator&&o.indicator());}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[h],decls:3,vars:0,consts:[["mat-button","",3,"disabled","color","click"],["mat-button","",3,"disabled","color"]],template:function(i,n){i&1&&(l(0,"mat-dialog-actions"),Z(1,Dt,2,3,"button",1,Y),c()),i&2&&tt(1,n.actions);},dependencies:[ct,at,x,pt],encapsulation:2});let e=t;return e;})();var bt=[[["","start",""]],[["","end",""]]],yt=["[start]","[end]"],y=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{header:"header"},standalone:!0,features:[h],ngContentSelectors:yt,decls:7,vars:2,consts:[[1,"sz-header-dialog"],["start","",1,"sz-h5"],[1,"spacer"],[3,"alert"]],template:function(i,n){i&1&&(ot(bt),l(0,"div",0)(1,"h5",1),u(2),c(),G(3),d(4,"span",2),G(5,1),c(),d(6,"sz-ui-alert",3)),i&2&&(a(2),D(n.header==null?null:n.header.title),a(4),p("alert",n.header==null?null:n.header.alert()));},dependencies:[x,mt],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function Mt(e,t){if(e&1&&(l(0,"p"),u(1),c()),e&2){let r=C();a(1),D(r.content.message);}}var se=(()=>{let t=class t extends R{constructor(o,i,n){super(i),this.fb=o,this.dialog=i,this.content=n,this.actions=[s.close(()=>i.close()),s.confirm(()=>i.close(!0))];}};t.ɵfac=function(i){return new(i||t)(g(st),g(A),g(_));},t.ɵcmp=f({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[z,h],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(i,n){i&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),k(2,Mt,2,1,"p"),c(),d(3,"sz-ui-dialog-actions",1)),i&2&&(p("header",n.header),a(2),I(2,n.content.message?2:-1),a(1),p("actions",n.actions));},dependencies:[x,E,y,b],encapsulation:2});let e=t;return e;})();function St(e,t){if(e&1&&(l(0,"p"),u(1),c()),e&2){let r=C();a(1),D(r.content.message);}}var xt=(()=>{let t=class t extends w{constructor(o,i){super(o),this.dialog=o,this.content=i,this.actions=[s.close(()=>o.close()),s.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(F(this.indicator),T(this.alert),S(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(i){return new(i||t)(g(A),g(_));},t.ɵcmp=f({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[z,h],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(i,n){i&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),k(2,St,2,1,"p"),c(),d(3,"sz-ui-dialog-actions",1)),i&2&&(p("header",n.header),a(2),I(2,n.content.message?2:-1),a(1),p("actions",n.actions));},dependencies:[x,E,y,b],encapsulation:2});let e=t;return e;})();var De=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=J({type:t}),t.ɵinj=q({imports:[b,y,xt]});let e=t;return e;})();var gt={delete:"Are you sure to delete this item?"};var Ct=class{static delete(t,r){return{message:gt.delete,task$:t,data:r};}};export{s as a,O as b,F as c,Ft as d,T as e,M as f,ft as g,ut as h,b as i,y as j,se as k,xt as l,De as m,Ct as n};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/