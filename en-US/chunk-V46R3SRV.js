import{a as R}from"./chunk-RKDKE2AU.js";import{a as v}from"./chunk-UYAJRTBM.js";import{a as ae}from"./chunk-RMREJQO4.js";import{a as ue}from"./chunk-5D7OMFN2.js";import{j as se,l as pe,n as _e,o as ce,p as de}from"./chunk-LIUTUGIN.js";import{a as Me}from"./chunk-SUUMCV2R.js";import{c as le,d as me}from"./chunk-TXP6BBJB.js";import{a as q,b as X,h as Y,i as j,j as Z,k as ee,l as te,m as ie,n as oe,q as ne}from"./chunk-GXEPFKEQ.js";import{b as G,f as H,g as w,m as V,s as U}from"./chunk-2OZGA6L4.js";import{a as re}from"./chunk-KQSWIXX2.js";import{a as he,b as Se}from"./chunk-WKFGKHHI.js";import{f as J,g as Q}from"./chunk-KIPWFCJ2.js";import{Ka as k,Na as B,Ta as K,Ua as W}from"./chunk-KZIHA7KF.js";import{$b as b,Bb as m,Cb as a,Db as T,Hb as O,L as y,Nb as h,Ob as Ce,Pb as fe,Rb as C,Tb as s,Xb as f,Yb as d,Zb as N,_b as A,cb as l,cc as z,db as S,gc as L,hc as $,kb as x,la as D,nb as c,qa as M,ra as E,tb as u,ub as _,wb as g,xb as F,yb as P}from"./chunk-6MBKLWBV.js";function Re(t,n){if(t&1){let r=O();m(0,"mat-chip-row",8),C("removed",function(){let o=M(r).$implicit,p=s(2);return E(p.removeSelection(o));}),d(1),L(2,"personName"),m(3,"button",9)(4,"mat-icon"),d(5,"cancel"),a()()();}if(t&2){let r=n.$implicit;l(1),A(" ",$(2,1,r)," ");}}function ve(t,n){if(t&1){let r=O();m(0,"mat-chip-grid",null,5),F(2,Re,6,3,"mat-chip-row",null,g),a(),m(4,"input",6,7),C("matChipInputTokenEnd",function(){M(r);let i=s();return E(i.addSelection());}),a();}if(t&2){let r=f(1),e=s(),i=f(7);P(2,e.selections),l(4),c("matAutocomplete",i)("formControl",e.control)("matChipInputFor",r)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function ye(t,n){if(t&1&&T(0,"input",10,7),t&2){let r=s(),e=f(7);c("matAutocomplete",e)("formControl",r.control);}}function De(t,n){if(t&1&&(m(0,"small"),d(1),L(2,"personAge"),a()),t&2){let r=s().$implicit;l(1),N($(2,1,r==null?null:r.birthDate));}}function xe(t,n){if(t&1&&(m(0,"mat-option",11)(1,"div",12)(2,"strong"),d(3),L(4,"personName"),a(),u(5,De,3,3,"small"),a()()),t&2){let r=n.$implicit;c("value",r),l(3),N($(4,3,r)),l(2),_(5,r!=null&&r.birthDate?5:-1);}}function be(t,n){t&1&&(m(0,"mat-error"),h(1,13),a());}function ze(t,n){t&1&&(m(0,"mat-error"),h(1,14),a());}function Le(t,n){t&1&&T(0,"mat-progress-bar",4);}var pt=(()=>{let n=class n extends ne{constructor(e,i,o,p){super(e),this.ngControl=e,this.mpplService=i,this.personNamePipe=o,this.personAgePipe=p,this.filter=Se.default(),this.pagination=he.default(),this.label="Name, phone, or email",this.displayFn=I=>this.personNamePipe.transform(I);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(me(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let i=e.split(" ");i.length===3?(this.filter.firstName=i[0],this.filter.middleName=i[1],this.filter.lastName=i[2]):i.length===2?(this.filter.firstName=i[0],this.filter.lastName=i[1]):this.filter.query=i[0];}else if(typeof e=="object"&&e)return;this.get();}reset(){this.filter=Se.default(),this.totalPages=-1,this.options=[];}get(){this.mpplService.persons.get(this.filter,this.pagination).pipe(y(1),le(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(i){return new(i||n)(S(H,10),S(ae),S(v),S(R));},n.ɵcmp=D({type:n,selectors:[["medisy-form-field-person-search"]],standalone:!0,features:[b([ae,R,v]),x,z],decls:13,vars:7,consts:()=>{let e;e=""+"\uFFFD0\uFFFD"+"";let i;i="This field is required";let o;return o="This field is not valid",[[1,"container"],e,[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],[1,"sz-form"],i,o];},template:function(i,o){i&1&&(m(0,"div",0)(1,"mat-form-field")(2,"mat-label"),h(3,1),a(),u(4,ve,6,4)(5,ye,2,2),m(6,"mat-autocomplete",2,3),C("optionSelected",function(I){return o.optionSelected(I);})("szScrolled",function(){return o.scroll();}),F(8,xe,6,5,"mat-option",11,g),a(),u(10,be,2,0,"mat-error")(11,ze,2,0,"mat-error"),a(),u(12,Le,1,0,"mat-progress-bar",4),a()),i&2&&(l(3),Ce(o.label),fe(3),l(1),_(4,o.multiple?4:5),l(2),c("displayWith",o.displayFn)("szScrollIgnored",o.indicator()),P(8,o.options),l(4),_(10,o.control.hasError("required")?10:-1),l(1),_(11,o.control.hasError("invalid")?11:-1),l(1),_(12,o.indicator()?12:-1));},dependencies:[U,G,w,V,j,Y,q,X,te,Z,k,ee,Q,J,oe,ie,B,de,_e,ce,se,pe,W,K,ue,R,v],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=n;return t;})();function $e(t,n){if(t&1){let r=O();m(0,"mat-chip-row",7),C("removed",function(){let o=M(r).$implicit,p=s(2);return E(p.removeSelection(o));}),d(1),m(2,"button",8)(3,"mat-icon"),d(4,"cancel"),a()()();}if(t&2){let r=n.$implicit,e=s(2);l(1),A(" ",e.getSelectionFormat(r)," ");}}function Ge(t,n){if(t&1){let r=O();m(0,"mat-chip-grid",null,4),F(2,$e,5,1,"mat-chip-row",null,g),a(),m(4,"input",5,6),C("matChipInputTokenEnd",function(){M(r);let i=s();return E(i.addSelection());}),a();}if(t&2){let r=f(1),e=s(),i=f(7);P(2,e.selections),l(4),c("matAutocomplete",i)("formControl",e.control)("matChipInputFor",r)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function He(t,n){if(t&1&&T(0,"input",9,6),t&2){let r=s(),e=f(7);c("matAutocomplete",e)("formControl",r.control);}}function we(t,n){if(t&1&&(m(0,"mat-option",10),d(1),a()),t&2){let r=n.$implicit,e=s();c("value",e.getOptionValue(r)),l(1),A(" ",e.getOptionContent(r)," ");}}function Ve(t,n){t&1&&(m(0,"mat-error"),h(1,11),a());}function Ue(t,n){t&1&&(m(0,"mat-error"),h(1,12),a());}function ke(t,n){t&1&&T(0,"mat-progress-bar",3);}var At=(()=>{let n=class n extends ne{constructor(e,i){super(e),this.ngControl=e,this.mlabService=i,this.label=Me.testGroup,this.includeLaboratoryIds=[],this.excludeLaboratoryIds=[],this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.subscribeChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}subscribeChanges(){this.subscriptions.add(this.control.valueChanges.pipe(me(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){this.reset(),e===null?this.get():typeof e=="string"&&this.get(e),this.get();}reset(){this.options=[];}get(e){this.mlabService.testGroups.get({pageIndex:this.pageIndex,pageSize:this.pageIndex,sortBy:"name",query:e,includeLaboratoryIds:this.includeLaboratoryIds,excludeLaboratoryIds:this.excludeLaboratoryIds}).pipe(y(1),le(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};n.ɵfac=function(i){return new(i||n)(S(H,10),S(re));},n.ɵcmp=D({type:n,selectors:[["medisy-form-field-test-group-search"]],inputs:{includeLaboratoryIds:"includeLaboratoryIds",excludeLaboratoryIds:"excludeLaboratoryIds"},standalone:!0,features:[b([re]),x,z],decls:13,vars:7,consts:()=>{let e;e="This field is required";let i;return i="This field is not valid",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],e,i];},template:function(i,o){i&1&&(m(0,"div",0)(1,"mat-form-field")(2,"mat-label"),d(3),a(),u(4,Ge,6,4)(5,He,2,2),m(6,"mat-autocomplete",1,2),C("optionSelected",function(I){return o.optionSelected(I);})("szScrolled",function(){return o.scroll();}),F(8,we,2,2,"mat-option",10,g),a(),u(10,Ve,2,0,"mat-error")(11,Ue,2,0,"mat-error"),a(),u(12,ke,1,0,"mat-progress-bar",3),a()),i&2&&(l(3),N(o.label),l(1),_(4,o.multiple?4:5),l(2),c("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),P(8,o.options),l(4),_(10,o.control.hasError("required")?10:-1),l(1),_(11,o.control.hasError("invalid")?11:-1),l(1),_(12,o.indicator()?12:-1));},dependencies:[U,G,w,V,j,Y,q,X,te,Z,k,ee,Q,J,oe,ie,B,de,_e,ce,se,pe,W,K,ue],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=n;return t;})();export{At as a,pt as b};/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/