import{c as me}from"./chunk-BJVDHX2A.js";import{a as m,b as re,d as ne,k as ae,l as se}from"./chunk-5WUYIUAF.js";import"./chunk-LUYVV6ZZ.js";import"./chunk-KQZBZKEV.js";import{f as Y,g as Z,h as ee,j as te,k as oe,l as ie}from"./chunk-WEEU345C.js";import{b as K,c as W}from"./chunk-BEDKXBFC.js";import"./chunk-D5SZFKK7.js";import{b as h}from"./chunk-WZL7BTCT.js";import{j as C}from"./chunk-J5QZPDV7.js";import{a as $,b as x,d as B,e as w,g as M}from"./chunk-UN7ZV7OU.js";import{l as q,q as Q,r as J}from"./chunk-KWAPZKCM.js";import{c as X}from"./chunk-U3WUCTLP.js";import"./chunk-IRYEWOMO.js";import"./chunk-RH3HJREX.js";import{c as k}from"./chunk-O6G4W4SF.js";import{i as H}from"./chunk-3MHW6B4E.js";import{d as _,f as F,g as b,k as y,m as A,p as P,q as G,t as L}from"./chunk-U3CUVO3E.js";import"./chunk-72GYWXTT.js";import{e as j}from"./chunk-D3PLXWXH.js";import"./chunk-IFFAZPN3.js";import{c as U}from"./chunk-AHPLM44D.js";import{ia as V}from"./chunk-Y7MZZUBM.js";import{s as O}from"./chunk-AD74A3E4.js";import{Hb as u,Ib as S,Jb as s,O as c,Vb as D,ga as E,ha as T,ib as d,jb as n,jc as g,ma as z,mc as I,qa as f,qb as N,ra as R,xb as a}from"./chunk-MNGWH3SB.js";var p=(()=>{let e=class e extends W{constructor(o){super(o,"softuza-reporting"),this.reports=new K(this.http,`${this.basePath}/v1/reports`);}};e.ɵfac=function(t){return new(t||e)(z(O));},e.ɵprov=E({token:e,factory:e.ɵfac});let r=e;return r;})();var de=(()=>{let e=class e extends Y{constructor(o,t,i,l){super(i),this.srptService=o,this.fb=t,this.dialog=i,this.data=l,this.form=t.group({name:[l?.name,[_.required]],description:[l?.description,[_.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(n(p),n(G),n($),n(x));},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-reports-save"]],standalone:!0,features:[g([]),N,I],decls:6,vars:3,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),s(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",i.header),d(2),a("formGroup",i.form),d(3),a("actions",i.actions));},dependencies:[L,y,F,b,A,P,M,w,H,me,oe,Z,ee,J,q,Q],encapsulation:2});let r=e;return r;})();var le=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.srptService=t,this.title=k.reports,this.dataSource=new ne(),this.dataSource.columnDefs.push(m.uuid("id"),m.string("name"),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),re.menu([C.edit(i=>this.openSaveComponent(i)),C.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(o){this.dialog.open(de,{data:o}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.reports.get(this.dataSource.getQuery()).pipe(X(this.dataSource.indicator),c(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(n(B),n(p));},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-reports"]],features:[g([])],decls:2,vars:3,consts:[[3,"title"],[3,"stateEnabled","dataSource","update"]],template:function(t,i){t&1&&(s(0,"sz-ui-header-info",0),u(1,"sz-ui-table",1),D("update",function(){return i.get();}),S()),t&2&&(a("title",i.title),d(),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ae,h],encapsulation:2});let r=e;return r;})();var ce=[{path:"",component:le}];var at=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=R({type:e}),e.ɵinj=T({providers:[p],imports:[j.forChild(ce),M,U,se,h,V]});let r=e;return r;})();export{at as ReportsModule};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/