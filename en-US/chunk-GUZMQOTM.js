import{b as H,e as U}from"./chunk-JZZQQKDW.js";import"./chunk-DTFUQI5B.js";import"./chunk-MZELHHAN.js";import{b as _}from"./chunk-5YI3XC3F.js";import{a as f}from"./chunk-GFXMLTOC.js";import"./chunk-LH5LWYTE.js";import"./chunk-35X4BQ6I.js";import"./chunk-5MJY3UW5.js";import"./chunk-6RXJAO3W.js";import{a as r,d as B,f as G,k as V,l as w}from"./chunk-O7NMWRYR.js";import"./chunk-NE2FJIGN.js";import"./chunk-PBJGFLAZ.js";import"./chunk-B2HAIUJV.js";import"./chunk-DHOS3PR4.js";import"./chunk-4P35ERGT.js";import"./chunk-UMJXJL2N.js";import{b as S}from"./chunk-OSERNDEW.js";import"./chunk-ZOSUD6WZ.js";import{d as D,g as R}from"./chunk-LR6GUTIR.js";import"./chunk-RIMZTZOB.js";import{c as $}from"./chunk-RNDCCMR3.js";import{b as F}from"./chunk-Y5OMJY5V.js";import"./chunk-ALHR4HEP.js";import{c as u,d as j}from"./chunk-TG74CNA3.js";import"./chunk-E4SPABR5.js";import"./chunk-LVJI6PBQ.js";import"./chunk-IYBV62C4.js";import{c as I,e as N}from"./chunk-576WN54X.js";import"./chunk-SNIA324J.js";import{a as L,b as k,c as A}from"./chunk-42MYF47R.js";import{ha as T,ia as O}from"./chunk-5MDONEI4.js";import{n as z}from"./chunk-6TGWOZSV.js";import{Hb as a,Ib as d,Jb as P,O as g,Tb as v,Vb as l,gc as E,ha as C,ib as h,jb as p,jc as y,qa as b,ra as M,xb as c}from"./chunk-OHUDUA2T.js";var X=(()=>{let t=class t{constructor(e,i,o,s){this.dialog=e,this.mpplService=i,this.personNamePipe=o,this.router=s,this.title=u.patients,this.dataSource=new B("-createdAt"),this.dataSource.columnDefs.push(r.uuid("id"),r.string("title.abbreviation").setVisibility(!1),r.string("title.name").setVisibility(!1).setName(u.title),r.hyperlink("names",m=>this.router.navigate([`/mppl/persons/${m.id}`])).setValueGetter(m=>o.transform(m)).setName(u.name),r.string("sex").setValueGetter(m=>j(m.sex)),r.date("birthDate"),r.date("createdAt",!1),r.date("updatedAt",!1)),this.get();}openPersonCreateComponent(){this.dialog.open(H).afterClosed().subscribe(e=>{e&&this.router.navigate([`/mppl/persons/${e.id}`]);});}openPersonScanComponent(){this.dialog.open(U).afterClosed().subscribe(e=>{if(e){let i=this.dataSource.filtration?.filters.find(o=>o.field==="ssn");i?i.value=e.ssn:this.dataSource.filtration?.filters.push({field:"ssn",op:F.InsensitiveContains,value:e.ssn}),this.get();}});}get(){this.mpplService.persons.get(this.dataSource.getQuery()).pipe($(this.dataSource.indicator),g(1)).subscribe(e=>{this.dataSource.set(e.items,e.count);});}};t.ɵfac=function(i){return new(i||t)(p(D),p(f),p(_),p(I));},t.ɵcmp=b({type:t,selectors:[["sz-medisy-people-persons"]],features:[y([z,_])],decls:9,vars:4,consts:()=>{let e;return e="Add",[[3,"title"],[3,"dataSource","changed"],["mat-flat-button","","color","primary","start","",3,"click"],e,["end","","mat-icon-button","",3,"click"],[3,"stateEnabled","dataSource","update"]];},template:function(i,o){i&1&&(P(0,"sz-ui-header-info",0),a(1,"sz-ui-table-search-filter",1),l("changed",function(){return o.get();}),a(2,"button",2),l("click",function(){return o.openPersonCreateComponent();}),a(3,"span"),v(4,3),d()(),a(5,"button",4),l("click",function(){return o.openPersonScanComponent();}),a(6,"mat-icon"),E(7,"barcode"),d()()(),a(8,"sz-ui-table",5),l("update",function(){return o.get();}),d()),i&2&&(c("title",o.title),h(),c("dataSource",o.dataSource),h(7),c("stateEnabled",!0)("dataSource",o.dataSource));},dependencies:[L,k,V,G,S,T],encapsulation:2});let n=t;return n;})();var Me=(()=>{let t=class t{};t.ɵfac=function(i){return new(i||t)();},t.ɵmod=M({type:t}),t.ɵinj=C({providers:[f],imports:[N.forChild([{path:"",component:X}]),R,A,w,S,O]});let n=t;return n;})();export{Me as PersonsModule};/**i18n:0f14478d9f76834c336477492adead1f84c567d512dc7742568a2120e6a13b69*/