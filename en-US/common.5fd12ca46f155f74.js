"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{3794:(f,m,e)=>{e.d(m,{c:()=>s});var n=e(2349),l=e(3075),c=e(591),a=e(8929),t=e(5701),_=e(2986),i=e(5e3),v=e(9808),h=e(7423),E=e(5006);function o(g,p){1&g&&i._UZ(0,"app-alert",5),2&g&&i.Q6J("alert",p.ngIf)}let s=(()=>{class g extends class u{constructor(p){this.indicator$=new c.X(!1),this.alert$=new a.xQ,this.form=p}reset(){Object.keys(this.form.controls).forEach(p=>{var d;const r=null===(d=this.form)||void 0===d?void 0:d.get(p);null==r||r.setValue(null)})}submit(){!this.form||this.form.valid?this.afterSubmit():Object.keys(this.form.controls).forEach(p=>{var d;const r=null===(d=this.form)||void 0===d?void 0:d.get(p);null==r||r.markAsTouched({onlySelf:!0})})}afterSubmit(){}}{constructor(d,r){super(new l.cw({})),this.dialog=d,this.input=r,this.options=r}afterSubmit(){var d;const r=null===(d=this.options)||void 0===d?void 0:d.submitEvent;r?r.pipe((0,t.sU)(this.indicator$)).pipe((0,t.S3)(this.alert$)).pipe((0,_.q)(1)).subscribe(()=>{this.close(this.options.data)}):this.close(this.options.data)}close(d=null){var r;null===(r=this.dialog)||void 0===r||r.close(d)}}return g.\u0275fac=function(d){return new(d||g)(i.Y36(n.so),i.Y36(n.WI))},g.\u0275cmp=i.Xpm({type:g,selectors:[["sou-confirm-dialog"]],features:[i.qOj],decls:13,vars:10,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"alert"]],template:function(d,r){1&d&&(i.TgZ(0,"h2",0),i._uU(1),i.qZA(),i.YNc(2,o,1,1,"app-alert",1),i.ALo(3,"async"),i.TgZ(4,"mat-dialog-content")(5,"p"),i._uU(6),i.qZA()(),i.TgZ(7,"mat-dialog-actions",2)(8,"button",3),i.NdJ("click",function(){return r.close()}),i._uU(9),i.qZA(),i.TgZ(10,"button",4),i.NdJ("click",function(){return r.submit()}),i.ALo(11,"async"),i._uU(12),i.qZA()()),2&d&&(i.xp6(1),i.Oqu(r.options.title),i.xp6(1),i.Q6J("ngIf",i.lcZ(3,6,r.alert$)),i.xp6(4),i.Oqu(r.options.message),i.xp6(3),i.Oqu(r.options.cancelText),i.xp6(1),i.Q6J("disabled",i.lcZ(11,8,r.indicator$)),i.xp6(2),i.hij(" ",r.options.confirmText," "))},dependencies:[v.O5,n.uh,n.xY,n.H8,h.lW,E.w,v.Ov],encapsulation:2}),g})()},3991:(f,m,e)=>{e.d(m,{f:()=>l}),"Confirm","Do you confirm this action?","Cancel","Confirm";const l={title:"Delete",message:"Are you sure to delete the selected element?",cancelText:"Close",confirmText:"Delete"}},5984:(f,m,e)=>{e.d(m,{a:()=>t});var n=e(9808),l=e(7423),c=e(2349),a=e(6114),u=e(5e3);let t=(()=>{class _{}return _.\u0275fac=function(v){return new(v||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[n.ez,c.Is,l.ot,a.n]}),_})()},4687:(f,m,e)=>{e.d(m,{L:()=>l});var n=e(5e3);let l=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({}),c})()},1505:(f,m,e)=>{e.d(m,{G:()=>c});var n=e(520),l=e(5e3);let c=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/age-groups"}getAgeGroups(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(n.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},4672:(f,m,e)=>{e.d(m,{c:()=>c});var n=e(520),l=e(5e3);let c=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/analysis-types"}getAnalysisTypes(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}getAnalysisTypesCount(t){return this.http.get(`${this.path}/count`,{params:new n.LE({fromObject:t})})}createAnalysisType(t){return this.http.post(`${this.path}`,t)}deleteAnalysisType(t){return this.http.delete(`${this.path}/${t}`)}updateAnalysisType(t,_){return this.http.put(`${this.path}/${t}`,_)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(n.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},101:(f,m,e)=>{e.d(m,{F:()=>c});var n=e(520),l=e(5e3);let c=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/samples"}getSamples(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}getSamplesCount(t){return this.http.get(`${this.path}/count`,{params:new n.LE({fromObject:t})})}getSample(t){return this.http.get(`${this.path}/${t}`)}createSample(t){return this.http.post(`${this.path}`,t)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(n.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},5013:(f,m,e)=>{e.d(m,{D:()=>c});var n=e(520),l=e(5e3);let c=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/test-types"}getTestTypes(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(n.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},6158:(f,m,e)=>{e.d(m,{R:()=>c});var n=e(520),l=e(5e3);let c=(()=>{class a{constructor(t){this.http=t,this.path="people-management/v1/persons"}getPersons(t){return this.http.get(`${this.path}`,{params:new n.LE({fromObject:t})})}getPerson(t){return this.http.get(`${this.path}/${t}`)}createPerson(t){return this.http.post(`${this.path}`,t)}}return a.\u0275fac=function(t){return new(t||a)(l.LFG(n.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},7544:(f,m,e)=>{e.d(m,{g:()=>v,k:()=>i});var n=e(5e3),l=e(508),c=e(5664),a=e(3191);let u=0;const t=(0,l.Id)(class{}),_="mat-badge-content";let i=(()=>{class h extends t{constructor(o,s,g,p,d){super(),this._ngZone=o,this._elementRef=s,this._ariaDescriber=g,this._renderer=p,this._animationMode=d,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=u++,this._isInitialized=!1}get color(){return this._color}set color(o){this._setColor(o),this._color=o}get overlap(){return this._overlap}set overlap(o){this._overlap=(0,a.Ig)(o)}get content(){return this._content}set content(o){this._updateRenderedContent(o)}get description(){return this._description}set description(o){this._updateHostAriaDescription(o)}get hidden(){return this._hidden}set hidden(o){this._hidden=(0,a.Ig)(o)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const o=this._renderer.createElement("span"),s="mat-badge-active";return o.setAttribute("id",`mat-badge-content-${this._id}`),o.setAttribute("aria-hidden","true"),o.classList.add(_),"NoopAnimations"===this._animationMode&&o.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(o),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{o.classList.add(s)})}):o.classList.add(s),o}_updateRenderedContent(o){const s=`${null!=o?o:""}`.trim();this._isInitialized&&s&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=s),this._content=s}_updateHostAriaDescription(o){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),o&&this._ariaDescriber.describe(this._elementRef.nativeElement,o),this._description=o}_setColor(o){const s=this._elementRef.nativeElement.classList;s.remove(`mat-badge-${this._color}`),o&&s.add(`mat-badge-${o}`)}_clearExistingBadges(){const o=this._elementRef.nativeElement.querySelectorAll(`:scope > .${_}`);for(const s of Array.from(o))s!==this._badgeElement&&s.remove()}}return h.\u0275fac=function(o){return new(o||h)(n.Y36(n.R0b),n.Y36(n.SBq),n.Y36(c.$s),n.Y36(n.Qsj),n.Y36(n.QbO,8))},h.\u0275dir=n.lG2({type:h,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(o,s){2&o&&n.ekj("mat-badge-overlap",s.overlap)("mat-badge-above",s.isAbove())("mat-badge-below",!s.isAbove())("mat-badge-before",!s.isAfter())("mat-badge-after",s.isAfter())("mat-badge-small","small"===s.size)("mat-badge-medium","medium"===s.size)("mat-badge-large","large"===s.size)("mat-badge-hidden",s.hidden||!s.content)("mat-badge-disabled",s.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[n.qOj]}),h})(),v=(()=>{class h{}return h.\u0275fac=function(o){return new(o||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[c.rt,l.BQ,l.BQ]}),h})()}}]);