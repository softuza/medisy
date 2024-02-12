import{a as re,b as ae,c as ne}from"./chunk-KPGDW6KJ.js";import{a as oe}from"./chunk-6JASRKM4.js";import{a as P}from"./chunk-HVDGC7SV.js";import{a as Z,c as x,e as ee,q as te,r as ie,s as m}from"./chunk-QPBSIFHN.js";import"./chunk-OLH6GLAT.js";import{a as B}from"./chunk-63BDPR5Z.js";import{a as q,h as w,i as H,j as J,l as K,m as Q,n as W}from"./chunk-I7URJTBN.js";import"./chunk-OON45GFZ.js";import{b as k}from"./chunk-AZIM6N3H.js";import{g as M}from"./chunk-F2NCOJMX.js";import{a as V,b as j,d as U,e as X,g as Y}from"./chunk-GX7FEJ3W.js";import{A as G,v as F,z as $}from"./chunk-HN3QCICR.js";import{J as L,N as z,d as E,f as g,g as N,k as A,m as v,p as I,q as D,t as y}from"./chunk-BXVEVM4T.js";import"./chunk-MCX5CS6H.js";import{Ea as R,Ga as b}from"./chunk-ILHRA673.js";import{Eb as l,Fb as S,Gb as d,M as _,Qb as h,Sb as c,fb as p,gb as a,jc as f,na as u,nb as C,nc as O,oc as T,ub as n}from"./chunk-ORGLCS6N.js";var se=(()=>{let o=class o extends w{constructor(e,t,i,r){super(i),this.mpplService=e,this.fb=t,this.dialog=i,this.data=r,this.form=t.group({value:[r.personEmail?.value,[E.required,E.email]],emailType:[r.personEmail?.emailType??re.Private,[E.required]],description:[r.personEmail?.description,[]]});}submit(){this.IsValid()&&(this.data.personEmail?this.save(this.mpplService.persons.emails.update(this.data.personId,this.data.personEmail.id,this.form.value)):this.save(this.mpplService.persons.emails.create(this.data.personId,this.form.value)));}};o.ɵfac=function(t){return new(t||o)(a(P),a(D),a(V),a(j));},o.ɵcmp=u({type:o,selectors:[["medisy-people-person-emails-save"]],standalone:!0,features:[C,f],decls:7,vars:3,consts:()=>{let e;e="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;return t="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","value","placeholder",e],["formControlName","emailType"],["formControlName","description","placeholder",t],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-input",2)(4,"medisy-form-field-email-type",3)(5,"sz-ui-form-field-textarea",4),S()(),d(6,"sz-ui-dialog-actions",5)),t&2&&(n("header",i.header),p(2),n("formGroup",i.form),p(4),n("actions",i.actions));},dependencies:[y,A,g,N,v,I,Y,X,G,F,$,Q,H,J,ne],encapsulation:2});let s=o;return s;})();var He=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mpplService=t,this.route=i,this.title=B.emails,this.dataSource=new x(),this.person=this.route.snapshot.data.person,this.dataSource.fields.push(m.uuid("id"),m.uuid("personId"),m.string("emailType").setFormatFn(r=>ae(r.emailType)),m.string("value"),m.date("createdAt",!1),m.date("updatedAt",!1),Z.menu([M.edit(r=>this.openSaveComponent(r)),M.delete(r=>this.openPersonEmailDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(se,{data:{personId:this.person.id,personEmail:e}}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openPersonEmailDeleteComponent(e){this.dialog.open(K,{data:W.delete(this.mpplService.persons.emails.delete(e.personId,e.id),e)}).afterClosed().pipe(_(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.mpplService.persons.emails.get(this.person.id,this.dataSource.buildRequest()).pipe(q(this.dataSource.indicator),_(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(a(U),a(P),a(L));},o.ɵcmp=u({type:o,selectors:[["medisy-people-person-emails"]],standalone:!0,features:[f],decls:7,vars:7,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title","subtitle"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(d(0,"sz-ui-header-info",0),O(1,"personName"),l(2,"sz-ui-table-search-filter",1),c("changed",function(){return i.get();}),l(3,"button",2),c("click",function(){return i.openSaveComponent();}),l(4,"span"),h(5,3),S()()(),l(6,"sz-ui-table",4),c("update",function(){return i.get();}),S()),t&2&&(n("title",i.title)("subtitle",T(1,5,i.person)),p(2),n("dataSource",i.dataSource),p(4),n("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[z,b,R,ie,te,ee,k,oe],encapsulation:2});let s=o;return s;})();export{He as PersonEmailsComponent};/**i18n:8e9b4850590b6fa147a647198c020a875dcb2f3f874168f5a397dc75d2bcd225*/