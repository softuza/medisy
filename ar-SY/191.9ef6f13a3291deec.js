"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[191],{6187:(C,m,r)=>{r.r(m),r.d(m,{ReferenceValueModule:()=>q});var i=r(6814),n=r(6223),s=r(2296),E=r(5986),f=r(7700),S=r(617),M=r(7988),_=r(8525),g=r(8109),R=r(6883),d=r(758),F=r(8308),u=r(2169),p=r(9899),D=r(5041),Z=r(7239),v=r(3572),b=r(8645),e=r(5879),G=r(2516),A=r(8262),O=r(7076),V=r(9598),y=r(8721),T=r(8180),N=r(5781),B=r(7398);let z=(()=>{class l extends N.ms{set person(a){this._person=a}constructor(a,o){super(a),this.ngControl=a,this.mlabService=o,this.options=[],this.label="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.optionContent=t=>t.name,this.optionValue=t=>this.szOptionValueFn?this.szOptionValueFn(t):t.id,this.mlabService.referenceGroups.get(V.J.unpagedSorted("name")).pipe((0,T.q)(1),(0,B.U)(t=>t.items)).pipe((0,y.sU)(this.indicator)).subscribe(t=>{this.options=t})}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(n.a5,10),e.Y36(R.t))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[e._Bn([R.t]),e.qOj,e.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(o,t){1&o&&e._UZ(0,"sz-ui-form-field-select",0),2&o&&e.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[i.ez,n.UX,n.JJ,n.oH,N.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return l})();var P=r(7263);let L=(()=>{class l extends N.ms{constructor(a,o){super(a),this.ngControl=a,this.typeI18nPipe=o,this.options=Object.keys(P.v).map(t=>P.v[t]),this.label="\u0627\u0644\u0639\u0645\u0644\u064A\u0629",this.optionContent=t=>this.typeI18nPipe.transform(t)}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(n.a5,10),e.Y36(O.y))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-form-field-comparison-operator"]],standalone:!0,features:[e._Bn([O.y]),e.qOj,e.jDz],decls:1,vars:7,consts:[[3,"formControl","options","label","placeholder","emptyOption","multiple","szOptionContentFn"]],template:function(o,t){1&o&&e._UZ(0,"sz-ui-form-field-select",0),2&o&&e.Q6J("formControl",t.control)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)},dependencies:[n.UX,n.JJ,n.oH,N.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return l})();var I=r(4622),$=r(6091);let J=(()=>{class l extends p.Z2{constructor(a,o,t,h){super(o),this.fb=a,this.dialog=o,this.typeI18nPipe=t,this.data=h,this.form=a.group({referenceGroupId:[h.referenceGroupId],comparisonOperator:new n.NI(h.comparisonOperator)})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(n.qu),e.Y36(f.so),e.Y36(O.y),e.Y36(f.WI))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules-filter"]],standalone:!0,features:[e._Bn([O.y]),e.qOj,e.jDz],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","comparisonOperator",3,"emptyOption"],["formControlName","referenceGroupId",3,"emptyOption"],[3,"actions"]],template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-comparison-operator",2)(4,"medisy-form-field-reference-group",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[i.ez,n.UX,n._Y,n.JJ,n.JL,n.sg,n.u,f.Is,f.xY,E.p9,p.su,I.Y,$.t,z,L],encapsulation:2})}return l})();var Y=r(9157),U=r(2032),W=r(8873);function X(l,k){1&l&&(e.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"label"),e._UZ(3,"input",10),e.qZA()(),e.TgZ(4,"mat-form-field",9)(5,"label"),e._UZ(6,"input",11),e.qZA()()())}function x(l,k){1&l&&(e.TgZ(0,"mat-form-field",9)(1,"label"),e._UZ(2,"input",12),e.qZA()())}let j=(()=>{class l extends p.Ku{constructor(a,o,t,h,c){super(h),this.mlabService=a,this.typeI18nPipe=o,this.fb=t,this.dialog=h,this.data=c,this.form=t.group({description:[c.referenceValueRule?.description,[n.kI.maxLength(4096)]],comparisonOperator:new n.NI(c.referenceValueRule?.comparisonOperator??P.v.Equal,[n.kI.required]),referenceGroupId:[c.referenceValueRule?.referenceGroupId,[n.kI.required]],value:[c.referenceValueRule?.value,[]],start:[c.referenceValueRule?.start,[]],end:[c.referenceValueRule?.end,[]]})}isRange(){return this.form.value.comparisonOperator===P.v.RangeWithBoundaries||this.form.value.comparisonOperator===P.v.RangeWithoutBoundaries}submit(){this.IsValid()&&this.save(this.data.referenceValueRule?this.mlabService.referenceValues.rules.update(this.data.referenceValueId,this.data.referenceValueRule.id,this.form.value):this.mlabService.referenceValues.rules.create(this.data.referenceValueId,this.form.value))}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(R.t),e.Y36(O.y),e.Y36(n.qu),e.Y36(f.so),e.Y36(f.WI))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules-save"]],standalone:!0,features:[e._Bn([O.y]),e.qOj,e.jDz],decls:9,vars:5,consts:function(){let a,o,t,h;return a="\u0627\u0644\u0648\u0635\u0641",o="\u0628\u062F\u0627\u064A\u0629",t="\u0646\u0647\u0627\u064A\u0629",h="\u0642\u064A\u0645\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",a],["formControlName","comparisonOperator"],["class","tw-flex md:tw-flex-row tw-flex-col md:tw-gap-4",4,"ngIf"],["class","tw-flex-1",4,"ngIf"],["formControlName","referenceGroupId"],[3,"actions"],[1,"tw-flex","md:tw-flex-row","tw-flex-col","md:tw-gap-4"],[1,"tw-flex-1"],["autocomplete","off","formControlName","start","matInput","","placeholder",o],["autocomplete","off","formControlName","end","matInput","","placeholder",t],["autocomplete","off","formControlName","value","matInput","","placeholder",h]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-comparison-operator",3),e.YNc(5,X,7,0,"div",4),e.YNc(6,x,3,0,"mat-form-field",5),e._UZ(7,"medisy-form-field-reference-group",6),e.qZA()(),e._UZ(8,"sz-ui-dialog-actions",7)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("ngIf",t.isRange()),e.xp6(1),e.Q6J("ngIf",!t.isRange()),e.xp6(2),e.Q6J("actions",t.actions))},dependencies:[i.ez,i.O5,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,U.c,U.Nt,Y.KE,f.Is,f.xY,Y.lN,E.p9,p.su,I.Y,$.t,N.g2,W.L,z,L],encapsulation:2})}return l})();var Q=r(8359),w=r(3144);let H=(()=>{class l{constructor(a,o,t,h){this.dialog=a,this.route=o,this.mlabService=t,this.typeI18nPipe=h,this.dataSource=new v.b2(V.J.paged()),this.referenceValue=this.route.snapshot.data.referenceValue,this.dataSource.columns=[v.UC.text("referenceGroup","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",c=>c.referenceGroup.name),A.h.comparisonOperator(c=>h.transform(c.comparisonOperator)),v.UC.text("value","\u0642\u064A\u0645\u0629",c=>c.value?c.value:`${c.start} - ${c.end}`),A.h.createdAt(),A.h.menu([v.od.edit(c=>this.openSaveComponent(c)),v.od.delete(c=>{this.openReferenceValueRuleDeleteComponent(c)})])],this.get()}openSaveComponent(a){this.dialog.open(j,{data:{referenceValueId:this.referenceValue.id,referenceValueRule:a}}).afterClosed().pipe((0,T.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openFilterComponent(){this.dialog.open(J,{data:this.dataSource.filterModel}).afterClosed().pipe((0,T.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openReferenceValueRuleDeleteComponent(a){this.dialog.open(p.fN,{data:p.cb.delete(this.mlabService.referenceValues.rules.delete(a.referenceValueId,a.id),a)}).afterClosed().pipe((0,T.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.referenceValues.rules.get(this.referenceValue.id,this.dataSource.filterModel).pipe((0,y.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(f.uw),e.Y36(g.gz),e.Y36(R.t),e.Y36(O.y))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-laboratory-reference-value-rules"]],features:[e._Bn([O.y])],decls:5,vars:4,consts:function(){let a;return a="\u0625\u0636\u0627\u0641\u0629",[[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-table-filter",0),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(1,"button",1),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(2,"span"),e.SDv(3,2),e.qZA()()(),e.TgZ(4,"sz-ui-table",3),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[s.lW,Q.K,w.f],encapsulation:2})}return l})();const K=[{path:"",component:(()=>{class l{constructor(a,o){this.dialog=a,this.route=o,this.alert$=new b.x,this.referenceValue=this.route.snapshot.data.referenceValue}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(f.uw),e.Y36(g.gz))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["medisy-laboratory-reference-value"]],features:[e._Bn([])],decls:10,vars:2,consts:[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","routerLink","../","end",""]],template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA()(),e.TgZ(6,"button",3)(7,"mat-icon"),e._uU(8,"arrow_back"),e.qZA()()(),e._UZ(9,"medisy-laboratory-reference-value-rules")),2&o&&(e.xp6(3),e.Oqu(t.referenceValue.testClass.name),e.xp6(2),e.Oqu(t.referenceValue.description))},dependencies:[g.rH,S.Hw,s.RK,G.z,H],encapsulation:2})}return l})()}];let q=(()=>{class l{static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275mod=e.oAB({type:l});static#r=this.\u0275inj=e.cJS({providers:[R.t],imports:[i.ez,n.u5,g.Bz.forChild(K),f.Is,E.p9,M.Tx,S.Ps,s.ot,_.LD,d.E3,v.Vn,u.c,F.VH,Z.h,p.su,D.n]})}return l})()},7076:(C,m,r)=>{r.d(m,{y:()=>R});var i=r(3712),n=r(1101),s=r(7263),E=function(d){return d.Validated="Validated",d.Returned="Returned",d.Forwarded="Forwarded",d.Destroyed="Destroyed",d.Collected="Collected",d.Accepted="Accepted",d.Created="Created",d}(E||{}),f=function(d){return d.Created="Created",d.Pending="Pending",d.Started="Started",d.Finished="Finished",d}(f||{}),S=r(1646),M=r(9155),_=r(6494),g=r(5879);let R=(()=>{class d{transform(u,p=!1){return u in s.v?this.transformComparisonOperator(u,p):u in f?this.transformTestState(u):u in E?this.transformSpecimenState(u):u in i.V?this.transformEmailType(u):u in n.z?this.transformPhoneType(u):u in M.m?this.transformSex(u):u in S.n?this.transformDocumentType(u):u in _.x?this.transformChannelType(u):""}transformComparisonOperator(u,p){switch(u){case s.v.Equal:return p?"==":"\u062A\u0633\u0627\u0648\u064A";case s.v.GreaterThan:return p?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case s.v.GreaterThanOrEqual:return p?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case s.v.LessThan:return p?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case s.v.LessThanOrEqual:return p?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case s.v.RangeWithBoundaries:return p?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case s.v.RangeWithoutBoundaries:return p?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case s.v.Not:return p?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(u){switch(u){case f.Created:return "\u0645\u0646\u0634\u0623\u0629";case f.Started:return "\u0628\u062F\u0623";case f.Finished:return "\u0627\u0646\u062A\u0647\u062A";case f.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(u){switch(u){case E.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case E.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case E.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case E.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case E.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case E.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(u){switch(u){case i.V.Private:return "\u062E\u0627\u0635";case i.V.Public:return "\u0639\u0627\u0645";case i.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(u){switch(u){case n.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case n.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case n.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(u){switch(u){case M.m.Female:return "\u0627\u0646\u062B\u0649";case M.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(u){switch(u){case S.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case S.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case S.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case S.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case S.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case S.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(u){switch(u){case _.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case _.x.Sms:return "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case _.x.Push:return "\u0627\u0634\u0639\u0627\u0631";default:return""}}static#e=this.\u0275fac=function(p){return new(p||d)};static#t=this.\u0275pipe=g.Yjl({name:"typeI18n",type:d,pure:!0,standalone:!0})}return d})()},3712:(C,m,r)=>{r.d(m,{V:()=>i});var i=function(s){return s.Private="Private",s.Public="Public",s.Work="Work",s}(i||{});Object.keys(i).map(s=>i[s])},1101:(C,m,r)=>{r.d(m,{z:()=>i});var i=function(s){return s.Home="Home",s.Mobile="Mobile",s.Work="Work",s}(i||{});Object.keys(i).map(s=>i[s])},7263:(C,m,r)=>{r.d(m,{v:()=>i});var i=function(n){return n.Equal="Equal",n.GreaterThan="GreaterThan",n.GreaterThanOrEqual="GreaterThanOrEqual",n.LessThan="LessThan",n.LessThanOrEqual="LessThanOrEqual",n.Not="Not",n.RangeWithBoundaries="RangeWithBoundaries",n.RangeWithoutBoundaries="RangeWithoutBoundaries",n}(i||{})},1646:(C,m,r)=>{r.d(m,{n:()=>i});var i=function(s){return s.NationalCard="NationalCard",s.BankCard="BankCard",s.DriverLicense="DriverLicense",s.Passport="Passport",s.TravelDocument="TravelDocument",s.Other="Other",s}(i||{});Object.keys(i).map(s=>i[s])},9155:(C,m,r)=>{r.d(m,{m:()=>i});var i=function(s){return s.Male="Male",s.Female="Female",s}(i||{});Object.keys(i).map(s=>i[s])},6494:(C,m,r)=>{r.d(m,{x:()=>i});var i=function(n){return n.Email="Email",n.Sms="Sms",n.Push="Push",n}(i||{})}}]);