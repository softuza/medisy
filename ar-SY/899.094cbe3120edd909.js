"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[899],{1899:(B,M,i)=>{i.r(M),i.d(M,{SamplesModule:()=>Se});var N,y,P,c=i(6895),g=i(5823),T=i(4144),f=i(7392),S=i(4859),p=i(5412),A=i(7957),_=i(7155),C=i(8739),d=i(6709),u=i(4385),o=i(4006),l=i(6257),E=i(8255),b=i(266),L=i(6338),v=i(6308),D=i(3238),F=i(1572),$=i(3546),x=i(4512),z=i(2472),R=i(5698),U=i(2700),Y=i(777),h=(()=>{return(t=h||(h={})).Blood="Blood",t.Semen="Semen",t.Sputun="Sputun",t.Stool="Stool",t.Urine="Urine",t.Saliva="Saliva",t.Sweat="Sweat",t.Hair="Hair",t.Fingernail="Fingernail",t.Biopsy="Biopsy",t.Fluid="Fluid",t.Swab="Swab",h;var t})();N||(N={}),y||(y={}),P||(P={});var e=i(4650),O=i(1576),J=i(9549),G=i(1921);function Q(t,s){1&t&&e._UZ(0,"softuza-medisy-alert",13),2&t&&e.Q6J("alert",s.ngIf)}function H(t,s){if(1&t&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}let w=(()=>{class t extends Y.a{constructor(n,a,m){super(a,n.group({sampleType:[m.sampleType],swabType:[m.swabType],fluidType:[m.fluidType],biopsyType:[m.biopsyType]})),this.fb=n,this.dialog=a,this.data=m,this.sampleTypes=Object.keys(h).map(r=>h[r]),this.biopsyTypes=Object.keys(N).map(r=>N[r]),this.fluidTypes=Object.keys(y).map(r=>y[r]),this.swabTypes=Object.keys(P).map(r=>P[r])}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.qu),e.Y36(p.so),e.Y36(p.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-laboratory-management-samples-filter"]],features:[e._Bn([]),e.qOj],decls:18,vars:8,consts:function(){let s,n,a,m;return s="\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C",n="\u0627\u0644\u0646\u0645\u0637",a="\u0625\u063A\u0644\u0627\u0642",m="\u062D\u0641\u0638",[["mat-dialog-title",""],s,[3,"alert",4,"ngIf"],[3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column wrap","fxLayoutGap","8px"],["fxFlex","1 1 100%"],["formControlName","sampleType","placeholder",n],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],a,["mat-flat-button","","color","primary",3,"disabled","click"],m,[3,"alert"],[3,"value"]]},template:function(n,a){1&n&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,Q,1,1,"softuza-medisy-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-select",6)(9,"mat-option"),e._uU(10,"-"),e.qZA(),e.YNc(11,H,2,2,"mat-option",7),e.qZA()()()()(),e.TgZ(12,"mat-dialog-actions",8)(13,"button",9),e.NdJ("click",function(){return a.close()}),e.SDv(14,10),e.qZA(),e.TgZ(15,"button",11),e.NdJ("click",function(){return a.submit()}),e.SDv(16,12),e.ALo(17,"async"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,a.alert$)),e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(6),e.Q6J("ngForOf",a.sampleTypes),e.xp6(4),e.Q6J("disabled",e.lcZ(17,6,a.indicator$)))},dependencies:[c.sg,c.O5,o._Y,o.JJ,o.JL,o.sg,o.u,p.uh,p.xY,p.H8,D.ey,O.xw,O.SQ,O.yH,J.KE,G.w,S.lW,u.gD,c.Ov],encapsulation:2}),t})();var I=i(1276),j=i(5174),X=i(6734),k=i(172),Z=i(2673);function K(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",23)(1,"mat-checkbox",24),e.NdJ("change",function(m){e.CHM(n);const r=e.oxw();return e.KtG(m?r.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function W(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",23)(1,"mat-checkbox",25),e.NdJ("click",function(m){return m.stopPropagation()})("change",function(m){const Ee=e.CHM(n).$implicit,he=e.oxw();return e.KtG(m?he.selection.toggle(Ee):null)}),e.qZA()()}if(2&t){const n=s.$implicit,a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.isSelected(n))}}function V(t,s){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const n=s.$implicit,a=e.oxw();e.uIk("colspan",a.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",n===a.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",n.description," ")}}function q(t,s){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1," #"),e.qZA())}function ee(t,s){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function te(t,s){1&t&&(e.TgZ(0,"mat-header-cell",26),e.SDv(1,27),e.qZA())}function ne(t,s){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",28)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const n=s.$implicit;e.xp6(4),e.hij(" ",n.name," ")}}function ae(t,s){1&t&&e._UZ(0,"mat-header-cell",23)}function oe(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){e.CHM(n);const m=e.oxw().$implicit,r=e.oxw();return e.KtG(r.expandedElement=r.expandedElement===m?null:m)}),e.TgZ(1,"mat-icon"),e._uU(2),e.qZA()()}if(2&t){const n=e.oxw().$implicit,a=e.oxw();e.xp6(2),e.Oqu(a.expandedElement===n?"expand_less":"expand_more")}}function ie(t,s){if(1&t&&(e.TgZ(0,"mat-cell",29),e.YNc(1,oe,3,1,"button",30),e.TgZ(2,"button",31)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e._UZ(5,"mat-menu",null,32),e.qZA()),2&t){const n=e.MAs(6);e.xp6(1),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function se(t,s){1&t&&e._UZ(0,"mat-header-row")}function le(t,s){1&t&&e._UZ(0,"mat-row")}function me(t,s){if(1&t&&(e._UZ(0,"softuza-medisy-table-state",33),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const re=function(){return[10,25,50,100]};function ce(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",34),e.NdJ("page",function(m){e.CHM(n);const r=e.oxw();return e.KtG(r.onPageChange(m.pageIndex,m.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,re))}}const de=[{path:"",component:(()=>{class t extends U.a{constructor(n,a){super(),this.dialog=n,this.sampleService=a,this.displayedColumns=["menu"],this.filter={},this.get()}openFilterComponent(){this.dialog.open(w,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,R.q)(1)).subscribe(a=>{a&&(this.filter=a,this.get())})}get(){const n={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending};this.filter.sampleType&&(n.sampleType=this.filter.sampleType),this.filter.biopsyType&&(n.biopsyType=this.filter.biopsyType),this.filter.swabType&&(n.swabType=this.filter.swabType),this.filter.fluidType&&(n.fluidType=this.filter.fluidType),this.sampleService.getSamples(n).pipe((0,z.sU)(this.indicator$)).pipe((0,R.q)(1)).subscribe(a=>{this.set(a.count,a.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.uw),e.Y36(I.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-sample-management-samples"]],features:[e.qOj],decls:35,vars:11,consts:function(){let s,n;return s="\u0639\u064A\u0646\u0627\u062A",n="\u0627\u0644\u0627\u0633\u0645",[[1,"header-basic"],[1,"title"],s,[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(n,a){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return a.search=!0}),e.TgZ(6,"mat-icon"),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",5),e.NdJ("click",function(){return a.openFilterComponent()}),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"softuza-medisy-search-bar",6),e.NdJ("changed",function(r){return a.onSearch(r)})("closed",function(){return a.onSearchClose()}),e.qZA()(),e.TgZ(12,"softuza-medisy-table-selection",7)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",8),e.NdJ("matSortChange",function(r){return a.onSort(r.active,r.direction)}),e.ynx(17,9),e.YNc(18,K,2,2,"mat-header-cell",10),e.YNc(19,W,2,1,"mat-cell",11),e.BQk(),e.ynx(20,12),e.YNc(21,V,4,3,"mat-cell",13),e.BQk(),e.ynx(22,14),e.YNc(23,q,2,0,"mat-header-cell",15),e.YNc(24,ee,2,1,"mat-cell",13),e.BQk(),e.ynx(25,16),e.YNc(26,te,2,0,"mat-header-cell",15),e.YNc(27,ne,5,1,"mat-cell",13),e.BQk(),e.ynx(28,17),e.YNc(29,ae,1,0,"mat-header-cell",10),e.YNc(30,ie,7,2,"mat-cell",18),e.BQk(),e.YNc(31,se,1,0,"mat-header-row",19),e.YNc(32,le,1,0,"mat-row",20),e.qZA(),e.YNc(33,me,2,3,"softuza-medisy-table-state",21),e.YNc(34,ce,1,4,"mat-paginator",22),e.qZA()),2&n&&(e.xp6(8),e.s9C("matBadge",a.getFilterCount()),e.xp6(3),e.Q6J("visible",a.search),e.xp6(1),e.Q6J("visible",a.selection.hasValue()),e.xp6(2),e.hij("",a.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",a.sortBy),e.Q6J("dataSource",a.dataSource),e.xp6(15),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===a.count),e.xp6(1),e.Q6J("ngIf",a.count>0))},dependencies:[c.O5,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,C.NW,j.R,X.H,k.N,d.oG,E.VK,E.p6,f.Hw,S.lW,v.YE,v.nU,Z.k,c.Ov],encapsulation:2}),t})()}];let _e=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[x.Bz.forChild(de),x.Bz]}),t})();var pe=i(3813),ue=i(4053),ge=i(8222),fe=i(7343);let Se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[I.F],imports:[c.ez,o.u5,o.UX,_e,p.Is,A.Bb,g.o9,_.p0,C.TU,T.c,fe.U,ge.B,pe.n,d.p9,E.Tx,f.Ps,S.ot,u.LD,l.T5,b.AV,L.ie,v.JX,D.XK,$.QW,Z.g,F.Cq,ue.L]}),t})()},2673:(B,M,i)=>{i.d(M,{g:()=>C,k:()=>_});var c=i(4650),g=i(3238),T=i(2687),f=i(1281);let S=0;const p=(0,g.Id)(class{}),A="mat-badge-content";let _=(()=>{class d extends p{constructor(o,l,E,b,L){super(),this._ngZone=o,this._elementRef=l,this._ariaDescriber=E,this._renderer=b,this._animationMode=L,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=S++,this._isInitialized=!1}get color(){return this._color}set color(o){this._setColor(o),this._color=o}get overlap(){return this._overlap}set overlap(o){this._overlap=(0,f.Ig)(o)}get content(){return this._content}set content(o){this._updateRenderedContent(o)}get description(){return this._description}set description(o){this._updateHostAriaDescription(o)}get hidden(){return this._hidden}set hidden(o){this._hidden=(0,f.Ig)(o)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const o=this._renderer.createElement("span"),l="mat-badge-active";return o.setAttribute("id",`mat-badge-content-${this._id}`),o.setAttribute("aria-hidden","true"),o.classList.add(A),"NoopAnimations"===this._animationMode&&o.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(o),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{o.classList.add(l)})}):o.classList.add(l),o}_updateRenderedContent(o){const l=`${o??""}`.trim();this._isInitialized&&l&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=l),this._content=l}_updateHostAriaDescription(o){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),o&&this._ariaDescriber.describe(this._elementRef.nativeElement,o),this._description=o}_setColor(o){const l=this._elementRef.nativeElement.classList;l.remove(`mat-badge-${this._color}`),o&&l.add(`mat-badge-${o}`)}_clearExistingBadges(){const o=this._elementRef.nativeElement.querySelectorAll(`:scope > .${A}`);for(const l of Array.from(o))l!==this._badgeElement&&l.remove()}}return d.\u0275fac=function(o){return new(o||d)(c.Y36(c.R0b),c.Y36(c.SBq),c.Y36(T.$s),c.Y36(c.Qsj),c.Y36(c.QbO,8))},d.\u0275dir=c.lG2({type:d,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(o,l){2&o&&c.ekj("mat-badge-overlap",l.overlap)("mat-badge-above",l.isAbove())("mat-badge-below",!l.isAbove())("mat-badge-before",!l.isAfter())("mat-badge-after",l.isAfter())("mat-badge-small","small"===l.size)("mat-badge-medium","medium"===l.size)("mat-badge-large","large"===l.size)("mat-badge-hidden",l.hidden||!l.content)("mat-badge-disabled",l.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[c.qOj]}),d})(),C=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({imports:[T.rt,g.BQ,g.BQ]}),d})()}}]);