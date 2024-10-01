import{b as g,f as N}from"./chunk-YT6CASAK.js";import"./chunk-YNUTG2SB.js";import{e as te}from"./chunk-H4K2CSXH.js";import{a as K,b as W,c as r,f as Z,g as ee}from"./chunk-LVG63I64.js";import"./chunk-2KPNCTCB.js";import"./chunk-S7INMPNY.js";import"./chunk-25IBV356.js";import{b as k,f as w,g as H,h as q,j as Q,k as J}from"./chunk-QBH4CUXF.js";import{a as u}from"./chunk-XY5F7KAL.js";import"./chunk-RSYANUDV.js";import{a as F,b as G,d as y,e as U,g as V}from"./chunk-FRBT2WCB.js";import{c as $,q as B,r as Y,s as X,u as x}from"./chunk-2NG5IK5P.js";import"./chunk-HLTWUKSH.js";import"./chunk-276RQCOC.js";import"./chunk-2IPEL4E4.js";import{d as M,f as L,g as b,l as D,n as z,q as I,r as P,t as v}from"./chunk-FY76SKRQ.js";import{b as S,c as j}from"./chunk-IDQKS733.js";import"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import{a as c}from"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import"./chunk-4I74CWZL.js";import"./chunk-LLSKOB3G.js";import"./chunk-OWRQBV6B.js";import"./chunk-3AQJ5CSK.js";import{Jb as m,Kb as d,Lb as E,Wb as R,bb as _,ja as s,mb as h,mc as C,na as f,nc as O,yb as n}from"./chunk-YAUSGWXJ.js";import"./chunk-QXHRBTK3.js";var oe=(()=>{let i=class i extends w{constructor(){let o=s(F);super(o),this.mlabService=s(u),this.fb=s(P),this.data=s(G),this.timeUnits=Object.keys(N).map(a=>N[a]),this.sexes=Object.keys(g).map(a=>g[a]);let t=this.fb;this.dialog=o;let e=this.data;this.form=t.group({nameEn:[e?.nameEn,[M.required,M.minLength(1)]],nameAr:[e?.nameAr,[M.minLength(1)]],description:[e?.description,[]],timeUnit:[e?.timeUnit??N.Year,[]],sex:[e?.sex??g.Male,[]],startAge:[e?.startAge,[]],endAge:[e?.endAge,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceGroups.create(this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-reference-groups-reference-group-save"]],standalone:!0,features:[C([u]),h,O],decls:13,vars:8,consts:()=>{let o;o="English Name";let t;t="Arabic Name";let e;e="Description";let a;a="Sex";let A;A="Start";let T;return T="End",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","nameEn","label",o],["formControlName","nameAr","label",t],["formControlName","description","label",e],[1,"sz-form-row"],["formControlName","sex","label",a,3,"source","localizedValue"],["formControlName","timeUnit","label","Time Unit",3,"source"],["formControlName","startAge","label",A],["formControlName","endAge","label",T],[3,"actions"]];},template:function(t,e){t&1&&(E(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),E(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4),m(6,"div",5),E(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-select",7),d(),m(9,"div",5),E(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),d()()(),E(12,"sz-ui-dialog-actions",10)),t&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),_(2),n("formGroup",e.form),_(5),n("source",e.sexes)("localizedValue",!0),_(),n("source",e.timeUnits),_(4),n("actions",e.actions));},dependencies:[v,D,L,b,z,I,V,U,J,H,q,x,$,X,Y,B,te],encapsulation:2});let l=i;return l;})();var ie=(()=>{let i=class i{constructor(){this.dialog=s(y),this.mlabService=s(u),this.dataSource=new Z(),this.appBarConfig={title:c.reference_groups,menu:j.default().setItems([S.add(this.openSaveComponent.bind(this)),S.menu([S.search()])])},this.dataSource.columnDefs.push(r.uuid("id"),r.string("nameEn").setStacked(r.string("nameAr").setValueClassFontSmall()),r.enum("sex"),r.enum("timeUnit").setHeaderName(c.unit),r.number("startAge").setHeaderName(c.start),r.number("endAge").setHeaderName(c.end),r.date("createdAt").setVisible(!1),r.date("updatedAt").setVisible(!1),r.menu([S.edit(this.openSaveComponent.bind(this)),S.divider(),S.delete(this.openReferenceGroupDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(oe,{data:o}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openReferenceGroupDeleteComponent(o){this.dialog.open(Q,{data:k.delete(this.mlabService.priceProfiles.delete(o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.referenceGroups.get(this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=f({type:i,selectors:[["sz-medisy-laboratory-reference-groups"]],standalone:!0,features:[C([u]),O],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(m(0,"sz-ui-table-bar",0),R("changed",function(){return e.get();}),d(),m(1,"sz-ui-table",1),R("update",function(){return e.get();}),d()),t&2&&(n("config",e.appBarConfig)("dataSource",e.dataSource),_(),n("dataSource",e.dataSource));},dependencies:[K,W],encapsulation:2});let l=i;return l;})();var Ge=[{path:"",component:ie}];export{Ge as default};/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/