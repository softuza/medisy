"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[164],{3164:(G,p,l)=>{l.r(p),l.d(p,{PersonsModule:()=>he});var _=l(6895),O=l(5823),m=l(4144),N=l(7392),M=l(4859),S=l(5412),U=l(7957),r=l(7155),L=l(8739),D=l(6709),I=l(4385),c=l(4006),B=l(6257),A=l(8255),z=l(266),J=l(6338),C=l(6308),x=l(3238),Q=l(1572),X=l(3546),v=l(4512),b=l(2472),Z=l(5698),j=l(2700),H=l(777),h=l(9939),E=(()=>{return(t=E||(E={})).Mr="Mr",t.Mrs="Mrs",t.Miss="Miss",t.Ms="Ms",E;var t})(),u=(()=>{return(t=u||(u={})).Male="Male",t.Female="Female",u;var t})(),e=l(4650),R=l(1576),f=l(9549),k=l(1921),d=l(9602);let $=(()=>{class t{transform(n){switch(n){case u.Female:return "Female";case u.Male:return "Male";default:return""}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"sexI18n",type:t,pure:!0}),t})(),y=(()=>{class t{transform(n){switch(n){case E.Miss:return "Miss";case E.Mr:return "Mr";case E.Mrs:return "Mrs";case E.Ms:return "Ms";default:return""}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"titleI18n",type:t,pure:!0}),t})();function w(t,a){1&t&&e._UZ(0,"softuza-medisy-alert",21),2&t&&e.Q6J("alert",a.ngIf)}function K(t,a){if(1&t&&(e.TgZ(0,"mat-option",22),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=a.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}function V(t,a){if(1&t&&(e.TgZ(0,"mat-option",22),e._uU(1),e.ALo(2,"titleI18n"),e.qZA()),2&t){const n=a.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}let W=(()=>{class t extends H.a{constructor(n,o,s){super(o,n.group({sex:[s.sex],title:[s.title],startBirthDate:[s.startBirthDate],endBirthDate:[s.endBirthDate]})),this.fb=n,this.dialog=o,this.data=s,this.sexes=Object.values(u),this.titles=Object.values(E)}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.qu),e.Y36(S.so),e.Y36(S.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons-filter"]],features:[e._Bn([h.R]),e.qOj],decls:36,vars:13,consts:function(){let a,n,o,s,i,T,g,Y;return a="Filter Results",n="Sex",o="Title",s="BirthDate",i="Start date",T="End date",g="Close",Y="Save",[["mat-dialog-title",""],a,[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","sex","placeholder",n],[3,"value",4,"ngFor","ngForOf"],["formControlName","title","placeholder",o],["fxLayout","row","fxLayoutGap","8px"],s,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",i,"formControlName","startBirthDate"],["matEndDate","","placeholder",T,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],g,["mat-flat-button","","color","primary",3,"disabled","click"],Y,[3,"alert"],[3,"value"]]},template:function(n,o){if(1&n&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,w,1,1,"softuza-medisy-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-select",6)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,K,3,4,"mat-option",7),e.qZA()()(),e.TgZ(12,"div",4)(13,"mat-form-field",5)(14,"mat-select",8)(15,"mat-option"),e._uU(16,"-"),e.qZA(),e.YNc(17,V,3,4,"mat-option",7),e.qZA()()(),e.TgZ(18,"div",9)(19,"mat-form-field",5)(20,"mat-label"),e.SDv(21,10),e.qZA(),e.TgZ(22,"mat-date-range-input",11),e._UZ(23,"input",12)(24,"input",13),e.qZA(),e.TgZ(25,"mat-hint"),e._uU(26,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(27,"mat-datepicker-toggle",14)(28,"mat-date-range-picker",null,15),e.qZA()()()(),e.TgZ(30,"mat-dialog-actions",16)(31,"button",17),e.NdJ("click",function(){return o.close()}),e.SDv(32,18),e.qZA(),e.TgZ(33,"button",19),e.NdJ("click",function(){return o.submit()}),e.SDv(34,20),e.ALo(35,"async"),e.qZA()()),2&n){const s=e.MAs(29);e.xp6(2),e.Q6J("ngIf",e.lcZ(3,9,o.alert$)),e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngForOf",o.sexes),e.xp6(6),e.Q6J("ngForOf",o.titles),e.xp6(5),e.Q6J("rangePicker",s)("comparisonStart",o.form.controls.startBirthDate.value)("comparisonEnd",o.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",s),e.xp6(6),e.Q6J("disabled",e.lcZ(35,11,o.indicator$))}},dependencies:[_.sg,_.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,S.uh,S.xY,S.H8,x.ey,R.xw,R.SQ,R.yH,f.KE,f.bx,f.hX,f.R9,k.w,M.lW,I.gD,d.nW,d.wx,d.zY,d.By,d._g,_.Ov,$,y],encapsulation:2}),t})();var q=l(5174),ee=l(6734),te=l(172),F=l(2673);function ne(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",25)(1,"mat-checkbox",26),e.NdJ("change",function(s){e.CHM(n);const i=e.oxw();return e.KtG(s?i.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function oe(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",25)(1,"mat-checkbox",27),e.NdJ("click",function(s){return s.stopPropagation()})("change",function(s){const T=e.CHM(n).$implicit,g=e.oxw();return e.KtG(s?g.selection.toggle(T):null)}),e.qZA()()}if(2&t){const n=a.$implicit,o=e.oxw();e.xp6(1),e.Q6J("checked",o.selection.isSelected(n))}}function ae(t,a){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const n=a.$implicit,o=e.oxw();e.uIk("colspan",o.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",n===o.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",n.description," ")}}function le(t,a){1&t&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," #"),e.qZA())}function se(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function ie(t,a){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,29),e.qZA())}function re(t,a){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",30)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const n=a.$implicit,o=e.oxw();e.xp6(4),e.hij(" ",o.formatName(n)," ")}}function _e(t,a){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,31),e.qZA())}function ce(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,n.sex)," ")}}function me(t,a){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,32),e.qZA())}function Ee(t,a){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.birthDate,"medium")," ")}}function Se(t,a){1&t&&e._UZ(0,"mat-header-cell",25)}function Pe(t,a){if(1&t&&(e.TgZ(0,"mat-cell",33)(1,"button",34)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e._UZ(4,"mat-menu",null,35),e.qZA()),2&t){const n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function ue(t,a){1&t&&e._UZ(0,"mat-header-row")}function de(t,a){1&t&&e._UZ(0,"mat-row")}function Me(t,a){if(1&t&&(e._UZ(0,"softuza-medisy-table-state",36),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const pe=function(){return[10,25,50,100]};function Ne(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",37),e.NdJ("page",function(s){e.CHM(n);const i=e.oxw();return e.KtG(i.onPageChange(s.pageIndex,s.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,pe))}}const fe=[{path:"",component:(()=>{class t extends j.a{constructor(n,o){super(),this.dialog=n,this.personService=o,this.displayedColumns=["Name","Sex","BirthDate","menu"],this.filter={},this.sortBy="CreatedAt",this.get()}openFilterComponent(){this.dialog.open(W,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,Z.q)(1)).subscribe(o=>{o&&(this.filter=o,this.get())})}formatName(n){return n.names?`${n.names[0].firstName} ${n.names[0].lastName}`:""}get(){const n={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,query:this.filterValue};this.filter.sex&&(n.sex=this.filter.sex),this.filter.title&&(n.title=this.filter.title),this.filter.startBirthDate&&(n.startBirthDate=this.filter.startBirthDate.toISOString()),this.filter.endBirthDate&&(n.endBirthDate=this.filter.endBirthDate.toISOString()),this.personService.getPersons(n).pipe((0,b.sU)(this.indicator$)).pipe((0,Z.q)(1)).subscribe(o=>{this.set(o.count,o.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S.uw),e.Y36(h.R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons"]],features:[e.qOj],decls:41,vars:11,consts:function(){let a,n,o,s;return a="Persons",n="Name",o="Sex",s="BirthDate",[[1,"header-basic"],[1,"title"],a,[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","Name"],["matColumnDef","Sex"],["matColumnDef","BirthDate"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],o,s,[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(n,o){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return o.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"softuza-medisy-search-bar",6),e.NdJ("changed",function(i){return o.onSearch(i)})("closed",function(){return o.onSearchClose()}),e.qZA()(),e.TgZ(12,"softuza-medisy-table-selection",7)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",8),e.NdJ("matSortChange",function(i){return o.onSort(i.active,i.direction)}),e.ynx(17,9),e.YNc(18,ne,2,2,"mat-header-cell",10),e.YNc(19,oe,2,1,"mat-cell",11),e.BQk(),e.ynx(20,12),e.YNc(21,ae,4,3,"mat-cell",13),e.BQk(),e.ynx(22,14),e.YNc(23,le,2,0,"mat-header-cell",15),e.YNc(24,se,2,1,"mat-cell",13),e.BQk(),e.ynx(25,16),e.YNc(26,ie,2,0,"mat-header-cell",15),e.YNc(27,re,5,1,"mat-cell",13),e.BQk(),e.ynx(28,17),e.YNc(29,_e,2,0,"mat-header-cell",15),e.YNc(30,ce,3,3,"mat-cell",13),e.BQk(),e.ynx(31,18),e.YNc(32,me,2,0,"mat-header-cell",15),e.YNc(33,Ee,3,4,"mat-cell",13),e.BQk(),e.ynx(34,19),e.YNc(35,Se,1,0,"mat-header-cell",10),e.YNc(36,Pe,6,1,"mat-cell",20),e.BQk(),e.YNc(37,ue,1,0,"mat-header-row",21),e.YNc(38,de,1,0,"mat-row",22),e.qZA(),e.YNc(39,Me,2,3,"softuza-medisy-table-state",23),e.YNc(40,Ne,1,4,"mat-paginator",24),e.qZA()),2&n&&(e.xp6(8),e.s9C("matBadge",o.getFilterCount()),e.xp6(3),e.Q6J("visible",o.search),e.xp6(1),e.Q6J("visible",o.selection.hasValue()),e.xp6(2),e.hij("",o.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",o.sortBy),e.Q6J("dataSource",o.dataSource),e.xp6(21),e.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===o.count),e.xp6(1),e.Q6J("ngIf",o.count>0))},dependencies:[_.O5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,L.NW,q.R,ee.H,te.N,D.oG,A.VK,A.p6,N.Hw,M.lW,C.YE,C.nU,F.k,_.Ov,_.uU,$],encapsulation:2}),t})()}];let Te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild(fe),v.Bz]}),t})();var ge=l(7343),Oe=l(8222),Ae=l(3813),Ce=l(4053);let he=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[h.R,y],imports:[_.ez,c.u5,c.UX,Te,S.Is,U.Bb,O.o9,r.p0,L.TU,m.c,ge.U,Oe.B,Ae.n,D.p9,A.Tx,N.Ps,M.ot,I.LD,B.T5,z.AV,J.ie,C.JX,x.XK,X.QW,F.g,d.FA,Q.Cq,Ce.L]}),t})()},4053:(G,p,l)=>{l.d(p,{L:()=>O});var _=l(4650);let O=(()=>{class m{}return m.\u0275fac=function(M){return new(M||m)},m.\u0275mod=_.oAB({type:m}),m.\u0275inj=_.cJS({}),m})()}}]);