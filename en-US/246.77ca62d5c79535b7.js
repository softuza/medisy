"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[246],{8246:(B,M,n)=>{n.r(M),n.d(M,{AnalysesModule:()=>et});var s=n(6814),g=n(2296),m=n(7700),A=n(617),h=n(7988),O=n(8109),f=n(6883),P=n(758),p=n(3576),E=n(5041),C=n(3572),D=n(8262),v=n(9598),F=n(8721),R=n(8180),_=n(6223),T=n(8034),y=n(9157),K=n(7106),H=n(7195),b=n(6028),e=n(5879),I=n(4630),L=n(2557),U=n(3680),z=n(2032),N=n(5026),Y=n(9060),x=n(2393),Z=n(8237),w=n(6089);const G=["input"];function V(c,u){if(1&c){const a=e.EpF();e.TgZ(0,"mat-chip-row",10),e.NdJ("removed",function(){const t=e.CHM(a).$implicit,o=e.oxw();return e.KtG(o.remove(t))}),e._uU(1),e.ALo(2,"personName"),e.TgZ(3,"button",11)(4,"mat-icon"),e._uU(5,"cancel"),e.qZA()()()}if(2&c){const a=u.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,a)," ")}}function j(c,u){if(1&c&&(e.TgZ(0,"mat-option",12)(1,"div",13)(2,"span"),e._uU(3),e.ALo(4,"personName"),e.qZA(),e.TgZ(5,"small"),e._uU(6),e.ALo(7,"personAge"),e.qZA()()()),2&c){const a=u.$implicit;e.Q6J("value",a),e.xp6(3),e.Oqu(e.lcZ(4,3,a)),e.xp6(3),e.Oqu(e.lcZ(7,5,null==a?null:a.birthDate))}}function W(c,u){1&c&&(e.TgZ(0,"mat-error"),e.SDv(1,14),e.qZA())}let X=(()=>{class c extends Z.l{constructor(a,i,l,t){super(a),this.ngControl=a,this.mpplService=i,this.personNamePipe=l,this.personAgePipe=t,this.items=[],this.selections=[],this.separatorKeysCodes=[b.K5,b.OC],this.indicator=(0,e.tdS)(!0),this.filter=v.J.paged(1,10),this.totalPages=-1,this.displayFn=o=>{if(!o)return"";const r=this.personNamePipe.transform(o),d=this.personAgePipe.transform(o?.birthDate);return d?`${r}, ${d}`:`${r}`}}ngOnInit(){this.control=this.ngControl.control,this.listenChanges()}listenChanges(){this.control.valueChanges.pipe((0,F.BI)(400)).subscribe(a=>{this.handleValueChanged(a)})}handleValueChanged(a){if(this.reset(),"string"==typeof a){const i=a.split(" ");2===i.length?(this.filter.query=i[0],this.filter.lastName=i[1]):this.filter.query=i[0]}this.get()}add(){this.control.setValue(this.selections.map(a=>a.id))}remove(a){const i=this.selections.indexOf(a);i>=0&&this.selections.splice(i,1)}optionSelected(a){this.selections.push(a.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(i=>i.id))}scroll(){this.filter.pageIndex<this.totalPages&&(++this.filter.pageIndex,this.get())}reset(){this.filter=v.J.paged(1,10),this.totalPages=-1,this.items=[]}get(){this.mpplService.persons.get(this.filter).pipe((0,R.q)(1),(0,F.sU)(this.indicator)).subscribe(a=>{this.items.push(...a.items),this.totalPages=a.totalPages})}}return c.\u0275fac=function(a){return new(a||c)(e.Y36(_.a5,10),e.Y36(x.i),e.Y36(Y.Y),e.Y36(N.g))},c.\u0275cmp=e.Xpm({type:c,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(a,i){if(1&a&&e.Gf(G,5),2&a){let l;e.iGM(l=e.CRH())&&(i.input=l.first)}},standalone:!0,features:[e._Bn([x.i,N.g,Y.Y]),e.qOj,e.jDz],decls:12,vars:9,consts:function(){let u,a;return u="Name, phone, or email",a="This field is required",[u,["aria-label","Fruit selection"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","szOptionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],a]},template:function(a,i){if(1&a&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e.SDv(2,0),e.qZA(),e.TgZ(3,"mat-chip-grid",1,2),e.YNc(5,V,6,3,"mat-chip-row",3),e.qZA(),e.TgZ(6,"input",4,5),e.NdJ("matChipInputTokenEnd",function(){return i.add()}),e.qZA(),e.TgZ(8,"mat-autocomplete",6,7),e.NdJ("optionSelected",function(t){return i.optionSelected(t)})("optionsScroll",function(){return i.scroll()}),e.YNc(10,j,8,7,"mat-option",8),e.qZA(),e.YNc(11,W,2,0,"mat-error",9),e.qZA()),2&a){const l=e.MAs(4),t=e.MAs(9);e.xp6(5),e.Q6J("ngForOf",i.selections),e.xp6(1),e.Q6J("matAutocomplete",t)("formControl",i.control)("matChipInputFor",l)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),e.xp6(2),e.Q6J("displayWith",i.displayFn)("szOptionsScrollIgnored",i.indicator()),e.xp6(2),e.Q6J("ngForOf",i.items),e.xp6(1),e.Q6J("ngIf",i.control.hasError("required"))}},dependencies:[s.ez,s.sg,s.O5,_.UX,_.Fj,_.JJ,_.oH,y.lN,y.KE,y.hX,y.TO,I.Bb,I.XC,U.ey,I.ZL,z.c,z.Nt,U.Ng,L.Hi,L.RA,L.oH,L.qH,L.z3,A.Ps,A.Hw,w.W,N.g,Y.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),c})();var J=n(4622),Q=n(6091);let it=(()=>{class c extends p.Z2{constructor(a,i,l){super(i),this.fb=a,this.dialog=i,this.data=l,this.form=a.group({testGroupIds:[l.testGroupIds],laboratoryIds:[l.laboratoryIds],personIds:[l.personIds],startDate:[l.startDate],endDate:[l.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return c.\u0275fac=function(a){return new(a||c)(e.Y36(_.qu),e.Y36(m.so),e.Y36(m.WI))},c.\u0275cmp=e.Xpm({type:c,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:16,vars:9,consts:function(){let u,a,i;return u="Date",a="Start date",i="End date",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],u,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",a,"formControlName","startDate"],["matEndDate","","placeholder",i,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(a,i){if(1&a&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),e.TgZ(6,"mat-form-field",5)(7,"mat-label"),e.SDv(8,6),e.qZA(),e.TgZ(9,"mat-date-range-input",7),e._UZ(10,"input",8)(11,"input",9),e.qZA(),e._UZ(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),e.qZA()()(),e._UZ(15,"sz-ui-dialog-actions",12)),2&a){const l=e.MAs(14);e.Q6J("header",i.header),e.xp6(2),e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(5),e.Q6J("rangePicker",l)("comparisonStart",i.form.controls.startDate.value)("comparisonEnd",i.form.controls.endDate.value),e.xp6(3),e.Q6J("for",l),e.xp6(3),e.Q6J("actions",i.actions)}},dependencies:[s.ez,_.UX,_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,m.Is,m.xY,y.lN,y.KE,y.hX,y.R9,p.su,J.Y,Q.t,H.Q,K.w,X,T.FA,T.nW,T.wx,T.zY,T.By,T._g],encapsulation:2}),c})();var nt=n(8359),k=n(3144),st=n(2516);const tt=[{path:"",component:(()=>{class c{constructor(a,i,l){this.dialog=a,this.mlabService=i,this.route=l,this.dataSource=new C.b2(v.J.pagedSorted("-createdAt")),this.dataSource.columns=[C.UC.hyperlink("code","Code",t=>t.id),D.h.createdAt(),D.h.menu([])],this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get()}openFilterComponent(){this.dialog.open(it,{data:this.dataSource.filterModel}).afterClosed().pipe((0,R.q)(1)).subscribe(i=>{this.dataSource.updateFilterModel(i),this.get()})}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe((0,F.sU)(this.dataSource.indicator),(0,R.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}}return c.\u0275fac=function(a){return new(a||c)(e.Y36(m.uw),e.Y36(f.t),e.Y36(O.gz))},c.\u0275cmp=e.Xpm({type:c,selectors:[["medisy-laboratory-analyses"]],features:[e._Bn([])],decls:8,vars:4,consts:function(){let u,a;return u="Analyses",a="Add",[["start","",1,"sz-h5"],u,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,i){1&a&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return i.get()})("filter",function(){return i.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return i.get()}),e.qZA()),2&a&&(e.xp6(3),e.Q6J("dataSource",i.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource))},dependencies:[O.rH,nt.K,k.f,st.z,g.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),c})()},{path:"create",loadComponent:()=>Promise.all([n.e(868),n.e(812),n.e(592),n.e(728)]).then(n.bind(n,1728)).then(c=>c.CreateComponent)}];let et=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({providers:[f.t],imports:[s.ez,O.Bz.forChild(tt),m.Is,C.Vn,P.E3,p.su,E.n,h.Tx,A.Ps,g.ot]}),c})()},5026:(B,M,n)=>{n.d(M,{g:()=>g});var s=n(5879);let g=(()=>{class m{transform(h){if(!h)return"";const O=new Date,f=new Date(h),p=~~((O.getTime()-f.getTime())/1e3/3600),E=~~(p/24),C=~~(E/7),D=~~(E/30),v=~~(O.getUTCFullYear()-f.getUTCFullYear());return v>0?`${v} `+"Year":D>0?`${D} `+"Month":C>0?`${C} `+"Week":E>0?`${E} `+"Day":p>0?`${p} `+"Hour":""}}return m.\u0275fac=function(h){return new(h||m)},m.\u0275pipe=s.Yjl({name:"personAge",type:m,pure:!0,standalone:!0}),m})()},9060:(B,M,n)=>{n.d(M,{Y:()=>g});var s=n(5879);let g=(()=>{class m{transform(h,O=!1){if(!h||"string"==typeof h)return"";if(!h.names||0===h.names.length)return`${h.id}`;const f=h.names[0].firstName,P=h.names[0].lastName,p=P?`${f} ${P}`:`${f}`;return O&&h.birthDate?""+(+new Date-+h.birthDate):p}}return m.\u0275fac=function(h){return new(h||m)},m.\u0275pipe=s.Yjl({name:"personName",type:m,pure:!0,standalone:!0}),m})()},6089:(B,M,n)=>{n.d(M,{W:()=>O});var s=n(5879),g=n(8645),m=n(9397),A=n(9773),h=n(4630);let O=(()=>{class f{constructor(p){this.autoComplete=p,this.szOptionsScrollThresholdPercent=.9,this.szOptionsScrollIgnored=!1,this.optionsScroll=new s.vpe,this._onDestroy=new g.x,this.autoComplete.opened.pipe((0,m.b)(()=>{setTimeout(()=>{this.removeScrollEventListener(),this.autoComplete.panel.nativeElement.addEventListener("scroll",this.onScroll.bind(this))})}),(0,A.R)(this._onDestroy)).subscribe(),this.autoComplete.closed.pipe((0,m.b)(()=>this.removeScrollEventListener()),(0,A.R)(this._onDestroy)).subscribe()}removeScrollEventListener(){this.autoComplete&&this.autoComplete.panel&&this.autoComplete.panel.nativeElement&&this.autoComplete.panel.nativeElement.removeEventListener("scroll",this.onScroll)}onScroll(p){this.szOptionsScrollIgnored||(void 0===this.szOptionsScrollThresholdPercent||p.target.scrollTop+p.target.clientHeight>100*this.szOptionsScrollThresholdPercent*p.target.scrollHeight/100)&&this.optionsScroll.next({autoComplete:this.autoComplete,scrollEvent:p})}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}}return f.\u0275fac=function(p){return new(p||f)(s.Y36(h.XC))},f.\u0275dir=s.lG2({type:f,selectors:[["mat-autocomplete","optionsScroll",""]],inputs:{szOptionsScrollThresholdPercent:"szOptionsScrollThresholdPercent",szOptionsScrollIgnored:"szOptionsScrollIgnored"},outputs:{optionsScroll:"optionsScroll"},standalone:!0}),f})()},4630:(B,M,n)=>{n.d(M,{Bb:()=>a,XC:()=>Q,ZL:()=>u});var s=n(5879),g=n(3680),m=n(6814),A=n(9829),h=n(3651),O=n(4300),f=n(2495),P=n(2831),p=n(6825),E=n(7394),C=n(8645),D=n(4911),v=n(3019),F=n(2096),R=n(2438),_=n(6028),T=n(8484),y=n(6223),K=n(9157),H=n(7921),b=n(4664),e=n(8180),I=n(2181),L=n(7398),U=n(9397),z=n(5177),N=n(9388);const Y=["panel"];function x(i,l){if(1&i&&(s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA()),2&i){const t=l.id,o=s.oxw();s.Q6J("id",o.id)("ngClass",o._classList)("@panelAnimation",o.isOpen?"visible":"hidden"),s.uIk("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby(t))}}const Z=["*"],w=(0,p.X$)("panelAnimation",[(0,p.SB)("void, hidden",(0,p.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,p.eR)(":enter, hidden => visible",[(0,p.ru)([(0,p.jt)("0.03s linear",(0,p.oB)({opacity:1})),(0,p.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,p.oB)({transform:"scaleY(1)"}))])]),(0,p.eR)(":leave, visible => hidden",[(0,p.jt)("0.075s linear",(0,p.oB)({opacity:0}))])]);let G=0;class V{constructor(l,t){this.source=l,this.option=t}}const j=(0,g.Kr)(class{}),W=new s.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function X(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}});let J=(()=>{class i extends j{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,f.Ig)(t)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(t){this._autoSelectActiveOption=(0,f.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,f.du)(t).reduce((o,r)=>(o[r]=!0,o),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(t,o,r,d){super(),this._changeDetectorRef=t,this._elementRef=o,this._defaults=r,this._activeOptionChanges=E.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new s.vpe,this.opened=new s.vpe,this.closed=new s.vpe,this.optionActivated=new s.vpe,this._classList={},this.id="mat-autocomplete-"+G++,this.inertGroups=d?.SAFARI||!1,this._autoActiveFirstOption=!!r.autoActiveFirstOption,this._autoSelectActiveOption=!!r.autoSelectActiveOption}ngAfterContentInit(){this._keyManager=new O.s1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const o=new V(this,t);this.optionSelected.emit(o)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]="primary"===this._color,t["mat-warn"]="warn"===this._color,t["mat-accent"]="accent"===this._color}_skipPredicate(t){return t.disabled}}return i.\u0275fac=function(t){return new(t||i)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(W),s.Y36(P.t4))},i.\u0275dir=s.lG2({type:i,viewQuery:function(t,o){if(1&t&&(s.Gf(s.Rgc,7),s.Gf(Y,5)),2&t){let r;s.iGM(r=s.CRH())&&(o.template=r.first),s.iGM(r=s.CRH())&&(o.panel=r.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[s.qOj]}),i})(),Q=(()=>{class i extends J{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=(0,f.Ig)(t),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const t of this.options)t._changeDetectorRef.markForCheck()}_skipPredicate(t){return!1}}return i.\u0275fac=function(){let l;return function(o){return(l||(l=s.n5z(i)))(o||i)}}(),i.\u0275cmp=s.Xpm({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(t,o,r){if(1&t&&(s.Suo(r,g.K7,5),s.Suo(r,g.ey,5)),2&t){let d;s.iGM(d=s.CRH())&&(o.optionGroups=d),s.iGM(d=s.CRH())&&(o.options=d)}},hostAttrs:["ngSkipHydration","",1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[s._Bn([{provide:g.HF,useExisting:i}]),s.qOj],ngContentSelectors:Z,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(t,o){1&t&&(s.F$t(),s.YNc(0,x,3,5,"ng-template"))},dependencies:[m.mk],styles:["div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[w]},changeDetection:0}),i})();const k={provide:y.JU,useExisting:(0,s.Gpc)(()=>u),multi:!0},q=new s.OlP("mat-autocomplete-scroll-strategy"),et={provide:q,deps:[h.aV],useFactory:function tt(i){return()=>i.scrollStrategies.reposition()}};let c=(()=>{class i{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,f.Ig)(t)}constructor(t,o,r,d,S,ot,at,lt,rt,ct,pt){this._element=t,this._overlay=o,this._viewContainerRef=r,this._zone=d,this._changeDetectorRef=S,this._dir=at,this._formField=lt,this._document=rt,this._viewportRuler=ct,this._defaults=pt,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=E.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new C.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,D.P)(()=>{const $=this.autocomplete?this.autocomplete.options:null;return $?$.changes.pipe((0,H.O)($),(0,b.w)(()=>(0,v.T)(...$.map(ut=>ut.onSelectionChange)))):this._zone.onStable.pipe((0,e.q)(1),(0,b.w)(()=>this.optionSelections))}),this._trackedModal=null,this._scrollStrategy=ot}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,v.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,I.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,I.h)(()=>this._overlayAttached)):(0,F.of)()).pipe((0,L.U)(t=>t instanceof g.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,v.T)((0,R.R)(this._document,"click"),(0,R.R)(this._document,"auxclick"),(0,R.R)(this._document,"touchend")).pipe((0,I.h)(t=>{const o=(0,P.sA)(t),r=this._formField?this._formField._elementRef.nativeElement:null,d=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&o!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!r||!r.contains(o))&&(!d||!d.contains(o))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(o)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const o=t.keyCode,r=(0,_.Vb)(t);if(o===_.hY&&!r&&t.preventDefault(),this.activeOption&&o===_.K5&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const d=this.autocomplete._keyManager.activeItem,S=o===_.LH||o===_.JH;o===_.Mf||S&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):S&&this._canOpen()&&this.openPanel(),(S||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let o=t.target,r=o.value;"number"===o.type&&(r=""==r?null:parseFloat(r)),this._previousValue!==r&&(this._previousValue=r,this._pendingAutoselectedOption=null,this._onChange(r),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,e.q)(1)),o=this.autocomplete.options.changes.pipe((0,U.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,z.g)(0));return(0,v.T)(t,o).pipe((0,b.w)(()=>(this._zone.run(()=>{const r=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,e.q)(1)).subscribe(r=>this._setValueAndClose(r))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){const o=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;this._updateNativeInputValue(o??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){const o=t?t.source:this._pendingAutoselectedOption;o&&(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),this.autocomplete._emitSelectEvent(o),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(o=>{o!==t&&o.selected&&o.deselect()})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new T.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._handleOverlayEvents(t),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const o=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this._applyModalPanelOwnership(),this.panelOpen&&o!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new h.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const o=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,d=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}];let S;S="above"===this.position?d:"below"===this.position?o:[...o,...d],t.withPositions(S)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;if(t.autoActiveFirstOption){let o=-1;for(let r=0;r<t.options.length;r++)if(!t.options.get(r).disabled){o=r;break}t._keyManager.setActiveItem(o)}else t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const o=this.autocomplete,r=(0,g.CB)(t,o.options,o.optionGroups);if(0===t&&1===r)o._setScrollTop(0);else if(o.panel){const d=o.options.toArray()[t];if(d){const S=d._getHostElement(),ot=(0,g.jH)(S.offsetTop,S.offsetHeight,o._getScrollTop(),o.panel.nativeElement.offsetHeight);o._setScrollTop(ot)}}}_handleOverlayEvents(t){t.keydownEvents().subscribe(o=>{(o.keyCode===_.hY&&!(0,_.Vb)(o)||o.keyCode===_.LH&&(0,_.Vb)(o,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),o.stopPropagation(),o.preventDefault())}),t.outsidePointerEvents().subscribe()}_applyModalPanelOwnership(){const t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;const o=this.autocomplete.id;this._trackedModal&&(0,O.iD)(this._trackedModal,"aria-owns",o),(0,O.Zf)(t,"aria-owns",o),this._trackedModal=t}_clearFromModal(){this._trackedModal&&((0,O.iD)(this._trackedModal,"aria-owns",this.autocomplete.id),this._trackedModal=null)}}return i.\u0275fac=function(t){return new(t||i)(s.Y36(s.SBq),s.Y36(h.aV),s.Y36(s.s_b),s.Y36(s.R0b),s.Y36(s.sBO),s.Y36(q),s.Y36(N.Is,8),s.Y36(K.G_,9),s.Y36(m.K0,8),s.Y36(A.rL),s.Y36(W,8))},i.\u0275dir=s.lG2({type:i,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[s.TTD]}),i})(),u=(()=>{class i extends c{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return i.\u0275fac=function(){let l;return function(o){return(l||(l=s.n5z(i)))(o||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){1&t&&s.NdJ("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(d){return o._handleInput(d)})("keydown",function(d){return o._handleKeydown(d)})("click",function(){return o._handleClick()}),2&t&&s.uIk("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen||null==o.autocomplete?null:o.autocomplete.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[s._Bn([k]),s.qOj]}),i})(),a=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({providers:[et],imports:[h.U8,g.Ng,g.BQ,m.ez,A.ZD,g.Ng,g.BQ]}),i})()}}]);