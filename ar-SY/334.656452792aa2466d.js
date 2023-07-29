"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[334],{334:(k,c,o)=>{o.r(c),o.d(c,{LaboratoriesModule:()=>_});var M=o(6814),i=o(6223),f=o(4630),u=o(2296),T=o(5195),v=o(5986),R=o(3680),l=o(7700),L=o(617),p=o(2032),C=o(9038),g=o(7988),P=o(1476),h=o(5940),N=o(8525),I=o(3566),Y=o(1545),D=o(5313),y=o(2596),B=o(8109),A=o(8652),$=o(758),S=o(4110),b=o(9004),z=o(5041),U=o(7239),E=o(3572),O=o(2191),J=o(9598),V=o(8721),m=o(8180),X=o(3590),t=o(5879),Z=o(5974),G=o(8873),Q=o(4622),x=o(6091);let F=(()=>{class n extends S.Ku{constructor(e,a,s,d){super(s),this.laboratoryService=e,this.fb=a,this.dialog=s,this.data=d,this.form=a.group({name:[d?.name,[i.kI.required,i.kI.minLength(1)]],description:[d?.description,[]],address:[d?.address,[]]})}submit(){this.IsValid()&&this.save(this.data?this.laboratoryService.updateLaboratory(this.data.id,this.form.value):this.laboratoryService.createLaboratory(this.form.value))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.v),t.Y36(i.qu),t.Y36(l.so),t.Y36(l.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratories-save"]],features:[t._Bn([X.L]),t.qOj],decls:7,vars:3,consts:function(){let r,e,a;return r="\u0627\u0644\u0627\u0633\u0645",e="\u0627\u0644\u0648\u0635\u0641",a="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",r],["formControlName","description","label",e],["formControlName","address","label",a],[3,"actions"]]},template:function(e,a){1&e&&(t._UZ(0,"sz-ui-dialog-header",0),t.TgZ(1,"mat-dialog-content")(2,"form",1),t._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),t.qZA()(),t._UZ(6,"sz-ui-dialog-actions",5)),2&e&&(t.Q6J("header",a.header),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(4),t.Q6J("actions",a.actions))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,l.xY,Z.g,G.J,Q.Y,x.t],encapsulation:2}),n})();var K=o(6273),W=o(4624),j=o(2516);const H=[{path:"",component:(()=>{class n{constructor(e,a){this.dialog=e,this.laboratoryService=a,this.dataSource=new E.b2(J.J.paged()),this.dataSource.columns=[O.h.nameHyperlink(s=>s.id),O.h.createdAt(),O.h.menu([E.od.edit(s=>this.openSaveComponent(s))])],this.get()}openSaveComponent(e){this.dialog.open(F,{data:e}).afterClosed().pipe((0,m.q)(1)).subscribe(s=>{this.dataSource.updateOrPushItem(s)})}openLaboratoryDeleteComponent(e){this.dialog.open(S.fN,{data:S.cb.delete(this.laboratoryService.deleteLaboratory(e.id),e)}).afterClosed().pipe((0,m.q)(1)).subscribe(s=>{this.dataSource.delete(s)})}get(){this.laboratoryService.getLaboratories(this.dataSource.filterModel).pipe((0,V.sU)(this.dataSource.indicator),(0,m.q)(1)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.uw),t.Y36(A.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:function(){let r,e;return r="\u0627\u0644\u0645\u062E\u0627\u0628\u0631",e="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],r,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],e,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(e,a){1&e&&(t.TgZ(0,"sz-ui-header-basic")(1,"h5",0),t.SDv(2,1),t.qZA()(),t.TgZ(3,"sz-ui-table-filter",2),t.NdJ("search",function(){return a.get()}),t.TgZ(4,"button",3),t.NdJ("click",function(){return a.openSaveComponent()}),t.TgZ(5,"span"),t.SDv(6,4),t.qZA()()(),t.TgZ(7,"sz-ui-table",5),t.NdJ("update",function(){return a.get()}),t.qZA()),2&e&&(t.xp6(3),t.Q6J("dataSource",a.dataSource),t.xp6(4),t.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",a.dataSource))},dependencies:[K.K,W.f,j.z,u.lW],encapsulation:2}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[A.v],imports:[M.ez,i.u5,i.UX,B.Bz.forChild(H),l.Is,f.Bb,D.p0,P.TU,p.c,E.Vn,U.h,$.E3,b.g,z.n,v.p9,g.Tx,L.Ps,u.ot,N.LD,Y.T5,y.AV,C.ie,I.JX,R.XK,T.QW,h.Cq,S.su]}),n})()}}]);