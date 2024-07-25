import{a as _}from"./chunk-ZMAPWJ3U.js";import{a as s,b as ee,d as te,e as oe,g as ie,j as re,k as ne}from"./chunk-OXNI3R2W.js";import"./chunk-57MK3MCC.js";import"./chunk-RANL45GR.js";import"./chunk-JJYQDYNW.js";import"./chunk-GCHJ7W3W.js";import{e as Q,f as J,g as Y,i as Z,j as M,k as x}from"./chunk-6HIEJ57F.js";import{a as E}from"./chunk-DPGFXQMX.js";import{h as g}from"./chunk-7T3MPUQD.js";import{a as B,b as G,d as W,e as j,g as O}from"./chunk-CYOCH3CE.js";import"./chunk-Q3MXFXKP.js";import{A as q,e as w,v as H}from"./chunk-QKXMHSCW.js";import"./chunk-LPD4JHC6.js";import"./chunk-EU6EN4RU.js";import{c as X}from"./chunk-SD2GIAU7.js";import"./chunk-QBVRT5EG.js";import{d as u,f as A,g as D,l as L,n as b,q as y,r as P,u as $}from"./chunk-L5ME2H6Y.js";import"./chunk-E5LY2UIH.js";import{c as F,e as U}from"./chunk-OU5TKGLO.js";import"./chunk-JIFD7XOW.js";import{ia as V,ja as k,la as K}from"./chunk-NIXMLTIK.js";import"./chunk-IMTADF7I.js";import{Jb as a,Kb as p,Lb as l,Vb as v,Wb as C,bb as S,cb as m,ea as R,ja as c,na as f,nc as N,oa as h,oc as z,qb as I,zb as n}from"./chunk-XBY5TSK6.js";import"./chunk-VWKXNZKE.js";var se=(()=>{let i=class i extends Q{constructor(o,t,e){super(t),this.fb=o,this.dialog=t,this.data=e,this.cstnService=c(_),this.form=o.group({firstName:[e?.firstName,[u.required,u.minLength(1)]],lastName:[e?.lastName,[u.required,u.minLength(1)]],primaryEmail:[e?.primaryEmail,[]],primaryPhone:[e?.primaryPhone,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.workers.update(this.data.id,this.form.value)):this.save(this.cstnService.workers.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)(m(P),m(B),m(G));},i.ɵcmp=f({type:i,selectors:[["sz-constr-construction-projects-save"]],standalone:!0,features:[N([]),I,z],decls:10,vars:5,consts:()=>{let o;o="First name";let t;t="Last name";let e;e="Email";let d;return d="Phone",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",o],["formControlName","lastName","label",t],["formControlName","primaryEmail","label",e],["formControlName","primaryPhone","label",d],[3,"actions"]];},template:function(t,e){t&1&&(l(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),p(),a(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),p()()(),l(9,"sz-ui-dialog-actions",7)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),S(2),n("formGroup",e.form),S(7),n("actions",e.actions));},dependencies:[$,L,A,D,b,y,O,j,H,M,J,Y,q,w],encapsulation:2});let r=i;return r;})();var me=(()=>{let i=class i{constructor(o,t){this.dialog=o,this.router=t,this.cstnService=c(_),this.title=X.workers,this.dataSource=new te(),this.dataSource.columnDefs.push(s.uuid("id"),s.string("firstName").setHeaderSortable(!0),s.string("lastName").setHeaderSortable(!0),s.string("primaryEmail").setHeaderSortable(!1),s.string("primaryPhone").setHeaderSortable(!1),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),ee.menu([g.edit(e=>this.openSaveComponent(e)),g.delete(e=>this.openProjectDeleteComponent(e))])),this.get();}openSaveComponent(o){this.dialog.open(se,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openProjectDeleteComponent(o){this.dialog.open(Z,{data:x.delete(this.cstnService.workers.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.workers.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)(m(W),m(F));},i.ɵcmp=f({type:i,selectors:[["sz-constr-construction-workers"]],features:[N([])],decls:6,vars:3,consts:()=>{let o;return o="Add",[o,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,e){t&1&&(l(0,"sz-ui-app-bar",1),a(1,"sz-ui-table-search-filter",2),C("changed",function(){return e.get();}),a(2,"button",3),C("click",function(){return e.openSaveComponent();}),a(3,"span"),v(4,0),p()()(),a(5,"sz-ui-table",4),C("update",function(){return e.get();}),p()),t&2&&(n("title",e.title),S(),n("dataSource",e.dataSource),S(4),n("dataSource",e.dataSource));},dependencies:[k,re,ie,E],encapsulation:2});let r=i;return r;})();var Ze=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[_],imports:[U.forChild([{path:"",component:me}]),O,V,K,ne,M,E]});let r=i;return r;})();export{Ze as WorkersModule};/**i18n:2203e027d52d3f0736b00c23c47b63f6931e6ad93b70d88f30a525b6a40c92e8*/