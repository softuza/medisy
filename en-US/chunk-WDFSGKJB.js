import{a as S,b as ne,d as ae,e as se,g as le,j as me,k as Se}from"./chunk-UGB6Y3DG.js";import"./chunk-DLQAZNQZ.js";import"./chunk-BBN6XKNQ.js";import{a as m}from"./chunk-RTXEUJTA.js";import"./chunk-DAMHZX46.js";import"./chunk-DV32DAUC.js";import{e as ee,f as te,g as ie,i as oe,j as O,k as re}from"./chunk-LINI7WFH.js";import{a as C}from"./chunk-FW3D7UEL.js";import{h as A}from"./chunk-GOEYM4JS.js";import{a as X,b as j,d as k,e as w,g as M}from"./chunk-AHUVNO4M.js";import"./chunk-F5R7DRI7.js";import{A as Z,e as x,u as Q,v as J,x as K,z as W}from"./chunk-WE4BMUWU.js";import"./chunk-W6XZBSJY.js";import"./chunk-A6HPAVPV.js";import{c as g}from"./chunk-OXD3F7WY.js";import"./chunk-4ICCMFAV.js";import{d,f as y,g as P,l as z,n as Y,q as B,r as $,u as V}from"./chunk-HKMIKSFL.js";import"./chunk-7PIZFBIY.js";import{c as F,e as G}from"./chunk-FBTMN7JN.js";import"./chunk-6JKOPXSS.js";import{ia as U,ja as q,la as H}from"./chunk-PUK5P6HB.js";import"./chunk-66CG3LE3.js";import{Jb as l,Kb as c,Lb as p,Vb as I,Wb as T,bb as _,cb as a,ea as b,hc as D,na as E,nc as f,oa as h,oc as v,qb as L,zb as s}from"./chunk-ZZ2H3KSV.js";import"./chunk-VWF2YKFJ.js";var pe=(()=>{let i=class i extends ee{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({nameEn:[r?.nameEn,[d.required,d.minLength(1)]],nameAr:[r?.nameAr,[d.required,d.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]],hasResultOptions:[r?.hasResultOptions,[d.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(m),a($),a(X),a(j));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types-save"]],standalone:!0,features:[f([]),L,v],decls:12,vars:6,consts:()=>{let t;t="English Name";let e;e="Arabic Name";let o;o="Abbreviation";let r;r="Description";let N;N="Purpose";let R;return R="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",t],["formControlName","nameAr","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",N],["formControlName","disciplineId","label",R,3,"source"],["formControlName","hasResultOptions","labelPosition","after"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),l(9,"mat-checkbox",8),D(10,"Has Result Options"),c()()(),p(11,"sz-ui-dialog-actions",9)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),_(2),s("formGroup",o.form),_(6),s("source",o.disciplines),_(3),s("actions",o.actions));},dependencies:[V,z,y,P,Y,B,M,w,J,Q,O,te,ie,Z,x,W,K],encapsulation:2});let n=i;return n;})();var de=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=g.test_types,this.dataSource=new ae("nameEn"),this.dataSource.columnDefs.push(S.uuid("id"),S.hyperlink("nameEn",r=>`/mlab/test-types/${r.id}`).setHeaderSortable(!0),S.string("code").setStyleSmall().setResponsive(!0),S.string("discipline.nameEn").setName(g.discipline).setResponsive(!0),S.string("abbreviation").setStyleSmall().setResponsive(!0),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),ne.menu([A.edit(r=>this.openSaveComponent(r)),A.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(pe,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(oe,{data:re.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(k),a(m),a(F));},i.ɵcmp=E({type:i,selectors:[["sz-medisy-laboratory-test-types"]],features:[f([m])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),l(1,"sz-ui-table-search-filter",2),T("changed",function(){return o.get();}),l(2,"button",3),T("click",function(){return o.openSaveComponent();}),l(3,"span"),I(4,0),c()()(),l(5,"sz-ui-table",4),T("update",function(){return o.get();}),c()),e&2&&(s("title",o.title),_(),s("dataSource",o.dataSource),_(4),s("dataSource",o.dataSource));},dependencies:[q,me,le,C],encapsulation:2});let n=i;return n;})();var ot=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=b({providers:[m],imports:[G.forChild([{path:"",component:de}]),M,U,H,Se,O,C]});let n=i;return n;})();export{ot as TestTypesModule};/**i18n:6b55cd1e489fc2a9391d1b13a69b265321df5f62925c47a1512178c2da6817cf*/