import{a as D}from"./chunk-ML6BNME4.js";import{a as A}from"./chunk-ALBDO35S.js";import"./chunk-5TXOOLVZ.js";import"./chunk-P4FVNSVS.js";import{b as S}from"./chunk-3BKWN24B.js";import"./chunk-U4N237WM.js";import{a as k,b as I,c as a,f as R,g as V}from"./chunk-YUC45UAG.js";import"./chunk-GPAES7OP.js";import"./chunk-DSJR6L5G.js";import"./chunk-XDEHVO3T.js";import{a as f}from"./chunk-LG6CZU73.js";import{a as N}from"./chunk-QDOSGJTB.js";import{a as h,b as p,c as T}from"./chunk-2BMNYJ3Z.js";import"./chunk-LUZYQH3A.js";import"./chunk-ODYGSBAJ.js";import"./chunk-QERRRZIA.js";import{d as _}from"./chunk-MHLQ5ASK.js";import"./chunk-EMVR6TPU.js";import"./chunk-ZDS23LK5.js";import{b as F}from"./chunk-WX4XW32G.js";import"./chunk-Q4QLTUTU.js";import"./chunk-R425IBES.js";import{b as n,c as M}from"./chunk-MFJGOIE4.js";import"./chunk-KPHZXQ4R.js";import"./chunk-53QS6UIR.js";import"./chunk-TM26YT7E.js";import{a as o,b as B}from"./chunk-XYHX3JVK.js";import"./chunk-FZND2MZR.js";import{r as z}from"./chunk-CVZW7JYW.js";import"./chunk-GBJNACNX.js";import"./chunk-IJWI4VMJ.js";import{m as P}from"./chunk-OKKKBEFN.js";import{Jb as m,Kb as u,Wb as c,bb as g,ja as i,kb as C,mc as v,na as b,nc as y,yb as l}from"./chunk-K7VHIDZW.js";import"./chunk-VARUJZUG.js";var w=(()=>{let s=class s{constructor(){this.dialog=i(_),this.mpplService=i(f),this.personNamePipe=i(S),this.router=i(z),this.dataSource=new R("-createdAt"),this.alert=C(void 0),this.appBarConfig={title:o.patients,menu:M.default().setItems([n.add(this.openPersonCreateComponent.bind(this)),n.menu([n.search(),n.filter()])])};let t=this.personNamePipe;this.dataSource.columnDefs.push(a.uuid("id"),a.string("title.abbreviation").setVisible(!1),a.string("title.name").setVisible(!1).setHeaderName(o.title),a.hyperlink("names").setClickFn(e=>this.router.navigate([D.Persons,e.id])).setValueGetter(e=>t.transform(e)).setHeaderName(o.name).setStacked(a.string("sex").setValueGetter(e=>B(e.sex))),a.date("birthDate"),a.string("ssn").setHeaderName(o.ssn).setResponsive(!0),a.date("createdAt").setVisible(!1),a.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(A).afterClosed().subscribe(t=>{t&&this.router.navigate([`/mppl/persons/${t.id}`])})}openBarcodeScanner(){this.dialog.open(N,{data:{formats:[h.QR_CODE,h.PDF_417]}}).afterClosed().subscribe(t=>{t&&this.parseBarcodeResult(t)})}parseBarcodeResult(t){let e=T.decode(t);if(!e){this.alert.set(F.error(o.barcode_not_supported,5e3));return}switch(e.type){case p.SyrianMsId:case p.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=e.value.ssn:this.dataSource.filtration?.equal("ssn",e.value.ssn),this.get();break}case p.PersonId:this.router.navigate([`/mppl/persons/${e.value}`]);break;case p.AnalysisId:this.router.navigate([`/mlab/analyses/${e.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(V(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=b({type:s,selectors:[["sz-medisy-people-persons"]],standalone:!0,features:[v([P,S,f]),y],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,r){e&1&&(m(0,"sz-ui-table-bar",0),c("changed",function(){return r.get()}),u(),m(1,"sz-ui-table",1),c("update",function(){return r.get()}),u()),e&2&&(l("config",r.appBarConfig)("dataSource",r.dataSource),g(),l("dataSource",r.dataSource))},dependencies:[k,I],encapsulation:2});let d=s;return d})();var ae=[{path:"",component:w}];export{ae as default};
/**i18n:7274145596894140ce8dc809ecf6b222e8bea6098fe1553d5bf6245265c46bf4*/
