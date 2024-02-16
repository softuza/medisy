import{A as T,B as fe,D as oe,O as Xe,P as We,ca as qe,fa as Je,ka as et,oa as V,ra as tt,w as _e,x as ne}from"./chunk-7YDZJT25.js";import{$ as je,B as Oe,Ea as Ue,Fa as Qe,Ga as Ge,I as Le,Ia as Ke,Ja as Ze,X as Ne,aa as Be,b as Ee,ca as ge,fa as He,ja as ve,k as Fe,o as Ae,sa as Ve,ta as Ye}from"./chunk-NQOK3G2M.js";import{$b as te,Ab as h,Cb as we,Db as Se,Eb as ke,F as G,Fb as u,Fc as H,G as P,Gb as d,Hb as L,Lb as J,M as X,O as le,Tb as x,Vb as l,Wb as pe,Xb as ee,Y as W,Z as ce,Zb as De,_ as K,_a as Z,_b as he,ac as $e,bc as N,cc as j,dc as ie,ec as y,fa as ye,fc as I,g as U,gb as m,gc as Re,hb as c,hc as Pe,ja as E,jb as A,kc as B,l as Q,la as me,lb as q,mb as ue,n as se,na as p,oa as F,pa as Ce,pb as de,q as re,qa as xe,qb as Te,rb as _,ta as v,ua as b,ub as O,va as Ie,vb as M,xb as ze}from"./chunk-XEAZENSO.js";var g={abbreviation:"Abbreviation",add:"Add",address:"Address",addresses:"Addresses",analyses:"Analyses",analysis:"Analysis",analysisId:"Analysis Id",birthDate:"Birth Date",close:"Close",code:"Code",collectedAt:"Collected Date",comparisonOperator:"Comparison Operator",comparisonType:"Comparison Operator",confirm:"Confirm",create:"Create",createAnalysisDescription:"Create a new analysis",createdAt:"Created Date",dashboard:"Dashboard",delete:"Delete",description:"Description",discipline:"Discipline",disciplines:"Disciplines",documents:"Documents",documentType:"Document Type",edit:"Edit",email:"Email",emails:"Emails",emailType:"Email Type",enabled:"Enabled",end:"End",fatherName:"Father name",favorite:"Favorite",favorites:"favorites",filter:"Filter",firstName:"First name",group:"Group",hide:"Hide",id:"Id",laboratories:"Laboratories",laboratory:"Laboratory",language:"Language",languages:"Languages",lastName:"Last name",latin:"Latin",latinName:"Latin",manage:"Manage",menu:"Menu",motherName:"Mother name",name:"Name",names:"Names",nationality:"Nationality",note:"Note",notifications:"Notifications",number:"number",patient:"Patient",patients:"Patients",person:"Person",personId:"Person Id",persons:"Persons",phone:"Phone",phones:"Phones",phoneType:"Phone Type",phoneTypes:"Phone Types",position:"Position",price:"Price",primary:"Primary",print:"Print",publish:"Publish",qr:"QR Code",referenceGroup:"Reference Group",referenceValue:"Reference Value",referenceValues:"Reference Values",report:"Report",reports:"Reports",reset:"Reset",save:"Save",settings:"Settings",sex:"Sex",show:"Show",specimens:"Specimens",specimenType:"Specimen Type",specimenTypes:"Specimen Types",start:"Start",state:"State",test:"Test",testResult:"Test Result",tests:"Tests",testType:"Test Group",testTypes:"Test Groups",title:"Title",type:"Type",unit:"Unit",units:"Units",updatedAt:"Updated Date",user:"User",username:"Username",users:"Users",value:"Value"};var ft=["mat-menu-item",""];function gt(n,o){n&1&&(Ie(),u(0,"svg",3),L(1,"polygon",4),d());}var vt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],bt=["mat-icon, [matMenuItemIcon]","*"];function Mt(n,o){if(n&1){let a=J();u(0,"div",0),x("keydown",function(t){v(a);let i=l();return b(i._handleKeydown(t));})("click",function(){v(a);let t=l();return b(t.closed.emit("click"));})("@transformMenu.start",function(t){v(a);let i=l();return b(i._onAnimationStart(t));})("@transformMenu.done",function(t){v(a);let i=l();return b(i._onAnimationDone(t));}),u(1,"div",1),ee(2),d()();}if(n&2){let a=l();M("id",a.panelId)("ngClass",a._classList)("@transformMenu",a._panelAnimationState),O("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null);}}var yt=["*"],be=new E("MAT_MENU_PANEL"),Y=(()=>{let o=class o{constructor(e,t,i,s,r){this._elementRef=e,this._document=t,this._focusMonitor=i,this._parentMenu=s,this._changeDetectorRef=r,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new Q(),this._focused=new Q(),this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0";}_getHostElement(){return this._elementRef.nativeElement;}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||"";}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement();}};o.ɵfac=function(t){return new(t||o)(c(Z),c(Ee),c(ge),c(be,8),c(A));},o.ɵcmp=F({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&x("click",function(r){return i._checkDisabled(r);})("mouseenter",function(){return i._handleMouseEnter();}),t&2&&(O("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),ze("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:[p.HasDecoratorInputTransform,"disabled","disabled",H],disableRipple:[p.HasDecoratorInputTransform,"disableRipple","disableRipple",H]},exportAs:["matMenuItem"],standalone:!0,features:[de,B],attrs:ft,ngContentSelectors:bt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(pe(vt),ee(0),u(1,"span",0),ee(2,1),d(),L(3,"div",1),_(4,gt,2,0,":svg:svg",2)),t&2&&(m(3),M("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),m(),h(4,i._triggersSubmenu?4:-1));},dependencies:[Ve],encapsulation:2,changeDetection:0});let n=o;return n;})();var Ct=new E("MatMenuContent");var ae={transformMenu:_e("transformMenu",[fe("void",T({opacity:0,transform:"scale(0.8)"})),oe("void => enter",ne("120ms cubic-bezier(0, 0, 0.2, 1)",T({opacity:1,transform:"scale(1)"}))),oe("* => void",ne("100ms 25ms linear",T({opacity:0})))]),fadeInItems:_e("fadeInItems",[fe("showing",T({opacity:1})),oe("void => *",[T({opacity:0}),ne("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},yi=ae.fadeInItems,Ci=ae.transformMenu,xt=0,It=new E("mat-menu-default-options",{providedIn:"root",factory:Tt});function Tt(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"};}var z=(()=>{let o=class o{get xPosition(){return this._xPosition;}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition;}set yPosition(e){this._yPosition=e,this.setPositionClasses();}set panelClass(e){let t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(i=>{this._classList[i]=!1;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0;}),this._elementRef.nativeElement.className="");}get classList(){return this.panelClass;}set classList(e){this.panelClass=e;}constructor(e,t,i,s){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=s,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new De(),this._classList={},this._panelAnimationState="void",this._animationDone=new Q(),this.closed=new q(),this.close=this.closed,this.panelId=`mat-menu-panel-${xt++}`,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ne(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(W(this._directDescendantItems),ce(e=>G(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),s=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[s]&&!i[s].disabled?t.setActiveItem(s):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe();}_hovered(){return this._directDescendantItems.changes.pipe(W(this._directDescendantItems),ce(t=>G(...t.map(i=>i._hovered))));}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Le(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return;}e.stopPropagation();}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(X(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){let t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,s=Object.keys(this._classList).find(r=>r.startsWith(this._elevationPrefix));(!s||s===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i);}setPositionClasses(e=this.xPosition,t=this.yPosition){let i=this._classList;i["mat-menu-before"]=e==="before",i["mat-menu-after"]=e==="after",i["mat-menu-above"]=t==="above",i["mat-menu-below"]=t==="below",this._changeDetectorRef?.markForCheck();}_startAnimation(){this._panelAnimationState="enter";}_resetAnimation(){this._panelAnimationState="void";}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1;}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0);}_updateDirectDescendants(){this._allItems.changes.pipe(W(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}};o.ɵfac=function(t){return new(t||o)(c(Z),c(ue),c(It),c(A));},o.ɵcmp=F({type:o,selectors:[["mat-menu"]],contentQueries:function(t,i,s){if(t&1&&(te(s,Ct,5),te(s,Y,5),te(s,Y,4)),t&2){let r;N(r=j())&&(i.lazyContent=r.first),N(r=j())&&(i._allItems=r),N(r=j())&&(i.items=r);}},viewQuery:function(t,i){if(t&1&&$e(he,5),t&2){let s;N(s=j())&&(i.templateRef=s.first);}},hostVars:3,hostBindings:function(t,i){t&2&&O("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[p.None,"aria-label","ariaLabel"],ariaLabelledby:[p.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[p.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[p.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",H],hasBackdrop:[p.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",e=>e==null?null:H(e)],panelClass:[p.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[Pe([{provide:be,useExisting:o}]),de,B],ngContentSelectors:yt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(pe(),_(0,Mt,3,6,"ng-template"));},dependencies:[Fe],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[ae.transformMenu,ae.fadeInItems]},changeDetection:0});let n=o;return n;})(),at=new E("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=me(V);return()=>n.scrollStrategies.reposition();}});function zt(n){return()=>n.scrollStrategies.reposition();}var wt={provide:at,deps:[V],useFactory:zt},it=Oe({passive:!0});var st=(()=>{let o=class o{get _deprecatedMatMenuTriggerFor(){return this.menu;}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu;}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()));}constructor(e,t,i,s,r,C,S,k,D){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=C,this._dir=S,this._focusMonitor=k,this._ngZone=D,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=U.EMPTY,this._hoverSubscription=U.EMPTY,this._menuCloseSubscription=U.EMPTY,this._changeDetectorRef=me(A),this._handleTouchStart=$=>{Be($)||(this._openedBy="touch");},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new q(),this.onMenuOpen=this.menuOpened,this.menuClosed=new q(),this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=r instanceof z?r:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,it);}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,it),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe();}get menuOpen(){return this._menuOpen;}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr";}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu);}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu();}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),i=t.getConfig(),s=i.positionStrategy;this._setPosition(e,s),i.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof z&&(e._startAnimation(),e._directDescendantItems.changes.pipe(K(e.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0);}));}closeMenu(){this.menu?.close.emit();}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}updatePosition(){this._overlayRef?.updatePosition();}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof z?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(P(i=>i.toState==="void"),X(1),K(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach());}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0);}_setMenuElevation(e){if(e.setElevation){let t=0,i=e.parentMenu;for(;i;)t++,i=i.parentMenu;e.setElevation(t);}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe();}return this._overlayRef;}_getOverlayConfig(e){return new et({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir});}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{let s=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(s,r)):e.setPositionClasses(s,r);});}_setPosition(e,t){let[i,s]=e.xPosition==="before"?["end","start"]:["start","end"],[r,C]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[S,k]=[r,C],[D,$]=[i,s],R=0;if(this.triggersSubmenu()){if($=i=e.xPosition==="before"?"start":"end",s=D=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Me=this._parentMaterialMenu.items.first;this._parentInnerPadding=Me?Me._getHostElement().offsetTop:0;}R=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(S=r==="top"?"bottom":"top",k=C==="top"?"bottom":"top");t.withPositions([{originX:i,originY:S,overlayX:D,overlayY:r,offsetY:R},{originX:s,originY:S,overlayX:$,overlayY:r,offsetY:R},{originX:i,originY:k,overlayX:D,overlayY:C,offsetY:-R},{originX:s,originY:k,overlayX:$,overlayY:C,offsetY:-R}]);}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:re(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(P(r=>r!==this._menuItemInstance),P(()=>this._menuOpen)):re();return G(e,i,s,t);}_handleMousedown(e){je(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(P(e=>e===this._menuItemInstance&&!e.disabled),le(0,se)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof z&&this.menu._isAnimating?this.menu._animationDone.pipe(X(1),le(0,se),K(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu();}));}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Je(e.templateRef,this._viewContainerRef)),this._portal;}};o.ɵfac=function(t){return new(t||o)(c(V),c(Z),c(Te),c(at),c(be,8),c(Y,10),c(He,8),c(ge),c(ue));},o.ɵdir=xe({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&x("click",function(r){return i._handleClick(r);})("mousedown",function(r){return i._handleMousedown(r);})("keydown",function(r){return i._handleKeydown(r);}),t&2&&O("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[p.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[p.None,"matMenuTriggerFor","menu"],menuData:[p.None,"matMenuTriggerData","menuData"],restoreFocus:[p.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let n=o;return n;})(),rt=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=Ce({type:o}),o.ɵinj=ye({providers:[wt],imports:[Ae,Ye,ve,tt,qe,ve]});let n=o;return n;})();var w=function(n){return n[n.Item=0]="Item",n[n.Divider=1]="Divider",n;}(w||{});function kt(n,o){if(n&1&&(u(0,"mat-icon",0),y(1),d()),n&2){l();let a=ie(3),e=l();M("matMenuTriggerFor",a),m(),I(e.menu.icon);}}function Dt(n,o){if(n&1&&y(0),n&2){let a=l(4);Re(" ",a.menu.title," ");}}function $t(n,o){if(n&1&&(u(0,"mat-icon"),y(1),d()),n&2){let a=l(4);m(),I(a.menu.icon);}}function Rt(n,o){if(n&1&&(u(0,"button",2),_(1,Dt,1,1)(2,$t,2,1,"mat-icon"),d()),n&2){l(2);let a=ie(3),e=l();M("matMenuTriggerFor",a),m(),h(1,e.menu.title?1:-1),m(),h(2,e.menu.icon?2:-1);}}function Pt(n,o){if(n&1&&(u(0,"mat-icon"),y(1),d()),n&2){let a=l(4);m(),I(a.menu.icon);}}function Et(n,o){if(n&1&&(u(0,"button",3),_(1,Pt,2,1,"mat-icon"),d()),n&2){l(2);let a=ie(3),e=l();M("matMenuTriggerFor",a),m(),h(1,e.menu.icon?1:-1);}}function Ft(n,o){if(n&1&&_(0,Rt,3,3,"button",2)(1,Et,2,2),n&2){let a=l(2);h(0,a.menu.title?0:1);}}function At(n,o){if(n&1&&(u(0,"mat-icon"),y(1),d()),n&2){let a=l(2).$implicit;m(),I(a.icon);}}function Ot(n,o){if(n&1&&(u(0,"span"),y(1),d()),n&2){let a=l(2).$implicit;m(),I(a.title);}}function Lt(n,o){if(n&1){let a=J();u(0,"button",4),x("click",function(){v(a);let t=l().$implicit,i=l(2);return b(i.click(t));}),_(1,At,2,1,"mat-icon")(2,Ot,2,1,"span"),d();}if(n&2){let a=l().$implicit;m(),h(1,a.icon?1:-1),m(),h(2,a.title?2:-1);}}function Nt(n,o){n&1&&L(0,"mat-divider");}function jt(n,o){if(n&1&&(u(0,"div"),_(1,Lt,3,2)(2,Nt,1,0),d()),n&2){let a=o.$implicit,e=l(2),t;m(),h(1,(t=a.type)===e.menuItemType.Item?1:t===e.menuItemType.Divider?2:-1);}}function Bt(n,o){if(n&1&&(_(0,kt,2,2,"mat-icon",0)(1,Ft,2,1),u(2,"mat-menu",null,1),Se(4,jt,3,1,"div",null,we),d()),n&2){let a=l();h(0,a.buttonless?0:1),m(4),ke(a.menu.items);}}var Ri=(()=>{let o=class o{constructor(){this.buttonless=!1,this.menuItemType=w;}click(e){if(e.clickFn){let t=this.index??this.menu.items?.indexOf(e)??-1;e.clickFn(this.data??this.menu.data,t);}}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=F({type:o,selectors:[["sz-ui-menu"]],inputs:{menu:"menu",data:"data",index:"index",buttonless:"buttonless"},standalone:!0,features:[B],decls:1,vars:1,consts:[[3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(t,i){t&1&&_(0,Bt,6,1,"mat-menu"),t&2&&h(0,i.menu.items&&i.menu.items.length>0?0:-1);},dependencies:[rt,z,Y,st,Ze,Ke,Ge,Ue,Qe,We,Xe],encapsulation:2});let n=o;return n;})();var f={delete:"delete",edit:"edit",print:"print",menu_vert:"more_vert",add:"add",show:"show",hide:"hide",visibility:"visibility",visibility_off:"visibility_off",grid_view:"grid_view"};var lt=class n{static edit(o){return n.default(g.edit,f.edit,o);}static add(o){return n.default(g.add,f.add,o);}static show(o){return n.default(g.show,f.visibility,o);}static hide(o){return n.default(g.hide,f.visibility_off,o);}static manage(o){return n.default(g.manage,f.grid_view,o);}static delete(o){return n.default(g.delete,f.delete,o);}static print(o){return n.default(g.print,f.print,o);}static default(o,a,e){return{type:w.Item,title:o,icon:a,clickFn:e};}static divider(){return{type:w.Divider};}};var ct=class n{static default(o,a,e){return{title:o,icon:a,items:e};}static titleless(o,a){return{icon:o,items:a};}static more(o){return n.titleless(f.menu_vert,o);}};export{g as a,Y as b,z as c,st as d,rt as e,Ri as f,lt as g,ct as h};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/