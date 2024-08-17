import{b as g}from"./chunk-5UXET42V.js";import{a as E}from"./chunk-IH253LYB.js";import{a as n,d as K,e as W,f as Z,i as x,j as ee}from"./chunk-D3A4DG3E.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import"./chunk-HWJ6IS6U.js";import{b as w,f as q,g as k,h as H,j as Q,k as J}from"./chunk-SR3I6TMI.js";import"./chunk-CT6UCPJK.js";import{j as p,k as Y}from"./chunk-4MMSBRWE.js";import{a as R,b as y,d as F,e as V,g as $}from"./chunk-4CSR7EPJ.js";import{c as j,r as U,t as X}from"./chunk-VG3PAYI5.js";import"./chunk-SNT3MO4N.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-IEUIBZ53.js";import{d as f,f as P,g as T,l as v,n as I,q as A,r as D,u as z}from"./chunk-VXNH5PTX.js";import{Y as G}from"./chunk-FZKM7RGV.js";import{a as L,e as b}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{la as B}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as S,Lb as l,Mb as _,Xb as M,bb as d,cb as a,ja as C,na as u,oc as h,pc as N,qb as O,zb as s}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var te=(()=>{let o=class o extends q{constructor(i,e,t,r){super(t),this.mpplService=i,this.fb=e,this.dialog=t,this.data=r,this.languages=this.mpplService.languages.getAll({orderBy:["name"]}),this.form=e.group({firstName:[r.personName?.firstName,[f.required,f.minLength(1)]],lastName:[r.personName?.lastName,[]],fatherName:[r.personName?.fatherName,[]],motherName:[r.personName?.motherName,[]],languageId:[r.personName?.languageId,[f.required]]});}submit(){this.IsValid()&&(this.data.personName?this.save(this.mpplService.persons.names.update(this.data.personId,this.data.personName.id,this.form.value)):this.save(this.mpplService.persons.names.create(this.data.personId,this.form.value)));}};o.ɵfac=function(e){return new(e||o)(a(E),a(D),a(R),a(y));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-people-person-names-save"]],standalone:!0,features:[O,N],decls:11,vars:6,consts:()=>{let i;i="First name";let e;e="Last name";let t;t="Father name";let r;return r="Mother name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","firstName","label",i],["formControlName","lastName","label",e],["formControlName","fatherName","label",t],["formControlName","motherName","label",r],["formControlName","languageId",3,"source"],[3,"actions"]];},template:function(e,t){e&1&&(_(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1)(3,"div",2),_(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),l(),S(6,"div",2),_(7,"sz-ui-form-field-input",5)(8,"sz-ui-form-field-input",6),l(),_(9,"sz-ui-form-field-select",7),l()(),_(10,"sz-ui-dialog-actions",8)),e&2&&(s("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),d(2),s("formGroup",t.form),d(7),s("source",t.languages),d(),s("actions",t.actions));},dependencies:[z,v,P,T,I,A,$,V,J,k,H,X,j,U],encapsulation:2});let m=o;return m;})();var Be=(()=>{let o=class o{constructor(i,e,t){this.dialog=i,this.mpplService=e,this.route=t,this.personNamePipe=C(g),this.dataSource=new K(),this.person=this.route.snapshot.data.person,this.appBarConfig={title:G.names,subtitle:this.personNamePipe.transform(this.person),backEnabled:!0,menu:Y.default().setItems([p.add(this.openSaveComponent.bind(this)),p.menu([p.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.uuid("languageId"),n.string("firstName"),n.string("lastName"),n.string("fatherName"),n.string("motherName"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu([p.edit(this.openSaveComponent.bind(this)),p.divider(),p.delete(this.openPersonNameDeleteComponent.bind(this))])),this.get();}openSaveComponent(i){this.dialog.open(te,{data:{personId:this.person.id,personName:i}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPersonNameDeleteComponent(i){this.dialog.open(Q,{data:w.delete(this.mpplService.persons.names.delete(this.person.id,i.id),i)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mpplService.persons.names.get(this.person.id,this.dataSource.getQuery()).pipe(W(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(e){return new(e||o)(a(F),a(E),a(L));},o.ɵcmp=u({type:o,selectors:[["sz-medisy-people-person-names"]],standalone:!0,features:[h([g]),N],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(S(0,"sz-ui-table-bar",0),M("changed",function(){return t.get();}),l(),S(1,"sz-ui-table",1),M("update",function(){return t.get();}),l()),e&2&&(s("config",t.appBarConfig)("dataSource",t.dataSource),d(),s("dataSource",t.dataSource));},dependencies:[b,B,ee,x,Z],encapsulation:2});let m=o;return m;})();export{Be as PersonNamesComponent};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/