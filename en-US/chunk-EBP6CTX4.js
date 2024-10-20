import{c as U}from"./chunk-Q7YH47I6.js";import{a as X}from"./chunk-XIIU5ZDY.js";import{a as Q}from"./chunk-RGWDJFGT.js";import{a as _e,b as de,c as pe,d as fe,e as ue}from"./chunk-BMZVBNVW.js";import{a as et,b as tt,j as it}from"./chunk-22GQYEB3.js";import"./chunk-5VZZPEGO.js";import"./chunk-IGLEBZT3.js";import"./chunk-JRFIT3LK.js";import{d as Ze,e as he}from"./chunk-AE35RO5P.js";import{b as je,g as $,h as v,i as x,j as Qe,k as Je,l as V}from"./chunk-4KJ3AQPK.js";import"./chunk-5GPQIRWX.js";import{b as Be}from"./chunk-XFWC4CRD.js";import{a as P,b,d as Ve,e as F,g}from"./chunk-VESRGD54.js";import{c as w,m as z,p as ke,s as y}from"./chunk-KSISCGXT.js";import"./chunk-OOD7MJKP.js";import{b as Ue}from"./chunk-BORDRTEH.js";import"./chunk-SLE63VFY.js";import{j as G}from"./chunk-RPCDVD44.js";import{d as l,f as h,g as O,l as I,o as L,p as ne,r as D,s as A,u as R}from"./chunk-HGFESUBN.js";import{b as B,c as Ye}from"./chunk-M72G23GX.js";import{a as Ke}from"./chunk-V6G5W2UK.js";import{a as qe,b as He,c as We,d as se,e as me}from"./chunk-MQOAVA6A.js";import{c as le}from"./chunk-NGCAM3BH.js";import{a as we,b as Xe}from"./chunk-6QVP6LLX.js";import{p as $e}from"./chunk-A2A23KRQ.js";import"./chunk-HDHTO2OK.js";import"./chunk-E4NRPEDI.js";import{Ia as xe,Ja as re,Ma as ae,ja as ve,r as ye}from"./chunk-L4LDMAQX.js";import{Bb as ie,Eb as Pe,Gb as be,Hb as Fe,Ib as Ge,Jb as s,K as Le,Kb as p,Lb as a,Pb as Se,Vb as q,Wb as oe,Yb as k,ac as ce,bb as f,bc as ge,cc as Ce,fc as ze,gc as Ne,ib as De,ja as m,kb as Ae,mb as N,mc as S,na as T,nc as c,rb as Te,wa as j,xa as Y,yb as _,zb as Re}from"./chunk-3ZNYUPIG.js";import{a as Oe,b as Ie}from"./chunk-CTC3DLAD.js";var H=class{static round2Decimals(n){return Math.round(n*100)/100;}};var E=class{static toPixel(n,u){return n==="mm"?u*3.78:n==="cm"?u*37.8:n==="in"?u*96:u;}static fromPixel(n,u){return n==="mm"?u/3.78:n==="cm"?u/37.8:n==="in"?u/96:u;}};var ot=(()=>{let n=class n{constructor(){this.httpClient=m(ye),this.viewContainerRef=m(De),this.element=null;}ngAfterViewInit(){this.render();}render(){this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.position="absolute",o.style.left=`${e.x}`,o.style.top=`${e.y}`,o.style.fontSize=`${e.fontSize}`,o.style.color=e.fontColor??"black",o.style.textAlign=e.textAlign??"left",i.appendChild(o);}addBarcodeField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=he.qr(e.value)),e.barcodeType==="datamatrix"&&(o=he.datamatrix(e.value,!1)),!o)return;let d=Ze.toSVG(o,e.options);d&&i.appendChild(d);}addTableField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("table");o.style.width="100%",o.style.borderCollapse="collapse",o.style.border="1px solid black";let d=document.createElement("thead"),M=document.createElement("tr");e.columns.forEach(C=>{let Me=document.createElement("th");Me.innerText=typeof C=="string"?C:typeof C=="number"?C.toString():C.key?.toString()??"",Me.style.width="auto",M.appendChild(Me);}),d.appendChild(M),o.appendChild(d),i.appendChild(o);}addLineField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox",`0 0 ${E.toPixel(this.size.unit,210)} ${E.toPixel(this.size.unit,297)}`),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("style","position: absolute;");let d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d",`M${E.toPixel(this.size.unit,e.x)},${E.toPixel(this.size.unit,e.y)} L${E.toPixel(this.size.unit,e.x2)},${E.toPixel(this.size.unit,e.y2)}`),d.setAttribute("stroke",e.lineColor??"black"),d.setAttribute("stroke-width",`${E.toPixel(this.size.unit,e.lineWidth)??1}`),d.setAttribute("cdkDrag",""),o.appendChild(d),i.appendChild(o);}addImageField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(Le(1)).subscribe(d=>{let M=new FileReader();M.onloadend=()=>{o.src=M.result;},M.readAsDataURL(d);}),o.style.width="100%",o.style.height="100%",i.appendChild(o);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-field"]],inputs:{field:"field",size:"size"},standalone:!0,features:[S([Q]),c],decls:0,vars:0,template:function(e,i){},dependencies:[g,ae,me,re],encapsulation:2});let r=n;return r;})();var nt=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b),this.barcodeTypes=["qr","datamatrix"];let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["barcode",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],value:[e?.value??"",[l.required]],barcodeType:[e?.barcodeType??"qr",[l.required]],options:t.group({dimension:[e?.options?.dimension??256,[l.required]],padding:[e?.options?.padding??2,[l.required]],background:[e?.options?.background??"#ffffff",[l.required]]})});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[S([]),N,c],decls:20,vars:6,consts:()=>{let t;t="Name";let e;e="Type";let i;i="value";let o;o="Dimension";let d;d="Padding";let M;return M="Settings",[M,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","barcodeType","label",e,3,"source"],["formControlName","value","label",i],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formGroupName","options",1,"tw-mb-4"],["multi",""],["formControlName","dimension","label",o],["formControlName","padding","label",d],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2),a(3,"sz-ui-form-field-input-text",3),s(4,"div",4),a(5,"sz-ui-form-field-select",5)(6,"sz-ui-form-field-input-text",6),p(),s(7,"div",4),a(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-number",8),p(),s(10,"div",9)(11,"mat-accordion",10)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),q(15,0),p()(),s(16,"div",4),a(17,"sz-ui-form-field-input-number",11)(18,"sz-ui-form-field-input-number",12),p()()()()()(),a(19,"sz-ui-dialog-actions",13)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(3),_("source",i.barcodeTypes),f(14),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,ne,g,F,ue,fe,_e,de,pe,G,V,v,x,y,w,z,ke],encapsulation:2});let r=n;return r;})();var rt=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7()],name:[e?.name,[]],type:["image",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],url:[e?.url??"",[l.required]],width:[e?.width??16,[l.required]],height:[e?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[S([]),N,c],decls:11,vars:5,consts:()=>{let t;t="Name";let e;e="Width";let i;return i="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","width","label",e],["formControlName","height","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),s(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),p()()(),a(10,"sz-ui-dialog-actions",8)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,g,F,G,U,V,v,x,y,w,z],encapsulation:2});let r=n;return r;})();var at=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["line",[l.required]],x:[e?.x??5,[l.required]],y:[e?.y??5,[l.required]],lineColor:[e?.lineColor??"#000",[l.required]],lineWidth:[e?.lineWidth??1,[l.required]],x2:[e?.x2??30,[l.required]],y2:[e?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[S([]),N,c],decls:13,vars:5,consts:()=>{let t;t="Name";let e;e="Color";let i;return i="Width",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","x2","label","X2"],["formControlName","y2","label","Y2"],["formControlName","lineColor","label",e],["formControlName","lineWidth","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),s(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),p(),a(10,"sz-ui-form-field-input-text",8)(11,"sz-ui-form-field-input-number",9),p()(),a(12,"sz-ui-dialog-actions",10)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(10),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,g,F,G,U,V,v,x,y,w,z],encapsulation:2});let r=n;return r;})();var lt=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["table",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-table-field"]],standalone:!0,features:[S([]),N,c],decls:8,vars:5,consts:()=>{let t;return t="Name",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p()()(),a(7,"sz-ui-dialog-actions",6)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(5),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,g,F,G,U,V,v,x,y,w,z],encapsulation:2});let r=n;return r;})();var st=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??X.generateV7(),[l.required]],name:[e?.name,[]],type:["text",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],text:[e?.text??"",[l.required]],fontSize:[e?.fontSize??12,[l.required]],fontColor:[e?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[S([]),N,c],decls:11,vars:5,consts:()=>{let t;t="Name";let e;e="Text";let i;i="Font Size";let o;return o="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","text","label",e],["formControlName","fontSize","label",i],["formControlName","fontColor","label",o],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),p(),a(7,"sz-ui-form-field-input-text",6)(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-text",8),p()(),a(10,"sz-ui-dialog-actions",9)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,g,F,G,U,V,v,x,y,w,z],encapsulation:2});let r=n;return r;})();var mt=(()=>{let n=class n extends ${constructor(){super(m(P)),this.fb=m(A),this.data=m(b);let t=this.fb,e=this.data;this.form=t.group({margins:this.fb.group({top:[e?.margins?.top,[]],right:[e?.margins?.right,[]],bottom:[e?.margins?.bottom,[]],left:[e?.margins?.left,[]]}),fields:[e?.fields??[],[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template-settings"]],standalone:!0,features:[S([]),N,c],decls:16,vars:5,consts:()=>{let t;t="Left";let e;e="Top";let i;i="Right";let o;o="Bottom";let d;return d="Margins",[d,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formGroupName","margins",1,"tw-mb-4"],["multi",""],[1,"sz-form-row"],["formControlName","left","label",t],["formControlName","top","label",e],["formControlName","right","label",i],["formControlName","bottom","label",o],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2)(3,"div",3)(4,"mat-accordion",4)(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),q(8,0),p()(),s(9,"div",5),a(10,"sz-ui-form-field-input-number",6)(11,"sz-ui-form-field-input-number",7),p(),s(12,"div",5),a(13,"sz-ui-form-field-input-number",8)(14,"sz-ui-form-field-input-number",9),p()()()()()(),a(15,"sz-ui-dialog-actions",10)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(13),_("actions",i.actions));},dependencies:[R,I,h,O,L,D,ne,g,F,G,U,ue,fe,_e,de,pe,V,v,x,y,z],encapsulation:2});let r=n;return r;})();var pt=["designer"];function ft(r,n){if(r&1&&a(0,"div"),r&2){let u=k();ie(u.getMarginsStyle());}}function ut(r,n){if(r&1){let u=Se();s(0,"sz-mgmt-reporting-template-field",12),oe("cdkDragEnded",function(e){let i=j(u).$implicit,o=k();return Y(o.drop(e,i));})("dblclick",function(){let e=j(u).$implicit,i=k();return Y(i.openFieldSettingsComponent(e));})("contextmenu",function(e){let i=j(u).$implicit,o=k();return Y(o.fieldRightClick(e,i));}),p();}if(r&2){let u=n.$implicit,t=k();ie(t.getFieldStyle(u)),_("field",u)("size",t.size);}}function Et(r,n){if(r&1){let u=Se();s(0,"button",13),oe("click",function(){let e=j(u).field,i=k();return Y(i.openFieldSettingsComponent(e));}),s(1,"mat-icon"),Ne(2,"edit"),p(),s(3,"span"),q(4,2),p()(),a(5,"mat-divider"),s(6,"button",13),oe("click",function(){let e=j(u).field,i=k();return Y(i.openFieldDeleteComponent(e));}),s(7,"mat-icon"),Ne(8,"delete"),p(),s(9,"span"),q(10,3),p()();}}var _t=(()=>{let n=class n{constructor(){this.route=m($e),this.dialog=m(Ve),this.srptService=m(Q),this.snackBar=m(Be),this.template=this.route.snapshot.data.template,this.alert=Ae(void 0),this.size={width:210,height:297,unit:"mm"},this.contextMenuPosition={x:"0px",y:"0px"},this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:Ye.default([B.add().setSubItems([B.text(()=>this.openSaveTextFieldComponent()),B.barcode(()=>this.openSaveBarcodeFieldComponent()),B.image(()=>this.openSaveImageFieldComponent()),B.line(()=>this.openSaveLineFieldComponent()),B.table(()=>this.openSaveTableFieldComponent())]).setTitle(),B.menu([B.settings(this.openSettingsComponent.bind(this)),B.divider(),B.reset(this.openResetComponent.bind(this))])])},this.templateDef=this.template.content??{fields:[],margins:{top:0,right:0,bottom:0,left:0}};}openSettingsComponent(){this.dialog.open(mt,{data:this.templateDef}).afterClosed().subscribe(t=>{t&&(this.templateDef=t,this.save());});}openResetComponent(){this.dialog.open(Qe,{data:{message:le.reset_template}}).afterClosed().subscribe(t=>{t&&(this.templateDef=this.template.baseTemplate.content??{fields:[],margins:{top:0,right:0,bottom:0,left:0}},this.save());});}drop(t,e){if(!t.distance)return;let i=e.x+H.round2Decimals(E.fromPixel(this.size.unit,t.distance.x)),o=e.y+H.round2Decimals(E.fromPixel(this.size.unit,t.distance.y)),d=H.round2Decimals(E.fromPixel(this.size.unit,t.source.element.nativeElement.offsetWidth)),M=H.round2Decimals(E.fromPixel(this.size.unit,t.source.element.nativeElement.offsetHeight));i<0?i=0:i+d>this.size.width&&(i=this.size.width-d),o<0?o=0:o+M>this.size.height&&(o=this.size.height-M),e.x=i,e.y=o,t.source._dragRef._initialTransform&&(t.source._dragRef._initialTransform=`translate3d(${E.toPixel(this.size.unit,i)}px, ${E.toPixel(this.size.unit,o)}px, 0)`),t.source._dragRef.reset(),this.fieldChanged(e);}getTemplateStyle(){return`width: ${this.size.width}${this.size.unit}; height: ${this.size.height}${this.size.unit}; position: relative;`;}getMarginsStyle(){let t=`position: absolute; 
    top: ${this.templateDef.margins.top??0}${this.size.unit}; 
    right: ${this.templateDef.margins.right??0}${this.size.unit}; 
    bottom: ${this.templateDef.margins.bottom??0}${this.size.unit}; 
    left: ${this.templateDef.margins.left??0}${this.size.unit};
    `;return this.templateDef.margins.top&&(t+="border-top: 1px dotted black;"),this.templateDef.margins.right&&(t+="border-right: 1px dotted black;"),this.templateDef.margins.bottom&&(t+="border-bottom: 1px dotted black;"),this.templateDef.margins.left&&(t+="border-left: 1px dotted black;"),t;}getFieldStyle(t){let e=`translate3d(${E.toPixel(this.size.unit,t.x)}px, ${E.toPixel(this.size.unit,t.y)}px, 0)`;switch(t.type){case"text":{let i=t;return`position: absolute; transform: ${e}; font-size: ${i.fontSize}px; color: ${i.fontColor}; text-align: ${i.textAlign};`;}case"image":{let i=t;return`position: absolute; transform: ${e}; width: ${i.width}${this.size.unit}; height: ${i.height}${this.size.unit};`;}case"barcode":{let i=t;return`position: absolute; transform: ${e};`;}case"table":{let i=t,o=`position: absolute; transform: ${e};`;if(!i.tableWidth||i.tableWidth==="auto"){let d=this.templateDef.margins.right??0;o+="width: "+(this.size.width-t.x-d)+this.size.unit+";";}else i.tableWidth==="wrap"?o+="":o+=`width: ${i.tableWidth}${this.size.unit};`;return o;}case"line":return"position: absolute;";}return"";}openFieldSettingsComponent(t){switch(t.type){case"text":this.openSaveTextFieldComponent(t);break;case"barcode":this.openSaveBarcodeFieldComponent(t);break;case"image":this.openSaveImageFieldComponent(t);break;case"line":this.openSaveLineFieldComponent(t);break;case"table":this.openSaveTableFieldComponent(t);break;}}fieldRightClick(t,e){t.preventDefault(),this.contextMenuPosition.x=t.clientX+"px",this.contextMenuPosition.y=t.clientY+"px",this.menuTrigger.menuData={field:e},this.menuTrigger.openMenu();}openFieldDeleteComponent(t){this.dialog.open(Je,{data:{message:je.delete,data:t}}).afterClosed().subscribe(e=>{e&&this.fieldDeleted(t);});}openSaveTextFieldComponent(t){this.dialog.open(st,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveBarcodeFieldComponent(t){this.dialog.open(nt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveImageFieldComponent(t){this.dialog.open(rt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveLineFieldComponent(t){this.dialog.open(at,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveTableFieldComponent(t){this.dialog.open(lt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}fieldChanged(t){let e=this.templateDef.fields.findIndex(i=>i.id===t.id);e!==-1?this.templateDef.fields[e]=t:this.templateDef.fields.push(t),this.save();}fieldDeleted(t){this.templateDef.fields=this.templateDef.fields.filter(e=>e.id!==t.id),this.save();}save(){this.srptService.templates.update(this.template.id,Ie(Oe({},this.template),{content:this.templateDef})).subscribe(()=>{this.snackBar.open(le.saved,le.close,{duration:5e3});});}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=T({type:n,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,i){if(e&1&&(ce(pt,5),ce(se,5)),e&2){let o;ge(o=Ce())&&(i.designerEl=o.first),ge(o=Ce())&&(i.menuTrigger=o.first);}},standalone:!0,features:[S([Q]),c],decls:12,vars:10,consts:()=>{let t;t="Edit";let e;return e="Delete",[["designer",""],["menuTrigger","matMenu"],t,e,[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"style"],["cdkDrag","","cdkDragBoundary",".designer",3,"field","style","size"],[2,"visibility","hidden","position","fixed",3,"matMenuTriggerFor"],["matMenuContent",""],["cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragEnded","dblclick","contextmenu","field","size"],["mat-menu-item","",3,"click"]];},template:function(e,i){if(e&1&&(a(0,"sz-ui-app-bar",4)(1,"sz-ui-alert",5),s(2,"div",6)(3,"div",7,0),Te(5,ft,1,2,"div",8),Fe(6,ut,1,4,"sz-mgmt-reporting-template-field",9,be),a(8,"div",10),s(9,"mat-menu",null,1),Te(11,Et,11,0,"ng-template",11),p()()()),e&2){let o=ze(10);_("config",i.appBarConfig),f(),_("alert",i.alert()),f(2),ie(i.getTemplateStyle()),f(2),Pe(i.templateDef.margins?5:-1),f(),Ge(i.templateDef.fields),f(2),Re("left",i.contextMenuPosition.x)("top",i.contextMenuPosition.y),_("matMenuTriggerFor",o);}},dependencies:[g,ve,ae,Xe,we,tt,et,it,Ke,re,xe,me,We,qe,He,se,ot,Ue],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;background-color:#fff;position:relative}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left}"]});let r=n;return r;})();var Go=[{path:"",component:_t}];export{Go as default};/**i18n:883855adb3733727a42e8a26dd864e04f11dfd516c87b10e07ff3899a99df55f*/