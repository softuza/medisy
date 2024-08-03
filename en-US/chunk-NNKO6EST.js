import{a as m,b as te,d as ie,e as oe,g as re,j as ne,k as ae}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{a as l}from"./chunk-6VGSXMTA.js";import"./chunk-4NTC2VLV.js";import{e as K,f as W,g as Z,i as x,j as O,k as ee}from"./chunk-76IND4GV.js";import{a as T}from"./chunk-ZPKIPVTE.js";import{h as g}from"./chunk-TIEHGEOE.js";import{a as V,b as F,d as Y,e as X,g as M}from"./chunk-QCMAXDKX.js";import{e as w,u as H,w as Q,x as J}from"./chunk-W6VXAIY6.js";import"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as q}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import{d as C,f as D,g as I,l as v,n as y,q as z,r as P,u as G}from"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as B,e as $}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as U,ja as j,la as k}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Jb as _,Kb as d,Lb as p,Vb as h,Wb as f,bb as S,cb as a,ea as N,na as c,nc as E,oa as R,oc as L,qb as b,zb as s}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var le=(()=>{let i=class i extends K{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({name:[r?.name,[C.required,C.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(P),a(V),a(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),b,L],decls:9,vars:6,consts:()=>{let t;t="Name";let e;e="Abbreviation";let o;o="Description";let r;r="Purpose";let A;return A="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",o],["formControlName","purpose","label",r],["formControlName","disciplineId","label",A,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(5),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[G,v,D,I,y,z,M,X,O,W,Z,J,w,Q,H],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=q.test_groups,this.dataSource=new ie(),this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",r=>`/mlab/test-groups/${r.id}`).setStacked(m.string("discipline.name").setValueClassFontSmall()),m.string("code").setStyleSmall(),m.string("abbreviation").setStyleSmall(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),te.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(x,{data:ee.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(Y),a(l),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups"]],features:[E([l])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),_(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),_(2,"button",3),f("click",function(){return o.openSaveComponent();}),_(3,"span"),h(4,0),d()()(),_(5,"sz-ui-table",4),f("update",function(){return o.get();}),d()),e&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("dataSource",o.dataSource));},dependencies:[j,ne,re,T],encapsulation:2});let n=i;return n;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=R({type:i}),i.ɵinj=N({providers:[l],imports:[$.forChild([{path:"",component:me}]),M,U,k,ae,O,T]});let n=i;return n;})();export{We as TestGroupsModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/