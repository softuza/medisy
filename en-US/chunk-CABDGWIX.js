import{a as u}from"./chunk-FRBZBBNV.js";import"./chunk-R2H6M7M7.js";import"./chunk-WXUM2H7T.js";import"./chunk-GXKPTGBS.js";import{a,b as Y,d as w,f as P,i as U,j as V}from"./chunk-FBVE3FIH.js";import"./chunk-XYEFIB75.js";import"./chunk-HKZXWKQN.js";import"./chunk-EWRIL5TF.js";import{a as d}from"./chunk-TPAQ3FM3.js";import{i as j,j as $,k}from"./chunk-SB426TL2.js";import"./chunk-PP3NP7HU.js";import{a as c}from"./chunk-W3O4IPE3.js";import{h as N}from"./chunk-EKINQSBT.js";import{d as L,g as O}from"./chunk-6O2ERFHS.js";import"./chunk-KL5EJB5K.js";import{t as F}from"./chunk-6LY23KCH.js";import{c as D}from"./chunk-26Z5FPBL.js";import"./chunk-FIREYTYE.js";import"./chunk-CTLHETRS.js";import{c as B}from"./chunk-Y57UOOVT.js";import"./chunk-LCPKSQJI.js";import"./chunk-RGJQRW2Q.js";import{s as v,t as y}from"./chunk-VOPXBGHU.js";import"./chunk-RJITGV4Q.js";import{a as z,c as R,e as A}from"./chunk-NBJEKYXR.js";import"./chunk-JAIDXHYY.js";import{ha as T,ia as E,ka as I}from"./chunk-VXXQSTLE.js";import"./chunk-WHAEY7W6.js";import{Ib as m,Jb as b,Kb as C,Ub as g,Vb as p,ab as f,bb as n,ea as _,na as h,oa as M,yb as l}from"./chunk-WEQMZHJB.js";import"./chunk-ZSRQUDS2.js";var G=(()=>{let t=class t{constructor(e,o,i,s){this.dialog=e,this.mlabService=o,this.router=i,this.activatedRoute=s,this.title=B.laboratories,this.dataSource=new w("name"),this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",S=>`/mlab/laboratories/${S.id}`).setStacked(a.string("description").setValueClassFontSmall()),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),Y.menu([N.edit(S=>this.openSaveComponent(S))])),this.get();}openSaveComponent(e){this.dialog.open(u,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openLaboratoryDeleteComponent(e){this.dialog.open(j,{data:k.delete(this.mlabService.laboratories.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.mlabService.laboratories.get(this.dataSource.getQuery()).pipe(D(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(n(L),n(d),n(R),n(z));},t.ɵcmp=h({type:t,selectors:[["sz-medisy-laboratory-laboratories"]],decls:6,vars:4,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(o,i){o&1&&(C(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),p("changed",function(){return i.get();}),m(2,"button",3),p("click",function(){return i.openSaveComponent();}),m(3,"span"),g(4,0),b()()(),m(5,"sz-ui-table",4),p("update",function(){return i.get();}),b()),o&2&&(l("title",i.title),f(),l("dataSource",i.dataSource),f(4),l("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[E,U,P,c],encapsulation:2});let r=t;return r;})();var ve=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=_({providers:[d],imports:[v,y,A.forChild([{path:"",component:G}]),O,T,I,V,F,c,$,u]});let r=t;return r;})();export{ve as LaboratoriesModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/