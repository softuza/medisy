import{a as j}from"./chunk-6XGFPFBL.js";import{a as be,b as $e,c as ze}from"./chunk-KKUUJPER.js";import{f as O,g as ye}from"./chunk-CCLL2PQ6.js";import"./chunk-PPO5LMMV.js";import"./chunk-PWAP25HQ.js";import"./chunk-I7NN55R5.js";import{b as Z}from"./chunk-Z333ZEEM.js";import{a as Pe,b as ge,c as q,e as he,o as Fe,p as De}from"./chunk-I7TP3TN4.js";import"./chunk-CZ465XL4.js";import{c as Ce,g as ce,h as Ee,i as G,j as X,l as Ae,m as Y,n as Me}from"./chunk-UJAW327Y.js";import{a as v,b as L,d as fe,e as U,g as f}from"./chunk-JW5GSDNP.js";import{D as pe,E as R,i as z,x as Oe,z as de}from"./chunk-M2QIPGOP.js";import{d as N,g,h,l as F,n as D,o as y,p as b,s as $}from"./chunk-DNMCT3KT.js";import{c as w}from"./chunk-ZVQOD7OG.js";import"./chunk-XDA5TPS5.js";import"./chunk-64EDSMYL.js";import"./chunk-FOMYF5QC.js";import{a as V}from"./chunk-CSFT2WH3.js";import{a as Ie,e as ue}from"./chunk-OGDXQP2U.js";import{e as Se}from"./chunk-KYUPPZUX.js";import"./chunk-MOVIZYKO.js";import"./chunk-B5RRONYF.js";import{a as me,c as Te}from"./chunk-M4TKXCQI.js";import{Ra as Ne,r as le}from"./chunk-IPZKDZL6.js";import{Bb as a,Cb as m,Db as T,L as C,Nb as x,Pb as A,Rb as M,Zb as p,ac as P,ca as ne,cb as s,da as re,db as S,f as ie,ia as _e,kb as c,la as d,ma as ae,nb as _,tb as se,ub as E}from"./chunk-3QIFGVJ6.js";var I=(()=>{let o=class o{constructor(e){this.http=e,this.basePath="softuza-notification",this.notifications=new ue(this.http,`${this.basePath}/v1/notifications`);}};o.ɵfac=function(t){return new(t||o)(_e(le));},o.ɵprov=ne({token:o,factory:o.ɵfac});let n=o;return n;})();var Le=(()=>{let o=class o extends ce{constructor(e,t,i){super(t),this.fb=e,this.dialog=t,this.data=i,this.form=e.group({channelType:[i?.channelType]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)(S(b),S(v),S(L));},o.ɵcmp=d({type:o,selectors:[["softuza-notification-notifications-filter"]],standalone:!0,features:[p([]),c,P],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","channelType"],[3,"actions"]],template:function(t,i){t&1&&(T(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),T(3,"medisy-form-field-channel-type",2),m()(),T(4,"sz-ui-dialog-actions",3)),t&2&&(_("header",i.header),s(2),_("formGroup",i.form),s(2),_("actions",i.actions));},dependencies:[$,F,g,h,D,y,Y,G,X,R,z,Oe,f,U,j],encapsulation:2});let n=o;return n;})();function je(n,o){if(n&1&&(a(0,"mat-tab",5),T(1,"sz-ui-form-field-input",9)(2,"sz-ui-form-field-input",10)(3,"sz-ui-form-field-input",11)(4,"sz-ui-form-field-textarea",12),m()),n&2){let u=M();_("formGroup",u.formEmail);}}function Be(n,o){if(n&1&&(a(0,"mat-tab",6),T(1,"sz-ui-form-field-input",13)(2,"sz-ui-form-field-textarea",14),m()),n&2){let u=M();_("formGroup",u.formSms);}}function xe(n,o){if(n&1&&(a(0,"mat-tab",7),T(1,"sz-ui-form-field-input",15)(2,"sz-ui-form-field-textarea",16),m()),n&2){let u=M();_("formGroup",u.formPush);}}var Ue=(()=>{let o=class o extends Ee{constructor(e,t,i,r){super(i),this.sntiService=e,this.fb=t,this.dialog=i,this.data=r,this.channelTypes=O,this.subscriptions=new ie(),this.formEmail=t.group({subject:[r?.email?.subject,[N.required]],replyToEmail:[r?.email?.replyToEmail,[N.email]],replyToName:[r?.email?.replyToName,[]],body:[r?.email?.body,[N.required]]}),this.formSms=t.group({originator:[r?.sms?.originator,[N.required]],body:[r?.sms?.body,[N.required]]}),this.formPush=t.group({title:[r?.push?.title,[N.required]],body:[r?.push?.body,[N.required]]}),this.form=t.group({name:[r?.name,[N.required]],description:[r?.description,[N.maxLength(4096)]],channelTypes:[r?.channelTypes??[],[N.required]]}),this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.form.controls.channelTypes.valueChanges.subscribe(e=>{this.form.contains("email")?e?.includes(O.Email)||this.form.removeControl("email"):e?.includes(O.Email)&&this.form.addControl("email",this.formEmail),this.form.contains("sms")?e?.includes(O.Sms)||this.form.removeControl("sms"):e?.includes(O.Sms)&&this.form.addControl("sms",this.formSms),this.form.contains("push")?e?.includes(O.Push)||this.form.removeControl("push"):e?.includes(O.Push)&&this.form.addControl("push",this.formPush);}));}hasChannelType(e){return this.form.value.channelTypes?.includes(e);}submit(){this.IsValid()&&(this.data?this.save(this.sntiService.notifications.update(this.data.id,this.form.value)):this.save(this.sntiService.notifications.create(this.form.value)));}};o.ɵfac=function(t){return new(t||o)(S(I),S(b),S(v),S(L));},o.ɵcmp=d({type:o,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[p([]),c,P],decls:11,vars:7,consts:()=>{let e;e="Name";let t;t="Description";let i;i="Email";let r;r="SMS";let k;k="Push";let H;H="Subject";let J;J="Email";let K;K="Name";let Q;Q="Body";let W;W="Originator";let ee;ee="Body";let oe;oe="Title";let te;return te="Body",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","channelTypes",3,"multiple"],["label",i,3,"formGroup"],["label",r,3,"formGroup"],["label",k,3,"formGroup"],[3,"actions"],["formControlName","subject","label",H],["formControlName","replyToEmail","label",J],["formControlName","replyToName","label",K],["formControlName","body","label",Q],["formControlName","originator","label",W],["formControlName","body","label",ee],["formControlName","title","label",oe],["formControlName","body","label",te]];},template:function(t,i){t&1&&(T(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),T(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"medisy-form-field-channel-type",4),a(6,"mat-tab-group"),se(7,je,5,1,"mat-tab",5)(8,Be,3,1,"mat-tab",6)(9,xe,3,1,"mat-tab",7),m()()(),T(10,"sz-ui-dialog-actions",8)),t&2&&(_("header",i.header),s(2),_("formGroup",i.form),s(3),_("multiple",!0),s(2),E(7,i.hasChannelType(i.channelTypes.Email)?7:-1),s(1),E(8,i.hasChannelType(i.channelTypes.Sms)?8:-1),s(1),E(9,i.hasChannelType(i.channelTypes.Push)?9:-1),s(1),_("actions",i.actions));},dependencies:[$,F,g,h,D,y,f,U,z,ze,be,$e,Y,G,X,R,de,pe,j],encapsulation:2});let n=o;return n;})();var Ve=(()=>{let o=class o{constructor(e,t){this.dialog=e,this.sntiService=t,this.dataSource=new ge(Ie.paged()),this.dataSource.addRows([q.borderless([Z.nameText(),Z.createdAt(),Z.menu([w.edit(i=>this.openSaveComponent(i)),w.delete(i=>this.openNotificationDeleteComponent(i))])]),q.headerless([Pe.text("description")])]),this.get();}openFilterComponent(){this.dialog.open(Le,{data:this.dataSource.filterModel}).afterClosed().pipe(C(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}openSaveComponent(e){this.dialog.open(Ue,{data:e}).afterClosed().pipe(C(1)).subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openNotificationDeleteComponent(e){this.dialog.open(Ae,{data:Me.delete(this.sntiService.notifications.delete(e.id),e)}).afterClosed().pipe(C(1)).subscribe(t=>{this.dataSource.delete(t);});}get(){this.sntiService.notifications.get(this.dataSource.filterModel).pipe(Ce(this.dataSource.indicator),C(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(S(fe),S(I));},o.ɵcmp=d({type:o,selectors:[["softuza-notification-notifications"]],features:[p([ye])],decls:8,vars:4,consts:()=>{let e;e="Notifications";let t;return t="Add",[["start","",1,"sz-h5"],e,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),x(2,1),m()(),a(3,"sz-ui-table-filter",2),A("search",function(){return i.get();})("filter",function(){return i.openFilterComponent();}),a(4,"button",3),A("click",function(){return i.openSaveComponent();}),a(5,"span"),x(6,4),m()()(),a(7,"sz-ui-table",5),A("update",function(){return i.get();}),m()),t&2&&(s(3),_("dataSource",i.dataSource),s(4),_("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[me,Fe,he,V],encapsulation:2});let n=o;return n;})();var Ge=[{path:"",component:Ve}];var Ko=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=ae({type:o}),o.ɵinj=re({providers:[I],imports:[Se.forChild(Ge),f,Te,De,V,Ne]});let n=o;return n;})();export{Ko as NotificationsModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/