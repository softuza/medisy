import{a as u}from"./chunk-LYFVV7IR.js";import"./chunk-5D4LQMJA.js";import"./chunk-KJY6KLE7.js";import"./chunk-4U6ISIDB.js";import{a,b as k,d as Y,e as w,g as P,j as U,k as V}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import{a as d}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as N,j,k as $}from"./chunk-K46Y6NGM.js";import{a as c}from"./chunk-R7EUDMGD.js";import{h as F}from"./chunk-KBWUA6E4.js";import{d as L,g as O}from"./chunk-NGJJVZ6X.js";import{t as E}from"./chunk-COX3WBO6.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as D}from"./chunk-TUR2GSJY.js";import"./chunk-Z6RT565P.js";import{t as v,u as y}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{a as z,c as R,e as A}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as T,ja as I,la as B}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as m,Lb as b,Mb as C,Wb as M,Xb as l,bb as f,cb as n,ea as _,na as h,oa as g,zb as p}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.dataSource=new Y("name"),this.appBarConfig={title:D.laboratories},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",S=>`/mlab/laboratories/${S.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),k.menu([F.edit(S=>this.openSaveComponent(S))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(j,{data:N.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(w(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(L),n(d),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),l("changed",function(){return i.get();}),m(2,"button",3),l("click",function(){return i.openSaveComponent();}),m(3,"span"),M(4,0),b()()(),m(5,"sz-ui-table",4),l("update",function(){return i.get();}),b()),o&2&&(p("config",i.appBarConfig),f(),p("dataSource",i.dataSource),f(4),p("dataSource",i.dataSource));},dependencies:[I,U,P,c],encapsulation:2});let r=t;return r;})();var Me=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=g({type:t}),t.ɵinj=_({providers:[d],imports:[v,y,A.forChild([{path:"",component:G}]),O,T,B,V,E,c,$,u]});let r=t;return r;})();export{Me as LaboratoriesModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/