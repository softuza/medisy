import{a as f}from"./chunk-NUNFHE6B.js";import{a as I}from"./chunk-KW37HMXI.js";import"./chunk-OO2ET3RN.js";import"./chunk-MZ2ZUSH4.js";import"./chunk-6T6YPDEZ.js";import{b}from"./chunk-K2JCXXY3.js";import{c as k,d as R,e as a,h as V,i as A}from"./chunk-LFBBKJHQ.js";import"./chunk-DJTCXLE6.js";import"./chunk-WR67YADW.js";import"./chunk-DNPEC467.js";import{a as h}from"./chunk-FV3QUWUM.js";import{a as N}from"./chunk-U2CQHUPF.js";import{a as S,b as p,c as T}from"./chunk-CHSZK2YL.js";import"./chunk-3VDM3QBA.js";import"./chunk-SH55UZR2.js";import"./chunk-Q76RI7RH.js";import{d as F}from"./chunk-NXWHFD5J.js";import"./chunk-YE7OGPQO.js";import"./chunk-QPPKO7QS.js";import"./chunk-NHKTZSL7.js";import{b as B}from"./chunk-JDRER5OW.js";import"./chunk-VLFDLUKF.js";import"./chunk-SZ4JOIPB.js";import{b as n,c as M}from"./chunk-ZKT34U6O.js";import"./chunk-OAHNBXW3.js";import"./chunk-6KLEPFJV.js";import{c as s,d as D}from"./chunk-TROKCKRK.js";import"./chunk-I5YU2A2W.js";import{r as _}from"./chunk-OH3VJFHV.js";import"./chunk-KHQUVCMB.js";import"./chunk-O5U4UK7G.js";import{m as z}from"./chunk-IOFQXYPN.js";import{Jb as m,Kb as u,Wb as c,bb as C,ja as i,kb as P,mc as v,na as g,nc as y,yb as l}from"./chunk-4TXFHTB5.js";import"./chunk-UD7IN7DC.js";var $=(()=>{let o=class o{constructor(){this.dialog=i(F),this.mpplService=i(h),this.personNamePipe=i(b),this.router=i(_),this.dataSource=new V("-createdAt"),this.alert=P(void 0),this.appBarConfig={title:s.patients,menu:M.default([n.add(this.openPersonCreateComponent.bind(this)),n.menu([n.search(),n.filter()])])};let t=this.personNamePipe;this.dataSource.columnDefs.push(a.uuid("id"),a.string("title.abbreviation").setVisible(!1),a.string("title.name").setVisible(!1).setHeaderName(s.title),a.hyperlink("names").setClickFn(e=>this.router.navigate([f.Persons,e.id])).setValueGetter(e=>t.transform(e)).setHeaderName(s.name).setStacked(a.string("sex").setValueGetter(e=>D(e.sex))),a.date("birthDate"),a.string("ssn").setHeaderName(s.ssn).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(I).afterClosed().subscribe(t=>{t&&this.router.navigate([`/${f.Persons}/${t.id}`])})}openBarcodeScanner(){this.dialog.open(N,{data:{formats:[S.QR_CODE,S.PDF_417]}}).afterClosed().subscribe(t=>{t&&this.parseBarcodeResult(t)})}parseBarcodeResult(t){let e=T.decode(t);if(!e){this.alert.set(B.error(s.barcode_not_supported,5e3));return}switch(e.type){case p.SyrianMsId:case p.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=e.value.ssn:this.dataSource.filtration?.equal("ssn",e.value.ssn),this.get();break}case p.PersonId:this.router.navigate([`/mppl/persons/${e.value}`]);break;case p.AnalysisId:this.router.navigate([`/mlab/analyses/${e.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(A(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=g({type:o,selectors:[["sz-medisy-people-persons"]],standalone:!0,features:[v([z,b,h]),y],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,r){e&1&&(m(0,"sz-ui-table-bar",0),c("changed",function(){return r.get()}),u(),m(1,"sz-ui-table",1),c("update",function(){return r.get()}),u()),e&2&&(l("config",r.appBarConfig)("dataSource",r.dataSource),C(),l("dataSource",r.dataSource))},dependencies:[k,R],encapsulation:2});let d=o;return d})();var ae=[{path:"",component:$}];export{ae as default};
/**i18n:3baa7a52fa2dfa3c4602a0f5c18b10b468e666f31530cd067c23c1079d9af4f3*/