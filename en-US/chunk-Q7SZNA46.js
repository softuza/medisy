import{a as x,b as F}from"./chunk-H5WXAZIY.js";import{h as z}from"./chunk-EYGAI5PJ.js";import{a as T}from"./chunk-R4S6SLRU.js";import{e as Ye,f as Ke,g as Ze,i as Je,j as et,k as tt}from"./chunk-XT4WDJL3.js";import{b as Y,c as qe}from"./chunk-TFYVSOED.js";import{b as K}from"./chunk-V2CHWC5A.js";import{a as h,g as D,h as B}from"./chunk-OBKQZSX2.js";import{a as We,b as Ue,d as M,e as Xe,g as Qe}from"./chunk-BICV37VP.js";import{A as He,v as je,y as Be,z as $e}from"./chunk-3D6BRKHU.js";import{L as S,N as Ve,P as I,R as w,d as ne,f as Ae,g as Pe,k as Oe,m as ke,p as Ne,q as Re,t as Le,za as b}from"./chunk-CN6PMKF6.js";import{Ja as C,ja as Ge,m as xe,o as Fe,r as Ee}from"./chunk-NQOK3G2M.js";import{Ab as V,Cb as re,Db as ie,Eb as oe,Fb as c,Gb as l,Gc as q,Hb as p,Ka as fe,Kb as Q,Lb as G,M as ee,Tb as j,Vb as _,Wb as Se,Xb as Ce,_a as _e,ac as be,bc as Me,cb as v,cc as Te,dc as De,ea as me,ec as ze,fa as H,gb as m,gc as Ie,hb as s,hc as N,ja as le,ka as pe,kc as f,lb as he,na as W,oa as u,ob as y,pa as U,pb as ge,qa as de,qc as we,rb as O,ta as R,ua as L,ub as k,va as te,vb as a,wa as ue,wb as X,xb as ve,yb as ye}from"./chunk-XEAZENSO.js";var E=(()=>{let e=class e extends qe{constructor(i){super(i,"softuza-portal"),this.tiles=new Y(this.http,`${this.basePath}/v1/tiles`),this.tileGroups=new Y(this.http,`${this.basePath}/v1/tile-groups`),this.tileTypes=new Y(this.http,`${this.basePath}/v1/tile-types`);}};e.ɵfac=function(t){return new(t||e)(pe(Ee));},e.ɵprov=me({token:e,factory:e.ɵfac});let o=e;return o;})();var gt=["determinateSpinner"];function vt(o,e){if(o&1&&(te(),c(0,"svg",11),p(1,"circle",12),l()),o&2){let n=_();k("viewBox",n._viewBox()),m(),X("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeCircumference()/2,"px")("stroke-width",n._circleStrokeWidth(),"%"),k("r",n._circleRadius());}}var yt=new le("mat-progress-spinner-default-options",{providedIn:"root",factory:St});function St(){return{diameter:it};}var it=100,Ct=10,ot=(()=>{let e=class e{get color(){return this._color||this._defaultColor;}set color(i){this._color=i;}constructor(i,t,r){this._elementRef=i,this._defaultColor="primary",this._value=0,this._diameter=it,this._noopAnimations=t==="NoopAnimations"&&!!r&&!r._forceAnimations,this.mode=i.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth));}get value(){return this.mode==="determinate"?this._value:0;}set value(i){this._value=Math.max(0,Math.min(100,i||0));}get diameter(){return this._diameter;}set diameter(i){this._diameter=i||0;}get strokeWidth(){return this._strokeWidth??this.diameter/10;}set strokeWidth(i){this._strokeWidth=i||0;}_circleRadius(){return(this.diameter-Ct)/2;}_viewBox(){let i=this._circleRadius()*2+this.strokeWidth;return`0 0 ${i} ${i}`;}_strokeCircumference(){return 2*Math.PI*this._circleRadius();}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null;}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100;}};e.ɵfac=function(t){return new(t||e)(s(_e),s(fe,8),s(yt));},e.ɵcmp=u({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&be(gt,5),t&2){let d;Me(d=Te())&&(r._determinateCircle=d.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(k("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),ye("mat-"+r.color),X("width",r.diameter,"px")("height",r.diameter,"px")("--mdc-circular-progress-size",r.diameter+"px")("--mdc-circular-progress-active-indicator-width",r.diameter+"px"),ve("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[W.HasDecoratorInputTransform,"value","value",q],diameter:[W.HasDecoratorInputTransform,"diameter","diameter",q],strokeWidth:[W.HasDecoratorInputTransform,"strokeWidth","strokeWidth",q]},exportAs:["matProgressSpinner"],standalone:!0,features:[ge,f],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(O(0,vt,2,8,"ng-template",null,0,we),c(2,"div",1,2),te(),c(4,"svg",3),p(5,"circle",4),l()(),ue(),c(6,"div",5)(7,"div",6)(8,"div",7),Q(9,8),l(),c(10,"div",9),Q(11,8),l(),c(12,"div",10),Q(13,8),l()()()),t&2){let d=De(1);m(4),k("viewBox",r._viewBox()),m(),X("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),k("r",r._circleRadius()),m(4),a("ngTemplateOutlet",d),m(2),a("ngTemplateOutlet",d),m(2),a("ngTemplateOutlet",d);}},dependencies:[xe],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0});let o=e;return o;})();var nt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=U({type:e}),e.ɵinj=H({imports:[Fe,Ge]});let o=e;return o;})();var at=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=u({type:e,selectors:[["sz-ui-loader"]],standalone:!0,features:[f],decls:1,vars:1,consts:[[3,"diameter"]],template:function(t,r){t&1&&p(0,"mat-spinner",0),t&2&&a("diameter",32);},dependencies:[nt,ot]});let o=e;return o;})();var Mt=["*"],A=(()=>{let e=class e{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0;}set value(i){i&&(this.animate(this.oldValue,i),this.oldValue=i);}ngOnDestroy(){this.timer&&clearInterval(this.timer);}animate(i,t){let r=t-i,d=50,J=Math.abs(Math.floor(this.duration/r));J=Math.max(J,d);let ft=new Date().getTime()+this.duration,se=()=>{let _t=new Date().getTime(),ht=Math.max((ft-_t)/this.duration,0),ce=Math.round(t-ht*r);this.currentValue=ce,Math.round(ce)===Math.round(t)&&clearInterval(this.timer);};this.timer=setInterval(se,J),se();}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=u({type:e,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[f],ngContentSelectors:Mt,decls:3,vars:1,template:function(t,r){t&1&&(Se(),c(0,"span"),ze(1),Ce(2),l()),t&2&&(m(),Ie(" ",r.currentValue," "));},encapsulation:2});let o=e;return o;})();var P=(()=>{let e=class e{constructor(){this.managed=!1,this.removed=new he();}remove(){this.removed?.emit(this.tile);}};e.ɵfac=function(t){return new(t||e)();},e.ɵdir=de({type:e,inputs:{tile:"tile",managed:"managed"},outputs:{removed:"removed"}});let o=e;return o;})();var st=(()=>{let e=class e extends P{constructor(i,t,r){super(),this.mlabService=i,this.dialog=t,this.router=r,this.card={icon:"science",menu:B.more([D.delete(()=>this.remove())]),subtitle:h.analyses,clickFn:()=>this.router.navigate(["/mlab/analyses"]),actions:[F.action(h.add,()=>this.router.navigate(["/mlab/analyses/create"]))]},this.value=null,this.indicator=v(!1),this.get();}get(){this.mlabService.analyses.count({filters:[]}).pipe(b(this.indicator)).subscribe(i=>{this.value=i;});}};e.ɵfac=function(t){return new(t||e)(s(T),s(M),s(S));},e.ɵcmp=u({type:e,selectors:[["medisy-laboratory-tiles-analyses-count"]],standalone:!0,features:[N([T]),y,f],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(c(0,"sz-ui-card",0),p(1,"sz-ui-counter",1),l()),t&2&&(a("card",r.card)("indicator",r.indicator),m(),a("value",r.value));},dependencies:[z,C,I,w,x,A],encapsulation:2});let o=e;return o;})();var ct=(()=>{let e=class e extends P{constructor(i,t,r){super(),this.mlabService=i,this.dialog=t,this.router=r,this.card={icon:"biotech",subtitle:h.laboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"]),actions:[F.action(h.show,()=>this.router.navigate(["/mlab/laboratories"]))]},this.value=null,this.indicator=v(!1),this.get();}get(){this.mlabService.laboratories.count({filters:[]}).pipe(b(this.indicator)).subscribe(i=>{this.value=i;});}};e.ɵfac=function(t){return new(t||e)(s(T),s(M),s(S));},e.ɵcmp=u({type:e,selectors:[["medisy-laboratory-tiles-laboratories-count"]],standalone:!0,features:[y,f],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(c(0,"sz-ui-card",0),p(1,"sz-ui-counter",1),l()),t&2&&(a("card",r.card)("indicator",r.indicator),m(),a("value",r.value));},dependencies:[z,C,I,w,x,A],encapsulation:2});let o=e;return o;})();var mt=(()=>{let e=class e extends P{constructor(i,t,r){super(),this.mlabService=i,this.dialog=t,this.router=r,this.card={icon:"label",subtitle:h.specimens,clickFn:()=>this.router.navigate(["/mlab/specimens"]),actions:[F.action(h.show,()=>this.router.navigate(["/mlab/specimens"]))]},this.value=null,this.indicator=v(!1),this.get();}get(){this.mlabService.specimens.count({filters:[]}).pipe(b(this.indicator)).subscribe(i=>{this.value=i;});}};e.ɵfac=function(t){return new(t||e)(s(T),s(M),s(S));},e.ɵcmp=u({type:e,selectors:[["medisy-laboratory-tiles-specimens-count"]],standalone:!0,features:[y,f],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(c(0,"sz-ui-card",0),p(1,"sz-ui-counter",1),l()),t&2&&(a("card",r.card)("indicator",r.indicator),m(),a("value",r.value));},dependencies:[z,C,I,w,x,A],encapsulation:2});let o=e;return o;})();var lt=(()=>{let e=class e extends P{constructor(i,t,r){super(),this.mlabService=i,this.dialog=t,this.router=r,this.card={icon:"lab_profile",subtitle:h.testTypes,clickFn:()=>this.router.navigate(["/mlab/test-types"]),actions:[F.action(h.show,()=>this.router.navigate(["/mlab/test-types"]))]},this.value=null,this.indicator=v(!1),this.get();}get(){this.mlabService.testTypes.count({filters:[]}).pipe(b(this.indicator)).subscribe(i=>{this.value=i;});}};e.ɵfac=function(t){return new(t||e)(s(T),s(M),s(S));},e.ɵcmp=u({type:e,selectors:[["medisy-laboratory-tiles-test-types-count"]],standalone:!0,features:[y,f],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(c(0,"sz-ui-card",0),p(1,"sz-ui-counter",1),l()),t&2&&(a("card",r.card)("indicator",r.indicator),m(),a("value",r.value));},dependencies:[z,C,I,w,x,A],encapsulation:2});let o=e;return o;})();function Tt(o,e){if(o&1&&p(0,"sz-ui-form-field-select",4),o&2){let n=_();a("source",n.tileTypes)("multiple",!0);}}var pt=(()=>{let e=class e extends Ye{constructor(i,t,r,d){super(r),this.sprtService=i,this.fb=t,this.dialog=r,this.data=d,this.tileTypes=this.sprtService.tileTypes.getAll({orderBy:["name"]}),this.form=t.group({name:[d?.name,[ne.required,ne.minLength(1)]],description:[d?.description,[]],tileTypeIds:[]});}submit(){this.IsValid()&&(this.data?this.save(this.sprtService.tileGroups.update(this.data.id,this.form.value)):this.save(this.sprtService.tileGroups.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(s(E),s(Re),s(We),s(Ue));},e.ɵcmp=u({type:e,selectors:[["portal-dashboard-save"]],standalone:!0,features:[N([E]),y,f],decls:7,vars:4,consts:()=>{let i;i="Name";let t;t="Description";let r;return r="Type",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",t],["formControlName","tileTypeIds","label",r,3,"source","multiple"],[3,"actions"]];},template:function(t,r){t&1&&(p(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),O(5,Tt,1,2,"sz-ui-form-field-select",4),l()(),p(6,"sz-ui-dialog-actions",5)),t&2&&(a("header",r.header),m(2),a("formGroup",r.form),m(3),V(5,r.data?-1:5),m(),a("actions",r.actions));},dependencies:[Le,Oe,Ae,Pe,ke,Ne,Qe,Xe,et,Ke,Ze,He,je,$e,Be],encapsulation:2});let o=e;return o;})();function Dt(o,e){o&1&&(c(0,"div",2),p(1,"sz-ui-loader"),l());}function zt(o,e){if(o&1){let n=G();c(0,"medisy-laboratory-tiles-analyses-count",6),j("removed",function(t){R(n);let r=_(3);return L(r.removeTile(t));}),l();}if(o&2){let n=_().$implicit;a("tile",n);}}function It(o,e){if(o&1){let n=G();c(0,"medisy-laboratory-tiles-specimens-count",6),j("removed",function(t){R(n);let r=_(3);return L(r.removeTile(t));}),l();}if(o&2){let n=_().$implicit;a("tile",n);}}function wt(o,e){if(o&1){let n=G();c(0,"medisy-laboratory-tiles-laboratories-count",6),j("removed",function(t){R(n);let r=_(3);return L(r.removeTile(t));}),l();}if(o&2){let n=_().$implicit;a("tile",n);}}function xt(o,e){if(o&1){let n=G();c(0,"medisy-laboratory-tiles-test-types-count",6),j("removed",function(t){R(n);let r=_(3);return L(r.removeTile(t));}),l();}if(o&2){let n=_().$implicit;a("tile",n);}}function Ft(o,e){if(o&1&&O(0,zt,1,1,"medisy-laboratory-tiles-analyses-count",5)(1,It,1,1)(2,wt,1,1)(3,xt,1,1),o&2){let n=e.$implicit;V(0,n.tileType.identifier==="mlab-analyses-count"?0:n.tileType.identifier==="mlab-specimens-count"?1:n.tileType.identifier==="mlab-laboratories-count"?2:n.tileType.identifier==="mlab-test-classes-count"?3:-1);}}function Et(o,e){if(o&1&&(p(0,"sz-ui-header-info",3),c(1,"div",4),ie(2,Ft,4,1,null,null,re),l()),o&2){let n=e.$implicit,i=_();a("title",n.name)("subtitle",n.description)("menu",i.tileGroupMenu)("data",n),m(2),oe(n.tiles);}}var dt=(()=>{let e=class e{constructor(i,t,r){this.sprtService=i,this.dialog=t,this.router=r,this.tileGroups=[],this.title=h.dashboard,this.manageTileGroups=!1,this.indicator=v(!1),this.menu=B.more([D.add(()=>this.openSaveComponent()),D.divider(),D.manage(()=>{this.manageTileGroups=!this.manageTileGroups,this.manageTileGroups?this.tileGroupMenu=B.more([D.edit(d=>this.openSaveComponent(d)),D.divider(),D.delete(d=>this.openTileGroupDeleteComponent(d))]):this.tileGroupMenu=null;})]),this.tileGroupMenu=null,this.get();}removeTile(i){this.sprtService.tiles.delete(i.id).pipe(ee(1)).subscribe(()=>{this.tileGroups.forEach(t=>{t.tiles=t.tiles.filter(r=>r.id!==i.id);});});}openSaveComponent(i=null){this.dialog.open(pt,{data:i}).afterClosed().subscribe(t=>{t&&this.get();});}openTileGroupDeleteComponent(i){this.dialog.open(Je,{data:tt.delete(this.sprtService.tileGroups.delete(i.id),i)}).afterClosed().subscribe(t=>{t&&(this.tileGroups=this.tileGroups.filter(r=>r.id!==t.id));});}get(){this.sprtService.tileGroups.getAll().pipe(b(this.indicator),ee(1)).subscribe(i=>{this.tileGroups=i.items;});}};e.ɵfac=function(t){return new(t||e)(s(E),s(M),s(S));},e.ɵcmp=u({type:e,selectors:[["portal-dashboard"]],standalone:!0,features:[N([E]),f],decls:4,vars:3,consts:[[3,"title","menu"],["class","tw-flex tw-flex-col tw-justify-center tw-items-center"],[1,"tw-flex","tw-flex-col","tw-justify-center","tw-items-center"],[3,"title","subtitle","menu","data"],[1,"sz-grid-card","tw-mb-2"],[3,"tile"],[3,"tile","removed"]],template:function(t,r){t&1&&(p(0,"sz-ui-header-info",0),O(1,Dt,2,0,"div",1),ie(2,Et,4,4,null,null,re)),t&2&&(a("title",r.title)("menu",r.menu),m(),V(1,r.indicator()?1:-1),m(),oe(r.tileGroups));},dependencies:[K,at,st,mt,ct,lt],encapsulation:2});let o=e;return o;})();var ut=[{path:"",component:dt}];var ro=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=U({type:e}),e.ɵinj=H({imports:[Ve.forChild(ut),C,K]});let o=e;return o;})();export{ro as DashboardModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/