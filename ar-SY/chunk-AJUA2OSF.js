import{a as S}from"./chunk-MOUVONG3.js";import{a as n,d as re,e as ne,f as se,i as ae,j as le}from"./chunk-N3YZ3GWE.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import"./chunk-LZIUZOQU.js";import{b as Z,f as ee,g as te,h as oe,j as ie,k as E}from"./chunk-BQ3MI4NW.js";import{b as M,e as Y}from"./chunk-RNNBY4AW.js";import{h as T}from"./chunk-VP6ZLF3H.js";import{a as X,b as j,d as k,e as q,g as f}from"./chunk-WNUUIGGE.js";import{c as H,q as x,r as J,s as K,t as W}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-JACASQJP.js";import{d as I,f as P,g as D,l as U,n as V,q as $,r as y,u as B}from"./chunk-VXNH5PTX.js";import{Y as h}from"./chunk-KQ5MQZXD.js";import{c as F,e as G}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as Q,la as w}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as p,Lb as u,Mb as C,Xb as g,bb as a,cb as c,ea as b,ja as m,na as d,oa as A,oc as N,pc as z,qb as v,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var O=function(t){return t.Available="Available",t.InUse="InUse",t.OutOfService="OutOfService",t.Maintenance="Maintenance",t.Lost="Lost",t.Stolen="stolen",t.Disposed="Disposed",t.Unknown="Unknown",t;}(O||{});var Se=(()=>{let o=class o extends ee{constructor(r,i,e){super(i),this.fb=r,this.dialog=i,this.data=e,this.cstnService=m(S),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(O).map(l=>O[l]),this.operatorSelectConfig={emptyOption:!0},this.form=r.group({name:[e?.name,[I.required,I.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)(c(y),c(X),c(j));},o.ɵcmp=d({type:o,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[N([]),v,z],decls:11,vars:8,consts:()=>{let r;r="\u0627\u0644\u0627\u0633\u0645";let i;i="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062A\u0633\u0644\u0633\u0644\u064A";let l;l="\u0631\u0642\u0645 \u0627\u0644\u0644\u0648\u062D\u0629";let L;L="\u0627\u0644\u0639\u0627\u0645\u0644";let R;return R="\u0627\u0644\u0631\u0633\u0627\u0644\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",i],["formControlName","serialNumber","label",e],["formControlName","plateNumber","label",l],["formControlName","operatorId","label",L,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",R],[3,"actions"]];},template:function(i,e){i&1&&(C(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),C(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),u()(),C(10,"sz-ui-dialog-actions",9)),i&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),a(2),s("formGroup",e.form),a(5),s("source",e.employees)("config",e.operatorSelectConfig),a(),s("source",e.equipmentStatuses),a(2),s("actions",e.actions));},dependencies:[B,U,P,D,V,$,f,q,x,E,te,oe,W,H,K,J],encapsulation:2});let t=o;return t;})();var _e=(()=>{let o=class o{constructor(){this.cstnService=m(S),this.dialog=m(k),this.router=m(F),this.dataSource=new re("name"),this.appBarConfig={title:h.equipment,actions:[M.add(this.openSaveComponent.bind(this)),M.menu([M.search()])]},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setHeaderSortable(!0).setValueClassFontBold().setStacked(n.string("plateNumber").setValueClassFontSmall()),n.string("operator.name").setHeaderSortable(!0).setName(h.operator).setValueClassFontBold().setStacked(n.string("operator.primaryPhone").setValueClassFontSmall()),n.string("serialNumber").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([T.edit(this.openSaveComponent.bind(this)),T.divider(),T.delete(this.openEquipmentDeleteComponent.bind(this))])),this.get();}openSaveComponent(r){this.dialog.open(Se,{data:r}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openEquipmentDeleteComponent(r){this.dialog.open(ie,{data:Z.delete(this.cstnService.equipment.delete(r.id),r)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(ne(this.dataSource.state)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=d({type:o,selectors:[["sz-constr-construction-equipment-list"]],features:[N([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,e){i&1&&(p(0,"sz-ui-table-bar",0),g("changed",function(){return e.get();}),u(),p(1,"sz-ui-table",1),g("update",function(){return e.get();}),u()),i&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),a(),s("dataSource",e.dataSource));},dependencies:[ae,se],encapsulation:2});let t=o;return t;})();var at=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=A({type:o}),o.ɵinj=b({providers:[S],imports:[G.forChild([{path:"",component:_e}]),f,Q,w,le,E,Y]});let t=o;return t;})();export{at as EquipmentListModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/