"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[955],{6850:(fe,g,s)=>{s.r(g),s.d(g,{LaboratoryModule:()=>Oe});var P=s(6814),i=s(6223),Z=s(4630),$=s(9014),T=s(2296),B=s(5195),h=s(5986),R=s(3680),z=s(8034),d=s(7700),b=s(617),U=s(2032),J=s(9038),O=s(7988),Y=s(1476),G=s(5940),X=s(8525),F=s(3566),V=s(1545),Q=s(5313),x=s(2596),m=s(8109),H=s(6981),q=s(465),p=s(8652),W=s(758),K=s(2595),j=s(5341),k=s(2169),_=s(4110),w=s(4567),ee=s(5041),te=s(7239),S=s(3572),c=s(2191),C=s(9598),L=s(8721),u=s(8180),e=s(5879),N=s(2406),E=s(4622),A=s(6091);let oe=(()=>{class a extends _.Z2{constructor(t,o,n){super(o),this.fb=t,this.dialog=o,this.data=n,this.form=t.group({emailType:[n.emailType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-emails-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","emailType"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-email-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,N.N,E.Y,A.t],encapsulation:2}),a})();var ae=s(3712),v=s(5974),I=s(8873);let re=(()=>{class a extends _.Ku{constructor(t,o,n,l){super(n),this.laboratoryService=t,this.fb=o,this.dialog=n,this.data=l,this.form=o.group({value:[l.laboratoryEmail?.value,[i.kI.required,i.kI.email]],description:[l.laboratoryEmail?.description,[]],emailType:[l.laboratoryEmail?.emailType??ae.V.Public,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryEmail?this.laboratoryService.updateLaboratoryEmail(this.data.laboratoryId,this.data.laboratoryEmail?.id,this.form.value):this.laboratoryService.createLaboratoryEmail(this.data.laboratoryId,this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.v),e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-emails-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let r,t;return r="Description",t="Email",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","value","label",t],["formControlName","emailType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-email-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,v.g,I.J,N.N,E.Y,A.t],encapsulation:2}),a})();var M=s(765),y=s(4624),f=s(2516);let se=(()=>{class a{constructor(t,o,n){this.dialog=t,this.laboratoryService=o,this.route=n,this.dataSource=new S.b2(C.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[S.UC.text("value","Email"),c.h.createdAt(),c.h.menu([S.od.edit(l=>{this.openSaveComponent(l)}),S.od.delete(l=>{this.openEmailDeleteComponent(l)})])],this.get()}openSaveComponent(t){this.dialog.open(re,{data:{laboratoryId:this.laboratory.id,laboratoryEmail:t}}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(oe,{data:this.dataSource.filterModel}).afterClosed().pipe((0,u.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openEmailDeleteComponent(t){this.dialog.open(_.fN,{data:_.cb.delete(this.laboratoryService.deleteLaboratoryEmail(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryEmails(this.laboratory.id,this.dataSource.filterModel).pipe((0,L.sU)(this.dataSource.indicator)).pipe((0,u.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.uw),e.Y36(p.v),e.Y36(m.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-emails"]],decls:11,vars:5,consts:function(){let r,t;return r="Emails",t="Add",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[m.rH,T.lW,M.K,y.f,f.z],encapsulation:2}),a})();var ne=s(6385),ie=s(8145),le=s(5850);function de(a,r){if(1&a&&(e.TgZ(0,"sz-ui-card",15),e._UZ(1,"sz-ui-counter",16),e.qZA()),2&a){const t=r.$implicit;e.Q6J("card",t),e.xp6(1),e.Q6J("value",null==t?null:t.counter)}}let _e=(()=>{class a{constructor(t,o){this.dialog=t,this.route=o,this.items=[],this.laboratory=this.route.snapshot.data.laboratory}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.uw),e.Y36(m.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-laboratory"]],features:[e._Bn([])],decls:34,vars:4,consts:function(){let r,t,o,n;return r="Edit",t="Phones",o="Emails",n="Test Classes",[["start",""],[1,"sz-h5"],[1,"tw-text-sm"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item",""],r,["mat-menu-item","","routerLink","phones"],t,["mat-menu-item","","routerLink","emails"],o,["mat-menu-item","","routerLink","test-classes"],n,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(t,o){if(1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e._uU(3),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA()(),e.TgZ(6,"button",3)(7,"mat-icon"),e._uU(8,"more_vert"),e.qZA()(),e.TgZ(9,"mat-menu",null,4)(11,"button",5)(12,"mat-icon"),e._uU(13,"edit"),e.qZA(),e.TgZ(14,"span"),e.SDv(15,6),e.qZA()(),e._UZ(16,"mat-divider"),e.TgZ(17,"button",7)(18,"mat-icon"),e._uU(19,"phone"),e.qZA(),e.TgZ(20,"span"),e.SDv(21,8),e.qZA()(),e.TgZ(22,"button",9)(23,"mat-icon"),e._uU(24,"alternate_email"),e.qZA(),e.TgZ(25,"span"),e.SDv(26,10),e.qZA()(),e.TgZ(27,"button",11)(28,"mat-icon"),e._uU(29,"science"),e.qZA(),e.TgZ(30,"span"),e.SDv(31,12),e.qZA()()()(),e.TgZ(32,"div",13),e.YNc(33,de,2,2,"sz-ui-card",14),e.qZA()),2&t){const n=e.MAs(10);e.xp6(3),e.Oqu(o.laboratory.name),e.xp6(2),e.Oqu(o.laboratory.description),e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(27),e.Q6J("ngForOf",o.items)}},dependencies:[P.sg,m.rH,O.VK,O.OP,O.p6,b.Hw,T.RK,ne.d,ie.R,le.X,f.z],encapsulation:2}),a})();var D=s(408);let Se=(()=>{class a extends _.Z2{constructor(t,o,n){super(o),this.fb=t,this.dialog=o,this.data=n,this.form=t.group({phoneType:[n.phoneType]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-phones-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","phoneType",3,"emptyOption"],[3,"actions"]],template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-phone-type",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("emptyOption",!0),e.xp6(1),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,D.I,E.Y,A.t],encapsulation:2}),a})();var ue=s(1101);let me=(()=>{class a extends _.Ku{constructor(t,o,n,l){super(n),this.laboratoryService=t,this.fb=o,this.dialog=n,this.data=l,this.form=o.group({value:[l.laboratoryPhone?.value,[i.kI.required]],description:[l.laboratoryPhone?.description,[]],phoneType:[l.laboratoryPhone?.phoneType??ue.z.Home,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryPhone?this.laboratoryService.updateLaboratoryPhone(this.data.laboratoryId,this.data.laboratoryPhone?.id,this.form.value):this.laboratoryService.createLaboratoryPhone(this.data.laboratoryId,this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.v),e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-phones-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let r,t;return r="Description",t="Number",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","description","label",r],["formControlName","value","label",t],["formControlName","phoneType"],[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-textarea",2)(4,"sz-ui-form-field-input",3)(5,"medisy-form-field-phone-type",4),e.qZA()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,v.g,I.J,D.I,E.Y,A.t],encapsulation:2}),a})(),pe=(()=>{class a{constructor(t,o,n){this.dialog=t,this.laboratoryService=o,this.route=n,this.dataSource=new S.b2(C.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[S.UC.text("value","Phone"),c.h.createdAt(),c.h.menu([S.od.edit(l=>this.openSaveComponent(l)),S.od.delete(l=>this.openPhoneDeleteComponent(l))])],this.get()}openSaveComponent(t){this.dialog.open(me,{data:{laboratoryId:this.laboratory.id,laboratoryPhone:t}}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(Se,{data:this.dataSource.filterModel}).afterClosed().pipe((0,u.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openPhoneDeleteComponent(t){this.dialog.open(_.fN,{data:_.cb.delete(this.laboratoryService.deleteLaboratoryPhone(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryPhones(this.laboratory.id,this.dataSource.filterModel).pipe((0,L.sU)(this.dataSource.indicator),(0,u.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.uw),e.Y36(p.v),e.Y36(m.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-phones"]],decls:11,vars:5,consts:function(){let r,t;return r="Phones",t="Add",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[m.rH,T.lW,M.K,y.f,f.z],encapsulation:2}),a})(),ce=(()=>{class a extends _.Z2{constructor(t,o,n){super(o),this.fb=t,this.dialog=o,this.data=n,this.form=t.group({enabled:[n.enabled]})}submit(){this.IsValid()&&this.dialog.close(this.form.value)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes-filter"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"mat-checkbox",2),e.SDv(4,3),e.qZA()()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,h.oG,E.Y,A.t],encapsulation:2}),a})();var Ee=s(1175);let Ae=(()=>{class a extends _.Ku{constructor(t,o,n,l){super(n),this.laboratoryService=t,this.fb=o,this.dialog=n,this.data=l,this.form=o.group({enabled:[l.laboratoryTestClass?.enabled??!0,[i.kI.required]],testClassId:[l.laboratoryTestClass?.testClassId,[i.kI.required]]})}submit(){this.IsValid()&&this.save(this.data.laboratoryTestClass?this.laboratoryService.updateLaboratoryTestClass(this.data.laboratoryId,this.data.laboratoryTestClass?.id,this.form.value):this.laboratoryService.createLaboratoryTestClass(this.data.laboratoryId,this.form.value))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.v),e.Y36(i.qu),e.Y36(d.so),e.Y36(d.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes-save"]],features:[e._Bn([]),e.qOj],decls:7,vars:3,consts:function(){let r;return r="Enabled",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","testClassId"],["formControlName","enabled"],r,[3,"actions"]]},template:function(t,o){1&t&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-test-class",2),e.TgZ(4,"mat-checkbox",3),e.SDv(5,4),e.qZA()()(),e._UZ(6,"sz-ui-dialog-actions",5)),2&t&&(e.Q6J("header",o.header),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("actions",o.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,d.xY,h.oG,Ee.U,E.Y,A.t],encapsulation:2}),a})();const Te=[{path:"",component:_e},{path:"phones",component:pe},{path:"emails",component:se},{path:"test-classes",component:(()=>{class a{constructor(t,o,n){this.dialog=t,this.laboratoryService=o,this.route=n,this.dataSource=new S.b2(C.J.paged()),this.laboratory=this.route.snapshot.data.laboratory,this.dataSource.columns=[S.UC.text("testClass","Test Class",l=>l.testClass.name),c.h.createdAt(),c.h.menu([S.od.edit(l=>{this.openSaveComponent(l)}),S.od.delete(l=>{this.openLaboratoryTestClassDeleteComponent(l)})])],this.get()}openSaveComponent(t){this.dialog.open(Ae,{data:{laboratoryId:this.laboratory.id,laboratoryTestClass:t}}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openFilterComponent(){this.dialog.open(ce,{data:this.dataSource.filterModel}).afterClosed().pipe((0,u.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openLaboratoryTestClassDeleteComponent(t){this.dialog.open(_.fN,{data:_.cb.delete(this.laboratoryService.deleteLaboratoryTestClass(t.laboratoryId,t.id),t)}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.laboratoryService.getLaboratoryTestClasses(this.laboratory.id,this.dataSource.filterModel).pipe((0,L.sU)(this.dataSource.indicator)).pipe((0,u.q)(1)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.uw),e.Y36(p.v),e.Y36(m.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["medisy-laboratory-test-classes"]],decls:11,vars:5,consts:function(){let r,t;return r="Test Classes",t="Add",[["start",""],[1,"sz-h5"],r,["routerLink","../",1,"tw-underline","tw-text-sm"],[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(t,o){1&t&&(e.TgZ(0,"sz-ui-header-basic")(1,"div",0)(2,"h5",1),e.SDv(3,2),e.qZA(),e.TgZ(4,"a",3),e._uU(5),e.qZA()()(),e.TgZ(6,"sz-ui-table-filter",4),e.NdJ("search",function(){return o.get()})("filter",function(){return o.openFilterComponent()}),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.openSaveComponent()}),e.TgZ(8,"span"),e.SDv(9,6),e.qZA()()(),e.TgZ(10,"sz-ui-table",7),e.NdJ("update",function(){return o.get()}),e.qZA()),2&t&&(e.xp6(5),e.Oqu(o.laboratory.name),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",o.dataSource))},dependencies:[m.rH,T.lW,M.K,y.f,f.z],encapsulation:2}),a})()}];let Oe=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[p.v],imports:[P.ez,i.u5,i.UX,m.Bz.forChild(Te),d.Is,Z.Bb,U.c,j.SD,h.p9,O.Tx,b.Ps,T.ot,X.LD,V.T5,x.AV,J.ie,B.QW,G.Cq,R.XK,z.FA,Q.p0,Y.TU,F.JX,W.E3,S.Vn,k.c,K.V,te.h,w.g,H.F,_.su,ee.n,q.L,Y.TU,d.Is,R.Ng,$.g]}),a})()}}]);