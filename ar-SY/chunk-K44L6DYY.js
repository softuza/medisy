import{a as l,b as oe,d as re,f as ne,i as ae,j as se}from"./chunk-GB6LNLSL.js";import"./chunk-6476LBLO.js";import"./chunk-DLGQULAM.js";import{a as S}from"./chunk-7DOS4EQT.js";import{e as Z,f as x,g as ee,i as te,j as T,k as ie}from"./chunk-RWBKTNX4.js";import"./chunk-A6ALB6MW.js";import{b as C}from"./chunk-AUUPRRII.js";import{j as h}from"./chunk-KL2VOW6L.js";import{a as P,b as Y,d as G,e as j,g as M}from"./chunk-TDAALCJW.js";import{o as Q,s as J,u as K,v as W}from"./chunk-LJNLPR6O.js";import{c as H}from"./chunk-Y365ANJD.js";import"./chunk-624ACHJE.js";import"./chunk-D5DPYT77.js";import{c as q}from"./chunk-OPRLBPJZ.js";import{i as X}from"./chunk-3I6XO3BT.js";import{d as g,f as I,g as L,k as z,m as D,p as b,q as F,s as V,t as E}from"./chunk-ZBCFQZ6O.js";import"./chunk-ILI4DACJ.js";import{c as U,e as B}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as k,c as w}from"./chunk-FBMLFETS.js";import{ha as $}from"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as a,Lb as d,Mb as p,Nb as u,Xb as A,Yb as c,gb as m,hb as s,na as f,nc as N,oa as y,oc as v,sb as O,za as R}from"./chunk-75X3YXCS.js";var me=(()=>{let o=class o extends Z{constructor(e,t,i,r){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=r,this.testTypeUnits=null,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["name"]}),this.testTypeUnitContentFunc=_=>_.unit.name,this.testTypeUnitValueFunc=_=>_.unitId,this.form=t.group({description:[r?.description,[g.maxLength(4096)]],testTypeId:[r?.testTypeId,[g.required]],unitId:[r?.unitId,[]]}),this.testTypeSelected(r?.testTypeId);}testTypeSelected(e){e&&(this.testTypeUnits=this.mlabService.testTypes.units.getAll(e,{orderBy:["unit.name"]}));}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(s(S),s(F),s(P),s(Y));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[N([]),O,v],decls:7,vars:7,consts:()=>{let e;e="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0648\u0627\u062D\u062F\u0629";let i;return i="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",e,3,"source","szOptionSelected"],["formControlName","unitId","label",t,3,"source","szOptionContentFn","szOptionValueFn"],["formControlName","description","label",i],[3,"actions"]];},template:function(t,i){t&1&&(u(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1)(3,"sz-ui-form-field-select",2),c("szOptionSelected",function(_){return i.testTypeSelected(_);}),p(),u(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),p()(),u(6,"sz-ui-dialog-actions",5)),t&2&&(a("header",i.header),m(2),a("formGroup",i.form),m(),a("source",i.testTypes),m(),a("source",i.testTypeUnits)("szOptionContentFn",i.testTypeUnitContentFunc)("szOptionValueFn",i.testTypeUnitValueFunc),m(2),a("actions",i.actions));},dependencies:[E,z,I,L,D,b,M,j,X,Q,T,x,ee,W,K,J],encapsulation:2});let n=o;return n;})();var de=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.router=i,this.title=q.referenceValues,this.dataSource=new re(),this.dataSource.columnDefs.push(l.uuid("id"),l.uuid("testTypeId"),l.uuid("unitId"),l.hyperlink("testType.name",r=>this.router.navigate([`/mlab/reference-values/${r.id}`])).setStacked(l.string("description").setValueClassFontSmall()),l.string("unit").setValueGetter(r=>r.unit?.symbol),l.date("createdAt",!1),l.date("updatedAt",!1),oe.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(me,{data:e}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceValueDeleteComponent(e){this.dialog.open(te,{data:ie.delete(this.mlabService.referenceValues.delete(e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(s(G),s(S),s(U));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(u(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),d(2,"button",2),c("click",function(){return i.openSaveComponent();}),d(3,"span"),A(4,3),p()()(),d(5,"sz-ui-table",4),c("update",function(){return i.get();}),p()),t&2&&(a("title",i.title),m(),a("dataSource",i.dataSource),m(4),a("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,C,ae,ne],encapsulation:2});let n=o;return n;})();var et=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=y({type:o}),o.ɵinj=R({providers:[S],imports:[V,E,B.forChild([{path:"",component:de}]),M,$,w,C,se,T]});let n=o;return n;})();export{et as ReferenceValuesModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/