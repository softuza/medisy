import{a as te}from"./chunk-WHAEY7W6.js";import{Aa as T,Ab as ee,Ga as J,Ha as _,Vb as j,aa as N,bb as o,ca as p,da as K,ea as P,f as ge,ga as y,gb as Q,kc as g,l as me,oa as k,ob as h,pa as l,s as ve,va as G,xc as _e,y as ye}from"./chunk-WEQMZHJB.js";import{a as c,b as f}from"./chunk-ZSRQUDS2.js";var we=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(o(Q),o(J))},e.\u0275dir=l({type:e});let i=e;return i})(),Je=(()=>{let e=class e extends we{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=T(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[h]});let i=e;return i})(),ae=new y("");var Qe={provide:ae,useExisting:p(()=>Fe),multi:!0};function et(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var tt=new y(""),Fe=(()=>{let e=class e extends we{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(o(Q),o(J),o(tt,8))},e.\u0275dir=l({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&j("input",function(d){return s._handleInput(d.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(d){return s._compositionEnd(d.target.value)})},features:[g([Qe]),h]});let i=e;return i})();function m(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Ie(i){return i!=null&&typeof i.length=="number"}var M=new y(""),E=new y(""),it=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ce=class{static min(e){return nt(e)}static max(e){return rt(e)}static required(e){return st(e)}static requiredTrue(e){return ot(e)}static email(e){return at(e)}static minLength(e){return lt(e)}static maxLength(e){return ut(e)}static pattern(e){return dt(e)}static nullValidator(e){return Se(e)}static compose(e){return Ge(e)}static composeAsync(e){return Te(e)}};function nt(i){return e=>{if(m(e.value)||m(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function rt(i){return e=>{if(m(e.value)||m(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function st(i){return m(i.value)?{required:!0}:null}function ot(i){return i.value===!0?null:{required:!0}}function at(i){return m(i.value)||it.test(i.value)?null:{email:!0}}function lt(i){return e=>m(e.value)||!Ie(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ut(i){return e=>Ie(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function dt(i){if(!i)return Se;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(m(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Se(i){return null}function Oe(i){return i!=null}function xe(i){return _e(i)?me(i):i}function Ne(i){let e={};return i.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function Pe(i,e){return e.map(n=>n(i))}function ct(i){return!i.validate}function ke(i){return i.map(e=>ct(e)?e:n=>e.validate(n))}function Ge(i){if(!i)return null;let e=i.filter(Oe);return e.length==0?null:function(n){return Ne(Pe(n,e))}}function le(i){return i!=null?Ge(ke(i)):null}function Te(i){if(!i)return null;let e=i.filter(Oe);return e.length==0?null:function(n){let t=Pe(n,e).map(xe);return ye(t).pipe(ve(Ne))}}function ue(i){return i!=null?Te(ke(i)):null}function Ve(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function je(i){return i._rawValidators}function Be(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function De(i,e){let n=ie(e);return ie(i).forEach(r=>{R(n,r)||n.push(r)}),n}function be(i,e){return ie(e).filter(n=>!R(i,n))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},u=class extends H{get formDirective(){return null}get path(){return null}},C=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ht={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=f(c({},ht),{"[class.ng-submitted]":"isSubmitted"}),ni=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(C,2))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ee("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[h]});let i=e;return i})(),ri=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(u,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&ee("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[h]});let i=e;return i})();var w="VALID",B="INVALID",V="PENDING",F="DISABLED",v=class{},$=class extends v{constructor(e,n){super(),this.value=e,this.source=n}},S=class extends v{constructor(e,n){super(),this.pristine=e,this.source=n}},O=class extends v{constructor(e,n){super(),this.touched=e,this.source=n}},D=class extends v{constructor(e,n){super(),this.status=e,this.source=n}},ne=class extends v{constructor(e){super(),this.source=e}},re=class extends v{constructor(e){super(),this.source=e}};function de(i){return(X(i)?i.validators:i)||null}function ft(i){return Array.isArray(i)?le(i):i||null}function ce(i,e){return(X(e)?e.asyncValidators:i)||null}function pt(i){return Array.isArray(i)?ue(i):i||null}function X(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ue(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new N(1e3,"");if(!t[n])throw new N(1001,"")}function Re(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var b=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===B}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(De(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(c({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new O(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new O(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(c({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new S(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new S(!0,t))}markAsPending(e={}){this.status=V;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(c({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(t=>{t.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===V)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,n)),this._events.next(new D(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(c({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=xe(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new D(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(B)?B:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new S(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}},A=class extends b{constructor(e,n,t){super(de(n),ce(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Re(this,!0,e),Object.keys(e).forEach(t=>{Ue(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var se=class extends A{};var x=new y("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function he(i,e){return[...e.path,i]}function W(i,e,n=Y){fe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),mt(i,e),yt(i,e),vt(i,e),gt(i,e)}function q(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),Z(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function z(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function gt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function fe(i,e){let n=je(i);e.validator!==null?i.setValidators(Ve(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Be(i);e.asyncValidator!==null?i.setAsyncValidators(Ve(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=je(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Be(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return z(e._rawValidators,t),z(e._rawAsyncValidators,t),n}function mt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&He(i,e)})}function vt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&He(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function He(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function yt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Le(i,e){i==null,fe(i,e)}function _t(i,e){return Z(i,e)}function $e(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ct(i){return Object.getPrototypeOf(i.constructor)===Je}function We(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function qe(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===Fe?n=s:Ct(s)?t=s:r=s}),r||t||n||null}function Vt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}var Dt={provide:u,useExisting:p(()=>bt)},I=Promise.resolve(),bt=(()=>{let e=class e extends u{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new _,this.form=new A({},le(t),ue(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){I.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),W(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){I.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){I.then(()=>{let r=this._findContainer(t.path),s=new A({});Le(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){I.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){I.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,We(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(o(M,10),o(E,10),o(x,8))},e.\u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&j("submit",function(d){return s.onSubmit(d)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[g([Dt]),h]});let i=e;return i})();function Ae(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Me(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var U=class extends b{constructor(e=null,n,t){super(de(n),ce(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ae(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ae(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var At=i=>i instanceof U,Mt=(()=>{let e=class e extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return he(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=T(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[h]});let i=e;return i})();var oi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var pe=new y(""),Et={provide:C,useExisting:p(()=>wt)},wt=(()=>{let e=class e extends C{set isDisabled(t){}constructor(t,r,s,a,d){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=d,this.update=new _,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=qe(this,s)}ngOnChanges(t){if(this._isControlChanged(t)){let r=t.form.previousValue;r&&q(r,this,!1),W(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}$e(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&q(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(M,10),o(E,10),o(ae,10),o(pe,8),o(x,8))},e.\u0275dir=l({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[g([Et]),h,G]});let i=e;return i})(),Ft={provide:u,useExisting:p(()=>ze)},ze=(()=>{let e=class e extends u{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return W(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){q(t.control||null,t,!1),Vt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,We(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ne(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1,this.form._events.next(new re(this.form))}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(q(r||null,t),At(s)&&(W(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Le(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&_t(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){fe(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(M,10),o(E,10),o(x,8))},e.\u0275dir=l({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&j("submit",function(d){return s.onSubmit(d)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[g([Ft]),h,G]});let i=e;return i})(),It={provide:u,useExisting:p(()=>Ze)},Ze=(()=>{let e=class e extends Mt{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){Ye(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(u,13),o(M,10),o(E,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},features:[g([It]),h]});let i=e;return i})(),St={provide:u,useExisting:p(()=>Xe)},Xe=(()=>{let e=class e extends u{constructor(t,r,s){super(),this.name=null,this._parent=t,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return he(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){Ye(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(u,13),o(M,10),o(E,10))},e.\u0275dir=l({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},features:[g([St]),h]});let i=e;return i})();function Ye(i){return!(i instanceof Ze)&&!(i instanceof ze)&&!(i instanceof Xe)}var Ot={provide:C,useExisting:p(()=>xt)},xt=(()=>{let e=class e extends C{set isDisabled(t){}constructor(t,r,s,a,d){super(),this._ngModelWarningConfig=d,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=qe(this,a)}ngOnChanges(t){this._added||this._setUpControl(),$e(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return he(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(u,13),o(M,10),o(E,10),o(ae,10),o(pe,8))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[g([Ot]),h,G]});let i=e;return i})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({});let i=e;return i})(),oe=class extends b{constructor(e,n,t){super(de(n),ce(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Re(this,!1,e),e.forEach((t,r)=>{Ue(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ee(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Nt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),a={};return Ee(r)?a=r:r!==null&&(a.validators=r.validator,a.asyncValidators=r.asyncValidator),new A(s,a)}record(t,r=null){let s=this._reduceControls(t);return new se(s,r)}control(t,r,s){let a={};return this.useNonNullable?(Ee(r)?a=r:(a.validators=r,a.asyncValidators=s),new U(t,f(c({},a),{nonNullable:!0}))):new U(t,r,s)}array(t,r,s){let a=t.map(d=>this._createControl(d));return new oe(a,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof U)return t;if(t instanceof b)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,a=t.length>2?t[2]:null;return this.control(r,s,a)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ai=(()=>{let e=class e extends Nt{group(t,r=null){return super.group(t,r)}control(t,r,s){return super.control(t,r,s)}array(t,r,s){return super.array(t,r,s)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=T(e)))(s||e)}})(),e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var li=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:x,useValue:t.callSetDisabledState??Y}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({imports:[Ke]});let i=e;return i})(),ui=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:pe,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:x,useValue:t.callSetDisabledState??Y}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=P({imports:[Ke]});let i=e;return i})();export{ae as a,Fe as b,M as c,Ce as d,C as e,ni as f,ri as g,A as h,bt as i,U as j,oi as k,wt as l,ze as m,Ze as n,Xe as o,xt as p,Nt as q,ai as r,li as s,ui as t};
/**i18n:d557e35d8fc734d6151249497f9d9ce2c625cbce110bd82ca76d6bd769fb64f8*/
