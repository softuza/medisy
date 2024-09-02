import{a as l}from"./chunk-GK4LJXH7.js";import{a as X}from"./chunk-YCRED7JA.js";import{a as ee,b as te,c as a,f as oe,g as ie,h as re}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as Q,f as x,g as J,h as K,j as W,k as g}from"./chunk-ZUXIOQ5W.js";import"./chunk-BJI27WIG.js";import{a as P,b as $,d as U,e as G,g as N}from"./chunk-XPOR4ANW.js";import{c as j,q as w,s as H,t as k}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import{d as M,f as b,g as D,l as R,n as A,q as I,r as F,t as L}from"./chunk-H2FFMEH6.js";import{b as m,c as q}from"./chunk-QW5IGDYW.js";import{a as Y}from"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as O}from"./chunk-TCPYXQGZ.js";import{r as y,s as V}from"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import{Ia as B,La as Z}from"./chunk-OIZYHDJE.js";import{Jb as p,Kb as u,Lb as f,Wb as h,bb as d,ea as E,ja as n,mb as v,mc as C,na as c,nc as _,oa as z,yb as s}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var ae=(()=>{let t=class t extends x{constructor(){let e=n(P);super(e),this.fb=n(F),this.data=n($),this.cstnService=n(l);let o=this.fb;this.dialog=e;let i=this.data;this.form=o.group({name:[i?.name,[M.required,M.minLength(1)]],description:[i?.description,[]],code:[i?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=c({type:t,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[C([]),v,_],decls:7,vars:5,consts:()=>{let e;e="Name";let o;o="Description";let i;return i="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","code","label",i],[3,"actions"]];},template:function(o,i){o&1&&(f(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),u()(),f(6,"sz-ui-dialog-actions",5)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),s("formGroup",i.form),d(4),s("actions",i.actions));},dependencies:[L,R,b,D,A,I,N,G,w,g,J,K,k,j,H],encapsulation:2});let r=t;return r;})();var T=(()=>{let t=class t{constructor(){this.cstnService=n(l),this.dialog=n(U),this.router=n(y),this.dataSource=new oe("name"),this.appBarConfig={title:O.zones,menu:q.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(e=>this.router.navigate([X.Zones,e.id])).setHeaderSortable(!0),a.string("code"),a.number("teamsCount").setValueGetter(e=>e.teams?.length).setHeaderName(O.teams).setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openZoneDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(ae,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openZoneDeleteComponent(e){this.dialog.open(W,{data:Q.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=c({type:t,selectors:[["sz-constr-construction-zones"]],standalone:!0,features:[C([]),_],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(p(0,"sz-ui-table-bar",0),h("changed",function(){return i.get();}),u(),p(1,"sz-ui-table",1),h("update",function(){return i.get();}),u()),o&2&&(s("config",i.appBarConfig)("dataSource",i.dataSource),d(),s("dataSource",i.dataSource));},dependencies:[ee,te],encapsulation:2});let r=t;return r;})();var ke=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=z({type:t}),t.ɵinj=E({providers:[l],imports:[V.forChild([{path:"",component:T}]),N,B,Z,re,g,Y,T]});let r=t;return r;})();export{ke as ZonesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/