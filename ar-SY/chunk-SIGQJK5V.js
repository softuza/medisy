import{a as $}from"./chunk-A3KOBUCA.js";import{b as H}from"./chunk-V3OPFVK3.js";import{a as f}from"./chunk-X66HYS6W.js";import{a as c}from"./chunk-A4FQTZRA.js";import{b as d,c as x,e as E,i as F,u as R,v as B}from"./chunk-V53QYHWX.js";import{c as N}from"./chunk-W2LWMIH7.js";import{d as k,g as w}from"./chunk-VQ3CVIXE.js";import"./chunk-EJRHERCA.js";import"./chunk-LDFDSR3K.js";import{a as b}from"./chunk-BUSYHZDZ.js";import{b as l}from"./chunk-K7VJTIK7.js";import"./chunk-4VFLSYB5.js";import{e as y}from"./chunk-E2DYYESB.js";import"./chunk-R54FJ7AR.js";import"./chunk-OHNFTK26.js";import"./chunk-XTT75MUU.js";import{Fa as T,Ga as I,Ia as D,Ja as j,n as _}from"./chunk-TT7ZQ2V6.js";import{Eb as a,Fb as h,Gb as M,M as u,Sb as p,dc as v,ea as g,fb as S,gb as m,gc as P,na as z,oa as C,ub as s}from"./chunk-CQJO6ZYU.js";var q=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.mpplService=i,this.personNamePipe=o,this.title=b.persons,this.dataSource=new E(),this.dataSource.addRows(x.default([d.hyperlink("names.firstName",b.name,r=>r.id,r=>o.transform(r),!1),d.text("sex","\u0627\u0644\u062C\u0646\u0633",r=>H(r.sex)),d.date("birthDate","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629")])),this.get();}openPersonScanComponent(){this.dialog.open($).afterClosed().pipe(u(1)).subscribe(t=>{t&&this.get();});}get(){this.mpplService.persons.get(this.dataSource.buildRequest()).pipe(N(this.dataSource.indicator),u(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(m(k),m(c),m(f));},e.ɵcmp=z({type:e,selectors:[["medisy-people-persons"]],features:[P([_,f])],decls:6,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]],template:function(i,o){i&1&&(M(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),p("changed",function(){return o.get();}),a(2,"button",2),p("click",function(){return o.openPersonScanComponent();}),a(3,"mat-icon"),v(4,"barcode"),h()()(),a(5,"sz-ui-table",3),p("update",function(){return o.get();}),h()),i&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[T,R,F,l,D],encapsulation:2});let n=e;return n;})();var L=[{path:"",component:q}];var Ce=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=C({type:e}),e.ɵinj=g({providers:[c],imports:[y.forChild(L),w,I,B,l,j]});let n=e;return n;})();export{Ce as PersonsModule};/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/