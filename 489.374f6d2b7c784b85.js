"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[489],{1489:(ge,S,l)=>{l.r(S),l.d(S,{SamplesModule:()=>re});var r=l(9808),N=l(9764),U=l(7531),C=l(5245),u=l(7423),b=l(6114),p=l(2349),D=l(1079),c=l(6346),T=l(6087),Q=l(1575),x=l(7446),v=l(4107),i=l(3075),Y=l(2081),d=l(2181),B=l(7238),I=l(4623),g=l(4847),Z=l(508),M=l(773),z=l(9224),_=l(5467),y=l(2986),O=l(675),$=l(3869),E=l(4850),A=l(8593),e=l(5e3),f=l(7093),H=l(7322),L=l(5006);function R(t,o){1&t&&e._UZ(0,"app-alert",10),2&t&&e.Q6J("alert",o.ngIf)}function j(t,o){if(1&t&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}let w=(()=>{class t extends $.a{constructor(a,n,m,s){super(n,a.group({sampleTypeId:[s.sampleTypeId]})),this.fb=a,this.dialog=n,this.sampleTypeService=m,this.data=s,this.sampleTypes$=null,this.getSampleTypes()}getSampleTypes(){this.sampleTypes$=this.sampleTypeService.getSampleTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,E.U)(a=>a.items))}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(i.qu),e.Y36(p.so),e.Y36(A.B),e.Y36(p.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-laboratory-management-samples-filter"]],features:[e._Bn([A.B]),e.qOj],decls:19,vars:10,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","sampleTypeId","placeholder","\u0646\u0648\u0639 \u0627\u0644\u0639\u064a\u0646\u0629"],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"alert"],[3,"value"]],template:function(a,n){1&a&&(e.TgZ(0,"h2",0),e._uU(1,"\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0646\u062a\u0627\u0626\u062c"),e.qZA(),e.YNc(2,R,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"mat-select",5)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,j,2,2,"mat-option",6),e.ALo(12,"async"),e.qZA()()()()(),e.TgZ(13,"mat-dialog-actions",7)(14,"button",8),e.NdJ("click",function(){return n.close()}),e._uU(15,"\u0625\u063a\u0644\u0627\u0642"),e.qZA(),e.TgZ(16,"button",9),e.NdJ("click",function(){return n.submit()}),e.ALo(17,"async"),e._uU(18," \u062d\u0641\u0638 "),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,n.alert$)),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(6),e.Q6J("ngForOf",e.lcZ(12,6,n.sampleTypes$)),e.xp6(5),e.Q6J("disabled",e.lcZ(17,8,n.indicator$)))},dependencies:[r.sg,r.O5,i._Y,i.JJ,i.JL,i.sg,i.u,p.uh,p.xY,p.H8,Z.ey,f.xw,f.SQ,f.yH,H.KE,L.w,u.lW,v.gD,r.Ov],encapsulation:2}),t})();var h=l(520);let J=(()=>{class t{constructor(a){this.http=a,this.path="v1/sample-management/samples"}getSamples(a){return this.http.get(`${this.path}`,{params:new h.LE({fromObject:a})})}getSamplesCount(a){return this.http.get(`${this.path}/count`,{params:new h.LE({fromObject:a})})}getSample(a){return this.http.get(`${this.path}/${a}`)}createSample(a){return this.http.post(`${this.path}`,a)}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(h.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var G=l(9779),k=l(7280),F=l(7544);function K(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"mat-header-cell",23)(1,"mat-checkbox",24),e.NdJ("change",function(m){e.CHM(a);const s=e.oxw();return e.KtG(m?s.masterToggle():null)}),e.qZA()()}if(2&t){const a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.hasValue()&&a.isAllSelected())("indeterminate",a.selection.hasValue()&&!a.isAllSelected())}}function X(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"mat-cell",23)(1,"mat-checkbox",25),e.NdJ("click",function(m){return m.stopPropagation()})("change",function(m){const ue=e.CHM(a).$implicit,de=e.oxw();return e.KtG(m?de.selection.toggle(ue):null)}),e.qZA()()}if(2&t){const a=o.$implicit,n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.isSelected(a))}}function P(t,o){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const a=o.$implicit,n=e.oxw();e.uIk("colspan",n.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",a===n.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",a.description," ")}}function V(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1," #"),e.qZA())}function W(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.id," ")}}function q(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1," \u0627\u0644\u0627\u0633\u0645"),e.qZA())}function ee(t,o){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",27)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const a=o.$implicit;e.xp6(4),e.hij(" ",a.name," ")}}function te(t,o){1&t&&e._UZ(0,"mat-header-cell",23)}function ae(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){e.CHM(a);const m=e.oxw().$implicit,s=e.oxw();return e.KtG(s.expandedElement=s.expandedElement===m?null:m)}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&t){const a=e.oxw().$implicit,n=e.oxw();e.xp6(2),e.Oqu(n.expandedElement===a?"expand_less":"expand_more")}}function ne(t,o){if(1&t&&(e.TgZ(0,"mat-cell",28),e.YNc(1,ae,3,1,"button",29),e.TgZ(2,"button",30)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e._UZ(5,"mat-menu",null,31),e.qZA()),2&t){const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("matMenuTriggerFor",a)}}function le(t,o){1&t&&e._UZ(0,"mat-header-row")}function oe(t,o){1&t&&e._UZ(0,"mat-row")}function me(t,o){1&t&&(e.TgZ(0,"div",32)(1,"mat-icon",33),e._uU(2,"access_operations"),e.qZA(),e.TgZ(3,"span",34),e._uU(4,"No Items Found"),e.qZA(),e.TgZ(5,"span",35),e._uU(6,"Please add items to display them"),e.qZA()())}const se=function(){return[10,25,50,100]};function ce(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"mat-paginator",36),e.NdJ("page",function(m){e.CHM(a);const s=e.oxw();return e.KtG(s.onPageChange(m.pageIndex,m.pageSize))}),e.qZA()}if(2&t){const a=e.oxw();e.Q6J("length",a.count)("pageSize",a.pageSize)("pageSizeOptions",e.DdM(3,se))}}const ie=[{path:"",component:(()=>{class t extends O.a{constructor(a,n){super(),this.dialog=a,this.sampleService=n,this.displayedColumns=["menu"],this.filter={},this.get()}openFilterComponent(){this.dialog.open(w,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,y.q)(1)).subscribe(n=>{n&&(this.filter=n,this.get())})}get(){const a={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending};this.filter.sampleTypeId&&(a.sampleTypeId=this.filter.sampleTypeId),this.sampleService.getSamples(a).pipe((0,y.q)(1)).subscribe(n=>{this.set(n.count,n.items)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(p.uw),e.Y36(J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sample-management-samples"]],features:[e.qOj],decls:35,vars:11,consts:[[1,"page-container"],[1,"page-header","table-header"],[1,"page-title"],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",1,"page-content",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["class","empty-state",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],[1,"table-cell-stacked"],[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[1,"empty-state"],[1,"icon"],[1,"title"],[1,"subtitle"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3,"\u0627\u0644\u0639\u064a\u0646\u0627\u062a"),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return n.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return n.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()()(),e.TgZ(11,"app-table-search",6),e.NdJ("changed",function(s){return n.onSearch(s)})("closed",function(){return n.onSearchClose()}),e.qZA(),e.TgZ(12,"app-table-selection",7)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",8),e.NdJ("matSortChange",function(s){return n.onSort(s.active,s.direction)}),e.ynx(17,9),e.YNc(18,K,2,2,"mat-header-cell",10),e.YNc(19,X,2,1,"mat-cell",11),e.BQk(),e.ynx(20,12),e.YNc(21,P,4,3,"mat-cell",13),e.BQk(),e.ynx(22,14),e.YNc(23,V,2,0,"mat-header-cell",15),e.YNc(24,W,2,1,"mat-cell",13),e.BQk(),e.ynx(25,16),e.YNc(26,q,2,0,"mat-header-cell",15),e.YNc(27,ee,5,1,"mat-cell",13),e.BQk(),e.ynx(28,17),e.YNc(29,te,1,0,"mat-header-cell",10),e.YNc(30,ne,7,2,"mat-cell",18),e.BQk(),e.YNc(31,le,1,0,"mat-header-row",19),e.YNc(32,oe,1,0,"mat-row",20),e.qZA(),e.YNc(33,me,7,0,"div",21),e.YNc(34,ce,1,4,"mat-paginator",22),e.qZA()),2&a&&(e.xp6(8),e.s9C("matBadge",n.getFilterCount()),e.xp6(3),e.Q6J("visible",n.search),e.xp6(1),e.Q6J("visible",n.selection.hasValue()),e.xp6(2),e.hij("",n.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",n.sortBy),e.Q6J("dataSource",n.dataSource),e.xp6(15),e.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===n.count),e.xp6(1),e.Q6J("ngIf",n.count>0))},dependencies:[r.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,T.NW,G.R,k.S,x.oG,d.VK,d.p6,C.Hw,u.lW,g.YE,g.nU,F.k],styles:[".test[_ngcontent-%COMP%]{width:400px}"]}),t})()}];let pe=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.Bz.forChild(ie),_.Bz]}),t})(),re=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[J],imports:[r.ez,i.u5,i.UX,pe,p.Is,D.Bb,N.o9,c.p0,T.TU,U.c,Q.U,b.n,x.p9,d.Tx,C.Ps,u.ot,v.LD,Y.T5,B.AV,I.ie,g.JX,Z.XK,z.QW,F.g,M.Cq]}),t})()}}]);