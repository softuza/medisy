import{b as h,c as R}from"./chunk-VEEBMXXL.js";import{c as se}from"./chunk-U6VB2DHS.js";import{a as p}from"./chunk-U2LCFH5T.js";import{a as oe,d as ie,e as a,h as re,i as ne,j as ae}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as W,f as Y,g as Z,h as x,j as ee,k as te}from"./chunk-JDBQ45YP.js";import{a as K}from"./chunk-ZGUTF2MC.js";import{j as d,k as J}from"./chunk-53DZ6NLX.js";import{a as $,b as B,d as U,e as X,g as T}from"./chunk-7B3GMYBR.js";import{c as k,r as q,s as H,t as Q}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import{i as j}from"./chunk-IT3CNXEP.js";import{d as c,f as P,g as b,l as A,n as D,q as y,r as G,u as L}from"./chunk-QZRJHJEV.js";import{Y as E}from"./chunk-4QPQ7IQ3.js";import{d as V}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as F,la as w}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as u,Kb as S,Lb as f,Wb as N,bb as m,ea as z,ja as l,mb as v,mc as M,na as _,nc as g,oa as I,yb as n}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var me=(()=>{let e=class e extends Y{constructor(){let i=l($);super(i),this.srptService=l(p),this.fb=l(G),this.data=l(B),this.printTechnologies=Object.keys(R).map(s=>R[s]),this.printMedias=Object.keys(h).map(s=>h[s]);let o=this.fb;this.dialog=i;let t=this.data;this.form=o.group({name:[t?.name,[c.required]],description:[t?.description,[c.maxLength(4096)]],printTechnology:[t?.printTechnology,[c.required]],printMedia:[t?.printMedia,[c.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.printers.update(this.data.id,this.form.value)):this.save(this.srptService.printers.create(this.form.value)));}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=_({type:e,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),v,g],decls:8,vars:9,consts:()=>{let i;i="Name";let o;o="Description";let t;t="Technology";let s;return s="Media",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",o],["formControlName","printTechnology","label",t,3,"source","localizedValue"],["formControlName","printMedia","label",s,3,"source","localizedValue"],[3,"actions"]];},template:function(o,t){o&1&&(f(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4)(6,"sz-ui-form-field-select",5),S()(),f(7,"sz-ui-dialog-actions",6)),o&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),n("formGroup",t.form),m(3),n("source",t.printTechnologies)("localizedValue",!0),m(),n("source",t.printMedias)("localizedValue",!0),m(),n("actions",t.actions));},dependencies:[L,A,P,b,D,y,T,X,j,se,te,Z,x,Q,k,H,q],encapsulation:2});let r=e;return r;})();var O=(()=>{let e=class e{constructor(){this.dialog=l(U),this.srptService=l(p),this.dataSource=new re(),this.appBarConfig={title:E.printers,menu:J.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.string("name").setValueClassFontBold().setStacked(a.string("description").setValueClassFontSmall()),a.enum("printTechnology").setHeaderName(E.techonology).setResponsive(!0),a.enum("printMedia").setHeaderName(E.media).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openReportDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:i}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openReportDeleteComponent(i){this.dialog.open(ee,{data:W.delete(this.srptService.templates.delete(i.id),i)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.srptService.printers.get(this.dataSource.getQuery()).pipe(ne(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};e.ɵfac=function(o){return new(o||e)();},e.ɵcmp=_({type:e,selectors:[["sz-mgmt-reporting-printers"]],standalone:!0,features:[M([]),g],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(o,t){o&1&&(u(0,"sz-ui-table-bar",0),N("changed",function(){return t.get();}),S(),u(1,"sz-ui-table",1),N("update",function(){return t.get();}),S()),o&2&&(n("config",t.appBarConfig)("dataSource",t.dataSource),m(),n("dataSource",t.dataSource));},dependencies:[oe,ie],encapsulation:2});let r=e;return r;})();var Qe=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=I({type:e}),e.ɵinj=z({providers:[p],imports:[V.forChild([{path:"",component:O}]),T,w,ae,K,F,O]});let r=e;return r;})();export{Qe as PrintersModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/