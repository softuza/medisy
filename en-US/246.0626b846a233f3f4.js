"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[246],{8246:(b,S,i)=>{i.r(S),i.d(S,{AnalysesModule:()=>ot});var n=i(6814),h=i(2296),p=i(7700),f=i(617),d=i(7988),g=i(8109),m=i(6883),O=i(758),c=i(3576),A=i(5041),v=i(3572),C=i(1175),M=i(9598),F=i(8721),T=i(8180),u=i(6223),y=i(8034),E=i(9157),H=i(4889),N=i(6028),o=i(5879),D=i(4630),P=i(2557),Y=i(3680),B=i(2032),I=i(5026),L=i(9060),U=i(7163),Z=i(8237),w=i(6089),G=i(7921),V=i(3620),j=i(3997);const X=["input"];function x(a,l){if(1&a){const t=o.EpF();o.TgZ(0,"mat-chip-row",10),o.NdJ("removed",function(){const r=o.CHM(t).$implicit,_=o.oxw();return o.KtG(_.remove(r))}),o._uU(1),o.ALo(2,"personName"),o.TgZ(3,"button",11)(4,"mat-icon"),o._uU(5,"cancel"),o.qZA()()()}if(2&a){const t=l.$implicit;o.xp6(1),o.hij(" ",o.lcZ(2,1,t)," ")}}function J(a,l){if(1&a&&(o.TgZ(0,"mat-option",12)(1,"div",13)(2,"span"),o._uU(3),o.ALo(4,"personName"),o.qZA(),o.TgZ(5,"small"),o._uU(6),o.ALo(7,"personAge"),o.qZA()()()),2&a){const t=l.$implicit;o.Q6J("value",t),o.xp6(3),o.Oqu(o.lcZ(4,3,t)),o.xp6(3),o.Oqu(o.lcZ(7,5,t))}}function Q(a,l){1&a&&(o.TgZ(0,"mat-error"),o.SDv(1,14),o.qZA())}let k=(()=>{class a extends Z.l{constructor(t,e,s,r){super(t),this.ngControl=t,this.mpplService=e,this.personNamePipe=s,this.personAgePipe=r,this.items=[],this.selections=[],this.separatorKeysCodes=[N.K5,N.OC],this.indicator=(0,o.tdS)(!0),this.query="",this.lastName="",this.totalPages=-1,this.pageSize=10,this.pageIndex=1,this.displayFn=_=>{if(!_)return"";const R=this.personNamePipe.transform(_),$=this.personAgePipe.transform(_);return $?`${R}, ${$}`:`${R}`}}ngOnInit(){this.control=this.ngControl.control,this.listenChanges(),console.log(this.control.value)}listenChanges(){this.control.valueChanges.pipe((0,G.O)(null),(0,V.b)(400),(0,j.x)()).subscribe(t=>{if(this.reset(),null===t)this.get();else if("string"==typeof t){const e=t.split(" ");2===e.length?this.filter(e[0],e[1]):this.filter(e[0])}})}add(){this.control.setValue(this.selections.map(t=>t.id))}scroll(){this.pageIndex<this.totalPages&&(this.pageIndex=this.pageIndex+1,this.get())}remove(t){const e=this.selections.indexOf(t);e>=0&&this.selections.splice(e,1)}optionSelected(t){this.selections.push(t.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(e=>e.id))}filter(t,e){this.query=t,this.lastName=e,this.get()}reset(){this.pageIndex=1,this.totalPages=-1,this.items=[]}get(){this.mpplService.persons.get({query:this.query,lastName:this.lastName,pageSize:this.pageSize,pageIndex:this.pageIndex}).pipe((0,T.q)(1),(0,F.sU)(this.indicator)).subscribe(t=>{this.items.push(...t.items),this.totalPages=t.totalPages})}writeValue(t){this.value=t}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(u.a5,10),o.Y36(U.i),o.Y36(L.Y),o.Y36(I.g))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(t,e){if(1&t&&o.Gf(X,5),2&t){let s;o.iGM(s=o.CRH())&&(e.input=s.first)}},standalone:!0,features:[o._Bn([U.i,I.g,L.Y]),o.qOj,o.jDz],decls:12,vars:9,consts:function(){let l,t;return l="Name, phone, or email",t="This field is required",[l,["aria-label","Fruit selection"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","optionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],t]},template:function(t,e){if(1&t&&(o.TgZ(0,"mat-form-field")(1,"mat-label"),o.SDv(2,0),o.qZA(),o.TgZ(3,"mat-chip-grid",1,2),o.YNc(5,x,6,3,"mat-chip-row",3),o.qZA(),o.TgZ(6,"input",4,5),o.NdJ("matChipInputTokenEnd",function(){return e.add()}),o.qZA(),o.TgZ(8,"mat-autocomplete",6,7),o.NdJ("optionSelected",function(r){return e.optionSelected(r)})("optionsScroll",function(){return e.scroll()}),o.YNc(10,J,8,7,"mat-option",8),o.qZA(),o.YNc(11,Q,2,0,"mat-error",9),o.qZA()),2&t){const s=o.MAs(4),r=o.MAs(9);o.xp6(5),o.Q6J("ngForOf",e.selections),o.xp6(1),o.Q6J("matAutocomplete",r)("formControl",e.control)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes),o.xp6(2),o.Q6J("displayWith",e.displayFn)("optionsScrollIgnored",e.indicator()),o.xp6(2),o.Q6J("ngForOf",e.items),o.xp6(1),o.Q6J("ngIf",e.control.hasError("required"))}},dependencies:[n.ez,n.sg,n.O5,u.UX,u.Fj,u.JJ,u.oH,E.lN,E.KE,E.hX,E.TO,D.Bb,D.XC,Y.ey,D.ZL,B.c,B.Nt,Y.Ng,P.Hi,P.RA,P.oH,P.qH,P.z3,f.Ps,f.Hw,w.W,I.g,L.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),a})();var it=i(5467),nt=i(4622),q=i(6091);let st=(()=>{class a extends c.Z2{constructor(t,e,s){super(e),this.fb=t,this.dialog=e,this.data=s,this.form=t.group({testGroupIds:[s.testGroupIds],laboratoryIds:[s.laboratoryIds],personIds:[s.personIds],startDate:[s.startDate],endDate:[s.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(u.qu),o.Y36(p.so),o.Y36(p.WI))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[o._Bn([]),o.qOj,o.jDz],decls:16,vars:9,consts:function(){let l,t,e;return l="Date",t="Start date",e="End date",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],l,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",e,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(t,e){if(1&t&&(o._UZ(0,"sz-ui-dialog-header",0),o.TgZ(1,"mat-dialog-content")(2,"form",1),o._UZ(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),o.TgZ(6,"mat-form-field",5)(7,"mat-label"),o.SDv(8,6),o.qZA(),o.TgZ(9,"mat-date-range-input",7),o._UZ(10,"input",8)(11,"input",9),o.qZA(),o._UZ(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),o.qZA()()(),o._UZ(15,"sz-ui-dialog-actions",12)),2&t){const s=o.MAs(14);o.Q6J("header",e.header),o.xp6(2),o.Q6J("formGroup",e.form),o.xp6(1),o.Q6J("multiple",!0),o.xp6(1),o.Q6J("multiple",!0),o.xp6(5),o.Q6J("rangePicker",s)("comparisonStart",e.form.controls.startDate.value)("comparisonEnd",e.form.controls.endDate.value),o.xp6(3),o.Q6J("for",s),o.xp6(3),o.Q6J("actions",e.actions)}},dependencies:[n.ez,u.UX,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,p.Is,p.xY,E.lN,E.KE,E.hX,E.R9,c.su,nt.Y,q.t,it.Q,H.w,k,y.FA,y.nW,y.wx,y.zY,y.By,y._g],encapsulation:2}),a})();var z=i(8359),tt=i(3144),et=i(2516);const W=[{path:"",component:(()=>{class a{constructor(t,e,s){this.dialog=t,this.mlabService=e,this.route=s,this.dataSource=new v.b2(M.J.pagedSorted("-createdAt")),this.dataSource.columns=[v.UC.hyperlink("code","Code",r=>r.id),C.h.createdAt(),C.h.menu([])],this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get()}openFilterComponent(){this.dialog.open(st,{data:this.dataSource.filterModel}).afterClosed().pipe((0,T.q)(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get()})}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe((0,F.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(p.uw),o.Y36(m.t),o.Y36(g.gz))},a.\u0275cmp=o.Xpm({type:a,selectors:[["medisy-laboratory-analyses"]],features:[o._Bn([])],decls:8,vars:4,consts:function(){let l,t;return l="Analyses",t="Add",[["start","",1,"sz-h5"],l,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,e){1&t&&(o.TgZ(0,"sz-ui-header-basic")(1,"h5",0),o.SDv(2,1),o.qZA()(),o.TgZ(3,"sz-ui-table-filter",2),o.NdJ("search",function(){return e.get()})("filter",function(){return e.openFilterComponent()}),o.TgZ(4,"button",3)(5,"span"),o.SDv(6,4),o.qZA()()(),o.TgZ(7,"sz-ui-table",5),o.NdJ("update",function(){return e.get()}),o.qZA()),2&t&&(o.xp6(3),o.Q6J("dataSource",e.dataSource),o.xp6(4),o.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",e.dataSource))},dependencies:[g.rH,z.K,tt.f,et.z,h.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),a})()},{path:"create",loadComponent:()=>Promise.all([i.e(103),i.e(812),i.e(592),i.e(838)]).then(i.bind(i,1838)).then(a=>a.CreateComponent)}];let ot=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({providers:[m.t],imports:[n.ez,g.Bz.forChild(W),p.Is,v.Vn,O.E3,c.su,A.n,d.Tx,f.Ps,h.ot]}),a})()},5026:(b,S,i)=>{i.d(S,{g:()=>h});var n=i(5879);let h=(()=>{class p{transform(d){if(!d.birthDate)return"";const g=new Date,m=new Date(d.birthDate),c=~~((g.getTime()-m.getTime())/1e3/3600),A=~~(c/24),v=~~(A/7),C=~~(A/30),M=~~(g.getUTCFullYear()-m.getUTCFullYear());return M>0?`${M} `+"Year":C>0?`${C} `+"Month":v>0?`${v} `+"Week":A>0?`${A} `+"Day":c>0?`${c} `+"Hour":""}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275pipe=n.Yjl({name:"personAge",type:p,pure:!0,standalone:!0}),p})()},9060:(b,S,i)=>{i.d(S,{Y:()=>h});var n=i(5879);let h=(()=>{class p{transform(d,g=!1){if(!d.names||0===d.names.length)return`${d.id}`;const m=d.names[0].firstName,O=d.names[0].lastName,c=O?`${m} ${O}`:`${m}`;return g&&d.birthDate?""+(+new Date-+d.birthDate):c}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275pipe=n.Yjl({name:"personName",type:p,pure:!0,standalone:!0}),p})()},6089:(b,S,i)=>{i.d(S,{W:()=>g});var n=i(5879),h=i(8645),p=i(9397),f=i(9773),d=i(4630);let g=(()=>{class m{constructor(c){this.autoComplete=c,this.optionsScrollThresholdPercent=.9,this.optionsScrollIgnored=!1,this.optionsScroll=new n.vpe,this._onDestroy=new h.x,this.autoComplete.opened.pipe((0,p.b)(()=>{setTimeout(()=>{this.removeScrollEventListener(),this.autoComplete.panel.nativeElement.addEventListener("scroll",this.onScroll.bind(this))})}),(0,f.R)(this._onDestroy)).subscribe(),this.autoComplete.closed.pipe((0,p.b)(()=>this.removeScrollEventListener()),(0,f.R)(this._onDestroy)).subscribe()}removeScrollEventListener(){this.autoComplete&&this.autoComplete.panel&&this.autoComplete.panel.nativeElement&&this.autoComplete.panel.nativeElement.removeEventListener("scroll",this.onScroll)}onScroll(c){this.optionsScrollIgnored||(void 0===this.optionsScrollThresholdPercent||c.target.scrollTop+c.target.clientHeight>100*this.optionsScrollThresholdPercent*c.target.scrollHeight/100)&&this.optionsScroll.next({autoComplete:this.autoComplete,scrollEvent:c})}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}}return m.\u0275fac=function(c){return new(c||m)(n.Y36(d.XC))},m.\u0275dir=n.lG2({type:m,selectors:[["mat-autocomplete","optionsScroll",""]],inputs:{optionsScrollThresholdPercent:"optionsScrollThresholdPercent",optionsScrollIgnored:"optionsScrollIgnored"},outputs:{optionsScroll:"optionsScroll"},standalone:!0}),m})()},4630:(b,S,i)=>{i.d(S,{Bb:()=>ot,XC:()=>k,ZL:()=>W});var n=i(5879),h=i(3680),p=i(6814),f=i(9829),d=i(3651),g=i(4300),m=i(2495),O=i(2831),c=i(6825),A=i(7394),v=i(8645),C=i(4911),M=i(3019),F=i(2096),T=i(2438),u=i(6028),y=i(8484),E=i(6223),H=i(9157),N=i(7921),o=i(4664),D=i(8180),P=i(2181),Y=i(7398),B=i(9397),I=i(5177),L=i(9388);const U=["panel"];function Z(a,l){if(1&a&&(n.TgZ(0,"div",0,1),n.Hsn(2),n.qZA()),2&a){const t=l.id,e=n.oxw();n.Q6J("id",e.id)("ngClass",e._classList)("@panelAnimation",e.isOpen?"visible":"hidden"),n.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(t))}}const w=["*"],G=(0,c.X$)("panelAnimation",[(0,c.SB)("void, hidden",(0,c.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,c.eR)(":enter, hidden => visible",[(0,c.ru)([(0,c.jt)("0.03s linear",(0,c.oB)({opacity:1})),(0,c.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({transform:"scaleY(1)"}))])]),(0,c.eR)(":leave, visible => hidden",[(0,c.jt)("0.075s linear",(0,c.oB)({opacity:0}))])]);let V=0;class j{constructor(l,t){this.source=l,this.option=t}}const X=(0,h.Kr)(class{}),x=new n.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function J(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}});let Q=(()=>{class a extends X{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,m.Ig)(t)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(t){this._autoSelectActiveOption=(0,m.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,m.du)(t).reduce((e,s)=>(e[s]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(t,e,s,r){super(),this._changeDetectorRef=t,this._elementRef=e,this._defaults=s,this._activeOptionChanges=A.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new n.vpe,this.opened=new n.vpe,this.closed=new n.vpe,this.optionActivated=new n.vpe,this._classList={},this.id="mat-autocomplete-"+V++,this.inertGroups=r?.SAFARI||!1,this._autoActiveFirstOption=!!s.autoActiveFirstOption,this._autoSelectActiveOption=!!s.autoSelectActiveOption}ngAfterContentInit(){this._keyManager=new g.s1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new j(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]="primary"===this._color,t["mat-warn"]="warn"===this._color,t["mat-accent"]="accent"===this._color}_skipPredicate(t){return t.disabled}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(x),n.Y36(O.t4))},a.\u0275dir=n.lG2({type:a,viewQuery:function(t,e){if(1&t&&(n.Gf(n.Rgc,7),n.Gf(U,5)),2&t){let s;n.iGM(s=n.CRH())&&(e.template=s.first),n.iGM(s=n.CRH())&&(e.panel=s.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[n.qOj]}),a})(),k=(()=>{class a extends Q{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=(0,m.Ig)(t),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const t of this.options)t._changeDetectorRef.markForCheck()}_skipPredicate(t){return!1}}return a.\u0275fac=function(){let l;return function(e){return(l||(l=n.n5z(a)))(e||a)}}(),a.\u0275cmp=n.Xpm({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,s){if(1&t&&(n.Suo(s,h.K7,5),n.Suo(s,h.ey,5)),2&t){let r;n.iGM(r=n.CRH())&&(e.optionGroups=r),n.iGM(r=n.CRH())&&(e.options=r)}},hostAttrs:["ngSkipHydration","",1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[n._Bn([{provide:h.HF,useExisting:a}]),n.qOj],ngContentSelectors:w,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(n.F$t(),n.YNc(0,Z,3,5,"ng-template"))},dependencies:[p.mk],styles:["div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[G]},changeDetection:0}),a})();const q={provide:E.JU,useExisting:(0,n.Gpc)(()=>W),multi:!0},z=new n.OlP("mat-autocomplete-scroll-strategy"),et={provide:z,deps:[d.aV],useFactory:function tt(a){return()=>a.scrollStrategies.reposition()}};let at=(()=>{class a{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,m.Ig)(t)}constructor(t,e,s,r,_,R,$,lt,rt,ct,pt){this._element=t,this._overlay=e,this._viewContainerRef=s,this._zone=r,this._changeDetectorRef=_,this._dir=$,this._formField=lt,this._document=rt,this._viewportRuler=ct,this._defaults=pt,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=A.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new v.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,C.P)(()=>{const K=this.autocomplete?this.autocomplete.options:null;return K?K.changes.pipe((0,N.O)(K),(0,o.w)(()=>(0,M.T)(...K.map(ut=>ut.onSelectionChange)))):this._zone.onStable.pipe((0,D.q)(1),(0,o.w)(()=>this.optionSelections))}),this._trackedModal=null,this._scrollStrategy=R}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,M.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,P.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,P.h)(()=>this._overlayAttached)):(0,F.of)()).pipe((0,Y.U)(t=>t instanceof h.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,M.T)((0,T.R)(this._document,"click"),(0,T.R)(this._document,"auxclick"),(0,T.R)(this._document,"touchend")).pipe((0,P.h)(t=>{const e=(0,O.sA)(t),s=this._formField?this._formField._elementRef.nativeElement:null,r=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!s||!s.contains(e))&&(!r||!r.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode,s=(0,u.Vb)(t);if(e===u.hY&&!s&&t.preventDefault(),this.activeOption&&e===u.K5&&this.panelOpen&&!s)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const r=this.autocomplete._keyManager.activeItem,_=e===u.LH||e===u.JH;e===u.Mf||_&&!s&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):_&&this._canOpen()&&this.openPanel(),(_||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let e=t.target,s=e.value;"number"===e.type&&(s=""==s?null:parseFloat(s)),this._previousValue!==s&&(this._previousValue=s,this._pendingAutoselectedOption=null,this._onChange(s),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,D.q)(1)),e=this.autocomplete.options.changes.pipe((0,B.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,I.g)(0));return(0,M.T)(t,e).pipe((0,o.w)(()=>(this._zone.run(()=>{const s=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),s!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,D.q)(1)).subscribe(s=>this._setValueAndClose(s))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){const e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;this._updateNativeInputValue(e??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){const e=t?t.source:this._pendingAutoselectedOption;e&&(this._clearPreviousSelectedOption(e),this._assignOptionValue(e.value),this._onChange(e.value),this.autocomplete._emitSelectEvent(e),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new y.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._handleOverlayEvents(t),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this._applyModalPanelOwnership(),this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new d.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],s=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:s},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:s}];let _;_="above"===this.position?r:"below"===this.position?e:[...e,...r],t.withPositions(_)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;if(t.autoActiveFirstOption){let e=-1;for(let s=0;s<t.options.length;s++)if(!t.options.get(s).disabled){e=s;break}t._keyManager.setActiveItem(e)}else t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const e=this.autocomplete,s=(0,h.CB)(t,e.options,e.optionGroups);if(0===t&&1===s)e._setScrollTop(0);else if(e.panel){const r=e.options.toArray()[t];if(r){const _=r._getHostElement(),R=(0,h.jH)(_.offsetTop,_.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(R)}}}_handleOverlayEvents(t){t.keydownEvents().subscribe(e=>{(e.keyCode===u.hY&&!(0,u.Vb)(e)||e.keyCode===u.LH&&(0,u.Vb)(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())}),t.outsidePointerEvents().subscribe()}_applyModalPanelOwnership(){const t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;const e=this.autocomplete.id;this._trackedModal&&(0,g.iD)(this._trackedModal,"aria-owns",e),(0,g.Zf)(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){this._trackedModal&&((0,g.iD)(this._trackedModal,"aria-owns",this.autocomplete.id),this._trackedModal=null)}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(n.SBq),n.Y36(d.aV),n.Y36(n.s_b),n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(z),n.Y36(L.Is,8),n.Y36(H.G_,9),n.Y36(p.K0,8),n.Y36(f.rL),n.Y36(x,8))},a.\u0275dir=n.lG2({type:a,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[n.TTD]}),a})(),W=(()=>{class a extends at{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return a.\u0275fac=function(){let l;return function(e){return(l||(l=n.n5z(a)))(e||a)}}(),a.\u0275dir=n.lG2({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&n.NdJ("focusin",function(){return e._handleFocus()})("blur",function(){return e._onTouched()})("input",function(r){return e._handleInput(r)})("keydown",function(r){return e._handleKeydown(r)})("click",function(){return e._handleClick()}),2&t&&n.uIk("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-controls",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",e.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[n._Bn([q]),n.qOj]}),a})(),ot=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({providers:[et],imports:[d.U8,h.Ng,h.BQ,p.ez,f.ZD,h.Ng,h.BQ]}),a})()}}]);