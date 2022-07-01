"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[544],{

/***/ 7544:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/badge.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatBadge": () => (/* binding */ MatBadge),
/* harmony export */   "MatBadgeModule": () => (/* binding */ MatBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5000);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 5664);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 3191);







let nextId = 0; // Boilerplate for applying mixins to MatBadge.

/** @docs-private */

const _MatBadgeBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(class {});

const BADGE_CONTENT_CLASS = 'mat-badge-content';
/** Directive to display a text badge. */

class MatBadge extends _MatBadgeBase {
  constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._renderer = _renderer;
    this._animationMode = _animationMode;
    this._color = 'primary';
    this._overlap = true;
    /**
     * Position the badge should reside.
     * Accepts any combination of 'above'|'below' and 'before'|'after'
     */

    this.position = 'above after';
    /** Size of the badge. Can be 'small', 'medium', or 'large'. */

    this.size = 'medium';
    /** Unique id for the badge */

    this._id = nextId++;
    /** Whether the OnInit lifecycle hook has run yet */

    this._isInitialized = false;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const nativeElement = _elementRef.nativeElement;

      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error('matBadge must be attached to an element node.');
      }
    }
  }
  /** The color of the badge. Can be `primary`, `accent`, or `warn`. */


  get color() {
    return this._color;
  }

  set color(value) {
    this._setColor(value);

    this._color = value;
  }
  /** Whether the badge should overlap its contents or not */


  get overlap() {
    return this._overlap;
  }

  set overlap(val) {
    this._overlap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(val);
  }
  /** The content for the badge */


  get content() {
    return this._content;
  }

  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  /** Message used to describe the decorated element via aria-describedby */


  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._updateHostAriaDescription(newDescription);
  }
  /** Whether the badge is hidden. */


  get hidden() {
    return this._hidden;
  }

  set hidden(val) {
    this._hidden = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(val);
  }
  /** Whether the badge is above the host or not */


  isAbove() {
    return this.position.indexOf('below') === -1;
  }
  /** Whether the badge is after the host or not */


  isAfter() {
    return this.position.indexOf('before') === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */


  getBadgeElement() {
    return this._badgeElement;
  }

  ngOnInit() {
    // We may have server-side rendered badge that we need to clear.
    // We need to do this in ngOnInit because the full content of the component
    // on which the badge is attached won't necessarily be in the DOM until this point.
    this._clearExistingBadges();

    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();

      this._updateRenderedContent(this.content);
    }

    this._isInitialized = true;
  }

  ngOnDestroy() {
    // ViewEngine only: when creating a badge through the Renderer, Angular remembers its index.
    // We have to destroy it ourselves, otherwise it'll be retained in memory.
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
    }

    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Creates the badge element */


  _createBadgeElement() {
    const badgeElement = this._renderer.createElement('span');

    const activeClass = 'mat-badge-active';
    badgeElement.setAttribute('id', `mat-badge-content-${this._id}`); // The badge is aria-hidden because we don't want it to appear in the page's navigation
    // flow. Instead, we use the badge to describe the decorated element with aria-describedby.

    badgeElement.setAttribute('aria-hidden', 'true');
    badgeElement.classList.add(BADGE_CONTENT_CLASS);

    if (this._animationMode === 'NoopAnimations') {
      badgeElement.classList.add('_mat-animation-noopable');
    }

    this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


    if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }

    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */


  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent !== null && newContent !== void 0 ? newContent : ''}`.trim(); // Don't create the badge element if the directive isn't initialized because we want to
    // append the badge element to the *end* of the host element's content for backwards
    // compatibility.

    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }

    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }

    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */


  _updateHostAriaDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);

    if (newDescription) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    }

    this._description = newDescription;
  }
  /** Adds css theme class given the color to the component host */


  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);

    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */


  _clearExistingBadges() {
    // Only check direct children of this host element in order to avoid deleting
    // any badges that might exist in descendant elements.
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);

    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }

}

MatBadge.ɵfac = function MatBadge_Factory(t) {
  return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, 8));
};

MatBadge.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatBadge,
  selectors: [["", "matBadge", ""]],
  hostAttrs: [1, "mat-badge"],
  hostVars: 20,
  hostBindings: function MatBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: ["matBadgeDisabled", "disabled"],
    color: ["matBadgeColor", "color"],
    overlap: ["matBadgeOverlap", "overlap"],
    position: ["matBadgePosition", "position"],
    content: ["matBadge", "content"],
    description: ["matBadgeDescription", "description"],
    size: ["matBadgeSize", "size"],
    hidden: ["matBadgeHidden", "hidden"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadge, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matBadge]',
      inputs: ['disabled: matBadgeDisabled'],
      host: {
        'class': 'mat-badge',
        '[class.mat-badge-overlap]': 'overlap',
        '[class.mat-badge-above]': 'isAbove()',
        '[class.mat-badge-below]': '!isAbove()',
        '[class.mat-badge-before]': '!isAfter()',
        '[class.mat-badge-after]': 'isAfter()',
        '[class.mat-badge-small]': 'size === "small"',
        '[class.mat-badge-medium]': 'size === "medium"',
        '[class.mat-badge-large]': 'size === "large"',
        '[class.mat-badge-hidden]': 'hidden || !content',
        '[class.mat-badge-disabled]': 'disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.AriaDescriber
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeColor']
    }],
    overlap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeOverlap']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgePosition']
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadge']
    }],
    description: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeDescription']
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeSize']
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeHidden']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatBadgeModule {}

MatBadgeModule.ɵfac = function MatBadgeModule_Factory(t) {
  return new (t || MatBadgeModule)();
};

MatBadgeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MatBadgeModule
});
MatBadgeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadgeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatBadge]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=badge.mjs.map

/***/ })

}]);