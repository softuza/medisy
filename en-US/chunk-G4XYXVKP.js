import{a as q}from"./chunk-R5OD2FBC.js";import"./chunk-SID2K4ZA.js";import"./chunk-QV5CRQW6.js";import{b as c}from"./chunk-5UXET42V.js";import"./chunk-MXNM5XST.js";import{a as l}from"./chunk-IH253LYB.js";import{a as o,d as $,e as E,f as G,i as O,j as Q}from"./chunk-XL6LO4ZO.js";import"./chunk-YGU4JTYS.js";import"./chunk-WW5RFYLV.js";import{b,c as d,d as k,g as w}from"./chunk-6LGU3KUZ.js";import"./chunk-HWJ6IS6U.js";import"./chunk-SR3I6TMI.js";import{a as V}from"./chunk-LOKRW6JI.js";import{m}from"./chunk-CLK5BOCA.js";import"./chunk-BNHPHFGK.js";import{d as T,g as R}from"./chunk-4CSR7EPJ.js";import"./chunk-VG3PAYI5.js";import{b as F}from"./chunk-SNT3MO4N.js";import{b as j}from"./chunk-264QKOH6.js";import"./chunk-W4ZBAGNE.js";import"./chunk-AAHDAXVC.js";import"./chunk-IEUIBZ53.js";import"./chunk-VXNH5PTX.js";import{Y as s,Z as N}from"./chunk-FZKM7RGV.js";import{c as _,e as D}from"./chunk-DNH4OZS2.js";import"./chunk-ELRLVGRO.js";import{ia as I,la as A}from"./chunk-4B53IFHW.js";import{n as B}from"./chunk-UZ765RGE.js";import{Kb as h,Lb as S,Xb as g,bb as y,cb as p,ea as v,na as C,oa as z,ob as M,oc as P,zb as f}from"./chunk-G33TNFCW.js";import"./chunk-EAIILSS5.js";var x=(()=>{let r=class r{constructor(e,t,i,u){this.dialog=e,this.mpplService=t,this.personNamePipe=i,this.router=u,this.dataSource=new $("-createdAt"),this.alert=M(void 0),this.appBarConfig={title:s.patients,actions:[m.add(this.openPersonCreateComponent.bind(this)),m.menu([m.search(),m.filter()])]},this.dataSource.columnDefs.push(o.uuid("id"),o.string("title.abbreviation").setVisible(!1),o.string("title.name").setVisible(!1).setName(s.title),o.hyperlink("names",n=>`/mppl/persons/${n.id}`).setValueGetter(n=>i.transform(n)).setName(s.name).setStacked(o.string("sex").setValueGetter(n=>N(n.sex))),o.date("birthDate"),o.string("ssn").setName(s.ssn).setResponsive(!0),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(q).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`])})}openBarcodeScanner(){this.dialog.open(w,{data:{formats:[b.QR_CODE,b.PDF_417]}}).afterClosed().subscribe(e=>{e&&this.parseBarcodeResult(e)})}parseBarcodeResult(e){let t=k.decode(e);if(!t){this.alert.set(j.error(s.barcode_not_supported,5e3));return}switch(t.type){case d.SyrianMsId:case d.SyrianId:{let i=this.dataSource.filtration?.find("ssn");i?i.value=t.value.ssn:this.dataSource.filtration?.equal("ssn",t.value.ssn),this.get();break}case d.PersonId:this.router.navigate([`/mppl/persons/${t.value}`]);break;case d.AnalysisId:this.router.navigate([`/mlab/analyses/${t.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(E(this.dataSource.state)).subscribe(e=>{this.dataSource.set(e.items,e.count)})}};r.\u0275fac=function(t){return new(t||r)(p(T),p(l),p(c),p(_))},r.\u0275cmp=C({type:r,selectors:[["sz-medisy-people-persons"]],features:[P([B,c])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(t,i){t&1&&(h(0,"sz-ui-table-bar",0),g("changed",function(){return i.get()}),S(),h(1,"sz-ui-table",1),g("update",function(){return i.get()}),S()),t&2&&(f("config",i.appBarConfig)("dataSource",i.dataSource),y(),f("dataSource",i.dataSource))},dependencies:[O,G],encapsulation:2});let a=r;return a})();var ze=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=z({type:r}),r.\u0275inj=v({providers:[l],imports:[D.forChild([{path:"",component:x}]),R,A,Q,V,I,F]});let a=r;return a})();export{ze as PersonsModule};
/**i18n:23b18f90dfad26ae6b830c3e760ecc323aedcfc43eb78549f6a00c2171dce7c8*/
