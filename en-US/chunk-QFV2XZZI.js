import{C as j,J as ye,M as we,N as Ie,c as Y,d as $,g as A,h as C,j as G}from"./chunk-3K5ERU5F.js";import{G as _e,N as ve,k as xe,z as be}from"./chunk-WG6MZMNK.js";import{b as fe}from"./chunk-6DPHD5PI.js";import{Ca as P,Cb as B,Da as R,Db as S,Ea as V,Eb as le,Fa as ie,Fb as y,Ha as ne,I as ee,Ia as ae,Ib as pe,K as v,Kc as I,Na as oe,Nb as x,Oa as p,Ob as w,Pa as se,Pb as ce,Pc as g,Q as te,Qc as ue,Tb as he,Ua as z,_b as q,ac as me,ba as O,bc as U,cc as m,ec as K,fc as ge,g as E,gc as H,hb as k,hc as F,ib as o,ka as T,kb as re,l as _,ma as f,pc as b,q as J,qc as X,rb as de,ta as l,ua as N,ub as Q,va as M,vb as h,wa as c,zb as L}from"./chunk-WLX3OMWV.js";var Oe=0,W=new f("CdkAccordion"),Ae=(()=>{let t=class t{constructor(){this._stateChanges=new _,this._openCloseAllActions=new _,this.id=`cdk-accordion-${Oe++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=c({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[l.HasDecoratorInputTransform,"multi","multi",g]},exportAs:["cdkAccordion"],standalone:!0,features:[b([{provide:W,useExisting:t}]),h,P]});let a=t;return a})(),Ne=0,Ce=(()=>{let t=class t{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,i,n){this.accordion=e,this._changeDetectorRef=i,this._expansionDispatcher=n,this._openCloseAllSubscription=E.EMPTY,this.closed=new p,this.opened=new p,this.destroyed=new p,this.expandedChange=new p,this.id=`cdk-accordion-child-${Ne++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}};t.\u0275fac=function(i){return new(i||t)(o(W,12),o(I),o(j))},t.\u0275dir=c({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[l.HasDecoratorInputTransform,"expanded","expanded",g],disabled:[l.HasDecoratorInputTransform,"disabled","disabled",g]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[b([{provide:W,useValue:void 0}]),h]});let a=t;return a})(),De=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=M({type:t}),t.\u0275inj=T({});let a=t;return a})();var ze=["body"],Qe=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Le=["mat-expansion-panel-header","*","mat-action-row"];function Be(a,t){}var qe=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ue=["mat-panel-title","mat-panel-description","*"];function Ke(a,t){if(a&1&&(x(0,"span",1),ie(),x(1,"svg",2),ce(2,"path",3),w()()),a&2){let Se=me();S("@indicatorRotate",Se._getExpandedState())}}var Z=new f("MAT_ACCORDION"),Ee="225ms cubic-bezier(0.4,0.0,0.2,1)",Me={indicatorRotate:Y("indicatorRotate",[C("collapsed, void",A({transform:"rotate(0deg)"})),C("expanded",A({transform:"rotate(180deg)"})),G("expanded <=> collapsed, void => collapsed",$(Ee))]),bodyExpansion:Y("bodyExpansion",[C("collapsed, void",A({height:"0px",visibility:"hidden"})),C("expanded",A({height:"*",visibility:""})),G("expanded <=> collapsed, void => collapsed",$(Ee))])},Pe=new f("MAT_EXPANSION_PANEL"),Xe=(()=>{let t=class t{constructor(e,i){this._template=e,this._expansionPanel=i}};t.\u0275fac=function(i){return new(i||t)(o(re),o(Pe,8))},t.\u0275dir=c({type:t,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let a=t;return a})(),Ye=0,ke=new f("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),$e=(()=>{let t=class t extends Ce{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,i,n,s,r,d,D){super(e,i,n),this._viewContainerRef=s,this._animationMode=d,this._hideToggle=!1,this.afterExpand=new p,this.afterCollapse=new p,this._inputChanges=new _,this._headerId=`mat-expansion-panel-header-${Ye++}`,this.accordion=e,this._document=r,this._animationsDisabled=d==="NoopAnimations",D&&(this.hideToggle=D.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(O(null),v(()=>this.expanded&&!this._portal),te(1)).subscribe(()=>{this._portal=new ye(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_animationStarted(e){!Te(e)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(e){Te(e)||(e.toState==="expanded"?this.afterExpand.emit():e.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};t.\u0275fac=function(i){return new(i||t)(o(Z,12),o(I),o(j),o(de),o(fe),o(z,8),o(ke,8))},t.\u0275cmp=N({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,n,s){if(i&1&&K(s,Xe,5),i&2){let r;H(r=F())&&(n._lazyContent=r.first)}},viewQuery:function(i,n){if(i&1&&ge(ze,5),i&2){let s;H(s=F())&&(n._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,n){i&2&&y("mat-expanded",n.expanded)("_mat-animation-noopable",n._animationsDisabled)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[l.HasDecoratorInputTransform,"hideToggle","hideToggle",g],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[b([{provide:Z,useValue:void 0},{provide:Pe,useExisting:t}]),h,Q,P,X],ngContentSelectors:Le,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,n){if(i&1){let s=he();U(Qe),m(0),x(1,"div",1,0),q("@bodyExpansion.start",function(d){return R(s),V(n._animationStarted(d))})("@bodyExpansion.done",function(d){return R(s),V(n._animationDone(d))}),x(3,"div",2),m(4,1),L(5,Be,0,0,"ng-template",3),w(),m(6,2),w()}i&2&&(k(),S("@bodyExpansion",n._getExpandedState())("id",n.id),B("aria-labelledby",n._headerId),k(4),S("cdkPortalOutlet",n._portal))},dependencies:[we],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Me.bodyExpansion]},changeDetection:0});let a=t;return a})();function Te(a){return a.fromState==="void"}var Ge=(()=>{let t=class t{constructor(e,i,n,s,r,d,D){this.panel=e,this._element=i,this._focusMonitor=n,this._changeDetectorRef=s,this._animationMode=d,this._parentChangeSubscription=E.EMPTY,this.tabIndex=0;let He=e.accordion?e.accordion._stateChanges.pipe(v(u=>!!(u.hideToggle||u.togglePosition))):J;this.tabIndex=parseInt(D||"")||0,this._parentChangeSubscription=ee(e.opened,e.closed,He,e._inputChanges.pipe(v(u=>!!(u.hideToggle||u.disabled||u.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(v(()=>e._containsFocus())).subscribe(()=>n.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:xe(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};t.\u0275fac=function(i){return new(i||t)(o($e,1),o(oe),o(_e),o(I),o(ke,8),o(z,8),ae("tabindex"))},t.\u0275cmp=N({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,n){i&1&&q("click",function(){return n._toggle()})("keydown",function(r){return n._keydown(r)}),i&2&&(B("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),le("height",n._getHeaderHeight()),y("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before")("_mat-animation-noopable",n._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[l.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:ue(e)]},standalone:!0,features:[h,X],ngContentSelectors:Ue,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,n){i&1&&(U(qe),x(0,"span",0),m(1),m(2,1),m(3,2),w(),L(4,Ke,3,1,"span",1)),i&2&&(y("mat-content-hide-toggle",!n._showToggle()),k(4),pe(4,n._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Me.indicatorRotate]},changeDetection:0});let a=t;return a})();var Ht=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=c({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let a=t;return a})(),Ft=(()=>{let t=class t extends Ae{constructor(){super(...arguments),this._ownHeaders=new se,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(O(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new be(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=ne(t)))(n||t)}})(),t.\u0275dir=c({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,n,s){if(i&1&&K(s,Ge,5),i&2){let r;H(r=F())&&(n._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,n){i&2&&y("mat-accordion-multi",n.multi)},inputs:{hideToggle:[l.HasDecoratorInputTransform,"hideToggle","hideToggle",g],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[b([{provide:Z,useExisting:t}]),h,Q]});let a=t;return a})(),jt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=M({type:t}),t.\u0275inj=T({imports:[ve,De,Ie]});let a=t;return a})();export{$e as a,Ge as b,Ht as c,Ft as d,jt as e};
/**i18n:a84518dfaf5206df012bb98d831270fba229ecfbff1c9dff1ac7013a5ea5bd1b*/