import{a,d as oe,e as ie,f as re,i as ne,j as ae}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as Q}from"./chunk-5TNDWLJL.js";import{a as S}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{b as W,f as Z,g as x,h as ee,j as te,k as T}from"./chunk-JDBQ45YP.js";import{a as K}from"./chunk-ZGUTF2MC.js";import{j as l,k as J}from"./chunk-53DZ6NLX.js";import{a as $,b as U,d as Y,e as F,g as M}from"./chunk-7B3GMYBR.js";import{c as w,r as k,s as q,t as H}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as C,f as L,g as D,l as I,n as v,q as z,r as P,u as y}from"./chunk-QZRJHJEV.js";import{Y as j}from"./chunk-4QPQ7IQ3.js";import{c as B,d as G}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as V,la as X}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as d,Kb as p,Lb as c,Wb as O,bb as m,ea as A,ja as n,mb as h,mc as E,na as f,nc as b,oa as R,yb as s}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var le=(()=>{let t=class t extends Z{constructor(){let o=n($);super(o),this.mlabService=n(S),this.fb=n(P),this.data=n(U),this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]});let i=this.fb;this.dialog=o;let e=this.data;this.form=i.group({name:[e?.name,[C.required,C.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]],disciplineId:[e?.disciplineId,[]],reportName:[e?.reportName,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),h,b],decls:10,vars:6,consts:()=>{let o;o="Name";let i;i="Abbreviation";let e;e="Name in Report";let u;u="Description";let g;g="Purpose";let N;return N="Discipline",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","abbreviation","label",i],["formControlName","reportName","label",e],["formControlName","description","label",u],["formControlName","purpose","label",g],["formControlName","disciplineId","label",N,3,"source"],[3,"actions"]];},template:function(i,e){i&1&&(c(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),p()(),c(9,"sz-ui-dialog-actions",8)),i&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),s("formGroup",e.form),m(6),s("source",e.disciplines),m(),s("actions",e.actions));},dependencies:[y,I,L,D,v,z,M,F,T,x,ee,H,w,q,k],encapsulation:2});let r=t;return r;})();var Se=(()=>{let t=class t{constructor(){this.mlabService=n(S),this.router=n(B),this.dialog=n(Y),this.dataSource=new oe(),this.appBarConfig={title:j.test_groups,menu:J.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(o=>this.router.navigate([Q.TestGroups,o.id])).setStacked(a.string("discipline.name").setValueClassFontSmall()),a.string("code").setStyleSmall(),a.string("abbreviation").setStyleSmall(),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(le,{data:o}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTestTypeDeleteComponent(o){this.dialog.open(te,{data:W.delete(this.mlabService.testTypes.delete(o.id),o)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=f({type:t,selectors:[["sz-medisy-laboratory-test-groups"]],features:[E([S])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,e){i&1&&(d(0,"sz-ui-table-bar",0),O("changed",function(){return e.get();}),p(),d(1,"sz-ui-table",1),O("update",function(){return e.get();}),p()),i&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),m(),s("dataSource",e.dataSource));},dependencies:[ne,re],encapsulation:2});let r=t;return r;})();var We=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=R({type:t}),t.ɵinj=A({providers:[S],imports:[G.forChild([{path:"",component:Se}]),M,V,X,ae,T,K]});let r=t;return r;})();export{We as TestGroupsModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/