import{a as u}from"./chunk-Q4JYNUYQ.js";import"./chunk-DZEKI4YQ.js";import"./chunk-7ZU2EJ5M.js";import"./chunk-AC62OA65.js";import{a,b as k,d as Y,e as w,g as P,j as U,k as V}from"./chunk-UFZOVEXN.js";import"./chunk-KG52U4YG.js";import"./chunk-BVIAW6LA.js";import{a as d}from"./chunk-UYGPYJU5.js";import"./chunk-WB6GSLJI.js";import{i as N,j,k as $}from"./chunk-ATQTF7V2.js";import{a as c}from"./chunk-XTD4P5RM.js";import{h as F}from"./chunk-SE7A63UJ.js";import{d as L,g as O}from"./chunk-KXHITGXF.js";import{x as E}from"./chunk-OTWXCUGL.js";import"./chunk-NUTQJXHI.js";import"./chunk-BVTPLI23.js";import{c as D}from"./chunk-MJ3OXUGM.js";import"./chunk-EFKI6RZJ.js";import{t as v,u as y}from"./chunk-4JGOPH4G.js";import"./chunk-UFIT6BFN.js";import{a as z,c as R,e as A}from"./chunk-MRA43Y7M.js";import"./chunk-47AE3CN4.js";import{ia as T,ja as I,la as B}from"./chunk-6PMHIRG3.js";import"./chunk-73YOCJBM.js";import{Jb as m,Kb as b,Lb as C,Vb as M,Wb as l,bb as f,cb as n,ea as _,na as h,oa as g,zb as p}from"./chunk-S5HBEIU3.js";import"./chunk-K67PUIM2.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.dataSource=new Y("name"),this.appBarConfig={title:D.laboratories},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",S=>`/mlab/laboratories/${S.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),k.menu([F.edit(S=>this.openSaveComponent(S))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(N,{data:$.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(L),n(d),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),l("changed",function(){return i.get();}),m(2,"button",3),l("click",function(){return i.openSaveComponent();}),m(3,"span"),M(4,0),b()()(),m(5,"sz-ui-table",4),l("update",function(){return i.get();}),b()),o&2&&(p("config",i.appBarConfig),f(),p("dataSource",i.dataSource),f(4),p("dataSource",i.dataSource));},dependencies:[I,U,P,c],encapsulation:2});let r=t;return r;})();var Me=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=_({providers:[d],imports:[v,y,A.forChild([{path:"",component:G}]),O,T,B,V,E,c,j,u]});let r=t;return r;})();export{Me as LaboratoriesModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/