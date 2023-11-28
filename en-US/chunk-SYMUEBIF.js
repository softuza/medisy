import{a as z,b as I,e as E,f as dt,g}from"./chunk-RY32KYW7.js";import{i as st,p as at,u as pt,v as mt}from"./chunk-4NL6MOY5.js";import{g as d}from"./chunk-3LHHJK2J.js";import{Pa as ct,Ra as lt}from"./chunk-HMJ5RFBC.js";import{A as Q,Bb as l,Cb as c,Db as m,H as X,Hb as W,J as Y,L as M,O as Z,P as tt,Pb as P,Rb as f,Sb as nt,Tb as U,Wb as u,X as et,Xb as D,Yb as q,_a as O,ac as x,cb as a,da as it,db as C,gb as rt,kb as S,la as h,ma as ot,nb as p,q as K,qa as B,ra as G,tb as k,ub as A,wb as H,xb as L,yb as N}from"./chunk-VTJ4Z7TN.js";function J(e){return e&&!e.valid?(Object.keys(e.controls).forEach(t=>{let r=e?.get(t);r instanceof st&&J(r),r?.markAsTouched({onlySelf:!0});}),!1):!0;}var ft=e=>t=>Q(()=>(e(),t)),F=e=>t=>t.pipe(ft(()=>e.set(!0)),tt(()=>e.set(!1))),Tt=e=>t=>t.pipe(et(null),Y(e),Z()),T=(e,t=void 0)=>r=>r.pipe(ft(()=>{e&&e.set(void 0);}),X(o=>{let i="";return o.error instanceof ErrorEvent?i=o.error.message:o&&(o.error?i=o.error.message:i=o.statusText),e&&e.set({message:t||i,type:pt.Error}),K(()=>i);}));var v=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(v||{});var s=class{static close(t,r){return{text:d.close,type:v.Close,task:t,indicator:r,end:!1};}static confirm(t){return{text:d.confirm,type:v.Submit,task:t,end:!0};}static save(t,r){return{text:d.save,type:v.Submit,color:"primary",task:t,indicator:r,end:!0};}static reset(t,r){return{text:d.reset,type:v.Reset,task:t,indicator:r,end:!1};}static delete(t,r){return{text:d.delete,type:v.Submit,color:"warn",task:t,indicator:r,end:!0};}};var _=class{constructor(t){this.indicator=O(!1),this.alert=O(void 0),this.header={title:"",alert:this.alert},this.dialogRef=t;}},j=class extends _{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&rt(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return J(this.form);}},w=class extends _{constructor(t){super(t),this.header.title=d.delete;}},$=class extends _{constructor(t){super(t),this.header.title=d.confirm;}},ut=class extends j{constructor(t){super(t),this.header.title=d.filter,this.actions=[s.close(()=>t.close()),s.reset(()=>this.form.reset()),s.save(()=>this.submit(),this.indicator)];}},ht=class extends j{constructor(t){super(t),this.header.title=d.save,this.actions=[s.close(()=>t.close()),s.reset(()=>{this.form.reset(),this.alert.set(void 0);}),s.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(F(this.indicator),T(this.alert),M(1)).subscribe(r=>{this.dialogRef.close(r);});}};function Dt(e,t){if(e&1){let r=W();l(0,"button",2),P("click",function(){let n=B(r).$implicit,V=f();return G(V.actionClicked(n));}),u(1),c();}if(e&2){let r=t.$implicit,o=f();p("disabled",o.isActionDisabled(r))("color",r.color),a(1),q(" ",r.text," ");}}function bt(e,t){if(e&1){let r=W();l(0,"button",2),P("click",function(){let n=B(r).$implicit,V=f();return G(V.actionClicked(n));}),u(1),c();}if(e&2){let r=t.$implicit,o=f();p("disabled",o.isActionDisabled(r))("color",r.color),a(1),q(" ",r.text," ");}}var b=(()=>{let t=class t{constructor(){this.actions=[];}getActions(o){return this.actions.filter(i=>i.end===o);}actionClicked(o){o.task&&o.task();}isActionDisabled(o){return!!(o.indicator&&o.indicator());}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"container"],[1,"spacer"],["mat-button","",3,"disabled","color","click"],["mat-button","",3,"disabled","color"]],template:function(i,n){i&1&&(l(0,"mat-dialog-actions",0),L(1,Dt,2,3,"button",3,H),m(3,"span",1),L(4,bt,2,3,"button",3,H),c()),i&2&&(N(1,n.getActions(!1)),N(4,n.getActions(!0)));},dependencies:[lt,ct,g,dt],encapsulation:2});let e=t;return e;})();var yt=[[["","start",""]],[["","end",""]]],_t=["[start]","[end]"],y=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{header:"header"},standalone:!0,features:[x],ngContentSelectors:_t,decls:7,vars:2,consts:[[1,"sz-header-dialog"],["start","",1,"sz-h5"],[1,"spacer"],[3,"alert"]],template:function(i,n){i&1&&(nt(yt),l(0,"div",0)(1,"h5",1),u(2),c(),U(3),m(4,"span",2),U(5,1),c(),m(6,"sz-ui-alert",3)),i&2&&(a(2),D(n.header==null?null:n.header.title),a(4),p("alert",n.header==null?null:n.header.alert()));},dependencies:[g,mt],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function Mt(e,t){if(e&1&&(l(0,"p"),u(1),c()),e&2){let r=f();a(1),D(r.content.message);}}var ae=(()=>{let t=class t extends ${constructor(o,i,n){super(i),this.fb=o,this.dialog=i,this.content=n,this.actions=[s.close(()=>i.close()),s.confirm(()=>i.close(!0))];}};t.ɵfac=function(i){return new(i||t)(C(at),C(z),C(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[S,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(i,n){i&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),k(2,Mt,2,1,"p"),c(),m(3,"sz-ui-dialog-actions",1)),i&2&&(p("header",n.header),a(2),A(2,n.content.message?2:-1),a(1),p("actions",n.actions));},dependencies:[g,E,y,b],encapsulation:2});let e=t;return e;})();function St(e,t){if(e&1&&(l(0,"p"),u(1),c()),e&2){let r=f();a(1),D(r.content.message);}}var gt=(()=>{let t=class t extends w{constructor(o,i){super(o),this.dialog=o,this.content=i,this.actions=[s.close(()=>o.close()),s.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(F(this.indicator),T(this.alert),M(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(i){return new(i||t)(C(z),C(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[S,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(i,n){i&1&&(m(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),k(2,St,2,1,"p"),c(),m(3,"sz-ui-dialog-actions",1)),i&2&&(p("header",n.header),a(2),A(2,n.content.message?2:-1),a(1),p("actions",n.actions));},dependencies:[g,E,y,b],encapsulation:2});let e=t;return e;})();var be=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=ot({type:t}),t.ɵinj=it({imports:[b,y,gt]});let e=t;return e;})();var Ct={delete:"Are you sure to delete this item?"};var vt=class{static delete(t,r){return{message:Ct.delete,task$:t,data:r};}};export{s as a,J as b,F as c,Tt as d,T as e,_ as f,ut as g,ht as h,b as i,y as j,ae as k,gt as l,be as m,vt as n};/**i18n:58cd3b8848ac5782a36a96a60f590b5398c328b80f04dbb1677d4c0de37b393f*/