"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[38],{8038:(C,l,e)=>{e.r(l),e.d(l,{DashboardModule:()=>A});var r=e(6895),n=e(4512),u=e(9739),c=e(1276),t=e(4650),d=e(1219),m=e(4028);function g(o,a){if(1&o&&(t.TgZ(0,"softuza-ui-card",5),t._UZ(1,"softuza-ui-counter",6),t.qZA()),2&o){const s=a.$implicit;t.Q6J("card",s),t.xp6(1),t.Q6J("value",null==s?null:s.counter)}}const h=[{path:"",component:(()=>{class o{constructor(s,i,y){this.analysisService=s,this.sampleService=i,this.router=y,this.items=[{counter:0,url:"/analysis-management/analyses",icon:"science",subtitle:"Analyses",loading:!0,actions:[{title:"New",url:"/analysis-management/analyses/create"}]},{counter:0,url:"/sample-management/samples",icon:{class:"fas fa-vials"},subtitle:"Samples",loading:!0}],this.getAnlysesCount(),this.getSamplesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({}).subscribe(s=>{this.items[0].counter=s.count,this.items[0].loading=!1})}getSamplesCount(){this.sampleService.getSamplesCount({}).subscribe(s=>{this.items[1].counter=s.count,this.items[1].loading=!1})}navigate(s){s&&s.url&&this.router.navigate([s.url])}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(u.K),t.Y36(c.F),t.Y36(n.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["softuza-medisy-dashboard"]],features:[t._Bn([u.K,c.F])],decls:6,vars:1,consts:function(){let a;return a="Dashboard",[[1,"header-main"],[1,"title"],a,[1,"tw-grid","lg:tw-grid-cols-4","tw-grid-rows-1","tw-gap-4"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(s,i){1&s&&(t.TgZ(0,"div")(1,"div",0)(2,"span",1),t.SDv(3,2),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,g,2,2,"softuza-ui-card",4),t.qZA()()),2&s&&(t.xp6(5),t.Q6J("ngForOf",i.items))},dependencies:[r.sg,d.R,m.A],encapsulation:2}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.Bz.forChild(h),n.Bz]}),o})();var p=e(3546),D=e(7392),v=e(7966),S=e(2597);let A=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,f,p.QW,D.Ps,S.k,v.d]}),o})()}}]);