import{a as c}from"./chunk-5SVVZO2V.js";import{c as se}from"./chunk-E36EASRH.js";import{a as p,b as oe,d as ie,f as re,i as ae,j as ne}from"./chunk-NKCTOLS4.js";import"./chunk-R4DSXBI7.js";import"./chunk-FPCXFWIA.js";import{e as K,f as W,g as Y,i as Z,j as ee,k as te}from"./chunk-TL26OVT7.js";import"./chunk-RCUIVXBG.js";import"./chunk-YYI2KTIZ.js";import{b as T}from"./chunk-4MXM7XAT.js";import{g as h}from"./chunk-4TWVI3ON.js";import{a as V,b as B,d as j,e as U,g as E}from"./chunk-27MVQMP7.js";import{c as H,s as Q,u as x,v as J}from"./chunk-SU66CAKG.js";import{c as q}from"./chunk-PPJOQ6MW.js";import"./chunk-4PE74OIY.js";import"./chunk-CJSQWSDQ.js";import{c as C}from"./chunk-LJX5OH5V.js";import{i as X}from"./chunk-YLP7B5XO.js";import{d as g,f as z,g as A,k as L,m as D,p as P,q as y,t as G}from"./chunk-HXGKKD7D.js";import"./chunk-D3C2SCOE.js";import{c as b,e as F}from"./chunk-WDXIMTZB.js";import"./chunk-ZMNH44QU.js";import{a as k,c as w}from"./chunk-62CSTUMD.js";import{ha as $}from"./chunk-47FGXJPX.js";import"./chunk-AFZEN52O.js";import{Jb as l,Kb as S,Lb as d,P as u,Vb as I,Wb as f,eb as m,fb as n,la as _,lc as M,ma as N,mc as R,qb as O,xa as v,zb as s}from"./chunk-HCTSIB2L.js";var le=(()=>{let o=class o extends K{constructor(t,e,i,r){super(i),this.srptService=t,this.fb=e,this.dialog=i,this.data=r,this.categories=this.srptService.categories.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[g.required]],description:[r?.description,[g.maxLength(4096)]],categoryId:[r?.categoryId,[g.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.srptService.templates.update(this.data.id,this.form.value)):this.save(this.srptService.templates.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(n(c),n(y),n(V),n(B));},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-reporting-templates-save"]],standalone:!0,features:[M([]),O,R],decls:7,vars:4,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0648\u0635\u0641";let i;return i="\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",e],["formControlName","categoryId","label",i,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(s("header",i.header),m(2),s("formGroup",i.form),m(3),s("source",i.categories),m(),s("actions",i.actions));},dependencies:[G,L,z,A,D,P,E,U,X,se,ee,W,Y,J,H,x,Q],encapsulation:2});let a=o;return a;})();var pe=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.srptService=e,this.router=i,this.title=C.templates,this.dataSource=new ie(),this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("name",r=>this.router.navigate([`/srpt/templates/${r.id}`])).setStacked(p.string("description").setValueClassFontSmall()),p.enum("category.name").setName(C.category),p.date("createdAt",!1),p.date("updatedAt",!1),oe.menu([h.edit(r=>this.openSaveComponent(r)),h.delete(r=>this.openReportDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(le,{data:t}).afterClosed().pipe(u(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReportDeleteComponent(t){this.dialog.open(Z,{data:te.delete(this.srptService.templates.delete(t.id),t)}).afterClosed().pipe(u(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.srptService.templates.get(this.dataSource.getQuery()).pipe(q(this.dataSource.indicator),u(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(n(j),n(c),n(b));},o.ɵcmp=_({type:o,selectors:[["sz-mgmt-reporting-templates"]],features:[M([])],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(d(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),f("changed",function(){return i.get();}),l(2,"button",2),f("click",function(){return i.openSaveComponent();}),l(3,"span"),I(4,3),S()()(),l(5,"sz-ui-table",4),f("update",function(){return i.get();}),S()),e&2&&(s("title",i.title),m(),s("dataSource",i.dataSource),m(4),s("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[k,ae,re,T],encapsulation:2});let a=o;return a;})();var Ye=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=N({type:o}),o.ɵinj=v({providers:[c],imports:[F.forChild([{path:"",component:pe}]),E,w,ne,T,$]});let a=o;return a;})();export{Ye as TemplatesModule};/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/