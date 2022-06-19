"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[616],{6616:(fe,C,o)=>{o.r(C),o.d(C,{AnalysisTypesModule:()=>ye});var r=o(9808),N=o(9764),A=o(7531),_=o(5245),y=o(7423),Q=o(6114),p=o(2349),Y=o(1079),m=o(6346),x=o(6087),I=o(1575),Z=o(7446),M=o(4107),c=o(3075),F=o(2081),T=o(2181),B=o(7238),$=o(4623),g=o(4847),O=o(508),H=o(773),k=o(9224),v=o(5467),u=o(2986),d=o(5701),z=o(675),S=o(3869),w=o(4850),b=o(5013),e=o(5e3),f=o(4672),D=o(7093),J=o(7322),U=o(5006);function E(t,s){1&t&&e._UZ(0,"app-alert",10),2&t&&e.Q6J("alert",s.ngIf)}function R(t,s){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"required"),e.qZA())}let j=(()=>{class t extends S.a{constructor(n,a,l,i){super(i,l.group({name:["",[c.kI.required,c.kI.minLength(1)]],description:[null,[]],testTypes:[null,[]]})),this.analysisTypeService=n,this.testTypeService=a,this.fb=l,this.dialog=i,this.testTypes$=null,this.getTestTypes()}getTestTypes(){this.testTypes$=this.testTypeService.getTestTypes({pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}).pipe((0,w.U)(n=>n.items))}handleSubmit(){this.analysisTypeService.createAnalysisType({name:this.form.value.name,description:this.form.value.description,testTypes:this.form.value.testTypes}).pipe((0,d.sU)(this.indicator$)).pipe((0,d.S3)(this.alert$)).pipe((0,u.q)(1)).subscribe(a=>{this.close(a)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.c),e.Y36(b.D),e.Y36(c.qu),e.Y36(p.so))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-analysis-types-create"]],features:[e._Bn([b.D]),e.qOj],decls:17,vars:8,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row"],["fxFlex","1 1 100%"],["autocomplete","off","formControlName","description","matInput","","placeholder","\u0627\u0644\u0648\u0635\u0641"],[4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"disabled","click"],[3,"alert"]],template:function(n,a){1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Create"),e.qZA(),e.YNc(2,E,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",2)(6,"div",3)(7,"mat-form-field",4)(8,"label"),e._UZ(9,"input",5),e.qZA(),e.YNc(10,R,2,0,"mat-error",6),e.qZA()()()(),e.TgZ(11,"mat-dialog-actions",7)(12,"button",8),e.NdJ("click",function(){return a.close()}),e._uU(13,"Close"),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){return a.submit()}),e.ALo(15,"async"),e._uU(16," Save "),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,a.alert$)),e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(5),e.Q6J("ngIf",a.form.controls.description.hasError("required")),e.xp6(4),e.Q6J("disabled",e.lcZ(15,6,a.indicator$)))},dependencies:[r.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,p.uh,p.xY,p.H8,D.xw,D.yH,J.TO,J.KE,A.Nt,U.w,y.lW,r.Ov],encapsulation:2}),t})();function L(t,s){1&t&&e._UZ(0,"app-alert",5),2&t&&e.Q6J("alert",s.ngIf)}let G=(()=>{class t extends S.a{constructor(n,a,l){super(a,new c.cw({})),this.analysisTypeService=n,this.dialog=a,this.data=l}handleSubmit(){this.analysisTypeService.deleteAnalysisType(this.data).pipe((0,d.sU)(this.indicator$)).pipe((0,d.S3)(this.alert$)).pipe((0,u.q)(1)).subscribe(()=>{this.close(this.data)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.c),e.Y36(p.so),e.Y36(p.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-analysis-types-analysis-type-delete"]],features:[e.qOj],decls:13,vars:6,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"disabled","click"],[3,"alert"]],template:function(n,a){1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Delete"),e.qZA(),e.YNc(2,L,1,1,"app-alert",1),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"p"),e._uU(6,"Are you sure to delete selected item"),e.qZA()(),e.TgZ(7,"mat-dialog-actions",2)(8,"button",3),e.NdJ("click",function(){return a.close()}),e._uU(9,"Close"),e.qZA(),e.TgZ(10,"button",4),e.NdJ("click",function(){return a.submit()}),e.ALo(11,"async"),e._uU(12," Delete "),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,a.alert$)),e.xp6(8),e.Q6J("disabled",e.lcZ(11,4,a.indicator$)))},dependencies:[r.O5,p.uh,p.xY,p.H8,U.w,y.lW,r.Ov],encapsulation:2}),t})();var q=o(9779),K=o(7280),X=o(9293);function V(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",25)(1,"mat-checkbox",26),e.NdJ("change",function(l){e.CHM(n);const i=e.oxw();return e.KtG(l?i.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function W(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",25)(1,"mat-checkbox",27),e.NdJ("click",function(l){return l.stopPropagation()})("change",function(l){const h=e.CHM(n).$implicit,Te=e.oxw();return e.KtG(l?Te.selection.toggle(h):null)}),e.qZA()()}if(2&t){const n=s.$implicit,a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.isSelected(n))}}function P(t,s){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const n=s.$implicit,a=e.oxw();e.uIk("colspan",a.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",n===a.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",n.description," ")}}function ee(t,s){1&t&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," #"),e.qZA())}function te(t,s){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function ne(t,s){1&t&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," \u0627\u0644\u0627\u0633\u0645"),e.qZA())}function ae(t,s){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",29)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(4),e.hij(" ",n.name," ")}}function oe(t,s){1&t&&e._UZ(0,"mat-header-cell",25)}function se(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){e.CHM(n);const l=e.oxw().$implicit,i=e.oxw();return e.KtG(i.expandedElement=i.expandedElement===l?null:l)}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&t){const n=e.oxw().$implicit,a=e.oxw();e.xp6(2),e.Oqu(a.expandedElement===n?"expand_less":"expand_more")}}function le(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",30),e.YNc(1,se,3,1,"button",31),e.TgZ(2,"button",5)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"mat-menu",null,32)(7,"button",7),e.NdJ("click",function(){const i=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.openAnalysisTypeDeleteComponent(i))}),e.TgZ(8,"mat-icon",33),e._uU(9,"delete"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"\u062d\u0630\u0641"),e.qZA()()()()}if(2&t){const n=e.MAs(6);e.xp6(1),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function ie(t,s){1&t&&e._UZ(0,"mat-header-row")}function ce(t,s){1&t&&e._UZ(0,"mat-row")}function pe(t,s){if(1&t&&(e._UZ(0,"app-table-state",34),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const me=function(){return[10,25,50,100]};function re(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",35),e.NdJ("page",function(l){e.CHM(n);const i=e.oxw();return e.KtG(i.onPageChange(l.pageIndex,l.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,me))}}const ue=[{path:"",component:(()=>{class t extends z.a{constructor(n,a){super(),this.dialog=n,this.analysisTypeService=a,this.displayedColumns=["Name","menu"],this.get()}openCreateComponent(){this.dialog.open(j,{autoFocus:!0,width:"480px"}).afterClosed().pipe((0,u.q)(1)).subscribe(a=>{a&&this.add(a)})}openAnalysisTypeDeleteComponent(n){this.dialog.open(G,{autoFocus:!0,width:"480px",data:n.id}).afterClosed().pipe((0,u.q)(1)).subscribe(l=>{l&&this.delete(l)})}get(){this.analysisTypeService.getAnalysisTypes({pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,name:this.filterValue}).pipe((0,d.sU)(this.indicator$)).pipe((0,u.q)(1)).subscribe(a=>{this.set(a.count,a.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.uw),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-analysis-types"]],features:[e.qOj],decls:42,vars:11,consts:[[1,"page-container"],[1,"header-basic"],[1,"title"],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","Name"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],[1,"table-cell-stacked"],[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"click",4,"ngIf"],["itemMenu","matMenu"],["color","warn"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3,"\u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u062a\u062d\u0627\u0644\u064a\u0644"),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return a.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5)(9,"mat-icon"),e._uU(10,"more_vert"),e.qZA()(),e.TgZ(11,"mat-menu",null,6)(13,"button",7),e.NdJ("click",function(){return a.openCreateComponent()}),e.TgZ(14,"mat-icon"),e._uU(15,"add"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"\u0625\u0636\u0627\u0641\u0629"),e.qZA()()()(),e.TgZ(18,"app-table-search",8),e.NdJ("changed",function(i){return a.onSearch(i)})("closed",function(){return a.onSearchClose()}),e.qZA(),e.TgZ(19,"app-table-selection",9)(20,"span"),e._uU(21),e.qZA(),e._UZ(22,"span",3),e.qZA(),e.TgZ(23,"mat-table",10),e.NdJ("matSortChange",function(i){return a.onSort(i.active,i.direction)}),e.ynx(24,11),e.YNc(25,V,2,2,"mat-header-cell",12),e.YNc(26,W,2,1,"mat-cell",13),e.BQk(),e.ynx(27,14),e.YNc(28,P,4,3,"mat-cell",15),e.BQk(),e.ynx(29,16),e.YNc(30,ee,2,0,"mat-header-cell",17),e.YNc(31,te,2,1,"mat-cell",15),e.BQk(),e.ynx(32,18),e.YNc(33,ne,2,0,"mat-header-cell",17),e.YNc(34,ae,5,1,"mat-cell",15),e.BQk(),e.ynx(35,19),e.YNc(36,oe,1,0,"mat-header-cell",12),e.YNc(37,le,12,2,"mat-cell",20),e.BQk(),e.YNc(38,ie,1,0,"mat-header-row",21),e.YNc(39,ce,1,0,"mat-row",22),e.qZA(),e.YNc(40,pe,2,3,"app-table-state",23),e.YNc(41,re,1,4,"mat-paginator",24),e.qZA()),2&n){const l=e.MAs(12);e.xp6(8),e.Q6J("matMenuTriggerFor",l),e.xp6(10),e.Q6J("visible",a.search),e.xp6(1),e.Q6J("visible",a.selection.hasValue()),e.xp6(2),e.hij("",a.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",a.sortBy),e.Q6J("dataSource",a.dataSource),e.xp6(15),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===a.count),e.xp6(1),e.Q6J("ngIf",a.count>0)}},dependencies:[r.O5,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,x.NW,q.R,K.S,X.H,Z.oG,T.VK,T.OP,T.p6,_.Hw,y.lW,g.YE,g.nU,r.Ov],styles:[".test[_ngcontent-%COMP%]{width:400px}"]}),t})()}];let de=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild(ue),v.Bz]}),t})(),ye=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[f.c],imports:[r.ez,c.u5,c.UX,de,p.Is,Y.Bb,N.o9,m.p0,x.TU,A.c,I.U,Q.n,Z.p9,T.Tx,_.Ps,y.ot,M.LD,F.T5,B.AV,$.ie,g.JX,O.XK,k.QW,H.Cq]}),t})()}}]);