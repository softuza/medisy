import{c as n}from"./chunk-PQ4OEC3L.js";import{a as C,d as ee,e as te,f as ie,h as oe,i as re,j as ae}from"./chunk-N3YZ3GWE.js";import"./chunk-YGU4JTYS.js";import"./chunk-ALLHSD3Q.js";import{b as K,f as Q,g as W,h as Y,j as Z,k as x}from"./chunk-BQ3MI4NW.js";import{b as k,e as J}from"./chunk-RNNBY4AW.js";import{h}from"./chunk-VP6ZLF3H.js";import{a as P,b as j,d as L,e as V,g}from"./chunk-WNUUIGGE.js";import{c as q,t as H}from"./chunk-7CXFXQJU.js";import"./chunk-IP3Z2NCN.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import{i as U,k as w}from"./chunk-JACASQJP.js";import{d as N,f as T,g as A,l as F,n as E,q as I,r as O,u as y}from"./chunk-VXNH5PTX.js";import{Y as X}from"./chunk-KQ5MQZXD.js";import{c as G,e as B}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{da as R,la as $}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Kb as p,Lb as l,Mb as f,Xb as v,bb as m,cb as s,ea as _,ja as u,na as c,oa as z,oc as S,pc as b,qb as D,zb as a}from"./chunk-G33TNFCW.js";import{a as M}from"./chunk-EAIILSS5.js";var me=(()=>{let e=class e extends Q{constructor(t,i,o,d){super(o),this.adminService=t,this.fb=i,this.dialog=o,this.data=d,this.form=i.group({name:[d?.name,[N.required]]});}submit(){this.IsValid()&&(this.data?this.save(this.adminService.updateGroup(this.data.id,M(M({},this.data),this.form.value))):this.save(this.adminService.createGroup(this.form.value)));}};e.ɵfac=function(i){return new(i||e)(s(n),s(O),s(P),s(j));},e.ɵcmp=c({type:e,selectors:[["sz-iam-users-save"]],standalone:!0,features:[S([]),D,b],decls:5,vars:5,consts:()=>{let t;return t="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[3,"actions"]];},template:function(i,o){i&1&&(f(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),f(3,"sz-ui-form-field-input",2),l()(),f(4,"sz-ui-dialog-actions",3)),i&2&&(a("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),m(2),a("formGroup",o.form),m(2),a("actions",o.actions));},dependencies:[y,F,T,A,E,I,g,V,U,oe,w,R,x,W,Y,H,q],encapsulation:2});let r=e;return r;})();var se=(()=>{let e=class e{constructor(){this.dialog=u(L),this.adminService=u(n),this.router=u(G),this.dataSource=new ee(),this.appBarConfig={title:X.groups,actions:[k.add(this.openSaveComponent.bind(this))]},this.dataSource.columnDefs.push(C.string("name"),C.menu([h.edit(this.openSaveComponent.bind(this)),h.divider(),h.delete(this.openUserDeleteComponent.bind(this))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().subscribe(()=>{this.get();});}openUserDeleteComponent(t){this.dialog.open(Z,{data:K.delete(this.adminService.deleteGroup(t.id),t)}).afterClosed().subscribe(()=>{this.get();});}get(){this.adminService.getGroups().pipe(te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t,t.length);});}};e.ɵfac=function(i){return new(i||e)();},e.ɵcmp=c({type:e,selectors:[["sz-iam-groups"]],features:[S([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(i,o){i&1&&(p(0,"sz-ui-table-bar",0),v("changed",function(){return o.get();}),l(),p(1,"sz-ui-table",1),v("update",function(){return o.get();}),l()),i&2&&(a("config",o.appBarConfig)("dataSource",o.dataSource),m(),a("dataSource",o.dataSource));},dependencies:[re,ie],encapsulation:2});let r=e;return r;})();var We=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=z({type:e}),e.ɵinj=_({providers:[n],imports:[B.forChild([{path:"",component:se}]),g,$,ae,J]});let r=e;return r;})();export{We as GroupsModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/