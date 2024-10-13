import{a as T}from"./chunk-HXG5BNL7.js";import{c as K,d as Y,e as n,h as Z,i as ee}from"./chunk-CAFAE33Z.js";import"./chunk-J5QQY2QR.js";import"./chunk-JOIIV6VE.js";import{b as W}from"./chunk-CNLCC23Q.js";import"./chunk-5E6K5YLE.js";import{b as k,f as w,g as j,h as H,j as x,k as J}from"./chunk-Z2ZUJRKU.js";import"./chunk-3PDBTWFJ.js";import{a as V,b as y,d as $,e as F,g as B}from"./chunk-QI2VJ3F3.js";import{c as G,q as Q,r as X,t as q}from"./chunk-2WR3J7DZ.js";import"./chunk-EA7HCRH3.js";import"./chunk-7AANOILR.js";import"./chunk-FJQUKBXX.js";import{d as O,f as b,g as R,l as A,o as v,r as P,s as z,u as U}from"./chunk-QSQP3PNI.js";import{b as S,c as g}from"./chunk-E3F62UZG.js";import"./chunk-33ZTXJ25.js";import"./chunk-4MW6KJIR.js";import"./chunk-IZAIB3R2.js";import{a as M}from"./chunk-FENOVBAP.js";import"./chunk-RGHZSPOL.js";import{r as D}from"./chunk-73EUG6I6.js";import"./chunk-SNLNGOLR.js";import"./chunk-SNT3GI4V.js";import"./chunk-3TPLYAOD.js";import{Kb as d,Lb as u,Mb as N,Xb as E,cb as l,ja as a,na as p,nb as L,qc as C,rc as c,zb as s}from"./chunk-4PLW75EI.js";import"./chunk-ZSJPE3V4.js";var f=function(o){return o.Available="Available",o.InUse="InUse",o.OutOfService="OutOfService",o.Maintenance="Maintenance",o.Lost="Lost",o.Stolen="stolen",o.Disposed="Disposed",o.Unknown="Unknown",o;}(f||{});var te=(()=>{let r=class r extends w{constructor(){let i=a(V);super(i),this.fb=a(z),this.data=a(y),this.cstnService=a(T),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(f).map(_=>f[_]),this.operatorSelectConfig={emptyOption:!0};let t=this.fb;this.dialog=i;let e=this.data;this.form=t.group({name:[e?.name,[O.required,O.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};r.ɵfac=function(t){return new(t||r)();},r.ɵcmp=p({type:r,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[C([]),L,c],decls:11,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062A\u0633\u0644\u0633\u0644\u064A";let _;_="\u0631\u0642\u0645 \u0627\u0644\u0644\u0648\u062D\u0629";let I;I="\u0627\u0644\u0639\u0627\u0645\u0644";let h;return h="\u0627\u0644\u0631\u0633\u0627\u0644\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",t],["formControlName","serialNumber","label",e],["formControlName","plateNumber","label",_],["formControlName","operatorId","label",I,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",h],[3,"actions"]];},template:function(t,e){t&1&&(N(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),N(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input-text",4)(6,"sz-ui-form-field-input-text",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),u()(),N(10,"sz-ui-dialog-actions",9)),t&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),s("formGroup",e.form),l(5),s("source",e.employees)("config",e.operatorSelectConfig),l(),s("source",e.equipmentStatuses),l(2),s("actions",e.actions));},dependencies:[U,A,b,R,v,P,B,F,W,J,j,H,q,G,X,Q],encapsulation:2});let o=r;return o;})();var oe=(()=>{let r=class r{constructor(){this.cstnService=a(T),this.dialog=a($),this.router=a(D),this.dataSource=new Z("name"),this.appBarConfig={title:M.equipment,menu:g.default([S.add(this.openSaveComponent.bind(this)),S.menu([S.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setHeaderSortable(!0).setValueClassFontBold().setStacked(n.string("plateNumber").setValueClassFontSmall()),n.string("operator.name").setHeaderSortable(!0).setHeaderName(M.operator).setValueClassFontBold().setStacked(n.string("operator.primaryPhone").setValueClassFontSmall()),n.string("serialNumber").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(g.more([S.edit(this.openSaveComponent.bind(this)),S.divider(),S.delete(this.openEquipmentDeleteComponent.bind(this))]))),this.get();}openSaveComponent(i){this.dialog.open(te,{data:i}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openEquipmentDeleteComponent(i){this.dialog.open(x,{data:k.delete(this.cstnService.equipment.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};r.ɵfac=function(t){return new(t||r)();},r.ɵcmp=p({type:r,selectors:[["sz-constr-construction-equipment-list"]],standalone:!0,features:[C([]),c],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(d(0,"sz-ui-table-bar",0),E("changed",function(){return e.get();}),u(),d(1,"sz-ui-table",1),E("update",function(){return e.get();}),u()),t&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),l(),s("dataSource",e.dataSource));},dependencies:[K,Y],encapsulation:2});let o=r;return o;})();var $e=[{path:"",component:oe}];export{$e as default};/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/