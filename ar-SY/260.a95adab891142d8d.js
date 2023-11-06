"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[260],{9260:(C,c,e)=>{e.r(c),e.d(c,{TestClassesModule:()=>L});var o=e(6814),i=e(6223),u=e(2296),d=e(7700),f=e(617),r=e(2032),T=e(8109),p=e(6883),h=e(9899),S=e(2516),z=e(7239),m=e(3562),y=e(8262),A=e(9598),E=e(8721),v=e(8180),U=e(7106),O=e(7195),t=e(5879),M=e(4622),b=e(6091);let I=(()=>{class l extends h.Z2{constructor(n,s,a){super(s),this.fb=n,this.dialog=s,this.data=a,this.form=n.group({includeLaboratoryIds:[a.includeLaboratoryIds],includeTestGroupIds:[a.includeTestGroupIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(i.qu),t.Y36(d.so),t.Y36(d.WI))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-test-classes-filter"]],standalone:!0,features:[t._Bn([]),t.qOj,t.jDz],decls:6,vars:5,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],["formControlName","includeTestGroupIds",3,"multiple"],[3,"actions"]],template:function(s,a){1&s&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"medisy-form-field-laboratory",2)(4,"medisy-form-field-test-group-select",3),t.qZA()(),t._UZ(5,"sz-ui-dialog-actions",4)),2&s&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("multiple",!0),t.xp6(1),t.Q6J("actions",a.actions))},dependencies:[o.ez,i.UX,i._Y,i.JJ,i.JL,i.sg,i.u,d.Is,d.xY,h.su,M.Y,b.t,U.w,O.Q],encapsulation:2})}return l})();var $=e(8359),D=e(3144);const J=[{path:"",component:(()=>{class l{constructor(n,s){this.dialog=n,this.mlabService=s,this.dataSource=new m.b2(A.J.pagedSorted("name")),this.dataSource.addRows([m.zP.borderless([y.h.nameHyperlink(a=>a.name),m.UC.text("abbreviation","\u0623\u062E\u062A\u0635\u0627\u0631",a=>a.abbreviation),y.h.createdAt()]),m.zP.headerless([m.UC.text("description")])]),this.get()}openFilterComponent(){this.dialog.open(I,{data:this.dataSource.filterModel}).afterClosed().pipe((0,v.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.mlabService.testClasses.get(this.dataSource.filterModel).pipe((0,E.sU)(this.dataSource.indicator),(0,v.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}static#t=this.\u0275fac=function(s){return new(s||l)(t.Y36(d.uw),t.Y36(p.t))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["medisy-laboratory-test-classes"]],features:[t._Bn([p.t])],decls:5,vars:4,consts:function(){let n;return n="\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",[["start","",1,"sz-h5"],n,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(s,a){1&s&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return a.get()})("filter",function(){return a.openFilterComponent()}),t.qZA(),t.TgZ(4,"sz-ui-table",3),t.NdJ("update",function(){return a.get()}),t.qZA()),2&s&&(t.xp6(3),t.Q6J("dataSource",a.dataSource),t.xp6(1),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[$.K,D.f,S.z],encapsulation:2})}return l})()}];let L=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275mod=t.oAB({type:l});static#s=this.\u0275inj=t.cJS({providers:[p.t],imports:[o.ez,i.u5,i.UX,T.Bz.forChild(J),d.Is,r.c,f.Ps,u.ot,m.Vn,z.h,h.su,S.z]})}return l})()},8262:(C,c,e)=>{e.d(c,{h:()=>d});var o=e(3562),i=e(7311);const u={documentType:"\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",comparisonType:"\u0627\u0644\u0639\u0645\u0644\u064A\u0629",emailType:"\u0646\u0648\u0639 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A",phoneType:"\u0646\u0648\u0639 \u0627\u0644\u0647\u0627\u062A\u0641"};class d{static menu(r){return o.UC.action("menu",r)}static code(){return o.UC.text("code","\u0627\u0644\u0631\u0645\u0632")}static createdAt(){return o.UC.date("createdAt",i.O.createdDate)}static updatedAt(){return o.UC.date("updatedAt",i.O.updatedDate)}static id(){return o.UC.text("id",i.O.id)}static nameHyperlink(r,T,p){return o.UC.hyperlink("name",i.O.name,r,T,p)}static nameText(r){return o.UC.text("name",i.O.name,r)}static phoneType(r){return o.UC.text("phoneType",u.phoneType,r)}static emailType(r){return o.UC.text("emailType",u.emailType,r)}static documentType(r){return o.UC.text("documentType",u.documentType,r)}static comparisonOperator(r){return o.UC.text("comparisonOperator",u.comparisonType,r)}}},7311:(C,c,e)=>{e.d(c,{O:()=>o});const o={id:"\u0627\u0644\u0645\u0639\u0631\u0641",name:"\u0627\u0644\u0627\u0633\u0645",description:"\u0627\u0644\u0648\u0635\u0641",updatedDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062D\u062F\u064A\u062B",createdDate:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621",tests:"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A"}}}]);