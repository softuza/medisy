import{a as d}from"./chunk-R65QW3CQ.js";import{a as H}from"./chunk-GFLYJLDW.js";import"./chunk-FGMVZWF3.js";import{d as te,e as S,g as oe,i as ie,j as ne}from"./chunk-UAZW7FGY.js";import"./chunk-M2NEG5CC.js";import"./chunk-MQXCYNFG.js";import"./chunk-3LMPIIKD.js";import{b as Q,f as J,g as K,h as W,j as Y,k as x}from"./chunk-GIJ4QTQ6.js";import"./chunk-WKPE2UQU.js";import{a as V,b as G,d as z,e as w,g as U}from"./chunk-JAW6KWGU.js";import{q,r as X,u as k}from"./chunk-EQUM2IFK.js";import{b as $}from"./chunk-MQ23OO47.js";import"./chunk-DBTUXQ7J.js";import"./chunk-FCC5WWQX.js";import{d as N,f as O,g as b,l as y,o as F,r as E,s as I,u as A}from"./chunk-BY3MBLZE.js";import{b as C,c as g}from"./chunk-JDDIJKK3.js";import{a as ee}from"./chunk-BBNH2Z4M.js";import"./chunk-5YVQVX3T.js";import"./chunk-PIZTKFGH.js";import{a as j}from"./chunk-B5BNSRLB.js";import"./chunk-DUTNRR75.js";import{p as h,r as R,s as B,v as L,x as P}from"./chunk-GRRRCQTG.js";import"./chunk-YWRPBN7L.js";import"./chunk-LTX4MEGJ.js";import{Na as Z}from"./chunk-OXQ5KKM6.js";import{Ia as v,Jc as D,Kb as p,Lb as c,Mb as m,Xb as _,cb as s,ja as n,lb as M,na as l,nb as T,qc as u,rc as f,zb as r}from"./chunk-IVT7A37N.js";import"./chunk-FRTEIQAP.js";var ae=(()=>{let t=class t extends J{constructor(){let o=n(V);super(o),this.fb=n(I),this.data=n(G),this.cstnService=n(d),this.teams=this.cstnService.teams.getAll({orderBy:["name"],filterBehavior:L.Or,filters:P.create().equalIf("id",this.data?.zoneTeam?.teamId).notAnyIf("zones.zoneId",this.data?.zoneId).filters()});let e=this.fb;this.dialog=o;let i=this.data;this.form=e.group({teamId:[i?.zoneTeam?.teamId,[N.required]]});}submit(){this.IsValid()&&(this.data?.zoneTeam?this.save(this.cstnService.zones.teams.update(this.data.zoneId,this.data.zoneTeam.id,this.form.value)):this.save(this.cstnService.zones.teams.create(this.data.zoneId,this.form.value)));}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-zones-teams-save"]],standalone:!0,features:[u([d]),T,f],decls:5,vars:6,consts:()=>{let o;return o="Team",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","teamId","label",o,3,"source"],[3,"actions"]];},template:function(e,i){e&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2),c()(),m(4,"sz-ui-dialog-actions",3)),e&2&&(r("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),s(2),r("formGroup",i.form),s(),r("source",i.teams),s(),r("actions",i.actions));},dependencies:[A,y,O,b,F,E,U,w,q,x,K,W,k,X],encapsulation:2});let a=t;return a;})();var se=(()=>{let t=class t{constructor(){this.route=n(h),this.router=n(R),this.dialog=n(z),this.locale=n(D),this.cstnService=n(d),this.zone=v.required(),this.dataSource=new oe(["team.name"]),this.card={header:{title:j.teams},menu:g.more([C.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(S.uuid("id"),S.string("team.name"),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),S.menu(g.more([C.delete(this.openDeleteComponent.bind(this))])));}ngOnInit(){this.get();}openSaveComponent(o){this.dialog.open(ae,{data:{zoneId:this.zone().id,zoneTeam:o}}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openDeleteComponent(o){this.dialog.open(Y,{data:Q.delete(this.cstnService.zones.teams.delete(this.zone().id,o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.cstnService.zones.teams.get(this.zone().id,this.dataSource.getQuery()).pipe(ie(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-zone-teams"]],inputs:{zone:[1,"zone"]},standalone:!0,features:[u([d]),f],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(e,i){e&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),_("update",function(){return i.get();}),c()()),e&2&&(r("card",i.card),s(),r("dataSource",i.dataSource));},dependencies:[B,ne,te,Z,H],encapsulation:2});let a=t;return a;})();var me=(()=>{let t=class t{constructor(){this.cstnService=n(d),this.route=n(h),this.dialog=n(z),this.zone=this.route.snapshot.data.zone,this.alert=M(void 0),this.appBarConfig={title:this.zone.name,subtitle:this.zone.description};}};t.ɵfac=function(e){return new(e||t)();},t.ɵcmp=l({type:t,selectors:[["sz-constr-construction-zone"]],standalone:!0,features:[u([]),f],decls:5,vars:3,consts:[[3,"config"],[3,"alert"],[1,"tw-my-4"],[3,"zone"]],template:function(e,i){e&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),p(2,"div",2),m(3,"sz-constr-construction-zone-teams",3),c(),m(4,"div",2)),e&2&&(r("config",i.appBarConfig),s(),r("alert",i.alert()),s(2),r("zone",i.zone));},dependencies:[ee,$,se],encapsulation:2});let a=t;return a;})();var Ke=[{path:"",component:me}];export{Ke as default};/**i18n:5f6a3b0ec95f18f467ee79465875573287b82c9dbfc7b5810bd07d855187f9a0*/