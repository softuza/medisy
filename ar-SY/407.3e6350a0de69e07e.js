"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[407],{2407:(C,M,o)=>{o.r(M),o.d(M,{PersonsModule:()=>Te});var i=o(6895),E=o(4144),P=o(7392),S=o(4859),d=o(5412),h=o(7957),c=o(7155),f=o(8739),u=o(6709),m=o(4385),g=o(4006),s=o(6257),r=o(8255),I=o(266),v=o(6338),A=o(6308),L=o(3238),U=o(1572),Y=o(3546),b=o(4512),G=o(9293),x=o(5698),z=o(2700),J=o(6656),B=o(9939),Q=o(5807),X=o(8893),e=o(4650),O=o(9549),j=o(5237),T=o(9602),y=o(9373),Z=o(585);function H(t,l){1&t&&e._UZ(0,"softuza-ui-alert",19),2&t&&e.Q6J("alert",l.ngIf)}function k(t,l){if(1&t&&(e.TgZ(0,"mat-option",20),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}function w(t,l){if(1&t&&(e.TgZ(0,"mat-option",20),e._uU(1),e.ALo(2,"titleI18n"),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(e.lcZ(2,2,n))}}let K=(()=>{class t extends J.E{constructor(n,a,_){super(a,n.group({sex:[_.sex],title:[_.title],startBirthDate:[_.startBirthDate],endBirthDate:[_.endBirthDate]})),this.fb=n,this.dialog=a,this.data=_,this.sexes=Object.values(X.m),this.titles=Object.values(Q.D)}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.qu),e.Y36(d.so),e.Y36(d.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons-filter"]],features:[e._Bn([B.R]),e.qOj],decls:33,vars:13,consts:function(){let l,n,a,_,p,R,D,F;return l="\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C",n="\u0627\u0644\u062C\u0646\u0633",a="\u0627\u0644\u0644\u0642\u0628",_="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",p="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629",R="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",D="\u0625\u063A\u0644\u0627\u0642",F="\u062D\u0641\u0638",[["mat-dialog-title",""],l,[3,"alert",4,"ngIf"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex-1"],["formControlName","sex","placeholder",n],[3,"value",4,"ngFor","ngForOf"],["formControlName","title","placeholder",a],_,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",p,"formControlName","startBirthDate"],["matEndDate","","placeholder",R,"formControlName","endBirthDate"],["matSuffix","",3,"for"],["datePicker",""],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],D,["mat-flat-button","","color","primary",3,"disabled","click"],F,[3,"alert"],[3,"value"]]},template:function(n,a){if(1&n&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,H,1,1,"softuza-ui-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"mat-form-field",4)(7,"mat-select",5)(8,"mat-option"),e._uU(9,"-"),e.qZA(),e.YNc(10,k,3,4,"mat-option",6),e.qZA()(),e.TgZ(11,"mat-form-field",4)(12,"mat-select",7)(13,"mat-option"),e._uU(14,"-"),e.qZA(),e.YNc(15,w,3,4,"mat-option",6),e.qZA()(),e.TgZ(16,"mat-form-field",4)(17,"mat-label"),e.SDv(18,8),e.qZA(),e.TgZ(19,"mat-date-range-input",9),e._UZ(20,"input",10)(21,"input",11),e.qZA(),e.TgZ(22,"mat-hint"),e._uU(23,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(24,"mat-datepicker-toggle",12)(25,"mat-date-range-picker",null,13),e.qZA()()(),e.TgZ(27,"mat-dialog-actions",14)(28,"button",15),e.NdJ("click",function(){return a.close()}),e.SDv(29,16),e.qZA(),e.TgZ(30,"button",17),e.NdJ("click",function(){return a.submit()}),e.SDv(31,18),e.ALo(32,"async"),e.qZA()()),2&n){const _=e.MAs(26);e.xp6(2),e.Q6J("ngIf",e.lcZ(3,9,a.alert$)),e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(5),e.Q6J("ngForOf",a.sexes),e.xp6(5),e.Q6J("ngForOf",a.titles),e.xp6(4),e.Q6J("rangePicker",_)("comparisonStart",a.form.controls.startBirthDate.value)("comparisonEnd",a.form.controls.endBirthDate.value),e.xp6(5),e.Q6J("for",_),e.xp6(6),e.Q6J("disabled",e.lcZ(32,11,a.indicator$))}},dependencies:[i.sg,i.O5,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,d.uh,d.xY,d.H8,L.ey,O.KE,O.bx,O.hX,O.R9,j.w,S.lW,m.gD,T.nW,T.wx,T.zY,T.By,T._g,i.Ov,y.l,Z.r],encapsulation:2}),t})();var W=o(3104),V=o(7885),q=o(3748),$=o(2673);function ee(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",25)(1,"mat-checkbox",26),e.NdJ("change",function(_){e.CHM(n);const p=e.oxw();return e.KtG(_?p.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function te(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",25)(1,"mat-checkbox",27),e.NdJ("click",function(_){return _.stopPropagation()})("change",function(_){const R=e.CHM(n).$implicit,D=e.oxw();return e.KtG(_?D.selection.toggle(R):null)}),e.qZA()()}if(2&t){const n=l.$implicit,a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.isSelected(n))}}function ne(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e._uU(1," #"),e.qZA())}function oe(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function ae(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,29),e.qZA())}function ie(t,l){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",30)(2,"div")(3,"strong")(4,"a",31),e._uU(5),e.qZA()()()()()),2&t){const n=l.$implicit,a=e.oxw();e.xp6(4),e.s9C("routerLink",n.id),e.xp6(1),e.Oqu(a.formatName(n))}}function se(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,32),e.qZA())}function le(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"sexI18n"),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,n.sex)," ")}}function re(t,l){1&t&&(e.TgZ(0,"mat-header-cell",28),e.SDv(1,33),e.qZA())}function _e(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.birthDate,"medium")," ")}}function ce(t,l){1&t&&e._UZ(0,"mat-header-cell",25)}function me(t,l){if(1&t&&(e.TgZ(0,"mat-cell",34)(1,"button",35)(2,"mat-icon",5),e._uU(3,"more_vert"),e.qZA()(),e._UZ(4,"mat-menu",null,36),e.qZA()),2&t){const n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function de(t,l){1&t&&e._UZ(0,"mat-header-row")}function Ee(t,l){1&t&&e._UZ(0,"mat-row")}function ue(t,l){if(1&t&&(e._UZ(0,"softuza-ui-table-state",37),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const ge=function(){return[10,25,50,100]};function Se(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",38),e.NdJ("page",function(_){e.CHM(n);const p=e.oxw();return e.KtG(p.onPageChange(_.pageIndex,_.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,ge))}}const pe=[{path:"",component:(()=>{class t extends z.a{constructor(n,a){super(),this.dialog=n,this.personService=a,this.displayedColumns=["Name","Sex","BirthDate","menu"],this.filter={},this.sortBy="CreatedAt",this.get()}openFilterComponent(){this.dialog.open(K,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,x.q)(1)).subscribe(a=>{a&&(this.filter=a,this.get())})}formatName(n){return n.names?`${n.names[0].firstName} ${n.names[0].lastName}`:""}get(){const n={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending,query:this.filterValue};this.filter.sex&&(n.sex=this.filter.sex),this.filter.title&&(n.title=this.filter.title),this.filter.startBirthDate&&(n.startBirthDate=this.filter.startBirthDate.toISOString()),this.filter.endBirthDate&&(n.endBirthDate=this.filter.endBirthDate.toISOString()),this.personService.getPersons(n).pipe((0,G.sU)(this.indicator$)).pipe((0,x.q)(1)).subscribe(a=>{this.set(a.count,a.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.uw),e.Y36(B.R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-people-management-persons"]],features:[e.qOj],decls:39,vars:11,consts:function(){let l,n,a,_;return l="\u0627\u0644\u0623\u0641\u0631\u0627\u062F",n="\u0627\u0644\u0627\u0633\u0645",a="\u0627\u0644\u062C\u0646\u0633",_="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[1,"header-basic"],[1,"title"],l,[1,"spacer"],["mat-icon-button","",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Sex"],["matColumnDef","BirthDate"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],[3,"routerLink"],a,_,[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(n,a){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return a.search=!0}),e.TgZ(6,"mat-icon",5),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",6),e.NdJ("click",function(){return a.openFilterComponent()}),e.TgZ(9,"mat-icon",5),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"softuza-ui-search-bar",7),e.NdJ("changed",function(p){return a.onSearch(p)})("closed",function(){return a.onSearchClose()}),e.qZA()(),e.TgZ(12,"softuza-ui-table-selection",8)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",9),e.NdJ("matSortChange",function(p){return a.onSort(p.active,p.direction)}),e.ynx(17,10),e.YNc(18,ee,2,2,"mat-header-cell",11),e.YNc(19,te,2,1,"mat-cell",12),e.BQk(),e.ynx(20,13),e.YNc(21,ne,2,0,"mat-header-cell",14),e.YNc(22,oe,2,1,"mat-cell",15),e.BQk(),e.ynx(23,16),e.YNc(24,ae,2,0,"mat-header-cell",14),e.YNc(25,ie,6,2,"mat-cell",15),e.BQk(),e.ynx(26,17),e.YNc(27,se,2,0,"mat-header-cell",14),e.YNc(28,le,3,3,"mat-cell",15),e.BQk(),e.ynx(29,18),e.YNc(30,re,2,0,"mat-header-cell",14),e.YNc(31,_e,3,4,"mat-cell",15),e.BQk(),e.ynx(32,19),e.YNc(33,ce,1,0,"mat-header-cell",11),e.YNc(34,me,6,1,"mat-cell",20),e.BQk(),e.YNc(35,de,1,0,"mat-header-row",21),e.YNc(36,Ee,1,0,"mat-row",22),e.qZA(),e.YNc(37,ue,2,3,"softuza-ui-table-state",23),e.YNc(38,Se,1,4,"mat-paginator",24),e.qZA()),2&n&&(e.xp6(8),e.s9C("matBadge",a.getFilterCount()),e.xp6(3),e.Q6J("visible",a.search),e.xp6(1),e.Q6J("visible",a.selection.hasValue()),e.xp6(2),e.hij("",a.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",a.sortBy),e.Q6J("dataSource",a.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===a.count),e.xp6(1),e.Q6J("ngIf",a.count>0))},dependencies:[i.O5,b.yS,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,f.NW,W.R,V.H,q.N,u.oG,r.VK,r.p6,P.Hw,S.lW,A.YE,A.nU,$.k,i.Ov,i.uU,y.l],encapsulation:2}),t})()}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(pe),b.Bz]}),t})();var Pe=o(2579),he=o(4053),Me=o(1143),Ne=o(4001);let Te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[B.R,Z.r],imports:[i.ez,g.u5,g.UX,fe,d.Is,h.Bb,c.p0,f.TU,E.c,Ne.U,Pe.B,Me.n,u.p9,r.Tx,P.Ps,S.ot,m.LD,s.T5,I.AV,v.ie,A.JX,L.XK,Y.QW,$.g,T.FA,U.Cq,he.L]}),t})()},6656:(C,M,o)=>{o.d(M,{E:()=>P});var i=o(1135),E=o(7579);class P{constructor(d,h){this.indicator$=new i.X(!1),this.alert$=new E.x,this.dialogRef=null,this.dialogRef=d,this.form=h}reset(){Object.keys(this.form.controls).forEach(d=>{this.form?.get(d)?.setValue(null)})}submit(){!this.form||this.form.valid?this.handleSubmit():Object.keys(this.form.controls).forEach(d=>{this.form?.get(d)?.markAsTouched({onlySelf:!0})})}close(d=null){this.dialogRef?.close(d)}handleSubmit(){}}},3748:(C,M,o)=>{o.d(M,{N:()=>h});var i=o(4650),E=o(7340),P=o(6895);const S=["input"];function d(c,f){if(1&c){const u=i.EpF();i.TgZ(0,"button",4),i.NdJ("click",function(){i.CHM(u);const g=i.oxw();return i.KtG(g.close())}),i.qZA()}}let h=(()=>{class c{constructor(){this.changed=new i.vpe,this.closed=new i.vpe,this.status=!1,this.closeVisible=!0}set visible(u){this.status=u,u&&this.input&&this.input.nativeElement.focus()}get visible(){return this.status}onKey(u){"Escape"!==u.key?this.changed.emit(this.input?.nativeElement.value):this.close()}close(){this.input.nativeElement.value="",this.closed.emit()}}return c.\u0275fac=function(u){return new(u||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["softuza-ui-search-bar"]],viewQuery:function(u,m){if(1&u&&i.Gf(S,5),2&u){let g;i.iGM(g=i.CRH())&&(m.input=g.first)}},inputs:{visible:"visible",closeVisible:"closeVisible"},outputs:{changed:"changed",closed:"closed"},decls:4,vars:2,consts:function(){let f;return f="\u0628\u062D\u062B...",[[1,"search-bar"],["placeholder",f,"type","text","aria-label","search","name","",3,"keyup"],["input",""],["aria-label","close",3,"click",4,"ngIf"],["aria-label","close",3,"click"]]},template:function(u,m){1&u&&(i.TgZ(0,"div",0)(1,"input",1,2),i.NdJ("keyup",function(s){return m.onKey(s)}),i.qZA(),i.YNc(3,d,1,0,"button",3),i.qZA()),2&u&&(i.Q6J("@toggleHeight",m.status),i.xp6(3),i.Q6J("ngIf",m.closeVisible))},dependencies:[P.O5],styles:[".search-bar[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;right:0;left:0;z-index:2;background-color:#fafafa;display:flex;box-sizing:border-box;padding:0;flex-direction:row;align-items:center;white-space:nowrap;border-radius:4px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:inherit;font-size:18px;line-height:1;display:inline-block;box-sizing:border-box;width:100%;padding:.05em 16px;color:#000;border:none;outline:none;background-color:transparent}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;left:24px;width:24px;height:24px;margin:0;padding:0;cursor:pointer;border:none;outline:none;background:no-repeat url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}"],data:{animation:[(0,E.X$)("toggleHeight",[(0,E.SB)("false",(0,E.oB)({height:"0px",opacity:"0",overflow:"hidden"})),(0,E.SB)("true",(0,E.oB)({height:"*",opacity:"1"})),(0,E.eR)("false => true",(0,E.jt)("100ms ease-in")),(0,E.eR)("true => false",(0,E.jt)("100ms ease-out"))])]}}),c})()},2579:(C,M,o)=>{o.d(M,{B:()=>P});var i=o(6895),E=o(4650);let P=(()=>{class S{}return S.\u0275fac=function(h){return new(h||S)},S.\u0275mod=E.oAB({type:S}),S.\u0275inj=E.cJS({imports:[i.ez]}),S})()},2673:(C,M,o)=>{o.d(M,{g:()=>u,k:()=>f});var i=o(4650),E=o(3238),P=o(2687),S=o(1281);let d=0;const h=(0,E.Id)(class{}),c="mat-badge-content";let f=(()=>{class m extends h{constructor(s,r,I,v,A){super(),this._ngZone=s,this._elementRef=r,this._ariaDescriber=I,this._renderer=v,this._animationMode=A,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=d++,this._isInitialized=!1}get color(){return this._color}set color(s){this._setColor(s),this._color=s}get overlap(){return this._overlap}set overlap(s){this._overlap=(0,S.Ig)(s)}get content(){return this._content}set content(s){this._updateRenderedContent(s)}get description(){return this._description}set description(s){this._updateHostAriaDescription(s)}get hidden(){return this._hidden}set hidden(s){this._hidden=(0,S.Ig)(s)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const s=this._renderer.createElement("span"),r="mat-badge-active";return s.setAttribute("id",`mat-badge-content-${this._id}`),s.setAttribute("aria-hidden","true"),s.classList.add(c),"NoopAnimations"===this._animationMode&&s.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(s),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{s.classList.add(r)})}):s.classList.add(r),s}_updateRenderedContent(s){const r=`${s??""}`.trim();this._isInitialized&&r&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=r),this._content=r}_updateHostAriaDescription(s){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),s&&this._ariaDescriber.describe(this._elementRef.nativeElement,s),this._description=s}_setColor(s){const r=this._elementRef.nativeElement.classList;r.remove(`mat-badge-${this._color}`),s&&r.add(`mat-badge-${s}`)}_clearExistingBadges(){const s=this._elementRef.nativeElement.querySelectorAll(`:scope > .${c}`);for(const r of Array.from(s))r!==this._badgeElement&&r.remove()}}return m.\u0275fac=function(s){return new(s||m)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(P.$s),i.Y36(i.Qsj),i.Y36(i.QbO,8))},m.\u0275dir=i.lG2({type:m,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(s,r){2&s&&i.ekj("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small","small"===r.size)("mat-badge-medium","medium"===r.size)("mat-badge-large","large"===r.size)("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[i.qOj]}),m})(),u=(()=>{class m{}return m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=i.oAB({type:m}),m.\u0275inj=i.cJS({imports:[P.rt,E.BQ,E.BQ]}),m})()}}]);