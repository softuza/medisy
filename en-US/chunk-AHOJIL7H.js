import{a as o,d as R,e as k,f as w,i as x,j as L}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as F,g as I}from"./chunk-SWY7WOHK.js";import{a as p}from"./chunk-5TNDWLJL.js";import{a as m}from"./chunk-I3W7CTPV.js";import"./chunk-2DOHZQYD.js";import{k as D}from"./chunk-JDBQ45YP.js";import{a as T}from"./chunk-ZGUTF2MC.js";import{d as P,j as i,k as A}from"./chunk-53DZ6NLX.js";import"./chunk-VHRVE7HV.js";import{d as _,g as v}from"./chunk-7B3GMYBR.js";import"./chunk-NKLFXX3X.js";import"./chunk-VPIQ5RG6.js";import"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import"./chunk-QZRJHJEV.js";import{Y as O}from"./chunk-4QPQ7IQ3.js";import{a as b,c as M,d as y}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as z,la as B}from"./chunk-H2OL5IOU.js";import"./chunk-CYOOLWM5.js";import{Jb as l,Kb as u,Wb as c,bb as S,ea as f,ja as s,mc as C,na as g,oa as h,yb as d}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var j=(()=>{let t=class t{constructor(){this.dialog=s(_),this.mlabService=s(m),this.route=s(b),this.router=s(M),this.dataSource=new R("-createdAt"),this.appBarConfig={title:O.analyses,menu:A.default().setItems([i.add(()=>{this.router.navigate([p.AnalysisCreate])}),i.menu([i.search(),i.filter().setBadge(()=>this.dataSource.filtrationCount())])])};let e=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(e&&e.filter),this.dataSource.columnDefs.push(o.uuid("id"),o.uuid("laboratoryId"),o.uuid("personId"),o.number("code").setClickFn(a=>this.router.navigate([p.Analyses,a.id])).setValueClassFontBold().setStacked(o.string("laboratory.name").setValueClassFontSmall()),o.date("createdAt"),o.date("updatedAt").setVisible(!1),o.menu([i.barcode(this.openBarcodeWriterComponent.bind(this))])),this.get()}openBarcodeWriterComponent(e){this.dialog.open(I,{data:{format:F.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({})}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=g({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[C([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(a,n){a&1&&(l(0,"sz-ui-table-bar",0),c("changed",function(){return n.get()}),u(),l(1,"sz-ui-table",1),c("update",function(){return n.get()}),u()),a&2&&(d("config",n.appBarConfig)("dataSource",n.dataSource),S(),d("dataSource",n.dataSource))},dependencies:[x,w],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let r=t;return r})();var ut=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=h({type:t}),t.\u0275inj=f({providers:[m],imports:[y.forChild([{path:"",component:j},{path:"create",loadComponent:()=>import("./chunk-IHTNC34R.js").then(e=>e.CreateComponent)}]),v,L,D,T,P,z,B]});let r=t;return r})();export{j as AnalysesComponent,ut as AnalysesModule};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
