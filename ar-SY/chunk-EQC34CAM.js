import{a as H}from"./chunk-BAJJN4MS.js";import{b as B}from"./chunk-EFEERWMK.js";import{a as f}from"./chunk-RQOM6M4I.js";import{a as d}from"./chunk-H7A7FQZW.js";import{c as E,g as w,s as x,t as A,u as n}from"./chunk-NX3LT2RV.js";import{a as N}from"./chunk-ETF3CVHJ.js";import{c as k}from"./chunk-YIR7S7Z5.js";import"./chunk-E3FW4FG3.js";import{b as l}from"./chunk-G5ATBGNR.js";import"./chunk-DS5TYFF5.js";import{d as D,g as j}from"./chunk-P4QIA4WM.js";import"./chunk-22KPLFGU.js";import{N as y}from"./chunk-BWNHVGBM.js";import"./chunk-IWM4AFTB.js";import{Fa as z,Ga as I,Ia as T,Ja as F,n as _}from"./chunk-I73ZQFGG.js";import{Eb as s,Fb as h,Gb as v,M as u,Sb as c,dc as C,ea as g,fb as S,gb as m,gc as P,na as b,oa as M,ub as p}from"./chunk-KN4PZLRS.js";var R=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.mpplService=i,this.personNamePipe=o,this.title=N.persons,this.dataSource=new E,this.dataSource.fields.push(n.string("id",!1),n.stringFormated("names.firstName",a=>o.transform(a)),n.stringFormated("sex",a=>B(a.sex)),n.date("birthDate"),n.date("createdAt",!1),n.date("updatedAt",!1)),this.get()}openPersonScanComponent(){this.dialog.open(H).afterClosed().pipe(u(1)).subscribe(t=>{t&&this.get()})}get(){this.mpplService.persons.get(this.dataSource.buildRequest()).pipe(k(this.dataSource.indicator),u(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};e.\u0275fac=function(i){return new(i||e)(m(D),m(d),m(f))},e.\u0275cmp=b({type:e,selectors:[["medisy-people-persons"]],features:[P([_,f])],decls:6,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]],template:function(i,o){i&1&&(v(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),c("changed",function(){return o.get()}),s(2,"button",2),c("click",function(){return o.openPersonScanComponent()}),s(3,"mat-icon"),C(4,"barcode"),h()()(),s(5,"sz-ui-table",3),c("update",function(){return o.get()}),h()),i&2&&(p("title",o.title),S(),p("dataSource",o.dataSource),S(4),p("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[z,x,w,l,T],encapsulation:2});let r=e;return r})();var q=[{path:"",component:R}];var ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=M({type:e}),e.\u0275inj=g({providers:[d],imports:[y.forChild(q),j,I,A,l,F]});let r=e;return r})();export{ve as PersonsModule};
/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/
