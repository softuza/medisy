"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[22],{8022:(Z,c,a)=>{a.r(c),a.d(c,{DashboardModule:()=>F});var m=a(9808),i=a(5467),d=a(9039),h=a(101),e=a(5e3),l=a(7093);const g=["*"];let v=(()=>{class n{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.timer=null,this.oldValue=0}set value(t){!t||(this.animate(this.oldValue,t),this.oldValue=t)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(t,s){const r=s-t;let u=Math.abs(Math.floor(this.duration/r));u=Math.max(u,50);const R=(new Date).getTime()+this.duration,p=()=>{const $=(new Date).getTime(),B=Math.max((R-$)/this.duration,0),f=Math.round(s-B*r);this.currentValue=f,Math.round(f)===Math.round(s)&&clearInterval(this.timer)};this.timer=setInterval(p,u),p()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-counter"]],inputs:{value:"value"},ngContentSelectors:g,decls:3,vars:1,template:function(t,s){1&t&&(e.F$t(),e.TgZ(0,"span"),e._uU(1),e.Hsn(2),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",s.currentValue," "))},encapsulation:2}),n})();var C=a(4823);function D(n,o){if(1&n&&(e.TgZ(0,"app-card",5),e._UZ(1,"app-counter",6),e.qZA()),2&n){const t=o.$implicit;e.Q6J("card",t),e.xp6(1),e.Q6J("value",null==t?null:t.counter)}}const y=[{path:"",component:(()=>{class n{constructor(t,s,r){this.analysisService=t,this.sampleService=s,this.router=r,this.items=[{counter:0,url:"/analysis-management/analyses",icon:"science",subtitle:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",loading:!0,actions:[{title:"\u062C\u062F\u064A\u062F",url:"/analysis-management/analyses/create"}]},{counter:0,url:"/sample-management/samples",icon:{class:"fas fa-vials"},subtitle:"\u0639\u064A\u0646\u0627\u062A",loading:!0}],this.getAnlysesCount(),this.getSamplesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({}).subscribe(t=>{this.items[0].counter=t.count,this.items[0].loading=!1})}getSamplesCount(){this.sampleService.getSamplesCount({}).subscribe(t=>{this.items[1].counter=t.count,this.items[1].loading=!1})}navigate(t){t&&t.url&&this.router.navigate([t.url])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.K),e.Y36(h.F),e.Y36(i.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],features:[e._Bn([d.K,h.F])],decls:6,vars:1,consts:function(){let o;return o="\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",[[1,"header-main"],[1,"title"],o,["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","16px"],["fxFlex","100",3,"card",4,"ngFor","ngForOf"],["fxFlex","100",3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(t,s){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,D,2,2,"app-card",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",s.items))},dependencies:[m.sg,l.xw,l.SQ,l.yH,v,C.A],encapsulation:2}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.Bz.forChild(y),i.Bz]}),n})();var A=a(9224),M=a(5245),T=a(9764),x=a(6625),b=a(3983);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,S,A.QW,M.Ps,T.o9,x.k,b.d]}),n})()}}]);