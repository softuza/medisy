import{a as m,b as te,d as ie,e as oe,g as re,j as ne,k as ae}from"./chunk-RT2DOIX4.js";import"./chunk-FE7PUGPV.js";import"./chunk-WFQLTXIP.js";import{a as l}from"./chunk-D36Z2HMB.js";import"./chunk-OK2QS2H3.js";import{e as K,f as W,g as Z,i as x,j as O,k as ee}from"./chunk-CR4T7ICE.js";import"./chunk-JLE7ID76.js";import{a as T}from"./chunk-HCDVJ2I2.js";import{h as g}from"./chunk-DINSQL77.js";import{a as V,b as Y,d as F,e as X,g as M}from"./chunk-XG5XEC3X.js";import"./chunk-VZOUZHWP.js";import{e as w,w as H,y as Q,z as J}from"./chunk-NP4UDNU2.js";import"./chunk-KGY6UELD.js";import"./chunk-QO44V4EG.js";import{c as q}from"./chunk-SXV3ZUGK.js";import"./chunk-DPTX3R7K.js";import{d as C,f as D,g as I,l as v,n as y,q as z,r as P,u as G}from"./chunk-5RALKHWD.js";import"./chunk-CDJ3WT4B.js";import{c as B,e as $}from"./chunk-6KMSPDBU.js";import"./chunk-DC3E3YM6.js";import{ia as U,ja as j,la as k}from"./chunk-EMK4LBFH.js";import"./chunk-PJSKJO6O.js";import{Jb as _,Kb as d,Lb as p,Vb as h,Wb as f,bb as S,cb as a,ea as N,na as c,nc as E,oa as R,oc as L,qb as b,zb as s}from"./chunk-34GBQTTX.js";import"./chunk-43YHV5VG.js";var le=(()=>{let i=class i extends K{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({name:[r?.name,[C.required,C.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(P),a(V),a(Y));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),b,L],decls:9,vars:6,consts:()=>{let t;t="Name";let e;e="Abbreviation";let o;o="Description";let r;r="Purpose";let A;return A="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",o],["formControlName","purpose","label",r],["formControlName","disciplineId","label",A,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(5),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[G,v,D,I,y,z,M,X,O,W,Z,J,w,Q,H],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=q.test_groups,this.dataSource=new ie(),this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",r=>`/mlab/test-groups/${r.id}`).setStacked(m.string("discipline.name").setValueClassFontSmall()),m.string("code").setStyleSmall(),m.string("abbreviation").setStyleSmall(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),te.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(x,{data:ee.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(F),a(l),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups"]],features:[E([l])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),_(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),_(2,"button",3),f("click",function(){return o.openSaveComponent();}),_(3,"span"),h(4,0),d()()(),_(5,"sz-ui-table",4),f("update",function(){return o.get();}),d()),e&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("dataSource",o.dataSource));},dependencies:[j,ne,re,T],encapsulation:2});let n=i;return n;})();var Je=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=R({type:i}),i.ɵinj=N({providers:[l],imports:[$.forChild([{path:"",component:me}]),M,U,k,ae,O,T]});let n=i;return n;})();export{Je as TestGroupsModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/