import{g as v,t as S}from"./chunk-RQNRD2JQ.js";import{b as z}from"./chunk-VRISEVPV.js";import{f as h,g as F,m as C,s as y}from"./chunk-GJY7U5GZ.js";import{a as n}from"./chunk-B3ZGKPUK.js";import{a as b}from"./chunk-PIKBUH2I.js";import{q as f}from"./chunk-NC2N2FCX.js";import{Cb as d,L as s,Zb as c,ac as u,fb as l,ma as a,mb as p,pb as m}from"./chunk-3CXVAQY6.js";var q=(()=>{let t=class t extends v{constructor(i,e){super(i),this.ngControl=i,this.mlatService=e,this.options=[],this.label="\u0627\u0644\u0645\u062E\u0628\u0631",this.optionContent=o=>o.name,this.optionValue=o=>this.szOptionValueFn?this.szOptionValueFn(o):o.id,this.mlatService.laboratories.getItems(b.unpagedSorted("name")).pipe(z(this.indicator),s(1)).subscribe(o=>{this.options=o;});}ngOnInit(){this.control=this.ngControl.control;}};t.ɵfac=function(e){return new(e||t)(l(h,10),l(n));},t.ɵcmp=a({type:t,selectors:[["medisy-form-field-laboratory"]],standalone:!0,features:[c([n]),p,u],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(e,o){e&1&&d(0,"sz-ui-form-field-select",0),e&2&&m("formControl",o.control)("indicator",o.indicator)("options",o.options)("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("szOptionContentFn",o.optionContent)("szOptionValueFn",o.optionValue);},dependencies:[f,y,F,C,S],encapsulation:2});let r=t;return r;})();export{q as a};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/