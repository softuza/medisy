import{a as ie,d as re,e as a,h as ne,i as ae,j as se}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as J}from"./chunk-5TNDWLJL.js";import{a as S}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{b as Z,f as x,g as ee,h as te,j as oe,k as O}from"./chunk-JDBQ45YP.js";import{a as W}from"./chunk-ZGUTF2MC.js";import{j as l,k as K}from"./chunk-53DZ6NLX.js";import{a as U,b as F,d as Y,e as X,g as T}from"./chunk-7B3GMYBR.js";import{c as k,r as q,s as H,t as Q}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as g,f as D,g as I,l as v,n as z,q as P,r as y,u as B}from"./chunk-QZRJHJEV.js";import{Y as w}from"./chunk-4QPQ7IQ3.js";import{c as G,d as V}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as $,la as j}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as d,Kb as p,Lb as f,Wb as C,bb as m,ea as h,ja as n,mb as L,mc as E,na as c,nc as M,oa as b,yb as s}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var Se=(()=>{let t=class t extends x{constructor(){let o=n(U);super(o),this.mlabService=n(S),this.fb=n(y),this.data=n(F),this.disciplines=this.mlabService.disciplines.getAll({orderBy:["nameEn"]});let i=this.fb;this.dialog=o;let e=this.data;this.form=i.group({name:[e?.name,[g.required,g.minLength(1)]],abbreviation:[e?.abbreviation,[]],description:[e?.description,[]],purpose:[e?.purpose,[]],disciplineId:[e?.disciplineId,[]],reportName:[e?.reportName,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testGroups.update(this.data.id,this.form.value)):this.save(this.mlabService.testGroups.create(this.form.value)));}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=c({type:t,selectors:[["sz-medisy-laboratory-test-groups-save"]],standalone:!0,features:[E([]),L,M],decls:10,vars:6,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let i;i="\u0623\u062E\u062A\u0635\u0627\u0631";let e;e="\u0627\u0644\u0627\u0633\u0645 \u0641\u064A \u0627\u0644\u062A\u0642\u0631\u064A\u0631";let u;u="\u0627\u0644\u0648\u0635\u0641";let A;A="\u0627\u0644\u063A\u0627\u064A\u0629";let R;return R="\u0641\u0626\u0629",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","abbreviation","label",i],["formControlName","reportName","label",e],["formControlName","description","label",u],["formControlName","purpose","label",A],["formControlName","disciplineId","label",R,3,"source"],[3,"actions"]];},template:function(i,e){i&1&&(f(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),p()(),f(9,"sz-ui-dialog-actions",8)),i&2&&(s("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),m(2),s("formGroup",e.form),m(6),s("source",e.disciplines),m(),s("actions",e.actions));},dependencies:[B,v,D,I,z,P,T,X,O,ee,te,Q,k,H,q],encapsulation:2});let r=t;return r;})();var N=(()=>{let t=class t{constructor(){this.mlabService=n(S),this.router=n(G),this.dialog=n(Y),this.dataSource=new ne(),this.appBarConfig={title:w.test_groups,menu:K.default().setItems([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(a.uuid("id"),a.hyperlink("name").setClickFn(o=>this.router.navigate([J.TestGroups,o.id])).setStacked(a.string("discipline.name").setValueClassFontSmall()),a.string("code").setStyleSmall(),a.string("abbreviation").setStyleSmall(),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTestTypeDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(Se,{data:o}).afterClosed().subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openTestTypeDeleteComponent(o){this.dialog.open(oe,{data:Z.delete(this.mlabService.testTypes.delete(o.id),o)}).afterClosed().subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.testGroups.get(this.dataSource.getQuery()).pipe(ae(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(i){return new(i||t)();},t.ɵcmp=c({type:t,selectors:[["sz-medisy-laboratory-test-groups"]],standalone:!0,features:[E([S]),M],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,e){i&1&&(d(0,"sz-ui-table-bar",0),C("changed",function(){return e.get();}),p(),d(1,"sz-ui-table",1),C("update",function(){return e.get();}),p()),i&2&&(s("config",e.appBarConfig)("dataSource",e.dataSource),m(),s("dataSource",e.dataSource));},dependencies:[ie,re],encapsulation:2});let r=t;return r;})();var Je=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=b({type:t}),t.ɵinj=h({providers:[S],imports:[V.forChild([{path:"",component:N}]),T,$,j,se,O,W,N]});let r=t;return r;})();export{Je as TestGroupsModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/