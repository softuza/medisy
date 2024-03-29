import{a as A,b as I,e as w,f as Y,g}from"./chunk-IZ32KJRN.js";import{b as et,c as F,e as T,f as it}from"./chunk-2AWDEL7N.js";import{c as u}from"./chunk-XNWVOXZG.js";import{q as X}from"./chunk-4JTOADFE.js";import{a as Z,c as tt}from"./chunk-AYP3BRJS.js";import{$b as d,Cb as m,Da as B,Ea as R,Hb as v,Jb as L,Kb as O,Lb as G,Mb as l,Nb as c,Ob as p,Q as z,Rc as W,Sb as N,Zb as P,ac as U,bc as q,gb as a,hb as C,ic as f,jc as b,ka as K,kc as J,pc as x,sb as H,tb as k,ua as h,va as Q,yb as D}from"./chunk-XJDYJDV7.js";var _=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(_||{});var s=class{static close(t,i){return{text:u.close,type:_.Close,task:t,indicator:i,end:!1};}static confirm(t){return{text:u.confirm,type:_.Submit,task:t,end:!0};}static save(t,i){return{text:u.save,type:_.Submit,color:"primary",task:t,indicator:i,end:!0};}static reset(t,i){return{text:u.reset,type:_.Reset,task:t,indicator:i,end:!1};}static delete(t,i){return{text:u.delete,type:_.Submit,color:"warn",task:t,indicator:i,end:!0};}};var y=class{constructor(t){this.indicator=H(!1),this.alert=H(void 0),this.header={title:"",alert:this.alert},this.dialogRef=t;}},ot=class extends y{constructor(t){super(t),this.actions=[s.close(()=>t.close())];}},E=class extends y{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&W(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return it(this.form);}},j=class extends y{constructor(t){super(t),this.header.title=u.delete;}},$=class extends y{constructor(t){super(t),this.header.title=u.confirm;}},nt=class extends E{constructor(t){super(t),this.header.title=u.filter,this.actions=[s.close(()=>t.close()),s.reset(()=>this.form.reset()),s.save(()=>this.submit(),this.indicator)];}},rt=class extends E{constructor(t){super(t),this.header.title=u.save,this.actions=[s.close(()=>t.close()),s.reset(()=>{this.form.reset(),this.alert.set(void 0);}),s.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(F(this.indicator),T(this.alert),z(1)).subscribe(i=>{this.dialogRef.close(i);});}};function dt(e,t){if(e&1){let i=N();l(0,"button",4),P("click",function(){let o=B(i).$implicit,r=d();return R(r.actionClicked(o));}),f(1),c();}if(e&2){let i=t.$implicit,n=d();m("disabled",n.isActionDisabled(i))("color",i.color),a(),J(" ",i.text," ");}}function mt(e,t){if(e&1){let i=N();l(0,"button",5),P("click",function(){let o=B(i).$implicit,r=d();return R(r.actionClicked(o));}),f(1),c();}if(e&2){let i=t.$implicit,n=d();m("disabled",n.isActionDisabled(i))("color",i.color),a(),J(" ",i.text," ");}}var M=(()=>{let t=class t{constructor(){this.actions=[];}getActions(n){return this.actions?this.actions.filter(o=>o.end===n):[];}actionClicked(n){n.task&&n.task();}isActionDisabled(n){return!!(n.indicator&&n.indicator());}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"container"],["mat-button","",3,"disabled","color"],[1,"spacer"],["mat-flat-button","",3,"disabled","color"],["mat-button","",3,"click","disabled","color"],["mat-flat-button","",3,"click","disabled","color"]],template:function(o,r){o&1&&(l(0,"mat-dialog-actions",0),O(1,dt,2,3,"button",1,L),p(3,"span",2),O(4,mt,2,3,"button",3,L),c()),o&2&&(a(),G(r.getActions(!1)),a(3),G(r.getActions(!0)));},dependencies:[tt,Z,g,Y],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;padding:0 24px 16px}"]});let e=t;return e;})();var pt=[[["","start",""]],[["","end",""]]],ut=["[start]","[end]"];function ft(e,t){if(e&1&&(l(0,"h5",1),f(1),c()),e&2){let i=d();a(),b(i.header==null?null:i.header.title);}}function ht(e,t){if(e&1&&(l(0,"span",2),f(1),c()),e&2){let i=d();a(),b(i.header==null?null:i.header.subtitle);}}var S=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{header:"header"},standalone:!0,features:[x],ngContentSelectors:ut,decls:8,vars:3,consts:[[1,"sz-header-dialog"],[1,"tw-mb-2","tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[3,"alert"]],template:function(o,r){o&1&&(U(pt),l(0,"div",0)(1,"div"),D(2,ft,2,1,"h5",1)(3,ht,2,1,"span",2),c(),q(4),p(5,"span",3),q(6,1),c(),p(7,"sz-ui-alert",4)),o&2&&(a(2),v(2,r.header!=null&&r.header.title?2:-1),a(),v(3,r.header!=null&&r.header.subtitle?3:-1),a(4),m("alert",r.header==null?null:r.header.alert()));},dependencies:[g,et],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function xt(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();a(),b(i.content.message);}}var Nt=(()=>{let t=class t extends ${constructor(n,o,r){super(o),this.fb=n,this.dialog=o,this.content=r,this.actions=[s.close(()=>o.close()),s.confirm(()=>o.close(!0))];}};t.ɵfac=function(o){return new(o||t)(C(X),C(A),C(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[k,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),D(2,xt,2,1,"p"),c(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),v(2,r.content.message?2:-1),a(),m("actions",r.actions));},dependencies:[g,w,S,M],encapsulation:2});let e=t;return e;})();function gt(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();a(),b(i.content.message);}}var st=(()=>{let t=class t extends j{constructor(n,o){super(n),this.dialog=n,this.content=o,this.actions=[s.close(()=>n.close()),s.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(F(this.indicator),T(this.alert),z(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(o){return new(o||t)(C(A),C(I));},t.ɵcmp=h({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[k,x],decls:4,vars:3,consts:[[3,"header"],[3,"actions"]],template:function(o,r){o&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),D(2,gt,2,1,"p"),c(),p(3,"sz-ui-dialog-actions",1)),o&2&&(m("header",r.header),a(2),v(2,r.content.message?2:-1),a(),m("actions",r.actions));},dependencies:[g,w,S,M],encapsulation:2});let e=t;return e;})();var ct={delete:"\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631"};var lt=class{static delete(t,i){return{message:ct.delete,task$:t,data:i};}};var ae=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=Q({type:t}),t.ɵinj=K({imports:[M,S,st]});let e=t;return e;})();export{s as a,y as b,ot as c,nt as d,rt as e,M as f,S as g,Nt as h,st as i,ae as j,lt as k};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/