import{a as M}from"./chunk-D2JYHEJT.js";import{a as c}from"./chunk-GK4LJXH7.js";import{a as v}from"./chunk-3B4R46GQ.js";import{a as y,b as D,c as o,f as B,g as H}from"./chunk-F37TLDOJ.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as T,j as _}from"./chunk-ZUXIOQ5W.js";import"./chunk-BJI27WIG.js";import{d as b}from"./chunk-XPOR4ANW.js";import"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import"./chunk-H2FFMEH6.js";import{b as a,c as z}from"./chunk-Y3WFFMAX.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as s}from"./chunk-TCPYXQGZ.js";import{r as C}from"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as u,Kb as l,Wb as p,bb as h,ja as i,mc as f,na as S,nc as g,yb as m}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var F=(()=>{let n=class n{constructor(){this.cstnService=i(c),this.dialog=i(b),this.router=i(C),this.dataSource=new B("name"),this.appBarConfig={title:s.teams,menu:z.default().setItems([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(o.uuid("id"),o.hyperlink("name").setClickFn(e=>this.router.navigate([v.Projects,e.id])).setHeaderSortable(!0),o.number("employeesCount").setValueGetter(e=>e.employees?.length).setHeaderName(s.employees).setHeaderSortable(!1),o.number("groupsCount").setValueGetter(e=>e.groups?.length).setHeaderName(s.groups).setHeaderSortable(!1),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1),o.menu([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.delete(this.openTeamDeleteComponent.bind(this))])),this.get()}openSaveComponent(e){this.dialog.open(M,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t)})}openTeamDeleteComponent(e){this.dialog.open(_,{data:T.delete(this.cstnService.teams.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t)})}get(){this.cstnService.teams.get(this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=S({type:n,selectors:[["sz-constr-construction-teams"]],standalone:!0,features:[f([c]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,r){t&1&&(u(0,"sz-ui-table-bar",0),p("changed",function(){return r.get()}),l(),u(1,"sz-ui-table",1),p("update",function(){return r.get()}),l()),t&2&&(m("config",r.appBarConfig)("dataSource",r.dataSource),h(),m("dataSource",r.dataSource))},dependencies:[y,D],encapsulation:2});let d=n;return d})();var q=[{path:"",component:F}];export{q as default};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
