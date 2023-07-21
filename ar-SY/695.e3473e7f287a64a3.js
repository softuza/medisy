"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[695],{3695:(W,I,r)=>{r.r(I),r.d(I,{AnalysesModule:()=>Tt});var c=r(6814),n=r(6223),A=r(4630),Y=r(9014),p=r(2296),F=r(5195),y=r(5986),g=r(3680),N=r(8034),O=r(7700),h=r(617),m=r(2032),a=r(9038),l=r(7988),E=r(1476),M=r(5940),$=r(8525),v=r(3566),L=r(1545),Me=r(5313),Ce=r(2596),X=r(8109),Ae=r(6981),ce=r(6576),G=r(5738),ue=r(4407),U=r(5436),pe=r(5041),Ne=r(8766),Z=r(3572),B=r(2191),fe=r(8652),b=r(4485),Pe=r(9598),P=r(2119),f=r(8180),e=r(5879),D=r(5348),ge=r(6439),u=r(9157),Q=r(4622),J=r(6091),Re=r(5974),Ie=r(851),he=r(5741),Le=r(7336);let De=(()=>{class _ extends U.Ku{constructor(t,o,s){super(s),this.personService=t,this.fb=o,this.dialog=s,this.titles=Object.values(ge.D),this.form=o.group({firstName:[null,[n.kI.required,n.kI.maxLength(128)]],lastName:[null,[]],middleName:[null,[]],fatherName:[null,[]],motherName:[null,[]],birthDate:[null,[]],languageId:[null,[n.kI.required]],sex:[null,[n.kI.required]],title:[null,[]]})}submit(){if(!this.IsValid())return;const t=this.form.value;this.personService.createPerson({languageId:t.languageId,sex:t.sex,title:t.title,birthDate:t.birthDate,names:[{firstName:t.firstName,lastName:t.lastName,middleName:t.middleName,fatherName:t.fatherName,motherName:t.motherName,languageId:t.languageId}]}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,f.q)(1)).subscribe(o=>{this.dialog.close(o)})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(D.R),e.Y36(n.qu),e.Y36(O.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-people-common-create"]],features:[e._Bn([D.R]),e.qOj],decls:24,vars:5,consts:function(){let i,t,o,s,S,T;return i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",t="\u0627\u0644\u0643\u0646\u064A\u0629",o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",s="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628",S="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645",T="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",i],["formControlName","lastName","label",t],["formControlName","middleName","label",o,1,"tw-flex-1"],["formControlName","fatherName","label",s],["formControlName","motherName","label",S],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],[1,"tw-flex-1"],T,["matInput","","formControlName","birthDate",3,"matDatepicker"],["picker",""],["matSuffix","",3,"for"],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),e.qZA(),e._UZ(10,"medisy-form-field-language",8),e.TgZ(11,"div",2),e._UZ(12,"medisy-form-field-sex",9)(13,"medisy-form-field-title",10),e.qZA(),e.TgZ(14,"mat-form-field",11)(15,"mat-label"),e.SDv(16,12),e.qZA(),e._UZ(17,"input",13),e.TgZ(18,"mat-hint"),e._uU(19,"MM/DD/YYYY"),e.qZA(),e._UZ(20,"mat-datepicker",null,14)(22,"mat-datepicker-toggle",15),e.qZA()()(),e._UZ(23,"sz-ui-dialog-actions",16)),2&t){const s=e.MAs(21);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(15),e.Q6J("matDatepicker",s),e.xp6(5),e.Q6J("for",s),e.xp6(1),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,O.xY,m.Nt,u.KE,u.hX,u.bx,u.R9,N.Mq,N.hl,N.nW,Q.Y,J.t,Re.g,Ie.d,he.t,Le.e],encapsulation:2}),_})();var Ye=r(9155),w=r(9667),Fe=r(9280),ye=r(4913);const $e=["scanner"];function ve(_,i){1&_&&e._UZ(0,"mat-spinner")}function Ue(_,i){if(1&_&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&_){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.label)}}function Ze(_,i){if(1&_){const t=e.EpF();e.TgZ(0,"zxing-scanner",10,11),e.NdJ("camerasFound",function(s){e.CHM(t);const S=e.oxw();return e.KtG(S.onCamerasFound(s))})("camerasNotFound",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onCamerasNotFound())})("scanSuccess",function(s){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanSuccess(s))})("scanError",function(s){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanError(s))})("scanFailure",function(s){e.CHM(t);const S=e.oxw();return e.KtG(S.onScanFailure(s))}),e.qZA()}if(2&_){const t=e.oxw();e.Q6J("formats",t.allowedFormats)}}let xe=(()=>{class _ extends U.uZ{constructor(t,o){super(o),this.personService=t,this.dialog=o,this.allowedFormats=[Fe.BarcodeFormat.PDF_417],this.personInfo=null,this.mediaDevices=[],this.header.title="\u0645\u0633\u062D \u0636\u0648\u0626\u064A"}onCamerasFound(t){this.mediaDevices=t}changeMediaDevice(t){this.scanner&&(this.scanner.device=t)}onCamerasNotFound(){this.alert.set({message:"Camera could not be found",type:w.N.error})}onScanSuccess(t){const o=this.getPersonFromSyrianId(t);o&&(console.log(o),this.personInfo=o)}onScanError(t){}onScanFailure(t){}getPersonFromSyrianId(t){const o=this.toUint8Array(t),s=[];let S=0,T=0;for(;o.length>=S&&o.length>0;)T=o.indexOf(35,S),T<0&&(T=o.length),s.push(o.slice(S,T)),S=T+1;return console.log(s),11!=s.length?null:{firstName:this.decodeUsingISO88591Windows1256(s[0]),lastName:this.decodeUsingISO88591Windows1256(s[1]),fatherFirstName:this.decodeUsingISO88591Windows1256(s[2]),motherName:this.decodeUsingISO88591Windows1256(s[3]),nationalNumber:this.decodeUsingISO88591Windows1256(s[5])}}decodeUsingISO88591Windows1256(t){const s=new TextDecoder("iso-8859-1").decode(t);return new TextDecoder("windows-1256").decode(this.toUint8Array(s))}toUint8Array(t){return Uint8Array.from(t.split("").map(o=>o.charCodeAt()))}findPerson(){this.personService.getPersons({firstName:this.personInfo?.firstName,lastName:this.personInfo?.lastName,pageIndex:1,pageSize:50})}submit(){this.personInfo?this.personService.createPerson({languageId:"",sex:Ye.m.Male,names:[{firstName:this.personInfo.firstName,lastName:this.personInfo.lastName,motherName:this.personInfo.motherName,languageId:""}]}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,f.q)(1)).subscribe(t=>{this.dialog.close(t)}):this.alert.set({message:"Could not read the code",type:w.N.error})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(D.R),e.Y36(O.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-people-persons-common-person-scan"]],viewQuery:function(t,o){if(1&t&&e.Gf($e,5),2&t){let s;e.iGM(s=e.CRH())&&(o.scanner=s.first)}},features:[e._Bn([D.R]),e.qOj],decls:11,vars:4,consts:function(){let i,t;return i="\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",t="\u0625\u063A\u0644\u0627\u0642",[[3,"header"],[4,"ngIf"],[1,"tw-flex","tw-flex-col"],["placeholder",i,1,"tw-flex-1","tw-p-4",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"formats","camerasFound","camerasNotFound","scanSuccess","scanError","scanFailure",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],t,[3,"value"],[3,"formats","camerasFound","camerasNotFound","scanSuccess","scanError","scanFailure"],["scanner",""]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e.YNc(2,ve,1,0,"mat-spinner",1),e.TgZ(3,"div",2)(4,"mat-select",3),e.NdJ("selectionChange",function(S){return o.changeMediaDevice(S.value)}),e.YNc(5,Ue,2,2,"mat-option",4),e.qZA()(),e.TgZ(6,"div",2),e.YNc(7,Ze,2,1,"zxing-scanner",5),e.qZA()(),e.TgZ(8,"mat-dialog-actions",6)(9,"button",7),e.NdJ("click",function(){return o.dialog.close()}),e.SDv(10,8),e.qZA()()),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("ngIf",o.indicator()),e.xp6(3),e.Q6J("ngForOf",o.mediaDevices),e.xp6(2),e.Q6J("ngIf",!o.personInfo))},dependencies:[c.sg,c.O5,O.xY,O.H8,p.lW,M.Ou,ye.S,$.gD,g.ey,J.t],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-dialog-content[_ngcontent-%COMP%]{padding:0}"]}),_})();var ze=r(6893);let j=(()=>{class _ extends ze.m{}return _.\u0275fac=function(){let i;return function(o){return(i||(i=e.n5z(_)))(o||_)}}(),_.\u0275dir=e.lG2({type:_,inputs:{displayFn:"displayFn"},features:[e.qOj]}),_})();var q=r(7398),V=r(7921),k=r(3620),ee=r(3997),te=r(4664),Xe=r(6007);function Ge(_,i){if(1&_&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&_){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function Be(_,i){if(1&_&&(e.TgZ(0,"mat-option",7)(1,"div",8)(2,"span"),e._uU(3),e.qZA()()()),2&_){const t=i.$implicit,o=e.oxw();e.Q6J("value",o.getOptionValue(t)),e.xp6(3),e.Oqu(o.getOptionContent(t))}}function Je(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,9),e.qZA())}function be(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,10),e.qZA())}function Qe(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,11),e.qZA())}function qe(_,i){1&_&&e._UZ(0,"mat-progress-bar",12)}let He=(()=>{class _ extends j{constructor(t){super(t),this.ngControl=t,this.loading=!1,this.displayValue=o=>this.displayFn?this.displayFn(o):o}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}getOptionContent(t){return this.contentFn?this.contentFn(t):t}getOptionValue(t){return this.valueFn?this.valueFn(t):t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10))},_.\u0275cmp=e.Xpm({type:_,selectors:[["sz-ui-form-field-autocomplete"]],inputs:{items:"items",loading:"loading"},features:[e.qOj],decls:11,vars:9,consts:function(){let i,t,o;return i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644",o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[4,"ngIf"],["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],i,t,o,["mode","indeterminate"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field"),e.YNc(2,Ge,2,1,"mat-label",1),e._UZ(3,"input",2),e.TgZ(4,"mat-autocomplete",3,4),e.YNc(6,Be,4,2,"mat-option",5),e.qZA(),e.YNc(7,Je,2,0,"mat-error",1),e.YNc(8,be,2,0,"mat-error",1),e.YNc(9,Qe,2,0,"mat-error",1),e.qZA(),e.YNc(10,qe,1,0,"mat-progress-bar",6),e.qZA()),2&t){const s=e.MAs(5);e.xp6(2),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matAutocomplete",s)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayValue),e.xp6(2),e.Q6J("ngForOf",o.items),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("min")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("max")),e.xp6(1),e.Q6J("ngIf",o.loading)}},dependencies:[c.sg,c.O5,n.Fj,n.JJ,n.oH,u.KE,u.hX,u.TO,g.ey,m.Nt,Xe.pW,A.XC,A.ZL],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}",".container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),_})(),oe=(()=>{class _ extends j{constructor(t,o){super(t),this.ngControl=t,this.testTypeService=o,this.label="\u0646\u0648\u0639 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",this.indicator=(0,e.tdS)(!0),this.contentFormat=s=>s.name,this.items$=this.testTypeService.getTestTypes().pipe((0,f.q)(1),(0,q.U)(s=>s.items)).pipe((0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,V.O)(""),(0,k.b)(400),(0,ee.x)(),(0,te.w)(t=>this.get("string"==typeof t?t:"")))}get(t){return this.testTypeService.getTestTypes({query:t,pageSize:10,pageIndex:1,sortBy:"name"}).pipe((0,f.q)(1),(0,P.sU)(this.indicator)).pipe((0,q.U)(o=>o.items))}writeValue(t){this.value=t}displayFormat(t){return t?t.name:""}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10),e.Y36(b.D))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-form-field-test-type"]],features:[e._Bn([b.D]),e.qOj],decls:2,vars:8,consts:[[3,"formControl","loading","items","label","displayFn","contentFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-autocomplete",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("loading",o.indicator())("items",e.lcZ(1,6,o.items$))("label",o.label)("displayFn",o.displayFormat)("contentFn",o.contentFormat)},dependencies:[n.JJ,n.oH,He,c.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),_})(),Ke=(()=>{class _ extends U.Z2{constructor(t,o){super(o),this.fb=t,this.dialog=o,this.valueFormat=s=>s,this.form=t.group({testType:t.control(null,[n.kI.required])})}submit(){this.IsValid()&&this.dialog.close(this.form.value.testType)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.qu),e.Y36(O.so))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-create-test-type-add"]],features:[e._Bn([]),e.qOj],decls:5,vars:4,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testType",3,"valueFn"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("valueFn",o.valueFormat),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,O.xY,Q.Y,J.t,oe],encapsulation:2}),_})();var ne=r(9692),We=r(1746),we=r(8873),_e=r(2516),re=r(4889),je=r(6202);let H=(()=>{class _{transform(t){if(!t.birthDate)return"";const o=new Date,s=new Date(t.birthDate),T=~~((o.getTime()-s.getTime())/1e3/3600),C=~~(T/24),R=~~(C/7),x=~~(C/30),z=~~(o.getUTCFullYear()-s.getUTCFullYear());return z>0?`${z} `+"\u0633\u0646\u0629":x>0?`${x} `+"\u0634\u0647\u0631":R>0?`${R} `+"\u0623\u0633\u0628\u0648\u0639":C>0?`${C} `+"\u064A\u0648\u0645":T>0?`${T} `+"\u0633\u0627\u0639\u0629":""}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275pipe=e.Yjl({name:"personAge",type:_,pure:!0}),_})();var K=r(9060),Ve=r(2757);function ke(_,i){if(1&_&&(e.TgZ(0,"mat-option",6)(1,"div",7)(2,"span"),e._uU(3),e.ALo(4,"personName"),e.qZA(),e.TgZ(5,"small"),e._uU(6),e.ALo(7,"personAge"),e.qZA()()()),2&_){const t=i.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(e.lcZ(4,3,t)),e.xp6(3),e.Oqu(e.lcZ(7,5,t))}}function et(_,i){1&_&&(e.TgZ(0,"mat-error"),e.SDv(1,8),e.qZA())}let tt=(()=>{class _ extends Ve.l{constructor(t,o,s,S){super(t),this.ngControl=t,this.personService=o,this.personNamePipe=s,this.personAgePipe=S,this.indicator=(0,e.tdS)(!0),this.displayFn=T=>{if(!T)return"";const C=this.personNamePipe.transform(T),R=this.personAgePipe.transform(T);return R?`${C}, ${R}`:`${C}`}}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,V.O)(""),(0,k.b)(400),(0,ee.x)(),(0,te.w)(t=>{if("string"==typeof t){const o=t.split(" ");return 2===o.length?this.get(o[0],o[1]):this.get(o[0])}return this.get("")}))}get(t,o){return this.personService.getPersons({query:t,lastName:o,pageSize:10,pageIndex:1}).pipe((0,f.q)(1),(0,P.sU)(this.indicator)).pipe((0,q.U)(s=>s.items))}writeValue(t){this.value=t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.a5,10),e.Y36(D.R),e.Y36(K.Y),e.Y36(H))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-form-field-person-search"]],features:[e._Bn([D.R,K.Y,H]),e.qOj],decls:9,vars:7,consts:function(){let i,t;return i="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[i,["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],t]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e.SDv(2,0),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",2,3),e.YNc(6,ke,8,7,"mat-option",4),e.ALo(7,"async"),e.qZA(),e.YNc(8,et,2,0,"mat-error",5),e.qZA()),2&t){const s=e.MAs(5);e.xp6(3),e.Q6J("matAutocomplete",s)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,5,o.items$)),e.xp6(2),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[c.sg,c.O5,n.Fj,n.JJ,n.oH,m.Nt,u.KE,u.hX,u.TO,g.ey,A.XC,A.ZL,c.Ov,H,K.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),_})();function ot(_,i){1&_&&e.SDv(0,39)}function nt(_,i){1&_&&e.SDv(0,40)}function _t(_,i){1&_&&e.SDv(0,41)}function rt(_,i){1&_&&e.SDv(0,42)}function st(_,i){1&_&&e.SDv(0,43)}function it(_,i){if(1&_&&(e.TgZ(0,"div",46)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&_){const t=i.$implicit;e.xp6(2),e.Oqu(t.key),e.xp6(2),e.Oqu(t.value)}}function at(_,i){if(1&_&&(e.TgZ(0,"div",44)(1,"h4"),e._uU(2),e.qZA(),e.YNc(3,it,5,2,"div",45),e.qZA()),2&_){const t=i.$implicit;e.xp6(2),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("ngForOf",t.items)}}let se=(()=>{class _{constructor(t,o,s,S){this.analysisService=t,this.dialog=o,this.fb=s,this.router=S,this.testTypesDS=new Z.b2,this.indicator=(0,e.tdS)(!1),this.alert=(0,e.tdS)(void 0),this.personForm=this.fb.group({person:this.fb.control(null,[n.kI.required]),referenceGroupId:this.fb.control(null,[n.kI.required])}),this.testTypesForm=this.fb.group({testTypes:[null,[n.kI.required]]}),this.laboratoryForm=this.fb.group({laboratoryId:[null,[n.kI.required]],note:[null,[n.kI.maxLength(4096)]]}),this.form=this.fb.group({personForm:this.personForm,testTypeForm:this.testTypesForm,laboratoryForm:this.laboratoryForm}),this.testTypesDS.columns=[B.h.nameText(),B.h.menu([Z.od.delete(T=>{this.testTypesDS.delete(T.id),this.updateTestTypes()})])]}openPersonScanComponent(){this.dialog.open(xe).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{o&&this.personForm.get("person")?.setValue(o)})}openPersonCreateComponent(){this.dialog.open(De).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{o&&this.personForm.controls.person.setValue(o)})}openTestTypeAddComponent(){this.dialog.open(Ke).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{o&&(this.testTypesDS.push(o),this.updateTestTypes())})}updateTestTypes(){this.testTypesForm.controls.testTypes.setValue(this.testTypesDS.data)}review(){const t=[];return t.push({title:"\u0627\u0644\u0634\u062E\u0635",items:this.generatePersonReview()}),t}validate(t){return!(t&&!t.valid&&(Object.keys(t.controls).forEach(o=>{t?.get(o)?.markAsTouched({onlySelf:!0})}),1))}generatePersonReview(){return[{key:"\u0627\u0644\u0627\u0633\u0645",value:this.personForm.value.person?.firstName}]}submit(){return this.validate(this.form)&&this.analysisService.createAnalysis({personId:this.personForm.value.person.id,referenceGroupId:this.personForm.value.referenceGroupId,laboratoryId:this.laboratoryForm.value.laboratoryId,note:this.laboratoryForm.value.note,testTypeIds:this.testTypesForm.value.testTypes.map(t=>t.id)}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,f.q)(1)).subscribe(()=>{this.router.navigate(["/mlab/analyses"])}),!1}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(G.K),e.Y36(O.uw),e.Y36(n.qu),e.Y36(X.F0))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-create"]],features:[e._Bn([G.K])],decls:63,vars:17,consts:function(){let i,t,o,s,S,T,C,R,x,z,ie,ae,le,Ee,Se,me,Te,de,Oe;return i="\u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F",t="\u0625\u0646\u0634\u0627\u0621",o="\u0645\u0633\u062D \u0636\u0648\u0626\u064A",s="\u0627\u0644\u062A\u0627\u0644\u064A",S="\u0645\u0644\u0627\u062D\u0638\u0629",T="\u0631\u062C\u0648\u0639",C="\u0627\u0644\u062A\u0627\u0644\u064A",R="\u0625\u0636\u0627\u0641\u0629",x="\u0631\u062C\u0648\u0639",z="\u0627\u0644\u062A\u0627\u0644\u064A",ie="\u0631\u062C\u0648\u0639",ae="\u0627\u0644\u062A\u0627\u0644\u064A",le="\u0625\u0644\u063A\u0627\u0621",Ee="\u0625\u0646\u0634\u0627\u0621",Se="\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635",me="\u0627\u0644\u0645\u062E\u0628\u0631",Te="\u0627\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",de="\u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",Oe="\u0645\u0631\u0627\u062C\u0639\u0629",[["start","",1,"sz-h5"],i,["mat-icon-button","","routerLink","/mlab/analyses","end",""],[3,"alert"],[3,"linear"],["stepper",""],[3,"stepControl"],["matStepLabel",""],[1,"tw-flex","tw-flex-col","tw-py-4",3,"formGroup"],["formControlName","person",1,"tw-flex-1"],["formControlName","referenceGroupId",3,"person"],[3,"cls"],["start",""],["mat-button","",3,"click"],t,o,["end","","mat-button","","matStepperNext",""],s,["formControlName","laboratoryId"],["formControlName","note","label",S],["end",""],["mat-button","","matStepperPrevious",""],T,["mat-button","","matStepperNext",""],C,[3,"dataSource"],R,x,z,[3,"formGroup"],[1,"tw-flex","tw-flex-col"],[1,"end"],ie,ae,["class","list",4,"ngFor","ngForOf"],["routerLink","/mlab/analyses","mat-button","","type","button"],le,["mat-raised-button","","color","primary",3,"disabled","click"],Ee,Se,me,Te,de,Oe,[1,"list"],["class","list-item-horizontal",4,"ngFor","ngForOf"],[1,"list-item-horizontal"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA(),e.TgZ(3,"button",2)(4,"mat-icon"),e._uU(5,"arrow_back"),e.qZA()()(),e._UZ(6,"sz-ui-alert",3),e.TgZ(7,"mat-vertical-stepper",4,5)(9,"mat-step",6),e.YNc(10,ot,1,0,"ng-template",7),e.TgZ(11,"form",8),e._UZ(12,"medisy-form-field-person-search",9)(13,"medisy-form-field-reference-gourp",10),e.qZA(),e.TgZ(14,"sz-ui-header-basic",11)(15,"div",12)(16,"button",13),e.NdJ("click",function(){return o.openPersonCreateComponent()}),e.SDv(17,14),e.qZA(),e.TgZ(18,"button",13),e.NdJ("click",function(){return o.openPersonScanComponent()}),e.SDv(19,15),e.qZA()(),e.TgZ(20,"button",16),e.SDv(21,17),e.qZA()()(),e.TgZ(22,"mat-step",6),e.YNc(23,nt,1,0,"ng-template",7),e.TgZ(24,"form",8),e._UZ(25,"medisy-form-field-laboratory",18)(26,"sz-ui-form-field-textarea",19),e.qZA(),e.TgZ(27,"sz-ui-header-basic",11)(28,"div",20)(29,"button",21),e.SDv(30,22),e.qZA(),e.TgZ(31,"button",23),e.SDv(32,24),e.qZA()()()(),e.TgZ(33,"mat-step",6),e.YNc(34,_t,1,0,"ng-template",7),e.TgZ(35,"form",8),e._UZ(36,"sz-ui-table",25),e.qZA(),e.TgZ(37,"sz-ui-header-basic",11)(38,"div",12)(39,"button",13),e.NdJ("click",function(){return o.openTestTypeAddComponent()}),e.SDv(40,26),e.qZA()(),e.TgZ(41,"div",20)(42,"button",21),e.SDv(43,27),e.qZA(),e.TgZ(44,"button",23),e.SDv(45,28),e.qZA()()()(),e.TgZ(46,"mat-step",6)(47,"form",29),e.YNc(48,rt,1,0,"ng-template",7),e._UZ(49,"div",30),e.TgZ(50,"div",31)(51,"button",21),e.SDv(52,32),e.qZA(),e.TgZ(53,"button",23),e.SDv(54,33),e.qZA()()()(),e.TgZ(55,"mat-step"),e.YNc(56,st,1,0,"ng-template",7),e.YNc(57,at,4,2,"div",34),e.TgZ(58,"div",31)(59,"button",35),e.SDv(60,36),e.qZA(),e.TgZ(61,"button",37),e.NdJ("click",function(){return o.submit()}),e.SDv(62,38),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("alert",o.alert()),e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",o.personForm),e.xp6(2),e.Q6J("formGroup",o.personForm),e.xp6(2),e.Q6J("person",o.personForm.value.person),e.xp6(1),e.Q6J("cls",""),e.xp6(8),e.Q6J("stepControl",o.laboratoryForm),e.xp6(2),e.Q6J("formGroup",o.laboratoryForm),e.xp6(3),e.Q6J("cls",""),e.xp6(6),e.Q6J("stepControl",o.testTypesForm),e.xp6(2),e.Q6J("formGroup",o.testTypesForm),e.xp6(1),e.Q6J("dataSource",o.testTypesDS),e.xp6(1),e.Q6J("cls",""),e.xp6(9),e.Q6J("stepControl",o.form),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(10),e.Q6J("ngForOf",o.review()),e.xp6(4),e.Q6J("disabled",o.indicator()))},dependencies:[c.sg,n._Y,n.JJ,n.JL,n.sg,n.u,X.rH,ne.K,We.R,we.J,_e.z,re.w,je.P,tt,h.Hw,p.lW,p.RK,L.C0,L.VY,L.Vq,L.Ic,L.fd],encapsulation:2}),_})(),lt=(()=>{class _ extends U.Z2{constructor(t,o,s){super(o),this.fb=t,this.dialog=o,this.data=s,this.form=t.group({testTypeIds:[s.testTypeIds],laboratoryIds:[s.laboratoryIds],personIds:[s.personIds],startDate:[s.startDate],endDate:[s.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(n.qu),e.Y36(O.so),e.Y36(O.WI))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses-filter"]],features:[e._Bn([]),e.qOj],decls:17,vars:9,consts:function(){let i,t,o;return i="\u0627\u0644\u062A\u0627\u0631\u064A\u062E",t="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629",o="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testTypeIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],[1,"tw-flex-1"],i,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",o,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-type",2)(4,"medisy-form-field-laboratory",3),e.TgZ(5,"mat-form-field",4)(6,"mat-label"),e.SDv(7,5),e.qZA(),e.TgZ(8,"mat-date-range-input",6),e._UZ(9,"input",7)(10,"input",8),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(13,"mat-datepicker-toggle",9)(14,"mat-date-range-picker",null,10),e.qZA()()(),e._UZ(16,"sz-ui-dialog-actions",11)),2&t){const s=e.MAs(15);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(4),e.Q6J("rangePicker",s)("comparisonStart",o.form.controls.startDate.value)("comparisonEnd",o.form.controls.endDate.value),e.xp6(5),e.Q6J("for",s),e.xp6(3),e.Q6J("actions",o.actions)}},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,O.xY,u.KE,u.hX,u.bx,u.R9,Q.Y,J.t,re.w,oe,N.nW,N.wx,N.zY,N.By,N._g],encapsulation:2}),_})();var Et=r(9288);const St=[{path:"",component:(()=>{class _{constructor(t,o){this.dialog=t,this.analysisService=o,this.dataSource=new Z.b2(Pe.J.pagedSorted("-createdAt")),this.dataSource.columns=[Z.UC.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",s=>s.id),B.h.createdAt(),B.h.menu([])],this.get()}openCreateComponent(){this.dialog.open(se).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{this.dataSource.push(o)})}openFilterComponent(){this.dialog.open(lt,{data:this.dataSource.filterModel}).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.analysisService.getAnalyses(this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,f.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(O.uw),e.Y36(G.K))},_.\u0275cmp=e.Xpm({type:_,selectors:[["medisy-laboratory-analyses"]],features:[e._Bn([b.D,fe.v])],decls:8,vars:4,consts:function(){let i,t;return i="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",t="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],i,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[X.rH,ne.K,Et.f,_e.z,p.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),_})()},{path:"create",component:se}];var mt=r(9004);let Tt=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({providers:[G.K],imports:[c.ez,n.u5,n.UX,X.Bz.forChild(St),O.Is,A.Bb,Me.p0,E.TU,m.c,Z.Vn,Ne.h,ue.E,U.su,mt.g,pe.n,Ae.F,y.p9,l.Tx,h.Ps,p.ot,$.LD,L.T5,Ce.AV,a.ie,v.JX,g.XK,F.QW,Y.g,N.FA,M.Cq,ce.f]}),_})()},5974:(W,I,r)=>{r.d(I,{g:()=>m});var c=r(2757),n=r(5879),A=r(6223),Y=r(6814),p=r(9157),F=r(2032);function y(a,l){if(1&a&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&a){const E=n.oxw();n.xp6(1),n.Oqu(E.label)}}function g(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,2),n.qZA())}function N(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function O(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function h(a,l){1&a&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let m=(()=>{class a extends c.l{constructor(E){super(E),this.ngControl=E}ngOnInit(){this.control=this.ngControl.control}writeValue(E){this.value=E}}return a.\u0275fac=function(E){return new(E||a)(n.Y36(A.a5,10))},a.\u0275cmp=n.Xpm({type:a,selectors:[["sz-ui-form-field-input"]],features:[n.qOj],decls:7,vars:8,consts:function(){let l,E,M,$;return l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",E="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",M="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",$="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628",[[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,E,M,$]},template:function(E,M){1&E&&(n.TgZ(0,"mat-form-field"),n.YNc(1,y,2,1,"mat-label",0),n._UZ(2,"input",1),n.YNc(3,g,2,0,"mat-error",0),n.YNc(4,N,2,0,"mat-error",0),n.YNc(5,O,2,0,"mat-error",0),n.YNc(6,h,2,0,"mat-error",0),n.qZA()),2&E&&(n.xp6(1),n.Q6J("ngIf",M.label),n.xp6(1),n.Q6J("formControl",M.control)("value",M.value)("placeholder",M.placeholder),n.xp6(1),n.Q6J("ngIf",M.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",M.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",M.control.hasError("maxlength")),n.xp6(1),n.Q6J("ngIf",M.control.hasError("email")))},dependencies:[Y.O5,A.Fj,A.JJ,A.oH,p.KE,p.hX,p.TO,F.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),a})()},8873:(W,I,r)=>{r.d(I,{J:()=>h});var c=r(2757),n=r(5879),A=r(6223),Y=r(6814),p=r(9157),F=r(2032);function y(m,a){if(1&m&&(n.TgZ(0,"mat-label"),n._uU(1),n.qZA()),2&m){const l=n.oxw();n.xp6(1),n.Oqu(l.label)}}function g(m,a){1&m&&(n.TgZ(0,"mat-error"),n.SDv(1,3),n.qZA())}function N(m,a){1&m&&(n.TgZ(0,"mat-error"),n.SDv(1,4),n.qZA())}function O(m,a){1&m&&(n.TgZ(0,"mat-error"),n.SDv(1,5),n.qZA())}let h=(()=>{class m extends c.l{constructor(l){super(l),this.ngControl=l}ngOnInit(){this.control=this.ngControl.control}writeValue(l){this.value=l}}return m.\u0275fac=function(l){return new(l||m)(n.Y36(A.a5,10))},m.\u0275cmp=n.Xpm({type:m,selectors:[["sz-ui-form-field-textarea"]],features:[n.qOj],decls:7,vars:7,consts:function(){let a,l,E;return a="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",E="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],a,l,E]},template:function(l,E){1&l&&(n.TgZ(0,"mat-form-field",0),n.YNc(1,y,2,1,"mat-label",1),n.TgZ(2,"textarea",2),n._uU(3,"  "),n.qZA(),n.YNc(4,g,2,0,"mat-error",1),n.YNc(5,N,2,0,"mat-error",1),n.YNc(6,O,2,0,"mat-error",1),n.qZA()),2&l&&(n.xp6(1),n.Q6J("ngIf",E.label),n.xp6(1),n.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),n.xp6(2),n.Q6J("ngIf",E.control.hasError("required")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",E.control.hasError("maxlength")))},dependencies:[Y.O5,A.Fj,A.JJ,A.oH,p.KE,p.hX,p.TO,F.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),m})()}}]);