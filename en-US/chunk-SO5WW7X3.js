import{q as _,r as lt}from"./chunk-BXKAZQ64.js";import{a as b,b as I,e as A,f as pt,g as C}from"./chunk-VWPRYYV7.js";import{a as u,b as V,d as H}from"./chunk-XJ54ZRFR.js";import{H as ct,h as ot,i as R,k as it,l as rt,n as nt,p as $,s as at,t as st,v as mt}from"./chunk-X72CBQLP.js";import{n as v}from"./chunk-P44VDH7R.js";import{$a as L,Ab as c,Bb as s,Cb as p,Gb as Y,L as w,Pb as Z,Rb as f,Sb as tt,Tb as P,Wb as g,Xb as D,Yb as et,ac as x,ea as K,eb as a,fb as d,ib as X,ma as h,mb as S,na as Q,pb as m,ra as U,sa as W,vb as F,wb as z,xb as E,yb as G,zb as B}from"./chunk-3CXVAQY6.js";function q(e){return e&&!e.valid?(Object.keys(e.controls).forEach(t=>{let i=e?.get(t);i instanceof R&&q(i),i?.markAsTouched({onlySelf:!0});}),!1):!0;}var l=class{static close(t,i){return{text:u.close,type:_.Close,task:t,indicator:i};}static confirm(t){return{text:u.confirm,type:_.Submit,task:t};}static save(t,i){return{text:u.save,type:_.Submit,color:"primary",task:t,indicator:i};}static reset(t,i){return{text:u.reset,type:_.Reset,task:t,indicator:i};}static delete(t,i){return{text:u.delete,type:_.Submit,color:"warn",task:t,indicator:i};}};var k=class{constructor(t){this.indicator=L(!1),this.alert=L(void 0),this.header={title:"",alert:this.alert},this.dialogRef=t;}},T=class extends k{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&X(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return q(this.form);}},N=class extends k{constructor(t){super(t),this.header.title=u.delete;}},O=class extends k{constructor(t){super(t),this.header.title=u.confirm;}},dt=class extends T{constructor(t){super(t),this.header.title=u.filter,this.actions=[l.close(()=>t.close()),l.reset(()=>this.form.reset()),l.save(()=>this.submit(),this.indicator)];}},ft=class extends T{constructor(t){super(t),this.header.title=u.save,this.actions=[l.close(()=>t.close()),l.reset(()=>{this.form.reset(),this.alert.set(void 0);}),l.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(V(this.indicator),H(this.alert),w(1)).subscribe(i=>{this.dialogRef.close(i);});}};function vt(e,t){if(e&1){let i=Y();c(0,"button",0),Z("click",function(){let r=U(i).$implicit,Dt=f();return W(Dt.actionClicked(r));}),g(1),s();}if(e&2){let i=t.$implicit,n=f();m("disabled",n.isActionDisabled(i))("color",i.color),a(1),et(" ",i.text," ");}}var y=(()=>{let t=class t{constructor(){this.actions=[];}actionClicked(n){n.task&&n.task();}isActionDisabled(n){return!!(n.indicator&&n.indicator());}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[x],decls:3,vars:0,consts:[["mat-button","",3,"disabled","color","click"],["mat-button","",3,"disabled","color"]],template:function(o,r){o&1&&(c(0,"mat-dialog-actions"),G(1,vt,2,3,"button",1,E),s()),o&2&&B(1,r.actions);},dependencies:[v,mt,st,C,pt],encapsulation:2});let e=t;return e;})();var yt=[[["","start",""]],[["","end",""]]],Mt=["[start]","[end]"],M=(()=>{let t=class t{isVisible(){return this.header?.alert()!=null;}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{header:"header"},standalone:!0,features:[x],ngContentSelectors:Mt,decls:7,vars:2,consts:[[1,"sz-header-dialog"],["start","",1,"sz-h5"],[1,"spacer"],[3,"alert"]],template:function(o,r){o&1&&(tt(yt),c(0,"div",0)(1,"h5",1),g(2),s(),P(3),p(4,"span",2),P(5,1),s(),p(6,"sz-ui-alert",3)),o&2&&(a(2),D(r.header==null?null:r.header.title),a(4),m("alert",r.header==null?null:r.header.alert()));},dependencies:[C,ct],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function St(e,t){if(e&1&&(c(0,"p"),g(1),s()),e&2){let i=f();a(1),D(i.content.message);}}var ut=(()=>{let t=class t extends O{constructor(n,o,r){super(o),this.fb=n,this.dialog=o,this.content=r,this.actions=[l.close(()=>o.close()),l.confirm(()=>o.close(!0))];}};t.ɵfac=function(o){return new(o||t)(d($),d(b),d(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[S,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),F(2,St,2,1,"p"),s(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),z(2,r.content.message?2:-1),a(1),m("actions",r.actions));},dependencies:[v,C,A,M,y],encapsulation:2});let e=t;return e;})();function Ft(e,t){if(e&1&&(c(0,"p"),g(1),s()),e&2){let i=f();a(1),D(i.content.message);}}var ht=(()=>{let t=class t extends N{constructor(n,o){super(n),this.dialog=n,this.content=o,this.actions=[l.close(()=>n.close()),l.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(V(this.indicator),H(this.alert),w(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(o){return new(o||t)(d(b),d(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[S,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),F(2,Ft,2,1,"p"),s(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),z(2,r.content.message?2:-1),a(1),m("actions",r.actions));},dependencies:[v,C,A,M,y],encapsulation:2});let e=t;return e;})();function _t(e,t){if(e&1&&(c(0,"p"),g(1),s()),e&2){let i=f();a(1),D(i.content.message);}}function bt(e,t){if(e&1&&p(0,"sz-ui-form-field-dynamic",4),e&2){let i=t.$implicit,n=f(2);m("control",i)("form",n.form);}}function It(e,t){if(e&1&&(c(0,"form",3),G(1,bt,1,2,"sz-ui-form-field-dynamic",5,E),s()),e&2){let i=f();m("formGroup",i.form),B(1,i.content.controls);}}var gt=(()=>{let t=class t extends T{constructor(n,o,r){super(o),this.fb=n,this.dialog=o,this.content=r,r?.controls&&r.controls.length>0&&(this.form=this.toFormGroup(r.controls));}toFormGroup(n){let o=new R({});return n.forEach(r=>{o.addControl(r.key,new it(r.value,r.validators));}),o;}submit(){throw new Error("Method not implemented.");}};t.ɵfac=function(o){return new(o||t)(d($),d(b),d(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-form"]],standalone:!0,features:[S,x],decls:5,vars:4,consts:[[3,"header"],["class","sz-form",3,"formGroup"],[3,"actions"],[1,"sz-form",3,"formGroup"],[1,"tw-flex-1",3,"control","form"],["class","tw-flex-1",3,"control","form"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),F(2,_t,2,1,"p")(3,It,3,1,"form",1),s(),p(4,"sz-ui-dialog-actions",2)),o&2&&(m("header",r.header),a(2),z(2,r.content.message?2:-1),a(1),z(3,r.form?3:-1),a(1),m("actions",r.actions));},dependencies:[v,at,rt,ot,nt,C,A,M,y,lt],encapsulation:2});let e=t;return e;})();var je=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=Q({type:t}),t.ɵinj=K({imports:[gt,y,M,ht,ut]});let e=t;return e;})();var xt={delete:"Are you sure to delete this item?"};var Ct=class{static delete(t,i){return{message:xt.delete,task$:t,data:i};}};export{l as a,q as b,k as c,dt as d,ft as e,y as f,M as g,ut as h,ht as i,je as j,Ct as k};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/