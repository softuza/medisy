import{a as De}from"./chunk-CDT36SG2.js";import{b as Re}from"./chunk-IR4ZVDHN.js";import{a as Fe,c as ve,e as Le,g as Ie,j as ye,k as be,l as _}from"./chunk-MDPJZTYR.js";import"./chunk-TCXRPYGI.js";import"./chunk-CUIKVH6O.js";import{a as p}from"./chunk-B6BGJAKF.js";import{c as L,h as Te,i as he,j as Ae,l as Pe,m as I,n as Ne}from"./chunk-UVKODSF3.js";import"./chunk-LB4M65MR.js";import{b as v}from"./chunk-I3RE2UAN.js";import{a as F,g as U}from"./chunk-E2YN42QZ.js";import{a as Ee,b as Ce,d as ge,e as Oe,g as R}from"./chunk-2OM43JW4.js";import{A as Me,a as re,b as ne,g as ae,h as le,o as _e,v as ce,w as ue,x as fe,z as Se}from"./chunk-PSHVV3L5.js";import{L as Z,N as ee,Q as se,R as de,d as z,e as H,f as N,g as k,k as w,l as q,m as J,p as K,q as Q,s as W,t as C,ya as pe}from"./chunk-7YDZJT25.js";import"./chunk-QYJYVPVW.js";import{Ea as ie,Ga as oe,Ja as me,ya as te}from"./chunk-NQOK3G2M.js";import{Ab as u,Cb as j,Db as X,Eb as Y,Fb as l,Gb as m,Hb as c,M as f,Rb as M,Tb as E,Vb as b,a as V,b as G,ec as h,fa as x,fc as D,gb as a,hb as s,hc as A,kc as P,oa as S,ob as T,pa as B,rb as g,vb as d}from"./chunk-XEAZENSO.js";function Be(r,e){if(r&1&&(l(0,"mat-label"),h(1),m()),r&2){let O=b();a(),D(O.label);}}function je(r,e){r&1&&(l(0,"mat-option"),h(1,"-"),m());}function Xe(r,e){if(r&1&&(l(0,"mat-option",4),h(1),m()),r&2){let O=e.$implicit,t=b();d("value",t.getOptionValue(O)),a(),D(t.getOptionContent(O));}}function Ye(r,e){r&1&&(l(0,"mat-error"),M(1,5),m());}function He(r,e){r&1&&(l(0,"mat-error"),M(1,6),m());}function ke(r,e){r&1&&(l(0,"mat-error"),M(1,7),m());}function we(r,e){r&1&&c(0,"mat-progress-bar",3);}var Ue=(()=>{let e=class e extends _e{constructor(t,i){super(t),this.ngControl=t,this.mlabService=i,this.label=F.unit;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.mlabService.units.get(G(V({},pe.unpaged()),{orderBy:"name"})).pipe(f(1),L(this.indicator)).subscribe(t=>{this.options.push(...t.items),this.totalPages=t.totalPages;});}};e.ɵfac=function(i){return new(i||e)(s(H,10),s(p));},e.ɵcmp=S({type:e,selectors:[["medisy-form-field-unit"]],standalone:!0,features:[A([p]),T,P],decls:11,vars:10,consts:()=>{let t;t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let o;return o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled","selectionChange"],["mode","indeterminate"],[3,"value"],t,i,o];},template:function(i,o){i&1&&(l(0,"div",0)(1,"mat-form-field",1),g(2,Be,2,1,"mat-label"),l(3,"mat-select",2),E("szScrolled",function(){return o.scroll();})("selectionChange",function(y){return o.selectionChange(y);}),g(4,je,2,0,"mat-option"),X(5,Xe,2,2,"mat-option",4,j),m(),g(7,Ye,2,0,"mat-error")(8,He,2,0,"mat-error")(9,ke,2,0,"mat-error"),m(),g(10,we,1,0,"mat-progress-bar",3),m()),i&2&&(a(2),u(2,o.label?2:-1),a(),d("formControl",o.control)("multiple",o.multiple)("placeholder",o.placeholder)("szScrollIgnored",o.indicator()),a(),u(4,o.emptyOption?4:-1),a(),Y(o.options),a(2),u(7,o.control.hasError("required")?7:-1),a(),u(8,o.control.hasError("min")?8:-1),a(),u(9,o.control.hasError("max")?9:-1),a(),u(10,o.indicator()?10:-1));},dependencies:[C,N,q,fe,ae,re,ne,ue,te,de,se,Re],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=e;return r;})();var $e=(()=>{let e=class e extends Te{constructor(t,i,o,n){super(o),this.mlabService=t,this.fb=i,this.dialog=o,this.data=n,this.form=i.group({description:[n?.description,[z.maxLength(4096)]],testTypeId:[n?.testTypeId,[z.required]],unitId:[n?.unitId,[]],multiplier:[n?.multiplier,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.referenceValues.update(this.data.id,this.form.value)):this.save(this.mlabService.referenceValues.create(this.form.value)));}};e.ɵfac=function(i){return new(i||e)(s(p),s(Q),s(Ee),s(Ce));},e.ɵcmp=S({type:e,selectors:[["medisy-laboratory-reference-values-save"]],standalone:!0,features:[A([]),T,P],decls:8,vars:3,consts:()=>{let t;t="\u0645\u0636\u0627\u0639\u0641";let i;return i="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId"],["formControlName","unitId"],["formControlName","multiplier","label",t],["formControlName","description","label",i],[3,"actions"]];},template:function(i,o){i&1&&(c(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),c(3,"medisy-form-field-test-type-select",2)(4,"medisy-form-field-unit",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5),m()(),c(7,"sz-ui-dialog-actions",6)),i&2&&(d("header",o.header),a(2),d("formGroup",o.form),a(5),d("actions",o.actions));},dependencies:[C,w,N,k,J,K,R,Oe,le,Ie,I,he,Ae,Me,ce,Se,Ue,De],encapsulation:2});let r=e;return r;})();var Ve=(()=>{let e=class e{constructor(t,i,o){this.dialog=t,this.mlabService=i,this.router=o,this.title=F.referenceValues,this.dataSource=new ve(),this.dataSource.fields.push(_.uuid("id"),_.uuid("testTypeId"),_.uuid("unitId"),_.hyperlink("testType.name",n=>this.router.navigate([`/mlab/reference-values/${n.id}`])),_.string("unit").setContentFormat(n=>n.multiplier?`10^${n.multiplier.toExponential(0).split("e").map(y=>Number(y))[1]}/${n.unit?.abbreviation}`:n.unit?.abbreviation),_.number("multiplier"),_.string("description"),_.date("createdAt",!1),_.date("updatedAt",!1),Fe.menu([U.edit(n=>this.openSaveComponent(n)),U.delete(n=>this.openReferenceValueDeleteComponent(n))])),this.get();}openSaveComponent(t){this.dialog.open($e,{data:t}).afterClosed().pipe(f(1)).subscribe(i=>{this.dataSource.addOrUpdateItem(i);});}openReferenceValueDeleteComponent(t){this.dialog.open(Pe,{data:Ne.delete(this.mlabService.referenceValues.delete(t.id),t)}).afterClosed().pipe(f(1)).subscribe(i=>{this.dataSource.delete(i);});}get(){this.mlabService.referenceValues.get(this.dataSource.buildRequest()).pipe(L(this.dataSource.indicator),f(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};e.ɵfac=function(i){return new(i||e)(s(ge),s(p),s(Z));},e.ɵcmp=S({type:e,selectors:[["medisy-laboratory-reference-values"]],decls:6,vars:4,consts:()=>{let t;return t="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(c(0,"sz-ui-header-info",0),l(1,"sz-ui-table-search-filter",1),E("changed",function(){return o.get();}),l(2,"button",2),E("click",function(){return o.openSaveComponent();}),l(3,"span"),M(4,3),m()()(),l(5,"sz-ui-table",4),E("update",function(){return o.get();}),m()),i&2&&(d("title",o.title),a(),d("dataSource",o.dataSource),a(4),d("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[ie,v,ye,Le],encapsulation:2});let r=e;return r;})();var Ge=[{path:"",component:Ve}];var li=(()=>{let e=class e{};e.ɵfac=function(i){return new(i||e)();},e.ɵmod=B({type:e}),e.ɵinj=x({providers:[p],imports:[W,C,ee.forChild(Ge),R,me,oe,v,be,I]});let r=e;return r;})();export{li as ReferenceValuesModule};/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/