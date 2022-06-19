"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{3869:(m,_,a)=>{a.d(_,{a:()=>d});var n=a(591),r=a(8929);class d{constructor(l,e){this.indicator$=new n.X(!1),this.alert$=new r.xQ,this.dialogRef=null,this.dialogRef=l,this.form=e}reset(){Object.keys(this.form.controls).forEach(l=>{var e;const s=null===(e=this.form)||void 0===e?void 0:e.get(l);null==s||s.setValue(null)})}submit(){!this.form||this.form.valid?this.handleSubmit():Object.keys(this.form.controls).forEach(l=>{var e;const s=null===(e=this.form)||void 0===e?void 0:e.get(l);null==s||s.markAsTouched({onlySelf:!0})})}close(l=null){var e;null===(e=this.dialogRef)||void 0===e||e.close(l)}handleSubmit(){}}},5006:(m,_,a)=>{a.d(_,{w:()=>i});var n=a(8033),r=a(5e3),d=a(9808);let i=(()=>{class l{constructor(){this.message="",this.className="alert-error"}set alert(s){s?this.show(s):this.message=""}error(s){this.show({message:s,type:n.N.error})}success(s){this.show({message:s,type:n.N.success})}info(s){this.show({message:s,type:n.N.info})}warning(s){this.show({message:s,type:n.N.warning})}show(s){switch(this.message=s.message,s.type){case n.N.error:this.className="alert-error";break;case n.N.success:this.className="alert-success";break;case n.N.info:this.className="alert-info";break;case n.N.warning:this.className="alert-warning"}}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-alert"]],inputs:{alert:"alert"},decls:2,vars:2,consts:[[1,"alert",3,"ngClass"],[3,"innerHtml"]],template:function(s,h){1&s&&(r.TgZ(0,"div",0),r._UZ(1,"div",1),r.qZA()),2&s&&(r.Q6J("ngClass",h.className),r.xp6(1),r.Q6J("innerHtml",h.message,r.oJD))},dependencies:[d.mk],styles:[".alert[_ngcontent-%COMP%], .alert-warning[_ngcontent-%COMP%], .alert-info[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%], .alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;transition:all .2s;color:#fff;background-color:#d32f2f;padding:16px 0 16px 8px;border-radius:3px;margin-bottom:16px;text-align:center}.alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#c63f17}"]}),l})()},4672:(m,_,a)=>{a.d(_,{c:()=>d});var n=a(520),r=a(5e3);let d=(()=>{class i{constructor(e){this.http=e,this.path="v1/analysis-management/analysis-types"}getAnalysisTypes(e){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:e})})}createAnalysisType(e){return this.http.post(`${this.path}`,e)}deleteAnalysisType(e){return this.http.delete(`${this.path}/${e}`)}}return i.\u0275fac=function(e){return new(e||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},5013:(m,_,a)=>{a.d(_,{D:()=>d});var n=a(520),r=a(5e3);let d=(()=>{class i{constructor(e){this.http=e,this.path="v1/common-types/test-types"}getTestTypes(e){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:e})})}}return i.\u0275fac=function(e){return new(e||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},7963:(m,_,a)=>{a.d(_,{B:()=>d});var n=a(520),r=a(5e3);let d=(()=>{class i{constructor(e){this.http=e,this.path="v1/sample-management/sample-Types"}getSampleTypes(e){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:e})})}}return i.\u0275fac=function(e){return new(e||i)(r.LFG(n.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},7544:(m,_,a)=>{a.d(_,{g:()=>p,k:()=>h});var n=a(5e3),r=a(508),d=a(5664),i=a(3191);let l=0;const e=(0,r.Id)(class{}),s="mat-badge-content";let h=(()=>{class c extends e{constructor(t,o,u,f,v){super(),this._ngZone=t,this._elementRef=o,this._ariaDescriber=u,this._renderer=f,this._animationMode=v,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=l++,this._isInitialized=!1}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,i.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateHostAriaDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,i.Ig)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const t=this._renderer.createElement("span"),o="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(s),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(o)})}):t.classList.add(o),t}_updateRenderedContent(t){const o=`${null!=t?t:""}`.trim();this._isInitialized&&o&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=o),this._content=o}_updateHostAriaDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),t&&this._ariaDescriber.describe(this._elementRef.nativeElement,t),this._description=t}_setColor(t){const o=this._elementRef.nativeElement.classList;o.remove(`mat-badge-${this._color}`),t&&o.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${s}`);for(const o of Array.from(t))o!==this._badgeElement&&o.remove()}}return c.\u0275fac=function(t){return new(t||c)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(d.$s),n.Y36(n.Qsj),n.Y36(n.QbO,8))},c.\u0275dir=n.lG2({type:c,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,o){2&t&&n.ekj("mat-badge-overlap",o.overlap)("mat-badge-above",o.isAbove())("mat-badge-below",!o.isAbove())("mat-badge-before",!o.isAfter())("mat-badge-after",o.isAfter())("mat-badge-small","small"===o.size)("mat-badge-medium","medium"===o.size)("mat-badge-large","large"===o.size)("mat-badge-hidden",o.hidden||!o.content)("mat-badge-disabled",o.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[n.qOj]}),c})(),p=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[d.rt,r.BQ,r.BQ]}),c})()}}]);