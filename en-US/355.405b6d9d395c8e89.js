"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[355],{355:(_,T,t)=>{t.r(T),t.d(T,{SamplesModule:()=>q});var M,u,E=t(6814),r=t(6223),p=t(4630),A=t(9014),m=t(2296),R=t(5195),v=t(5986),f=t(3680),d=t(7700),I=t(617),N=t(2032),y=t(9038),D=t(7988),Y=t(1476),F=t(5940),P=t(8525),h=t(3566),$=t(1545),B=t(5313),U=t(2596),O=t(8109),Z=t(758),z=t(5041),J=t(7239),g=t(3572),X=t(465),L=t(3753),b=t(9598),G=t(8721),C=t(8180);M||(M={}),u||(u={});var c,l=(()=>((l=l||{}).Blood="Blood",l.Semen="Semen",l.Sputun="Sputun",l.Stool="Stool",l.Urine="Urine",l.Saliva="Saliva",l.Sweat="Sweat",l.Hair="Hair",l.Fingernail="Fingernail",l.Biopsy="Biopsy",l.Fluid="Fluid",l.Swab="Swab",l))();c||(c={});var j=t(4110),e=t(5879),Q=t(9157),W=t(1746);function H(n,a){if(1&n&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&n){const o=a.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o," ")}}let K=(()=>{class n extends j.Ts{constructor(o,s,S){super(s),this.fb=o,this.dialog=s,this.data=S,this.sampleTypes=Object.keys(l).map(i=>l[i]),this.biopsyTypes=Object.keys(M).map(i=>M[i]),this.fluidTypes=Object.keys(u).map(i=>u[i]),this.swabTypes=Object.keys(c).map(i=>c[i]),this.form=o.group({sampleType:[S.sampleType],swabType:[S.swabType],fluidType:[S.fluidType],biopsyType:[S.biopsyType]})}submit(){this.IsValid()&&this.dialog?.close(this.form.value)}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.qu),e.Y36(d.so),e.Y36(d.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-samples-filter"]],features:[e._Bn([]),e.qOj],decls:15,vars:4,consts:function(){let a,o,s,S;return a="Filter",o="Type",s="Close",S="Save",[["mat-dialog-title",""],a,[3,"alert"],[1,"sz-form",3,"formGroup"],[1,"tw-flex-1"],["formControlName","sampleType","placeholder",o],[3,"value",4,"ngFor","ngForOf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],s,["mat-flat-button","","color","primary",3,"disabled","click"],S,[3,"value"]]},template:function(o,s){1&o&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e._UZ(2,"sz-ui-alert",2),e.TgZ(3,"mat-dialog-content")(4,"form",3)(5,"mat-form-field",4)(6,"mat-select",5)(7,"mat-option"),e._uU(8,"-"),e.qZA(),e.YNc(9,H,2,2,"mat-option",6),e.qZA()()()(),e.TgZ(10,"mat-dialog-actions",7)(11,"button",8),e.NdJ("click",function(){return s.dialog.close()}),e.SDv(12,9),e.qZA(),e.TgZ(13,"button",10),e.NdJ("click",function(){return s.submit()}),e.SDv(14,11),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("alert",s.alert()),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(5),e.Q6J("ngForOf",s.sampleTypes),e.xp6(4),e.Q6J("disabled",s.indicator()))},dependencies:[E.sg,r._Y,r.JJ,r.JL,r.sg,r.u,d.uh,d.xY,d.H8,f.ey,Q.KE,W.R,m.lW,P.gD],encapsulation:2}),n})();var V=t(6273),x=t(4624),w=t(2516);const k=[{path:"",component:(()=>{class n{constructor(o,s){this.dialog=o,this.sampleService=s,this.dataSource=new g.b2(b.J.pagedSorted("-createdAt")),this.get()}openFilterComponent(){this.dialog.open(K,{data:this.dataSource.filterModel}).afterClosed().pipe((0,C.q)(1)).subscribe(s=>{this.dataSource.updateFilterModel(s),this.get()})}get(){this.sampleService.getSamples(this.dataSource.filterModel).pipe((0,G.sU)(this.dataSource.indicator),(0,C.q)(1)).subscribe(o=>{this.dataSource.set(o.items,o.count)})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(d.uw),e.Y36(L.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["medisy-laboratory-samples"]],decls:8,vars:4,consts:function(){let a,o;return a="Samples",o="Add",[["start","",1,"sz-h5"],a,[3,"dataSource","search","filter"],["title","","mat-flat-button","","routerLink","create","color","primary","start",""],o,[3,"paginationEnabled","stateEnabled","dataSource","update"]]},template:function(o,s){1&o&&(e.TgZ(0,"sz-ui-header-basic")(1,"h5",0),e.SDv(2,1),e.qZA()(),e.TgZ(3,"sz-ui-table-filter",2),e.NdJ("search",function(){return s.get()})("filter",function(){return s.openFilterComponent()}),e.TgZ(4,"button",3)(5,"span"),e.SDv(6,4),e.qZA()()(),e.TgZ(7,"sz-ui-table",5),e.NdJ("update",function(){return s.get()}),e.qZA()),2&o&&(e.xp6(3),e.Q6J("dataSource",s.dataSource),e.xp6(4),e.Q6J("paginationEnabled",!0)("stateEnabled",!0)("dataSource",s.dataSource))},dependencies:[O.rH,V.K,x.f,w.z,m.lW],encapsulation:2}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[L.F],imports:[E.ez,r.u5,r.UX,O.Bz.forChild(k),d.Is,p.Bb,B.p0,Y.TU,N.c,g.Vn,J.h,Z.E3,z.n,v.p9,D.Tx,I.Ps,m.ot,P.LD,$.T5,U.AV,y.ie,h.JX,f.XK,R.QW,A.g,F.Cq,X.L]}),n})()},465:(_,T,t)=>{t.d(T,{L:()=>r});var E=t(5879);let r=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275mod=E.oAB({type:p}),p.\u0275inj=E.cJS({}),p})()}}]);