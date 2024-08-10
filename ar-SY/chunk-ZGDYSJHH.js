import{a as K}from"./chunk-P5CTTFAY.js";import"./chunk-L4YNU5ME.js";import"./chunk-VDRIOQRH.js";import{b as C}from"./chunk-LXK4YWXJ.js";import"./chunk-2IH6W6RH.js";import{a as h}from"./chunk-JDLKSXQ6.js";import{a as i,b as q,d as U,e as X,g as Y,j as H,k as J}from"./chunk-TL25PZOA.js";import"./chunk-IIRALN2P.js";import"./chunk-UF47Q52P.js";import{b,c as u,d as G,g as W,h as Q}from"./chunk-K7QJU5W4.js";import"./chunk-K6V7CDNO.js";import"./chunk-HDESHI6J.js";import"./chunk-FU2YQI4O.js";import{a as g}from"./chunk-RZMF5OBM.js";import{h as w}from"./chunk-2H57PQRQ.js";import{d as A,g as k}from"./chunk-5Z2AVCMQ.js";import"./chunk-OTQOREXX.js";import{b as _}from"./chunk-ZFDGA7FN.js";import{b as j}from"./chunk-RVYZ6BY4.js";import"./chunk-WSRIOYTJ.js";import{c as p,d as V}from"./chunk-4NIIIJVR.js";import"./chunk-NSDPW5NR.js";import"./chunk-HCMVICB7.js";import"./chunk-6FRRGOY6.js";import{c as T,e as N}from"./chunk-OML62A3D.js";import"./chunk-CMXQHIQB.js";import{ha as R,ia as O,ja as $,ka as L,la as F}from"./chunk-YDNNJYIT.js";import{n as D}from"./chunk-7BDCTZU5.js";import{Kb as s,Lb as S,Mb as y,Wb as E,Xb as c,bb as f,cb as l,ea as M,ic as B,na as v,oa as P,ob as z,oc as I,zb as d}from"./chunk-5JWJCQP4.js";import"./chunk-E7WAML37.js";var Z=(()=>{let o=class o{constructor(e,t,r,m){this.dialog=e,this.mpplService=t,this.personNamePipe=r,this.router=m,this.dataSource=new U("-createdAt"),this.alert=z(void 0),this.appBarConfig={title:p.patients},this.dataSource.columnDefs.push(i.uuid("id"),i.string("title.abbreviation").setVisible(!1),i.string("title.name").setVisible(!1).setName(p.title),i.hyperlink("names",n=>`/mppl/persons/${n.id}`).setValueGetter(n=>r.transform(n)).setName(p.name).setStacked(i.string("sex").setValueGetter(n=>V(n.sex))),i.date("birthDate"),i.string("ssn").setName(p.ssn).setResponsive(!0),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),q.menu([w.barcode(n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(K).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(W,{data:{formats:[b.QR_CODE,b.PDF_417]}}).afterClosed().subscribe(e=>{e&&this.parseBarcodeResult(e);});}parseBarcodeResult(e){let t=G.decode(e);if(!t){this.alert.set(j.error(p.barcode_not_supported,5e3));return;}switch(t.type){case u.SyrianMsId:case u.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=t.value.ssn:this.dataSource.filtration?.equal("ssn",t.value.ssn),this.get();break;}case u.PersonId:this.router.navigate([`/mppl/persons/${t.value}`]);break;case u.AnalysisId:this.router.navigate([`/mlab/analyses/${t.value}`]);break;}}openBarcodeWriterComponent(e){this.dialog.open(Q,{data:{format:b.QR_CODE,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(X(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(l(A),l(h),l(C),l(T));},o.ɵcmp=v({type:o,selectors:[["sz-medisy-people-persons"]],features:[I([D,C])],decls:10,vars:4,consts:()=>{let e;return e="\u0625\u0636\u0627\u0641\u0629",[e,[3,"config"],[3,"alert"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],["end","","mat-icon-button","",3,"click"],[3,"update","dataSource"]];},template:function(t,r){t&1&&(y(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),s(2,"sz-ui-table-search-filter",3),c("changed",function(){return r.get();}),s(3,"button",4),c("click",function(){return r.openPersonCreateComponent();}),s(4,"span"),E(5,0),S()(),s(6,"button",5),c("click",function(){return r.openBarcodeScanner();}),s(7,"mat-icon"),B(8,"qr_code_scanner"),S()()(),s(9,"sz-ui-table",6),c("update",function(){return r.get();}),S()),t&2&&(d("config",r.appBarConfig),f(),d("alert",r.alert()),f(),d("dataSource",r.dataSource),f(7),d("dataSource",r.dataSource));},dependencies:[$,L,H,Y,g,R,_],encapsulation:2});let a=o;return a;})();var Oe=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=P({type:o}),o.ɵinj=M({providers:[h],imports:[N.forChild([{path:"",component:Z}]),k,F,J,g,O,_]});let a=o;return a;})();export{Oe as PersonsModule};/**i18n:0723fdc6bb4a61bdf6e4521b7e87431ed83fc9fa1984f79dc75da1b4dd886659*/