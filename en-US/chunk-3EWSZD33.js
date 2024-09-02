import{a as _}from"./chunk-REOG2CV6.js";import{a as n,d as ie,e as re,f as ne,i as ae,j as se}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as Y,f as Z,g as ee,h as te,j as oe,k as T}from"./chunk-JDBQ45YP.js";import{a as W}from"./chunk-ZGUTF2MC.js";import{j as m,k as K}from"./chunk-53DZ6NLX.js";import{a as G,b as Q,d as X,e as j,g as f}from"./chunk-7B3GMYBR.js";import{c as q,q as w,r as H,s as x,t as J}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as O,f as v,g as z,l as P,n as U,q as D,r as V,u as $}from"./chunk-QZRJHJEV.js";import{Y as g}from"./chunk-4QPQ7IQ3.js";import{c as y,d as B}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as F,la as k}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as d,Kb as u,Lb as C,Wb as E,bb as l,ea as b,ja as a,mb as R,mc as N,na as c,nc as A,oa as L,yb as s}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var M=function(t){return t.Available="Available",t.InUse="InUse",t.OutOfService="OutOfService",t.Maintenance="Maintenance",t.Lost="Lost",t.Stolen="stolen",t.Disposed="Disposed",t.Unknown="Unknown",t;}(M||{});var me=(()=>{let o=class o extends Z{constructor(){let r=a(G);super(r),this.fb=a(V),this.data=a(Q),this.cstnService=a(_),this.employees=this.cstnService.employees.getAll({orderBy:["name"]}),this.equipmentStatuses=Object.keys(M).map(S=>M[S]),this.operatorSelectConfig={emptyOption:!0};let i=this.fb;this.dialog=r;let e=this.data;this.form=i.group({name:[e?.name,[O.required,O.minLength(1)]],description:[e?.description,[]],plateNumber:[e?.plateNumber,[]],serialNumber:[e?.serialNumber,[]],operatorId:[e?.operatorId,[]],status:[e?.status,[]],statusMessage:[e?.statusMessage,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.equipment.update(this.data.id,this.form.value)):this.save(this.cstnService.equipment.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=c({type:o,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[N([]),R,A],decls:11,vars:8,consts:()=>{let r;r="Name";let i;i="Description";let e;e="Serial Number";let S;S="Plate Number";let I;I="Operator";let h;return h="Message",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",i],["formControlName","serialNumber","label",e],["formControlName","plateNumber","label",S],["formControlName","operatorId","label",I,3,"source","config"],["formControlName","status","label","Status",3,"source"],["formControlName","statusMessage","label",h],[3,"actions"]];},template:function(i,e){i&1&&(C(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),C(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-textarea",8),u()(),C(10,"sz-ui-dialog-actions",9)),i&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),l(2),s("formGroup",e.form),l(5),s("source",e.employees)("config",e.operatorSelectConfig),l(),s("source",e.equipmentStatuses),l(2),s("actions",e.actions));},dependencies:[$,P,v,z,U,D,f,j,w,T,ee,te,J,q,x,H],encapsulation:2});let t=o;return t;})();var Se=(()=>{let o=class o{constructor(){this.cstnService=a(_),this.dialog=a(X),this.router=a(y),this.dataSource=new ie("name"),this.appBarConfig={title:g.equipment,menu:K.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name").setHeaderSortable(!0).setValueClassFontBold().setStacked(n.string("plateNumber").setValueClassFontSmall()),n.string("operator.name").setHeaderSortable(!0).setHeaderName(g.operator).setValueClassFontBold().setStacked(n.string("operator.primaryPhone").setValueClassFontSmall()),n.string("serialNumber").setResponsive(!0),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openEquipmentDeleteComponent.bind(this))])),this.get();}openSaveComponent(r){this.dialog.open(me,{data:r}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openEquipmentDeleteComponent(r){this.dialog.open(oe,{data:Y.delete(this.cstnService.equipment.delete(r.id),r)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.cstnService.equipment.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(r=>{this.dataSource.set(r.items,r.count);});}};o.ɵfac=function(i){return new(i||o)();},o.ɵcmp=c({type:o,selectors:[["sz-constr-construction-equipment-list"]],features:[N([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,e){i&1&&(d(0,"sz-ui-table-bar",0),E("changed",function(){return e.get();}),u(),d(1,"sz-ui-table",1),E("update",function(){return e.get();}),u()),i&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),l(),s("dataSource",e.dataSource));},dependencies:[ae,ne],encapsulation:2});let t=o;return t;})();var ot=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=L({type:o}),o.ɵinj=b({providers:[_],imports:[B.forChild([{path:"",component:Se}]),f,F,k,se,T,W]});let t=o;return t;})();export{ot as EquipmentListModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/