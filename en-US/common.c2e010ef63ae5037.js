"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[592],{2191:(T,_,t)=>{t.d(_,{h:()=>e});var n=t(3572);class e{static menu(r){return n.UC.action("menu",r)}static code(){return n.UC.text("code","Code")}static createdAt(){return n.UC.date("createdAt","Created Date")}static updatedAt(){return n.UC.date("updatedAt","Updated Date")}static id(){return n.UC.text("id","Id")}static nameHyperlink(r,p,i){return n.UC.hyperlink("name","Name",r,p,i)}static nameText(r){return n.UC.text("name","Name",r)}static phoneType(r){return n.UC.text("phoneType","Phone Type",r)}static emailType(r){return n.UC.text("emailType","Email Type",r)}static documentType(r){return n.UC.text("documentType","Document Type",r)}static comparisonOperator(r){return n.UC.text("comparisonOperator","Comparison Operator",r)}}},2406:(T,_,t)=>{t.d(_,{N:()=>a});var n=t(6223),e=t(3712),o=t(5879);let r=(()=>{class s{transform(c){switch(c){case e.V.Private:return "Private";case e.V.Public:return "Public";case e.V.Work:return "Work";default:return""}}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275pipe=o.Yjl({name:"emailTypeI18n",type:s,pure:!0,standalone:!0}),s})();var p=t(6893),i=t(9004),C=t(8930);let a=(()=>{class s extends p.m{constructor(c,m){super(c),this.ngControl=c,this.emailTypeI18nPipe=m,this.items=Object.keys(e.V).map(h=>e.V[h]),this.label="Email Type",this.contentFormat=h=>this.emailTypeI18nPipe.transform(h)}ngOnInit(){this.control=this.ngControl.control}}return s.\u0275fac=function(c){return new(c||s)(o.Y36(n.a5,10),o.Y36(r))},s.\u0275cmp=o.Xpm({type:s,selectors:[["medisy-form-field-email-type"]],standalone:!0,features:[o._Bn([r]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(c,m){1&c&&o._UZ(0,"sz-ui-form-field-select",0),2&c&&o.Q6J("formControl",m.control)("items",m.items)("label",m.label)("placeholder",m.placeholder)("emptyOption",m.emptyOption)("multiple",m.multiple)("contentFn",m.contentFormat)},dependencies:[n.UX,n.JJ,n.oH,i.g,C.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),s})()},4889:(T,_,t)=>{t.d(_,{w:()=>y});var n=t(6814),e=t(6223),o=t(8652),r=t(6893),p=t(9004),i=t(8721),C=t(7398),a=t(5879),s=t(8930);let y=(()=>{class c extends r.m{constructor(h,l){super(h),this.ngControl=h,this.laboratoryService=l,this.label="Laboratory",this.contentFormat=d=>d.name,this.valueFormat=d=>d.id,this.items$=this.laboratoryService.getLaboratories().pipe((0,i.sU)(this.indicator),(0,C.U)(d=>d.items))}ngOnInit(){this.control=this.ngControl.control}}return c.\u0275fac=function(h){return new(h||c)(a.Y36(e.a5,10),a.Y36(o.v))},c.\u0275cmp=a.Xpm({type:c,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[a._Bn([o.v]),a.qOj,a.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(h,l){1&h&&(a._UZ(0,"sz-ui-form-field-select",0),a.ALo(1,"async")),2&h&&a.Q6J("formControl",l.control)("indicator",l.indicator)("items",a.lcZ(1,9,l.items$))("label",l.label)("placeholder",l.placeholder)("emptyOption",l.emptyOption)("multiple",l.multiple)("contentFn",l.contentFormat)("valueFn",l.valueFormat)},dependencies:[n.ez,n.Ov,e.UX,e.JJ,e.oH,p.g,s.E],encapsulation:2}),c})()},408:(T,_,t)=>{t.d(_,{I:()=>a});var n=t(6223),e=t(1101),o=t(5879);let r=(()=>{class s{transform(c){switch(c){case e.z.Home:return "Home";case e.z.Mobile:return "Mobile";case e.z.Work:return "Work";default:return""}}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275pipe=o.Yjl({name:"phoneTypeI18n",type:s,pure:!0,standalone:!0}),s})();var p=t(6893),i=t(9004),C=t(8930);let a=(()=>{class s extends p.m{constructor(c,m){super(c),this.ngControl=c,this.phoneTypeI18nPipe=m,this.items=Object.keys(e.z).map(h=>e.z[h]),this.label="Phone Type",this.contentFormat=h=>this.phoneTypeI18nPipe.transform(h)}ngOnInit(){this.control=this.ngControl.control}}return s.\u0275fac=function(c){return new(c||s)(o.Y36(n.a5,10),o.Y36(r))},s.\u0275cmp=o.Xpm({type:s,selectors:[["medisy-form-field-phone-type"]],standalone:!0,features:[o._Bn([r]),o.qOj,o.jDz],decls:1,vars:7,consts:[[3,"formControl","items","label","placeholder","emptyOption","multiple","contentFn"]],template:function(c,m){1&c&&o._UZ(0,"sz-ui-form-field-select",0),2&c&&o.Q6J("formControl",m.control)("items",m.items)("label",m.label)("placeholder",m.placeholder)("emptyOption",m.emptyOption)("multiple",m.multiple)("contentFn",m.contentFormat)},dependencies:[n.UX,n.JJ,n.oH,i.g,C.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),s})()},2557:(T,_,t)=>{t.d(_,{P:()=>c});var n=t(6814),e=t(6223),o=t(6187),r=t(6893),p=t(9004),i=t(8721),C=t(8180),a=t(7398),s=t(5879),y=t(8930);let c=(()=>{class m extends r.m{set person(l){this._person=l,this.selectPersonReferenceGroup()}constructor(l,d){super(l),this.ngControl=l,this.referenceGroupService=d,this.referenceGroups=[],this.label="Reference Group",this.contentFormat=O=>O.name,this.valueFormat=O=>this.valueFn?this.valueFn(O):O.id,this.referenceGroupService.getReferenceGroups().pipe((0,C.q)(1),(0,a.U)(O=>O.items)).pipe((0,i.sU)(this.indicator)).subscribe(O=>{this.referenceGroups=O,this.person&&this.selectPersonReferenceGroup()})}ngOnInit(){this.control=this.ngControl.control}selectPersonReferenceGroup(){if(!this._person||0==this.referenceGroups.length)return;const l=this._person.sex;let d=null;this._person.birthDate&&(d=(Date.now()-new Date(this._person.birthDate).getTime())/36e5);for(let O=0;O<this.referenceGroups.length;++O){const P=this.referenceGroups[O];if(!l||!P.sex||P.sex===l){if(d){const M=P.startAge;if(M&&d<M)continue;const g=P.endAge;if(g&&d>g)continue}this.control.setValue(P.id);break}}}}return m.\u0275fac=function(l){return new(l||m)(s.Y36(e.a5,10),s.Y36(o.T))},m.\u0275cmp=s.Xpm({type:m,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[s._Bn([o.T]),s.qOj,s.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(l,d){1&l&&s._UZ(0,"sz-ui-form-field-select",0),2&l&&s.Q6J("formControl",d.control)("indicator",d.indicator)("items",d.referenceGroups)("label",d.label)("placeholder",d.placeholder)("emptyOption",d.emptyOption)("multiple",d.multiple)("contentFn",d.contentFormat)("valueFn",d.valueFormat)},dependencies:[n.ez,e.UX,e.JJ,e.oH,p.g,y.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),m})()},1175:(T,_,t)=>{t.d(_,{U:()=>y});var n=t(6814),e=t(6223),o=t(3590),r=t(6893),p=t(9004),i=t(8721),C=t(7398),a=t(5879),s=t(8930);let y=(()=>{class c extends r.m{constructor(h,l){super(h),this.ngControl=h,this.testClassService=l,this.label="Test Class",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.includeTestGroupIds=[],this.excludeTestGroupIds=[],this.contentFormat=d=>d.name,this.valueFormat=d=>d.id}ngOnInit(){this.control=this.ngControl.control,this.items$=this.testClassService.getTestClasses({pageIndex:1,pageSize:20,excludeLaboratoryIds:this.excludeLaboratoryIds,includeLaboratoryIds:this.includeLaboratoryIds,excludeTestGroupIds:this.excludeTestGroupIds,includeTestGroupIds:this.includeTestGroupIds}).pipe((0,i.sU)(this.indicator),(0,C.U)(h=>h.items))}}return c.\u0275fac=function(h){return new(h||c)(a.Y36(e.a5,10),a.Y36(o.L))},c.\u0275cmp=a.Xpm({type:c,selectors:[["medisy-form-field-test-class"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds",includeTestGroupIds:"includeTestGroupIds",excludeTestGroupIds:"excludeTestGroupIds"},standalone:!0,features:[a._Bn([o.L]),a.qOj,a.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(h,l){1&h&&(a._UZ(0,"sz-ui-form-field-select",0),a.ALo(1,"async")),2&h&&a.Q6J("formControl",l.control)("indicator",l.indicator)("items",a.lcZ(1,9,l.items$))("label",l.label)("placeholder",l.placeholder)("emptyOption",l.emptyOption)("multiple",l.multiple)("contentFn",l.contentFormat)("valueFn",l.valueFormat)},dependencies:[n.ez,n.Ov,e.UX,e.JJ,e.oH,p.g,s.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),c})()},5467:(T,_,t)=>{t.d(_,{Q:()=>c});var n=t(6814),e=t(6223),o=t(6987),r=t(6893),p=t(9004),i=t(8721),C=t(8180),a=t(7398),s=t(5879),y=t(8930);let c=(()=>{class m extends r.m{constructor(l,d){super(l),this.ngControl=l,this.testGroupService=d,this.label="Test Group",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.contentFormat=O=>this.contentFn?this.contentFn(O):O.name,this.valueFormat=O=>this.valueFn?this.valueFn(O):O.id}ngOnInit(){this.control=this.ngControl.control,this.items$=this.testGroupService.getTestGroups({pageIndex:1,pageSize:50,sortBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe((0,C.q)(1),(0,a.U)(l=>l.items)).pipe((0,i.sU)(this.indicator))}}return m.\u0275fac=function(l){return new(l||m)(s.Y36(e.a5,10),s.Y36(o.C))},m.\u0275cmp=s.Xpm({type:m,selectors:[["medisy-form-field-test-group-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[s._Bn([o.C]),s.qOj,s.jDz],decls:2,vars:11,consts:[[3,"formControl","indicator","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(l,d){1&l&&(s._UZ(0,"sz-ui-form-field-select",0),s.ALo(1,"async")),2&l&&s.Q6J("formControl",d.control)("indicator",d.indicator)("items",s.lcZ(1,9,d.items$))("label",d.label)("placeholder",d.placeholder)("emptyOption",d.emptyOption)("multiple",d.multiple)("contentFn",d.contentFormat)("valueFn",d.valueFormat)},dependencies:[n.ez,n.Ov,e.UX,e.JJ,e.oH,p.g,y.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),m})()},4211:(T,_,t)=>{t.d(_,{T:()=>o});var n=(()=>((n=n||{}).Validated="Validated",n.Returned="Returned",n.Forwarded="Forwarded",n.Destroyed="Destroyed",n.Collected="Collected",n.Accepted="Accepted",n.Created="Created",n))(),e=t(5879);let o=(()=>{class r{transform(i){switch(i){case n.Accepted:return "Accepted";case n.Collected:return "Collected";case n.Destroyed:return "Destroyed";case n.Forwarded:return "Forwarded";case n.Validated:return "Validated";case n.Created:return "Created";default:return""}}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275pipe=e.Yjl({name:"spceimenStateI18n",type:r,pure:!0,standalone:!0}),r})()},6187:(T,_,t)=>{t.d(_,{T:()=>p});var n=t(9862),e=t(3971),o=t(9598),r=t(5879);let p=(()=>{class i{constructor(a){this.http=a,this.path="medisy-laboratory/v1/reference-groups"}getReferenceGroups(a=o.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:(0,e.c)(a)})})}}return i.\u0275fac=function(a){return new(a||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},8518:(T,_,t)=>{t.d(_,{I:()=>p});var n=t(9862),e=t(3971),o=t(9598),r=t(5879);let p=(()=>{class i{constructor(a){this.http=a,this.path="medisy-laboratory/v1/specimen-types"}getSpecimenTypes(a=o.J.pagedSorted("name")){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:(0,e.c)(a)})})}}return i.\u0275fac=function(a){return new(a||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},5048:(T,_,t)=>{t.d(_,{E:()=>r});var n=t(9862),e=t(3971),o=t(5879);let r=(()=>{class p{constructor(C){this.http=C,this.path="medisy-laboratory/v1/specimens"}getSpecimens(C){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:(0,e.c)(C)})})}getSpecimen(C){return this.http.get(`${this.path}/${C}`)}createSpecimen(C){return this.http.post(`${this.path}`,C)}}return p.\u0275fac=function(C){return new(C||p)(o.LFG(n.eN))},p.\u0275prov=o.Yz7({token:p,factory:p.\u0275fac}),p})()},3590:(T,_,t)=>{t.d(_,{L:()=>p});var n=t(9862),e=t(3971),o=t(9598),r=t(5879);let p=(()=>{class i{constructor(a){this.http=a,this.path="medisy-laboratory/v1/test-classes"}getTestClasses(a=o.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:(0,e.c)(a)})})}}return i.\u0275fac=function(a){return new(a||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},3712:(T,_,t)=>{t.d(_,{V:()=>n});var n=(()=>((n=n||{}).Private="Private",n.Public="Public",n.Work="Work",n))()},1101:(T,_,t)=>{t.d(_,{z:()=>n});var n=(()=>((n=n||{}).Home="Home",n.Mobile="Mobile",n.Work="Work",n))()},7263:(T,_,t)=>{t.d(_,{v:()=>n});var n=(()=>((n=n||{}).Equal="Equal",n.GreaterThan="GreaterThan",n.GreaterThanOrEqual="GreaterThanOrEqual",n.LessThan="LessThan",n.LessThanOrEqual="LessThanOrEqual",n.Not="Not",n.RangeWithBoundaries="RangeWithBoundaries",n.RangeWithoutBoundaries="RangeWithoutBoundaries",n))()},2595:(T,_,t)=>{t.d(_,{V:()=>o});var n=t(6128),e=t(5879);let o=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[n.X]}),r})()},6128:(T,_,t)=>{t.d(_,{X:()=>S});var n=t(6814),e=t(5879),o=t(5195),r=t(6385),p=t(617),i=t(6007),C=t(2169);let a=(()=>{class u{hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["sz-ui-icon"]],inputs:{icon:"icon"},standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[3,"className"]],template:function(f,E){1&f&&(e.TgZ(0,"span",0),e._uU(1),e.qZA()),2&f&&(e.Q6J("className",E.getClass()),e.uIk("data-icon",E.getIcon()),e.xp6(1),e.Oqu(E.getIcon()))},dependencies:[n.ez],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),u})(),s=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[a]}),u})();var y=t(2430),c=t(8145);function m(u,v){if(1&u&&(e.ynx(0),e._UZ(1,"sz-ui-counter",8),e.BQk()),2&u){const f=e.oxw();e.xp6(1),e.Q6J("task$",null==f.card?null:f.card.task$)}}function h(u,v){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const f=e.oxw(2);e.xp6(1),e.hij(" ",null==f.card?null:f.card.title," ")}}function l(u,v){1&u&&e.Hsn(0,2)}function d(u,v){if(1&u&&(e.ynx(0),e.YNc(1,h,2,1,"div",9),e.YNc(2,l,1,0,"ng-template",null,10,e.W1O),e.BQk()),2&u){const f=e.MAs(3),E=e.oxw();e.xp6(1),e.Q6J("ngIf",null==E.card?null:E.card.title)("ngIfElse",f)}}function O(u,v){if(1&u&&e._UZ(0,"sz-ui-icon",11),2&u){const f=e.oxw();e.Q6J("icon",null==f.card?null:f.card.icon)}}function P(u,v){1&u&&e._UZ(0,"mat-divider")}function M(u,v){if(1&u){const f=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const U=e.CHM(f).$implicit,I=e.oxw(2);return e.KtG(I.cardActionClick(I.card,U))}),e._uU(1),e.qZA()}if(2&u){const f=v.$implicit;e.xp6(1),e.hij(" ",f.title," ")}}function g(u,v){if(1&u&&(e.TgZ(0,"mat-card-actions"),e.YNc(1,M,2,1,"button",12),e.qZA()),2&u){const f=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==f.card?null:f.card.actions)}}function z(u,v){1&u&&e._UZ(0,"mat-progress-bar",14)}const D=[[["","content",""]],[["","footer",""]],[["","title",""]]],F=["[content]","[footer]","[title]"];let S=(()=>{class u{constructor(){this.szCardType=y.k,this.indicator=(0,e.tdS)(!1)}cardClick(f){f&&f.clickFn&&f?.clickFn(f)}cardActionClick(f,E){f&&E&&E.clickFn&&E?.clickFn()}hasIcon(){return void 0!==this.card?.icon}hasActions(){return null!=this.card?.actions&&this.card?.actions.length>0}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["sz-ui-card"]],inputs:{card:"card"},standalone:!0,features:[e.jDz],ngContentSelectors:F,decls:16,vars:8,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"task$"],[4,"ngIf","ngIfElse"],["titleBlock",""],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(f,E){1&f&&(e.F$t(D),e.TgZ(0,"mat-card",0)(1,"mat-card-header",1),e.NdJ("click",function(){return E.cardClick(E.card)}),e.TgZ(2,"mat-card-subtitle"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-title",2),e.YNc(5,m,2,1,"ng-container",3),e.YNc(6,d,4,2,"ng-container",3),e.qZA(),e._UZ(7,"span",4),e.YNc(8,O,1,1,"sz-ui-icon",5),e.qZA(),e.TgZ(9,"mat-card-content"),e.Hsn(10),e.YNc(11,P,1,0,"mat-divider",6),e.YNc(12,g,2,1,"mat-card-actions",6),e.qZA(),e.TgZ(13,"mat-card-footer"),e.Hsn(14,1),e.YNc(15,z,1,0,"mat-progress-bar",7),e.qZA()()),2&f&&(e.xp6(3),e.Oqu(null==E.card?null:E.card.subtitle),e.xp6(1),e.Q6J("ngSwitch",null==E.card?null:E.card.type),e.xp6(1),e.Q6J("ngSwitchCase",E.szCardType.Counter),e.xp6(1),e.Q6J("ngSwitchCase",E.szCardType.Text),e.xp6(2),e.Q6J("ngIf",E.hasIcon()),e.xp6(3),e.Q6J("ngIf",E.hasActions()),e.xp6(1),e.Q6J("ngIf",E.hasActions()),e.xp6(3),e.Q6J("ngIf",E.indicator()))},dependencies:[n.ez,n.sg,n.O5,n.RF,n.n9,o.QW,o.a8,o.hq,o.dn,o.rt,o.dk,o.$j,o.n5,p.Ps,r.t,r.d,i.Cv,i.pW,s,a,C.c,c.R],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),u})()},2430:(T,_,t)=>{t.d(_,{k:()=>n});var n=(()=>((n=n||{})[n.Counter=0]="Counter",n[n.Text=1]="Text",n))()},8145:(T,_,t)=>{t.d(_,{R:()=>p});var n=t(6814),e=t(8180),o=t(5879);const r=["*"];let p=(()=>{class i{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0}set value(a){a&&(this.animate(this.oldValue,a),this.oldValue=a)}ngOnInit(){this.task$&&this.task$.pipe((0,e.q)(1)).subscribe(a=>{this.value=a})}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(a,s){const y=s-a;let m=Math.abs(Math.floor(this.duration/y));m=Math.max(m,50);const l=(new Date).getTime()+this.duration,d=()=>{const O=(new Date).getTime(),P=Math.max((l-O)/this.duration,0),M=Math.round(s-P*y);this.currentValue=M,Math.round(M)===Math.round(s)&&clearInterval(this.timer)};this.timer=setInterval(d,m),d()}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["sz-ui-counter"]],inputs:{task$:"task$",value:"value"},standalone:!0,features:[o.jDz],ngContentSelectors:r,decls:3,vars:1,template:function(a,s){1&a&&(o.F$t(),o.TgZ(0,"span"),o._uU(1),o.Hsn(2),o.qZA()),2&a&&(o.xp6(1),o.hij(" ",s.currentValue," "))},dependencies:[n.ez],encapsulation:2}),i})()},2169:(T,_,t)=>{t.d(_,{c:()=>o});var n=t(8145),e=t(5879);let o=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[n.R]}),r})()}}]);