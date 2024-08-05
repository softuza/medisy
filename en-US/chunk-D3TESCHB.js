import{b as K}from"./chunk-5BWVBPMR.js";import"./chunk-HH3TFYPH.js";import"./chunk-YGT2VPRJ.js";import{b as C}from"./chunk-E3NJQNXU.js";import"./chunk-OY7MIDLA.js";import"./chunk-MMVDS2X4.js";import{a as h}from"./chunk-5DPQRN3C.js";import"./chunk-LRMAXIYS.js";import{a as i,b as q,d as U,e as X,g as Y,j as H,k as J}from"./chunk-4TZOFLQA.js";import"./chunk-I4DB5R2A.js";import"./chunk-4IJFJQYN.js";import{b,c as u,d as G,g as W,h as Q}from"./chunk-OKAHGCAZ.js";import"./chunk-3Q7NLQRN.js";import"./chunk-HAWQZ3DL.js";import"./chunk-CZ3NOAZC.js";import{a as g}from"./chunk-4APH4GGR.js";import{h as w}from"./chunk-3HX3ISKW.js";import{d as A,g as k}from"./chunk-T2IQKITO.js";import"./chunk-OAP2OGZI.js";import{b as _}from"./chunk-6CUNSDAY.js";import{a as j}from"./chunk-VTM5G3BH.js";import"./chunk-3CG52MMS.js";import{c as p,d as V}from"./chunk-K3B67OJW.js";import"./chunk-SNWVCYUD.js";import"./chunk-SVCJK6WQ.js";import"./chunk-74AZXQY6.js";import"./chunk-PN4M3V23.js";import{c as D,e as N}from"./chunk-U4LXFUUA.js";import"./chunk-36FAVIBG.js";import{ha as R,ia as O,ja as $,ka as L,la as F}from"./chunk-UJOOHETU.js";import{n as T}from"./chunk-VUVL2XHK.js";import{Jb as s,Kb as S,Lb as y,Vb as E,Wb as d,bb as f,cb as l,ea as M,hc as B,na as v,nc as I,oa as P,ob as z,zb as c}from"./chunk-RCLXGW2A.js";import"./chunk-7I3LHTBF.js";var Z=(()=>{let o=class o{constructor(e,t,r,m){this.dialog=e,this.mpplService=t,this.personNamePipe=r,this.router=m,this.dataSource=new U("-createdAt"),this.alert=z(void 0),this.appBarConfig={title:p.patients},this.dataSource.columnDefs.push(i.uuid("id"),i.string("title.abbreviation").setVisible(!1),i.string("title.name").setVisible(!1).setName(p.title),i.hyperlink("names",n=>`/mppl/persons/${n.id}`).setValueGetter(n=>r.transform(n)).setName(p.name).setStacked(i.string("sex").setValueGetter(n=>V(n.sex))),i.date("birthDate"),i.string("ssn").setName(p.ssn).setResponsive(!0),i.date("createdAt").setVisible(!1),i.date("updatedAt").setVisible(!1),q.menu([w.barcode(n=>this.openBarcodeWriterComponent(n))])),this.get();}openPersonCreateComponent(){this.dialog.open(K).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openBarcodeScanner(){this.dialog.open(W,{data:{formats:[b.QR_CODE,b.PDF_417]}}).afterClosed().subscribe(e=>{e&&this.parseBarcodeResult(e);});}parseBarcodeResult(e){let t=G.decode(e);if(!t){this.alert.set({type:j.Error,message:p.barcode_not_supported,timeout:5e3});return;}switch(t.type){case u.SyrianMsId:case u.SyrianId:{let r=this.dataSource.filtration?.find("ssn");r?r.value=t.value.ssn:this.dataSource.filtration?.equal("ssn",t.value.ssn),this.get();break;}case u.PersonId:this.router.navigate([`/mppl/persons/${t.value}`]);break;case u.AnalysisId:this.router.navigate([`/mlab/analyses/${t.value}`]);break;}}openBarcodeWriterComponent(e){this.dialog.open(Q,{data:{format:b.QR_CODE,msg:`personid.${e.id}`}}).afterClosed().subscribe({});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(X(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};o.ɵfac=function(t){return new(t||o)(l(A),l(h),l(C),l(D));},o.ɵcmp=v({type:o,selectors:[["sz-medisy-people-persons"]],features:[I([T,C])],decls:10,vars:4,consts:()=>{let e;return e="Add",[e,[3,"config"],[3,"alert"],[3,"changed","dataSource"],["mat-flat-button","","color","primary","start","",3,"click"],["end","","mat-icon-button","",3,"click"],[3,"update","dataSource"]];},template:function(t,r){t&1&&(y(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),s(2,"sz-ui-table-search-filter",3),d("changed",function(){return r.get();}),s(3,"button",4),d("click",function(){return r.openPersonCreateComponent();}),s(4,"span"),E(5,0),S()(),s(6,"button",5),d("click",function(){return r.openBarcodeScanner();}),s(7,"mat-icon"),B(8,"qr_code_scanner"),S()()(),s(9,"sz-ui-table",6),d("update",function(){return r.get();}),S()),t&2&&(c("config",r.appBarConfig),f(),c("alert",r.alert()),f(),c("dataSource",r.dataSource),f(7),c("dataSource",r.dataSource));},dependencies:[$,L,H,Y,g,R,_],encapsulation:2});let a=o;return a;})();var Oe=(()=>{let o=class o{};o.ɵfac=function(t){return new(t||o)();},o.ɵmod=P({type:o}),o.ɵinj=M({providers:[h],imports:[N.forChild([{path:"",component:Z}]),k,F,J,g,O,_]});let a=o;return a;})();export{Oe as PersonsModule};/**i18n:ee05a22f3822c113da725777965dd561774d6cc6a2deb7b3b35335df23b29b27*/