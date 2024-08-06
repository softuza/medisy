import{a as m,b as ae,d as se,e as le,g as _e,j as Se,k as me}from"./chunk-7H7A4XHN.js";import"./chunk-JXJYDBQT.js";import"./chunk-H3FOOGF5.js";import{a as S}from"./chunk-RAHCWUCI.js";import"./chunk-UYYWHWBI.js";import{e as te,f as ie,g as oe,i as re,j as C,k as ne}from"./chunk-ZZGHNMOI.js";import{a as O}from"./chunk-NXQ5VREG.js";import{h as A}from"./chunk-HWSLRHWT.js";import{a as j,b as k,d as w,e as q,g as M}from"./chunk-Z2LVGH3F.js";import{c as x,q as J,r as K,s as W,u as Z,v as ee}from"./chunk-5EKO62PK.js";import"./chunk-WABYONCF.js";import"./chunk-KCMCGJDS.js";import"./chunk-ZSZINKJW.js";import{c as g}from"./chunk-NE5STG6Q.js";import"./chunk-LGG5C546.js";import{d as u,f as P,g as Y,l as z,n as B,q as $,r as V,u as F}from"./chunk-WH3JX6YX.js";import"./chunk-HWVQOC2X.js";import{c as G,e as U}from"./chunk-LCFIH6IT.js";import"./chunk-6BPUQMXP.js";import{ia as X,ja as H,la as Q}from"./chunk-CKMIAYXP.js";import"./chunk-YNHLE3XH.js";import{Jb as _,Kb as E,Lb as d,Vb as D,Wb as T,bb as l,cb as s,ea as I,hc as y,na as c,nc as f,oa as b,oc as v,qb as h,zb as a}from"./chunk-ID6V6OOS.js";import"./chunk-YPLVL3HC.js";var de=(()=>{let o=class o extends te{constructor(i,e,t,r){super(t),this.mlabService=i,this.fb=e,this.dialog=t,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.defaultUnitSelectConfig={emptyOption:!0},this.form=e.group({nameEn:[r?.nameEn,[u.required,u.minLength(1)]],nameAr:[r?.nameAr,[u.required,u.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]],unitId:[r?.unitId,[]],hasResultOptions:[r?.hasResultOptions??!1,[u.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(S),s(V),s(j),s(k));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[f([]),h,v],decls:13,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064A\u0632\u064A\u0629";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629";let t;t="\u0623\u062E\u062A\u0635\u0627\u0631";let r;r="\u0627\u0644\u0648\u0635\u0641";let N;N="\u0627\u0644\u063A\u0627\u064A\u0629";let R;R="\u0641\u0626\u0629";let L;return L="\u0648\u0627\u062D\u062F\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",i],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",t],["formControlName","description","label",r],["formControlName","purpose","label",N],["formControlName","disciplineId","label",R,3,"source"],["formControlName","unitId","label",L,3,"source","config"],["formControlName","hasResultOptions","labelPosition","after"],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7)(9,"sz-ui-form-field-select",8),_(10,"mat-checkbox",9),y(11,"Has Result Options"),E()()(),d(12,"sz-ui-dialog-actions",10)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),a("formGroup",t.form),l(6),a("source",t.disciplines),l(),a("source",t.units)("config",t.defaultUnitSelectConfig),l(3),a("actions",t.actions));},dependencies:[F,z,P,Y,B,$,M,q,K,J,C,ie,oe,ee,x,Z,W],encapsulation:2});let n=o;return n;})();var ue=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mlabService=e,this.router=t,this.dataSource=new se("nameEn"),this.appBarConfig={title:g.test_types},this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("nameEn",r=>`/mlab/test-types/${r.id}`).setHeaderSortable(!0),m.string("code").setStyleSmall().setResponsive(!0),m.string("discipline.nameEn").setName(g.discipline).setResponsive(!0),m.string("abbreviation").setStyleSmall().setResponsive(!0),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),ae.menu([A.edit(r=>this.openSaveComponent(r)),A.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(i){this.dialog.open(de,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(i){this.dialog.open(re,{data:ne.delete(this.mlabService.testTypes.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(le(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(s(w),s(S),s(G));},o.ɵcmp=c({type:o,selectors:[["sz-medisy-laboratory-test-types"]],features:[f([S])],decls:6,vars:3,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[i,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),_(1,"sz-ui-table-search-filter",2),T("changed",function(){return t.get();}),_(2,"button",3),T("click",function(){return t.openSaveComponent();}),_(3,"span"),D(4,0),E()()(),_(5,"sz-ui-table",4),T("update",function(){return t.get();}),E()),e&2&&(a("config",t.appBarConfig),l(),a("dataSource",t.dataSource),l(4),a("dataSource",t.dataSource));},dependencies:[H,Se,_e,O],encapsulation:2});let n=o;return n;})();var rt=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=b({type:o}),o.ɵinj=I({providers:[S],imports:[U.forChild([{path:"",component:ue}]),M,X,Q,me,C,O]});let n=o;return n;})();export{rt as TestTypesModule};/**i18n:4821e1b9962cdddbef9c2ff89937dbb197b2343c5ff627ac1e6724c8725e235e*/