import{a as l,b as re,d as ne,f as ae,k as se,l as le}from"./chunk-GZGIJ3AA.js";import"./chunk-Y7DDQ3EC.js";import"./chunk-M6IFX4OO.js";import{a as _}from"./chunk-QKMKC3CH.js";import{f as Z,g as ee,h as te,j as ie,k as g,l as oe}from"./chunk-DBFDBBEL.js";import"./chunk-EU67VDIO.js";import"./chunk-62HUTBRW.js";import{b as O}from"./chunk-KPHRAMAI.js";import{j as A}from"./chunk-EJDXHBCB.js";import{a as X,b as j,d as k,e as w,g as C}from"./chunk-VWNEGCRT.js";import{c as Q,q as J,s as K,t as W}from"./chunk-6PF2YSZT.js";import{c as x}from"./chunk-C2WWZD6X.js";import"./chunk-WNILOJP4.js";import"./chunk-ORZKHXQX.js";import{c as N}from"./chunk-WTX2KFGU.js";import"./chunk-QKGOYXSP.js";import{d as u,f as v,g as z,k as P,m as Y,p as $,q as B,t as V}from"./chunk-BBHJBBCY.js";import"./chunk-AH6US5BC.js";import{c as F,e as G}from"./chunk-TDDK2KRV.js";import"./chunk-ELX2DM7A.js";import{a as H,c as q}from"./chunk-4UZQAMIE.js";import{ia as U}from"./chunk-IME5AGE5.js";import"./chunk-APP24JVE.js";import{Hb as m,Ib as c,Jb as d,O as E,Tb as y,Vb as f,ha as R,ib as S,jb as a,jc as M,mc as b,qa as T,qb as D,ra as h,xb as s}from"./chunk-JGYGEXT3.js";var Se=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[u.required,u.minLength(1)]],localizedName:[r?.localizedName,[u.required,u.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(_),a(B),a(X),a(j));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[M([]),D,b],decls:10,vars:4,consts:()=>{let t;t="Name";let e;e="Latin";let o;o="Abbreviation";let r;r="Description";let L;L="Purpose";let I;return I="Discipline",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","localizedName","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",L],["formControlName","disciplineId","label",I,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),c()(),d(9,"sz-ui-dialog-actions",8)),e&2&&(s("header",o.header),S(2),s("formGroup",o.form),S(6),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[V,P,v,z,Y,$,C,w,g,ee,te,W,Q,K,J],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=N.testTypes,this.dataSource=new ne(),this.dataSource.columnDefs.push(l.uuid("id"),l.hyperlink("name",r=>this.router.navigate([`/mlab/test-types/${r.id}`])).setStacked(l.string("localizedName").setValueClassFontSmall()),l.string("code").setStyleSmall(),l.string("discipline.name").setName(N.discipline),l.string("abbreviation").setStyleSmall(),l.date("createdAt",!1),l.date("updatedAt",!1),re.menu([A.edit(r=>this.openSaveComponent(r)),A.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(Se,{data:t}).afterClosed().pipe(E(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ie,{data:oe.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().pipe(E(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(x(this.dataSource.indicator),E(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(k),a(_),a(F));},i.ɵcmp=T({type:i,selectors:[["sz-medisy-laboratory-test-types"]],features:[M([_])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(d(0,"sz-ui-header-info",0),m(1,"sz-ui-table-search-filter",1),f("changed",function(){return o.get();}),m(2,"button",2),f("click",function(){return o.openSaveComponent();}),m(3,"span"),y(4,3),c()()(),m(5,"sz-ui-table",4),f("update",function(){return o.get();}),c()),e&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[H,se,ae,O],encapsulation:2});let n=i;return n;})();var Ze=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=R({providers:[_],imports:[G.forChild([{path:"",component:me}]),C,U,q,le,g,O]});let n=i;return n;})();export{Ze as TestTypesModule};/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/