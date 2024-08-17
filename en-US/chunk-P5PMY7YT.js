import{a,d as te,e as ie,f as oe,i as re,j as ne}from"./chunk-D3A4DG3E.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import{a as m}from"./chunk-HZWF5JWJ.js";import"./chunk-HWJ6IS6U.js";import{b as K,f as W,g as Z,h as x,j as ee,k as O}from"./chunk-SR3I6TMI.js";import{a as J}from"./chunk-CT6UCPJK.js";import{j as l,k as Q}from"./chunk-4MMSBRWE.js";import{a as $,b as F,d as U,e as Y,g as T}from"./chunk-4CSR7EPJ.js";import{c as w,r as k,s as q,t as H}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-IEUIBZ53.js";import{d as C,f as v,g as D,l as I,n as L,q as z,r as y,u as P}from"./chunk-VXNH5PTX.js";import{Y as j}from"./chunk-FZKM7RGV.js";import{c as B,e as G}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as V,la as X}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as p,Lb as _,Mb as E,Xb as g,bb as S,cb as d,ea as A,ja as c,na as f,oa as h,oc as M,pc as R,qb as b,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var se=(()=>{let e=class e extends W{constructor(i,t,o,n){super(o),this.mlabService=i,this.fb=t,this.dialog=o,this.data=n,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]}),this.form=t.group({name:[n?.name,[C.required,C.minLength(1)]],abbreviation:[n?.abbreviation,[]],description:[n?.description,[]],purpose:[n?.purpose,[]],disciplineId:[n?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(d(m),d(y),d($),d(F));},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[M([]),b,R],decls:9,vars:6,consts:()=>{let i;i="Name";let t;t="Abbreviation";let o;o="Description";let n;n="Purpose";let N;return N="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","abbreviation","label",t],["formControlName","description","label",o],["formControlName","purpose","label",n],["formControlName","disciplineId","label",N,3,"source"],[3,"actions"]];},template:function(t,o){t&1&&(E(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),E(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-textarea",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-select",6),_()(),E(8,"sz-ui-dialog-actions",7)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),s("formGroup",o.form),S(5),s("source",o.disciplines),S(),s("actions",o.actions));},dependencies:[P,I,v,D,L,z,T,Y,O,Z,x,H,w,q,k],encapsulation:2});let r=e;return r;})();var le=(()=>{let e=class e{constructor(){this.mlabService=c(m),this.router=c(B),this.dialog=c(U),this.dataSource=new te(),this.appBarConfig={title:j.test_groups,menu:Q.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name",i=>`/mlab/test-groups/${i.id}`).setStacked(a.string("discipline.name").setValueClassFontSmall()),a.string("code").setStyleSmall(),a.string("abbreviation").setStyleSmall(),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(se,{data:i}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeDeleteComponent(i){this.dialog.open(ee,{data:K.delete(this.mlabService.testTypes.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-medisy-laboratory-test-groups"]],features:[M([m])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,o){t&1&&(p(0,"sz-ui-table-bar",0),g("changed",function(){return o.get();}),_(),p(1,"sz-ui-table",1),g("update",function(){return o.get();}),_()),t&2&&(s("config",o.appBarConfig)("dataSource",o.dataSource),S(),s("dataSource",o.dataSource));},dependencies:[re,oe],encapsulation:2});let r=e;return r;})();var We=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=h({type:e}),e.ɵinj=A({providers:[m],imports:[G.forChild([{path:"",component:le}]),T,V,X,ne,O,J]});let r=e;return r;})();export{We as TestGroupsModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/