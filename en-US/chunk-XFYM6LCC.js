import{a as S,b as ee,d as te,f as ie,i as oe,j as re}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import{a as m}from"./chunk-E4K3ZOYS.js";import"./chunk-J3ZGTMT7.js";import{e as J,f as K,g as W,i as Z,j as O,k as x}from"./chunk-I247VJZ7.js";import"./chunk-5XS2JNPH.js";import{a as g}from"./chunk-3TCVELMY.js";import{h as A}from"./chunk-VN32AWOL.js";import{a as V,b as G,d as U,e as X,g as T}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as k,j as q,x as Q,y as N}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as H}from"./chunk-NXGV7MLA.js";import"./chunk-4MKCL2OB.js";import{d as E,f as R,g as v,k as y,m as z,p as Y,q as B,s as $,t as C}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{e as F}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ia as j,ka as w}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as l,Jb as d,Kb as p,Ub as h,Vb as f,ab as _,bb as a,ea as b,kc as M,lc as D,na as u,oa as L,ob as P,yb as s}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var ae=(()=>{let o=class o extends J{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.form=e.group({nameEn:[r?.nameEn,[E.required,E.minLength(1)]],nameAr:[r?.nameAr,[E.required,E.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.specimenTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.specimenTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(m),a(B),a(V),a(G));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-specimen-types-save"]],standalone:!0,features:[M([]),P,D],decls:9,vars:5,consts:()=>{let t;t="English Name";let e;e="Arabic Name";let i;i="Abbreviation";let r;r="Description";let I;return I="Purpose",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",i],["formControlName","description","label",r],["formControlName","purpose","label",I],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),_(2),s("formGroup",i.form),_(6),s("actions",i.actions));},dependencies:[C,y,R,v,z,Y,T,X,O,K,W,N,k,Q],encapsulation:2});let n=o;return n;})();var se=(()=>{let o=class o{constructor(t,e){this.dialog=t,this.mlabService=e,this.title=H.specimen_types,this.dataSource=new te(),this.dataSource.columnDefs.push(S.uuid("id"),S.string("nameEn"),S.string("nameAr"),S.string("abbreviation"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),ee.menu([A.edit(i=>this.openSaveComponent(i)),A.delete(i=>this.openSpecimenTypeDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(ae,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openSpecimenTypeDeleteComponent(t){this.dialog.open(Z,{data:x.delete(this.mlabService.specimenTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.specimenTypes.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(a(U),a(m));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-laboratory-specimen-types"]],features:[M([m])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,i){e&1&&(p(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),f("changed",function(){return i.get();}),l(2,"button",3),f("click",function(){return i.openSaveComponent();}),l(3,"span"),h(4,0),d()()(),l(5,"sz-ui-table",4),f("update",function(){return i.get();}),d()),e&2&&(s("title",i.title),_(),s("dataSource",i.dataSource),_(4),s("dataSource",i.dataSource));},dependencies:[j,oe,ie,g],encapsulation:2});let n=o;return n;})();var Je=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=L({type:o}),o.ɵinj=b({providers:[m],imports:[$,C,F.forChild([{path:"",component:se}]),T,w,re,N,O,g]});let n=o;return n;})();export{Je as SpecimenTypesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/