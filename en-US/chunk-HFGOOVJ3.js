import{a as p}from"./chunk-4NK625ON.js";import{a,b as ae,d as se,e as le,g as me,j as Se,k as _e}from"./chunk-EBBH4FQM.js";import"./chunk-5UEHPFTG.js";import"./chunk-ALIV2OXE.js";import"./chunk-ZEHAKVPV.js";import{e as te,f as oe,g as ie,i as re,j as E,k as ne}from"./chunk-JIVZM3NB.js";import{a as M}from"./chunk-XX3GN2Z5.js";import{e as ee,h as L}from"./chunk-RXZ6CL54.js";import{a as j,b as k,d as q,e as w,g as T}from"./chunk-GOK5DQ4J.js";import{c as K,q as W,r as Y,t as Z,u as x}from"./chunk-NXCSCXM6.js";import"./chunk-GQUZCUGH.js";import"./chunk-QQ6G4KQ5.js";import"./chunk-XUXOODGA.js";import{c as I}from"./chunk-ASLHFDBF.js";import"./chunk-JORX5F6J.js";import{d as g,f as P,g as D,l as $,n as y,q as V,r as F,u as B}from"./chunk-X7FJYQVI.js";import"./chunk-S4MBIRCZ.js";import{c as G,e as Q}from"./chunk-7SMEEYI6.js";import"./chunk-5KW76B2T.js";import{ia as X,ja as H,la as J}from"./chunk-FJQ67ICA.js";import"./chunk-7CHLL7QZ.js";import{Kb as S,Lb as d,Mb as _,Wb as z,Xb as N,bb as s,cb as m,ea as A,ja as c,na as C,oa as b,oc as f,pc as U,qb as v,zb as n}from"./chunk-MI4BGEGZ.js";import"./chunk-2JROAFGL.js";var O=function(i){return i.Available="Available",i.InUse="InUse",i.OutOfService="OutOfService",i.Maintenance="Maintenance",i.Lost="Lost",i.Stolen="stolen",i.Disposed="Disposed",i.Unknown="Unknown",i;}(O||{});var ue=(()=>{let r=class r extends te{constructor(o,t,e){super(t),this.fb=o,this.dialog=t,this.data=e,this.cstnService=c(p),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(O).map(l=>O[l]),this.operatorSelectConfig={emptyOption:!0},this.form=o.group({name:[e?.name,[g.required,g.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};r.ɵfac=function(t){return new(t||r)(m(F),m(j),m(k));},r.ɵcmp=C({type:r,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[f([]),v,U],decls:11,vars:8,consts:()=>{let o;o="Name";let t;t="Description";let e;e="Serial Number";let l;l="Plate Number";let R;R="Operator";let h;return h="Message",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","serialNumber","label",e],["formControlName","plateNumber","label",l],["formControlName","operatorId","label",R,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",h],[3,"actions"]];},template:function(t,e){t&1&&(_(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),d()(),_(10,"sz-ui-dialog-actions",9)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(5),n("source",e.employees)("config",e.operatorSelectConfig),s(),n("source",e.equipmentStatuses),s(2),n("actions",e.actions));},dependencies:[B,$,P,D,y,V,T,w,W,E,oe,ie,x,K,Z,Y],encapsulation:2});let i=r;return i;})();var de=(()=>{let r=class r{constructor(o,t){this.dialog=o,this.router=t,this.cstnService=c(p),this.dataSource=new se("name"),this.appBarConfig={title:I.equipment},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setHeaderSortable(!0).setValueClassFontBold().setStacked(a.string("plateNumber").setValueClassFontSmall()),a.string("operator.name").setHeaderSortable(!0).setName(I.operator).setValueClassFontBold().setStacked(a.string("operator.primaryPhone").setValueClassFontSmall()),a.string("serialNumber").setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),ae.menu([L.edit(e=>this.openSaveComponent(e)),ee.divider(),L.delete(e=>this.openEquipmentDeleteComponent(e))])),this.get();}openSaveComponent(o){this.dialog.open(ue,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openEquipmentDeleteComponent(o){this.dialog.open(re,{data:ne.delete(this.cstnService.equipment.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(le(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};r.ɵfac=function(t){return new(t||r)(m(q),m(G));},r.ɵcmp=C({type:r,selectors:[["sz-constr-construction-equipment-list"]],features:[f([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(_(0,"sz-ui-app-bar",1),S(1,"sz-ui-table-search-filter",2),N("changed",function(){return e.get();}),S(2,"button",3),N("click",function(){return e.openSaveComponent();}),S(3,"span"),z(4,0),d()()(),S(5,"sz-ui-table",4),N("update",function(){return e.get();}),d()),t&2&&(n("config",e.appBarConfig),s(),n("dataSource",e.dataSource),s(4),n("dataSource",e.dataSource));},dependencies:[H,Se,me,M],encapsulation:2});let i=r;return i;})();var St=(()=>{let r=class r{};r.ɵfac=function(t){return new(t||r)();},r.ɵmod=b({type:r}),r.ɵinj=A({providers:[p],imports:[Q.forChild([{path:"",component:de}]),T,X,J,_e,E,M]});let i=r;return i;})();export{St as EquipmentListModule};/**i18n:432eaf37c61bb291e8f30b0de1096d88a542ed89f4aba48a7a5a6c27385da906*/