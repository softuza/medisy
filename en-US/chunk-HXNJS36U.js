import{a as F}from"./chunk-QMYK25XW.js";import{a as d}from"./chunk-2VTN6ZCY.js";import{a as r,d as L,e as $,g as j,j as U,k}from"./chunk-ECMDH7FD.js";import"./chunk-YGU4JTYS.js";import"./chunk-ER72QF5P.js";import"./chunk-2A5GXBDS.js";import{b as I,j as B,k as R}from"./chunk-FNEDC6UP.js";import{f as u}from"./chunk-OPUHDY2C.js";import{h as l}from"./chunk-M7TJZF7D.js";import{d as D,g as E}from"./chunk-AEJUXZCG.js";import"./chunk-LANNBXGX.js";import"./chunk-HBAIFRLQ.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-5ZGE7EDH.js";import"./chunk-VXNH5PTX.js";import{Y as p}from"./chunk-XPJ4P4RZ.js";import{c as v,e as N}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as y,ja as O,la as A}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as n,Lb as f,Mb as b,Wb as M,Xb as m,bb as c,cb as S,ea as h,ja as _,na as g,oa as T,oc as z,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var G=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.router=o,this.cstnService=_(d),this.dataSource=new L("name"),this.appBarConfig={title:p.teams},this.dataSource.columnDefs.push(r.uuid("id"),r.hyperlink("name",i=>`${i.id}`).setHeaderSortable(!0),r.number("employeesCount").setValueGetter(i=>i.employees?.length).setName(p.employees).setHeaderSortable(!1),r.number("groupsCount").setValueGetter(i=>i.groups?.length).setName(p.groups).setHeaderSortable(!1),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTeamDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(F,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openTeamDeleteComponent(e){this.dialog.open(B,{data:I.delete(this.cstnService.teams.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe($(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(S(D),S(v));},t.ɵcmp=g({type:t,selectors:[["sz-constr-construction-teams"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(b(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),m("changed",function(){return i.get();}),n(2,"button",3),m("click",function(){return i.openSaveComponent();}),n(3,"span"),M(4,0),f()()(),n(5,"sz-ui-table",4),m("update",function(){return i.get();}),f()),o&2&&(s("config",i.appBarConfig),c(),s("dataSource",i.dataSource),c(4),s("dataSource",i.dataSource));},dependencies:[O,U,j,u],encapsulation:2});let a=t;return a;})();var Se=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=T({type:t}),t.ɵinj=h({providers:[d],imports:[N.forChild([{path:"",component:G}]),E,y,A,k,R,u]});let a=t;return a;})();export{Se as TeamsModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/