import"./chunk-GM5T3TT2.js";import"./chunk-6AXRY6BP.js";import{d as A,e as o,g as _,i as D,j as E}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import"./chunk-XVW27JLP.js";import{a as u}from"./chunk-4U6IS2IO.js";import"./chunk-AW4VH2GC.js";import{d as z}from"./chunk-DORI46RQ.js";import"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import"./chunk-CWOC6VYL.js";import"./chunk-ZWU3YGKZ.js";import"./chunk-FWFWESWL.js";import{a as T}from"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as M}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{p as b,r as g,s as v}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import{Na as C}from"./chunk-TXVIAXH2.js";import{Jc as y,Kb as d,Lb as c,Mb as m,Xb as f,cb as p,ja as t,na as l,qc as h,rc as S,zb as s}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var J=(()=>{let e=class e{constructor(){this.route=t(b),this.router=t(g),this.dialog=t(z),this.locale=t(y),this.mlabService=t(u),this.analysis=this.route.snapshot.data.analysis,this.dataSource=new _(["-createdAt"]),this.appBarConfig={title:M.events,subtitle:this.analysis.code,backEnabled:!0},this.dataSource.columnDefs.push(o.uuid("id"),o.date("createdAt"),o.string("analysisEventType"))}ngOnInit(){this.get()}get(){this.mlabService.analyses.events.get(this.analysis.id,this.dataSource.getQuery()).pipe(D(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["sz-medisy-laboratory-analysis-events"]],standalone:!0,features:[h([u]),S],decls:2,vars:2,consts:[[3,"config"],["content","",3,"update","dataSource"]],template:function(i,n){i&1&&(m(0,"sz-ui-app-bar",0),d(1,"sz-ui-table",1),f("update",function(){return n.get()}),c()),i&2&&(s("config",n.appBarConfig),p(),s("dataSource",n.dataSource))},dependencies:[v,E,A,C,T],encapsulation:2});let r=e;return r})();export{J as AnalysisEventsComponent};
/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/
