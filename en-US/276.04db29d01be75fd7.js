"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[276],{6276:(v,d,n)=>{n.r(d),n.d(d,{DashboardModule:()=>A});var l=n(6814),o=n(617),u=n(8109),a=n(2595),m=n(2169),c=n(5041),p=n(5738),i=n(5048),D=n(9598),S=n(7398),s=n(5879),f=n(2516),C=n(8145),M=n(5850);function g(t,r){if(1&t&&(s.TgZ(0,"sz-ui-card",4),s._UZ(1,"sz-ui-counter",5),s.qZA()),2&t){const e=r.$implicit;s.Q6J("card",e),s.xp6(1),s.Q6J("task$",null==e?null:e.task$)}}const z=[{path:"",component:(()=>{class t{constructor(e,h,E){this.analysisService=e,this.specimenService=h,this.router=E,this.tiles=[{url:"/mlab/analyses",icon:"science",subtitle:"Analyses",indicator:!0,task$:this.analysisService.getAnalyses(D.J.count()).pipe((0,S.U)(y=>y.count)),actions:[{title:"New",url:"/mlab/analyses/create"}]}]}navigate(e){e&&e.url&&this.router.navigate([e.url])}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(p.K),s.Y36(i.E),s.Y36(u.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["medisy-dashboard"]],features:[s._Bn([p.K,i.E])],decls:5,vars:1,consts:function(){let r;return r="Dashboard",[["start","",1,"sz-h5"],r,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",3,"task$"]]},template:function(e,h){1&e&&(s.TgZ(0,"sz-ui-header-basic")(1,"h5",0),s.SDv(2,1),s.qZA()(),s.TgZ(3,"div",2),s.YNc(4,g,2,2,"sz-ui-card",3),s.qZA()),2&e&&(s.xp6(4),s.Q6J("ngForOf",h.tiles))},dependencies:[l.sg,f.z,C.R,M.X],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[l.ez,u.Bz.forChild(z),o.Ps,c.n,m.c,a.V]}),t})()},2516:(v,d,n)=>{n.d(d,{z:()=>m});var l=n(6814),o=n(5879);const u=[[["","start",""]],[["","end",""]]],a=["[start]","[end]"];let m=(()=>{class c{constructor(){this.cls="sz-header-basic"}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["sz-ui-header-basic"]],inputs:{cls:"cls"},standalone:!0,features:[o.jDz],ngContentSelectors:a,decls:4,vars:1,consts:[[1,"container",3,"ngClass"],[1,"spacer"]],template:function(i,D){1&i&&(o.F$t(u),o.TgZ(0,"div",0),o.Hsn(1),o._UZ(2,"span",1),o.Hsn(3,1),o.qZA()),2&i&&o.Q6J("ngClass",D.cls)},dependencies:[l.ez,l.mk],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]}),c})()},5041:(v,d,n)=>{n.d(d,{n:()=>u});var l=n(2516),o=n(5879);let u=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[l.z]}),a})()}}]);