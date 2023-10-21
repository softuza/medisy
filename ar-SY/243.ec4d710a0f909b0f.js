"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[243],{4243:(O,m,s)=>{s.r(m),s.d(m,{TestGroupsModule:()=>L});var r=s(6814),p=s(2296),d=s(7700),h=s(617),C=s(8109),i=s(6883),E=s(758),u=s(9899),_=s(5041),A=s(7239),S=s(3562),T=s(8262),P=s(9598),v=s(8721),f=s(8180),l=s(6223),y=s(7106),e=s(5879),g=s(4622),M=s(6091);let R=(()=>{class n extends u.Z2{constructor(a,o,t){super(o),this.fb=a,this.dialog=o,this.data=t,this.form=a.group({includeLaboratoryIds:[t.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(l.qu),e.Y36(d.so),e.Y36(d.WI))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-test-groups-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-laboratory",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",t.actions))},dependencies:[r.ez,l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,d.Is,d.xY,u.su,g.Y,M.t,y.w],encapsulation:2})}return n})();var G=s(5781),N=s(5974),U=s(8873);let I=(()=>{class n extends u.Ku{constructor(a,o,t,c){super(t),this.mlabService=a,this.fb=o,this.dialog=t,this.data=c,this.form=o.group({name:[c?.name,[l.kI.required,l.kI.minLength(1)]],description:[c?.description,[]],isFavorite:[c?.isFavorite??!1,[l.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.mlabService.testGroups.update(this.data.id,this.form.value):this.mlabService.testGroups.create(this.form.value))}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(i.t),e.Y36(l.qu),e.Y36(d.so),e.Y36(d.WI))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:6,vars:3,consts:function(){let a,o;return a="\u0627\u0644\u0627\u0633\u0645",o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",a],["formControlName","description","label",o],[3,"actions"]]},template:function(o,t){1&o&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&o&&(e.Q6J("header",t.header),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("actions",t.actions))},dependencies:[r.ez,l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,d.Is,d.xY,u.su,g.Y,M.t,G.g2,N.g,U.L],encapsulation:2})}return n})();var D=s(8359),z=s(3144),Y=s(2516);const $=[{path:"",component:(()=>{class n{constructor(a,o){this.dialog=a,this.mlabService=o,this.dataSource=new S.b2(P.J.paged()),this.dataSource.addRows(S.zP.default([T.h.nameHyperlink(t=>t.id,t=>t.name),T.h.code(),T.h.createdAt(),S.UC.checkbox("isFavorite","\u062A\u0641\u0636\u064A\u0644",(t,c)=>{t.isFavorite=c,this.updateItem(t)}),T.h.menu([S.od.edit(t=>this.openSaveComponent(t)),S.od.delete(t=>this.openTestGroupDeleteComponent(t))])])),this.get()}openFilterComponent(){this.dialog.open(R,{data:this.dataSource.filterModel}).afterClosed().pipe((0,f.q)(1)).subscribe(o=>{this.dataSource.updateFilterModel(o),this.get()})}openSaveComponent(a){this.dialog.open(I,{data:a}).afterClosed().pipe((0,f.q)(1)).subscribe(t=>{this.dataSource.updateOrPushItem(t)})}openTestGroupDeleteComponent(a){this.dialog.open(u.fN,{data:u.cb.delete(this.mlabService.testGroups.delete(a.id),a)}).afterClosed().pipe((0,f.q)(1)).subscribe(t=>{this.dataSource.delete(t)})}updateItem(a){this.mlabService.testGroups.update(a.id,a).subscribe(o=>{this.dataSource.update(o)})}get(){this.mlabService.testGroups.get(this.dataSource.filterModel).pipe((0,v.sU)(this.dataSource.indicator),(0,f.q)(1)).subscribe(a=>{this.dataSource.set(a.items,a.count)})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.uw),e.Y36(i.t))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-test-groups"]],features:[e._Bn([i.t])],decls:8,vars:4,consts:function(){let a,o;return a="\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",o="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,t){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return t.get()})("filter",function(){return t.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return t.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return t.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",t.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",t.dataSource))},dependencies:[p.lW,D.K,z.f,Y.z],encapsulation:2})}return n})()}];let L=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({providers:[i.t],imports:[r.ez,C.Bz.forChild($),d.Is,h.Ps,p.ot,S.Vn,A.h,E.E3,u.su,_.n]})}return n})()},8262:(O,m,s)=>{s.d(m,{h:()=>h});var r=s(3562),p=s(7311);const d={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class h{static menu(i){return r.UC.action("menu",i)}static code(){return r.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return r.UC.date("createdAt",p.O.createdDate)}static updatedAt(){return r.UC.date("updatedAt",p.O.updatedDate)}static id(){return r.UC.text("id",p.O.id)}static nameHyperlink(i,E,u){return r.UC.hyperlink("name",p.O.name,i,E,u)}static nameText(i){return r.UC.text("name",p.O.name,i)}static phoneType(i){return r.UC.text("phoneType",d.phoneType,i)}static emailType(i){return r.UC.text("emailType",d.emailType,i)}static documentType(i){return r.UC.text("documentType",d.documentType,i)}static comparisonOperator(i){return r.UC.text("comparisonOperator",d.comparisonType,i)}}},7311:(O,m,s)=>{s.d(m,{O:()=>r});const r={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}}}]);