import{a as j}from"./chunk-SRHP6FLD.js";import{a as d}from"./chunk-GX4MOAAC.js";import"./chunk-H6L4Y2QJ.js";import{a as u,b as $,d as F,f as L,k,l as O}from"./chunk-LZNXIXOZ.js";import"./chunk-NE2FJIGN.js";import"./chunk-MU4JMO74.js";import{j as R,l as A}from"./chunk-5USYUPE4.js";import"./chunk-HQBETVMD.js";import{b as c}from"./chunk-T7V5XOV4.js";import{j as h}from"./chunk-2D7ESCRH.js";import{d as E,g as y}from"./chunk-LR6GUTIR.js";import"./chunk-TH3BU27R.js";import{c as U}from"./chunk-ELM3QGWO.js";import"./chunk-NLKNVIYO.js";import"./chunk-ALHR4HEP.js";import{c as _}from"./chunk-6SBR2WBP.js";import"./chunk-E4SPABR5.js";import"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{c as D,e as T}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as I,c as N}from"./chunk-42MYF47R.js";import"./chunk-5MDONEI4.js";import"./chunk-6TGWOZSV.js";import{Hb as a,Ib as S,Jb as v,O as s,Tb as b,Vb as l,ha as g,ib as f,jb as m,jc as z,qa as C,ra as M,xb as p}from"./chunk-OHUDUA2T.js";var w=(()=>{let t=class t{constructor(e,o,r){this.dialog=e,this.adminService=o,this.router=r,this.title=_.users,this.dataSource=new F(),this.dataSource.columnDefs.push(u.hyperlink("username",i=>this.router.navigate([`/admin/users/${i.id}`])).setStacked(u.string("name").setValueGetter(i=>`${i.firstName??""} ${i.lastName??""}`).setValueClassFontSmall()),u.string("createdTimestamp").setName(_.createdAt).setValueGetter(i=>new Date(i.createdTimestamp).toDateString()),$.menu([h.edit(i=>this.openSaveComponent(i)),h.delete(i=>this.openUserDeleteComponent(i))])),this.get();}openSaveComponent(e){this.dialog.open(j,{data:e}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(e){this.dialog.open(R,{data:A.delete(this.adminService.deleteUser(e.id),e)}).afterClosed().pipe(s(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(U(this.dataSource.indicator),s(1)).subscribe(e=>{this.dataSource.set(e,e.length);});}};t.ɵfac=function(o){return new(o||t)(m(E),m(d),m(D));},t.ɵcmp=C({type:t,selectors:[["sz-admin-users"]],features:[z([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(o,r){o&1&&(v(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return r.get();}),a(2,"button",2),l("click",function(){return r.openSaveComponent();}),a(3,"span"),b(4,3),S()()(),a(5,"sz-ui-table",4),l("update",function(){return r.get();}),S()),o&2&&(p("title",r.title),f(),p("dataSource",r.dataSource),f(4),p("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[I,k,L,c],encapsulation:2});let n=t;return n;})();var de=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=M({type:t}),t.ɵinj=g({providers:[d],imports:[T.forChild([{path:"",component:w}]),y,N,O,c]});let n=t;return n;})();export{de as UsersModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/