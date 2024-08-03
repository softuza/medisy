import{a as s}from"./chunk-EU5PTEAE.js";import{a as oe}from"./chunk-PLILYGN2.js";import{a as f,b as me,d as le,e as pe,j as de,k as b}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import"./chunk-6EOVNP6P.js";import"./chunk-4NTC2VLV.js";import{e as ie,f as ne,g as re,i as ae,j as I,k as se}from"./chunk-76IND4GV.js";import{a as D}from"./chunk-ZPKIPVTE.js";import{e as T,h as O,j as E}from"./chunk-TIEHGEOE.js";import{a as Q,b as J,d as M,e as K,g as N}from"./chunk-QCMAXDKX.js";import{b as v,e as W,t as x,w as ee,x as te}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as Y}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import{d as z,f as $,g as j,l as G,n as w,q,r as X,u as Z}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{a as h,c as k,e as _}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as H,la as g}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Fa as L,Fc as B,Jb as d,Kb as u,Lb as l,Wb as V,bb as m,cb as S,ea as F,ja as r,na as p,nc as c,oa as R,ob as P,oc as C,qb as U,zb as a}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var ue=(()=>{let e=class e extends ie{constructor(o,t,i){super(t),this.fb=o,this.dialog=t,this.data=i,this.cstnService=r(s),this.form=o.group({name:[i?.unit?.name,[z.required,z.minLength(1)]],description:[i?.unit?.description,[]],zoneId:[i?.zoneId,[z.required]]});}submit(){this.IsValid()&&(this.data?.unit?this.save(this.cstnService.units.update(this.data.unit.id,this.form.value)):this.save(this.cstnService.units.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(S(X),S(Q),S(J));},e.ɵcmp=p({type:e,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[c([]),U,C],decls:6,vars:5,consts:()=>{let o;o="Name";let t;return t="Description",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(l(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),l(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),u()(),l(5,"sz-ui-dialog-actions",4)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),m(2),a("formGroup",i.form),m(3),a("actions",i.actions));},dependencies:[Z,G,$,j,w,q,N,K,x,I,ne,re,te,W,ee],encapsulation:2});let n=e;return n;})();var A=(()=>{let e=class e{constructor(){this.route=r(h),this.router=r(k),this.dialog=r(M),this.locale=r(B),this.cstnService=r(s),this.zone=L.required(),this.dataSource=new le(["name"]),this.card={title:Y.units,menu:E.more([O.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(f.uuid("id"),f.string("name"),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),me.menu([O.edit(o=>this.openSaveComponent(o)),T.divider(),O.delete(o=>this.openDeleteComponent(o))]));}ngOnInit(){this.dataSource.filtration?.equal("zoneId",this.zone().id),this.get();}openSaveComponent(o){this.dialog.open(ue,{data:{zoneId:this.zone().id,unit:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(ae,{data:se.delete(this.cstnService.units.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.units.get(this.dataSource.getQuery()).pipe(pe(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=p({type:e,selectors:[["sz-constr-construction-zone-units"]],inputs:{zone:[1,"zone"]},standalone:!0,features:[c([s]),C],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),V("update",function(){return i.get();}),u()()),t&2&&(a("card",i.card),m(),a("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[_,b,de,g,oe],encapsulation:2});let n=e;return n;})();var ce=(()=>{let e=class e{constructor(){this.cstnService=r(s),this.route=r(h),this.dialog=r(M),this.alert=P(void 0),this.menu=E.more([T.divider()]),this.zone=this.route.snapshot.data.zone;}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=p({type:e,selectors:[["sz-constr-construction-zone"]],features:[c([])],decls:5,vars:5,consts:[[3,"title","subtitle","menu"],[3,"alert"],[1,"tw-my-4"],[3,"zone"]],template:function(t,i){t&1&&(l(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),d(2,"div",2),l(3,"sz-constr-construction-zone-units",3),u(),l(4,"div",2)),t&2&&(a("title",i.zone.name)("subtitle",i.zone.code)("menu",i.menu),m(),a("alert",i.alert()),m(2),a("zone",i.zone));},dependencies:[v,D,A],encapsulation:2});let n=e;return n;})();var Ct=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=R({type:e}),e.ɵinj=F({providers:[s],imports:[_.forChild([{path:"",component:ce}]),N,H,g,v,b,I,D,A]});let n=e;return n;})();export{Ct as ZoneModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/