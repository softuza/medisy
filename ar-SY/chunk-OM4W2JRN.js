import{a as F}from"./chunk-LSD4RGLY.js";import{a as Q}from"./chunk-Y7RSOXT5.js";import"./chunk-ZDPRNFLQ.js";import"./chunk-IBEGBZPR.js";import{b as S}from"./chunk-XCI3HIRX.js";import"./chunk-INUIK7WM.js";import{a as d}from"./chunk-AFDVYKVT.js";import{a as o,d as E,e as H,f as $,i as G,j as O}from"./chunk-OX75U6S7.js";import"./chunk-YSNB3P37.js";import"./chunk-M6VFFTL7.js";import{a as h,b as m,c as w,f as j}from"./chunk-SWY7WOHK.js";import"./chunk-2DOHZQYD.js";import"./chunk-JDBQ45YP.js";import{a as V}from"./chunk-ZGUTF2MC.js";import{j as p,k}from"./chunk-53DZ6NLX.js";import"./chunk-VHRVE7HV.js";import{d as D,g as N}from"./chunk-7B3GMYBR.js";import"./chunk-NKLFXX3X.js";import{b as A}from"./chunk-VPIQ5RG6.js";import{b as R}from"./chunk-PYOUUVMA.js";import"./chunk-ODIMT2GD.js";import"./chunk-NBE6QGAD.js";import"./chunk-IT3CNXEP.js";import"./chunk-QZRJHJEV.js";import{Y as s,Z as I}from"./chunk-4QPQ7IQ3.js";import{c as M,d as B}from"./chunk-WMCOMOML.js";import"./chunk-V2COJPJH.js";import{ia as _,la as T}from"./chunk-H2OL5IOU.js";import{m as P}from"./chunk-CYOOLWM5.js";import{Jb as u,Kb as c,Wb as f,bb as v,ea as g,ja as n,kb as z,mc as y,na as b,oa as C,yb as l}from"./chunk-6EDHPT3A.js";import"./chunk-NLUW4JS2.js";var q=(()=>{let r=class r{constructor(){this.dialog=n(D),this.mpplService=n(d),this.personNamePipe=n(S),this.router=n(M),this.dataSource=new E("-createdAt"),this.alert=z(void 0),this.appBarConfig={title:s.patients,menu:k.default().setItems([p.add(this.openPersonCreateComponent.bind(this)),p.menu([p.search(),p.filter()])])};let t=this.personNamePipe;this.dataSource.columnDefs.push(o.uuid("id"),o.string("title.abbreviation").setVisible(!1),o.string("title.name").setVisible(!1).setHeaderName(s.title),o.hyperlink("names").setClickFn(e=>this.router.navigate([F.Persons,e.id])).setValueGetter(e=>t.transform(e)).setHeaderName(s.name).setStacked(o.string("sex").setValueGetter(e=>I(e.sex))),o.date("birthDate"),o.string("ssn").setHeaderName(s.ssn).setResponsive(!0),o.date("createdAt").setVisible(!1),o.date("updatedAt").setVisible(!1)),this.get()}openPersonCreateComponent(){this.dialog.open(Q).afterClosed().subscribe(t=>{t&&this.router.navigate([`/mppl/persons/${t.id}`])})}openBarcodeScanner(){this.dialog.open(j,{data:{formats:[h.QR_CODE,h.PDF_417]}}).afterClosed().subscribe(t=>{t&&this.parseBarcodeResult(t)})}parseBarcodeResult(t){let e=w.decode(t);if(!e){this.alert.set(R.error(s.barcode_not_supported,5e3));return}switch(e.type){case m.SyrianMsId:case m.SyrianId:{let i=this.dataSource.filtration?.find("ssn");i?i.value=e.value.ssn:this.dataSource.filtration?.equal("ssn",e.value.ssn),this.get();break}case m.PersonId:this.router.navigate([`/mppl/persons/${e.value}`]);break;case m.AnalysisId:this.router.navigate([`/mlab/analyses/${e.value}`]);break}}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe(H(this.dataSource.state)).subscribe(t=>{this.dataSource.set(t.items,t.count)})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=b({type:r,selectors:[["sz-medisy-people-persons"]],features:[y([P,S])],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,i){e&1&&(u(0,"sz-ui-table-bar",0),f("changed",function(){return i.get()}),c(),u(1,"sz-ui-table",1),f("update",function(){return i.get()}),c()),e&2&&(l("config",i.appBarConfig)("dataSource",i.dataSource),v(),l("dataSource",i.dataSource))},dependencies:[G,$],encapsulation:2});let a=r;return a})();var ve=(()=>{let r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=C({type:r}),r.\u0275inj=g({providers:[d],imports:[B.forChild([{path:"",component:q}]),N,T,O,V,_,A]});let a=r;return a})();export{ve as PersonsModule};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/
