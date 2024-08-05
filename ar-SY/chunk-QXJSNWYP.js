import{b as g}from"./chunk-E3NJQNXU.js";import{a as c}from"./chunk-5DPQRN3C.js";import{a as s,b as Z,d as x,e as ee,g as te,j as oe,k as ie}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import"./chunk-HAWQZ3DL.js";import{e as q,f as H,g as Q,i as J,j as K,k as W}from"./chunk-CZ3NOAZC.js";import{a as w}from"./chunk-4APH4GGR.js";import{h as M}from"./chunk-3HX3ISKW.js";import{a as y,b as F,d as $,e as V,g as B}from"./chunk-T2IQKITO.js";import{c as X,s as j,v as k}from"./chunk-OAP2OGZI.js";import"./chunk-6CUNSDAY.js";import"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as Y}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import{d as N,f as T,g as A,l as I,n as v,q as D,r as L,u as z}from"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{a as R,e as b}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ja as G,la as U}from"./chunk-UJOOHETU.js";import"./chunk-VUVL2XHK.js";import{Jb as m,Kb as _,Lb as l,Vb as P,Wb as u,bb as S,cb as n,ja as O,na as d,nc as h,oc as E,qb as C,zb as a}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var re=(()=>{let r=class r extends q{constructor(t,e,o,i){super(o),this.mpplService=t,this.fb=e,this.dialog=o,this.data=i,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[i.personName?.firstName,[N.required,N.minLength(1)]],lastName:[i.personName?.lastName,[]],fatherName:[i.personName?.fatherName,[]],motherName:[i.personName?.motherName,[]],languageId:[i.personName?.languageId,[N.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};r.ɵfac=function(e){return new(e||r)(n(c),n(L),n(y),n(F));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[C,E],decls:11,vars:6,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644";let e;e="\u0627\u0644\u0643\u0646\u064A\u0629";let o;o="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628";let i;return i="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",t],["formControlName","lastName","label",e],["formControlName","fatherName","label",o],["formControlName","motherName","label",i],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(l(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1)(3,"div",2),l(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),_(),m(6,"div",2),l(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),_(),l(9,"sz-ui-form-field-select",7),_()(),l(10,"sz-ui-dialog-actions",8)),e&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),S(2),a("formGroup",o.form),S(7),a("source",o.languages),S(),a("actions",o.actions));},dependencies:[z,I,T,A,v,D,B,V,K,H,Q,k,X,j],encapsulation:2});let p=r;return p;})();var Xe=(()=>{let r=class r{constructor(t,e,o){this.dialog=t,this.mpplService=e,this.route=o,this.personNamePipe=O(g),this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:Y.names,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0},this.dataSource.columnDefs.push(s.uuid("id"),s.uuid("languageId"),s.string("firstName"),s.string("lastName"),s.string("fatherName"),s.string("motherName"),s.date("createdAt").setVisible(!1),s.date("updatedAt").setVisible(!1),Z.menu([M.edit(i=>this.openSaveComponent(i)),M.delete(i=>this.openPersonNameDeleteComponent(i))])),this.get();}openSaveComponent(t){this.dialog.open(re,{data:{personId:this.person.id,personName:t}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(t){this.dialog.open(J,{data:W.delete(this.mpplService.persons.names.delete(this.person.id,t.id),t)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(ee(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};r.ɵfac=function(e){return new(e||r)(n($),n(c),n(R));},r.ɵcmp=d({type:r,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[h([g]),E],decls:6,vars:3,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[t,[3,"config"],[3,"changed","dataSource"],["title","","mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(e,o){e&1&&(l(0,"sz-ui-app-bar",1),m(1,"sz-ui-table-search-filter",2),u("changed",function(){return o.get();}),m(2,"button",3),u("click",function(){return o.openSaveComponent();}),m(3,"span"),P(4,0),_()()(),m(5,"sz-ui-table",4),u("update",function(){return o.get();}),_()),e&2&&(a("config",o.appBarConfig),S(),a("dataSource",o.dataSource),S(4),a("dataSource",o.dataSource));},dependencies:[b,U,G,ie,oe,te,w],encapsulation:2});let p=r;return p;})();export{Xe as PersonNamesComponent};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/