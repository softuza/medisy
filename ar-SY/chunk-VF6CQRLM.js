import{a as c}from"./chunk-FNECVQZF.js";import{c as ne}from"./chunk-QEHIMG77.js";import{a as p,b as te,d as oe,f as ie,i as re,j as ae}from"./chunk-GB6LNLSL.js";import"./chunk-6476LBLO.js";import"./chunk-DLGQULAM.js";import{e as J,f as K,g as W,i as Y,j as Z,k as ee}from"./chunk-RWBKTNX4.js";import"./chunk-A6ALB6MW.js";import{b as E}from"./chunk-AUUPRRII.js";import{j as C}from"./chunk-KL2VOW6L.js";import{a as $,b as V,d as B,e as j,g}from"./chunk-TDAALCJW.js";import{c as w,s as q,u as Q,v as x}from"./chunk-LJNLPR6O.js";import{c as H}from"./chunk-Y365ANJD.js";import"./chunk-624ACHJE.js";import"./chunk-D5DPYT77.js";import{c as T}from"./chunk-OPRLBPJZ.js";import{i as U}from"./chunk-3I6XO3BT.js";import{d as M,f as R,g as z,k as A,m as L,p as D,q as P,t as y}from"./chunk-ZBCFQZ6O.js";import"./chunk-ILI4DACJ.js";import{c as G,e as b}from"./chunk-IWB7BCZA.js";import"./chunk-RJKTLLZK.js";import{a as X,c as k}from"./chunk-FBMLFETS.js";import{ha as F}from"./chunk-VGXLPPL2.js";import"./chunk-K7SXQZKF.js";import{Bb as s,Lb as l,Mb as S,Nb as d,Xb as O,Yb as _,gb as m,hb as n,na as u,nc as f,oa as h,oc as I,sb as v,za as N}from"./chunk-75X3YXCS.js";var me=(()=>{let o=class o extends J{constructor(t,e,i,r){super(i),this.srptService=t,this.fb=e,this.dialog=i,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[M.required]],description:[r?.description,[M.maxLength(4096)]],categoryId:[r?.categoryId,[M.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(c),n(P),n($),n(V));},o.ɵcmp=u({type:o,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[f([]),v,I],decls:7,vars:4,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","categoryId","label",i,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(s("header",i.header),m(2),s("formGroup",i.form),m(3),s("source",i.categories),m(),s("actions",i.actions));},dependencies:[y,A,R,z,L,D,g,j,U,ne,Z,K,W,x,w,Q,q],encapsulation:2});let a=o;return a;})();var le=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.srptService=e,this.router=i,this.title=T.templates,this.dataSource=new oe(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>this.router.navigate([`/srpt/templates/${r.id}`])).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(T.category),p.date("createdAt",!1),p.date("updatedAt",!1),te.menu([C.edit(r=>this.openSaveComponent(r)),C.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(Y,{data:ee.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(H(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(B),n(c),n(G));},o.ɵcmp=u({type:o,selectors:[["sz-mgmt-reporting-templates"]],features:[f([])],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(d(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),_("changed",function(){return i.get();}),l(2,"button",2),_("click",function(){return i.openSaveComponent();}),l(3,"span"),O(4,3),S()()(),l(5,"sz-ui-table",4),_("update",function(){return i.get();}),S()),e&2&&(s("title",i.title),m(),s("dataSource",i.dataSource),m(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[X,re,ie,E],encapsulation:2});let a=o;return a;})();var Ke=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=h({type:o}),o.ɵinj=N({providers:[c],imports:[b.forChild([{path:"",component:le}]),g,k,ae,E,F]});let a=o;return a;})();export{Ke as TemplatesModule};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/