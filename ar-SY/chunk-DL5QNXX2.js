import{a as w,b as B,c as V}from"./chunk-LI7I2GFE.js";import{h as $}from"./chunk-FWZEH63T.js";import{b as Re}from"./chunk-BVDDTOMA.js";import{a as h}from"./chunk-JHPSZAE5.js";import{a as H}from"./chunk-LAXXIHXK.js";import{c as F,h as Fe,i as Ie,j as Ne,l as be,m as ze,n as Ae}from"./chunk-CWT2QOXX.js";import{b as Y}from"./chunk-RCTLQVYZ.js";import{d as j}from"./chunk-I5QX4CCA.js";import{a as ye,b as De,d as O,e as Pe,g as Oe}from"./chunk-3NLMA3OD.js";import{A as Ee,a as fe,b as _e,g as Se,o as Me,v as Ce,w as ve,x as ge,z as Te}from"./chunk-7ERNPK3U.js";import{A as P,d as k,e as ne,f as L,g as ae,k as se,l as le,m as me,p as pe,q as ce,t as G,w as y,y as de,z as he}from"./chunk-HA3OCK63.js";import{i as g,j as q}from"./chunk-TRBAPJPW.js";import{q as x}from"./chunk-QFHU2GEW.js";import{Ja as D,r as re,ya as ue}from"./chunk-T2UVNK6V.js";import{Bb as I,Cb as N,Db as b,Eb as m,Fb as l,Gb as c,M as Q,Qb as A,Sb as oe,Ub as v,bb as z,da as W,dc as R,ea as Z,ec as X,fb as n,gb as a,gc as E,ja as ee,jc as S,na as _,nb as C,oa as te,pa as ie,qb as M,ub as s,zb as f}from"./chunk-T2ST7G6M.js";var d=(()=>{let e=class e{constructor(i){this.http=i,this.basePath="softuza-portal",this.tiles=new j(this.http,`${this.basePath}/v1/tiles`),this.tileGroups=new j(this.http,`${this.basePath}/v1/tile-groups`),this.tileTypes=new j(this.http,`${this.basePath}/v1/tile-types`);}};e.ɵfac=function(o){return new(o||e)(ee(re));},e.ɵprov=W({token:e,factory:e.ɵfac});let t=e;return t;})();var U=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵdir=ie({type:e,inputs:{id:"id"}});let t=e;return t;})();var Ge=(()=>{let e=class e extends U{constructor(i,o,r){super(),this.mlabService=i,this.dialog=o,this.router=r,this.card={icon:"science",subtitle:h.analyses,clickFn:()=>this.router.navigate(["/mlab/analyses"]),actions:[V.action(h.add,()=>this.navigate("/mlab/analyses/create"))]},this.value=null,this.indicator=z(!1),this.get();}get(){this.mlabService.analyses.count({filters:[]}).pipe(F(this.indicator)).subscribe(i=>{this.value=i;});}navigate(i){this.router.navigate([i]);}};e.ɵfac=function(o){return new(o||e)(a(H),a(O),a(y));},e.ɵcmp=_({type:e,selectors:[["medisy-laboratory-tiles-analyses-count"]],standalone:!0,features:[C,S],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(o,r){o&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),o&2&&(s("card",r.card)("indicator",r.indicator),n(),s("value",r.value));},dependencies:[$,D,x,P,B,w],encapsulation:2});let t=e;return t;})();var $e=(()=>{let e=class e extends U{constructor(i,o,r){super(),this.mlabService=i,this.dialog=o,this.router=r,this.card={icon:"label",subtitle:h.specimens,clickFn:()=>this.navigate("/mlab/specimens"),actions:[V.action(h.show,()=>this.navigate("/mlab/specimens"))]},this.value=null,this.indicator=z(!1),this.get();}get(){this.mlabService.specimens.count({filters:[]}).pipe(F(this.indicator)).subscribe(i=>{this.value=i;});}navigate(i){this.router.navigate([i]);}};e.ɵfac=function(o){return new(o||e)(a(H),a(O),a(y));},e.ɵcmp=_({type:e,selectors:[["medisy-laboratory-tiles-specimens-count"]],standalone:!0,features:[C,S],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(o,r){o&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),o&2&&(s("card",r.card)("indicator",r.indicator),n(),s("value",r.value));},dependencies:[$,D,x,P,B,w],encapsulation:2});let t=e;return t;})();function Ve(t,e){if(t&1&&(m(0,"mat-label"),R(1),l()),t&2){let p=v();n(),X(p.label);}}function Ue(t,e){t&1&&(m(0,"mat-option"),R(1,"-"),l());}function Xe(t,e){if(t&1&&(m(0,"mat-option",4),R(1),l()),t&2){let p=e.$implicit,i=v();s("value",i.getOptionValue(p)),n(),X(i.getOptionContent(p));}}function ke(t,e){t&1&&(m(0,"mat-error"),A(1,5),l());}function qe(t,e){t&1&&(m(0,"mat-error"),A(1,6),l());}function Je(t,e){t&1&&(m(0,"mat-error"),A(1,7),l());}function Ke(t,e){t&1&&c(0,"mat-progress-bar",3);}var xe=(()=>{let e=class e extends Me{constructor(i,o){super(i),this.ngControl=i,this.sprtService=o,this.label=h.abbreviation;}ngOnInit(){this.control=this.ngControl.control,this.get();}get(){this.sprtService.tileTypes.getAll(null,["name"]).pipe(Q(1)).pipe(F(this.indicator)).subscribe(i=>{this.options.push(...i.items),this.totalPages=i.totalPages;});}};e.ɵfac=function(o){return new(o||e)(a(ne,10),a(d));},e.ɵcmp=_({type:e,selectors:[["medisy-form-field-tile-type"]],standalone:!0,features:[E([d]),C,S],decls:11,vars:10,consts:()=>{let i;i="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628";let o;o="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0644\u064A\u0633 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0648\u0644";let r;return r="\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0637\u0648\u0644",[[1,"container"],[2,"width","100%"],[3,"formControl","multiple","placeholder","szScrollIgnored","szScrolled"],["mode","indeterminate"],[3,"value"],i,o,r];},template:function(o,r){o&1&&(m(0,"div",0)(1,"mat-form-field",1),M(2,Ve,2,1,"mat-label"),m(3,"mat-select",2),oe("szScrolled",function(){return r.scroll();}),M(4,Ue,2,0,"mat-option"),N(5,Xe,2,2,"mat-option",4,I),l(),M(7,ke,2,0,"mat-error")(8,qe,2,0,"mat-error")(9,Je,2,0,"mat-error"),l(),M(10,Ke,1,0,"mat-progress-bar",3),l()),o&2&&(n(2),f(2,r.label?2:-1),n(),s("formControl",r.control)("multiple",r.multiple)("placeholder",r.placeholder)("szScrollIgnored",r.indicator()),n(),f(4,r.emptyOption?4:-1),n(),b(r.options),n(2),f(7,r.control.hasError("required")?7:-1),n(),f(8,r.control.hasError("min")?8:-1),n(),f(9,r.control.hasError("max")?9:-1),n(),f(10,r.indicator()?10:-1));},dependencies:[G,L,le,ge,Se,fe,_e,ve,ue,P,he,Re],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{position:relative}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:20px}"]});let t=e;return t;})();function Qe(t,e){t&1&&c(0,"medisy-form-field-tile-type",4),t&2&&s("multiple",!0);}var je=(()=>{let e=class e extends Fe{constructor(i,o,r,u){super(r),this.sprtService=i,this.fb=o,this.dialog=r,this.data=u,this.form=o.group({name:[u?.name,[k.required,k.minLength(1)]],description:[u?.description,[]],tileTypeIds:[]});}submit(){this.IsValid()&&(this.data?this.save(this.sprtService.tileGroups.update(this.data.id,this.form.value)):this.save(this.sprtService.tileGroups.create(this.form.value)));}};e.ɵfac=function(o){return new(o||e)(a(d),a(ce),a(ye),a(De));},e.ɵcmp=_({type:e,selectors:[["medisy-dashboard-save"]],standalone:!0,features:[E([d]),C,S],decls:7,vars:4,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let o;return o="\u0627\u0644\u0648\u0635\u0641",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","description","label",o],["formControlName","tileTypeIds",3,"multiple"],[3,"actions"]];},template:function(o,r){o&1&&(c(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),M(5,Qe,1,1,"medisy-form-field-tile-type",4),l()(),c(6,"sz-ui-dialog-actions",5)),o&2&&(s("header",r.header),n(2),s("formGroup",r.form),n(3),f(5,r.data?-1:5),n(),s("actions",r.actions));},dependencies:[G,se,L,ae,me,pe,Oe,Pe,ze,Ie,Ne,Ee,Ce,Te,xe],encapsulation:2});let t=e;return t;})();function We(t,e){if(t&1&&c(0,"medisy-laboratory-tiles-analyses-count",3),t&2){let p=v().$implicit;s("id",p.id);}}function Ze(t,e){if(t&1&&c(0,"medisy-laboratory-tiles-specimens-count",3),t&2){let p=v().$implicit;s("id",p.id);}}function et(t,e){if(t&1&&M(0,We,1,1,"medisy-laboratory-tiles-analyses-count",3)(1,Ze,1,1),t&2){let p=e.$implicit;f(0,p.tileType.identifier==="mlab-analyses-count"?0:p.tileType.identifier==="mlab-specimens-count"?1:-1);}}function tt(t,e){if(t&1&&(c(0,"sz-ui-header-info",1),m(1,"div",2),N(2,et,2,1,null,null,I),l()),t&2){let p=e.$implicit,i=v();s("title",p.name)("subTitle",p.description)("menu",i.tileGroupMenu)("data",p),n(2),b(p.tiles);}}var He=(()=>{let e=class e{constructor(i,o,r){this.sprtService=i,this.dialog=o,this.router=r,this.tileGroups=[],this.title=h.dashboard,this.manageTileGroups=!1,this.menu=q.more([g.add(()=>this.openSaveComponent()),g.divider(),g.manage(()=>{this.manageTileGroups=!this.manageTileGroups,this.manageTileGroups?this.tileGroupMenu=q.more([g.edit(u=>this.openSaveComponent(u)),g.divider(),g.delete(u=>this.openTileGroupDeleteComponent(u))]):this.tileGroupMenu=null;})]),this.tileGroupMenu=null,this.get();}openSaveComponent(i=null){this.dialog.open(je,{data:i}).afterClosed().subscribe(o=>{o&&this.get();});}openTileGroupDeleteComponent(i){console.log(i),this.dialog.open(be,{data:Ae.delete(this.sprtService.tileGroups.delete(i.id),i)}).afterClosed().subscribe(o=>{if(o){let r=this.tileGroups.indexOf(i);r>=0&&this.tileGroups.splice(r,1);}});}get(){this.sprtService.tileGroups.getAll().subscribe(i=>{this.tileGroups=i.items;});}};e.ɵfac=function(o){return new(o||e)(a(d),a(O),a(y));},e.ɵcmp=_({type:e,selectors:[["medisy-dashboard"]],standalone:!0,features:[E([d]),S],decls:3,vars:2,consts:[[3,"title","menu"],[3,"title","subTitle","menu","data"],[1,"sz-grid-card","tw-mb-2"],[3,"id"]],template:function(o,r){o&1&&(c(0,"sz-ui-header-info",0),N(1,tt,4,4,null,null,I)),o&2&&(s("title",r.title)("menu",r.menu),n(),b(r.tileGroups));},dependencies:[Y,Ge,$e],encapsulation:2});let t=e;return t;})();var Ye=[{path:"",component:He}];var Ii=(()=>{let e=class e{};e.ɵfac=function(o){return new(o||e)();},e.ɵmod=te({type:e}),e.ɵinj=Z({imports:[de.forChild(Ye),D,Y]});let t=e;return t;})();export{Ii as DashboardModule};/**i18n:5ad987f33fb36a4bb6d53ec4372590584614aa13df9413297fdfa1032f98b4a2*/