import{a as et,b as it}from"./chunk-L73C4IKA.js";import{h as K,j as X,k as tt}from"./chunk-YKI6444X.js";import{aa as J,ka as Q,la as W}from"./chunk-BC4NCYN6.js";import{Cb as m,Da as S,Db as g,Ea as z,Fa as _,Ga as V,Ib as h,Jc as Z,Kb as H,Lb as $,Mb as U,Nb as r,Oa as j,Ob as l,Oc as C,Pb as b,Pc as x,Tb as T,_b as u,ac as d,hb as s,ib as I,ja as F,jc as v,ka as k,kc as q,l as M,lc as y,ma as E,n as w,qa as A,qc as Y,ra as B,ta as c,ua as N,va as R,vb as G,zb as f}from"./chunk-R6OEYYKK.js";function at(a,n){if(a&1&&(r(0,"mat-option",16),v(1),l()),a&2){let e=n.$implicit;g("value",e),s(),y(" ",e," ")}}function nt(a,n){if(a&1){let e=T();r(0,"mat-form-field",13)(1,"mat-select",15),u("selectionChange",function(o){S(e);let i=d(2);return z(i._changePageSize(o.value))}),$(2,at,2,2,"mat-option",16,H),l()()}if(a&2){let e=d(2);g("appearance",e._formFieldAppearance)("color",e.color),s(),g("value",e.pageSize)("disabled",e.disabled)("aria-labelledby",e._pageSizeLabelId)("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),s(),U(e._displayedPageSizeOptions)}}function ot(a,n){if(a&1&&(r(0,"div",14),v(1),l()),a&2){let e=d(2);s(),q(e.pageSize)}}function st(a,n){if(a&1&&(r(0,"div",2)(1,"div",12),v(2),l(),f(3,nt,4,7,"mat-form-field",13)(4,ot,2,1,"div",14),l()),a&2){let e=d();s(),m("id",e._pageSizeLabelId),s(),y(" ",e._intl.itemsPerPageLabel," "),s(),h(3,e._displayedPageSizeOptions.length>1?3:-1),s(),h(4,e._displayedPageSizeOptions.length<=1?4:-1)}}function rt(a,n){if(a&1){let e=T();r(0,"button",17),u("click",function(){S(e);let o=d();return z(o.firstPage())}),_(),r(1,"svg",7),b(2,"path",18),l()()}if(a&2){let e=d();g("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),m("aria-label",e._intl.firstPageLabel)}}function lt(a,n){if(a&1){let e=T();r(0,"button",19),u("click",function(){S(e);let o=d();return z(o.lastPage())}),_(),r(1,"svg",7),b(2,"path",20),l()()}if(a&2){let e=d();g("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),m("aria-label",e._intl.lastPageLabel)}}var D=(()=>{let n=class n{constructor(){this.changes=new M,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(t,o,i)=>{if(i==0||o==0)return`0 of ${i}`;i=Math.max(i,0);let p=t*o,P=p<i?Math.min(p+o,i):p+o;return`${p+1} \u2013 ${P} of ${i}`}}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();function pt(a){return a||new D}var dt={provide:D,deps:[[new A,new B,D]],useFactory:pt},gt=50;var ct=new E("MAT_PAGINATOR_DEFAULT_OPTIONS"),mt=0,ht=(()=>{let n=class n{get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(o=>x(o,0)),this._updateDisplayedPageSizeOptions()}constructor(t,o,i){if(this._intl=t,this._changeDetectorRef=o,this._pageSizeLabelId=`mat-paginator-page-size-label-${mt++}`,this._isInitialized=!1,this._initializedStream=new w(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new j,this.initialized=this._initializedStream,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:p,pageSizeOptions:P,hidePageSize:O,showFirstLastButtons:L}=i;p!=null&&(this._pageSize=p),P!=null&&(this._pageSizeOptions=P),O!=null&&(this.hidePageSize=O),L!=null&&(this.showFirstLastButtons=L)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let o=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(o/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:gt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,o)=>t-o),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};n.\u0275fac=function(o){return new(o||n)(I(D),I(Z),I(ct,8))},n.\u0275cmp=N({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[c.HasDecoratorInputTransform,"pageIndex","pageIndex",x],length:[c.HasDecoratorInputTransform,"length","length",x],pageSize:[c.HasDecoratorInputTransform,"pageSize","pageSize",x],pageSizeOptions:"pageSizeOptions",hidePageSize:[c.HasDecoratorInputTransform,"hidePageSize","hidePageSize",C],showFirstLastButtons:[c.HasDecoratorInputTransform,"showFirstLastButtons","showFirstLastButtons",C],selectConfig:"selectConfig",disabled:[c.HasDecoratorInputTransform,"disabled","disabled",C]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[G,Y],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"div",1),f(2,st,5,4,"div",2),r(3,"div",3)(4,"div",4),v(5),l(),f(6,rt,3,5,"button",5),r(7,"button",6),u("click",function(){return i.previousPage()}),_(),r(8,"svg",7),b(9,"path",8),l()(),V(),r(10,"button",9),u("click",function(){return i.nextPage()}),_(),r(11,"svg",7),b(12,"path",10),l()(),f(13,lt,3,5,"button",11),l()()()),o&2&&(s(2),h(2,i.hidePageSize?-1:2),s(3),y(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),s(),h(6,i.showFirstLastButtons?6:-1),s(),g("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),m("aria-label",i._intl.previousPageLabel),s(3),g("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),m("aria-label",i._intl.nextPageLabel),s(3),h(13,i.showFirstLastButtons?13:-1))},dependencies:[K,X,J,Q,et],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let a=n;return a})(),Mt=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=R({type:n}),n.\u0275inj=k({providers:[dt],imports:[W,tt,it,ht]});let a=n;return a})();export{D as a,ht as b,Mt as c};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/
