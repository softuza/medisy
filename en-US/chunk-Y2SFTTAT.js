import{a as ve}from"./chunk-RGKLRKEN.js";import{a as l}from"./chunk-T5UFXBYK.js";import{a as g}from"./chunk-54BW62IN.js";import{a as u,b as ge,d as Te,e as he,j as Re,k as J}from"./chunk-3KIO23V7.js";import"./chunk-UDBXG2VS.js";import"./chunk-3EZ7YOIF.js";import"./chunk-6EOVNP6P.js";import"./chunk-EZYZSWQV.js";import"./chunk-PIF3LXPQ.js";import{e as k,f as q,g as Q,i as Ne,j as T,k as Me}from"./chunk-MLAHAJFY.js";import{a as H}from"./chunk-3JYLOQ62.js";import{e as x,g as ee,h as E,j as w}from"./chunk-6WYKIJA5.js";import{a as U,b as F,d as V,e as $,g as M}from"./chunk-AWTFDRVU.js";import"./chunk-EUY4YGUM.js";import{A as Y,b as X,e as _e,t as fe,u as Ce,v as Ee,x as j,z as Oe}from"./chunk-D4OV432Z.js";import"./chunk-Q6QXXTHO.js";import"./chunk-ZI7LGOZY.js";import{c as C}from"./chunk-AR6ZPEMB.js";import"./chunk-LB6OFIMK.js";import{d as f,f as v,g as I,l as y,n as A,q as z,r as D,u as P}from"./chunk-H6LOKDLY.js";import{r as ue,t as Se}from"./chunk-WOEHPYTV.js";import{a as G,c as L,e as b}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ia as ce,la as B}from"./chunk-TSWXIYWJ.js";import"./chunk-DTCSWDXN.js";import{Fa as re,Fc as de,Gb as ae,Hb as se,Ib as me,Jb as p,Kb as d,Lb as m,Wb as le,bb as a,cb as c,ea as oe,hc as pe,ja as s,na as S,nc as _,oa as ie,ob as ne,oc as N,qb as R,zb as n}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var W=(()=>{let i=class i extends k{constructor(e,t,o){super(t),this.fb=e,this.dialog=t,this.data=o,this.cstnService=s(l),this.orderPositions=[1,2,3,4,5,6,7,8,9,10,11,12],this.form=e.group({name:[o?.teamGroup?.name,[f.required,f.minLength(1)]],description:[o?.teamGroup?.description,[]],orderPosition:[o?.teamGroup?.orderPosition,[]]});}submit(){this.IsValid()&&(this.data.teamGroup?this.save(this.cstnService.teams.groups.update(this.data.teamId,this.data.teamGroup.id,this.form.value)):this.save(this.cstnService.teams.groups.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(c(D),c(U),c(F));},i.ɵcmp=S({type:i,selectors:[["sz-constr-groups-save"]],standalone:!0,features:[_([l]),R,N],decls:7,vars:7,consts:()=>{let e;e="Name";let t;t="Description";let o;return o="Order",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","description","label",t],["formControlName","orderPosition","label",o,3,"source","emptyOption"],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),d()(),m(6,"sz-ui-dialog-actions",5)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(3),n("source",o.orderPositions)("emptyOption",!0),a(),n("actions",o.actions));},dependencies:[P,y,v,I,A,z,M,$,T,q,Q,Y,_e,Oe,j],encapsulation:2});let r=i;return r;})();var Ie=(()=>{let i=class i extends k{constructor(e,t,o){super(t),this.fb=e,this.dialog=t,this.data=o,this.cstnService=s(l),this.employees=this.cstnService.employees.getAll({orderBy:["name"],filterBehavior:ue.Or,filters:Se.create().equalIf("id",this.data?.teamEmployee?.employeeId).notAnyIf("teams.teamId",this.data?.teamId).filters()}),this.designations=this.cstnService.designations.getAll({orderBy:["name"]}),this.groups=this.cstnService.teams.groups.getAll(this.data.teamId,{orderBy:["name"]}),this.form=e.group({employeeId:[o?.teamEmployee?.employeeId,[f.required]],designationId:[o?.teamEmployee?.designationId,[f.required]],groupId:[o?.teamEmployee?.groupId,[]],isGroupLeader:[o?.teamEmployee?.isGroupLeader??!1,[f.required]],startDate:[o?.teamEmployee?.startDate??new Date(),[]],endDate:[o?.teamEmployee?.endDate,[]]});}submit(){this.IsValid()&&(this.data?.teamEmployee?this.save(this.cstnService.teams.employees.update(this.data.teamId,this.data.teamEmployee.id,this.form.value)):this.save(this.cstnService.teams.employees.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)(c(D),c(U),c(F));},i.ɵcmp=S({type:i,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[_([]),R,N],decls:12,vars:9,consts:()=>{let e;e="Employee";let t;t="Designation";let o;o="Group";let O;O="Start Date";let te;return te="End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","employeeId","label",e,3,"source"],["formControlName","designationId","label",t,3,"source"],["formControlName","groupId","label",o,3,"source","emptyOption"],["formControlName","isGroupLeader"],[1,"sz-form-row"],["formControlName","startDate","label",O],["formControlName","endDate","label",te],[3,"actions"]];},template:function(t,o){t&1&&(m(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),p(6,"mat-checkbox",5),pe(7,"Group Leader"),d(),p(8,"div",6),m(9,"sz-ui-form-field-date",7)(10,"sz-ui-form-field-date",8),d()()(),m(11,"sz-ui-dialog-actions",9)),t&2&&(n("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),a(2),n("formGroup",o.form),a(),n("source",o.employees),a(),n("source",o.designations),a(),n("source",o.groups)("emptyOption",!0),a(6),n("actions",o.actions));},dependencies:[P,y,v,I,A,z,M,$,Ee,Ce,T,q,Q,Y,fe,j],encapsulation:2});let r=i;return r;})();var Z=(()=>{let i=class i{constructor(){this.route=s(G),this.router=s(L),this.dialog=s(V),this.locale=s(de),this.cstnService=s(l),this.team=re.required(),this.dataSource=new Te([]),this.card={title:C.employees,menu:w.more([E.add(()=>this.openSaveComponent()),x.divider(),E.addGroup(()=>this.openGroupSaveComponent())])},this.dataSource.columnDefs.push(u.uuid("id"),u.icon("group").setHeaderSortable(!1).setStyleSmall().setValueTooltip(e=>e.group&&e.isGroupLeader?C.group_leader:"").setValueGetter(e=>e.group&&e.isGroupLeader?"engineering":"").setResponsive(!0),u.string("employee.name").setStacked(u.string("designation.name").setValueClassFontSmall()),u.string("employee.primaryPhone").setResponsive(!0),u.date("startDate").setVisible(!1),u.date("endDate").setVisible(!1),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),ge.menu([E.edit(e=>this.openSaveComponent(e)),x.divider(),E.delete(e=>this.openDeleteComponent(e))])),this.dataSource.groupDefs={key:"groupId",name:C.test_group,nameGetterFn:e=>e.group?.name??""};}ngOnInit(){this.get();}openGroupSaveComponent(e){this.dialog.open(W,{data:{teamId:this.team().id,group:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openSaveComponent(e){this.dialog.open(Ie,{data:{teamId:this.team().id,teamEmployee:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openDeleteComponent(e){this.dialog.open(Ne,{data:Me.delete(this.cstnService.teams.employees.delete(this.team().id,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.cstnService.teams.employees.get(this.team().id,this.dataSource.getQuery()).pipe(he(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-constr-construction-team-employees-groups"]],inputs:{team:[1,"team"]},standalone:!0,features:[_([l]),N],decls:2,vars:3,consts:[[3,"card"],["content","",3,"update","paginationEnabled","dataSource"]],template:function(t,o){t&1&&(p(0,"sz-ui-card",0)(1,"sz-ui-table",1),le("update",function(){return o.get();}),d()()),t&2&&(n("card",o.card),a(),n("paginationEnabled",!1)("dataSource",o.dataSource));},dependencies:[b,J,Re,B,g],encapsulation:2});let r=i;return r;})();function Ue(r,i){if(r&1&&m(0,"sz-ui-card",3),r&2){let Ae=i.$implicit;n("card",Ae);}}var ye=(()=>{let i=class i{constructor(){this.cstnService=s(l),this.router=s(L),this.route=s(G),this.dialog=s(V),this.alert=ne(void 0),this.menu=w.more([E.edit(()=>this.openSaveComponent(this.team))]),this.cards=[],this.team=this.route.snapshot.data.team;}addEmployeesCountCard(){let e={title:0,icon:ee.person,subtitle:C.employees,indicator:!0};this.cards.push(e),this.cstnService.teams.employees.count(this.team.id).subscribe(t=>{e.title=t;});}addGroupsCountCard(){let e={title:0,icon:ee.group,subtitle:C.groups,indicator:!0};this.cards.push(e),this.cstnService.teams.groups.count(this.team.id).subscribe(t=>{e.title=t;});}openSaveComponent(e){this.dialog.open(ve,{data:e}).afterClosed().subscribe(t=>{t&&(this.team=t);});}openGroupSaveComponent(){this.dialog.open(W,{data:{teamId:this.team.id}}).afterClosed().subscribe(e=>{});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=S({type:i,selectors:[["sz-constr-construction-team"]],features:[_([])],decls:8,vars:5,consts:[[3,"title","subtitle","menu"],[3,"alert"],[1,"sz-grid-card"],[3,"card"],[1,"tw-my-4"],[3,"team"]],template:function(t,o){t&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),p(2,"div",2),se(3,Ue,1,1,"sz-ui-card",3,ae),d(),p(5,"div",4),m(6,"sz-constr-construction-team-employees-groups",5),d(),m(7,"div",4)),t&2&&(n("title",o.team.name)("subtitle",o.team.description)("menu",o.menu),a(),n("alert",o.alert()),a(2),me(o.cards),a(3),n("team",o.team));},dependencies:[X,H,g,Z],encapsulation:2});let r=i;return r;})();var eo=(()=>{let i=class i{};i.ɵfac=function(t){return new(t||i)();},i.ɵmod=ie({type:i}),i.ɵinj=oe({providers:[l],imports:[b.forChild([{path:"",component:ye}]),M,ce,B,X,J,T,H,g,Z]});let r=i;return r;})();export{eo as TeamModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/