import{c as H}from"./chunk-XVBWHRHB.js";import{a as q}from"./chunk-AZTHU3GV.js";import{a as ie}from"./chunk-7SQDWJYV.js";import{a as qe,b as He,j as We}from"./chunk-IREA3O7E.js";import"./chunk-D2ZZ2EM7.js";import"./chunk-IQN3O4LZ.js";import"./chunk-NRL5NXSH.js";import{d as ce,e as oe}from"./chunk-4DRVOOC4.js";import{f as B,g as k,h as U,i as Ue,k as X}from"./chunk-XVW27JLP.js";import"./chunk-AW4VH2GC.js";import{b as we}from"./chunk-OOEXEJ4R.js";import{a as v,b as P,d as $e,e as R,g as h}from"./chunk-DORI46RQ.js";import{c as $,p as G,s as Be,v as w}from"./chunk-XSVH7MQJ.js";import{b as Ve}from"./chunk-TVM3BSRW.js";import"./chunk-NDMJM53R.js";import{i as z}from"./chunk-CWOC6VYL.js";import{d as l,f as I,g as O,l as y,o as x,r as F,s as b,u as A}from"./chunk-ZWU3YGKZ.js";import{b as V,c as ke}from"./chunk-FWFWESWL.js";import{a as Xe}from"./chunk-OYOHSYMM.js";import"./chunk-M6I2XG4X.js";import"./chunk-4E7O73CR.js";import{a as te}from"./chunk-E7QNYKJO.js";import"./chunk-S5ALDRCG.js";import{p as Pe}from"./chunk-DCPCJTMS.js";import"./chunk-FY3W77EY.js";import"./chunk-L64VIROQ.js";import{A as ve,Ka as ze,Na as Ge,ka as Re,m as be,s as Ae}from"./chunk-TXVIAXH2.js";import{$a as Ie,Cb as D,Fb as se,Hb as ae,Ib as de,Jb as me,Kb as _,Lb as f,Mb as a,Qb as Q,Xb as Y,Zb as p,bc as ye,cb as d,cc as xe,db as re,dc as Fe,hc as _e,ic as pe,ja as u,lb as Oe,na as E,nb as L,nc as K,oc as J,pc as M,qa as De,qc as S,rc as C,s as Le,sb as le,vc as ue,wa as g,wc as fe,xa as T,ya as ne,yb as ee,zb as m}from"./chunk-6SIAYQG6.js";import{a as he,b as Ne}from"./chunk-3IKOHXF5.js";var j=class{static round2Decimals(o){return Math.round(o*100)/100;}};var je=(()=>{let o=class o{constructor(e,t){this.http=e,this.sanitizer=t;}transform(e){return this.http.get(e,{responseType:"blob"}).pipe(Le(t=>this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(t))));}};o.ɵfac=function(t){return new(t||o)(re(Ae,16),re(ve,16));},o.ɵpipe=De({name:"secure",type:o,pure:!0,standalone:!0});let n=o;return n;})();var c=class{static toPixel(o,r){return o==="mm"?r*3.78:o==="cm"?r*37.8:o==="in"?r*96:r;}static fromPixel(o,r){return o==="mm"?r/3.78:o==="cm"?r/37.8:o==="in"?r/96:r;}};var Qe=(()=>{let o=class o extends B{constructor(){let e=u(v);super(e),this.fb=u(b),this.data=u(P),this.barcodeTypes=["qr","datamatrix"];let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({id:[i?.id??q.generateV7(),[l.required]],name:[i?.name,[]],type:["barcode",[l.required]],x:[i?.x??0,[l.required]],y:[i?.y??0,[l.required]],value:[i?.value??"",[l.required]],barcodeType:[i?.barcodeType??"qr",[l.required]],width:[i?.width??16,[l.required]],height:[i?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[S([]),L,C],decls:13,vars:6,consts:()=>{let e;e="Name";let t;t="value";let i;i="Type";let s;s="Width";let N;return N="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],["formControlName","value","label",t],["formControlName","barcodeType","label",i,3,"source"],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","width","label",s],["formControlName","height","label",N],[3,"actions"]];},template:function(t,i){t&1&&(a(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2)(4,"sz-ui-form-field-input-text",3)(5,"sz-ui-form-field-select",4),_(6,"div",5),a(7,"sz-ui-form-field-input-number",6)(8,"sz-ui-form-field-input-number",7),f(),_(9,"div",5),a(10,"sz-ui-form-field-input-number",8)(11,"sz-ui-form-field-input-number",9),f()()(),a(12,"sz-ui-dialog-actions",10)),t&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),m("formGroup",i.form),d(3),m("source",i.barcodeTypes),d(7),m("actions",i.actions));},dependencies:[A,y,I,O,x,F,h,R,z,H,X,k,U,w,$,G,Be],encapsulation:2});let n=o;return n;})();var Ye=(()=>{let o=class o extends B{constructor(){let e=u(v);super(e),this.fb=u(b),this.data=u(P);let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({id:[i?.id??q.generateV7()],name:[i?.name,[]],type:["image",[l.required]],x:[i?.x??0,[l.required]],y:[i?.y??0,[l.required]],url:[i?.url??"",[l.required]],width:[i?.width??16,[l.required]],height:[i?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[S([]),L,C],decls:11,vars:5,consts:()=>{let e;e="Name";let t;t="Width";let i;return i="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","width","label",t],["formControlName","height","label",i],[3,"actions"]];},template:function(t,i){t&1&&(a(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),_(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),f(),_(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),f()()(),a(10,"sz-ui-dialog-actions",8)),t&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),m("formGroup",i.form),d(8),m("actions",i.actions));},dependencies:[A,y,I,O,x,F,h,R,z,H,X,k,U,w,$,G],encapsulation:2});let n=o;return n;})();var Ke=(()=>{let o=class o extends B{constructor(){let e=u(v);super(e),this.fb=u(b),this.data=u(P);let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({id:[i?.id??q.generateV7(),[l.required]],name:[i?.name,[]],type:["line",[l.required]],x:[i?.x??5,[l.required]],y:[i?.y??5,[l.required]],lineColor:[i?.lineColor??"#000",[l.required]],lineWidth:[i?.lineWidth??1,[l.required]],x2:[i?.x2??30,[l.required]],y2:[i?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[S([]),L,C],decls:13,vars:5,consts:()=>{let e;e="Name";let t;t="Color";let i;return i="Width",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","x2","label","X2"],["formControlName","y2","label","Y2"],["formControlName","lineColor","label",t],["formControlName","lineWidth","label",i],[3,"actions"]];},template:function(t,i){t&1&&(a(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),_(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),f(),_(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),f(),a(10,"sz-ui-form-field-input-text",8)(11,"sz-ui-form-field-input-number",9),f()(),a(12,"sz-ui-dialog-actions",10)),t&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),m("formGroup",i.form),d(10),m("actions",i.actions));},dependencies:[A,y,I,O,x,F,h,R,z,H,X,k,U,w,$,G],encapsulation:2});let n=o;return n;})();var Je=(()=>{let o=class o extends B{constructor(){let e=u(v);super(e),this.fb=u(b),this.data=u(P);let t=this.fb;this.dialog=e;let i=this.data;this.form=t.group({id:[i?.id??q.generateV7(),[l.required]],name:[i?.name,[]],type:["text",[l.required]],x:[i?.x??0,[l.required]],y:[i?.y??0,[l.required]],text:[i?.text??"",[l.required]],fontSize:[i?.fontSize??12,[l.required]],fontColor:[i?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[S([]),L,C],decls:11,vars:5,consts:()=>{let e;e="Name";let t;t="Text";let i;i="Font Size";let s;return s="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",e],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","text","label",t],["formControlName","fontSize","label",i],["formControlName","fontColor","label",s],[3,"actions"]];},template:function(t,i){t&1&&(a(0,"sz-ui-dialog-header",0),_(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),_(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),f(),a(7,"sz-ui-form-field-input-text",6)(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-text",8),f()(),a(10,"sz-ui-dialog-actions",9)),t&2&&(m("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),d(2),m("formGroup",i.form),d(8),m("actions",i.actions));},dependencies:[A,y,I,O,x,F,h,R,z,H,X,k,U,w,$,G],encapsulation:2});let n=o;return n;})();var et=["designer"];function tt(n,o){if(n&1&&a(0,"div"),n&2){let r=p();D(r.getMarginsStyle());}}function it(n,o){if(n&1){let r=Q();K(0),_(1,"p",11),Y("cdkDragEnded",function(t){g(r);let i=M(0),s=p(2);return T(s.drop(t,i));})("dblclick",function(){g(r);let t=M(0),i=p(2);return T(i.openSaveTextFieldComponent(t));}),_e(2),f();}if(n&2){let r=p().$implicit,e=p(),t=J(e.getTextField(r));d(),D(e.getFieldStyle(t)),m("id",e.getFieldId(t)),d(),pe(t.text);}}function ot(n,o){if(n&1){let r=Q();K(0),_(1,"img",12),ue(2,"secure"),ue(3,"async"),Y("cdkDragEnded",function(t){g(r);let i=M(0),s=p(2);return T(s.drop(t,i));})("dblclick",function(){g(r);let t=M(0),i=p(2);return T(i.openSaveImageFieldComponent(t));}),f();}if(n&2){let r=p().$implicit,e=p(),t=J(e.getImageField(r));d(),D(e.getFieldStyle(t)),m("alt",t.name)("id",e.getFieldId(t))("src",fe(3,8,fe(2,6,t.url)),Ie);}}function nt(n,o){if(n&1){let r=Q();K(0),ne(),_(1,"svg",13),Y("cdkDragEnded",function(t){g(r);let i=M(0),s=p(2);return T(s.drop(t,i));})("dblclick",function(){g(r);let t=M(0),i=p(2);return T(i.openSaveBarcodeFieldComponent(t));}),a(2,"path"),f();}if(n&2){let r=p().$implicit,e=p(),t=J(e.getBarcodeField(r));d(),D(e.getFieldStyle(t)),m("id",e.getFieldId(t)),ee("width",t.width)("height",t.height),d(),ee("d",e.getBarcodeFieldPath(t));}}function rt(n,o){if(n&1&&(_(0,"td"),_e(1),f()),n&2){let r=o.$implicit,e=p(3);d(),pe(e.getTableColumnName(r));}}function lt(n,o){if(n&1){let r=Q();K(0),_(1,"table",14),Y("cdkDragEnded",function(t){g(r);let i=M(0),s=p(2);return T(s.drop(t,i));}),_(2,"tr"),de(3,rt,2,1,"td",null,ae),f()();}if(n&2){let r=p().$implicit,e=p(),t=J(e.getTableField(r));d(),D(e.getFieldStyle(t)),m("id",e.getFieldId(t)),d(2),me(t.columns);}}function st(n,o){if(n&1){let r=Q();K(0),ne(),_(1,"svg",15),Y("cdkDragEnded",function(t){g(r);let i=M(0),s=p(2);return T(s.drop(t,i));})("dblclick",function(){g(r);let t=M(0),i=p(2);return T(i.openSaveLineFieldComponent(t));}),a(2,"path"),f();}if(n&2){let r=p().$implicit,e=p(),t=J(e.getLineField(r));d(),D(e.getFieldStyle(t)),m("id",e.getFieldId(t)),d(),ee("d",e.getLineFieldPath(t))("stroke",t.lineColor)("stroke-width",t.lineWidth);}}function at(n,o){if(n&1&&le(0,it,3,5,"p",6)(1,ot,4,10,"img",7)(2,nt,3,7,":svg:svg",8)(3,lt,5,4,"table",9)(4,st,3,7,":svg:svg",10),n&2){let r=o.$implicit;se(r.type==="text"?0:r.type==="image"?1:r.type==="barcode"?2:r.type==="table"?3:r.type==="line"?4:-1);}}var Ze=(()=>{let o=class o{constructor(){this.route=u(Pe),this.dialog=u($e),this.srptService=u(ie),this.snackBar=u(we),this.template=this.route.snapshot.data.template,this.alert=Oe(void 0),this.fields=[],this.size={width:210,height:297,unit:"mm"},this.margins={top:14,right:14,bottom:14,left:14},this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:ke.default([V.add().setSubItems([V.text(()=>this.openSaveTextFieldComponent()),V.barcode(()=>this.openSaveBarcodeFieldComponent()),V.image(()=>this.openSaveImageFieldComponent()),V.line(()=>this.openSaveLineFieldComponent())]).setTitle(),V.menu([V.reset(this.reset.bind(this))])])},this.margins=this.template.content?.margins??{top:14,right:14,bottom:14,left:14},this.fields=this.template.content?.fields??[];}drop(e,t){if(!e.distance)return;let i=t.x+j.round2Decimals(c.fromPixel(this.size.unit,e.distance.x)),s=t.y+j.round2Decimals(c.fromPixel(this.size.unit,e.distance.y)),N=j.round2Decimals(c.fromPixel(this.size.unit,e.source.element.nativeElement.offsetWidth)),W=j.round2Decimals(c.fromPixel(this.size.unit,e.source.element.nativeElement.offsetHeight));i<0?i=0:i+N>this.size.width&&(i=this.size.width-N),s<0?s=0:s+W>this.size.height&&(s=this.size.height-W),t.x=i,t.y=s,e.source._dragRef._initialTransform&&(e.source._dragRef._initialTransform=`translate3d(${c.toPixel(this.size.unit,i)}px, ${c.toPixel(this.size.unit,s)}px, 0)`),e.source._dragRef.reset(),this.fieldChanged(t);}getTemplateStyle(){return`width: ${this.size.width}${this.size.unit}; height: ${this.size.height}${this.size.unit}; position: relative;`;}getMarginsStyle(){return`position: absolute; 
    top: ${this.margins.top}${this.size.unit}; 
    right: ${this.margins.right}${this.size.unit}; 
    bottom: ${this.margins.bottom}${this.size.unit}; 
    left: ${this.margins.left}${this.size.unit};
    border: 1px dotted black;
    `;}getFieldStyle(e){let t=`translate3d(${c.toPixel(this.size.unit,e.x)}px, ${c.toPixel(this.size.unit,e.y)}px, 0)`;switch(e.type){case"text":{let i=e;return`position: absolute; transform: ${t}; font-size: ${i.fontSize}px; color: ${i.fontColor}; text-align: ${i.textAlign};`;}case"image":{let i=e;return`position: absolute; transform: ${t}; width: ${i.width}${this.size.unit}; height: ${i.height}${this.size.unit};`;}case"barcode":{let i=e;return`position: absolute; transform: ${t};`;}case"table":{let i=e;return`position: absolute; transform: ${t};width:${i.x2-i.x};`;}case"line":return"position: absolute;";}return"";}getFieldId(e){return this.template.id+"-"+e.name;}getTextField(e){return e;}getImageField(e){return e;}getBarcodeField(e){return e;}getBarcodeFieldPath(e){let t=null;return e.barcodeType==="qr"&&(t=oe.qr(e.value)),e.barcodeType==="datamatrix"&&(t=oe.datamatrix(e.value,!1)),t?ce.toPath(t):"";}getTableField(e){return e;}getTableColumnName(e){return typeof e=="string"?e:typeof e=="number"?e.toString():e.key?.toString()??"";}getLineField(e){return e;}getLineFieldPath(e){return`M${c.toPixel(this.size.unit,e.x)},${c.toPixel(this.size.unit,e.y)} L${c.toPixel(this.size.unit,e.x2)},${c.toPixel(this.size.unit,e.y2)}`;}openSaveTextFieldComponent(e){this.dialog.open(Je,{data:e}).afterClosed().subscribe(t=>{t&&this.fieldChanged(t);});}openSaveBarcodeFieldComponent(e){this.dialog.open(Qe,{data:e}).afterClosed().subscribe(t=>{t&&this.fieldChanged(t);});}openSaveImageFieldComponent(e){this.dialog.open(Ye,{data:e}).afterClosed().subscribe(t=>{t&&this.fieldChanged(t);});}openSaveLineFieldComponent(e){this.dialog.open(Ke,{data:e}).afterClosed().subscribe(t=>{t&&this.fieldChanged(t);});}fieldChanged(e){let t=this.fields.findIndex(i=>i.id===e.id);t!==-1?this.fields[t]=e:this.fields.push(e),console.log(this.fields),this.save();}fieldDeleted(e){this.fields=this.fields.filter(t=>t.name!==e.name);}reset(){this.dialog.open(Ue,{data:{message:te.reset_template}}).afterClosed().subscribe(e=>{e&&(this.fields=this.template.baseTemplate.content?.fields??[],this.save());});}save(){this.srptService.templates.update(this.template.id,Ne(he({},this.template),{content:{fields:this.fields,margins:this.margins}})).subscribe(()=>{this.snackBar.open(te.saved,te.close,{duration:5e3});});}};o.ɵfac=function(t){return new(t||o)();},o.ɵcmp=E({type:o,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(t,i){if(t&1&&ye(et,5),t&2){let s;xe(s=Fe())&&(i.designerEl=s.first);}},standalone:!0,features:[S([ie]),C],decls:8,vars:5,consts:[["designer",""],[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"style"],["cdkDrag","","cdkDragBoundary",".designer",3,"id","style"],["cdkDrag","","cdkDragBoundary",".designer",1,"field",3,"alt","id","style","src"],["viewbox","0 0 25 25","xmlns","http://www.w3.org/2000/svg","version","1.1","cdkDrag","","cdkDragBoundary",".designer",3,"id","style"],["cdkDrag","","cdkDragBoundary",".designer",1,"field",3,"id","style"],["xmlns","http://www.w3.org/2000/svg","version","1.1","cdkDrag","","cdkDragBoundary",".designer",3,"id","style"],["cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragEnded","dblclick","id"],["cdkDrag","","cdkDragBoundary",".designer",1,"field",3,"cdkDragEnded","dblclick","alt","id","src"],["viewbox","0 0 25 25","xmlns","http://www.w3.org/2000/svg","version","1.1","cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragEnded","dblclick","id"],["cdkDrag","","cdkDragBoundary",".designer",1,"field",3,"cdkDragEnded","id"],["xmlns","http://www.w3.org/2000/svg","version","1.1","cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragEnded","dblclick","id"]],template:function(t,i){t&1&&(a(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),_(2,"div",3)(3,"div",4,0),le(5,tt,1,2,"div",5),de(6,at,5,1,null,null,ae),f()()),t&2&&(m("config",i.appBarConfig),d(),m("alert",i.alert()),d(2),D(i.getTemplateStyle()),d(2),se(i.margins?5:-1),d(),me(i.fields));},dependencies:[h,Re,Ge,He,qe,We,Xe,ze,Ve,je,be],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;background-color:#fff;position:relative}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left}"]});let n=o;return n;})();var Wi=[{path:"",component:Ze}];export{Wi as default};/**i18n:121ea4fe581ee572de720507d72ab5d9f5a3145d9d01251bf118b1165d3425b9*/