import{a as F,b as P,c as e,f as A,g as B}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as v}from"./chunk-EVGZQJKI.js";import{a as M}from"./chunk-AXNKT4TF.js";import"./chunk-INGRYE55.js";import{a as p}from"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import"./chunk-UE6VBMXE.js";import{d as _}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{a as c}from"./chunk-BDHKQB6K.js";import{b as n,c as f}from"./chunk-JVOCSYLO.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as z}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as b,r as y}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as l,Kb as u,Wb as m,bb as h,ja as s,mc as C,na as g,nc as S,yb as d}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var O=(()=>{let a=class a{constructor(){this.dialog=s(_),this.mlabService=s(p),this.route=s(b),this.router=s(y),this.dataSource=new A("-createdAt"),this.appBarConfig={title:z.analyses,menu:f.default([n.add(()=>{this.router.navigate([c.AnalysisCreate])}),n.menu([n.search(),n.filter().setBadge(()=>this.dataSource.filtrationCount())])])};let t=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(t&&t.filter),this.dataSource.columnDefs.push(e.uuid("id"),e.uuid("laboratoryId"),e.uuid("personId"),e.number("code").setClickFn(o=>this.router.navigate([c.Analyses,o.id])).setValueClassFontBold().setStacked(e.string("laboratory.name").setValueClassFontSmall()),e.date("createdAt"),e.date("updatedAt").setVisible(!1),e.menu(f.more([n.barcode(this.openBarcodeWriterComponent.bind(this))]))),this.get()}openBarcodeWriterComponent(t){this.dialog.open(v,{data:{format:M.QR_CODE,msg:`analysisid.${t.id}`}}).afterClosed().subscribe({})}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(B(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=g({type:a,selectors:[["sz-medisy-laboratory-analyses"]],standalone:!0,features:[C([p]),S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(l(0,"sz-ui-table-bar",0),m("changed",function(){return i.get()}),u(),l(1,"sz-ui-table",1),m("update",function(){return i.get()}),u()),o&2&&(d("config",i.appBarConfig)("dataSource",i.dataSource),h(),d("dataSource",i.dataSource))},dependencies:[F,P],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=a;return r})();var q=[{path:"",component:O},{path:"create",loadComponent:()=>import("./chunk-7BVNIPFH.js").then(r=>r.CreateComponent)}];export{q as default};
/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/