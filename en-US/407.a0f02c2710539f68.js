"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[407],{2407:(C,M,o)=>{o.r(M),o.d(M,{PersonsModule:()=>Te});var a=o(6895),m=o(4144),P=o(7392),p=o(4859),d=o(5412),h=o(7957),r=o(7155),f=o(8739),u=o(6709),E=o(4385),g=o(4006),i=o(6257),_=o(8255),I=o(266),v=o(6338),O=o(6308),L=o(3238),F=o(1572),Y=o(3546),b=o(4512),G=o(9293),x=o(5698),z=o(2700),J=o(6656),B=o(9939),Q=o(5807),X=o(8893),e=o(4650),A=o(9549),j=o(5237),T=o(9602),y=o(9373),Z=o(585);function w(t,l){1&t&&e._UZ(0,"softuza-ui-alert",19),2&t&&e.Q6J("alert",l.ngIf)}function H(t,l){if(1&t&&(e.TgZ(0,"mat-option",20),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}function k(t,l){if(1&t&&(e.TgZ(0,"mat-option",20),e._uU(1),e.ALo(2,"titleI18n"),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}let K=(()=>{class t extends J.E{constructor(n,s,c){super(s,n.group({sex:[c.sex],title:[c.title],startBirthDate:[c.startBirthDate],endBirthDate:[c.endBirthDate]})),this.fb=n,this.dialog=s,this.data=c,this.sexes=Object.values(X.m),this.titles=Object.values(Q.D)}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.qu),e.Y36(d.so),e.Y36(d.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons-filter"]],features:[e._Bn([B.R]),e.qOj],decls:33,vars:13,consts:function(){let l,n,s,c,S,R,D,U;return l="Filter Results",n="Sex",s="Title",c="BirthDate",S="Start date",R="End date",D="Close",U="Save",[["mat-dialog-title",""],l,[3,"alert",4,"ngIf"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex-1"],["formControlName","sex","placeholder",n],[3,"value",4,"ngFor","ngForOf"],["formControlName","title","placeholder",s],c,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",S,"formControlName","startBirthDate"],["matEndDate","","placeholder",R,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],D,["mat-flat-button","","color","primary",3,"disabled","click"],U,[3,"alert"],[3,"value"]]},template:function(n,s){if(1&n&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,w,1,1,"softuza-ui-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"mat-form-field",4)(7,"mat-select",5)(8,"mat-option"),e._uU(9,"-"),e.qZA(),e.YNc(10,H,3,4,"mat-option",6),e.qZA()(),e.TgZ(11,"mat-form-field",4)(12,"mat-select",7)(13,"mat-option"),e._uU(14,"-"),e.qZA(),e.YNc(15,k,3,4,"mat-option",6),e.qZA()(),e.TgZ(16,"mat-form-field",4)(17,"mat-label"),e.SDv(18,8),e.qZA(),e.TgZ(19,"mat-date-range-input",9),e._UZ(20,"input",10)(21,"input",11),e.qZA(),e.TgZ(22,"mat-hint"),e._uU(23,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(24,"mat-datepicker-toggle",12)(25,"mat-date-range-picker",null,13),e.qZA()()(),e.TgZ(27,"mat-dialog-actions",14)(28,"button",15),e.NdJ("click",function(){return s.close()}),e.SDv(29,16),e.qZA(),e.TgZ(30,"button",17),e.NdJ("click",function(){return s.submit()}),e.SDv(31,18),e.ALo(32,"async"),e.qZA()()),2&n){const c=e.MAs(26);e.xp6(2),e.Q6J("ngIf",e.lcZ(3,9,s.alert$)),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(5),e.Q6J("ngForOf",s.sexes),e.xp6(5),e.Q6J("ngForOf",s.titles),e.xp6(4),e.Q6J("rangePicker",c)("comparisonStart",s.form.controls.startBirthDate.value)("comparisonEnd",s.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",c),e.xp6(6),e.Q6J("disabled",e.lcZ(32,11,s.indicator$))}},dependencies:[a.sg,a.O5,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,d.uh,d.xY,d.H8,L.ey,A.KE,A.bx,A.hX,A.R9,j.w,p.lW,E.gD,T.nW,T.wx,T.zY,T.By,T._g,a.Ov,y.l,Z.r],encapsulation:2}),t})();var W=o(3104),V=o(7885),q=o(3748),$=o(2673);function ee(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",25)(1,"mat-checkbox",26),e.NdJ("change",function(c){e.CHM(n);const S=e.oxw();return e.KtG(c?S.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function te(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",25)(1,"mat-checkbox",27),e.NdJ("click",function(c){return c.stopPropagation()})("change",function(c){const R=e.CHM(n).$implicit,D=e.oxw();return e.KtG(c?D.selection.toggle(R):null)}),e.qZA()()}if(2&t){const n=l.$implicit,s=e.oxw();e.xp6(1),e.Q6J("checked",s.selection.isSelected(n))}}function ne(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," #"),e.qZA())}function oe(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function ae(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,29),e.qZA())}function se(t,l){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",30)(2,"div")(3,"strong")(4,"a",31),e._uU(5),e.qZA()()()()()),2&t){const n=l.$implicit,s=e.oxw();e.xp6(4),e.s9C("routerLink",n.id),e.xp6(1),e.Oqu(s.formatName(n))}}function ie(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,32),e.qZA())}function le(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,n.sex)," ")}}function re(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,33),e.qZA())}function _e(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.birthDate,"medium")," ")}}function ce(t,l){1&t&&e._UZ(0,"mat-header-cell",25)}function me(t,l){if(1&t&&(e.TgZ(0,"mat-cell",34)(1,"button",35)(2,"mat-icon",5),e._uU(3,"more_vert"),e.qZA()(),e._UZ(4,"mat-menu",null,36),e.qZA()),2&t){const n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function de(t,l){1&t&&e._UZ(0,"mat-header-row")}function Ee(t,l){1&t&&e._UZ(0,"mat-row")}function ue(t,l){if(1&t&&(e._UZ(0,"softuza-ui-table-state",37),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const ge=function(){return[10,25,50,100]};function pe(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",38),e.NdJ("page",function(c){e.CHM(n);const S=e.oxw();return e.KtG(S.onPageChange(c.pageIndex,c.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,ge))}}const Se=[{path:"",component:(()=>{class t extends z.a{constructor(n,s){super(),this.dialog=n,this.personService=s,this.displayedColumns=["Name","Sex","BirthDate","menu"],this.filter={},this.sortBy="CreatedAt",this.get()}openFilterComponent(){this.dialog.open(K,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,x.q)(1)).subscribe(s=>{s&&(this.filter=s,this.get())})}formatName(n){return n.names?`${n.names[0].firstName} ${n.names[0].lastName}`:""}get(){const n={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,query:this.filterValue};this.filter.sex&&(n.sex=this.filter.sex),this.filter.title&&(n.title=this.filter.title),this.filter.startBirthDate&&(n.startBirthDate=this.filter.startBirthDate.toISOString()),this.filter.endBirthDate&&(n.endBirthDate=this.filter.endBirthDate.toISOString()),this.personService.getPersons(n).pipe((0,G.sU)(this.indicator$)).pipe((0,x.q)(1)).subscribe(s=>{this.set(s.count,s.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.uw),e.Y36(B.R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons"]],features:[e.qOj],decls:39,vars:11,consts:function(){let l,n,s,c;return l="Persons",n="Name",s="Sex",c="BirthDate",[[1,"header-basic"],[1,"title"],l,[1,"spacer"],["mat-icon-button","",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Sex"],["matColumnDef","BirthDate"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],[3,"routerLink"],s,c,[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(n,s){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return s.search=!0}),e.TgZ(6,"mat-icon",5),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",6),e.NdJ("click",function(){return s.openFilterComponent()}),e.TgZ(9,"mat-icon",5),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"softuza-ui-search-bar",7),e.NdJ("changed",function(S){return s.onSearch(S)})("closed",function(){return s.onSearchClose()}),e.qZA()(),e.TgZ(12,"softuza-ui-table-selection",8)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",9),e.NdJ("matSortChange",function(S){return s.onSort(S.active,S.direction)}),e.ynx(17,10),e.YNc(18,ee,2,2,"mat-header-cell",11),e.YNc(19,te,2,1,"mat-cell",12),e.BQk(),e.ynx(20,13),e.YNc(21,ne,2,0,"mat-header-cell",14),e.YNc(22,oe,2,1,"mat-cell",15),e.BQk(),e.ynx(23,16),e.YNc(24,ae,2,0,"mat-header-cell",14),e.YNc(25,se,6,2,"mat-cell",15),e.BQk(),e.ynx(26,17),e.YNc(27,ie,2,0,"mat-header-cell",14),e.YNc(28,le,3,3,"mat-cell",15),e.BQk(),e.ynx(29,18),e.YNc(30,re,2,0,"mat-header-cell",14),e.YNc(31,_e,3,4,"mat-cell",15),e.BQk(),e.ynx(32,19),e.YNc(33,ce,1,0,"mat-header-cell",11),e.YNc(34,me,6,1,"mat-cell",20),e.BQk(),e.YNc(35,de,1,0,"mat-header-row",21),e.YNc(36,Ee,1,0,"mat-row",22),e.qZA(),e.YNc(37,ue,2,3,"softuza-ui-table-state",23),e.YNc(38,pe,1,4,"mat-paginator",24),e.qZA()),2&n&&(e.xp6(8),e.s9C("matBadge",s.getFilterCount()),e.xp6(3),e.Q6J("visible",s.search),e.xp6(1),e.Q6J("visible",s.selection.hasValue()),e.xp6(2),e.hij("",s.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",s.sortBy),e.Q6J("dataSource",s.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",s.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",s.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===s.count),e.xp6(1),e.Q6J("ngIf",s.count>0))},dependencies:[a.O5,b.yS,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,f.NW,W.R,V.H,q.N,u.oG,_.VK,_.p6,P.Hw,p.lW,O.YE,O.nU,$.k,a.Ov,a.uU,y.l],encapsulation:2}),t})()}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(Se),b.Bz]}),t})();var he=o(2579),Pe=o(4053),Me=o(1143),Ne=o(4001);let Te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[B.R,Z.r],imports:[a.ez,g.u5,g.UX,fe,d.Is,h.Bb,r.p0,f.TU,m.c,Ne.U,he.B,Me.n,u.p9,_.Tx,P.Ps,p.ot,E.LD,i.T5,I.AV,v.ie,O.JX,L.XK,Y.QW,$.g,T.FA,F.Cq,Pe.L]}),t})()},6656:(C,M,o)=>{o.d(M,{E:()=>P});var a=o(1135),m=o(7579);class P{constructor(d,h){this.indicator$=new a.X(!1),this.alert$=new m.x,this.dialogRef=null,this.dialogRef=d,this.form=h}reset(){Object.keys(this.form.controls).forEach(d=>{this.form?.get(d)?.setValue(null)})}submit(){!this.form||this.form.valid?this.handleSubmit():Object.keys(this.form.controls).forEach(d=>{this.form?.get(d)?.markAsTouched({onlySelf:!0})})}close(d=null){this.dialogRef?.close(d)}handleSubmit(){}}},5237:(C,M,o)=>{o.d(M,{w:()=>p});var a=o(2494),m=o(4650),P=o(6895);let p=(()=>{class d{constructor(){this.message="",this.className="alert-error"}set alert(r){r?this.show(r):this.message=""}error(r){this.show({message:r,type:a.N.error})}success(r){this.show({message:r,type:a.N.success})}info(r){this.show({message:r,type:a.N.info})}warning(r){this.show({message:r,type:a.N.warning})}show(r){switch(this.message=r.message,r.type){case a.N.error:this.className="alert-error";break;case a.N.success:this.className="alert-success";break;case a.N.info:this.className="alert-info";break;case a.N.warning:this.className="alert-warning"}}}return d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=m.Xpm({type:d,selectors:[["softuza-ui-alert"]],inputs:{alert:"alert"},decls:2,vars:2,consts:[[1,"alert",3,"ngClass"],[3,"innerHtml"]],template:function(r,f){1&r&&(m.TgZ(0,"div",0),m._UZ(1,"div",1),m.qZA()),2&r&&(m.Q6J("ngClass",f.className),m.xp6(1),m.Q6J("innerHtml",f.message,m.oJD))},dependencies:[P.mk],styles:[".alert[_ngcontent-%COMP%], .alert-warning[_ngcontent-%COMP%], .alert-info[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%], .alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;transition:all .2s;color:#fff;background-color:#d32f2f;padding:16px 0 16px 8px;border-radius:3px;margin-bottom:16px;text-align:center}.alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#c63f17}"]}),d})()},3748:(C,M,o)=>{o.d(M,{N:()=>h});var a=o(4650),m=o(7340),P=o(6895);const p=["input"];function d(r,f){if(1&r){const u=a.EpF();a.TgZ(0,"button",4),a.NdJ("click",function(){a.CHM(u);const g=a.oxw();return a.KtG(g.close())}),a.qZA()}}let h=(()=>{class r{constructor(){this.changed=new a.vpe,this.closed=new a.vpe,this.status=!1,this.closeVisible=!0}set visible(u){this.status=u,u&&this.input&&this.input.nativeElement.focus()}get visible(){return this.status}onKey(u){"Escape"!==u.key?this.changed.emit(this.input?.nativeElement.value):this.close()}close(){this.input.nativeElement.value="",this.closed.emit()}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["softuza-ui-search-bar"]],viewQuery:function(u,E){if(1&u&&a.Gf(p,5),2&u){let g;a.iGM(g=a.CRH())&&(E.input=g.first)}},inputs:{visible:"visible",closeVisible:"closeVisible"},outputs:{changed:"changed",closed:"closed"},decls:4,vars:2,consts:function(){let f;return f="Search...",[[1,"search-bar"],["placeholder",f,"type","text","aria-label","search","name","",3,"keyup"],["input",""],["aria-label","close",3,"click",4,"ngIf"],["aria-label","close",3,"click"]]},template:function(u,E){1&u&&(a.TgZ(0,"div",0)(1,"input",1,2),a.NdJ("keyup",function(i){return E.onKey(i)}),a.qZA(),a.YNc(3,d,1,0,"button",3),a.qZA()),2&u&&(a.Q6J("@toggleHeight",E.status),a.xp6(3),a.Q6J("ngIf",E.closeVisible))},dependencies:[P.O5],styles:[".search-bar[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;right:0;left:0;z-index:2;background-color:#fafafa;display:flex;box-sizing:border-box;padding:0;flex-direction:row;align-items:center;white-space:nowrap;border-radius:4px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:inherit;font-size:18px;line-height:1;display:inline-block;box-sizing:border-box;width:100%;padding:.05em 16px;color:#000;border:none;outline:none;background-color:transparent}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;left:24px;width:24px;height:24px;margin:0;padding:0;cursor:pointer;border:none;outline:none;background:no-repeat url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}"],data:{animation:[(0,m.X$)("toggleHeight",[(0,m.SB)("false",(0,m.oB)({height:"0px",opacity:"0",overflow:"hidden"})),(0,m.SB)("true",(0,m.oB)({height:"*",opacity:"1"})),(0,m.eR)("false => true",(0,m.jt)("100ms ease-in")),(0,m.eR)("true => false",(0,m.jt)("100ms ease-out"))])]}}),r})()},2579:(C,M,o)=>{o.d(M,{B:()=>P});var a=o(6895),m=o(4650);let P=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=m.oAB({type:p}),p.\u0275inj=m.cJS({imports:[a.ez]}),p})()},2673:(C,M,o)=>{o.d(M,{g:()=>u,k:()=>f});var a=o(4650),m=o(3238),P=o(2687),p=o(1281);let d=0;const h=(0,m.Id)(class{}),r="mat-badge-content";let f=(()=>{class E extends h{constructor(i,_,I,v,O){super(),this._ngZone=i,this._elementRef=_,this._ariaDescriber=I,this._renderer=v,this._animationMode=O,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=d++,this._isInitialized=!1}get color(){return this._color}set color(i){this._setColor(i),this._color=i}get overlap(){return this._overlap}set overlap(i){this._overlap=(0,p.Ig)(i)}get content(){return this._content}set content(i){this._updateRenderedContent(i)}get description(){return this._description}set description(i){this._updateHostAriaDescription(i)}get hidden(){return this._hidden}set hidden(i){this._hidden=(0,p.Ig)(i)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const i=this._renderer.createElement("span"),_="mat-badge-active";return i.setAttribute("id",`mat-badge-content-${this._id}`),i.setAttribute("aria-hidden","true"),i.classList.add(r),"NoopAnimations"===this._animationMode&&i.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(i),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{i.classList.add(_)})}):i.classList.add(_),i}_updateRenderedContent(i){const _=`${i??""}`.trim();this._isInitialized&&_&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=_),this._content=_}_updateHostAriaDescription(i){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),i&&this._ariaDescriber.describe(this._elementRef.nativeElement,i),this._description=i}_setColor(i){const _=this._elementRef.nativeElement.classList;_.remove(`mat-badge-${this._color}`),i&&_.add(`mat-badge-${i}`)}_clearExistingBadges(){const i=this._elementRef.nativeElement.querySelectorAll(`:scope > .${r}`);for(const _ of Array.from(i))_!==this._badgeElement&&_.remove()}}return E.\u0275fac=function(i){return new(i||E)(a.Y36(a.R0b),a.Y36(a.SBq),a.Y36(P.$s),a.Y36(a.Qsj),a.Y36(a.QbO,8))},E.\u0275dir=a.lG2({type:E,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,_){2&i&&a.ekj("mat-badge-overlap",_.overlap)("mat-badge-above",_.isAbove())("mat-badge-below",!_.isAbove())("mat-badge-before",!_.isAfter())("mat-badge-after",_.isAfter())("mat-badge-small","small"===_.size)("mat-badge-medium","medium"===_.size)("mat-badge-large","large"===_.size)("mat-badge-hidden",_.hidden||!_.content)("mat-badge-disabled",_.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[a.qOj]}),E})(),u=(()=>{class E{}return E.\u0275fac=function(i){return new(i||E)},E.\u0275mod=a.oAB({type:E}),E.\u0275inj=a.cJS({imports:[P.rt,m.BQ,m.BQ]}),E})()}}]);