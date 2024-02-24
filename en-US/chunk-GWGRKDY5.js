import{a,b as re,d as ne,f as ae,k as se,l as _e}from"./chunk-FWC3CCRR.js";import"./chunk-AY7PXSCZ.js";import"./chunk-E7V2G3VZ.js";import{a as l}from"./chunk-YDMDVI6M.js";import{e as Z,f as ee,g as te,i as ie,j as N,k as oe}from"./chunk-EZC2CU7X.js";import"./chunk-OA72TFHI.js";import"./chunk-RACJZOAS.js";import{b as g}from"./chunk-HKZIVJYM.js";import{g as L}from"./chunk-PNII32UO.js";import{a as X,b as j,d as k,e as w,g as C}from"./chunk-V6ACGGWJ.js";import{l as J,p as K,q as Q,r as W}from"./chunk-VBUQVK7Q.js";import{c as x}from"./chunk-IYSGQK54.js";import"./chunk-D4OS2O7B.js";import"./chunk-QTM2YACZ.js";import{c as O}from"./chunk-2W3OIU7Y.js";import"./chunk-OIFHB67M.js";import{d as u,f as P,g as z,k as $,m as R,p as B,q as Y,t as V}from"./chunk-H52WVCBC.js";import"./chunk-4HG3UR3K.js";import{c as F,e as G}from"./chunk-YYZRSXTZ.js";import"./chunk-TZDP466F.js";import{a as q,c as H}from"./chunk-B3RLTRYJ.js";import{ha as U}from"./chunk-PMB5EPNY.js";import"./chunk-2HDHH4PW.js";import{Fb as S,Gb as c,Hb as p,M as E,Rb as v,Tb as M,fa as h,gb as m,hb as s,hc as T,kc as y,oa as f,ob as b,pa as D,vb as _}from"./chunk-UDYUYOMJ.js";var me=(()=>{let i=class i extends Z{constructor(t,e,o,r){super(o),this.mlabService=t,this.fb=e,this.dialog=o,this.data=r,this.disciplines=this.mlabService.disciplines.getAll({orderBy:["name"]}),this.form=e.group({name:[r?.name,[u.required,u.minLength(1)]],latinName:[r?.latinName,[u.required,u.minLength(1)]],abbreviation:[r?.abbreviation,[]],description:[r?.description,[]],purpose:[r?.purpose,[]],disciplineId:[r?.disciplineId,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.testTypes.update(this.data.id,this.form.value)):this.save(this.mlabService.testTypes.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)(s(l),s(Y),s(X),s(j));},i.ɵcmp=f({type:i,selectors:[["sz-medisy-mlab-test-types-save"]],standalone:!0,features:[T([]),b,y],decls:10,vars:4,consts:()=>{let t;t="Name";let e;e="Latin";let o;o="Abbreviation";let r;r="Description";let A;A="Purpose";let I;return I="Discipline",[[3,"header"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],["formControlName","latinName","label",e],["formControlName","abbreviation","label",o],["formControlName","description","label",r],["formControlName","purpose","label",A],["formControlName","disciplineId","label",I,3,"source"],[3,"actions"]];},template:function(e,o){e&1&&(p(0,"sz-ui-dialog-header",0),S(1,"mat-dialog-content")(2,"form",1),p(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-textarea",5)(7,"sz-ui-form-field-textarea",6)(8,"sz-ui-form-field-select",7),c()(),p(9,"sz-ui-dialog-actions",8)),e&2&&(_("header",o.header),m(2),_("formGroup",o.form),m(6),_("source",o.disciplines),m(),_("actions",o.actions));},dependencies:[V,$,P,z,R,B,C,w,N,ee,te,W,J,Q,K],encapsulation:2});let n=i;return n;})();var Se=(()=>{let i=class i{constructor(t,e,o){this.dialog=t,this.mlabService=e,this.router=o,this.title=O.testTypes,this.dataSource=new ne(),this.dataSource.columns.push(a.uuid("id"),a.hyperlink("name",r=>this.router.navigate([`/mlab/test-types/${r.id}`])),a.string("code"),a.string("latinName"),a.uuid("disciplineId"),a.string("discipline.name").setName(O.discipline),a.string("description"),a.string("abbreviation"),a.date("createdAt",!1),a.date("updatedAt",!1),re.menu([L.edit(r=>this.openSaveComponent(r)),L.delete(r=>this.openTestTypeDeleteComponent(r))])),this.get();}openSaveComponent(t){this.dialog.open(me,{data:t}).afterClosed().pipe(E(1)).subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openTestTypeDeleteComponent(t){this.dialog.open(ie,{data:oe.delete(this.mlabService.testTypes.delete(t.id),t)}).afterClosed().pipe(E(1)).subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.testTypes.get(this.dataSource.buildRequest()).pipe(x(this.dataSource.indicator),E(1)).subscribe(t=>{this.dataSource.set(t.items,t.count);});}};i.ɵfac=function(e){return new(e||i)(s(k),s(l),s(F));},i.ɵcmp=f({type:i,selectors:[["sz-medisy-mlab-test-types"]],features:[T([l])],decls:6,vars:4,consts:()=>{let t;return t="Add",[[3,"title"],[3,"dataSource","changed"],["title","","mat-flat-button","","color","primary","start","",3,"click"],t,[3,"stateEnabled","dataSource","update"]];},template:function(e,o){e&1&&(p(0,"sz-ui-header-info",0),S(1,"sz-ui-table-search-filter",1),M("changed",function(){return o.get();}),S(2,"button",2),M("click",function(){return o.openSaveComponent();}),S(3,"span"),v(4,3),c()()(),S(5,"sz-ui-table",4),M("update",function(){return o.get();}),c()),e&2&&(_("title",o.title),m(),_("dataSource",o.dataSource),m(4),_("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[q,se,ae,g],encapsulation:2});let n=i;return n;})();var pe=[{path:"",component:Se}];var rt=(()=>{let i=class i{};i.ɵfac=function(e){return new(e||i)();},i.ɵmod=D({type:i}),i.ɵinj=h({providers:[l],imports:[G.forChild(pe),C,U,H,_e,N,g]});let n=i;return n;})();export{rt as TestTypesModule};/**i18n:441d79d171ba4e8fb8b617de1ef68214357f23bb2b2895fddc1630aee38796c8*/