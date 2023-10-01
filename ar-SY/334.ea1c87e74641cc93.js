"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[334],{334:(N,c,e)=>{e.r(c),e.d(c,{LaboratoriesModule:()=>X});var M=e(6814),r=e(6223),d=e(2296),S=e(7700),A=e(617),t=e(8109),u=e(6883),C=e(758),f=e(3576),g=e(9004),p=e(5041),i=e(7239),T=e(3572),l=e(8262),m=e(9598),E=e(8721),R=e(8180),o=e(5879),h=e(5974),I=e(8873),P=e(4622),L=e(6091);let v=(()=>{class _ extends f.Ku{constructor(s,a,n,O){super(n),this.mlabService=s,this.fb=a,this.dialog=n,this.data=O,this.form=a.group({name:[O?.name,[r.kI.required,r.kI.minLength(1)]],description:[O?.description,[]],address:[O?.address,[]]})}submit(){this.IsValid()&&this.save(this.data?this.mlabService.laboratories.update(this.data.id,this.form.value):this.mlabService.laboratories.create(this.form.value))}static#e=this.\u0275fac=function(a){return new(a||_)(o.Y36(u.t),o.Y36(r.qu),o.Y36(S.so),o.Y36(S.WI))};static#t=this.\u0275cmp=o.Xpm({type:_,selectors:[["medisy-laboratories-save"]],features:[o.qOj],decls:7,vars:3,consts:function(){let s,a,n;return s="\u0627\u0644\u0627\u0633\u0645",a="\u0627\u0644\u0648\u0635\u0641",n="\u0627\u0644\u0639\u0646\u0648\u0627\u0646",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",s],["formControlName","description","label",a],["formControlName","address","label",n],[3,"actions"]]},template:function(a,n){1&a&&(o._UZ(0,"sz-ui-dialog-header",0),o.TgZ(1,"mat-dialog-content")(2,"form",1),o._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-input",4),o.qZA()(),o._UZ(6,"sz-ui-dialog-actions",5)),2&a&&(o.Q6J("header",n.header),o.xp6(2),o.Q6J("formGroup",n.form),o.xp6(4),o.Q6J("actions",n.actions))},dependencies:[r._Y,r.JJ,r.JL,r.sg,r.u,S.xY,h.g,I.L,P.Y,L.t],encapsulation:2})}return _})();var D=e(8359),Y=e(3144),B=e(2516);const $=[{path:"",component:(()=>{class _{constructor(s,a){this.dialog=s,this.mlabService=a,this.dataSource=new T.b2(m.J.pagedSorted("name")),this.dataSource.columns=[l.h.nameHyperlink(n=>n.id),l.h.createdAt(),l.h.menu([T.od.edit(n=>this.openSaveComponent(n))])],this.get()}openSaveComponent(s){this.dialog.open(v,{data:s}).afterClosed().pipe((0,R.q)(1)).subscribe(n=>{this.dataSource.updateOrPushItem(n)})}openLaboratoryDeleteComponent(s){this.dialog.open(f.fN,{data:f.cb.delete(this.mlabService.laboratories.delete(s.id),s)}).afterClosed().pipe((0,R.q)(1)).subscribe(n=>{this.dataSource.delete(n)})}get(){this.mlabService.laboratories.get(this.dataSource.filterModel).pipe((0,E.sU)(this.dataSource.indicator),(0,R.q)(1)).subscribe(s=>{this.dataSource.set(s.items,s.count)})}static#e=this.\u0275fac=function(a){return new(a||_)(o.Y36(S.uw),o.Y36(u.t))};static#t=this.\u0275cmp=o.Xpm({type:_,selectors:[["medisy-laboratories"]],decls:8,vars:4,consts:function(){let s,a;return s="\u0627\u0644\u0645\u062E\u0627\u0628\u0631",a="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],s,[3,"dataSource","search"],["mat-flat-button","","color","primary","start","",3,"click"],a,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(a,n){1&a&&(o.TgZ(0,"sz-ui-header-basic")(1,"h5",0),o.SDv(2,1),o.qZA()(),o.TgZ(3,"sz-ui-table-filter",2),o.NdJ("search",function(){return n.get()}),o.TgZ(4,"button",3),o.NdJ("click",function(){return n.openSaveComponent()}),o.TgZ(5,"span"),o.SDv(6,4),o.qZA()()(),o.TgZ(7,"sz-ui-table",5),o.NdJ("update",function(){return n.get()}),o.qZA()),2&a&&(o.xp6(3),o.Q6J("dataSource",n.dataSource),o.xp6(4),o.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",n.dataSource))},dependencies:[d.lW,D.K,Y.f,B.z],encapsulation:2})}return _})()}];let X=(()=>{class _{static#e=this.\u0275fac=function(a){return new(a||_)};static#t=this.\u0275mod=o.oAB({type:_});static#o=this.\u0275inj=o.cJS({providers:[u.t],imports:[M.ez,r.u5,r.UX,t.Bz.forChild($),S.Is,A.Ps,d.ot,T.Vn,i.h,C.E3,g.g,p.n,f.su]})}return _})()},8873:(N,c,e)=>{e.d(c,{L:()=>p});var M=e(6814),r=e(6223),d=e(9157),S=e(2032),A=e(8237),t=e(5879);function u(i,T){if(1&i&&(t.TgZ(0,"mat-label"),t._uU(1),t.qZA()),2&i){const l=t.oxw();t.xp6(1),t.Oqu(l.label)}}function C(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,3),t.qZA())}function f(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,4),t.qZA())}function g(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,5),t.qZA())}let p=(()=>{class i extends A.l{constructor(l){super(l),this.ngControl=l}ngOnInit(){this.control=this.ngControl.control}static#e=this.\u0275fac=function(m){return new(m||i)(t.Y36(r.a5,10))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let l,m,E;return l="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",m="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",E="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],l,m,E]},template:function(m,E){1&m&&(t.TgZ(0,"mat-form-field",0),t.YNc(1,u,2,1,"mat-label",1),t.TgZ(2,"textarea",2),t._uU(3,"  "),t.qZA(),t.YNc(4,C,2,0,"mat-error",1),t.YNc(5,f,2,0,"mat-error",1),t.YNc(6,g,2,0,"mat-error",1),t.qZA()),2&m&&(t.xp6(1),t.Q6J("ngIf",E.label),t.xp6(1),t.Q6J("formControl",E.control)("value",E.value)("placeholder",E.placeholder),t.xp6(2),t.Q6J("ngIf",E.control.hasError("required")),t.xp6(1),t.Q6J("ngIf",E.control.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",E.control.hasError("maxlength")))},dependencies:[M.ez,M.O5,r.UX,r.Fj,r.JJ,r.oH,d.lN,d.KE,d.hX,d.TO,S.c,S.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]})}return i})()},9004:(N,c,e)=>{e.d(c,{g:()=>S});var M=e(5974),r=e(8873),d=e(5879);let S=(()=>{class A{static#e=this.\u0275fac=function(C){return new(C||A)};static#t=this.\u0275mod=d.oAB({type:A});static#o=this.\u0275inj=d.cJS({imports:[M.g,r.L]})}return A})()}}]);