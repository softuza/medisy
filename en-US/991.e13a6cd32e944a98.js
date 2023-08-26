"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[991],{3991:(z,_,n)=>{n.r(_),n.d(_,{DashboardModule:()=>y});var o=n(6814),t=n(617),s=n(8109),a=n(2595),m=n(5041),d=n(5738),u=n(5048),f=n(2430);class g{static action(h,l){return{title:h,clickFn:l}}}var r=n(5879),S=n(2516),A=n(6128);function T(i,h){1&i&&r._UZ(0,"sz-ui-card",4),2&i&&r.Q6J("card",h.$implicit)}const D=[{path:"",component:(()=>{class i{constructor(l,v,E){this.analysisService=l,this.specimenService=v,this.router=E,this.tiles=[],this.buildTiles()}buildTiles(){const l={icon:"science",subtitle:"Analyses",type:f.k.Counter,clickFn:()=>this.navigate("/mlab/analyses"),actions:[g.action("New",()=>this.navigate("/mlab/analyses/create"))]};this.analysisService.count().subscribe(v=>{l.title=v}),this.tiles.push(l)}navigate(l){this.router.navigate([l])}}return i.\u0275fac=function(l){return new(l||i)(r.Y36(d.K),r.Y36(u.E),r.Y36(s.F0))},i.\u0275cmp=r.Xpm({type:i,selectors:[["medisy-dashboard"]],features:[r._Bn([d.K,u.E])],decls:5,vars:1,consts:function(){let h;return h="Dashboard",[["start","",1,"sz-h5"],h,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]]},template:function(l,v){1&l&&(r.TgZ(0,"sz-ui-header-basic")(1,"h5",0),r.SDv(2,1),r.qZA()(),r.TgZ(3,"div",2),r.YNc(4,T,1,1,"sz-ui-card",3),r.qZA()),2&l&&(r.xp6(4),r.Q6J("ngForOf",v.tiles))},dependencies:[o.sg,S.z,A.X],encapsulation:2}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[o.ez,s.Bz.forChild(D),t.Ps,m.n,a.V]}),i})()},2595:(z,_,n)=>{n.d(_,{V:()=>s});var o=n(6128),t=n(5879);let s=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.X]}),a})()},6128:(z,_,n)=>{n.d(_,{X:()=>I});var o=n(6814),t=n(5879),s=n(5195),a=n(6385),m=n(617),d=n(6007),u=n(2169);let f=(()=>{class e{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(c,C){1&c&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&c&&(t.Q6J("className",C.getClass()),t.uIk("data-icon",C.getIcon()),t.xp6(1),t.Oqu(C.getIcon()))},dependencies:[o.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f]}),e})();var r=n(2430),S=n(8145);function A(e,p){if(1&e&&(t.ynx(0),t._UZ(1,"sz-ui-counter",8),t.BQk()),2&e){const c=t.oxw();t.xp6(1),t.Q6J("value",c.getValue())}}function T(e,p){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const c=t.oxw(2);t.xp6(1),t.hij(" ",c.card.title," ")}}function M(e,p){1&e&&t.Hsn(0,2)}function D(e,p){if(1&e&&(t.ynx(0),t.YNc(1,T,2,1,"div",9),t.YNc(2,M,1,0,"ng-template",null,10,t.W1O),t.BQk()),2&e){const c=t.MAs(3),C=t.oxw();t.xp6(1),t.Q6J("ngIf",C.card.title)("ngIfElse",c)}}function y(e,p){if(1&e&&t._UZ(0,"sz-ui-icon",11),2&e){const c=t.oxw();t.Q6J("icon",c.card.icon)}}function i(e,p){1&e&&t._UZ(0,"mat-divider")}function h(e,p){if(1&e){const c=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const x=t.CHM(c).$implicit,Z=t.oxw(2);return t.KtG(Z.cardActionClick(x))}),t._uU(1),t.qZA()}if(2&e){const c=p.$implicit;t.xp6(1),t.hij(" ",c.title," ")}}function l(e,p){if(1&e&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,h,2,1,"button",12),t.qZA()),2&e){const c=t.oxw();t.xp6(1),t.Q6J("ngForOf",c.card.actions)}}function v(e,p){1&e&&t._UZ(0,"mat-progress-bar",14)}const E=[[["","content",""]],[["","footer",""]],[["","title",""]]],O=["[content]","[footer]","[title]"];let I=(()=>{class e{constructor(){this.szCardType=r.k,this.indicator=(0,t.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(c){this.card&&c&&c.clickFn&&c?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[t.jDz],ngContentSelectors:O,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(c,C){1&c&&(t.F$t(E),t.TgZ(0,"mat-card",0)(1,"mat-card-header",1),t.NdJ("click",function(){return C.cardClick()}),t.TgZ(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title",2),t.YNc(5,A,2,1,"ng-container",3),t.YNc(6,D,4,2,"ng-container",3),t.qZA(),t._UZ(7,"span",4),t.YNc(8,y,1,1,"sz-ui-icon",5),t.qZA(),t.TgZ(9,"mat-card-content"),t.Hsn(10),t.YNc(11,i,1,0,"mat-divider",6),t.YNc(12,l,2,1,"mat-card-actions",6),t.qZA(),t.TgZ(13,"mat-card-footer"),t.Hsn(14,1),t.YNc(15,v,1,0,"mat-progress-bar",7),t.qZA()()),2&c&&(t.xp6(3),t.Oqu(C.card.subtitle),t.xp6(1),t.Q6J("ngSwitch",C.card.type),t.xp6(1),t.Q6J("ngSwitchCase",C.szCardType.Counter),t.xp6(1),t.Q6J("ngSwitchCase",C.szCardType.Text),t.xp6(2),t.Q6J("ngIf",C.hasIcon()),t.xp6(3),t.Q6J("ngIf",C.hasActions()),t.xp6(1),t.Q6J("ngIf",C.hasActions()),t.xp6(3),t.Q6J("ngIf",C.indicator()))},dependencies:[o.ez,o.sg,o.O5,o.RF,o.n9,s.QW,s.a8,s.hq,s.dn,s.rt,s.dk,s.$j,s.n5,m.Ps,a.t,a.d,d.Cv,d.pW,g,f,u.c,S.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),e})()},2430:(z,_,n)=>{n.d(_,{k:()=>o});var o=(()=>((o=o||{})[o.Counter=0]="Counter",o[o.Text=1]="Text",o))()},8145:(z,_,n)=>{n.d(_,{R:()=>a});var o=n(6814),t=n(5879);const s=["*"];let a=(()=>{class m{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(u){u&&(this.animate(this.oldValue,u),this.oldValue=u)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(u,f){const g=f-u;let S=Math.abs(Math.floor(this.duration/g));S=Math.max(S,50);const T=(new Date).getTime()+this.duration,M=()=>{const D=(new Date).getTime(),y=Math.max((T-D)/this.duration,0),i=Math.round(f-y*g);this.currentValue=i,Math.round(i)===Math.round(f)&&clearInterval(this.timer)};this.timer=setInterval(M,S),M()}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[t.jDz],ngContentSelectors:s,decls:3,vars:1,template:function(u,f){1&u&&(t.F$t(),t.TgZ(0,"span"),t._uU(1),t.Hsn(2),t.qZA()),2&u&&(t.xp6(1),t.hij(" ",f.currentValue," "))},dependencies:[o.ez],encapsulation:2}),m})()},2169:(z,_,n)=>{n.d(_,{c:()=>s});var o=n(8145),t=n(5879);let s=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.R]}),a})()},2516:(z,_,n)=>{n.d(_,{z:()=>m});var o=n(6814),t=n(5879);const s=[[["","start",""]],[["","end",""]]],a=["[start]","[end]"];let m=(()=>{class d{constructor(){this.cls="sz-header-basic"}}return d.\u0275fac=function(f){return new(f||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["sz-ui-header-basic"]],inputs:{cls:"cls"},standalone:!0,features:[t.jDz],ngContentSelectors:a,decls:4,vars:1,consts:[[1,"container",3,"ngClass"],[1,"spacer"]],template:function(f,g){1&f&&(t.F$t(s),t.TgZ(0,"div",0),t.Hsn(1),t._UZ(2,"span",1),t.Hsn(3,1),t.qZA()),2&f&&t.Q6J("ngClass",g.cls)},dependencies:[o.ez,o.mk],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]}),d})()},5041:(z,_,n)=>{n.d(_,{n:()=>s});var o=n(2516),t=n(5879);let s=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.z]}),a})()}}]);