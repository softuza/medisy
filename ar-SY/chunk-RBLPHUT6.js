import{a as $e,b as be,c as Pe}from"./chunk-PTZVMM4E.js";import{a as I,b as ge,d as he,f as Le,k as Fe,l as ye}from"./chunk-5VZ5D5YF.js";import"./chunk-XUBC2NFI.js";import"./chunk-JBDAZZD3.js";import{f as Ce,g as pe,h as ue,j as ce,k as Ee,l as Ae}from"./chunk-ZRJSRLOM.js";import{b as F,c as de}from"./chunk-UXLKEBN7.js";import"./chunk-UABDP5X2.js";import{b as h}from"./chunk-HXBNSFNL.js";import{j as L}from"./chunk-NGPQWUJL.js";import{a as re,b as _e,d as se,e as ae,g}from"./chunk-YRNLLR6T.js";import{l as Oe,p as Ie,q as fe,r as Me}from"./chunk-MWZUS7D7.js";import{c as Te}from"./chunk-HOUCADFY.js";import"./chunk-P2QQ56TC.js";import"./chunk-GKM5F2GI.js";import{c as Ne}from"./chunk-4UQFGTYA.js";import{i as le}from"./chunk-JJRCRC6G.js";import{d as l,f as J,g as K,k as W,m as Y,p as Z,q as ee,t as oe}from"./chunk-3KPG26UX.js";import"./chunk-S3GYVJTQ.js";import{c as te,e as ie}from"./chunk-33HQZPUZ.js";import"./chunk-3BHDG2TW.js";import{a as Se,c as me}from"./chunk-NQMSNWCW.js";import{ia as ne}from"./chunk-WLYMVNMU.js";import{s as Q}from"./chunk-J2LOM5YY.js";import{Cb as u,Hb as a,Ib as O,Jb as N,O as C,Tb as k,Vb as c,Xb as E,g as B,ga as U,ha as X,ib as m,jb as T,jc as A,ma as j,mc as H,qa as p,qb as q,ra as x,tb as w,xb as s}from"./chunk-CQRLKO4M.js";var f=(()=>{let o=class o extends de{constructor(e){super(e,"softuza-notification"),this.notifications=new F(this.http,`${this.basePath}/v1/notifications`),this.messages=new F(this.http,`${this.basePath}/v1/messages`);}};o.ɵfac=function(i){return new(i||o)(j(Q));},o.ɵprov=U({token:o,factory:o.ɵfac});let t=o;return t;})();var S=function(t){return t.Email="Email",t.Sms="Sms",t.Push="Push",t;}(S||{});function De(t,o){if(t&1&&(a(0,"mat-tab",5),N(1,"sz-ui-form-field-input",9)(2,"sz-ui-form-field-input",10)(3,"sz-ui-form-field-input",11)(4,"sz-ui-form-field-textarea",12),O()),t&2){let M=E();s("formGroup",M.formEmail);}}function ve(t,o){if(t&1&&(a(0,"mat-tab",6),N(1,"sz-ui-form-field-input",13)(2,"sz-ui-form-field-textarea",14),O()),t&2){let M=E();s("formGroup",M.formSms);}}function Be(t,o){if(t&1&&(a(0,"mat-tab",7),N(1,"sz-ui-form-field-input",15)(2,"sz-ui-form-field-textarea",16),O()),t&2){let M=E();s("formGroup",M.formPush);}}var Re=(()=>{let o=class o extends Ce{constructor(e,i,n,r){super(n),this.sntiService=e,this.fb=i,this.dialog=n,this.data=r,this.notificationType=S,this.subscriptions=new B(),this.notificationTypes=Object.keys(S).map(d=>S[d]),this.formEmail=i.group({subject:[r?.email?.subject,[l.required]],replyToEmail:[r?.email?.replyToEmail,[l.email]],replyToName:[r?.email?.replyToName,[]],body:[r?.email?.body,[l.required]]}),this.formSms=i.group({originator:[r?.sms?.originator,[l.required]],body:[r?.sms?.body,[l.required]]}),this.formPush=i.group({title:[r?.push?.title,[l.required]],body:[r?.push?.body,[l.required]]}),this.form=i.group({name:[r?.name,[l.required]],description:[r?.description,[l.maxLength(4096)]],types:[r?.types??[],[l.required]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.types.valueChanges.subscribe(e=>{this.form.contains("email")?e?.includes(S.Email)||this.form.removeControl("email"):e?.includes(S.Email)&&this.form.addControl("email",this.formEmail),this.form.contains("sms")?e?.includes(S.Sms)||this.form.removeControl("sms"):e?.includes(S.Sms)&&this.form.addControl("sms",this.formSms),this.form.contains("push")?e?.includes(S.Push)||this.form.removeControl("push"):e?.includes(S.Push)&&this.form.addControl("push",this.formPush);}));}hasChannelType(e){return this.form.value.types?.includes(e);}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)(T(f),T(ee),T(re),T(_e));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-ntofication-save"]],standalone:!0,features:[A([]),q,H],decls:11,vars:9,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let i;i="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0627\u0644\u0623\u0646\u0645\u0627\u0637";let r;r="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let d;d="\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";let $;$="\u0627\u0634\u0639\u0627\u0631";let b;b="\u0627\u0644\u0645\u0648\u0636\u0648\u0639";let P;P="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let G;G="\u0627\u0644\u0627\u0633\u0645";let R;R="\u0627\u0644\u0645\u062D\u062A\u0648\u0649";let z;z="\u0627\u0644\u0645\u0631\u0633\u0644";let V;V="\u0627\u0644\u0645\u062D\u062A\u0648\u0649";let D;D="\u0627\u0644\u0644\u0642\u0628";let v;return v="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",i],["formControlName","types","label",n,3,"source","localizedValue","multiple"],["label",r,3,"formGroup"],["label",d,3,"formGroup"],["label",$,3,"formGroup"],[3,"actions"],["formControlName","subject","label",b],["formControlName","replyToEmail","label",P],["formControlName","replyToName","label",G],["formControlName","body","label",R],["formControlName","originator","label",z],["formControlName","body","label",V],["formControlName","title","label",D],["formControlName","body","label",v]];},template:function(i,n){i&1&&(N(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),N(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),a(6,"mat-tab-group"),w(7,De,5,1,"mat-tab",5)(8,ve,3,1,"mat-tab",6)(9,Be,3,1,"mat-tab",7),O()()(),N(10,"sz-ui-dialog-actions",8)),i&2&&(s("header",n.header),m(2),s("formGroup",n.form),m(3),s("source",n.notificationTypes)("localizedValue",!0)("multiple",!0),m(2),u(7,n.hasChannelType(n.notificationType.Email)?7:-1),m(),u(8,n.hasChannelType(n.notificationType.Sms)?8:-1),m(),u(9,n.hasChannelType(n.notificationType.Push)?9:-1),m(),s("actions",n.actions));},dependencies:[oe,W,J,K,Y,Z,g,ae,le,Pe,$e,be,Ee,pe,ue,Me,Oe,fe,Ie],encapsulation:2});let t=o;return t;})();var ze=(()=>{let o=class o{constructor(e,i,n){this.dialog=e,this.sntiService=i,this.router=n,this.title=Ne.notifications,this.dataSource=new he(),this.dataSource.columnDefs.push(I.uuid("id"),I.hyperlink("name",r=>this.router.navigate([`/mlab/notification/${r.id}`])),I.string("description"),I.string("types"),I.date("createdAt",!1),I.date("updatedAt",!1),ge.menu([L.edit(r=>this.openSaveComponent(r)),L.delete(r=>this.openNotificationDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open(Re,{data:e}).afterClosed().pipe(C(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(e){this.dialog.open(ce,{data:Ae.delete(this.sntiService.notifications.delete(e.id),e)}).afterClosed().pipe(C(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.getQuery()).pipe(Te(this.dataSource.indicator),C(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)(T(se),T(f),T(te));},o.ɵcmp=p({type:o,selectors:[["sz-mgmt-notification-notifications"]],features:[A([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,n){i&1&&(N(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),c("changed",function(){return n.get();}),a(2,"button",2),c("click",function(){return n.openSaveComponent();}),a(3,"span"),k(4,3),O()()(),a(5,"sz-ui-table",4),c("update",function(){return n.get();}),O()),i&2&&(s("title",n.title),m(),s("dataSource",n.dataSource),m(4),s("stateEnabled",!0)("dataSource",n.dataSource));},dependencies:[Se,Fe,Le,h],encapsulation:2});let t=o;return t;})();var Do=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=x({type:o}),o.ɵinj=X({providers:[f],imports:[ie.forChild([{path:"",component:ze}]),g,me,ye,h,ne]});let t=o;return t;})();export{Do as NotificationsModule};/**i18n:142b184bcc765aafabe38132ddf8b8010494004de549a9ae50380341c89792e9*/