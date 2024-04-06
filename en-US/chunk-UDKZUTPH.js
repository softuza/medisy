import{b as K}from"./chunk-LENLOB5H.js";import"./chunk-SCLXRFRD.js";import"./chunk-GJ53RA72.js";import{b as C}from"./chunk-CHXZP2FG.js";import"./chunk-HG44BF4G.js";import{a as h}from"./chunk-MUPWFADN.js";import"./chunk-QSM7WKJW.js";import"./chunk-Z3ELZRWE.js";import{c as g,d as u,e as W,f as Q,g as q}from"./chunk-U74XIGIW.js";import"./chunk-ONUVJR5I.js";import{a as i,b as U,d as X,f as Y,i as H,j as J}from"./chunk-7YC3FKFX.js";import"./chunk-U2NYA4TJ.js";import"./chunk-UKNNB4C6.js";import"./chunk-UBJFLYRY.js";import"./chunk-D4CAUMAG.js";import"./chunk-GOPVSNKC.js";import"./chunk-M3NA2DMH.js";import{a as b}from"./chunk-6MMOYJEJ.js";import{h as G}from"./chunk-QT6JCYGS.js";import{d as A,g as k}from"./chunk-R72CS7SP.js";import"./chunk-2NAL3ARI.js";import"./chunk-UCRC6V5J.js";import{b as _,c as V}from"./chunk-5WJVC7PV.js";import{a as j}from"./chunk-P4AS2ZYY.js";import"./chunk-EY4PTUQV.js";import{c as m,d as w}from"./chunk-QXIIYWNN.js";import"./chunk-YWYJPJA4.js";import"./chunk-EIWC7QFZ.js";import"./chunk-22G3BWVW.js";import{c as D,e as N}from"./chunk-L6HNREY7.js";import"./chunk-6YPHC773.js";import{ga as R,ha as O,ia as $,ja as F,ka as L}from"./chunk-QHXZELMZ.js";import{n as B}from"./chunk-TWGSABWX.js";import{Db as d,Nb as s,Ob as S,Pb as z,Zb as E,_b as c,hb as f,ib as l,jc as I,ka as M,pc as T,tb as y,ua as v,va as P}from"./chunk-XPH4NMLC.js";var Z=(()=>{let o=class o{constructor(e,t,r,p){this.dialog=e,this.mpplService=t,this.personNamePipe=r,this.router=p,this.title=m.patients,this.dataSource=new X("-createdAt"),this.alert=y(void 0),this.dataSource.columnDefs.push(i.uuid("id"),i.string("title.abbreviation").setVisible(!1),i.string("title.name").setVisible(!1).setName(m.title),i.hyperlink("names",n=>`/mppl/persons/${n.id}`).setValueGetter(n=>r.transform(n)).setName(m.name).setStacked(i.string("sex").setValueGetter(n=>w(n.sex))),i.date("birthDate"),i.string("ssn").setName(m.ssn).setResponsive(!0),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),U.menu([G.barcode(n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(K).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(Q,{data:{formats:[g.QR_CODE,g.PDF_417]}}).afterClosed().subscribe(e=>{e&&this.parseBarcodeResult(e);});}parseBarcodeResult(e){let t=W.decode(e);if(!t){this.alert.set({type:j.Error,message:m.barcodeNotSupported,timeout:5e3});return;}switch(t.type){case u.SyrianMsId:case u.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=t.value.ssn:this.dataSource.filtration?.equal("ssn",t.value.ssn),this.get();break;}case u.PersonId:this.router.navigate([`/mppl/persons/${t.value}`]);break;case u.AnalysisId:this.router.navigate([`/mlab/analyses/${t.value}`]);break;}}openBarcodeWriterComponent(e){this.dialog.open(q,{data:{format:g.QR_CODE,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(V(this.dataSource.indicator)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(l(A),l(h),l(C),l(D));},o.ɵcmp=v({type:o,selectors:[["sz-medisy-people-persons"]],features:[T([B,C])],decls:10,vars:5,consts:()=>{let e;return e="Add",[e,[3,"title"],[3,"alert"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],["end","","mat-icon-button","",3,"click"],[3,"update","stateEnabled","dataSource"]];},template:function(t,r){t&1&&(z(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),s(2,"sz-ui-table-search-filter",3),c("changed",function(){return r.get();}),s(3,"button",4),c("click",function(){return r.openPersonCreateComponent();}),s(4,"span"),E(5,0),S()(),s(6,"button",5),c("click",function(){return r.openBarcodeScanner();}),s(7,"mat-icon"),I(8,"qr_code_scanner"),S()()(),s(9,"sz-ui-table",6),c("update",function(){return r.get();}),S()),t&2&&(d("title",r.title),f(),d("alert",r.alert()),f(),d("dataSource",r.dataSource),f(7),d("stateEnabled",!0)("dataSource",r.dataSource));},dependencies:[$,F,H,Y,b,R,_],encapsulation:2});let a=o;return a;})();var Ae=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=P({type:o}),o.ɵinj=M({providers:[h],imports:[N.forChild([{path:"",component:Z}]),k,L,J,b,O,_]});let a=o;return a;})();export{Ae as PersonsModule};/**i18n:7992b670fa912c61e7fcc3b33bbd0ab051bcb5cc240f907263ef623fbdc93e3b*/