import"./chunk-VKRZZQZK.js";import{c as me}from"./chunk-I4TEJMEB.js";import{a as re,c as ae,j as ne,k as se,l as m}from"./chunk-MDPJZTYR.js";import"./chunk-TCXRPYGI.js";import"./chunk-CUIKVH6O.js";import{c as Q,h as W,i as Y,j as ee,l as te,m as oe,n as ie}from"./chunk-UVKODSF3.js";import{b as q,c as J}from"./chunk-LB4M65MR.js";import{b as h}from"./chunk-I3RE2UAN.js";import{a as K,g as C}from"./chunk-E2YN42QZ.js";import{a as X,b as Z,d as B,e as k,g}from"./chunk-2OM43JW4.js";import{A as H,h as $,v as w,z as x}from"./chunk-PSHVV3L5.js";import{N as j,d as M,f as F,g as D,k as I,m as b,p as y,q as L,t as G}from"./chunk-7YDZJT25.js";import"./chunk-QYJYVPVW.js";import{Ga as V,Ja as U,r as N}from"./chunk-NQOK3G2M.js";import{Fb as u,Gb as S,Hb as s,M as f,Tb as z,ea as v,fa as R,gb as d,hb as a,hc as _,ka as E,kc as A,oa as c,ob as O,pa as P,vb as n}from"./chunk-XEAZENSO.js";var p=(()=>{let e=class e extends J{constructor(o){super(o,"softuza-reporting"),this.reports=new q(this.http,`${this.basePath}/v1/reports`);}};e.ɵfac=function(t){return new(t||e)(E(N));},e.ɵprov=v({token:e,factory:e.ɵfac});let r=e;return r;})();var de=(()=>{let e=class e extends W{constructor(o,t,i,l){super(i),this.srptService=o,this.fb=t,this.dialog=i,this.data=l,this.form=t.group({name:[l?.name,[M.required]],description:[l?.description,[M.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(a(p),a(L),a(X),a(Z));},e.ɵcmp=c({type:e,selectors:[["softuza-reportins-reports-save"]],standalone:!0,features:[_([]),O,A],decls:6,vars:3,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),s(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",i.header),d(2),n("formGroup",i.form),d(3),n("actions",i.actions));},dependencies:[G,I,F,D,b,y,g,k,$,me,oe,Y,ee,H,w,x],encapsulation:2});let r=e;return r;})();var le=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.srptService=t,this.title=K.reports,this.dataSource=new ae(),this.dataSource.fields.push(m.uuid("id"),m.string("name"),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),re.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(o){this.dialog.open(de,{data:o}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.reports.get(this.dataSource.buildRequest()).pipe(Q(this.dataSource.indicator),f(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(a(B),a(p));},e.ɵcmp=c({type:e,selectors:[["softuza-reporting-reports"]],features:[_([])],decls:2,vars:3,consts:[[3,"title"],[3,"stateEnabled","dataSource","update"]],template:function(t,i){t&1&&(s(0,"sz-ui-header-info",0),u(1,"sz-ui-table",1),z("update",function(){return i.get();}),S()),t&2&&(n("title",i.title),d(),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ne,h],encapsulation:2});let r=e;return r;})();var fe=[{path:"",component:le}];var nt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=P({type:e}),e.ɵinj=R({providers:[p],imports:[j.forChild(fe),g,V,se,h,U]});let r=e;return r;})();export{nt as ReportsModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/