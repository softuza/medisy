import{a as f}from"./chunk-CZSDKHXK.js";import{a as o,d as L,e as k,f as w,i as x,j as E}from"./chunk-2ZVCN45A.js";import"./chunk-5TVHWUQF.js";import"./chunk-FLYZTQVP.js";import{a as R,g as j}from"./chunk-BEKYXRPJ.js";import{a as m}from"./chunk-INUEVVSF.js";import"./chunk-MB447KBV.js";import{k as F}from"./chunk-OZNM4F5S.js";import{a as T}from"./chunk-MOAPW72V.js";import{d as P,j as n,k as D}from"./chunk-LZ3HWPNB.js";import"./chunk-QBM73LDG.js";import{d as B,g as I}from"./chunk-YEM3GD5L.js";import"./chunk-F6DYKLPX.js";import"./chunk-ZPIO6CFV.js";import"./chunk-264QKOH6.js";import"./chunk-UJCEDBUS.js";import"./chunk-H7W7YGPD.js";import"./chunk-VNEAS3P2.js";import"./chunk-ER7WHOJP.js";import{Y as O}from"./chunk-6JNKTIUK.js";import{a as y,c as v,e as z}from"./chunk-NBEPCNAY.js";import"./chunk-THXYLS24.js";import{ia as _,la as A}from"./chunk-UUEM5JJT.js";import"./chunk-PSZD7437.js";import{Kb as l,Lb as c,Xb as p,bb as b,cb as s,ea as h,na as S,nc as M,oa as C,zb as u}from"./chunk-IKPHE33N.js";import"./chunk-EAIILSS5.js";var N=(()=>{let t=class t{constructor(e,r,i,d){this.dialog=e,this.mlabService=r,this.route=i,this.router=d,this.dataSource=new L("-createdAt"),this.appBarConfig={title:O.analyses,menu:D.default().setItems([n.add(()=>{this.router.navigate([f.AnalysisCreate])}),n.menu([n.search(),n.filter().setBadge(()=>this.dataSource.filtrationCount())])])};let g=this.router.getCurrentNavigation()?.extras.state;this.dataSource.filtration?.push(g&&g.filter),this.dataSource.columnDefs.push(o.uuid("id"),o.uuid("laboratoryId"),o.uuid("personId"),o.number("code").setClickFn(V=>this.router.navigate([f.Analyses,V.id])).setValueClassFontBold().setStacked(o.string("laboratory.name").setValueClassFontSmall()),o.date("createdAt"),o.date("updatedAt").setVisible(!1),o.menu([n.barcode(this.openBarcodeWriterComponent.bind(this))])),this.get()}openBarcodeWriterComponent(e){this.dialog.open(j,{data:{format:R.QR_CODE,msg:`analysisid.${e.id}`}}).afterClosed().subscribe({})}get(){this.mlabService.analyses.get(this.dataSource.getQuery()).pipe(k(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};t.\u0275fac=function(r){return new(r||t)(s(B),s(m),s(y),s(v))},t.\u0275cmp=S({type:t,selectors:[["sz-medisy-laboratory-analyses"]],features:[M([])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(r,i){r&1&&(l(0,"sz-ui-table-bar",0),p("changed",function(){return i.get()}),c(),l(1,"sz-ui-table",1),p("update",function(){return i.get()}),c()),r&2&&(u("config",i.appBarConfig)("dataSource",i.dataSource),b(),u("dataSource",i.dataSource))},dependencies:[x,w],styles:[".column-status[_ngcontent-%COMP%], .mat-column-detail-status[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){max-width:4px;margin-left:24px}.mat-column-status[_ngcontent-%COMP%]:not(mat-header-cell){background-color:#13a311}.mat-column-detail-status[_ngcontent-%COMP%]{background-color:#13a311}.mat-cell[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{padding-left:0}"]});let a=t;return a})();var pt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=C({type:t}),t.\u0275inj=h({providers:[m],imports:[z.forChild([{path:"",component:N},{path:"create",loadComponent:()=>import("./chunk-AZDIZTXJ.js").then(e=>e.CreateComponent)}]),I,E,F,T,P,_,A]});let a=t;return a})();export{N as AnalysesComponent,pt as AnalysesModule};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
