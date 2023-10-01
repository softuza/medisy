"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[542],{3542:(S,h,n)=>{n.r(h),n.d(h,{TestGroupModule:()=>F});var o=n(6814),t=n(2296),c=n(7700),r=n(617),f=n(8109),z=n(6883),l=n(758),m=n(2595),T=n(3576),x=n(5041),v=n(2430),Z=n(9598),s=n(5879),y=n(2516),I=n(6128);function M(a,E){1&a&&s._UZ(0,"sz-ui-card",6),2&a&&s.Q6J("card",E.$implicit)}const O=[{path:"",component:(()=>{class a{constructor(C,p,e,g){this.dialog=C,this.mlabService=p,this.route=e,this.router=g,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles()}buildTiles(){const C={icon:"lab_profile",subtitle:"Test Classes",type:v.k.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,Z.J.count()).subscribe(e=>{C.title=e});const p={icon:"type_specimen",subtitle:"Specimen Types",type:v.k.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,Z.J.count()).subscribe(e=>{p.title=e}),this.tiles.push(C,p)}static#t=this.\u0275fac=function(p){return new(p||a)(s.Y36(c.uw),s.Y36(z.t),s.Y36(f.gz),s.Y36(f.F0))};static#n=this.\u0275cmp=s.Xpm({type:a,selectors:[["medisy-laboratory-test-group"]],features:[s._Bn([])],decls:11,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(p,e){1&p&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s.TgZ(6,"button",3)(7,"mat-icon"),s._uU(8,"arrow_back"),s.qZA()()(),s.TgZ(9,"div",4),s.YNc(10,M,1,1,"sz-ui-card",5),s.qZA()),2&p&&(s.xp6(3),s.Oqu(e.testGroup.name),s.xp6(2),s.Oqu(e.testGroup.description),s.xp6(5),s.Q6J("ngForOf",e.tiles))},dependencies:[o.sg,f.rH,r.Hw,t.RK,y.z,I.X],encapsulation:2})}return a})()},{path:"specimen-types",loadComponent:()=>Promise.all([n.e(572),n.e(986),n.e(592),n.e(157)]).then(n.bind(n,3157)).then(a=>a.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>Promise.all([n.e(572),n.e(986),n.e(592),n.e(271)]).then(n.bind(n,3271)).then(a=>a.TestGroupTestClassesComponent)}];let F=(()=>{class a{static#t=this.\u0275fac=function(p){return new(p||a)};static#n=this.\u0275mod=s.oAB({type:a});static#e=this.\u0275inj=s.cJS({providers:[z.t],imports:[o.ez,f.Bz.forChild(O),c.Is,r.Ps,t.ot,l.E3,x.n,T.su,m.V]})}return a})()},2595:(S,h,n)=>{n.d(h,{V:()=>c});var o=n(6128),t=n(5879);let c=(()=>{class r{static#t=this.\u0275fac=function(l){return new(l||r)};static#n=this.\u0275mod=t.oAB({type:r});static#e=this.\u0275inj=t.cJS({imports:[o.X]})}return r})()},6128:(S,h,n)=>{n.d(h,{X:()=>p});var o=n(6814),t=n(5879),c=n(5195),r=n(6385),f=n(617),z=n(6007),l=n(2169);let m=(()=>{class e{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}static#t=this.\u0275fac=function(d){return new(d||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(d,u){1&d&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&d&&(t.Q6J("className",u.getClass()),t.uIk("data-icon",u.getIcon()),t.xp6(1),t.Oqu(u.getIcon()))},dependencies:[o.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]})}return e})(),T=(()=>{class e{static#t=this.\u0275fac=function(d){return new(d||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[m]})}return e})();var x=n(2430),v=n(8145);function Z(e,g){if(1&e&&(t.ynx(0),t._UZ(1,"sz-ui-counter",8),t.BQk()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("value",i.getValue())}}function s(e,g){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.hij(" ",i.card.title," ")}}function y(e,g){1&e&&t.Hsn(0,2)}function I(e,g){if(1&e&&(t.ynx(0),t.YNc(1,s,2,1,"div",9),t.YNc(2,y,1,0,"ng-template",null,10,t.W1O),t.BQk()),2&e){const i=t.MAs(3),d=t.oxw();t.xp6(1),t.Q6J("ngIf",d.card.title)("ngIfElse",i)}}function M(e,g){if(1&e&&t._UZ(0,"sz-ui-icon",11),2&e){const i=t.oxw();t.Q6J("icon",i.card.icon)}}function A(e,g){1&e&&t._UZ(0,"mat-divider")}function O(e,g){if(1&e){const i=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const J=t.CHM(i).$implicit,P=t.oxw(2);return t.KtG(P.cardActionClick(J))}),t._uU(1),t.qZA()}if(2&e){const i=g.$implicit;t.xp6(1),t.hij(" ",i.title," ")}}function F(e,g){if(1&e&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,O,2,1,"button",12),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.card.actions)}}function a(e,g){1&e&&t._UZ(0,"mat-progress-bar",14)}const E=[[["","content",""]],[["","footer",""]],[["","title",""]]],C=["[content]","[footer]","[title]"];let p=(()=>{class e{constructor(){this.szCardType=x.k,this.indicator=(0,t.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(i){this.card&&i&&i.clickFn&&i?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}static#t=this.\u0275fac=function(d){return new(d||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[t.jDz],ngContentSelectors:C,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(d,u){1&d&&(t.F$t(E),t.TgZ(0,"mat-card",0)(1,"mat-card-header",1),t.NdJ("click",function(){return u.cardClick()}),t.TgZ(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title",2),t.YNc(5,Z,2,1,"ng-container",3),t.YNc(6,I,4,2,"ng-container",3),t.qZA(),t._UZ(7,"span",4),t.YNc(8,M,1,1,"sz-ui-icon",5),t.qZA(),t.TgZ(9,"mat-card-content"),t.Hsn(10),t.YNc(11,A,1,0,"mat-divider",6),t.YNc(12,F,2,1,"mat-card-actions",6),t.qZA(),t.TgZ(13,"mat-card-footer"),t.Hsn(14,1),t.YNc(15,a,1,0,"mat-progress-bar",7),t.qZA()()),2&d&&(t.xp6(3),t.Oqu(u.card.subtitle),t.xp6(1),t.Q6J("ngSwitch",u.card.type),t.xp6(1),t.Q6J("ngSwitchCase",u.szCardType.Counter),t.xp6(1),t.Q6J("ngSwitchCase",u.szCardType.Text),t.xp6(2),t.Q6J("ngIf",u.hasIcon()),t.xp6(3),t.Q6J("ngIf",u.hasActions()),t.xp6(1),t.Q6J("ngIf",u.hasActions()),t.xp6(3),t.Q6J("ngIf",u.indicator()))},dependencies:[o.ez,o.sg,o.O5,o.RF,o.n9,c.QW,c.a8,c.hq,c.dn,c.rt,c.dk,c.$j,c.n5,f.Ps,r.t,r.d,z.Cv,z.pW,T,m,l.c,v.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]})}return e})()},2430:(S,h,n)=>{n.d(h,{k:()=>o});var o=(()=>((o=o||{})[o.Counter=0]="Counter",o[o.Text=1]="Text",o))()},8145:(S,h,n)=>{n.d(h,{R:()=>r});var o=n(6814),t=n(5879);const c=["*"];let r=(()=>{class f{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(l){l&&(this.animate(this.oldValue,l),this.oldValue=l)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(l,m){const T=m-l;let v=Math.abs(Math.floor(this.duration/T));v=Math.max(v,50);const s=(new Date).getTime()+this.duration,y=()=>{const I=(new Date).getTime(),M=Math.max((s-I)/this.duration,0),A=Math.round(m-M*T);this.currentValue=A,Math.round(A)===Math.round(m)&&clearInterval(this.timer)};this.timer=setInterval(y,v),y()}static#t=this.\u0275fac=function(m){return new(m||f)};static#n=this.\u0275cmp=t.Xpm({type:f,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[t.jDz],ngContentSelectors:c,decls:3,vars:1,template:function(m,T){1&m&&(t.F$t(),t.TgZ(0,"span"),t._uU(1),t.Hsn(2),t.qZA()),2&m&&(t.xp6(1),t.hij(" ",T.currentValue," "))},dependencies:[o.ez],encapsulation:2})}return f})()},2169:(S,h,n)=>{n.d(h,{c:()=>c});var o=n(8145),t=n(5879);let c=(()=>{class r{static#t=this.\u0275fac=function(l){return new(l||r)};static#n=this.\u0275mod=t.oAB({type:r});static#e=this.\u0275inj=t.cJS({imports:[o.R]})}return r})()}}]);