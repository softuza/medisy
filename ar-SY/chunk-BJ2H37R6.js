import{a as l}from"./chunk-U2LCFH5T.js";import{e as me}from"./chunk-IBEGBZPR.js";import{a as re,d as ne,e as u,h as le,i as se,j as v}from"./chunk-OKHT2ZMW.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import"./chunk-2DOHZQYD.js";import{b as Z,f as ee,g as te,h as ie,j as ae,k as oe}from"./chunk-JDBQ45YP.js";import{a as Y}from"./chunk-ZGUTF2MC.js";import{j as d,k as W}from"./chunk-53DZ6NLX.js";import{a as j,b as k,d as E,e as q,g as _}from"./chunk-7B3GMYBR.js";import{c as H,p as Q,q as C,r as J,t as K}from"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import{d as O,f as P,g as L,l as B,n as y,q as G,r as F,u as $}from"./chunk-QZRJHJEV.js";import{Y as x,r as w,t as U}from"./chunk-4QPQ7IQ3.js";import{a as g,d as T}from"./chunk-WMCOMOML.js";import"./chunk-HNENNTVD.js";import"./chunk-V2COJPJH.js";import{ia as X,la as M}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as s,Kb as m,Lb as p,Vb as D,Wb as N,bb as c,ea as I,ja as r,mb as R,mc as h,na as f,nc as S,oa as z,yb as n}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var pe=(()=>{let e=class e extends ee{constructor(){let a=r(j);super(a),this.fb=r(F),this.data=r(k),this.srptService=r(l),this.baseTemplateVariables=this.srptService.baseTemplates.variables.getAll(this.data.baseTemplateId,{orderBy:["name"],filterBehavior:w.Or,filters:U.create().equalIf("id",this.data.templateVariable?.baseTemplateVariableId).notAny("templates.templateId",this.data.templateId).filters()});let t=this.fb;this.dialog=a;let i=this.data;this.form=t.group({enabled:[i.templateVariable?.enabled??!0,[O.required]],description:[i.templateVariable?.description,[]],baseTemplateVariableId:[i.templateVariable?.baseTemplateVariableId,[O.required]],value:[i.templateVariable?.value,[]]});}submit(){this.IsValid()&&(this.data.templateVariable?this.save(this.srptService.templates.variables.update(this.data.templateId,this.data.templateVariable?.id,this.form.value)):this.save(this.srptService.templates.variables.create(this.data.templateId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-template-variables-save"]],standalone:!0,features:[h([l]),R,S],decls:9,vars:6,consts:()=>{let a;a="\u0627\u0644\u0645\u062A\u063A\u064A\u0631";let t;t="\u0642\u064A\u0645\u0629";let i;return i="\u0645\u0641\u0639\u0644",[i,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","baseTemplateVariableId","label",a,3,"source"],["formControlName","value","label",t],[1,"sz-form-row"],["formControlName","enabled"],[3,"actions"]];},template:function(t,i){t&1&&(p(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2),p(3,"sz-ui-form-field-select",3)(4,"sz-ui-form-field-input",4),s(5,"div",5)(6,"mat-checkbox",6),D(7,0),m()()()(),p(8,"sz-ui-dialog-actions",7)),t&2&&(n("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),c(2),n("formGroup",i.form),c(),n("source",i.baseTemplateVariables),c(5),n("actions",i.actions));},dependencies:[$,B,P,L,y,G,oe,te,ie,_,q,C,Q,me,K,H,J],encapsulation:2});let o=e;return o;})();var de=(()=>{let e=class e{constructor(){this.dialog=r(E),this.srptService=r(l),this.route=r(g),this.dataSource=new le("baseTemplateVariable.name"),this.template=this.route.snapshot.data.template,this.appBarConfig={title:x.variables,subtitle:this.template.name,menu:W.default().setItems([d.add(this.openSaveComponent.bind(this)),d.menu([d.search()])])},this.dataSource.columnDefs.push(u.uuid("id"),u.string("baseTemplateVariable.name"),u.string("value"),u.date("createdAt").setVisible(!1),u.date("updatedAt").setVisible(!1),u.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTemplateVariableDeleteComponent.bind(this))])),this.get();}openSaveComponent(a){this.dialog.open(pe,{data:{templateId:this.template.id,baseTemplateId:this.template.baseTemplateId,templateVariable:a}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTemplateVariableDeleteComponent(a){this.dialog.open(ae,{data:Z.delete(this.srptService.templates.variables.delete(a.templateId,a.id),a)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.templates.variables.get(this.template.id,this.dataSource.getQuery()).pipe(se(this.dataSource.state)).subscribe(a=>{this.dataSource.set(a.items,a.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-template-variables"]],standalone:!0,features:[S],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(s(0,"sz-ui-table-bar",0),N("changed",function(){return i.get();}),m(),s(1,"sz-ui-table",1),N("update",function(){return i.get();}),m()),t&2&&(n("config",i.appBarConfig)("dataSource",i.dataSource),c(),n("dataSource",i.dataSource));},dependencies:[T,v,ne,re,C,M],encapsulation:2});let o=e;return o;})();var V=(()=>{let e=class e{constructor(){this.route=r(g),this.dialog=r(E),this.srptService=r(l),this.template=this.route.snapshot.data.template,this.appBarConfig={title:this.template.name,subtitle:this.template.description};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=f({type:e,selectors:[["sz-mgmt-reporting-template"]],standalone:!0,features:[h([]),S],decls:3,vars:1,consts:[[3,"config"],[1,"tw-my-4"]],template:function(t,i){t&1&&(p(0,"sz-ui-app-bar",0),s(1,"div",1),p(2,"sz-mgmt-reporting-template-variables"),m()),t&2&&n("config",i.appBarConfig);},dependencies:[_,M,v,Y,X,de],encapsulation:2});let o=e;return o;})();var mt=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=z({type:e}),e.ɵinj=I({providers:[l],imports:[T.forChild([{path:"",component:V}]),_,M,V]});let o=e;return o;})();export{mt as TemplatesModule};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/