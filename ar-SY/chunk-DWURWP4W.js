import{a as A,b as I}from"./chunk-5IYTSPOG.js";import{h as D}from"./chunk-HNVGZFRE.js";import{a as f}from"./chunk-QKMKC3CH.js";import{f as Ee,g as Pe,h as we,j as Oe,k as Ne,l as Re}from"./chunk-DBFDBBEL.js";import{b as H,c as Ie}from"./chunk-EU67VDIO.js";import"./chunk-62HUTBRW.js";import{b as k}from"./chunk-KPHRAMAI.js";import{g as Y,j as O,l as $}from"./chunk-EJDXHBCB.js";import{a as ge,b as be,d as b,e as Te,g as ze}from"./chunk-VWNEGCRT.js";import{c as De,q as Fe,s as xe,t as Ae}from"./chunk-6PF2YSZT.js";import{c as T}from"./chunk-C2WWZD6X.js";import"./chunk-WNILOJP4.js";import{b as x}from"./chunk-ORZKHXQX.js";import{b as F,c as _}from"./chunk-WTX2KFGU.js";import"./chunk-QKGOYXSP.js";import{d as W,f as fe,g as _e,k as he,m as ve,p as Ce,q as Se,t as ye}from"./chunk-BBHJBBCY.js";import"./chunk-AH6US5BC.js";import{c as M,e as Me}from"./chunk-TDDK2KRV.js";import"./chunk-4UZQAMIE.js";import{ia as g}from"./chunk-IME5AGE5.js";import{s as ue}from"./chunk-APP24JVE.js";import{Cb as G,Eb as J,Fb as K,Gb as Q,Hb as m,Ib as l,Jb as c,Nb as V,O as q,Vb as j,Xb as h,Yb as le,Zb as ce,eb as S,ga as ie,gc as pe,ha as oe,ib as p,ic as de,jb as a,jc as C,ma as re,mc as u,nb as me,qa as d,qb as y,ra as ne,sa as ae,tb as L,va as N,wa as R,xa as se,xb as s}from"./chunk-JGYGEXT3.js";var Je=["*"],E=(()=>{let e=class e{constructor(){this.start=0,this.decimal=0,this.duration=800,this.currentValue=0,this.oldValue=0;}set value(o){o&&(this.animate(this.oldValue,o),this.oldValue=o);}ngOnDestroy(){this.timer&&clearInterval(this.timer);}animate(o,t){let r=t-o,v=50,X=Math.abs(Math.floor(this.duration/r));X=Math.max(X,v);let Ue=new Date().getTime()+this.duration,ee=()=>{let Xe=new Date().getTime(),qe=Math.max((Ue-Xe)/this.duration,0),te=Math.round(t-qe*r);this.currentValue=te,Math.round(te)===Math.round(t)&&clearInterval(this.timer);};this.timer=window.setInterval(ee,X),ee();}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=d({type:e,selectors:[["sz-ui-counter"]],inputs:{value:"value"},standalone:!0,features:[u],ngContentSelectors:Je,decls:3,vars:1,template:function(t,r){t&1&&(le(),m(0,"span"),pe(1),ce(2),l()),t&2&&(p(),de(" ",r.currentValue," "));},encapsulation:2});let i=e;return i;})();var P=(()=>{let e=class e{constructor(){this.managed=!1,this.removed=new me();}remove(){this.removed?.emit(this.tile);}};e.ɵfac=function(t){return new(t||e)();},e.ɵdir=ae({type:e,inputs:{tile:"tile",managed:"managed"},outputs:{removed:"removed"}});let i=e;return i;})();var Le=(()=>{let e=class e extends P{constructor(o,t,r){super(),this.mlabService=o,this.dialog=t,this.router=r,this.card={icon:"science",menu:$.more([O.delete(()=>this.remove())]),subtitle:_.analyses,clickFn:()=>this.router.navigate(["/mlab/analyses"]),actions:[I.action(_.add,()=>this.router.navigate(["/mlab/analyses/create"]))]},this.value=null,this.indicator=S(!1),this.get();}get(){this.mlabService.analyses.count({filters:[]}).pipe(T(this.indicator)).subscribe(o=>{this.value=o;});}};e.ɵfac=function(t){return new(t||e)(a(f),a(b),a(M));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-analyses-count"]],standalone:!0,features:[C([f]),y,u],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),t&2&&(s("card",r.card)("indicator",r.indicator),p(),s("value",r.value));},dependencies:[D,g,F,x,A,E],encapsulation:2});let i=e;return i;})();var Ge=(()=>{let e=class e extends P{constructor(o,t,r){super(),this.mlabService=o,this.dialog=t,this.router=r,this.card={icon:"biotech",subtitle:_.laboratories,clickFn:()=>this.router.navigate(["/mlab/laboratories"]),actions:[I.action(_.show,()=>this.router.navigate(["/mlab/laboratories"]))]},this.value=null,this.indicator=S(!1),this.get();}get(){this.mlabService.laboratories.count({filters:[]}).pipe(T(this.indicator)).subscribe(o=>{this.value=o;});}};e.ɵfac=function(t){return new(t||e)(a(f),a(b),a(M));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-laboratories-count"]],standalone:!0,features:[C([f]),y,u],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),t&2&&(s("card",r.card)("indicator",r.indicator),p(),s("value",r.value));},dependencies:[D,g,F,x,A,E],encapsulation:2});let i=e;return i;})();var Ve=(()=>{let e=class e extends P{constructor(o,t,r){super(),this.mlabService=o,this.dialog=t,this.router=r,this.card={icon:"label",subtitle:_.specimens,clickFn:()=>this.router.navigate(["/mlab/specimens"]),actions:[I.action(_.show,()=>this.router.navigate(["/mlab/specimens"]))]},this.value=null,this.indicator=S(!1),this.get();}get(){this.mlabService.specimens.count({filters:[]}).pipe(T(this.indicator)).subscribe(o=>{this.value=o;});}};e.ɵfac=function(t){return new(t||e)(a(f),a(b),a(M));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-specimens-count"]],standalone:!0,features:[C([f]),y,u],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),t&2&&(s("card",r.card)("indicator",r.indicator),p(),s("value",r.value));},dependencies:[D,g,F,x,A,E],encapsulation:2});let i=e;return i;})();var je=(()=>{let e=class e extends P{constructor(o,t,r){super(),this.mlabService=o,this.dialog=t,this.router=r,this.card={icon:"lab_profile",subtitle:_.testTypes,clickFn:()=>this.router.navigate(["/mlab/test-types"]),actions:[I.action(_.show,()=>this.router.navigate(["/mlab/test-types"]))]},this.value=null,this.indicator=S(!1),this.get();}get(){this.mlabService.testTypes.count({filters:[]}).pipe(T(this.indicator)).subscribe(o=>{this.value=o;});}};e.ɵfac=function(t){return new(t||e)(a(f),a(b),a(M));},e.ɵcmp=d({type:e,selectors:[["sz-medisy-laboratory-test-types-count"]],standalone:!0,features:[C([f]),y,u],decls:2,vars:3,consts:[[3,"card","indicator"],["title","",3,"value"]],template:function(t,r){t&1&&(m(0,"sz-ui-card",0),c(1,"sz-ui-counter",1),l()),t&2&&(s("card",r.card)("indicator",r.indicator),p(),s("value",r.value));},dependencies:[D,g,F,x,A,E],encapsulation:2});let i=e;return i;})();var w=(()=>{let e=class e extends Ie{constructor(o){super(o,"softuza-portal"),this.tiles=new H(this.http,`${this.basePath}/v1/tiles`),this.tileGroups=new H(this.http,`${this.basePath}/v1/tile-groups`),this.tileTypes=new H(this.http,`${this.basePath}/v1/tile-types`);}};e.ɵfac=function(t){return new(t||e)(re(ue));},e.ɵprov=ie({token:e,factory:e.ɵfac});let i=e;return i;})();var Be=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=d({type:e,selectors:[["sz-ui-loader"]],standalone:!0,features:[u],decls:5,vars:0,consts:[["viewBox","0 0 24 24",1,"tw-animate-spin","tw-h-10","tw-w-10"],["cx","12","cy","12","r","10","fill","none","stroke-width","4",1,"tw-opacity-25","tw-bg-current"],["x","0","y","0","width","24","height","24","rx","12","ry","12",1,"tw-opacity-75",2,"fill","#03a9f4"],["attributeName","rx","values","12;0;12","dur","1.5s","repeatCount","indefinite"],["attributeName","ry","values","12;0;12","dur","1.5s","repeatCount","indefinite"]],template:function(t,r){t&1&&(se(),m(0,"svg",0),c(1,"circle",1),m(2,"rect",2),c(3,"animate",3)(4,"animate",4),l()());}});let i=e;return i;})();function Ke(i,e){if(i&1&&c(0,"sz-ui-form-field-select",4),i&2){let n=h();s("source",n.tileTypes)("multiple",!0);}}var He=(()=>{let e=class e extends Ee{constructor(o,t,r,v){super(r),this.sprtService=o,this.fb=t,this.dialog=r,this.data=v,this.tileTypes=this.sprtService.tileTypes.getAll({orderBy:["name"]}),this.form=t.group({name:[v?.name,[W.required,W.minLength(1)]],description:[v?.description,[]],tileTypeIds:[]});}submit(){this.IsValid()&&(this.data?this.save(this.sprtService.tileGroups.update(this.data.id,this.form.value)):this.save(this.sprtService.tileGroups.create(this.form.value)));}};e.ɵfac=function(t){return new(t||e)(a(w),a(Se),a(ge),a(be));},e.ɵcmp=d({type:e,selectors:[["portal-dashboard-save"]],standalone:!0,features:[C([w]),y,u],decls:7,vars:4,consts:()=>{let o;o="\u0627\u0644\u0627\u0633\u0645";let t;t="\u0627\u0644\u0648\u0635\u0641";let r;return r="\u0627\u0644\u0646\u0645\u0637",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",t],["formControlName","tileTypeIds","label",r,3,"source","multiple"],[3,"actions"]];},template:function(t,r){t&1&&(c(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3),L(5,Ke,1,2,"sz-ui-form-field-select",4),l()(),c(6,"sz-ui-dialog-actions",5)),t&2&&(s("header",r.header),p(2),s("formGroup",r.form),p(3),G(5,r.data?-1:5),p(),s("actions",r.actions));},dependencies:[ye,he,fe,_e,ve,Ce,ze,Te,Ne,Pe,we,Ae,De,xe,Fe],encapsulation:2});let i=e;return i;})();function Qe(i,e){i&1&&(m(0,"div",2),c(1,"sz-ui-loader"),l());}function We(i,e){if(i&1){let n=V();m(0,"sz-medisy-laboratory-analyses-count",6),j("removed",function(t){N(n);let r=h(4);return R(r.removeTile(t));}),l();}if(i&2){let n=h().$implicit;s("tile",n);}}function Ye(i,e){if(i&1){let n=V();m(0,"sz-medisy-laboratory-specimens-count",6),j("removed",function(t){N(n);let r=h(4);return R(r.removeTile(t));}),l();}if(i&2){let n=h().$implicit;s("tile",n);}}function Ze(i,e){if(i&1){let n=V();m(0,"sz-medisy-laboratory-laboratories-count",6),j("removed",function(t){N(n);let r=h(4);return R(r.removeTile(t));}),l();}if(i&2){let n=h().$implicit;s("tile",n);}}function et(i,e){if(i&1){let n=V();m(0,"sz-medisy-laboratory-test-types-count",6),j("removed",function(t){N(n);let r=h(4);return R(r.removeTile(t));}),l();}if(i&2){let n=h().$implicit;s("tile",n);}}function tt(i,e){if(i&1&&L(0,We,1,1,"sz-medisy-laboratory-analyses-count",5)(1,Ye,1,1)(2,Ze,1,1)(3,et,1,1),i&2){let n=e.$implicit;G(0,n.tileType.identifier==="mlab-analyses-count"?0:n.tileType.identifier==="mlab-specimens-count"?1:n.tileType.identifier==="mlab-laboratories-count"?2:n.tileType.identifier==="mlab-test-classes-count"?3:-1);}}function it(i,e){if(i&1&&(c(0,"sz-ui-header-info",3),m(1,"div",4),K(2,tt,4,1,null,null,J),l()),i&2){let n=e.$implicit,o=h(2);s("title",n.name)("subtitle",n.description)("menu",o.tileGroupMenu)("data",n),p(2),Q(n.tiles);}}function ot(i,e){if(i&1&&K(0,it,4,4,null,null,J),i&2){let n=h();Q(n.tileGroups);}}var ke=(()=>{let e=class e{constructor(o,t,r){this.sprtService=o,this.dialog=t,this.router=r,this.tileGroups=[],this.title=_.dashboard,this.manageTileGroups=!1,this.indicator=S(!1),this.menu=$.more([O.add(()=>this.openSaveComponent()),Y.divider(),O.manage(()=>{this.manageTileGroups=!this.manageTileGroups,this.manageTileGroups?this.tileGroupMenu=$.more([O.edit(v=>this.openSaveComponent(v)),Y.divider(),O.delete(v=>this.openTileGroupDeleteComponent(v))]):this.tileGroupMenu=null;})]),this.tileGroupMenu=null,this.get();}removeTile(o){this.sprtService.tiles.delete(o.id).pipe(q(1)).subscribe(()=>{this.tileGroups.forEach(t=>{t.tiles=t.tiles.filter(r=>r.id!==o.id);});});}openSaveComponent(o=null){this.dialog.open(He,{data:o}).afterClosed().subscribe(t=>{t&&this.get();});}openTileGroupDeleteComponent(o){this.dialog.open(Oe,{data:Re.delete(this.sprtService.tileGroups.delete(o.id),o)}).afterClosed().subscribe(t=>{t&&(this.tileGroups=this.tileGroups.filter(r=>r.id!==t.id));});}get(){this.sprtService.tileGroups.getAll().pipe(T(this.indicator),q(1)).subscribe(o=>{this.tileGroups=o.items;});}};e.ɵfac=function(t){return new(t||e)(a(w),a(b),a(M));},e.ɵcmp=d({type:e,selectors:[["portal-dashboard"]],standalone:!0,features:[C([w]),u],decls:3,vars:3,consts:[[3,"title","menu"],["class","tw-flex tw-flex-col tw-justify-center tw-items-center"],[1,"tw-flex","tw-flex-col","tw-justify-center","tw-items-center"],[3,"title","subtitle","menu","data"],[1,"sz-grid-card","tw-mb-2"],[3,"tile"],[3,"tile","removed"]],template:function(t,r){t&1&&(c(0,"sz-ui-header-info",0),L(1,Qe,2,0,"div",1)(2,ot,2,0)),t&2&&(s("title",r.title)("menu",r.menu),p(),G(1,r.indicator()?1:2));},dependencies:[k,Be,Le,Ve,Ge,je],encapsulation:2});let i=e;return i;})();var ho=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=ne({type:e}),e.ɵinj=oe({imports:[Me.forChild([{path:"",component:ke}]),g,k]});let i=e;return i;})();export{ho as DashboardModule};/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/