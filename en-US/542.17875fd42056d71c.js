"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[542],{3542:(Z,c,s)=>{s.r(c),s.d(c,{TestGroupModule:()=>g});var r=s(6814),u=s(2296),p=s(7700),d=s(617),a=s(8109),m=s(6883),l=s(8308),T=s(9899),h=s(2516),v=s(9598),t=s(5879),y=s(6128);function C(o,G){1&o&&t._UZ(0,"sz-ui-card",6),2&o&&t.Q6J("card",G.$implicit)}const f=[{path:"",component:(()=>{class o{constructor(n,e,i,z){this.dialog=n,this.mlabService=e,this.route=i,this.router=z,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.buildTiles()}buildTiles(){const n={icon:"lab_profile",subtitle:"Test Classes",type:l.kD.Counter,clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})};this.mlabService.testGroups.testClasses.count(this.testGroup.id,v.J.count()).subscribe(i=>{n.title=i});const e={icon:"type_specimen",subtitle:"Specimen Types",type:l.kD.Counter,clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})};this.mlabService.testGroups.specimenTypes.count(this.testGroup.id,v.J.count()).subscribe(i=>{e.title=i}),this.tiles.push(n,e)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(p.uw),t.Y36(m.t),t.Y36(a.gz),t.Y36(a.F0))};static#s=this.\u0275cmp=t.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[t._Bn([])],decls:11,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(e,i){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"button",3)(7,"mat-icon"),t._uU(8,"arrow_back"),t.qZA()()(),t.TgZ(9,"div",4),t.YNc(10,C,1,1,"sz-ui-card",5),t.qZA()),2&e&&(t.xp6(3),t.Oqu(i.testGroup.name),t.xp6(2),t.Oqu(i.testGroup.description),t.xp6(5),t.Q6J("ngForOf",i.tiles))},dependencies:[r.sg,a.rH,d.Hw,u.RK,h.z,y.X],encapsulation:2})}return o})()},{path:"specimen-types",loadComponent:()=>Promise.all([s.e(562),s.e(986),s.e(157)]).then(s.bind(s,3157)).then(o=>o.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>Promise.all([s.e(562),s.e(986),s.e(592),s.e(271)]).then(s.bind(s,3271)).then(o=>o.TestGroupTestClassesComponent)}];let g=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#s=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({providers:[m.t],imports:[r.ez,a.Bz.forChild(f),p.Is,d.Ps,u.ot,h.z,T.su,l.VH]})}return o})()}}]);