import{a as d}from"./chunk-VS3EBPBG.js";import{c as me}from"./chunk-JUOG4ZM6.js";import{a as p,b as re,d as ne,f as ae,i as se,j as le}from"./chunk-NZORQWYR.js";import"./chunk-VTLVGF2Z.js";import"./chunk-TVVDBI5W.js";import"./chunk-Y7UUP46L.js";import{e as Z,f as x,g as ee,i as te,j as oe,k as ie}from"./chunk-XMT7ZAIC.js";import"./chunk-C6YYV6WS.js";import{a as C}from"./chunk-BYTIRDSX.js";import{h as N}from"./chunk-POKYVS3O.js";import{a as U,b as X,d as j,e as k,g as R}from"./chunk-IDA3DJDY.js";import"./chunk-L73C4IKA.js";import{c as Q,q as K,s as W,t as Y}from"./chunk-PX7G627R.js";import{c as J}from"./chunk-5QGBLY3O.js";import"./chunk-FIREYTYE.js";import"./chunk-EHH3UBE6.js";import{c as O}from"./chunk-JQFBSSR6.js";import{i as q}from"./chunk-YKI6444X.js";import{d as S,f as D,g as A,k as L,m as G,p as y,q as b,t as $}from"./chunk-ZVOQKQF7.js";import"./chunk-IQJDHXDR.js";import{c as F,e as V}from"./chunk-JHCHZOPJ.js";import"./chunk-W6ENNWK7.js";import{ia as B,ja as w,la as H}from"./chunk-BC4NCYN6.js";import"./chunk-UQI5C6OQ.js";import{Db as a,Nb as m,Ob as c,Pb as _,Zb as v,_b as g,hb as l,ib as s,ka as I,pc as T,qc as z,ua as E,ub as P,va as h}from"./chunk-R6OEYYKK.js";var u=function(n){return n.LTR="LTR",n.RTL="RTL",n;}(u||{});var _e=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.srptService=t,this.fb=e,this.dialog=o,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(u).map(f=>u[f]),this.form=e.group({name:[r?.name,[S.required]],description:[r?.description,[S.maxLength(4096)]],categoryId:[r?.categoryId,[S.required]],templateIdentifier:[r?.templateIdentifier,[S.required]],pageDirection:[r?.pageDirection??u.LTR,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(d),s(b),s(U),s(X));},i.ɵcmp=E({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[T([]),P,z],decls:9,vars:7,consts:()=>{let t;t="Name";let e;e="Description";let o;o="Identifier";let r;r="Direction";let f;return f="Category",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","templateIdentifier","label",o],["formControlName","pageDirection","label",r,3,"source"],["formControlName","categoryId","label",f,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),c()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),a("formGroup",o.form),l(4),a("source",o.pageDirections),l(),a("source",o.categories),l(),a("actions",o.actions));},dependencies:[$,L,D,A,G,y,R,k,q,me,oe,x,ee,Y,Q,W,K],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.srptService=e,this.router=o,this.title=O.templates,this.dataSource=new ne(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>`/srpt/templates/${r.id}`).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(O.category),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),re.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.reports.get(this.dataSource.getQuery()).pipe(J(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(j),s(d),s(F));},i.ɵcmp=E({type:i,selectors:[["sz-mgmt-reporting-reports"]],features:[T([])],decls:6,vars:4,consts:()=>{let t;return t="Add",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(e,o){e&1&&(_(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),g("changed",function(){return o.get();}),m(2,"button",3),g("click",function(){return o.openSaveComponent();}),m(3,"span"),v(4,0),c()()(),m(5,"sz-ui-table",4),g("update",function(){return o.get();}),c()),e&2&&(a("title",o.title),l(),a("dataSource",o.dataSource),l(4),a("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[w,se,ae,C],encapsulation:2});let n=i;return n;})();var tt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=I({providers:[d],imports:[V.forChild([{path:"",component:Se}]),R,H,le,C,B]});let n=i;return n;})();export{tt as TemplatesModule};/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/