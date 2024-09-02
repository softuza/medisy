import{a as l}from"./chunk-REOG2CV6.js";import{a as Z}from"./chunk-YCRED7JA.js";import{a,d as Y,e as ee,f as te,i as oe,j as ie}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as Q,f as x,g as J,h as K,j as W,k as N}from"./chunk-JDBQ45YP.js";import{a as q}from"./chunk-ZGUTF2MC.js";import{j as m,k}from"./chunk-53DZ6NLX.js";import{a as B,b as P,d as $,e as U,g as _}from"./chunk-7B3GMYBR.js";import{c as X,q as j,s as w,t as H}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as h,f as v,g as b,l as D,n as R,q as A,r as I,u as L}from"./chunk-QZRJHJEV.js";import{Y as M}from"./chunk-4QPQ7IQ3.js";import{c as F,d as y}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as V,la as G}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as p,Kb as u,Lb as f,Wb as g,bb as d,ea as O,ja as n,mb as E,mc as C,na as c,nc as z,oa as T,yb as s}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var ne=(()=>{let t=class t extends x{constructor(){let e=n(B);super(e),this.fb=n(I),this.data=n(P),this.cstnService=n(l);let o=this.fb;this.dialog=e;let i=this.data;this.form=o.group({name:[i?.name,[h.required,h.minLength(1)]],description:[i?.description,[]],code:[i?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=c({type:t,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[C([]),E,z],decls:7,vars:5,consts:()=>{let e;e="Name";let o;o="Description";let i;return i="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","code","label",i],[3,"actions"]];},template:function(o,i){o&1&&(f(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),u()(),f(6,"sz-ui-dialog-actions",5)),o&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),s("formGroup",i.form),d(4),s("actions",i.actions));},dependencies:[L,D,v,b,R,A,_,U,j,N,J,K,H,X,w],encapsulation:2});let r=t;return r;})();var ae=(()=>{let t=class t{constructor(){this.cstnService=n(l),this.dialog=n($),this.router=n(F),this.dataSource=new Y("name"),this.appBarConfig={title:M.zones,menu:k.default().setItems([m.add(this.openSaveComponent.bind(this)),m.menu([m.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(e=>this.router.navigate([Z.Zones,e.id])).setHeaderSortable(!0),a.string("code"),a.number("teamsCount").setValueGetter(e=>e.teams?.length).setHeaderName(M.teams).setHeaderSortable(!1),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([m.edit(this.openSaveComponent.bind(this)),m.divider(),m.delete(this.openZoneDeleteComponent.bind(this))])),this.get();}openSaveComponent(e){this.dialog.open(ne,{data:e}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openZoneDeleteComponent(e){this.dialog.open(W,{data:Q.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(o){return new(o||t)();},t.ɵcmp=c({type:t,selectors:[["sz-constr-construction-zones"]],features:[C([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,i){o&1&&(p(0,"sz-ui-table-bar",0),g("changed",function(){return i.get();}),u(),p(1,"sz-ui-table",1),g("update",function(){return i.get();}),u()),o&2&&(s("config",i.appBarConfig)("dataSource",i.dataSource),d(),s("dataSource",i.dataSource));},dependencies:[oe,te],encapsulation:2});let r=t;return r;})();var Qe=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=T({type:t}),t.ɵinj=O({providers:[l],imports:[y.forChild([{path:"",component:ae}]),_,V,G,ie,N,q]});let r=t;return r;})();export{Qe as ZonesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/