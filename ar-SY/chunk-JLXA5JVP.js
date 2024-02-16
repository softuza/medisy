import{a as se}from"./chunk-LKGVOJUE.js";import"./chunk-IR4ZVDHN.js";import{a as ie,c as oe,e as re,q as ne,r as ae,s as a}from"./chunk-FQE4JSPV.js";import"./chunk-TCXRPYGI.js";import{a as m}from"./chunk-B6BGJAKF.js";import{c as K,h as Q,i as W,j as Z,l as ee,m as C,n as te}from"./chunk-UVKODSF3.js";import"./chunk-LB4M65MR.js";import{b as O}from"./chunk-I3RE2UAN.js";import{a as u,g}from"./chunk-E2YN42QZ.js";import{a as q,b as H,d as x,e as J,g as P}from"./chunk-2OM43JW4.js";import{A as w,v as j,z as k}from"./chunk-PSHVV3L5.js";import{L as V,N as G,d as c,f as D,g as v,k as I,m as z,p as Y,q as $,t as F}from"./chunk-7YDZJT25.js";import"./chunk-QYJYVPVW.js";import{Ea as B,Ga as U,Ja as X}from"./chunk-NQOK3G2M.js";import{Fb as l,Gb as d,Hb as S,M as f,Rb as b,Tb as M,fa as R,gb as p,hb as s,hc as A,kc as y,oa as E,ob as L,pa as h,vb as _}from"./chunk-XEAZENSO.js";var me=(()=>{let o=class o extends Q{constructor(i,e,r,t){super(r),this.mlabService=i,this.fb=e,this.dialog=r,this.data=t,this.form=e.group({name:[t?.name,[c.required,c.minLength(1)]],latinName:[t?.latinName,[c.required,c.minLength(1)]],abbreviation:[t?.abbreviation,[]],description:[t?.description,[]],purpose:[t?.purpose,[]],disciplineId:[t?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(m),s($),s(q),s(H));},o.ɵcmp=E({type:o,selectors:[["medisy-laboratory-test-types-save"]],standalone:!0,features:[A([]),L,y],decls:10,vars:3,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0644\u0627\u062A\u064A\u0646\u064A";let r;r="\u0623\u062E\u062A\u0635\u0627\u0631";let t;t="\u0627\u0644\u0648\u0635\u0641";let N;return N="\u0627\u0644\u063A\u0627\u064A\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","latinName","label",e],["formControlName","abbreviation","label",r],["formControlName","description","label",t],["formControlName","purpose","label",N],["formControlName","disciplineId"],[3,"actions"]];},template:function(e,r){e&1&&(S(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),S(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"medisy-form-field-discipline",7),d()(),S(9,"sz-ui-dialog-actions",8)),e&2&&(_("header",r.header),p(2),_("formGroup",r.form),p(7),_("actions",r.actions));},dependencies:[F,I,D,v,z,Y,P,J,C,W,Z,w,j,k,se],encapsulation:2});let n=o;return n;})();var le=(()=>{let o=class o{constructor(i,e,r){this.dialog=i,this.mlabService=e,this.router=r,this.title=u.testTypes,this.dataSource=new oe(),this.dataSource.fields.push(a.uuid("id"),a.icon("isGroup",t=>t.isGroup?"scatter_plot":"science").setContentTooltip(t=>t.isGroup?u.group:u.test),a.hyperlink("name",t=>this.router.navigate([`/mlab/test-types/${t.id}`])),a.string("code"),a.string("latinName"),a.string("discipline.name").setDisplayName(u.discipline),a.string("description"),a.string("abbreviation"),a.date("createdAt",!1),a.date("updatedAt",!1),ie.menu([g.edit(t=>this.openSaveComponent(t)),g.delete(t=>this.openTestTypeDeleteComponent(t))])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:i}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(i){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.delete(i.id),i)}).afterClosed().pipe(f(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.buildRequest()).pipe(K(this.dataSource.indicator),f(1)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(s(x),s(m),s(V));},o.ɵcmp=E({type:o,selectors:[["medisy-laboratory-test-types"]],features:[A([m])],decls:6,vars:4,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],i,[3,"stateEnabled","dataSource","update"]];},template:function(e,r){e&1&&(S(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),M("changed",function(){return r.get();}),l(2,"button",2),M("click",function(){return r.openSaveComponent();}),l(3,"span"),b(4,3),d()()(),l(5,"sz-ui-table",4),M("update",function(){return r.get();}),d()),e&2&&(_("title",r.title),p(),_("dataSource",r.dataSource),p(4),_("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[B,ne,re,O],encapsulation:2});let n=o;return n;})();var pe=[{path:"",component:le}];var nt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=h({type:o}),o.ɵinj=R({providers:[m],imports:[G.forChild(pe),P,X,U,ae,C,O]});let n=o;return n;})();export{nt as TestTypesModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/