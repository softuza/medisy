import{g as O,t as b}from"./chunk-RQNRD2JQ.js";import{b as S}from"./chunk-VRISEVPV.js";import{f as C,g as F,m as g,s as v}from"./chunk-GJY7U5GZ.js";import{a as n}from"./chunk-B3ZGKPUK.js";import{a as y}from"./chunk-PIKBUH2I.js";import{q as h}from"./chunk-NC2N2FCX.js";import{Cb as d,L as l,Zb as u,ac as f,fb as s,ma as a,mb as m,pb as c,v as p}from"./chunk-3CXVAQY6.js";var L=(()=>{let o=class o extends O{set person(t){this._person=t;}constructor(t,i){super(t),this.ngControl=t,this.mlabService=i,this.options=[],this.label="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.optionContent=e=>e.locales[0].name,this.optionValue=e=>this.szOptionValueFn?this.szOptionValueFn(e):e.id,this.mlabService.referenceGroups.get(y.unpagedSorted("name")).pipe(l(1),p(e=>e.items)).pipe(S(this.indicator)).subscribe(e=>{this.options=e;});}ngOnInit(){this.control=this.ngControl.control;}};o.ɵfac=function(i){return new(i||o)(s(C,10),s(n));},o.ɵcmp=a({type:o,selectors:[["medisy-form-field-reference-group"]],inputs:{person:"person"},standalone:!0,features:[u([n]),m,f],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(i,e){i&1&&d(0,"sz-ui-form-field-select",0),i&2&&c("formControl",e.control)("indicator",e.indicator)("options",e.options)("label",e.label)("placeholder",e.placeholder)("emptyOption",e.emptyOption)("multiple",e.multiple)("szOptionContentFn",e.optionContent)("szOptionValueFn",e.optionValue);},dependencies:[h,v,F,g,b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=o;return r;})();export{L as a};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/