"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[3],{9003:(W,h,s)=>{s.r(h),s.d(h,{AnalysesModule:()=>Ot});var c=s(6814),n=s(6223),M=s(4630),F=s(9014),p=s(2296),$=s(5195),v=s(5986),R=s(3680),f=s(8034),u=s(7700),L=s(617),T=s(2032),a=s(9038),l=s(7988),E=s(1476),d=s(5940),y=s(8525),U=s(3566),D=s(1545),Ce=s(5313),Me=s(2596),G=s(8109),Ae=s(6981),ce=s(6576),X=s(5738),Ne=s(4407),x=s(5436),pe=s(807),fe=s(5041),ge=s(8766),I=s(3572),J=s(2191),Pe=s(8652),b=s(6987),Re=s(9598),P=s(2119),g=s(8180),e=s(5879),Y=s(5348),w=s(9155),Ie=s(6439),N=s(9157),Q=s(4622),B=s(6091),he=s(5974),Le=s(851),De=s(5741),Ye=s(7336),Fe=s(2160);let $e=(()=>{class _ extends x.Ku{constructor(t,o,r){super(r),this.personService=t,this.fb=o,this.dialog=r,this.titles=Object.values(Ie.D),this.form=o.group({firstName:[null,[n.kI.required,n.kI.maxLength(128)]],lastName:o.control(null,[n.kI.maxLength(128)]),middleName:o.control(null,[n.kI.maxLength(128)]),fatherName:o.control(null,[n.kI.maxLength(128)]),motherName:o.control(null,[n.kI.maxLength(128)]),birthDate:o.control(null,[]),nationalityId:o.control(null,[]),ssn:o.control(null,[n.kI.maxLength(128)]),languageId:o.control(null,[n.kI.required]),sex:o.control(w.m.Male,[n.kI.required]),title:o.control(null,[])})}submit(){if(!this.IsValid())return;const t=this.form.value;this.personService.createPerson({languageId:t.languageId,sex:t.sex,title:t.title,birthDate:t.birthDate,nationalitiyId:t.nationalitiyId,ssn:t.ssn,names:[{firstName:t.firstName,lastName:t.lastName,middleName:t.middleName,fatherName:t.fatherName,motherName:t.motherName,languageId:t.languageId}]}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,g.q)(1)).subscribe(o=>{this.dialog.close(o)})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(Y.R),e.Y36(n.qu),e.Y36(u.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-people-common-create"]],features:[e._Bn([Y.R]),e.qOj],decls:27,vars:5,consts:function(){let i,t,o,r,S,m,C;return i="First name",t="Last name",o="Middle name",r="Father name",S="Mother name",m="SSN",C="BirthDate",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",i],["formControlName","lastName","label",t],["formControlName","middleName","label",o,1,"tw-flex-1"],["formControlName","fatherName","label",r],["formControlName","motherName","label",S],["formControlName","nationalityId"],["formControlName","ssn","label",m],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],[1,"tw-flex-1"],C,["matInput","","formControlName","birthDate",3,"matDatepicker"],["picker",""],["matSuffix","",3,"for"],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"medisy-form-field-nationality",8)(12,"sz-ui-form-field-input",9),e.qZA(),e._UZ(13,"medisy-form-field-language",10),e.TgZ(14,"div",2),e._UZ(15,"medisy-form-field-sex",11)(16,"medisy-form-field-title",12),e.qZA(),e.TgZ(17,"mat-form-field",13)(18,"mat-label"),e.SDv(19,14),e.qZA(),e._UZ(20,"input",15),e.TgZ(21,"mat-hint"),e._uU(22,"MM/DD/YYYY"),e.qZA(),e._UZ(23,"mat-datepicker",null,16)(25,"mat-datepicker-toggle",17),e.qZA()()(),e._UZ(26,"sz-ui-dialog-actions",18)),2&t){const r=e.MAs(24);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(18),e.Q6J("matDatepicker",r),e.xp6(5),e.Q6J("for",r),e.xp6(1),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,u.xY,T.Nt,N.KE,N.hX,N.bx,N.R9,f.Mq,f.hl,f.nW,Q.Y,B.t,he.g,Le.d,De.t,Ye.e,Fe.V],encapsulation:2}),_})();var V=s(9667),ve=s(9280),ye=s(4913);const Ue=["scanner"];function xe(_,i){1&_&&e._UZ(0,"mat-spinner")}function Ze(_,i){if(1&_&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&_){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.label)}}function ze(_,i){if(1&_){const t=e.EpF();e.TgZ(0,"zxing-scanner",10,11),e.NdJ("camerasFound",function(r){e.CHM(t);const S=e.oxw();return e.KtG(S.onCamerasFound(r))})("camerasNotFound",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onCamerasNotFound())})("scanSuccess",function(r){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanSuccess(r))})("scanError",function(r){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanError(r))})("scanFailure",function(r){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanFailure(r))}),e.qZA()}if(2&_){const t=e.oxw();e.Q6J("formats",t.allowedFormats)}}let Ge=(()=>{class _ extends x.uZ{constructor(t,o){super(o),this.personService=t,this.dialog=o,this.allowedFormats=[ve.BarcodeFormat.PDF_417],this.personInfo=null,this.mediaDevices=[],this.header.title="Scan"}onCamerasFound(t){this.mediaDevices=t}changeMediaDevice(t){this.scanner&&(this.scanner.device=t)}onCamerasNotFound(){this.alert.set({message:"Camera could not be found",type:V.N.error})}onScanSuccess(t){const o=this.getPersonFromSyrianId(t);o&&(console.log(o),this.personInfo=o)}onScanError(t){}onScanFailure(t){}getPersonFromSyrianId(t){const o=this.toUint8Array(t),r=[];let S=0,m=0;for(;o.length>=S&&o.length>0;)m=o.indexOf(35,S),m<0&&(m=o.length),r.push(o.slice(S,m)),S=m+1;return console.log(r),11!=r.length?null:{firstName:this.decodeUsingISO88591Windows1256(r[0]),lastName:this.decodeUsingISO88591Windows1256(r[1]),fatherFirstName:this.decodeUsingISO88591Windows1256(r[2]),motherName:this.decodeUsingISO88591Windows1256(r[3]),nationalNumber:this.decodeUsingISO88591Windows1256(r[5])}}decodeUsingISO88591Windows1256(t){const r=new TextDecoder("iso-8859-1").decode(t);return new TextDecoder("windows-1256").decode(this.toUint8Array(r))}toUint8Array(t){return Uint8Array.from(t.split("").map(o=>o.charCodeAt()))}findPerson(){this.personService.getPersons({firstName:this.personInfo?.firstName,lastName:this.personInfo?.lastName,pageIndex:1,pageSize:50})}submit(){this.personInfo?this.personService.createPerson({languageId:"",sex:w.m.Male,names:[{firstName:this.personInfo.firstName,lastName:this.personInfo.lastName,motherName:this.personInfo.motherName,languageId:""}]}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,g.q)(1)).subscribe(t=>{this.dialog.close(t)}):this.alert.set({message:"Could not read the code",type:V.N.error})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(Y.R),e.Y36(u.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-people-persons-common-person-scan"]],viewQuery:function(t,o){if(1&t&&e.Gf(Ue,5),2&t){let r;e.iGM(r=e.CRH())&&(o.scanner=r.first)}},features:[e._Bn([Y.R]),e.qOj],decls:11,vars:4,consts:function(){let i,t;return i="Camera",t="Close",[[3,"header"],[4,"ngIf"],[1,"tw-flex","tw-flex-col"],["placeholder",i,1,"tw-flex-1","tw-p-4",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"formats","camerasFound","camerasNotFound","scanSuccess","scanError","scanFailure",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],t,[3,"value"],[3,"formats","camerasFound","camerasNotFound","scanSuccess","scanError","scanFailure"],["scanner",""]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e.YNc(2,xe,1,0,"mat-spinner",1),e.TgZ(3,"div",2)(4,"mat-select",3),e.NdJ("selectionChange",function(S){return o.changeMediaDevice(S.value)}),e.YNc(5,Ze,2,2,"mat-option",4),e.qZA()(),e.TgZ(6,"div",2),e.YNc(7,ze,2,1,"zxing-scanner",5),e.qZA()(),e.TgZ(8,"mat-dialog-actions",6)(9,"button",7),e.NdJ("click",function(){return o.dialog.close()}),e.SDv(10,8),e.qZA()()),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("ngIf",o.indicator()),e.xp6(3),e.Q6J("ngForOf",o.mediaDevices),e.xp6(2),e.Q6J("ngIf",!o.personInfo))},dependencies:[c.sg,c.O5,u.xY,u.H8,p.lW,d.Ou,ye.S,y.gD,R.ey,B.t],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-dialog-content[_ngcontent-%COMP%]{padding:0}"]}),_})();var Xe=s(6893);let j=(()=>{class _ extends Xe.m{}return _.\u0275fac=function(){let i;return function(o){return(i||(i=e.n5z(_)))(o||_)}}(),_.\u0275dir=e.lG2({type:_,inputs:{displayFn:"displayFn"},features:[e.qOj]}),_})();var q=s(7398),k=s(7921),ee=s(3620),te=s(3997),oe=s(4664),Be=s(6007);function Je(_,i){if(1&_&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&_){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function be(_,i){if(1&_&&(e.TgZ(0,"mat-option",7)(1,"div",8)(2,"span"),e._uU(3),e.qZA()()()),2&_){const t=i.$implicit,o=e.oxw();e.Q6J("value",o.getOptionValue(t)),e.xp6(3),e.Oqu(o.getOptionContent(t))}}function Qe(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,9),e.qZA())}function qe(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,10),e.qZA())}function He(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,11),e.qZA())}function Ke(_,i){1&_&&e._UZ(0,"mat-progress-bar",12)}let We=(()=>{class _ extends j{constructor(t){super(t),this.ngControl=t,this.loading=!1,this.displayValue=o=>this.displayFn?this.displayFn(o):o}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}getOptionContent(t){return this.contentFn?this.contentFn(t):t}getOptionValue(t){return this.valueFn?this.valueFn(t):t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10))},_.\u0275cmp=e.Xpm({type:_,selectors:[["sz-ui-form-field-autocomplete"]],inputs:{items:"items",loading:"loading"},features:[e.qOj],decls:11,vars:9,consts:function(){let i,t,o;return i="This field is required",t="This field does not the minimum length",o="This field exceeds the maximum length",[[1,"container"],[4,"ngIf"],["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],i,t,o,["mode","indeterminate"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field"),e.YNc(2,Je,2,1,"mat-label",1),e._UZ(3,"input",2),e.TgZ(4,"mat-autocomplete",3,4),e.YNc(6,be,4,2,"mat-option",5),e.qZA(),e.YNc(7,Qe,2,0,"mat-error",1),e.YNc(8,qe,2,0,"mat-error",1),e.YNc(9,He,2,0,"mat-error",1),e.qZA(),e.YNc(10,Ke,1,0,"mat-progress-bar",6),e.qZA()),2&t){const r=e.MAs(5);e.xp6(2),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matAutocomplete",r)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayValue),e.xp6(2),e.Q6J("ngForOf",o.items),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("min")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("max")),e.xp6(1),e.Q6J("ngIf",o.loading)}},dependencies:[c.sg,c.O5,n.Fj,n.JJ,n.oH,N.KE,N.hX,N.TO,R.ey,T.Nt,Be.pW,M.XC,M.ZL],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}",".container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),_})(),ne=(()=>{class _ extends j{constructor(t,o){super(t),this.ngControl=t,this.testGroupService=o,this.label="Test Group",this.indicator=(0,e.tdS)(!0),this.contentFormat=r=>r.name,this.valueFormat=r=>this.valueFn?this.valueFn(r):r.id,this.items$=this.testGroupService.getTestGroups().pipe((0,g.q)(1),(0,q.U)(r=>r.items)).pipe((0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,k.O)(""),(0,ee.b)(400),(0,te.x)(),(0,oe.w)(t=>this.get("string"==typeof t?t:"")))}get(t){return this.testGroupService.getTestGroups({query:t,pageSize:10,pageIndex:1,sortBy:"name"}).pipe((0,g.q)(1),(0,P.sU)(this.indicator)).pipe((0,q.U)(o=>o.items))}writeValue(t){this.value=t}displayFormat(t){return t?t.name:""}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10),e.Y36(b.C))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-form-field-test-group"]],features:[e._Bn([b.C]),e.qOj],decls:2,vars:9,consts:[[3,"formControl","loading","items","label","displayFn","contentFn","valueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-autocomplete",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("loading",o.indicator())("items",e.lcZ(1,7,o.items$))("label",o.label)("displayFn",o.displayFormat)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[n.JJ,n.oH,We,c.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),_})();var we=s(6202);let Ve=(()=>{class _ extends x.Z2{constructor(t,o){super(o),this.fb=t,this.dialog=o,this.testGroupValueFormat=r=>r,this.referenceGroupValueFormat=r=>r,this.form=t.group({testGroup:t.control(null,[n.kI.required]),referenceGroup:t.control(null,[n.kI.required])})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.qu),e.Y36(u.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-create-test-group-add"]],features:[e._Bn([]),e.qOj],decls:6,vars:5,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroup",3,"valueFn"],["formControlName","referenceGroup",3,"valueFn"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-reference-gourp",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("valueFn",o.testGroupValueFormat),e.xp6(1),e.Q6J("valueFn",o.referenceGroupValueFormat),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,u.xY,Q.Y,B.t,ne,we.P],encapsulation:2}),_})();var _e=s(9692),je=s(1746),ke=s(8873),re=s(2516),se=s(4889);let H=(()=>{class _{transform(t){if(!t.birthDate)return"";const o=new Date,r=new Date(t.birthDate),m=~~((o.getTime()-r.getTime())/1e3/3600),C=~~(m/24),A=~~(C/7),Z=~~(C/30),z=~~(o.getUTCFullYear()-r.getUTCFullYear());return z>0?`${z} `+"Year":Z>0?`${Z} `+"Month":A>0?`${A} `+"Week":C>0?`${C} `+"Day":m>0?`${m} `+"Hour":""}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275pipe=e.Yjl({name:"personAge",type:_,pure:!0}),_})();var K=s(9060),et=s(2757);function tt(_,i){if(1&_&&(e.TgZ(0,"mat-option",6)(1,"div",7)(2,"span"),e._uU(3),e.ALo(4,"personName"),e.qZA(),e.TgZ(5,"small"),e._uU(6),e.ALo(7,"personAge"),e.qZA()()()),2&_){const t=i.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(e.lcZ(4,3,t)),e.xp6(3),e.Oqu(e.lcZ(7,5,t))}}function ot(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,8),e.qZA())}let nt=(()=>{class _ extends et.l{constructor(t,o,r,S){super(t),this.ngControl=t,this.personService=o,this.personNamePipe=r,this.personAgePipe=S,this.indicator=(0,e.tdS)(!0),this.displayFn=m=>{if(!m)return"";const C=this.personNamePipe.transform(m),A=this.personAgePipe.transform(m);return A?`${C}, ${A}`:`${C}`}}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,k.O)(""),(0,ee.b)(400),(0,te.x)(),(0,oe.w)(t=>{if("string"==typeof t){const o=t.split(" ");return 2===o.length?this.get(o[0],o[1]):this.get(o[0])}return this.get("")}))}get(t,o){return this.personService.getPersons({query:t,lastName:o,pageSize:10,pageIndex:1}).pipe((0,g.q)(1),(0,P.sU)(this.indicator)).pipe((0,q.U)(r=>r.items))}writeValue(t){this.value=t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10),e.Y36(Y.R),e.Y36(K.Y),e.Y36(H))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-form-field-person-search"]],features:[e._Bn([Y.R,K.Y,H]),e.qOj],decls:9,vars:7,consts:function(){let i,t;return i="Name, phone, or email",t="This field is required",[i,["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],t]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e.SDv(2,0),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",2,3),e.YNc(6,tt,8,7,"mat-option",4),e.ALo(7,"async"),e.qZA(),e.YNc(8,ot,2,0,"mat-error",5),e.qZA()),2&t){const r=e.MAs(5);e.xp6(3),e.Q6J("matAutocomplete",r)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,5,o.items$)),e.xp6(2),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[c.sg,c.O5,n.Fj,n.JJ,n.oH,T.Nt,N.KE,N.hX,N.TO,R.ey,M.XC,M.ZL,c.Ov,H,K.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),_})();function _t(_,i){1&_&&e.SDv(0,38)}function rt(_,i){1&_&&e.SDv(0,39)}function st(_,i){1&_&&e.SDv(0,40)}function it(_,i){1&_&&e.SDv(0,41)}function at(_,i){1&_&&e.SDv(0,42)}function lt(_,i){if(1&_&&(e.TgZ(0,"div",45)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&_){const t=i.$implicit;e.xp6(2),e.Oqu(t.key),e.xp6(2),e.Oqu(t.value)}}function Et(_,i){if(1&_&&(e.TgZ(0,"div",43)(1,"h4"),e._uU(2),e.qZA(),e.YNc(3,lt,5,2,"div",44),e.qZA()),2&_){const t=i.$implicit;e.xp6(2),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("ngForOf",t.items)}}let ie=(()=>{class _{constructor(t,o,r,S){this.analysisService=t,this.dialog=o,this.fb=r,this.router=S,this.testTypesDS=new I.b2,this.indicator=(0,e.tdS)(!1),this.alert=(0,e.tdS)(void 0),this.analysisForm=this.fb.group({laboratoryId:[null,[n.kI.required]],note:this.fb.control(null,[n.kI.maxLength(4096)])}),this.personForm=this.fb.group({person:this.fb.control(null,[n.kI.required])}),this.testListForm=this.fb.array([this.fb.group({testGroup:this.fb.control(null,n.kI.required),referenceGroup:this.fb.control(null,n.kI.required),note:this.fb.control(null,[n.kI.maxLength(4096)])})]),this.testsForm=this.fb.group({tests:this.testListForm}),this.form=this.fb.group({analysisForm:this.analysisForm,personForm:this.personForm,testsForm:this.testsForm}),this.testTypesDS.columns=[I.UC.position("position","#"),I.UC.text("testGroup","Test Group",m=>m.testGroup.name),I.UC.text("referenceGroup","Reference Group",m=>m.referenceGroup.name),J.h.menu([I.od.delete((m,C)=>{console.log(C),this.testTypesDS.delete(m),this.updateTestTypes()})])]}openPersonScanComponent(){this.dialog.open(Ge).afterClosed().pipe((0,g.q)(1)).subscribe(o=>{o&&this.personForm.get("person")?.setValue(o)})}openPersonCreateComponent(){this.dialog.open($e).afterClosed().pipe((0,g.q)(1)).subscribe(o=>{o&&this.personForm.controls.person.setValue(o)})}openTestTypeAddComponent(){this.dialog.open(Ve).afterClosed().pipe((0,g.q)(1)).subscribe(o=>{if(o){this.testTypesDS.push(o);const r=this.fb.group({referenceGroup:["",n.kI.required],note:["beginner",n.kI.required]});this.testListForm.push(r)}})}updateTestTypes(){}review(){const t=[];return t.push({title:"Person",items:this.generatePersonReview()}),t}validate(t){return!(t&&!t.valid&&(Object.keys(t.controls).forEach(o=>{t?.get(o)?.markAsTouched({onlySelf:!0})}),1))}generatePersonReview(){return[{key:"Name",value:this.personForm.value.person?.firstName}]}submit(){return this.validate(this.form)&&this.analysisService.createAnalysis({personId:this.personForm.value.person.id,referenceGroupId:this.personForm.value.referenceGroupId,laboratoryId:this.analysisForm.value.laboratoryId,note:this.analysisForm.value.note,testGroupIds:[]}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,g.q)(1)).subscribe(()=>{this.router.navigate(["/mlab/analyses"])}),!1}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(X.K),e.Y36(u.uw),e.Y36(n.qu),e.Y36(G.F0))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-create"]],features:[e._Bn([X.K])],decls:62,vars:16,consts:function(){let i,t,o,r,S,m,C,A,Z,z,ae,le,Ee,Se,me,Te,Oe,ue,de;return i="Create a new anlysis",t="Create",o="Scan",r="Next",S="Note",m="Back",C="Next",A="Add",Z="Back",z="Next",ae="Back",le="Next",Ee=" Cancel ",Se=" Create ",me="Person Information",Te="Analysis Information",Oe="Test Types",ue="Bill",de="Review",[["start","",1,"sz-h5"],i,["mat-icon-button","","routerLink","/mlab/analyses","end",""],[3,"alert"],[3,"linear"],["stepper",""],[3,"stepControl"],["matStepLabel",""],[1,"tw-flex","tw-flex-col","tw-py-4",3,"formGroup"],["formControlName","person",1,"tw-flex-1"],[3,"cls"],["start",""],["mat-button","",3,"click"],t,o,["end","","mat-button","","matStepperNext",""],r,["formControlName","laboratoryId"],["formControlName","note","label",S],["end",""],["mat-button","","matStepperPrevious",""],m,["mat-button","","matStepperNext",""],C,[3,"dataSource"],A,Z,z,[3,"formGroup"],[1,"tw-flex","tw-flex-col"],[1,"end"],ae,le,["class","list",4,"ngFor","ngForOf"],["routerLink","/mlab/analyses","mat-button","","type","button"],Ee,["mat-raised-button","","color","primary",3,"disabled","click"],Se,me,Te,Oe,ue,de,[1,"list"],["class","list-item-horizontal",4,"ngFor","ngForOf"],[1,"list-item-horizontal"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA(),e.TgZ(3,"button",2)(4,"mat-icon"),e._uU(5,"arrow_back"),e.qZA()()(),e._UZ(6,"sz-ui-alert",3),e.TgZ(7,"mat-vertical-stepper",4,5)(9,"mat-step",6),e.YNc(10,_t,1,0,"ng-template",7),e.TgZ(11,"form",8),e._UZ(12,"medisy-form-field-person-search",9),e.qZA(),e.TgZ(13,"sz-ui-header-basic",10)(14,"div",11)(15,"button",12),e.NdJ("click",function(){return o.openPersonCreateComponent()}),e.SDv(16,13),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return o.openPersonScanComponent()}),e.SDv(18,14),e.qZA()(),e.TgZ(19,"button",15),e.SDv(20,16),e.qZA()()(),e.TgZ(21,"mat-step",6),e.YNc(22,rt,1,0,"ng-template",7),e.TgZ(23,"form",8),e._UZ(24,"medisy-form-field-laboratory",17)(25,"sz-ui-form-field-textarea",18),e.qZA(),e.TgZ(26,"sz-ui-header-basic",10)(27,"div",19)(28,"button",20),e.SDv(29,21),e.qZA(),e.TgZ(30,"button",22),e.SDv(31,23),e.qZA()()()(),e.TgZ(32,"mat-step",6),e.YNc(33,st,1,0,"ng-template",7),e.TgZ(34,"form",8),e._UZ(35,"sz-ui-table",24),e.qZA(),e.TgZ(36,"sz-ui-header-basic",10)(37,"div",11)(38,"button",12),e.NdJ("click",function(){return o.openTestTypeAddComponent()}),e.SDv(39,25),e.qZA()(),e.TgZ(40,"div",19)(41,"button",20),e.SDv(42,26),e.qZA(),e.TgZ(43,"button",22),e.SDv(44,27),e.qZA()()()(),e.TgZ(45,"mat-step",6)(46,"form",28),e.YNc(47,it,1,0,"ng-template",7),e._UZ(48,"div",29),e.TgZ(49,"div",30)(50,"button",20),e.SDv(51,31),e.qZA(),e.TgZ(52,"button",22),e.SDv(53,32),e.qZA()()()(),e.TgZ(54,"mat-step"),e.YNc(55,at,1,0,"ng-template",7),e.YNc(56,Et,4,2,"div",33),e.TgZ(57,"div",30)(58,"button",34),e.SDv(59,35),e.qZA(),e.TgZ(60,"button",36),e.NdJ("click",function(){return o.submit()}),e.SDv(61,37),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("alert",o.alert()),e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",o.personForm),e.xp6(2),e.Q6J("formGroup",o.personForm),e.xp6(2),e.Q6J("cls",""),e.xp6(8),e.Q6J("stepControl",o.analysisForm),e.xp6(2),e.Q6J("formGroup",o.analysisForm),e.xp6(3),e.Q6J("cls",""),e.xp6(6),e.Q6J("stepControl",o.testsForm),e.xp6(2),e.Q6J("formGroup",o.testsForm),e.xp6(1),e.Q6J("dataSource",o.testTypesDS),e.xp6(1),e.Q6J("cls",""),e.xp6(9),e.Q6J("stepControl",o.form),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(10),e.Q6J("ngForOf",o.review()),e.xp6(4),e.Q6J("disabled",o.indicator()))},dependencies:[c.sg,n._Y,n.JJ,n.JL,n.sg,n.u,G.rH,_e.K,je.R,ke.J,re.z,se.w,nt,L.Hw,p.lW,p.RK,D.C0,D.VY,D.Vq,D.Ic,D.fd],encapsulation:2}),_})(),St=(()=>{class _ extends x.Z2{constructor(t,o,r){super(o),this.fb=t,this.dialog=o,this.data=r,this.form=t.group({testGroupIds:[r.testGroupIds],laboratoryIds:[r.laboratoryIds],personIds:[r.personIds],startDate:[r.startDate],endDate:[r.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.qu),e.Y36(u.so),e.Y36(u.WI))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-filter"]],features:[e._Bn([]),e.qOj],decls:17,vars:9,consts:function(){let i,t,o;return i="Date",t="Start date",o="End date",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],[1,"tw-flex-1"],i,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",o,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-laboratory",3),e.TgZ(5,"mat-form-field",4)(6,"mat-label"),e.SDv(7,5),e.qZA(),e.TgZ(8,"mat-date-range-input",6),e._UZ(9,"input",7)(10,"input",8),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(13,"mat-datepicker-toggle",9)(14,"mat-date-range-picker",null,10),e.qZA()()(),e._UZ(16,"sz-ui-dialog-actions",11)),2&t){const r=e.MAs(15);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(4),e.Q6J("rangePicker",r)("comparisonStart",o.form.controls.startDate.value)("comparisonEnd",o.form.controls.endDate.value),e.xp6(5),e.Q6J("for",r),e.xp6(3),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,u.xY,N.KE,N.hX,N.bx,N.R9,Q.Y,B.t,se.w,ne,f.nW,f.wx,f.zY,f.By,f._g],encapsulation:2}),_})();var mt=s(9288);const Tt=[{path:"",component:(()=>{class _{constructor(t,o){this.dialog=t,this.analysisService=o,this.dataSource=new I.b2(Re.J.pagedSorted("-createdAt")),this.dataSource.columns=[I.UC.hyperlink("code","Code",r=>r.id),J.h.createdAt(),J.h.menu([])],this.get()}openCreateComponent(){this.dialog.open(ie).afterClosed().pipe((0,g.q)(1)).subscribe(o=>{this.dataSource.push(o)})}openFilterComponent(){this.dialog.open(St,{data:this.dataSource.filterModel}).afterClosed().pipe((0,g.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.analysisService.getAnalyses(this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,g.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(u.uw),e.Y36(X.K))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses"]],features:[e._Bn([b.C,Pe.v])],decls:8,vars:4,consts:function(){let i,t;return i="Analyses",t="Add",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[G.rH,_e.K,mt.f,re.z,p.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),_})()},{path:"create",component:ie}];let Ot=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({providers:[X.K],imports:[c.ez,n.u5,n.UX,G.Bz.forChild(Tt),u.Is,M.Bb,Ce.p0,E.TU,T.c,I.Vn,ge.h,Ne.E,x.su,pe.g,fe.n,Ae.F,v.p9,l.Tx,L.Ps,p.ot,y.LD,D.T5,Me.AV,a.ie,U.JX,R.XK,$.QW,F.g,f.FA,d.Cq,ce.f]}),_})()},5974:(W,h,s)=>{s.d(h,{g:()=>T});var c=s(2757),n=s(5879),M=s(6223),F=s(6814),p=s(9157),$=s(2032);function v(a,l){if(1&a&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&a){const E=n.oxw();n.xp6(1),n.Oqu(E.label)}}function R(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,2),n.qZA())}function f(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function u(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function L(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let T=(()=>{class a extends c.l{constructor(E){super(E),this.ngControl=E}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return a.\u0275fac=function(E){return new(E||a)(n.Y36(M.a5,10))},a.\u0275cmp=n.Xpm({type:a,selectors:[["sz-ui-form-field-input"]],features:[n.qOj],decls:7,vars:8,consts:function(){let l,E,d,y;return l="This field is required",E="This field has insufficient length",d="This field exceeds the maximum length",y="Email is required",[[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,E,d,y]},template:function(E,d){1&E&&(n.TgZ(0,"mat-form-field"),n.YNc(1,v,2,1,"mat-label",0),n._UZ(2,"input",1),n.YNc(3,R,2,0,"mat-error",0),n.YNc(4,f,2,0,"mat-error",0),n.YNc(5,u,2,0,"mat-error",0),n.YNc(6,L,2,0,"mat-error",0),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",d.label),n.xp6(1),n.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),n.xp6(1),n.Q6J("ngIf",d.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",d.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",d.control.hasError("maxlength")),n.xp6(1),n.Q6J("ngIf",d.control.hasError("email")))},dependencies:[F.O5,M.Fj,M.JJ,M.oH,p.KE,p.hX,p.TO,$.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})()},8873:(W,h,s)=>{s.d(h,{J:()=>L});var c=s(2757),n=s(5879),M=s(6223),F=s(6814),p=s(9157),$=s(2032);function v(T,a){if(1&T&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&T){const l=n.oxw();n.xp6(1),n.Oqu(l.label)}}function R(T,a){1&T&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function f(T,a){1&T&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function u(T,a){1&T&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let L=(()=>{class T extends c.l{constructor(l){super(l),this.ngControl=l}ngOnInit(){this.control=this.ngControl.control}writeValue(l){this.value=l}}return T.\u0275fac=function(l){return new(l||T)(n.Y36(M.a5,10))},T.\u0275cmp=n.Xpm({type:T,selectors:[["sz-ui-form-field-textarea"]],features:[n.qOj],decls:7,vars:7,consts:function(){let a,l,E;return a="This field is required",l="This field has insufficient length",E="This field exceeds the maximum length",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],a,l,E]},template:function(l,E){1&l&&(n.TgZ(0,"mat-form-field",0),n.YNc(1,v,2,1,"mat-label",1),n.TgZ(2,"textarea",2),n._uU(3,"  "),n.qZA(),n.YNc(4,R,2,0,"mat-error",1),n.YNc(5,f,2,0,"mat-error",1),n.YNc(6,u,2,0,"mat-error",1),n.qZA()),2&l&&(n.xp6(1),n.Q6J("ngIf",E.label),n.xp6(1),n.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),n.xp6(2),n.Q6J("ngIf",E.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("maxlength")))},dependencies:[F.O5,M.Fj,M.JJ,M.oH,p.KE,p.hX,p.TO,$.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),T})()}}]);