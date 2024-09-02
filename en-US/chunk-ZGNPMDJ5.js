import{b as N,c as h}from"./chunk-VEEBMXXL.js";import{c as ae}from"./chunk-U6VB2DHS.js";import{a as d}from"./chunk-U2LCFH5T.js";import{a,d as te,e as oe,f as ie,i as re,j as ne}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as K,f as W,g as Y,h as Z,j as x,k as ee}from"./chunk-JDBQ45YP.js";import{a as J}from"./chunk-ZGUTF2MC.js";import{j as p,k as Q}from"./chunk-53DZ6NLX.js";import{a as F,b as $,d as B,e as U,g}from"./chunk-7B3GMYBR.js";import{c as w,r as k,s as q,t as H}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import{i as X}from"./chunk-IT3CNXEP.js";import{d as c,f as v,g as P,l as b,n as A,q as D,r as y,u as G}from"./chunk-QZRJHJEV.js";import{Y as T}from"./chunk-4QPQ7IQ3.js";import{d as L}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as V,la as j}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as u,Kb as S,Lb as f,Wb as C,bb as m,ea as R,ja as l,mb as z,mc as M,na as _,nc as I,oa as O,yb as n}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var le=(()=>{let e=class e extends W{constructor(){let i=l(F);super(i),this.srptService=l(d),this.fb=l(y),this.data=l($),this.printTechnologies=Object.keys(h).map(s=>h[s]),this.printMedias=Object.keys(N).map(s=>N[s]);let o=this.fb;this.dialog=i;let t=this.data;this.form=o.group({name:[t?.name,[c.required]],description:[t?.description,[c.maxLength(4096)]],printTechnology:[t?.printTechnology,[c.required]],printMedia:[t?.printMedia,[c.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=_({type:e,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),z,I],decls:8,vars:9,consts:()=>{let i;i="Name";let o;o="Description";let t;t="Technology";let s;return s="Media",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",o],["formControlName","printTechnology","label",t,3,"source","localizedValue"],["formControlName","printMedia","label",s,3,"source","localizedValue"],[3,"actions"]];},template:function(o,t){o&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),S()(),f(7,"sz-ui-dialog-actions",6)),o&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),n("formGroup",t.form),m(3),n("source",t.printTechnologies)("localizedValue",!0),m(),n("source",t.printMedias)("localizedValue",!0),m(),n("actions",t.actions));},dependencies:[G,b,v,P,A,D,g,U,X,ae,ee,Y,Z,H,w,q,k],encapsulation:2});let r=e;return r;})();var me=(()=>{let e=class e{constructor(){this.dialog=l(B),this.srptService=l(d),this.dataSource=new te(),this.appBarConfig={title:T.printers,menu:Q.default().setItems([p.add(this.openSaveComponent.bind(this)),p.menu([p.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setValueClassFontBold().setStacked(a.string("description").setValueClassFontSmall()),a.enum("printTechnology").setHeaderName(T.techonology).setResponsive(!0),a.enum("printMedia").setHeaderName(T.media).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(le,{data:i}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReportDeleteComponent(i){this.dialog.open(x,{data:K.delete(this.srptService.templates.delete(i.id),i)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=_({type:e,selectors:[["sz-mgmt-reporting-printers"]],features:[M([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(u(0,"sz-ui-table-bar",0),C("changed",function(){return t.get();}),S(),u(1,"sz-ui-table",1),C("update",function(){return t.get();}),S()),o&2&&(n("config",t.appBarConfig)("dataSource",t.dataSource),m(),n("dataSource",t.dataSource));},dependencies:[re,ie],encapsulation:2});let r=e;return r;})();var Ke=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=O({type:e}),e.ɵinj=R({providers:[d],imports:[L.forChild([{path:"",component:me}]),g,j,ne,J,V]});let r=e;return r;})();export{Ke as PrintersModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/