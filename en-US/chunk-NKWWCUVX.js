import{a as Oe}from"./chunk-4EGBOBOX.js";import{a as S}from"./chunk-HXG5BNL7.js";import{a as $}from"./chunk-AC4T5S7U.js";import"./chunk-2KMI5T6L.js";import{d as ce,e as l,g as fe,i as Ce,j as Ee}from"./chunk-CAFAE33Z.js";import"./chunk-J5QQY2QR.js";import"./chunk-JOIIV6VE.js";import{a as ue,b as _e}from"./chunk-CNLCC23Q.js";import"./chunk-5E6K5YLE.js";import{b as de,f as B,g as X,h as H,j as pe,k as Y}from"./chunk-Z2ZUJRKU.js";import"./chunk-3PDBTWFJ.js";import{a as z,b as G,d as L,e as b,g as U}from"./chunk-QI2VJ3F3.js";import{c as ne,o as se,q as F,r as me,t as V}from"./chunk-2WR3J7DZ.js";import{b as ae}from"./chunk-EA7HCRH3.js";import"./chunk-7AANOILR.js";import"./chunk-FJQUKBXX.js";import{d as C,f as M,g as h,l as R,o as v,r as A,s as I,u as y}from"./chunk-QSQP3PNI.js";import{a as le,b as u,c as g}from"./chunk-E3F62UZG.js";import{a as Se}from"./chunk-33ZTXJ25.js";import"./chunk-4MW6KJIR.js";import"./chunk-IZAIB3R2.js";import{a as O}from"./chunk-FENOVBAP.js";import"./chunk-RGHZSPOL.js";import{p as P,r as D,s as te,v as oe,x as ie}from"./chunk-73EUG6I6.js";import"./chunk-SNLNGOLR.js";import"./chunk-SNT3GI4V.js";import{Na as re}from"./chunk-3TPLYAOD.js";import{Hb as J,Ia as j,Ib as K,Jb as W,Jc as ee,Kb as d,Lb as p,Mb as m,Xb as Z,cb as s,hc as x,ja as r,lb as Q,na as _,nb as T,qc as c,rc as f,zb as a}from"./chunk-4PLW75EI.js";import"./chunk-ZSJPE3V4.js";var w=(()=>{let i=class i extends B{constructor(){let t=r(z);super(t),this.fb=r(I),this.data=r(G),this.cstnService=r(S),this.orderPositions=[1,2,3,4,5,6,7,8,9,10,11,12],this.orderSelectConfig={emptyOption:!0};let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({name:[e?.teamGroup?.name,[C.required,C.minLength(1)]],description:[e?.teamGroup?.description,[]],orderPosition:[e?.teamGroup?.orderPosition,[]]});}submit(){this.IsValid()&&(this.data.teamGroup?this.save(this.cstnService.teams.groups.update(this.data.teamId,this.data.teamGroup.id,this.form.value)):this.save(this.cstnService.teams.groups.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-groups-save"]],standalone:!0,features:[c([S]),T,f],decls:7,vars:7,consts:()=>{let t;t="Name";let o;o="Description";let e;return e="Order",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","description","label",o],["formControlName","orderPosition","label",e,3,"source","config"],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-textarea",3)(5,"sz-ui-form-field-select",4),p()(),m(6,"sz-ui-dialog-actions",5)),o&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),a("formGroup",e.form),s(3),a("source",e.orderPositions)("config",e.orderSelectConfig),s(),a("actions",e.actions));},dependencies:[y,R,M,h,v,A,U,b,Y,X,H,V,ne,me,F],encapsulation:2});let n=i;return n;})();var ge=(()=>{let i=class i extends B{constructor(){let t=r(z);super(t),this.fb=r(I),this.data=r(G),this.cstnService=r(S),this.employees=this.cstnService.employees.getAll({orderBy:["name"],filterBehavior:oe.Or,filters:ie.create().equalIf("id",this.data?.teamEmployee?.employeeId).notAnyIf("teams.teamId",this.data?.teamId).filters()}),this.designations=this.cstnService.designations.getAll({orderBy:["name"]}),this.groups=this.cstnService.teams.groups.getAll(this.data.teamId,{orderBy:["name"]}),this.groupSelectConfig={emptyOption:!0};let o=this.fb;this.dialog=t;let e=this.data;this.form=o.group({employeeId:[e?.teamEmployee?.employeeId,[C.required]],designationId:[e?.teamEmployee?.designationId,[C.required]],groupId:[e?.teamEmployee?.groupId,[]],isGroupLeader:[e?.teamEmployee?.isGroupLeader??!1,[C.required]],startDate:[e?.teamEmployee?.startDate??new Date(),[]],endDate:[e?.teamEmployee?.endDate,[]]});}submit(){this.IsValid()&&(this.data?.teamEmployee?this.save(this.cstnService.teams.employees.update(this.data.teamId,this.data.teamEmployee.id,this.form.value)):this.save(this.cstnService.teams.employees.create(this.data.teamId,this.form.value)));}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-construction-zones-units-save"]],standalone:!0,features:[c([]),T,f],decls:12,vars:9,consts:()=>{let t;t="Employee";let o;o="Designation";let e;e="Group";let E;E="Start Date";let q;return q="End Date",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","employeeId","label",t,3,"source"],["formControlName","designationId","label",o,3,"source"],["formControlName","groupId","label",e,3,"source","config"],["formControlName","isGroupLeader"],[1,"sz-form-row"],["formControlName","startDate","label",E],["formControlName","endDate","label",q],[3,"actions"]];},template:function(o,e){o&1&&(m(0,"sz-ui-dialog-header",0),d(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-select",3)(5,"sz-ui-form-field-select",4),d(6,"mat-checkbox",5),x(7,"Group Leader"),p(),d(8,"div",6),m(9,"sz-ui-form-field-date",7)(10,"sz-ui-form-field-date",8),p()()(),m(11,"sz-ui-dialog-actions",9)),o&2&&(a("title",e.title)("subtitle",e.subtitle)("alert",e.alert()),s(2),a("formGroup",e.form),s(),a("source",e.employees),s(),a("source",e.designations),s(),a("source",e.groups)("config",e.groupSelectConfig),s(6),a("actions",e.actions));},dependencies:[y,R,M,h,v,A,U,b,_e,ue,Y,X,H,V,se,F],encapsulation:2});let n=i;return n;})();var Ne=(()=>{let i=class i{constructor(){this.route=r(P),this.router=r(D),this.dialog=r(L),this.locale=r(ee),this.cstnService=r(S),this.team=j.required(),this.dataSource=new fe(["group.orderPosition"]),this.card={header:{title:O.employees},menu:g.more([u.add(this.openSaveComponent.bind(this)),u.divider(),u.addGroup(()=>this.openGroupSaveComponent())])},this.dataSource.columnDefs.push(l.uuid("id"),l.icon("group.orderPosition").setHeaderName(O.group).setHeaderSortable(!0).setStyleSmall().setValueTooltip(t=>t.group&&t.isGroupLeader?O.group_leader:"").setValueGetter(t=>t.group&&t.isGroupLeader?le.supervisor_account:"").setResponsive(!0),l.string("employee.name").setStacked(l.string("designation.name").setValueClassFontSmall()),l.string("employee.primaryPhone").setResponsive(!0),l.date("startDate").setVisible(!1),l.date("endDate").setVisible(!1),l.date("createdAt").setVisible(!1),l.date("updatedAt").setVisible(!1),l.menu(g.more([u.edit(this.openSaveComponent.bind(this)),u.divider(),u.delete(this.openDeleteComponent.bind(this))]))),this.dataSource.groupDefs={key:"groupId",name:O.test_group,columnDefs:[l.string("group.name").setValueGetter(t=>t.group?.name??"")]};}ngOnInit(){this.get();}openGroupSaveComponent(t){this.dialog.open(w,{data:{teamId:this.team().id,group:t}}).afterClosed().subscribe(o=>{});}openSaveComponent(t){this.dialog.open(ge,{data:{teamId:this.team().id,teamEmployee:t}}).afterClosed().subscribe(o=>{this.dataSource.addOrUpdateItem(o);});}openDeleteComponent(t){this.dialog.open(pe,{data:de.delete(this.cstnService.teams.employees.delete(this.team().id,t.id),t)}).afterClosed().subscribe(o=>{this.dataSource.delete(o);});}get(){this.cstnService.teams.employees.get(this.team().id,this.dataSource.getQuery()).pipe(Ce(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-construction-team-employees-groups"]],inputs:{team:[1,"team"]},standalone:!0,features:[c([S]),f],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(o,e){o&1&&(d(0,"sz-ui-card",0)(1,"sz-ui-table",1),Z("update",function(){return e.get();}),p()()),o&2&&(a("card",e.card),s(),a("dataSource",e.dataSource));},dependencies:[te,Ee,ce,re,$],encapsulation:2});let n=i;return n;})();function ye(n,i){if(n&1&&m(0,"sz-ui-card",3),n&2){let Me=i.$implicit;a("card",Me);}}var Te=(()=>{let i=class i{constructor(){this.cstnService=r(S),this.router=r(D),this.route=r(P),this.dialog=r(L),this.team=this.route.snapshot.data.team,this.alert=Q(void 0),this.cards=[],this.appBarConfig={title:this.team.name,menu:g.default([u.menu([u.edit(this.openSaveComponent.bind(this))])])};}openSaveComponent(){this.dialog.open(Oe,{data:this.team}).afterClosed().subscribe(t=>{t&&(this.team=t);});}openGroupSaveComponent(){this.dialog.open(w,{data:{teamId:this.team.id}}).afterClosed().subscribe(t=>{});}};i.ɵfac=function(o){return new(o||i)();},i.ɵcmp=_({type:i,selectors:[["sz-constr-construction-team"]],standalone:!0,features:[c([]),f],decls:8,vars:3,consts:[[3,"config"],[3,"alert"],[1,"sz-grid-card"],[3,"card"],[1,"tw-my-4"],[3,"team"]],template:function(o,e){o&1&&(m(0,"sz-ui-app-bar",0)(1,"sz-ui-alert",1),d(2,"div",2),K(3,ye,1,1,"sz-ui-card",3,J),p(),d(5,"div",4),m(6,"sz-constr-construction-team-employees-groups",5),p(),m(7,"div",4)),o&2&&(a("config",e.appBarConfig),s(),a("alert",e.alert()),s(2),W(e.cards),s(3),a("team",e.team));},dependencies:[Se,ae,$,Ne],encapsulation:2});let n=i;return n;})();var yt=[{path:"",component:Te}];export{yt as default};/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/