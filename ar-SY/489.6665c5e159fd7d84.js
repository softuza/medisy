"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[489],{5489:(S,u,t)=>{t.r(u),t.d(u,{SpecimensModule:()=>x});var e=t(6814),d=t(2296),o=t(7700),s=t(617),l=t(8109),r=t(7076),_=t(758),g=t(5041),A=t(7239),f=t(3572),O=t(5048),n=t(1175),i=t(9598),p=t(8721),E=t(8180),C=t(6223),v=t(8034),y=t(9157),P=t(3576),N=t(9004),a=t(5879),F=t(4622),I=t(6091);let R=(()=>{class m extends P.Z2{constructor(c,T,M){super(T),this.fb=c,this.dialog=T,this.data=M,this.form=c.group({})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return m.\u0275fac=function(c){return new(c||m)(a.Y36(C.qu),a.Y36(o.so),a.Y36(o.WI))},m.\u0275cmp=a.Xpm({type:m,selectors:[["medisy-laboratory-specimens-filter"]],standalone:!0,features:[a._Bn([]),a.qOj,a.jDz],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(c,T){1&c&&(a._UZ(0,"sz-ui-dialog-header",0),a.TgZ(1,"mat-dialog-content"),a._UZ(2,"form",1),a.qZA(),a._UZ(3,"sz-ui-dialog-actions",2)),2&c&&(a.Q6J("header",T.header),a.xp6(2),a.Q6J("formGroup",T.form),a.xp6(1),a.Q6J("actions",T.actions))},dependencies:[C.UX,C._Y,C.JL,C.sg,o.Is,o.xY,y.lN,P.su,F.Y,I.t,N.g,v.FA],encapsulation:2}),m})();var $=t(8359),D=t(3144),L=t(2516);const B=[{path:"",component:(()=>{class m{constructor(c,T,M){this.dialog=c,this.specimenService=T,this.typeI18nPipe=M,this.dataSource=new f.b2(i.J.pagedSorted("-createdAt")),this.dataSource.columns=[f.UC.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",z=>z.id),f.UC.text("type","\u0627\u0644\u0646\u0645\u0637",z=>z.type.name),f.UC.text("state","\u0627\u0644\u062D\u0627\u0644\u0629",z=>M.transform(z.state)),f.UC.date("collectedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0645\u0639"),n.h.createdAt(),n.h.menu([])],this.get()}openFilterComponent(){this.dialog.open(R,{data:this.dataSource.filterModel}).afterClosed().pipe((0,E.q)(1)).subscribe(T=>{this.dataSource.updateFilterModel(T),this.get()})}get(){this.specimenService.get(this.dataSource.filterModel).pipe((0,p.sU)(this.dataSource.indicator),(0,E.q)(1)).subscribe(c=>{this.dataSource.set(c.items,c.count)})}}return m.\u0275fac=function(c){return new(c||m)(a.Y36(o.uw),a.Y36(O.E),a.Y36(r.y))},m.\u0275cmp=a.Xpm({type:m,selectors:[["medisy-laboratory-specimens"]],decls:5,vars:4,consts:function(){let h;return h="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],h,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(c,T){1&c&&(a.TgZ(0,"sz-ui-header-basic")(1,"h5",0),a.SDv(2,1),a.qZA()(),a.TgZ(3,"sz-ui-table-filter",2),a.NdJ("search",function(){return T.get()})("filter",function(){return T.openFilterComponent()}),a.qZA(),a.TgZ(4,"sz-ui-table",3),a.NdJ("update",function(){return T.get()}),a.qZA()),2&c&&(a.xp6(3),a.Q6J("dataSource",T.dataSource),a.xp6(1),a.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",T.dataSource))},dependencies:[$.K,D.f,L.z],encapsulation:2}),m})()}];let x=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=a.oAB({type:m}),m.\u0275inj=a.cJS({providers:[O.E,r.y],imports:[e.ez,l.Bz.forChild(B),o.Is,s.Ps,d.ot,f.Vn,A.h,_.E3,g.n]}),m})()},7076:(S,u,t)=>{t.d(u,{y:()=>A});var e=t(3712),d=t(1101),o=t(7263),s=(()=>((s=s||{}).Validated="Validated",s.Returned="Returned",s.Forwarded="Forwarded",s.Destroyed="Destroyed",s.Collected="Collected",s.Accepted="Accepted",s.Created="Created",s))(),l=(()=>((l=l||{}).Created="Created",l.Pending="Pending",l.Started="Started",l.Finished="Finished",l))(),r=t(1646),_=t(9155),g=t(5879);let A=(()=>{class f{transform(n,i=!1){return n in o.v?this.transformComparisonOperator(n,i):n in l?this.transformTestState(n):n in s?this.transformSpecimenState(n):n in e.V?this.transformEmailType(n):n in d.z?this.transformPhoneType(n):n in _.m?this.transformSex(n):n in r.n?this.transformDocumentType(n):""}transformComparisonOperator(n,i){switch(n){case o.v.Equal:return i?"==":"\u062A\u0633\u0627\u0648\u064A";case o.v.GreaterThan:return i?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case o.v.GreaterThanOrEqual:return i?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case o.v.LessThan:return i?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case o.v.LessThanOrEqual:return i?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case o.v.RangeWithBoundaries:return i?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case o.v.RangeWithoutBoundaries:return i?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case o.v.Not:return i?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(n){switch(n){case l.Created:return "\u0645\u0646\u0634\u0623\u0629";case l.Started:return "\u0628\u062F\u0623";case l.Finished:return "\u0627\u0646\u062A\u0647\u062A";case l.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(n){switch(n){case s.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case s.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case s.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case s.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case s.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case s.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(n){switch(n){case e.V.Private:return "\u062E\u0627\u0635";case e.V.Public:return "\u0639\u0627\u0645";case e.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(n){switch(n){case d.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case d.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case d.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(n){switch(n){case _.m.Female:return "\u0627\u0646\u062B\u0649";case _.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(n){switch(n){case r.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case r.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case r.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case r.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case r.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case r.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}}return f.\u0275fac=function(n){return new(n||f)},f.\u0275pipe=g.Yjl({name:"typeI18n",type:f,pure:!0,standalone:!0}),f})()},3712:(S,u,t)=>{t.d(u,{V:()=>e});var e=(()=>((e=e||{}).Private="Private",e.Public="Public",e.Work="Work",e))();Object.keys(e).map(o=>e[o])},1101:(S,u,t)=>{t.d(u,{z:()=>e});var e=(()=>((e=e||{}).Home="Home",e.Mobile="Mobile",e.Work="Work",e))();Object.keys(e).map(o=>e[o])},7263:(S,u,t)=>{t.d(u,{i:()=>d,v:()=>e});var e=(()=>((e=e||{}).Equal="Equal",e.GreaterThan="GreaterThan",e.GreaterThanOrEqual="GreaterThanOrEqual",e.LessThan="LessThan",e.LessThanOrEqual="LessThanOrEqual",e.Not="Not",e.RangeWithBoundaries="RangeWithBoundaries",e.RangeWithoutBoundaries="RangeWithoutBoundaries",e))();const d=Object.keys(e).map(o=>e[o])},1646:(S,u,t)=>{t.d(u,{n:()=>e});var e=(()=>((e=e||{}).NationalCard="NationalCard",e.BankCard="BankCard",e.DriverLicense="DriverLicense",e.Passport="Passport",e.TravelDocument="TravelDocument",e.Other="Other",e))();Object.keys(e).map(o=>e[o])},9155:(S,u,t)=>{t.d(u,{m:()=>e});var e=(()=>((e=e||{}).Male="Male",e.Female="Female",e))();Object.keys(e).map(o=>e[o])},8873:(S,u,t)=>{t.d(u,{L:()=>O});var e=t(6814),d=t(6223),o=t(9157),s=t(2032),l=t(8237),r=t(5879);function _(n,i){if(1&n&&(r.TgZ(0,"mat-label"),r._uU(1),r.qZA()),2&n){const p=r.oxw();r.xp6(1),r.Oqu(p.label)}}function g(n,i){1&n&&(r.TgZ(0,"mat-error"),r.SDv(1,3),r.qZA())}function A(n,i){1&n&&(r.TgZ(0,"mat-error"),r.SDv(1,4),r.qZA())}function f(n,i){1&n&&(r.TgZ(0,"mat-error"),r.SDv(1,5),r.qZA())}let O=(()=>{class n extends l.l{constructor(p){super(p),this.ngControl=p}ngOnInit(){this.control=this.ngControl.control}writeValue(p){this.value=p}}return n.\u0275fac=function(p){return new(p||n)(r.Y36(d.a5,10))},n.\u0275cmp=r.Xpm({type:n,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[r.qOj,r.jDz],decls:7,vars:7,consts:function(){let i,p,E;return i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",p="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",E="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],i,p,E]},template:function(p,E){1&p&&(r.TgZ(0,"mat-form-field",0),r.YNc(1,_,2,1,"mat-label",1),r.TgZ(2,"textarea",2),r._uU(3,"  "),r.qZA(),r.YNc(4,g,2,0,"mat-error",1),r.YNc(5,A,2,0,"mat-error",1),r.YNc(6,f,2,0,"mat-error",1),r.qZA()),2&p&&(r.xp6(1),r.Q6J("ngIf",E.label),r.xp6(1),r.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),r.xp6(2),r.Q6J("ngIf",E.control.hasError("required")),r.xp6(1),r.Q6J("ngIf",E.control.hasError("minlength")),r.xp6(1),r.Q6J("ngIf",E.control.hasError("maxlength")))},dependencies:[e.ez,e.O5,d.UX,d.Fj,d.JJ,d.oH,o.lN,o.KE,o.hX,o.TO,s.c,s.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})()},9004:(S,u,t)=>{t.d(u,{g:()=>s});var e=t(5974),d=t(8873),o=t(5879);let s=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[e.g,d.L]}),l})()}}]);