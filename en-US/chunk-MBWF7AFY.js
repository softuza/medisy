import{a as u}from"./chunk-S4EBWY56.js";import"./chunk-WBEDTO3H.js";import"./chunk-JYUFJ57T.js";import"./chunk-W7X77SM5.js";import{a,b as Y,d as w,f as P,i as U,j as V}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import{a as d}from"./chunk-E4K3ZOYS.js";import"./chunk-J3ZGTMT7.js";import{i as j,j as $,k}from"./chunk-I247VJZ7.js";import"./chunk-5XS2JNPH.js";import{a as c}from"./chunk-3TCVELMY.js";import{h as N}from"./chunk-VN32AWOL.js";import{d as L,g as O}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{j as E,y as F}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as B}from"./chunk-NXGV7MLA.js";import"./chunk-4MKCL2OB.js";import{s as v,t as y}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{a as z,c as R,e as A}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as T,ia as I,ka as D}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as m,Jb as b,Kb as C,Ub as g,Vb as p,ab as f,bb as n,ea as _,na as h,oa as M,yb as l}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.title=B.laboratories,this.dataSource=new w("name"),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",S=>`/mlab/laboratories/${S.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),Y.menu([N.edit(S=>this.openSaveComponent(S))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(j,{data:k.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(E(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(L),n(d),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),p("changed",function(){return i.get();}),m(2,"button",3),p("click",function(){return i.openSaveComponent();}),m(3,"span"),g(4,0),b()()(),m(5,"sz-ui-table",4),p("update",function(){return i.get();}),b()),o&2&&(l("title",i.title),f(),l("dataSource",i.dataSource),f(4),l("dataSource",i.dataSource));},dependencies:[I,U,P,c],encapsulation:2});let r=t;return r;})();var ve=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=_({providers:[d],imports:[v,y,A.forChild([{path:"",component:G}]),O,T,D,V,F,c,$,u]});let r=t;return r;})();export{ve as LaboratoriesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/