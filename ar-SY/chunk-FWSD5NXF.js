import{a as d,b as ie,d as oe,e as re,g as ne,j as ae,k as se}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import{a as u}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as W,f as Z,g as x,h as ee,j as te,k as g}from"./chunk-SQWEE7KP.js";import{a as M}from"./chunk-GUAFKVMJ.js";import{h as C}from"./chunk-D36EDMAQ.js";import{a as P,b as Y,d as G,e as j,g as E}from"./chunk-NGJJVZ6X.js";import{q as H,r as Q,s as J,t as K}from"./chunk-ZPSFEZWB.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as q}from"./chunk-WYY322KA.js";import{i as X}from"./chunk-Z6RT565P.js";import{d as h,f as L,g as b,l as I,n as D,q as z,r as V,t as F,u as _}from"./chunk-GIW6HK33.js";import"./chunk-27BMIET6.js";import{c as B,e as U}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as $,ja as k,la as w}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as m,Lb as c,Mb as p,Wb as v,Xb as f,bb as l,cb as s,ea as R,na as S,oa as A,oc as O,pc as y,qb as N,zb as a}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var me=(()=>{let o=class o extends Z{constructor(i,e,t,r){super(t),this.mlabService=i,this.fb=e,this.dialog=t,this.data=r,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={emptyOption:!0},this.testTypeSelectConfig={optionSelectedFn:(ce,T)=>{T&&this.form.patchValue({unitId:T?.preferedUnitId});}},this.form=e.group({description:[r?.description,[h.maxLength(4096)]],testTypeId:[r?.testTypeId,[h.required]],unitId:[r?.unitId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(u),s(V),s(P),s(Y));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[O([]),N,y],decls:7,vars:9,consts:()=>{let i;i="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let e;e="\u0648\u0627\u062D\u062F\u0629";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",i,3,"source","config"],["formControlName","unitId","label",e,3,"source","config"],["formControlName","description","label",t],[3,"actions"]];},template:function(e,t){e&1&&(p(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),c()(),p(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),a("formGroup",t.form),l(),a("source",t.testTypes)("config",t.testTypeSelectConfig),l(),a("source",t.units)("config",t.unitSelectConfig),l(2),a("actions",t.actions));},dependencies:[_,I,L,b,D,z,E,j,X,H,g,x,ee,K,J,Q],encapsulation:2});let n=o;return n;})();var de=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mlabService=e,this.router=t,this.dataSource=new oe(),this.appBarConfig={title:q.reference_values},this.dataSource.columnDefs.push(d.uuid("id"),d.hyperlink("testType.nameEn",r=>`/mlab/reference-values/${r.id}`).setStacked(d.string("description").setValueClassFontSmall()),d.string("unit").setValueGetter(r=>r.unit?.symbol),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),ie.menu([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openReferenceValueDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(me,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(i){this.dialog.open(te,{data:W.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(re(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(s(G),s(u),s(B));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:3,consts:()=>{let i;return i="\u0625\u0636\u0627\u0641\u0629",[i,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(p(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return t.get();}),m(2,"button",3),f("click",function(){return t.openSaveComponent();}),m(3,"span"),v(4,0),c()()(),m(5,"sz-ui-table",4),f("update",function(){return t.get();}),c()),e&2&&(a("config",t.appBarConfig),l(),a("dataSource",t.dataSource),l(4),a("dataSource",t.dataSource));},dependencies:[k,M,ae,ne],encapsulation:2});let n=o;return n;})();var it=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=A({type:o}),o.ɵinj=R({providers:[u],imports:[F,_,U.forChild([{path:"",component:de}]),E,$,w,M,se,g]});let n=o;return n;})();export{it as ReferenceValuesModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/