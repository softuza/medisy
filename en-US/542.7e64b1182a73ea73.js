"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[542],{3542:(A,u,t)=>{t.r(u),t.d(u,{TestGroupModule:()=>F});var l=t(6814),d=t(2296),m=t(7700),c=t(617),a=t(8109),h=t(6987),G=t(758),p=t(1462),C=t(3576),g=t(5041),T=t(9598),v=t(7398),s=t(5879),f=t(2516),y=t(6128);function z(o,e){1&o&&s._UZ(0,"sz-ui-card",6),2&o&&s.Q6J("card",e.$implicit)}const Z=[{path:"",component:(()=>{class o{constructor(n,i,S,U){this.dialog=n,this.testGroupService=i,this.route=S,this.router=U,this.tiles=[],this.testGroup=this.route.snapshot.data.testGroup,this.tiles.push({icon:"lab_profile",subtitle:"Test Classes",type:p.k.Counter,task$:this.testGroupService.getTestGroupTestClasses(this.testGroup.id,T.J.count()).pipe((0,v.U)(r=>r.count)),clickFn:()=>this.router.navigate(["test-classes"],{relativeTo:this.route})},{icon:"type_specimen",subtitle:"Specimen Types",type:p.k.Counter,task$:this.testGroupService.getTestGroupSpecimenTypes(this.testGroup.id,T.J.count()).pipe((0,v.U)(r=>r.count)),clickFn:()=>this.router.navigate(["specimen-types"],{relativeTo:this.route})})}}return o.\u0275fac=function(n){return new(n||o)(s.Y36(m.uw),s.Y36(h.C),s.Y36(a.gz),s.Y36(a.F0))},o.\u0275cmp=s.Xpm({type:o,selectors:[["medisy-laboratory-test-group"]],features:[s._Bn([])],decls:11,vars:3,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""],[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(n,i){1&n&&(s.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),s._uU(3),s.qZA(),s.TgZ(4,"span",2),s._uU(5),s.qZA()(),s.TgZ(6,"button",3)(7,"mat-icon"),s._uU(8,"arrow_back"),s.qZA()()(),s.TgZ(9,"div",4),s.YNc(10,z,1,1,"sz-ui-card",5),s.qZA()),2&n&&(s.xp6(3),s.Oqu(i.testGroup.name),s.xp6(2),s.Oqu(i.testGroup.description),s.xp6(5),s.Q6J("ngForOf",i.tiles))},dependencies:[l.sg,a.rH,c.Hw,d.RK,f.z,y.X],encapsulation:2}),o})()},{path:"specimen-types",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(4),t.e(592),t.e(439)]).then(t.bind(t,9439)).then(o=>o.TestGroupSpecimenTypesComponent)},{path:"test-classes",loadComponent:()=>Promise.all([t.e(572),t.e(986),t.e(4),t.e(592),t.e(271)]).then(t.bind(t,3271)).then(o=>o.TestGroupTestClassesComponent)}];let F=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({providers:[h.C],imports:[l.ez,a.Bz.forChild(Z),m.Is,c.Ps,d.ot,G.E3,g.n,C.su,p.V]}),o})()}}]);