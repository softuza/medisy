import{a as U}from"./chunk-7W4DPCX5.js";import{d as Q,e as a,g as J,i as K,j as W}from"./chunk-OKHT2ZMW.js";import{a as _}from"./chunk-I3W7CTPV.js";import{b as X,f as w,g as j,h as q,j as k,k as H}from"./chunk-JDBQ45YP.js";import{j as d,k as $}from"./chunk-53DZ6NLX.js";import{a as A,b as z,d as D,e as P,g as R}from"./chunk-7B3GMYBR.js";import{q as F,r as V,s as Y}from"./chunk-NKLFXX3X.js";import{d as M,f as y,g as C,l as g,n as O,q as N,r as b,u as I}from"./chunk-QZRJHJEV.js";import{Y as B}from"./chunk-4QPQ7IQ3.js";import{a as v,d as G}from"./chunk-WMCOMOML.js";import{la as L}from"./chunk-H2OL5IOU.js";import{Ia as T,Jb as l,Kb as u,Lb as c,Wb as h,bb as p,ja as r,mb as f,mc as E,na as m,nc as S,yb as s}from"./chunk-6EDHPT3A.js";var Z=(()=>{let i=class i extends w{constructor(){let e=r(A);super(e),this.mlabService=r(_),this.fb=r(b),this.data=r(z),this.specimenTypes=this.mlabService.specimenTypes.getAll({orderBy:["nameEn"]});let t=this.fb;this.dialog=e;let o=this.data;this.form=t.group({specimenTypeId:[o.testGroupSpecimenType?.specimenTypeId,[M.required]],note:[o.testGroupSpecimenType?.note]});}submit(){this.IsValid()&&(this.data.testGroupSpecimenType?this.save(this.mlabService.testGroups.specimenTypes.update(this.data.testGroupId,this.data.testGroupSpecimenType?.id,this.form.value)):this.save(this.mlabService.testGroups.specimenTypes.create(this.data.testGroupId,this.form.value)));}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=m({type:i,selectors:[["sz-medisy-laboratory-test-type-specimen-types-save"]],standalone:!0,features:[E([]),f,S],decls:6,vars:6,consts:()=>{let e;e="Type";let t;return t="Note",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","specimenTypeId","label",e,3,"source"],["formControlName","note","label",t],[3,"actions"]];},template:function(t,o){t&1&&(c(0,"sz-ui-dialog-header",0),l(1,"mat-dialog-content")(2,"form",1),c(3,"sz-ui-form-field-select",2)(4,"sz-ui-form-field-textarea",3),u()(),c(5,"sz-ui-dialog-actions",4)),t&2&&(s("title",o.title)("subtitle",o.subtitle)("alert",o.alert()),p(2),s("formGroup",o.form),p(),s("source",o.specimenTypes),p(2),s("actions",o.actions));},dependencies:[I,g,y,C,O,N,R,P,F,H,j,q,Y,V],encapsulation:2});let n=i;return n;})();var Ge=(()=>{let i=class i{constructor(){this.dialog=r(D),this.mlabService=r(_),this.route=r(v),this.dataSource=new J(),this.testGroupId=T.required(),this.card={header:{title:B.specimen_types},menu:$.more([d.add(()=>this.openSaveComponent())])},this.dataSource.columnDefs.push(a.uuid("id"),a.uuid("specimenTypeId"),a.uuid("testTypeId"),a.string("specimenType.nameEn"),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1),a.menu([d.edit(this.openSaveComponent.bind(this)),d.divider(),d.delete(this.openTestTypeSpecimenTypeDeleteComponent.bind(this))]));}ngOnInit(){this.get();}openSaveComponent(e){this.dialog.open(Z,{data:{testGroupId:this.testGroupId(),testGroupSpecimenType:e}}).afterClosed().subscribe(t=>{this.dataSource.addOrUpdateItem(t);});}openTestTypeSpecimenTypeDeleteComponent(e){this.dialog.open(k,{data:X.delete(this.mlabService.testGroups.specimenTypes.delete(e.testGroupId,e.id),e)}).afterClosed().subscribe(t=>{this.dataSource.delete(t);});}updateItem(e){this.mlabService.testGroups.specimenTypes.update(e.testGroupId,e.id,e).subscribe(t=>{this.dataSource.update(t);});}get(){this.mlabService.testGroups.specimenTypes.get(this.testGroupId(),this.dataSource.getQuery()).pipe(K(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};i.ɵfac=function(t){return new(t||i)();},i.ɵcmp=m({type:i,selectors:[["sz-medisy-laboratory-test-group-specimen-types"]],inputs:{testGroupId:[1,"testGroupId"]},standalone:!0,features:[S],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(t,o){t&1&&(l(0,"sz-ui-card",0)(1,"sz-ui-table",1),h("update",function(){return o.get();}),u()()),t&2&&(s("card",o.card),p(),s("dataSource",o.dataSource));},dependencies:[G,L,W,Q,U],encapsulation:2});let n=i;return n;})();export{Ge as a};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/