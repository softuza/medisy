import{a as I}from"./chunk-UZV5LP6K.js";import{c as z}from"./chunk-TZHDOS7D.js";import{g as y,r as b}from"./chunk-DPUIQT2Q.js";import{f as F,g as v,m as O,s as g}from"./chunk-UZRVZSRL.js";import{a as s}from"./chunk-ANLAVR6W.js";import{a as S}from"./chunk-HSBTPXYW.js";import{$b as h,Cb as u,L as a,Yb as f,db as r,kb as c,la as m,nb as d,pc as C,v as l}from"./chunk-MK3KDUIH.js";var B=(()=>{let o=class o extends y{set person(i){this._person=i;}constructor(i,n,e){super(i),this.ngControl=i,this.mlabService=n,this.locale=e,this.options=[],this.label="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.optionContent=t=>t.name[I(this.locale)],this.optionValue=t=>this.szOptionValueFn?this.szOptionValueFn(t):t.id,this.mlabService.referenceGroups.get(S.unpagedSorted("name")).pipe(a(1),l(t=>t.items)).pipe(z(this.indicator)).subscribe(t=>{this.options=t;});}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(n){return new(n||o)(r(F,10),r(s),r(C));},o.ɵcmp=m({type:o,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[f([s]),c,h],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(n,e){n&1&&u(0,"sz-ui-form-field-select",0),n&2&&d("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[g,v,O,b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let p=o;return p;})();export{B as a};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/