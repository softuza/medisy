import{a as ee}from"./chunk-LKGVOJUE.js";import"./chunk-IR4ZVDHN.js";import{a as J,c as K,e as Q,g as W,j as Z,k as x,l as d}from"./chunk-MDPJZTYR.js";import"./chunk-TCXRPYGI.js";import"./chunk-CUIKVH6O.js";import{a as y}from"./chunk-B6BGJAKF.js";import{c as $,h as w,i as U,j as V,l as q,m as H,n as X}from"./chunk-UVKODSF3.js";import"./chunk-LB4M65MR.js";import{b as k}from"./chunk-I3RE2UAN.js";import{a as Y,g as h}from"./chunk-E2YN42QZ.js";import{a as O,b as R,d as j,e as G,g as B}from"./chunk-2OM43JW4.js";import"./chunk-PSHVV3L5.js";import{J as P,N,d as C,f as I,g as b,k as D,m as M,p as z,q as E,t as A}from"./chunk-7YDZJT25.js";import"./chunk-QYJYVPVW.js";import{Ea as F,Ga as L}from"./chunk-NQOK3G2M.js";import{Fb as p,Gb as c,Hb as m,M as u,Rb as v,Tb as f,gb as l,hb as a,hc as g,kc as T,oa as S,ob as _,vb as s}from"./chunk-XEAZENSO.js";var te=(()=>{let o=class o extends w{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.form=t.group({disciplineId:[r.testTypeDiscipline?.disciplineId,[C.required]]});}submit(){this.IsValid()&&(this.data.testTypeDiscipline?this.save(this.mlabService.testTypes.disciplines.update(this.data.testTypeId,this.data.testTypeDiscipline?.id,this.form.value)):this.save(this.mlabService.testTypes.disciplines.create(this.data.testTypeId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(y),a(E),a(O),a(R));},o.ɵcmp=S({type:o,selectors:[["medisy-test-type-disciplines-save"]],standalone:!0,features:[g([]),_,T],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","disciplineId"],[3,"actions"]],template:function(t,i){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-discipline",2),c()(),m(4,"sz-ui-dialog-actions",3)),t&2&&(s("header",i.header),l(2),s("formGroup",i.form),l(2),s("actions",i.actions));},dependencies:[A,D,I,b,M,z,B,G,W,H,U,V,ee],encapsulation:2});let n=o;return n;})();var je=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=Y.disciplines,this.dataSource=new K(),this.testType=this.route.snapshot.data.testType,this.dataSource.fields.push(d.uuid("id"),d.uuid("disciplineId"),d.uuid("testTypeId"),d.string("discipline.name"),d.date("createdAt",!1),d.date("updatedAt",!1),J.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openTestTypeSpecimenTypeDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(te,{data:{testTypeId:this.testType.id,testTypeSpecimenType:e}}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(q,{data:X.delete(this.mlabService.testTypes.specimenTypes.delete(e.testTypeId,e.id),e)}).afterClosed().pipe(u(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.disciplines.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.disciplines.get(this.testType.id,this.dataSource.buildRequest()).pipe($(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(j),a(y),a(P));},o.ɵcmp=S({type:o,selectors:[["medisy-laboratory-test-type-disciplines"]],standalone:!0,features:[T],decls:6,vars:5,consts:()=>{let e;return e="Add",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(m(0,"sz-ui-header-info",0),p(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),p(2,"button",2),f("click",function(){return i.openSaveComponent();}),p(3,"span"),v(4,3),c()()(),p(5,"sz-ui-table",4),f("update",function(){return i.get();}),c()),t&2&&(s("title",i.title)("subtitle",i.testType.name),l(),s("dataSource",i.dataSource),l(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[N,L,F,x,Z,Q,k],encapsulation:2});let n=o;return n;})();export{je as TestTypeDisciplinesComponent};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/