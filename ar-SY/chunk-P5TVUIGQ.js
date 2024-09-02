import{e as ae}from"./chunk-IBEGBZPR.js";import{a as ee,d as te,e as d,h as oe,i as ie,j as re}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as m}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{b as Q,f as J,g as K,h as W,j as Z,k as h}from"./chunk-JDBQ45YP.js";import{a as H}from"./chunk-ZGUTF2MC.js";import{j as s,k as q}from"./chunk-53DZ6NLX.js";import{a as V,b as $,d as Y,e as G,g as E}from"./chunk-7B3GMYBR.js";import{c as j,p as w,q as k,s as x,t as g}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as b,f as I,g as v,l as z,n as P,q as L,r as F,t as y,u as C}from"./chunk-QZRJHJEV.js";import{Y as X}from"./chunk-4QPQ7IQ3.js";import{d as B}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{la as U}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as l,Kb as u,Lb as c,Vb as D,Wb as O,bb as p,ea as T,ja as a,mb as R,mc as _,na as f,nc as M,oa as A,yb as n}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var se=(()=>{let e=class e extends J{constructor(){let o=a(V);super(o),this.mlabService=a(m),this.fb=a(F),this.data=a($);let t=this.fb;this.dialog=o;let i=this.data;this.form=t.group({name:[i?.name,[b.required,b.minLength(1)]],description:[i?.description,[]],enabled:[i?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.priceProfiles.update(this.data.id,this.form.value)):this.save(this.mlabService.priceProfiles.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-price-profiles-price-profile-save"]],standalone:!0,features:[_([]),R,M],decls:8,vars:5,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0645\u0641\u0639\u0644",[i,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","enabled"],[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",1),l(1,"mat-dialog-content")(2,"form",2),c(3,"sz-ui-form-field-input",3)(4,"sz-ui-form-field-textarea",4),l(5,"mat-checkbox",5),D(6,0),u()()(),c(7,"sz-ui-dialog-actions",6)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),p(2),n("formGroup",i.form),p(5),n("actions",i.actions));},dependencies:[C,z,I,v,P,L,E,G,h,K,W,g,j,x,k,w,ae],encapsulation:2});let r=e;return r;})();var N=(()=>{let e=class e{constructor(){this.dialog=a(Y),this.mlabService=a(m),this.dataSource=new oe(),this.appBarConfig={title:X.price_profiles,menu:q.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(d.uuid("id"),d.string("name"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openPriceProfileDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(se,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPriceProfileDeleteComponent(o){this.dialog.open(Z,{data:Q.delete(this.mlabService.priceProfiles.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.priceProfiles.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-price-profiles"]],standalone:!0,features:[_([m]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(l(0,"sz-ui-table-bar",0),O("changed",function(){return i.get();}),u(),l(1,"sz-ui-table",1),O("update",function(){return i.get();}),u()),t&2&&(n("config",i.appBarConfig)("dataSource",i.dataSource),p(),n("dataSource",i.dataSource));},dependencies:[ee,te],encapsulation:2});let r=e;return r;})();var He=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=A({type:e}),e.ɵinj=T({providers:[m],imports:[y,C,B.forChild([{path:"",component:N}]),E,U,re,g,h,H,N]});let r=e;return r;})();export{He as PriceProfilesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/