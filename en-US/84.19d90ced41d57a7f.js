"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[84],{9084:(ze,O,l)=>{l.r(O),l.d(O,{LaboratoryValueReferencesModule:()=>ke});var s=l(9808),I=l(9764),D=l(7531),V=l(5245),h=l(7423),J=l(6114),c=l(2349),q=l(1079),m=l(6346),M=l(6087),Q=l(1575),F=l(7446),L=l(4107),u=l(3075),B=l(2081),R=l(2181),P=l(7238),$=l(7544),k=l(4623),U=l(4847),b=l(508),z=l(773),j=l(9224),Y=l(5467),_=l(2986),T=l(5701),w=l(675),S=l(3869),d=l(4850),y=l(5013),g=l(520),e=l(5e3);let N=(()=>{class t{constructor(a){this.http=a,this.path="laboratory-management/v1/age-groups"}getAgeGroups(a){return this.http.get(`${this.path}`,{params:new g.LE({fromObject:a})})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),Z=(()=>{class t{constructor(a){this.http=a,this.path="v1/common-types/data-units"}getDataUnites(a){return this.http.get(`${this.path}`,{params:new g.LE({fromObject:a})})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var C=(()=>{return(t=C||(C={})).Equal="Equal",t.GreaterThan="GreaterThan",t.GreaterThanOrEqual="GreaterThanOrEqual",t.LessThan="LessThan",t.LessThanOrEqual="LessThanOrEqual",t.Not="Not",t.RangeWithBoundaries="RangeWithBoundaries",t.RangeWithoutBoundaries="RangeWithoutBoundaries",C;var t})(),A=(()=>{return(t=A||(A={})).Male="Male",t.Female="Female",A;var t})();let v=(()=>{class t{constructor(a){this.http=a,this.path="laboratory-management/v1/value-references"}getValueReferences(a){return this.http.get(`${this.path}`,{params:new g.LE({fromObject:a})})}createValueReference(a){return this.http.post(`${this.path}`,a)}deleteValueReference(a){return this.http.delete(`${this.path}/${a}`)}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var E=l(7093),G=l(7322),x=l(5006);function H(t,n){1&t&&e._UZ(0,"app-alert",17),2&t&&e.Q6J("alert",n.ngIf)}function X(t,n){if(1&t&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a)}}function W(t,n){1&t&&(e.TgZ(0,"div",6)(1,"mat-form-field",4)(2,"label"),e._UZ(3,"input",19),e.qZA()(),e.TgZ(4,"mat-form-field",4)(5,"label"),e._UZ(6,"input",20),e.qZA()()())}function K(t,n){1&t&&(e.TgZ(0,"div",6)(1,"mat-form-field",4)(2,"label"),e._UZ(3,"input",21),e.qZA()()())}function ee(t,n){if(1&t&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a.name)}}function te(t,n){if(1&t&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}function ae(t,n){if(1&t&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a)}}function oe(t,n){if(1&t&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}let ne=(()=>{class t extends S.a{constructor(a,o,r,i,f,p){super(p,f.group({description:[null,[]],testTypeId:[null,[u.kI.required]],comparisonOperator:[null,[u.kI.required]],sex:[null,[]],ageGroupId:[null,[u.kI.required]],dataUnit:[null,[]],value:[null,[]],start:[null,[]],end:[null,[]]})),this.laboratoryValueReferenceService=a,this.testTypeService=o,this.ageGroupService=r,this.dataUnitService=i,this.fb=f,this.dialog=p,this.testTypes$=null,this.sexes=[],this.comparisonOperators=[],this.ageGroups$=null,this.dataUnits$=null,this.getTestTypes(),this.getAgeGroups(),this.getDataUnits(),this.sexes=Object.values(A),this.comparisonOperators=Object.values(C)}getTestTypes(){this.testTypes$=this.testTypeService.getTestTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}getDataUnits(){this.dataUnits$=this.dataUnitService.getDataUnites({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}getAgeGroups(){this.ageGroups$=this.ageGroupService.getAgeGroups({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}isRange(){var a,o;return"<>"===(null===(a=this.form.value.valueOperation)||void 0===a?void 0:a.code)||"<==>"==(null===(o=this.form.value.valueOperation)||void 0===o?void 0:o.code)}handleSubmit(){var a;const o=this.form.value;this.laboratoryValueReferenceService.createValueReference({description:o.description,testTypeId:o.testTypeId,comparisonOperator:o.comparisonOperator,ageGroupId:o.ageGroupId,dataUnitId:null===(a=o.dataUnit)||void 0===a?void 0:a.id,sex:o.sex,start:o.start,end:o.end,value:o.value}).pipe((0,T.sU)(this.indicator$)).pipe((0,T.S3)(this.alert$)).pipe((0,_.q)(1)).subscribe(r=>{this.close(r)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(v),e.Y36(y.D),e.Y36(N),e.Y36(Z),e.Y36(u.qu),e.Y36(c.so))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-value-references-create"]],features:[e._Bn([y.D,N,Z]),e.qOj],decls:42,vars:20,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row"],["fxFlex","1 1 100%"],["autocomplete","off","formControlName","description","matInput","","placeholder","\u0627\u0644\u0648\u0635\u0641"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["formControlName","comparisonOperator","placeholder","\u0627\u0644\u0639\u0645\u0644\u064a\u0629"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px",4,"ngIf"],["formControlName","dataUnit","placeholder","\u0627\u0644\u0648\u062d\u062f\u0629"],["formControlName","testTypeId","placeholder","\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"],["formControlName","sexId","placeholder","\u0627\u0644\u062c\u0646\u0633"],["formControlName","ageGroupId","placeholder","\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"disabled","click"],[3,"alert"],[3,"value"],["autocomplete","off","formControlName","start","matInput","","placeholder","\u0627\u0644\u0628\u062f\u0627\u064a\u0629"],["autocomplete","off","formControlName","end","matInput","","placeholder","\u0627\u0644\u0646\u0647\u0627\u064a\u0629"],["autocomplete","off","formControlName","value","matInput","","placeholder","\u0627\u0644\u0642\u064a\u0645\u0629"]],template:function(a,o){1&a&&(e.TgZ(0,"h2",0),e._uU(1,"\u0625\u0646\u0634\u0627\u0621"),e.qZA(),e.YNc(2,H,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"label"),e._UZ(9,"input",5),e.qZA()()(),e.TgZ(10,"div",6)(11,"mat-form-field",4)(12,"mat-select",7),e.YNc(13,X,2,2,"mat-option",8),e.qZA()()(),e.YNc(14,W,7,0,"div",9),e.YNc(15,K,4,0,"div",9),e.TgZ(16,"div",6)(17,"mat-form-field",4)(18,"mat-select",10),e.YNc(19,ee,2,2,"mat-option",8),e.ALo(20,"async"),e.qZA()()(),e.TgZ(21,"div",6)(22,"mat-form-field",4)(23,"mat-select",11),e.YNc(24,te,2,2,"mat-option",8),e.ALo(25,"async"),e.qZA()()(),e.TgZ(26,"div",6)(27,"mat-form-field",4)(28,"mat-select",12)(29,"mat-option"),e._uU(30,"-"),e.qZA(),e.YNc(31,ae,2,2,"mat-option",8),e.qZA()(),e.TgZ(32,"mat-form-field",4)(33,"mat-select",13),e.YNc(34,oe,2,2,"mat-option",8),e.ALo(35,"async"),e.qZA()()()()(),e.TgZ(36,"mat-dialog-actions",14)(37,"button",15),e.NdJ("click",function(){return o.close()}),e._uU(38,"\u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.TgZ(39,"button",16),e.NdJ("click",function(){return o.submit()}),e.ALo(40,"async"),e._uU(41," \u062d\u0641\u0638 "),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,10,o.alert$)),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("ngForOf",o.comparisonOperators),e.xp6(1),e.Q6J("ngIf",o.isRange()),e.xp6(1),e.Q6J("ngIf",!o.isRange()),e.xp6(4),e.Q6J("ngForOf",e.lcZ(20,12,o.dataUnits$)),e.xp6(5),e.Q6J("ngForOf",e.lcZ(25,14,o.testTypes$)),e.xp6(7),e.Q6J("ngForOf",o.sexes),e.xp6(3),e.Q6J("ngForOf",e.lcZ(35,16,o.ageGroups$)),e.xp6(5),e.Q6J("disabled",e.lcZ(40,18,o.indicator$)))},dependencies:[s.sg,s.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,c.uh,c.xY,c.H8,b.ey,E.xw,E.SQ,E.yH,G.KE,D.Nt,x.w,h.lW,L.gD,s.Ov],encapsulation:2}),t})();function le(t,n){1&t&&e._UZ(0,"app-alert",15),2&t&&e.Q6J("alert",n.ngIf)}function re(t,n){if(1&t&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a)}}function ie(t,n){if(1&t&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a.name)}}function ue(t,n){if(1&t&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}function ce(t,n){if(1&t&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(a)}}function se(t,n){if(1&t&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}let me=(()=>{class t extends S.a{constructor(a,o,r,i,f,p){super(f,i.group({ageGroupId:[p.ageGroupId],testTypeId:[p.testTypeId],comparisonOperator:[p.comparisonOperator],sex:[p.sex],dataUnitId:[p.dataUnitId]})),this.testTypeService=a,this.ageGroupService=o,this.dataUnitService=r,this.fb=i,this.dialog=f,this.data=p,this.testTypes$=null,this.sexes=[],this.comparisonOperators=[],this.ageGroups$=null,this.dataUnits$=null,this.getTestTypes(),this.getAgeGroups(),this.getDataUnits(),this.sexes=Object.values(A),this.comparisonOperators=Object.values(C)}getTestTypes(){this.testTypes$=this.testTypeService.getTestTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}getDataUnits(){this.dataUnits$=this.dataUnitService.getDataUnites({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}getAgeGroups(){this.ageGroups$=this.ageGroupService.getAgeGroups({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,d.U)(a=>a.items))}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(y.D),e.Y36(N),e.Y36(Z),e.Y36(u.qu),e.Y36(c.so),e.Y36(c.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-value-references-filter"]],features:[e._Bn([y.D,N,Z]),e.qOj],decls:48,vars:18,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","comparisonOperator","placeholder","\u0627\u0644\u0639\u0645\u0644\u064a\u0629"],[3,"value",4,"ngFor","ngForOf"],["formControlName","dataUnitId","placeholder","\u0627\u0644\u0648\u062d\u062f\u0629"],["formControlName","testTypeId","placeholder","\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"],["formControlName","sex","placeholder","\u0627\u0644\u062c\u0646\u0633"],["formControlName","ageGroupId","placeholder","\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"],[1,"mat-dialog-actions-start"],["mat-button","",3,"click"],[1,"mat-dialog-actions-end"],["mat-flat-button","","color","primary",3,"disabled","click"],[3,"alert"],[3,"value"]],template:function(a,o){1&a&&(e.TgZ(0,"h2",0),e._uU(1,"\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0646\u062a\u0627\u0626\u062c"),e.qZA(),e.YNc(2,le,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"mat-select",5)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,re,2,2,"mat-option",6),e.qZA()()(),e.TgZ(12,"div",3)(13,"mat-form-field",4)(14,"mat-select",7)(15,"mat-option"),e._uU(16,"-"),e.qZA(),e.YNc(17,ie,2,2,"mat-option",6),e.ALo(18,"async"),e.qZA()()(),e.TgZ(19,"div",3)(20,"mat-form-field",4)(21,"mat-select",8)(22,"mat-option"),e._uU(23,"-"),e.qZA(),e.YNc(24,ue,2,2,"mat-option",6),e.ALo(25,"async"),e.qZA()()(),e.TgZ(26,"div",3)(27,"mat-form-field",4)(28,"mat-select",9)(29,"mat-option"),e._uU(30,"-"),e.qZA(),e.YNc(31,ce,2,2,"mat-option",6),e.qZA()(),e.TgZ(32,"mat-form-field",4)(33,"mat-select",10)(34,"mat-option"),e._uU(35,"-"),e.qZA(),e.YNc(36,se,2,2,"mat-option",6),e.ALo(37,"async"),e.qZA()()()()(),e.TgZ(38,"mat-dialog-actions")(39,"div",11)(40,"button",12),e.NdJ("click",function(){return o.reset()}),e._uU(41,"\u0627\u0639\u0627\u062f\u0629 \u0636\u0628\u0637"),e.qZA()(),e.TgZ(42,"div",13)(43,"button",12),e.NdJ("click",function(){return o.close()}),e._uU(44,"\u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.TgZ(45,"button",14),e.NdJ("click",function(){return o.submit()}),e.ALo(46,"async"),e._uU(47," \u062d\u0641\u0638 "),e.qZA()()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,8,o.alert$)),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngForOf",o.comparisonOperators),e.xp6(6),e.Q6J("ngForOf",e.lcZ(18,10,o.dataUnits$)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(25,12,o.testTypes$)),e.xp6(7),e.Q6J("ngForOf",o.sexes),e.xp6(5),e.Q6J("ngForOf",e.lcZ(37,14,o.ageGroups$)),e.xp6(9),e.Q6J("disabled",e.lcZ(46,16,o.indicator$)))},dependencies:[s.sg,s.O5,u._Y,u.JJ,u.JL,u.sg,u.u,c.uh,c.xY,c.H8,b.ey,E.xw,E.SQ,E.yH,G.KE,x.w,h.lW,L.gD,s.Ov],encapsulation:2}),t})();function pe(t,n){1&t&&e._UZ(0,"app-alert",9),2&t&&e.Q6J("alert",n.ngIf)}let fe=(()=>{class t extends S.a{constructor(a,o,r){super(o,new u.cw({})),this.laboratoryValueReferenceService=a,this.dialog=o,this.data=r}handleSubmit(){this.laboratoryValueReferenceService.deleteValueReference(this.data).pipe((0,T.sU)(this.indicator$)).pipe((0,T.S3)(this.alert$)).pipe((0,_.q)(1)).subscribe(()=>{this.close(this.data)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(v),e.Y36(c.so),e.Y36(c.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-value-references-value-reference-delete"]],features:[e.qOj],decls:13,vars:6,consts:function(){let n,a,o,r;return n="Delete",a="Are you sure to delete the selected element?",o="Close",r=" Delete ",[["mat-dialog-title",""],n,[3,"alert",4,"ngIf"],a,[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],o,["mat-flat-button","","color","warn",3,"disabled","click"],r,[3,"alert"]]},template:function(a,o){1&a&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,pe,1,1,"app-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"p"),e.SDv(6,3),e.qZA()(),e.TgZ(7,"mat-dialog-actions",4)(8,"button",5),e.NdJ("click",function(){return o.close()}),e.SDv(9,6),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return o.submit()}),e.SDv(11,8),e.ALo(12,"async"),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,o.alert$)),e.xp6(8),e.Q6J("disabled",e.lcZ(12,4,o.indicator$)))},dependencies:[s.O5,c.uh,c.xY,c.H8,x.w,h.lW,s.Ov],encapsulation:2}),t})();var _e=l(9779),de=l(9293),ge=l(3998);function Ee(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-header-cell",32)(1,"mat-checkbox",33),e.NdJ("change",function(r){e.CHM(a);const i=e.oxw();return e.KtG(r?i.masterToggle():null)}),e.qZA()()}if(2&t){const a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.hasValue()&&a.isAllSelected())("indeterminate",a.selection.hasValue()&&!a.isAllSelected())}}function he(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-cell",32)(1,"mat-checkbox",34),e.NdJ("click",function(r){return r.stopPropagation()})("change",function(r){const f=e.CHM(a).$implicit,p=e.oxw();return e.KtG(r?p.selection.toggle(f):null)}),e.qZA()()}if(2&t){const a=n.$implicit,o=e.oxw();e.xp6(1),e.Q6J("checked",o.selection.isSelected(a))}}function Te(t,n){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const a=n.$implicit,o=e.oxw();e.uIk("colspan",o.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",a===o.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",a.description," ")}}function Ce(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," #"),e.qZA())}function Ae(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.id," ")}}function Re(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0648\u0635\u0641"),e.qZA())}function ye(t,n){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",36)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const a=n.$implicit;e.xp6(4),e.hij(" ",a.description," ")}}function Ne(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u0634\u0627\u0621"),e.qZA())}function Ze(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,a.createdAt,"medium")," ")}}function ve(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0646\u0645\u0637 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"),e.qZA())}function Le(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",null==a.testType?null:a.testType.name," ")}}function Ue(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"),e.qZA())}function be(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",null==a.ageGroup?null:a.ageGroup.name," ")}}function Se(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e.SDv(1,37),e.qZA())}function xe(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.sex," ")}}function Oe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0648\u062d\u062f\u0629"),e.qZA())}function De(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",null==a.dataUnit?null:a.dataUnit.name," ")}}function Ve(t,n){1&t&&(e.TgZ(0,"mat-header-cell"),e._uU(1," \u0627\u0644\u0642\u064a\u0645"),e.qZA())}function Me(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit,o=e.oxw();e.xp6(1),e.hij(" ",o.displayValues(a)," ")}}function Fe(t,n){1&t&&e._UZ(0,"mat-header-cell",32)}function $e(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-cell",38)(1,"button",5)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,39)(6,"button",7),e.NdJ("click",function(){const i=e.CHM(a).$implicit,f=e.oxw();return e.KtG(f.openValueReferenceDeleteComponent(i))}),e.TgZ(7,"mat-icon",40),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"\u062d\u0630\u0641"),e.qZA()()()()}if(2&t){const a=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",a)}}function Ye(t,n){1&t&&e._UZ(0,"mat-header-row")}function Ge(t,n){1&t&&e._UZ(0,"mat-row")}function Ie(t,n){if(1&t&&(e._UZ(0,"app-table-state",41),e.ALo(1,"async")),2&t){const a=e.oxw();e.Q6J("loading",e.lcZ(1,1,a.indicator$))}}const Je=function(){return[10,25,50,100]};function qe(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-paginator",42),e.NdJ("page",function(r){e.CHM(a);const i=e.oxw();return e.KtG(i.onPageChange(r.pageIndex,r.pageSize))}),e.qZA()}if(2&t){const a=e.oxw();e.Q6J("length",a.count)("pageSize",a.pageSize)("pageSizeOptions",e.DdM(3,Je))}}const Qe=[{path:"",component:(()=>{class t extends w.a{constructor(a,o){super(),this.dialog=a,this.laboratoryValueReferenceService=o,this.displayedColumns=["TestType","AgeGroup","Sex","DataUnit","Data","menu"],this.filter={},this.get()}openCreateComponent(){this.dialog.open(ne,{autoFocus:!0,width:"480px"}).afterClosed().pipe((0,_.q)(1)).subscribe(o=>{o&&this.add(o)})}openFilterComponent(){this.dialog.open(me,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,_.q)(1)).subscribe(o=>{o&&(this.filter=o,this.get())})}openValueReferenceDeleteComponent(a){this.dialog.open(fe,{autoFocus:!0,width:"480px",data:a.id}).afterClosed().pipe((0,_.q)(1)).subscribe(r=>{r&&this.delete(r)})}displayValues(a){return a.value?a.value:`${a.start} - ${a.end}`}get(){const a={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,description:this.filterValue};this.filter.comparisonOperator&&(a.comparisonOperator=this.filter.comparisonOperator),this.filter.ageGroupId&&(a.ageGroupId=this.filter.ageGroupId),this.filter.dataUnitId&&(a.dataUnitId=this.filter.dataUnitId),this.filter.sex&&(a.sex=this.filter.sex),this.filter.testTypeId&&(a.testTypeId=this.filter.testTypeId),this.laboratoryValueReferenceService.getValueReferences(a).pipe((0,T.sU)(this.indicator$)).pipe((0,_.q)(1)).subscribe(o=>{this.set(o.count,o.items)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(c.uw),e.Y36(v))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-value-references"]],features:[e.qOj],decls:63,vars:12,consts:function(){let n;return n="Sex",[[1,"header-basic"],[1,"title"],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","Description"],["matColumnDef","CreatedAt"],["matColumnDef","TestType"],["matColumnDef","AgeGroup"],["matColumnDef","Sex"],["matColumnDef","DataUnit"],["matColumnDef","Data"],[4,"matHeaderCellDef"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],[1,"table-cell-stacked"],n,[1,"table-column-small","table-column-end"],["itemMenu","matMenu"],["color","warn"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(a,o){if(1&a&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e._uU(3,"\u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629"),e.qZA(),e._UZ(4,"span",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",4),e.NdJ("click",function(){return o.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"button",5)(12,"mat-icon"),e._uU(13,"more_vert"),e.qZA()(),e.TgZ(14,"mat-menu",null,6)(16,"button",7),e.NdJ("click",function(){return o.openCreateComponent()}),e.TgZ(17,"mat-icon"),e._uU(18,"add"),e.qZA(),e.TgZ(19,"span"),e._uU(20,"\u0625\u0636\u0627\u0641\u0629"),e.qZA()()(),e.TgZ(21,"app-search-bar",8),e.NdJ("changed",function(i){return o.onSearch(i)})("closed",function(){return o.onSearchClose()}),e.qZA()(),e.TgZ(22,"app-table-selection",9)(23,"span"),e._uU(24),e.qZA(),e._UZ(25,"span",2),e.qZA(),e.TgZ(26,"mat-table",10),e.NdJ("matSortChange",function(i){return o.onSort(i.active,i.direction)}),e.ynx(27,11),e.YNc(28,Ee,2,2,"mat-header-cell",12),e.YNc(29,he,2,1,"mat-cell",13),e.BQk(),e.ynx(30,14),e.YNc(31,Te,4,3,"mat-cell",15),e.BQk(),e.ynx(32,16),e.YNc(33,Ce,2,0,"mat-header-cell",17),e.YNc(34,Ae,2,1,"mat-cell",15),e.BQk(),e.ynx(35,18),e.YNc(36,Re,2,0,"mat-header-cell",17),e.YNc(37,ye,5,1,"mat-cell",15),e.BQk(),e.ynx(38,19),e.YNc(39,Ne,2,0,"mat-header-cell",17),e.YNc(40,Ze,3,4,"mat-cell",15),e.BQk(),e.ynx(41,20),e.YNc(42,ve,2,0,"mat-header-cell",17),e.YNc(43,Le,2,1,"mat-cell",15),e.BQk(),e.ynx(44,21),e.YNc(45,Ue,2,0,"mat-header-cell",17),e.YNc(46,be,2,1,"mat-cell",15),e.BQk(),e.ynx(47,22),e.YNc(48,Se,2,0,"mat-header-cell",17),e.YNc(49,xe,2,1,"mat-cell",15),e.BQk(),e.ynx(50,23),e.YNc(51,Oe,2,0,"mat-header-cell",17),e.YNc(52,De,2,1,"mat-cell",15),e.BQk(),e.ynx(53,24),e.YNc(54,Ve,2,0,"mat-header-cell",25),e.YNc(55,Me,2,1,"mat-cell",15),e.BQk(),e.ynx(56,26),e.YNc(57,Fe,1,0,"mat-header-cell",12),e.YNc(58,$e,11,1,"mat-cell",27),e.BQk(),e.YNc(59,Ye,1,0,"mat-header-row",28),e.YNc(60,Ge,1,0,"mat-row",29),e.qZA(),e.YNc(61,Ie,2,3,"app-table-state",30),e.YNc(62,qe,1,4,"mat-paginator",31),e.qZA()),2&a){const r=e.MAs(15);e.xp6(8),e.s9C("matBadge",o.getFilterCount()),e.xp6(3),e.Q6J("matMenuTriggerFor",r),e.xp6(10),e.Q6J("visible",o.search),e.xp6(1),e.Q6J("visible",o.selection.hasValue()),e.xp6(2),e.hij("",o.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",o.sortBy),e.Q6J("dataSource",o.dataSource),e.xp6(33),e.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===o.count),e.xp6(1),e.Q6J("ngIf",o.count>0)}},dependencies:[s.O5,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,M.NW,_e.R,de.H,ge.N,F.oG,R.VK,R.OP,R.p6,V.Hw,h.lW,U.YE,U.nU,$.k,s.Ov,s.uU],encapsulation:2}),t})()}];let Be=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Y.Bz.forChild(Qe),Y.Bz]}),t})();var Pe=l(7775);let ke=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[v],imports:[s.ez,u.u5,u.UX,Be,c.Is,q.Bb,I.o9,m.p0,M.TU,D.c,Q.U,Pe.B,J.n,F.p9,R.Tx,V.Ps,h.ot,L.LD,B.T5,P.AV,k.ie,U.JX,$.g,b.XK,j.QW,z.Cq]}),t})()}}]);