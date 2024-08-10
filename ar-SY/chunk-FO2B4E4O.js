import{a as m}from"./chunk-LFVCWVTA.js";import{a as oe}from"./chunk-HLRWMEWV.js";import{a as f,b as me,d as de,e as le,j as pe,k as I}from"./chunk-TL25PZOA.js";import"./chunk-IIRALN2P.js";import"./chunk-UF47Q52P.js";import"./chunk-K6V7CDNO.js";import"./chunk-HDESHI6J.js";import{e as ie,f as re,g as ne,i as ae,j as _,k as se}from"./chunk-FU2YQI4O.js";import{a as D}from"./chunk-RZMF5OBM.js";import{h as y,j as te}from"./chunk-2H57PQRQ.js";import{a as Q,b as J,d as g,e as K,g as v}from"./chunk-5Z2AVCMQ.js";import{r as Y,s as x,v as ee}from"./chunk-OTQOREXX.js";import{b as T}from"./chunk-ZFDGA7FN.js";import"./chunk-RVYZ6BY4.js";import"./chunk-WSRIOYTJ.js";import{c as W}from"./chunk-4NIIIJVR.js";import"./chunk-NSDPW5NR.js";import{d as P,f as j,g as V,l as G,n as w,q as U,r as $,u as Z}from"./chunk-HCMVICB7.js";import{r as X,t as k}from"./chunk-6FRRGOY6.js";import{a as z,c as q,e as C}from"./chunk-OML62A3D.js";import"./chunk-CMXQHIQB.js";import{ia as H,la as M}from"./chunk-YDNNJYIT.js";import"./chunk-7BDCTZU5.js";import{Ec as L,Fa as F,Kb as p,Lb as c,Mb as d,Xb as R,bb as s,cb as S,ea as b,ja as n,na as l,oa as E,ob as A,oc as u,pc as h,qb as B,zb as a}from"./chunk-5JWJCQP4.js";import"./chunk-E7WAML37.js";var ce=(()=>{let e=class e extends ie{constructor(o,t,i){super(t),this.fb=o,this.dialog=t,this.data=i,this.cstnService=n(m),this.teams=this.cstnService.teams.getAll({orderBy:["name"],filterBehavior:X.Or,filters:k.create().equalIf("id",this.data?.zoneTeam?.teamId).notAnyIf("zones.zoneId",this.data?.zoneId).filters()}),this.form=o.group({teamId:[i?.zoneTeam?.teamId,[P.required]]});}submit(){this.IsValid()&&(this.data?.zoneTeam?this.save(this.cstnService.zones.teams.update(this.data.zoneId,this.data.zoneTeam.id,this.form.value)):this.save(this.cstnService.zones.teams.create(this.data.zoneId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(S($),S(Q),S(J));},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-zones-teams-save"]],standalone:!0,features:[u([]),B,h],decls:5,vars:6,consts:()=>{let o;return o="\u0627\u0644\u0641\u0631\u064A\u0642",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","teamId","label",o,3,"source"],[3,"actions"]];},template:function(t,i){t&1&&(d(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),d(3,"sz-ui-form-field-select",2),c()(),d(4,"sz-ui-dialog-actions",3)),t&2&&(a("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),a("formGroup",i.form),s(),a("source",i.teams),s(),a("actions",i.actions));},dependencies:[Z,G,j,V,w,U,v,K,Y,_,re,ne,ee,x],encapsulation:2});let r=e;return r;})();var N=(()=>{let e=class e{constructor(){this.route=n(z),this.router=n(q),this.dialog=n(g),this.locale=n(L),this.cstnService=n(m),this.zone=F.required(),this.dataSource=new de(["team.name"]),this.card={header:{title:W.teams},menu:te.more([y.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(f.uuid("id"),f.string("team.name"),f.date("createdAt").setVisible(!1),f.date("updatedAt").setVisible(!1),me.menu([y.delete(o=>this.openDeleteComponent(o))]));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ce,{data:{zoneId:this.zone().id,zoneTeam:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(o){this.dialog.open(ae,{data:se.delete(this.cstnService.zones.teams.delete(this.zone().id,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.zones.teams.get(this.zone().id,this.dataSource.getQuery()).pipe(le(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-zone-teams"]],inputs:{zone:[1,"zone"]},standalone:!0,features:[u([m]),h],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,i){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),R("update",function(){return i.get();}),c()()),t&2&&(a("card",i.card),s(),a("paginationEnabled",!1)("dataSource",i.dataSource));},dependencies:[C,I,pe,M,oe],encapsulation:2});let r=e;return r;})();var ue=(()=>{let e=class e{constructor(){this.cstnService=n(m),this.route=n(z),this.dialog=n(g),this.zone=this.route.snapshot.data.zone,this.alert=A(void 0),this.appBarConfig={title:this.zone.name,subtitle:this.zone.description};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=l({type:e,selectors:[["sz-constr-construction-zone"]],features:[u([])],decls:5,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"zone"]],template:function(t,i){t&1&&(d(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),p(2,"div",2),d(3,"sz-constr-construction-zone-teams",3),c(),d(4,"div",2)),t&2&&(a("config",i.appBarConfig),s(),a("alert",i.alert()),s(2),a("zone",i.zone));},dependencies:[T,D,N],encapsulation:2});let r=e;return r;})();var St=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=E({type:e}),e.ɵinj=b({providers:[m],imports:[C.forChild([{path:"",component:ue}]),v,H,M,T,I,_,D,N]});let r=e;return r;})();export{St as ZoneModule};/**i18n:0723fdc6bb4a61bdf6e4521b7e87431ed83fc9fa1984f79dc75da1b4dd886659*/