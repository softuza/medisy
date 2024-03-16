import{a as z,b as A,e as I,f as et,g}from"./chunk-JWIKHMGN.js";import{b as nt,c as F,e as T}from"./chunk-G2GEZ53K.js";import{c as u}from"./chunk-5SU3SZXE.js";import{h as Z,q as tt}from"./chunk-AHBZKNY4.js";import{a as it,c as ot}from"./chunk-UWX5FL2R.js";import{Db as v,Fb as L,Gb as O,Hb as N,Ib as l,Jb as c,Kb as p,O as k,Ob as P,Wb as q,Yb as d,Zb as Y,_b as J,fb as H,ha as U,hc as f,ic as _,jb as a,jc as K,kb as C,nb as X,nc as x,qa as h,ra as W,rb as w,ub as D,va as R,wa as G,yb as m}from"./chunk-E6PHWG6X.js";function Q(e){return e&&!e.valid?(Object.keys(e.controls).forEach(t=>{let i=e?.get(t);i instanceof Z&&Q(i),i?.markAsTouched({onlySelf:!0});}),!1):!0;}var b=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(b||{});var s=class{static close(t,i){return{text:u.close,type:b.Close,task:t,indicator:i,end:!1};}static confirm(t){return{text:u.confirm,type:b.Submit,task:t,end:!0};}static save(t,i){return{text:u.save,type:b.Submit,color:"primary",task:t,indicator:i,end:!0};}static reset(t,i){return{text:u.reset,type:b.Reset,task:t,indicator:i,end:!1};}static delete(t,i){return{text:u.delete,type:b.Submit,color:"warn",task:t,indicator:i,end:!0};}};var y=class{constructor(t){this.indicator=H(!1),this.alert=H(void 0),this.header={title:"",alert:this.alert},this.dialogRef=t;}},rt=class extends y{constructor(t){super(t),this.actions=[s.close(()=>t.close())];}},E=class extends y{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&X(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return Q(this.form);}},j=class extends y{constructor(t){super(t),this.header.title=u.delete;}},$=class extends y{constructor(t){super(t),this.header.title=u.confirm;}},at=class extends E{constructor(t){super(t),this.header.title=u.filter,this.actions=[s.close(()=>t.close()),s.reset(()=>this.form.reset()),s.save(()=>this.submit(),this.indicator)];}},st=class extends E{constructor(t){super(t),this.header.title=u.save,this.actions=[s.close(()=>t.close()),s.reset(()=>{this.form.reset(),this.alert.set(void 0);}),s.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(F(this.indicator),T(this.alert),k(1)).subscribe(i=>{this.dialogRef.close(i);});}};function pt(e,t){if(e&1){let i=P();l(0,"button",2),q("click",function(){let r=R(i).$implicit,B=d();return G(B.actionClicked(r));}),f(1),c();}if(e&2){let i=t.$implicit,n=d();m("disabled",n.isActionDisabled(i))("color",i.color),a(),K(" ",i.text," ");}}function ut(e,t){if(e&1){let i=P();l(0,"button",2),q("click",function(){let r=R(i).$implicit,B=d();return G(B.actionClicked(r));}),f(1),c();}if(e&2){let i=t.$implicit,n=d();m("disabled",n.isActionDisabled(i))("color",i.color),a(),K(" ",i.text," ");}}var S=(()=>{let t=class t{constructor(){this.actions=[];}getActions(n){return this.actions?this.actions.filter(o=>o.end===n):[];}actionClicked(n){n.task&&n.task();}isActionDisabled(n){return!!(n.indicator&&n.indicator());}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"container"],[1,"spacer"],["mat-button","",3,"disabled","color","click"],["mat-button","",3,"disabled","color"]],template:function(o,r){o&1&&(l(0,"mat-dialog-actions",0),O(1,pt,2,3,"button",3,L),p(3,"span",1),O(4,ut,2,3,"button",3,L),c()),o&2&&(a(),N(r.getActions(!1)),a(3),N(r.getActions(!0)));},dependencies:[ot,it,g,et],encapsulation:2});let e=t;return e;})();function ft(e,t){if(e&1&&(l(0,"h5",5),f(1),c()),e&2){let i=d();a(),_(i.header==null?null:i.header.title);}}function ht(e,t){if(e&1&&(l(0,"span",6),f(1),c()),e&2){let i=d();a(),_(i.header==null?null:i.header.subtitle);}}var xt=[[["","start",""]],[["","end",""]]],gt=["[start]","[end]"],M=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{header:"header"},standalone:!0,features:[x],ngContentSelectors:gt,decls:8,vars:3,consts:[[1,"sz-header-dialog"],["class","tw-mb-2 tw-mt-0 tw-text-xl tw-font-medium tw-leading-tight"],["class","tw-text-sm"],[1,"spacer"],[3,"alert"],[1,"tw-mb-2","tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"]],template:function(o,r){o&1&&(Y(xt),l(0,"div",0)(1,"div"),D(2,ft,2,1,"h5",1)(3,ht,2,1,"span",2),c(),J(4),p(5,"span",3),J(6,1),c(),p(7,"sz-ui-alert",4)),o&2&&(a(2),v(2,r.header!=null&&r.header.title?2:-1),a(),v(3,r.header!=null&&r.header.subtitle?3:-1),a(4),m("alert",r.header==null?null:r.header.alert()));},dependencies:[g,nt],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function Ct(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();a(),_(i.content.message);}}var Ut=(()=>{let t=class t extends ${constructor(n,o,r){super(o),this.fb=n,this.dialog=o,this.content=r,this.actions=[s.close(()=>o.close()),s.confirm(()=>o.close(!0))];}};t.ɵfac=function(o){return new(o||t)(C(tt),C(z),C(A));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[w,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),D(2,Ct,2,1,"p"),c(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),v(2,r.content.message?2:-1),a(),m("actions",r.actions));},dependencies:[g,I,M,S],encapsulation:2});let e=t;return e;})();function vt(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();a(),_(i.content.message);}}var lt=(()=>{let t=class t extends j{constructor(n,o){super(n),this.dialog=n,this.content=o,this.actions=[s.close(()=>n.close()),s.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(F(this.indicator),T(this.alert),k(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(o){return new(o||t)(C(z),C(A));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[w,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),D(2,vt,2,1,"p"),c(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),v(2,r.content.message?2:-1),a(),m("actions",r.actions));},dependencies:[g,I,M,S],encapsulation:2});let e=t;return e;})();var dt={delete:"\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631"};var mt=class{static delete(t,i){return{message:dt.delete,task$:t,data:i};}};var pe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=W({type:t}),t.ɵinj=U({imports:[S,M,lt]});let e=t;return e;})();export{s as a,Q as b,y as c,rt as d,at as e,st as f,S as g,M as h,Ut as i,lt as j,pe as k,mt as l};/**i18n:a974d0df197b1d44d5cb2cfc4faa9f46b5a2b49ffb6054814bf84ed24fe1a49d*/