import{na as R}from"./chunk-D652WIKR.js";import{Ab as P,Cb as C,Ea as h,Eb as A,Ec as x,Fa as y,Ja as v,Jb as c,Kb as m,Kc as u,Lb as t,Pa as T,bb as s,cb as l,ea as g,ga as _,na as f,nc as E,oa as b,ob as w,rb as M,xb as k,zb as p}from"./chunk-GEYIS4QB.js";function N(a,e){a&1&&t(0,"div",2);}var I=new _("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var H=(()=>{let e=class e{constructor(i,o,r,z,n){this._elementRef=i,this._ngZone=o,this._changeDetectorRef=r,this._animationMode=z,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new h(),this._mode="determinate",this._transitionendHandler=$=>{this.animationEnd.observers.length===0||!$.target||!$.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}));},this._isNoopAnimation=z==="NoopAnimations",n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode);}get color(){return this._color||this._defaultColor;}set color(i){this._color=i;}get value(){return this._value;}set value(i){this._value=S(i||0),this._changeDetectorRef.markForCheck();}get bufferValue(){return this._bufferValue||0;}set bufferValue(i){this._bufferValue=S(i||0),this._changeDetectorRef.markForCheck();}get mode(){return this._mode;}set mode(i){this._mode=i,this._changeDetectorRef.markForCheck();}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler);});}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler);}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`;}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`;}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query";}};e.ɵfac=function(o){return new(o||e)(l(v),l(y),l(x),l(T,8),l(I,8));},e.ɵcmp=f({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(o,r){o&2&&(k("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),C("mat-"+r.color),P("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()));},inputs:{color:"color",value:[2,"value","value",u],bufferValue:[2,"bufferValue","bufferValue",u],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[w,E],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(o,r){o&1&&(c(0,"div",0),t(1,"div",1),M(2,N,1,0,"div",2),m(),c(3,"div",3),t(4,"span",4),m(),c(5,"div",5),t(6,"span",4),m()),o&2&&(s(),p("flex-basis",r._getBufferBarFlexBasis()),s(),A(r.mode==="buffer"?2:-1),s(),p("transform",r._getPrimaryBarTransform()));},styles:[`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],encapsulation:2,changeDetection:0});let a=e;return a;})();function S(a,e=0,d=100){return Math.max(e,Math.min(d,a));}var Y=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=b({type:e}),e.ɵinj=g({imports:[R]});let a=e;return a;})();var D={abbreviation:"\u0623\u062E\u062A\u0635\u0627\u0631",add:"\u0625\u0636\u0627\u0641\u0629",address:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646",addresses:"\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646",analyses:"\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",analysis:"\u0627\u0644\u062A\u062D\u0644\u064A\u0644",analysis_id:"\u0645\u0639\u0631\u0641 \u0627\u0644\u062A\u062D\u0644\u064A\u0644",birth_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",bank_card:"\u0628\u0637\u0627\u0642\u0629 \u0628\u0646\u0643\u064A\u0629",barcode:"\u0628\u0627\u0631\u0643\u0648\u062F",close:"\u0625\u063A\u0644\u0627\u0642",status:"\u0627\u0644\u062D\u0627\u0644\u0629",cancel:"\u0625\u0644\u063A\u0627\u0621",submit:"\u062A\u0642\u062F\u064A\u0645",text:"\u0627\u0644\u0646\u0635",line:"\u062E\u0637",image:"\u0627\u0644\u0635\u0648\u0631\u0629",table:"\u062C\u062F\u0648\u0644",events:"\u0627\u0644\u0623\u062D\u062F\u0627\u062B",symbol:"\u0627\u0644\u0631\u0645\u0632",open:"\u0641\u062A\u062D",copy:"\u0646\u0633\u062E",upgrade:"\u062A\u0631\u0642\u064A\u0629",upgrade_confirmation:"\u0633\u064A\u0624\u062F\u064A \u0647\u0630\u0627 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0625\u0644\u0649 \u062A\u0631\u0642\u064A\u0629 \u0627\u0644\u0646\u0638\u0627\u0645. \u0633\u064A\u062A\u0645 \u0641\u0642\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629. \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F\u061F",test_type_already_added:"\u062A\u0645 \u0627\u0636\u0627\u0641\u0629 \u0646\u0645\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0645\u0633\u0628\u0642\u0627",export_analysis:"\u0647\u0644 \u062A\u0648\u062F \u062A\u0635\u062F\u064A\u0631 \u0647\u0630\u0627 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u061F",approve_test_result:"\u0647\u0644 \u062A\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0646\u062A\u064A\u062C\u0629 \u0647\u0630\u0627 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u061F",exported:"\u062A\u0645 \u0627\u0644\u062A\u0635\u062F\u064A\u0631",analysis_not_completed:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644",reference_groups:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",result_options:"\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0646\u062A\u064A\u062C\u0629",code:"\u0627\u0644\u0631\u0645\u0632",titles:"\u0627\u0644\u0627\u0644\u0642\u0627\u0628",unknow_error_occurred:"\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",manage_titles:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0644\u0642\u0627\u0628",reset_template:"\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0642\u0627\u0644\u0628\u061F",file:"\u0645\u0644\u0641",saved:"\u062A\u0645 \u0627\u0644\u062D\u0641\u0638",files:"\u0627\u0644\u0645\u0644\u0641\u0627\u062A",size:"\u0627\u0644\u062D\u062C\u0645",role:"\u0627\u0644\u062F\u0648\u0631",rules:"\u0627\u0644\u0642\u0648\u0627\u0639\u062F",theme:"\u0627\u0644\u0633\u0645\u0629",drive:"\u0627\u0644\u062A\u062E\u0632\u064A\u0646",copy_link:"\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637",upload:"\u0631\u0641\u0639",download:"\u062A\u062D\u0645\u064A\u0644",variables:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A",variable:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631",referrers:"\u0627\u0644\u0645\u062D\u064A\u0644\u0648\u0646",person_not_found_create_new:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0634\u062E\u0635, \u0625\u0646\u0634\u0627\u0621 \u062C\u062F\u064A\u062F\u061F",referrer:"\u0627\u0644\u0645\u062D\u064A\u0644",search:"\u0627\u0644\u0628\u062D\u062B",price_profiles:"\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0627\u0633\u0639\u0627\u0631",price_profile:"\u0645\u0644\u0641 \u0627\u0644\u0627\u0633\u0639\u0627\u0631",manage_referrers:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u064A\u0644\u0648\u0646",manage_price_profiles:"\u0625\u062F\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0627\u0633\u0639\u0627\u0631",copy_to_clipboard:"\u0646\u0633\u062E \u0644\u0644\u062D\u0627\u0641\u0638\u0629",copied:"\u062A\u0645 \u0627\u0644\u0646\u0633\u062E",share_not_supported:"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645\u0629",failed:"\u0641\u0634\u0644",operator:"\u0627\u0644\u0639\u0627\u0645\u0644",designation:"\u0627\u0644\u062A\u0639\u064A\u064A\u0646",actual_start_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0641\u0639\u0644\u064A",actual_end_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0641\u0639\u0644\u064A",planned_start_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u062E\u0637\u0637",planned_end_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u062E\u0637\u0637",plate_number:"\u0631\u0642\u0645 \u0627\u0644\u0644\u0648\u062D\u0629",team:"\u0627\u0644\u0641\u0631\u064A\u0642",zone:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629",add_test_type:"\u0625\u0636\u0627\u0641\u0629 \u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631",add_test_group:"\u0627\u0636\u0627\u0641\u0629 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",serial_number:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062A\u0633\u0644\u0633\u0644\u064A",primary_email:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0627\u0633\u0627\u0633\u064A",primary_phone:"\u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",count:"\u0627\u0644\u0639\u062F\u062F",group_leader:"\u0642\u0627\u0626\u062F \u0641\u0631\u064A\u0642",equipment:"\u0627\u0644\u0645\u0639\u062F\u0627\u062A",constructions:"\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062A",start_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629",end_date:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",projects:"\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",import:"\u0627\u0633\u062A\u064A\u0631\u0627\u062F",export:"\u062A\u0635\u062F\u064A\u0631",zones:"\u0627\u0644\u0645\u0646\u0627\u0637\u0642",worker_groups:"\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644",workers:"\u0627\u0644\u0639\u0645\u0627\u0644",teams:"\u0627\u0644\u0641\u0631\u0642",employees:"\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646",machines:"\u0627\u0644\u0627\u0644\u064A\u0627\u062A",logout:"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",identifier:"\u0627\u0644\u0645\u0639\u0631\u0641",login_failed:"\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",no_results_found:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C!",analysis_template_not_found:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0642\u0627\u0644\u0628 \u0627\u0644\u062A\u062D\u0644\u064A\u0644",reload:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",groups:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",add_group:"\u0627\u0636\u0627\u0641\u0629 \u0645\u062C\u0645\u0648\u0639\u0629",single:"\u0645\u0641\u0631\u062F",columns:"\u0627\u0644\u0623\u0639\u0645\u062F\u0629",category:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629",subject:"\u0627\u0644\u0645\u0648\u0636\u0648\u0639",info:"\u0645\u0639\u0644\u0648\u0645\u0627\u062A",scan:"\u0645\u0633\u062D \u0636\u0648\u0626\u064A",result:"\u0627\u0644\u0646\u062A\u064A\u062C\u0629",apporve:"\u0645\u0648\u0627\u0641\u0642\u0629",reporting:"\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",barcode_not_supported:"\u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645",person_not_found:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0634\u062E\u0635",person_multiple_found:"\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0643\u062B\u0631 \u0645\u0646 \u0634\u062E\u0635",recipients:"\u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0648\u0646",method:"\u0627\u0644\u0645\u0646\u0647\u062C\u064A\u0629",media:"\u0627\u0644\u0648\u0633\u0637",techonology:"\u0627\u0644\u062A\u0642\u0646\u064A\u0629",collected_at:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0645\u0639",comparison_operator:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",comparison_type:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",confirm:"\u062A\u0623\u0643\u064A\u062F",create:"\u0625\u0646\u0634\u0627\u0621",ssn:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",direct_thermal:"\u062D\u0631\u0627\u0631\u064A \u0645\u0628\u0627\u0634\u0631",thermal_transfer:"\u0646\u0642\u0644 \u062D\u0631\u0627\u0631\u064A",inkjet:"\u062D\u0628\u0631",laser:"\u0644\u064A\u0632\u0631",dot_matrix:"\u0645\u0635\u0641\u0648\u0641\u0629 \u0646\u0642\u0637\u064A\u0629",plotter:"\u0631\u0633\u0645",create_analysis_description:"\u0627\u0646\u0634\u0627\u0621 \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F",created_at:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",dashboard:"\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",delete:"\u062D\u0630\u0641",clear:"\u0645\u0633\u062D",description:"\u0627\u0644\u0648\u0635\u0641",discipline:"\u0641\u0626\u0629",discipline_id:"\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u0626\u0629",disciplines:"\u0641\u0626\u0627\u062A",driver_license:"\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629",documents:"\u0627\u0644\u0648\u062B\u0627\u0626\u0642",document_type:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",edit:"\u062A\u0639\u062F\u064A\u0644",clone:"\u0646\u0633\u062E",email_notification:"\u0627\u0634\u0639\u0627\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0643\u062A\u0631\u0648\u0646\u064A",sms_notification:"\u0627\u0634\u0639\u0627\u0631 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0646\u0635\u064A\u0629",push_notification:"\u0627\u0634\u0639\u0627\u0631 \u062F\u0641\u0639\u064A",whatsapp_notification:"\u0627\u0634\u0639\u0627\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",whats_app:"\u0648\u0627\u062A\u0633\u0627\u0628",email:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",emails:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",email_type:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",enabled:"\u0645\u0641\u0639\u0644",end:"\u0646\u0647\u0627\u064A\u0629",father_name:"\u0627\u0633\u0645 \u0627\u0644\u0623\u0628",favorite:"\u0645\u0641\u0636\u0644\u0629",favorites:"\u062A\u0641\u0636\u064A\u0644\u0627\u062A",female:"\u0627\u0646\u062B\u0649",filter:"\u062A\u0635\u0641\u064A\u0629",first_name:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",group:"\u0645\u062C\u0645\u0648\u0639\u0629",hide:"\u0625\u062E\u0641\u0627\u0621",home:"\u0627\u0644\u0645\u0646\u0632\u0644",id:"\u0627\u0644\u0645\u0639\u0631\u0641",laboratories:"\u0627\u0644\u0645\u062E\u0627\u0628\u0631",manage_laboratories:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0628\u0631",manage_test_types:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",manage_test_groups:"\u0627\u062F\u0627\u0631\u0629 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",manage_reference_values:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",view_specimen_types:"\u0639\u0631\u0636 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",manage_notifications:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",manage_emails_notifications:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",manage_sms_notifications:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0635\u064A\u0629 \u0627\u0644\u0642\u0635\u064A\u0631\u0629",manage_push_notifications:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639\u064A\u0629",manage_whatsapp_notifications:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628",manage_messages:"\u0627\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644",manage_printers:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",manage_groups:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A",laboratory:"\u0627\u0644\u0645\u062E\u0628\u0631",language:"\u0627\u0644\u0644\u063A\u0629",account:"\u0627\u0644\u062D\u0633\u0627\u0628",languages:"\u0627\u0644\u0644\u063A\u0627\u062A",last_name:"\u0627\u0644\u0643\u0646\u064A\u0629",arabic_name:"\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",manage:"\u0625\u062F\u0627\u0631\u0629",male:"\u0630\u0643\u0631",menu:"\u0627\u0644\u0642\u0627\u0626\u0645\u0629",mother_name:"\u0627\u0633\u0645 \u0627\u0644\u0623\u0645",mobile:"\u0627\u0644\u062C\u0648\u0627\u0644",national_card:"\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629",name:"\u0627\u0644\u0627\u0633\u0645",name_en:"\u0627\u0644\u0627\u0633\u0645",name_ar:"\u0627\u0644\u0627\u0633\u0645",names:"\u0627\u0644\u0627\u0633\u0645\u0627\u0621",multiplier:"\u0645\u0636\u0627\u0639\u0641",reference_number:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A",nationality:"\u0627\u0644\u062C\u0646\u0633\u064A\u0629",note:"\u0645\u0644\u0627\u062D\u0638\u0629",notification:"\u0625\u0634\u0639\u0627\u0631",notifications:"\u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A",messages:"\u0627\u0644\u0631\u0633\u0627\u0626\u0644",localized_name:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u0631\u062C\u0645",number:"\u0631\u0642\u0645",plain_paper:"\u0648\u0631\u0642 \u0639\u0627\u062F\u064A",label:"\u0644\u0635\u0627\u0642\u0629",passport:"\u062C\u0648\u0627\u0632 \u0633\u0641\u0631",patient:"\u0627\u0644\u0645\u0631\u064A\u0636",patients:"\u0645\u0631\u0636\u0649",person:"\u0634\u062E\u0635",person_id:"\u0645\u0639\u0631\u0641 \u0627\u0644\u0641\u0631\u062F",persons:"\u0627\u0644\u0623\u0641\u0631\u0627\u062F",phone:"\u0627\u0644\u0647\u0627\u062A\u0641",phones:"\u0627\u0644\u0647\u0648\u0627\u062A\u0641",phone_type:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",phone_types:"\u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0647\u0648\u0627\u062A\u0641",position:"\u0627\u0644\u0645\u0643\u0627\u0646",price:"\u0627\u0644\u0633\u0639\u0631",primary:"\u0623\u0633\u0627\u0633\u064A",private:"\u062E\u0627\u0635",print:"\u0637\u0628\u0627\u0639\u0629",push:"\u062F\u0641\u0639",public:"\u0639\u0627\u0645",publish:"\u0646\u0634\u0631",qr:"\u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629",reference_group:"\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",reference_value:"\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",reference_values:"\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",report:"\u062A\u0642\u0631\u064A\u0631",reports:"\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",templates:"\u0627\u0644\u0642\u0648\u0627\u0644\u0628",manage_templates:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u0648\u0627\u0644\u0628",manage_files:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062A",template:"\u0642\u0627\u0644\u0628",printers:"\u0627\u0644\u0637\u0627\u0628\u0639\u0627\u062A",printer:"\u0637\u0627\u0628\u0639\u0629",reset:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0636\u0628\u0637",save:"\u062D\u0641\u0638",settings:"\u0627\u0644\u0627\u0639\u062F\u0627\u062F\u0627\u062A",sex:"\u0627\u0644\u062C\u0646\u0633",show:"\u0625\u0638\u0647\u0627\u0631",sms:"\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629",specimens:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A",specimen_type:"\u0646\u0648\u0639 \u0627\u0644\u0639\u064A\u0646\u0629",specimen_types:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u064A\u0646\u0627\u062A",clinical_case:"\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u0631\u064A\u0631\u064A\u0629",clinical_cases:"\u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0633\u0631\u064A\u0631\u064A\u0629",start:"\u0628\u062F\u0627\u064A\u0629",state:"\u0627\u0644\u062D\u0627\u0644\u0629",test:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",test_result:"\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",add_result:"\u0625\u0636\u0627\u0641\u0629 \u0646\u062A\u064A\u062C\u0629",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",test_group:"\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",test_groups:"\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",test_type:"\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631",test_types:"\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",title:"\u0627\u0644\u0644\u0642\u0628",travel_document:"\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631",type:"\u0627\u0644\u0646\u0645\u0637",unit:"\u0648\u0627\u062D\u062F\u0629",units:"\u0627\u0644\u0648\u062D\u062F\u0627\u062A",manage_units:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u062D\u062F\u0627\u062A",manage_reference_groups:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",updated_at:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",user:"\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",username:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",users:"\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",manage_users:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",value:"\u0642\u064A\u0645\u0629",work:"\u0627\u0644\u0639\u0645\u0644",equal:"\u062A\u0633\u0627\u0648\u064A",range:"\u0645\u062C\u0627\u0644",greater_than:"\u0623\u0643\u0628\u0631 \u0645\u0646",greater_than_or_equal:"\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A",less_than:"\u0623\u0635\u063A\u0631 \u0645\u0646",less_than_or_equal:"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A",range_with_boundaries:"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F",range_without_boundaries:"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F",not_equal:"\u0644\u0627 \u062A\u0633\u0627\u0648\u064A",validated:"\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",returned:"\u0645\u0631\u062A\u062C\u0639\u0629",forwarded:"\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",destroyed:"\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641",collected:"\u062A\u0645 \u0627\u0644\u062C\u0645\u0639",accepted:"\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644",created:"\u0645\u0646\u0634\u0623\u0629",forward_price:"\u0633\u0639\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",retail_price:"\u0633\u0639\u0631 \u0627\u0644\u062A\u062C\u0632\u0626\u0629",cost_price:"\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u0641\u0629",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",locally_enabled:"\u062A\u0641\u0639\u064A\u0644 \u0628\u0627\u0644\u0645\u0643\u0627\u0646",forward_enabled:"\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",year:"\u0633\u0646\u0629",month:"\u0634\u0647\u0631",day:"\u064A\u0648\u0645",hour:"\u0633\u0627\u0639\u0629",minute:"\u062F\u0642\u064A\u0642\u0629",second:"\u062B\u0627\u0646\u064A\u0629",millisecond:"\u0645\u064A\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629",week:"\u0623\u0633\u0628\u0648\u0639",quarter:"\u0631\u0628\u0639",from:"\u0645\u0646",to:"\u0625\u0644\u0649",all:"\u0627\u0644\u0643\u0644"};function ee(a){if(!a)return"";let e=a.replace(/[A-Z]/g,d=>`_${d.toLowerCase()}`);return e.startsWith("_")&&(e=e.substring(1)),D[e];}export{H as a,Y as b,D as c,ee as d};/**i18n:6a957e76b34bbfae309f860038077ac24d27f88bee0a7f2be1663c241f351559*/