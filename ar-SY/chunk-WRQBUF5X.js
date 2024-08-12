import{a as _,b as ae,d as _e,e as Se,g as le,j as me,k as pe}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import{a as m}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as ie,f as oe,g as re,h as ne,j as se,k as A}from"./chunk-K46Y6NGM.js";import{a as g}from"./chunk-R7EUDMGD.js";import{e as te,h as N}from"./chunk-KBWUA6E4.js";import{a as j,b as k,d as w,e as H,g as O}from"./chunk-NGJJVZ6X.js";import{c as J,p as K,q as W,r as Z,s as x,t as ee}from"./chunk-COX3WBO6.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as C}from"./chunk-TUR2GSJY.js";import"./chunk-Z6RT565P.js";import{d as E,f as P,g as Y,l as z,n as B,q as $,r as V,u as U}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{c as F,e as G}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as X,ja as q,la as Q}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as l,Lb as u,Mb as d,Wb as c,Xb as f,bb as S,cb as a,ea as h,na as T,oa as D,oc as M,pc as y,qb as v,zb as s}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var Ee=(()=>{let o=class o extends oe{constructor(i,e,t,r){super(t),this.mlabService=i,this.fb=e,this.dialog=t,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.defaultUnitSelectConfig={emptyOption:!0},this.form=e.group({nameEn:[r?.nameEn,[E.required,E.minLength(1)]],nameAr:[r?.nameAr,[E.required,E.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]],unitId:[r?.preferedUnitId,[]],hasResultOptions:[r?.hasResultOptions??!1,[E.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(m),a(V),a(j),a(k));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[M([]),v,y],decls:13,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let t;t="\u0623\u062E\u062A\u0635\u0627\u0631";let r;r="\u0627\u0644\u0648\u0635\u0641";let R;R="\u0627\u0644\u063A\u0627\u064A\u0629";let L;L="\u0641\u0626\u0629";let I;I="\u0648\u0627\u062D\u062F\u0629";let b;return b="\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0646\u062A\u064A\u062C\u0629",[b,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",i],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",t],["formControlName","description","label",r],["formControlName","purpose","label",R],["formControlName","disciplineId","label",L,3,"source"],["formControlName","unitId","label",I,3,"source","config"],["formControlName","hasResultOptions","labelPosition","after"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",1),l(1,"mat-dialog-content")(2,"form",2),d(3,"sz-ui-form-field-input",3)(4,"sz-ui-form-field-input",4)(5,"sz-ui-form-field-input",5)(6,"sz-ui-form-field-textarea",6)(7,"sz-ui-form-field-textarea",7)(8,"sz-ui-form-field-select",8)(9,"sz-ui-form-field-select",9),l(10,"mat-checkbox",10),c(11,0),u()()(),d(12,"sz-ui-dialog-actions",11)),e&2&&(s("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),S(2),s("formGroup",t.form),S(6),s("source",t.disciplines),S(),s("source",t.units)("config",t.defaultUnitSelectConfig),S(3),s("actions",t.actions));},dependencies:[U,z,P,Y,B,$,O,H,W,K,A,re,ne,ee,J,x,Z],encapsulation:2});let n=o;return n;})();var ue=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mlabService=e,this.router=t,this.dataSource=new _e("nameEn"),this.appBarConfig={title:C.test_types},this.dataSource.columnDefs.push(_.uuid("id"),_.hyperlink("nameEn",r=>`/mlab/test-types/${r.id}`).setHeaderSortable(!0),_.string("code").setStyleSmall().setResponsive(!0),_.string("discipline.nameEn").setName(C.discipline).setResponsive(!0),_.string("preferedUnit.name").setName(C.unit).setResponsive(!0),_.string("abbreviation").setStyleSmall().setResponsive(!0),_.date("createdAt").setVisible(!1),_.date("updatedAt").setVisible(!1),ae.menu([N.edit(r=>this.openSaveComponent(r)),te.divider(),N.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(i){this.dialog.open(Ee,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(i){this.dialog.open(se,{data:ie.delete(this.mlabService.testTypes.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(Se(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(a(w),a(m),a(F));},o.ɵcmp=T({type:o,selectors:[["sz-medisy-laboratory-test-types"]],features:[M([m])],decls:6,vars:3,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[i,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),f("changed",function(){return t.get();}),l(2,"button",3),f("click",function(){return t.openSaveComponent();}),l(3,"span"),c(4,0),u()()(),l(5,"sz-ui-table",4),f("update",function(){return t.get();}),u()),e&2&&(s("config",t.appBarConfig),S(),s("dataSource",t.dataSource),S(4),s("dataSource",t.dataSource));},dependencies:[q,me,le,g],encapsulation:2});let n=o;return n;})();var nt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=D({type:o}),o.ɵinj=h({providers:[m],imports:[G.forChild([{path:"",component:ue}]),O,X,Q,pe,A,g]});let n=o;return n;})();export{nt as TestTypesModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/