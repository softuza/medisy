import{a as it}from"./chunk-FJ3IMPZA.js";import{a as A,b as rt}from"./chunk-PEHEAS3J.js";import{a as ot}from"./chunk-BY2XVBCE.js";import{d as He,f as xe,g as Ue,j as H}from"./chunk-VT3WYR67.js";import{a as Oe,b as Ne,c as Ie,d as Te,e as Re,f as De,j as Fe,k as ye,l as ve,m as Le,n as be,o as ze}from"./chunk-RQNRD2JQ.js";import{a as O}from"./chunk-O4JAUULY.js";import{a as w}from"./chunk-ZJOQORU4.js";import"./chunk-3UYL57HA.js";import{a as Ye,b as $e,d as Ge,e as we,g as $}from"./chunk-V6FPP55L.js";import"./chunk-U7VPIABE.js";import{b as U}from"./chunk-M3UESULM.js";import{b as Xe,c as je,d as Ve,f as qe,i as Ke,k as Qe,m as We,n as Je,o as Ze,p as et,q as tt}from"./chunk-PTJACGQS.js";import{d as Be}from"./chunk-UNCYENX6.js";import{b as k,c as ke}from"./chunk-VRISEVPV.js";import{D as b,E as z,b as F,f as se,g as y,h as me,l as le,m as pe,n as de,o as _e,p as ce,s as v,t as Ce,v as ge,w as L,x as he,z as Pe}from"./chunk-GJY7U5GZ.js";import{a as G}from"./chunk-B3ZGKPUK.js";import"./chunk-3BVZ364G.js";import{a as P}from"./chunk-PIKBUH2I.js";import{a as B}from"./chunk-QDC3ZTFW.js";import{I as ue,L as Se,M as fe,Pa as Me,Sa as Ee,Va as Ae,Wa as Y,i as ne,j as ae,q as E}from"./chunk-NC2N2FCX.js";import{$a as J,Ab as s,Bb as l,Cb as f,Gb as Z,L as C,Mb as _,Pb as u,Rb as ee,Vb as g,Wb as h,Xb as x,Yb as te,Zb as M,ac as T,ea as q,eb as a,ec as R,fb as p,fc as D,jc as oe,kc as ie,ma as S,mb as N,mc as re,na as K,pb as m,ra as Q,sa as W,vb as I}from"./chunk-3CXVAQY6.js";var dt=["input"];function _t(r,i){if(r&1){let d=Z();s(0,"mat-chip-row",10),u("removed",function(){let o=Q(d).$implicit,n=ee();return W(n.remove(o));}),h(1),R(2,"personName"),s(3,"button",11)(4,"mat-icon"),h(5,"cancel"),l()()();}if(r&2){let d=i.$implicit;a(1),te(" ",D(2,1,d)," ");}}function ct(r,i){if(r&1&&(s(0,"mat-option",12)(1,"div",13)(2,"span"),h(3),R(4,"personName"),l(),s(5,"small"),h(6),R(7,"personAge"),l()()()),r&2){let d=i.$implicit;m("value",d),a(3),x(D(4,3,d)),a(3),x(D(7,5,d==null?null:d.birthDate));}}function ut(r,i){r&1&&(s(0,"mat-error"),_(1,14),l());}var nt=(()=>{let i=class i extends De{constructor(t,e,o,n){super(t),this.ngControl=t,this.mpplService=e,this.personNamePipe=o,this.personAgePipe=n,this.items=[],this.selections=[],this.separatorKeysCodes=[13,188],this.indicator=J(!0),this.filter=P.paged(1,10),this.totalPages=-1,this.displayFn=c=>{if(!c)return"";let j=this.personNamePipe.transform(c),V=this.personAgePipe.transform(c?.birthDate);return V?`${j}, ${V}`:`${j}`;};}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(ke(400)).subscribe(t=>{this.handleValueChanged(t);});}handleValueChanged(t){if(this.reset(),typeof t=="string"){let e=t.split(" ");e.length===2?(this.filter.query=e[0],this.filter.lastName=e[1]):this.filter.query=e[0];}this.get();}add(){this.control.setValue(this.selections.map(t=>t.id));}remove(t){let e=this.selections.indexOf(t);e>=0&&this.selections.splice(e,1);}optionSelected(t){this.selections.push(t.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(e=>e.id));}scroll(){this.filter.pageIndex<this.totalPages&&(++this.filter.pageIndex,this.get());}reset(){this.filter=P.paged(1,10),this.totalPages=-1,this.items=[];}get(){this.mpplService.persons.get(this.filter).pipe(C(1),k(this.indicator)).subscribe(t=>{this.items.push(...t.items),this.totalPages=t.totalPages;});}};i.ɵfac=function(e){return new(e||i)(p(se,10),p(w),p(O),p(A));},i.ɵcmp=S({type:i,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(e,o){if(e&1&&ie(dt,5),e&2){let n;oe(n=re())&&(o.input=n.first);}},standalone:!0,features:[M([w,A,O]),N,T],decls:12,vars:9,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let e;return e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[t,["aria-label","Fruit selection"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","szOptionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],e];},template:function(e,o){if(e&1&&(s(0,"mat-form-field")(1,"mat-label"),_(2,0),l(),s(3,"mat-chip-grid",1,2),I(5,_t,6,3,"mat-chip-row",3),l(),s(6,"input",4,5),u("matChipInputTokenEnd",function(){return o.add();}),l(),s(8,"mat-autocomplete",6,7),u("optionSelected",function(c){return o.optionSelected(c);})("optionsScroll",function(){return o.scroll();}),I(10,ct,8,7,"mat-option",8),l(),I(11,ut,2,0,"mat-error",9),l()),e&2){let n=g(4),c=g(9);a(5),m("ngForOf",o.selections),a(1),m("matAutocomplete",c)("formControl",o.control)("matChipInputFor",n)("matChipInputSeparatorKeyCodes",o.separatorKeysCodes),a(2),m("displayWith",o.displayFn)("szOptionsScrollIgnored",o.indicator()),a(2),m("ngForOf",o.items),a(1),m("ngIf",o.control.hasError("required"));}},dependencies:[E,ne,ae,v,F,y,pe,z,b,L,he,Ie,Oe,Me,Ne,Re,Te,Ee,Ze,We,Je,Ke,Qe,Y,Ae,rt,A,O],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=i;return r;})();var at=(()=>{let i=class i extends He{constructor(t,e,o){super(e),this.fb=t,this.dialog=e,this.data=o,this.form=t.group({testGroupIds:[o.testGroupIds],laboratoryIds:[o.laboratoryIds],personIds:[o.personIds],startDate:[o.startDate],endDate:[o.endDate]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};i.ɵfac=function(e){return new(e||i)(p(ce),p(Ye),p($e));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[M([]),N,T],decls:16,vars:9,consts:()=>{let t;t="\u0627\u0644\u062A\u0627\u0631\u064A\u062E";let e;e="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629";let o;return o="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],t,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",e,"formControlName","startDate"],["matEndDate","","placeholder",o,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]];},template:function(e,o){if(e&1&&(f(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),f(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),s(6,"mat-form-field",5)(7,"mat-label"),_(8,6),l(),s(9,"mat-date-range-input",7),f(10,"input",8)(11,"input",9),l(),f(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),l()()(),f(15,"sz-ui-dialog-actions",12)),e&2){let n=g(14);m("header",o.header),a(2),m("formGroup",o.form),a(1),m("multiple",!0),a(1),m("multiple",!0),a(5),m("rangePicker",n)("comparisonStart",o.form.controls.startDate.value)("comparisonEnd",o.form.controls.endDate.value),a(3),m("for",n),a(3),m("actions",o.actions);}},dependencies:[E,v,le,F,y,me,de,_e,$,we,z,b,L,Pe,H,xe,Ue,it,ot,nt,ze,Fe,Le,ye,ve,be],encapsulation:2});let r=i;return r;})();var st=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.route=o,this.dataSource=new je(P.pagedSorted("-createdAt")),this.dataSource.addRows([Ve.default([Xe.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",n=>n.id),U.createdAt(),U.menu([])])]),this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get();}openFilterComponent(){this.dialog.open(at,{data:this.dataSource.filterModel}).afterClosed().pipe(C(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe(k(this.dataSource.indicator),C(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(p(Ge),p(G),p(ue));},i.ɵcmp=S({type:i,selectors:[["medisy-laboratory-analyses"]],features:[M([])],decls:8,vars:4,consts:()=>{let t;t="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644";let e;return e="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(s(0,"sz-ui-header-basic")(1,"h5",0),_(2,1),l()(),s(3,"sz-ui-table-filter",2),u("search",function(){return o.get();})("filter",function(){return o.openFilterComponent();}),s(4,"button",3)(5,"span"),_(6,4),l()()(),s(7,"sz-ui-table",5),u("update",function(){return o.get();}),l()),e&2&&(a(3),m("dataSource",o.dataSource),a(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[Se,et,qe,B,Ce],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=i;return r;})();var mt=[{path:"",component:st},{path:"create",loadComponent:()=>import("./chunk-RDH6F42A.js").then(r=>r.CreateComponent)}];var xo=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=K({type:i}),i.ɵinj=q({providers:[G],imports:[E,fe.forChild(mt),$,tt,H,B,Be,Y,ge]});let r=i;return r;})();export{xo as AnalysesModule};/**i18n:c47ea6c8e33fa0c222c20e616e96e45afbcc3267e1e4f83fbed9283c01f003ba*/