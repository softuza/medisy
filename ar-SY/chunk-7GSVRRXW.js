import{a as c}from"./chunk-NKELYO5I.js";import{a as fe,b as ce,c as Ne,d as Oe,e as Ce}from"./chunk-4U6ISIDB.js";import{a as y,b as me,d as pe,e as Me,g as de,j as ue,k as b}from"./chunk-DTNSVBP2.js";import"./chunk-UJMWVLN4.js";import"./chunk-IGQAW4G2.js";import{a as ne}from"./chunk-DYA3WDOZ.js";import"./chunk-4P4RPOWU.js";import{b as le,f as _e,g as se,h as Se,j as Ee,k as Te}from"./chunk-SQWEE7KP.js";import{a as ae}from"./chunk-GUAFKVMJ.js";import{h as P}from"./chunk-D36EDMAQ.js";import{a as Y,b as Z,d as R,e as ee,g as u}from"./chunk-NGJJVZ6X.js";import{c as oe,p as ie,q as L,r as re}from"./chunk-ZPSFEZWB.js";import"./chunk-ZR7X63GG.js";import"./chunk-6M4SYF3G.js";import"./chunk-CWCVES7X.js";import"./chunk-WYY322KA.js";import"./chunk-Z6RT565P.js";import{d,f as q,g as w,l as x,n as H,q as Q,r as J,u as K}from"./chunk-GIW6HK33.js";import{r as h,t as I}from"./chunk-27BMIET6.js";import{a as A,e as g}from"./chunk-EGDCC6ZL.js";import"./chunk-2XGPU6MG.js";import{ia as W,ja as te,la as f}from"./chunk-PE6NSH2D.js";import"./chunk-ZZK427TV.js";import{Kb as n,Lb as l,Mb as s,Wb as T,Xb as C,bb as E,cb as N,ea as U,ja as m,na as p,oa as X,oc as j,pc as M,qb as k,zb as _}from"./chunk-3KG4VHVC.js";import"./chunk-B3HEJ5KY.js";var Ae=(()=>{let e=class e extends _e{constructor(o,t,i,r){super(i),this.mlabService=o,this.fb=t,this.dialog=i,this.data=r,this.testTypes=this.mlabService.testTypes.getAll({orderBy:["nameEn"],filterBehavior:h.Or,filters:I.create().equalIf("id",this.data.laboratoryTestType?.testTypeId).notAny("laboratories.laboratoryId",[this.data.laboratoryId]).filters()}),this.laboratories=this.mlabService.laboratories.getAll({orderBy:["name"],filters:I.create().notEqual("id",this.data.laboratoryId).filters()}),this.referenceValueSelectConfig={emptyOption:!0,autoSelect:!0,optionContentFn:O=>O.testType.nameEn},this.testTypeSelectConfig={optionSelectedFn:this.testTypeChnaged.bind(this)},this.transferOutLaboratorySelectConfig={emptyOption:!0},this.referenceValues=null,this.form=t.group({enabled:[r.laboratoryTestType?.enabled??!0,[d.required]],transferInPrice:[r.laboratoryTestType?.transferInPrice??0,[]],transferInEnabled:[r.laboratoryTestType?.transferInEnabled??!0,[d.required]],transferOutEnabled:[r.laboratoryTestType?.transferOutEnabled??!0,[d.required]],transferOutLaboratoryId:[r.laboratoryTestType?.transferOutLaboratoryId,[]],price:[r.laboratoryTestType?.price??0,[]],isFavorite:[r.laboratoryTestType?.isFavorite??!1,[d.required]],testTypeId:[r.laboratoryTestType?.testTypeId,[d.required]],referenceValueId:[r.laboratoryTestType?.referenceValueId,[]]}),r.laboratoryTestType&&this.testTypeChnaged(r.laboratoryTestType.testTypeId);}testTypeChnaged(o){this.referenceValues=this.mlabService.referenceValues.getAll({orderBy:["testType.nameEn"],filterBehavior:h.And,filters:I.create().equalIf("testType.id",o).filters()});}submit(){this.IsValid()&&(this.data.laboratoryTestType?this.save(this.mlabService.laboratories.testTypes.update(this.data.laboratoryId,this.data.laboratoryTestType?.id,this.form.value)):this.save(this.mlabService.laboratories.testTypes.create(this.data.laboratoryId,this.form.value)));}};e.ɵfac=function(t){return new(t||e)(N(ne),N(J),N(Y),N(Z));},e.ɵcmp=p({type:e,selectors:[["sz-medisy-laboratory-laboratory-test-types-save"]],standalone:!0,features:[k,M],decls:29,vars:13,consts:()=>{let o;o="\u0646\u0645\u0637 \u0627\u062E\u062A\u0628\u0627\u0631";let t;t="\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629";let i;i="\u0627\u0644\u0633\u0639\u0631";let r;r="\u0627\u0644\u0633\u0639\u0631";let O;O="\u0627\u0644\u0645\u062E\u0628\u0631";let v;v="\u0645\u0641\u0639\u0644";let B;B="\u0645\u0641\u0636\u0644\u0629";let $;$="\u062A\u062D\u0648\u064A\u0644 \u0625\u0644\u0649";let D;D="\u0645\u0641\u0639\u0644";let z;z="\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u062E\u0627\u0631\u062C";let F;return F="\u0645\u0641\u0639\u0644",[v,B,$,D,z,F,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","testTypeId","label",o,3,"source","config"],["formControlName","referenceValueId","label",t,3,"source","config"],[1,"sz-form-row"],["formControlName","enabled"],["formControlName","isFavorite"],["formControlName","price","label",i,3,"type"],["multi",""],["formControlName","transferInEnabled"],["formControlName","transferInPrice","label",r,3,"type"],["formControlName","transferOutEnabled"],["formControlName","transferOutLaboratoryId","label",O,3,"source","config"],[3,"actions"]];},template:function(t,i){t&1&&(s(0,"sz-ui-dialog-header",6),n(1,"mat-dialog-content")(2,"form",7),s(3,"sz-ui-form-field-select",8)(4,"sz-ui-form-field-select",9),n(5,"div",10)(6,"mat-checkbox",11),T(7,0),l(),n(8,"mat-checkbox",12),T(9,1),l()(),n(10,"div",10),s(11,"sz-ui-form-field-input",13),l(),s(12,"div",10),n(13,"mat-accordion",14)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),T(17,2),l()(),n(18,"mat-checkbox",15),T(19,3),l(),s(20,"sz-ui-form-field-input",16),l(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),T(24,4),l()(),n(25,"mat-checkbox",17),T(26,5),l(),s(27,"sz-ui-form-field-select",18),l()()()(),s(28,"sz-ui-dialog-actions",19)),t&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),E(2),_("formGroup",i.form),E(),_("source",i.testTypes)("config",i.testTypeSelectConfig),E(),_("source",i.referenceValues)("config",i.referenceValueSelectConfig),E(7),_("type","number"),E(9),_("type","number"),E(7),_("source",i.laboratories)("config",i.transferOutLaboratorySelectConfig),E(),_("actions",i.actions));},dependencies:[K,x,q,w,H,Q,Te,se,Se,u,ee,L,ie,Ce,Oe,fe,ce,Ne,oe,re],encapsulation:2});let a=e;return a;})();var ge=(()=>{let e=class e{constructor(){this.dialog=m(R),this.srptService=m(c),this.route=m(A),this.dataSource=new pe("baseTemplateVariable.name"),this.template=this.route.snapshot.data.template,this.dataSource.columnDefs.push(y.uuid("id"),y.date("createdAt").setVisible(!1),y.date("updatedAt").setVisible(!1),me.menu([P.edit(this.openSaveComponent.bind(this)),P.divider(),P.delete(this.openTemplateVariableDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(Ae,{data:{templateId:this.template.id,templateVariable:o}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTemplateVariableDeleteComponent(o){this.dialog.open(Ee,{data:le.delete(this.srptService.templates.variables.delete(o.templateId,o.id),o)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}get(){this.srptService.templates.variables.get(this.template.id,this.dataSource.getQuery()).pipe(Me(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=p({type:e,selectors:[["sz-mgmt-reporting-template-variables"]],standalone:!0,features:[M],decls:5,vars:2,consts:()=>{let o;return o="\u0625\u0636\u0627\u0641\u0629",[o,[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],[3,"update","dataSource"]];},template:function(t,i){t&1&&(n(0,"sz-ui-table-search-filter",1),C("changed",function(){return i.get();}),n(1,"button",2),C("click",function(){return i.openSaveComponent();}),n(2,"span"),T(3,0),l()()(),n(4,"sz-ui-table",3),C("update",function(){return i.get();}),l()),t&2&&(_("dataSource",i.dataSource),E(4),_("dataSource",i.dataSource));},dependencies:[g,b,ue,de,L,f,te],encapsulation:2});let a=e;return a;})();var G=(()=>{let e=class e{constructor(){this.route=m(A),this.dialog=m(R),this.srptService=m(c),this.template=this.route.snapshot.data.template,this.appBarConfig={title:this.template.name,subtitle:this.template.description};}};e.ɵfac=function(t){return new(t||e)();},e.ɵcmp=p({type:e,selectors:[["sz-mgmt-reporting-template"]],standalone:!0,features:[j([]),M],decls:3,vars:1,consts:[[3,"config"],[1,"tw-my-4"]],template:function(t,i){t&1&&(s(0,"sz-ui-app-bar",0),n(1,"div",1),s(2,"sz-mgmt-reporting-template-variables"),l()),t&2&&_("config",i.appBarConfig);},dependencies:[u,f,b,ae,W,ge],encapsulation:2});let a=e;return a;})();var At=(()=>{let e=class e{};e.ɵfac=function(t){return new(t||e)();},e.ɵmod=X({type:e}),e.ɵinj=U({providers:[c],imports:[g.forChild([{path:"",component:G}]),u,f,G]});let a=e;return a;})();export{At as TemplatesModule};/**i18n:7a9f3c982e3d544e8991bb34cdb5a6fdcf3438cf410fb6ab9f6732a102cfaa64*/