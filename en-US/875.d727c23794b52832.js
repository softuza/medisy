"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[875],{7875:($e,R,l)=>{l.r(R),l.d(R,{LaboratoryPhonesModule:()=>De});var E=l(9808),H=l(9764),L=l(7531),y=l(5245),u=l(7423),Y=l(6114),c=l(2349),G=l(1079),T=l(6346),b=l(6087),x=l(1575),D=l(7446),A=l(4107),r=l(3075),U=l(2081),f=l(2181),B=l(7238),$=l(7544),F=l(4623),M=l(4847),P=l(508),J=l(773),X=l(9224),v=l(5467),m=l(2986),O=l(5701),Q=l(675),C=l(3869),p=(()=>{return(t=p||(p={})).Home="Home",t.Mobile="Mobile",t.Work="Work",p;var t})(),e=l(5e3),I=l(520);let S=(()=>{class t{constructor(o){this.http=o,this.path="laboratory-management/v1/phones"}getPhones(o){return this.http.get(`${this.path}`,{params:new I.LE({fromObject:o})})}createPhone(o){return this.http.post(`${this.path}`,o)}deletePhone(o){return this.http.delete(`${this.path}/${o}`)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(I.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var d=l(7093),Z=l(7322),g=l(5006);function k(t,a){1&t&&(e.ynx(0),e.SDv(1,3),e.BQk())}function z(t,a){1&t&&(e.ynx(0),e.SDv(1,4),e.BQk())}function w(t,a){1&t&&(e.ynx(0),e.SDv(1,5),e.BQk())}function q(t,a){1&t&&(e.ynx(0),e.SDv(1,6),e.BQk())}let h=(()=>{class t{constructor(){this.type=p}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-phone-type-i18n"]],inputs:{key:"key"},decls:5,vars:4,consts:function(){let a,o,n,_;return a="Home",o="Work",n="Mobile",_="Not Defined",[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],a,o,n,_]},template:function(o,n){1&o&&(e.ynx(0,0),e.YNc(1,k,2,0,"ng-container",1),e.YNc(2,z,2,0,"ng-container",1),e.YNc(3,w,2,0,"ng-container",1),e.YNc(4,q,2,0,"ng-container",2),e.BQk()),2&o&&(e.Q6J("ngSwitch",n.key),e.xp6(1),e.Q6J("ngSwitchCase",n.type.Home),e.xp6(1),e.Q6J("ngSwitchCase",n.type.Work),e.xp6(1),e.Q6J("ngSwitchCase",n.type.Mobile))},dependencies:[E.RF,E.n9,E.ED],encapsulation:2}),t})();function j(t,a){1&t&&e._UZ(0,"app-alert",16),2&t&&e.Q6J("alert",a.ngIf)}function W(t,a){if(1&t&&(e.TgZ(0,"mat-option",17),e._UZ(1,"app-phone-type-i18n",18),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.Q6J("key",o)}}let K=(()=>{class t extends C.a{constructor(o,n,_){super(_,n.group({value:[null,[r.kI.required]],description:[null,[]],phoneType:[p.Home,[r.kI.required]]})),this.laboratoryPhoneService=o,this.fb=n,this.dialog=_,this.phoneTypes=Object.keys(p).map(i=>p[i])}handleSubmit(){const o=this.form.value;this.laboratoryPhoneService.createPhone({value:o.value,description:o.description,phoneType:o.phoneType}).pipe((0,O.sU)(this.indicator$)).pipe((0,O.S3)(this.alert$)).pipe((0,m.q)(1)).subscribe(n=>{this.close(n)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(r.qu),e.Y36(c.so))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-phones-create"]],features:[e._Bn([]),e.qOj],decls:26,vars:8,consts:function(){let a,o,n,_,i,s;return a="Create",o="Description",n="Number",_="Type",i="Close",s=" Save ",[["mat-dialog-title",""],a,[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row"],["fxFlex","1 1 100%"],["autocomplete","off","formControlName","description","matInput","","placeholder",o],["autocomplete","off","formControlName","value","matInput","","placeholder",n],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["formControlName","phoneType","placeholder",_],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],i,["mat-flat-button","","color","primary",3,"disabled","click"],s,[3,"alert"],[3,"value"],[3,"key"]]},template:function(o,n){1&o&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,j,1,1,"app-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"div",4)(7,"mat-form-field",5)(8,"label"),e._UZ(9,"input",6),e.qZA()()(),e.TgZ(10,"div",4)(11,"mat-form-field",5)(12,"label"),e._UZ(13,"input",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"mat-form-field",5)(16,"mat-select",9)(17,"mat-option"),e._uU(18,"-"),e.qZA(),e.YNc(19,W,2,2,"mat-option",10),e.qZA()()()()(),e.TgZ(20,"mat-dialog-actions",11)(21,"button",12),e.NdJ("click",function(){return n.close()}),e.SDv(22,13),e.qZA(),e.TgZ(23,"button",14),e.NdJ("click",function(){return n.submit()}),e.SDv(24,15),e.ALo(25,"async"),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,n.alert$)),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(14),e.Q6J("ngForOf",n.phoneTypes),e.xp6(4),e.Q6J("disabled",e.lcZ(25,6,n.indicator$)))},dependencies:[E.sg,E.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,c.uh,c.xY,c.H8,P.ey,d.xw,d.SQ,d.yH,Z.KE,L.Nt,g.w,u.lW,A.gD,h,E.Ov],encapsulation:2}),t})();function V(t,a){1&t&&e._UZ(0,"app-alert",15),2&t&&e.Q6J("alert",a.ngIf)}function ee(t,a){if(1&t&&(e.TgZ(0,"mat-option",16),e._UZ(1,"app-phone-type-i18n",17),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.Q6J("key",o)}}let te=(()=>{class t extends C.a{constructor(o,n,_){super(n,o.group({phoneType:[_.phoneType]})),this.fb=o,this.dialog=n,this.data=_,this.phoneTypes=Object.keys(p).map(i=>p[i])}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(c.so),e.Y36(c.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-phones-filter"]],features:[e._Bn([]),e.qOj],decls:22,vars:8,consts:function(){let a,o,n,_,i;return a="Filter Results",o="Type",n="Reset",_="Close",i=" Save ",[["mat-dialog-title",""],a,[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","phoneType","placeholder",o],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-start"],["mat-button","",3,"click"],n,[1,"mat-dialog-actions-end"],_,["mat-flat-button","","color","primary",3,"disabled","click"],i,[3,"alert"],[3,"value"],[3,"key"]]},template:function(o,n){1&o&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,V,1,1,"app-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-select",6)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,ee,2,2,"mat-option",7),e.qZA()()()()(),e.TgZ(12,"mat-dialog-actions")(13,"div",8)(14,"button",9),e.NdJ("click",function(){return n.reset()}),e.SDv(15,10),e.qZA()(),e.TgZ(16,"div",11)(17,"button",9),e.NdJ("click",function(){return n.close()}),e.SDv(18,12),e.qZA(),e.TgZ(19,"button",13),e.NdJ("click",function(){return n.submit()}),e.SDv(20,14),e.ALo(21,"async"),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,n.alert$)),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(6),e.Q6J("ngForOf",n.phoneTypes),e.xp6(8),e.Q6J("disabled",e.lcZ(21,6,n.indicator$)))},dependencies:[E.sg,E.O5,r._Y,r.JJ,r.JL,r.sg,r.u,c.uh,c.xY,c.H8,P.ey,d.xw,d.SQ,d.yH,Z.KE,g.w,u.lW,A.gD,h,E.Ov],encapsulation:2}),t})();function oe(t,a){1&t&&e._UZ(0,"app-alert",9),2&t&&e.Q6J("alert",a.ngIf)}let ne=(()=>{class t extends C.a{constructor(o,n,_){super(n,new r.cw({})),this.laboratoryPhoneService=o,this.dialog=n,this.data=_}handleSubmit(){this.laboratoryPhoneService.deletePhone(this.data).pipe((0,O.sU)(this.indicator$)).pipe((0,O.S3)(this.alert$)).pipe((0,m.q)(1)).subscribe(()=>{this.close(this.data)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(c.so),e.Y36(c.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-phones-phone-delete"]],features:[e.qOj],decls:13,vars:6,consts:function(){let a,o,n,_;return a="Delete",o="Are you sure to delete the selected element?",n="Close",_=" Delete ",[["mat-dialog-title",""],a,[3,"alert",4,"ngIf"],o,[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],n,["mat-flat-button","","color","warn",3,"disabled","click"],_,[3,"alert"]]},template:function(o,n){1&o&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,oe,1,1,"app-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"p"),e.SDv(6,3),e.qZA()(),e.TgZ(7,"mat-dialog-actions",4)(8,"button",5),e.NdJ("click",function(){return n.close()}),e.SDv(9,6),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return n.submit()}),e.SDv(11,8),e.ALo(12,"async"),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,n.alert$)),e.xp6(8),e.Q6J("disabled",e.lcZ(12,4,n.indicator$)))},dependencies:[E.O5,c.uh,c.xY,c.H8,g.w,u.lW,E.Ov],encapsulation:2}),t})();var ae=l(9779),_e=l(9293),le=l(3998);function ie(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"mat-header-cell",30)(1,"mat-checkbox",31),e.NdJ("change",function(_){e.CHM(o);const i=e.oxw();return e.KtG(_?i.masterToggle():null)}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("checked",o.selection.hasValue()&&o.isAllSelected())("indeterminate",o.selection.hasValue()&&!o.isAllSelected())}}function re(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"mat-cell",30)(1,"mat-checkbox",32),e.NdJ("click",function(_){return _.stopPropagation()})("change",function(_){const s=e.CHM(o).$implicit,N=e.oxw();return e.KtG(_?N.selection.toggle(s):null)}),e.qZA()()}if(2&t){const o=a.$implicit,n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.isSelected(o))}}function ce(t,a){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const o=a.$implicit,n=e.oxw();e.uIk("colspan",n.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",o===n.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",o.description," ")}}function se(t,a){1&t&&(e.TgZ(0,"mat-header-cell",33),e._uU(1," #"),e.qZA())}function Ee(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.id," ")}}function Te(t,a){1&t&&(e.TgZ(0,"mat-header-cell",33),e.SDv(1,34),e.qZA())}function pe(t,a){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",35)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const o=a.$implicit;e.xp6(4),e.hij(" ",o.description," ")}}function Ne(t,a){1&t&&(e.TgZ(0,"mat-header-cell",33),e.SDv(1,36),e.qZA())}function me(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.value," ")}}function de(t,a){1&t&&(e.TgZ(0,"mat-header-cell",33),e._uU(1," \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u0634\u0627\u0621"),e.qZA())}function ue(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,o.createdAt,"medium")," ")}}function Oe(t,a){1&t&&(e.TgZ(0,"mat-header-cell",33),e.SDv(1,37),e.qZA())}function fe(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._UZ(1,"app-phone-type-i18n",38),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.Q6J("key",o.phoneType)}}function Se(t,a){1&t&&e._UZ(0,"mat-header-cell",30)}function Ae(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"mat-cell",39)(1,"button",6)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,40)(6,"button",8),e.NdJ("click",function(){const i=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.openPhoneDeleteComponent(i))}),e.TgZ(7,"mat-icon",41),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"\u062d\u0630\u0641"),e.qZA()()()()}if(2&t){const o=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",o)}}function Me(t,a){1&t&&e._UZ(0,"mat-header-row")}function Pe(t,a){1&t&&e._UZ(0,"mat-row")}function Ce(t,a){if(1&t&&(e._UZ(0,"app-table-state",42),e.ALo(1,"async")),2&t){const o=e.oxw();e.Q6J("loading",e.lcZ(1,1,o.indicator$))}}const ge=function(){return[10,25,50,100]};function he(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"mat-paginator",43),e.NdJ("page",function(_){e.CHM(o);const i=e.oxw();return e.KtG(i.onPageChange(_.pageIndex,_.pageSize))}),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("length",o.count)("pageSize",o.pageSize)("pageSizeOptions",e.DdM(3,ge))}}const Re=[{path:"",component:(()=>{class t extends Q.a{constructor(o,n){super(),this.dialog=o,this.laboratoryPhoneService=n,this.displayedColumns=["Value","PhoneType","CreatedAt","menu"],this.filter={},this.get()}openCreateComponent(){this.dialog.open(K,{autoFocus:!0,width:"480px"}).afterClosed().pipe((0,m.q)(1)).subscribe(n=>{n&&this.add(n)})}openFilterComponent(){this.dialog.open(te,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,m.q)(1)).subscribe(n=>{n&&(this.filter=n,this.get())})}openPhoneDeleteComponent(o){this.dialog.open(ne,{autoFocus:!0,width:"480px",data:o.id}).afterClosed().pipe((0,m.q)(1)).subscribe(_=>{_&&this.delete(_)})}get(){const o={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,value:this.filterValue};this.filter.phoneType&&(o.phoneType=this.filter.phoneType),this.laboratoryPhoneService.getPhones(o).pipe((0,O.sU)(this.indicator$)).pipe((0,m.q)(1)).subscribe(n=>{this.set(n.count,n.items)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.uw),e.Y36(S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-phones"]],features:[e.qOj],decls:54,vars:12,consts:function(){let a,o,n,_,i;return a="Phones",o="Add",n="Description",_="Phone",i="Type",[[1,"header-basic"],[1,"title"],a,[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],o,[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","Description"],["matColumnDef","Value"],["matColumnDef","CreatedAt"],["matColumnDef","PhoneType"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],_,i,[3,"key"],[1,"table-column-small","table-column-end"],["itemMenu","matMenu"],["color","warn"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(o,n){if(1&o&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return n.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"button",6)(12,"mat-icon"),e._uU(13,"more_vert"),e.qZA()(),e.TgZ(14,"mat-menu",null,7)(16,"button",8),e.NdJ("click",function(){return n.openCreateComponent()}),e.TgZ(17,"mat-icon"),e._uU(18,"add"),e.qZA(),e.TgZ(19,"span"),e.SDv(20,9),e.qZA()()(),e.TgZ(21,"app-search-bar",10),e.NdJ("changed",function(i){return n.onSearch(i)})("closed",function(){return n.onSearchClose()}),e.qZA()(),e.TgZ(22,"app-table-selection",11)(23,"span"),e._uU(24),e.qZA(),e._UZ(25,"span",3),e.qZA(),e.TgZ(26,"mat-table",12),e.NdJ("matSortChange",function(i){return n.onSort(i.active,i.direction)}),e.ynx(27,13),e.YNc(28,ie,2,2,"mat-header-cell",14),e.YNc(29,re,2,1,"mat-cell",15),e.BQk(),e.ynx(30,16),e.YNc(31,ce,4,3,"mat-cell",17),e.BQk(),e.ynx(32,18),e.YNc(33,se,2,0,"mat-header-cell",19),e.YNc(34,Ee,2,1,"mat-cell",17),e.BQk(),e.ynx(35,20),e.YNc(36,Te,2,0,"mat-header-cell",19),e.YNc(37,pe,5,1,"mat-cell",17),e.BQk(),e.ynx(38,21),e.YNc(39,Ne,2,0,"mat-header-cell",19),e.YNc(40,me,2,1,"mat-cell",17),e.BQk(),e.ynx(41,22),e.YNc(42,de,2,0,"mat-header-cell",19),e.YNc(43,ue,3,4,"mat-cell",17),e.BQk(),e.ynx(44,23),e.YNc(45,Oe,2,0,"mat-header-cell",19),e.YNc(46,fe,2,1,"mat-cell",17),e.BQk(),e.ynx(47,24),e.YNc(48,Se,1,0,"mat-header-cell",14),e.YNc(49,Ae,11,1,"mat-cell",25),e.BQk(),e.YNc(50,Me,1,0,"mat-header-row",26),e.YNc(51,Pe,1,0,"mat-row",27),e.qZA(),e.YNc(52,Ce,2,3,"app-table-state",28),e.YNc(53,he,1,4,"mat-paginator",29),e.qZA()),2&o){const _=e.MAs(15);e.xp6(8),e.s9C("matBadge",n.getFilterCount()),e.xp6(3),e.Q6J("matMenuTriggerFor",_),e.xp6(10),e.Q6J("visible",n.search),e.xp6(1),e.Q6J("visible",n.selection.hasValue()),e.xp6(2),e.hij("",n.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",n.sortBy),e.Q6J("dataSource",n.dataSource),e.xp6(24),e.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===n.count),e.xp6(1),e.Q6J("ngIf",n.count>0)}},dependencies:[E.O5,T.BZ,T.fO,T.as,T.w1,T.Dz,T.nj,T.ge,T.ev,T.XQ,T.Gk,b.NW,ae.R,_e.H,le.N,D.oG,f.VK,f.OP,f.p6,y.Hw,u.lW,M.YE,M.nU,$.k,h,E.Ov,E.uU],encapsulation:2}),t})()}];let Le=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild(Re),v.Bz]}),t})();var ye=l(7775),be=l(6849);let De=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[S],imports:[E.ez,r.u5,r.UX,Le,c.Is,G.Bb,H.o9,T.p0,b.TU,L.c,x.U,ye.B,Y.n,D.p9,f.Tx,y.Ps,u.ot,A.LD,U.T5,B.AV,F.ie,M.JX,$.g,P.XK,X.QW,J.Cq,be.L]}),t})()}}]);