import{a as j}from"./chunk-WXCBHDZT.js";import{a as d}from"./chunk-EON6S5RK.js";import"./chunk-J2TWCSA2.js";import"./chunk-RCNXVE6U.js";import{a as u,b as $,d as F,f as L,i as k,j as O}from"./chunk-RGXIKMKC.js";import"./chunk-VRCSACJH.js";import"./chunk-GU4WFXGT.js";import{j as R,l as A}from"./chunk-55JERGAK.js";import"./chunk-YYI2KTIZ.js";import{b as c}from"./chunk-VSNS76N3.js";import{j as h}from"./chunk-RMS73U75.js";import{d as E,g as y}from"./chunk-GYDCMUMI.js";import"./chunk-VAFOXX63.js";import{c as U}from"./chunk-W4UR2Y35.js";import"./chunk-4PE74OIY.js";import"./chunk-LCA4CFDM.js";import{c as _}from"./chunk-HXWKRRDN.js";import"./chunk-QBI5CVQV.js";import"./chunk-CAQG4OA2.js";import"./chunk-SRJCWGFD.js";import{c as D,e as T}from"./chunk-UR27RSXA.js";import"./chunk-SUZUBBLM.js";import{a as I,c as N}from"./chunk-PPOSM6EZ.js";import"./chunk-RUNZ2J3E.js";import"./chunk-62NYPPVD.js";import{Cb as a,Db as S,Eb as v,I as s,Ob as b,Qb as l,ba as g,db as f,eb as m,ec as z,ka as C,la as M,sb as p}from"./chunk-34MB7EVY.js";import"./chunk-NWZBVKCY.js";var w=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=_.users,this.dataSource=new F(),this.dataSource.columnDefs.push(u.hyperlink("username",i=>this.router.navigate([`/admin/users/${i.id}`])).setStacked(u.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),u.string("createdTimestamp").setName(_.createdAt).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),$.menu([h.edit(i=>this.openSaveComponent(i)),h.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(R,{data:A.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(U(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(m(E),m(d),m(D));},t.ɵcmp=C({type:t,selectors:[["sz-admin-users"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(v(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),a(2,"button",2),l("click",function(){return r.openSaveComponent();}),a(3,"span"),b(4,3),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),o&2&&(p("title",r.title),f(),p("dataSource",r.dataSource),f(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[I,k,L,c],encapsulation:2});let n=t;return n;})();var de=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=g({providers:[d],imports:[T.forChild([{path:"",component:w}]),y,N,O,c]});let n=t;return n;})();export{de as UsersModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/