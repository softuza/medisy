import{a as ae}from"./chunk-5HQ5IMIC.js";import"./chunk-QP7T6DKG.js";import{a as Z,c as x,e as ee,f as te,g as ie,q as se,r as oe,s as a}from"./chunk-ED622WBH.js";import{a as U}from"./chunk-63BDPR5Z.js";import{a as h}from"./chunk-3HOMBLD6.js";import{a as w,h as q,i as H,j as J,l as K,m as Q,n as W}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as X}from"./chunk-AZIM6N3H.js";import{g as y}from"./chunk-F2NCOJMX.js";import{a as j,b as G,d as k,e as B,g as V}from"./chunk-GX7FEJ3W.js";import"./chunk-HN3QCICR.js";import{J as L,L as z,N as F,d as v,f as A,g as I,k as O,m as P,p as N,q as D,t as R}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as Y,Ga as $}from"./chunk-ILHRA673.js";import{Eb as d,Fb as u,Gb as c,M as S,Qb as _,Sb as f,fb as p,gb as o,gc as M,jc as C,kc as b,lc as g,na as T,nb as E,ub as n}from"./chunk-ORGLCS6N.js";var me=()=>[],ce=r=>[r],re=(()=>{let s=class s extends q{constructor(e,t,i,l){super(i),this.mlabService=e,this.fb=t,this.dialog=i,this.data=l,this.form=t.group({testClassId:[l.testTypeTestClass?.testClassId,[v.required]],enabled:[l.testTypeTestClass?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data.testTypeTestClass?this.save(this.mlabService.testTypes.testClasses.update(this.data.testTypeId,this.data.testTypeTestClass?.id,this.form.value)):this.save(this.mlabService.testTypes.testClasses.create(this.data.testTypeId,this.form.value)));}};s.ɵfac=function(t){return new(t||s)(o(h),o(D),o(j),o(G));},s.ɵcmp=T({type:s,selectors:[["medisy-test-type-test-classes-save"]],standalone:!0,features:[M([]),E,C],decls:7,vars:7,consts:()=>{let e;return e="\u0645\u0641\u0639\u0644",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId",3,"excludeTestTypeIds"],["formControlName","enabled"],e,[3,"actions"]];},template:function(t,i){t&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),c(3,"medisy-form-field-test-class",2),d(4,"mat-checkbox",3),_(5,4),u()()(),c(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(),n("excludeTestTypeIds",i.data.testTypeTestClass?b(4,me):g(5,ce,i.data.testTypeId)),p(3),n("actions",i.actions));},dependencies:[R,O,A,I,P,N,V,B,ie,te,Q,H,J,ae],encapsulation:2});let r=s;return r;})();var qe=(()=>{let s=class s{constructor(e,t,i,l){this.dialog=e,this.mlabService=t,this.route=i,this.router=l,this.title=U.testClasses,this.dataSource=new x(),this.testType=this.route.snapshot.data.testType,this.dataSource.fields.push(a.uuid("id"),a.uuid("testClassId"),a.uuid("testTypeId"),a.string("testClass.name"),a.string("testClass.latinName"),a.string("testClass.code"),a.date("createdAt",!1),a.date("updatedAt",!1),a.checkbox("enabled",(m,ne)=>{m.enabled=ne,this.updateItem(m);}),Z.menu([y.edit(m=>this.openSaveComponent(m)),y.delete(m=>this.openTestTypeTestClassDeleteComponent(m))])),this.get();}openSaveComponent(e){this.dialog.open(re,{data:{testTypeId:this.testType.id,testTypeTestClass:e}}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeTestClassDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mlabService.testTypes.testClasses.delete(e.testTypeId,e.id),e)}).afterClosed().pipe(S(1)).subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testTypes.testClasses.update(e.testTypeId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testTypes.testClasses.get(this.testType.id,this.dataSource.buildRequest()).pipe(w(this.dataSource.indicator),S(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};s.ɵfac=function(t){return new(t||s)(o(k),o(h),o(L),o(z));},s.ɵcmp=T({type:s,selectors:[["medisy-laboratory-test-type-test-classes"]],standalone:!0,features:[C],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(c(0,"sz-ui-header-info",0),d(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),d(2,"button",2),f("click",function(){return i.openSaveComponent();}),d(3,"span"),_(4,3),u()()(),d(5,"sz-ui-table",4),f("update",function(){return i.get();}),u()),t&2&&(n("title",i.title)("subtitle",i.testType.name),p(),n("dataSource",i.dataSource),p(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[F,$,Y,oe,se,ee,X],encapsulation:2});let r=s;return r;})();export{qe as TestTypeTestClassesComponent};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/