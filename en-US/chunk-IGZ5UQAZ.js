import{A as y,B as o,C as d,E as c,a as ne,k as we,o as Fe,y as f,z as l}from"./chunk-5YRGD4YU.js";import{$b as Ee,Ab as Ve,B as me,Bb as De,Nb as be,Ob as T,Vb as Ae,Wa as ee,Wb as Me,Ya as te,Yb as M,_a as ve,a as g,aa as A,b as C,ba as G,ca as J,cb as _e,da as S,db as u,ha as V,hb as D,kb as m,la as ye,ma as O,na as p,nb as Ce,o as pe,pa as j,pb as ie,ua as Q,v as ge}from"./chunk-MK3KDUIH.js";var Ge=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(u(te),u(ee))},e.\u0275dir=p({type:e});let i=e;return i})(),lt=(()=>{let e=class e extends Ge{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=Q(e)))(s||e)}})(),e.\u0275dir=p({type:e,features:[m]});let i=e;return i})(),ae=new V("NgValueAccessor");var ut={provide:ae,useExisting:A(()=>je),multi:!0};function dt(){let i=ne()?ne().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ct=new V("CompositionEventMode"),je=(()=>{let e=class e extends Ge{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(u(te),u(ee),u(ct,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&T("input",function(h){return s._handleInput(h.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(h){return s._compositionEnd(h.target.value)})},features:[M([ut]),m]});let i=e;return i})();function v(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Te(i){return i!=null&&typeof i.length=="number"}var Y=new V("NgValidators"),Z=new V("NgAsyncValidators"),ht=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ie=class{static min(e){return ft(e)}static max(e){return pt(e)}static required(e){return gt(e)}static requiredTrue(e){return mt(e)}static email(e){return yt(e)}static minLength(e){return vt(e)}static maxLength(e){return _t(e)}static pattern(e){return Ct(e)}static nullValidator(e){return Ue(e)}static compose(e){return We(e)}static composeAsync(e){return ze(e)}};function ft(i){return e=>{if(v(e.value)||v(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function pt(i){return e=>{if(v(e.value)||v(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function gt(i){return v(i.value)?{required:!0}:null}function mt(i){return i.value===!0?null:{required:!0}}function yt(i){return v(i.value)||ht.test(i.value)?null:{email:!0}}function vt(i){return e=>v(e.value)||!Te(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function _t(i){return e=>Te(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ct(i){if(!i)return Ue;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(v(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ue(i){return null}function Be(i){return i!=null}function Re(i){return be(i)?pe(i):i}function He(i){let e={};return i.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function Le(i,e){return e.map(n=>n(i))}function Vt(i){return!i.validate}function $e(i){return i.map(e=>Vt(e)?e:n=>e.validate(n))}function We(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(n){return He(Le(n,e))}}function le(i){return i!=null?We($e(i)):null}function ze(i){if(!i)return null;let e=i.filter(Be);return e.length==0?null:function(n){let t=Le(n,e).map(Re);return me(t).pipe(ge(He))}}function ue(i){return i!=null?ze($e(i)):null}function Se(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function qe(i){return i._rawValidators}function Ye(i){return i._rawAsyncValidators}function re(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function Oe(i,e){let n=re(e);return re(i).forEach(r=>{R(n,r)||n.push(r)}),n}function xe(i,e){return re(e).filter(n=>!R(i,n))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},_=class extends H{get formDirective(){return null}get path(){return null}},b=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ci=C(g({},Dt),{"[class.ng-submitted]":"isSubmitted"}),hi=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(u(b,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ie("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[m]});let i=e;return i})(),fi=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(u(_,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&ie("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[m]});let i=e;return i})();var x="VALID",U="INVALID",E="PENDING",N="DISABLED";function de(i){return(X(i)?i.validators:i)||null}function bt(i){return Array.isArray(i)?le(i):i||null}function ce(i,e){return(X(e)?e.asyncValidators:i)||null}function At(i){return Array.isArray(i)?ue(i):i||null}function X(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ze(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new G(1e3,"");if(!t[n])throw new G(1001,"")}function Xe(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new G(1002,"")})}var w=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===U}get pending(){return this.status==E}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Oe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(t=>{t.disable(C(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(t=>{t.enable(C(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===E)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=Re(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(U)?U:x}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=At(this._rawAsyncValidators)}},F=class extends w{constructor(e,n,t){super(de(n),ce(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Xe(this,!0,e),Object.keys(e).forEach(t=>{Ze(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var se=class extends F{};var k=new V("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function Mt(i,e){return[...e.path,i]}function $(i,e,n=K){he(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),wt(i,e),It(i,e),Ft(i,e),Et(i,e)}function W(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),q(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function z(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Et(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function he(i,e){let n=qe(i);e.validator!==null?i.setValidators(Se(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Ye(i);e.asyncValidator!==null?i.setAsyncValidators(Se(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function q(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=qe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ye(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return z(e._rawValidators,t),z(e._rawAsyncValidators,t),n}function wt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ke(i,e)})}function Ft(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ke(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ke(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function It(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Je(i,e){i==null,he(i,e)}function St(i,e){return q(i,e)}function Qe(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ot(i){return Object.getPrototypeOf(i.constructor)===lt}function et(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function tt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===je?n=s:Ot(s)?t=s:r=s}),r||t||n||null}function xt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}var Nt={provide:_,useExisting:A(()=>Pt)},P=(()=>Promise.resolve())(),Pt=(()=>{let e=class e extends _{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new D,this.form=new F({},le(t),ue(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){P.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),$(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){P.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){P.then(()=>{let r=this._findContainer(t.path),s=new F({});Je(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){P.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){P.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,et(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(u(Y,10),u(Z,10),u(k,8))},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&T("submit",function(h){return s.onSubmit(h)})("reset",function(){return s.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[M([Nt]),m]});let i=e;return i})();function Ne(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Pe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var B=class extends w{constructor(e=null,n,t){super(de(n),ce(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var kt=i=>i instanceof B;var gi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({});let i=e;return i})();var fe=new V("NgModelWithFormControlWarning"),jt={provide:b,useExisting:A(()=>Tt)},Tt=(()=>{let e=class e extends b{set isDisabled(t){}constructor(t,r,s,a,h){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=h,this.update=new D,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=tt(this,s)}ngOnChanges(t){if(this._isControlChanged(t)){let r=t.form.previousValue;r&&W(r,this,!1),$(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Qe(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&W(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(Y,10),u(Z,10),u(ae,10),u(fe,8),u(k,8))},e.\u0275dir=p({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[M([jt]),m,j]});let i=e;return i})(),Ut={provide:_,useExisting:A(()=>Bt)},Bt=(()=>{let e=class e extends _{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new D,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return $(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){W(t.control||null,t,!1),xt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,et(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(W(r||null,t),kt(s)&&($(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Je(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&St(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){he(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(u(Y,10),u(Z,10),u(k,8))},e.\u0275dir=p({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&T("submit",function(h){return s.onSubmit(h)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[M([Ut]),m,j]});let i=e;return i})();var Rt={provide:b,useExisting:A(()=>Ht)},Ht=(()=>{let e=class e extends b{set isDisabled(t){}constructor(t,r,s,a,h){super(),this._ngModelWarningConfig=h,this._added=!1,this.name=null,this.update=new D,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=tt(this,a)}ngOnChanges(t){this._added||this._setUpControl(),Qe(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Mt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(_,13),u(Y,10),u(Z,10),u(ae,10),u(fe,8))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[M([Rt]),m,j]});let i=e;return i})();var it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[Gt]});let i=e;return i})(),oe=class extends w{constructor(e,n,t){super(de(n),ce(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Xe(this,!1,e),e.forEach((t,r)=>{Ze(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function ke(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Lt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),a={};return ke(r)?a=r:r!==null&&(a.validators=r.validator,a.asyncValidators=r.asyncValidator),new F(s,a)}record(t,r=null){let s=this._reduceControls(t);return new se(s,r)}control(t,r,s){let a={};return this.useNonNullable?(ke(r)?a=r:(a.validators=r,a.asyncValidators=s),new B(t,C(g({},a),{nonNullable:!0}))):new B(t,r,s)}array(t,r,s){let a=t.map(h=>this._createControl(h));return new oe(a,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof B)return t;if(t instanceof w)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,a=t.length>2?t[2]:null;return this.control(r,s,a)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var mi=(()=>{let e=class e extends Lt{group(t,r=null){return super.group(t,r)}control(t,r,s){return super.control(t,r,s)}array(t,r,s){return super.array(t,r,s)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=Q(e)))(s||e)}})(),e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var yi=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:k,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[it]});let i=e;return i})(),vi=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:fe,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:k,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[it]});let i=e;return i})();var nt=()=>f("slideDown",[d("in",o({opacity:"1",transform:"translateY(0%)"})),d("out",o({opacity:"0",transform:"translateY(-100%)"})),c("in => out",[y([l("200ms ease-in-out",o({opacity:"0"})),l("200ms ease-in-out",o({transform:"translateY(-100%)"}))])]),c("out => in",[y([l("200ms ease-in-out",o({transform:"translateY(0%)"})),l("200ms ease-in-out",o({opacity:"1"}))])])]);var rt=()=>f("slideUp",[d("in",o({opacity:"1",transform:"translateY(0%)"})),d("out",o({opacity:"0",transform:"translateY(100%)"})),c("in => out",[y([l("200ms ease-in-out",o({opacity:"0"})),l("200ms ease-in-out",o({transform:"translateY(100%)"}))])]),c("out => in",[y([l("200ms ease-in-out",o({transform:"translateY(0%)"})),l("200ms ease-in-out",o({opacity:"1"}))])])]);var st=(i=64,e=80)=>f("slide",[d("false",o({height:"0px",opacity:"0"})),d("true",o({height:`${i}px`,opacity:"1"})),c("false => true",l(`${e}ms ease-in`)),c("true => false",l(`${e}ms ease-out`))]);var ot={slide:st,slideDown:nt,slideUp:rt};var xi=f("detailExpand",[d("collapsed",o({height:"0px",visibility:"hidden"})),d("expanded",o({height:"*",visibility:"visible"})),c("expanded <=> collapsed",l("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))]);var ki=f("fadeOutAnimation",[d("initial",o({opacity:"1"})),d("final",o({opacity:"0"})),c("initial => final",l("200ms ease-in")),c("final => initial",l("200ms ease-out"))]);var Ti=f("flip3DAnimation",[d("in",o({opacity:"1",transform:"rotateY(0deg)",visibility:"visible"})),d("out",o({opacity:"0",transform:"rotateY(180deg)",visibility:"hidden"})),c("in => out",[y([l(".9s ease-in-out",o({opacity:"0"})),l(".9s ease-in-out",o({visibility:"hidden"})),l(".9s ease-in-out",o({transform:"rotateY(180deg)"}))])]),c("out => in",[y([l(".9s ease-in-out",o({transform:"rotateY(0)"})),l(".9s ease-in-out",o({visibility:"visible"})),l(".9s ease-in-out",o({opacity:"1"}))])])]);var I=function(i){return i[i.Success=0]="Success",i[i.Error=1]="Error",i[i.Info=2]="Info",i[i.Warning=3]="Warning",i}(I||{});var en=(()=>{let e=class e{constructor(){this.visible=ve(!1)}set alert(t){this._alert=t,this.visible.set(this._alert!==void 0),t&&t.timeout&&(this.timer=setTimeout(()=>{this._alert=void 0,this.timer=void 0,this.visible.set(this._alert!==void 0)},t.timeout))}ngOnDestroy(){this.timer&&clearTimeout(this.timer)}getClass(){switch(this._alert?.type){case I.Error:return"alert-error";case I.Success:return"alert-success";case I.Info:return"alert-info";case I.Warning:return"alert-warning";default:return"alert-error"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ye({type:e,selectors:[["sz-ui-alert"]],inputs:{alert:"alert"},standalone:!0,features:[Ee],decls:3,vars:3,consts:[[1,"container","tw-mx-4",3,"ngClass"],[1,"tw-m-8"]],template:function(r,s){r&1&&(Ve(0,"div",0)(1,"div",1),Ae(2),De()()),r&2&&(Ce("ngClass",s.getClass())("@slide",s.visible()),_e(2),Me(s._alert==null?null:s._alert.message))},dependencies:[Fe,we],styles:[".container[_ngcontent-%COMP%], .alert-warning[_ngcontent-%COMP%], .alert-info[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%], .alert-error[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;color:#fff;text-align:center;border-radius:4px}.alert-error[_ngcontent-%COMP%]{background-color:#d32f2f}.alert-success[_ngcontent-%COMP%]{background-color:#43a047}.alert-info[_ngcontent-%COMP%]{background-color:#005cb2}.alert-warning[_ngcontent-%COMP%]{background-color:#c63f17}"],data:{animation:[ot.slide()]}});let i=e;return i})();export{ae as a,je as b,Y as c,Ie as d,_ as e,b as f,hi as g,fi as h,F as i,Pt as j,B as k,gi as l,Tt as m,Bt as n,Ht as o,Lt as p,mi as q,yi as r,vi as s,ot as t,I as u,en as v};
/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/
