"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[22],{8022:(Z,u,o)=>{o.r(u),o.d(u,{DashboardModule:()=>b});var c=o(9808),r=o(5467),d=o(9039),n=o(5e3),i=o(7093);const f=["*"];let g=(()=>{class e{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.timer=null,this.oldValue=0}set value(t){!t||(this.animate(this.oldValue,t),this.oldValue=t)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(t,s){const m=s-t;let l=Math.abs(Math.floor(this.duration/m));l=Math.max(l,50);const F=(new Date).getTime()+this.duration,h=()=>{const R=(new Date).getTime(),B=Math.max((F-R)/this.duration,0),p=Math.round(s-B*m);this.currentValue=p,Math.round(p)===Math.round(s)&&clearInterval(this.timer)};this.timer=setInterval(h,l),h()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-counter"]],inputs:{value:"value"},ngContentSelectors:f,decls:3,vars:1,template:function(t,s){1&t&&(n.F$t(),n.TgZ(0,"span"),n._uU(1),n.Hsn(2),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",s.currentValue," "))},encapsulation:2}),e})();var v=o(4823);function D(e,a){if(1&e&&(n.TgZ(0,"app-card",5),n._UZ(1,"app-counter",6),n.qZA()),2&e){const t=a.$implicit;n.Q6J("card",t),n.xp6(1),n.Q6J("value",null==t?null:t.counter)}}const C=[{path:"",component:(()=>{class e{constructor(t,s){this.analysisService=t,this.router=s,this.items=[{counter:0,url:"/analysis-management/analyses",icon:"science",subtitle:"\u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644",loading:!0},{counter:0,url:"/sample-management/samples",icon:{class:"fas fa-vials"},subtitle:"\u0627\u0644\u0639\u064a\u0646\u0627\u062a"}],this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({}).subscribe(t=>{this.items[0].counter=t.count,this.items[0].loading=!1})}navigate(t){t&&t.url&&this.router.navigate([t.url])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.K),n.Y36(r.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-dashboard"]],features:[n._Bn([d.K])],decls:6,vars:1,consts:function(){let a;return a="\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",[[1,"header-main"],[1,"title"],a,["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","16px"],["fxFlex","100",3,"card",4,"ngFor","ngForOf"],["fxFlex","100",3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(t,s){1&t&&(n.TgZ(0,"div")(1,"div",0)(2,"span",1),n.SDv(3,2),n.qZA()(),n.TgZ(4,"div",3),n.YNc(5,D,2,2,"app-card",4),n.qZA()()),2&t&&(n.xp6(5),n.Q6J("ngForOf",s.items))},dependencies:[c.sg,i.xw,i.SQ,i.yH,g,v.A],encapsulation:2}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[r.Bz.forChild(C),r.Bz]}),e})();var M=o(9224),A=o(5245),T=o(9764),S=o(6625),x=o(3983);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[],imports:[c.ez,y,M.QW,A.Ps,T.o9,S.k,x.d]}),e})()}}]);