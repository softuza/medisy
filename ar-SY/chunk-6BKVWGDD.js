import{a as k}from"./chunk-LRXAE4JT.js";import"./chunk-QETWF4JQ.js";import"./chunk-KLF2JPT6.js";import"./chunk-KSG5U4K5.js";import"./chunk-IBNNL3QX.js";import"./chunk-4VOEDM67.js";import{a as D,b as F,c as a,f as M,g as T}from"./chunk-GM5VOOAO.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as _,j as L}from"./chunk-INGRYE55.js";import{a as u}from"./chunk-XQ6KMBLS.js";import"./chunk-4Y3DXTZY.js";import{d as C}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{a as v}from"./chunk-BDHKQB6K.js";import{b as i,c as z}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as y}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{p as f,r as g}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as l,Kb as p,Wb as m,bb as b,ja as n,mc as S,na as c,nc as h,yb as d}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var A=(()=>{let o=class o{constructor(){this.dialog=n(C),this.mlabService=n(u),this.router=n(g),this.activatedRoute=n(f),this.dataSource=new M("name"),this.appBarConfig={title:y.laboratories,menu:z.default().setItems([i.add(this.openSaveComponent.bind(this)),i.menu([i.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(e=>this.router.navigate([v.Laboratories,e.id])).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([i.edit(this.openSaveComponent.bind(this)),i.delete(this.openLaboratoryDeleteComponent.bind(this))])),this.get()}openSaveComponent(e){this.dialog.open(k,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t)})}openLaboratoryDeleteComponent(e){this.dialog.open(L,{data:_.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(T(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c({type:o,selectors:[["sz-medisy-laboratory-laboratories"]],standalone:!0,features:[S([u]),h],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,r){t&1&&(l(0,"sz-ui-table-bar",0),m("changed",function(){return r.get()}),p(),l(1,"sz-ui-table",1),m("update",function(){return r.get()}),p()),t&2&&(d("config",r.appBarConfig)("dataSource",r.dataSource),b(),d("dataSource",r.dataSource))},dependencies:[D,F],encapsulation:2});let s=o;return s})();var K=[{path:"",component:A}];export{K as default};
/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/