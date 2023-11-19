import{a as ae}from"./chunk-UR62DX7K.js";import{a as f}from"./chunk-L3MA6WSX.js";import{a as C}from"./chunk-5FZ5R4ZJ.js";import{a as Z,b as ee,c as te,e as oe,f as ie,g as re,q as se,r as ne}from"./chunk-2DIHYESB.js";import{c as q,h as H,i as x,j as J,l as K,m as Q,n as W}from"./chunk-JUKWJGHA.js";import{a as V,b as G,d as U,e as j,g as X}from"./chunk-LR6DSKQQ.js";import{D as F,E as Y,z as $}from"./chunk-CJ3L35E7.js";import{d as M,g as O,h as g,l as h,n as T,o as v,p as I,s as R}from"./chunk-FZFNR6NR.js";import{a as B}from"./chunk-MTTAGST2.js";import{b as w}from"./chunk-KYTDMX2G.js";import{a as k}from"./chunk-AQB7U7BU.js";import{a as z,e as b}from"./chunk-4G55JY3H.js";import{i as P}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Pa as y,Ra as L}from"./chunk-W55BWEJG.js";import{Bb as a,Cb as l,Db as S,L as m,Nb as E,Pb as u,ac as c,cb as p,db as s,ec as D,fc as N,kb as A,la as _,nb as n}from"./chunk-3QIFGVJ6.js";var de=(()=>{let r=class r extends H{constructor(e,t,o,i){super(o),this.mpplService=e,this.fb=t,this.dialog=o,this.data=i,this.form=t.group({value:[i?.personAddress?.value,[M.required]],description:[i?.personAddress?.description,[]],isPrimary:[i?.personAddress?.isPrimary??!1,[M.required]]});}submit(){this.IsValid()&&(this.data.personAddress?this.save(this.mpplService.persons.addresses.update(this.data.personId,this.data.personAddress.id,this.form.value)):this.save(this.mpplService.persons.addresses.create(this.data.personId,this.form.value)));}};r.ɵfac=function(t){return new(t||r)(s(f),s(I),s(V),s(G));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-addresses-save"]],standalone:!0,features:[A,c],decls:8,vars:3,consts:()=>{let e;e="\u0627\u0644\u0639\u0646\u0648\u0627\u0646";let t;t="\u0627\u0644\u0648\u0635\u0641";let o;return o="\u0623\u0633\u0627\u0633\u064A",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","label",e],["formControlName","description","label",t],["formControlName","isPrimary"],o,[3,"actions"]];},template:function(t,o){t&1&&(S(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),a(5,"mat-checkbox",4),E(6,5),l()()(),S(7,"sz-ui-dialog-actions",6)),t&2&&(n("header",o.header),p(2),n("formGroup",o.form),p(5),n("actions",o.actions));},dependencies:[R,h,O,g,T,v,X,j,re,ie,Y,$,F,Q,x,J],encapsulation:2});let d=r;return d;})();var xe=(()=>{let r=class r{constructor(e,t,o){this.dialog=e,this.mpplService=t,this.route=o,this.title=B.addresses,this.dataSource=new ee(k.paged()),this.person=this.route.snapshot.data.person,this.dataSource.addRows(te.default([Z.text("value","\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),C.createdAt(),C.menu([P.edit(i=>this.openSaveComponent(i)),P.delete(i=>this.openPersonAddressDeleteComponent(i))])])),this.get();}openSaveComponent(e){this.dialog.open(de,{data:{personId:this.person.id,personAddress:e}}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonAddressDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.addresses.delete(e.personId,e.id),e)}).afterClosed().pipe(m(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.addresses.get(this.person.id,this.dataSource.filterModel).pipe(q(this.dataSource.indicator),m(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};r.ɵfac=function(t){return new(t||r)(s(U),s(f),s(z));},r.ɵcmp=_({type:r,selectors:[["medisy-people-person-addresses"]],standalone:!0,features:[c],decls:7,vars:8,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"dataSource","search"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,o){t&1&&(S(0,"sz-ui-header-info",0),D(1,"personName"),a(2,"sz-ui-table-filter",1),u("search",function(){return o.get();}),a(3,"button",2),u("click",function(){return o.openSaveComponent();}),a(4,"span"),E(5,3),l()()(),a(6,"sz-ui-table",4),u("update",function(){return o.get();}),l()),t&2&&(n("title",o.title)("subTitle",N(1,6,o.person)),p(2),n("dataSource",o.dataSource),p(4),n("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[b,L,y,ne,se,oe,w,ae],encapsulation:2});let d=r;return d;})();export{xe as PersonAddressesComponent};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/