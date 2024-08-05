import{a as d}from"./chunk-SCK6YXLJ.js";import{a as H}from"./chunk-42DTH2NM.js";import{a,b as ie,d as re,e as ne,g as ae,j as se,k as me}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import{h as oe}from"./chunk-OKAHGCAZ.js";import"./chunk-3Q7NLQRN.js";import"./chunk-HAWQZ3DL.js";import{e as K,f as Z,g as x,i as ee,j as g,k as te}from"./chunk-CZ3NOAZC.js";import{a as O}from"./chunk-4APH4GGR.js";import{e as h,h as N}from"./chunk-3HX3ISKW.js";import{a as G,b as j,d as Y,e as X,g as M}from"./chunk-T2IQKITO.js";import{c as W,r as Q,v as J}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as q}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import{d as E,f as z,g as P,l as y,n as A,q as D,r as $,u as B}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{c as U,e as V}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as F,ja as w,la as k}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as m,Kb as _,Lb as S,Vb as L,Wb as f,bb as p,cb as s,ea as R,ja as u,na as c,nc as C,oa as b,oc as v,qb as I,zb as n}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var pe=(()=>{let i=class i extends K{constructor(t,o,e){super(o),this.fb=t,this.dialog=o,this.data=e,this.cstnService=u(d),this.form=t.group({name:[e?.name,[E.required,E.minLength(1)]],number:[e?.number,[E.maxLength(24)]],primaryEmail:[e?.primaryEmail,[]],primaryPhone:[e?.primaryPhone,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.employees.update(this.data.id,this.form.value)):this.save(this.cstnService.employees.create(this.form.value)));}};i.ɵfac=function(o){return new(o||i)(s($),s(G),s(j));},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[C([]),I,v],decls:8,vars:5,consts:()=>{let t;t="Name";let o;o="Number";let e;e="Phone";let l;return l="Email",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","number","label",o],["formControlName","primaryPhone","label",e],["formControlName","primaryEmail","label",l],[3,"actions"]];},template:function(o,e){o&1&&(S(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),_()(),S(7,"sz-ui-dialog-actions",6)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),p(2),n("formGroup",e.form),p(5),n("actions",e.actions));},dependencies:[B,y,z,P,A,D,M,X,Q,g,Z,x,J,W],encapsulation:2});let r=i;return r;})();var Se=(()=>{let i=class i{constructor(t,o){this.dialog=t,this.router=o,this.cstnService=u(d),this.dataSource=new re(),this.appBarConfig={title:q.employees},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setHeaderSortable(!0),a.string("number"),a.string("primaryEmail").setVisible(!1),a.string("primaryPhone").setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),ie.menu([N.edit(e=>this.openSaveComponent(e)),h.divider(),N.barcode(e=>this.openBarcodeWriterComponent(e)),h.divider(),N.delete(e=>this.openProjectDeleteComponent(e))])),this.get();}openSaveComponent(t){this.dialog.open(pe,{data:t}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openBarcodeWriterComponent(t){let e=`${window.location.origin}/${H.PageEmployee.replace(":employeeId",t.id)}`;this.dialog.open(oe,{data:{msg:e,share:{title:t.name,enabled:!0},download:{filename:t.name}}}).afterClosed().subscribe(l=>{});}openProjectDeleteComponent(t){this.dialog.open(ee,{data:te.delete(this.cstnService.employees.delete(t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.employees.get(this.dataSource.getQuery()).pipe(ne(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)(s(Y),s(U));},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-employees"]],features:[C([])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,e){o&1&&(S(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return e.get();}),m(2,"button",3),f("click",function(){return e.openSaveComponent();}),m(3,"span"),L(4,0),_()()(),m(5,"sz-ui-table",4),f("update",function(){return e.get();}),_()),o&2&&(n("config",e.appBarConfig),p(),n("dataSource",e.dataSource),p(4),n("dataSource",e.dataSource));},dependencies:[w,se,ae,O],encapsulation:2});let r=i;return r;})();var it=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=b({type:i}),i.ɵinj=R({providers:[d],imports:[V.forChild([{path:"",component:Se}]),M,F,k,me,g,O]});let r=i;return r;})();export{it as EmployeesModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/