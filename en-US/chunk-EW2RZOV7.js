import{a as M}from"./chunk-T743L5P7.js";import{a as c}from"./chunk-K2OVNSCM.js";import{a as v}from"./chunk-EY63G5JF.js";import{a as _,b as D,c as o,f as F,g as H}from"./chunk-HRKGCJ5J.js";import"./chunk-K2S4YDTN.js";import"./chunk-Y6HRGFPG.js";import"./chunk-SMSWA6Y3.js";import{b as y,j as T}from"./chunk-7LIKFQRF.js";import"./chunk-D6HKAENE.js";import{d as b}from"./chunk-LY65NDSL.js";import"./chunk-ZMSXH5RZ.js";import"./chunk-G2YTV5YP.js";import"./chunk-WX4XW32G.js";import"./chunk-M4AIK4I3.js";import"./chunk-74QTK57S.js";import{b as a,c as z}from"./chunk-77BL6AJT.js";import"./chunk-N3OI26PY.js";import"./chunk-SHFMPPN3.js";import"./chunk-N4UNFT77.js";import{a as s}from"./chunk-XYHX3JVK.js";import"./chunk-WOGJSFX2.js";import{r as C}from"./chunk-7OTI4YDK.js";import"./chunk-2RLRAFKW.js";import"./chunk-GM25OYN2.js";import"./chunk-27OSCRM5.js";import{Jb as p,Kb as u,Wb as l,bb as h,ja as i,mc as f,na as S,nc as g,yb as m}from"./chunk-GVVLUNO3.js";import"./chunk-VARUJZUG.js";var P=(()=>{let n=class n{constructor(){this.cstnService=i(c),this.dialog=i(b),this.router=i(C),this.dataSource=new F("name"),this.appBarConfig={title:s.teams,menu:z.default().setItems([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.hyperlink("name").setClickFn(e=>this.router.navigate([v.Projects,e.id])).setHeaderSortable(!0),o.number("employeesCount").setValueGetter(e=>e.employees?.length).setHeaderName(s.employees).setHeaderSortable(!1),o.number("groupsCount").setValueGetter(e=>e.groups?.length).setHeaderName(s.groups).setHeaderSortable(!1),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.menu([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.delete(this.openTeamDeleteComponent.bind(this))])),this.get()}openSaveComponent(e){this.dialog.open(M,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t)})}openTeamDeleteComponent(e){this.dialog.open(T,{data:y.delete(this.cstnService.teams.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=S({type:n,selectors:[["sz-constr-construction-teams"]],standalone:!0,features:[f([c]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,r){t&1&&(p(0,"sz-ui-table-bar",0),l("changed",function(){return r.get()}),u(),p(1,"sz-ui-table",1),l("update",function(){return r.get()}),u()),t&2&&(m("config",r.appBarConfig)("dataSource",r.dataSource),h(),m("dataSource",r.dataSource))},dependencies:[_,D],encapsulation:2});let d=n;return d})();var q=[{path:"",component:P}];export{q as default};
/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/