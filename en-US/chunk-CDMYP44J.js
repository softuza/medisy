import{a as E,b as F,e as $,f as tt,g as b}from"./chunk-LOTTIY7N.js";import{h as k,i as M,v as nt}from"./chunk-NNOLVS2I.js";import{b as ot}from"./chunk-43RZGM64.js";import{s as Z}from"./chunk-4EXFFJRQ.js";import{a as m}from"./chunk-SUVHFOJF.js";import{Ka as et,Ma as it}from"./chunk-L3IHEWAI.js";import{Eb as _,Gb as G,Hb as N,Ia as A,Ib as P,Jb as l,K as y,Kb as c,Lb as u,Nc as Y,Pb as q,Wb as J,Yb as d,Zb as X,_b as K,bb as s,ea as U,gc as f,hc as D,ic as Q,ja as v,kb as R,mb as I,na as x,nc as g,oa as W,rb as S,wa as L,xa as O,yb as p}from"./chunk-5F2BPM7Q.js";var rt={delete:"Are you sure to delete this item?"};var st=class{static delete(t,i){return{message:rt.delete,task$:t,data:i};}};var h=class{constructor(t,i){this.end=!1,this.text=t,this.type=i;}setText(t){return this.text=t,this;}setType(t){return this.type=t,this;}setData(t){return this.data=t,this;}setTask(t){return this.task=t,this;}setColor(t){return this.color=t,this;}setIndicator(t){return this.indicator=t,this;}setEnd(t){return this.end=t,this;}};var C=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(C||{});var a=class{static close(t,i){return new h(m.close,C.Close).setTask(t).setIndicator(i);}static confirm(t){return new h(m.confirm,C.Submit).setTask(t);}static save(t,i){return new h(m.save,C.Submit).setColor("primary").setTask(t).setIndicator(i).setEnd(!0);}static reset(t,i){return new h(m.reset,C.Reset).setTask(t).setIndicator(i);}static delete(t,i){return new h(m.delete,C.Submit).setColor("error").setTask(t).setIndicator(i).setEnd(!0);}static add(t,i){return new h(m.add,C.Submit).setColor("primary").setTask(t).setIndicator(i).setEnd(!0);}};var T=class{constructor(t){this.indicator=R(!1),this.alert=R(void 0),this.title="",this.dialogRef=t;}},at=class extends T{constructor(t){super(t),this.actions=[a.close(()=>t.close())];}},j=class extends T{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&Y(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return nt(this.form);}},V=class extends T{constructor(t){super(t),this.title=m.delete;}},B=class extends T{constructor(t){super(t),this.title=m.confirm;}},ct=class extends j{constructor(t){super(t),this.title=m.filter,this.actions=[a.close(()=>t.close()),a.reset(()=>this.form.reset()),a.save(this.submit.bind(this),this.indicator)];}},lt=class extends j{constructor(t){super(t),this.title=m.save,this.actions=[a.close(()=>t.close()),a.reset(()=>{this.form.reset(),this.alert.set(void 0);}),a.save(this.submit.bind(this),this.indicator)];}save(t){return t.pipe(k(this.indicator),M(this.alert),y(1)).subscribe(i=>{this.dialogRef.close(i);});}};function pt(e,t){if(e&1){let i=q();l(0,"button",4),J("click",function(){let n=L(i).$implicit,r=d();return O(r.actionClicked(n));}),f(1),c();}if(e&2){let i=t.$implicit,o=d();p("disabled",o.isActionDisabled(i))("color",i.color),s(),Q(" ",i.text," ");}}function ut(e,t){if(e&1){let i=q();l(0,"button",5),J("click",function(){let n=L(i).$implicit,r=d();return O(r.actionClicked(n));}),f(1),c();}if(e&2){let i=t.$implicit,o=d();p("disabled",o.isActionDisabled(i))("color",i.color),s(),Q(" ",i.text," ");}}var z=(()=>{let t=class t{constructor(){this.actions=[];}getActions(o){return this.actions?this.actions.filter(n=>n.end===o):[];}actionClicked(o){o.task&&o.task();}isActionDisabled(o){return!!(o.indicator&&o.indicator());}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[g],decls:6,vars:0,consts:[[1,"container"],["mat-button","",3,"disabled","color"],[1,"spacer"],["mat-flat-button","",3,"disabled","color"],["mat-button","",3,"click","disabled","color"],["mat-flat-button","",3,"click","disabled","color"]],template:function(n,r){n&1&&(l(0,"mat-dialog-actions",0),N(1,pt,2,3,"button",1,G),u(3,"span",2),N(4,ut,2,3,"button",3,G),c()),n&2&&(s(),P(r.getActions(!1)),s(3),P(r.getActions(!0)));},dependencies:[it,et,b,tt],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;padding:0 24px 16px}"]});let e=t;return e;})();var ft=[[["","start",""]],[["","end",""]]],ht=["[start]","[end]"];function xt(e,t){if(e&1&&(l(0,"h5",1),f(1),c()),e&2){let i=d();s(),D(i.title());}}function gt(e,t){if(e&1&&(l(0,"span",2),f(1),c()),e&2){let i=d();s(),D(i.subtitle());}}var w=(()=>{let t=class t{constructor(){this.title=A(void 0),this.subtitle=A(void 0),this.alert=A(void 0);}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],alert:[1,"alert"]},standalone:!0,features:[g],ngContentSelectors:ht,decls:8,vars:3,consts:[[1,"sz-header-dialog"],[1,"tw-mb-2","tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[3,"alert"]],template:function(n,r){n&1&&(X(ft),l(0,"div",0)(1,"div"),S(2,xt,2,1,"h5",1)(3,gt,2,1,"span",2),c(),K(4),u(5,"span",3),K(6,1),c(),u(7,"sz-ui-alert",4)),n&2&&(s(2),_(r.title()?2:-1),s(),_(r.subtitle()?3:-1),s(4),p("alert",r.alert()));},dependencies:[b,ot],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function bt(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();s(),D(i.content.message);}}var ae=(()=>{let t=class t extends B{constructor(){let o=v(E);super(o),this.fb=v(Z),this.content=v(F),this.dialog=o,this.actions=[a.close(()=>o.close()),a.confirm(()=>this.submit())];}submit(){if(this.content?.task$){this.content?.task$.pipe(k(this.indicator),M(this.alert),y(1)).subscribe(o=>{if(this.content.data){this.dialog.close(this.content.data);return;}this.dialog.close(o);});return;}this.dialog.close(!0);}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[I,g],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(n,r){n&1&&(u(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),S(2,bt,2,1,"p"),c(),u(3,"sz-ui-dialog-actions",1)),n&2&&(p("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),_(r.content.message?2:-1),s(),p("actions",r.actions));},dependencies:[b,$,w,z],encapsulation:2});let e=t;return e;})();function Ct(e,t){if(e&1&&(l(0,"p"),f(1),c()),e&2){let i=d();s(),D(i.content.message);}}var mt=(()=>{let t=class t extends V{constructor(){let o=v(E);super(o),this.content=v(F),this.dialog=o,this.actions=[a.close(()=>o.close()),a.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(k(this.indicator),M(this.alert),y(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[I,g],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(n,r){n&1&&(u(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content"),S(2,Ct,2,1,"p"),c(),u(3,"sz-ui-dialog-actions",1)),n&2&&(p("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),_(r.content.message?2:-1),s(),p("actions",r.actions));},dependencies:[b,$,w,z],encapsulation:2});let e=t;return e;})();var _e=(()=>{let t=class t{};t.ɵfac=function(n){return new(n||t)();},t.ɵmod=W({type:t}),t.ɵinj=U({imports:[z,w,mt]});let e=t;return e;})();export{a,st as b,T as c,at as d,ct as e,lt as f,z as g,w as h,ae as i,mt as j,_e as k};/**i18n:ff9fdde7a6df01557f81548cdf90a4fe127bad3db9779e7a3c30af7012e3a744*/