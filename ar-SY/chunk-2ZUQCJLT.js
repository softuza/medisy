import{a as s}from"./chunk-5XQ6ILRF.js";import{a as f,d as j,f as F,k as N,l as E}from"./chunk-IVGQ3HZH.js";import"./chunk-HFJZSCN6.js";import"./chunk-XODLCFFB.js";import"./chunk-SEOQS6VP.js";import"./chunk-7NUFPHBI.js";import"./chunk-X72KAAKT.js";import{b as m}from"./chunk-YKGVVVX5.js";import"./chunk-IWHXOZAZ.js";import{d as y,g as _}from"./chunk-B75B3GWF.js";import"./chunk-H2TGRDS5.js";import{c as I}from"./chunk-XRLAKDN6.js";import"./chunk-I4OTRYP6.js";import"./chunk-2LPUO4OM.js";import{c as D}from"./chunk-4QAOLMRA.js";import"./chunk-IPR66Z7G.js";import"./chunk-JMGGZD4A.js";import"./chunk-2L76HXS6.js";import{c as b,e as M}from"./chunk-7Q2XJCHR.js";import"./chunk-L2RMIMUP.js";import{c as T}from"./chunk-6GM3YNBQ.js";import{ia as C}from"./chunk-RCWML6QJ.js";import"./chunk-LHVP4JEO.js";import{Hb as p,Ib as d,Jb as z,O as l,Vb as u,ha as S,ib as c,jb as a,jc as v,qa as h,ra as g,xb as n}from"./chunk-UMI4LSI3.js";var w=(()=>{let e=class e{constructor(o,t,r){this.dialog=o,this.sntiService=t,this.router=r,this.title=D.messages,this.dataSource=new j,this.dataSource.columnDefs.push(f.uuid("id"),f.date("createdAt",!1)),this.get()}get(){this.sntiService.messages.get(this.dataSource.getQuery()).pipe(I(this.dataSource.indicator),l(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}};e.\u0275fac=function(t){return new(t||e)(a(y),a(s),a(b))},e.\u0275cmp=h({type:e,selectors:[["sz-mgmt-notification-messages"]],features:[v([])],decls:3,vars:4,consts:[[3,"title"],[3,"dataSource","changed"],[3,"stateEnabled","dataSource","update"]],template:function(t,r){t&1&&(z(0,"sz-ui-header-info",0),p(1,"sz-ui-table-search-filter",1),u("changed",function(){return r.get()}),d(),p(2,"sz-ui-table",2),u("update",function(){return r.get()}),d()),t&2&&(n("title",r.title),c(),n("dataSource",r.dataSource),c(),n("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[N,F,m],encapsulation:2});let i=e;return i})();var ie=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=S({providers:[s],imports:[M.forChild([{path:"",component:w}]),_,T,E,m,C]});let i=e;return i})();export{ie as MessagesModule};
/**i18n:16c9224f5b668b40e6178402b9ae5cba52679b665b9b111ce72150c0a38fe8d5*/
