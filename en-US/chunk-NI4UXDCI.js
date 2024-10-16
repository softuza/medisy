import{a as T}from"./chunk-FZDVZWXQ.js";import{c as W,d as Y,e as n,h as Z,i as ee}from"./chunk-6VFR2BLG.js";import"./chunk-KYZGSJVK.js";import"./chunk-257F3KUX.js";import"./chunk-A6CHLAGJ.js";import{b as w,f as j,g as H,h as x,j as J,k as K}from"./chunk-TDTPOOYH.js";import"./chunk-VU2DRYWU.js";import{a as V,b as y,d as $,e as F,g as B}from"./chunk-QHAXF6DJ.js";import{c as G,r as Q,s as X,t as q,v as k}from"./chunk-NNTGN3JU.js";import"./chunk-UT7TBJTS.js";import"./chunk-U3SGEYQ6.js";import"./chunk-2VIOUMQX.js";import{d as O,f as b,g as R,l as A,o as v,r as P,s as z,u as U}from"./chunk-4NISFW37.js";import{b as S,c as g}from"./chunk-RY6DPLLN.js";import"./chunk-ENGVK46T.js";import"./chunk-WGE6F22R.js";import"./chunk-3GJSQYSM.js";import{a as M}from"./chunk-F37COHBJ.js";import"./chunk-TNUAHDWW.js";import{r as D}from"./chunk-E3MHHXGD.js";import"./chunk-MBIUC3OC.js";import"./chunk-OBZLRKTI.js";import"./chunk-PR5SF5XM.js";import{Kb as m,Lb as u,Mb as N,Xb as E,cb as l,ja as a,na as p,nb as L,qc as C,rc as c,zb as s}from"./chunk-M4TXNJKT.js";import"./chunk-KEWWYOLQ.js";var f=function(o){return o.Available="Available",o.InUse="InUse",o.OutOfService="OutOfService",o.Maintenance="Maintenance",o.Lost="Lost",o.Stolen="stolen",o.Disposed="Disposed",o.Unknown="Unknown",o;}(f||{});var te=(()=>{let r=class r extends j{constructor(){super(a(V)),this.fb=a(z),this.data=a(y),this.cstnService=a(T),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(f).map(t=>f[t]),this.operatorSelectConfig={emptyOption:!0};let i=this.fb,e=this.data;this.form=i.group({name:[e?.name,[O.required,O.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=p({type:r,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[C([]),L,c],decls:11,vars:8,consts:()=>{let i;i="Name";let e;e="Description";let t;t="Serial Number";let d;d="Plate Number";let I;I="Operator";let h;return h="Message",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",e],["formControlName","serialNumber","label",t],["formControlName","plateNumber","label",d],["formControlName","operatorId","label",I,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",h],[3,"actions"]];},template:function(e,t){e&1&&(N(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),N(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input-text",4)(6,"sz-ui-form-field-input-text",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),u()(),N(10,"sz-ui-dialog-actions",9)),e&2&&(s("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),s("formGroup",t.form),l(5),s("source",t.employees)("config",t.operatorSelectConfig),l(),s("source",t.equipmentStatuses),l(2),s("actions",t.actions));},dependencies:[U,A,b,R,v,P,B,F,Q,K,H,x,k,G,q,X],encapsulation:2});let o=r;return o;})();var oe=(()=>{let r=class r{constructor(){this.cstnService=a(T),this.dialog=a($),this.router=a(D),this.dataSource=new Z("name"),this.appBarConfig={title:M.equipment,menu:g.default([S.add(this.openSaveComponent.bind(this)),S.menu([S.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setHeaderSortable(!0).setValueClassFontBold().setStacked(n.string("plateNumber").setValueClassFontSmall()),n.string("operator.name").setHeaderSortable(!0).setHeaderName(M.operator).setValueClassFontBold().setStacked(n.string("operator.primaryPhone").setValueClassFontSmall()),n.string("serialNumber").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(g.more([S.edit(this.openSaveComponent.bind(this)),S.divider(),S.delete(this.openEquipmentDeleteComponent.bind(this))]))),this.get();}openSaveComponent(i){this.dialog.open(te,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openEquipmentDeleteComponent(i){this.dialog.open(J,{data:w.delete(this.cstnService.equipment.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=p({type:r,selectors:[["sz-constr-construction-equipment-list"]],standalone:!0,features:[C([]),c],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(m(0,"sz-ui-table-bar",0),E("changed",function(){return t.get();}),u(),m(1,"sz-ui-table",1),E("update",function(){return t.get();}),u()),e&2&&(s("config",t.appBarConfig)("dataSource",t.dataSource),l(),s("dataSource",t.dataSource));},dependencies:[W,Y],encapsulation:2});let o=r;return o;})();var $e=[{path:"",component:oe}];export{$e as default};/**i18n:ce69e7cdd9e538a311e7abe07bc265439d0d15e144a8f5967a13442a6141f53a*/