import{a as l}from"./chunk-REOG2CV6.js";import{a as j}from"./chunk-YCRED7JA.js";import{a as te,d as oe,e as s,h as ie,i as re,j as ne}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{g as ee}from"./chunk-SWY7WOHK.js";import"./chunk-2DOHZQYD.js";import{b as Q,f as J,g as K,h as Z,j as x,k as g}from"./chunk-JDBQ45YP.js";import{a as q}from"./chunk-ZGUTF2MC.js";import{j as a,k}from"./chunk-53DZ6NLX.js";import"./chunk-VHRVE7HV.js";import{a as B,b as F,d as U,e as G,g as N}from"./chunk-7B3GMYBR.js";import{c as w,q as H,t as W}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as E,f as R,g as v,l as y,n as L,q as P,r as I,u as A}from"./chunk-QZRJHJEV.js";import{Y}from"./chunk-4QPQ7IQ3.js";import{c as D,d as V}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as $,la as X}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as p,Kb as S,Lb as _,Wb as O,bb as d,ea as T,ja as n,mb as z,mc as f,na as c,nc as C,oa as b,yb as m}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var se=(()=>{let o=class o extends J{constructor(){let e=n(B);super(e),this.fb=n(I),this.data=n(F),this.cstnService=n(l);let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({name:[i?.name,[E.required,E.minLength(1)]],number:[i?.number,[E.maxLength(24)]],primaryEmail:[i?.primaryEmail,[]],primaryPhone:[i?.primaryPhone,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.employees.update(this.data.id,this.form.value)):this.save(this.cstnService.employees.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[f([]),z,C],decls:8,vars:5,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0631\u0642\u0645";let i;i="\u0627\u0644\u0647\u0627\u062A\u0641";let u;return u="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","number","label",t],["formControlName","primaryPhone","label",i],["formControlName","primaryEmail","label",u],[3,"actions"]];},template:function(t,i){t&1&&(_(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),S()(),_(7,"sz-ui-dialog-actions",6)),t&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),m("formGroup",i.form),d(5),m("actions",i.actions));},dependencies:[A,y,R,v,L,P,N,G,H,g,K,Z,W,w],encapsulation:2});let r=o;return r;})();var h=(()=>{let o=class o{constructor(){this.cstnService=n(l),this.dialog=n(U),this.router=n(D),this.dataSource=new ie(),this.appBarConfig={title:Y.employees,menu:k.default().setItems([a.add(this.openSaveComponent.bind(this)),a.menu([a.search()])])},this.dataSource.columnDefs.push(s.uuid("id"),s.string("name").setHeaderSortable(!0),s.string("number"),s.string("primaryEmail").setVisible(!1),s.string("primaryPhone").setHeaderSortable(!1),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),s.menu([a.edit(this.openSaveComponent.bind(this)),a.divider(),a.barcode(this.openBarcodeWriterComponent.bind(this)),a.divider(),a.delete(this.openProjectDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openBarcodeWriterComponent(e){let t=`${document.baseURI}${j.PageEmployee.replace(":employeeId",e.id)}`;this.dialog.open(ee,{data:{msg:t,share:{title:e.name,enabled:!0},download:{filename:e.name},copyToClipboard:!0}}).afterClosed().subscribe(i=>{});}openProjectDeleteComponent(e){this.dialog.open(x,{data:Q.delete(this.cstnService.employees.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.employees.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-constr-construction-employees"]],standalone:!0,features:[f([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-table-bar",0),O("changed",function(){return i.get();}),S(),p(1,"sz-ui-table",1),O("update",function(){return i.get();}),S()),t&2&&(m("config",i.appBarConfig)("dataSource",i.dataSource),d(),m("dataSource",i.dataSource));},dependencies:[te,oe],encapsulation:2});let r=o;return r;})();var ke=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=b({type:o}),o.ɵinj=T({providers:[l],imports:[V.forChild([{path:"",component:h}]),N,$,X,ne,g,q,h]});let r=o;return r;})();export{ke as EmployeesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/