"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[243],{4243:(R,M,o)=>{o.r(M),o.d(M,{TestGroupsModule:()=>Z});var p=o(6814),c=o(2296),l=o(7700),O=o(617),S=o(8109),t=o(6987),A=o(758),E=o(3576),P=o(5041),N=o(7239),f=o(3572),i=o(2191),T=o(8652),d=o(3590),m=o(9598),g=o(8721),h=o(8180),_=o(6223),L=o(4889),e=o(5879),v=o(4622),I=o(6091);let D=(()=>{class s extends E.Z2{constructor(n,r,a){super(r),this.fb=n,this.dialog=r,this.data=a,this.form=n.group({includeLaboratoryIds:[a.includeLaboratoryIds]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(_.qu),e.Y36(l.so),e.Y36(l.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-test-groups-filter"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:5,vars:4,consts:[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","includeLaboratoryIds",3,"multiple"],[3,"actions"]],template:function(n,r){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"medisy-form-field-laboratory",2),e.qZA()(),e._UZ(4,"sz-ui-dialog-actions",3)),2&n&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("actions",r.actions))},dependencies:[p.ez,_.UX,_._Y,_.JJ,_.JL,_.sg,_.u,l.Is,l.xY,E.su,v.Y,I.t,L.w],encapsulation:2}),s})();var G=o(9004),F=o(5974),U=o(8873);let z=(()=>{class s extends E.Ku{constructor(n,r,a,C){super(a),this.testGroupService=n,this.fb=r,this.dialog=a,this.data=C,this.form=r.group({name:[C?.name,[_.kI.required,_.kI.minLength(1)]],description:[C?.description,[]],isFavorite:[C?.isFavorite??!1,[_.kI.required]]})}submit(){this.IsValid()&&this.save(this.data?this.testGroupService.update(this.data.id,this.form.value):this.testGroupService.create(this.form.value))}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(t.C),e.Y36(_.qu),e.Y36(l.so),e.Y36(l.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-groups-save"]],standalone:!0,features:[e._Bn([]),e.qOj,e.jDz],decls:6,vars:3,consts:function(){let u,n;return u="\u0627\u0644\u0627\u0633\u0645",n="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",u],["formControlName","description","label",n],[3,"actions"]]},template:function(n,r){1&n&&(e._UZ(0,"sz-ui-dialog-header",0),e.TgZ(1,"mat-dialog-content")(2,"form",1),e._UZ(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),e.qZA()(),e._UZ(5,"sz-ui-dialog-actions",4)),2&n&&(e.Q6J("header",r.header),e.xp6(2),e.Q6J("formGroup",r.form),e.xp6(3),e.Q6J("actions",r.actions))},dependencies:[p.ez,_.UX,_._Y,_.JJ,_.JL,_.sg,_.u,l.Is,l.xY,E.su,v.Y,I.t,G.g,F.g,U.L],encapsulation:2}),s})();var Y=o(3582),y=o(3144),$=o(2516);const X=[{path:"",component:(()=>{class s{constructor(n,r){this.dialog=n,this.testGroupService=r,this.dataSource=new f.b2(m.J.paged()),this.dataSource.columns=[i.h.nameHyperlink(a=>a.id,a=>a.name),i.h.code(),i.h.createdAt(),f.UC.checkbox("isFavorite","\u062A\u0641\u0636\u064A\u0644",(a,C)=>{a.isFavorite=C,this.updateItem(a)}),i.h.menu([f.od.edit(a=>this.openSaveComponent(a)),f.od.delete(a=>this.openTestGroupDeleteComponent(a))])],this.get()}openFilterComponent(){this.dialog.open(D,{data:this.dataSource.filterModel}).afterClosed().pipe((0,h.q)(1)).subscribe(r=>{this.dataSource.updateFilterModel(r),this.get()})}openSaveComponent(n){this.dialog.open(z,{data:n}).afterClosed().pipe((0,h.q)(1)).subscribe(a=>{this.dataSource.updateOrPushItem(a)})}openTestGroupDeleteComponent(n){this.dialog.open(E.fN,{data:E.cb.delete(this.testGroupService.delete(n.id),n)}).afterClosed().pipe((0,h.q)(1)).subscribe(a=>{this.dataSource.delete(a)})}updateItem(n){this.testGroupService.update(n.id,n).subscribe(r=>{this.dataSource.update(r)})}get(){this.testGroupService.get(this.dataSource.filterModel).pipe((0,g.sU)(this.dataSource.indicator),(0,h.q)(1)).subscribe(n=>{this.dataSource.set(n.items,n.count)})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(l.uw),e.Y36(t.C))},s.\u0275cmp=e.Xpm({type:s,selectors:[["medisy-laboratory-test-groups"]],features:[e._Bn([T.v,d.L])],decls:8,vars:4,consts:function(){let u,n;return u="\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A",n="\u0625\u0636\u0627\u0641\u0629",[["start","",1,"sz-h5"],u,[3,"dataSource","search","filter"],["title","","mat-flat-button","","color","primary","start","",3,"click"],n,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(n,r){1&n&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return r.get()})("filter",function(){return r.openFilterComponent()}),e.TgZ(4,"button",3),e.NdJ("click",function(){return r.openSaveComponent()}),e.TgZ(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return r.get()}),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",r.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",r.dataSource))},dependencies:[c.lW,Y.K,y.f,$.z],encapsulation:2}),s})()}];let Z=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[t.C],imports:[p.ez,S.Bz.forChild(X),l.Is,O.Ps,c.ot,f.Vn,N.h,A.E3,E.su,P.n]}),s})()},8873:(R,M,o)=>{o.d(M,{L:()=>f});var p=o(6814),c=o(6223),l=o(9157),O=o(2032),S=o(2757),t=o(5879);function A(i,T){if(1&i&&(t.TgZ(0,"mat-label"),t._uU(1),t.qZA()),2&i){const d=t.oxw();t.xp6(1),t.Oqu(d.label)}}function E(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,3),t.qZA())}function P(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,4),t.qZA())}function N(i,T){1&i&&(t.TgZ(0,"mat-error"),t.SDv(1,5),t.qZA())}let f=(()=>{class i extends S.l{constructor(d){super(d),this.ngControl=d}ngOnInit(){this.control=this.ngControl.control}writeValue(d){this.value=d}}return i.\u0275fac=function(d){return new(d||i)(t.Y36(c.a5,10))},i.\u0275cmp=t.Xpm({type:i,selectors:[["sz-ui-form-field-textarea"]],standalone:!0,features:[t.qOj,t.jDz],decls:7,vars:7,consts:function(){let T,d,m;return T="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628",d="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u0627 \u064A\u062D\u0642\u0642 \u0627\u0644\u062D\u062F \u0627\u0644\u0627\u062F\u0646\u064A \u0644\u0644\u0637\u0648\u0644",m="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"tw-flex-1"],[4,"ngIf"],["matInput","",3,"formControl","value","placeholder"],T,d,m]},template:function(d,m){1&d&&(t.TgZ(0,"mat-form-field",0),t.YNc(1,A,2,1,"mat-label",1),t.TgZ(2,"textarea",2),t._uU(3,"  "),t.qZA(),t.YNc(4,E,2,0,"mat-error",1),t.YNc(5,P,2,0,"mat-error",1),t.YNc(6,N,2,0,"mat-error",1),t.qZA()),2&d&&(t.xp6(1),t.Q6J("ngIf",m.label),t.xp6(1),t.Q6J("formControl",m.control)("value",m.value)("placeholder",m.placeholder),t.xp6(2),t.Q6J("ngIf",m.control.hasError("required")),t.xp6(1),t.Q6J("ngIf",m.control.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",m.control.hasError("maxlength")))},dependencies:[p.ez,p.O5,c.UX,c.Fj,c.JJ,c.oH,l.lN,l.KE,l.hX,l.TO,O.c,O.Nt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),i})()},9004:(R,M,o)=>{o.d(M,{g:()=>O});var p=o(5974),c=o(8873),l=o(5879);let O=(()=>{class S{}return S.\u0275fac=function(A){return new(A||S)},S.\u0275mod=l.oAB({type:S}),S.\u0275inj=l.cJS({imports:[p.g,c.L]}),S})()}}]);