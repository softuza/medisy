import{a as m,b as ie,d as re,f as ne,i as ae,j as se}from"./chunk-NKCTOLS4.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{a as l}from"./chunk-5WIX5DGJ.js";import{e as W,f as Z,g as ee,i as te,j as C,k as oe}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as O}from"./chunk-4MXM7XAT.js";import{g as N}from"./chunk-4TWVI3ON.js";import{a as V,b as Y,d as X,e as j,g as T}from"./chunk-27MVQMP7.js";import{c as H,s as x,u as J,v as K}from"./chunk-SU66CAKG.js";import{c as q}from"./chunk-PPJOQ6MW.js";import"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{c as Q}from"./chunk-LJX5OH5V.js";import"./chunk-YLP7B5XO.js";import{d as g,f as b,g as v,k as y,m as z,p as P,q as G,t as $}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{c as B,e as U}from"./chunk-WDXIMTZB.js";import"./chunk-ZMNH44QU.js";import{a as k,c as w}from"./chunk-62CSTUMD.js";import{ha as F}from"./chunk-47FGXJPX.js";import"./chunk-AFZEN52O.js";import{Jb as _,Kb as d,Lb as p,P as c,Vb as L,Wb as E,eb as S,fb as a,la as f,lc as M,ma as R,mc as D,qb as I,xa as h,zb as s}from"./chunk-HCTSIB2L.js";var me=(()=>{let o=class o extends W{constructor(t,e,i,r){super(i),this.mlabService=t,this.fb=e,this.dialog=i,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[g.required,g.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(l),a(G),a(V),a(Y));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[M([]),I,D],decls:9,vars:4,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0623\u062E\u062A\u0635\u0627\u0631";let i;i="\u0627\u0644\u0648\u0635\u0641";let r;r="\u0627\u0644\u063A\u0627\u064A\u0629";let A;return A="\u0641\u0626\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","abbreviation","label",e],["formControlName","description","label",i],["formControlName","purpose","label",r],["formControlName","disciplineId","label",A,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(p(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),d()(),p(8,"sz-ui-dialog-actions",7)),e&2&&(s("header",i.header),S(2),s("formGroup",i.form),S(5),s("source",i.disciplines),S(),s("actions",i.actions));},dependencies:[$,y,b,v,z,P,T,j,C,Z,ee,K,H,J,x],encapsulation:2});let n=o;return n;})();var Se=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.router=i,this.title=Q.testGroups,this.dataSource=new re(),this.dataSource.columnDefs.push(m.uuid("id"),m.hyperlink("name",r=>this.router.navigate([`/mlab/test-groups/${r.id}`])).setStacked(m.string("discipline.name").setValueClassFontSmall()),m.string("code").setStyleSmall(),m.string("abbreviation").setStyleSmall(),m.date("createdAt",!1),m.date("updatedAt",!1),ie.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(te,{data:oe.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().pipe(c(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator),c(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(a(X),a(l),a(B));},o.ɵcmp=f({type:o,selectors:[["sz-medisy-laboratory-test-groups"]],features:[M([l])],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(p(0,"sz-ui-header-info",0),_(1,"sz-ui-table-search-filter",1),E("changed",function(){return i.get();}),_(2,"button",2),E("click",function(){return i.openSaveComponent();}),_(3,"span"),L(4,3),d()()(),_(5,"sz-ui-table",4),E("update",function(){return i.get();}),d()),e&2&&(s("title",i.title),S(),s("dataSource",i.dataSource),S(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,ae,ne,O],encapsulation:2});let n=o;return n;})();var We=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=R({type:o}),o.ɵinj=h({providers:[l],imports:[U.forChild([{path:"",component:Se}]),T,F,w,se,C,O]});let n=o;return n;})();export{We as TestGroupsModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/