import{a as B}from"./chunk-Y4YVIANV.js";import{a as V}from"./chunk-G5IRNGTL.js";import{a as m}from"./chunk-TOACHO3U.js";import{a as n,d as F,e as R,f as k,i as w,j as A}from"./chunk-Z6PUY476.js";import"./chunk-QV2ZQHMC.js";import"./chunk-IABH27XU.js";import"./chunk-O2HTTUKG.js";import{b as T,j}from"./chunk-M637VPZN.js";import{a as I}from"./chunk-T2EQVSUG.js";import{j as r,k as _}from"./chunk-VK4CZRIZ.js";import{d as M,g as D}from"./chunk-LXPLDGFP.js";import"./chunk-QEZI75P7.js";import"./chunk-X34YPVYV.js";import"./chunk-TCCIVYCZ.js";import"./chunk-7WCYUC4Z.js";import"./chunk-PQYDHBBD.js";import"./chunk-JN2TNDGG.js";import"./chunk-BHO3RGW2.js";import{Y as y}from"./chunk-TGOP7ZDO.js";import{c as b,d as v}from"./chunk-BMCN66UE.js";import"./chunk-6RTBVNC4.js";import{ia as z,la as N}from"./chunk-O5CF5VDW.js";import"./chunk-X5L7PWWN.js";import{Jb as c,Kb as u,Wb as f,ab as g,bb as s,ea as l,mc as C,na as S,oa as h,yb as p}from"./chunk-2TFHNGIL.js";import"./chunk-IL567IQQ.js";var E=(()=>{let t=class t{constructor(e,i,a){this.dialog=e,this.sntiService=i,this.router=a,this.dataSource=new F,this.appBarConfig={title:y.notifications,menu:_.default().setItems([r.add(this.openSaveComponent.bind(this)),r.menu([r.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.hyperlink("name").setClickFn(d=>this.router.navigate([B.Notifications,d.id])).setStacked(n.string("description").setValueClassFontSmall()),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([r.edit(this.openSaveComponent.bind(this)),r.divider(),r.delete(this.openNotificationDeleteComponent.bind(this))])),this.get()}openSaveComponent(e){this.dialog.open(V,{data:e}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i)})}openNotificationDeleteComponent(e){this.dialog.open(j,{data:T.delete(this.sntiService.notifications.delete(e.id),e)}).afterClosed().subscribe(i=>{this.dataSource.delete(i)})}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(R(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};t.\u0275fac=function(i){return new(i||t)(s(M),s(m),s(b))},t.\u0275cmp=S({type:t,selectors:[["sz-mgmt-notification-notifications"]],features:[C([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,a){i&1&&(c(0,"sz-ui-table-bar",0),f("changed",function(){return a.get()}),u(),c(1,"sz-ui-table",1),f("update",function(){return a.get()}),u()),i&2&&(p("config",a.appBarConfig)("dataSource",a.dataSource),g(),p("dataSource",a.dataSource))},dependencies:[w,k],encapsulation:2});let o=t;return o})();var st=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h({type:t}),t.\u0275inj=l({providers:[m],imports:[v.forChild([{path:"",component:E}]),D,N,A,I,z]});let o=t;return o})();export{st as NotificationsModule};
/**i18n:254aa6fe1cd18dc65995e6e9397465bfcd88a7e4c31f715b7e9eda5212bf646d*/