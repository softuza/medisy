import{a as w,b as T,e as F,f as Z,g}from"./chunk-7B3GMYBR.js";import{h as I,i as E,u as ot}from"./chunk-NKLFXX3X.js";import{b as it}from"./chunk-VPIQ5RG6.js";import{r as Y}from"./chunk-QZRJHJEV.js";import{Y as u}from"./chunk-4QPQ7IQ3.js";import{ja as tt,la as et}from"./chunk-H2OL5IOU.js";import{Eb as C,Gb as R,Hb as G,Ia as k,Ib as N,Jb as c,K as z,Kb as l,Lb as p,Nc as X,Pb as P,Wb as q,Yb as m,Zb as W,_b as J,bb as s,ea as Q,gc as f,hc as v,ic as K,ja as b,kb as O,mb as A,na as x,nc as h,oa as U,rb as D,wa as H,xa as L,yb as d}from"./chunk-6EDHPT3A.js";var nt={delete:"\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631"};var rt=class{static delete(t,i){return{message:nt.delete,task$:t,data:i};}};var _=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(_||{});var a=class{static close(t,i){return{text:u.close,type:_.Close,task:t,indicator:i,end:!1};}static confirm(t){return{text:u.confirm,type:_.Submit,task:t,end:!0};}static save(t,i){return{text:u.save,type:_.Submit,color:"primary",task:t,indicator:i,end:!0};}static reset(t,i){return{text:u.reset,type:_.Reset,task:t,indicator:i,end:!1};}static delete(t,i){return{text:u.delete,type:_.Submit,color:"error",task:t,indicator:i,end:!0};}};var y=class{constructor(t){this.indicator=O(!1),this.alert=O(void 0),this.title="",this.dialogRef=t;}},st=class extends y{constructor(t){super(t),this.actions=[a.close(()=>t.close())];}},$=class extends y{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&X(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return ot(this.form);}},j=class extends y{constructor(t){super(t),this.title=u.delete;}},V=class extends y{constructor(t){super(t),this.title=u.confirm;}},at=class extends ${constructor(t){super(t),this.title=u.filter,this.actions=[a.close(()=>t.close()),a.reset(()=>this.form.reset()),a.save(this.submit.bind(this),this.indicator)];}},lt=class extends ${constructor(t){super(t),this.title=u.save,this.actions=[a.close(()=>t.close()),a.reset(()=>{this.form.reset(),this.alert.set(void 0);}),a.save(this.submit.bind(this),this.indicator)];}save(t){return t.pipe(I(this.indicator),E(this.alert),z(1)).subscribe(i=>{this.dialogRef.close(i);});}};function dt(e,t){if(e&1){let i=P();c(0,"button",4),q("click",function(){let n=H(i).$implicit,r=m();return L(r.actionClicked(n));}),f(1),l();}if(e&2){let i=t.$implicit,o=m();d("disabled",o.isActionDisabled(i))("color",i.color),s(),K(" ",i.text," ");}}function pt(e,t){if(e&1){let i=P();c(0,"button",5),q("click",function(){let n=H(i).$implicit,r=m();return L(r.actionClicked(n));}),f(1),l();}if(e&2){let i=t.$implicit,o=m();d("disabled",o.isActionDisabled(i))("color",i.color),s(),K(" ",i.text," ");}}var S=(()=>{let t=class t{constructor(){this.actions=[];}getActions(o){return this.actions?this.actions.filter(n=>n.end===o):[];}actionClicked(o){o.task&&o.task();}isActionDisabled(o){return!!(o.indicator&&o.indicator());}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"container"],["mat-button","",3,"disabled","color"],[1,"spacer"],["mat-flat-button","",3,"disabled","color"],["mat-button","",3,"click","disabled","color"],["mat-flat-button","",3,"click","disabled","color"]],template:function(n,r){n&1&&(c(0,"mat-dialog-actions",0),G(1,dt,2,3,"button",1,R),p(3,"span",2),G(4,pt,2,3,"button",3,R),l()),n&2&&(s(),N(r.getActions(!1)),s(3),N(r.getActions(!0)));},dependencies:[et,tt,g,Z],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;padding:0 24px 16px}"]});let e=t;return e;})();var ut=[[["","start",""]],[["","end",""]]],ft=["[start]","[end]"];function xt(e,t){if(e&1&&(c(0,"h5",1),f(1),l()),e&2){let i=m();s(),v(i.title());}}function ht(e,t){if(e&1&&(c(0,"span",2),f(1),l()),e&2){let i=m();s(),v(i.subtitle());}}var M=(()=>{let t=class t{constructor(){this.title=k(void 0),this.subtitle=k(void 0),this.alert=k(void 0);}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],alert:[1,"alert"]},standalone:!0,features:[h],ngContentSelectors:ft,decls:8,vars:3,consts:[[1,"sz-header-dialog"],[1,"tw-mb-2","tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[3,"alert"]],template:function(n,r){n&1&&(W(ut),c(0,"div",0)(1,"div"),D(2,xt,2,1,"h5",1)(3,ht,2,1,"span",2),l(),J(4),p(5,"span",3),J(6,1),l(),p(7,"sz-ui-alert",4)),n&2&&(s(2),C(r.title()?2:-1),s(),C(r.subtitle()?3:-1),s(4),d("alert",r.alert()));},dependencies:[g,it],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function gt(e,t){if(e&1&&(c(0,"p"),f(1),l()),e&2){let i=m();s(),v(i.content.message);}}var ie=(()=>{let t=class t extends V{constructor(){let o=b(w);super(o),this.fb=b(Y),this.content=b(T),this.dialog=o,this.actions=[a.close(()=>o.close()),a.confirm(()=>o.close(!0))];}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[A,h],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(n,r){n&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),D(2,gt,2,1,"p"),l(),p(3,"sz-ui-dialog-actions",1)),n&2&&(d("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),C(r.content.message?2:-1),s(),d("actions",r.actions));},dependencies:[g,F,M,S],encapsulation:2});let e=t;return e;})();function bt(e,t){if(e&1&&(c(0,"p"),f(1),l()),e&2){let i=m();s(),v(i.content.message);}}var mt=(()=>{let t=class t extends j{constructor(){let o=b(w);super(o),this.content=b(T),this.dialog=o,this.actions=[a.close(()=>o.close()),a.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(I(this.indicator),E(this.alert),z(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(n){return new(n||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[A,h],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(n,r){n&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),D(2,bt,2,1,"p"),l(),p(3,"sz-ui-dialog-actions",1)),n&2&&(d("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),C(r.content.message?2:-1),s(),d("actions",r.actions));},dependencies:[g,F,M,S],encapsulation:2});let e=t;return e;})();var he=(()=>{let t=class t{};t.ɵfac=function(n){return new(n||t)();},t.ɵmod=U({type:t}),t.ɵinj=Q({imports:[S,M,mt]});let e=t;return e;})();export{a,rt as b,y as c,st as d,at as e,lt as f,S as g,M as h,ie as i,mt as j,he as k};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/