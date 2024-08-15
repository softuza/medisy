import{a as Re}from"./chunk-OXDEBSO7.js";import{a as l}from"./chunk-TELB3FFH.js";import{a as N}from"./chunk-KPFTDPHF.js";import{a as d,c as Me,d as Te,i as he,j as Q}from"./chunk-JKNW2A5P.js";import"./chunk-YGU4JTYS.js";import"./chunk-JIZKLMZU.js";import"./chunk-WK7ZT6NW.js";import"./chunk-3UZWCLUR.js";import{b as ge,f as H,g as k,h as q,j as Ne,k as M}from"./chunk-TFN2F5ZD.js";import{a as Z,b as w}from"./chunk-RW5IOOBQ.js";import{g as Ee,h as C,j as Oe}from"./chunk-X2F6JBJU.js";import{a as U,b as F,d as V,e as $,g}from"./chunk-HPPZ7ERW.js";import{c as ue,o as _e,p as ce,q as fe,r as j,s as Ce,t as Y}from"./chunk-RXHMJFXO.js";import{b as X}from"./chunk-WQZWGPYI.js";import"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-2XCX2PRG.js";import{d as f,f as v,g as I,l as A,n as y,q as P,r as D,u as z}from"./chunk-VXNH5PTX.js";import{Y as T,r as pe,t as de}from"./chunk-Z63FN5EJ.js";import{a as G,c as L,e as b}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as Se,la as B}from"./chunk-4B53IFHW.js";import"./chunk-UZ765RGE.js";import{Ec as le,Fa as oe,Hb as re,Ib as ne,Jb as ae,Kb as p,Lb as S,Mb as m,Xb as se,bb as a,cb as _,ea as ee,ic as me,ja as s,na as u,oa as te,ob as ie,oc as c,pc as O,qb as R,zb as n}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var K=(()=>{let i=class i extends H{constructor(t,o,e){super(o),this.fb=t,this.dialog=o,this.data=e,this.cstnService=s(l),this.orderPositions=[1,2,3,4,5,6,7,8,9,10,11,12],this.orderSelectConfig={emptyOption:!0},this.form=t.group({name:[e?.teamGroup?.name,[f.required,f.minLength(1)]],description:[e?.teamGroup?.description,[]],orderPosition:[e?.teamGroup?.orderPosition,[]]});}submit(){this.IsValid()&&(this.data.teamGroup?this.save(this.cstnService.teams.groups.update(this.data.teamId,this.data.teamGroup.id,this.form.value)):this.save(this.cstnService.teams.groups.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(D),_(U),_(F));},i.ɵcmp=u({type:i,selectors:[["sz-constr-groups-save"]],standalone:!0,features:[c([l]),R,O],decls:7,vars:7,consts:()=>{let t;t="Name";let o;o="Description";let e;return e="Order",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",o],["formControlName","orderPosition","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),S()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),a(2),n("formGroup",e.form),a(3),n("source",e.orderPositions)("config",e.orderSelectConfig),a(),n("actions",e.actions));},dependencies:[z,A,v,I,y,P,g,$,M,k,q,Y,ue,Ce,j],encapsulation:2});let r=i;return r;})();var ve=(()=>{let i=class i extends H{constructor(t,o,e){super(o),this.fb=t,this.dialog=o,this.data=e,this.cstnService=s(l),this.employees=this.cstnService.employees.getAll({orderBy:["name"],filterBehavior:pe.Or,filters:de.create().equalIf("id",this.data?.teamEmployee?.employeeId).notAnyIf("teams.teamId",this.data?.teamId).filters()}),this.designations=this.cstnService.designations.getAll({orderBy:["name"]}),this.groups=this.cstnService.teams.groups.getAll(this.data.teamId,{orderBy:["name"]}),this.groupSelectConfig={emptyOption:!0},this.form=t.group({employeeId:[e?.teamEmployee?.employeeId,[f.required]],designationId:[e?.teamEmployee?.designationId,[f.required]],groupId:[e?.teamEmployee?.groupId,[]],isGroupLeader:[e?.teamEmployee?.isGroupLeader??!1,[f.required]],startDate:[e?.teamEmployee?.startDate??new Date(),[]],endDate:[e?.teamEmployee?.endDate,[]]});}submit(){this.IsValid()&&(this.data?.teamEmployee?this.save(this.cstnService.teams.employees.update(this.data.teamId,this.data.teamEmployee.id,this.form.value)):this.save(this.cstnService.teams.employees.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(D),_(U),_(F));},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[c([]),R,O],decls:12,vars:9,consts:()=>{let t;t="Employee";let o;o="Designation";let e;e="Group";let E;E="Start Date";let x;return x="End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","employeeId","label",t,3,"source"],["formControlName","designationId","label",o,3,"source"],["formControlName","groupId","label",e,3,"source","config"],["formControlName","isGroupLeader"],[1,"sz-form-row"],["formControlName","startDate","label",E],["formControlName","endDate","label",x],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),p(6,"mat-checkbox",5),me(7,"Group Leader"),S(),p(8,"div",6),m(9,"sz-ui-form-field-date",7)(10,"sz-ui-form-field-date",8),S()()(),m(11,"sz-ui-dialog-actions",9)),o&2&&(n("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),a(2),n("formGroup",e.form),a(),n("source",e.employees),a(),n("source",e.designations),a(),n("source",e.groups)("config",e.groupSelectConfig),a(6),n("actions",e.actions));},dependencies:[z,A,v,I,y,P,g,$,fe,ce,M,k,q,Y,_e,j],encapsulation:2});let r=i;return r;})();var W=(()=>{let i=class i{constructor(){this.route=s(G),this.router=s(L),this.dialog=s(V),this.locale=s(le),this.cstnService=s(l),this.team=oe.required(),this.dataSource=new Me(["group.orderPosition"]),this.card={header:{title:T.employees},menu:Oe.more([C.add(this.openSaveComponent.bind(this)),C.divider(),C.addGroup(()=>this.openGroupSaveComponent())])},this.dataSource.columnDefs.push(d.uuid("id"),d.icon("group.orderPosition").setName(T.group).setHeaderSortable(!0).setStyleSmall().setValueTooltip(t=>t.group&&t.isGroupLeader?T.group_leader:"").setValueGetter(t=>t.group&&t.isGroupLeader?Ee.supervisor_account:"").setResponsive(!0),d.string("employee.name").setStacked(d.string("designation.name").setValueClassFontSmall()),d.string("employee.primaryPhone").setResponsive(!0),d.date("startDate").setVisible(!1),d.date("endDate").setVisible(!1),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu([C.edit(this.openSaveComponent.bind(this)),C.divider(),C.delete(this.openDeleteComponent.bind(this))])),this.dataSource.groupDefs={key:"groupId",name:T.test_group,nameGetterFn:t=>t.group?.name??""};}ngOnInit(){this.get();}openGroupSaveComponent(t){this.dialog.open(K,{data:{teamId:this.team().id,group:t}}).afterClosed().subscribe(o=>{});}openSaveComponent(t){this.dialog.open(ve,{data:{teamId:this.team().id,teamEmployee:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openDeleteComponent(t){this.dialog.open(Ne,{data:ge.delete(this.cstnService.teams.employees.delete(this.team().id,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.teams.employees.get(this.team().id,this.dataSource.getQuery()).pipe(Te(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-team-employees-groups"]],inputs:{team:[1,"team"]},standalone:!0,features:[c([l]),O],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(o,e){o&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),se("update",function(){return e.get();}),S()()),o&2&&(n("card",e.card),a(),n("paginationEnabled",!1)("dataSource",e.dataSource));},dependencies:[b,Q,he,B,N],encapsulation:2});let r=i;return r;})();function be(r,i){if(r&1&&m(0,"sz-ui-card",3),r&2){let Ae=i.$implicit;n("card",Ae);}}var Ie=(()=>{let i=class i{constructor(){this.cstnService=s(l),this.router=s(L),this.route=s(G),this.dialog=s(V),this.team=this.route.snapshot.data.team,this.alert=ie(void 0),this.cards=[],this.appBarConfig={title:this.team.name,actions:[Z.menu([Z.edit(this.openSaveComponent.bind(this))])]};}openSaveComponent(t){this.dialog.open(Re,{data:t}).afterClosed().subscribe(o=>{o&&(this.team=o);});}openGroupSaveComponent(){this.dialog.open(K,{data:{teamId:this.team.id}}).afterClosed().subscribe(t=>{});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-team"]],features:[c([])],decls:8,vars:3,consts:[[3,"config"],[3,"alert"],[1,"sz-grid-card"],[3,"card"],[1,"tw-my-4"],[3,"team"]],template:function(o,e){o&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),p(2,"div",2),ne(3,be,1,1,"sz-ui-card",3,re),S(),p(5,"div",4),m(6,"sz-constr-construction-team-employees-groups",5),S(),m(7,"div",4)),o&2&&(n("config",e.appBarConfig),a(),n("alert",e.alert()),a(2),ae(e.cards),a(3),n("team",e.team));},dependencies:[X,w,N,W],encapsulation:2});let r=i;return r;})();var Zt=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=te({type:i}),i.ɵinj=ee({providers:[l],imports:[b.forChild([{path:"",component:Ie}]),g,Se,B,X,Q,M,w,N,W]});let r=i;return r;})();export{Zt as TeamModule};/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/