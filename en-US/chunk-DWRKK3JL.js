import{a as me}from"./chunk-YE52B2IF.js";import{a as Se}from"./chunk-6YOHHL4Q.js";import{a as se,b as ce,c as pe,e as _e,f as de,g as ue}from"./chunk-5PWIWZS6.js";import{a as le}from"./chunk-BAY27WLL.js";import{a as B,b as G,c as U,g as X,h as j,i as Y,j as Z,k as ee,l as te,m as ie,o as ae}from"./chunk-57HXEV2J.js";import{Aa as ne,Ca as re,Q as J,R as Q,b,e as w,f as $,l as V,t as q,ya as oe,za as I}from"./chunk-HC44CUFJ.js";import{Ba as k,Ia as K,Ja as W,ya as H}from"./chunk-NQOK3G2M.js";import{Ab as p,Cb as F,Db as g,Eb as P,Fb as m,Gb as l,Hb as A,Lb as h,M as E,Rb as M,Tb as d,Vb as s,a as N,b as v,dc as T,ec as u,fc as x,gb as a,gc as y,hb as O,hc as z,kc as D,oa as R,ob as L,rb as f,ta as S,ua as C,vb as _}from"./chunk-XEAZENSO.js";function fe(t,o){if(t&1){let r=h();m(0,"mat-chip-row",8),d("removed",function(){let i=S(r).$implicit,c=s(2);return C(c.removeSelection(i));}),u(1),m(2,"button",9)(3,"mat-icon"),u(4,"cancel"),l()()();}if(t&2){let r=o.$implicit,e=s(2);a(),y(" ",e.getSelectionFormat(r)," ");}}function he(t,o){if(t&1){let r=h();m(0,"mat-chip-grid",null,5),g(2,fe,5,1,"mat-chip-row",null,F),l(),m(4,"input",6,7),d("matChipInputTokenEnd",function(){S(r);let n=s();return C(n.addSelection());}),l();}if(t&2){let r=T(1),e=s(),n=T(7);a(2),P(e.selections),a(2),_("matAutocomplete",n)("formControl",e.control)("matChipInputFor",r)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Me(t,o){if(t&1&&A(0,"input",10,7),t&2){let r=s(),e=T(7);_("matAutocomplete",e)("formControl",r.control);}}function Te(t,o){if(t&1&&(m(0,"mat-option",11),u(1),l()),t&2){let r=o.$implicit,e=s();_("value",e.getOptionValue(r)),a(),y(" ",e.getOptionContent(r)," ");}}function Ee(t,o){t&1&&(m(0,"mat-error"),M(1,12),l());}function Oe(t,o){t&1&&(m(0,"mat-error"),M(1,13),l());}function Fe(t,o){if(t&1){let r=h();m(0,"mat-chip",14),d("click",function(){S(r);let n=s();return C(n.save());}),M(1,15),l();}}function ge(t,o){t&1&&A(0,"mat-progress-bar",4);}var Ze=(()=>{let o=class o extends ae{constructor(e,n){super(e),this.ngControl=e,this.mpplService=n,this.label=re.title,this.query=null,this.orderBy=["name"],this.isNew=!1,this.szOptionFormatFn=i=>i?i.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(ne(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string"){if(e===""){this.control.setValue(null);return;}this.query=e;}else if(typeof e=="object"&&e)return;this.get();}reset(){this.isNew=!1,this.query=null,this.totalPages=-1,this.options=[];}get(){this.mpplService.titles.get(v(N({query:this.query},oe.unpaged()),{orderBy:this.orderBy})).pipe(E(1),I(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages,e.count==0&&this.query&&(this.isNew=!0);});}save(){this.mpplService.titles.create({name:this.query}).pipe(I(this.indicator),E(1)).subscribe(e=>{this.isNew=!1,this.control.setValue(e);});}getOptionValue(e){return e;}};o.ɵfac=function(n){return new(n||o)(O(w,10),O(me));},o.ɵcmp=R({type:o,selectors:[["medisy-form-field-title-search"]],inputs:{query:"query",orderBy:"orderBy"},standalone:!0,features:[z([le]),L,D],decls:14,vars:8,consts:()=>{let e;e="This field is required";let n;n="This field is not valid";let i;return i="Save",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["class","tw-m-1","matSuffix","","color","accent"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],e,n,["matSuffix","","color","accent",1,"tw-m-1",3,"click"],i];},template:function(n,i){n&1&&(m(0,"div",0)(1,"mat-form-field")(2,"mat-label"),u(3),l(),f(4,he,6,4)(5,Me,2,2),m(6,"mat-autocomplete",1,2),d("optionSelected",function(Ce){return i.optionSelected(Ce);})("szScrolled",function(){return i.scroll();}),g(8,Te,2,2,"mat-option",11,F),l(),f(10,Ee,2,0,"mat-error")(11,Oe,2,0,"mat-error")(12,Fe,2,0,"mat-chip",3),l(),f(13,ge,1,0,"mat-progress-bar",4),l()),n&2&&(a(3),x(i.label),a(),p(4,i.multiple?4:5),a(2),_("displayWith",i.szOptionFormatFn)("szScrollIgnored",i.indicator()),a(2),P(i.options),a(2),p(10,i.control.hasError("required")?10:-1),a(),p(11,i.control.hasError("invalid")?11:-1),a(),p(12,i.isNew&&!i.indicator()?12:-1),a(),p(13,i.indicator()?13:-1));},dependencies:[q,b,$,V,j,X,B,G,U,ee,Y,H,Z,Q,J,ie,te,k,ue,ce,_e,de,se,pe,W,K,Se],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=o;return t;})();export{Ze as a};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/