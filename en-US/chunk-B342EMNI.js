import{a as p}from"./chunk-56G2DFJZ.js";import{a as $}from"./chunk-DLP73NSJ.js";import{a as q,b as Q,c as a,f as J,g as K}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{b as k}from"./chunk-EVGZQJKI.js";import"./chunk-AXNKT4TF.js";import{b as X,f as Y,g as j,h as w,j as H,k as W}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import"./chunk-UE6VBMXE.js";import{a as z,b as I,d as A,e as D,g as V}from"./chunk-HESHWLJQ.js";import{c as F,q as B,u as G}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as E,f as T,g as h,l as b,o as y,r as P,s as L,u as R}from"./chunk-UR5GDBT7.js";import{b as n,c as g}from"./chunk-CRJIWNDX.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as U}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as v}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import"./chunk-75V32KEJ.js";import{Jb as d,Kb as S,Lb as c,Wb as O,bb as m,ja as r,mb as M,mc as C,na as _,nc as f,yb as l}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var Z=(()=>{let i=class i extends Y{constructor(){let e=r(z);super(e),this.fb=r(L),this.data=r(I),this.cstnService=r(p);let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({name:[o?.name,[E.required,E.minLength(1)]],number:[o?.number,[E.maxLength(24)]],primaryEmail:[o?.primaryEmail,[]],primaryPhone:[o?.primaryPhone,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.employees.update(this.data.id,this.form.value)):this.save(this.cstnService.employees.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[C([p]),M,f],decls:8,vars:5,consts:()=>{let e;e="Name";let t;t="Number";let o;o="Phone";let u;return u="Email",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","number","label",t],["formControlName","primaryPhone","label",o],["formControlName","primaryEmail","label",u],[3,"actions"]];},template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),S()(),c(7,"sz-ui-dialog-actions",6)),t&2&&(l("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),l("formGroup",o.form),m(5),l("actions",o.actions));},dependencies:[R,b,T,h,y,P,V,D,B,W,j,w,G,F],encapsulation:2});let s=i;return s;})();var x=(()=>{let i=class i{constructor(){this.cstnService=r(p),this.dialog=r(A),this.router=r(v),this.dataSource=new J(),this.appBarConfig={title:U.employees,menu:g.default().setItems([n.add(this.openSaveComponent.bind(this)),n.menu([n.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setHeaderSortable(!0),a.string("number"),a.string("primaryEmail").setVisible(!1),a.string("primaryPhone").setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(g.more([n.edit(this.openSaveComponent.bind(this)),n.divider(),n.barcode(this.openBarcodeWriterComponent.bind(this)),n.divider(),n.delete(this.openProjectDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(Z,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openBarcodeWriterComponent(e){let t=`${document.baseURI}${$.PageEmployee.replace(":employeeId",e.id)}`;this.dialog.open(k,{data:{msg:t,share:{title:e.name,enabled:!0},download:{filename:e.name},copyToClipboard:!0}}).afterClosed().subscribe(o=>{});}openProjectDeleteComponent(e){this.dialog.open(H,{data:X.delete(this.cstnService.employees.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.employees.get(this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-construction-employees"]],standalone:!0,features:[C([]),f],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(d(0,"sz-ui-table-bar",0),O("changed",function(){return o.get();}),S(),d(1,"sz-ui-table",1),O("update",function(){return o.get();}),S()),t&2&&(l("config",o.appBarConfig)("dataSource",o.dataSource),m(),l("dataSource",o.dataSource));},dependencies:[q,Q],encapsulation:2});let s=i;return s;})();var ve=[{path:"",component:x}];export{ve as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/