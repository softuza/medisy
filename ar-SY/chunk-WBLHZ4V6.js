import{a as R}from"./chunk-QWQRLCSG.js";import{a as x}from"./chunk-P7KBCBVS.js";import{a as me}from"./chunk-3GO4WB2S.js";import{a as fe}from"./chunk-WVR2DRH2.js";import{j as ce,l as _e,n as de,o as ue,p as Se}from"./chunk-XOP5PXZQ.js";import{c as se,d as pe}from"./chunk-BLK656NA.js";import{a as U,b as X,h as K,i as W,j as te,k as ie,l as oe,m as ne,n as re,q as ae}from"./chunk-6KYUYUEY.js";import{b as V,f as B,g as k,m as G,s as Y}from"./chunk-45ZSE7J2.js";import{a as he}from"./chunk-6SZAHQ7N.js";import{a as le}from"./chunk-KMYBK3UO.js";import{f as Z,g as ee,i as y}from"./chunk-W5YC4BSW.js";import{Ka as q,Na as j,Ta as J,Ua as Q}from"./chunk-AZJBQUGA.js";import{Bb as m,Cb as a,Db as P,Hb as O,L as D,Nb as I,Pb as f,Rb as s,Vb as C,Wb as c,Xb as v,Yb as N,Zb as L,a as h,ac as $,b as Ce,cb as l,db as S,ec as w,fc as H,kb as b,la as z,nb as _,qa as M,ra as E,tb as u,ub as p,wb as T,xb as g,yb as F}from"./chunk-7AORQD44.js";function ye(t,n){if(t&1){let r=O();m(0,"mat-chip-row",7),f("removed",function(){let o=M(r).$implicit,d=s(2);return E(d.removeSelection(o));}),c(1),w(2,"personName"),m(3,"button",8)(4,"mat-icon"),c(5,"cancel"),a()()();}if(t&2){let r=n.$implicit;l(1),N(" ",H(2,1,r)," ");}}function Ae(t,n){if(t&1){let r=O();m(0,"mat-chip-grid",null,4),g(2,ye,6,3,"mat-chip-row",null,T),a(),m(4,"input",5,6),f("matChipInputTokenEnd",function(){M(r);let i=s();return E(i.addSelection());}),a();}if(t&2){let r=C(1),e=s(),i=C(7);F(2,e.selections),l(4),_("matAutocomplete",i)("formControl",e.control)("matChipInputFor",r)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function Ne(t,n){if(t&1&&P(0,"input",9,6),t&2){let r=s(),e=C(7);_("matAutocomplete",e)("formControl",r.control);}}function Re(t,n){if(t&1&&(m(0,"small"),c(1),w(2,"personAge"),a()),t&2){let r=s().$implicit;l(1),v(H(2,1,r==null?null:r.birthDate));}}function xe(t,n){if(t&1&&(m(0,"mat-option",10)(1,"div",11)(2,"strong"),c(3),w(4,"personName"),a(),u(5,Re,3,3,"small"),a()()),t&2){let r=n.$implicit;_("value",r),l(3),v(H(4,3,r)),l(2),p(5,r!=null&&r.birthDate?5:-1);}}function De(t,n){t&1&&(m(0,"mat-error"),I(1,12),a());}function ze(t,n){t&1&&(m(0,"mat-error"),I(1,13),a());}function be(t,n){t&1&&P(0,"mat-progress-bar",3);}var st=(()=>{let n=class n extends ae{constructor(e,i,o,d){super(e),this.ngControl=e,this.mpplService=i,this.personNamePipe=o,this.personAgePipe=d,this.filter=y.default(),this.label="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",this.szOptionFormatFn=A=>this.personNamePipe.transform(A);}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(pe(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let i=e.split(" ");i.length===3?(this.filter.firstName=i[0],this.filter.middleName=i[1],this.filter.lastName=i[2]):i.length===2?(this.filter.firstName=i[0],this.filter.lastName=i[1]):this.filter.query=i[0];}else if(typeof e=="object"&&e)return;this.get();}reset(){this.filter=y.default(),this.totalPages=-1,this.pagination.pageIndex=1,this.options=[];}get(){this.mpplService.persons.get(h(h({},this.filter),this.pagination)).pipe(D(1),se(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}};n.ɵfac=function(i){return new(i||n)(S(B,10),S(me),S(x),S(R));},n.ɵcmp=z({type:n,selectors:[["medisy-form-field-person-search"]],standalone:!0,features:[L([me,R,x]),b,$],decls:13,vars:7,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let i;return i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],[1,"sz-form"],e,i];},template:function(i,o){i&1&&(m(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3),a(),u(4,Ae,6,4)(5,Ne,2,2),m(6,"mat-autocomplete",1,2),f("optionSelected",function(A){return o.optionSelected(A);})("szScrolled",function(){return o.scroll();}),g(8,xe,6,5,"mat-option",10,T),a(),u(10,De,2,0,"mat-error")(11,ze,2,0,"mat-error"),a(),u(12,be,1,0,"mat-progress-bar",3),a()),i&2&&(l(3),v(o.label),l(1),p(4,o.multiple?4:5),l(2),_("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),F(8,o.options),l(4),p(10,o.control.hasError("required")?10:-1),l(1),p(11,o.control.hasError("invalid")?11:-1),l(1),p(12,o.indicator()?12:-1));},dependencies:[Y,V,k,G,W,K,U,X,oe,te,q,ie,ee,Z,re,ne,j,Se,de,ue,ce,_e,Q,J,fe,R,x],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=n;return t;})();function Le(t,n){if(t&1){let r=O();m(0,"mat-chip-row",7),f("removed",function(){let o=M(r).$implicit,d=s(2);return E(d.removeSelection(o));}),c(1),m(2,"button",8)(3,"mat-icon"),c(4,"cancel"),a()()();}if(t&2){let r=n.$implicit,e=s(2);l(1),N(" ",e.getSelectionFormat(r)," ");}}function $e(t,n){if(t&1){let r=O();m(0,"mat-chip-grid",null,4),g(2,Le,5,1,"mat-chip-row",null,T),a(),m(4,"input",5,6),f("matChipInputTokenEnd",function(){M(r);let i=s();return E(i.addSelection());}),a();}if(t&2){let r=C(1),e=s(),i=C(7);F(2,e.selections),l(4),_("matAutocomplete",i)("formControl",e.control)("matChipInputFor",r)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes);}}function we(t,n){if(t&1&&P(0,"input",9,6),t&2){let r=s(),e=C(7);_("matAutocomplete",e)("formControl",r.control);}}function He(t,n){if(t&1&&(m(0,"mat-option",10),c(1),a()),t&2){let r=n.$implicit,e=s();_("value",e.getOptionValue(r)),l(1),N(" ",e.getOptionContent(r)," ");}}function Ve(t,n){t&1&&(m(0,"mat-error"),I(1,11),a());}function Be(t,n){t&1&&(m(0,"mat-error"),I(1,12),a());}function ke(t,n){t&1&&P(0,"mat-progress-bar",3);}var At=(()=>{let n=class n extends ae{constructor(e,i){super(e),this.ngControl=e,this.mlabService=i,this.label=he.testType,this.filter=y.default(),this.sortBy="name",this.szOptionFormatFn=o=>o?o.name:"";}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}ngOnDestroy(){this.subscriptions.unsubscribe();}listenChanges(){this.subscriptions.add(this.control.valueChanges.pipe(pe(400)).subscribe(e=>{this.handleValueChanged(e);}));}handleValueChanged(e){if(this.reset(),typeof e=="string")this.filter.query=e;else if(typeof e=="object"&&e)return;this.get();}reset(){this.filter=y.default(),this.totalPages=-1,this.options=[];}get(){this.mlabService.testTypes.get(Ce(h(h({},this.filter),this.pagination),{sortBy:this.sortBy})).pipe(D(1),se(this.indicator)).subscribe(e=>{this.options.push(...e.items),this.totalPages=e.totalPages;});}getOptionValue(e){return e;}};n.ɵfac=function(i){return new(i||n)(S(B,10),S(le));},n.ɵcmp=z({type:n,selectors:[["medisy-form-field-test-type-search"]],inputs:{filter:"filter"},standalone:!0,features:[L([le]),b,$],decls:13,vars:7,consts:()=>{let e;e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let i;return i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",[[1,"container"],[3,"displayWith","szScrollIgnored","optionSelected","szScrolled"],["auto","matAutocomplete"],["mode","indeterminate"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"removed"],["matChipRemove",""],["matInput","",3,"matAutocomplete","formControl"],[3,"value"],e,i];},template:function(i,o){i&1&&(m(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3),a(),u(4,$e,6,4)(5,we,2,2),m(6,"mat-autocomplete",1,2),f("optionSelected",function(A){return o.optionSelected(A);})("szScrolled",function(){return o.scroll();}),g(8,He,2,2,"mat-option",10,T),a(),u(10,Ve,2,0,"mat-error")(11,Be,2,0,"mat-error"),a(),u(12,ke,1,0,"mat-progress-bar",3),a()),i&2&&(l(3),v(o.label),l(1),p(4,o.multiple?4:5),l(2),_("displayWith",o.szOptionFormatFn)("szScrollIgnored",o.indicator()),F(8,o.options),l(4),p(10,o.control.hasError("required")?10:-1),l(1),p(11,o.control.hasError("invalid")?11:-1),l(1),p(12,o.indicator()?12:-1));},dependencies:[Y,V,k,G,W,K,U,X,oe,te,q,ie,ee,Z,re,ne,j,Se,de,ue,ce,_e,Q,J,fe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=n;return t;})();export{At as a,st as b};/**i18n:ca0c0aaef853f716736db0c306cb0b403cbd4c4309f5c41e82b4683f77b810d2*/