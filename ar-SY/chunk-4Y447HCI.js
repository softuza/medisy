import{b as K}from"./chunk-ZVTUUJS7.js";import"./chunk-M3UFXIQW.js";import"./chunk-EYWZNQGU.js";import{b as C}from"./chunk-Y6NL5I5M.js";import"./chunk-SB22KN27.js";import"./chunk-Z6PRB2GD.js";import{a as h}from"./chunk-GDDMUJI6.js";import"./chunk-PLILYGN2.js";import{a as i,b as q,d as U,e as X,g as Y,j as H,k as J}from"./chunk-WSKSU7P3.js";import"./chunk-UDBXG2VS.js";import"./chunk-RMWG6QF6.js";import{b as g,c as u,d as G,g as W,h as Q}from"./chunk-4IPBVUIC.js";import"./chunk-6EOVNP6P.js";import"./chunk-4NTC2VLV.js";import"./chunk-76IND4GV.js";import{a as b}from"./chunk-ZPKIPVTE.js";import{h as w}from"./chunk-TIEHGEOE.js";import{d as A,g as k}from"./chunk-QCMAXDKX.js";import{b as _}from"./chunk-W6VXAIY6.js";import{a as j}from"./chunk-NUTQJXHI.js";import"./chunk-ZI7LGOZY.js";import{c as m,d as V}from"./chunk-AR6ZPEMB.js";import"./chunk-7ZLPMEOZ.js";import"./chunk-H6LOKDLY.js";import"./chunk-YNSSO6VZ.js";import{c as D,e as N}from"./chunk-7JY5LSGA.js";import"./chunk-G7VNWCRP.js";import{ha as R,ia as O,ja as $,ka as L,la as F}from"./chunk-TSWXIYWJ.js";import{n as T}from"./chunk-DTCSWDXN.js";import{Jb as s,Kb as S,Lb as y,Vb as E,Wb as c,bb as f,cb as l,ea as M,hc as B,na as v,nc as I,oa as P,ob as z,zb as d}from"./chunk-7IDM2VXI.js";import"./chunk-K67PUIM2.js";var Z=(()=>{let o=class o{constructor(e,t,r,p){this.dialog=e,this.mpplService=t,this.personNamePipe=r,this.router=p,this.title=m.patients,this.dataSource=new U("-createdAt"),this.alert=z(void 0),this.dataSource.columnDefs.push(i.uuid("id"),i.string("title.abbreviation").setVisible(!1),i.string("title.name").setVisible(!1).setName(m.title),i.hyperlink("names",n=>`/mppl/persons/${n.id}`).setValueGetter(n=>r.transform(n)).setName(m.name).setStacked(i.string("sex").setValueGetter(n=>V(n.sex))),i.date("birthDate"),i.string("ssn").setName(m.ssn).setResponsive(!0),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),q.menu([w.barcode(n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(K).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(W,{data:{formats:[g.QR_CODE,g.PDF_417]}}).afterClosed().subscribe(e=>{e&&this.parseBarcodeResult(e);});}parseBarcodeResult(e){let t=G.decode(e);if(!t){this.alert.set({type:j.Error,message:m.barcode_not_supported,timeout:5e3});return;}switch(t.type){case u.SyrianMsId:case u.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=t.value.ssn:this.dataSource.filtration?.equal("ssn",t.value.ssn),this.get();break;}case u.PersonId:this.router.navigate([`/mppl/persons/${t.value}`]);break;case u.AnalysisId:this.router.navigate([`/mlab/analyses/${t.value}`]);break;}}openBarcodeWriterComponent(e){this.dialog.open(Q,{data:{format:g.QR_CODE,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(X(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(l(A),l(h),l(C),l(D));},o.ɵcmp=v({type:o,selectors:[["sz-medisy-people-persons"]],features:[I([T,C])],decls:10,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"title"],[3,"alert"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],["end","","mat-icon-button","",3,"click"],[3,"update","dataSource"]];},template:function(t,r){t&1&&(y(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),s(2,"sz-ui-table-search-filter",3),c("changed",function(){return r.get();}),s(3,"button",4),c("click",function(){return r.openPersonCreateComponent();}),s(4,"span"),E(5,0),S()(),s(6,"button",5),c("click",function(){return r.openBarcodeScanner();}),s(7,"mat-icon"),B(8,"qr_code_scanner"),S()()(),s(9,"sz-ui-table",6),c("update",function(){return r.get();}),S()),t&2&&(d("title",r.title),f(),d("alert",r.alert()),f(),d("dataSource",r.dataSource),f(7),d("dataSource",r.dataSource));},dependencies:[$,L,H,Y,b,R,_],encapsulation:2});let a=o;return a;})();var Oe=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=P({type:o}),o.ɵinj=M({providers:[h],imports:[N.forChild([{path:"",component:Z}]),k,F,J,b,O,_]});let a=o;return a;})();export{Oe as PersonsModule};/**i18n:3415fba6ca40c85db6a6c1f427335a940d891078c77c172d8c69b98bbabeac73*/