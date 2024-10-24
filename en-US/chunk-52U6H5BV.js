import{a as u}from"./chunk-IUKZROKA.js";import{a as P}from"./chunk-VRJ5QMGJ.js";import{c as x,d as q,e as r,h as Q,i as J}from"./chunk-LFBBKJHQ.js";import"./chunk-DJTCXLE6.js";import"./chunk-WR67YADW.js";import"./chunk-DNPEC467.js";import{c as B,g as X,h as H,i as k,k as w,l as j}from"./chunk-3VDM3QBA.js";import"./chunk-SH55UZR2.js";import{a as I,b as F,d as L,e as y,g as V}from"./chunk-NXWHFD5J.js";import{c as $,o as U,q as G,s as Z}from"./chunk-YE7OGPQO.js";import"./chunk-QPPKO7QS.js";import"./chunk-NHKTZSL7.js";import"./chunk-JDRER5OW.js";import"./chunk-VLFDLUKF.js";import{d as g,f as E,g as M,l as z,o as b,r as v,s as D,u as R}from"./chunk-SZ4JOIPB.js";import{b as l,c as h}from"./chunk-ZKT34U6O.js";import"./chunk-OAHNBXW3.js";import"./chunk-6KLEPFJV.js";import{c as O}from"./chunk-TROKCKRK.js";import"./chunk-I5YU2A2W.js";import{r as A}from"./chunk-OH3VJFHV.js";import"./chunk-KHQUVCMB.js";import"./chunk-O5U4UK7G.js";import"./chunk-IOFQXYPN.js";import{Jb as m,Kb as S,Lb as _,Wb as N,bb as d,ja as n,mb as T,mc as f,na as c,nc as C,yb as s}from"./chunk-4TXFHTB5.js";import"./chunk-UD7IN7DC.js";var K=(()=>{let i=class i extends X{constructor(){super(n(I)),this.fb=n(D),this.data=n(F),this.cstnService=n(u);let e=this.fb,t=this.data;this.form=e.group({name:[t?.name,[g.required,g.minLength(1)]],description:[t?.description,[]],code:[t?.code,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.cstnService.zones.update(this.data.id,this.form.value)):this.save(this.cstnService.zones.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-zones-save"]],standalone:!0,features:[f([u]),T,C],decls:7,vars:5,consts:()=>{let e;e="Name";let t;t="Description";let o;return o="Code",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","code","label",o],[3,"actions"]];},template:function(t,o){t&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input-text",4),S()(),_(6,"sz-ui-dialog-actions",5)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),d(2),s("formGroup",o.form),d(4),s("actions",o.actions));},dependencies:[R,z,E,M,b,v,V,y,U,j,H,k,Z,$,G],encapsulation:2});let a=i;return a;})();var W=(()=>{let i=class i{constructor(){this.cstnService=n(u),this.dialog=n(L),this.router=n(A),this.dataSource=new Q("name"),this.appBarConfig={title:O.zones,menu:h.default([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(r.uuid("id"),r.hyperlink("name").setClickFn(e=>this.router.navigate([P.Zones,e.id])).setHeaderSortable(!0),r.string("code"),r.number("teamsCount").setValueGetter(e=>e.teams?.length).setHeaderName(O.teams).setHeaderSortable(!1),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu(h.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openZoneDeleteComponent.bind(this))]))),this.get();}openSaveComponent(e){this.dialog.open(K,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openZoneDeleteComponent(e){this.dialog.open(w,{data:B.delete(this.cstnService.zones.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.zones.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=c({type:i,selectors:[["sz-constr-construction-zones"]],standalone:!0,features:[f([]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(m(0,"sz-ui-table-bar",0),N("changed",function(){return o.get();}),S(),m(1,"sz-ui-table",1),N("update",function(){return o.get();}),S()),t&2&&(s("config",o.appBarConfig)("dataSource",o.dataSource),d(),s("dataSource",o.dataSource));},dependencies:[x,q],encapsulation:2});let a=i;return a;})();var Re=[{path:"",component:W}];export{Re as default};/**i18n:3baa7a52fa2dfa3c4602a0f5c18b10b468e666f31530cd067c23c1079d9af4f3*/