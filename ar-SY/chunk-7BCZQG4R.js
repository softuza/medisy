import{a as D}from"./chunk-5SQOURYT.js";import{a as A}from"./chunk-J5BZ26A3.js";import"./chunk-AVG7V6BC.js";import"./chunk-H4K2CSXH.js";import{b as S}from"./chunk-LAKXRLUC.js";import"./chunk-GJE2PQG7.js";import{a as k,b as I,c as a,f as R,g as V}from"./chunk-QSKC3G63.js";import"./chunk-2KPNCTCB.js";import"./chunk-S7INMPNY.js";import"./chunk-25IBV356.js";import{a as f}from"./chunk-MJFSRKIR.js";import{a as N}from"./chunk-X6DCMHCL.js";import{a as h,b as p,c as T}from"./chunk-KDVDXLWF.js";import"./chunk-SQCF3S47.js";import"./chunk-RSYANUDV.js";import"./chunk-CFSVEDI7.js";import{d as _}from"./chunk-FRBT2WCB.js";import"./chunk-ZTT2CFXD.js";import"./chunk-HLTWUKSH.js";import{b as F}from"./chunk-276RQCOC.js";import"./chunk-2IPEL4E4.js";import"./chunk-FY76SKRQ.js";import{b as n,c as M}from"./chunk-IDQKS733.js";import"./chunk-RCHOHS2G.js";import"./chunk-W75G3ZKH.js";import"./chunk-5MQKWJS4.js";import{a as o,b as B}from"./chunk-N4MQQJHL.js";import"./chunk-FJ4IFQWV.js";import{r as z}from"./chunk-4I74CWZL.js";import"./chunk-LLSKOB3G.js";import"./chunk-OWRQBV6B.js";import{m as P}from"./chunk-3AQJ5CSK.js";import{Jb as m,Kb as u,Wb as c,bb as g,ja as i,kb as C,mc as v,na as b,nc as y,yb as l}from"./chunk-YAUSGWXJ.js";import"./chunk-QXHRBTK3.js";var w=(()=>{let s=class s{constructor(){this.dialog=i(_),this.mpplService=i(f),this.personNamePipe=i(S),this.router=i(z),this.dataSource=new R("-createdAt"),this.alert=C(void 0),this.appBarConfig={title:o.patients,menu:M.default().setItems([n.add(this.openPersonCreateComponent.bind(this)),n.menu([n.search(),n.filter()])])};let t=this.personNamePipe;this.dataSource.columnDefs.push(a.uuid("id"),a.string("title.abbreviation").setVisible(!1),a.string("title.name").setVisible(!1).setHeaderName(o.title),a.hyperlink("names").setClickFn(e=>this.router.navigate([D.Persons,e.id])).setValueGetter(e=>t.transform(e)).setHeaderName(o.name).setStacked(a.string("sex").setValueGetter(e=>B(e.sex))),a.date("birthDate"),a.string("ssn").setHeaderName(o.ssn).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(A).afterClosed().subscribe(t=>{t&&this.router.navigate([`/mppl/persons/${t.id}`])})}openBarcodeScanner(){this.dialog.open(N,{data:{formats:[h.QR_CODE,h.PDF_417]}}).afterClosed().subscribe(t=>{t&&this.parseBarcodeResult(t)})}parseBarcodeResult(t){let e=T.decode(t);if(!e){this.alert.set(F.error(o.barcode_not_supported,5e3));return}switch(e.type){case p.SyrianMsId:case p.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=e.value.ssn:this.dataSource.filtration?.equal("ssn",e.value.ssn),this.get();break}case p.PersonId:this.router.navigate([`/mppl/persons/${e.value}`]);break;case p.AnalysisId:this.router.navigate([`/mlab/analyses/${e.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(V(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=b({type:s,selectors:[["sz-medisy-people-persons"]],standalone:!0,features:[v([P,S,f]),y],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,r){e&1&&(m(0,"sz-ui-table-bar",0),c("changed",function(){return r.get()}),u(),m(1,"sz-ui-table",1),c("update",function(){return r.get()}),u()),e&2&&(l("config",r.appBarConfig)("dataSource",r.dataSource),g(),l("dataSource",r.dataSource))},dependencies:[k,I],encapsulation:2});let d=s;return d})();var ae=[{path:"",component:w}];export{ae as default};
/**i18n:359c45a37699f2cf41ff2ce7681094fb8642750bd9400ade44324692d4b7d733*/