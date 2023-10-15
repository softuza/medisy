"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[489],{5489:(S,l,e)=>{e.r(l),e.d(l,{SpecimensModule:()=>I});var n=e(6814),o=e(2296),t=e(7700),h=e(617),p=e(8109),f=e(7076),v=e(6883),y=e(758),$=e(5041),g=e(7239),s=e(3572),E=e(8262),r=e(9598),d=e(8721),T=e(8180),C=e(6223),M=e(8034),A=e(9157),P=e(9899),F=e(5781),a=e(5879),O=e(4622),N=e(6091);let L=(()=>{class u extends P.Z2{constructor(c,i,m){super(i),this.fb=c,this.dialog=i,this.data=m,this.form=c.group({})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}static#e=this.\u0275fac=function(i){return new(i||u)(a.Y36(C.qu),a.Y36(t.so),a.Y36(t.WI))};static#t=this.\u0275cmp=a.Xpm({type:u,selectors:[["medisy-laboratory-specimens-filter"]],standalone:!0,features:[a._Bn([]),a.qOj,a.jDz],decls:4,vars:3,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],[3,"actions"]],template:function(i,m){1&i&&(a._UZ(0,"sz-ui-dialog-header",0),a.TgZ(1,"mat-dialog-content"),a._UZ(2,"form",1),a.qZA(),a._UZ(3,"sz-ui-dialog-actions",2)),2&i&&(a.Q6J("header",m.header),a.xp6(2),a.Q6J("formGroup",m.form),a.xp6(1),a.Q6J("actions",m.actions))},dependencies:[C.UX,C._Y,C.JL,C.sg,t.Is,t.xY,A.lN,P.su,O.Y,N.t,F.g2,M.FA],encapsulation:2})}return u})();var D=e(8359),R=e(3144),B=e(2516);const W=[{path:"",component:(()=>{class u{constructor(c,i,m){this.dialog=c,this.mlabService=i,this.typeI18nPipe=m,this.dataSource=new s.b2(r.J.pagedSorted("-createdAt")),this.dataSource.columns=[s.UC.hyperlink("code","\u0627\u0644\u0631\u0645\u0632",z=>z.id),s.UC.text("type","\u0627\u0644\u0646\u0645\u0637",z=>z.type.name),s.UC.text("state","\u0627\u0644\u062D\u0627\u0644\u0629",z=>m.transform(z.state)),s.UC.date("collectedAt","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0645\u0639"),E.h.createdAt(),E.h.menu([])],this.get()}openFilterComponent(){this.dialog.open(L,{data:this.dataSource.filterModel}).afterClosed().pipe((0,T.q)(1)).subscribe(i=>{this.dataSource.updateFilterModel(i),this.get()})}get(){this.mlabService.specimens.get(this.dataSource.filterModel).pipe((0,d.sU)(this.dataSource.indicator),(0,T.q)(1)).subscribe(c=>{this.dataSource.set(c.items,c.count)})}static#e=this.\u0275fac=function(i){return new(i||u)(a.Y36(t.uw),a.Y36(v.t),a.Y36(f.y))};static#t=this.\u0275cmp=a.Xpm({type:u,selectors:[["medisy-laboratory-specimens"]],decls:5,vars:4,consts:function(){let c;return c="\u0627\u0644\u0639\u064A\u0646\u0627\u062A",[["start","",1,"sz-h5"],c,[3,"dataSource","search","filter"],[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(i,m){1&i&&(a.TgZ(0,"sz-ui-header-basic")(1,"h5",0),a.SDv(2,1),a.qZA()(),a.TgZ(3,"sz-ui-table-filter",2),a.NdJ("search",function(){return m.get()})("filter",function(){return m.openFilterComponent()}),a.qZA(),a.TgZ(4,"sz-ui-table",3),a.NdJ("update",function(){return m.get()}),a.qZA()),2&i&&(a.xp6(3),a.Q6J("dataSource",m.dataSource),a.xp6(1),a.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",m.dataSource))},dependencies:[D.K,R.f,B.z],encapsulation:2})}return u})()}];let I=(()=>{class u{static#e=this.\u0275fac=function(i){return new(i||u)};static#t=this.\u0275mod=a.oAB({type:u});static#a=this.\u0275inj=a.cJS({providers:[v.t,f.y],imports:[n.ez,p.Bz.forChild(W),t.Is,h.Ps,o.ot,s.Vn,g.h,y.E3,$.n]})}return u})()},7076:(S,l,e)=>{e.d(l,{y:()=>g});var n=e(3712),o=e(1101),t=e(7263),h=function(s){return s.Validated="Validated",s.Returned="Returned",s.Forwarded="Forwarded",s.Destroyed="Destroyed",s.Collected="Collected",s.Accepted="Accepted",s.Created="Created",s}(h||{}),p=function(s){return s.Created="Created",s.Pending="Pending",s.Started="Started",s.Finished="Finished",s}(p||{}),f=e(1646),v=e(9155),y=e(6494),$=e(5879);let g=(()=>{class s{transform(r,d=!1){return r in t.v?this.transformComparisonOperator(r,d):r in p?this.transformTestState(r):r in h?this.transformSpecimenState(r):r in n.V?this.transformEmailType(r):r in o.z?this.transformPhoneType(r):r in v.m?this.transformSex(r):r in f.n?this.transformDocumentType(r):r in y.x?this.transformChannelType(r):""}transformComparisonOperator(r,d){switch(r){case t.v.Equal:return d?"==":"\u062A\u0633\u0627\u0648\u064A";case t.v.GreaterThan:return d?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case t.v.GreaterThanOrEqual:return d?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case t.v.LessThan:return d?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case t.v.LessThanOrEqual:return d?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case t.v.RangeWithBoundaries:return d?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case t.v.RangeWithoutBoundaries:return d?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case t.v.Not:return d?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return""}}transformTestState(r){switch(r){case p.Created:return "\u0645\u0646\u0634\u0623\u0629";case p.Started:return "\u0628\u062F\u0623";case p.Finished:return "\u0627\u0646\u062A\u0647\u062A";case p.Pending:return "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return""}}transformSpecimenState(r){switch(r){case h.Accepted:return "\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case h.Collected:return "\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case h.Destroyed:return "\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case h.Forwarded:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case h.Validated:return "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case h.Created:return "\u0645\u0646\u0634\u0623\u0629";default:return""}}transformEmailType(r){switch(r){case n.V.Private:return "\u062E\u0627\u0635";case n.V.Public:return "\u0639\u0627\u0645";case n.V.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformPhoneType(r){switch(r){case o.z.Home:return "\u0627\u0644\u0645\u0646\u0632\u0644";case o.z.Mobile:return "\u0627\u0644\u062C\u0648\u0627\u0644";case o.z.Work:return "\u0627\u0644\u0639\u0645\u0644";default:return""}}transformSex(r){switch(r){case v.m.Female:return "\u0627\u0646\u062B\u0649";case v.m.Male:return "\u0630\u0643\u0631";default:return""}}transformDocumentType(r){switch(r){case f.n.BankCard:return "\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case f.n.DriverLicense:return "\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case f.n.NationalCard:return "\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case f.n.Passport:return "\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case f.n.TravelDocument:return "\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case f.n.Other:return "\u0623\u062E\u0631\u0649";default:return""}}transformChannelType(r){switch(r){case y.x.Email:return "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case y.x.Sms:return "SMS";case y.x.Push:return "Push";default:return""}}static#e=this.\u0275fac=function(d){return new(d||s)};static#t=this.\u0275pipe=$.Yjl({name:"typeI18n",type:s,pure:!0,standalone:!0})}return s})()},3712:(S,l,e)=>{e.d(l,{V:()=>n});var n=function(t){return t.Private="Private",t.Public="Public",t.Work="Work",t}(n||{});Object.keys(n).map(t=>n[t])},1101:(S,l,e)=>{e.d(l,{z:()=>n});var n=function(t){return t.Home="Home",t.Mobile="Mobile",t.Work="Work",t}(n||{});Object.keys(n).map(t=>n[t])},7263:(S,l,e)=>{e.d(l,{v:()=>n});var n=function(o){return o.Equal="Equal",o.GreaterThan="GreaterThan",o.GreaterThanOrEqual="GreaterThanOrEqual",o.LessThan="LessThan",o.LessThanOrEqual="LessThanOrEqual",o.Not="Not",o.RangeWithBoundaries="RangeWithBoundaries",o.RangeWithoutBoundaries="RangeWithoutBoundaries",o}(n||{})},1646:(S,l,e)=>{e.d(l,{n:()=>n});var n=function(t){return t.NationalCard="NationalCard",t.BankCard="BankCard",t.DriverLicense="DriverLicense",t.Passport="Passport",t.TravelDocument="TravelDocument",t.Other="Other",t}(n||{});Object.keys(n).map(t=>n[t])},9155:(S,l,e)=>{e.d(l,{m:()=>n});var n=function(t){return t.Male="Male",t.Female="Female",t}(n||{});Object.keys(n).map(t=>n[t])},6494:(S,l,e)=>{e.d(l,{x:()=>n});var n=function(o){return o.Email="Email",o.Sms="Sms",o.Push="Push",o}(n||{})}}]);