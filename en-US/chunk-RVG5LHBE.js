import{a as M}from"./chunk-66COCPSA.js";import{a as c}from"./chunk-56G2DFJZ.js";import{a as z}from"./chunk-DLP73NSJ.js";import{a as _,b as D,c as o,f as F,g as H}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as y,j as T}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import{d as v}from"./chunk-HESHWLJQ.js";import"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import"./chunk-UR5GDBT7.js";import{b as a,c as S}from"./chunk-JVOCSYLO.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as s}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as b}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as p,Kb as u,Wb as l,bb as f,ja as i,mc as g,na as h,nc as C,yb as m}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var P=(()=>{let n=class n{constructor(){this.cstnService=i(c),this.dialog=i(v),this.router=i(b),this.dataSource=new F("name"),this.appBarConfig={title:s.teams,menu:S.default([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.hyperlink("name").setClickFn(e=>this.router.navigate([z.Projects,e.id])).setHeaderSortable(!0),o.number("employeesCount").setValueGetter(e=>e.employees?.length).setHeaderName(s.employees).setHeaderSortable(!1),o.number("groupsCount").setValueGetter(e=>e.groups?.length).setHeaderName(s.groups).setHeaderSortable(!1),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.menu(S.more([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.delete(this.openTeamDeleteComponent.bind(this))]))),this.get()}openSaveComponent(e){this.dialog.open(M,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t)})}openTeamDeleteComponent(e){this.dialog.open(T,{data:y.delete(this.cstnService.teams.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h({type:n,selectors:[["sz-constr-construction-teams"]],standalone:!0,features:[g([c]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,r){t&1&&(p(0,"sz-ui-table-bar",0),l("changed",function(){return r.get()}),u(),p(1,"sz-ui-table",1),l("update",function(){return r.get()}),u()),t&2&&(m("config",r.appBarConfig)("dataSource",r.dataSource),f(),m("dataSource",r.dataSource))},dependencies:[_,D],encapsulation:2});let d=n;return d})();var q=[{path:"",component:P}];export{q as default};
/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/