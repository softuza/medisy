"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[975],{7975:(S,c,n)=>{n.r(c),n.d(c,{ReferenceValuesModule:()=>B});var r=n(6814),s=n(6223),m=n(2296),d=n(7700),O=n(617),l=n(8109),p=n(6883),C=n(758),f=n(9899),_=n(5041),U=n(7239),E=n(3562),R=n(8262),A=n(9598),g=n(8721),h=n(8180),I=n(7106),v=n(738),T=n(5781),e=n(5879);let M=(()=>{class i extends T.ms{constructor(a,o){super(a),this.ngControl=a,this.mlabService=o,this.options=[],this.label="Unit",this.optionContent=t=>t.name,this.optionValue=t=>t.id,this.mlabService.units.getItems(A.J.unpagedSorted("name")).pipe((0,h.q)(1),(0,g.sU)(this.indicator)).subscribe(t=>{this.options=t})}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(s.a5,10),e.Y36(p.t))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[e._Bn([p.t]),e.qOj,e.jDz],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(o,t){1&o&&e._UZ(0,"sz-ui-form-field-select",0),2&o&&e.Q6J("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue)},dependencies:[r.ez,s.UX,s.JJ,s.oH,T.E3],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return i})();var P=n(7263),y=n(4622),N=n(6091);let z=(()=>{class i extends f.Z2{constructor(a,o,t){super(o),this.fb=a,this.dialog=o,this.data=t,this.comparisonOperators=Object.values(P.v),this.form=a.group({testClassId:[t.testClassId],unitId:[t.unitId],includeLaboratoryIds:[t.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-reference-values-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:7,vars:6,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","unitId",3,"emptyOption"],["formControlName","testClassId",3,"emptyOption"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-unit",2)(4,"medisy-form-field-test-class",3)(5,"medisy-form-field-laboratory",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[r.ez,s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,d.Is,d.xY,f.su,y.Y,N.t,v.U,M,I.w],encapsulation:2})}return i})();var L=n(5986),V=n(9157),D=n(5974),Y=n(8873);let b=(()=>{class i extends f.Ku{constructor(a,o,t,u){super(t),this.mlabService=a,this.fb=o,this.dialog=t,this.data=u,this.form=o.group({description:[u?.description,[s.kI.maxLength(4096)]],testClassId:[u?.testClassId,[s.kI.required]],unitId:[u?.unitId,[]],multiplier:[u?.multiplier,[]]})}submit(){this.IsValid()&&this.save(this.data?this.mlabService.referenceValues.update(this.data.id,this.form.value):this.mlabService.referenceValues.create(this.form.value))}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(p.t),e.Y36(s.qu),e.Y36(d.so),e.Y36(d.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:8,vars:3,consts:function(){let a,o;return a="Description",o="Multiplier",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",a],["formControlName","unitId"],["formControlName","multiplier","label",o],["formControlName","testClassId"],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"medisy-form-field-test-class",5),e.qZA()(),e._UZ(7,"sz-ui-dialog-actions",6)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("actions",t.actions))},dependencies:[r.ez,s.UX,s._Y,s.JJ,s.JL,s.sg,s.u,d.Is,d.xY,V.lN,L.p9,f.su,y.Y,N.t,T.g2,D.g,Y.L,M,v.U],encapsulation:2})}return i})();var $=n(2516),F=n(8359),J=n(3144);const Z=[{path:"",component:(()=>{class i{constructor(a,o){this.dialog=a,this.mlabService=o,this.dataSource=new E.b2(A.J.paged()),this.dataSource.addRows(E.zP.default([E.UC.hyperlink("testClass","Test class",t=>t.id,t=>t.testClass.name),E.UC.text("unit","Unit",t=>t.multiplier?`10^${t.multiplier.toExponential(0).split("e").map(u=>Number(u))[1]}/${t.unit?.abbreviation}`:t.unit?.abbreviation),R.h.createdAt(),R.h.menu([E.od.edit(t=>this.openSaveComponent(t)),E.od.delete(t=>this.openReferenceValueDeleteComponent(t))])])),this.get()}openSaveComponent(a){this.dialog.open(b,{data:a}).afterClosed().pipe((0,h.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openFilterComponent(){this.dialog.open(z,{data:this.dataSource.filterModel}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openReferenceValueDeleteComponent(a){this.dialog.open(f.fN,{data:f.cb.delete(this.mlabService.referenceValues.delete(a.id),a)}).afterClosed().pipe((0,h.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}get(){this.mlabService.referenceValues.get(this.dataSource.filterModel).pipe((0,g.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(d.uw),e.Y36(p.t))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["medisy-laboratory-reference-values"]],decls:8,vars:4,consts:function(){let a,o;return a="Reference Values",o="Add",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],["mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[m.lW,$.z,F.K,J.f],encapsulation:2})}return i})()}];let B=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({providers:[p.t],imports:[r.ez,s.u5,s.UX,l.Bz.forChild(Z),d.Is,O.Ps,m.ot,_.n,E.Vn,U.h,C.E3,f.su]})}return i})()},8262:(S,c,n)=>{n.d(c,{h:()=>d});var r=n(3562),s=n(7311);const m={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class d{static menu(l){return r.UC.action("menu",l)}static code(){return r.UC.text("code","Code")}static createdAt(){return r.UC.date("createdAt",s.O.createdDate)}static updatedAt(){return r.UC.date("updatedAt",s.O.updatedDate)}static id(){return r.UC.text("id",s.O.id)}static nameHyperlink(l,p,C){return r.UC.hyperlink("name",s.O.name,l,p,C)}static nameText(l){return r.UC.text("name",s.O.name,l)}static phoneType(l){return r.UC.text("phoneType",m.phoneType,l)}static emailType(l){return r.UC.text("emailType",m.emailType,l)}static documentType(l){return r.UC.text("documentType",m.documentType,l)}static comparisonOperator(l){return r.UC.text("comparisonOperator",m.comparisonType,l)}}},7311:(S,c,n)=>{n.d(c,{O:()=>r});const r={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}},7263:(S,c,n)=>{n.d(c,{v:()=>r});var r=function(s){return s.Equal="Equal",s.GreaterThan="GreaterThan",s.GreaterThanOrEqual="GreaterThanOrEqual",s.LessThan="LessThan",s.LessThanOrEqual="LessThanOrEqual",s.Not="Not",s.RangeWithBoundaries="RangeWithBoundaries",s.RangeWithoutBoundaries="RangeWithoutBoundaries",s}(r||{})}}]);