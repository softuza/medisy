"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[592],{8262:(y,p,e)=>{e.d(p,{h:()=>_});var o=e(3572),t=e(7311);const r={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class _{static menu(n){return o.UC.action("menu",n)}static code(){return o.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return o.UC.date("createdAt",t.O.createdDate)}static updatedAt(){return o.UC.date("updatedAt",t.O.updatedDate)}static id(){return o.UC.text("id",t.O.id)}static nameHyperlink(n,i,d){return o.UC.hyperlink("name",t.O.name,n,i,d)}static nameText(n){return o.UC.text("name",t.O.name,n)}static phoneType(n){return o.UC.text("phoneType",r.phoneType,n)}static emailType(n){return o.UC.text("emailType",r.emailType,n)}static documentType(n){return o.UC.text("documentType",r.documentType,n)}static comparisonOperator(n){return o.UC.text("comparisonOperator",r.comparisonType,n)}}},7311:(y,p,e)=>{e.d(p,{O:()=>o});const o={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}},7106:(y,p,e)=>{e.d(p,{w:()=>u});var o=e(6814),t=e(6223),r=e(6883),_=e(5781),s=e(9598),n=e(8721),i=e(8180),d=e(5879);let u=(()=>{class f extends _.ms{constructor(h,l){super(h),this.ngControl=h,this.mlatService=l,this.options=[],this.label="\u0627\u0644\u0645\u062E\u0628\u0631",this.optionContent=c=>c.name,this.optionValue=c=>this.szOptionValueFn?this.szOptionValueFn(c):c.id,this.mlatService.laboratories.getItems(s.J.unpagedSorted("name")).pipe((0,n.sU)(this.indicator),(0,i.q)(1)).subscribe(c=>{this.options=c})}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(l){return new(l||f)(d.Y36(t.a5,10),d.Y36(r.t))};static#n=this.\u0275cmp=d.Xpm({type:f,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[d._Bn([r.t]),d.qOj,d.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(l,c){1&l&&d._UZ(0,"sz-ui-form-field-select",0),2&l&&d.Q6J("formControl",c.control)("indicator",c.indicator)("options",c.options)("label",c.label)("placeholder",c.placeholder)("emptyOption",c.emptyOption)("multiple",c.multiple)("szOptionContentFn",c.optionContent)("szOptionValueFn",c.optionValue)},dependencies:[o.ez,t.UX,t.JJ,t.oH,_.E3],encapsulation:2})}return f})()},738:(y,p,e)=>{e.d(p,{U:()=>d});var o=e(6814),t=e(6223),r=e(6883),_=e(5781),s=e(8721),n=e(8180),i=e(5879);let d=(()=>{class u extends _.ms{constructor(a,h){super(a),this.ngControl=a,this.mlabService=h,this.options=[],this.label="\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.includeTestGroupIds=[],this.excludeTestGroupIds=[],this.optionContent=l=>l.name,this.optionValue=l=>l.id}ngOnInit(){this.control=this.ngControl.control,this.mlabService.testClasses.getItems({pageIndex:1,pageSize:20,sortBy:"name",excludeLaboratoryIds:this.excludeLaboratoryIds,includeLaboratoryIds:this.includeLaboratoryIds,excludeTestGroupIds:this.excludeTestGroupIds,includeTestGroupIds:this.includeTestGroupIds}).pipe((0,s.sU)(this.indicator),(0,n.q)(1)).subscribe(a=>{this.options=a})}static#t=this.\u0275fac=function(h){return new(h||u)(i.Y36(t.a5,10),i.Y36(r.t))};static#n=this.\u0275cmp=i.Xpm({type:u,selectors:[["medisy-form-field-test-class"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds",includeTestGroupIds:"includeTestGroupIds",excludeTestGroupIds:"excludeTestGroupIds"},standalone:!0,features:[i._Bn([r.t]),i.qOj,i.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(h,l){1&h&&i._UZ(0,"sz-ui-form-field-select",0),2&h&&i.Q6J("formControl",l.control)("indicator",l.indicator)("options",l.options)("label",l.label)("placeholder",l.placeholder)("emptyOption",l.emptyOption)("multiple",l.multiple)("szOptionContentFn",l.optionContent)("szOptionValueFn",l.optionValue)},dependencies:[o.ez,t.UX,t.JJ,t.oH,_.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return u})()},7195:(y,p,e)=>{e.d(p,{Q:()=>d});var o=e(6814),t=e(6223),r=e(6883),_=e(5781),s=e(8721),n=e(8180),i=e(5879);let d=(()=>{class u extends _.ms{constructor(a,h){super(a),this.ngControl=a,this.mlabService=h,this.options=[],this.label="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.optionContent=l=>l.name,this.optionValue=l=>this.szOptionValueFn?this.szOptionValueFn(l):l.id}ngOnInit(){this.control=this.ngControl.control,this.mlabService.testGroups.getItems({pageIndex:1,pageSize:-1,sortBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe((0,s.sU)(this.indicator),(0,n.q)(1)).subscribe(a=>{this.options=a})}static#t=this.\u0275fac=function(h){return new(h||u)(i.Y36(t.a5,10),i.Y36(r.t))};static#n=this.\u0275cmp=i.Xpm({type:u,selectors:[["medisy-form-field-test-group-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[i._Bn([r.t]),i.qOj,i.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(h,l){1&h&&i._UZ(0,"sz-ui-form-field-select",0),2&h&&i.Q6J("formControl",l.control)("indicator",l.indicator)("options",l.options)("label",l.label)("placeholder",l.placeholder)("emptyOption",l.emptyOption)("multiple",l.multiple)("szOptionContentFn",l.optionContent)("szOptionValueFn",l.optionValue)},dependencies:[o.ez,t.UX,t.JJ,t.oH,_.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return u})()},5931:(y,p,e)=>{e.d(p,{N:()=>n});var o=e(6223),t=e(7076),r=e(3712),_=e(5781),s=e(5879);let n=(()=>{class i extends _.ms{constructor(u,f){super(u),this.ngControl=u,this.commonI18nPipe=f,this.options=Object.keys(r.V).map(a=>r.V[a]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",this.optionContent=a=>this.commonI18nPipe.transform(a)}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(f){return new(f||i)(s.Y36(o.a5,10),s.Y36(t.y))};static#n=this.\u0275cmp=s.Xpm({type:i,selectors:[["medisy-form-field-email-type"]],standalone:!0,features:[s._Bn([t.y]),s.qOj,s.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(f,a){1&f&&s._UZ(0,"sz-ui-form-field-select",0),2&f&&s.Q6J("formControl",a.control)("options",a.options)("label",a.label)("placeholder",a.placeholder)("emptyOption",a.emptyOption)("multiple",a.multiple)("szOptionContentFn",a.optionContent)},dependencies:[o.UX,o.JJ,o.oH,_.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return i})()},7680:(y,p,e)=>{e.d(p,{I:()=>n});var o=e(6223),t=e(7076),r=e(1101),_=e(5781),s=e(5879);let n=(()=>{class i extends _.ms{constructor(u,f){super(u),this.ngControl=u,this.commonI18nPipe=f,this.options=Object.keys(r.z).map(a=>r.z[a]),this.label="\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",this.optionContent=a=>this.commonI18nPipe.transform(a)}ngOnInit(){this.control=this.ngControl.control}static#t=this.\u0275fac=function(f){return new(f||i)(s.Y36(o.a5,10),s.Y36(t.y))};static#n=this.\u0275cmp=s.Xpm({type:i,selectors:[["medisy-form-field-phone-type"]],standalone:!0,features:[s._Bn([t.y]),s.qOj,s.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(f,a){1&f&&s._UZ(0,"sz-ui-form-field-select",0),2&f&&s.Q6J("formControl",a.control)("options",a.options)("label",a.label)("placeholder",a.placeholder)("emptyOption",a.emptyOption)("multiple",a.multiple)("szOptionContentFn",a.optionContent)},dependencies:[o.UX,o.JJ,o.oH,_.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return i})()},9060:(y,p,e)=>{e.d(p,{Y:()=>t});var o=e(5879);let t=(()=>{class r{transform(s,n=!1){if(!s||"string"==typeof s)return"";if(!s.names||0===s.names.length)return`${s.id}`;const i=s.names[0].firstName,d=s.names[0].lastName,u=d?`${i} ${d}`:`${i}`;return n&&s.birthDate?""+(+new Date-+s.birthDate):u}static#t=this.\u0275fac=function(n){return new(n||r)};static#n=this.\u0275pipe=o.Yjl({name:"personName",type:r,pure:!0,standalone:!0})}return r})()},6128:(y,p,e)=>{e.d(p,{X:()=>F});var o=e(6814),t=e(5879),r=e(5195),_=e(6385),s=e(617),n=e(6007),i=e(2169);let d=(()=>{class m{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}static#t=this.\u0275fac=function(g){return new(g||m)};static#n=this.\u0275cmp=t.Xpm({type:m,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(g,E){1&g&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&g&&(t.Q6J("className",E.getClass()),t.uIk("data-icon",E.getIcon()),t.xp6(1),t.Oqu(E.getIcon()))},dependencies:[o.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]})}return m})(),u=(()=>{class m{static#t=this.\u0275fac=function(g){return new(g||m)};static#n=this.\u0275mod=t.oAB({type:m});static#e=this.\u0275inj=t.cJS({imports:[d]})}return m})();var f=e(2430),a=e(8145);function h(m,I){if(1&m&&(t.ynx(0),t._UZ(1,"sz-ui-counter",8),t.BQk()),2&m){const C=t.oxw();t.xp6(1),t.Q6J("value",C.getValue())}}function l(m,I){if(1&m&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&m){const C=t.oxw(2);t.xp6(1),t.hij(" ",C.card.title," ")}}function c(m,I){1&m&&t.Hsn(0,2)}function M(m,I){if(1&m&&(t.ynx(0),t.YNc(1,l,2,1,"div",9),t.YNc(2,c,1,0,"ng-template",null,10,t.W1O),t.BQk()),2&m){const C=t.MAs(3),g=t.oxw();t.xp6(1),t.Q6J("ngIf",g.card.title)("ngIfElse",C)}}function O(m,I){if(1&m&&t._UZ(0,"sz-ui-icon",11),2&m){const C=t.oxw();t.Q6J("icon",C.card.icon)}}function T(m,I){1&m&&t._UZ(0,"mat-divider")}function z(m,I){if(1&m){const C=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const D=t.CHM(C).$implicit,L=t.oxw(2);return t.KtG(L.cardActionClick(D))}),t._uU(1),t.qZA()}if(2&m){const C=I.$implicit;t.xp6(1),t.hij(" ",C.title," ")}}function P(m,I){if(1&m&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,z,2,1,"button",12),t.qZA()),2&m){const C=t.oxw();t.xp6(1),t.Q6J("ngForOf",C.card.actions)}}function v(m,I){1&m&&t._UZ(0,"mat-progress-bar",14)}const U=[[["","content",""]],[["","footer",""]],[["","title",""]]],A=["[content]","[footer]","[title]"];let F=(()=>{class m{constructor(){this.szCardType=f.k,this.indicator=(0,t.tdS)(!1)}getValue(){if(this.card.title&&!isNaN(Number(this.card.title)))return Number(this.card.title)}cardClick(){this.card&&this.card.clickFn&&this.card.clickFn(this.card)}cardActionClick(C){this.card&&C&&C.clickFn&&C?.clickFn()}hasIcon(){return void 0!==this.card.icon}hasActions(){return null!=this.card.actions&&this.card.actions.length>0}static#t=this.\u0275fac=function(g){return new(g||m)};static#n=this.\u0275cmp=t.Xpm({type:m,selectors:[["sz-ui-card"]],inputs:{card:"card",indicator:"indicator"},standalone:!0,features:[t.jDz],ngContentSelectors:A,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(g,E){1&g&&(t.F$t(U),t.TgZ(0,"mat-card",0)(1,"mat-card-header",1),t.NdJ("click",function(){return E.cardClick()}),t.TgZ(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title",2),t.YNc(5,h,2,1,"ng-container",3),t.YNc(6,M,4,2,"ng-container",3),t.qZA(),t._UZ(7,"span",4),t.YNc(8,O,1,1,"sz-ui-icon",5),t.qZA(),t.TgZ(9,"mat-card-content"),t.Hsn(10),t.YNc(11,T,1,0,"mat-divider",6),t.YNc(12,P,2,1,"mat-card-actions",6),t.qZA(),t.TgZ(13,"mat-card-footer"),t.Hsn(14,1),t.YNc(15,v,1,0,"mat-progress-bar",7),t.qZA()()),2&g&&(t.xp6(3),t.Oqu(E.card.subtitle),t.xp6(1),t.Q6J("ngSwitch",E.card.type),t.xp6(1),t.Q6J("ngSwitchCase",E.szCardType.Counter),t.xp6(1),t.Q6J("ngSwitchCase",E.szCardType.Text),t.xp6(2),t.Q6J("ngIf",E.hasIcon()),t.xp6(3),t.Q6J("ngIf",E.hasActions()),t.xp6(1),t.Q6J("ngIf",E.hasActions()),t.xp6(3),t.Q6J("ngIf",E.indicator()))},dependencies:[o.ez,o.sg,o.O5,o.RF,o.n9,r.QW,r.a8,r.hq,r.dn,r.rt,r.dk,r.$j,r.n5,s.Ps,_.t,_.d,n.Cv,n.pW,u,d,i.c,a.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]})}return m})()},8308:(y,p,e)=>{e.d(p,{Pf:()=>_,VH:()=>r,kD:()=>s.k});var o=e(6128),t=e(5879);let r=(()=>{class n{static#t=this.\u0275fac=function(u){return new(u||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[o.X]})}return n})();class _{static action(i,d){return{title:i,clickFn:d}}}var s=e(2430)},2430:(y,p,e)=>{e.d(p,{k:()=>o});var o=function(t){return t[t.Counter=0]="Counter",t[t.Text=1]="Text",t}(o||{})},8145:(y,p,e)=>{e.d(p,{R:()=>_});var o=e(6814),t=e(5879);const r=["*"];let _=(()=>{class s{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(i){i&&(this.animate(this.oldValue,i),this.oldValue=i)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(i,d){const u=d-i;let a=Math.abs(Math.floor(this.duration/u));a=Math.max(a,50);const l=(new Date).getTime()+this.duration,c=()=>{const M=(new Date).getTime(),O=Math.max((l-M)/this.duration,0),T=Math.round(d-O*u);this.currentValue=T,Math.round(T)===Math.round(d)&&clearInterval(this.timer)};this.timer=setInterval(c,a),c()}static#t=this.\u0275fac=function(d){return new(d||s)};static#n=this.\u0275cmp=t.Xpm({type:s,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[t.jDz],ngContentSelectors:r,decls:3,vars:1,template:function(d,u){1&d&&(t.F$t(),t.TgZ(0,"span"),t._uU(1),t.Hsn(2),t.qZA()),2&d&&(t.xp6(1),t.hij(" ",u.currentValue," "))},dependencies:[o.ez],encapsulation:2})}return s})()},2169:(y,p,e)=>{e.d(p,{c:()=>r});var o=e(8145),t=e(5879);let r=(()=>{class _{static#t=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275mod=t.oAB({type:_});static#e=this.\u0275inj=t.cJS({imports:[o.R]})}return _})()},5807:(y,p,e)=>{e.d(p,{i:()=>l});var o=e(6814),t=e(6385),r=e(617),_=e(7988),s=e(512),n=e(5879);function i(c,M){if(1&c&&(n.TgZ(0,"mat-icon"),n._uU(1),n.qZA()),2&c){const O=n.oxw();n.xp6(1),n.Oqu(O.menu.icon)}}function d(c,M){if(1&c&&(n.TgZ(0,"mat-icon"),n._uU(1),n.qZA()),2&c){const O=n.oxw(2).$implicit;n.xp6(1),n.Oqu(O.icon)}}function u(c,M){if(1&c&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&c){const O=n.oxw(2).$implicit;n.xp6(1),n.Oqu(O.title)}}function f(c,M){if(1&c){const O=n.EpF();n.TgZ(0,"button",7),n.NdJ("click",function(){n.CHM(O);const z=n.oxw().$implicit,P=n.oxw();return n.KtG(P.click(z))}),n.YNc(1,d,2,1,"mat-icon",1),n.YNc(2,u,2,1,"span",1),n.qZA()}if(2&c){const O=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",O.icon),n.xp6(1),n.Q6J("ngIf",O.title)}}function a(c,M){1&c&&n._UZ(0,"mat-divider")}function h(c,M){if(1&c&&(n.TgZ(0,"div",4),n.YNc(1,f,3,2,"button",5),n.YNc(2,a,1,0,"mat-divider",6),n.qZA()),2&c){const O=M.$implicit,T=n.oxw();n.Q6J("ngSwitch",O.type),n.xp6(1),n.Q6J("ngSwitchCase",T.menuItemType.Item),n.xp6(1),n.Q6J("ngSwitchCase",T.menuItemType.Divider)}}let l=(()=>{class c{constructor(){this.menuItemType=s.u}click(O){O.clickFn&&O.clickFn()}static#t=this.\u0275fac=function(T){return new(T||c)};static#n=this.\u0275cmp=n.Xpm({type:c,selectors:[["sz-ui-menu"]],inputs:{menu:"menu"},standalone:!0,features:[n.jDz],decls:5,vars:3,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],[4,"ngIf"],["itemMenu","matMenu"],[3,"ngSwitch",4,"ngFor","ngForOf"],[3,"ngSwitch"],["mat-menu-item","",3,"click",4,"ngSwitchCase"],[4,"ngSwitchCase"],["mat-menu-item","",3,"click"]],template:function(T,z){if(1&T&&(n.TgZ(0,"button",0),n.YNc(1,i,2,1,"mat-icon",1),n.qZA(),n.TgZ(2,"mat-menu",null,2),n.YNc(4,h,3,3,"div",3),n.qZA()),2&T){const P=n.MAs(3);n.Q6J("matMenuTriggerFor",P),n.xp6(1),n.Q6J("ngIf",z.menu.icon),n.xp6(3),n.Q6J("ngForOf",z.menu.items)}},dependencies:[o.ez,o.sg,o.O5,o.RF,o.n9,_.Tx,_.VK,_.OP,_.p6,r.Ps,r.Hw,t.t,t.d],encapsulation:2})}return c})()},157:(y,p,e)=>{e.d(p,{iz:()=>o.i,NT:()=>r,Bw:()=>_});var o=e(5807),t=e(512);class r{static edit(n){return{type:t.u.Item,title:"\u062A\u0639\u062F\u064A\u0644",icon:"edit",clickFn:n}}static print(n){return{type:t.u.Item,title:"\u0637\u0628\u0627\u0639\u0629",icon:"print",clickFn:n}}static custom(n,i,d){return{type:t.u.Item,title:n,icon:i,clickFn:d}}static divider(){return{type:t.u.Divider}}}class _{static more(n){return{icon:"more_vert",items:n}}}},512:(y,p,e)=>{e.d(p,{u:()=>o});var o=function(t){return t[t.Item=0]="Item",t[t.Divider=1]="Divider",t}(o||{})}}]);