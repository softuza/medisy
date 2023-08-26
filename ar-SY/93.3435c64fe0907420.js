"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[93],{4093:(T,_,n)=>{n.r(_),n.d(_,{SettingsModule:()=>M});var a=n(6814),t=n(5195),i=n(6385),c=n(617),u=n(8109),l=n(2595),m=n(2169),f=n(5041),S=n(2430),o=n(5879),h=n(6128),y=n(2516);function E(r,C){if(1&r&&(o.TgZ(0,"sz-ui-card",5)(1,"p",6),o._uU(2),o.qZA()()),2&r){const d=C.$implicit;o.Q6J("card",d),o.xp6(2),o.Oqu(d.content)}}function z(r,C){if(1&r&&(o.TgZ(0,"sz-ui-card",5)(1,"span",7),o._uU(2),o.qZA()()),2&r){const d=C.$implicit;o.Q6J("card",d),o.xp6(2),o.hij(" ",d.content," ")}}const I=[{path:"",component:(()=>{class r{constructor(d){this.router=d,this.labSettings=[{icon:"lab_profile",type:S.k.Text,subtitle:"\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",content:"\u0639\u0631\u0636 \u0627\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-classes"])},{icon:"science",type:S.k.Text,subtitle:"\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",content:"\u0625\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/test-groups"])},{icon:"compare_arrows",type:S.k.Text,subtitle:"\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",content:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",clickFn:()=>this.router.navigate(["/mlab/reference-values"])},{icon:"type_specimen",type:S.k.Text,subtitle:"\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",content:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clickFn:()=>this.router.navigate(["/mlab/specimen-types"])}],this.generalSettings=[{icon:"biotech",type:S.k.Text,subtitle:"\u0627\u0644\u0645\u062E\u0627\u0628\u0631",title:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0628\u0631",clickFn:()=>this.router.navigate(["/mlab/laboratories"])}]}}return r.\u0275fac=function(d){return new(d||r)(o.Y36(u.F0))},r.\u0275cmp=o.Xpm({type:r,selectors:[["medisy-settings"]],decls:10,vars:2,consts:function(){let C,d;return C="\u0627\u0644\u0627\u0639\u062F\u0627\u062F\u0627\u062A",d="\u0627\u0644\u0645\u062E\u0627\u0628\u0631",[["start","",1,"sz-h5"],C,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],d,[3,"card"],["title",""],["content",""]]},template:function(d,v){1&d&&(o.TgZ(0,"sz-ui-header-basic")(1,"h5",0),o.SDv(2,1),o.qZA()(),o.TgZ(3,"div",2),o.YNc(4,E,3,2,"sz-ui-card",3),o.qZA(),o.TgZ(5,"sz-ui-header-basic")(6,"h5",0),o.SDv(7,4),o.qZA()(),o.TgZ(8,"div",2),o.YNc(9,z,3,2,"sz-ui-card",3),o.qZA()),2&d&&(o.xp6(4),o.Q6J("ngForOf",v.labSettings),o.xp6(5),o.Q6J("ngForOf",v.generalSettings))},dependencies:[a.sg,h.X,y.z],encapsulation:2}),r})()}];let M=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[a.ez,u.Bz.forChild(I),t.QW,c.Ps,m.c,l.V,f.n,i.t]}),r})()},2595:(T,_,n)=>{n.d(_,{V:()=>i});var a=n(6128),t=n(5879);let i=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[a.X]}),c})()},6128:(T,_,n)=>{n.d(_,{X:()=>P});var a=n(6814),t=n(5879),i=n(5195),c=n(6385),u=n(617),l=n(6007),m=n(2169);let f=(()=>{class e{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(s,g){1&s&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&s&&(t.Q6J("className",g.getClass()),t.uIk("data-icon",g.getIcon()),t.xp6(1),t.Oqu(g.getIcon()))},dependencies:[a.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f]}),e})();var o=n(2430),h=n(8145);function y(e,p){if(1&e&&(t.ynx(0),t._UZ(1,"sz-ui-counter",8),t.BQk()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("value",s.getValue())}}function E(e,p){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const s=t.oxw(2);t.xp6(1),t.hij(" ",s.card.title," ")}}function z(e,p){1&e&&t.Hsn(0,2)}function A(e,p){if(1&e&&(t.ynx(0),t.YNc(1,E,2,1,"div",9),t.YNc(2,z,1,0,"ng-template",null,10,t.W1O),t.BQk()),2&e){const s=t.MAs(3),g=t.oxw();t.xp6(1),t.Q6J("ngIf",g.card.title)("ngIfElse",s)}}function I(e,p){if(1&e&&t._UZ(0,"sz-ui-icon",11),2&e){const s=t.oxw();t.Q6J("icon",s.card.icon)}}function M(e,p){1&e&&t._UZ(0,"mat-divider")}function r(e,p){if(1&e){const s=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const Z=t.CHM(s).$implicit,N=t.oxw(2);return t.KtG(N.cardActionClick(Z))}),t._uU(1),t.qZA()}if(2&e){const s=p.$implicit;t.xp6(1),t.hij(" ",s.title," ")}}function C(e,p){if(1&e&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,r,2,1,"button",12),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.card.actions)}}function d(e,p){1&e&&t._UZ(0,"mat-progress-bar",14)}const v=[[["","content",""]],[["","footer",""]],[["","title",""]]],O=["[content]","[footer]","[title]"];let P=(()=>{class e{constructor(){this.szCardType=o.k,this.indicator=(0,t.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(s){this.card&&s&&s.clickFn&&s?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[t.jDz],ngContentSelectors:O,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(s,g){1&s&&(t.F$t(v),t.TgZ(0,"mat-card",0)(1,"mat-card-header",1),t.NdJ("click",function(){return g.cardClick()}),t.TgZ(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title",2),t.YNc(5,y,2,1,"ng-container",3),t.YNc(6,A,4,2,"ng-container",3),t.qZA(),t._UZ(7,"span",4),t.YNc(8,I,1,1,"sz-ui-icon",5),t.qZA(),t.TgZ(9,"mat-card-content"),t.Hsn(10),t.YNc(11,M,1,0,"mat-divider",6),t.YNc(12,C,2,1,"mat-card-actions",6),t.qZA(),t.TgZ(13,"mat-card-footer"),t.Hsn(14,1),t.YNc(15,d,1,0,"mat-progress-bar",7),t.qZA()()),2&s&&(t.xp6(3),t.Oqu(g.card.subtitle),t.xp6(1),t.Q6J("ngSwitch",g.card.type),t.xp6(1),t.Q6J("ngSwitchCase",g.szCardType.Counter),t.xp6(1),t.Q6J("ngSwitchCase",g.szCardType.Text),t.xp6(2),t.Q6J("ngIf",g.hasIcon()),t.xp6(3),t.Q6J("ngIf",g.hasActions()),t.xp6(1),t.Q6J("ngIf",g.hasActions()),t.xp6(3),t.Q6J("ngIf",g.indicator()))},dependencies:[a.ez,a.sg,a.O5,a.RF,a.n9,i.QW,i.a8,i.hq,i.dn,i.rt,i.dk,i.$j,i.n5,u.Ps,c.t,c.d,l.Cv,l.pW,S,f,m.c,h.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),e})()},2430:(T,_,n)=>{n.d(_,{k:()=>a});var a=(()=>((a=a||{})[a.Counter=0]="Counter",a[a.Text=1]="Text",a))()},8145:(T,_,n)=>{n.d(_,{R:()=>c});var a=n(6814),t=n(5879);const i=["*"];let c=(()=>{class u{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(m){m&&(this.animate(this.oldValue,m),this.oldValue=m)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(m,f){const S=f-m;let h=Math.abs(Math.floor(this.duration/S));h=Math.max(h,50);const E=(new Date).getTime()+this.duration,z=()=>{const A=(new Date).getTime(),I=Math.max((E-A)/this.duration,0),M=Math.round(f-I*S);this.currentValue=M,Math.round(M)===Math.round(f)&&clearInterval(this.timer)};this.timer=setInterval(z,h),z()}}return u.\u0275fac=function(m){return new(m||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[t.jDz],ngContentSelectors:i,decls:3,vars:1,template:function(m,f){1&m&&(t.F$t(),t.TgZ(0,"span"),t._uU(1),t.Hsn(2),t.qZA()),2&m&&(t.xp6(1),t.hij(" ",f.currentValue," "))},dependencies:[a.ez],encapsulation:2}),u})()},2169:(T,_,n)=>{n.d(_,{c:()=>i});var a=n(8145),t=n(5879);let i=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[a.R]}),c})()},2516:(T,_,n)=>{n.d(_,{z:()=>u});var a=n(6814),t=n(5879);const i=[[["","start",""]],[["","end",""]]],c=["[start]","[end]"];let u=(()=>{class l{constructor(){this.cls="sz-header-basic"}}return l.\u0275fac=function(f){return new(f||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["sz-ui-header-basic"]],inputs:{cls:"cls"},standalone:!0,features:[t.jDz],ngContentSelectors:c,decls:4,vars:1,consts:[[1,"container",3,"ngClass"],[1,"spacer"]],template:function(f,S){1&f&&(t.F$t(i),t.TgZ(0,"div",0),t.Hsn(1),t._UZ(2,"span",1),t.Hsn(3,1),t.qZA()),2&f&&t.Q6J("ngClass",S.cls)},dependencies:[a.ez,a.mk],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]}),l})()},5041:(T,_,n)=>{n.d(_,{n:()=>i});var a=n(2516),t=n(5879);let i=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[a.z]}),c})()}}]);