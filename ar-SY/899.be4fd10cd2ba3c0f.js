"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[899],{1899:(A,E,o)=>{o.r(E),o.d(E,{SamplesModule:()=>ue});var N,b,P,a=o(6895),d=o(4144),h=o(7392),S=o(4859),m=o(5412),T=o(7957),_=o(7155),M=o(8739),g=o(6709),p=o(4385),f=o(4006),s=o(6257),r=o(8255),y=o(266),O=o(6338),C=o(6308),D=o(3238),x=o(1572),Z=o(3546),I=o(4512),F=o(9293),L=o(5698),z=o(2700),U=o(6656),v=(()=>{return(t=v||(v={})).Blood="Blood",t.Semen="Semen",t.Sputun="Sputun",t.Stool="Stool",t.Urine="Urine",t.Saliva="Saliva",t.Sweat="Sweat",t.Hair="Hair",t.Fingernail="Fingernail",t.Biopsy="Biopsy",t.Fluid="Fluid",t.Swab="Swab",v;var t})();N||(N={}),b||(b={}),P||(P={});var e=o(4650),$=o(9549),Y=o(5237);function G(t,l){1&t&&e._UZ(0,"softuza-ui-alert",12),2&t&&e.Q6J("alert",l.ngIf)}function J(t,l){if(1&t&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n," ")}}let Q=(()=>{class t extends U.E{constructor(n,i,c){super(i,n.group({sampleType:[c.sampleType],swabType:[c.swabType],fluidType:[c.fluidType],biopsyType:[c.biopsyType]})),this.fb=n,this.dialog=i,this.data=c,this.sampleTypes=Object.keys(v).map(u=>v[u]),this.biopsyTypes=Object.keys(N).map(u=>N[u]),this.fluidTypes=Object.keys(b).map(u=>b[u]),this.swabTypes=Object.keys(P).map(u=>P[u])}handleSubmit(){this.close(this.form.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.qu),e.Y36(m.so),e.Y36(m.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-laboratory-management-samples-filter"]],features:[e._Bn([]),e.qOj],decls:17,vars:8,consts:function(){let l,n,i,c;return l="\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C",n="\u0627\u0644\u0646\u0645\u0637",i="\u0625\u063A\u0644\u0627\u0642",c="\u062D\u0641\u0638",[["mat-dialog-title",""],l,[3,"alert",4,"ngIf"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex-1"],["formControlName","sampleType","placeholder",n],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],i,["mat-flat-button","","color","primary",3,"disabled","click"],c,[3,"alert"],[3,"value"]]},template:function(n,i){1&n&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.YNc(2,G,1,1,"softuza-ui-alert",2),e.ALo(3,"async"),e.TgZ(4,"mat-dialog-content")(5,"form",3)(6,"mat-form-field",4)(7,"mat-select",5)(8,"mat-option"),e._uU(9,"-"),e.qZA(),e.YNc(10,J,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(11,"mat-dialog-actions",7)(12,"button",8),e.NdJ("click",function(){return i.close()}),e.SDv(13,9),e.qZA(),e.TgZ(14,"button",10),e.NdJ("click",function(){return i.submit()}),e.SDv(15,11),e.ALo(16,"async"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,i.alert$)),e.xp6(3),e.Q6J("formGroup",i.form),e.xp6(5),e.Q6J("ngForOf",i.sampleTypes),e.xp6(4),e.Q6J("disabled",e.lcZ(16,6,i.indicator$)))},dependencies:[a.sg,a.O5,f._Y,f.JJ,f.JL,f.sg,f.u,m.uh,m.xY,m.H8,D.ey,$.KE,Y.w,S.lW,p.gD,a.Ov],encapsulation:2}),t})();var R=o(1276),j=o(3104),w=o(7885),H=o(3748),B=o(2673);function k(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-header-cell",24)(1,"mat-checkbox",25),e.NdJ("change",function(c){e.CHM(n);const u=e.oxw();return e.KtG(c?u.masterToggle():null)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())}}function X(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-cell",24)(1,"mat-checkbox",26),e.NdJ("click",function(c){return c.stopPropagation()})("change",function(c){const ge=e.CHM(n).$implicit,fe=e.oxw();return e.KtG(c?fe.selection.toggle(ge):null)}),e.qZA()()}if(2&t){const n=l.$implicit,i=e.oxw();e.xp6(1),e.Q6J("checked",i.selection.isSelected(n))}}function K(t,l){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div")(2,"div"),e._uU(3),e.qZA()()()),2&t){const n=l.$implicit,i=e.oxw();e.uIk("colspan",i.displayedColumns.length),e.xp6(1),e.Q6J("@detailExpand",n===i.expandedElement?"expanded":"collapsed"),e.xp6(2),e.hij(" ",n.description," ")}}function W(t,l){1&t&&(e.TgZ(0,"mat-header-cell",27),e._uU(1," #"),e.qZA())}function V(t,l){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function q(t,l){1&t&&(e.TgZ(0,"mat-header-cell",27),e.SDv(1,28),e.qZA())}function ee(t,l){if(1&t&&(e.TgZ(0,"mat-cell")(1,"div",29)(2,"div")(3,"strong"),e._uU(4),e.qZA()()()()),2&t){const n=l.$implicit;e.xp6(4),e.hij(" ",n.name," ")}}function te(t,l){1&t&&e._UZ(0,"mat-header-cell",24)}function ne(t,l){if(1&t&&(e.TgZ(0,"mat-cell",30)(1,"button",31)(2,"mat-icon",5),e._uU(3,"more_vert"),e.qZA()(),e._UZ(4,"mat-menu",null,32),e.qZA()),2&t){const n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function oe(t,l){1&t&&e._UZ(0,"mat-header-row")}function ae(t,l){1&t&&e._UZ(0,"mat-row")}function ie(t,l){if(1&t&&(e._UZ(0,"softuza-ui-table-state",33),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("loading",e.lcZ(1,1,n.indicator$))}}const se=function(){return[10,25,50,100]};function le(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"mat-paginator",34),e.NdJ("page",function(c){e.CHM(n);const u=e.oxw();return e.KtG(u.onPageChange(c.pageIndex,c.pageSize))}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("length",n.count)("pageSize",n.pageSize)("pageSizeOptions",e.DdM(3,se))}}const re=[{path:"",component:(()=>{class t extends z.a{constructor(n,i){super(),this.dialog=n,this.sampleService=i,this.displayedColumns=["menu"],this.filter={},this.get()}openFilterComponent(){this.dialog.open(Q,{autoFocus:!0,width:"480px",data:this.filter}).afterClosed().pipe((0,L.q)(1)).subscribe(i=>{i&&(this.filter=i,this.get())})}get(){const n={pageIndex:this.pageIndex,pageSize:this.pageSize,sortBy:this.sortBy,sortDescending:this.sortDescending};this.filter.sampleType&&(n.sampleType=this.filter.sampleType),this.filter.biopsyType&&(n.biopsyType=this.filter.biopsyType),this.filter.swabType&&(n.swabType=this.filter.swabType),this.filter.fluidType&&(n.fluidType=this.filter.fluidType),this.sampleService.getSamples(n).pipe((0,F.sU)(this.indicator$)).pipe((0,L.q)(1)).subscribe(i=>{this.set(i.count,i.items)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.uw),e.Y36(R.F))},t.\u0275cmp=e.Xpm({type:t,selectors:[["softuza-medisy-sample-management-samples"]],features:[e.qOj],decls:35,vars:11,consts:function(){let l,n;return l="\u0639\u064A\u0646\u0627\u062A",n="\u0627\u0644\u0627\u0633\u0645",[[1,"header-basic"],[1,"title"],l,[1,"spacer"],["mat-icon-button","",3,"click"],["fontSet","material-symbols-outlined"],["mat-icon-button","","matBadgeSize","small",3,"matBadge","click"],[3,"visible","changed","closed"],[3,"visible"],["multiTemplateDataRows","","matSort","","matSortDisableClear","","matSortDirection","desc",3,"dataSource","matSortActive","matSortChange"],["matColumnDef","select"],["class","table-column-small",4,"matHeaderCellDef"],["class","table-column-small",4,"matCellDef"],["matColumnDef","expandedDetail"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","menu"],["class","table-column-small table-column-end",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],[3,"loading",4,"ngIf"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[1,"table-column-small"],[3,"checked","indeterminate","change"],[3,"checked","click","change"],["mat-sort-header",""],n,[1,"table-cell-stacked"],[1,"table-column-small","table-column-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],[3,"loading"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"]]},template:function(n,i){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1),e.SDv(3,2),e.qZA(),e._UZ(4,"span",3),e.TgZ(5,"button",4),e.NdJ("click",function(){return i.search=!0}),e.TgZ(6,"mat-icon",5),e._uU(7,"search"),e.qZA()(),e.TgZ(8,"button",6),e.NdJ("click",function(){return i.openFilterComponent()}),e.TgZ(9,"mat-icon",5),e._uU(10,"filter_list"),e.qZA()(),e.TgZ(11,"softuza-ui-search-bar",7),e.NdJ("changed",function(u){return i.onSearch(u)})("closed",function(){return i.onSearchClose()}),e.qZA()(),e.TgZ(12,"softuza-ui-table-selection",8)(13,"span"),e._uU(14),e.qZA(),e._UZ(15,"span",3),e.qZA(),e.TgZ(16,"mat-table",9),e.NdJ("matSortChange",function(u){return i.onSort(u.active,u.direction)}),e.ynx(17,10),e.YNc(18,k,2,2,"mat-header-cell",11),e.YNc(19,X,2,1,"mat-cell",12),e.BQk(),e.ynx(20,13),e.YNc(21,K,4,3,"mat-cell",14),e.BQk(),e.ynx(22,15),e.YNc(23,W,2,0,"mat-header-cell",16),e.YNc(24,V,2,1,"mat-cell",14),e.BQk(),e.ynx(25,17),e.YNc(26,q,2,0,"mat-header-cell",16),e.YNc(27,ee,5,1,"mat-cell",14),e.BQk(),e.ynx(28,18),e.YNc(29,te,1,0,"mat-header-cell",11),e.YNc(30,ne,6,1,"mat-cell",19),e.BQk(),e.YNc(31,oe,1,0,"mat-header-row",20),e.YNc(32,ae,1,0,"mat-row",21),e.qZA(),e.YNc(33,ie,2,3,"softuza-ui-table-state",22),e.YNc(34,le,1,4,"mat-paginator",23),e.qZA()),2&n&&(e.xp6(8),e.s9C("matBadge",i.getFilterCount()),e.xp6(3),e.Q6J("visible",i.search),e.xp6(1),e.Q6J("visible",i.selection.hasValue()),e.xp6(2),e.hij("",i.selection.selected.length," selected"),e.xp6(2),e.s9C("matSortActive",i.sortBy),e.Q6J("dataSource",i.dataSource),e.xp6(15),e.Q6J("matHeaderRowDef",i.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===i.count),e.xp6(1),e.Q6J("ngIf",i.count>0))},dependencies:[a.O5,_.BZ,_.fO,_.as,_.w1,_.Dz,_.nj,_.ge,_.ev,_.XQ,_.Gk,M.NW,j.R,w.H,H.N,g.oG,r.VK,r.p6,h.Hw,S.lW,C.YE,C.nU,B.k,a.Ov],encapsulation:2}),t})()}];let ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[I.Bz.forChild(re),I.Bz]}),t})();var me=o(4053),de=o(2579),_e=o(1143),pe=o(4001);let ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[R.F],imports:[a.ez,f.u5,f.UX,ce,m.Is,T.Bb,_.p0,M.TU,d.c,pe.U,de.B,_e.n,g.p9,r.Tx,h.Ps,S.ot,p.LD,s.T5,y.AV,O.ie,C.JX,D.XK,Z.QW,B.g,x.Cq,me.L]}),t})()},4053:(A,E,o)=>{o.d(E,{L:()=>d});var a=o(4650);let d=(()=>{class h{}return h.\u0275fac=function(m){return new(m||h)},h.\u0275mod=a.oAB({type:h}),h.\u0275inj=a.cJS({}),h})()},6656:(A,E,o)=>{o.d(E,{E:()=>h});var a=o(1135),d=o(7579);class h{constructor(m,T){this.indicator$=new a.X(!1),this.alert$=new d.x,this.dialogRef=null,this.dialogRef=m,this.form=T}reset(){Object.keys(this.form.controls).forEach(m=>{this.form?.get(m)?.setValue(null)})}submit(){!this.form||this.form.valid?this.handleSubmit():Object.keys(this.form.controls).forEach(m=>{this.form?.get(m)?.markAsTouched({onlySelf:!0})})}close(m=null){this.dialogRef?.close(m)}handleSubmit(){}}},3748:(A,E,o)=>{o.d(E,{N:()=>T});var a=o(4650),d=o(7340),h=o(6895);const S=["input"];function m(_,M){if(1&_){const g=a.EpF();a.TgZ(0,"button",4),a.NdJ("click",function(){a.CHM(g);const f=a.oxw();return a.KtG(f.close())}),a.qZA()}}let T=(()=>{class _{constructor(){this.changed=new a.vpe,this.closed=new a.vpe,this.status=!1,this.closeVisible=!0}set visible(g){this.status=g,g&&this.input&&this.input.nativeElement.focus()}get visible(){return this.status}onKey(g){"Escape"!==g.key?this.changed.emit(this.input?.nativeElement.value):this.close()}close(){this.input.nativeElement.value="",this.closed.emit()}}return _.\u0275fac=function(g){return new(g||_)},_.\u0275cmp=a.Xpm({type:_,selectors:[["softuza-ui-search-bar"]],viewQuery:function(g,p){if(1&g&&a.Gf(S,5),2&g){let f;a.iGM(f=a.CRH())&&(p.input=f.first)}},inputs:{visible:"visible",closeVisible:"closeVisible"},outputs:{changed:"changed",closed:"closed"},decls:4,vars:2,consts:function(){let M;return M="\u0628\u062D\u062B...",[[1,"search-bar"],["placeholder",M,"type","text","aria-label","search","name","",3,"keyup"],["input",""],["aria-label","close",3,"click",4,"ngIf"],["aria-label","close",3,"click"]]},template:function(g,p){1&g&&(a.TgZ(0,"div",0)(1,"input",1,2),a.NdJ("keyup",function(s){return p.onKey(s)}),a.qZA(),a.YNc(3,m,1,0,"button",3),a.qZA()),2&g&&(a.Q6J("@toggleHeight",p.status),a.xp6(3),a.Q6J("ngIf",p.closeVisible))},dependencies:[h.O5],styles:[".search-bar[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;right:0;left:0;z-index:2;background-color:#fafafa;display:flex;box-sizing:border-box;padding:0;flex-direction:row;align-items:center;white-space:nowrap;border-radius:4px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:inherit;font-size:18px;line-height:1;display:inline-block;box-sizing:border-box;width:100%;padding:.05em 16px;color:#000;border:none;outline:none;background-color:transparent}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;left:24px;width:24px;height:24px;margin:0;padding:0;cursor:pointer;border:none;outline:none;background:no-repeat url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}"],data:{animation:[(0,d.X$)("toggleHeight",[(0,d.SB)("false",(0,d.oB)({height:"0px",opacity:"0",overflow:"hidden"})),(0,d.SB)("true",(0,d.oB)({height:"*",opacity:"1"})),(0,d.eR)("false => true",(0,d.jt)("100ms ease-in")),(0,d.eR)("true => false",(0,d.jt)("100ms ease-out"))])]}}),_})()},2579:(A,E,o)=>{o.d(E,{B:()=>h});var a=o(6895),d=o(4650);let h=(()=>{class S{}return S.\u0275fac=function(T){return new(T||S)},S.\u0275mod=d.oAB({type:S}),S.\u0275inj=d.cJS({imports:[a.ez]}),S})()},2673:(A,E,o)=>{o.d(E,{g:()=>g,k:()=>M});var a=o(4650),d=o(3238),h=o(2687),S=o(1281);let m=0;const T=(0,d.Id)(class{}),_="mat-badge-content";let M=(()=>{class p extends T{constructor(s,r,y,O,C){super(),this._ngZone=s,this._elementRef=r,this._ariaDescriber=y,this._renderer=O,this._animationMode=C,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=m++,this._isInitialized=!1}get color(){return this._color}set color(s){this._setColor(s),this._color=s}get overlap(){return this._overlap}set overlap(s){this._overlap=(0,S.Ig)(s)}get content(){return this._content}set content(s){this._updateRenderedContent(s)}get description(){return this._description}set description(s){this._updateHostAriaDescription(s)}get hidden(){return this._hidden}set hidden(s){this._hidden=(0,S.Ig)(s)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const s=this._renderer.createElement("span"),r="mat-badge-active";return s.setAttribute("id",`mat-badge-content-${this._id}`),s.setAttribute("aria-hidden","true"),s.classList.add(_),"NoopAnimations"===this._animationMode&&s.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(s),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{s.classList.add(r)})}):s.classList.add(r),s}_updateRenderedContent(s){const r=`${s??""}`.trim();this._isInitialized&&r&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=r),this._content=r}_updateHostAriaDescription(s){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),s&&this._ariaDescriber.describe(this._elementRef.nativeElement,s),this._description=s}_setColor(s){const r=this._elementRef.nativeElement.classList;r.remove(`mat-badge-${this._color}`),s&&r.add(`mat-badge-${s}`)}_clearExistingBadges(){const s=this._elementRef.nativeElement.querySelectorAll(`:scope > .${_}`);for(const r of Array.from(s))r!==this._badgeElement&&r.remove()}}return p.\u0275fac=function(s){return new(s||p)(a.Y36(a.R0b),a.Y36(a.SBq),a.Y36(h.$s),a.Y36(a.Qsj),a.Y36(a.QbO,8))},p.\u0275dir=a.lG2({type:p,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(s,r){2&s&&a.ekj("mat-badge-overlap",r.overlap)("mat-badge-above",r.isAbove())("mat-badge-below",!r.isAbove())("mat-badge-before",!r.isAfter())("mat-badge-after",r.isAfter())("mat-badge-small","small"===r.size)("mat-badge-medium","medium"===r.size)("mat-badge-large","large"===r.size)("mat-badge-hidden",r.hidden||!r.content)("mat-badge-disabled",r.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[a.qOj]}),p})(),g=(()=>{class p{}return p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[h.rt,d.BQ,d.BQ]}),p})()}}]);