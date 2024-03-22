import{C as _e,F as ve,G as ye,c as X,d as Y,g as I,h as w,j as $,v as j}from"./chunk-SRJCWGFD.js";import{G as xe,N as be,k as ue,z as fe}from"./chunk-RUNZ2J3E.js";import{b as ge}from"./chunk-62NYPPVD.js";import{$b as F,B as Z,C as _,Cb as S,Cc as u,Db as k,Dc as me,Eb as de,Ga as z,I as ee,L as te,Qb as U,Sb as le,Tb as q,U as N,Ub as g,Wb as pe,Xa as ae,Xb as ce,Yb as B,Zb as he,_b as H,a as C,ba as D,db as M,eb as o,ec as b,f,fa as x,gb as v,hc as K,ib as c,j as J,ja as p,ka as R,la as E,lb as Q,ma as h,mb as m,nb as oe,oa as T,ob as L,rb as V,sb as P,ta as ne,tb as se,ua as ie,ub as y,xb as re}from"./chunk-34MB7EVY.js";var ke=0,W=new x("CdkAccordion"),Ie=(()=>{let t=class t{constructor(){this._stateChanges=new f,this._openCloseAllActions=new f,this.id=`cdk-accordion-${ke++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=h({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[p.HasDecoratorInputTransform,"multi","multi",u]},exportAs:["cdkAccordion"],standalone:!0,features:[b([{provide:W,useExisting:t}]),m,T]});let a=t;return a})(),He=0,we=(()=>{let t=class t{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,n,i){this.accordion=e,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=C.EMPTY,this.closed=new c,this.opened=new c,this.destroyed=new c,this.expandedChange=new c,this.id=`cdk-accordion-child-${He++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((r,s)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===s&&this.id!==r&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}};t.\u0275fac=function(n){return new(n||t)(o(W,12),o(v),o(j))},t.\u0275dir=h({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[p.HasDecoratorInputTransform,"expanded","expanded",u],disabled:[p.HasDecoratorInputTransform,"disabled","disabled",u]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[b([{provide:W,useValue:void 0}]),m]});let a=t;return a})(),Ae=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=E({type:t}),t.\u0275inj=D({});let a=t;return a})();var Oe=["body"];function Ne(a,t){}var Re=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ze=["mat-expansion-panel-header","*","mat-action-row"];function Qe(a,t){if(a&1&&de(0,"span",2),a&2){let Me=le();P("@indicatorRotate",Me._getExpandedState())}}var Le=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ve=["mat-panel-title","mat-panel-description","*"],G=new x("MAT_ACCORDION"),Ce="225ms cubic-bezier(0.4,0.0,0.2,1)",De={indicatorRotate:X("indicatorRotate",[w("collapsed, void",I({transform:"rotate(0deg)"})),w("expanded",I({transform:"rotate(180deg)"})),$("expanded <=> collapsed, void => collapsed",Y(Ce))]),bodyExpansion:X("bodyExpansion",[w("collapsed, void",I({height:"0px",visibility:"hidden"})),w("expanded",I({height:"*",visibility:""})),$("expanded <=> collapsed, void => collapsed",Y(Ce))])},Ee=new x("MAT_EXPANSION_PANEL"),Ue=(()=>{let t=class t{constructor(e,n){this._template=e,this._expansionPanel=n}};t.\u0275fac=function(n){return new(n||t)(o(ce),o(Ee,8))},t.\u0275dir=h({type:t,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let a=t;return a})(),qe=0,Te=new x("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Be=(()=>{let t=class t extends we{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,n,i,r,s,O,A){super(e,n,i),this._viewContainerRef=r,this._animationMode=O,this._hideToggle=!1,this.afterExpand=new c,this.afterCollapse=new c,this._inputChanges=new f,this._headerId=`mat-expansion-panel-header-${qe++}`,this._bodyAnimationDone=new f,this.accordion=e,this._document=s,this._bodyAnimationDone.pipe(te((l,d)=>l.fromState===d.fromState&&l.toState===d.toState)).subscribe(l=>{l.fromState!=="void"&&(l.toState==="expanded"?this.afterExpand.emit():l.toState==="collapsed"&&this.afterCollapse.emit())}),A&&(this.hideToggle=A.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(N(null),_(()=>this.expanded&&!this._portal),ee(1)).subscribe(()=>{this._portal=new _e(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}};t.\u0275fac=function(n){return new(n||t)(o(G,12),o(v),o(j),o(oe),o(ge),o(z,8),o(Te,8))},t.\u0275cmp=R({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,r){if(n&1&&B(r,Ue,5),n&2){let s;H(s=F())&&(i._lazyContent=s.first)}},viewQuery:function(n,i){if(n&1&&he(Oe,5),n&2){let r;H(r=F())&&(i._body=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,i){n&2&&y("mat-expanded",i.expanded)("_mat-animation-noopable",i._animationMode==="NoopAnimations")("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[p.HasDecoratorInputTransform,"hideToggle","hideToggle",u],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[b([{provide:G,useValue:void 0},{provide:Ee,useExisting:t}]),m,Q,T,K],ngContentSelectors:ze,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(q(Re),g(0),S(1,"div",0,1),U("@bodyExpansion.done",function(s){return i._bodyAnimationDone.next(s)}),S(3,"div",2),g(4,1),L(5,Ne,0,0,"ng-template",3),k(),g(6,2),k()),n&2&&(M(),P("@bodyExpansion",i._getExpandedState())("id",i.id),V("aria-labelledby",i._headerId),M(4),P("cdkPortalOutlet",i._portal))},dependencies:[ve],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[De.bodyExpansion]},changeDetection:0});let a=t;return a})();var Ke=(()=>{let t=class t{constructor(e,n,i,r,s,O,A){this.panel=e,this._element=n,this._focusMonitor=i,this._changeDetectorRef=r,this._animationMode=O,this._parentChangeSubscription=C.EMPTY,this.tabIndex=0;let l=e.accordion?e.accordion._stateChanges.pipe(_(d=>!!(d.hideToggle||d.togglePosition))):J;this.tabIndex=parseInt(A||"")||0,this._parentChangeSubscription=Z(e.opened,e.closed,l,e._inputChanges.pipe(_(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(_(()=>e._containsFocus())).subscribe(()=>i.focusVia(n,"program")),s&&(this.expandedHeight=s.expandedHeight,this.collapsedHeight=s.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ue(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};t.\u0275fac=function(n){return new(n||t)(o(Be,1),o(ae),o(xe),o(v),o(Te,8),o(z,8),ie("tabindex"))},t.\u0275cmp=R({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,i){n&1&&U("click",function(){return i._toggle()})("keydown",function(s){return i._keydown(s)}),n&2&&(V("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),se("height",i._getHeaderHeight()),y("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before")("_mat-animation-noopable",i._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[p.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:me(e)]},standalone:!0,features:[m,K],ngContentSelectors:Ve,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator"],[1,"mat-expansion-indicator"]],template:function(n,i){n&1&&(q(Le),S(0,"span",0),g(1),g(2,1),g(3,2),k(),L(4,Qe,1,1,"span",1)),n&2&&(y("mat-content-hide-toggle",!i._showToggle()),M(4),re(4,i._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[De.indicatorRotate]},changeDetection:0});let a=t;return a})();var Mt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=h({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let a=t;return a})(),Pt=(()=>{let t=class t extends Ie{constructor(){super(...arguments),this._ownHeaders=new pe,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(N(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new fe(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};t.\u0275fac=(()=>{let e;return function(i){return(e||(e=ne(t)))(i||t)}})(),t.\u0275dir=h({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,i,r){if(n&1&&B(r,Ke,5),n&2){let s;H(s=F())&&(i._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&y("mat-accordion-multi",i.multi)},inputs:{hideToggle:[p.HasDecoratorInputTransform,"hideToggle","hideToggle",u],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[b([{provide:G,useExisting:t}]),m,Q]});let a=t;return a})(),St=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=E({type:t}),t.\u0275inj=D({imports:[be,Ae,ye]});let a=t;return a})();export{Be as a,Ke as b,Mt as c,Pt as d,St as e};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
