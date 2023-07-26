"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[98],{5098:(Ae,Y,r)=>{r.r(Y),r.d(Y,{AnalysesModule:()=>St});var p=r(6814),_=r(6223),f=r(4630),G=r(9014),R=r(2296),X=r(5195),B=r(5986),h=r(3680),c=r(8034),m=r(7700),$=r(617),E=r(2032),N=r(9038),A=r(7988),d=r(1476),v=r(5940),Ce=r(8525),Te=r(3566),L=r(1545),Me=r(5313),Oe=r(2596),F=r(8109),ue=r(6981),de=r(724),y=r(5738),pe=r(4407),U=r(3524),ce=r(807),Ne=r(5041),fe=r(8766),g=r(3572),J=r(2191),Pe=r(8652),b=r(6987),ge=r(9598),P=r(2119),M=r(8180),e=r(5879),I=r(5348),Re=r(9155),Le=r(6439),T=r(9157),Z=r(4622),z=r(6091),Ie=r(5974),he=r(851),De=r(5741),Ye=r(7336),$e=r(2160);let ve=(()=>{class n extends U.Ku{constructor(t,o,i,l){super(i),this.personService=t,this.fb=o,this.dialog=i,this.data=l,this.titles=Object.values(Le.D),this.form=o.group({firstName:o.control(l?.firstName,[_.kI.required,_.kI.maxLength(128)]),lastName:o.control(l?.lastName,[_.kI.maxLength(128)]),middleName:o.control(null,[_.kI.maxLength(128)]),fatherName:o.control(l?.fatherFirstName?`${l.fatherFirstName} ${l?.lastName}`:null,[_.kI.maxLength(128)]),motherName:o.control(l?.motherName,[_.kI.maxLength(128)]),address:o.control(l?.address,[_.kI.maxLength(256)]),birthDate:o.control(l?.birthDate,[]),nationalityId:o.control(null,[]),ssn:o.control(l?.ssn,[_.kI.maxLength(128)]),languageId:o.control(null,[_.kI.required]),sex:o.control(Re.m.Male,[_.kI.required]),title:o.control(null,[])})}submit(){if(!this.IsValid())return;const t=this.form.value,o=[];t.address&&o.push({value:t.address,isPrimary:!0}),this.personService.createPerson({languageId:t.languageId,sex:t.sex,title:t.title,birthDate:t.birthDate,nationalitiyId:t.nationalitiyId,ssn:t.ssn,names:[{firstName:t.firstName,lastName:t.lastName,middleName:t.middleName,fatherName:t.fatherName,motherName:t.motherName,languageId:t.languageId}],addresses:o}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,M.q)(1)).subscribe(i=>{this.dialog.close(i)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(I.R),e.Y36(_.qu),e.Y36(m.so),e.Y36(m.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-people-common-create"]],features:[e._Bn([I.R]),e.qOj],decls:29,vars:5,consts:function(){let s,t,o,i,l,C,a,O;return s="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",t="\u0627\u0644\u0643\u0646\u064A\u0629",o="\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0633\u0637",i="\u0627\u0633\u0645 \u0627\u0644\u0623\u0628",l="\u0627\u0633\u0645 \u0627\u0644\u0623\u0645",C="\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0648\u0637\u0646\u064A",a="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0644\u0627\u062F\u0629",O="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],[1,"tw-flex","md:tw-flex-row","md:tw-gap-4","tw-flex-col"],["formControlName","firstName","label",s],["formControlName","lastName","label",t],["formControlName","middleName","label",o,1,"tw-flex-1"],["formControlName","fatherName","label",i],["formControlName","motherName","label",l],["formControlName","nationalityId"],["formControlName","ssn","label",C],["formControlName","languageId"],[1,"tw-flex-1"],a,["matInput","","formControlName","birthDate",3,"matDatepicker"],["picker",""],["matSuffix","",3,"for"],["formControlName","sex"],["formControlName","title"],["formControlName","address","label",O],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),e._UZ(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4),e.qZA(),e._UZ(6,"sz-ui-form-field-input",5),e.TgZ(7,"div",2),e._UZ(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"medisy-form-field-nationality",8)(12,"sz-ui-form-field-input",9),e.qZA(),e.TgZ(13,"div",2),e._UZ(14,"medisy-form-field-language",10),e.TgZ(15,"mat-form-field",11)(16,"mat-label"),e.SDv(17,12),e.qZA(),e._UZ(18,"input",13),e.TgZ(19,"mat-hint"),e._uU(20,"MM/DD/YYYY"),e.qZA(),e._UZ(21,"mat-datepicker",null,14)(23,"mat-datepicker-toggle",15),e.qZA()(),e.TgZ(24,"div",2),e._UZ(25,"medisy-form-field-sex",16)(26,"medisy-form-field-title",17),e.qZA(),e._UZ(27,"sz-ui-form-field-input",18),e.qZA()(),e._UZ(28,"sz-ui-dialog-actions",19)),2&t){const i=e.MAs(22);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(16),e.Q6J("matDatepicker",i),e.xp6(5),e.Q6J("for",i),e.xp6(5),e.Q6J("actions",o.actions)}},dependencies:[_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,m.xY,E.Nt,T.KE,T.hX,T.bx,T.R9,c.Mq,c.hl,c.nW,Z.Y,z.t,Ie.g,he.d,De.t,Ye.e,$e.V],encapsulation:2}),n})();var Fe=r(2842),H=r(5445),ye=r(2015);function Ue(n,s){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.content.message)}}let Ze=(()=>{class n extends ye.gd{constructor(t,o,i){super(o),this.fb=t,this.dialog=o,this.content=i,this.actions=[H.B.close(()=>o.close()),H.B.confirm(()=>o.close(!0))]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.qu),e.Y36(m.so),e.Y36(m.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sz-ui-dialog-confirm"]],features:[e.qOj],decls:4,vars:3,consts:[[3,"header"],[4,"ngIf"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content"),e.YNc(2,Ue,2,1,"p",1),e.qZA(),e._UZ(3,"sz-ui-dialog-actions",2)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("ngIf",null==o.content?null:o.content.message),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[p.O5,m.xY,Z.Y,z.t],encapsulation:2}),n})();var x=r(7398),ze=r(6893);let V=(()=>{class n extends ze.m{}return n.\u0275fac=function(){let s;return function(o){return(s||(s=e.n5z(n)))(o||n)}}(),n.\u0275dir=e.lG2({type:n,inputs:{displayFn:"displayFn"},features:[e.qOj]}),n})();var W=r(7921),K=r(3620),j=r(3997),w=r(4664),xe=r(6007);function Ge(n,s){if(1&n&&(e.TgZ(0,"mat-label"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function Xe(n,s){if(1&n&&(e.TgZ(0,"mat-option",7)(1,"div",8)(2,"span"),e._uU(3),e.qZA()()()),2&n){const t=s.$implicit,o=e.oxw();e.Q6J("value",o.getOptionValue(t)),e.xp6(3),e.Oqu(o.getOptionContent(t))}}function Be(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,9),e.qZA())}function Je(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,10),e.qZA())}function be(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,11),e.qZA())}function Qe(n,s){1&n&&e._UZ(0,"mat-progress-bar",12)}let qe=(()=>{class n extends V{constructor(t){super(t),this.ngControl=t,this.loading=!1,this.displayValue=o=>this.displayFn?this.displayFn(o):o}ngOnInit(){this.control=this.ngControl.control}writeValue(t){this.value=t}getOptionContent(t){return this.contentFn?this.contentFn(t):t}getOptionValue(t){return this.valueFn?this.valueFn(t):t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.a5,10))},n.\u0275cmp=e.Xpm({type:n,selectors:[["sz-ui-form-field-autocomplete"]],inputs:{items:"items",loading:"loading"},features:[e.qOj],decls:11,vars:9,consts:function(){let s,t,o;return s="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644",o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[4,"ngIf"],["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],s,t,o,["mode","indeterminate"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field"),e.YNc(2,Ge,2,1,"mat-label",1),e._UZ(3,"input",2),e.TgZ(4,"mat-autocomplete",3,4),e.YNc(6,Xe,4,2,"mat-option",5),e.qZA(),e.YNc(7,Be,2,0,"mat-error",1),e.YNc(8,Je,2,0,"mat-error",1),e.YNc(9,be,2,0,"mat-error",1),e.qZA(),e.YNc(10,Qe,1,0,"mat-progress-bar",6),e.qZA()),2&t){const i=e.MAs(5);e.xp6(2),e.Q6J("ngIf",o.label),e.xp6(1),e.Q6J("matAutocomplete",i)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayValue),e.xp6(2),e.Q6J("ngForOf",o.items),e.xp6(1),e.Q6J("ngIf",o.control.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("min")),e.xp6(1),e.Q6J("ngIf",o.control.hasError("max")),e.xp6(1),e.Q6J("ngIf",o.loading)}},dependencies:[p.sg,p.O5,_.Fj,_.JJ,_.oH,T.KE,T.hX,T.TO,h.ey,E.Nt,xe.pW,f.XC,f.ZL],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}",".container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]}),n})(),k=(()=>{class n extends V{constructor(t,o){super(t),this.ngControl=t,this.testGroupService=o,this.label="\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",this.indicator=(0,e.tdS)(!0),this.contentFormat=i=>i.name,this.valueFormat=i=>this.valueFn?this.valueFn(i):i.id,this.items$=this.testGroupService.getTestGroups().pipe((0,M.q)(1),(0,x.U)(i=>i.items)).pipe((0,P.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,W.O)(""),(0,K.b)(400),(0,j.x)(),(0,w.w)(t=>this.get("string"==typeof t?t:"")))}get(t){return this.testGroupService.getTestGroups({query:t,pageSize:10,pageIndex:1,sortBy:"name"}).pipe((0,M.q)(1),(0,P.sU)(this.indicator)).pipe((0,x.U)(o=>o.items))}writeValue(t){this.value=t}displayFormat(t){return t?t.name:""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.a5,10),e.Y36(b.C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-test-group"]],features:[e._Bn([b.C]),e.qOj],decls:2,vars:9,consts:[[3,"formControl","loading","items","label","displayFn","contentFn","valueFn"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-form-field-autocomplete",0),e.ALo(1,"async")),2&t&&e.Q6J("formControl",o.control)("loading",o.indicator())("items",e.lcZ(1,7,o.items$))("label",o.label)("displayFn",o.displayFormat)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[_.JJ,_.oH,qe,p.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var He=r(6202);let Ve=(()=>{class n extends U.Z2{constructor(t,o){super(o),this.fb=t,this.dialog=o,this.testGroupValueFormat=i=>i,this.referenceGroupValueFormat=i=>i,this.form=t.group({testGroup:t.control(null,[_.kI.required]),referenceGroup:t.control(null,[_.kI.required]),note:t.control(null,[_.kI.maxLength(4096)])})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.qu),e.Y36(m.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-analyses-create-save-test-info"]],features:[e._Bn([]),e.qOj],decls:6,vars:5,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroup",3,"valueFn"],["formControlName","referenceGroup",3,"valueFn"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-reference-gourp",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("valueFn",o.testGroupValueFormat),e.xp6(1),e.Q6J("valueFn",o.referenceGroupValueFormat),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[_._Y,_.JJ,_.JL,_.sg,_.u,m.xY,Z.Y,z.t,k,He.P],encapsulation:2}),n})();var ee=r(9692),We=r(1746),Ke=r(8873),te=r(2516),oe=r(4889);let Q=(()=>{class n{transform(t){if(!t.birthDate)return"";const o=new Date,i=new Date(t.birthDate),C=~~((o.getTime()-i.getTime())/1e3/3600),a=~~(C/24),O=~~(a/7),u=~~(a/30),D=~~(o.getUTCFullYear()-i.getUTCFullYear());return D>0?`${D} `+"\u0633\u0646\u0629":u>0?`${u} `+"\u0634\u0647\u0631":O>0?`${O} `+"\u0623\u0633\u0628\u0648\u0639":a>0?`${a} `+"\u064A\u0648\u0645":C>0?`${C} `+"\u0633\u0627\u0639\u0629":""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"personAge",type:n,pure:!0}),n})();var q=r(9060),je=r(2757);function we(n,s){if(1&n&&(e.TgZ(0,"mat-option",6)(1,"div",7)(2,"span"),e._uU(3),e.ALo(4,"personName"),e.qZA(),e.TgZ(5,"small"),e._uU(6),e.ALo(7,"personAge"),e.qZA()()()),2&n){const t=s.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(e.lcZ(4,3,t)),e.xp6(3),e.Oqu(e.lcZ(7,5,t))}}function ke(n,s){1&n&&(e.TgZ(0,"mat-error"),e.SDv(1,8),e.qZA())}let et=(()=>{class n extends je.l{constructor(t,o,i,l){super(t),this.ngControl=t,this.personService=o,this.personNamePipe=i,this.personAgePipe=l,this.indicator=(0,e.tdS)(!0),this.displayFn=C=>{if(!C)return"";const a=this.personNamePipe.transform(C),O=this.personAgePipe.transform(C);return O?`${a}, ${O}`:`${a}`}}ngOnInit(){this.control=this.ngControl.control,this.items$=this.control.valueChanges.pipe((0,W.O)(""),(0,K.b)(400),(0,j.x)(),(0,w.w)(t=>{if("string"==typeof t){const o=t.split(" ");return 2===o.length?this.get(o[0],o[1]):this.get(o[0])}return this.get("")}))}get(t,o){return this.personService.getPersons({query:t,lastName:o,pageSize:10,pageIndex:1}).pipe((0,M.q)(1),(0,P.sU)(this.indicator)).pipe((0,x.U)(i=>i.items))}writeValue(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.a5,10),e.Y36(I.R),e.Y36(q.Y),e.Y36(Q))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-form-field-person-search"]],features:[e._Bn([I.R,q.Y,Q]),e.qOj],decls:9,vars:7,consts:function(){let s,t;return s="\u0627\u0644\u0627\u0633\u0645 \u0627\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",t="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",[s,["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[1,"tw-flex","tw-flex-col"],t]},template:function(t,o){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e.SDv(2,0),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",2,3),e.YNc(6,we,8,7,"mat-option",4),e.ALo(7,"async"),e.qZA(),e.YNc(8,ke,2,0,"mat-error",5),e.qZA()),2&t){const i=e.MAs(5);e.xp6(3),e.Q6J("matAutocomplete",i)("formControl",o.control),e.xp6(1),e.Q6J("displayWith",o.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,5,o.items$)),e.xp6(2),e.Q6J("ngIf",o.control.hasError("required"))}},dependencies:[p.sg,p.O5,_.Fj,_.JJ,_.oH,E.Nt,T.KE,T.hX,T.TO,h.ey,f.XC,f.ZL,p.Ov,Q,q.Y],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();function tt(n,s){1&n&&e.SDv(0,38)}function ot(n,s){1&n&&e.SDv(0,39)}function nt(n,s){1&n&&e.SDv(0,40)}function _t(n,s){1&n&&e.SDv(0,41)}function rt(n,s){1&n&&e.SDv(0,42)}function st(n,s){if(1&n&&(e.TgZ(0,"div",45)(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.key),e.xp6(2),e.Oqu(t.value)}}function it(n,s){if(1&n&&(e.TgZ(0,"div",43)(1,"h4"),e._uU(2),e.qZA(),e.YNc(3,st,5,2,"div",44),e.qZA()),2&n){const t=s.$implicit;e.xp6(2),e.hij(" ",t.title," "),e.xp6(1),e.Q6J("ngForOf",t.items)}}let ne=(()=>{class n{constructor(t,o,i,l,C){this.analysisService=t,this.personService=o,this.dialog=i,this.fb=l,this.router=C,this.testsDataSource=new g.b2,this.indicator=(0,e.tdS)(!1),this.alert=(0,e.tdS)(void 0),this.analysisForm=this.fb.group({laboratoryId:[null,[_.kI.required]],note:this.fb.control(null,[_.kI.maxLength(4096)])}),this.personForm=this.fb.group({person:this.fb.control(null,[_.kI.required])}),this.testListForm=this.fb.array([]),this.testsForm=this.fb.group({tests:this.testListForm}),this.form=this.fb.group({analysisForm:this.analysisForm,personForm:this.personForm,testsForm:this.testsForm}),this.testsDataSource.columns=[g.UC.position("position","#"),g.UC.text("testClass","\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",a=>a.testClass.name),g.UC.text("testGroup","\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",a=>a.testGroup?.name),g.UC.text("referenceGroup","\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",a=>a.referenceGroup.name),J.h.menu([g.od.delete((a,O)=>{this.testsDataSource.delete(a),this.testListForm.removeAt(O)})])]}openPersonScanComponent(){this.dialog.open(Fe.x).afterClosed().pipe((0,M.q)(1)).subscribe(o=>{this.findPerson(o)})}findPerson(t){t&&this.personService.getPersons({ssn:t.ssn,firstName:t.firstName,pageIndex:1,pageSize:50}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,M.q)(1),(0,x.U)(o=>o.items)).subscribe(o=>{1===o.length?this.personForm.get("person")?.setValue(o[0]):0===o.length&&this.openPersonCreateConfirmationComponent(t)})}openPersonCreateConfirmationComponent(t){this.dialog.open(Ze,{data:{message:"\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0634\u062E\u0635, \u0647\u0644 \u062A\u0648\u062F \u0627\u0646\u0634\u0627\u0621 \u0628\u0637\u0627\u0642\u0629 \u0634\u062E\u0635\u061F"}}).afterClosed().pipe((0,M.q)(1)).subscribe(i=>{i&&this.openPersonCreateComponent(t)})}openPersonCreateComponent(t){this.dialog.open(ve,{data:t}).afterClosed().pipe((0,M.q)(1)).subscribe(i=>{i&&this.personForm.controls.person.setValue(i)})}openTestTypeAddComponent(){this.dialog.open(Ve).afterClosed().pipe((0,M.q)(1)).subscribe(o=>{o&&(this.testsDataSource.push(o),this.testListForm.push(this.fb.group({testClass:[o.testClass,_.kI.required],testGroup:[o.testGroup],referenceGroup:[o.referenceGroup,_.kI.required],note:[null,_.kI.maxLength(4096)]})))})}review(){const t=[];return t.push({title:"\u0627\u0644\u0634\u062E\u0635",items:this.generatePersonReview()}),t}validate(t){return!(t&&!t.valid&&(Object.keys(t.controls).forEach(o=>{t?.get(o)?.markAsTouched({onlySelf:!0})}),1))}generatePersonReview(){return[{key:"\u0627\u0644\u0627\u0633\u0645",value:this.personForm.value.person?.firstName}]}submit(){return this.validate(this.form)&&this.analysisService.createAnalysis({personId:this.personForm.value.person.id,laboratoryId:this.analysisForm.value.laboratoryId,note:this.analysisForm.value.note,tests:this.testListForm.value.map(t=>({note:t.note,referenceGroupId:t.referenceGroup.id,testClassId:t.testClass.id,testGroupId:t.testGroup?.id}))}).pipe((0,P.sU)(this.indicator),(0,P.S3)(this.alert),(0,M.q)(1)).subscribe(()=>{this.router.navigate(["/mlab/analyses"])}),!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.K),e.Y36(I.R),e.Y36(m.uw),e.Y36(_.qu),e.Y36(F.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-analyses-create"]],features:[e._Bn([y.K,I.R])],decls:62,vars:16,consts:function(){let s,t,o,i,l,C,a,O,u,D,_e,re,se,ie,le,ae,Ee,Se,me;return s="\u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F",t="\u0625\u0646\u0634\u0627\u0621",o="\u0628\u0627\u0631\u0643\u0648\u062F",i="\u0627\u0644\u062A\u0627\u0644\u064A",l="\u0645\u0644\u0627\u062D\u0638\u0629",C="\u0631\u062C\u0648\u0639",a="\u0627\u0644\u062A\u0627\u0644\u064A",O="\u0625\u0636\u0627\u0641\u0629",u="\u0631\u062C\u0648\u0639",D="\u0627\u0644\u062A\u0627\u0644\u064A",_e="\u0631\u062C\u0648\u0639",re="\u0627\u0644\u062A\u0627\u0644\u064A",se="\u0625\u0644\u063A\u0627\u0621",ie="\u0625\u0646\u0634\u0627\u0621",le="\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635",ae="\u0627\u0644\u0645\u062E\u0628\u0631",Ee="\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",Se="\u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",me="\u0645\u0631\u0627\u062C\u0639\u0629",[["start","",1,"sz-h5"],s,["mat-icon-button","","routerLink","/mlab/analyses","end",""],[3,"alert"],[3,"linear"],["stepper",""],[3,"stepControl"],["matStepLabel",""],[1,"tw-flex","tw-flex-col","tw-py-4",3,"formGroup"],["formControlName","person",1,"tw-flex-1"],[3,"cls"],["start",""],["mat-button","",3,"click"],t,o,["end","","mat-button","","matStepperNext",""],i,["formControlName","laboratoryId"],["formControlName","note","label",l],["end",""],["mat-button","","matStepperPrevious",""],C,["mat-button","","matStepperNext",""],a,[3,"dataSource"],O,u,D,[3,"formGroup"],[1,"tw-flex","tw-flex-col"],[1,"end"],_e,re,["class","list",4,"ngFor","ngForOf"],["routerLink","/mlab/analyses","mat-button","","type","button"],se,["mat-raised-button","","color","primary",3,"disabled","click"],ie,le,ae,Ee,Se,me,[1,"list"],["class","list-item-horizontal",4,"ngFor","ngForOf"],[1,"list-item-horizontal"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA(),e.TgZ(3,"button",2)(4,"mat-icon"),e._uU(5,"arrow_back"),e.qZA()()(),e._UZ(6,"sz-ui-alert",3),e.TgZ(7,"mat-vertical-stepper",4,5)(9,"mat-step",6),e.YNc(10,tt,1,0,"ng-template",7),e.TgZ(11,"form",8),e._UZ(12,"medisy-form-field-person-search",9),e.qZA(),e.TgZ(13,"sz-ui-header-basic",10)(14,"div",11)(15,"button",12),e.NdJ("click",function(){return o.openPersonCreateComponent()}),e.SDv(16,13),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){return o.openPersonScanComponent()}),e.SDv(18,14),e.qZA()(),e.TgZ(19,"button",15),e.SDv(20,16),e.qZA()()(),e.TgZ(21,"mat-step",6),e.YNc(22,ot,1,0,"ng-template",7),e.TgZ(23,"form",8),e._UZ(24,"medisy-form-field-laboratory",17)(25,"sz-ui-form-field-textarea",18),e.qZA(),e.TgZ(26,"sz-ui-header-basic",10)(27,"div",19)(28,"button",20),e.SDv(29,21),e.qZA(),e.TgZ(30,"button",22),e.SDv(31,23),e.qZA()()()(),e.TgZ(32,"mat-step",6),e.YNc(33,nt,1,0,"ng-template",7),e.TgZ(34,"form",8),e._UZ(35,"sz-ui-table",24),e.qZA(),e.TgZ(36,"sz-ui-header-basic",10)(37,"div",11)(38,"button",12),e.NdJ("click",function(){return o.openTestTypeAddComponent()}),e.SDv(39,25),e.qZA()(),e.TgZ(40,"div",19)(41,"button",20),e.SDv(42,26),e.qZA(),e.TgZ(43,"button",22),e.SDv(44,27),e.qZA()()()(),e.TgZ(45,"mat-step",6)(46,"form",28),e.YNc(47,_t,1,0,"ng-template",7),e._UZ(48,"div",29),e.TgZ(49,"div",30)(50,"button",20),e.SDv(51,31),e.qZA(),e.TgZ(52,"button",22),e.SDv(53,32),e.qZA()()()(),e.TgZ(54,"mat-step"),e.YNc(55,rt,1,0,"ng-template",7),e.YNc(56,it,4,2,"div",33),e.TgZ(57,"div",30)(58,"button",34),e.SDv(59,35),e.qZA(),e.TgZ(60,"button",36),e.NdJ("click",function(){return o.submit()}),e.SDv(61,37),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("alert",o.alert()),e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",o.personForm),e.xp6(2),e.Q6J("formGroup",o.personForm),e.xp6(2),e.Q6J("cls",""),e.xp6(8),e.Q6J("stepControl",o.analysisForm),e.xp6(2),e.Q6J("formGroup",o.analysisForm),e.xp6(3),e.Q6J("cls",""),e.xp6(6),e.Q6J("stepControl",o.testsForm),e.xp6(2),e.Q6J("formGroup",o.testsForm),e.xp6(1),e.Q6J("dataSource",o.testsDataSource),e.xp6(1),e.Q6J("cls",""),e.xp6(9),e.Q6J("stepControl",o.form),e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(10),e.Q6J("ngForOf",o.review()),e.xp6(4),e.Q6J("disabled",o.indicator()))},dependencies:[p.sg,_._Y,_.JJ,_.JL,_.sg,_.u,F.rH,ee.K,We.R,Ke.J,te.z,oe.w,et,$.Hw,R.lW,R.RK,L.C0,L.VY,L.Vq,L.Ic,L.fd],encapsulation:2}),n})(),lt=(()=>{class n extends U.Z2{constructor(t,o,i){super(o),this.fb=t,this.dialog=o,this.data=i,this.form=t.group({testGroupIds:[i.testGroupIds],laboratoryIds:[i.laboratoryIds],personIds:[i.personIds],startDate:[i.startDate],endDate:[i.endDate]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.qu),e.Y36(m.so),e.Y36(m.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-analyses-filter"]],features:[e._Bn([]),e.qOj],decls:17,vars:9,consts:function(){let s,t,o;return s="\u0627\u0644\u062A\u0627\u0631\u064A\u062E",t="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629",o="\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","testGroupIds",3,"multiple"],["formControlName","laboratoryIds",3,"multiple"],[1,"tw-flex-1"],s,["startView","year",3,"rangePicker","comparisonStart","comparisonEnd"],["matStartDate","","placeholder",t,"formControlName","startDate"],["matEndDate","","placeholder",o,"formControlName","endDate"],["matSuffix","",3,"for"],["datePicker",""],[3,"actions"]]},template:function(t,o){if(1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-group",2)(4,"medisy-form-field-laboratory",3),e.TgZ(5,"mat-form-field",4)(6,"mat-label"),e.SDv(7,5),e.qZA(),e.TgZ(8,"mat-date-range-input",6),e._UZ(9,"input",7)(10,"input",8),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"YYYY-MM-DD - YYYY-MM-DD"),e.qZA(),e._UZ(13,"mat-datepicker-toggle",9)(14,"mat-date-range-picker",null,10),e.qZA()()(),e._UZ(16,"sz-ui-dialog-actions",11)),2&t){const i=e.MAs(15);e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("multiple",!0),e.xp6(4),e.Q6J("rangePicker",i)("comparisonStart",o.form.controls.startDate.value)("comparisonEnd",o.form.controls.endDate.value),e.xp6(5),e.Q6J("for",i),e.xp6(3),e.Q6J("actions",o.actions)}},dependencies:[_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,m.xY,T.KE,T.hX,T.bx,T.R9,Z.Y,z.t,oe.w,k,c.nW,c.wx,c.zY,c.By,c._g],encapsulation:2}),n})();var at=r(9288);const Et=[{path:"",component:(()=>{class n{constructor(t,o){this.dialog=t,this.analysisService=o,this.dataSource=new g.b2(ge.J.pagedSorted("-createdAt")),this.dataSource.columns=[g.UC.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",i=>i.id),J.h.createdAt(),J.h.menu([])],this.get()}openCreateComponent(){this.dialog.open(ne).afterClosed().pipe((0,M.q)(1)).subscribe(o=>{this.dataSource.push(o)})}openFilterComponent(){this.dialog.open(lt,{data:this.dataSource.filterModel}).afterClosed().pipe((0,M.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}get(){this.analysisService.getAnalyses(this.dataSource.filterModel).pipe((0,P.sU)(this.dataSource.indicator),(0,M.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.uw),e.Y36(y.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-analyses"]],features:[e._Bn([b.C,Pe.v])],decls:8,vars:4,consts:function(){let s,t;return s="\u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",t="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],s,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[F.rH,ee.K,at.f,te.z,R.lW],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]}),n})()},{path:"create",component:ne}];let St=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[y.K],imports:[p.ez,_.u5,_.UX,F.Bz.forChild(Et),m.Is,f.Bb,Me.p0,d.TU,E.c,g.Vn,fe.h,pe.E,U.su,ce.g,Ne.n,ue.F,B.p9,A.Tx,$.Ps,R.ot,Ce.LD,L.T5,Oe.AV,N.ie,Te.JX,h.XK,X.QW,G.g,c.FA,v.Cq,de.f]}),n})()},8873:(Ae,Y,r)=>{r.d(Y,{J:()=>$});var p=r(2757),_=r(5879),f=r(6223),G=r(6814),R=r(9157),X=r(2032);function B(E,N){if(1&E&&(_.TgZ(0,"mat-label"),_._uU(1),_.qZA()),2&E){const A=_.oxw();_.xp6(1),_.Oqu(A.label)}}function h(E,N){1&E&&(_.TgZ(0,"mat-error"),_.SDv(1,3),_.qZA())}function c(E,N){1&E&&(_.TgZ(0,"mat-error"),_.SDv(1,4),_.qZA())}function m(E,N){1&E&&(_.TgZ(0,"mat-error"),_.SDv(1,5),_.qZA())}let $=(()=>{class E extends p.l{constructor(A){super(A),this.ngControl=A}ngOnInit(){this.control=this.ngControl.control}writeValue(A){this.value=A}}return E.\u0275fac=function(A){return new(A||E)(_.Y36(f.a5,10))},E.\u0275cmp=_.Xpm({type:E,selectors:[["sz-ui-form-field-textarea"]],features:[_.qOj],decls:7,vars:7,consts:function(){let N,A,d;return N="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",A="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",d="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],N,A,d]},template:function(A,d){1&A&&(_.TgZ(0,"mat-form-field",0),_.YNc(1,B,2,1,"mat-label",1),_.TgZ(2,"textarea",2),_._uU(3,"  "),_.qZA(),_.YNc(4,h,2,0,"mat-error",1),_.YNc(5,c,2,0,"mat-error",1),_.YNc(6,m,2,0,"mat-error",1),_.qZA()),2&A&&(_.xp6(1),_.Q6J("ngIf",d.label),_.xp6(1),_.Q6J("formControl",d.control)("value",d.value)("placeholder",d.placeholder),_.xp6(2),_.Q6J("ngIf",d.control.hasError("required")),_.xp6(1),_.Q6J("ngIf",d.control.hasError("minlength")),_.xp6(1),_.Q6J("ngIf",d.control.hasError("maxlength")))},dependencies:[G.O5,f.Fj,f.JJ,f.oH,R.KE,R.hX,R.TO,X.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),E})()}}]);