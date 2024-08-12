import{a as m,b as te,d as ie,e as oe,g as re,j as ne,k as ae}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import{a as l}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as K,f as W,g as Z,h as x,j as ee,k as C}from"./chunk-SQWEE7KP.js";import{a as O}from"./chunk-GUAFKVMJ.js";import{h as T}from"./chunk-D36EDMAQ.js";import{a as V,b as F,d as Y,e as X,g as M}from"./chunk-NGJJVZ6X.js";import{c as w,r as H,s as Q,t as J}from"./chunk-ZPSFEZWB.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as q}from"./chunk-WYY322KA.js";import"./chunk-Z6RT565P.js";import{d as g,f as D,g as I,l as v,n as z,q as y,r as P,u as B}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{c as G,e as $}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as U,ja as j,la as k}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as _,Lb as d,Mb as p,Wb as h,Xb as f,bb as S,cb as a,ea as N,na as c,oa as R,oc as E,pc as L,qb as b,zb as s}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var le=(()=>{let i=class i extends W{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=e.group({name:[r?.name,[g.required,g.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(a(l),a(P),a(V),a(F));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),b,L],decls:9,vars:6,consts:()=>{let t;t="Name";let e;e="Abbreviation";let o;o="Description";let r;r="Purpose";let A;return A="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",o],["formControlName","purpose","label",r],["formControlName","disciplineId","label",A,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(5),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[B,v,D,I,z,y,M,X,C,Z,x,J,w,Q,H],encapsulation:2});let n=i;return n;})();var me=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.dataSource=new ie(),this.appBarConfig={title:q.test_groups},this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",r=>`/mlab/test-groups/${r.id}`).setStacked(m.string("discipline.name").setValueClassFontSmall()),m.string("code").setStyleSmall(),m.string("abbreviation").setStyleSmall(),m.date("createdAt").setVisible(!1),m.date("updatedAt").setVisible(!1),te.menu([T.edit(this.openSaveComponent.bind(this)),T.divider(),T.delete(this.openTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ee,{data:K.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(oe(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(a(Y),a(l),a(G));},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-test-groups"]],features:[E([l])],decls:6,vars:3,consts:()=>{let t;return t="Add",[t,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(p(0,"sz-ui-app-bar",1),_(1,"sz-ui-table-search-filter",2),f("changed",function(){return o.get();}),_(2,"button",3),f("click",function(){return o.openSaveComponent();}),_(3,"span"),h(4,0),d()()(),_(5,"sz-ui-table",4),f("update",function(){return o.get();}),d()),e&2&&(s("config",o.appBarConfig),S(),s("dataSource",o.dataSource),S(4),s("dataSource",o.dataSource));},dependencies:[j,ne,re,O],encapsulation:2});let n=i;return n;})();var We=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=R({type:i}),i.ɵinj=N({providers:[l],imports:[$.forChild([{path:"",component:me}]),M,U,k,ae,C,O]});let n=i;return n;})();export{We as TestGroupsModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/