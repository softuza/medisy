"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[98],{1098:(N,p,n)=>{n.r(p),n.d(p,{ReferenceValueModule:()=>te});var r=n(6814),e=n(6223),s=n(2296),i=n(5986),c=n(7700),o=n(617),T=n(7988),R=n(8525),v=n(8109),A=n(6987),I=n(758),a=n(2595),E=n(2169),_=n(3576),M=n(5041),y=n(7239),z=n(3572),x=n(8645),t=n(5879),$=n(2516),D=n(1175),V=n(7076),Z=n(9598),u=n(8721),S=n(8180),f=n(884),O=n(6187),L=n(7263),F=n(8930),U=n(4622),Y=n(6091);let W=(()=>{class m extends _.Z2{constructor(l,d,g,P){super(d),this.fb=l,this.dialog=d,this.typeI18nPipe=g,this.data=P,this.comparasionOperator=L.v,this.form=l.group({referenceGroupId:[P.referenceGroupId],comparisonOperator:[P.comparisonOperator]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(e.qu),t.Y36(c.so),t.Y36(V.y),t.Y36(c.WI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[t._Bn([O.T,V.y]),t.qOj,t.jDz],decls:6,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption","optionContentTransformer"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(l,d){1&l&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-select",2)(4,"medisy-form-field-reference-group",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&l&&(t.Q6J("header",d.header),t.xp6(2),t.Q6J("formGroup",d.form),t.xp6(1),t.Q6J("emptyOption",!0)("optionContentTransformer",d.typeI18nPipe),t.xp6(1),t.Q6J("emptyOption",!0),t.xp6(1),t.Q6J("actions",d.actions))},dependencies:[r.ez,e.UX,e._Y,e.JJ,e.JL,e.sg,e.u,c.Is,c.xY,i.p9,_.su,U.Y,Y.t,f.P,F.E],encapsulation:2}),m})();var B=n(9157),J=n(2032);class G extends e.NI{constructor(C,l,d){super(C,l),this.defaultOptions=[],d&&(this.defaultOptions=d)}}var Q=n(9004),X=n(8380),j=n(8873);function K(m,C){1&m&&(t.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),t._UZ(3,"input",10),t.qZA()(),t.TgZ(4,"mat-form-field",9)(5,"label"),t._UZ(6,"input",11),t.qZA()()())}function b(m,C){1&m&&(t.TgZ(0,"mat-form-field",9)(1,"label"),t._UZ(2,"input",12),t.qZA()())}let H=(()=>{class m extends _.Ku{constructor(l,d,g,P,h){super(P),this.referenceValueService=l,this.typeI18nPipe=d,this.fb=g,this.dialog=P,this.data=h,this.comparasionOperator=L.v,this.form=g.group({description:[h.referenceValueRule?.description,[e.kI.maxLength(4096)]],comparisonOperator:new G(h.referenceValueRule?.comparisonOperator??L.v.Equal,[e.kI.required],L.i),referenceGroupId:[h.referenceValueRule?.referenceGroupId,[e.kI.required]],value:[h.referenceValueRule?.value,[]],start:[h.referenceValueRule?.start,[]],end:[h.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===L.v.RangeWithBoundaries||this.form.value.comparisonOperator===L.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.referenceValueService.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.referenceValueService.rules.create(this.data.referenceValueId,this.form.value))}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(X.U),t.Y36(V.y),t.Y36(e.qu),t.Y36(c.so),t.Y36(c.WI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[t._Bn([A.C,V.y]),t.qOj,t.jDz],decls:9,vars:6,consts:function(){let C,l,d,g;return C="Description",l="Start",d="End",g="Value",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",C],["formControlName","comparisonOperator",3,"optionContentTransformer"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",l],["autocomplete","off","formControlName","end","matInput","","placeholder",d],["autocomplete","off","formControlName","value","matInput","","placeholder",g]]},template:function(l,d){1&l&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-select",3),t.YNc(5,K,7,0,"div",4),t.YNc(6,b,3,0,"mat-form-field",5),t._UZ(7,"medisy-form-field-reference-group",6),t.qZA()(),t._UZ(8,"sz-ui-dialog-actions",7)),2&l&&(t.Q6J("header",d.header),t.xp6(2),t.Q6J("formGroup",d.form),t.xp6(2),t.Q6J("optionContentTransformer",d.typeI18nPipe),t.xp6(1),t.Q6J("ngIf",d.isRange()),t.xp6(1),t.Q6J("ngIf",!d.isRange()),t.xp6(2),t.Q6J("actions",d.actions))},dependencies:[r.ez,r.O5,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,J.c,J.Nt,B.KE,c.Is,c.xY,B.lN,i.p9,_.su,U.Y,Y.t,Q.g,j.L,f.P,F.E],encapsulation:2}),m})();var w=n(8359),k=n(3144);let q=(()=>{class m{constructor(l,d,g,P){this.dialog=l,this.route=d,this.referenceValueService=g,this.typeI18nPipe=P,this.dataSource=new z.b2(Z.J.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[z.UC.text("referenceGroup","Reference group",h=>h.referenceGroup.name),D.h.comparisonOperator(h=>P.transform(h.comparisonOperator)),z.UC.text("value","Value",h=>h.value?h.value:`${h.start} - ${h.end}`),D.h.createdAt(),D.h.menu([z.od.edit(h=>this.openSaveComponent(h)),z.od.delete(h=>{this.openReferenceValueRuleDeleteComponent(h)})])],this.get()}openSaveComponent(l){this.dialog.open(H,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:l}}).afterClosed().pipe((0,S.q)(1)).subscribe(g=>{this.dataSource.updateOrPushItem(g)})}openFilterComponent(){this.dialog.open(W,{data:this.dataSource.filterModel}).afterClosed().pipe((0,S.q)(1)).subscribe(d=>{this.dataSource.updateFilterModel(d),this.get()})}openReferenceValueRuleDeleteComponent(l){this.dialog.open(_.fN,{data:_.cb.delete(this.referenceValueService.rules.delete(l.referenceValueId,l.id),l)}).afterClosed().pipe((0,S.q)(1)).subscribe(g=>{this.dataSource.delete(g)})}get(){this.referenceValueService.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe((0,u.sU)(this.dataSource.indicator),(0,S.q)(1)).subscribe(l=>{this.dataSource.set(l.items,l.count)})}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(c.uw),t.Y36(v.gz),t.Y36(X.U),t.Y36(V.y))},m.\u0275cmp=t.Xpm({type:m,selectors:[["medisy-laboratory-reference-value-rules"]],features:[t._Bn([V.y])],decls:5,vars:4,consts:function(){let C;return C="Add",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],C,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(l,d){1&l&&(t.TgZ(0,"sz-ui-table-filter",0),t.NdJ("search",function(){return d.get()})("filter",function(){return d.openFilterComponent()}),t.TgZ(1,"button",1),t.NdJ("click",function(){return d.openSaveComponent()}),t.TgZ(2,"span"),t.SDv(3,2),t.qZA()()(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return d.get()}),t.qZA()),2&l&&(t.Q6J("dataSource",d.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",d.dataSource))},dependencies:[s.lW,w.K,k.f],encapsulation:2}),m})();const ee=[{path:"",component:(()=>{class m{constructor(l,d){this.dialog=l,this.route=d,this.alert$=new x.x,this.referenceValue=this.route.snapshot.data.referenceValue}}return m.\u0275fac=function(l){return new(l||m)(t.Y36(c.uw),t.Y36(v.gz))},m.\u0275cmp=t.Xpm({type:m,selectors:[["medisy-laboratory-reference-value"]],features:[t._Bn([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(l,d){1&l&&(t.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),t._uU(3),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"button",3)(7,"mat-icon"),t._uU(8,"arrow_back"),t.qZA()()(),t._UZ(9,"medisy-laboratory-reference-value-rules")),2&l&&(t.xp6(3),t.Oqu(d.referenceValue.testClass.name),t.xp6(2),t.Oqu(d.referenceValue.description))},dependencies:[v.rH,o.Hw,s.RK,$.z,q],encapsulation:2}),m})()}];let te=(()=>{class m{}return m.\u0275fac=function(l){return new(l||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({providers:[A.C],imports:[r.ez,e.u5,v.Bz.forChild(ee),c.Is,i.p9,T.Tx,o.Ps,s.ot,R.LD,I.E3,z.Vn,E.c,a.V,y.h,_.su,M.n]}),m})()},7076:(N,p,n)=>{n.d(p,{y:()=>v});var r=n(3712),e=n(1101),s=n(7263),i=(()=>((i=i||{}).Validated="Validated",i.Returned="Returned",i.Forwarded="Forwarded",i.Destroyed="Destroyed",i.Collected="Collected",i.Accepted="Accepted",i.Created="Created",i))(),c=(()=>((c=c||{}).Created="Created",c.Pending="Pending",c.Started="Started",c.Finished="Finished",c))(),o=n(1646),T=n(9155),R=n(5879);let v=(()=>{class A{transform(a,E=!1){return a in s.v?this.transformComparisonOperator(a,E):a in c?this.transformTestState(a):a in i?this.transformSpecimenState(a):a in r.V?this.transformEmailType(a):a in e.z?this.transformPhoneType(a):a in T.m?this.transformSex(a):a in o.n?this.transformDocumentType(a):""}transformComparisonOperator(a,E){switch(a){case s.v.Equal:return E?"==":"Equal";case s.v.GreaterThan:return E?">":"GreaterThan";case s.v.GreaterThanOrEqual:return E?">=":"GreaterThanOrEqual";case s.v.LessThan:return E?"<":"LessThan";case s.v.LessThanOrEqual:return E?"<=":"LessThanOrEqual";case s.v.RangeWithBoundaries:return E?"<==>":"RangeWithBoundaries";case s.v.RangeWithoutBoundaries:return E?"<>":"RangeWithoutBoundaries";case s.v.Not:return E?"!=":"Not";default:return""}}transformTestState(a){switch(a){case c.Created:return "Created";case c.Started:return "Started";case c.Finished:return "Finished";case c.Pending:return "Pending";default:return""}}transformSpecimenState(a){switch(a){case i.Accepted:return "Accepted";case i.Collected:return "Collected";case i.Destroyed:return "Destroyed";case i.Forwarded:return "Forwarded";case i.Validated:return "Validated";case i.Created:return "Created";default:return""}}transformEmailType(a){switch(a){case r.V.Private:return "Private";case r.V.Public:return "Public";case r.V.Work:return "Work";default:return""}}transformPhoneType(a){switch(a){case e.z.Home:return "Home";case e.z.Mobile:return "Mobile";case e.z.Work:return "Work";default:return""}}transformSex(a){switch(a){case T.m.Female:return "Female";case T.m.Male:return "Male";default:return""}}transformDocumentType(a){switch(a){case o.n.BankCard:return "Bank Card";case o.n.DriverLicense:return "Driver License";case o.n.NationalCard:return "National Card";case o.n.Passport:return "Passport";case o.n.TravelDocument:return "Travel Document";case o.n.Other:return "Other";default:return""}}}return A.\u0275fac=function(a){return new(a||A)},A.\u0275pipe=R.Yjl({name:"typeI18n",type:A,pure:!0,standalone:!0}),A})()},3712:(N,p,n)=>{n.d(p,{V:()=>r});var r=(()=>((r=r||{}).Private="Private",r.Public="Public",r.Work="Work",r))();Object.keys(r).map(s=>r[s])},1101:(N,p,n)=>{n.d(p,{z:()=>r});var r=(()=>((r=r||{}).Home="Home",r.Mobile="Mobile",r.Work="Work",r))();Object.keys(r).map(s=>r[s])},7263:(N,p,n)=>{n.d(p,{i:()=>e,v:()=>r});var r=(()=>((r=r||{}).Equal="Equal",r.GreaterThan="GreaterThan",r.GreaterThanOrEqual="GreaterThanOrEqual",r.LessThan="LessThan",r.LessThanOrEqual="LessThanOrEqual",r.Not="Not",r.RangeWithBoundaries="RangeWithBoundaries",r.RangeWithoutBoundaries="RangeWithoutBoundaries",r))();const e=Object.keys(r).map(s=>r[s])},1646:(N,p,n)=>{n.d(p,{n:()=>r});var r=(()=>((r=r||{}).NationalCard="NationalCard",r.BankCard="BankCard",r.DriverLicense="DriverLicense",r.Passport="Passport",r.TravelDocument="TravelDocument",r.Other="Other",r))();Object.keys(r).map(s=>r[s])},9155:(N,p,n)=>{n.d(p,{m:()=>r});var r=(()=>((r=r||{}).Male="Male",r.Female="Female",r))();Object.keys(r).map(s=>r[s])},2595:(N,p,n)=>{n.d(p,{V:()=>s});var r=n(6128),e=n(5879);let s=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.X]}),i})()},6128:(N,p,n)=>{n.d(p,{X:()=>Z});var r=n(6814),e=n(5879),s=n(5195),i=n(6385),c=n(617),o=n(6007),T=n(2169);let R=(()=>{class u{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(f,O){1&f&&(e.TgZ(0,"span",0),e._uU(1),e.qZA()),2&f&&(e.Q6J("className",O.getClass()),e.uIk("data-icon",O.getIcon()),e.xp6(1),e.Oqu(O.getIcon()))},dependencies:[r.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),u})(),v=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[R]}),u})();var A=n(2430),I=n(8145);function a(u,S){if(1&u&&(e.ynx(0),e._UZ(1,"sz-ui-counter",8),e.BQk()),2&u){const f=e.oxw();e.xp6(1),e.Q6J("value",f.getValue())}}function E(u,S){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const f=e.oxw(2);e.xp6(1),e.hij(" ",f.card.title," ")}}function _(u,S){1&u&&e.Hsn(0,2)}function M(u,S){if(1&u&&(e.ynx(0),e.YNc(1,E,2,1,"div",9),e.YNc(2,_,1,0,"ng-template",null,10,e.W1O),e.BQk()),2&u){const f=e.MAs(3),O=e.oxw();e.xp6(1),e.Q6J("ngIf",O.card.title)("ngIfElse",f)}}function y(u,S){if(1&u&&e._UZ(0,"sz-ui-icon",11),2&u){const f=e.oxw();e.Q6J("icon",f.card.icon)}}function z(u,S){1&u&&e._UZ(0,"mat-divider")}function x(u,S){if(1&u){const f=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const F=e.CHM(f).$implicit,U=e.oxw(2);return e.KtG(U.cardActionClick(F))}),e._uU(1),e.qZA()}if(2&u){const f=S.$implicit;e.xp6(1),e.hij(" ",f.title," ")}}function t(u,S){if(1&u&&(e.TgZ(0,"mat-card-actions"),e.YNc(1,x,2,1,"button",12),e.qZA()),2&u){const f=e.oxw();e.xp6(1),e.Q6J("ngForOf",f.card.actions)}}function $(u,S){1&u&&e._UZ(0,"mat-progress-bar",14)}const D=[[["","content",""]],[["","footer",""]],[["","title",""]]],V=["[content]","[footer]","[title]"];let Z=(()=>{class u{constructor(){this.szCardType=A.k,this.indicator=(0,e.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(f){this.card&&f&&f.clickFn&&f?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[e.jDz],ngContentSelectors:V,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(f,O){1&f&&(e.F$t(D),e.TgZ(0,"mat-card",0)(1,"mat-card-header",1),e.NdJ("click",function(){return O.cardClick()}),e.TgZ(2,"mat-card-subtitle"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-title",2),e.YNc(5,a,2,1,"ng-container",3),e.YNc(6,M,4,2,"ng-container",3),e.qZA(),e._UZ(7,"span",4),e.YNc(8,y,1,1,"sz-ui-icon",5),e.qZA(),e.TgZ(9,"mat-card-content"),e.Hsn(10),e.YNc(11,z,1,0,"mat-divider",6),e.YNc(12,t,2,1,"mat-card-actions",6),e.qZA(),e.TgZ(13,"mat-card-footer"),e.Hsn(14,1),e.YNc(15,$,1,0,"mat-progress-bar",7),e.qZA()()),2&f&&(e.xp6(3),e.Oqu(O.card.subtitle),e.xp6(1),e.Q6J("ngSwitch",O.card.type),e.xp6(1),e.Q6J("ngSwitchCase",O.szCardType.Counter),e.xp6(1),e.Q6J("ngSwitchCase",O.szCardType.Text),e.xp6(2),e.Q6J("ngIf",O.hasIcon()),e.xp6(3),e.Q6J("ngIf",O.hasActions()),e.xp6(1),e.Q6J("ngIf",O.hasActions()),e.xp6(3),e.Q6J("ngIf",O.indicator()))},dependencies:[r.ez,r.sg,r.O5,r.RF,r.n9,s.QW,s.a8,s.hq,s.dn,s.rt,s.dk,s.$j,s.n5,c.Ps,i.t,i.d,o.Cv,o.pW,v,R,T.c,I.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),u})()},2430:(N,p,n)=>{n.d(p,{k:()=>r});var r=(()=>((r=r||{})[r.Counter=0]="Counter",r[r.Text=1]="Text",r))()},8145:(N,p,n)=>{n.d(p,{R:()=>i});var r=n(6814),e=n(5879);const s=["*"];let i=(()=>{class c{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(T){T&&(this.animate(this.oldValue,T),this.oldValue=T)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(T,R){const v=R-T;let I=Math.abs(Math.floor(this.duration/v));I=Math.max(I,50);const E=(new Date).getTime()+this.duration,_=()=>{const M=(new Date).getTime(),y=Math.max((E-M)/this.duration,0),z=Math.round(R-y*v);this.currentValue=z,Math.round(z)===Math.round(R)&&clearInterval(this.timer)};this.timer=setInterval(_,I),_()}}return c.\u0275fac=function(T){return new(T||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[e.jDz],ngContentSelectors:s,decls:3,vars:1,template:function(T,R){1&T&&(e.F$t(),e.TgZ(0,"span"),e._uU(1),e.Hsn(2),e.qZA()),2&T&&(e.xp6(1),e.hij(" ",R.currentValue," "))},dependencies:[r.ez],encapsulation:2}),c})()},2169:(N,p,n)=>{n.d(p,{c:()=>s});var r=n(8145),e=n(5879);let s=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.R]}),i})()},8873:(N,p,n)=>{n.d(p,{L:()=>I});var r=n(6814),e=n(6223),s=n(9157),i=n(2032),c=n(8237),o=n(5879);function T(a,E){if(1&a&&(o.TgZ(0,"mat-label"),o._uU(1),o.qZA()),2&a){const _=o.oxw();o.xp6(1),o.Oqu(_.label)}}function R(a,E){1&a&&(o.TgZ(0,"mat-error"),o.SDv(1,3),o.qZA())}function v(a,E){1&a&&(o.TgZ(0,"mat-error"),o.SDv(1,4),o.qZA())}function A(a,E){1&a&&(o.TgZ(0,"mat-error"),o.SDv(1,5),o.qZA())}let I=(()=>{class a extends c.l{constructor(_){super(_),this.ngControl=_}ngOnInit(){this.control=this.ngControl.control}writeValue(_){this.value=_}}return a.\u0275fac=function(_){return new(_||a)(o.Y36(e.a5,10))},a.\u0275cmp=o.Xpm({type:a,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[o.qOj,o.jDz],decls:7,vars:7,consts:function(){let E,_,M;return E="This field is required",_="This field has insufficient length",M="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],E,_,M]},template:function(_,M){1&_&&(o.TgZ(0,"mat-form-field",0),o.YNc(1,T,2,1,"mat-label",1),o.TgZ(2,"textarea",2),o._uU(3,"  "),o.qZA(),o.YNc(4,R,2,0,"mat-error",1),o.YNc(5,v,2,0,"mat-error",1),o.YNc(6,A,2,0,"mat-error",1),o.qZA()),2&_&&(o.xp6(1),o.Q6J("ngIf",M.label),o.xp6(1),o.Q6J("formControl",M.control)("value",M.value)("placeholder",M.placeholder),o.xp6(2),o.Q6J("ngIf",M.control.hasError("required")),o.xp6(1),o.Q6J("ngIf",M.control.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",M.control.hasError("maxlength")))},dependencies:[r.ez,r.O5,e.UX,e.Fj,e.JJ,e.oH,s.lN,s.KE,s.hX,s.TO,i.c,i.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})()},9004:(N,p,n)=>{n.d(p,{g:()=>i});var r=n(5974),e=n(8873),s=n(5879);let i=(()=>{class c{}return c.\u0275fac=function(T){return new(T||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[r.g,e.L]}),c})()}}]);