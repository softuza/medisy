import{a as u}from"./chunk-IWDPXEAH.js";import"./chunk-KQNVFDOS.js";import"./chunk-ISBXWYR4.js";import"./chunk-I7UQCMDJ.js";import{a,b as k,d as Y,e as w,g as P,j as U,k as V}from"./chunk-5PCBRLS6.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import{a as d}from"./chunk-BC6TH3PO.js";import"./chunk-UYYWHWBI.js";import{i as N,j,k as $}from"./chunk-5NWVIDQT.js";import{a as c}from"./chunk-NXQ5VREG.js";import{h as F}from"./chunk-HWSLRHWT.js";import{d as L,g as O}from"./chunk-Z2LVGH3F.js";import{v as E}from"./chunk-ZW4ISBNU.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as D}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import{t as v,u as y}from"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{a as z,c as R,e as A}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ia as T,ja as I,la as B}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as m,Kb as b,Lb as C,Vb as M,Wb as l,bb as f,cb as n,ea as _,na as h,oa as g,zb as p}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.dataSource=new Y("name"),this.appBarConfig={title:D.laboratories},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",S=>`/mlab/laboratories/${S.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),k.menu([F.edit(S=>this.openSaveComponent(S))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(N,{data:$.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(L),n(d),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),l("changed",function(){return i.get();}),m(2,"button",3),l("click",function(){return i.openSaveComponent();}),m(3,"span"),M(4,0),b()()(),m(5,"sz-ui-table",4),l("update",function(){return i.get();}),b()),o&2&&(p("config",i.appBarConfig),f(),p("dataSource",i.dataSource),f(4),p("dataSource",i.dataSource));},dependencies:[I,U,P,c],encapsulation:2});let r=t;return r;})();var Me=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=_({providers:[d],imports:[v,y,A.forChild([{path:"",component:G}]),O,T,B,V,E,c,j,u]});let r=t;return r;})();export{Me as LaboratoriesModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/