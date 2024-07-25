import{a as c,b as lt,d as ct,e as dt,g as ut,j as St,k as ft}from"./chunk-YWDTDFTM.js";import"./chunk-FKO62C2A.js";import"./chunk-3J4QJFIN.js";import"./chunk-RRZ2CZZQ.js";import{e as nt,f as st,g as at,i as mt,j as N,k as pt}from"./chunk-3KL6H3VE.js";import{a as g,b as s,c as rt}from"./chunk-32JZVJUS.js";import{a as M}from"./chunk-Q5IQGLYT.js";import{h as R}from"./chunk-P3ENBRN4.js";import{a as H,b as q,d as Q,e as K,g as T}from"./chunk-ZQMLEHSS.js";import"./chunk-A6YHNG43.js";import{A as it,e as Z,v as et,z as ot}from"./chunk-4XHII2ZT.js";import"./chunk-PM65J3YT.js";import"./chunk-QVY54UNP.js";import{c as tt}from"./chunk-IYPVJVJN.js";import"./chunk-Y6KSG27P.js";import{d as E,f as $,g as w,l as B,n as U,q as V,r as k,u as G}from"./chunk-ZC7ZJRIV.js";import"./chunk-URDXUOVA.js";import{c as J,e as x}from"./chunk-NSG4K5MN.js";import"./chunk-LW4DCJPB.js";import{ia as X,ja as W,la as Y}from"./chunk-UDJBHRXA.js";import{s as L}from"./chunk-VYNSNAUV.js";import{Jb as m,Kb as S,Lb as l,Vb as A,Wb as C,bb as p,cb as a,da as D,ea as I,ia as y,ja as f,na as h,nc as _,oa as P,oc as F,qb as j,zb as n}from"./chunk-HXKERC3G.js";import"./chunk-5LR2ZDFE.js";var O=class extends s{constructor(t,u){super(t,`${u}/v1/projects`),this.http=t,this.basePath=u,this.zones=new g(this.http,this.path,"zones");}};var v=class extends s{constructor(t,u){super(t,`${u}/v1/work-groups`),this.http=t,this.basePath=u,this.workers=new g(this.http,this.path,"workers");}};var d=(()=>{let t=class t extends rt{constructor(e){super(e,"constr-construction"),this.projects=new O(this.http,this.basePath),this.workGroups=new v(this.http,this.basePath),this.workers=new s(this.http,`${this.basePath}/v1/workers`),this.zones=new s(this.http,`${this.basePath}/v1/zones`),this.units=new s(this.http,`${this.basePath}/v1/units`);}};t.ɵfac=function(o){return new(o||t)(y(L));},t.ɵprov=D({token:t,factory:t.ɵfac});let r=t;return r;})();var ht=(()=>{let t=class t extends nt{constructor(e,o,i){super(o),this.fb=e,this.dialog=o,this.data=i,this.cstnService=f(d),this.form=e.group({name:[i?.name,[E.required,E.minLength(1)]],description:[i?.description,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.projects.update(this.data.id,this.form.value)):this.save(this.cstnService.projects.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(a(k),a(H),a(q));},t.ɵcmp=h({type:t,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[_([]),j,F],decls:6,vars:5,consts:()=>{let e;e="Name";let o;return o="Description",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],[3,"actions"]];},template:function(o,i){o&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),l(5,"sz-ui-dialog-actions",4)),o&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),n("formGroup",i.form),p(3),n("actions",i.actions));},dependencies:[G,B,$,w,U,V,T,K,et,N,st,at,it,Z,ot],encapsulation:2});let r=t;return r;})();var Ct=(()=>{let t=class t{constructor(e,o){this.dialog=e,this.router=o,this.cstnService=f(d),this.title=tt.projects,this.dataSource=new ct("name"),this.dataSource.columnDefs.push(c.uuid("id"),c.hyperlink("name",i=>`/mlab/test-types/${i.id}`).setHeaderSortable(!0),c.string("code").setStyleSmall().setResponsive(!0),c.date("createdAt").setVisible(!1),c.date("updatedAt").setVisible(!1),lt.menu([R.edit(i=>this.openSaveComponent(i)),R.delete(i=>this.openProjectDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(ht,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openProjectDeleteComponent(e){this.dialog.open(mt,{data:pt.delete(this.cstnService.projects.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.projects.get(this.dataSource.getQuery()).pipe(dt(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)(a(Q),a(J));},t.ɵcmp=h({type:t,selectors:[["sz-constr-construction-projects"]],features:[_([])],decls:6,vars:3,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(o,i){o&1&&(l(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),C("changed",function(){return i.get();}),m(2,"button",3),C("click",function(){return i.openSaveComponent();}),m(3,"span"),A(4,0),S()()(),m(5,"sz-ui-table",4),C("update",function(){return i.get();}),S()),o&2&&(n("title",i.title),p(),n("dataSource",i.dataSource),p(4),n("dataSource",i.dataSource));},dependencies:[W,St,ut,M],encapsulation:2});let r=t;return r;})();var ge=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=P({type:t}),t.ɵinj=I({providers:[d],imports:[x.forChild([{path:"",component:Ct}]),T,X,Y,ft,N,M]});let r=t;return r;})();export{ge as ProjectsModule};/**i18n:79ec1d6ab9b0f413e17b8384338c97fb384c6dfb2590b5c758a31a2471895c78*/