import{a as k}from"./chunk-QITAZ6NS.js";import"./chunk-RFWALLJC.js";import"./chunk-JJ24IJYG.js";import"./chunk-2JVWZG62.js";import"./chunk-H4K2CSXH.js";import"./chunk-GJE2PQG7.js";import{a as D,b as F,c as a,f as M,g as T}from"./chunk-QSKC3G63.js";import"./chunk-2KPNCTCB.js";import"./chunk-S7INMPNY.js";import"./chunk-25IBV356.js";import{b as _,j as L}from"./chunk-SQCF3S47.js";import{a as u}from"./chunk-74BP7MNC.js";import"./chunk-RSYANUDV.js";import{d as C}from"./chunk-FRBT2WCB.js";import"./chunk-ZTT2CFXD.js";import"./chunk-HLTWUKSH.js";import"./chunk-276RQCOC.js";import"./chunk-2IPEL4E4.js";import"./chunk-FY76SKRQ.js";import{a as v}from"./chunk-ZBDJ3JDC.js";import{b as i,c as z}from"./chunk-IDQKS733.js";import"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import{a as y}from"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import{p as f,r as g}from"./chunk-4I74CWZL.js";import"./chunk-LLSKOB3G.js";import"./chunk-OWRQBV6B.js";import"./chunk-3AQJ5CSK.js";import{Jb as l,Kb as p,Wb as m,bb as b,ja as n,mc as S,na as c,nc as h,yb as d}from"./chunk-YAUSGWXJ.js";import"./chunk-QXHRBTK3.js";var A=(()=>{let o=class o{constructor(){this.dialog=n(C),this.mlabService=n(u),this.router=n(g),this.activatedRoute=n(f),this.dataSource=new M("name"),this.appBarConfig={title:y.laboratories,menu:z.default().setItems([i.add(this.openSaveComponent.bind(this)),i.menu([i.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(e=>this.router.navigate([v.Laboratories,e.id])).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([i.edit(this.openSaveComponent.bind(this)),i.delete(this.openLaboratoryDeleteComponent.bind(this))])),this.get()}openSaveComponent(e){this.dialog.open(k,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t)})}openLaboratoryDeleteComponent(e){this.dialog.open(L,{data:_.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(T(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c({type:o,selectors:[["sz-medisy-laboratory-laboratories"]],standalone:!0,features:[S([u]),h],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,r){t&1&&(l(0,"sz-ui-table-bar",0),m("changed",function(){return r.get()}),p(),l(1,"sz-ui-table",1),m("update",function(){return r.get()}),p()),t&2&&(d("config",r.appBarConfig)("dataSource",r.dataSource),b(),d("dataSource",r.dataSource))},dependencies:[D,F],encapsulation:2});let s=o;return s})();var K=[{path:"",component:A}];export{K as default};
/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/