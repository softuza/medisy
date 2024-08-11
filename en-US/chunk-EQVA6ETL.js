import{a as p,b as oe,d as re,e as ne,g as ae,j as se,k as le}from"./chunk-EBBH4FQM.js";import"./chunk-5UEHPFTG.js";import"./chunk-ALIV2OXE.js";import{a as u}from"./chunk-OZ7CS7NR.js";import"./chunk-ZEHAKVPV.js";import{e as Z,f as x,g as ee,i as te,j as C,k as ie}from"./chunk-JIVZM3NB.js";import{a as M}from"./chunk-XX3GN2Z5.js";import{e as W,h as T}from"./chunk-RXZ6CL54.js";import{a as P,b as Y,d as G,e as j,g as E}from"./chunk-GOK5DQ4J.js";import{q as H,r as Q,t as J,u as K}from"./chunk-NXCSCXM6.js";import"./chunk-GQUZCUGH.js";import"./chunk-QQ6G4KQ5.js";import"./chunk-XUXOODGA.js";import{c as q}from"./chunk-ASLHFDBF.js";import{i as X}from"./chunk-JORX5F6J.js";import{d as g,f as L,g as I,l as b,n as D,q as z,r as V,t as F,u as _}from"./chunk-X7FJYQVI.js";import"./chunk-S4MBIRCZ.js";import{c as B,e as U}from"./chunk-7SMEEYI6.js";import"./chunk-5KW76B2T.js";import{ia as $,ja as k,la as w}from"./chunk-FJQ67ICA.js";import"./chunk-7CHLL7QZ.js";import{Kb as m,Lb as c,Mb as d,Wb as v,Xb as f,bb as l,cb as s,ea as R,na as S,oa as A,oc as O,pc as y,qb as N,zb as a}from"./chunk-MI4BGEGZ.js";import"./chunk-2JROAFGL.js";var pe=(()=>{let o=class o extends Z{constructor(i,e,t,r){super(t),this.mlabService=i,this.fb=e,this.dialog=t,this.data=r,this.units=this.mlabService.units.getAll({orderBy:["name"]}),this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"]}),this.unitSelectConfig={emptyOption:!0},this.testTypeSelectConfig={optionSelectedFn:(Se,h)=>{h&&this.form.patchValue({unitId:h?.preferedUnitId});}},this.form=e.group({description:[r?.description,[g.maxLength(4096)]],testTypeId:[r?.testTypeId,[g.required]],unitId:[r?.unitId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};o.ɵfac=function(e){return new(e||o)(s(u),s(V),s(P),s(Y));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-reference-values-save"]],standalone:!0,features:[O([]),N,y],decls:7,vars:9,consts:()=>{let i;i="Test Type";let e;e="Unit";let t;return t="Description",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",i,3,"source","config"],["formControlName","unitId","label",e,3,"source","config"],["formControlName","description","label",t],[3,"actions"]];},template:function(e,t){e&1&&(d(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-textarea",4),c()(),d(6,"sz-ui-dialog-actions",5)),e&2&&(a("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),a("formGroup",t.form),l(),a("source",t.testTypes)("config",t.testTypeSelectConfig),l(),a("source",t.units)("config",t.unitSelectConfig),l(2),a("actions",t.actions));},dependencies:[_,b,L,I,D,z,E,j,X,H,C,x,ee,K,J,Q],encapsulation:2});let n=o;return n;})();var de=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mlabService=e,this.router=t,this.dataSource=new re(),this.appBarConfig={title:q.reference_values},this.dataSource.columnDefs.push(p.uuid("id"),p.hyperlink("testType.nameEn",r=>`/mlab/reference-values/${r.id}`).setStacked(p.string("description").setValueClassFontSmall()),p.string("unit").setValueGetter(r=>r.unit?.symbol),p.date("createdAt").setVisible(!1),p.date("updatedAt").setVisible(!1),oe.menu([T.edit(r=>this.openSaveComponent(r)),W.divider(),T.delete(r=>this.openReferenceValueDeleteComponent(r))])),this.get();}openSaveComponent(i){this.dialog.open(pe,{data:i}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openReferenceValueDeleteComponent(i){this.dialog.open(te,{data:ie.delete(this.mlabService.referenceValues.delete(i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.referenceValues.get(this.dataSource.getQuery()).pipe(ne(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(s(G),s(u),s(B));},o.ɵcmp=S({type:o,selectors:[["sz-medisy-laboratory-reference-values"]],decls:6,vars:3,consts:()=>{let i;return i="Add",[i,[3,"config"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,t){e&1&&(d(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),f("changed",function(){return t.get();}),m(2,"button",3),f("click",function(){return t.openSaveComponent();}),m(3,"span"),v(4,0),c()()(),m(5,"sz-ui-table",4),f("update",function(){return t.get();}),c()),e&2&&(a("config",t.appBarConfig),l(),a("dataSource",t.dataSource),l(4),a("dataSource",t.dataSource));},dependencies:[k,M,se,ae],encapsulation:2});let n=o;return n;})();var ot=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=A({type:o}),o.ɵinj=R({providers:[u],imports:[F,_,U.forChild([{path:"",component:de}]),E,$,w,M,le,C]});let n=o;return n;})();export{ot as ReferenceValuesModule};/**i18n:432eaf37c61bb291e8f30b0de1096d88a542ed89f4aba48a7a5a6c27385da906*/