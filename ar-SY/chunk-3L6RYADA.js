import{c as X}from"./chunk-H5YYZJPG.js";import{a as U}from"./chunk-BFXTZ5RQ.js";import{a as Q}from"./chunk-4FIBSQ27.js";import{a as _e,b as de,c as pe,d as fe,e as ue}from"./chunk-TRH4UE6P.js";import{a as et,b as tt,j as it}from"./chunk-B3UOXWVV.js";import"./chunk-7GZUJWHU.js";import"./chunk-SEURJQVG.js";import"./chunk-3JZ5AT6W.js";import{d as Ze,e as he}from"./chunk-EMRRBO5Q.js";import{b as Ye,g as y,h as $,i as v,j as Qe,k as Je,l as x}from"./chunk-TZI5M3SM.js";import"./chunk-FLKWSWL6.js";import{b as Be}from"./chunk-WL7OPX6V.js";import{a as R,b as P,d as Ve,e as b,g as c}from"./chunk-7FCBJZC4.js";import{c as w,p as G,s as ke,v as z}from"./chunk-P43JBTCU.js";import{b as Xe}from"./chunk-6WSNY5TY.js";import"./chunk-DQNGO4UE.js";import{j as F}from"./chunk-BVF5TUCM.js";import{d as l,f as N,g as h,l as O,o as I,p as ne,r as L,s as D,u as A}from"./chunk-4NWKXUVU.js";import{b as V,c as je}from"./chunk-SVPB4B3X.js";import{a as Ke}from"./chunk-HWI4JDXM.js";import{a as qe,b as He,c as We,d as se,e as me}from"./chunk-6LRRY7U4.js";import"./chunk-4UDMRJWU.js";import{a as le}from"./chunk-N35YC64D.js";import{a as we,b as Ue}from"./chunk-ZSYSX62N.js";import{p as $e}from"./chunk-MJEGW43W.js";import"./chunk-ASUZ433E.js";import"./chunk-C7NLKRMT.js";import{Ia as xe,Ja as re,Ma as ae,ja as ve,r as ye}from"./chunk-YQPEORNB.js";import{Bb as ie,Eb as Pe,Gb as be,Hb as Fe,Ib as Ge,Jb as s,K as Le,Kb as d,Lb as a,Pb as Se,Vb as q,Wb as oe,Yb as k,ac as ce,bb as f,bc as ge,cc as Ce,fc as ze,gc as Ne,ib as De,ja as m,kb as Ae,mb as C,mc as T,na as M,nc as S,rb as Te,wa as j,xa as Y,yb as _,zb as Re}from"./chunk-AHU4KGCP.js";import{a as Oe,b as Ie}from"./chunk-JWGEYV62.js";var H=class{static round2Decimals(n){return Math.round(n*100)/100;}};var B=class{static toPixel(n,u){return n==="mm"?u*3.78:n==="cm"?u*37.8:n==="in"?u*96:u;}static fromPixel(n,u){return n==="mm"?u/3.78:n==="cm"?u/37.8:n==="in"?u/96:u;}};var ot=(()=>{let n=class n{constructor(){this.httpClient=m(ye),this.viewContainerRef=m(De),this.element=null;}ngAfterViewInit(){this.render();}render(){this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.position="absolute",o.style.left=`${e.x}${this.unit}`,o.style.top=`${e.y}${this.unit}`,o.style.fontSize=`${e.fontSize}`,o.style.color=e.fontColor??"black",o.style.textAlign=e.textAlign??"left",i.appendChild(o);}addBarcodeField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=he.qr(e.value)),e.barcodeType==="datamatrix"&&(o=he.datamatrix(e.value,!1)),!o)return;let p=Ze.toSVG(o,e.options);p&&i.appendChild(p);}addTableField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("table");o.style.position="absolute",o.style.left=`${e.x}${this.unit}`,o.style.top=`${e.y}${this.unit}`,o.style.width="auto",o.style.borderCollapse="collapse",o.style.border="1px solid black";let p=document.createElement("thead"),E=document.createElement("tr");e.columns.forEach(g=>{let Me=document.createElement("th");Me.innerText=typeof g=="string"?g:typeof g=="number"?g.toString():g.key?.toString()??"",Me.style.width="auto",E.appendChild(Me);}),p.appendChild(E),o.appendChild(p),i.appendChild(o);}addLineField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox",`0 0 ${this.convertUnitToPixel(210)} ${this.convertUnitToPixel(297)}`),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("style","position: absolute;");let p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",`M${this.convertUnitToPixel(e.x)},${this.convertUnitToPixel(e.y)} L${this.convertUnitToPixel(e.x2)},${this.convertUnitToPixel(e.y2)}`),p.setAttribute("stroke",e.lineColor??"black"),p.setAttribute("stroke-width",`${this.convertUnitToPixel(e.lineWidth)??1}`),p.setAttribute("cdkDrag",""),o.appendChild(p),i.appendChild(o);}addImageField(t){let e=t;if(!e)return;let i=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(Le(1)).subscribe(p=>{let E=new FileReader();E.onloadend=()=>{o.src=E.result;},E.readAsDataURL(p);}),o.style.position="absolute",o.style.left=`${e.x}${this.unit}`,o.style.top=`${e.y}${this.unit}`,o.style.width=`${e.width}${this.unit}`,o.style.height=`${e.height}${this.unit}`,i.appendChild(o);}convertUnitToPixel(t){return this.unit==="mm"?t*3.78:this.unit==="cm"?t*37.8:this.unit==="in"?t*96:t;}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-field"]],inputs:{field:"field",unit:"unit"},standalone:!0,features:[T([Q]),S],decls:0,vars:0,template:function(e,i){},dependencies:[c,ae,me,re],encapsulation:2});let r=n;return r;})();var nt=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P),this.barcodeTypes=["qr","datamatrix"];let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??U.generateV7(),[l.required]],name:[e?.name,[]],type:["barcode",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],value:[e?.value??"",[l.required]],barcodeType:[e?.barcodeType??"qr",[l.required]],options:t.group({dimension:[e?.options?.dimension??256,[l.required]],padding:[e?.options?.padding??2,[l.required]],background:[e?.options?.background??"#ffffff",[l.required]]})});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[T([]),C,S],decls:20,vars:6,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0646\u0645\u0637";let i;i="\u0627\u0644\u0642\u064A\u0645\u0629";let o;o="\u0627\u0644\u0628\u0639\u062F";let p;p="\u0627\u0644\u062D\u0634\u0648";let E;return E="\u0627\u0644\u0627\u0639\u062F\u0627\u062F\u0627\u062A",[E,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","barcodeType","label",e,3,"source"],["formControlName","value","label",i],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formGroupName","options",1,"tw-mb-4"],["multi",""],["formControlName","dimension","label",o],["formControlName","padding","label",p],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2),a(3,"sz-ui-form-field-input-text",3),s(4,"div",4),a(5,"sz-ui-form-field-select",5)(6,"sz-ui-form-field-input-text",6),d(),s(7,"div",4),a(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-number",8),d(),s(10,"div",9)(11,"mat-accordion",10)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),q(15,0),d()(),s(16,"div",4),a(17,"sz-ui-form-field-input-number",11)(18,"sz-ui-form-field-input-number",12),d()()()()()(),a(19,"sz-ui-dialog-actions",13)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(3),_("source",i.barcodeTypes),f(14),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,ne,c,b,ue,fe,_e,de,pe,F,x,$,v,z,w,G,ke],encapsulation:2});let r=n;return r;})();var rt=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??U.generateV7()],name:[e?.name,[]],type:["image",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],url:[e?.url??"",[l.required]],width:[e?.width??16,[l.required]],height:[e?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[T([]),C,S],decls:11,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0639\u0631\u0636";let i;return i="\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","width","label",e],["formControlName","height","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),d(),s(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),d()()(),a(10,"sz-ui-dialog-actions",8)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,c,b,F,X,x,$,v,z,w,G],encapsulation:2});let r=n;return r;})();var at=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??U.generateV7(),[l.required]],name:[e?.name,[]],type:["line",[l.required]],x:[e?.x??5,[l.required]],y:[e?.y??5,[l.required]],lineColor:[e?.lineColor??"#000",[l.required]],lineWidth:[e?.lineWidth??1,[l.required]],x2:[e?.x2??30,[l.required]],y2:[e?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[T([]),C,S],decls:13,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0644\u0648\u0646";let i;return i="\u0627\u0644\u0639\u0631\u0636",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","x2","label","X2"],["formControlName","y2","label","Y2"],["formControlName","lineColor","label",e],["formControlName","lineWidth","label",i],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),d(),s(7,"div",3),a(8,"sz-ui-form-field-input-number",6)(9,"sz-ui-form-field-input-number",7),d(),a(10,"sz-ui-form-field-input-text",8)(11,"sz-ui-form-field-input-number",9),d()(),a(12,"sz-ui-dialog-actions",10)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(10),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,c,b,F,X,x,$,v,z,w,G],encapsulation:2});let r=n;return r;})();var lt=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??U.generateV7(),[l.required]],name:[e?.name,[]],type:["table",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-table-field"]],standalone:!0,features:[T([]),C,S],decls:8,vars:5,consts:()=>{let t;return t="\u0627\u0644\u0627\u0633\u0645",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),d()()(),a(7,"sz-ui-dialog-actions",6)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(5),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,c,b,F,X,x,$,v,z,w,G],encapsulation:2});let r=n;return r;})();var st=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P);let t=this.fb,e=this.data;this.form=t.group({id:[e?.id??U.generateV7(),[l.required]],name:[e?.name,[]],type:["text",[l.required]],x:[e?.x??0,[l.required]],y:[e?.y??0,[l.required]],text:[e?.text??"",[l.required]],fontSize:[e?.fontSize??12,[l.required]],fontColor:[e?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[T([]),C,S],decls:11,vars:5,consts:()=>{let t;t="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0646\u0635";let i;i="\u062D\u062C\u0645 \u0627\u0644\u062E\u0637";let o;return o="\u0644\u0648\u0646 \u0627\u0644\u062E\u0637",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",t],[1,"sz-form-row"],["formControlName","x","label","X"],["formControlName","y","label","Y"],["formControlName","text","label",e],["formControlName","fontSize","label",i],["formControlName","fontColor","label",o],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",0),s(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input-text",2),s(4,"div",3),a(5,"sz-ui-form-field-input-number",4)(6,"sz-ui-form-field-input-number",5),d(),a(7,"sz-ui-form-field-input-text",6)(8,"sz-ui-form-field-input-number",7)(9,"sz-ui-form-field-input-text",8),d()(),a(10,"sz-ui-dialog-actions",9)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(8),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,c,b,F,X,x,$,v,z,w,G],encapsulation:2});let r=n;return r;})();var mt=(()=>{let n=class n extends y{constructor(){super(m(R)),this.fb=m(D),this.data=m(P);let t=this.fb,e=this.data;this.form=t.group({margins:this.fb.group({top:[e?.margins?.top,[]],right:[e?.margins?.right,[]],bottom:[e?.margins?.bottom,[]],left:[e?.margins?.left,[]]}),fields:[e?.fields??[],[l.required]]});}submit(){this.IsValid()&&this.dialogRef.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-settings"]],standalone:!0,features:[T([]),C,S],decls:16,vars:5,consts:()=>{let t;t="\u064A\u0633\u0627\u0631";let e;e="\u0623\u0639\u0644\u0649";let i;i="\u064A\u0645\u064A\u0646";let o;o="\u0623\u0633\u0641\u0644";let p;return p="\u0627\u0644\u0647\u0648\u0627\u0645\u0634",[p,[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formGroupName","margins",1,"tw-mb-4"],["multi",""],[1,"sz-form-row"],["formControlName","left","label",t],["formControlName","top","label",e],["formControlName","right","label",i],["formControlName","bottom","label",o],[3,"actions"]];},template:function(e,i){e&1&&(a(0,"sz-ui-dialog-header",1),s(1,"mat-dialog-content")(2,"form",2)(3,"div",3)(4,"mat-accordion",4)(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),q(8,0),d()(),s(9,"div",5),a(10,"sz-ui-form-field-input-number",6)(11,"sz-ui-form-field-input-number",7),d(),s(12,"div",5),a(13,"sz-ui-form-field-input-number",8)(14,"sz-ui-form-field-input-number",9),d()()()()()(),a(15,"sz-ui-dialog-actions",10)),e&2&&(_("title",i.title)("subtitle",i.subtitle)("alert",i.alert()),f(2),_("formGroup",i.form),f(13),_("actions",i.actions));},dependencies:[A,O,N,h,I,L,ne,c,b,F,X,ue,fe,_e,de,pe,x,$,v,z,G],encapsulation:2});let r=n;return r;})();var pt=["designer"];function ft(r,n){if(r&1&&a(0,"div"),r&2){let u=k();ie(u.getMarginsStyle());}}function ut(r,n){if(r&1){let u=Se();s(0,"sz-mgmt-reporting-template-field",12),oe("cdkDragEnded",function(e){let i=j(u).$implicit,o=k();return Y(o.drop(e,i));})("dblclick",function(){let e=j(u).$implicit,i=k();return Y(i.openFieldSettingsComponent(e));})("contextmenu",function(e){let i=j(u).$implicit,o=k();return Y(o.fieldRightClick(e,i));}),d();}if(r&2){let u=n.$implicit,t=k();ie(t.getFieldStyle(u)),_("field",u);}}function Et(r,n){if(r&1){let u=Se();s(0,"button",13),oe("click",function(){let e=j(u).field,i=k();return Y(i.openFieldSettingsComponent(e));}),s(1,"mat-icon"),Ne(2,"edit"),d(),s(3,"span"),q(4,2),d()(),a(5,"mat-divider"),s(6,"button",13),oe("click",function(){let e=j(u).field,i=k();return Y(i.openFieldDeleteComponent(e));}),s(7,"mat-icon"),Ne(8,"delete"),d(),s(9,"span"),q(10,3),d()();}}var _t=(()=>{let n=class n{constructor(){this.route=m($e),this.dialog=m(Ve),this.srptService=m(Q),this.snackBar=m(Be),this.template=this.route.snapshot.data.template,this.alert=Ae(void 0),this.size={width:210,height:297,unit:"mm"},this.contextMenuPosition={x:"0px",y:"0px"},this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:je.default([V.add().setSubItems([V.text(()=>this.openSaveTextFieldComponent()),V.barcode(()=>this.openSaveBarcodeFieldComponent()),V.image(()=>this.openSaveImageFieldComponent()),V.line(()=>this.openSaveLineFieldComponent()),V.table(()=>this.openSaveTableFieldComponent())]).setTitle(),V.menu([V.settings(this.openSettingsComponent.bind(this)),V.divider(),V.reset(this.openResetComponent.bind(this))])])},this.templateDef=this.template.content??{fields:[],margins:{top:0,right:0,bottom:0,left:0}};}openSettingsComponent(){this.dialog.open(mt,{data:this.templateDef}).afterClosed().subscribe(t=>{t&&(this.templateDef=t,this.save());});}openResetComponent(){this.dialog.open(Qe,{data:{message:le.reset_template}}).afterClosed().subscribe(t=>{t&&(this.templateDef=this.template.baseTemplate.content??{fields:[],margins:{top:0,right:0,bottom:0,left:0}},this.save());});}drop(t,e){if(!t.distance)return;let i=e.x+H.round2Decimals(B.fromPixel(this.size.unit,t.distance.x)),o=e.y+H.round2Decimals(B.fromPixel(this.size.unit,t.distance.y)),p=H.round2Decimals(B.fromPixel(this.size.unit,t.source.element.nativeElement.offsetWidth)),E=H.round2Decimals(B.fromPixel(this.size.unit,t.source.element.nativeElement.offsetHeight));i<0?i=0:i+p>this.size.width&&(i=this.size.width-p),o<0?o=0:o+E>this.size.height&&(o=this.size.height-E),e.x=i,e.y=o,t.source._dragRef._initialTransform&&(t.source._dragRef._initialTransform=`translate3d(${B.toPixel(this.size.unit,i)}px, ${B.toPixel(this.size.unit,o)}px, 0)`),t.source._dragRef.reset(),this.fieldChanged(e);}getTemplateStyle(){return`width: ${this.size.width}${this.size.unit}; height: ${this.size.height}${this.size.unit}; position: relative;`;}getMarginsStyle(){let t=`position: absolute; 
    top: ${this.templateDef.margins.top??0}${this.size.unit}; 
    right: ${this.templateDef.margins.right??0}${this.size.unit}; 
    bottom: ${this.templateDef.margins.bottom??0}${this.size.unit}; 
    left: ${this.templateDef.margins.left??0}${this.size.unit};
    `;return this.templateDef.margins.top&&(t+="border-top: 1px dotted black;"),this.templateDef.margins.right&&(t+="border-right: 1px dotted black;"),this.templateDef.margins.bottom&&(t+="border-bottom: 1px dotted black;"),this.templateDef.margins.left&&(t+="border-left: 1px dotted black;"),t;}getFieldStyle(t){let e=`translate3d(${B.toPixel(this.size.unit,t.x)}px, ${B.toPixel(this.size.unit,t.y)}px, 0)`;switch(t.type){case"text":{let i=t;return`position: absolute; transform: ${e}; font-size: ${i.fontSize}px; color: ${i.fontColor}; text-align: ${i.textAlign};`;}case"image":{let i=t;return`position: absolute; transform: ${e}; width: ${i.width}${this.size.unit}; height: ${i.height}${this.size.unit};`;}case"barcode":{let i=t;return`position: absolute; transform: ${e};`;}case"table":{let i=t,o=`position: absolute; transform: ${e};`;return!i.tableWidth||i.tableWidth==="auto"?o+="width: 100%;":i.tableWidth==="wrap"?o+="":o+=`width: ${i.tableWidth}${this.size.unit};`,o;}case"line":return"position: absolute;";}return"";}openFieldSettingsComponent(t){switch(t.type){case"text":this.openSaveTextFieldComponent(t);break;case"barcode":this.openSaveBarcodeFieldComponent(t);break;case"image":this.openSaveImageFieldComponent(t);break;case"line":this.openSaveLineFieldComponent(t);break;case"table":this.openSaveTableFieldComponent(t);break;}}fieldRightClick(t,e){t.preventDefault(),this.contextMenuPosition.x=t.clientX+"px",this.contextMenuPosition.y=t.clientY+"px",this.menuTrigger.menuData={field:e},this.menuTrigger.openMenu();}openFieldDeleteComponent(t){this.dialog.open(Je,{data:{message:Ye.delete,data:t}}).afterClosed().subscribe(e=>{e&&this.fieldDeleted(t);});}openSaveTextFieldComponent(t){this.dialog.open(st,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveBarcodeFieldComponent(t){this.dialog.open(nt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveImageFieldComponent(t){this.dialog.open(rt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveLineFieldComponent(t){this.dialog.open(at,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}openSaveTableFieldComponent(t){this.dialog.open(lt,{data:t}).afterClosed().subscribe(e=>{e&&this.fieldChanged(e);});}fieldChanged(t){let e=this.templateDef.fields.findIndex(i=>i.id===t.id);e!==-1?this.templateDef.fields[e]=t:this.templateDef.fields.push(t),this.save();}fieldDeleted(t){this.templateDef.fields=this.templateDef.fields.filter(e=>e.id!==t.id),this.save();}save(){this.srptService.templates.update(this.template.id,Ie(Oe({},this.template),{content:this.templateDef})).subscribe(()=>{this.snackBar.open(le.saved,le.close,{duration:5e3});});}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,i){if(e&1&&(ce(pt,5),ce(se,5)),e&2){let o;ge(o=Ce())&&(i.designerEl=o.first),ge(o=Ce())&&(i.menuTrigger=o.first);}},standalone:!0,features:[T([Q]),S],decls:12,vars:10,consts:()=>{let t;t="\u062A\u0639\u062F\u064A\u0644";let e;return e="\u062D\u0630\u0641",[["designer",""],["menuTrigger","matMenu"],t,e,[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"style"],["cdkDrag","","cdkDragBoundary",".designer",3,"field","style"],[2,"visibility","hidden","position","fixed",3,"matMenuTriggerFor"],["matMenuContent",""],["cdkDrag","","cdkDragBoundary",".designer",3,"cdkDragEnded","dblclick","contextmenu","field"],["mat-menu-item","",3,"click"]];},template:function(e,i){if(e&1&&(a(0,"sz-ui-app-bar",4)(1,"sz-ui-alert",5),s(2,"div",6)(3,"div",7,0),Te(5,ft,1,2,"div",8),Fe(6,ut,1,3,"sz-mgmt-reporting-template-field",9,be),a(8,"div",10),s(9,"mat-menu",null,1),Te(11,Et,11,0,"ng-template",11),d()()()),e&2){let o=ze(10);_("config",i.appBarConfig),f(),_("alert",i.alert()),f(2),ie(i.getTemplateStyle()),f(2),Pe(i.templateDef.margins?5:-1),f(),Ge(i.templateDef.fields),f(2),Re("left",i.contextMenuPosition.x)("top",i.contextMenuPosition.y),_("matMenuTriggerFor",o);}},dependencies:[c,ve,ae,Ue,we,tt,et,it,Ke,re,xe,me,We,qe,He,se,ot,Xe],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;background-color:#fff;position:relative}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left}"]});let r=n;return r;})();var Fo=[{path:"",component:_t}];export{Fo as default};/**i18n:24e18a1ba83b4179a1babb1616b4d359e6a6ee94f2bda655ac6b279e5c98bb73*/