import{a as rt,b as mt}from"./chunk-KL5EJB5K.js";import{a as st,b as at,c as f}from"./chunk-Y57UOOVT.js";import{G as Ze,J as Je,O as et,S as Y,V as tt,c as ve,d as oe,g as T,h as be,j as se}from"./chunk-RJITGV4Q.js";import{D as Qe,E as Xe,G as Me,J as $e,N as ye,V as qe,W as We,c as Ve,ga as Ge,ha as Ke,ia as it,ja as nt,k as Ye,ka as ot,z as Ue}from"./chunk-VXXQSTLE.js";import{b as Ne,o as He}from"./chunk-WHAEY7W6.js";import{$b as ie,Ab as Pe,Bb as Fe,C as q,Ca as he,Db as p,E as F,Ec as H,Fb as Ae,Ga as Z,Gb as Oe,Ha as J,Hb as je,Ia as Se,Ib as u,Jb as d,Jc as V,K as le,Kb as L,M as ue,Ob as ee,Vb as I,X as W,Xb as m,Y as de,Yb as ge,Z as G,Zb as te,a as X,ab as l,ac as Le,bb as c,bc as B,cc as z,db as pe,dc as ne,ea as Te,ec as y,f as $,fc as x,ga as A,gc as Be,hb as _e,i as me,ja as K,kb as De,kc as ze,lb as Ee,lc as N,m as ce,na as O,oa as ke,pa as we,qb as fe,ub as _,wa as b,xa as M,xb as j,ya as Re,yb as v}from"./chunk-WEQMZHJB.js";import{a as Q,b as xe}from"./chunk-ZSRQUDS2.js";var k=function(o){return o[o.Item=0]="Item",o[o.Divider=1]="Divider",o}(k||{}),h=class o{constructor(){this.type=k.Item}static divider(){let i=new o;return i.type=k.Divider,i}static item(i,s,e){let t=new o;return t.type=k.Item,t.title=i,t.icon=s,t.clickFn=e,t}setTitle(i){return this.title=i,this}setIcon(i){return this.icon=i,this}setIconColor(i){return this.iconColor=i,this}setDisabled(i){return this.disabled=i,this}setType(i){return this.type=i,this}setClickFn(i){return this.clickFn=i,this}};var It=["mat-menu-item",""],xt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Tt=["mat-icon, [matMenuItemIcon]","*"];function kt(o,i){o&1&&(Re(),u(0,"svg",2),L(1,"polygon",3),d())}var wt=["*"];function Rt(o,i){if(o&1){let s=ee();u(0,"div",0),I("keydown",function(t){b(s);let n=m();return M(n._handleKeydown(t))})("click",function(){b(s);let t=m();return M(t.closed.emit("click"))})("@transformMenu.start",function(t){b(s);let n=m();return M(n._onAnimationStart(t))})("@transformMenu.done",function(t){b(s);let n=m();return M(n._onAnimationDone(t))}),u(1,"div",1),te(2),d()()}if(o&2){let s=m();Fe(s._classList),v("id",s.panelId)("@transformMenu",s._panelAnimationState),j("aria-label",s.ariaLabel||null)("aria-labelledby",s.ariaLabelledby||null)("aria-describedby",s.ariaDescribedby||null)}}var Ce=new A("MAT_MENU_PANEL"),U=(()=>{let i=class i{constructor(e,t,n,a,r){this._elementRef=e,this._document=t,this._focusMonitor=n,this._parentMenu=a,this._changeDetectorRef=r,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new $,this._focused=new $,this._highlighted=!1,this._triggersSubmenu=!1,a?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};i.\u0275fac=function(t){return new(t||i)(c(Z),c(Ne),c(Me),c(Ce,8),c(H))},i.\u0275cmp=O({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&I("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(j("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),Pe("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V]},exportAs:["matMenuItem"],standalone:!0,features:[fe,N],attrs:It,ngContentSelectors:Tt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(ge(xt),te(0),u(1,"span",0),te(2,1),d(),L(3,"div",1),_(4,kt,2,0,":svg:svg",2)),t&2&&(l(3),v("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),l(),p(n._triggersSubmenu?4:-1))},dependencies:[qe],encapsulation:2,changeDetection:0});let o=i;return o})();var St=new A("MatMenuContent");var ae={transformMenu:ve("transformMenu",[be("void",T({opacity:0,transform:"scale(0.8)"})),se("void => enter",oe("120ms cubic-bezier(0, 0, 0.2, 1)",T({opacity:1,transform:"scale(1)"}))),se("* => void",oe("100ms 25ms linear",T({opacity:0})))]),fadeInItems:ve("fadeInItems",[be("showing",T({opacity:1})),se("void => *",[T({opacity:0}),oe("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Di=ae.fadeInItems,Ei=ae.transformMenu,Dt=0,Et=new A("mat-menu-default-options",{providedIn:"root",factory:Pt});function Pt(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var w=(()=>{let i=class i{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass,n=Q({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,n,a){this._elementRef=e,this._changeDetectorRef=a,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new Se,this._classList={},this._panelAnimationState="void",this._animationDone=new $,this.closed=new J,this.close=this.closed,this.panelId=`mat-menu-panel-${Dt++}`,this._injector=K(he),this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ue(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(W(this._directDescendantItems),de(e=>q(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(W(this._directDescendantItems),de(t=>q(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ye(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=De(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){let t=Math.min(this._baseElevation+e,24),n=`${this._elevationPrefix}${t}`,a=Object.keys(this._classList).find(r=>r.startsWith(this._elevationPrefix));if(!a||a===this._previousElevation){let r=Q({},this._classList);this._previousElevation&&(r[this._previousElevation]=!1),r[n]=!0,this._previousElevation=n,this._classList=r}}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=xe(Q({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(W(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};i.\u0275fac=function(t){return new(t||i)(c(Z),c(_e),c(Et),c(H))},i.\u0275cmp=O({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,a){if(t&1&&(ie(a,St,5),ie(a,U,5),ie(a,U,4)),t&2){let r;B(r=z())&&(n.lazyContent=r.first),B(r=z())&&(n._allItems=r),B(r=z())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&Le(pe,5),t&2){let a;B(a=z())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&j("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",V],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:V(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[ze([{provide:Ce,useExisting:i}]),fe,N],ngContentSelectors:wt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(ge(),_(0,Rt,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[ae.transformMenu,ae.fadeInItems]},changeDetection:0});let o=i;return o})(),dt=new A("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=K(Y);return()=>o.scrollStrategies.reposition()}});function Ft(o){return()=>o.scrollStrategies.reposition()}var At={provide:dt,deps:[Y],useFactory:Ft},ct=Ve({passive:!0});var ht=(()=>{let i=class i{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,n,a,r,C,R,S,D){this._overlay=e,this._element=t,this._viewContainerRef=n,this._menuItemInstance=C,this._dir=R,this._focusMonitor=S,this._ngZone=D,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=X.EMPTY,this._hoverSubscription=X.EMPTY,this._menuCloseSubscription=X.EMPTY,this._changeDetectorRef=K(H),this._handleTouchStart=E=>{Xe(E)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new J,this.onMenuOpen=this.menuOpened,this.menuClosed=new J,this.onMenuClose=this.menuClosed,this._scrollStrategy=a,this._parentMaterialMenu=r instanceof w?r:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,ct)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,ct),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),n=t.getConfig(),a=n.positionStrategy;this._setPosition(e,a),n.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof w&&(e._startAnimation(),e._directDescendantItems.changes.pipe(G(e.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof w?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(F(n=>n.toState==="void"),le(1),G(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,n=e.parentMenu;for(;n;)t++,n=n.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new et({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{let a=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(a,r)):e.setPositionClasses(a,r)})}_setPosition(e,t){let[n,a]=e.xPosition==="before"?["end","start"]:["start","end"],[r,C]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[R,S]=[r,C],[D,E]=[n,a],P=0;if(this.triggersSubmenu()){if(E=n=e.xPosition==="before"?"start":"end",a=D=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ie=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ie?Ie._getHostElement().offsetTop:0}P=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(R=r==="top"?"bottom":"top",S=C==="top"?"bottom":"top");t.withPositions([{originX:n,originY:R,overlayX:D,overlayY:r,offsetY:P},{originX:a,originY:R,overlayX:E,overlayY:r,offsetY:P},{originX:n,originY:S,overlayX:D,overlayY:C,offsetY:-P},{originX:a,originY:S,overlayX:E,overlayY:C,offsetY:-P}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:ce(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(F(r=>r!==this._menuItemInstance),F(()=>this._menuOpen)):ce();return q(e,n,a,t)}_handleMousedown(e){Qe(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(F(e=>e===this._menuItemInstance&&!e.disabled),ue(0,me)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof w&&this.menu._isAnimating?this.menu._animationDone.pipe(le(1),ue(0,me),G(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Je(e.templateRef,this._viewContainerRef)),this._portal}};i.\u0275fac=function(t){return new(t||i)(c(Y),c(Z),c(Ee),c(dt),c(Ce,8),c(U,10),c($e,8),c(Me),c(_e))},i.\u0275dir=we({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&I("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&j("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let o=i;return o})(),pt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=ke({type:i}),i.\u0275inj=Te({providers:[At],imports:[He,We,ye,tt,Ze,ye]});let o=i;return o})();function jt(o,i){if(o&1&&(u(0,"mat-icon",1),y(1),d()),o&2){let s;m();let e=ne(3),t=m();v("matMenuTriggerFor",e)("matTooltip",(s=t.menu.toolTip)!==null&&s!==void 0?s:""),l(),x(t.menu.icon)}}function Lt(o,i){if(o&1&&y(0),o&2){let s=m(4);Be(" ",s.menu.title," ")}}function Bt(o,i){if(o&1&&(u(0,"mat-icon"),y(1),d()),o&2){let s=m(4);l(),x(s.menu.icon)}}function zt(o,i){if(o&1&&(u(0,"button",2),_(1,Lt,1,1)(2,Bt,2,1,"mat-icon"),d()),o&2){let s;m(2);let e=ne(3),t=m();v("matMenuTriggerFor",e)("matTooltip",(s=t.menu.toolTip)!==null&&s!==void 0?s:""),l(),p(t.menu.title?1:-1),l(),p(t.menu.icon?2:-1)}}function Nt(o,i){if(o&1&&(u(0,"mat-icon"),y(1),d()),o&2){let s=m(4);l(),x(s.menu.icon)}}function Ht(o,i){if(o&1&&(u(0,"button",3),_(1,Nt,2,1,"mat-icon"),d()),o&2){let s;m(2);let e=ne(3),t=m();v("matMenuTriggerFor",e)("matTooltip",(s=t.menu.toolTip)!==null&&s!==void 0?s:""),l(),p(t.menu.icon?1:-1)}}function Vt(o,i){if(o&1&&_(0,zt,3,4,"button",2)(1,Ht,2,3,"button",3),o&2){let s=m(2);p(s.menu.title?0:1)}}function Yt(o,i){if(o&1&&(u(0,"mat-icon",6),y(1),d()),o&2){let s=m(2).$implicit;v("color",s.iconColor),l(),x(s.icon)}}function Ut(o,i){if(o&1&&(u(0,"span"),y(1),d()),o&2){let s=m(2).$implicit;l(),x(s.title)}}function Qt(o,i){if(o&1){let s=ee();u(0,"button",5),I("click",function(){b(s);let t=m().$implicit,n=m(2);return M(n.click(t))}),_(1,Yt,2,2,"mat-icon",6)(2,Ut,2,1,"span"),d()}if(o&2){let s=m().$implicit;l(),p(s.icon?1:-1),l(),p(s.title?2:-1)}}function Xt(o,i){o&1&&L(0,"mat-divider")}function $t(o,i){if(o&1&&(u(0,"div"),_(1,Qt,3,2,"button",4)(2,Xt,1,0,"mat-divider"),d()),o&2){let s,e=i.$implicit,t=m(2);l(),p((s=e.type)===t.menuItemType.Item?1:s===t.menuItemType.Divider?2:-1)}}function qt(o,i){if(o&1&&(_(0,jt,2,3,"mat-icon",1)(1,Vt,2,1),u(2,"mat-menu",null,0),Oe(4,$t,3,1,"div",null,Ae),d()),o&2){let s=m();p(s.buttonless?0:1),l(4),je(s.menu.items)}}var Yi=(()=>{let i=class i{constructor(){this.buttonless=!1,this.menuItemType=k}click(e){if(e.clickFn){let t=this.index??this.menu.items?.indexOf(e)??-1;e.clickFn(this.data??this.menu.data,t)}}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=O({type:i,selectors:[["sz-ui-menu"]],inputs:{menu:"menu",data:"data",index:"index",buttonless:"buttonless"},standalone:!0,features:[N],decls:1,vars:1,consts:[["itemMenu","matMenu"],[3,"matMenuTriggerFor","matTooltip"],["mat-button","",3,"matMenuTriggerFor","matTooltip"],["mat-icon-button","",3,"matMenuTriggerFor","matTooltip"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[3,"color"]],template:function(t,n){t&1&&_(0,qt,6,1,"mat-menu"),t&2&&p(n.menu.items&&n.menu.items.length>0?0:-1)},dependencies:[pt,w,U,ht,Ke,Ge,ot,it,nt,at,st,mt,rt],encapsulation:2});let o=i;return o})();var g={delete:"delete",edit:"edit",print:"print",printer:"printer",menu_vert:"more_vert",add:"add",show:"show",hide:"hide",visibility:"visibility",visibility_off:"visibility_off",grid_view:"grid_view",person:"person",bookmarks:"bookmarks",qr:"qr_code",science:"science",info:"info",summarize:"summarize"};var _t=class{static edit(i){return h.item().setTitle(f.edit).setIcon(g.edit).setClickFn(i)}static add(i){return h.item().setTitle(f.add).setIcon(g.add).setClickFn(i)}static show(i){return h.item().setTitle(f.show).setIcon(g.visibility).setClickFn(i)}static hide(i){return h.item().setTitle(f.hide).setIcon(g.visibility_off).setClickFn(i)}static manage(i){return h.item().setTitle(f.manage).setIcon(g.grid_view).setClickFn(i)}static delete(i){return h.item().setTitle(f.delete).setIcon(g.delete).setIconColor("warn").setClickFn(i)}static print(i){return h.item().setTitle(f.print).setIcon(g.print).setClickFn(i)}static report(i){return h.item().setTitle(f.report).setIcon(g.summarize).setClickFn(i)}static barcode(i){return h.item().setTitle(f.barcode).setIcon(g.qr).setClickFn(i)}static info(i){return h.item().setTitle(f.info).setIcon(g.info).setClickFn(i)}};var re=class{constructor(){this.items=[]}setTitle(i){return this.title=i,this}setIcon(i){return this.icon=i,this}setToolTip(i){return this.toolTip=i,this}setData(i){return this.data=i,this}setItems(i){return this.items=i,this}};var ft=class{static more(i){let s=new re;return s.icon="more_vert",s.items=i,s}};export{U as a,w as b,ht as c,pt as d,h as e,Yi as f,g,_t as h,re as i,ft as j};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/
