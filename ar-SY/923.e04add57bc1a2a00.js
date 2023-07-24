"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[923],{5923:(x,h,n)=>{n.r(h),n.d(h,{LaboratoryModule:()=>Oe});var g=n(6814),t=n(6223),T=n(4630),R=n(9014),E=n(2296),v=n(5195),Y=n(5986),P=n(3680),b=n(8034),l=n(7700),C=n(617),D=n(2032),_=n(9038),u=n(7988),d=n(1476),S=n(5940),L=n(8525),A=n(3566),Q=n(1545),V=n(5313),H=n(2596),f=n(8109),K=n(6981),W=n(465),M=n(8652),j=n(4407),q=n(2595),w=n(696),k=n(2169),p=n(3524),ee=n(807),oe=n(5041),te=n(8766),c=n(3572),N=n(2191),Z=n(9598),$=n(2119),O=n(8180),e=n(5879),B=n(2406),y=n(4622),I=n(6091);let ae=(()=>{class r extends p.Z2{constructor(o,a,s){super(a),this.fb=o,this.dialog=a,this.data=s,this.form=o.group({emailType:[s.emailType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(t.qu),e.Y36(l.so),e.Y36(l.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-emails-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:3,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(o,a){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-email-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(2),e.Q6J("actions",a.actions))},dependencies:[t._Y,t.JJ,t.JL,t.sg,t.u,l.xY,B.N,y.Y,I.t],encapsulation:2}),r})();var ne=n(3712),z=n(5974),F=n(8873);let re=(()=>{class r extends p.Ku{constructor(o,a,s,m){super(s),this.laboratoryService=o,this.fb=a,this.dialog=s,this.data=m,this.form=a.group({value:[m.laboratoryEmail?.value,[t.kI.required,t.kI.email]],description:[m.laboratoryEmail?.description,[]],emailType:[m.laboratoryEmail?.emailType??ne.V.Public,[t.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryEmail?this.laboratoryService.updateLaboratoryEmail(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value):this.laboratoryService.createLaboratoryEmail(this.data.laboratoryId,this.form.value))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(M.v),e.Y36(t.qu),e.Y36(l.so),e.Y36(l.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-emails-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let i,o;return i="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",o],["formControlName","emailType"],[3,"actions"]]},template:function(o,a){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(4),e.Q6J("actions",a.actions))},dependencies:[t._Y,t.JJ,t.JL,t.sg,t.u,l.xY,z.g,F.J,B.N,y.Y,I.t],encapsulation:2}),r})();var J=n(9692),X=n(9288),U=n(2516);let ie=(()=>{class r{constructor(o,a,s){this.dialog=o,this.laboratoryService=a,this.route=s,this.dataSource=new c.b2(Z.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[c.UC.text("value","\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"),N.h.createdAt(),N.h.menu([c.od.edit(m=>{this.openSaveComponent(m)}),c.od.delete(m=>{this.openEmailDeleteComponent(m)})])],this.get()}openSaveComponent(o){this.dialog.open(re,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:o}}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(ae,{data:this.dataSource.filterModel}).afterClosed().pipe((0,O.q)(1)).subscribe(a=>{this.dataSource.updateFilterModel(a),this.get()})}openEmailDeleteComponent(o){this.dialog.open(p.fN,{data:p.cb.delete(this.laboratoryService.deleteLaboratoryEmail(o.laboratoryId,o.id),o)}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.laboratoryService.getLaboratoryEmails(this.laboratory.id,this.dataSource.filterModel).pipe((0,$.sU)(this.dataSource.indicator)).pipe((0,O.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.uw),e.Y36(M.v),e.Y36(f.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-emails"]],decls:11,vars:5,consts:function(){let i,o;return i="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,a){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return a.get()})("filter",function(){return a.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return a.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return a.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(a.laboratory.name),e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[f.rH,E.lW,J.K,X.f,U.z],encapsulation:2}),r})();var se=n(8645),le=n(6385),_e=n(8145),de=n(2286);function me(r,i){if(1&r&&(e.TgZ(0,"sz-ui-card",13),e._UZ(1,"sz-ui-counter",14),e.qZA()),2&r){const o=i.$implicit;e.Q6J("card",o),e.xp6(1),e.Q6J("value",null==o?null:o.counter)}}let ue=(()=>{class r{constructor(o,a,s){this.dialog=o,this.route=a,this.laboratoryService=s,this.alert$=new se.x,this.items=[],this.laboratory=this.route.snapshot.data.laboratory}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.uw),e.Y36(f.gz),e.Y36(M.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-laboratory"]],features:[e._Bn([])],decls:29,vars:4,consts:function(){let i,o,a;return i="\u062A\u0639\u062F\u064A\u0644",o="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",a="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item",""],i,["mat-menu-item","","routerLink","phones"],o,["mat-menu-item","","routerLink","emails"],a,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(o,a){if(1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA()(),e.TgZ(6,"button",3)(7,"mat-icon"),e._uU(8,"more_vert"),e.qZA()(),e.TgZ(9,"mat-menu",null,4)(11,"button",5)(12,"mat-icon"),e._uU(13,"edit"),e.qZA(),e.TgZ(14,"span"),e.SDv(15,6),e.qZA()(),e._UZ(16,"mat-divider"),e.TgZ(17,"button",7)(18,"mat-icon"),e._uU(19,"phone"),e.qZA(),e.TgZ(20,"span"),e.SDv(21,8),e.qZA()(),e.TgZ(22,"button",9)(23,"mat-icon"),e._uU(24,"email"),e.qZA(),e.TgZ(25,"span"),e.SDv(26,10),e.qZA()()()(),e.TgZ(27,"div",11),e.YNc(28,me,2,2,"sz-ui-card",12),e.qZA()),2&o){const s=e.MAs(10);e.xp6(3),e.Oqu(a.laboratory.name),e.xp6(2),e.Oqu(a.laboratory.description),e.xp6(1),e.Q6J("matMenuTriggerFor",s),e.xp6(22),e.Q6J("ngForOf",a.items)}},dependencies:[g.sg,f.rH,u.VK,u.OP,u.p6,C.Hw,E.RK,le.d,_e.R,de.A,U.z],encapsulation:2}),r})();var G=n(408);let Se=(()=>{class r extends p.Z2{constructor(o,a,s){super(a),this.fb=o,this.dialog=a,this.data=s,this.form=o.group({phoneType:[s.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(t.qu),e.Y36(l.so),e.Y36(l.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-phones-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:4,consts:[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(o,a){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",a.actions))},dependencies:[t._Y,t.JJ,t.JL,t.sg,t.u,l.xY,G.I,y.Y,I.t],encapsulation:2}),r})();var pe=n(1101);let ce=(()=>{class r extends p.Ku{constructor(o,a,s,m){super(s),this.laboratoryService=o,this.fb=a,this.dialog=s,this.data=m,this.form=a.group({value:[m.laboratoryPhone?.value,[t.kI.required]],description:[m.laboratoryPhone?.description,[]],phoneType:[m.laboratoryPhone?.phoneType??pe.z.Home,[t.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.laboratoryService.updateLaboratoryPhone(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.laboratoryService.createLaboratoryPhone(this.data.laboratoryId,this.form.value))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(M.v),e.Y36(t.qu),e.Y36(l.so),e.Y36(l.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-phones-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let i,o;return i="\u0627\u0644\u0648\u0635\u0641",o="\u0627\u0644\u0631\u0642\u0645",[[3,"header"],[1,"tw-flex","tw-flex-col",3,"formGroup"],["formControlName","description","label",i],["formControlName","value","label",o],["formControlName","phoneType"],[3,"actions"]]},template:function(o,a){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&o&&(e.Q6J("header",a.header),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(4),e.Q6J("actions",a.actions))},dependencies:[t._Y,t.JJ,t.JL,t.sg,t.u,l.xY,z.g,F.J,G.I,y.Y,I.t],encapsulation:2}),r})();const Ee=[{path:"",component:ue},{path:"phones",component:(()=>{class r{constructor(o,a,s){this.dialog=o,this.laboratoryService=a,this.route=s,this.dataSource=new c.b2(Z.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[c.UC.text("value","\u0627\u0644\u0647\u0627\u062A\u0641"),N.h.createdAt(),N.h.menu([c.od.edit(m=>this.openSaveComponent(m)),c.od.delete(m=>this.openPhoneDeleteComponent(m))])],this.get()}openSaveComponent(o){this.dialog.open(ce,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:o}}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openFilterComponent(){this.dialog.open(Se,{data:this.dataSource.filterModel}).afterClosed().pipe((0,O.q)(1)).subscribe(a=>{this.dataSource.updateFilterModel(a),this.get()})}openPhoneDeleteComponent(o){this.dialog.open(p.fN,{data:p.cb.delete(this.laboratoryService.deleteLaboratoryPhone(o.laboratoryId,o.id),o)}).afterClosed().pipe((0,O.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.laboratoryService.getLaboratoryPhones(this.laboratory.id,this.dataSource.filterModel).pipe((0,$.sU)(this.dataSource.indicator),(0,O.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.uw),e.Y36(M.v),e.Y36(f.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["medisy-laboratory-phones"]],decls:11,vars:5,consts:function(){let i,o;return i="\u0627\u0644\u0647\u0648\u0627\u062A\u0641",o="\u0625\u0636\u0627\u0641\u0629",[["start",""],[1,"sz-h5"],i,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,a){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return a.get()})("filter",function(){return a.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return a.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return a.get()}),e.qZA()),2&o&&(e.xp6(5),e.Oqu(a.laboratory.name),e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[f.rH,E.lW,J.K,X.f,U.z],encapsulation:2}),r})()},{path:"emails",component:ie}];let Oe=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[M.v],imports:[g.ez,t.u5,t.UX,f.Bz.forChild(Ee),l.Is,T.Bb,D.c,w.S,Y.p9,u.Tx,C.Ps,E.ot,L.LD,Q.T5,H.AV,_.ie,v.QW,S.Cq,P.XK,b.FA,V.p0,d.TU,A.JX,j.E,c.Vn,k.c,q.V,te.h,ee.g,K.F,p.su,oe.n,W.L,d.TU,l.Is,P.Ng,R.g]}),r})()},5974:(x,h,n)=>{n.d(h,{g:()=>D});var g=n(2757),t=n(5879),T=n(6223),R=n(6814),E=n(9157),v=n(2032);function Y(_,u){if(1&_&&(t.TgZ(0,"mat-label"),t._uU(1),t.qZA()),2&_){const d=t.oxw();t.xp6(1),t.Oqu(d.label)}}function P(_,u){1&_&&(t.TgZ(0,"mat-error"),t.SDv(1,2),t.qZA())}function b(_,u){1&_&&(t.TgZ(0,"mat-error"),t.SDv(1,3),t.qZA())}function l(_,u){1&_&&(t.TgZ(0,"mat-error"),t.SDv(1,4),t.qZA())}function C(_,u){1&_&&(t.TgZ(0,"mat-error"),t.SDv(1,5),t.qZA())}let D=(()=>{class _ extends g.l{constructor(d){super(d),this.ngControl=d}ngOnInit(){this.control=this.ngControl.control}writeValue(d){this.value=d}}return _.\u0275fac=function(d){return new(d||_)(t.Y36(T.a5,10))},_.\u0275cmp=t.Xpm({type:_,selectors:[["sz-ui-form-field-input"]],features:[t.qOj],decls:7,vars:8,consts:function(){let u,d,S,L;return u="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",d="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",S="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",L="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628",[[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],u,d,S,L]},template:function(d,S){1&d&&(t.TgZ(0,"mat-form-field"),t.YNc(1,Y,2,1,"mat-label",0),t._UZ(2,"input",1),t.YNc(3,P,2,0,"mat-error",0),t.YNc(4,b,2,0,"mat-error",0),t.YNc(5,l,2,0,"mat-error",0),t.YNc(6,C,2,0,"mat-error",0),t.qZA()),2&d&&(t.xp6(1),t.Q6J("ngIf",S.label),t.xp6(1),t.Q6J("formControl",S.control)("value",S.value)("placeholder",S.placeholder),t.xp6(1),t.Q6J("ngIf",S.control.hasError("required")),t.xp6(1),t.Q6J("ngIf",S.control.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",S.control.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",S.control.hasError("email")))},dependencies:[R.O5,T.Fj,T.JJ,T.oH,E.KE,E.hX,E.TO,v.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),_})()}}]);