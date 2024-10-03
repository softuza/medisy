import{a as u}from"./chunk-54S5QGYE.js";import{a as V}from"./chunk-CDAUQBFB.js";import{a as q,b as Q,c as r,f as J,g as K}from"./chunk-QTL2VK7Y.js";import"./chunk-A4CG2NMU.js";import"./chunk-VTSPPHDN.js";import"./chunk-M7UZMDJ3.js";import{b as B,f as X,g as H,h as k,j as w,k as j}from"./chunk-MBGPVYCR.js";import"./chunk-B5ANHG6X.js";import{a as A,b as I,d as F,e as L,g as y}from"./chunk-3RAF2YCP.js";import{c as P,q as $,s as U,u as G}from"./chunk-BD7VQR7P.js";import"./chunk-HLSHTPUZ.js";import"./chunk-XGXTHGMT.js";import"./chunk-JE5WUYND.js";import{d as g,f as T,g as E,l as M,o as z,r as b,s as v,u as D}from"./chunk-WM2WRHBE.js";import{b as l,c as Z}from"./chunk-WED5ZXP7.js";import"./chunk-TR7ZWGFY.js";import"./chunk-LU5YIJRC.js";import"./chunk-CTOSHI2B.js";import{a as h}from"./chunk-OCSDC33N.js";import"./chunk-MP6YRTZR.js";import{r as R}from"./chunk-BN5OIF3Q.js";import"./chunk-AIVPDPHA.js";import"./chunk-W6JJS6CU.js";import"./chunk-OMSMEPHM.js";import{Jb as m,Kb as S,Lb as _,Wb as N,bb as d,ja as n,mb as O,mc as f,na as c,nc as C,yb as s}from"./chunk-O34SSFLY.js";import"./chunk-QEH2RDWU.js";var W=(()=>{let i=class i extends X{constructor(){let e=n(A);super(e),this.fb=n(v),this.data=n(I),this.cstnService=n(u);let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({name:[o?.name,[g.required,g.minLength(1)]],description:[o?.description,[]],code:[o?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[f([u]),O,C],decls:7,vars:5,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let o;return o="\u0627\u0644\u0631\u0645\u0632",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","code","label",o],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),S()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),d(2),s("formGroup",o.form),d(4),s("actions",o.actions));},dependencies:[D,M,T,E,z,b,y,L,$,j,H,k,G,P,U],encapsulation:2});let a=i;return a;})();var Y=(()=>{let i=class i{constructor(){this.cstnService=n(u),this.dialog=n(F),this.router=n(R),this.dataSource=new J("name"),this.appBarConfig={title:h.zones,menu:Z.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(r.uuid("id"),r.hyperlink("name").setClickFn(e=>this.router.navigate([V.Zones,e.id])).setHeaderSortable(!0),r.string("code"),r.number("teamsCount").setValueGetter(e=>e.teams?.length).setHeaderName(h.teams).setHeaderSortable(!1),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openZoneDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(W,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openZoneDeleteComponent(e){this.dialog.open(w,{data:B.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-zones"]],standalone:!0,features:[f([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(m(0,"sz-ui-table-bar",0),N("changed",function(){return o.get();}),S(),m(1,"sz-ui-table",1),N("update",function(){return o.get();}),S()),t&2&&(s("config",o.appBarConfig)("dataSource",o.dataSource),d(),s("dataSource",o.dataSource));},dependencies:[q,Q],encapsulation:2});let a=i;return a;})();var Re=[{path:"",component:Y}];export{Re as default};/**i18n:08dc477745c643d8c857c9e8e740bb8fd5d4d2f068a9032e0d444ef2bfb6a6f8*/