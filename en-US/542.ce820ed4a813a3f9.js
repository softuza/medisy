"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[542],{3542:(S,r,t)=>{t.r(r),t.d(r,{TestGroupModule:()=>z});var c=t(6814),u=t(2296),d=t(7700),m=t(617),a=t(8109),p=t(6883),v=t(758),l=t(8308),T=t(9899),y=t(5041),h=t(9598),s=t(5879),C=t(2516),f=t(6128);function g(o,Z){1&o&&s._UZ(0,"sz-ui-card",6),2&o&&s.Q6J("card",Z.$implicit)}const G=[{path:"",component:(()=>{class o{constructor(e,n,i,F){this.dialog=e,this.mlabService=n,this.route=i,this.router=F,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles()}buildTiles(){const e={icon:"lab_profile",subtitle:"Test Classes",type:l.kD.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,h.J.count()).subscribe(i=>{e.title=i});const n={icon:"type_specimen",subtitle:"Specimen Types",type:l.kD.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,h.J.count()).subscribe(i=>{n.title=i}),this.tiles.push(e,n)}static#t=this.\u0275fac=function(n){return new(n||o)(s.Y36(d.uw),s.Y36(p.t),s.Y36(a.gz),s.Y36(a.F0))};static#s=this.\u0275cmp=s.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[s._Bn([])],decls:11,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(n,i){1&n&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s.TgZ(6,"button",3)(7,"mat-icon"),s._uU(8,"arrow_back"),s.qZA()()(),s.TgZ(9,"div",4),s.YNc(10,g,1,1,"sz-ui-card",5),s.qZA()),2&n&&(s.xp6(3),s.Oqu(i.testGroup.name),s.xp6(2),s.Oqu(i.testGroup.description),s.xp6(5),s.Q6J("ngForOf",i.tiles))},dependencies:[c.sg,a.rH,m.Hw,u.RK,C.z,f.X],encapsulation:2})}return o})()},{path:"specimen-types",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(157)]).then(t.bind(t,3157)).then(o=>o.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(592),t.e(271)]).then(t.bind(t,3271)).then(o=>o.TestGroupTestClassesComponent)}];let z=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#s=this.\u0275mod=s.oAB({type:o});static#o=this.\u0275inj=s.cJS({providers:[p.t],imports:[c.ez,a.Bz.forChild(G),d.Is,m.Ps,u.ot,v.E3,y.n,T.su,l.VH]})}return o})()}}]);