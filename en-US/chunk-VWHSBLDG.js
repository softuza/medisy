import{a as f}from"./chunk-R2AWCYT6.js";import{a as A}from"./chunk-IXOX7SEU.js";import"./chunk-RRFGQVGH.js";import"./chunk-4T4R43QE.js";import{b}from"./chunk-GCCXJBKW.js";import"./chunk-GFZBSPJH.js";import{a as k,b as I,c as a,f as R,g as V}from"./chunk-NPWEF7AC.js";import"./chunk-ACEW6WPY.js";import"./chunk-B5HDENZ3.js";import"./chunk-EVIA6KGC.js";import{a as h}from"./chunk-MR5MUTQT.js";import{a as N}from"./chunk-EGPWP4UT.js";import{a as S,b as p,c as T}from"./chunk-64XTXVLX.js";import"./chunk-D7LANVDJ.js";import"./chunk-PDI6UCLL.js";import"./chunk-P3AGLTLC.js";import{d as F}from"./chunk-2ZFTWFYD.js";import"./chunk-ATPZCT2T.js";import"./chunk-KAF37RCP.js";import{b as B}from"./chunk-GBADWWUE.js";import"./chunk-55JBAVWP.js";import"./chunk-Y37CXB4J.js";import{b as n,c as M}from"./chunk-Y5YQXPZA.js";import"./chunk-S3OSENSY.js";import"./chunk-5CL4SKSS.js";import"./chunk-BBZ7YY2F.js";import{a as o,b as D}from"./chunk-OLLDNXUJ.js";import"./chunk-F2RLXW5B.js";import{r as _}from"./chunk-CPYNYOPU.js";import"./chunk-FOPOXJAX.js";import"./chunk-OMBDLYON.js";import{m as z}from"./chunk-TVGPKZGQ.js";import{Jb as m,Kb as u,Wb as c,bb as C,ja as i,kb as P,mc as v,na as g,nc as y,yb as l}from"./chunk-WG6S32LW.js";import"./chunk-7DSIBXHM.js";var $=(()=>{let s=class s{constructor(){this.dialog=i(F),this.mpplService=i(h),this.personNamePipe=i(b),this.router=i(_),this.dataSource=new R("-createdAt"),this.alert=P(void 0),this.appBarConfig={title:o.patients,menu:M.default().setItems([n.add(this.openPersonCreateComponent.bind(this)),n.menu([n.search(),n.filter()])])};let t=this.personNamePipe;this.dataSource.columnDefs.push(a.uuid("id"),a.string("title.abbreviation").setVisible(!1),a.string("title.name").setVisible(!1).setHeaderName(o.title),a.hyperlink("names").setClickFn(e=>this.router.navigate([f.Persons,e.id])).setValueGetter(e=>t.transform(e)).setHeaderName(o.name).setStacked(a.string("sex").setValueGetter(e=>D(e.sex))),a.date("birthDate"),a.string("ssn").setHeaderName(o.ssn).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(A).afterClosed().subscribe(t=>{t&&this.router.navigate([`/${f.Persons}/${t.id}`])})}openBarcodeScanner(){this.dialog.open(N,{data:{formats:[S.QR_CODE,S.PDF_417]}}).afterClosed().subscribe(t=>{t&&this.parseBarcodeResult(t)})}parseBarcodeResult(t){let e=T.decode(t);if(!e){this.alert.set(B.error(o.barcode_not_supported,5e3));return}switch(e.type){case p.SyrianMsId:case p.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=e.value.ssn:this.dataSource.filtration?.equal("ssn",e.value.ssn),this.get();break}case p.PersonId:this.router.navigate([`/mppl/persons/${e.value}`]);break;case p.AnalysisId:this.router.navigate([`/mlab/analyses/${e.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(V(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g({type:s,selectors:[["sz-medisy-people-persons"]],standalone:!0,features:[v([z,b,h]),y],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,r){e&1&&(m(0,"sz-ui-table-bar",0),c("changed",function(){return r.get()}),u(),m(1,"sz-ui-table",1),c("update",function(){return r.get()}),u()),e&2&&(l("config",r.appBarConfig)("dataSource",r.dataSource),C(),l("dataSource",r.dataSource))},dependencies:[k,I],encapsulation:2});let d=s;return d})();var ae=[{path:"",component:$}];export{ae as default};
/**i18n:90fd3a02d1f38af464e16e15bd62cf2b8c3351a95846e9a75ddd118742a5a7ba*/
