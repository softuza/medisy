"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[746],{6276:(D,l,s)=>{s.r(l),s.d(l,{DashboardModule:()=>M});var i=s(6814),n=s(617),u=s(8109),a=s(1462),f=s(5041),o=s(5738),v=s(5048),m=s(9598),r=s(7398),e=s(5879),S=s(2516),p=s(6128);function h(t,d){1&t&&e._UZ(0,"sz-ui-card",4),2&t&&e.Q6J("card",d.$implicit)}const C=[{path:"",component:(()=>{class t{constructor(c,g,z){this.analysisService=c,this.specimenService=g,this.router=z,this.tiles=[{icon:"science",subtitle:"Analyses",type:a.k.Counter,task$:this.analysisService.getAnalyses(m.J.count()).pipe((0,r.U)(A=>A.count)),clickFn:()=>this.navigate("/mlab/analyses"),actions:[{title:"New",clickFn:()=>this.navigate("/mlab/analyses/create")}]}]}navigate(c){this.router.navigate([c])}}return t.\u0275fac=function(c){return new(c||t)(e.Y36(o.K),e.Y36(v.E),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["medisy-dashboard"]],features:[e._Bn([o.K,v.E])],decls:5,vars:1,consts:function(){let d;return d="Dashboard",[["start","",1,"sz-h5"],d,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"]]},template:function(c,g){1&c&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,h,1,1,"sz-ui-card",3),e.qZA()),2&c&&(e.xp6(4),e.Q6J("ngForOf",g.tiles))},dependencies:[i.sg,S.z,p.X],encapsulation:2}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,u.Bz.forChild(C),n.Ps,f.n,a.V]}),t})()},2516:(D,l,s)=>{s.d(l,{z:()=>f});var i=s(6814),n=s(5879);const u=[[["","start",""]],[["","end",""]]],a=["[start]","[end]"];let f=(()=>{class o{constructor(){this.cls="sz-header-basic"}}return o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["sz-ui-header-basic"]],inputs:{cls:"cls"},standalone:!0,features:[n.jDz],ngContentSelectors:a,decls:4,vars:1,consts:[[1,"container",3,"ngClass"],[1,"spacer"]],template:function(m,r){1&m&&(n.F$t(u),n.TgZ(0,"div",0),n.Hsn(1),n._UZ(2,"span",1),n.Hsn(3,1),n.qZA()),2&m&&n.Q6J("ngClass",r.cls)},dependencies:[i.ez,i.mk],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]}),o})()},5041:(D,l,s)=>{s.d(l,{n:()=>u});var i=s(2516),n=s(5879);let u=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[i.z]}),a})()},8721:(D,l,s)=>{s.d(l,{S3:()=>m,sU:()=>v});var i=s(758),n=s(4911),u=s(4716),a=s(6306),f=s(8504);const o=r=>e=>(0,n.P)(()=>(r(),e)),v=r=>e=>e.pipe(o(()=>r.set(!0)),(0,u.x)(()=>r.set(!1))),m=(r,e=void 0)=>S=>S.pipe(o(()=>{r&&r.set(void 0)}),(0,a.K)(p=>{let h="";return p.error instanceof ErrorEvent?h=p.error.message:p&&(h=p.error?p.error.message:p.statusText),r&&r.set({message:e||h,type:i.NK.Error}),(0,f._)(()=>h)}))}}]);