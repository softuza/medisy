"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[592],{6756:(o,r,n)=>{n.d(r,{R:()=>l});var e=n(4650);const s=["*"];let l=(()=>{class a{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.timer=null,this.oldValue=0}set value(t){!t||(this.animate(this.oldValue,t),this.oldValue=t)}ngOnDestroy(){this.timer&&clearInterval(this.timer)}animate(t,u){const p=u-t;let c=Math.abs(Math.floor(this.duration/p));c=Math.max(c,50);const M=(new Date).getTime()+this.duration,_=()=>{const d=(new Date).getTime(),y=Math.max((M-d)/this.duration,0),h=Math.round(u-y*p);this.currentValue=h,Math.round(h)===Math.round(u)&&clearInterval(this.timer)};this.timer=setInterval(_,c),_()}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["softuza-medisy-counter"]],inputs:{value:"value"},ngContentSelectors:s,decls:3,vars:1,template:function(t,u){1&t&&(e.F$t(),e.TgZ(0,"span"),e._uU(1),e.Hsn(2),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",u.currentValue," "))},encapsulation:2}),a})()},9373:(o,r,n)=>{n.d(r,{l:()=>l});var e=n(8893),s=n(4650);let l=(()=>{class a{transform(t){switch(t){case e.m.Female:return "Female";case e.m.Male:return "Male";default:return""}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=s.Yjl({name:"sexI18n",type:a,pure:!0}),a})()},585:(o,r,n)=>{n.d(r,{r:()=>l});var e=n(5807),s=n(4650);let l=(()=>{class a{transform(t){switch(t){case e.D.Miss:return "Miss";case e.D.Mr:return "Mr";case e.D.Mrs:return "Mrs";case e.D.Ms:return "Ms";default:return""}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=s.Yjl({name:"titleI18n",type:a,pure:!0}),a})()},1155:(o,r,n)=>{n.d(r,{c:()=>l});var e=n(529),s=n(4650);let l=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/analysis-types"}getAnalysisTypes(t){return this.http.get(`${this.path}`,{params:new e.LE({fromObject:t})})}getAnalysisTypesCount(t){return this.http.get(`${this.path}/count`,{params:new e.LE({fromObject:t})})}createAnalysisType(t){return this.http.post(`${this.path}`,t)}deleteAnalysisType(t){return this.http.delete(`${this.path}/${t}`)}updateAnalysisType(t,u){return this.http.put(`${this.path}/${t}`,u)}}return a.\u0275fac=function(t){return new(t||a)(s.LFG(e.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})()},1276:(o,r,n)=>{n.d(r,{F:()=>l});var e=n(529),s=n(4650);let l=(()=>{class a{constructor(t){this.http=t,this.path="analysis-management/v1/samples"}getSamples(t){return this.http.get(`${this.path}`,{params:new e.LE({fromObject:t})})}getSamplesCount(t){return this.http.get(`${this.path}/count`,{params:new e.LE({fromObject:t})})}getSample(t){return this.http.get(`${this.path}/${t}`)}createSample(t){return this.http.post(`${this.path}`,t)}}return a.\u0275fac=function(t){return new(t||a)(s.LFG(e.eN))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})()},8893:(o,r,n)=>{n.d(r,{m:()=>e});var e=(()=>{return(s=e||(e={})).Male="Male",s.Female="Female",e;var s})()},5807:(o,r,n)=>{n.d(r,{D:()=>e});var e=(()=>{return(s=e||(e={})).Mr="Mr",s.Mrs="Mrs",s.Miss="Miss",s.Ms="Ms",e;var s})()}}]);