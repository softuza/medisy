import{a as G}from"./chunk-TN622EVO.js";import{a as d}from"./chunk-ANBLBCIM.js";import{a,b as L,d as $,e as j,g as U,j as k,k as F}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import"./chunk-4P4RPOWU.js";import{b as I,j as B,k as R}from"./chunk-SQWEE7KP.js";import{a as u}from"./chunk-GUAFKVMJ.js";import{h as l}from"./chunk-D36EDMAQ.js";import{d as D,g as E}from"./chunk-NGJJVZ6X.js";import"./chunk-ZPSFEZWB.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as p}from"./chunk-WYY322KA.js";import"./chunk-Z6RT565P.js";import"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{c as v,e as N}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as y,ja as O,la as A}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as n,Lb as f,Mb as b,Wb as M,Xb as m,bb as c,cb as S,ea as h,ja as _,na as g,oa as T,oc as z,zb as s}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var P=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.router=o,this.cstnService=_(d),this.dataSource=new $("name"),this.appBarConfig={title:p.teams},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",i=>`${i.id}`).setHeaderSortable(!0),a.number("employeesCount").setValueGetter(i=>i.employees?.length).setName(p.employees).setHeaderSortable(!1),a.number("groupsCount").setValueGetter(i=>i.groups?.length).setName(p.groups).setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),L.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTeamDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(G,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openTeamDeleteComponent(e){this.dialog.open(B,{data:I.delete(this.cstnService.teams.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe(j(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(S(D),S(v));},t.ɵcmp=g({type:t,selectors:[["sz-constr-construction-teams"]],features:[z([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(b(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),m("changed",function(){return i.get();}),n(2,"button",3),m("click",function(){return i.openSaveComponent();}),n(3,"span"),M(4,0),f()()(),n(5,"sz-ui-table",4),m("update",function(){return i.get();}),f()),o&2&&(s("config",i.appBarConfig),c(),s("dataSource",i.dataSource),c(4),s("dataSource",i.dataSource));},dependencies:[O,k,U,u],encapsulation:2});let r=t;return r;})();var fe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=T({type:t}),t.ɵinj=h({providers:[d],imports:[N.forChild([{path:"",component:P}]),E,y,A,F,R,u]});let r=t;return r;})();export{fe as TeamsModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/