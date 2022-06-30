"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{6849:(c,l,s)=>{s.d(l,{L:()=>d});var a=s(9808),o=s(5e3);let d=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.ez]}),n})()},4672:(c,l,s)=>{s.d(l,{c:()=>d});var a=s(520),o=s(5e3);let d=(()=>{class n{constructor(i){this.http=i,this.path="v1/analysis-management/analysis-types"}getAnalysisTypes(i){return this.http.get(`${this.path}`,{params:new a.LE({fromObject:i})})}createAnalysisType(i){return this.http.post(`${this.path}`,i)}deleteAnalysisType(i){return this.http.delete(`${this.path}/${i}`)}}return n.\u0275fac=function(i){return new(i||n)(o.LFG(a.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})()},5013:(c,l,s)=>{s.d(l,{D:()=>d});var a=s(520),o=s(5e3);let d=(()=>{class n{constructor(i){this.http=i,this.path="v1/analysis-management/test-types"}getTestTypes(i){return this.http.get(`${this.path}`,{params:new a.LE({fromObject:i})})}}return n.\u0275fac=function(i){return new(i||n)(o.LFG(a.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})()},7544:(c,l,s)=>{s.d(l,{g:()=>p,k:()=>g});var a=s(5e3),o=s(508),d=s(5664),n=s(3191);let _=0;const i=(0,o.Id)(class{}),h="mat-badge-content";let g=(()=>{class r extends i{constructor(e,t,u,E,f){super(),this._ngZone=e,this._elementRef=t,this._ariaDescriber=u,this._renderer=E,this._animationMode=f,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=_++,this._isInitialized=!1}get color(){return this._color}set color(e){this._setColor(e),this._color=e}get overlap(){return this._overlap}set overlap(e){this._overlap=(0,n.Ig)(e)}get content(){return this._content}set content(e){this._updateRenderedContent(e)}get description(){return this._description}set description(e){this._updateHostAriaDescription(e)}get hidden(){return this._hidden}set hidden(e){this._hidden=(0,n.Ig)(e)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",`mat-badge-content-${this._id}`),e.setAttribute("aria-hidden","true"),e.classList.add(h),"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){const t=`${null!=e?e:""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateHostAriaDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),e&&this._ariaDescriber.describe(this._elementRef.nativeElement,e),this._description=e}_setColor(e){const t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){const e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${h}`);for(const t of Array.from(e))t!==this._badgeElement&&t.remove()}}return r.\u0275fac=function(e){return new(e||r)(a.Y36(a.R0b),a.Y36(a.SBq),a.Y36(d.$s),a.Y36(a.Qsj),a.Y36(a.QbO,8))},r.\u0275dir=a.lG2({type:r,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,t){2&e&&a.ekj("mat-badge-overlap",t.overlap)("mat-badge-above",t.isAbove())("mat-badge-below",!t.isAbove())("mat-badge-before",!t.isAfter())("mat-badge-after",t.isAfter())("mat-badge-small","small"===t.size)("mat-badge-medium","medium"===t.size)("mat-badge-large","large"===t.size)("mat-badge-hidden",t.hidden||!t.content)("mat-badge-disabled",t.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[a.qOj]}),r})(),p=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[d.rt,o.BQ,o.BQ]}),r})()}}]);