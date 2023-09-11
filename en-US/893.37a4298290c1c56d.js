"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[893],{4893:(X,T,o)=>{o.r(T),o.d(T,{AnalysesModule:()=>A});var n=o(6814),f=o(2296),i=o(7700),v=o(617),g=o(7988),M=o(8109),O=o(5738),R=o(758),S=o(3576),b=o(5041),F=o(3572),I=o(2191),D=o(6987),x=o(9598),Y=o(8721),E=o(8180),P=o(6223),C=o(8034),L=o(9157),z=o(4889),B=o(7893),U=o(5467),a=o(5879),$=o(4622),W=o(6091);let H=(()=>{class s extends S.Z2{constructor(r,d,m){super(d),this.fb=r,this.dialog=d,this.data=m,this.form=r.group({testGroupIds:[m.testGroupIds],laboratoryIds:[m.laboratoryIds],personIds:[m.personIds],startDate:[m.startDate],endDate:[m.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(P.qu),a.Y36(i.so),a.Y36(i.WI))},s.\u0275cmp=a.Xpm({type:s,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[a._Bn([]),a.qOj,a.jDz],decls:16,vars:9,consts:function(){let c,r,d;return c="Date",r="Start date",d="End date",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],c,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",r,"formControlName","startDate"],["matEndDate","","placeholder",d,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(r,d){if(1&r&&(a._UZ(0,"sz-ui-dialog-header",0),a.TgZ(1,"mat-dialog-content")(2,"form",1),a._UZ(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-person-search",4),a.TgZ(6,"mat-form-field",5)(7,"mat-label"),a.SDv(8,6),a.qZA(),a.TgZ(9,"mat-date-range-input",7),a._UZ(10,"input",8)(11,"input",9),a.qZA(),a._UZ(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),a.qZA()()(),a._UZ(15,"sz-ui-dialog-actions",12)),2&r){const m=a.MAs(14);a.Q6J("header",d.header),a.xp6(2),a.Q6J("formGroup",d.form),a.xp6(1),a.Q6J("multiple",!0),a.xp6(1),a.Q6J("multiple",!0),a.xp6(5),a.Q6J("rangePicker",m)("comparisonStart",d.form.controls.startDate.value)("comparisonEnd",d.form.controls.endDate.value),a.xp6(3),a.Q6J("for",m),a.xp6(3),a.Q6J("actions",d.actions)}},dependencies:[n.ez,P.UX,P._Y,P.Fj,P.JJ,P.JL,P.sg,P.u,i.Is,i.xY,L.lN,L.KE,L.hX,L.R9,S.su,$.Y,W.t,U.Q,z.w,B.R,C.FA,C.nW,C.wx,C.zY,C.By,C._g],encapsulation:2}),s})();var K=o(3582),Z=o(3144),G=o(2516);const u=[{path:"",component:(()=>{class s{constructor(r,d,m){this.dialog=r,this.analysisService=d,this.route=m,this.dataSource=new F.b2(x.J.pagedSorted("-createdAt")),this.dataSource.columns=[F.UC.hyperlink("code","Code",N=>N.id),I.h.createdAt(),I.h.menu([])],this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get()}openFilterComponent(){this.dialog.open(H,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(d=>{this.dataSource.updateFilterModel(d),this.get()})}get(){this.analysisService.get(this.dataSource.filterModel).pipe((0,Y.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(r=>{this.dataSource.set(r.items,r.count)})}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(i.uw),a.Y36(O.K),a.Y36(M.gz))},s.\u0275cmp=a.Xpm({type:s,selectors:[["medisy-laboratory-analyses"]],features:[a._Bn([D.C])],decls:8,vars:4,consts:function(){let c,r;return c="Analyses",r="Add",[["start","",1,"sz-h5"],c,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],r,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(r,d){1&r&&(a.TgZ(0,"sz-ui-header-basic")(1,"h5",0),a.SDv(2,1),a.qZA()(),a.TgZ(3,"sz-ui-table-filter",2),a.NdJ("search",function(){return d.get()})("filter",function(){return d.openFilterComponent()}),a.TgZ(4,"button",3)(5,"span"),a.SDv(6,4),a.qZA()()(),a.TgZ(7,"sz-ui-table",5),a.NdJ("update",function(){return d.get()}),a.qZA()),2&r&&(a.xp6(3),a.Q6J("dataSource",d.dataSource),a.xp6(4),a.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",d.dataSource))},dependencies:[M.rH,K.K,Z.f,G.z,f.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),s})()},{path:"create",loadComponent:()=>Promise.all([o.e(283),o.e(592),o.e(781)]).then(o.bind(o,6781)).then(s=>s.CreateComponent)}];let A=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({providers:[O.K],imports:[n.ez,M.Bz.forChild(u),i.Is,F.Vn,R.E3,S.su,b.n,g.Tx,v.Ps,f.ot]}),s})()},7893:(X,T,o)=>{o.d(T,{R:()=>V});var n=o(6028),f=o(6814),i=o(5879),v=o(6223),g=o(4630),M=o(3680),O=o(9157),R=o(617),S=o(2032),b=o(6007),F=o(465);let I=(()=>{class u{transform(s){if(!s.birthDate)return"";const c=new Date,r=new Date(s.birthDate),m=~~((c.getTime()-r.getTime())/1e3/3600),N=~~(m/24),J=~~(N/7),Q=~~(N/30),j=~~(c.getUTCFullYear()-r.getUTCFullYear());return j>0?`${j} `+"Year":Q>0?`${Q} `+"Month":J>0?`${J} `+"Week":N>0?`${N} `+"Day":m>0?`${m} `+"Hour":""}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275pipe=i.Yjl({name:"personAge",type:u,pure:!0,standalone:!0}),u})();var D=o(9060),x=o(5348),Y=o(2757),E=o(8645),P=o(9397),C=o(9773);let L=(()=>{class u{constructor(s){this.autoComplete=s,this.scrollThresholdPercent=.9,this.scrollIgnored=!1,this.optionsScroll=new i.vpe,this._onDestroy=new E.x,this.autoComplete.opened.pipe((0,P.b)(()=>{setTimeout(()=>{this.removeScrollEventListener(),this.autoComplete.panel.nativeElement.addEventListener("scroll",this.onScroll.bind(this))})}),(0,C.R)(this._onDestroy)).subscribe(),this.autoComplete.closed.pipe((0,P.b)(()=>this.removeScrollEventListener()),(0,C.R)(this._onDestroy)).subscribe()}removeScrollEventListener(){this.autoComplete&&this.autoComplete.panel&&this.autoComplete.panel.nativeElement&&this.autoComplete.panel.nativeElement.removeEventListener("scroll",this.onScroll)}onScroll(s){this.scrollIgnored||(void 0===this.scrollThresholdPercent||s.target.scrollTop+s.target.clientHeight>100*this.scrollThresholdPercent*s.target.scrollHeight/100)&&this.optionsScroll.next({autoComplete:this.autoComplete,scrollEvent:s})}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}}return u.\u0275fac=function(s){return new(s||u)(i.Y36(g.XC))},u.\u0275dir=i.lG2({type:u,selectors:[["mat-autocomplete","optionsScroll",""]],inputs:{scrollThresholdPercent:"scrollThresholdPercent",scrollIgnored:"scrollIgnored"},outputs:{optionsScroll:"optionsScroll"},standalone:!0}),u})();var z=o(8721),B=o(7921),U=o(3620),a=o(3997),$=o(8180);const W=["input"];function H(u,A){if(1&u&&(i.TgZ(0,"mat-option",9)(1,"div",10)(2,"span"),i._uU(3),i.ALo(4,"personName"),i.qZA(),i.TgZ(5,"small"),i._uU(6),i.ALo(7,"personAge"),i.qZA()()()),2&u){const s=A.$implicit;i.Q6J("value",s),i.xp6(3),i.Oqu(i.lcZ(4,3,s)),i.xp6(3),i.Oqu(i.lcZ(7,5,s))}}function K(u,A){1&u&&(i.TgZ(0,"mat-error"),i.SDv(1,11),i.qZA())}function Z(u,A){1&u&&(i.TgZ(0,"mat-error"),i.SDv(1,12),i.qZA())}function G(u,A){1&u&&i._UZ(0,"mat-progress-bar",13)}let V=(()=>{class u extends Y.l{constructor(s,c,r,d){super(s),this.ngControl=s,this.personService=c,this.personNamePipe=r,this.personAgePipe=d,this.items=[],this.separatorKeysCodes=[n.K5,n.OC],this.indicator=(0,i.tdS)(!0),this.query="",this.lastName="",this.totalPages=-1,this.pageIndex=1,this.pageSize=10,this.displayFn=m=>m?this.personNamePipe.transform(m):""}ngOnInit(){this.control=this.ngControl.control,this.listenChanges()}listenChanges(){this.control.valueChanges.pipe((0,B.O)(null),(0,U.b)(400),(0,a.x)()).subscribe(s=>{if(this.reset(),null===s)this.get();else if("string"==typeof s){const c=s.split(" ");2===c.length?this.filter(c[0],c[1]):this.filter(c[0])}})}optionSelected(s){this.input.nativeElement.value="",this.control.setValue(s.option.value)}scroll(){this.pageIndex<this.totalPages&&(this.pageIndex=this.pageIndex+1,this.get())}filter(s,c){this.query=s,this.lastName=c,this.get()}reset(){this.pageIndex=1,this.totalPages=-1,this.items=[]}get(){this.personService.getPersons({query:this.query,lastName:this.lastName,pageSize:this.pageSize,pageIndex:this.pageIndex}).pipe((0,$.q)(1),(0,z.sU)(this.indicator)).subscribe(s=>{this.items.push(...s.items),this.totalPages=s.totalPages})}writeValue(s){this.value=s}}return u.\u0275fac=function(s){return new(s||u)(i.Y36(v.a5,10),i.Y36(x.R),i.Y36(D.Y),i.Y36(I))},u.\u0275cmp=i.Xpm({type:u,selectors:[["medisy-form-field-person-search"]],viewQuery:function(s,c){if(1&s&&i.Gf(W,5),2&s){let r;i.iGM(r=i.CRH())&&(c.input=r.first)}},inputs:{pageSize:"pageSize"},standalone:!0,features:[i._Bn([x.R,I,D.Y]),i.qOj,i.jDz],decls:12,vars:8,consts:function(){let A,s,c;return A="Name, phone, or email",s="This field is required",c="This field is not valid",[[1,"container"],A,["matInput","",3,"matAutocomplete","formControl"],["input",""],[3,"displayWith","scrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[1,"sz-form"],s,c,["mode","indeterminate"]]},template:function(s,c){if(1&s&&(i.TgZ(0,"div",0)(1,"mat-form-field")(2,"mat-label"),i.SDv(3,1),i.qZA(),i._UZ(4,"input",2,3),i.TgZ(6,"mat-autocomplete",4,5),i.NdJ("optionSelected",function(d){return c.optionSelected(d)})("optionsScroll",function(){return c.scroll()}),i.YNc(8,H,8,7,"mat-option",6),i.qZA(),i.YNc(9,K,2,0,"mat-error",7),i.YNc(10,Z,2,0,"mat-error",7),i.qZA(),i.YNc(11,G,1,0,"mat-progress-bar",8),i.qZA()),2&s){const r=i.MAs(7);i.xp6(4),i.Q6J("matAutocomplete",r)("formControl",c.control),i.xp6(2),i.Q6J("displayWith",c.displayFn)("scrollIgnored",c.indicator()),i.xp6(2),i.Q6J("ngForOf",c.items),i.xp6(1),i.Q6J("ngIf",c.control.hasError("required")),i.xp6(1),i.Q6J("ngIf",c.control.hasError("invalid")),i.xp6(1),i.Q6J("ngIf",c.indicator())}},dependencies:[f.ez,f.sg,f.O5,v.UX,v.Fj,v.JJ,v.oH,O.lN,O.KE,O.hX,O.TO,g.Bb,g.XC,M.ey,g.ZL,S.c,S.Nt,M.Ng,R.Ps,b.Cv,b.pW,F.X,I,D.Y,L],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),u})()},465:(X,T,o)=>{o.d(T,{X:()=>f});var n=o(5879);let f=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({}),i})()},9060:(X,T,o)=>{o.d(T,{Y:()=>f});var n=o(5879);let f=(()=>{class i{transform(g,M=!1){if(!g.names||0===g.names.length)return`${g.id}`;const O=g.names[0].firstName,R=g.names[0].lastName,S=R?`${O} ${R}`:`${O}`;return M&&g.birthDate?""+(+new Date-+g.birthDate):S}}return i.\u0275fac=function(g){return new(g||i)},i.\u0275pipe=n.Yjl({name:"personName",type:i,pure:!0,standalone:!0}),i})()},4630:(X,T,o)=>{o.d(T,{Bb:()=>nt,XC:()=>N,ZL:()=>tt});var n=o(5879),f=o(3680),i=o(6814),v=o(9829),g=o(3651),M=o(4300),O=o(2495),R=o(2831),S=o(6825),b=o(7394),F=o(8645),I=o(4911),D=o(3019),x=o(2096),Y=o(2438),E=o(6028),P=o(8484),C=o(6223),L=o(9157),z=o(7921),B=o(4664),U=o(8180),a=o(2181),$=o(7398),W=o(9397),H=o(5177),K=o(9388);const Z=["panel"];function G(p,h){if(1&p&&(n.TgZ(0,"div",0,1),n.Hsn(2),n.qZA()),2&p){const t=h.id,e=n.oxw();n.Q6J("id",e.id)("ngClass",e._classList)("@panelAnimation",e.isOpen?"visible":"hidden"),n.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(t))}}const V=["*"],u=(0,S.X$)("panelAnimation",[(0,S.SB)("void, hidden",(0,S.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,S.eR)(":enter, hidden => visible",[(0,S.ru)([(0,S.jt)("0.03s linear",(0,S.oB)({opacity:1})),(0,S.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,S.oB)({transform:"scaleY(1)"}))])]),(0,S.eR)(":leave, visible => hidden",[(0,S.jt)("0.075s linear",(0,S.oB)({opacity:0}))])]);let A=0;class s{constructor(h,t){this.source=h,this.option=t}}const c=(0,f.Kr)(class{}),r=new n.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function d(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}});let m=(()=>{class p extends c{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,O.Ig)(t)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(t){this._autoSelectActiveOption=(0,O.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,O.du)(t).reduce((e,l)=>(e[l]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(t,e,l,_){super(),this._changeDetectorRef=t,this._elementRef=e,this._defaults=l,this._activeOptionChanges=b.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new n.vpe,this.opened=new n.vpe,this.closed=new n.vpe,this.optionActivated=new n.vpe,this._classList={},this.id="mat-autocomplete-"+A++,this.inertGroups=_?.SAFARI||!1,this._autoActiveFirstOption=!!l.autoActiveFirstOption,this._autoSelectActiveOption=!!l.autoSelectActiveOption}ngAfterContentInit(){this._keyManager=new M.s1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new s(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]="primary"===this._color,t["mat-warn"]="warn"===this._color,t["mat-accent"]="accent"===this._color}_skipPredicate(t){return t.disabled}}return p.\u0275fac=function(t){return new(t||p)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(r),n.Y36(R.t4))},p.\u0275dir=n.lG2({type:p,viewQuery:function(t,e){if(1&t&&(n.Gf(n.Rgc,7),n.Gf(Z,5)),2&t){let l;n.iGM(l=n.CRH())&&(e.template=l.first),n.iGM(l=n.CRH())&&(e.panel=l.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[n.qOj]}),p})(),N=(()=>{class p extends m{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=(0,O.Ig)(t),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const t of this.options)t._changeDetectorRef.markForCheck()}_skipPredicate(t){return!1}}return p.\u0275fac=function(){let h;return function(e){return(h||(h=n.n5z(p)))(e||p)}}(),p.\u0275cmp=n.Xpm({type:p,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,l){if(1&t&&(n.Suo(l,f.K7,5),n.Suo(l,f.ey,5)),2&t){let _;n.iGM(_=n.CRH())&&(e.optionGroups=_),n.iGM(_=n.CRH())&&(e.options=_)}},hostAttrs:["ngSkipHydration","",1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[n._Bn([{provide:f.HF,useExisting:p}]),n.qOj],ngContentSelectors:V,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(n.F$t(),n.YNc(0,G,3,5,"ng-template"))},dependencies:[i.mk],styles:["div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[u]},changeDetection:0}),p})();const j={provide:C.JU,useExisting:(0,n.Gpc)(()=>tt),multi:!0},q=new n.OlP("mat-autocomplete-scroll-strategy"),ot={provide:q,deps:[g.aV],useFactory:function et(p){return()=>p.scrollStrategies.reposition()}};let it=(()=>{class p{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,O.Ig)(t)}constructor(t,e,l,_,y,k,st,at,lt,rt,ct){this._element=t,this._overlay=e,this._viewContainerRef=l,this._zone=_,this._changeDetectorRef=y,this._dir=st,this._formField=at,this._document=lt,this._viewportRuler=rt,this._defaults=ct,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=b.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new F.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,I.P)(()=>{const w=this.autocomplete?this.autocomplete.options:null;return w?w.changes.pipe((0,z.O)(w),(0,B.w)(()=>(0,D.T)(...w.map(pt=>pt.onSelectionChange)))):this._zone.onStable.pipe((0,U.q)(1),(0,B.w)(()=>this.optionSelections))}),this._trackedModal=null,this._scrollStrategy=k}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,D.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,a.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,a.h)(()=>this._overlayAttached)):(0,x.of)()).pipe((0,$.U)(t=>t instanceof f.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,D.T)((0,Y.R)(this._document,"click"),(0,Y.R)(this._document,"auxclick"),(0,Y.R)(this._document,"touchend")).pipe((0,a.h)(t=>{const e=(0,R.sA)(t),l=this._formField?this._formField._elementRef.nativeElement:null,_=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!l||!l.contains(e))&&(!_||!_.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode,l=(0,E.Vb)(t);if(e===E.hY&&!l&&t.preventDefault(),this.activeOption&&e===E.K5&&this.panelOpen&&!l)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const _=this.autocomplete._keyManager.activeItem,y=e===E.LH||e===E.JH;e===E.Mf||y&&!l&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):y&&this._canOpen()&&this.openPanel(),(y||this.autocomplete._keyManager.activeItem!==_)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let e=t.target,l=e.value;"number"===e.type&&(l=""==l?null:parseFloat(l)),this._previousValue!==l&&(this._previousValue=l,this._pendingAutoselectedOption=null,this._onChange(l),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,U.q)(1)),e=this.autocomplete.options.changes.pipe((0,W.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,H.g)(0));return(0,D.T)(t,e).pipe((0,B.w)(()=>(this._zone.run(()=>{const l=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),l!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,U.q)(1)).subscribe(l=>this._setValueAndClose(l))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){const e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;this._updateNativeInputValue(e??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){const e=t?t.source:this._pendingAutoselectedOption;e&&(this._clearPreviousSelectedOption(e),this._assignOptionValue(e.value),this._onChange(e.value),this.autocomplete._emitSelectEvent(e),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new P.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._handleOverlayEvents(t),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this._applyModalPanelOwnership(),this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new g.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],l=this._aboveClass,_=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:l},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:l}];let y;y="above"===this.position?_:"below"===this.position?e:[...e,..._],t.withPositions(y)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;if(t.autoActiveFirstOption){let e=-1;for(let l=0;l<t.options.length;l++)if(!t.options.get(l).disabled){e=l;break}t._keyManager.setActiveItem(e)}else t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const e=this.autocomplete,l=(0,f.CB)(t,e.options,e.optionGroups);if(0===t&&1===l)e._setScrollTop(0);else if(e.panel){const _=e.options.toArray()[t];if(_){const y=_._getHostElement(),k=(0,f.jH)(y.offsetTop,y.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(k)}}}_handleOverlayEvents(t){t.keydownEvents().subscribe(e=>{(e.keyCode===E.hY&&!(0,E.Vb)(e)||e.keyCode===E.LH&&(0,E.Vb)(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())}),t.outsidePointerEvents().subscribe()}_applyModalPanelOwnership(){const t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;const e=this.autocomplete.id;this._trackedModal&&(0,M.iD)(this._trackedModal,"aria-owns",e),(0,M.Zf)(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){this._trackedModal&&((0,M.iD)(this._trackedModal,"aria-owns",this.autocomplete.id),this._trackedModal=null)}}return p.\u0275fac=function(t){return new(t||p)(n.Y36(n.SBq),n.Y36(g.aV),n.Y36(n.s_b),n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(q),n.Y36(K.Is,8),n.Y36(L.G_,9),n.Y36(i.K0,8),n.Y36(v.rL),n.Y36(r,8))},p.\u0275dir=n.lG2({type:p,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[n.TTD]}),p})(),tt=(()=>{class p extends it{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return p.\u0275fac=function(){let h;return function(e){return(h||(h=n.n5z(p)))(e||p)}}(),p.\u0275dir=n.lG2({type:p,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&n.NdJ("focusin",function(){return e._handleFocus()})("blur",function(){return e._onTouched()})("input",function(_){return e._handleInput(_)})("keydown",function(_){return e._handleKeydown(_)})("click",function(){return e._handleClick()}),2&t&&n.uIk("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-controls",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",e.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[n._Bn([j]),n.qOj]}),p})(),nt=(()=>{class p{}return p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({providers:[ot],imports:[g.U8,f.Ng,f.BQ,i.ez,v.ZD,f.Ng,f.BQ]}),p})()}}]);