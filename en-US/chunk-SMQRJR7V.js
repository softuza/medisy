import{b as w}from"./chunk-F6XQL5QN.js";import{a as T}from"./chunk-7W4DPCX5.js";import{d as I,e as t,g as V,i as R,j as W}from"./chunk-OKHT2ZMW.js";import{a as _,g as F}from"./chunk-SWY7WOHK.js";import{a as D}from"./chunk-I3W7CTPV.js";import{b as A,j as B}from"./chunk-JDBQ45YP.js";import{j as o,k as M}from"./chunk-53DZ6NLX.js";import{d as C}from"./chunk-7B3GMYBR.js";import{Y as g,Z as v}from"./chunk-4QPQ7IQ3.js";import{a as b,d as y}from"./chunk-WMCOMOML.js";import{la as z}from"./chunk-H2OL5IOU.js";import{Ia as p,Jb as c,Kb as u,Wb as S,bb as l,ja as n,mc as f,na as m,nc as h,yb as d}from"./chunk-6EDHPT3A.js";var Y=(()=>{let i=class i{constructor(){this.route=n(b),this.dialog=n(C),this.mlabService=n(D),this.analysis=p.required(),this.dataSource=new V,this.card={header:{title:g.specimens},menu:M.more([o.add(()=>this.openCreateComponent())])},this.dataSource.columnDefs.push(t.uuid("id"),t.icon("specimen.specimenStatus").setValueGetter(e=>w(e.specimen.specimenStatus)).setValueTooltip(e=>v(e.specimen.specimenStatus)),t.number("specimen.code").setStyleSmall(),t.string("specimen.specimenType.nameEn"),t.date("createdAt").setVisible(!1),t.date("updatedAt").setVisible(!1),t.menu([o.barcode(this.openBarcodeWriterComponent.bind(this)),o.divider(),o.delete(this.openAnalysisSpecimenDeleteComponent.bind(this))]))}ngOnInit(){this.get()}openAnalysisSpecimenDeleteComponent(e){this.dialog.open(B,{data:A.delete(this.mlabService.analyses.specimens.delete(e.analysisId,e.id),e)}).afterClosed().subscribe(a=>{this.dataSource.delete(a)})}openBarcodeWriterComponent(e){this.dialog.open(F,{data:{format:_.DATA_MATRIX,msg:`mlab.sid.${e.id}`,dataMatrix:{rect:!0}}}).afterClosed().subscribe({})}openCreateComponent(){}get(){this.mlabService.analyses.specimens.get(this.analysis().id,this.dataSource.getQuery()).pipe(R(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=m({type:i,selectors:[["sz-medisy-laboratory-analysis-specimens"]],inputs:{analysis:[1,"analysis"]},standalone:!0,features:[f([]),h],decls:2,vars:2,consts:[[3,"card"],["content","",3,"update","dataSource"]],template:function(a,r){a&1&&(c(0,"sz-ui-card",0)(1,"sz-ui-table",1),S("update",function(){return r.get()}),u()()),a&2&&(d("card",r.card),l(),d("dataSource",r.dataSource))},dependencies:[y,W,I,z,T],encapsulation:2});let s=i;return s})();export{Y as a};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/