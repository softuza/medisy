"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[662],{5662:(g,d,n)=>{n.r(d),n.d(d,{DashboardModule:()=>z});var l=n(6814),o=n(5195),m=n(617),r=n(2595),h=n(2169),c=n(5041),u=n(8109),i=n(5738),p=n(3753),e=n(5879),S=n(2516),v=n(8145),f=n(5850);function C(t,a){if(1&t&&(e.TgZ(0,"sz-ui-card",4),e._UZ(1,"sz-ui-counter",5),e.qZA()),2&t){const s=a.$implicit;e.Q6J("card",s),e.xp6(1),e.Q6J("value",null==s?null:s.counter)}}const M=[{path:"",component:(()=>{class t{constructor(s,D,y){this.analysisService=s,this.sampleService=D,this.router=y,this.items=[{counter:0,url:"/mlab/analyses",icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",loading:!0,actions:[{title:"\u062C\u062F\u064A\u062F",url:"/mlab/analyses/create"}]}],this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount().subscribe(s=>{this.items[0].counter=s.count,this.items[0].loading=!1})}getSamplesCount(){this.sampleService.getSamplesCount({}).subscribe(s=>{this.items[1].counter=s.count,this.items[1].loading=!1})}navigate(s){s&&s.url&&this.router.navigate([s.url])}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(i.K),e.Y36(p.F),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["medisy-dashboard"]],features:[e._Bn([i.K,p.F])],decls:5,vars:1,consts:function(){let a;return a="\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",[["start","",1,"sz-h5"],a,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(s,D){1&s&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"div",2),e.YNc(4,C,2,2,"sz-ui-card",3),e.qZA()),2&s&&(e.xp6(4),e.Q6J("ngForOf",D.items))},dependencies:[l.sg,S.z,v.R,f.X],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(M),u.Bz]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,A,o.QW,m.Ps,c.n,h.c,r.V]}),t})()},2516:(g,d,n)=>{n.d(d,{z:()=>h});var l=n(6814),o=n(5879);const m=[[["","start",""]],[["","end",""]]],r=["[start]","[end]"];let h=(()=>{class c{constructor(){this.cls="sz-header-basic"}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["sz-ui-header-basic"]],inputs:{cls:"cls"},standalone:!0,features:[o.jDz],ngContentSelectors:r,decls:4,vars:1,consts:[[1,"container",3,"ngClass"],[1,"spacer"]],template:function(i,p){1&i&&(o.F$t(m),o.TgZ(0,"div",0),o.Hsn(1),o._UZ(2,"span",1),o.Hsn(3,1),o.qZA()),2&i&&o.Q6J("ngClass",p.cls)},dependencies:[l.ez,l.mk],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]}),c})()},5041:(g,d,n)=>{n.d(d,{n:()=>m});var l=n(2516),o=n(5879);let m=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[l.z]}),r})()}}]);