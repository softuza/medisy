"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{4672:(l,d,s)=>{s.d(d,{c:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/analysis-management/analysis-types"}getAnalysisTypes(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}createAnalysisType(t){return this.http.post(`${this.path}`,t)}deleteAnalysisType(t){return this.http.delete(`${this.path}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},5013:(l,d,s)=>{s.d(d,{D:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/analysis-management/test-types"}getTestTypes(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},8570:(l,d,s)=>{s.d(d,{G:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/common-types/age-groups"}getAgeGroups(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},8352:(l,d,s)=>{s.d(d,{F:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/common-types/data-units"}getDataUnites(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},6675:(l,d,s)=>{s.d(d,{C:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/common-types/sexes"}getSexes(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},7620:(l,d,s)=>{s.d(d,{m:()=>o});var n=s(520),r=s(5e3);let o=(()=>{class e{constructor(t){this.http=t,this.path="v1/common-types/value-operations"}getValueOperations(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(n.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()},7544:(l,d,s)=>{s.d(d,{g:()=>u,k:()=>p});var n=s(5e3),r=s(508),o=s(5664),e=s(3191);let _=0;const t=(0,r.Id)(class{}),m="mat-badge-content";let p=(()=>{class c extends t{constructor(a,i,g,E,v){super(),this._ngZone=a,this._elementRef=i,this._ariaDescriber=g,this._renderer=E,this._animationMode=v,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=_++,this._isInitialized=!1}get color(){return this._color}set color(a){this._setColor(a),this._color=a}get overlap(){return this._overlap}set overlap(a){this._overlap=(0,e.Ig)(a)}get content(){return this._content}set content(a){this._updateRenderedContent(a)}get description(){return this._description}set description(a){this._updateHostAriaDescription(a)}get hidden(){return this._hidden}set hidden(a){this._hidden=(0,e.Ig)(a)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const a=this._renderer.createElement("span"),i="mat-badge-active";return a.setAttribute("id",`mat-badge-content-${this._id}`),a.setAttribute("aria-hidden","true"),a.classList.add(m),"NoopAnimations"===this._animationMode&&a.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(a),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{a.classList.add(i)})}):a.classList.add(i),a}_updateRenderedContent(a){const i=`${null!=a?a:""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateHostAriaDescription(a){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),a&&this._ariaDescriber.describe(this._elementRef.nativeElement,a),this._description=a}_setColor(a){const i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),a&&i.add(`mat-badge-${a}`)}_clearExistingBadges(){const a=this._elementRef.nativeElement.querySelectorAll(`:scope > .${m}`);for(const i of Array.from(a))i!==this._badgeElement&&i.remove()}}return c.\u0275fac=function(a){return new(a||c)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(o.$s),n.Y36(n.Qsj),n.Y36(n.QbO,8))},c.\u0275dir=n.lG2({type:c,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(a,i){2&a&&n.ekj("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small","small"===i.size)("mat-badge-medium","medium"===i.size)("mat-badge-large","large"===i.size)("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[n.qOj]}),c})(),u=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[o.rt,r.BQ,r.BQ]}),c})()}}]);