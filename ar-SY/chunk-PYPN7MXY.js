import{a as N,b as ye}from"./chunk-JEKHHWSP.js";import{a as he,b as Re,c as Le}from"./chunk-EUFTFOE6.js";import{a as Ee,c as Pe,e as Me,q as ge,r as Fe,s as A}from"./chunk-3SWH476J.js";import"./chunk-RMMXSDNC.js";import{c as fe,h as de,i as pe,j as Ce,l as ue,m as ce,n as Ie}from"./chunk-2HDHNYMU.js";import{b as Oe,c as Ne}from"./chunk-L6PAJN6E.js";import{b as M}from"./chunk-7V4QNR7X.js";import{a as Ae,g}from"./chunk-BJEOQME3.js";import{a as Se,b as le,d as me,e as Te,g as P}from"./chunk-SG6HY6JP.js";import{A as se,h as ne,v as _e,z as ae}from"./chunk-XXBVSRTN.js";import{L as ee,N as oe,d as S,f as k,g as H,k as J,m as K,p as Q,q as W,t as Y}from"./chunk-43DI3E3T.js";import"./chunk-IUDMX3SL.js";import{Ea as te,Ga as ie,Ja as re,r as w}from"./chunk-QRXQW4KS.js";import{Eb as s,Fb as O,Gb as T,M as p,Qb as B,Sb as c,Ub as I,da as V,ea as G,fb as l,g as D,gb as m,gc as E,ja as X,jc as q,na as C,nb as j,oa as Z,qb as x,ub as a,zb as u}from"./chunk-CIWRZFHR.js";var f=(()=>{let o=class o extends Ne{constructor(e){super(e,"softuza-notification"),this.notifications=new Oe(this.http,`${this.basePath}/v1/notifications`);}};o.ɵfac=function(t){return new(t||o)(X(w));},o.ɵprov=V({token:o,factory:o.ɵfac});let i=o;return i;})();function De(i,o){if(i&1&&(s(0,"mat-tab",5),T(1,"sz-ui-form-field-input",9)(2,"sz-ui-form-field-input",10)(3,"sz-ui-form-field-input",11)(4,"sz-ui-form-field-textarea",12),O()),i&2){let d=I();a("formGroup",d.formEmail);}}function Ve(i,o){if(i&1&&(s(0,"mat-tab",6),T(1,"sz-ui-form-field-input",13)(2,"sz-ui-form-field-textarea",14),O()),i&2){let d=I();a("formGroup",d.formSms);}}function Ge(i,o){if(i&1&&(s(0,"mat-tab",7),T(1,"sz-ui-form-field-input",15)(2,"sz-ui-form-field-textarea",16),O()),i&2){let d=I();a("formGroup",d.formPush);}}var $e=(()=>{let o=class o extends de{constructor(e,t,n,r){super(n),this.sntiService=e,this.fb=t,this.dialog=n,this.data=r,this.notificationTypes=N,this.subscriptions=new D(),this.formEmail=t.group({subject:[r?.email?.subject,[S.required]],replyToEmail:[r?.email?.replyToEmail,[S.email]],replyToName:[r?.email?.replyToName,[]],body:[r?.email?.body,[S.required]]}),this.formSms=t.group({originator:[r?.sms?.originator,[S.required]],body:[r?.sms?.body,[S.required]]}),this.formPush=t.group({title:[r?.push?.title,[S.required]],body:[r?.push?.body,[S.required]]}),this.form=t.group({name:[r?.name,[S.required]],description:[r?.description,[S.maxLength(4096)]],types:[r?.types??[],[S.required]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.types.valueChanges.subscribe(e=>{this.form.contains("email")?e?.includes(N.Email)||this.form.removeControl("email"):e?.includes(N.Email)&&this.form.addControl("email",this.formEmail),this.form.contains("sms")?e?.includes(N.Sms)||this.form.removeControl("sms"):e?.includes(N.Sms)&&this.form.addControl("sms",this.formSms),this.form.contains("push")?e?.includes(N.Push)||this.form.removeControl("push"):e?.includes(N.Push)&&this.form.addControl("push",this.formPush);}));}hasChannelType(e){return this.form.value.types?.includes(e);}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(m(f),m(W),m(Se),m(le));},o.ɵcmp=C({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[E([]),j,q],decls:11,vars:7,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let n;n="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let r;r="\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";let h;h="\u0627\u0634\u0639\u0627\u0631";let R;R="\u0627\u0644\u0645\u0648\u0636\u0648\u0639";let L;L="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let y;y="\u0627\u0644\u0627\u0633\u0645";let b;b="\u0627\u0644\u0645\u062D\u062A\u0648\u0649";let $;$="\u0627\u0644\u0645\u0631\u0633\u0644";let z;z="\u0627\u0644\u0645\u062D\u062A\u0648\u0649";let U;U="\u0627\u0644\u0644\u0642\u0628";let v;return v="\u0627\u0644\u0645\u062D\u062A\u0648\u0649",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","types",3,"multiple"],["label",n,3,"formGroup"],["label",r,3,"formGroup"],["label",h,3,"formGroup"],[3,"actions"],["formControlName","subject","label",R],["formControlName","replyToEmail","label",L],["formControlName","replyToName","label",y],["formControlName","body","label",b],["formControlName","originator","label",$],["formControlName","body","label",z],["formControlName","title","label",U],["formControlName","body","label",v]];},template:function(t,n){t&1&&(T(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),T(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"medisy-form-field-notification-type",4),s(6,"mat-tab-group"),x(7,De,5,1,"mat-tab",5)(8,Ve,3,1,"mat-tab",6)(9,Ge,3,1,"mat-tab",7),O()()(),T(10,"sz-ui-dialog-actions",8)),t&2&&(a("header",n.header),l(2),a("formGroup",n.form),l(3),a("multiple",!0),l(2),u(7,n.hasChannelType(n.notificationTypes.Email)?7:-1),l(),u(8,n.hasChannelType(n.notificationTypes.Sms)?8:-1),l(),u(9,n.hasChannelType(n.notificationTypes.Push)?9:-1),l(),a("actions",n.actions));},dependencies:[Y,J,k,H,K,Q,P,Te,ne,Le,he,Re,ce,pe,Ce,se,_e,ae,ye],encapsulation:2});let i=o;return i;})();var ze=(()=>{let o=class o{constructor(e,t,n){this.dialog=e,this.sntiService=t,this.router=n,this.title=Ae.notifications,this.dataSource=new Pe(),this.dataSource.fields.push(A.uuid("id"),A.hyperlink("name",r=>this.router.navigate([`/mlab/notification/${r.id}`])),A.string("description"),A.string("types"),A.date("createdAt",!1),A.date("updatedAt",!1),Ee.menu([g.edit(r=>this.openSaveComponent(r)),g.delete(r=>this.openNotificationDeleteComponent(r))])),this.get();}openSaveComponent(e){this.dialog.open($e,{data:e}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openNotificationDeleteComponent(e){this.dialog.open(ue,{data:Ie.delete(this.sntiService.notifications.delete(e.id),e)}).afterClosed().pipe(p(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notifications.get(this.dataSource.buildRequest()).pipe(fe(this.dataSource.indicator),p(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(m(me),m(f),m(ee));},o.ɵcmp=C({type:o,selectors:[["softuza-notification-notifications"]],features:[E([])],decls:6,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(t,n){t&1&&(T(0,"sz-ui-header-info",0),s(1,"sz-ui-table-search-filter",1),c("changed",function(){return n.get();}),s(2,"button",2),c("click",function(){return n.openSaveComponent();}),s(3,"span"),B(4,3),O()()(),s(5,"sz-ui-table",4),c("update",function(){return n.get();}),O()),t&2&&(a("title",n.title),l(),a("dataSource",n.dataSource),l(4),a("stateEnabled",!0)("dataSource",n.dataSource));},dependencies:[te,ge,Me,M],encapsulation:2});let i=o;return i;})();var Ue=[{path:"",component:ze}];var Vo=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=Z({type:o}),o.ɵinj=G({providers:[f],imports:[oe.forChild(Ue),P,ie,Fe,M,re]});let i=o;return i;})();export{Vo as NotificationsModule};/**i18n:b7892fa2458d71b881caf0146f85363b4fc17bcbd4d79899ec1f23978831cd45*/