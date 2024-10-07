import{b as h}from"./chunk-MRRWHADO.js";import{e as ee}from"./chunk-IBNNL3QX.js";import{b as te}from"./chunk-LR4VAZ7I.js";import{a as J,b as K,c as n,f as W,g as Z}from"./chunk-F33HSYTW.js";import"./chunk-HXC6QJ4Y.js";import"./chunk-7CRVLPQQ.js";import"./chunk-IORBDA7O.js";import{a as p}from"./chunk-BIKHMDEI.js";import{b as j,f as w,g as k,h as q,j as H,k as Q}from"./chunk-INGRYE55.js";import"./chunk-4Y3DXTZY.js";import{a as y,b as F,d as V,e as R,g as $}from"./chunk-HESHWLJQ.js";import{c as G,q as x,r as U,s as X,u as Y}from"./chunk-UC5SOJIH.js";import"./chunk-WPGASEZJ.js";import"./chunk-H6274ZKL.js";import"./chunk-KVXHYQSU.js";import{d as C,f as D,g as b,l as v,o as z,r as L,s as P,u as I}from"./chunk-UR5GDBT7.js";import{b as l,c as M}from"./chunk-JVOCSYLO.js";import"./chunk-YBPPUSEE.js";import"./chunk-NQBOKACW.js";import"./chunk-FWKBPU5L.js";import{a as B}from"./chunk-YJ25L3AZ.js";import"./chunk-NHB37XS6.js";import{r as A}from"./chunk-TN5XOKTF.js";import"./chunk-OFLJSVNS.js";import"./chunk-FGEQFRED.js";import{m as O}from"./chunk-75V32KEJ.js";import{Jb as S,Kb as u,Lb as f,Wb as g,bb as d,ja as r,kb as T,mb as N,mc as _,na as c,nc as E,yb as a}from"./chunk-JPONW3XL.js";import"./chunk-RXNHEMMO.js";var ie=(()=>{let o=class o extends w{constructor(){let i=r(y);super(i),this.mpplService=r(p),this.fb=r(P),this.data=r(F),this.sexes=Object.keys(h).map(m=>h[m]),this.sexSelectConfig={emptyOption:!0};let t=this.fb;this.dialog=i;let e=this.data;this.form=t.group({name:[e?.name,[C.required,C.minLength(1)]],description:[e?.description,[]],sex:[e?.sex]});}submit(){this.IsValid()&&(this.data?this.save(this.mpplService.titles.update(this.data.id,this.form.value)):this.save(this.mpplService.titles.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles-save"]],standalone:!0,features:[_([p]),N,E],decls:7,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let e;return e="\u0627\u0644\u062C\u0646\u0633",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",t],["formControlName","sex","label",e,3,"source","localizedValue","config"],[3,"actions"]];},template:function(t,e){t&1&&(f(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),u()(),f(6,"sz-ui-dialog-actions",5)),t&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),d(2),a("formGroup",e.form),d(3),a("source",e.sexes)("localizedValue",!0)("config",e.sexSelectConfig),d(),a("actions",e.actions));},dependencies:[I,v,D,b,z,L,$,R,Q,k,q,Y,G,X,U,x,ee],encapsulation:2});let s=o;return s;})();var oe=(()=>{let o=class o{constructor(){this.dialog=r(V),this.mpplService=r(p),this.router=r(A),this.dataSource=new W("-createdAt"),this.alert=T(void 0),this.appBarConfig={title:B.titles,menu:M.default([l.add(this.openSaveComponent.bind(this)),l.menu([l.search()])])},this.dataSource.columnDefs.push(n.uuid("id"),n.string("name"),n.string("abbreviation").setVisible(!1),n.enum("sex"),n.date("createdAt").setVisible(!1),n.date("updatedAt").setVisible(!1),n.menu(M.more([l.edit(this.openSaveComponent.bind(this)),l.divider(),l.delete(this.openTitleDeleteComponent.bind(this))]))),this.get();}openSaveComponent(i){this.dialog.open(ie,{data:i}).afterClosed().subscribe(t=>{t&&this.dataSource.addOrUpdateItem(t);});}openTitleDeleteComponent(i){this.dialog.open(H,{data:j.delete(this.mpplService.titles.delete(i.id),i)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.titles.get(this.dataSource.getQuery()).pipe(Z(this.dataSource.state)).subscribe(i=>{this.dataSource.set(i.items,i.count);});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=c({type:o,selectors:[["sz-medisy-people-titles"]],standalone:!0,features:[_([O,te,p]),E],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,e){t&1&&(S(0,"sz-ui-table-bar",0),g("changed",function(){return e.get();}),u(),S(1,"sz-ui-table",1),g("update",function(){return e.get();}),u()),t&2&&(a("config",e.appBarConfig)("dataSource",e.dataSource),d(),a("dataSource",e.dataSource));},dependencies:[J,K],encapsulation:2});let s=o;return s;})();var Ge=[{path:"",component:oe}];export{Ge as default};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/