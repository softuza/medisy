"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[602],{2602:(ne,u,s)=>{s.r(u),s.d(u,{NotificationsModule:()=>oe});var f=s(6814),d=s(2296),r=s(7700),b=s(617),Z=s(8109),R=s(6762),e=s(5879),z=s(9862);let m=(()=>{class i{constructor(o){this.http=o,this.basePath="softuza-notification",this.notifications=new R._(this.http,`${this.basePath}/v1/notifications`)}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(z.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac})}return i})();var V=s(758),Y=s(5041),T=s(3562),C=s(8262),c=s(7076),O=s(9899),G=s(9598),X=s(8721),N=s(8180),_=s(6223),J=s(8034),p=s(9157),S=s(6494),I=s(5781);let M=(()=>{class i extends I.ms{constructor(o,n){super(o),this.ngControl=o,this.typeI18nPipe=n,this.options=Object.keys(S.x).map(t=>S.x[t]),this.label="Channel Type",this.optionContent=t=>this.typeI18nPipe.transform(t)}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(_.a5,10),e.Y36(c.y))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-form-field-channel-type"]],standalone:!0,features:[e._Bn([c.y]),e.qOj,e.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(n,t){1&n&&e._UZ(0,"sz-ui-form-field-select",0),2&n&&e.Q6J("formControl",t.control)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)},dependencies:[_.UX,_.JJ,_.oH,I.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return i})();var P=s(4622),h=s(6091);let x=(()=>{class i extends O.Z2{constructor(o,n,t){super(n),this.fb=o,this.dialog=n,this.data=t,this.form=o.group({channelType:[t?.channelType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(_.qu),e.Y36(r.so),e.Y36(r.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["softuza-notification-notifications-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","channelType"],[3,"actions"]],template:function(n,t){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-channel-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&n&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(2),e.Q6J("actions",t.actions))},dependencies:[_.UX,_._Y,_.JJ,_.JL,_.sg,_.u,O.su,P.Y,h.t,I.g2,p.lN,J.FA,r.Is,r.xY,M],encapsulation:2})}return i})();var A=s(4104),Q=s(7394),j=s(5974),B=s(8873);function W(i,g){if(1&i&&(e.TgZ(0,"mat-tab",9),e._UZ(1,"sz-ui-form-field-input",10)(2,"sz-ui-form-field-input",11)(3,"sz-ui-form-field-input",12),e.qZA()),2&i){const o=e.oxw();e.Q6J("formGroup",o.formEmail)}}function K(i,g){if(1&i&&(e.TgZ(0,"mat-tab",13),e._UZ(1,"sz-ui-form-field-input",14)(2,"sz-ui-form-field-textarea",15),e.qZA()),2&i){const o=e.oxw();e.Q6J("formGroup",o.formSms)}}function H(i,g){if(1&i&&(e.TgZ(0,"mat-tab",16),e._UZ(1,"sz-ui-form-field-input",17)(2,"sz-ui-form-field-textarea",18),e.qZA()),2&i){const o=e.oxw();e.Q6J("formGroup",o.formPush)}}let q=(()=>{class i extends O.Ku{constructor(o,n,t,a){super(t),this.sntiService=o,this.fb=n,this.dialog=t,this.data=a,this.channelTypes=S.x,this.subscriptions=new Q.w0,this.formEmail=n.group({subject:[a?.email?.subject,[_.kI.required]],replyToEmail:[a?.email?.replyTo.email,[_.kI.email]],replyToName:[a?.email?.replyTo.name,[]]}),this.formSms=n.group({originator:[a?.sms?.originator,[_.kI.required]],body:[a?.sms?.body,[_.kI.required]]}),this.formPush=n.group({title:[a?.push?.title,[_.kI.required]],body:[a?.push?.body,[_.kI.required]]}),this.form=n.group({name:[a?.name,[_.kI.required]],description:[a?.description,[_.kI.maxLength(4096)]],channelTypes:[a?.channelTypes??[],[_.kI.required]]}),this.subscribeChanges()}ngOnDestroy(){this.subscriptions.unsubscribe()}subscribeChanges(){this.subscriptions.add(this.form.controls.channelTypes.valueChanges.subscribe(o=>{this.form.contains("email")?o?.includes(S.x.Email)||this.form.removeControl("email"):o?.includes(S.x.Email)&&this.form.addControl("email",this.formEmail),this.form.contains("sms")?o?.includes(S.x.Sms)||this.form.removeControl("sms"):o?.includes(S.x.Sms)&&this.form.addControl("sms",this.formSms),this.form.contains("push")?o?.includes(S.x.Push)||this.form.removeControl("push"):o?.includes(S.x.Push)&&this.form.addControl("push",this.formPush)}))}hasChannelType(o){return this.form.value.channelTypes?.includes(o)}submit(){this.IsValid()&&this.save(this.data?this.sntiService.notifications.update(this.data.id,this.form.value):this.sntiService.notifications.create(this.form.value))}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(m),e.Y36(_.qu),e.Y36(r.so),e.Y36(r.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:11,vars:7,consts:function(){let o,n,t,a,E,F,y,$,U,D,v,L;return o="Name",n="Description",t="Email",a="SMS",E="Push",F="Subject",y="Email",$="Name",U="Originator",D="Body",v="Title",L="Body",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",n],["formControlName","channelTypes",3,"multiple"],["label",t,3,"formGroup",4,"ngIf"],["label",a,3,"formGroup",4,"ngIf"],["label",E,3,"formGroup",4,"ngIf"],[3,"actions"],["label",t,3,"formGroup"],["formControlName","subject","label",F],["formControlName","replyToEmail","label",y],["formControlName","replyToName","label",$],["label",a,3,"formGroup"],["formControlName","originator","label",U],["formControlName","body","label",D],["label",E,3,"formGroup"],["formControlName","title","label",v],["formControlName","body","label",L]]},template:function(n,t){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"medisy-form-field-channel-type",4),e.TgZ(6,"mat-tab-group"),e.YNc(7,W,4,1,"mat-tab",5),e.YNc(8,K,3,1,"mat-tab",6),e.YNc(9,H,3,1,"mat-tab",7),e.qZA()()(),e._UZ(10,"sz-ui-dialog-actions",8)),2&n&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("multiple",!0),e.xp6(2),e.Q6J("ngIf",t.hasChannelType(t.channelTypes.Email)),e.xp6(1),e.Q6J("ngIf",t.hasChannelType(t.channelTypes.Sms)),e.xp6(1),e.Q6J("ngIf",t.hasChannelType(t.channelTypes.Push)),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[f.ez,f.O5,_.UX,_._Y,_.JJ,_.JL,_.sg,_.u,r.Is,r.xY,p.lN,A.Nh,A.uX,A.SP,O.su,P.Y,h.t,I.g2,j.g,B.L,M],encapsulation:2})}return i})();var k=s(8359),w=s(3144),ee=s(2516);const te=[{path:"",component:(()=>{class i{constructor(o,n){this.dialog=o,this.sntiService=n,this.dataSource=new T.b2(G.J.paged()),this.dataSource.addRows([T.zP.borderless([C.h.nameText(),C.h.createdAt(),C.h.menu([T.od.edit(t=>this.openSaveComponent(t)),T.od.delete(t=>this.openNotificationDeleteComponent(t))])]),T.zP.headerless([T.UC.text("description")])]),this.get()}openFilterComponent(){this.dialog.open(x,{data:this.dataSource.filterModel}).afterClosed().pipe((0,N.q)(1)).subscribe(n=>{this.dataSource.updateFilterModel(n),this.get()})}openSaveComponent(o){this.dialog.open(q,{data:o}).afterClosed().pipe((0,N.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openNotificationDeleteComponent(o){this.dialog.open(O.fN,{data:O.cb.delete(this.sntiService.notifications.delete(o.id),o)}).afterClosed().pipe((0,N.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.sntiService.notifications.get(this.dataSource.filterModel).pipe((0,X.sU)(this.dataSource.indicator),(0,N.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(r.uw),e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["softuza-notification-notifications"]],features:[e._Bn([c.y])],decls:8,vars:4,consts:function(){let o,n;return o="Notifications",n="Add",[["start","",1,"sz-h5"],o,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,t){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return t.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[d.lW,k.K,w.f,ee.z],encapsulation:2})}return i})()}];let oe=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({providers:[m],imports:[f.ez,Z.Bz.forChild(te),r.Is,d.ot,T.Vn,V.E3,Y.n,b.Ps]})}return i})()}}]);