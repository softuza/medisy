import{c as F,d as P,e,h as A,i as B}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{b as v}from"./chunk-X4UOTOJZ.js";import{a as M}from"./chunk-4DRVOOC4.js";import"./chunk-XVW27JLP.js";import{a as p}from"./chunk-4U6IS2IO.js";import"./chunk-AW4VH2GC.js";import"./chunk-OOEXEJ4R.js";import{d as _}from"./chunk-DORI46RQ.js";import"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import"./chunk-CWOC6VYL.js";import"./chunk-ZWU3YGKZ.js";import{a as c}from"./chunk-NPTMGQJC.js";import{b as n,c as f}from"./chunk-FWFWESWL.js";import"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as z}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{p as b,r as y}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import"./chunk-TXVIAXH2.js";import{Kb as l,Lb as u,Xb as m,cb as h,ja as s,na as g,qc as C,rc as S,zb as d}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var O=(()=>{let a=class a{constructor(){this.dialog=s(_),this.mlabService=s(p),this.route=s(b),this.router=s(y),this.dataSource=new A("-createdAt"),this.appBarConfig={title:z.analyses,menu:f.default([n.add(()=>{this.router.navigate([c.AnalysisCreate])}),n.menu([n.search(),n.filter().setBadge(()=>this.dataSource.filtrationCount())])])};let t=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(t&&t.filter),this.dataSource.columnDefs.push(e.uuid("id"),e.uuid("laboratoryId"),e.uuid("personId"),e.number("code").setClickFn(o=>this.router.navigate([c.Analyses,o.id])).setValueClassFontBold().setStacked(e.string("laboratory.name").setValueClassFontSmall()),e.date("createdAt"),e.date("updatedAt").setVisible(!1),e.menu(f.more([n.barcode(this.openBarcodeWriterComponent.bind(this))]))),this.get()}openBarcodeWriterComponent(t){this.dialog.open(v,{data:{format:M.QR_CODE,msg:`analysisid.${t.id}`}}).afterClosed().subscribe({})}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(B(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=g({type:a,selectors:[["sz-medisy-laboratory-analyses"]],standalone:!0,features:[C([p]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(l(0,"sz-ui-table-bar",0),m("changed",function(){return i.get()}),u(),l(1,"sz-ui-table",1),m("update",function(){return i.get()}),u()),o&2&&(d("config",i.appBarConfig)("dataSource",i.dataSource),h(),d("dataSource",i.dataSource))},dependencies:[F,P],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=a;return r})();var q=[{path:"",component:O},{path:"create",loadComponent:()=>import("./chunk-VKXCEOUS.js").then(r=>r.CreateComponent)}];export{q as default};
/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/
