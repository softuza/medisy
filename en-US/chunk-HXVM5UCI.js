import{a as Ue,b as Qe,k as Ge,n as Ke,s as Ze,w as J,z as qe}from"./chunk-QCDHUYXG.js";import{B as b,C as de,E as q,Ea as He,Fa as Ye,K as Oe,Q as je,Qa as Ve,Ra as $e,Ta as Xe,Ua as We,b as Pe,da as Le,ha as ze,ia as Be,k as Ae,ka as he,na as Ne,o as Fe,ra as pe,y as ue,z as Z}from"./chunk-53RWJDYX.js";import{Bb as m,Cb as u,Cc as j,Db as A,E as N,F as R,Hb as Q,L as H,N as se,Pb as v,Rb as l,Sb as le,Tb as X,Vb as Re,Wa as $,Wb as W,X as Y,Xb as G,Y as re,Z as V,Zb as Te,ac as Se,cb as d,da as ge,db as c,f as z,fb as D,ha as T,hb as U,hc as De,ib as ae,ic as me,ja as ve,jc as F,k as B,kc as Ee,la as S,lb as ce,lc as K,m as ne,ma as be,mb as E,mc as O,na as Me,nb as P,p as oe,pb as Ce,qa as h,ra as p,sa as ye,sb as Ie,tb as _,ub as f,wb as xe,xb as we,yb as ke}from"./chunk-M2QTEBXZ.js";var ht=["mat-menu-item",""];function pt(o,n){o&1&&(ye(),m(0,"svg",3),A(1,"polygon",4),u());}var _t=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ft=["mat-icon, [matMenuItemIcon]","*"];function gt(o,n){if(o&1){let a=Q();m(0,"div",0),v("keydown",function(t){h(a);let i=l();return p(i._handleKeydown(t));})("click",function(){h(a);let t=l();return p(t.closed.emit("click"));})("@transformMenu.start",function(t){h(a);let i=l();return p(i._onAnimationStart(t));})("@transformMenu.done",function(t){h(a);let i=l();return p(i._onAnimationDone(t));}),m(1,"div",1),X(2),u()();}if(o&2){let a=l();P("id",a.panelId)("ngClass",a._classList)("@transformMenu",a._panelAnimationState),E("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null);}}var vt=["*"],_e=new T("MAT_MENU_PANEL"),L=(()=>{let n=class n{constructor(e,t,i,s,r){this._elementRef=e,this._document=t,this._focusMonitor=i,this._parentMenu=s,this._changeDetectorRef=r,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new B(),this._focused=new B(),this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0";}_getHostElement(){return this._elementRef.nativeElement;}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||"";}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement();}};n.ɵfac=function(t){return new(t||n)(c($),c(Pe),c(he),c(_e,8),c(D));},n.ɵcmp=S({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&v("click",function(r){return i._checkDisabled(r);})("mouseenter",function(){return i._handleMouseEnter();}),t&2&&(E("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),Ce("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:["disabled","disabled",j],disableRipple:["disableRipple","disableRipple",j]},exportAs:["matMenuItem"],features:[ce],attrs:ht,ngContentSelectors:ft,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(le(_t),X(0),m(1,"span",0),X(2,1),u(),A(3,"div",1),_(4,pt,2,0,":svg:svg",2)),t&2&&(d(3),P("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),d(1),f(4,i._triggersSubmenu?4:-1));},dependencies:[He],encapsulation:2,changeDetection:0});let o=n;return o;})();var bt=new T("MatMenuContent");var ee={transformMenu:ue("transformMenu",[de("void",b({opacity:0,transform:"scale(0.8)"})),q("void => enter",Z("120ms cubic-bezier(0, 0, 0.2, 1)",b({opacity:1,transform:"scale(1)"}))),q("* => void",Z("100ms 25ms linear",b({opacity:0})))]),fadeInItems:ue("fadeInItems",[de("showing",b({opacity:1})),q("void => *",[b({opacity:0}),Z("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},di=ee.fadeInItems,hi=ee.transformMenu,Mt=0,yt=new T("mat-menu-default-options",{providedIn:"root",factory:Ct});function Ct(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"};}var M=(()=>{let n=class n{get xPosition(){return this._xPosition;}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition;}set yPosition(e){this._yPosition=e,this.setPositionClasses();}set panelClass(e){let t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(i=>{this._classList[i]=!1;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0;}),this._elementRef.nativeElement.className="");}get classList(){return this.panelClass;}set classList(e){this.panelClass=e;}constructor(e,t,i,s){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=s,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new De(),this._classList={},this._panelAnimationState="void",this._animationDone=new B(),this.closed=new U(),this.close=this.closed,this.panelId=`mat-menu-panel-${Mt++}`,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Le(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Y(this._directDescendantItems),re(e=>N(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),s=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[s]&&!i[s].disabled?t.setActiveItem(s):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe();}_hovered(){return this._directDescendantItems.changes.pipe(Y(this._directDescendantItems),re(t=>N(...t.map(i=>i._hovered))));}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:je(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return;}e.stopPropagation();}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(H(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){let t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,s=Object.keys(this._classList).find(r=>r.startsWith(this._elevationPrefix));(!s||s===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i);}setPositionClasses(e=this.xPosition,t=this.yPosition){let i=this._classList;i["mat-menu-before"]=e==="before",i["mat-menu-after"]=e==="after",i["mat-menu-above"]=t==="above",i["mat-menu-below"]=t==="below",this._changeDetectorRef?.markForCheck();}_startAnimation(){this._panelAnimationState="enter";}_resetAnimation(){this._panelAnimationState="void";}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1;}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0);}_updateDirectDescendants(){this._allItems.changes.pipe(Y(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}};n.ɵfac=function(t){return new(t||n)(c($),c(ae),c(yt),c(D));},n.ɵcmp=S({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,s){if(t&1&&(K(s,bt,5),K(s,L,5),K(s,L,4)),t&2){let r;F(r=O())&&(i.lazyContent=r.first),F(r=O())&&(i._allItems=r),F(r=O())&&(i.items=r);}},viewQuery:function(t,i){if(t&1&&Ee(me,5),t&2){let s;F(s=O())&&(i.templateRef=s.first);}},hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(t,i){t&2&&E("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:["overlapTrigger","overlapTrigger",j],hasBackdrop:["hasBackdrop","hasBackdrop",e=>e==null?null:j(e)],panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Te([{provide:_e,useExisting:n}]),ce],ngContentSelectors:vt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(le(),_(0,gt,3,6,"ng-template"));},dependencies:[Ae],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[ee.transformMenu,ee.fadeInItems]},changeDetection:0});let o=n;return o;})(),it=new T("mat-menu-scroll-strategy");function It(o){return()=>o.scrollStrategies.reposition();}var xt={provide:it,deps:[J],useFactory:It},Je=Oe({passive:!0});var nt=(()=>{let n=class n{get _deprecatedMatMenuTriggerFor(){return this.menu;}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu;}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()));}constructor(e,t,i,s,r,g,C,I,x){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=g,this._dir=C,this._focusMonitor=I,this._ngZone=x,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=z.EMPTY,this._hoverSubscription=z.EMPTY,this._menuCloseSubscription=z.EMPTY,this._changeDetectorRef=ve(D),this._handleTouchStart=w=>{Be(w)||(this._openedBy="touch");},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new U(),this.onMenuOpen=this.menuOpened,this.menuClosed=new U(),this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=r instanceof M?r:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,Je);}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Je),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe();}get menuOpen(){return this._menuOpen;}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr";}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu);}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu();}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),i=t.getConfig(),s=i.positionStrategy;this._setPosition(e,s),i.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof M&&(e._startAnimation(),e._directDescendantItems.changes.pipe(V(e.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0);}));}closeMenu(){this.menu?.close.emit();}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}updatePosition(){this._overlayRef?.updatePosition();}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof M?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(R(i=>i.toState==="void"),H(1),V(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach());}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0);}_setMenuElevation(e){if(e.setElevation){let t=0,i=e.parentMenu;for(;i;)t++,i=i.parentMenu;e.setElevation(t);}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe();}return this._overlayRef;}_getOverlayConfig(e){return new Ze({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir});}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{let s=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(s,r)):e.setPositionClasses(s,r);});}_setPosition(e,t){let[i,s]=e.xPosition==="before"?["end","start"]:["start","end"],[r,g]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[C,I]=[r,g],[x,w]=[i,s],k=0;if(this.triggersSubmenu()){if(w=i=e.xPosition==="before"?"start":"end",s=x=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let fe=this._parentMaterialMenu.items.first;this._parentInnerPadding=fe?fe._getHostElement().offsetTop:0;}k=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(C=r==="top"?"bottom":"top",I=g==="top"?"bottom":"top");t.withPositions([{originX:i,originY:C,overlayX:x,overlayY:r,offsetY:k},{originX:s,originY:C,overlayX:w,overlayY:r,offsetY:k},{originX:i,originY:I,overlayX:x,overlayY:g,offsetY:-k},{originX:s,originY:I,overlayX:w,overlayY:g,offsetY:-k}]);}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:oe(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(R(r=>r!==this._menuItemInstance),R(()=>this._menuOpen)):oe();return N(e,i,s,t);}_handleMousedown(e){ze(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(R(e=>e===this._menuItemInstance&&!e.disabled),se(0,ne)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof M&&this.menu._isAnimating?this.menu._animationDone.pipe(H(1),se(0,ne),V(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu();}));}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ke(e.templateRef,this._viewContainerRef)),this._portal;}};n.ɵfac=function(t){return new(t||n)(c(J),c($),c(Ie),c(it),c(_e,8),c(L,10),c(Ne,8),c(he),c(ae));},n.ɵdir=Me({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&v("click",function(r){return i._handleClick(r);})("mousedown",function(r){return i._handleMousedown(r);})("keydown",function(r){return i._handleKeydown(r);}),t&2&&E("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]});let o=n;return o;})(),ot=(()=>{let n=class n{};n.ɵfac=function(t){return new(t||n)();},n.ɵmod=be({type:n}),n.ɵinj=ge({providers:[xt],imports:[Fe,Ye,pe,qe,Ge,pe]});let o=n;return o;})();var y=function(o){return o[o.Item=0]="Item",o[o.Divider=1]="Divider",o;}(y||{});function kt(o,n){if(o&1&&(m(0,"mat-icon"),W(1),u()),o&2){let a=l();d(1),G(a.menu.icon);}}function Rt(o,n){if(o&1&&(m(0,"mat-icon"),W(1),u()),o&2){let a=l(2).$implicit;d(1),G(a.icon);}}function Tt(o,n){if(o&1&&(m(0,"span"),W(1),u()),o&2){let a=l(2).$implicit;d(1),G(a.title);}}function St(o,n){if(o&1){let a=Q();m(0,"button",2),v("click",function(){h(a);let t=l().$implicit,i=l();return p(i.click(t));}),_(1,Rt,2,1,"mat-icon")(2,Tt,2,1,"span"),u();}if(o&2){let a=l().$implicit;d(1),f(1,a.icon?1:-1),d(1),f(2,a.title?2:-1);}}function Dt(o,n){o&1&&A(0,"mat-divider");}function Et(o,n){if(o&1&&(m(0,"div"),_(1,St,3,2)(2,Dt,1,0),u()),o&2){let a=n.$implicit,e=l(),t;d(1),f(1,(t=a.type)===e.menuItemType.Item?1:t===e.menuItemType.Divider?2:-1);}}var Ii=(()=>{let n=class n{constructor(){this.menuItemType=y;}click(e){if(e.clickFn){let t=this.index??this.menu.items?.indexOf(e)??-1;e.clickFn(this.data,t);}}};n.ɵfac=function(t){return new(t||n)();},n.ɵcmp=S({type:n,selectors:[["sz-ui-menu"]],inputs:{menu:"menu",data:"data",index:"index"},standalone:!0,features:[Se],decls:6,vars:2,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"]],template:function(t,i){if(t&1&&(m(0,"button",0),_(1,kt,2,1,"mat-icon"),u(),m(2,"mat-menu",null,1),we(4,Et,3,1,"div",null,xe),u()),t&2){let s=Re(3);P("matMenuTriggerFor",s),d(1),f(1,i.menu.icon?1:-1),ke(4,i.menu.items);}},dependencies:[ot,M,L,nt,We,Xe,$e,Ve,Qe,Ue],encapsulation:2});let o=n;return o;})();var te={close:"Close",save:"Save",reset:"Reset",delete:"Delete",confirm:"Confirm",filter:"Filter",edit:"Edit",print:"Print"};var ie={delete:"delete",edit:"edit",print:"print",menu_vert:"more_vert"};var st=class o{static edit(n){return o.default(te.edit,ie.edit,n);}static delete(n){return o.default(te.delete,ie.delete,n);}static print(n){return o.default(te.print,ie.print,n);}static default(n,a,e){return{type:y.Item,title:n,icon:a,clickFn:e};}static divider(){return{type:y.Divider};}};var rt=class o{static default(n,a){return{icon:n,items:a};}static more(n){return o.default("more_vert",n);}};export{L as a,M as b,nt as c,ot as d,y as e,Ii as f,te as g,ie as h,st as i,rt as j};/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/