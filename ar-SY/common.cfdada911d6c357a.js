"use strict";(self.webpackChunkmedisy=self.webpackChunkmedisy||[]).push([[592],{4889:(v,u,e)=>{e.d(u,{w:()=>f});var t=e(5879),_=e(8652),l=e(6893),a=e(2119),d=e(7398),r=e(6223),p=e(8930),i=e(6814);let f=(()=>{class n extends l.m{constructor(o,s){super(o),this.ngControl=o,this.laboratoryService=s,this.label="\u0627\u0644\u0645\u062E\u0628\u0631",this.indicator=(0,t.tdS)(!0),this.contentFormat=m=>m.name,this.valueFormat=m=>m.id,this.items$=this.laboratoryService.getLaboratories().pipe((0,a.sU)(this.indicator),(0,d.U)(m=>m.items))}ngOnInit(){this.control=this.ngControl.control}writeValue(o){this.value=o}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.a5,10),t.Y36(_.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-form-field-laboratory"]],features:[t._Bn([_.v]),t.qOj],decls:2,vars:11,consts:[[3,"formControl","loading","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(o,s){1&o&&(t._UZ(0,"sz-ui-form-field-select",0),t.ALo(1,"async")),2&o&&t.Q6J("formControl",s.control)("loading",s.indicator())("items",t.lcZ(1,9,s.items$))("label",s.label)("placeholder",s.placeholder)("emptyOption",s.emptyOption)("multiple",s.multiple)("contentFn",s.contentFormat)("valueFn",s.valueFormat)},dependencies:[r.JJ,r.oH,p.E,i.Ov],encapsulation:2}),n})()},6202:(v,u,e)=>{e.d(u,{P:()=>f});var t=e(5879),_=e(6187),l=e(6893),a=e(2119),d=e(8180),r=e(7398),p=e(6223),i=e(8930);let f=(()=>{class n extends l.m{set person(o){this._person=o,this.selectPersonReferenceGroup()}constructor(o,s){super(o),this.ngControl=o,this.referenceGroupService=s,this.referenceGroups=[],this.label="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629",this.indicator=(0,t.tdS)(!0),this.contentFormat=m=>m.name,this.valueFormat=m=>this.valueFn?this.valueFn(m):m.id,this.referenceGroupService.getReferenceGroups().pipe((0,d.q)(1),(0,r.U)(m=>m.items)).pipe((0,a.sU)(this.indicator)).subscribe(m=>{this.referenceGroups=m,this.person&&this.selectPersonReferenceGroup()})}ngOnInit(){this.control=this.ngControl.control}writeValue(o){this.value=o}selectPersonReferenceGroup(){if(!this._person||0==this.referenceGroups.length)return;const o=this._person.sex;let s=null;this._person.birthDate&&(s=(Date.now()-new Date(this._person.birthDate).getTime())/36e5);for(let m=0;m<this.referenceGroups.length;++m){const E=this.referenceGroups[m];if(!o||!E.sex||E.sex===o){if(s){const O=E.startAge;if(O&&s<O)continue;const C=E.endAge;if(C&&s>C)continue}this.control.setValue(E.id);break}}}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(p.a5,10),t.Y36(_.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["medisy-form-field-reference-gourp"]],inputs:{person:"person"},features:[t._Bn([_.T]),t.qOj],decls:1,vars:9,consts:[[3,"formControl","loading","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(o,s){1&o&&t._UZ(0,"sz-ui-form-field-select",0),2&o&&t.Q6J("formControl",s.control)("loading",s.indicator())("items",s.referenceGroups)("label",s.label)("placeholder",s.placeholder)("emptyOption",s.emptyOption)("multiple",s.multiple)("contentFn",s.contentFormat)("valueFn",s.valueFormat)},dependencies:[p.JJ,p.oH,i.E],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})()},1175:(v,u,e)=>{e.d(u,{U:()=>i});var t=e(5879),_=e(3590),l=e(6893),a=e(2119),d=e(6223),r=e(8930),p=e(6814);let i=(()=>{class f extends l.m{constructor(c,o){super(c),this.ngControl=c,this.testClassService=o,this.label="\u0635\u0646\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631",this.indicator=(0,t.tdS)(!0),this.contentFormat=s=>s.name,this.valueFormat=s=>s.id,this.items$=this.testClassService.testClasses$.pipe((0,a.sU)(this.indicator))}ngOnInit(){this.control=this.ngControl.control}writeValue(c){this.value=c}}return f.\u0275fac=function(c){return new(c||f)(t.Y36(d.a5,10),t.Y36(_.L))},f.\u0275cmp=t.Xpm({type:f,selectors:[["medisy-form-field-test-class"]],features:[t._Bn([_.L]),t.qOj],decls:2,vars:11,consts:[[3,"formControl","loading","items","label","placeholder","emptyOption","multiple","contentFn","valueFn"]],template:function(c,o){1&c&&(t._UZ(0,"sz-ui-form-field-select",0),t.ALo(1,"async")),2&c&&t.Q6J("formControl",o.control)("loading",o.indicator())("items",t.lcZ(1,9,o.items$))("label",o.label)("placeholder",o.placeholder)("emptyOption",o.emptyOption)("multiple",o.multiple)("contentFn",o.contentFormat)("valueFn",o.valueFormat)},dependencies:[d.JJ,d.oH,r.E,p.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),f})()},8472:(v,u,e)=>{e.d(u,{f:()=>F});var t=e(6814),_=e(6223),l=e(4630),a=e(2296),d=e(8034),r=e(7700),p=e(6385),i=e(617),f=e(2032),n=e(5940),c=e(8525),o=e(4407),s=e(3524),m=e(807),E=e(5879);let O=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275mod=E.oAB({type:h}),h.\u0275inj=E.cJS({imports:[t.ez]}),h})();var C=e(6981),D=e(465);let F=(()=>{class h{}return h.\u0275fac=function(P){return new(P||h)},h.\u0275mod=E.oAB({type:h}),h.\u0275inj=E.cJS({imports:[t.ez,_.UX,r.Is,f.c,a.ot,n.Cq,O,c.LD,i.Ps,p.t,d.FA,l.Bb,D.L,o.E,s.su,m.g,C.F]}),h})()},6187:(v,u,e)=>{e.d(u,{T:()=>d});var t=e(9862),_=e(3971),l=e(9598),a=e(5879);let d=(()=>{class r{constructor(i){this.http=i,this.path="medisy-laboratory/v1/reference-groups"}getReferenceGroups(i=l.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:(0,_.c)(i)})})}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(t.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac}),r})()},3753:(v,u,e)=>{e.d(u,{F:()=>l});var t=e(9862),_=e(5879);let l=(()=>{class a{constructor(r){this.http=r,this.path="medisy-analysis/v1/samples"}getSamples(r){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:r})})}getSamplesCount(r){return this.http.get(`${this.path}/count`,{params:new t.LE({fromObject:r})})}getSample(r){return this.http.get(`${this.path}/${r}`)}createSample(r){return this.http.post(`${this.path}`,r)}}return a.\u0275fac=function(r){return new(r||a)(_.LFG(t.eN))},a.\u0275prov=_.Yz7({token:a,factory:a.\u0275fac}),a})()},3590:(v,u,e)=>{e.d(u,{L:()=>p});var t=e(9862),_=e(3971),l=e(9598),a=e(8180),d=e(7398),r=e(5879);let p=(()=>{class i{constructor(n){this.http=n,this.path="medisy-laboratory/v1/test-classes",this.testClasses$=this.getTestClasses().pipe((0,a.q)(1),(0,d.U)(c=>c.items))}getTestClasses(n=l.J.unpagedSorted("name")){return this.http.get(`${this.path}`,{params:new t.LE({fromObject:(0,_.c)(n)})})}}return i.\u0275fac=function(n){return new(n||i)(r.LFG(t.eN))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac}),i})()},7263:(v,u,e)=>{e.d(u,{v:()=>t});var t=(()=>((t=t||{}).Equal="Equal",t.GreaterThan="GreaterThan",t.GreaterThanOrEqual="GreaterThanOrEqual",t.LessThan="LessThan",t.LessThanOrEqual="LessThanOrEqual",t.Not="Not",t.RangeWithBoundaries="RangeWithBoundaries",t.RangeWithoutBoundaries="RangeWithoutBoundaries",t))()},696:(v,u,e)=>{e.d(u,{S:()=>_});var t=e(5879);let _=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({}),l})()}}]);