"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[842],{2842:(Me,J,l)=>{l.r(J),l.d(J,{ValueReferencesModule:()=>ze});var p=l(9808),B=l(9764),Y=l(7531),$=l(5245),T=l(7423),w=l(6114),r=l(2349),z=l(1079),c=l(6346),F=l(6087),M=l(1575),q=l(7446),R=l(4107),u=l(3075),j=l(2081),x=l(2181),Q=l(7238),G=l(7544),E=l(4623),V=l(4847),D=l(508),H=l(773),K=l(9224),L=l(5467),h=l(2986),W=l(675),O=l(3869),C=l(5701),m=l(4850),A=l(3953),f=l(520),e=l(5e3);let y=(()=>{class a{constructor(t){this.http=t,this.path="v1/laboratory-management/value-operations"}getValueOperations(t){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(f.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})(),U=(()=>{class a{constructor(t){this.http=t,this.path="v1/common-types/sexes"}getSexes(t){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(f.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})(),S=(()=>{class a{constructor(t){this.http=t,this.path="v1/common-types/age-groups"}getAgeGroups(t){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(f.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})(),I=(()=>{class a{constructor(t){this.http=t,this.path="v1/common-types/data-units"}getDataUnites(t){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(f.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})(),N=(()=>{class a{constructor(t){this.http=t,this.path="v1/laboratory-management/value-references"}getValueReferences(t){return this.http.get(`${this.path}`,{params:new f.LE({fromObject:t})})}createValueReference(t){return this.http.post(`${this.path}`,t)}deleteValueReference(t){return this.http.delete(`${this.path}/${t}`)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(f.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var _=l(7093),k=l(7322),b=l(5006);function X(a,n){1&a&&e._UZ(0,"app-alert",17),2&a&&e.Q6J("alert",n.ngIf)}function P(a,n){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.name)}}function ee(a,n){1&a&&(e.TgZ(0,"div",6)(1,"mat-form-field",4)(2,"label"),e._UZ(3,"input",19),e.qZA()(),e.TgZ(4,"mat-form-field",4)(5,"label"),e._UZ(6,"input",20),e.qZA()()())}function te(a,n){1&a&&(e.TgZ(0,"div",6)(1,"mat-form-field",4)(2,"label"),e._UZ(3,"input",21),e.qZA()()())}function ae(a,n){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.name)}}function ne(a,n){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function oe(a,n){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function le(a,n){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}let ie=(()=>{class a extends O.a{constructor(t,o,i,s,g,v,Z,d){super(d,Z.group({description:[null,[]],testTypeId:[null,[u.kI.required]],valueOperation:[null,[u.kI.required]],sexId:[null,[]],ageGroupId:[null,[u.kI.required]],dataUnitId:[null,[]],value:[null,[]],start:[null,[]],end:[null,[]]})),this.valueReferenceService=t,this.valueOperationService=o,this.testTypeService=i,this.sexService=s,this.ageGroupService=g,this.dataUnitService=v,this.fb=Z,this.dialog=d,this.testTypes$=null,this.valueOperations$=null,this.sexes$=null,this.ageGroups$=null,this.dataUnits$=null,this.getTestTypes(),this.getValueOperations(),this.getSexes(),this.getAgeGroups(),this.getDataUnits()}getTestTypes(){this.testTypes$=this.testTypeService.getTestTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getValueOperations(){this.valueOperations$=this.valueOperationService.getValueOperations({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getDataUnits(){this.dataUnits$=this.dataUnitService.getDataUnites({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getSexes(){this.sexes$=this.sexService.getSexes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getAgeGroups(){this.ageGroups$=this.ageGroupService.getAgeGroups({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}isRange(){var t,o;return"<>"===(null===(t=this.form.value.valueOperation)||void 0===t?void 0:t.code)||"<==>"==(null===(o=this.form.value.valueOperation)||void 0===o?void 0:o.code)}handleSubmit(){const t=this.form.value;this.valueReferenceService.createValueReference({description:t.description,testTypeId:t.testTypeId,valueOperationId:t.valueOperation.id,ageGroupId:t.ageGroupId,dataUnitId:t.dataUnitId,sexId:t.sexId,start:t.start,end:t.end,value:t.value}).pipe((0,C.sU)(this.indicator$)).pipe((0,C.S3)(this.alert$)).pipe((0,h.q)(1)).subscribe(o=>{this.close(o)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(N),e.Y36(y),e.Y36(A.D),e.Y36(U),e.Y36(S),e.Y36(I),e.Y36(u.qu),e.Y36(r.so))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-value-references-create"]],features:[e._Bn([A.D,y,U,S,I]),e.qOj],decls:44,vars:24,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row"],["fxFlex","1 1 100%"],["autocomplete","off","formControlName","description","matInput","","placeholder","\u0627\u0644\u0648\u0635\u0641"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["formControlName","valueOperation","placeholder","\u0627\u0644\u0639\u0645\u0644\u064a\u0629"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px",4,"ngIf"],["formControlName","dataUnitId","placeholder","\u0627\u0644\u0648\u062d\u062f\u0629"],["formControlName","testTypeId","placeholder","\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"],["formControlName","sexId","placeholder","\u0627\u0644\u062c\u0646\u0633"],["formControlName","ageGroupId","placeholder","\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"alert"],[3,"value"],["autocomplete","off","formControlName","start","matInput","","placeholder","\u0627\u0644\u0628\u062f\u0627\u064a\u0629"],["autocomplete","off","formControlName","end","matInput","","placeholder","\u0627\u0644\u0646\u0647\u0627\u064a\u0629"],["autocomplete","off","formControlName","value","matInput","","placeholder","\u0627\u0644\u0642\u064a\u0645\u0629"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u0625\u0646\u0634\u0627\u0621"),e.qZA(),e.YNc(2,X,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"label"),e._UZ(9,"input",5),e.qZA()()(),e.TgZ(10,"div",6)(11,"mat-form-field",4)(12,"mat-select",7),e.YNc(13,P,2,2,"mat-option",8),e.ALo(14,"async"),e.qZA()()(),e.YNc(15,ee,7,0,"div",9),e.YNc(16,te,4,0,"div",9),e.TgZ(17,"div",6)(18,"mat-form-field",4)(19,"mat-select",10),e.YNc(20,ae,2,2,"mat-option",8),e.ALo(21,"async"),e.qZA()()(),e.TgZ(22,"div",6)(23,"mat-form-field",4)(24,"mat-select",11),e.YNc(25,ne,2,2,"mat-option",8),e.ALo(26,"async"),e.qZA()()(),e.TgZ(27,"div",6)(28,"mat-form-field",4)(29,"mat-select",12)(30,"mat-option"),e._uU(31,"-"),e.qZA(),e.YNc(32,oe,2,2,"mat-option",8),e.ALo(33,"async"),e.qZA()(),e.TgZ(34,"mat-form-field",4)(35,"mat-select",13),e.YNc(36,le,2,2,"mat-option",8),e.ALo(37,"async"),e.qZA()()()()(),e.TgZ(38,"mat-dialog-actions",14)(39,"button",15),e.NdJ("click",function(){return o.close()}),e._uU(40,"\u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.TgZ(41,"button",16),e.NdJ("click",function(){return o.submit()}),e.ALo(42,"async"),e._uU(43," \u062d\u0641\u0638 "),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,10,o.alert$)),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("ngForOf",e.lcZ(14,12,o.valueOperations$)),e.xp6(2),e.Q6J("ngIf",o.isRange()),e.xp6(1),e.Q6J("ngIf",!o.isRange()),e.xp6(4),e.Q6J("ngForOf",e.lcZ(21,14,o.dataUnits$)),e.xp6(5),e.Q6J("ngForOf",e.lcZ(26,16,o.testTypes$)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(33,18,o.sexes$)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(37,20,o.ageGroups$)),e.xp6(5),e.Q6J("disabled",e.lcZ(42,22,o.indicator$)))},dependencies:[p.sg,p.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,r.uh,r.xY,r.H8,D.ey,_.xw,_.SQ,_.yH,k.KE,Y.Nt,b.w,T.lW,R.gD,p.Ov],encapsulation:2}),a})();function ue(a,n){1&a&&e._UZ(0,"app-alert",14),2&a&&e.Q6J("alert",n.ngIf)}function se(a,n){if(1&a&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function re(a,n){if(1&a&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.name)}}function ce(a,n){if(1&a&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function pe(a,n){if(1&a&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function me(a,n){if(1&a&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}let fe=(()=>{class a extends O.a{constructor(t,o,i,s,g,v,Z,d){super(Z,v.group({ageGroupId:[d.ageGroupId],testTypeId:[d.testTypeId],valueOperationId:[d.valueOperationId],sexId:[d.sexId],dataUnitId:[d.dataUnitId]})),this.valueOperationService=t,this.testTypeService=o,this.sexService=i,this.ageGroupService=s,this.dataUnitService=g,this.fb=v,this.dialog=Z,this.data=d,this.testTypes$=null,this.valueOperations$=null,this.sexes$=null,this.ageGroups$=null,this.dataUnits$=null,this.getTestTypes(),this.getValueOperations(),this.getSexes(),this.getAgeGroups(),this.getDataUnits()}getTestTypes(){this.testTypes$=this.testTypeService.getTestTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getValueOperations(){this.valueOperations$=this.valueOperationService.getValueOperations({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getDataUnits(){this.dataUnits$=this.dataUnitService.getDataUnites({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getSexes(){this.sexes$=this.sexService.getSexes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}getAgeGroups(){this.ageGroups$=this.ageGroupService.getAgeGroups({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,m.U)(t=>t.items))}handleSubmit(){this.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y),e.Y36(A.D),e.Y36(U),e.Y36(S),e.Y36(I),e.Y36(u.qu),e.Y36(r.so),e.Y36(r.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-value-references-filter"]],features:[e._Bn([A.D,y,U,S,I]),e.qOj],decls:46,vars:22,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","valueOperationId","placeholder","\u0627\u0644\u0639\u0645\u0644\u064a\u0629"],[3,"value",4,"ngFor","ngForOf"],["formControlName","dataUnitId","placeholder","\u0627\u0644\u0648\u062d\u062f\u0629"],["formControlName","testTypeId","placeholder","\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"],["formControlName","sexId","placeholder","\u0627\u0644\u062c\u0646\u0633"],["formControlName","ageGroupId","placeholder","\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"alert"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0646\u062a\u0627\u0626\u062c"),e.qZA(),e.YNc(2,ue,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"mat-select",5)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,se,2,2,"mat-option",6),e.ALo(12,"async"),e.qZA()()(),e.TgZ(13,"div",3)(14,"mat-form-field",4)(15,"mat-select",7)(16,"mat-option"),e._uU(17,"-"),e.qZA(),e.YNc(18,re,2,2,"mat-option",6),e.ALo(19,"async"),e.qZA()()(),e.TgZ(20,"div",3)(21,"mat-form-field",4)(22,"mat-select",8)(23,"mat-option"),e._uU(24,"-"),e.qZA(),e.YNc(25,ce,2,2,"mat-option",6),e.ALo(26,"async"),e.qZA()()(),e.TgZ(27,"div",3)(28,"mat-form-field",4)(29,"mat-select",9)(30,"mat-option"),e._uU(31,"-"),e.qZA(),e.YNc(32,pe,2,2,"mat-option",6),e.ALo(33,"async"),e.qZA()(),e.TgZ(34,"mat-form-field",4)(35,"mat-select",10)(36,"mat-option"),e._uU(37,"-"),e.qZA(),e.YNc(38,me,2,2,"mat-option",6),e.ALo(39,"async"),e.qZA()()()()(),e.TgZ(40,"mat-dialog-actions",11)(41,"button",12),e.NdJ("click",function(){return o.close()}),e._uU(42,"\u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.TgZ(43,"button",13),e.NdJ("click",function(){return o.submit()}),e.ALo(44,"async"),e._uU(45," \u062d\u0641\u0638 "),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,8,o.alert$)),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngForOf",e.lcZ(12,10,o.valueOperations$)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(19,12,o.dataUnits$)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(26,14,o.testTypes$)),e.xp6(7),e.Q6J("ngForOf",e.lcZ(33,16,o.sexes$)),e.xp6(6),e.Q6J("ngForOf",e.lcZ(39,18,o.ageGroups$)),e.xp6(5),e.Q6J("disabled",e.lcZ(44,20,o.indicator$)))},dependencies:[p.sg,p.O5,u._Y,u.JJ,u.JL,u.sg,u.u,r.uh,r.xY,r.H8,D.ey,_.xw,_.SQ,_.yH,k.KE,b.w,T.lW,R.gD,p.Ov],encapsulation:2}),a})();function de(a,n){1&a&&e._UZ(0,"app-alert",5),2&a&&e.Q6J("alert",n.ngIf)}let ge=(()=>{class a extends O.a{constructor(t,o,i){super(o,new u.cw({})),this.valueReferenceService=t,this.dialog=o,this.data=i}handleSubmit(){this.valueReferenceService.deleteValueReference(this.data).pipe((0,C.sU)(this.indicator$)).pipe((0,C.S3)(this.alert$)).pipe((0,h.q)(1)).subscribe(()=>{this.close(this.data)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(N),e.Y36(r.so),e.Y36(r.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-value-references-value-reference-delete"]],features:[e.qOj],decls:13,vars:6,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"disabled","click"],[3,"alert"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"\u062d\u0630\u0641"),e.qZA(),e.YNc(2,de,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"p"),e._uU(6,"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631\u061f"),e.qZA()(),e.TgZ(7,"mat-dialog-actions",2)(8,"button",3),e.NdJ("click",function(){return o.close()}),e._uU(9,"Close"),e.qZA(),e.TgZ(10,"button",4),e.NdJ("click",function(){return o.submit()}),e.ALo(11,"async"),e._uU(12," \u062d\u0630\u0641 "),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,o.alert$)),e.xp6(8),e.Q6J("disabled",e.lcZ(11,4,o.indicator$)))},dependencies:[p.O5,r.uh,r.xY,r.H8,b.w,T.lW,p.Ov],encapsulation:2}),a})();var he=l(9779),_e=l(7280);function ve(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mat-header-cell",32)(1,"mat-checkbox",33),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw();return e.KtG(i?s.masterToggle():null)}),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function Te(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mat-cell",32)(1,"mat-checkbox",34),e.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const g=e.CHM(t).$implicit,v=e.oxw();return e.KtG(i?v.selection.toggle(g):null)}),e.qZA()()}if(2&a){const t=n.$implicit,o=e.oxw();e.xp6(1),e.Q6J("checked",o.selection.isSelected(t))}}function Ze(a,n){if(1&a&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&a){const t=n.$implicit,o=e.oxw();e.uIk("colspan",o.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",t===o.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",t.description," ")}}function xe(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," #"),e.qZA())}function Ce(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.id," ")}}function Ae(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0648\u0635\u0641"),e.qZA())}function ye(a,n){if(1&a&&(e.TgZ(0,"mat-cell")(1,"div",36)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&a){const t=n.$implicit;e.xp6(4),e.hij(" ",t.description," ")}}function Ue(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0646\u0645\u0637 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631"),e.qZA())}function Se(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.testType.name," ")}}function Ie(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629"),e.qZA())}function Ne(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.ageGroup.name," ")}}function Re(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u062c\u0646\u0633"),e.qZA())}function Ve(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",null==t.sex?null:t.sex.name," ")}}function De(a,n){1&a&&(e.TgZ(0,"mat-header-cell",35),e._uU(1," \u0627\u0644\u0648\u062d\u062f\u0629"),e.qZA())}function Oe(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",null==t.dataUnit?null:t.dataUnit.name," ")}}function be(a,n){1&a&&(e.TgZ(0,"mat-header-cell"),e._uU(1," \u0627\u0644\u0642\u064a\u0645"),e.qZA())}function Je(a,n){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=n.$implicit,o=e.oxw();e.xp6(1),e.hij(" ",o.displayValues(t)," ")}}function Ye(a,n){1&a&&e._UZ(0,"mat-header-cell",32)}function $e(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.expandedElement=s.expandedElement===i?null:i)}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&a){const t=e.oxw().$implicit,o=e.oxw();e.xp6(2),e.Oqu(o.expandedElement===t?"expand_less":"expand_more")}}function Fe(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mat-cell",37),e.YNc(1,$e,3,1,"button",38),e.TgZ(2,"button",6)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"mat-menu",null,39)(7,"button",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.openValueReferenceDeleteComponent(s))}),e.TgZ(8,"mat-icon",40),e._uU(9,"delete"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"\u062d\u0630\u0641"),e.qZA()()()()}if(2&a){const t=e.MAs(6);e.xp6(1),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("matMenuTriggerFor",t)}}function qe(a,n){1&a&&e._UZ(0,"mat-header-row")}function Qe(a,n){1&a&&e._UZ(0,"mat-row")}function Ge(a,n){1&a&&(e.TgZ(0,"div",42)(1,"mat-icon",43),e._uU(2,"access_operations"),e.qZA(),e.TgZ(3,"span",44),e._uU(4,"No Items Found"),e.qZA(),e.TgZ(5,"span",45),e._uU(6,"Please add items to display them"),e.qZA()())}const Le=function(){return[10,25,50,100]};function ke(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"mat-paginator",46),e.NdJ("page",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.onPageChange(i.pageIndex,i.pageSize))}),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("length",t.count)("pageSize",t.pageSize)("pageSizeOptions",e.DdM(3,Le))}}const Be=[{path:"",component:(()=>{class a extends W.a{constructor(t,o){super(),this.dialog=t,this.analysisTypeService=o,this.displayedColumns=["TestType","AgeGroup","Sex","DataUnit","Data","menu"],this.filter={},this.get()}openCreateComponent(){this.dialog.open(ie,{autoFocus:!0,width:"480px"}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{o&&this.add(o)})}openFilterComponent(){this.dialog.open(fe,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,h.q)(1)).subscribe(o=>{o&&(this.filter=o,this.get())})}openValueReferenceDeleteComponent(t){this.dialog.open(ge,{autoFocus:!0,width:"480px",data:t.id}).afterClosed().pipe((0,h.q)(1)).subscribe(i=>{i&&this.delete(i)})}displayValues(t){return t.value?t.value:`${t.start} - ${t.end}`}get(){const t={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,description:this.filterValue};this.filter.valueOperationId&&(t.valueOperationId=this.filter.valueOperationId),this.filter.ageGroupId&&(t.ageGroupId=this.filter.ageGroupId),this.filter.dataUnitId&&(t.dataUnitId=this.filter.dataUnitId),this.filter.sexId&&(t.sexId=this.filter.sexId),this.filter.testTypeId&&(t.testTypeId=this.filter.testTypeId),this.analysisTypeService.getValueReferences(t).pipe((0,h.q)(1)).subscribe(o=>{this.set(o.count,o.items)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(r.uw),e.Y36(N))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-laboratory-management-value-references"]],features:[e.qOj],decls:60,vars:12,consts:[[1,"page-container"],[1,"page-header","table-header"],[1,"page-title"],[1,"spacer"],["mat-icon-button","","matTooltip","S\xf6k",3,"click"],["mat-icon-button","","matTooltip","Filter","matBadgeSize","small",3,"matBadge","click"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",1,"page-content",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","Description"],["matColumnDef","TestType"],["matColumnDef","AgeGroup"],["matColumnDef","Sex"],["matColumnDef","DataUnit"],["matColumnDef","Data"],[4,"matHeaderCellDef"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["class","empty-state",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],[1,"table-cell-stacked"],[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"click",4,"ngIf"],["itemMenu","matMenu"],["color","warn"],["mat-icon-button","",3,"click"],[1,"empty-state"],[1,"icon"],[1,"title"],[1,"subtitle"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3,"\u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629"),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return o.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"button",6)(12,"mat-icon"),e._uU(13,"more_vert"),e.qZA()(),e.TgZ(14,"mat-menu",null,7)(16,"button",8),e.NdJ("click",function(){return o.openCreateComponent()}),e.TgZ(17,"mat-icon"),e._uU(18,"add"),e.qZA(),e.TgZ(19,"span"),e._uU(20,"\u0625\u0636\u0627\u0641\u0629"),e.qZA()()()(),e.TgZ(21,"app-table-search",9),e.NdJ("changed",function(s){return o.onSearch(s)})("closed",function(){return o.onSearchClose()}),e.qZA(),e.TgZ(22,"app-table-selection",10)(23,"span"),e._uU(24),e.qZA(),e._UZ(25,"span",3),e.qZA(),e.TgZ(26,"mat-table",11),e.NdJ("matSortChange",function(s){return o.onSort(s.active,s.direction)}),e.ynx(27,12),e.YNc(28,ve,2,2,"mat-header-cell",13),e.YNc(29,Te,2,1,"mat-cell",14),e.BQk(),e.ynx(30,15),e.YNc(31,Ze,4,3,"mat-cell",16),e.BQk(),e.ynx(32,17),e.YNc(33,xe,2,0,"mat-header-cell",18),e.YNc(34,Ce,2,1,"mat-cell",16),e.BQk(),e.ynx(35,19),e.YNc(36,Ae,2,0,"mat-header-cell",18),e.YNc(37,ye,5,1,"mat-cell",16),e.BQk(),e.ynx(38,20),e.YNc(39,Ue,2,0,"mat-header-cell",18),e.YNc(40,Se,2,1,"mat-cell",16),e.BQk(),e.ynx(41,21),e.YNc(42,Ie,2,0,"mat-header-cell",18),e.YNc(43,Ne,2,1,"mat-cell",16),e.BQk(),e.ynx(44,22),e.YNc(45,Re,2,0,"mat-header-cell",18),e.YNc(46,Ve,2,1,"mat-cell",16),e.BQk(),e.ynx(47,23),e.YNc(48,De,2,0,"mat-header-cell",18),e.YNc(49,Oe,2,1,"mat-cell",16),e.BQk(),e.ynx(50,24),e.YNc(51,be,2,0,"mat-header-cell",25),e.YNc(52,Je,2,1,"mat-cell",16),e.BQk(),e.ynx(53,26),e.YNc(54,Ye,1,0,"mat-header-cell",13),e.YNc(55,Fe,12,2,"mat-cell",27),e.BQk(),e.YNc(56,qe,1,0,"mat-header-row",28),e.YNc(57,Qe,1,0,"mat-row",29),e.qZA(),e.YNc(58,Ge,7,0,"div",30),e.YNc(59,ke,1,4,"mat-paginator",31),e.qZA()),2&t){const i=e.MAs(15);e.xp6(8),e.s9C("matBadge",o.getFilterCount()),e.xp6(3),e.Q6J("matMenuTriggerFor",i),e.xp6(10),e.Q6J("visible",o.search),e.xp6(1),e.Q6J("visible",o.selection.hasValue()),e.xp6(2),e.hij("",o.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",o.sortBy),e.Q6J("dataSource",o.dataSource),e.xp6(30),e.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===o.count),e.xp6(1),e.Q6J("ngIf",o.count>0)}},dependencies:[p.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,F.NW,he.R,_e.S,q.oG,x.VK,x.OP,x.p6,$.Hw,T.lW,Q.gM,V.YE,V.nU,G.k],styles:[".test[_ngcontent-%COMP%]{width:400px}"]}),a})()}];let we=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[L.Bz.forChild(Be),L.Bz]}),a})(),ze=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[N],imports:[p.ez,u.u5,u.UX,we,r.Is,z.Bb,B.o9,c.p0,F.TU,Y.c,M.U,w.n,q.p9,x.Tx,$.Ps,T.ot,R.LD,j.T5,Q.AV,E.ie,V.JX,G.g,D.XK,K.QW,H.Cq]}),a})()}}]);