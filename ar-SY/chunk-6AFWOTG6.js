import{a as C}from"./chunk-DSOKWLYG.js";import{c as me}from"./chunk-DEDCJZVG.js";import{a as d}from"./chunk-JYUFJ57T.js";import{a as p,b as re,d as ne,f as ae,i as se,j as le}from"./chunk-ODWHN3HO.js";import"./chunk-V3IDSUBA.js";import"./chunk-XHAJJGHN.js";import"./chunk-J3ZGTMT7.js";import{e as Z,f as x,g as ee,i as te,j as oe,k as ie}from"./chunk-I247VJZ7.js";import"./chunk-5XS2JNPH.js";import{a as R}from"./chunk-3TCVELMY.js";import{h as N}from"./chunk-VN32AWOL.js";import{a as U,b as X,d as j,e as k,g as T}from"./chunk-XLS5ADJU.js";import"./chunk-3ZRLT6ZM.js";import{e as Q,j as J,v as K,x as W,y as Y}from"./chunk-V5AOIWG3.js";import"./chunk-BQGY2E4W.js";import"./chunk-2O3PA6GN.js";import{c as O}from"./chunk-NXGV7MLA.js";import{j as q}from"./chunk-4MKCL2OB.js";import{d as S,f as z,g as A,k as G,m as L,p as y,q as b,t as $}from"./chunk-D2M35WMU.js";import"./chunk-FDTJH5UN.js";import{c as F,e as V}from"./chunk-HMSPALCE.js";import"./chunk-G6VNZKHQ.js";import{ha as B,ia as w,ka as H}from"./chunk-XX5UC3BF.js";import"./chunk-GSP5ENK2.js";import{Ib as m,Jb as c,Kb as _,Ub as v,Vb as E,ab as l,bb as s,ea as I,kc as g,lc as D,na as M,oa as h,ob as P,yb as a}from"./chunk-MR5DLTC3.js";import"./chunk-XTPTFZB3.js";var _e=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.srptService=t,this.fb=e,this.dialog=o,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.pageDirections=Object.keys(C).map(u=>C[u]),this.form=e.group({name:[r?.name,[S.required]],description:[r?.description,[S.maxLength(4096)]],categoryId:[r?.categoryId,[S.required]],templateIdentifier:[r?.templateIdentifier,[S.required]],pageDirection:[r?.pageDirection??C.LTR,[S.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.reports.update(this.data.id,this.form.value)):this.save(this.srptService.reports.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(d),s(b),s(U),s(X));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[g([]),P,D],decls:9,vars:7,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let o;o="\u0627\u0644\u0645\u0639\u0631\u0641";let r;r="\u0627\u0644\u0627\u062A\u062C\u0627\u0647";let u;return u="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","templateIdentifier","label",o],["formControlName","pageDirection","label",r,3,"source"],["formControlName","categoryId","label",u,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(_(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),_(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-select",5)(7,"sz-ui-form-field-select",6),c()(),_(8,"sz-ui-dialog-actions",7)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),l(2),a("formGroup",o.form),l(4),a("source",o.pageDirections),l(),a("source",o.categories),l(),a("actions",o.actions));},dependencies:[$,G,z,A,L,y,T,k,q,me,oe,x,ee,Y,Q,W,K],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.srptService=e,this.router=o,this.title=O.templates,this.dataSource=new ne(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>`/srpt/templates/${r.id}`).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(O.category),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),re.menu([N.edit(r=>this.openSaveComponent(r)),N.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(_e,{data:t}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(te,{data:ie.delete(this.srptService.reports.delete(t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.reports.get(this.dataSource.getQuery()).pipe(J(this.dataSource.indicator)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(j),s(d),s(F));},i.ɵcmp=M({type:i,selectors:[["sz-mgmt-reporting-reports"]],features:[g([])],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"title"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(_(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),E("changed",function(){return o.get();}),m(2,"button",3),E("click",function(){return o.openSaveComponent();}),m(3,"span"),v(4,0),c()()(),m(5,"sz-ui-table",4),E("update",function(){return o.get();}),c()),e&2&&(a("title",o.title),l(),a("dataSource",o.dataSource),l(4),a("dataSource",o.dataSource));},dependencies:[w,se,ae,R],encapsulation:2});let n=i;return n;})();var et=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=h({type:i}),i.ɵinj=I({providers:[d],imports:[V.forChild([{path:"",component:Se}]),T,H,le,R,B]});let n=i;return n;})();export{et as TemplatesModule};/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/