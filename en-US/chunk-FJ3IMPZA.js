import{g as I,t as F}from"./chunk-RQNRD2JQ.js";import{b as g}from"./chunk-VRISEVPV.js";import{f as h,g as y,m as b,s as C}from"./chunk-GJY7U5GZ.js";import{a as r}from"./chunk-B3ZGKPUK.js";import{q as f}from"./chunk-NC2N2FCX.js";import{Cb as m,L as a,Zb as c,ac as u,fb as s,ma as l,mb as p,pb as d}from"./chunk-3CXVAQY6.js";var j=(()=>{let o=class o extends I{constructor(e,i){super(e),this.ngControl=e,this.mlabService=i,this.options=[],this.label="Test Group",this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.optionContent=t=>t.name,this.optionValue=t=>this.szOptionValueFn?this.szOptionValueFn(t):t.id;}ngOnInit(){this.control=this.ngControl.control,this.mlabService.testGroups.getItems({pageIndex:1,pageSize:-1,sortBy:"name",includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe(g(this.indicator),a(1)).subscribe(e=>{this.options=e;});}};o.ɵfac=function(i){return new(i||o)(s(h,10),s(r));},o.ɵcmp=l({type:o,selectors:[["medisy-form-field-test-group-select"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[c([r]),p,u],decls:1,vars:9,consts:[[3,"formControl","indicator","options","label","placeholder","emptyOption","multiple","szOptionContentFn","szOptionValueFn"]],template:function(i,t){i&1&&m(0,"sz-ui-form-field-select",0),i&2&&d("formControl",t.control)("indicator",t.indicator)("options",t.options)("label",t.label)("placeholder",t.placeholder)("emptyOption",t.emptyOption)("multiple",t.multiple)("szOptionContentFn",t.optionContent)("szOptionValueFn",t.optionValue);},dependencies:[f,C,y,b,F],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let n=o;return n;})();export{j as a};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/