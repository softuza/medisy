import{c as U}from"./chunk-VUHQ2KMU.js";import{a as X}from"./chunk-LLDZUIBB.js";import{a as J}from"./chunk-C2XWY4LS.js";import{a as fe,b as Ee,c as ue,d as Te,e as Se}from"./chunk-QVZKS5PU.js";import{a as tt,b as it,j as ot}from"./chunk-L3RHH5Q3.js";import"./chunk-PDW5O57H.js";import"./chunk-SN2OT7OA.js";import"./chunk-XHZJZ7N2.js";import{d as et,e as he}from"./chunk-DJ3C3PN3.js";import{b as Ye,g as z,h as $,i as v,j as Ke,k as Je,l as x}from"./chunk-FLWM7VVQ.js";import"./chunk-YXG4B7HG.js";import{b as Xe}from"./chunk-BKGS2M57.js";import{a as A,b as P,d as we,e as G,g as c}from"./chunk-PNLRHRSG.js";import{c as w,m as F,p as _e,s as y}from"./chunk-JFP2UMOP.js";import"./chunk-7GNYJSKB.js";import{b as qe}from"./chunk-2K7QRCXP.js";import"./chunk-AGOAJQUS.js";import{j as b}from"./chunk-TAG6FTMZ.js";import{d as l,f as N,g as O,l as I,o as h,p as ae,r as L,s as D,u as R}from"./chunk-CZX63RVI.js";import{b as V,c as Qe}from"./chunk-OPT5MMKZ.js";import{a as Ze}from"./chunk-6P2IBPOY.js";import{a as He,b as We,c as je,d as de,e as pe}from"./chunk-7ZKDQCVN.js";import{c as me}from"./chunk-VKAYCZZV.js";import{a as Ue,b as ke}from"./chunk-DDTWQCA2.js";import{p as xe}from"./chunk-ITTHPFGG.js";import"./chunk-NU53ZTHD.js";import"./chunk-ZIDNO72R.js";import{Ia as Be,Ja as le,Ma as se,ja as Ve,r as ve}from"./chunk-SINEIFLM.js";import{Bb as ne,Eb as be,Gb as Fe,Hb as ye,Ib as ze,Jb as m,K as Re,Kb as p,Lb as a,Pb as ge,Vb as W,Wb as re,Yb as q,ac as Ce,bb as f,bc as Ne,cc as Oe,fc as $e,gc as Ie,ib as Ae,ja as d,kb as Pe,mb as C,mc as S,na as T,nc as M,rb as ce,wa as j,xa as Y,yb as _,zb as Ge}from"./chunk-XB2GHV36.js";import{a as Le,b as De}from"./chunk-HZXM77A4.js";var Q=class{static round2Decimals(n){return Math.round(n*100)/100;}};var B=class{static toPixel(n,E){return n==="mm"?E*3.78:n==="cm"?E*37.8:n==="in"?E*96:E;}static fromPixel(n,E){return n==="mm"?E/3.78:n==="cm"?E/37.8:n==="in"?E/96:E;}};var nt=(()=>{let n=class n{constructor(){this.httpClient=d(ve),this.viewContainerRef=d(Ae),this.element=null;}ngAfterViewInit(){this.render();}render(){this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.fontSize=`${e.fontSize}`,o.style.color=e.fontColor??"black",o.style.textAlign=e.textAlign??"left",i.appendChild(o);}addBarcodeField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=he.qr(e.value)),e.barcodeType==="datamatrix"&&(o=he.datamatrix(e.value,!1)),!o)return;let r=et.toSVG(o,e.options);r&&i.appendChild(r);}addTableField(t){let e=t;if(!e)return;console.log(e);let i=this.getContainerElement(),o=document.createElement("table");o.style.width="100%",o.style.borderCollapse="collapse",o.style.border="1px solid black";let r=document.createElement("thead"),u=document.createElement("tr");e.columns.forEach(g=>{let k=document.createElement("th");k.innerText=this.getCellInputValue(g),k.style.width="auto",u.appendChild(k);}),r.appendChild(u),o.appendChild(r),i.appendChild(o);}getCellInputValue(t){return typeof t=="string"?t:typeof t=="number"?t.toString():t.header?this.getCellValue(t.header):"";}getCellValue(t){return t?typeof t=="string"?t:typeof t=="number"||typeof t=="boolean"?t.toString():Array.isArray(t)?t.join(", "):t.title??"":"";}addLineField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 210 297"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("style","position: absolute;");let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d",`M${e.x},${e.y} L${e.x2},${e.y2}`),r.setAttribute("stroke",e.lineColor??"black"),r.setAttribute("stroke-width",`${e.lineWidth??1}`),r.setAttribute("cdkDrag",""),o.appendChild(r),i.appendChild(o);}addImageField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(Re(1)).subscribe(r=>{let u=new FileReader();u.onloadend=()=>{o.src=u.result;},u.readAsDataURL(r);}),o.style.width="100%",o.style.height="100%",i.appendChild(o);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-field"]],inputs:{field:"field"},standalone:!0,features:[S([J]),M],decls:0,vars:0,template:function(e,i){},dependencies:[c,se,pe,le],encapsulation:2});let s=n;return s;})();var rt=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P),this.barcodeTypes=["qr","datamatrix"];let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["barcode",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],value:[e?.value??"",[l.required]],barcodeType:[e?.barcodeType??"qr",[l.required]],options:t.group({dimension:[e?.options?.dimension??256,[l.required]],padding:[e?.options?.padding??2,[l.required]],background:[e?.options?.background??"#ffffff",[l.required]]})});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[S([]),C,M],decls:20,vars:6,consts:()=>{let t;t="Name";let e;e="Type";let i;i="value";let o;o="Dimension";let r;r="Padding";let u;return u="Settings",[u,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","barcodeType","label",e,3,"source"],["formControlName","value","label",i],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formGroupName","options",1,"tw-mb-4"],["multi",""],["formControlName","dimension","label",o],["formControlName","padding","label",r],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",1),m(1,"mat-dialog-content")(2,"form",2),a(3,"sz-ui-form-field-input-text",3),m(4,"div",4),a(5,"sz-ui-form-field-select",5)(6,"sz-ui-form-field-input-text",6),p(),m(7,"div",4),a(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-number",8),p(),m(10,"div",9)(11,"mat-accordion",10)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),W(15,0),p()(),m(16,"div",4),a(17,"sz-ui-form-field-input-number",11)(18,"sz-ui-form-field-input-number",12),p()()()()()(),a(19,"sz-ui-dialog-actions",13)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(3),_("source",i.barcodeTypes),f(14),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,ae,c,G,Se,Te,fe,Ee,ue,b,x,$,v,y,w,F,_e],encapsulation:2});let s=n;return s;})();var at=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7()],name:[e?.name,[]],type:["image",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],url:[e?.url??"",[l.required]],width:[e?.width??16,[l.required]],height:[e?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[S([]),C,M],decls:11,vars:5,consts:()=>{let t;t="Name";let e;e="Width";let i;return i="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","width","label",e],["formControlName","height","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),m(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),m(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),p()()(),a(10,"sz-ui-dialog-actions",8)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,c,G,b,U,x,$,v,y,w,F],encapsulation:2});let s=n;return s;})();var lt=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["line",[l.required]],x:[e?.x??5,[l.required]],y:[e?.y??5,[l.required]],lineColor:[e?.lineColor??"#000",[l.required]],lineWidth:[e?.lineWidth??1,[l.required]],x2:[e?.x2??30,[l.required]],y2:[e?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[S([]),C,M],decls:13,vars:5,consts:()=>{let t;t="Name";let e;e="Color";let i;return i="Width",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","x2","label","X2"],["formControlName","y2","label","Y2"],["formControlName","lineColor","label",e],["formControlName","lineWidth","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),m(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),m(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),p(),a(10,"sz-ui-form-field-input-text",8)(11,"sz-ui-form-field-input-number",9),p()(),a(12,"sz-ui-dialog-actions",10)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(10),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,c,G,b,U,x,$,v,y,w,F],encapsulation:2});let s=n;return s;})();var st=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["table",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],columns:[e?.columns??[],[l.required]],headerStyles:[e?.headerStyles??{},[]],columnStyles:[e?.columnStyles??{},[]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-table-field"]],standalone:!0,features:[S([]),C,M],decls:8,vars:5,consts:()=>{let t;return t="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),m(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p()()(),a(7,"sz-ui-dialog-actions",6)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(5),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,c,G,b,U,x,$,v,y,w,F],encapsulation:2});let s=n;return s;})();var mt=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["text",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],text:[e?.text??"",[l.required]],fontSize:[e?.fontSize??12,[l.required]],fontColor:[e?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[S([]),C,M],decls:11,vars:5,consts:()=>{let t;t="Name";let e;e="Text";let i;i="Font Size";let o;return o="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","text","label",e],["formControlName","fontSize","label",i],["formControlName","fontColor","label",o],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),m(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),m(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),a(7,"sz-ui-form-field-input-text",6)(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-text",8),p()(),a(10,"sz-ui-dialog-actions",9)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,c,G,b,U,x,$,v,y,w,F],encapsulation:2});let s=n;return s;})();var _t=(()=>{let n=class n extends z{constructor(){super(d(A)),this.fb=d(D),this.data=d(P),this.units=["mm"],this.orientations=["portrait","landscape"];let t=this.fb,e=this.data;this.form=t.group({options:t.group({orientation:[e?.options?.orientation,[]],unit:[e?.options?.unit??"mm",[]],format:[e?.options?.format,[]]}),margins:this.fb.group({top:[e?.margins?.top,[]],right:[e?.margins?.right,[]],bottom:[e?.margins?.bottom,[]],left:[e?.margins?.left,[]]}),fields:[e?.fields??[],[l.required]],fonts:[e?.fonts??[],[]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-settings"]],standalone:!0,features:[S([]),C,M],decls:23,vars:8,consts:()=>{let t;t="Orientation";let e;e="Unit";let i;i="Left";let o;o="Top";let r;r="Right";let u;u="Bottom";let g;g="Basic";let k;return k="Margins",[g,k,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],[1,"tw-mb-4"],["multi",""],["formGroupName","options",3,"expanded"],[1,"sz-form-row"],["formControlName","orientation","label",t,3,"source"],["formControlName","unit","label",e,3,"source"],["formGroupName","margins"],["formControlName","left","label",i],["formControlName","top","label",o],["formControlName","right","label",r],["formControlName","bottom","label",u],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",2),m(1,"mat-dialog-content")(2,"form",3)(3,"div",4)(4,"mat-accordion",5)(5,"mat-expansion-panel",6)(6,"mat-expansion-panel-header")(7,"mat-panel-title"),W(8,0),p()(),m(9,"div",7),a(10,"sz-ui-form-field-select",8)(11,"sz-ui-form-field-select",9),p()(),m(12,"mat-expansion-panel",10)(13,"mat-expansion-panel-header")(14,"mat-panel-title"),W(15,1),p()(),m(16,"div",7),a(17,"sz-ui-form-field-input-number",11)(18,"sz-ui-form-field-input-number",12),p(),m(19,"div",7),a(20,"sz-ui-form-field-input-number",13)(21,"sz-ui-form-field-input-number",14),p()()()()()(),a(22,"sz-ui-dialog-actions",15)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(3),_("expanded",!0),f(5),_("source",i.orientations),f(),_("source",i.units),f(11),_("actions",i.actions));},dependencies:[R,I,N,O,h,L,ae,c,G,b,U,Se,Te,fe,Ee,ue,x,$,v,y,F,_e],encapsulation:2});let s=n;return s;})();var Et=["designer"];function ut(s,n){if(s&1&&a(0,"div"),s&2){let E=q();ne(E.getMarginsStyle());}}function Tt(s,n){if(s&1){let E=ge();m(0,"sz-mgmt-reporting-template-field",12),re("cdkDragStarted",function(e){let i=j(E).$implicit,o=q();return Y(o.dragStarted(e,i));})("cdkDragEnded",function(e){let i=j(E).$implicit,o=q();return Y(o.dragEnded(e,i));})("dblclick",function(){let e=j(E).$implicit,i=q();return Y(i.openFieldSettingsComponent(e));})("contextmenu",function(e){let i=j(E).$implicit,o=q();return Y(o.fieldRightClick(e,i));}),p();}if(s&2){let E=n.$implicit,t=q();ne(t.getFieldStyle(E)),_("field",E);}}function St(s,n){if(s&1){let E=ge();m(0,"button",13),re("click",function(){let e=j(E).field,i=q();return Y(i.openFieldSettingsComponent(e));}),m(1,"mat-icon"),Ie(2,"edit"),p(),m(3,"span"),W(4,2),p()(),a(5,"mat-divider"),m(6,"button",13),re("click",function(){let e=j(E).field,i=q();return Y(i.openFieldDeleteComponent(e));}),m(7,"mat-icon"),Ie(8,"delete"),p(),m(9,"span"),W(10,3),p()();}}var dt=(()=>{let n=class n{constructor(){this.route=d(xe),this.dialog=d(we),this.srptService=d(J),this.snackBar=d(Xe),this.template=this.route.snapshot.data.template,this.alert=Pe(void 0),this.contextMenuPosition={x:"0px",y:"0px"},this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:Qe.default([V.add().setSubItems([V.text(()=>this.openSaveTextFieldComponent()),V.barcode(()=>this.openSaveBarcodeFieldComponent()),V.image(()=>this.openSaveImageFieldComponent()),V.line(()=>this.openSaveLineFieldComponent()),V.table(()=>this.openSaveTableFieldComponent())]).setTitle(),V.menu([V.settings(this.openSettingsComponent.bind(this)),V.divider(),V.reset(this.openResetComponent.bind(this))])])};try{this.templateDef=this.template.content??this.getDefault();}catch(t){console.error(t),this.templateDef=this.getDefault();}}getDefault(){return{options:{orientation:"portrait",unit:"mm",format:"a4"},fields:[],margins:{top:0,right:0,bottom:0,left:0}};}openSettingsComponent(){this.dialog.open(_t,{data:this.templateDef}).afterClosed().subscribe(t=>{t&&(this.templateDef=t,this.save());});}openResetComponent(){this.dialog.open(Ke,{data:{message:me.reset_template}}).afterClosed().subscribe(t=>{t&&(this.templateDef=this.template.baseTemplate.content??this.getDefault(),this.save());});}dragStarted(t,e){let i=t.source.element.nativeElement;i.style.border="1px solid #77aaff";}dragEnded(t,e){let i=t.source.element.nativeElement;if(i.style.border="",!t.distance)return;let o=this.getTemplateSize(),r=e.x+Q.round2Decimals(B.fromPixel(o.unit,t.distance.x)),u=e.y+Q.round2Decimals(B.fromPixel(o.unit,t.distance.y)),g=Q.round2Decimals(B.fromPixel(o.unit,t.source.element.nativeElement.offsetWidth)),k=Q.round2Decimals(B.fromPixel(o.unit,t.source.element.nativeElement.offsetHeight));r<0?r=0:r+g>o.width&&(r=o.width-g),u<0?u=0:u+k>o.height&&(u=o.height-k),e.x=r,e.y=u,t.source._dragRef._initialTransform&&(t.source._dragRef._initialTransform=`translate3d(${B.toPixel(o.unit,r)}px, ${B.toPixel(o.unit,u)}px, 0)`),t.source._dragRef.reset(),this.fieldChanged(e);}getTemplateSize(){let t=this.templateDef.options.orientation,e=this.templateDef.options.unit,i=this.templateDef.options.format,o=0,r=0;switch(i){case"a4":o=210,r=297;break;case"a5":o=148,r=210;break;}return t==="landscape"?{width:r,height:o,unit:e}:{width:o,height:r,unit:e};}getTemplateStyle(){let t=this.getTemplateSize();return`width: ${t.width}${t.unit}; height: ${t.height}${t.unit}; position: relative;`;}getMarginsStyle(){let t=this.getTemplateSize(),e=`position: absolute; 
    top: ${this.templateDef.margins.top??0}${t.unit}; 
    right: ${this.templateDef.margins.right??0}${t.unit}; 
    bottom: ${this.templateDef.margins.bottom??0}${t.unit}; 
    left: ${this.templateDef.margins.left??0}${t.unit};
    `;return this.templateDef.margins.top&&(e+="border-top: 1px dotted black;"),this.templateDef.margins.right&&(e+="border-right: 1px dotted black;"),this.templateDef.margins.bottom&&(e+="border-bottom: 1px dotted black;"),this.templateDef.margins.left&&(e+="border-left: 1px dotted black;"),e;}getFieldStyle(t){let e=this.getTemplateSize(),i=`translate3d(${B.toPixel(e.unit,t.x)}px, ${B.toPixel(e.unit,t.y)}px, 0)`;switch(t.type){case"text":{let o=t,r=o.fontSize+3;return`position: absolute; transform: ${i}; font-size: ${r}px; color: ${o.fontColor}; text-align: ${o.textAlign};`;}case"image":{let o=t;return`position: absolute; transform: ${i}; width: ${o.width}${e.unit}; height: ${o.height}${e.unit};`;}case"barcode":{let o=t;return`position: absolute; transform: ${i};`;}case"table":{let o=t,r=`position: absolute; transform: ${i};`;if(!o.tableWidth||o.tableWidth==="auto"){let u=this.templateDef.margins.right??0;r+="width: "+(e.width-t.x-u)+e.unit+";";}else o.tableWidth==="wrap"?r+="":r+=`width: ${o.tableWidth}${e.unit};`;return r;}case"line":return"position: absolute;";}return"";}openFieldSettingsComponent(t){switch(t.type){case"text":this.openSaveTextFieldComponent(t);break;case"barcode":this.openSaveBarcodeFieldComponent(t);break;case"image":this.openSaveImageFieldComponent(t);break;case"line":this.openSaveLineFieldComponent(t);break;case"table":this.openSaveTableFieldComponent(t);break;}}fieldRightClick(t,e){t.preventDefault(),this.contextMenuPosition.x=t.clientX+"px",this.contextMenuPosition.y=t.clientY+"px",this.menuTrigger.menuData={field:e},this.menuTrigger.openMenu();}openFieldDeleteComponent(t){this.dialog.open(Je,{data:{message:Ye.delete,data:t}}).afterClosed().subscribe(e=>{e&&this.fieldDeleted(t);});}openSaveTextFieldComponent(t){this.dialog.open(mt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveBarcodeFieldComponent(t){this.dialog.open(rt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveImageFieldComponent(t){this.dialog.open(at,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveLineFieldComponent(t){this.dialog.open(lt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveTableFieldComponent(t){this.dialog.open(st,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}fieldChanged(t){let e=this.templateDef.fields.findIndex(i=>i.id===t.id);e!==-1?this.templateDef.fields[e]=t:this.templateDef.fields.push(t),this.save();}fieldDeleted(t){this.templateDef.fields=this.templateDef.fields.filter(e=>e.id!==t.id),this.save();}save(){this.srptService.templates.update(this.template.id,De(Le({},this.template),{content:this.templateDef})).subscribe(()=>{this.snackBar.open(me.saved,me.close,{duration:5e3});});}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,i){if(e&1&&(Ce(Et,5),Ce(de,5)),e&2){let o;Ne(o=Oe())&&(i.designerEl=o.first),Ne(o=Oe())&&(i.menuTrigger=o.first);}},standalone:!0,features:[S([J]),M],decls:12,vars:10,consts:()=>{let t;t="Edit";let e;return e="Delete",[["designer",""],["menuTrigger","matMenu"],t,e,[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"style"],["cdkDrag","","cdkDragBoundary",".designer",3,"field","style"],[2,"visibility","hidden","position","fixed",3,"matMenuTriggerFor"],["matMenuContent",""],["cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragStarted","cdkDragEnded","dblclick","contextmenu","field"],["mat-menu-item","",3,"click"]];},template:function(e,i){if(e&1&&(a(0,"sz-ui-app-bar",4)(1,"sz-ui-alert",5),m(2,"div",6)(3,"div",7,0),ce(5,ut,1,2,"div",8),ye(6,Tt,1,3,"sz-mgmt-reporting-template-field",9,Fe),a(8,"div",10),m(9,"mat-menu",null,1),ce(11,St,11,0,"ng-template",11),p()()()),e&2){let o=$e(10);_("config",i.appBarConfig),f(),_("alert",i.alert()),f(2),ne(i.getTemplateStyle()),f(2),be(i.templateDef.margins?5:-1),f(),ze(i.templateDef.fields),f(2),Ge("left",i.contextMenuPosition.x)("top",i.contextMenuPosition.y),_("matMenuTriggerFor",o);}},dependencies:[c,Ve,se,ke,Ue,it,tt,ot,Ze,le,Be,pe,je,He,We,de,nt,qe],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;background-color:#fff;position:relative;font-family:NotoKufiArabic}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left}"]});let s=n;return s;})();var Fo=[{path:"",component:dt}];export{Fo as default};/**i18n:9da49e658d4bc32c48e94949789bc160a01b89c71ca2297324fd4d44e678f266*/