import{e as K}from"./chunk-CZVACMCC.js";import{a as q,b as H,c as d,f as Q,g as J}from"./chunk-K7G3KWAY.js";import"./chunk-EI54IRV4.js";import"./chunk-XKXHDOYY.js";import"./chunk-CFNJPKH2.js";import{b as U,f as X,g as k,h as w,j,k as x}from"./chunk-ZUXIOQ5W.js";import{a as S}from"./chunk-IVJ2NFMZ.js";import"./chunk-BJI27WIG.js";import{a as I,b as D,d as L,e as v,g as z}from"./chunk-XPOR4ANW.js";import{c as y,p as B,q as V,s as $,t as Y}from"./chunk-XJQPGDXO.js";import"./chunk-H6HLHFPT.js";import"./chunk-PYOUUVMA.js";import"./chunk-OLKWA3AP.js";import{d as M,f as O,g as b,l as P,n as T,q as N,r as A,t as R}from"./chunk-H2FFMEH6.js";import{b as s,c as G}from"./chunk-QW5IGDYW.js";import"./chunk-HFWKIQYR.js";import"./chunk-NTRRBKKS.js";import"./chunk-AILLJ5BU.js";import"./chunk-QHVUL2KY.js";import{a as F}from"./chunk-TCPYXQGZ.js";import"./chunk-TW5J4YO6.js";import"./chunk-KRMUG4G6.js";import"./chunk-OEH6HIG5.js";import"./chunk-OIZYHDJE.js";import{Jb as l,Kb as p,Lb as _,Vb as h,Wb as E,bb as m,ja as r,mb as g,mc as f,na as c,nc as C,yb as n}from"./chunk-GTR6A7KK.js";import"./chunk-NLUW4JS2.js";var W=(()=>{let i=class i extends X{constructor(){let o=r(I);super(o),this.mlabService=r(S),this.fb=r(A),this.data=r(D);let e=this.fb;this.dialog=o;let t=this.data;this.form=e.group({name:[t?.name,[M.required,M.minLength(1)]],description:[t?.description,[]],enabled:[t?.enabled??!0,[]]});}submit(){this.IsValid()&&(this.data?this.save(this.mlabService.priceProfiles.update(this.data.id,this.form.value)):this.save(this.mlabService.priceProfiles.create(this.form.value)));}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-price-profiles-price-profile-save"]],standalone:!0,features:[f([]),g,C],decls:8,vars:5,consts:()=>{let o;o="Name";let e;e="Description";let t;return t="Enabled",[t,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",o],["formControlName","description","label",e],["formControlName","enabled"],[3,"actions"]];},template:function(e,t){e&1&&(_(0,"sz-ui-dialog-header",1),l(1,"mat-dialog-content")(2,"form",2),_(3,"sz-ui-form-field-input",3)(4,"sz-ui-form-field-textarea",4),l(5,"mat-checkbox",5),h(6,0),p()()(),_(7,"sz-ui-dialog-actions",6)),e&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),m(2),n("formGroup",t.form),m(5),n("actions",t.actions));},dependencies:[R,P,O,b,T,N,z,v,x,k,w,Y,y,$,V,B,K],encapsulation:2});let a=i;return a;})();var Z=(()=>{let i=class i{constructor(){this.dialog=r(L),this.mlabService=r(S),this.dataSource=new Q(),this.appBarConfig={title:F.price_profiles,menu:G.default().setItems([s.add(this.openSaveComponent.bind(this)),s.menu([s.search()])])},this.dataSource.columnDefs.push(d.uuid("id"),d.string("name"),d.date("createdAt").setVisible(!1),d.date("updatedAt").setVisible(!1),d.menu([s.edit(this.openSaveComponent.bind(this)),s.divider(),s.delete(this.openPriceProfileDeleteComponent.bind(this))])),this.get();}openSaveComponent(o){this.dialog.open(W,{data:o}).afterClosed().subscribe(e=>{this.dataSource.addOrUpdateItem(e);});}openPriceProfileDeleteComponent(o){this.dialog.open(j,{data:U.delete(this.mlabService.priceProfiles.delete(o.id),o)}).afterClosed().subscribe(e=>{this.dataSource.delete(e);});}get(){this.mlabService.priceProfiles.get(this.dataSource.getQuery()).pipe(J(this.dataSource.state)).subscribe(o=>{this.dataSource.set(o.items,o.count);});}};i.ɵfac=function(e){return new(e||i)();},i.ɵcmp=c({type:i,selectors:[["sz-medisy-laboratory-price-profiles"]],standalone:!0,features:[f([S]),C],decls:2,vars:3,consts:[[3,"changed","config","dataSource"],[3,"update","dataSource"]],template:function(e,t){e&1&&(l(0,"sz-ui-table-bar",0),E("changed",function(){return t.get();}),p(),l(1,"sz-ui-table",1),E("update",function(){return t.get();}),p()),e&2&&(n("config",t.appBarConfig)("dataSource",t.dataSource),m(),n("dataSource",t.dataSource));},dependencies:[q,H],encapsulation:2});let a=i;return a;})();var De=[{path:"",component:Z}];export{De as default};/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/