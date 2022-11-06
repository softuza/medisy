"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[592],{1749:(f,l,e)=>{e.d(l,{h:()=>i});var t=e(3835),r=e(4650);let i=(()=>{class a{transform(n,u=!1){switch(n){case t.e.Second:return u?"s":"Second";case t.e.Minute:return u?"m":"Minute";case t.e.Hour:return u?"h":"Hour";case t.e.Day:return u?"d":"Day";case t.e.Month:return u?"m":"Month";case t.e.Year:return u?"m":"Year";case t.e.MicrogramPerMilliliter:return u?"\xb5g/mL":"MicrogramPerMilliliter";case t.e.MilligramPerMilliliter:return u?"mg/mL":"MilligramPerMilliliter";case t.e.NanogramPerDeciliter:return u?"ng/dL":"NanogramPerDeciliter";case t.e.MicrogramPerDeciliter:return u?"\xb5g/dL":"MicrogramPerDeciliter";case t.e.MilligramPerDeciliter:return u?"mg/dL":"MilligramPerDeciliter";case t.e.GramPerDeciliter:return u?"g/dL":"GramPerDeciliter";case t.e.UnitPerMilliliter:return u?"u/dL":"UnitPerMilliliter";case t.e.UnitPerLiter:return u?"u/l":"UnitPerLiter";case t.e.Percent:return u?"%":"Percent";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"dataUnitI18n",type:a,pure:!0}),a})()},806:(f,l,e)=>{e.d(l,{V:()=>i});var t=e(6381),r=e(4650);let i=(()=>{class a{transform(n){switch(n){case t.V.Private:return "Private";case t.V.Public:return "Public";case t.V.Work:return "Work";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"emailTypeI18n",type:a,pure:!0}),a})()},2564:(f,l,e)=>{e.d(l,{r:()=>i});var t=e(827),r=e(4650);let i=(()=>{class a{transform(n){switch(n){case t.z.Home:return "Home";case t.z.Mobile:return "Mobile";case t.z.Work:return "Work";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"phoneTypeI18n",type:a,pure:!0}),a})()},9373:(f,l,e)=>{e.d(l,{l:()=>i});var t=e(8893),r=e(4650);let i=(()=>{class a{transform(n){switch(n){case t.m.Female:return "Female";case t.m.Male:return "Male";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"sexI18n",type:a,pure:!0}),a})()},585:(f,l,e)=>{e.d(l,{r:()=>i});var t=e(5807),r=e(4650);let i=(()=>{class a{transform(n){switch(n){case t.D.Miss:return "Miss";case t.D.Mr:return "Mr";case t.D.Mrs:return "Mrs";case t.D.Ms:return "Ms";default:return""}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275pipe=r.Yjl({name:"titleI18n",type:a,pure:!0}),a})()},1155:(f,l,e)=>{e.d(l,{c:()=>i});var t=e(529),r=e(4650);let i=(()=>{class a{constructor(n){this.http=n,this.path="analysis-management/v1/analysis-types"}getAnalysisTypes(n){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:n})})}getAnalysisTypesCount(n){return this.http.get(`${this.path}/count`,{params:new t.LE({fromObject:n})})}createAnalysisType(n){return this.http.post(`${this.path}`,n)}deleteAnalysisType(n){return this.http.delete(`${this.path}/${n}`)}updateAnalysisType(n,u){return this.http.put(`${this.path}/${n}`,u)}}return a.\u0275fac=function(n){return new(n||a)(r.LFG(t.eN))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac}),a})()},1276:(f,l,e)=>{e.d(l,{F:()=>i});var t=e(529),r=e(4650);let i=(()=>{class a{constructor(n){this.http=n,this.path="analysis-management/v1/samples"}getSamples(n){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:n})})}getSamplesCount(n){return this.http.get(`${this.path}/count`,{params:new t.LE({fromObject:n})})}getSample(n){return this.http.get(`${this.path}/${n}`)}createSample(n){return this.http.post(`${this.path}`,n)}}return a.\u0275fac=function(n){return new(n||a)(r.LFG(t.eN))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac}),a})()},4841:(f,l,e)=>{e.d(l,{T:()=>i});var t=e(529),r=e(4650);let i=(()=>{class a{constructor(n){this.http=n,this.path="people-management/v1/languages"}getLanguages(n={pageIndex:1,pageSize:50,sortBy:"Name",sortDescending:!1}){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:n})})}}return a.\u0275fac=function(n){return new(n||a)(r.LFG(t.eN))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac}),a})()},1225:(f,l,e)=>{e.d(l,{v:()=>t});var t=(()=>{return(r=t||(t={})).Equal="Equal",r.GreaterThan="GreaterThan",r.GreaterThanOrEqual="GreaterThanOrEqual",r.LessThan="LessThan",r.LessThanOrEqual="LessThanOrEqual",r.Not="Not",r.RangeWithBoundaries="RangeWithBoundaries",r.RangeWithoutBoundaries="RangeWithoutBoundaries",t;var r})()},6381:(f,l,e)=>{e.d(l,{V:()=>t});var t=(()=>{return(r=t||(t={})).Private="Private",r.Public="Public",r.Work="Work",t;var r})()},827:(f,l,e)=>{e.d(l,{z:()=>t});var t=(()=>{return(r=t||(t={})).Home="Home",r.Mobile="Mobile",r.Work="Work",t;var r})()},8893:(f,l,e)=>{e.d(l,{m:()=>t});var t=(()=>{return(r=t||(t={})).Male="Male",r.Female="Female",t;var r})()},5807:(f,l,e)=>{e.d(l,{D:()=>t});var t=(()=>{return(r=t||(t={})).Mr="Mr",r.Mrs="Mrs",r.Miss="Miss",r.Ms="Ms",t;var r})()},7966:(f,l,e)=>{e.d(l,{d:()=>g});var t=e(2597),r=e(6895),i=e(7392),a=e(3546),o=e(3162),n=e(4650);let u=(()=>{class p{}return p.\u0275fac=function(_){return new(_||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[r.ez]}),p})();var y=e(4850),C=e(4859);let g=(()=>{class p{}return p.\u0275fac=function(_){return new(_||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({imports:[r.ez,i.Ps,a.QW,t.k,u,o.Cv,y.t,C.ot]}),p})()},4028:(f,l,e)=>{e.d(l,{A:()=>v});var t=e(4650),r=e(4512),i=e(6895),a=e(3546);let o=(()=>{class d{constructor(){}hasIcon(){return void 0!==this.icon}getIcon(){return"string"==typeof this.icon?this.icon:this.icon?.name}getClass(){return"string"==typeof this.icon||void 0===this.icon?.class?"material-symbols-outlined":this.icon?.class}}return d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["softuza-ui-icon"]],inputs:{icon:"icon"},decls:2,vars:3,consts:[[3,"className"]],template:function(s,c){1&s&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&s&&(t.Q6J("className",c.getClass()),t.uIk("data-icon",c.getIcon()),t.xp6(1),t.Oqu(c.getIcon()))},styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),d})();var n=e(3162),u=e(4850),y=e(4859);function C(d,m){if(1&d&&t._UZ(0,"softuza-ui-icon",6),2&d){const s=t.oxw();t.Q6J("icon",null==s.card?null:s.card.icon)}}function g(d,m){1&d&&t._UZ(0,"mat-divider")}function p(d,m){if(1&d){const s=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){const D=t.CHM(s).$implicit,E=t.oxw(2);return t.KtG(E.navigate(D.url))}),t._uU(1),t.qZA()}if(2&d){const s=m.$implicit;t.xp6(1),t.hij(" ",s.title," ")}}function M(d,m){if(1&d&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,p,2,1,"button",7),t.qZA()),2&d){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==s.card?null:s.card.actions)}}function _(d,m){1&d&&t._UZ(0,"mat-progress-bar",9)}const P=[[["","title",""]],[["","content",""]],[["","footer",""]]],T=["[title]","[content]","[footer]"];let v=(()=>{class d{constructor(s){this.router=s}navigate(s){s&&this.router.navigate([s])}hasIcon(){return void 0!==this.card?.icon}hasActions(){return null!=this.card?.actions&&this.card?.actions.length>0}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(r.F0))},d.\u0275cmp=t.Xpm({type:d,selectors:[["softuza-ui-card"]],inputs:{card:"card"},ngContentSelectors:T,decls:15,vars:5,consts:[[1,"card"],[2,"cursor","pointer",3,"click"],[1,"spacer"],[3,"icon",4,"ngIf"],[4,"ngIf"],["mode","indeterminate",4,"ngIf"],[3,"icon"],["mat-button","",3,"click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mode","indeterminate"]],template:function(s,c){1&s&&(t.F$t(P),t.TgZ(0,"mat-card",0)(1,"mat-card-header",1),t.NdJ("click",function(){return c.navigate(null==c.card?null:c.card.url)}),t.TgZ(2,"mat-card-subtitle"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-title"),t.Hsn(5),t.qZA(),t._UZ(6,"span",2),t.YNc(7,C,1,1,"softuza-ui-icon",3),t.qZA(),t.TgZ(8,"mat-card-content"),t.Hsn(9,1),t.YNc(10,g,1,0,"mat-divider",4),t.YNc(11,M,2,1,"mat-card-actions",4),t.qZA(),t.TgZ(12,"mat-card-footer"),t.Hsn(13,2),t.YNc(14,_,1,0,"mat-progress-bar",5),t.qZA()()),2&s&&(t.xp6(3),t.Oqu(null==c.card?null:c.card.subtitle),t.xp6(4),t.Q6J("ngIf",c.hasIcon()),t.xp6(3),t.Q6J("ngIf",c.hasActions()),t.xp6(1),t.Q6J("ngIf",c.hasActions()),t.xp6(3),t.Q6J("ngIf",!0===(null==c.card?null:c.card.loading)))},dependencies:[i.sg,i.O5,a.a8,a.dk,a.dn,a.n5,a.$j,a.hq,a.rt,o,n.pW,u.d,y.lW],styles:[".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after{content:attr(data-icon)}"]}),d})()},1219:(f,l,e)=>{e.d(l,{R:()=>i});var t=e(4650);const r=["*"];let i=(()=>{class a{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.timer=null,this.oldValue=0}set value(n){!n||(this.animate(this.oldValue,n),this.oldValue=n)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(n,u){const y=u-n;let g=Math.abs(Math.floor(this.duration/y));g=Math.max(g,50);const M=(new Date).getTime()+this.duration,_=()=>{const P=(new Date).getTime(),T=Math.max((M-P)/this.duration,0),v=Math.round(u-T*y);this.currentValue=v,Math.round(v)===Math.round(u)&&clearInterval(this.timer)};this.timer=setInterval(_,g),_()}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["softuza-ui-counter"]],inputs:{value:"value"},ngContentSelectors:r,decls:3,vars:1,template:function(n,u){1&n&&(t.F$t(),t.TgZ(0,"span"),t._uU(1),t.Hsn(2),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",u.currentValue," "))},encapsulation:2}),a})()},2597:(f,l,e)=>{e.d(l,{k:()=>r});var t=e(4650);let r=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})()},8823:(f,l,e)=>{e.d(l,{pg:()=>T,Tb:()=>d,Su:()=>n});var t=e(6895),r=e(4859),i=e(5412),a=e(1143),o=e(4650);let n=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[t.ez,i.Is,r.ot,a.n]}),m})();var u=e(4006),y=e(1135),C=e(7579),p=e(9293),M=e(5698),_=e(5237);function P(m,s){1&m&&o._UZ(0,"softuza-ui-alert",5),2&m&&o.Q6J("alert",s.ngIf)}let T=(()=>{class m extends class g{constructor(s){this.indicator$=new y.X(!1),this.alert$=new C.x,this.form=s}reset(){Object.keys(this.form.controls).forEach(s=>{this.form?.get(s)?.setValue(null)})}submit(){!this.form||this.form.valid?this.afterSubmit():Object.keys(this.form.controls).forEach(s=>{this.form?.get(s)?.markAsTouched({onlySelf:!0})})}afterSubmit(){}}{constructor(c,h){super(new u.cw({})),this.dialog=c,this.input=h,this.options=h}afterSubmit(){const c=this.options?.submitEvent;c?c.pipe((0,p.sU)(this.indicator$)).pipe((0,p.S3)(this.alert$)).pipe((0,M.q)(1)).subscribe(()=>{this.close(this.options.data)}):this.close(this.options.data)}close(c=null){this.dialog?.close(c)}}return m.\u0275fac=function(c){return new(c||m)(o.Y36(i.so),o.Y36(i.WI))},m.\u0275cmp=o.Xpm({type:m,selectors:[["softuza-ui-dialog-confirm"]],features:[o.qOj],decls:13,vars:10,consts:[["mat-dialog-title",""],[3,"alert",4,"ngIf"],[1,"mat-dialog-actions-end"],["mat-button","",3,"click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"alert"]],template:function(c,h){1&c&&(o.TgZ(0,"h2",0),o._uU(1),o.qZA(),o.YNc(2,P,1,1,"softuza-ui-alert",1),o.ALo(3,"async"),o.TgZ(4,"mat-dialog-content")(5,"p"),o._uU(6),o.qZA()(),o.TgZ(7,"mat-dialog-actions",2)(8,"button",3),o.NdJ("click",function(){return h.close()}),o._uU(9),o.qZA(),o.TgZ(10,"button",4),o.NdJ("click",function(){return h.submit()}),o.ALo(11,"async"),o._uU(12),o.qZA()()),2&c&&(o.xp6(1),o.Oqu(h.options.title),o.xp6(1),o.Q6J("ngIf",o.lcZ(3,6,h.alert$)),o.xp6(4),o.Oqu(h.options.message),o.xp6(3),o.Oqu(h.options.cancelText),o.xp6(1),o.Q6J("disabled",o.lcZ(11,8,h.indicator$)),o.xp6(2),o.hij(" ",h.options.confirmText," "))},dependencies:[t.O5,i.uh,i.xY,i.H8,r.lW,_.w,t.Ov],encapsulation:2}),m})();"Confirm","Do you confirm this action?","Cancel","Confirm";const d={title:"Delete",message:"Are you sure to delete the selected element?",cancelText:"Close",confirmText:"Delete"}}}]);