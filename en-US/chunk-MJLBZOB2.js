import{a as Le,b as ye,c as $e}from"./chunk-7RC25PLB.js";import{a as Me,c as ge,e as Fe,j as he,k as Re,l as A}from"./chunk-34MSZMSB.js";import"./chunk-6DXJR33O.js";import"./chunk-DI33WAJD.js";import{e as ue,f as pe,g as Ie,i as ce,j as Ee,k as Pe}from"./chunk-JH67BC54.js";import{b as de,c as Ce}from"./chunk-DIVK5N2T.js";import{b as g}from"./chunk-WN7LVT7X.js";import{f as F}from"./chunk-MWQCS4K5.js";import{a as me,b as Ne,d as Ae,e as fe,g as M}from"./chunk-NAVTPQ6X.js";import{h as _e,u as Se,x as le,y as Te,z as Oe}from"./chunk-OWPLOJQP.js";import{Ca as ae,L as oe,N as te,d as S,f as H,g as J,k as K,m as Q,p as W,q as Y,t as ee,za as se}from"./chunk-YSD3E7UX.js";import"./chunk-QYJYVPVW.js";import{Ea as ie,Ga as ne,Ja as re,r as w}from"./chunk-NQOK3G2M.js";import{Ab as I,Fb as a,Gb as N,Hb as m,M as u,Rb as q,Tb as c,Vb as E,ea as G,fa as X,g as D,gb as T,hb as O,hc as P,ka as Z,kc as k,oa as p,ob as x,pa as j,rb as B,vb as s}from"./chunk-XEAZENSO.js";var f=(()=>{let o=class o extends Ce{constructor(e){super(e,"softuza-notification"),this.notifications=new de(this.http,`${this.basePath}/v1/notifications`);}};o.ɵfac=function(i){return new(i||o)(Z(w));},o.ɵprov=G({token:o,factory:o.ɵfac});let t=o;return t;})();var l=function(t){return t.Email="Email",t.Sms="Sms",t.Push="Push",t;}(l||{});function De(t,o){if(t&1&&(a(0,"mat-tab",5),m(1,"sz-ui-form-field-input",9)(2,"sz-ui-form-field-input",10)(3,"sz-ui-form-field-input",11)(4,"sz-ui-form-field-textarea",12),N()),t&2){let d=E();s("formGroup",d.formEmail);}}function Ge(t,o){if(t&1&&(a(0,"mat-tab",6),m(1,"sz-ui-form-field-input",13)(2,"sz-ui-form-field-textarea",14),N()),t&2){let d=E();s("formGroup",d.formSms);}}function Xe(t,o){if(t&1&&(a(0,"mat-tab",7),m(1,"sz-ui-form-field-input",15)(2,"sz-ui-form-field-textarea",16),N()),t&2){let d=E();s("formGroup",d.formPush);}}var ze=(()=>{let o=class o extends ue{constructor(e,i,n,_){super(n),this.sntiService=e,this.fb=i,this.dialog=n,this.data=_,this.notificationType=l,this.subscriptions=new D(),this.notificationTypes=Object.keys(l).map(C=>l[C]),this.formEmail=i.group({subject:[_?.email?.subject,[S.required]],replyToEmail:[_?.email?.replyToEmail,[S.email]],replyToName:[_?.email?.replyToName,[]],body:[_?.email?.body,[S.required]]}),this.formSms=i.group({originator:[_?.sms?.originator,[S.required]],body:[_?.sms?.body,[S.required]]}),this.formPush=i.group({title:[_?.push?.title,[S.required]],body:[_?.push?.body,[S.required]]}),this.form=i.group({name:[_?.name,[S.required]],description:[_?.description,[S.maxLength(4096)]],types:[_?.types??[],[S.required]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.types.valueChanges.subscribe(e=>{this.form.contains("email")?e?.includes(l.Email)||this.form.removeControl("email"):e?.includes(l.Email)&&this.form.addControl("email",this.formEmail),this.form.contains("sms")?e?.includes(l.Sms)||this.form.removeControl("sms"):e?.includes(l.Sms)&&this.form.addControl("sms",this.formSms),this.form.contains("push")?e?.includes(l.Push)||this.form.removeControl("push"):e?.includes(l.Push)&&this.form.addControl("push",this.formPush);}));}hasChannelType(e){return this.form.value.types?.includes(e);}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(i){return new(i||o)(O(f),O(Y),O(me),O(Ne));},o.ɵcmp=p({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[P([]),x,k],decls:11,vars:9,consts:()=>{let e;e="Name";let i;i="Description";let n;n="Types";let _;_="Email";let C;C="SMS";let R;R="Push";let L;L="Subject";let y;y="Email";let $;$="Name";let b;b="Body";let z;z="Originator";let U;U="Body";let V;V="Title";let v;return v="Body",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",i],["formControlName","types","label",n,3,"source","localizedValue","multiple"],["label",_,3,"formGroup"],["label",C,3,"formGroup"],["label",R,3,"formGroup"],[3,"actions"],["formControlName","subject","label",L],["formControlName","replyToEmail","label",y],["formControlName","replyToName","label",$],["formControlName","body","label",b],["formControlName","originator","label",z],["formControlName","body","label",U],["formControlName","title","label",V],["formControlName","body","label",v]];},template:function(i,n){i&1&&(m(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),a(6,"mat-tab-group"),B(7,De,5,1,"mat-tab",5)(8,Ge,3,1,"mat-tab",6)(9,Xe,3,1,"mat-tab",7),N()()(),m(10,"sz-ui-dialog-actions",8)),i&2&&(s("header",n.header),T(2),s("formGroup",n.form),T(3),s("source",n.notificationTypes)("localizedValue",!0)("multiple",!0),T(2),I(7,n.hasChannelType(n.notificationType.Email)?7:-1),T(),I(8,n.hasChannelType(n.notificationType.Sms)?8:-1),T(),I(9,n.hasChannelType(n.notificationType.Push)?9:-1),T(),s("actions",n.actions));},dependencies:[ee,K,H,J,Q,W,M,fe,_e,$e,Le,ye,Ee,pe,Ie,Oe,Se,Te,le],encapsulation:2});let t=o;return t;})();var Ue=(()=>{let o=class o{constructor(e,i,n){this.dialog=e,this.sntiService=i,this.router=n,this.title=ae.notifications,this.dataSource=new ge(),this.dataSource.fields.push(A.uuid("id"),A.hyperlink("name",_=>this.router.navigate([`/mlab/notification/${_.id}`])),A.string("description"),A.string("types"),A.date("createdAt",!1),A.date("updatedAt",!1),Me.menu([F.edit(_=>this.openSaveComponent(_)),F.delete(_=>this.openNotificationDeleteComponent(_))])),this.get();}openSaveComponent(e){this.dialog.open(ze,{data:e}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openNotificationDeleteComponent(e){this.dialog.open(ce,{data:Pe.delete(this.sntiService.notifications.delete(e.id),e)}).afterClosed().pipe(u(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.sntiService.notifications.get(this.dataSource.buildRequest()).pipe(se(this.dataSource.indicator),u(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(i){return new(i||o)(O(Ae),O(f),O(oe));},o.ɵcmp=p({type:o,selectors:[["softuza-notification-notifications"]],features:[P([])],decls:6,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"stateEnabled","dataSource","update"]];},template:function(i,n){i&1&&(m(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),c("changed",function(){return n.get();}),a(2,"button",2),c("click",function(){return n.openSaveComponent();}),a(3,"span"),q(4,3),N()()(),a(5,"sz-ui-table",4),c("update",function(){return n.get();}),N()),i&2&&(s("title",n.title),T(),s("dataSource",n.dataSource),T(4),s("stateEnabled",!0)("dataSource",n.dataSource));},dependencies:[ie,he,Fe,g],encapsulation:2});let t=o;return t;})();var Ve=[{path:"",component:Ue}];var Go=(()=>{let o=class o{};o.ɵfac=function(i){return new(i||o)();},o.ɵmod=j({type:o}),o.ɵinj=X({providers:[f],imports:[te.forChild(Ve),M,ne,Re,g,re]});let t=o;return t;})();export{Go as NotificationsModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/