import{a as ve}from"./chunk-EFI4YW6L.js";import{a as l}from"./chunk-ANBLBCIM.js";import{a as N}from"./chunk-5R2LMLY7.js";import{a as S,b as Me,d as Te,e as he,j as Re,k as J}from"./chunk-YYUIO3M5.js";import"./chunk-AV4XTPWD.js";import"./chunk-IGQAW4G2.js";import"./chunk-M257HJPM.js";import"./chunk-4P4RPOWU.js";import{b as ge,f as k,g as q,h as Q,j as Ne,k as M}from"./chunk-K46Y6NGM.js";import{a as H}from"./chunk-R7EUDMGD.js";import{e as x,g as Oe,h as C,j as w}from"./chunk-KBWUA6E4.js";import{a as U,b,d as V,e as $,g}from"./chunk-NGJJVZ6X.js";import{c as _e,o as ce,p as fe,q as Ce,r as j,s as Ee,t as Y}from"./chunk-COX3WBO6.js";import{b as X}from"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import{c as T}from"./chunk-TUR2GSJY.js";import"./chunk-Z6RT565P.js";import{d as f,f as v,g as I,l as A,n as y,q as P,r as D,u as z}from"./chunk-GIW6HK33.js";import{r as de,t as Se}from"./chunk-27BMIET6.js";import{a as G,c as L,e as F}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as ue,la as B}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Ec as pe,Fa as ie,Hb as ne,Ib as ae,Jb as se,Kb as p,Lb as d,Mb as m,Xb as me,bb as a,cb as _,ea as te,ic as le,ja as s,na as u,oa as oe,ob as re,oc as c,pc as O,qb as R,zb as n}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var W=(()=>{let i=class i extends k{constructor(e,o,t){super(o),this.fb=e,this.dialog=o,this.data=t,this.cstnService=s(l),this.orderPositions=[1,2,3,4,5,6,7,8,9,10,11,12],this.orderSelectConfig={emptyOption:!0},this.form=e.group({name:[t?.teamGroup?.name,[f.required,f.minLength(1)]],description:[t?.teamGroup?.description,[]],orderPosition:[t?.teamGroup?.orderPosition,[]]});}submit(){this.IsValid()&&(this.data.teamGroup?this.save(this.cstnService.teams.groups.update(this.data.teamId,this.data.teamGroup.id,this.form.value)):this.save(this.cstnService.teams.groups.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(D),_(U),_(b));},i.ɵcmp=u({type:i,selectors:[["sz-constr-groups-save"]],standalone:!0,features:[c([l]),R,O],decls:7,vars:7,consts:()=>{let e;e="Name";let o;o="Description";let t;return t="Order",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",o],["formControlName","orderPosition","label",t,3,"source","config"],[3,"actions"]];},template:function(o,t){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),d()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(3),n("source",t.orderPositions)("config",t.orderSelectConfig),a(),n("actions",t.actions));},dependencies:[z,A,v,I,y,P,g,$,M,q,Q,Y,_e,Ee,j],encapsulation:2});let r=i;return r;})();var Ie=(()=>{let i=class i extends k{constructor(e,o,t){super(o),this.fb=e,this.dialog=o,this.data=t,this.cstnService=s(l),this.employees=this.cstnService.employees.getAll({orderBy:["name"],filterBehavior:de.Or,filters:Se.create().equalIf("id",this.data?.teamEmployee?.employeeId).notAnyIf("teams.teamId",this.data?.teamId).filters()}),this.designations=this.cstnService.designations.getAll({orderBy:["name"]}),this.groups=this.cstnService.teams.groups.getAll(this.data.teamId,{orderBy:["name"]}),this.groupSelectConfig={emptyOption:!0},this.form=e.group({employeeId:[t?.teamEmployee?.employeeId,[f.required]],designationId:[t?.teamEmployee?.designationId,[f.required]],groupId:[t?.teamEmployee?.groupId,[]],isGroupLeader:[t?.teamEmployee?.isGroupLeader??!1,[f.required]],startDate:[t?.teamEmployee?.startDate??new Date(),[]],endDate:[t?.teamEmployee?.endDate,[]]});}submit(){this.IsValid()&&(this.data?.teamEmployee?this.save(this.cstnService.teams.employees.update(this.data.teamId,this.data.teamEmployee.id,this.form.value)):this.save(this.cstnService.teams.employees.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)(_(D),_(U),_(b));},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[c([]),R,O],decls:12,vars:9,consts:()=>{let e;e="Employee";let o;o="Designation";let t;t="Group";let E;E="Start Date";let ee;return ee="End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","employeeId","label",e,3,"source"],["formControlName","designationId","label",o,3,"source"],["formControlName","groupId","label",t,3,"source","config"],["formControlName","isGroupLeader"],[1,"sz-form-row"],["formControlName","startDate","label",E],["formControlName","endDate","label",ee],[3,"actions"]];},template:function(o,t){o&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),p(6,"mat-checkbox",5),le(7,"Group Leader"),d(),p(8,"div",6),m(9,"sz-ui-form-field-date",7)(10,"sz-ui-form-field-date",8),d()()(),m(11,"sz-ui-dialog-actions",9)),o&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(),n("source",t.employees),a(),n("source",t.designations),a(),n("source",t.groups)("config",t.groupSelectConfig),a(6),n("actions",t.actions));},dependencies:[z,A,v,I,y,P,g,$,Ce,fe,M,q,Q,Y,ce,j],encapsulation:2});let r=i;return r;})();var Z=(()=>{let i=class i{constructor(){this.route=s(G),this.router=s(L),this.dialog=s(V),this.locale=s(pe),this.cstnService=s(l),this.team=ie.required(),this.dataSource=new Te(["group.orderPosition"]),this.card={header:{title:T.employees},menu:w.more([C.add(()=>this.openSaveComponent()),x.divider(),C.addGroup(()=>this.openGroupSaveComponent())])},this.dataSource.columnDefs.push(S.uuid("id"),S.icon("group.orderPosition").setName(T.group).setHeaderSortable(!0).setStyleSmall().setValueTooltip(e=>e.group&&e.isGroupLeader?T.group_leader:"").setValueGetter(e=>e.group&&e.isGroupLeader?Oe.supervisor_account:"").setResponsive(!0),S.string("employee.name").setStacked(S.string("designation.name").setValueClassFontSmall()),S.string("employee.primaryPhone").setResponsive(!0),S.date("startDate").setVisible(!1),S.date("endDate").setVisible(!1),S.date("createdAt").setVisible(!1),S.date("updatedAt").setVisible(!1),Me.menu([C.edit(e=>this.openSaveComponent(e)),x.divider(),C.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"groupId",name:T.test_group,nameGetterFn:e=>e.group?.name??""};}ngOnInit(){this.get();}openGroupSaveComponent(e){this.dialog.open(W,{data:{teamId:this.team().id,group:e}}).afterClosed().subscribe(o=>{});}openSaveComponent(e){this.dialog.open(Ie,{data:{teamId:this.team().id,teamEmployee:e}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openDeleteComponent(e){this.dialog.open(Ne,{data:ge.delete(this.cstnService.teams.employees.delete(this.team().id,e.id),e)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.teams.employees.get(this.team().id,this.dataSource.getQuery()).pipe(he(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-team-employees-groups"]],inputs:{team:[1,"team"]},standalone:!0,features:[c([l]),O],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(o,t){o&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),me("update",function(){return t.get();}),d()()),o&2&&(n("card",t.card),a(),n("paginationEnabled",!1)("dataSource",t.dataSource));},dependencies:[F,J,Re,B,N],encapsulation:2});let r=i;return r;})();function Ue(r,i){if(r&1&&m(0,"sz-ui-card",3),r&2){let ye=i.$implicit;n("card",ye);}}var Ae=(()=>{let i=class i{constructor(){this.cstnService=s(l),this.router=s(L),this.route=s(G),this.dialog=s(V),this.team=this.route.snapshot.data.team,this.alert=re(void 0),this.cards=[],this.appBarConfig={title:this.team.name,menu:w.more([C.edit(()=>this.openSaveComponent(this.team))])};}openSaveComponent(e){this.dialog.open(ve,{data:e}).afterClosed().subscribe(o=>{o&&(this.team=o);});}openGroupSaveComponent(){this.dialog.open(W,{data:{teamId:this.team.id}}).afterClosed().subscribe(e=>{});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=u({type:i,selectors:[["sz-constr-construction-team"]],features:[c([])],decls:8,vars:3,consts:[[3,"config"],[3,"alert"],[1,"sz-grid-card"],[3,"card"],[1,"tw-my-4"],[3,"team"]],template:function(o,t){o&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),p(2,"div",2),ae(3,Ue,1,1,"sz-ui-card",3,ne),d(),p(5,"div",4),m(6,"sz-constr-construction-team-employees-groups",5),d(),m(7,"div",4)),o&2&&(n("config",t.appBarConfig),a(),n("alert",t.alert()),a(2),se(t.cards),a(3),n("team",t.team));},dependencies:[X,H,N,Z],encapsulation:2});let r=i;return r;})();var xt=(()=>{let i=class i{};i.ɵfac=function(o){return new(o||i)();},i.ɵmod=oe({type:i}),i.ɵinj=te({providers:[l],imports:[F.forChild([{path:"",component:Ae}]),g,ue,B,X,J,M,H,N,Z]});let r=i;return r;})();export{xt as TeamModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/