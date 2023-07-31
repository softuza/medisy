"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[448],{4243:(M,p,t)=>{t.r(p),t.d(p,{TestGroupsModule:()=>j});var l=t(6814),r=t(6223),u=t(4630),i=t(2296),S=t(5195),h=t(5986),c=t(7700),A=t(617),P=t(2032),G=t(1476),R=t(8525),I=t(5313),U=t(8109),N=t(6981),v=t(6987),y=t(758),T=t(4110),_=t(9004),Y=t(5041),D=t(7239),f=t(3572),E=t(2191),z=t(8652),L=t(3590),$=t(9598),J=t(8721),C=t(8180),e=t(5879),O=t(4622),g=t(6091),Z=t(4889);let F=(()=>{class n extends T.Z2{constructor(o,s,a){super(s),this.fb=o,this.dialog=s,this.data=a,this.form=o.group({laboratoryIds:[a.laboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.qu),e.Y36(c.so),e.Y36(c.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-test-groups-filter"]],features:[e._Bn([]),e.qOj],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","laboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,s){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-laboratory",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",s.actions))},dependencies:[r._Y,r.JJ,r.JL,r.sg,r.u,c.xY,O.Y,g.t,Z.w],encapsulation:2}),n})();var B=t(5974),b=t(8873);let x=(()=>{class n extends T.Ku{constructor(o,s,a,m){super(a),this.testGroupService=o,this.fb=s,this.dialog=a,this.data=m,this.form=s.group({name:[m?.name,[r.kI.required,r.kI.minLength(1)]],description:[m?.description,[]],isFavorite:[m?.isFavorite??!1,[r.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.testGroupService.updateTestGroup(this.data.id,this.form.value):this.testGroupService.createTestGroup(this.form.value))}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(v.C),e.Y36(r.qu),e.Y36(c.so),e.Y36(c.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-test-groups-save"]],features:[e._Bn([]),e.qOj],decls:6,vars:3,consts:function(){let d,o;return d="\u0627\u0644\u0627\u0633\u0645",o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",d],["formControlName","description","label",o],[3,"actions"]]},template:function(o,s){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(e.Q6J("header",s.header),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(3),e.Q6J("actions",s.actions))},dependencies:[r._Y,r.JJ,r.JL,r.sg,r.u,c.xY,B.g,b.J,O.Y,g.t],encapsulation:2}),n})();var X=t(6273),V=t(4624),Q=t(2516);const W=[{path:"",component:(()=>{class n{constructor(o,s){this.dialog=o,this.testGroupService=s,this.dataSource=new f.b2($.J.paged()),this.dataSource.columns=[E.h.nameHyperlink(a=>a.id,a=>a.name),E.h.code(),E.h.createdAt(),f.UC.checkbox("isFavorite","\u062A\u0641\u0636\u064A\u0644",(a,m)=>{a.isFavorite=m,this.updateItem(a)}),E.h.menu([f.od.edit(a=>this.openSaveComponent(a)),f.od.delete(a=>this.openTestGroupDeleteComponent(a))])],this.get()}openFilterComponent(){this.dialog.open(F,{data:this.dataSource.filterModel}).afterClosed().pipe((0,C.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}openSaveComponent(o){this.dialog.open(x,{data:o}).afterClosed().pipe((0,C.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openTestGroupDeleteComponent(o){this.dialog.open(T.fN,{data:T.cb.delete(this.testGroupService.deleteTestGroup(o.id),o)}).afterClosed().pipe((0,C.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}updateItem(o){this.testGroupService.updateTestGroup(o.id,o).subscribe(s=>{this.dataSource.update(s)})}get(){this.testGroupService.getTestGroups(this.dataSource.filterModel).pipe((0,J.sU)(this.dataSource.indicator),(0,C.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(c.uw),e.Y36(v.C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-test-groups"]],features:[e._Bn([z.v,L.L])],decls:8,vars:4,consts:function(){let d,o;return d="\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",o="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],d,[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,s){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return s.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return s.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[X.K,V.f,Q.z,i.lW],encapsulation:2}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v.C],imports:[l.ez,r.u5,r.UX,U.Bz.forChild(W),c.Is,u.Bb,I.p0,G.TU,P.c,f.Vn,D.h,y.E3,_.g,T.su,N.F,Y.n,h.p9,A.Ps,i.ot,R.LD,S.QW]}),n})()},2191:(M,p,t)=>{t.d(p,{h:()=>r});var l=t(3572);class r{static menu(i){return l.UC.action("menu",i)}static code(){return l.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return l.UC.date("createdAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621")}static updatedAt(){return l.UC.date("updatedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B")}static id(){return l.UC.text("id","\u0627\u0644\u0645\u0639\u0631\u0641")}static nameHyperlink(i,S,h){return l.UC.hyperlink("name","\u0627\u0644\u0627\u0633\u0645",i,S,h)}static nameText(i){return l.UC.text("name","\u0627\u0644\u0627\u0633\u0645",i)}static phoneType(i){return l.UC.text("phoneType","\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641",i)}static emailType(i){return l.UC.text("emailType","\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",i)}static documentType(i){return l.UC.text("documentType","\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",i)}static comparisonOperator(i){return l.UC.text("comparisonOperator","\u0627\u0644\u0639\u0645\u0644\u064A\u0629",i)}}},465:(M,p,t)=>{t.d(p,{L:()=>r});var l=t(5879);let r=(()=>{class u{}return u.\u0275fac=function(S){return new(S||u)},u.\u0275mod=l.oAB({type:u}),u.\u0275inj=l.cJS({}),u})()}}]);