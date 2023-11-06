"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[246],{8246:(N,h,e)=>{e.r(h),e.d(h,{AnalysesModule:()=>k});var a=e(6814),u=e(2296),c=e(7700),E=e(617),f=e(7988),i=e(8109),S=e(6883),g=e(9899),m=e(2516),p=e(3562),A=e(8262),O=e(9598),T=e(8721),D=e(8180),d=e(6223),P=e(8034),C=e(9157),Z=e(7106),x=e(7195),L=e(6028),t=e(5879),R=e(4630),M=e(2557),Y=e(3680),F=e(2032),I=e(5026),v=e(9060),z=e(2393),J=e(5781),B=e(6089);const G=["input"];function H(r,y){if(1&r){const o=t.EpF();t.TgZ(0,"mat-chip-row",10),t.NdJ("removed",function(){const l=t.CHM(o).$implicit,_=t.oxw();return t.KtG(_.remove(l))}),t._uU(1),t.ALo(2,"personName"),t.TgZ(3,"button",11)(4,"mat-icon"),t._uU(5,"cancel"),t.qZA()()()}if(2&r){const o=y.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,o)," ")}}function X(r,y){if(1&r&&(t.TgZ(0,"mat-option",12)(1,"div",13)(2,"span"),t._uU(3),t.ALo(4,"personName"),t.qZA(),t.TgZ(5,"small"),t._uU(6),t.ALo(7,"personAge"),t.qZA()()()),2&r){const o=y.$implicit;t.Q6J("value",o),t.xp6(3),t.Oqu(t.lcZ(4,3,o)),t.xp6(3),t.Oqu(t.lcZ(7,5,null==o?null:o.birthDate))}}function b(r,y){1&r&&(t.TgZ(0,"mat-error"),t.SDv(1,14),t.qZA())}let Q=(()=>{class r extends J.lo{constructor(o,n,s,l){super(o),this.ngControl=o,this.mpplService=n,this.personNamePipe=s,this.personAgePipe=l,this.items=[],this.selections=[],this.separatorKeysCodes=[L.K5,L.OC],this.indicator=(0,t.tdS)(!0),this.filter=O.J.paged(1,10),this.totalPages=-1,this.displayFn=_=>{if(!_)return"";const $=this.personNamePipe.transform(_),U=this.personAgePipe.transform(_?.birthDate);return U?`${$}, ${U}`:`${$}`}}ngOnInit(){this.control=this.ngControl.control,this.listenChanges()}listenChanges(){this.control.valueChanges.pipe((0,T.BI)(400)).subscribe(o=>{this.handleValueChanged(o)})}handleValueChanged(o){if(this.reset(),"string"==typeof o){const n=o.split(" ");2===n.length?(this.filter.query=n[0],this.filter.lastName=n[1]):this.filter.query=n[0]}this.get()}add(){this.control.setValue(this.selections.map(o=>o.id))}remove(o){const n=this.selections.indexOf(o);n>=0&&this.selections.splice(n,1)}optionSelected(o){this.selections.push(o.option.value),this.input.nativeElement.value="",this.control.setValue(this.selections.map(n=>n.id))}scroll(){this.filter.pageIndex<this.totalPages&&(++this.filter.pageIndex,this.get())}reset(){this.filter=O.J.paged(1,10),this.totalPages=-1,this.items=[]}get(){this.mpplService.persons.get(this.filter).pipe((0,D.q)(1),(0,T.sU)(this.indicator)).subscribe(o=>{this.items.push(...o.items),this.totalPages=o.totalPages})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(d.a5,10),t.Y36(z.i),t.Y36(v.Y),t.Y36(I.g))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["medisy-form-field-persons-search"]],viewQuery:function(n,s){if(1&n&&t.Gf(G,5),2&n){let l;t.iGM(l=t.CRH())&&(s.input=l.first)}},standalone:!0,features:[t._Bn([z.i,I.g,v.Y]),t.qOj,t.jDz],decls:12,vars:9,consts:function(){let o,n;return o="Name, phone, or email",n="This field is required",[o,["aria-label","Fruit selection"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["matInput","",3,"matAutocomplete","formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["input",""],[3,"displayWith","szOptionsScrollIgnored","optionSelected","optionsScroll"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"removed"],["matChipRemove",""],[3,"value"],[1,"sz-form"],n]},template:function(n,s){if(1&n&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t.SDv(2,0),t.qZA(),t.TgZ(3,"mat-chip-grid",1,2),t.YNc(5,H,6,3,"mat-chip-row",3),t.qZA(),t.TgZ(6,"input",4,5),t.NdJ("matChipInputTokenEnd",function(){return s.add()}),t.qZA(),t.TgZ(8,"mat-autocomplete",6,7),t.NdJ("optionSelected",function(_){return s.optionSelected(_)})("optionsScroll",function(){return s.scroll()}),t.YNc(10,X,8,7,"mat-option",8),t.qZA(),t.YNc(11,b,2,0,"mat-error",9),t.qZA()),2&n){const l=t.MAs(4),_=t.MAs(9);t.xp6(5),t.Q6J("ngForOf",s.selections),t.xp6(1),t.Q6J("matAutocomplete",_)("formControl",s.control)("matChipInputFor",l)("matChipInputSeparatorKeyCodes",s.separatorKeysCodes),t.xp6(2),t.Q6J("displayWith",s.displayFn)("szOptionsScrollIgnored",s.indicator()),t.xp6(2),t.Q6J("ngForOf",s.items),t.xp6(1),t.Q6J("ngIf",s.control.hasError("required"))}},dependencies:[a.ez,a.sg,a.O5,d.UX,d.Fj,d.JJ,d.oH,C.lN,C.KE,C.hX,C.TO,R.Bb,R.XC,Y.ey,R.ZL,F.c,F.Nt,Y.Ng,M.Hi,M.RA,M.oH,M.qH,M.z3,E.Ps,E.Hw,B.W,I.g,v.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]})}return r})();var K=e(4622),W=e(6091);let j=(()=>{class r extends g.Z2{constructor(o,n,s){super(n),this.fb=o,this.dialog=n,this.data=s,this.form=o.group({testGroupIds:[s.testGroupIds],laboratoryIds:[s.laboratoryIds],personIds:[s.personIds],startDate:[s.startDate],endDate:[s.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(d.qu),t.Y36(c.so),t.Y36(c.WI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["medisy-laboratory-analyses-filter"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:16,vars:9,consts:function(){let o,n,s;return o="Date",n="Start date",s="End date",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],["formControlName","personIds"],[1,"tw-flex-1"],o,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",n,"formControlName","startDate"],["matEndDate","","placeholder",s,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(n,s){if(1&n&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-test-group-select",2)(4,"medisy-form-field-laboratory",3)(5,"medisy-form-field-persons-search",4),t.TgZ(6,"mat-form-field",5)(7,"mat-label"),t.SDv(8,6),t.qZA(),t.TgZ(9,"mat-date-range-input",7),t._UZ(10,"input",8)(11,"input",9),t.qZA(),t._UZ(12,"mat-datepicker-toggle",10)(13,"mat-date-range-picker",null,11),t.qZA()()(),t._UZ(15,"sz-ui-dialog-actions",12)),2&n){const l=t.MAs(14);t.Q6J("header",s.header),t.xp6(2),t.Q6J("formGroup",s.form),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("multiple",!0),t.xp6(5),t.Q6J("rangePicker",l)("comparisonStart",s.form.controls.startDate.value)("comparisonEnd",s.form.controls.endDate.value),t.xp6(3),t.Q6J("for",l),t.xp6(3),t.Q6J("actions",s.actions)}},dependencies:[a.ez,d.UX,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,c.Is,c.xY,C.lN,C.KE,C.hX,C.R9,g.su,K.Y,W.t,x.Q,Z.w,Q,P.FA,P.nW,P.wx,P.zY,P.By,P._g],encapsulation:2})}return r})();var V=e(8359),w=e(3144);const q=[{path:"",component:(()=>{class r{constructor(o,n,s){this.dialog=o,this.mlabService=n,this.route=s,this.dataSource=new p.b2(O.J.pagedSorted("-createdAt")),this.dataSource.addRows([p.zP.default([p.UC.hyperlink("code","Code",l=>l.id),A.h.createdAt(),A.h.menu([])])]),this.dataSource.updateFilterModel(this.route.snapshot.queryParams),this.get()}openFilterComponent(){this.dialog.open(j,{data:this.dataSource.filterModel}).afterClosed().pipe((0,D.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.mlabService.analyses.get(this.dataSource.filterModel).pipe((0,T.sU)(this.dataSource.indicator),(0,D.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(c.uw),t.Y36(S.t),t.Y36(i.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["medisy-laboratory-analyses"]],features:[t._Bn([])],decls:8,vars:4,consts:function(){let o,n;return o="Analyses",n="Add",[["start","",1,"sz-h5"],o,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,s){1&n&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),t.TgZ(4,"button",3)(5,"span"),t.SDv(6,4),t.qZA()()(),t.TgZ(7,"sz-ui-table",5),t.NdJ("update",function(){return s.get()}),t.qZA()),2&n&&(t.xp6(3),t.Q6J("dataSource",s.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[i.rH,V.K,w.f,m.z,u.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]})}return r})()},{path:"create",loadComponent:()=>Promise.all([e.e(187),e.e(592),e.e(709)]).then(e.bind(e,6709)).then(r=>r.CreateComponent)}];let k=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({providers:[S.t],imports:[a.ez,i.Bz.forChild(q),c.Is,p.Vn,g.su,m.z,f.Tx,E.Ps,u.ot]})}return r})()},8262:(N,h,e)=>{e.d(h,{h:()=>E});var a=e(3562),u=e(7311);const c={documentType:"Document Type",comparisonType:"Comparison Operator",emailType:"Email Type",phoneType:"Phone Type"};class E{static menu(i){return a.UC.action("menu",i)}static code(){return a.UC.text("code","Code")}static createdAt(){return a.UC.date("createdAt",u.O.createdDate)}static updatedAt(){return a.UC.date("updatedAt",u.O.updatedDate)}static id(){return a.UC.text("id",u.O.id)}static nameHyperlink(i,S,g){return a.UC.hyperlink("name",u.O.name,i,S,g)}static nameText(i){return a.UC.text("name",u.O.name,i)}static phoneType(i){return a.UC.text("phoneType",c.phoneType,i)}static emailType(i){return a.UC.text("emailType",c.emailType,i)}static documentType(i){return a.UC.text("documentType",c.documentType,i)}static comparisonOperator(i){return a.UC.text("comparisonOperator",c.comparisonType,i)}}},7311:(N,h,e)=>{e.d(h,{O:()=>a});const a={id:"Id",name:"Name",description:"Description",updatedDate:"Updated Date",createdDate:"Created Date",tests:"Tests"}},5026:(N,h,e)=>{e.d(h,{g:()=>u});var a=e(5879);let u=(()=>{class c{transform(f){if(!f)return"";const i=new Date,S=new Date(f),m=~~((i.getTime()-S.getTime())/1e3/3600),p=~~(m/24),A=~~(p/7),O=~~(p/30),T=~~(i.getUTCFullYear()-S.getUTCFullYear());return T>0?`${T} `+"Year":O>0?`${O} `+"Month":A>0?`${A} `+"Week":p>0?`${p} `+"Day":m>0?`${m} `+"Hour":""}static#t=this.\u0275fac=function(i){return new(i||c)};static#e=this.\u0275pipe=a.Yjl({name:"personAge",type:c,pure:!0,standalone:!0})}return c})()},6089:(N,h,e)=>{e.d(h,{W:()=>i});var a=e(5879),u=e(8645),c=e(9397),E=e(9773),f=e(4630);let i=(()=>{class S{constructor(m){this.autoComplete=m,this.szOptionsScrollThresholdPercent=.9,this.szOptionsScrollIgnored=!1,this.optionsScroll=new a.vpe,this._onDestroy=new u.x,this.autoComplete.opened.pipe((0,c.b)(()=>{setTimeout(()=>{this.removeScrollEventListener(),this.autoComplete.panel.nativeElement.addEventListener("scroll",this.onScroll.bind(this))})}),(0,E.R)(this._onDestroy)).subscribe(),this.autoComplete.closed.pipe((0,c.b)(()=>this.removeScrollEventListener()),(0,E.R)(this._onDestroy)).subscribe()}removeScrollEventListener(){this.autoComplete&&this.autoComplete.panel&&this.autoComplete.panel.nativeElement&&this.autoComplete.panel.nativeElement.removeEventListener("scroll",this.onScroll)}onScroll(m){this.szOptionsScrollIgnored||(void 0===this.szOptionsScrollThresholdPercent||m.target.scrollTop+m.target.clientHeight>100*this.szOptionsScrollThresholdPercent*m.target.scrollHeight/100)&&this.optionsScroll.next({autoComplete:this.autoComplete,scrollEvent:m})}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}static#t=this.\u0275fac=function(p){return new(p||S)(a.Y36(f.XC))};static#e=this.\u0275dir=a.lG2({type:S,selectors:[["mat-autocomplete","optionsScroll",""]],inputs:{szOptionsScrollThresholdPercent:"szOptionsScrollThresholdPercent",szOptionsScrollIgnored:"szOptionsScrollIgnored"},outputs:{optionsScroll:"optionsScroll"},standalone:!0})}return S})()}}]);