import{a as I}from"./chunk-ME7CNT4G.js";import{b as re}from"./chunk-7X3HZZWH.js";import"./chunk-RCF34KUN.js";import"./chunk-YJ66KLW4.js";import"./chunk-VU4DCVQ3.js";import{a as Y}from"./chunk-IWR3KYJK.js";import{b as Z,d as x,e as ee,g as te,s as oe,t as ie}from"./chunk-LIUTUGIN.js";import{c as q,g as J,h as K,i as v,j as D,l as Q,m as R,n as W}from"./chunk-TXP6BBJB.js";import{a as T,b as E,d as w,e as A,g as P}from"./chunk-BVSJJDLC.js";import{C as k,D as U,y as H}from"./chunk-GXEPFKEQ.js";import{d as z,g as h,h as M,l as C,n as O,o as y,p as g,s as b}from"./chunk-2OZGA6L4.js";import{a as F}from"./chunk-YG5GW4EW.js";import{a as N}from"./chunk-KQSWIXX2.js";import{b as X}from"./chunk-SNKHLPW5.js";import"./chunk-WM5ABWWX.js";import"./chunk-WKFGKHHI.js";import{a as G,e as $}from"./chunk-KIPWFCJ2.js";import{i as L}from"./chunk-Y2P4J75K.js";import"./chunk-5XV2VVI7.js";import"./chunk-E52CL7TM.js";import{Pa as V,Ra as j}from"./chunk-KZIHA7KF.js";import{Bb as p,Cb as d,Db as m,L as f,Nb as B,Rb as _,cb as l,cc as c,db as r,kb as S,la as u,nb as a}from"./chunk-6MBKLWBV.js";var se=(()=>{let i=class i extends J{constructor(t,e,o){super(e),this.fb=t,this.dialog=e,this.data=o,this.form=t.group({phoneType:[o.phoneType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};i.ɵfac=function(e){return new(e||i)(r(g),r(T),r(E));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones-filter"]],standalone:!0,features:[S,c],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"medisy-form-field-phone-type",2),d()(),m(4,"sz-ui-dialog-actions",3)),e&2&&(a("header",o.header),l(2),a("formGroup",o.form),l(1),a("emptyOption",!0),l(1),a("actions",o.actions));},dependencies:[b,C,h,M,O,y,R,v,D,P,A,I],encapsulation:2});let s=i;return s;})();var le=(()=>{let i=class i extends K{constructor(t,e,o,n){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=n,this.form=e.group({value:[n.laboratoryPhone?.value,[z.required]],description:[n.laboratoryPhone?.description,[]],phoneType:[n.laboratoryPhone?.phoneType??re.Home,[z.required]]});}submit(){this.IsValid()&&(this.data.laboratoryPhone?this.save(this.mlabService.laboratories.phones.update(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value)):this.save(this.mlabService.laboratories.phones.create(this.data.laboratoryId,this.form.value)));}};i.ɵfac=function(e){return new(e||i)(r(N),r(g),r(T),r(E));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones-save"]],standalone:!0,features:[S,c],decls:7,vars:3,consts:()=>{let t;t="\u0627\u0644\u0648\u0635\u0641";let e;return e="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",t],["formControlName","value","label",e],["formControlName","phoneType"],[3,"actions"]];},template:function(e,o){e&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),d()(),m(6,"sz-ui-dialog-actions",5)),e&2&&(a("header",o.header),l(2),a("formGroup",o.form),l(4),a("actions",o.actions));},dependencies:[b,C,h,M,O,y,R,v,D,P,A,U,H,k,I],encapsulation:2});let s=i;return s;})();var Ze=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.title=F.phones,this.dataSource=new x(),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.addRows(ee.default([Z.text("value",F.phone),Y.createdAt(),Y.menu([L.edit(n=>this.openSaveComponent(n)),L.delete(n=>this.openPhoneDeleteComponent(n))])])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:t}}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openFilterComponent(){this.dialog.open(se,{data:this.dataSource.filter}).afterClosed().pipe(f(1)).subscribe(t=>{this.dataSource.updateFilter(t),this.get();});}openPhoneDeleteComponent(t){this.dialog.open(Q,{data:W.delete(this.mlabService.laboratories.phones.delete(t.laboratoryId,t.id),t)}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.laboratories.phones.get(this.laboratory.id,this.dataSource.filter,this.dataSource.pagination).pipe(q(this.dataSource.indicator),f(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(r(w),r(N),r(G));},i.ɵcmp=u({type:i,selectors:[["medisy-laboratory-phones"]],standalone:!0,features:[c],decls:6,vars:5,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subTitle"],[3,"filter","search","filterClicked"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(m(0,"sz-ui-header-info",0),p(1,"sz-ui-table-filter",1),_("search",function(){return o.get();})("filterClicked",function(){return o.openFilterComponent();}),p(2,"button",2),_("click",function(){return o.openSaveComponent();}),p(3,"span"),B(4,3),d()()(),p(5,"sz-ui-table",4),_("update",function(){return o.get();}),d()),e&2&&(a("title",o.title)("subTitle",o.laboratory.name),l(1),a("filter",o.dataSource.filter),l(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[$,j,V,X,ie,oe,te],encapsulation:2});let s=i;return s;})();export{Ze as LaboratoryPhonesComponent};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/