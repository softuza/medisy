"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[244],{7244:(j,L,_)=>{_.r(L),_.d(L,{AnalysesModule:()=>ut});var N=_(6814),n=_(6223),M=_(4630),y=_(9014),g=_(2296),U=_(5195),Z=_(5986),h=_(3680),f=_(8034),c=_(7700),D=_(617),d=_(2032),i=_(9038),l=_(7988),E=_(1476),O=_(5940),X=_(8525),z=_(3566),Y=_(1545),Oe=_(5313),Ae=_(2596),B=_(8109),Me=_(6981),pe=_(8472),J=_(5738),Ne=_(4407),F=_(5436),fe=_(807),ge=_(5041),Pe=_(8766),R=_(3572),H=_(2191),Re=_(8652),K=_(6987),Ie=_(9598),I=_(2119),P=_(8180),e=_(5879),v=_(5348),he=_(9155),Le=_(6439),p=_(9157),b=_(4622),Q=_(6091),De=_(5974),Ye=_(851),Fe=_(5741),ve=_(7336),$e=_(2160);let ye=(()=>{class r extends F.Ku{constructor(t,o,s){super(s),this.personService=t,this.fb=o,this.dialog=s,this.titles=Object.values(Le.D),this.form=o.group({firstName:[null,[n.kI.required,n.kI.maxLength(128)]],lastName:o.control(null,[n.kI.maxLength(128)]),middleName:o.control(null,[n.kI.maxLength(128)]),fatherName:o.control(null,[n.kI.maxLength(128)]),motherName:o.control(null,[n.kI.maxLength(128)]),birthDate:o.control(null,[]),nationalityId:o.control(null,[]),ssn:o.control(null,[n.kI.maxLength(128)]),languageId:o.control(null,[n.kI.required]),sex:o.control(he.m.Male,[n.kI.required]),title:o.control(null,[])})}submit(){if(!this.IsValid())return;const t=this.form.value;this.personService.createPerson({languageId:t.languageId,sex:t.sex,title:t.title,birthDate:t.birthDate,nationalitiyId:t.nationalitiyId,ssn:t.ssn,names:[{firstName:t.firstName,lastName:t.lastName,middleName:t.middleName,fatherName:t.fatherName,motherName:t.motherName,languageId:t.languageId}]}).pipe((0,I.sU)(this.indicator),(0,I.S3)(this.alert),(0,P.q)(1)).subscribe(o=>{this.dialog.close(o)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.R),e.Y36(n.qu),e.Y36(c.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-common-create"]],features:[e._Bn([v.R]),e.qOj],decls:27,vars:5,consts:function(){let a,t,o,s,S,m,u;return a="First name",t="Last name",o="Middle name",s="Father name",S="Mother name",m="SSN",u="BirthDate",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",a],["formControlName","lastName","label",t],["formControlName","middleName","label",o,1,"tw-flex-1"],["formControlName","fatherName","label",s],["formControlName","motherName","label",S],["formControlName","nationalityId"],["formControlName","ssn","label",m],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],[1,"tw-flex-1"],u,["matInput","","formControlName","birthDate",3,"matDatepicker"],["picker",""],["matSuffix","",3,"for"],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"medisy-form-field-nationality",8)(12,"sz-ui-form-field-input",9),e.qZA(),e._UZ(13,"medisy-form-field-language",10),e.TgZ(14,"div",2),e._UZ(15,"medisy-form-field-sex",11)(16,"medisy-form-field-title",12),e.qZA(),e.TgZ(17,"mat-form-field",13)(18,"mat-label"),e.SDv(19,14),e.qZA(),e._UZ(20,"input",15),e.TgZ(21,"mat-hint"),e._uU(22,"MM/DD/YYYY"),e.qZA(),e._UZ(23,"mat-datepicker",null,16)(25,"mat-datepicker-toggle",17),e.qZA()()(),e._UZ(26,"sz-ui-dialog-actions",18)),2&t){const s=e.MAs(24);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(18),e.Q6J("matDatepicker",s),e.xp6(5),e.Q6J("for",s),e.xp6(1),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,c.xY,d.Nt,p.KE,p.hX,p.bx,p.R9,f.Mq,f.hl,f.nW,b.Y,Q.t,De.g,Ye.d,Fe.t,ve.e,$e.V],encapsulation:2}),r})();var C=(()=>((C=C||{})[C.Initialize=0]="Initialize",C[C.Scan=1]="Scan",C[C.Halt=2]="Halt",C[C.Fail=3]="Fail",C))(),$=_(9667),q=_(7398),Ue=_(9280),w=_(6007),Ze=_(4913);const ze=["scanner"];function xe(r,a){1&r&&e._UZ(0,"mat-progress-bar",4)}let Ge=(()=>{class r{constructor(){this.allowedFormats=[Ue.BarcodeFormat.PDF_417],this.changed=new e.vpe,this.state=new e.vpe,this.mediaDevices=[],this.indicator=(0,e.tdS)(!0)}set mediaDevice(t){this.changeMediaDevice(t)}ngOnInit(){this.state?.emit(C.Initialize)}onCamerasFound(t){this.indicator.set(!1),this.mediaDevices=t,this.state?.emit(C.Scan)}changeMediaDevice(t){this.scanner&&(this.scanner.device=t)}onCamerasNotFound(){this.indicator.set(!1),this.state?.emit(C.Halt)}onScanSuccess(t){this.changed&&this.changed.emit(t)}onScanError(t){this.indicator.set(!1),this.state?.emit(C.Fail)}onScanFailure(t){this.indicator.set(!1),this.state?.emit(C.Fail)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-code-helper-reader"]],viewQuery:function(t,o){if(1&t&&e.Gf(ze,5),2&t){let s;e.iGM(s=e.CRH())&&(o.scanner=s.first)}},inputs:{allowedFormats:"allowedFormats",mediaDevice:"mediaDevice"},outputs:{changed:"changed",state:"state"},features:[e._Bn([])],decls:4,vars:2,consts:[[1,"tw-container","tw-flex","tw-flex-col","tw-justify-center"],["mode","indeterminate",4,"ngIf"],[3,"formats","camerasFound","camerasNotFound","scanSuccess","scanError","scanFailure"],["scanner",""],["mode","indeterminate"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,xe,1,0,"mat-progress-bar",1),e.TgZ(2,"zxing-scanner",2,3),e.NdJ("camerasFound",function(S){return o.onCamerasFound(S)})("camerasNotFound",function(){return o.onCamerasNotFound()})("scanSuccess",function(S){return o.onScanSuccess(S)})("scanError",function(S){return o.onScanError(S)})("scanFailure",function(S){return o.onScanFailure(S)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.indicator()),e.xp6(1),e.Q6J("formats",o.allowedFormats))},dependencies:[N.O5,w.pW,Ze.S],encapsulation:2}),r})(),Xe=(()=>{class r extends F.uZ{constructor(t,o){super(o),this.personService=t,this.dialog=o,this.lastCode="",this.header.title="Scan",this.actions=[F.Bp.close(()=>this.dialogRef.close())]}deviceState(t){switch(t){case C.Initialize:this.alert.set({message:"Initializing device",type:$.N.Info});break;case C.Scan:this.alert.set({message:"Scanning",type:$.N.Info})}}codeChanged(t){if(this.lastCode===t)return;this.lastCode=t;const o=this.getPersonFromSyrianId(t);o?(this.alert.set({message:`Obtaining info about SSN ${o.ssn}..`,type:$.N.Info}),this.personService.getPersons({ssn:o.ssn,pageIndex:1,pageSize:50}).pipe((0,I.sU)(this.indicator),(0,P.q)(1),(0,q.U)(s=>s.items)).subscribe(s=>{this.handlePerson(s)})):this.alert.set({message:"Failed to decode data!",type:$.N.Error})}handlePerson(t){t&&0!==t.length?t.length>1?this.alert.set({message:"More one person found!",type:$.N.Error}):this.dialog.close(t[0]):this.alert.set({message:"Person not found!",type:$.N.Error})}getPersonFromSyrianId(t){const o=this.toUint8Array(t),s=[];let S=0,m=0;for(;o.length>=S&&o.length>0;)m=o.indexOf(35,S),m<0&&(m=o.length),s.push(o.slice(S,m)),S=m+1;if(11!=s.length)return null;const u=this.getDecoder();return{firstName:u.decode(s[0]),lastName:u.decode(s[1]),fatherFirstName:u.decode(s[2]),motherName:u.decode(s[3]),ssn:u.decode(s[5])}}getDecoder(){return new TextDecoder("windows-1256")}toUint8Array(t){return Uint8Array.from(t.split("").map(o=>o.charCodeAt()))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.R),e.Y36(c.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-people-persons-common-person-scan"]],features:[e._Bn([v.R]),e.qOj],decls:5,vars:2,consts:[[3,"header"],[1,"tw-flex","tw-flex-col"],[3,"changed","state"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"div",1)(3,"medisy-code-helper-reader",2),e.NdJ("changed",function(S){return o.codeChanged(S)})("state",function(S){return o.deviceState(S)}),e.qZA()()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[c.xY,Ge,b.Y,Q.t],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-dialog-content[_ngcontent-%COMP%]{padding:0}"]}),r})();var Be=_(6893);let k=(()=>{class r extends Be.m{}return r.\u0275fac=function(){let a;return function(o){return(a||(a=e.n5z(r)))(o||r)}}(),r.\u0275dir=e.lG2({type:r,inputs:{displayFn:"displayFn"},features:[e.qOj]}),r})();var ee=_(7921),te=_(3620),oe=_(3997),ne=_(4664);function Je(r,a){if(1&r&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function be(r,a){if(1&r&&(e.TgZ(0,"mat-option",7)(1,"div",8)(2,"span"),e._uU(3),e.qZA()()()),2&r){const t=a.$implicit,o=e.oxw();e.Q6J("value",o.getOptionValue(t)),e.xp6(3),e.Oqu(o.getOptionContent(t))}}function Qe(r,a){1&r&&(e.TgZ(0,"mat-error"),e.SDv(1,9),e.qZA())}function qe(r,a){1&r&&(e.TgZ(0,"mat-error"),e.SDv(1,10),e.qZA())}function He(r,a){1&r&&(e.TgZ(0,"mat-error"),e.SDv(1,11),e.qZA())}function Ke(r,a){1&r&&e._UZ(0,"mat-progress-bar",12)}let We=(()=>{class r extends k{constructor(t){super(t),this.ngControl=t,this.loading=!1,this.displayValue=o=>this.displayFn?this.displayFn(o):o}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}getOptionContent(t){return this.contentFn?this.contentFn(t):t}getOptionValue(t){return this.valueFn?this.valueFn(t):t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.a5,10))},r.\u0275cmp=e.Xpm({type:r,selectors:[["sz-ui-form-field-autocomplete"]],inputs:{items:"items",loading:"loading"},features:[e.qOj],decls:11,vars:9,consts:function(){let a,t,o;return a="This field is required",t="This field does not the minimum length",o="This field exceeds the maximum length",[[1,"container"],[4,"ngIf"],["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],a,t,o,["mode","indeterminate"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field"),e.YNc(2,Je,2,1,"mat-label",1),e._UZ(3,"input",2),e.TgZ(4,"mat-autocomplete",3,4),e.YNc(6,be,4,2,"mat-option",5),e.qZA(),e.YNc(7,Qe,2,0,"mat-error",1),e.YNc(8,qe,2,0,"mat-error",1),e.YNc(9,He,2,0,"mat-error",1),e.qZA(),e.YNc(10,Ke,1,0,"mat-progress-bar",6),e.qZA()),2&t){const s=e.MAs(5);e.xp6(2),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matAutocomplete",s)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayValue),e.xp6(2),e.Q6J("ngForOf",o.items),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("min")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("max")),e.xp6(1),e.Q6J("ngIf",o.loading)}},dependencies:[N.sg,N.O5,n.Fj,n.JJ,n.oH,p.KE,p.hX,p.TO,h.ey,d.Nt,w.pW,M.XC,M.ZL],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}",".container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),r})(),re=(()=>{class r extends k{constructor(t,o){super(t),this.ngControl=t,this.testGroupService=o,this.label="Test Group",this.indicator=(0,e.tdS)(!0),this.contentFormat=s=>s.name,this.valueFormat=s=>this.valueFn?this.valueFn(s):s.id,this.items$=this.testGroupService.getTestGroups().pipe((0,P.q)(1),(0,q.U)(s=>s.items)).pipe((0,I.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,ee.O)(""),(0,te.b)(400),(0,oe.x)(),(0,ne.w)(t=>this.get("string"==typeof t?t:"")))}get(t){return this.testGroupService.getTestGroups({query:t,pageSize:10,pageIndex:1,sortBy:"name"}).pipe((0,P.q)(1),(0,I.sU)(this.indicator)).pipe((0,q.U)(o=>o.items))}writeValue(t){this.value=t}displayFormat(t){return t?t.name:""}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.a5,10),e.Y36(K.C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-form-field-test-group"]],features:[e._Bn([K.C]),e.qOj],decls:2,vars:9,consts:[[3,"formControl","loading","items","label","displayFn","contentFn","valueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-autocomplete",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("loading",o.indicator())("items",e.lcZ(1,7,o.items$))("label",o.label)("displayFn",o.displayFormat)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[n.JJ,n.oH,We,N.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),r})();var Ve=_(6202);let je=(()=>{class r extends F.Z2{constructor(t,o){super(o),this.fb=t,this.dialog=o,this.testGroupValueFormat=s=>s,this.referenceGroupValueFormat=s=>s,this.form=t.group({testGroup:t.control(null,[n.kI.required]),referenceGroup:t.control(null,[n.kI.required]),note:t.control(null,[n.kI.maxLength(4096)])})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu),e.Y36(c.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-analyses-create-save-test-info"]],features:[e._Bn([]),e.qOj],decls:6,vars:5,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroup",3,"valueFn"],["formControlName","referenceGroup",3,"valueFn"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-reference-gourp",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("valueFn",o.testGroupValueFormat),e.xp6(1),e.Q6J("valueFn",o.referenceGroupValueFormat),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,c.xY,b.Y,Q.t,re,Ve.P],encapsulation:2}),r})();var _e=_(9692),we=_(1746),ke=_(8873),se=_(2516),ae=_(4889);let W=(()=>{class r{transform(t){if(!t.birthDate)return"";const o=new Date,s=new Date(t.birthDate),m=~~((o.getTime()-s.getTime())/1e3/3600),u=~~(m/24),A=~~(u/7),x=~~(u/30),G=~~(o.getUTCFullYear()-s.getUTCFullYear());return G>0?`${G} `+"Year":x>0?`${x} `+"Month":A>0?`${A} `+"Week":u>0?`${u} `+"Day":m>0?`${m} `+"Hour":""}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=e.Yjl({name:"personAge",type:r,pure:!0}),r})();var V=_(9060),et=_(2757);function tt(r,a){if(1&r&&(e.TgZ(0,"mat-option",6)(1,"div",7)(2,"span"),e._uU(3),e.ALo(4,"personName"),e.qZA(),e.TgZ(5,"small"),e._uU(6),e.ALo(7,"personAge"),e.qZA()()()),2&r){const t=a.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(e.lcZ(4,3,t)),e.xp6(3),e.Oqu(e.lcZ(7,5,t))}}function ot(r,a){1&r&&(e.TgZ(0,"mat-error"),e.SDv(1,8),e.qZA())}let nt=(()=>{class r extends et.l{constructor(t,o,s,S){super(t),this.ngControl=t,this.personService=o,this.personNamePipe=s,this.personAgePipe=S,this.indicator=(0,e.tdS)(!0),this.displayFn=m=>{if(!m)return"";const u=this.personNamePipe.transform(m),A=this.personAgePipe.transform(m);return A?`${u}, ${A}`:`${u}`}}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,ee.O)(""),(0,te.b)(400),(0,oe.x)(),(0,ne.w)(t=>{if("string"==typeof t){const o=t.split(" ");return 2===o.length?this.get(o[0],o[1]):this.get(o[0])}return this.get("")}))}get(t,o){return this.personService.getPersons({query:t,lastName:o,pageSize:10,pageIndex:1}).pipe((0,P.q)(1),(0,I.sU)(this.indicator)).pipe((0,q.U)(s=>s.items))}writeValue(t){this.value=t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.a5,10),e.Y36(v.R),e.Y36(V.Y),e.Y36(W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-form-field-person-search"]],features:[e._Bn([v.R,V.Y,W]),e.qOj],decls:9,vars:7,consts:function(){let a,t;return a="Name, phone, or email",t="This field is required",[a,["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],t]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e.SDv(2,0),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",2,3),e.YNc(6,tt,8,7,"mat-option",4),e.ALo(7,"async"),e.qZA(),e.YNc(8,ot,2,0,"mat-error",5),e.qZA()),2&t){const s=e.MAs(5);e.xp6(3),e.Q6J("matAutocomplete",s)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,5,o.items$)),e.xp6(2),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[N.sg,N.O5,n.Fj,n.JJ,n.oH,d.Nt,p.KE,p.hX,p.TO,h.ey,M.XC,M.ZL,N.Ov,W,V.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),r})();function rt(r,a){1&r&&e.SDv(0,38)}function _t(r,a){1&r&&e.SDv(0,39)}function st(r,a){1&r&&e.SDv(0,40)}function at(r,a){1&r&&e.SDv(0,41)}function it(r,a){1&r&&e.SDv(0,42)}function lt(r,a){if(1&r&&(e.TgZ(0,"div",45)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&r){const t=a.$implicit;e.xp6(2),e.Oqu(t.key),e.xp6(2),e.Oqu(t.value)}}function Et(r,a){if(1&r&&(e.TgZ(0,"div",43)(1,"h4"),e._uU(2),e.qZA(),e.YNc(3,lt,5,2,"div",44),e.qZA()),2&r){const t=a.$implicit;e.xp6(2),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("ngForOf",t.items)}}let ie=(()=>{class r{constructor(t,o,s,S){this.analysisService=t,this.dialog=o,this.fb=s,this.router=S,this.testsDataSource=new R.b2,this.indicator=(0,e.tdS)(!1),this.alert=(0,e.tdS)(void 0),this.analysisForm=this.fb.group({laboratoryId:[null,[n.kI.required]],note:this.fb.control(null,[n.kI.maxLength(4096)])}),this.personForm=this.fb.group({person:this.fb.control(null,[n.kI.required])}),this.testListForm=this.fb.array([]),this.testsForm=this.fb.group({tests:this.testListForm}),this.form=this.fb.group({analysisForm:this.analysisForm,personForm:this.personForm,testsForm:this.testsForm}),this.testsDataSource.columns=[R.UC.position("position","#"),R.UC.text("testClass","Test Class",m=>m.testClass.name),R.UC.text("testGroup","Test Group",m=>m.testGroup?.name),R.UC.text("referenceGroup","Reference Group",m=>m.referenceGroup.name),H.h.menu([R.od.delete((m,u)=>{this.testsDataSource.delete(m),this.testListForm.removeAt(u)})])]}openPersonScanComponent(){this.dialog.open(Xe).afterClosed().pipe((0,P.q)(1)).subscribe(o=>{o&&this.personForm.get("person")?.setValue(o)})}openPersonCreateComponent(){this.dialog.open(ye).afterClosed().pipe((0,P.q)(1)).subscribe(o=>{o&&this.personForm.controls.person.setValue(o)})}openTestTypeAddComponent(){this.dialog.open(je).afterClosed().pipe((0,P.q)(1)).subscribe(o=>{o&&(this.testsDataSource.push(o),this.testListForm.push(this.fb.group({testClass:[o.testClass,n.kI.required],testGroup:[o.testGroup],referenceGroup:[o.referenceGroup,n.kI.required],note:[null,n.kI.maxLength(4096)]})))})}review(){const t=[];return t.push({title:"Person",items:this.generatePersonReview()}),t}validate(t){return!(t&&!t.valid&&(Object.keys(t.controls).forEach(o=>{t?.get(o)?.markAsTouched({onlySelf:!0})}),1))}generatePersonReview(){return[{key:"Name",value:this.personForm.value.person?.firstName}]}submit(){return this.validate(this.form)&&this.analysisService.createAnalysis({personId:this.personForm.value.person.id,laboratoryId:this.analysisForm.value.laboratoryId,note:this.analysisForm.value.note,tests:this.testListForm.value.map(t=>({note:t.note,referenceGroupId:t.referenceGroup.id,testClassId:t.testClass.id,testGroupId:t.testGroup?.id}))}).pipe((0,I.sU)(this.indicator),(0,I.S3)(this.alert),(0,P.q)(1)).subscribe(()=>{this.router.navigate(["/mlab/analyses"])}),!1}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(J.K),e.Y36(c.uw),e.Y36(n.qu),e.Y36(B.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-analyses-create"]],features:[e._Bn([J.K])],decls:62,vars:16,consts:function(){let a,t,o,s,S,m,u,A,x,G,le,Ee,Se,me,de,ue,Ce,Te,ce;return a="Create a new anlysis",t="Create",o="Scan",s="Next",S="Note",m="Back",u="Next",A="Add",x="Back",G="Next",le="Back",Ee="Next",Se=" Cancel ",me=" Create ",de="Person Information",ue="Laboratory",Ce="Tests",Te="Bill",ce="Review",[["start","",1,"sz-h5"],a,["mat-icon-button","","routerLink","/mlab/analyses","end",""],[3,"alert"],[3,"linear"],["stepper",""],[3,"stepControl"],["matStepLabel",""],[1,"tw-flex","tw-flex-col","tw-py-4",3,"formGroup"],["formControlName","person",1,"tw-flex-1"],[3,"cls"],["start",""],["mat-button","",3,"click"],t,o,["end","","mat-button","","matStepperNext",""],s,["formControlName","laboratoryId"],["formControlName","note","label",S],["end",""],["mat-button","","matStepperPrevious",""],m,["mat-button","","matStepperNext",""],u,[3,"dataSource"],A,x,G,[3,"formGroup"],[1,"tw-flex","tw-flex-col"],[1,"end"],le,Ee,["class","list",4,"ngFor","ngForOf"],["routerLink","/mlab/analyses","mat-button","","type","button"],Se,["mat-raised-button","","color","primary",3,"disabled","click"],me,de,ue,Ce,Te,ce,[1,"list"],["class","list-item-horizontal",4,"ngFor","ngForOf"],[1,"list-item-horizontal"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA(),e.TgZ(3,"button",2)(4,"mat-icon"),e._uU(5,"arrow_back"),e.qZA()()(),e._UZ(6,"sz-ui-alert",3),e.TgZ(7,"mat-vertical-stepper",4,5)(9,"mat-step",6),e.YNc(10,rt,1,0,"ng-template",7),e.TgZ(11,"form",8),e._UZ(12,"medisy-form-field-person-search",9),e.qZA(),e.TgZ(13,"sz-ui-header-basic",10)(14,"div",11)(15,"button",12),e.NdJ("click",function(){return o.openPersonCreateComponent()}),e.SDv(16,13),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return o.openPersonScanComponent()}),e.SDv(18,14),e.qZA()(),e.TgZ(19,"button",15),e.SDv(20,16),e.qZA()()(),e.TgZ(21,"mat-step",6),e.YNc(22,_t,1,0,"ng-template",7),e.TgZ(23,"form",8),e._UZ(24,"medisy-form-field-laboratory",17)(25,"sz-ui-form-field-textarea",18),e.qZA(),e.TgZ(26,"sz-ui-header-basic",10)(27,"div",19)(28,"button",20),e.SDv(29,21),e.qZA(),e.TgZ(30,"button",22),e.SDv(31,23),e.qZA()()()(),e.TgZ(32,"mat-step",6),e.YNc(33,st,1,0,"ng-template",7),e.TgZ(34,"form",8),e._UZ(35,"sz-ui-table",24),e.qZA(),e.TgZ(36,"sz-ui-header-basic",10)(37,"div",11)(38,"button",12),e.NdJ("click",function(){return o.openTestTypeAddComponent()}),e.SDv(39,25),e.qZA()(),e.TgZ(40,"div",19)(41,"button",20),e.SDv(42,26),e.qZA(),e.TgZ(43,"button",22),e.SDv(44,27),e.qZA()()()(),e.TgZ(45,"mat-step",6)(46,"form",28),e.YNc(47,at,1,0,"ng-template",7),e._UZ(48,"div",29),e.TgZ(49,"div",30)(50,"button",20),e.SDv(51,31),e.qZA(),e.TgZ(52,"button",22),e.SDv(53,32),e.qZA()()()(),e.TgZ(54,"mat-step"),e.YNc(55,it,1,0,"ng-template",7),e.YNc(56,Et,4,2,"div",33),e.TgZ(57,"div",30)(58,"button",34),e.SDv(59,35),e.qZA(),e.TgZ(60,"button",36),e.NdJ("click",function(){return o.submit()}),e.SDv(61,37),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("alert",o.alert()),e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",o.personForm),e.xp6(2),e.Q6J("formGroup",o.personForm),e.xp6(2),e.Q6J("cls",""),e.xp6(8),e.Q6J("stepControl",o.analysisForm),e.xp6(2),e.Q6J("formGroup",o.analysisForm),e.xp6(3),e.Q6J("cls",""),e.xp6(6),e.Q6J("stepControl",o.testsForm),e.xp6(2),e.Q6J("formGroup",o.testsForm),e.xp6(1),e.Q6J("dataSource",o.testsDataSource),e.xp6(1),e.Q6J("cls",""),e.xp6(9),e.Q6J("stepControl",o.form),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(10),e.Q6J("ngForOf",o.review()),e.xp6(4),e.Q6J("disabled",o.indicator()))},dependencies:[N.sg,n._Y,n.JJ,n.JL,n.sg,n.u,B.rH,_e.K,we.R,ke.J,se.z,ae.w,nt,D.Hw,g.lW,g.RK,Y.C0,Y.VY,Y.Vq,Y.Ic,Y.fd],encapsulation:2}),r})(),St=(()=>{class r extends F.Z2{constructor(t,o,s){super(o),this.fb=t,this.dialog=o,this.data=s,this.form=t.group({testGroupIds:[s.testGroupIds],laboratoryIds:[s.laboratoryIds],personIds:[s.personIds],startDate:[s.startDate],endDate:[s.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu),e.Y36(c.so),e.Y36(c.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-analyses-filter"]],features:[e._Bn([]),e.qOj],decls:17,vars:9,consts:function(){let a,t,o;return a="Date",t="Start date",o="End date",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],[1,"tw-flex-1"],a,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",o,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-laboratory",3),e.TgZ(5,"mat-form-field",4)(6,"mat-label"),e.SDv(7,5),e.qZA(),e.TgZ(8,"mat-date-range-input",6),e._UZ(9,"input",7)(10,"input",8),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(13,"mat-datepicker-toggle",9)(14,"mat-date-range-picker",null,10),e.qZA()()(),e._UZ(16,"sz-ui-dialog-actions",11)),2&t){const s=e.MAs(15);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(4),e.Q6J("rangePicker",s)("comparisonStart",o.form.controls.startDate.value)("comparisonEnd",o.form.controls.endDate.value),e.xp6(5),e.Q6J("for",s),e.xp6(3),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,c.xY,p.KE,p.hX,p.bx,p.R9,b.Y,Q.t,ae.w,re,f.nW,f.wx,f.zY,f.By,f._g],encapsulation:2}),r})();var mt=_(9288);const dt=[{path:"",component:(()=>{class r{constructor(t,o){this.dialog=t,this.analysisService=o,this.dataSource=new R.b2(Ie.J.pagedSorted("-createdAt")),this.dataSource.columns=[R.UC.hyperlink("code","Code",s=>s.id),H.h.createdAt(),H.h.menu([])],this.get()}openCreateComponent(){this.dialog.open(ie).afterClosed().pipe((0,P.q)(1)).subscribe(o=>{this.dataSource.push(o)})}openFilterComponent(){this.dialog.open(St,{data:this.dataSource.filterModel}).afterClosed().pipe((0,P.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.analysisService.getAnalyses(this.dataSource.filterModel).pipe((0,I.sU)(this.dataSource.indicator),(0,P.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c.uw),e.Y36(J.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-analyses"]],features:[e._Bn([K.C,Re.v])],decls:8,vars:4,consts:function(){let a,t;return a="Analyses",t="Add",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[B.rH,_e.K,mt.f,se.z,g.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),r})()},{path:"create",component:ie}];let ut=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[J.K],imports:[N.ez,n.u5,n.UX,B.Bz.forChild(dt),c.Is,M.Bb,Oe.p0,E.TU,d.c,R.Vn,Pe.h,Ne.E,F.su,fe.g,ge.n,Me.F,Z.p9,l.Tx,D.Ps,g.ot,X.LD,Y.T5,Ae.AV,i.ie,z.JX,h.XK,U.QW,y.g,f.FA,O.Cq,pe.f]}),r})()},5974:(j,L,_)=>{_.d(L,{g:()=>d});var N=_(2757),n=_(5879),M=_(6223),y=_(6814),g=_(9157),U=_(2032);function Z(i,l){if(1&i&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&i){const E=n.oxw();n.xp6(1),n.Oqu(E.label)}}function h(i,l){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,2),n.qZA())}function f(i,l){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function c(i,l){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function D(i,l){1&i&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let d=(()=>{class i extends N.l{constructor(E){super(E),this.ngControl=E}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return i.\u0275fac=function(E){return new(E||i)(n.Y36(M.a5,10))},i.\u0275cmp=n.Xpm({type:i,selectors:[["sz-ui-form-field-input"]],features:[n.qOj],decls:7,vars:8,consts:function(){let l,E,O,X;return l="This field is required",E="This field has insufficient length",O="This field exceeds the maximum length",X="Email is required",[[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,E,O,X]},template:function(E,O){1&E&&(n.TgZ(0,"mat-form-field"),n.YNc(1,Z,2,1,"mat-label",0),n._UZ(2,"input",1),n.YNc(3,h,2,0,"mat-error",0),n.YNc(4,f,2,0,"mat-error",0),n.YNc(5,c,2,0,"mat-error",0),n.YNc(6,D,2,0,"mat-error",0),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",O.label),n.xp6(1),n.Q6J("formControl",O.control)("value",O.value)("placeholder",O.placeholder),n.xp6(1),n.Q6J("ngIf",O.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",O.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",O.control.hasError("maxlength")),n.xp6(1),n.Q6J("ngIf",O.control.hasError("email")))},dependencies:[y.O5,M.Fj,M.JJ,M.oH,g.KE,g.hX,g.TO,U.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),i})()},8873:(j,L,_)=>{_.d(L,{J:()=>D});var N=_(2757),n=_(5879),M=_(6223),y=_(6814),g=_(9157),U=_(2032);function Z(d,i){if(1&d&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&d){const l=n.oxw();n.xp6(1),n.Oqu(l.label)}}function h(d,i){1&d&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function f(d,i){1&d&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function c(d,i){1&d&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let D=(()=>{class d extends N.l{constructor(l){super(l),this.ngControl=l}ngOnInit(){this.control=this.ngControl.control}writeValue(l){this.value=l}}return d.\u0275fac=function(l){return new(l||d)(n.Y36(M.a5,10))},d.\u0275cmp=n.Xpm({type:d,selectors:[["sz-ui-form-field-textarea"]],features:[n.qOj],decls:7,vars:7,consts:function(){let i,l,E;return i="This field is required",l="This field has insufficient length",E="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],i,l,E]},template:function(l,E){1&l&&(n.TgZ(0,"mat-form-field",0),n.YNc(1,Z,2,1,"mat-label",1),n.TgZ(2,"textarea",2),n._uU(3,"  "),n.qZA(),n.YNc(4,h,2,0,"mat-error",1),n.YNc(5,f,2,0,"mat-error",1),n.YNc(6,c,2,0,"mat-error",1),n.qZA()),2&l&&(n.xp6(1),n.Q6J("ngIf",E.label),n.xp6(1),n.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),n.xp6(2),n.Q6J("ngIf",E.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("maxlength")))},dependencies:[y.O5,M.Fj,M.JJ,M.oH,g.KE,g.hX,g.TO,U.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),d})()}}]);