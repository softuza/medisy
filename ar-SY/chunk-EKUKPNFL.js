import{a as G}from"./chunk-PTDWUIZT.js";import{a as l}from"./chunk-W3FPSF3O.js";import{a,b as L,d as $,e as j,g as F,j as U,k}from"./chunk-RC4NVD73.js";import"./chunk-7CZWRR2T.js";import"./chunk-DLB4ZJGU.js";import"./chunk-YQMAQTBA.js";import{i as I,j as R,k as B}from"./chunk-AKDPENJM.js";import{a as u}from"./chunk-BC7DYV2K.js";import{h as f}from"./chunk-JBUG7NFA.js";import{d as D,g as E}from"./chunk-7THGKJI5.js";import"./chunk-OJ6T2UWM.js";import"./chunk-GNVHXVX2.js";import"./chunk-Q5KZECGG.js";import{c as p}from"./chunk-C6CCG6BQ.js";import"./chunk-3H4GFC5C.js";import"./chunk-5GTA5B7Y.js";import"./chunk-FOLKFRV4.js";import{c as v,e as y}from"./chunk-77AMUORV.js";import"./chunk-6QVS4ASI.js";import{ia as N,ja as O,la as A}from"./chunk-KPEIRPFT.js";import"./chunk-ACPIYRBG.js";import{Jb as n,Kb as S,Lb as M,Vb as b,Wb as m,bb as d,cb as c,ea as _,ja as g,na as h,nc as z,oa as T,zb as s}from"./chunk-D2V4YQ64.js";import"./chunk-X4FHBMAQ.js";var P=(()=>{let o=class o{constructor(t,i){this.dialog=t,this.router=i,this.cstnService=g(l),this.dataSource=new $("name"),this.appBarConfig={title:p.teams},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",e=>`${e.id}`).setHeaderSortable(!0),a.number("employeesCount").setValueGetter(e=>e.employees?.length).setName(p.employees).setHeaderSortable(!1),a.number("groupsCount").setValueGetter(e=>e.groups?.length).setName(p.groups).setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),L.menu([f.edit(e=>this.openSaveComponent(e)),f.delete(e=>this.openTeamDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(G,{data:t}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTeamDeleteComponent(t){this.dialog.open(I,{data:B.delete(this.cstnService.teams.delete(t.id),t)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe(j(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(i){return new(i||o)(c(D),c(v));},o.ɵcmp=h({type:o,selectors:[["sz-constr-construction-teams"]],features:[z([])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(i,e){i&1&&(M(0,"sz-ui-app-bar",1),n(1,"sz-ui-table-search-filter",2),m("changed",function(){return e.get();}),n(2,"button",3),m("click",function(){return e.openSaveComponent();}),n(3,"span"),b(4,0),S()()(),n(5,"sz-ui-table",4),m("update",function(){return e.get();}),S()),i&2&&(s("config",e.appBarConfig),d(),s("dataSource",e.dataSource),d(4),s("dataSource",e.dataSource));},dependencies:[O,U,F,u],encapsulation:2});let r=o;return r;})();var fe=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=T({type:o}),o.ɵinj=_({providers:[l],imports:[y.forChild([{path:"",component:P}]),E,N,A,k,R,u]});let r=o;return r;})();export{fe as TeamsModule};/**i18n:9149e2db890ef5b3eae9bf80dd164277eac0436f561e848a63fe9f462929c08f*/