import{g as _}from"./chunk-SKV2MUIB.js";import"./chunk-PPO5LMMV.js";import"./chunk-D66MIGT5.js";import"./chunk-I7NN55R5.js";import{b as C}from"./chunk-A6RSMEH5.js";import{a as d,b as x,c as J,e as K,q as Q,r as W}from"./chunk-CFOMHYBZ.js";import{c as H,g as U,i as V,j as X,m as q}from"./chunk-UJAW327Y.js";import{a as B,b as G,d as w,e as Y,g as f}from"./chunk-JW5GSDNP.js";import{E as $,i as O,x as j}from"./chunk-ADGNUUMA.js";import{h as T,l as I,n as F,p as A,s as P}from"./chunk-DNMCT3KT.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as S}from"./chunk-PVY3QENI.js";import{a as M}from"./chunk-CSFT2WH3.js";import"./chunk-JJ7KQT5E.js";import{a as k}from"./chunk-HXOIERNB.js";import{e as N}from"./chunk-KFH6QGXF.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{c as R}from"./chunk-M4TKXCQI.js";import{Ra as L}from"./chunk-IPZKDZL6.js";import{Bb as p,Cb as l,Db as u,L as h,Nb as v,Pb as g,Zb as D,ac as E,cb as s,da as y,db as n,kb as b,la as c,ma as z,nb as m}from"./chunk-3QIFGVJ6.js";var ee=(()=>{let e=class e extends U{constructor(t,i,o){super(i),this.fb=t,this.dialog=i,this.data=o,this.form=t.group({});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};e.ɵfac=function(i){return new(i||e)(n(A),n(B),n(G));},e.ɵcmp=c({type:e,selectors:[["medisy-laboratory-specimens-filter"]],standalone:!0,features:[D([]),b,E],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(i,o){i&1&&(u(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content"),u(2,"form",1),l(),u(3,"sz-ui-dialog-actions",2)),i&2&&(m("header",o.header),s(2),m("formGroup",o.form),s(1),m("actions",o.actions));},dependencies:[P,I,T,F,f,Y,O,q,V,X,$,j],encapsulation:2});let r=e;return r;})();var te=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.mlabService=i,this.typeI18nPipe=o,this.dataSource=new x(k.pagedSorted("-createdAt")),this.dataSource.addRows(J.default([d.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",a=>a.id),d.text("type","\u0627\u0644\u0646\u0645\u0637",a=>a.type.name),d.text("state","\u0627\u0644\u062D\u0627\u0644\u0629",a=>o.transform(a.state)),d.date("collectedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0645\u0639"),C.createdAt(),C.menu([])])),this.get();}openFilterComponent(){this.dialog.open(ee,{data:this.dataSource.filterModel}).afterClosed().pipe(h(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.specimens.get(this.dataSource.filterModel).pipe(H(this.dataSource.indicator),h(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(n(w),n(S),n(_));},e.ɵcmp=c({type:e,selectors:[["medisy-laboratory-specimens"]],decls:5,vars:4,consts:()=>{let t;return t="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(p(0,"sz-ui-header-basic")(1,"h5",0),v(2,1),l()(),p(3,"sz-ui-table-filter",2),g("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),l(),p(4,"sz-ui-table",3),g("update",function(){return o.get();}),l()),i&2&&(s(3),m("dataSource",o.dataSource),s(1),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[Q,K,M],encapsulation:2});let r=e;return r;})();var ie=[{path:"",component:te}];var qe=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=z({type:e}),e.ɵinj=y({providers:[S,_],imports:[N.forChild(ie),f,L,R,W,M]});let r=e;return r;})();export{qe as SpecimensModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/