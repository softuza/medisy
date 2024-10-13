import{a as u}from"./chunk-MV3PXNS5.js";import{a as B}from"./chunk-3VGLO5OL.js";import{c as Z,d as ee,e as a,h as te,i as oe}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{b as H,f as q,g as Q,h as K,j as W,k as Y}from"./chunk-XVW27JLP.js";import"./chunk-AW4VH2GC.js";import{a as $,b as F,d as U,e as y,g as G}from"./chunk-DORI46RQ.js";import{c as j,o as X,r as w,t as k,v as x}from"./chunk-XSVH7MQJ.js";import"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import"./chunk-CWOC6VYL.js";import{d as T,f as h,g as A,l as I,o as L,r as z,s as b,u as V}from"./chunk-ZWU3YGKZ.js";import{b as l,c as f}from"./chunk-FWFWESWL.js";import"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as J}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{r as v}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import{n as P}from"./chunk-TXVIAXH2.js";import{Kb as S,Lb as d,Mb as m,Xb as N,cb as C,ja as n,na as c,nb as D,qc as O,rc as E,zb as s}from"./chunk-6SIAYQG6.js";import"./chunk-3IKOHXF5.js";var ie=(()=>{let i=class i extends q{constructor(){let e=n($);super(e),this.fb=n(b),this.data=n(F),this.cstnService=n(u);let o=this.fb;this.dialog=e;let t=this.data;this.form=o.group({name:[t?.name,[T.required,T.minLength(1)]],description:[t?.description,[]],code:[t?.code,[]],actualStartDate:[t?.actualStartDate,[]],actualEndDate:[t?.actualEndDate,[]],plannedStartDate:[t?.plannedStartDate,[]],plannedEndDate:[t?.plannedEndDate,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.projects.update(this.data.id,this.form.value)):this.save(this.cstnService.projects.create(this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[O([u]),D,E],decls:13,vars:5,consts:()=>{let e;e="Name";let o;o="Description";let t;t="Code";let p;p="Planned Start Date";let M;M="Planned End Date";let g;g="Actual Start Date";let R;return R="Actual End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","code","label",t],[1,"sz-form-row"],["formControlName","plannedStartDate","label",p],["formControlName","plannedEndDate","label",M],["formControlName","actualStartDate","label",g],["formControlName","actualEndDate","label",R],[3,"actions"]];},template:function(o,t){o&1&&(m(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input-text",4),S(6,"div",5),m(7,"sz-ui-form-field-date",6)(8,"sz-ui-form-field-date",7),d(),S(9,"div",5),m(10,"sz-ui-form-field-date",8)(11,"sz-ui-form-field-date",9),d()()(),m(12,"sz-ui-dialog-actions",10)),o&2&&(s("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),C(2),s("formGroup",t.form),C(10),s("actions",t.actions));},dependencies:[V,I,h,A,L,z,G,y,w,Y,Q,K,x,j,k,X],encapsulation:2});let r=i;return r;})();var ae=(()=>{let i=class i{constructor(){this.cstnService=n(u),this.dialog=n(U),this.router=n(v),this.datePipe=n(P),this.dataSource=new te("name"),this.appBarConfig={title:J.projects,menu:f.default([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(e=>this.router.navigate([B.Projects,e.id])).setHeaderSortable(!0),a.string("code"),a.date("actualStartDate").setVisible(!1).setValueFormatter(e=>this.datePipe.transform(e,"mediumDate")),a.date("actualEndDate").setVisible(!1).setValueFormatter(e=>this.datePipe.transform(e,"mediumDate")),a.date("plannedStartDate").setVisible(!0).setValueFormatter(e=>this.datePipe.transform(e,"mediumDate")).setResponsive(!0),a.date("plannedEndDate").setVisible(!0).setValueFormatter(e=>this.datePipe.transform(e,"mediumDate")).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu(f.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openProjectDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(ie,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openProjectDeleteComponent(e){this.dialog.open(W,{data:H.delete(this.cstnService.projects.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.projects.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-projects"]],standalone:!0,features:[O([]),E],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(S(0,"sz-ui-table-bar",0),N("changed",function(){return t.get();}),d(),S(1,"sz-ui-table",1),N("update",function(){return t.get();}),d()),o&2&&(s("config",t.appBarConfig)("dataSource",t.dataSource),C(),s("dataSource",t.dataSource));},dependencies:[Z,ee],encapsulation:2});let r=i;return r;})();var Ue=[{path:"",component:ae}];export{Ue as default};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/