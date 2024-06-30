import{a as m,b as ie,d as oe,f as re,i as ne,j as ae}from"./chunk-3RGN74YT.js";import"./chunk-4PUI7TFD.js";import"./chunk-UX7LCM42.js";import"./chunk-6QTNW6V3.js";import{a as l}from"./chunk-Y67U627O.js";import"./chunk-BDVQ6LF3.js";import{e as W,f as Z,g as x,i as ee,j as O,k as te}from"./chunk-45EQYRXL.js";import{a as T}from"./chunk-J7RSE5GX.js";import{h as g}from"./chunk-S4HAMF5I.js";import{a as V,b as F,d as Y,e as X,g as M}from"./chunk-PI57QVX3.js";import"./chunk-AYSVPPXZ.js";import{e as w,j as q,v as Q,x as J,y as K}from"./chunk-NGCO2DG7.js";import"./chunk-BQGY2E4W.js";import"./chunk-JB2SFW5Z.js";import{c as H}from"./chunk-FAEIW35E.js";import"./chunk-WDKUGUU7.js";import{d as C,f as D,g as I,k as v,m as y,p as z,q as P,t as G}from"./chunk-CXB763V2.js";import"./chunk-LUIABQW7.js";import{c as B,e as $}from"./chunk-AWG7Q7IV.js";import"./chunk-O6OUP7WU.js";import{ha as U,ia as j,ka as k}from"./chunk-SHXYMDXZ.js";import"./chunk-BSUEWO5U.js";import{$b as f,Eb as s,Ob as _,Pb as d,Qb as p,_b as L,gb as S,hb as a,ka as N,qc as E,rc as h,ta as c,ua as R,ub as b}from"./chunk-PSKSSTJ7.js";var le=(()=>{let i=class i extends W{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({name:[r?.name,[C.required,C.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(P),a(V),a(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),b,h],decls:9,vars:6,consts:()=>{let t;t="Name";let e;e="Abbreviation";let o;o="Description";let r;r="Purpose";let A;return A="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",o],["formControlName","purpose","label",r],["formControlName","disciplineId","label",A,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(5),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[G,v,D,I,y,z,M,X,O,Z,x,K,w,J,Q],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=H.test_groups,this.dataSource=new oe(),this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",r=>`/mlab/test-groups/${r.id}`).setStacked(m.string("discipline.name").setValueClassFontSmall()),m.string("code").setStyleSmall(),m.string("abbreviation").setStyleSmall(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),ie.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ee,{data:te.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(Y),a(l),a(B));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups"]],features:[E([l])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),_(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),_(2,"button",3),f("click",function(){return o.openSaveComponent();}),_(3,"span"),L(4,0),d()()(),_(5,"sz-ui-table",4),f("update",function(){return o.get();}),d()),e&2&&(s("title",o.title),S(),s("dataSource",o.dataSource),S(4),s("dataSource",o.dataSource));},dependencies:[j,ne,re,T],encapsulation:2});let n=i;return n;})();var Ke=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=R({type:i}),i.ɵinj=N({providers:[l],imports:[$.forChild([{path:"",component:me}]),M,U,k,ae,O,T]});let n=i;return n;})();export{Ke as TestGroupsModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/