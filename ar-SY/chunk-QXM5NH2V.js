import"./chunk-EX3SPZUZ.js";import{g as p}from"./chunk-5NBLFYXZ.js";import"./chunk-PPO5LMMV.js";import{g as U,h as f}from"./chunk-KSZ4VDQY.js";import"./chunk-I7NN55R5.js";import{a as I,b as Re}from"./chunk-RQPF7GIR.js";import{a as D,b as Ce,c as Pe,e as Te,o as ge,p as Ne,q as Oe,r as Ue}from"./chunk-4NDBE333.js";import{c as Ee,h as pe,i as ue,j as fe,l as Me,m as ce,n as Ae}from"./chunk-UJAW327Y.js";import{a as me,b as se,d as le,e as de,g}from"./chunk-JW5GSDNP.js";import{A as Se,B as ae,E as _e,a as te,h as ie,i as oe,z as ne}from"./chunk-M2QIPGOP.js";import{d as s,g as j,h as q,l as B,n as w,o as k,p as x,s as H}from"./chunk-DNMCT3KT.js";import{c as R}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as N}from"./chunk-CSFT2WH3.js";import{e as J}from"./chunk-KYUPPZUX.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as W,c as ee}from"./chunk-M4TKXCQI.js";import{Ka as K,Na as Q,Ra as re}from"./chunk-IPZKDZL6.js";import{Bb as n,Cb as a,Db as M,L as A,Nb as E,Pb as P,Wb as y,Xb as G,Zb as T,a as O,ac as X,cb as d,da as $,db as _,ec as Y,fc as Z,kb as z,la as C,ma as F,nb as m,vb as L,xb as b,yb as V}from"./chunk-3QIFGVJ6.js";function ze(r,t){if(r&1&&(n(0,"mat-option",14),y(1),Y(2,"typeI18n"),a()),r&2){let h=t.$implicit;m("value",h),d(1),G(Z(2,2,h));}}var Ie=(()=>{let t=class t extends pe{constructor(i,o,e,l,S){super(e),this.adminService=i,this.fb=o,this.dialog=e,this.typeI18nPipe=l,this.data=S,this.requiredActions=Object.keys(U).map(c=>U[c]),this.form=o.group({username:[S?.username,[s.required]],email:[S?.email,[s.required,s.email]],firstName:[S?.firstName,[s.maxLength(128)]],lastName:[S?.lastName,[s.maxLength(128)]],enabled:[S?.enabled??!0,[s.required]],emailVerified:[S?.emailVerified??!0,[s.required]],requiredActions:[S?.requiredActions??[],[]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateUser(this.data.id,O(O({},this.data),this.form.value))):this.save(this.adminService.createUser(this.form.value)));}};t.ɵfac=function(o){return new(o||t)(_(f),_(x),_(me),_(p),_(se));},t.ɵcmp=C({type:t,selectors:[["softuza-users-save"]],standalone:!0,features:[T([p]),z,X],decls:20,vars:3,consts:()=>{let i;i="\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645";let o;o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let l;l="\u0627\u0644\u0643\u0646\u064A\u0629";let S;S="\u0625\u062C\u0631\u0627\u0621\u0627\u062A";let c;c="\u0645\u0641\u0639\u0644";let v;return v="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0624\u0643\u062F",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","username","label",i],["formControlName","email","label",o],[1,"sz-form-row"],["formControlName","firstName","label",e],["formControlName","lastName","label",l],S,["formControlName","requiredActions","multiple","true"],["formControlName","enabled"],c,["formControlName","emailVerified"],v,[3,"actions"],[3,"value"]];},template:function(o,e){o&1&&(M(0,"sz-ui-dialog-header",0),n(1,"mat-dialog-content")(2,"form",1),M(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3),n(5,"div",4),M(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6),a(),n(8,"mat-form-field")(9,"mat-label"),E(10,7),a(),n(11,"mat-select",8),b(12,ze,3,4,"mat-option",14,L),a()(),n(14,"div",4)(15,"mat-slide-toggle",9),E(16,10),a(),n(17,"mat-slide-toggle",11),E(18,12),a()()()(),M(19,"sz-ui-dialog-actions",13)),o&2&&(m("header",e.header),d(2),m("formGroup",e.form),V(12,e.requiredActions),d(17),m("actions",e.actions));},dependencies:[H,B,j,q,w,k,g,de,oe,ie,te,Ne,ge,ae,Se,K,Q,ce,ue,fe,_e,ne,p],encapsulation:2});let r=t;return r;})();var he=(()=>{let t=class t{constructor(i,o){this.dialog=i,this.adminService=o,this.dataSource=new Ce(),this.dataSource.addRows([Pe.default([D.text("username",I.username),D.text("name",I.name,e=>`${e.firstName??""} ${e.lastName??""}`),Re.menu([R.edit(e=>this.openSaveComponent(e)),R.delete(e=>this.openUserDeleteComponent(e))])])]),this.get();}openSaveComponent(i){this.dialog.open(Ie,{data:i}).afterClosed().pipe(A(1)).subscribe(()=>{this.get();});}openUserDeleteComponent(i){this.dialog.open(Me,{data:Ae.delete(this.adminService.deleteUser(i.id),i)}).afterClosed().pipe(A(1)).subscribe(()=>{this.get();});}get(){this.adminService.getUsers().pipe(Ee(this.dataSource.indicator),A(1)).subscribe(i=>{console.log(i),this.dataSource.set(i,i.length);});}};t.ɵfac=function(o){return new(o||t)(_(le),_(f));},t.ɵcmp=C({type:t,selectors:[["softuza-users"]],features:[T([p])],decls:8,vars:4,consts:()=>{let i;i="\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646";let o;return o="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],i,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(o,e){o&1&&(n(0,"sz-ui-header-basic")(1,"h5",0),E(2,1),a()(),n(3,"sz-ui-table-filter",2),P("search",function(){return e.get();}),n(4,"button",3),P("click",function(){return e.openSaveComponent();}),n(5,"span"),E(6,4),a()()(),n(7,"sz-ui-table",5),P("update",function(){return e.get();}),a()),o&2&&(d(3),m("dataSource",e.dataSource),d(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource));},dependencies:[W,Oe,Te,N],encapsulation:2});let r=t;return r;})();var ve=[{path:"",component:he}];var Lt=(()=>{let t=class t{};t.ɵfac=function(o){return new(o||t)();},t.ɵmod=F({type:t}),t.ɵinj=$({providers:[f],imports:[J.forChild(ve),g,ee,Ue,N,re]});let r=t;return r;})();export{Lt as UsersModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/