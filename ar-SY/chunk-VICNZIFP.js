import{a as rt}from"./chunk-N4FQS2GC.js";import{a as nt}from"./chunk-WSTYIHBY.js";import{a as P}from"./chunk-DJWTHWUI.js";import{a as A}from"./chunk-7ZD52CWE.js";import{a as $}from"./chunk-7CIDS4TF.js";import{a as ot}from"./chunk-HTC5X6M7.js";import{a as Ne,b as Te,c as Ie,d as Re,e as De,f as ye,j as Fe,k as Le,l as ve,m as be,n as ze,o as Ye}from"./chunk-T2EWQS4V.js";import{b as X}from"./chunk-CCOUZGWD.js";import{a as je,b as Ve,c as qe,e as Ke,h as Qe,j as We,l as Je,m as Ze,n as et,o as tt,p as it}from"./chunk-VWYIWTAJ.js";import{c as w,d as He,g as xe,i as Ue,j as Xe,m as B}from"./chunk-4L7MXCYU.js";import{a as $e,b as Ge,d as we,e as Be,g as z}from"./chunk-MLSRSUWT.js";import{a as F,b as Pe,d as Ae,h as L,i as v}from"./chunk-VNFB3LL3.js";import{b as R,f as le,g as D,h as me,l as pe,m as de,n as _e,o as ce,p as Se,s as y}from"./chunk-IGZ5UQAZ.js";import{a as Y}from"./chunk-ANLAVR6W.js";import{a as G}from"./chunk-O5KLIVQ3.js";import"./chunk-N2JBPDEJ.js";import{a as g}from"./chunk-HSBTPXYW.js";import{a as ue,d as fe,e as Me}from"./chunk-7EL7DJOA.js";import"./chunk-PHZ6OWUT.js";import{a as he,c as ge}from"./chunk-45S7AHWB.js";import{d as ke}from"./chunk-FVPLSC3A.js";import"./chunk-5YXUG2NC.js";import"./chunk-25UH3N2F.js";import{Ka as Ee,Na as Ce,Qa as Oe,Ra as b}from"./chunk-5YRGD4YU.js";import{$b as N,Ab as a,Bb as s,Cb as f,Gb as ie,L as E,Mb as _,Ob as S,Qb as oe,Ub as C,Vb as h,Wb as U,Xb as re,Yb as M,_a as Z,cb as l,da as K,db as p,dc as T,ec as I,ic as ne,jc as ae,kb as O,la as u,lc as se,ma as Q,nb as m,qa as W,ra as J,tb as ee,ub as te,vb as k,wb as H,xb as x}from"./chunk-MK3KDUIH.js";var _t=["input"];function ct(r,o){if(r&1){let d=ie();a(0,"mat-chip-row",7),S("removed",function(){let i=W(d).$implicit,n=oe();return J(n.remove(i));}),h(1),T(2,"personName"),a(3,"button",8)(4,"mat-icon"),h(5,"cancel"),s()()();}if(r&2){let d=o.$implicit;l(1),re(" ",I(2,1,d)," ");}}function St(r,o){if(r&1&&(a(0,"mat-option",9)(1,"div",10)(2,"span"),h(3),T(4,"personName"),s(),a(5,"small"),h(6),T(7,"personAge"),s()()()),r&2){let d=o.$implicit;m("value",d),l(3),U(I(4,3,d)),l(3),U(I(7,5,d==null?null:d.birthDate));}}function ut(r,o){r&1&&(a(0,"mat-error"),_(1,11),s());}var at=(()=>{let o=class o extends ye{constructor(t,e,i,n){super(t),this.ngControl=t,this.mpplService=e,this.personNamePipe=i,this.personAgePipe=n,this.items=[],this.selections=[],this.separatorKeysCodes=[13,188],this.indicator=Z(!0),this.filter=g.paged(1,10),this.totalPages=-1,this.displayFn=c=>{if(!c)return"";let V=this.personNamePipe.transform(c),q=this.personAgePipe.transform(c?.birthDate);return q?`${V}, ${q}`:`${V}`;};}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(He(400)).subscribe(t=>{this.handleValueChanged(t);});}handleValueChanged(t){if(this.reset(),typeof t=="string"){let e=t.split(" ");e.length===2?(this.filter.query=e[0],this.filter.lastName=e[1]):this.filter.query=e[0];}this.get();}add(){this.control.setValue(this.selections.map(t=>t.id));}remove(t){let e=this.selections.indexOf(t);e>=0&&this.selections.splice(e,1);}optionSelected(t){this.selections.push(t.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(e=>e.id));}scroll(){this.filter.pageIndex<this.totalPages&&(++this.filter.pageIndex,this.get());}reset(){this.filter=g.paged(1,10),this.totalPages=-1,this.items=[];}get(){this.mpplService.persons.get(this.filter).pipe(E(1),w(this.indicator)).subscribe(t=>{this.items.push(...t.items),this.totalPages=t.totalPages;});}};o.ɵfac=function(e){return new(e||o)(p(le,10),p($),p(A),p(P));},o.ɵcmp=u({type:o,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(e,i){if(e&1&&ae(_t,5),e&2){let n;ne(n=se())&&(i.input=n.first);}},standalone:!0,features:[M([$,P,A]),O,N],decls:14,vars:7,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let e;return e="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[t,["aria-label","Fruit selection"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","szOptionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],e];},template:function(e,i){if(e&1&&(a(0,"mat-form-field")(1,"mat-label"),_(2,0),s(),a(3,"mat-chip-grid",1,2),H(5,ct,6,3,"mat-chip-row",null,k),s(),a(7,"input",3,4),S("matChipInputTokenEnd",function(){return i.add();}),s(),a(9,"mat-autocomplete",5,6),S("optionSelected",function(c){return i.optionSelected(c);})("optionsScroll",function(){return i.scroll();}),H(11,St,8,7,"mat-option",9,k),s(),ee(13,ut,2,0,"mat-error"),s()),e&2){let n=C(4),c=C(10);x(5,i.selections),l(7),m("matAutocomplete",c)("formControl",i.control)("matChipInputFor",n)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),l(2),m("displayWith",i.displayFn)("szOptionsScrollIgnored",i.indicator()),x(11,i.items),l(4),te(13,i.control.hasError("required")?13:-1);}},dependencies:[y,R,D,de,v,L,F,Pe,Ie,Ne,Ee,Te,De,Re,Ce,et,Je,Ze,Qe,We,b,Oe,nt,P,A],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=o;return r;})();var st=(()=>{let o=class o extends xe{constructor(t,e,i){super(e),this.fb=t,this.dialog=e,this.data=i,this.form=t.group({testGroupIds:[i.testGroupIds],laboratoryIds:[i.laboratoryIds],personIds:[i.personIds],startDate:[i.startDate],endDate:[i.endDate]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};o.ɵfac=function(e){return new(e||o)(p(Se),p($e),p(Ge));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[M([]),O,N],decls:16,vars:9,consts:()=>{let t;t="\u0627\u0644\u062A\u0627\u0631\u064A\u062E";let e;e="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629";let i;return i="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],t,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",e,"formControlName","startDate"],["matEndDate","","placeholder",i,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]];},template:function(e,i){if(e&1&&(f(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),f(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),a(6,"mat-form-field",5)(7,"mat-label"),_(8,6),s(),a(9,"mat-date-range-input",7),f(10,"input",8)(11,"input",9),s(),f(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),s()()(),f(15,"sz-ui-dialog-actions",12)),e&2){let n=C(14);m("header",i.header),l(2),m("formGroup",i.form),l(1),m("multiple",!0),l(1),m("multiple",!0),l(5),m("rangePicker",n)("comparisonStart",i.form.controls.startDate.value)("comparisonEnd",i.form.controls.endDate.value),l(3),m("for",n),l(3),m("actions",i.actions);}},dependencies:[y,pe,R,D,me,_e,ce,z,Be,v,L,F,Ae,B,Ue,Xe,rt,ot,at,Ye,Fe,be,Le,ve,ze],encapsulation:2});let r=o;return r;})();var lt=(()=>{let o=class o{constructor(t,e,i){this.dialog=t,this.mlabService=e,this.route=i,this.dataSource=new Ve(g.pagedSorted("-createdAt")),this.dataSource.addRows([qe.default([je.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",n=>n.id),X.createdAt(),X.menu([])])]),this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get();}openFilterComponent(){this.dialog.open(st,{data:this.dataSource.filterModel}).afterClosed().pipe(E(1)).subscribe(t=>{this.dataSource.updateFilterModel(t),this.get();});}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe(w(this.dataSource.indicator),E(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};o.ɵfac=function(e){return new(e||o)(p(we),p(Y),p(ue));},o.ɵcmp=u({type:o,selectors:[["medisy-laboratory-analyses"]],features:[M([])],decls:8,vars:4,consts:()=>{let t;t="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644";let e;return e="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],t,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(e,i){e&1&&(a(0,"sz-ui-header-basic")(1,"h5",0),_(2,1),s()(),a(3,"sz-ui-table-filter",2),S("search",function(){return i.get();})("filter",function(){return i.openFilterComponent();}),a(4,"button",3)(5,"span"),_(6,4),s()()(),a(7,"sz-ui-table",5),S("update",function(){return i.get();}),s()),e&2&&(l(3),m("dataSource",i.dataSource),l(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[fe,tt,Ke,G,he],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=o;return r;})();var mt=[{path:"",component:lt},{path:"create",loadComponent:()=>import("./chunk-7S7PGCZ2.js").then(r=>r.CreateComponent)}];var wi=(()=>{let o=class o{};o.ɵfac=function(e){return new(e||o)();},o.ɵmod=Q({type:o}),o.ɵinj=K({providers:[Y],imports:[Me.forChild(mt),z,it,B,G,ke,b,ge]});let r=o;return r;})();export{wi as AnalysesModule};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/