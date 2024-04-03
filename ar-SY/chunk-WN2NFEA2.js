import{a as F,b as w,e as T,f as tt,g}from"./chunk-IAMBMKDI.js";import{b as ot,c as E,e as j,f as nt}from"./chunk-KVZ22XWW.js";import{c as u}from"./chunk-LMCANXRL.js";import{q as Z}from"./chunk-KAOE4CKM.js";import{ia as et,ka as it}from"./chunk-WG6MZMNK.js";import{Da as H,Db as d,Ea as L,Ib as b,Kb as G,Lb as N,Ma as k,Mb as P,Nb as c,Ob as l,Pb as p,Q as z,Sc as Y,Tb as q,_b as J,ac as m,bc as X,cc as K,hb as s,ib as C,jc as f,ka as U,kc as v,lc as Q,qc as h,ta as I,tb as O,ua as x,ub as A,va as W,zb as D}from"./chunk-WLX3OMWV.js";var _=function(e){return e[e.Submit=0]="Submit",e[e.Close=1]="Close",e[e.Reset=2]="Reset",e;}(_||{});var a=class{static close(t,o){return{text:u.close,type:_.Close,task:t,indicator:o,end:!1};}static confirm(t){return{text:u.confirm,type:_.Submit,task:t,end:!0};}static save(t,o){return{text:u.save,type:_.Submit,color:"primary",task:t,indicator:o,end:!0};}static reset(t,o){return{text:u.reset,type:_.Reset,task:t,indicator:o,end:!1};}static delete(t,o){return{text:u.delete,type:_.Submit,color:"warn",task:t,indicator:o,end:!0};}};var y=class{constructor(t){this.indicator=O(!1),this.alert=O(void 0),this.title="",this.dialogRef=t;}},rt=class extends y{constructor(t){super(t),this.actions=[a.close(()=>t.close())];}},B=class extends y{constructor(t){super(t),this.autoControlsDisable=!0,this.autoControlsDisable&&Y(()=>{this.indicator()?this.form.disable():this.form.enable();});}IsValid(){return nt(this.form);}},$=class extends y{constructor(t){super(t),this.title=u.delete;}},V=class extends y{constructor(t){super(t),this.title=u.confirm;}},st=class extends B{constructor(t){super(t),this.title=u.filter,this.actions=[a.close(()=>t.close()),a.reset(()=>this.form.reset()),a.save(()=>this.submit(),this.indicator)];}},at=class extends B{constructor(t){super(t),this.title=u.save,this.actions=[a.close(()=>t.close()),a.reset(()=>{this.form.reset(),this.alert.set(void 0);}),a.save(()=>this.submit(),this.indicator)];}save(t){return t.pipe(E(this.indicator),j(this.alert),z(1)).subscribe(o=>{this.dialogRef.close(o);});}};function pt(e,t){if(e&1){let o=q();c(0,"button",4),J("click",function(){let i=H(o).$implicit,r=m();return L(r.actionClicked(i));}),f(1),l();}if(e&2){let o=t.$implicit,n=m();d("disabled",n.isActionDisabled(o))("color",o.color),s(),Q(" ",o.text," ");}}function ut(e,t){if(e&1){let o=q();c(0,"button",5),J("click",function(){let i=H(o).$implicit,r=m();return L(r.actionClicked(i));}),f(1),l();}if(e&2){let o=t.$implicit,n=m();d("disabled",n.isActionDisabled(o))("color",o.color),s(),Q(" ",o.text," ");}}var S=(()=>{let t=class t{constructor(){this.actions=[];}getActions(n){return this.actions?this.actions.filter(i=>i.end===n):[];}actionClicked(n){n.task&&n.task();}isActionDisabled(n){return!!(n.indicator&&n.indicator());}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-actions"]],inputs:{actions:"actions"},standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"container"],["mat-button","",3,"disabled","color"],[1,"spacer"],["mat-flat-button","",3,"disabled","color"],["mat-button","",3,"click","disabled","color"],["mat-flat-button","",3,"click","disabled","color"]],template:function(i,r){i&1&&(c(0,"mat-dialog-actions",0),N(1,pt,2,3,"button",1,G),p(3,"span",2),N(4,ut,2,3,"button",3,G),l()),i&2&&(s(),P(r.getActions(!1)),s(3),P(r.getActions(!0)));},dependencies:[it,et,g,tt],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;padding:0 24px 16px}"]});let e=t;return e;})();var ft=[[["","start",""]],[["","end",""]]],xt=["[start]","[end]"];function ht(e,t){if(e&1&&(c(0,"h5",1),f(1),l()),e&2){let o=m();s(),v(o.title());}}function gt(e,t){if(e&1&&(c(0,"span",2),f(1),l()),e&2){let o=m();s(),v(o.subtitle());}}var M=(()=>{let t=class t{constructor(){this.title=k(void 0),this.subtitle=k(void 0),this.alert=k(void 0);}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-header"]],inputs:{title:[I.SignalBased,"title"],subtitle:[I.SignalBased,"subtitle"],alert:[I.SignalBased,"alert"]},standalone:!0,features:[h],ngContentSelectors:xt,decls:8,vars:3,consts:[[1,"sz-header-dialog"],[1,"tw-mb-2","tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[3,"alert"]],template:function(i,r){i&1&&(X(ft),c(0,"div",0)(1,"div"),D(2,ht,2,1,"h5",1)(3,gt,2,1,"span",2),l(),K(4),p(5,"span",3),K(6,1),l(),p(7,"sz-ui-alert",4)),i&2&&(s(2),b(2,r.title()?2:-1),s(),b(3,r.subtitle()?3:-1),s(4),d("alert",r.alert()));},dependencies:[g,ot],styles:[".sz-header-dialog[_ngcontent-%COMP%]{padding:16px 24px 4px;display:flex;align-items:center;position:relative}"]});let e=t;return e;})();function Ct(e,t){if(e&1&&(c(0,"p"),f(1),l()),e&2){let o=m();s(),v(o.content.message);}}var Kt=(()=>{let t=class t extends V{constructor(n,i,r){super(i),this.fb=n,this.dialog=i,this.content=r,this.actions=[a.close(()=>i.close()),a.confirm(()=>i.close(!0))];}};t.ɵfac=function(i){return new(i||t)(C(Z),C(F),C(w));},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-confirm"]],standalone:!0,features:[A,h],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(i,r){i&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),D(2,Ct,2,1,"p"),l(),p(3,"sz-ui-dialog-actions",1)),i&2&&(d("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),b(2,r.content.message?2:-1),s(),d("actions",r.actions));},dependencies:[g,T,M,S],encapsulation:2});let e=t;return e;})();function bt(e,t){if(e&1&&(c(0,"p"),f(1),l()),e&2){let o=m();s(),v(o.content.message);}}var ct=(()=>{let t=class t extends ${constructor(n,i){super(n),this.dialog=n,this.content=i,this.actions=[a.close(()=>n.close()),a.delete(()=>this.submit(),this.indicator)];}submit(){if(this.content?.task$){this.content?.task$.pipe(E(this.indicator),j(this.alert),z(1)).subscribe(()=>{this.dialog.close(this.content.data);});return;}this.dialog.close();}};t.ɵfac=function(i){return new(i||t)(C(F),C(w));},t.ɵcmp=x({type:t,selectors:[["sz-ui-dialog-delete"]],standalone:!0,features:[A,h],decls:4,vars:5,consts:[[3,"title","subtitle","alert"],[3,"actions"]],template:function(i,r){i&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content"),D(2,bt,2,1,"p"),l(),p(3,"sz-ui-dialog-actions",1)),i&2&&(d("title",r.title)("subtitle",r.subtitle)("alert",r.alert()),s(2),b(2,r.content.message?2:-1),s(),d("actions",r.actions));},dependencies:[g,T,M,S],encapsulation:2});let e=t;return e;})();var mt={delete:"\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631"};var dt=class{static delete(t,o){return{message:mt.delete,task$:t,data:o};}};var me=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=W({type:t}),t.ɵinj=U({imports:[S,M,ct]});let e=t;return e;})();export{a,y as b,rt as c,st as d,at as e,S as f,M as g,Kt as h,ct as i,me as j,dt as k};/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/