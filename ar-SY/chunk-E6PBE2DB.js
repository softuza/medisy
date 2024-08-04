import{a as S}from"./chunk-YGNGKTLH.js";import{a,b as oe,d as ie,e as re,g as ne,j as ae,k as se}from"./chunk-CFLMB7QA.js";import"./chunk-Y6QLNZBA.js";import"./chunk-UFH5BM6Q.js";import{h as te}from"./chunk-XDI5AEAG.js";import"./chunk-3Q7NLQRN.js";import"./chunk-KBUMPZIN.js";import{e as J,f as K,g as Z,i as x,j as g,k as ee}from"./chunk-H4VSYEVM.js";import{a as O}from"./chunk-LOVEEZPS.js";import{e as h,h as N}from"./chunk-K3NC44AL.js";import{a as G,b as j,d as Y,e as X,g as M}from"./chunk-LZAEHKGK.js";import{e as H,t as q,x as Q}from"./chunk-F5Z4HPDI.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as W}from"./chunk-LSJORZSZ.js";import"./chunk-GABKYTU7.js";import{d as E,f as z,g as P,l as y,n as A,q as D,r as $,u as B}from"./chunk-SVCJK6WQ.js";import"./chunk-WSOC6MFL.js";import{c as V,e as U}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ia as F,ja as w,la as k}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as m,Kb as _,Lb as p,Vb as b,Wb as f,bb as l,cb as s,ea as L,ja as u,na as c,nc as C,oa as R,oc as v,qb as I,zb as n}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var le=(()=>{let i=class i extends J{constructor(e,o,t){super(o),this.fb=e,this.dialog=o,this.data=t,this.cstnService=u(S),this.form=e.group({name:[t?.name,[E.required,E.minLength(1)]],number:[t?.number,[E.maxLength(24)]],primaryEmail:[t?.primaryEmail,[]],primaryPhone:[t?.primaryPhone,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.employees.update(this.data.id,this.form.value)):this.save(this.cstnService.employees.create(this.form.value)));}};i.ɵfac=function(o){return new(o||i)(s($),s(G),s(j));},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[C([]),I,v],decls:8,vars:5,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let o;o="\u0627\u0644\u0631\u0642\u0645";let t;t="\u0627\u0644\u0647\u0627\u062A\u0641";let d;return d="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","number","label",o],["formControlName","primaryPhone","label",t],["formControlName","primaryEmail","label",d],[3,"actions"]];},template:function(o,t){o&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),_()(),p(7,"sz-ui-dialog-actions",6)),o&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),n("formGroup",t.form),l(5),n("actions",t.actions));},dependencies:[B,y,z,P,A,D,M,X,q,g,K,Z,Q,H],encapsulation:2});let r=i;return r;})();var pe=(()=>{let i=class i{constructor(e,o){this.dialog=e,this.router=o,this.cstnService=u(S),this.dataSource=new ie(),this.appBarConfig={title:W.employees},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setHeaderSortable(!0),a.string("number"),a.string("primaryEmail").setVisible(!1),a.string("primaryPhone").setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),oe.menu([N.edit(t=>this.openSaveComponent(t)),h.divider(),N.barcode(t=>this.openBarcodeWriterComponent(t)),h.divider(),N.delete(t=>this.openProjectDeleteComponent(t))])),this.get();}openSaveComponent(e){this.dialog.open(le,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openBarcodeWriterComponent(e){this.dialog.open(te,{data:{msg:e.name,share:{title:e.name,enabled:!0},download:{filename:e.name}}}).afterClosed().subscribe(o=>{});}openProjectDeleteComponent(e){this.dialog.open(x,{data:ee.delete(this.cstnService.employees.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.employees.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)(s(Y),s(V));},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-employees"]],features:[C([])],decls:6,vars:3,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,t){o&1&&(p(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return t.get();}),m(2,"button",3),f("click",function(){return t.openSaveComponent();}),m(3,"span"),b(4,0),_()()(),m(5,"sz-ui-table",4),f("update",function(){return t.get();}),_()),o&2&&(n("config",t.appBarConfig),l(),n("dataSource",t.dataSource),l(4),n("dataSource",t.dataSource));},dependencies:[w,ae,ne,O],encapsulation:2});let r=i;return r;})();var tt=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=R({type:i}),i.ɵinj=L({providers:[S],imports:[U.forChild([{path:"",component:pe}]),M,F,k,se,g,O]});let r=i;return r;})();export{tt as EmployeesModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/