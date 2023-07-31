"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[977],{9977:(c,r,o)=>{o.r(r),o.d(r,{PersonModule:()=>j});var a=o(6814),l=o(6223),P=o(2296),O=o(5195),m=o(7700),N=o(6385),f=o(617),M=o(7988),u=o(8109),h=o(465),C=o(5348),v=o(758),D=o(2595),I=o(2169),g=o(4110),R=o(5041),A=o(5738),p=o(8180),L=o(6981),Z=o(9004),n=o(5879),Y=o(4622),$=o(6091),y=o(5974),U=o(1122),z=o(851),X=o(5741),G=o(7336),J=o(2160);let V=(()=>{class t extends g.Ku{constructor(e,s,S,E){super(S),this.personService=e,this.fb=s,this.dialog=S,this.data=E,this.form=s.group({sex:[E.sex,[l.kI.required]],languageId:[E.languageId,[l.kI.required]],title:[E.title,[]],ssn:[E.ssn,[]],nationalityId:[E.nationalityId,[]],birthDate:[E.birthDate,[]]})}submit(){this.IsValid()&&this.save(this.personService.updatePerson(this.data.id,this.form.value))}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(C.R),n.Y36(l.qu),n.Y36(m.so),n.Y36(m.WI))},t.\u0275cmp=n.Xpm({type:t,selectors:[["medisy-people-person-save"]],standalone:!0,features:[n._Bn([]),n.qOj,n.jDz],decls:12,vars:3,consts:function(){let i,e;return i="SSN",e="BirthDate",[[3,"header"],[1,"sz-form",3,"formGroup"],[1,"sz-form-row"],["formControlName","nationalityId"],["formControlName","ssn","label",i],["formControlName","languageId"],["formControlName","sex"],["formControlName","title"],["formControlName","birthDate","label",e],[3,"actions"]]},template:function(e,s){1&e&&(n._UZ(0,"sz-ui-dialog-header",0),n.TgZ(1,"mat-dialog-content")(2,"form",1)(3,"div",2),n._UZ(4,"medisy-form-field-nationality",3)(5,"sz-ui-form-field-input",4),n.qZA(),n._UZ(6,"medisy-form-field-language",5),n.TgZ(7,"div",2),n._UZ(8,"medisy-form-field-sex",6)(9,"medisy-form-field-title",7),n.qZA(),n._UZ(10,"sz-ui-form-field-date",8),n.qZA()(),n._UZ(11,"sz-ui-dialog-actions",9)),2&e&&(n.Q6J("header",s.header),n.xp6(2),n.Q6J("formGroup",s.form),n.xp6(9),n.Q6J("actions",s.actions))},dependencies:[l.UX,l._Y,l.JJ,l.JL,l.sg,l.u,g.su,Y.Y,$.t,Z.g,y.g,U.L,L.F,z.d,X.t,G.e,J.V,m.Is,m.xY],encapsulation:2}),t})();var _=o(5850),F=o(2516),x=o(8145),B=o(9060);function Q(t,i){if(1&t&&(n.TgZ(0,"sz-ui-card",17),n._UZ(1,"sz-ui-counter",18),n.qZA()),2&t){const e=i.$implicit;n.Q6J("card",e),n.xp6(1),n.Q6J("value",null==e?null:e.counter)}}const K=[{path:"",component:(()=>{class t{constructor(e,s,S,E){this.dialog=e,this.analysisService=s,this.route=S,this.router=E,this.items=[{counter:0,icon:"science",subtitle:"Analyses",loading:!0}],this.person=this.route.snapshot.data.person,this.getAnlysesCount()}getAnlysesCount(){this.analysisService.getAnalysesCount({personIds:[this.person.id]}).subscribe(e=>{this.items[0].counter=e.count,this.items[0].loading=!1})}openSaveComponent(){this.dialog.open(V,{data:this.person}).afterClosed().pipe((0,p.q)(1)).subscribe(s=>{s&&(this.person=s)})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.uw),n.Y36(A.K),n.Y36(u.gz),n.Y36(u.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["medisy-peopel-person"]],features:[n._Bn([A.K])],decls:42,vars:5,consts:function(){let i,e,s,S,E,T;return i="Edit",e="Names",s="Phones",S="Emails",E="Addresses",T="Documents",[["start","",1,"sz-h5"],["mat-icon-button","","end","",3,"matMenuTriggerFor"],["itemMenu","matMenu"],["mat-menu-item","",3,"click"],i,["mat-menu-item","","routerLink","names"],e,["mat-menu-item","","routerLink","phones"],s,["mat-menu-item","","routerLink","emails"],S,["mat-menu-item","","routerLink","addresses"],E,["mat-menu-item","","routerLink","documents"],T,[1,"sz-grid-card"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["title","",2,"font-size","24px",3,"value"]]},template:function(e,s){if(1&e&&(n.TgZ(0,"sz-ui-header-basic")(1,"h5",0),n._uU(2),n.ALo(3,"personName"),n.qZA(),n.TgZ(4,"button",1)(5,"mat-icon"),n._uU(6,"more_vert"),n.qZA()(),n.TgZ(7,"mat-menu",null,2)(9,"button",3),n.NdJ("click",function(){return s.openSaveComponent()}),n.TgZ(10,"mat-icon"),n._uU(11,"edit"),n.qZA(),n.TgZ(12,"span"),n.SDv(13,4),n.qZA()(),n._UZ(14,"mat-divider"),n.TgZ(15,"button",5)(16,"mat-icon"),n._uU(17,"info"),n.qZA(),n.TgZ(18,"span"),n.SDv(19,6),n.qZA()(),n.TgZ(20,"button",7)(21,"mat-icon"),n._uU(22,"phone"),n.qZA(),n.TgZ(23,"span"),n.SDv(24,8),n.qZA()(),n.TgZ(25,"button",9)(26,"mat-icon"),n._uU(27,"alternate_email"),n.qZA(),n.TgZ(28,"span"),n.SDv(29,10),n.qZA()(),n.TgZ(30,"button",11)(31,"mat-icon"),n._uU(32,"home"),n.qZA(),n.TgZ(33,"span"),n.SDv(34,12),n.qZA()(),n.TgZ(35,"button",13)(36,"mat-icon"),n._uU(37,"badge"),n.qZA(),n.TgZ(38,"span"),n.SDv(39,14),n.qZA()()()(),n.TgZ(40,"div",15),n.YNc(41,Q,2,2,"sz-ui-card",16),n.qZA()),2&e){const S=n.MAs(8);n.xp6(2),n.Oqu(n.lcZ(3,3,s.person)),n.xp6(2),n.Q6J("matMenuTriggerFor",S),n.xp6(37),n.Q6J("ngForOf",s.items)}},dependencies:[a.sg,u.rH,f.Hw,_.X,F.z,x.R,M.VK,M.OP,M.p6,N.d,P.RK,B.Y],encapsulation:2}),t})()},{path:"names",loadComponent:()=>Promise.all([o.e(572),o.e(882),o.e(247)]).then(o.bind(o,2247)).then(t=>t.PersonNamesComponent)},{path:"phones",loadComponent:()=>Promise.all([o.e(572),o.e(882),o.e(961)]).then(o.bind(o,1961)).then(t=>t.PersonPhonesComponent)},{path:"emails",loadComponent:()=>Promise.all([o.e(572),o.e(882),o.e(814)]).then(o.bind(o,1814)).then(t=>t.PersonEmailsComponent)},{path:"documents",loadComponent:()=>Promise.all([o.e(572),o.e(882),o.e(257)]).then(o.bind(o,6257)).then(t=>t.PersonDocumentsComponent)},{path:"addresses",loadComponent:()=>Promise.all([o.e(572),o.e(882),o.e(396)]).then(o.bind(o,4396)).then(t=>t.PersonAddressesComponent)}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[C.R],imports:[a.ez,l.u5,u.Bz.forChild(K),O.QW,f.Ps,D.V,v.E3,g.su,R.n,I.c,M.Tx,N.t,m.Is,P.ot,h.X]}),t})()},465:(c,r,o)=>{o.d(r,{X:()=>l});var a=o(5879);let l=(()=>{class P{}return P.\u0275fac=function(m){return new(m||P)},P.\u0275mod=a.oAB({type:P}),P.\u0275inj=a.cJS({}),P})()}}]);