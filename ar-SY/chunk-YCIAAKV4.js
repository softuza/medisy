import{a as ee}from"./chunk-T54HBQ64.js";import{a as p}from"./chunk-W3FPSF3O.js";import{a,b as ae,d as se,e as le,g as me,j as Se,k as _e}from"./chunk-TPKSIZOO.js";import"./chunk-7CZWRR2T.js";import"./chunk-DLB4ZJGU.js";import"./chunk-YQMAQTBA.js";import{e as te,f as oe,g as ie,i as re,j as M,k as ne}from"./chunk-AKDPENJM.js";import{a as E}from"./chunk-TDGTMX2G.js";import{h as L}from"./chunk-AXJSSLJO.js";import{a as j,b as k,d as q,e as w,g as T}from"./chunk-7THGKJI5.js";import{e as K,t as W,u as Y,w as Z,x}from"./chunk-OJ6T2UWM.js";import"./chunk-GNVHXVX2.js";import"./chunk-Q5KZECGG.js";import{c as I}from"./chunk-C6CCG6BQ.js";import"./chunk-3H4GFC5C.js";import{d as g,f as P,g as D,l as $,n as y,q as V,r as F,u as B}from"./chunk-5GTA5B7Y.js";import"./chunk-FOLKFRV4.js";import{c as G,e as Q}from"./chunk-77AMUORV.js";import"./chunk-6QVS4ASI.js";import{ia as X,ja as H,la as J}from"./chunk-KPEIRPFT.js";import"./chunk-ACPIYRBG.js";import{Jb as S,Kb as d,Lb as _,Vb as U,Wb as N,bb as s,cb as m,ea as A,ja as c,na as C,nc as f,oa as b,oc as z,qb as v,zb as n}from"./chunk-D2V4YQ64.js";import"./chunk-X4FHBMAQ.js";var O=function(i){return i.Available="Available",i.InUse="InUse",i.OutOfService="OutOfService",i.Maintenance="Maintenance",i.Lost="Lost",i.Stolen="stolen",i.Disposed="Disposed",i.Unknown="Unknown",i;}(O||{});var ue=(()=>{let r=class r extends te{constructor(o,t,e){super(t),this.fb=o,this.dialog=t,this.data=e,this.cstnService=c(p),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(O).map(l=>O[l]),this.operatorSelectConfig={emptyOption:!0},this.form=o.group({name:[e?.name,[g.required,g.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};r.ɵfac=function(t){return new(t||r)(m(F),m(j),m(k));},r.ɵcmp=C({type:r,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[f([]),v,z],decls:11,vars:8,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let e;e="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062A\u0633\u0644\u0633\u0644\u064A";let l;l="\u0631\u0642\u0645 \u0627\u0644\u0644\u0648\u062D\u0629";let R;R="\u0627\u0644\u0639\u0627\u0645\u0644";let h;return h="\u0627\u0644\u0631\u0633\u0627\u0644\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","serialNumber","label",e],["formControlName","plateNumber","label",l],["formControlName","operatorId","label",R,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",h],[3,"actions"]];},template:function(t,e){t&1&&(_(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),d()(),_(10,"sz-ui-dialog-actions",9)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),n("formGroup",e.form),s(5),n("source",e.employees)("config",e.operatorSelectConfig),s(),n("source",e.equipmentStatuses),s(2),n("actions",e.actions));},dependencies:[B,$,P,D,y,V,T,w,W,M,oe,ie,x,K,Z,Y],encapsulation:2});let i=r;return i;})();var de=(()=>{let r=class r{constructor(o,t){this.dialog=o,this.router=t,this.cstnService=c(p),this.dataSource=new se("name"),this.appBarConfig={title:I.equipment},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",e=>`${ee.EquipmentList}/${e.id}`).setHeaderSortable(!0).setStacked(a.string("plateNumber").setValueClassFontSmall()),a.string("operator.name").setHeaderSortable(!0).setName(I.operator).setStacked(a.string("operator.primaryPhone").setValueClassFontSmall()),a.string("serialNumber").setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),ae.menu([L.edit(e=>this.openSaveComponent(e)),L.delete(e=>this.openEquipmentDeleteComponent(e))])),this.get();}openSaveComponent(o){this.dialog.open(ue,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openEquipmentDeleteComponent(o){this.dialog.open(re,{data:ne.delete(this.cstnService.equipment.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(le(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};r.ɵfac=function(t){return new(t||r)(m(q),m(G));},r.ɵcmp=C({type:r,selectors:[["sz-constr-construction-equipment-list"]],features:[f([])],decls:6,vars:3,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(_(0,"sz-ui-app-bar",1),S(1,"sz-ui-table-search-filter",2),N("changed",function(){return e.get();}),S(2,"button",3),N("click",function(){return e.openSaveComponent();}),S(3,"span"),U(4,0),d()()(),S(5,"sz-ui-table",4),N("update",function(){return e.get();}),d()),t&2&&(n("config",e.appBarConfig),s(),n("dataSource",e.dataSource),s(4),n("dataSource",e.dataSource));},dependencies:[H,Se,me,E],encapsulation:2});let i=r;return i;})();var _t=(()=>{let r=class r{};r.ɵfac=function(t){return new(t||r)();},r.ɵmod=b({type:r}),r.ɵinj=A({providers:[p],imports:[Q.forChild([{path:"",component:de}]),T,X,J,_e,M,E]});let i=r;return i;})();export{_t as EquipmentListModule};/**i18n:9149e2db890ef5b3eae9bf80dd164277eac0436f561e848a63fe9f462929c08f*/