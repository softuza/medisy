import{c as me}from"./chunk-JEUTT6H6.js";import{a as m,b as re,d as ne,k as ae,l as se}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{e as W,f as Y,g as ee,i as te,j as oe,k as ie}from"./chunk-EZC2CU7X.js";import{b as K,c as Q}from"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as h}from"./chunk-HKZIVJYM.js";import{g as M}from"./chunk-PNII32UO.js";import{a as $,b as U,d as w,e as x,g}from"./chunk-V6ACGGWJ.js";import{l as k,q,r as J}from"./chunk-VBUQVK7Q.js";import{c as Z}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as B}from"./chunk-2W3OIU7Y.js";import{i as H}from"./chunk-OIFHB67M.js";import{d as C,f as D,g as F,k as I,m as b,p as y,q as L,t as G}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{e as j}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{c as X}from"./chunk-B3RLTRYJ.js";import{ha as V}from"./chunk-PMB5EPNY.js";import{s as N}from"./chunk-2HDHH4PW.js";import{Fb as u,Gb as S,Hb as s,M as c,Tb as O,ea as T,fa as R,gb as d,hb as n,hc as _,ka as E,kc as A,oa as f,ob as z,pa as P,vb as a}from"./chunk-UDYUYOMJ.js";var p=(()=>{let e=class e extends Q{constructor(o){super(o,"softuza-reporting"),this.reports=new K(this.http,`${this.basePath}/v1/reports`);}};e.ɵfac=function(t){return new(t||e)(E(N));},e.ɵprov=T({token:e,factory:e.ɵfac});let r=e;return r;})();var de=(()=>{let e=class e extends W{constructor(o,t,i,l){super(i),this.srptService=o,this.fb=t,this.dialog=i,this.data=l,this.form=t.group({name:[l?.name,[C.required]],description:[l?.description,[C.maxLength(4096)]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(n(p),n(L),n($),n(U));},e.ɵcmp=f({type:e,selectors:[["softuza-reportins-reports-save"]],standalone:!0,features:[_([]),z,A],decls:6,vars:3,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],[3,"actions"]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",0),u(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),S()(),s(5,"sz-ui-dialog-actions",4)),t&2&&(a("header",i.header),d(2),a("formGroup",i.form),d(3),a("actions",i.actions));},dependencies:[G,I,D,F,b,y,g,x,H,me,oe,Y,ee,J,k,q],encapsulation:2});let r=e;return r;})();var le=(()=>{let e=class e{constructor(o,t){this.dialog=o,this.srptService=t,this.title=B.reports,this.dataSource=new ne(),this.dataSource.columns.push(m.uuid("id"),m.string("name"),m.string("description"),m.date("createdAt",!1),m.date("updatedAt",!1),re.menu([M.edit(i=>this.openSaveComponent(i)),M.delete(i=>this.openReportDeleteComponent(i))])),this.get();}openSaveComponent(o){this.dialog.open(de,{data:o}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReportDeleteComponent(o){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(o.id),o)}).afterClosed().pipe(c(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.reports.get(this.dataSource.buildRequest()).pipe(Z(this.dataSource.indicator),c(1)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)(n(w),n(p));},e.ɵcmp=f({type:e,selectors:[["softuza-reporting-reports"]],features:[_([])],decls:2,vars:3,consts:[[3,"title"],[3,"stateEnabled","dataSource","update"]],template:function(t,i){t&1&&(s(0,"sz-ui-header-info",0),u(1,"sz-ui-table",1),O("update",function(){return i.get();}),S()),t&2&&(a("title",i.title),d(),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[ae,h],encapsulation:2});let r=e;return r;})();var ce=[{path:"",component:le}];var rt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=P({type:e}),e.ɵinj=R({providers:[p],imports:[j.forChild(ce),g,X,se,h,V]});let r=e;return r;})();export{rt as ReportsModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/