import{a as at}from"./chunk-ZTMON3MV.js";import{a as st}from"./chunk-RS3YXDV4.js";import{a as P}from"./chunk-KZQP3VMU.js";import{a as A}from"./chunk-UR62DX7K.js";import{a as $}from"./chunk-L3MA6WSX.js";import{a as nt}from"./chunk-PGYORGLB.js";import{a as rt}from"./chunk-LE4FS3VA.js";import{a as U}from"./chunk-5FZ5R4ZJ.js";import{a as Xe,b as qe,c as Ke,e as Qe,h as We,j as Je,l as Ze,m as et,n as tt,q as it,r as ot}from"./chunk-2DIHYESB.js";import{c as k,d as je,g as xe,i as Ve,j as Ue,m as w}from"./chunk-JUKWJGHA.js";import{a as Ge,b as ke,d as we,e as Be,g as z}from"./chunk-LR6DSKQQ.js";import{a as F,b as Ae,d as Oe,h as v,i as L,j as Ne,k as Te,l as Re,m as De,n as ye,o as Fe,s as ve,t as Le,u as be,v as ze,w as Ye,x as $e}from"./chunk-CJ3L35E7.js";import{b as R,f as me,g as D,h as pe,l as de,m as ce,n as _e,o as ue,p as Se,s as y}from"./chunk-FZFNR6NR.js";import"./chunk-MTTAGST2.js";import{a as Y}from"./chunk-X3ZOFRYL.js";import{b as G}from"./chunk-KYTDMX2G.js";import{a as g}from"./chunk-AQB7U7BU.js";import{a as fe,d as Me,e as Ee}from"./chunk-4G55JY3H.js";import{d as He,i as V}from"./chunk-5QJH45WQ.js";import"./chunk-AWHXYS7Y.js";import"./chunk-EBVBFE7W.js";import{Ka as Ce,Na as he,Pa as ge,Ra as Pe,Ta as Ie,Ua as b}from"./chunk-W55BWEJG.js";import{Bb as a,Cb as l,Db as c,Hb as oe,L as E,Nb as u,Pb as S,Rb as re,Vb as C,Wb as h,Xb as x,Yb as ne,Zb as M,_a as ee,ac as I,cb as s,da as Q,db as p,ec as N,fc as T,jc as ae,kb as O,kc as se,la as f,ma as W,mc as le,nb as m,qa as J,ra as Z,tb as te,ub as ie,wb as B,xb as H,yb as j}from"./chunk-3QIFGVJ6.js";var ut=["input"];function St(r,o){if(r&1){let d=oe();a(0,"mat-chip-row",7),S("removed",function(){let i=J(d).$implicit,n=re();return Z(n.remove(i));}),h(1),N(2,"personName"),a(3,"button",8)(4,"mat-icon"),h(5,"cancel"),l()()();}if(r&2){let d=o.$implicit;s(1),ne(" ",T(2,1,d)," ");}}function ft(r,o){if(r&1&&(a(0,"mat-option",9)(1,"div",10)(2,"span"),h(3),N(4,"personName"),l(),a(5,"small"),h(6),N(7,"personAge"),l()()()),r&2){let d=o.$implicit;m("value",d),s(3),x(T(4,3,d)),s(3),x(T(7,5,d==null?null:d.birthDate));}}function Mt(r,o){r&1&&(a(0,"mat-error"),u(1,11),l());}var lt=(()=>{let o=class o extends Fe{constructor(e,t,i,n){super(e),this.ngControl=e,this.mpplService=t,this.personNamePipe=i,this.personAgePipe=n,this.items=[],this.selections=[],this.separatorKeysCodes=[13,188],this.indicator=ee(!0),this.filter=g.paged(1,10),this.totalPages=-1,this.displayFn=_=>{if(!_)return"";let q=this.personNamePipe.transform(_),K=this.personAgePipe.transform(_?.birthDate);return K?`${q}, ${K}`:`${q}`;};}ngOnInit(){this.control=this.ngControl.control,this.listenChanges();}listenChanges(){this.control.valueChanges.pipe(je(400)).subscribe(e=>{this.handleValueChanged(e);});}handleValueChanged(e){if(this.reset(),typeof e=="string"){let t=e.split(" ");t.length===2?(this.filter.query=t[0],this.filter.lastName=t[1]):this.filter.query=t[0];}this.get();}add(){this.control.setValue(this.selections.map(e=>e.id));}remove(e){let t=this.selections.indexOf(e);t>=0&&this.selections.splice(t,1);}optionSelected(e){this.selections.push(e.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(t=>t.id));}scroll(){this.filter.pageIndex<this.totalPages&&(++this.filter.pageIndex,this.get());}reset(){this.filter=g.paged(1,10),this.totalPages=-1,this.items=[];}get(){this.mpplService.persons.get(this.filter).pipe(E(1),k(this.indicator)).subscribe(e=>{this.items.push(...e.items),this.totalPages=e.totalPages;});}};o.ɵfac=function(t){return new(t||o)(p(me,10),p($),p(A),p(P));},o.ɵcmp=f({type:o,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(t,i){if(t&1&&se(ut,5),t&2){let n;ae(n=le())&&(i.input=n.first);}},standalone:!0,features:[M([$,P,A]),O,I],decls:14,vars:7,consts:()=>{let e;e="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";let t;return t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[e,["aria-label","Fruit selection"],["chipGrid",""],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","szOptionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],t];},template:function(t,i){if(t&1&&(a(0,"mat-form-field")(1,"mat-label"),u(2,0),l(),a(3,"mat-chip-grid",1,2),H(5,St,6,3,"mat-chip-row",null,B),l(),a(7,"input",3,4),S("matChipInputTokenEnd",function(){return i.add();}),l(),a(9,"mat-autocomplete",5,6),S("optionSelected",function(_){return i.optionSelected(_);})("optionsScroll",function(){return i.scroll();}),H(11,ft,8,7,"mat-option",9,B),l(),te(13,Mt,2,0,"mat-error"),l()),t&2){let n=C(4),_=C(10);j(5,i.selections),s(7),m("matAutocomplete",_)("formControl",i.control)("matChipInputFor",n)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),s(2),m("displayWith",i.displayFn)("szOptionsScrollIgnored",i.indicator()),j(11,i.items),s(4),ie(13,i.control.hasError("required")?13:-1);}},dependencies:[y,R,D,ce,L,v,F,Ae,Re,Ne,Ce,Te,ye,De,he,tt,Ze,et,We,Je,b,Ie,st,P,A],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let r=o;return r;})();var mt=(()=>{let o=class o extends xe{constructor(e,t,i){super(t),this.fb=e,this.dialog=t,this.data=i,this.form=e.group({testGroupIds:[i.testGroupIds],laboratoryIds:[i.laboratoryIds],personIds:[i.personIds],startDate:[i.startDate],endDate:[i.endDate]});}submit(){this.IsValid()&&this.dialog?.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)(p(Se),p(Ge),p(ke));},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[M([]),O,I],decls:16,vars:9,consts:()=>{let e;e="\u0627\u0644\u062A\u0627\u0631\u064A\u062E";let t;t="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629";let i;return i="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],e,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",i,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]];},template:function(t,i){if(t&1&&(c(0,"sz-ui-dialog-header",0),a(1,"mat-dialog-content")(2,"form",1),c(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),a(6,"mat-form-field",5)(7,"mat-label"),u(8,6),l(),a(9,"mat-date-range-input",7),c(10,"input",8)(11,"input",9),l(),c(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),l()()(),c(15,"sz-ui-dialog-actions",12)),t&2){let n=C(14);m("header",i.header),s(2),m("formGroup",i.form),s(1),m("multiple",!0),s(1),m("multiple",!0),s(5),m("rangePicker",n)("comparisonStart",i.form.controls.startDate.value)("comparisonEnd",i.form.controls.endDate.value),s(3),m("for",n),s(3),m("actions",i.actions);}},dependencies:[y,de,R,D,pe,_e,ue,z,Be,L,v,F,Oe,w,Ve,Ue,at,nt,lt,$e,ve,ze,Le,be,Ye],encapsulation:2});let r=o;return r;})();var pt=(()=>{let o=class o{constructor(e,t,i){this.dialog=e,this.mlabService=t,this.route=i,this.title=rt.analyses,this.dataSource=new qe(g.pagedSorted("-createdAt")),this.dataSource.addRows([Ke.default([Xe.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",n=>n.id).makeCompact(),U.createdAt(),U.menu([V.divider(),V.default("\u062A\u0642\u0631\u064A\u0631","report",()=>{})])])]),this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get();}openFilterComponent(){this.dialog.open(mt,{data:this.dataSource.filterModel}).afterClosed().pipe(E(1)).subscribe(e=>{this.dataSource.updateFilterModel(e),this.get();});}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe(k(this.dataSource.indicator),E(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(p(we),p(Y),p(fe));},o.ɵcmp=f({type:o,selectors:[["medisy-laboratory-analyses"]],features:[M([])],decls:6,vars:5,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[[3,"title"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]];},template:function(t,i){t&1&&(c(0,"sz-ui-header-info",0),a(1,"sz-ui-table-filter",1),S("search",function(){return i.get();})("filter",function(){return i.openFilterComponent();}),a(2,"button",2)(3,"span"),u(4,3),l()()(),a(5,"sz-ui-table",4),S("update",function(){return i.get();}),l()),t&2&&(m("title",i.title),s(1),m("dataSource",i.dataSource),s(4),m("paginationEnabled",!0)("stateEnabled",!0)("dataSource",i.dataSource));},dependencies:[Me,it,Qe,G,ge],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=o;return r;})();var dt=[{path:"",component:pt},{path:"create",loadComponent:()=>import("./chunk-NJ5LY4BU.js").then(r=>r.CreateComponent)}];var ji=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=W({type:o}),o.ɵinj=Q({providers:[Y],imports:[Ee.forChild(dt),z,ot,w,G,He,b,Pe]});let r=o;return r;})();export{ji as AnalysesModule};/**i18n:419148c294ae56579e504a43f00a8e71eb3633c9912a0864afd0e0662e47e985*/