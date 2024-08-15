import{a as H,b as J,c as K,d as Q,g as p}from"./chunk-X2F6JBJU.js";import{a as q,b as X}from"./chunk-AAHDAXVC.js";import{W as G,X as U,Y as _}from"./chunk-Z63FN5EJ.js";import{a as $,c as R,e as N}from"./chunk-DNH4OZS2.js";import{ha as V,ia as D,ja as O,ka as L,la as j}from"./chunk-4B53IFHW.js";import{i as P}from"./chunk-UZ765RGE.js";import{$b as A,Fb as u,Gb as b,Ib as k,Jb as M,Kb as l,Lb as m,Mb as w,Qb as v,Xb as S,Zb as r,_b as z,ac as h,bb as c,cb as I,hc as B,ic as C,jc as f,na as y,pc as E,vb as d,wa as T,xa as g,zb as F}from"./chunk-G33TNFCW.js";var x=function(e){return e.Item="item",e.Divider="divider",e;}(x||{}),a=class{constructor(){this.type=x.Item;}setTitle(t){return this.title=t,this;}setIcon(t){return this.icon=t,this;}setIconColor(t){return this.iconColor=t,this;}setDisabled(t){return this.disabled=t,this;}setType(t){return this.type=t,this;}setSubActions(t){return this.subActions=t,this;}setTooltip(t){return this.tooltip=t,this;}setClickFn(t){return this.clickFn=t,this;}};var W=class{static default(){return new a().setType(x.Item);}static edit(t){return new a().setTitle(_.edit).setIcon(p.edit).setClickFn(t);}static menu(t){return new a().setIcon(p.menu_vert).setSubActions(t);}static divider(){return new a().setType(x.Divider);}static add(t){return new a().setTitle(_.add).setIcon(p.add).setClickFn(t);}static addGroup(t){return new a().setTitle(_.add_group).setIcon(p.group).setClickFn(t);}static import(t){return new a().setTitle(_.import).setIcon(p.import_export).setClickFn(t);}static show(t){return new a().setTitle(_.show).setIcon(p.visibility).setClickFn(t);}static hide(t){return new a().setTitle(_.hide).setIcon(p.visibility_off).setClickFn(t);}static manage(t){return new a().setTitle(_.manage).setIcon(p.grid_view).setClickFn(t);}static delete(t){return new a().setTitle(_.delete).setIcon(p.delete).setIconColor("warn").setClickFn(t);}static clear(t){return new a().setTitle(_.clear).setIcon(p.clear_all).setIconColor("warn").setClickFn(t);}static print(t){return new a().setTitle(_.print).setIcon(p.print).setClickFn(t);}static report(t){return new a().setTitle(_.report).setIcon(p.summarize).setClickFn(t);}static barcode(t){return new a().setTitle(_.barcode).setIcon(p.qr).setClickFn(t);}static barcodeScanner(t){return new a().setTooltip(_.scan).setIcon(p.qr_code_scanner).setClickFn(t);}static info(t){return new a().setTitle(_.info).setIcon(p.info).setClickFn(t);}};var Y=[[["","start",""]],[["","end",""]]],Z=["[start]","[end]"];function tt(e,t){if(e&1){let i=v();l(0,"button",7),S("click",function(){T(i);let n=r();return g(n.backClicked());}),l(1,"mat-icon"),C(2,"arrow_forward"),m()();}}function et(e,t){if(e&1&&(l(0,"h5",3),C(1),m()),e&2){let i=r();c(),f(i.config.title);}}function it(e,t){if(e&1&&(l(0,"span",4),C(1),m()),e&2){let i=r();c(),f(i.config.subtitle);}}function nt(e,t){if(e&1&&(l(0,"mat-icon"),C(1),m()),e&2){let i=r(3).$implicit;c(),f(i.icon);}}function ot(e,t){if(e&1){let i=v();l(0,"button",10),S("click",function(){T(i);let n=r(2).$implicit,s=r();return g(s.actionClicked(n));}),l(1,"span"),C(2),m(),d(3,nt,2,1,"mat-icon"),m();}if(e&2){let i;r();let o=B(3),n=r().$implicit;h("matTooltip",(i=n.tooltip)!==null&&i!==void 0?i:""),F("matMenuTriggerFor",n.subActions&&n.subActions.length>0?o:null),c(2),f(n.title),c(),u(n.icon?3:-1);}}function rt(e,t){if(e&1&&(l(0,"mat-icon"),C(1),m()),e&2){let i=r(3).$implicit;c(),f(i.icon);}}function at(e,t){if(e&1){let i=v();l(0,"button",11),S("click",function(){T(i);let n=r(2).$implicit,s=r();return g(s.actionClicked(n));}),d(1,rt,2,1,"mat-icon"),m();}if(e&2){let i;r();let o=B(3),n=r().$implicit;h("matTooltip",(i=n.tooltip)!==null&&i!==void 0?i:""),F("matMenuTriggerFor",n.subActions&&n.subActions.length>0?o:null),c(),u(n.icon?1:-1);}}function ct(e,t){if(e&1&&(l(0,"mat-icon"),C(1),m()),e&2){let i=r(2).$implicit;c(),f(i.icon);}}function lt(e,t){if(e&1&&(l(0,"span"),C(1),m()),e&2){let i=r(2).$implicit;c(),f(i.title);}}function st(e,t){if(e&1){let i=v();l(0,"div")(1,"button",12),S("click",function(){T(i);let n=r().$implicit,s=r(3);return g(s.actionClicked(n));}),d(2,ct,2,1,"mat-icon")(3,lt,2,1,"span"),m()();}if(e&2){let i=r().$implicit;c(2),u(i.icon?2:-1),c(),u(i.title?3:-1);}}function pt(e,t){e&1&&w(0,"mat-divider");}function mt(e,t){if(e&1&&d(0,st,4,2,"div")(1,pt,1,0,"mat-divider"),e&2){let i,o=t.$implicit,n=r(3);u((i=o.type)===n.actionType.Item?0:i===n.actionType.Divider?1:-1);}}function _t(e,t){if(e&1&&(d(0,ot,4,4,"button",8)(1,at,2,3,"button",9),l(2,"mat-menu",null,0),k(4,mt,2,1,null,null,b),m()),e&2){let i=r().$implicit;u(i.title?0:1),c(4),M(i.subActions);}}function ut(e,t){e&1&&w(0,"mat-divider");}function dt(e,t){if(e&1&&d(0,_t,6,1,"mat-menu")(1,ut,1,0,"mat-divider"),e&2){let i,o=t.$implicit,n=r();u((i=o.type)===n.actionType.Item?0:i===n.actionType.Divider?1:-1);}}var Gt=(()=>{let t=class t{constructor(o,n,s){this.location=o,this.route=n,this.router=s,this.data=null,this.actionType=x;}actionClicked(o){console.log("action clicked",this.config),o.clickFn&&o.clickFn();}backClicked(){this.router.getCurrentNavigation()?.previousNavigation?this.location.back():this.router.navigate([this.config?.backUrl??".."],{relativeTo:this.route});}};t.ɵfac=function(n){return new(n||t)(I(P),I($),I(R));},t.ɵcmp=y({type:t,selectors:[["sz-ui-app-bar"]],inputs:{config:"config",data:"data"},standalone:!0,features:[E],ngContentSelectors:Z,decls:11,vars:3,consts:()=>{let o;return o="\u0631\u062C\u0648\u0639",[["menu","matMenu"],[1,"container","sz-app-bar-basic"],["mat-icon-button","","matTooltip",o,1,"tw-me-1"],[1,"tw-mt-0","tw-text-xl","tw-font-medium","tw-leading-tight"],[1,"tw-text-sm"],[1,"spacer"],[1,"tw-flex","tw-items-center","tw-gap-2"],["mat-icon-button","","matTooltip",o,1,"tw-me-1",3,"click"],["mat-button","",3,"matTooltip","matMenuTriggerFor"],["mat-icon-button","",3,"matTooltip","matMenuTriggerFor"],["mat-button","",3,"click","matTooltip","matMenuTriggerFor"],["mat-icon-button","",3,"click","matTooltip","matMenuTriggerFor"],["mat-menu-item","",3,"click"]];},template:function(n,s){n&1&&(z(Y),l(0,"div",1),d(1,tt,3,0,"button",2),l(2,"div"),d(3,et,2,1,"h5",3)(4,it,2,1,"span",4),A(5),m(),w(6,"span",5),l(7,"div",6),A(8,1),k(9,dt,2,1,null,null,b),m()()),n&2&&(c(),u(s.config&&s.config.backEnabled?1:-1),c(2),u(s.config&&s.config.title?3:-1),c(),u(s.config&&s.config.subtitle?4:-1),c(5),M(s.config==null?null:s.config.actions));},dependencies:[N,D,V,j,O,L,U,G,X,q,Q,J,H,K],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;border-radius:4px}.sz-app-bar-basic[_ngcontent-%COMP%]{margin:4px 0 8px;height:64px;padding:8px}"]});let e=t;return e;})();export{W as a,Gt as b};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/