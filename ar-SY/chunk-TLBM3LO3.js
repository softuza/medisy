import{c as se}from"./chunk-QRNYUQ6K.js";import{a as M}from"./chunk-OTTXER4X.js";import{c as ie,e as re,u as ae,v as ne}from"./chunk-GHEGCXEZ.js";import{a as q}from"./chunk-BUSYHZDZ.js";import{c as J,h as K,i as Q,j as W,l as ee,m as te,n as oe}from"./chunk-DJTHGJMD.js";import{b as h}from"./chunk-KIWKP6WG.js";import{d as k}from"./chunk-EVZ4I5QA.js";import{a as X,b as Y,d as Z,e as B,g as _}from"./chunk-VQ3CVIXE.js";import{A as H,h as $,v as w,z as x}from"./chunk-75XLR4TY.js";import{d as g,f as A,g as I,k as F,m as b,p as y,q as G,t as j,y as L}from"./chunk-VZUJMTKN.js";import{i as C}from"./chunk-FVDEVSJ2.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Ga as V,Ja as U,r as O}from"./chunk-TT7ZQ2V6.js";import{Eb as c,Fb as u,Gb as s,M as l,Sb as z,da as v,ea as T,fb as p,gb as a,gc as S,ja as R,jc as D,na as f,nb as N,oa as P,ub as n}from"./chunk-CQJO6ZYU.js";var m=(()=>{let e=class e{constructor(o){this.http=o,this.basePath="softuza-reporting",this.reports=new k(this.http,`${this.basePath}/v1/reports`);}};e.ɵfac=function(t){return new(t||e)(R(O));},e.ɵprov=v({token:e,factory:e.ɵfac});let r=e;return r;})();var pe=(()=>{let e=class e extends K{constructor(o,t,i,d){super(i),this.srptService=o,this.fb=t,this.dialog=i,this.data=d,this.form=t.group({name:[d?.name,[g.required]],description:[d?.description,[g.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(a(m),a(G),a(X),a(Y));},e.ɵcmp=f({type:e,selectors:[["softuza-reportins-reports-save"]],standalone:!0,features:[S([]),N,D],decls:6,vars:3,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),u()(),s(5,"sz-ui-dialog-actions",4)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(3),n("actions",i.actions));},dependencies:[j,F,A,I,b,y,_,B,$,se,te,Q,W,H,w,x],encapsulation:2});let r=e;return r;})();var de=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.srptService=t,this.title=q.reports,this.dataSource=new re(),this.dataSource.addRows([ie.default([M.nameText(),M.createdAt(),M.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openReportDeleteComponent(i))])])]),this.get();}openSaveComponent(o){this.dialog.open(pe,{data:o}).afterClosed().pipe(l(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(ee,{data:oe.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().pipe(l(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.reports.get(this.dataSource.buildRequest()).pipe(J(this.dataSource.indicator),l(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(a(Z),a(m));},e.ɵcmp=f({type:e,selectors:[["softuza-reporting-reports"]],features:[S([])],decls:2,vars:3,consts:[[3,"title"],[3,"stateEnabled","dataSource","update"]],template:function(t,i){t&1&&(s(0,"sz-ui-header-info",0),c(1,"sz-ui-table",1),z("update",function(){return i.get();}),u()),t&2&&(n("title",i.title),p(),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ae,h],encapsulation:2});let r=e;return r;})();var le=[{path:"",component:de}];var rt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=P({type:e}),e.ɵinj=T({providers:[m],imports:[L.forChild(le),_,V,ne,h,U]});let r=e;return r;})();export{rt as ReportsModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/