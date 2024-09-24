import{e as K}from"./chunk-D63V5N54.js";import{a as q,b as H,c as l,f as Q,g as J}from"./chunk-URIQALAK.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{b as G,f as X,g as k,h as w,j as x,k as j}from"./chunk-RZ35FYZ2.js";import{a as d}from"./chunk-RAINWFDY.js";import"./chunk-QVJ4Z3HM.js";import{a as I,b as y,d as z,e as L,g as R}from"./chunk-HQFAQEC3.js";import{c as F,p as V,q as B,s as P,u as $}from"./chunk-IEZSS2QC.js";import"./chunk-5WAYP5D7.js";import"./chunk-4PSVU3RC.js";import"./chunk-N4OOJIAX.js";import{d as M,f as b,g as N,l as T,n as O,q as A,r as D,t as v}from"./chunk-GLZMJYJP.js";import{b as s,c as Y}from"./chunk-KIR27AV3.js";import"./chunk-NC2TMKBF.js";import"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as U}from"./chunk-ENMNQFWU.js";import"./chunk-K5FLVMR2.js";import"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import"./chunk-UEBH5A2M.js";import{Jb as m,Kb as u,Lb as c,Wb as C,bb as S,gc as E,ja as a,mb as h,mc as f,na as _,nc as g,yb as r}from"./chunk-6J2YPVJB.js";import"./chunk-TH7MQ6T4.js";var W=(()=>{let i=class i extends X{constructor(){let o=a(I);super(o),this.mlabService=a(d),this.fb=a(D),this.data=a(y);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({name:[e?.name,[M.required,M.minLength(1)]],description:[e?.description,[]],symbol:[e?.symbol],isSi:[e?.isSI??!1,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.units.update(this.data.id,this.form.value)):this.save(this.mlabService.units.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-units-unit-save"]],standalone:!0,features:[f([d]),h,g],decls:9,vars:5,consts:()=>{let o;o="Name";let t;t="Description";let e;return e="Symbol",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","symbol","label",e],["formControlName","isSI","labelPosition","after"],[3,"actions"]];},template:function(t,e){t&1&&(c(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),m(6,"mat-checkbox",5),E(7,"SI"),u()()(),c(8,"sz-ui-dialog-actions",6)),t&2&&(r("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),r("formGroup",e.form),S(6),r("actions",e.actions));},dependencies:[v,T,b,N,O,A,R,L,j,k,w,$,F,P,B,V,K],encapsulation:2});let n=i;return n;})();var Z=(()=>{let i=class i{constructor(){this.dialog=a(z),this.mlabService=a(d),this.dataSource=new Q(),this.appBarConfig={title:U.units,menu:Y.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(l.uuid("id"),l.string("name"),l.string("symbol"),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),l.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openUnitDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(W,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openUnitDeleteComponent(o){this.dialog.open(x,{data:G.delete(this.mlabService.units.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.units.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=_({type:i,selectors:[["sz-medisy-laboratory-units"]],standalone:!0,features:[f([d]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(m(0,"sz-ui-table-bar",0),C("changed",function(){return e.get();}),u(),m(1,"sz-ui-table",1),C("update",function(){return e.get();}),u()),t&2&&(r("config",e.appBarConfig)("dataSource",e.dataSource),S(),r("dataSource",e.dataSource));},dependencies:[q,H],encapsulation:2});let n=i;return n;})();var Ie=[{path:"",component:Z}];export{Ie as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/