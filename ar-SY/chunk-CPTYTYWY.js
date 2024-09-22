import{c as z}from"./chunk-BJYZ6EWO.js";import{a as x}from"./chunk-B5R3JV4E.js";import{h as Fe}from"./chunk-BBJAZ6GP.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{d as De,e as Z}from"./chunk-3FGMTWPX.js";import{f as P,g as b,h as G,k as $}from"./chunk-BQYTVP5O.js";import"./chunk-QVJ4Z3HM.js";import{b as Ce}from"./chunk-IK4KAOW7.js";import{a as y,b as A,d as he,e as D,g as T}from"./chunk-HQFAQEC3.js";import{c as R,r as Le,u as v}from"./chunk-26COPQ6D.js";import{b as Ne}from"./chunk-5WAYP5D7.js";import"./chunk-4PSVU3RC.js";import{i as F}from"./chunk-N4OOJIAX.js";import{d as l,f as g,g as h,l as C,n as N,q as L,r as O,t as I}from"./chunk-GLZMJYJP.js";import{b as B,c as ye}from"./chunk-QOXR5OPH.js";import{a as Ae}from"./chunk-NC2TMKBF.js";import{c as Oe,d as Ie}from"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as J}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import{p as Se}from"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import{Ja as W,Ma as Q,ja as ge,r as Te}from"./chunk-UEBH5A2M.js";import{Bb as pe,Ea as K,Fb as ue,Hb as fe,Ib as Ee,Jb as p,K as de,Kb as u,Lb as a,Pb as Me,Wb as ce,Yb as U,ac as q,bb as s,bc as k,cc as H,ib as me,ja as m,kb as _e,mb as S,mc as M,na as E,nc as c,wa as Y,xa as j,yb as r}from"./chunk-6J2YPVJB.js";import{a as se,b as ae}from"./chunk-TH7MQ6T4.js";var Re=(()=>{let n=class n{constructor(){this.httpClient=m(Te),this.viewContainerRef=m(me),this.element=null,this.isMoving=!1,this.changed=new K(),this.deleted=new K();}ngAfterViewInit(){this.render();}render(){console.log("render",this.field),this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.position="absolute",o.style.left=`${e.x}${this.unit}`,o.style.top=`${e.y}${this.unit}`,o.style.fontSize=`${e.fontSize}`,o.style.color=e.fontColor??"black",o.style.textAlign=e.align??"left",t.appendChild(o),this.addMouseEvents(o),console.log("addBarcodeField",o);}addBarcodeField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=Z.qr(e.value)),e.barcodeType==="datamatrix"&&(o=Z.datamatrix(e.value,!1)),!o)return;let _=De.toSVG(o,e.options);_&&(_.style.position="absolute",_.style.left=`${e.x}${this.unit}`,_.style.top=`${e.y}${this.unit}`,_.style.width=`${e.width??18}${this.unit}`,_.style.height=`${e.height??18}${this.unit}`,t.appendChild(_),console.log("addBarcodeField",_));}addTableField(i){if(!i)return;let t=this.getContainerElement();}addLineField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("version","1.1"),o.setAttribute("x",`${e.x}${this.unit}`),o.setAttribute("y",`${e.y}${this.unit}`),o.setAttribute("width",`${e.x2}${this.unit}`),o.setAttribute("height",`${e.y2}${this.unit}`),o.setAttribute("style","position: absolute;"),o.innerHTML=`<line x1="${e.x}${this.unit}" y1="${e.y}${this.unit}" x2="${e.x2}${this.unit}" y2="${e.y2}${this.unit}" style="stroke:${e.lineColor??"black"};stroke-width:${this.convertUnitToPixel(e.lineWidth)??1}" />`,t.appendChild(o),console.log("addBarcodeField",o);}addImageField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(de(1)).subscribe(_=>{let f=new FileReader();f.onloadend=()=>{o.src=f.result;},f.readAsDataURL(_);}),o.style.position="absolute",o.style.left=`${e.x}${this.unit}`,o.style.top=`${e.y}${this.unit}`,o.style.width=`${e.width}${this.unit}`,o.style.height=`${e.height}${this.unit}`,t.appendChild(o),this.addMouseEvents(o),console.log("addBarcodeField",o);}addMouseEvents(i){let e=0,t=0;this.getContainerElement().addEventListener("keypress",this.handleKeyUp.bind(this)),i.addEventListener("mousedown",f=>{f.button===0&&(this.isMoving=!0,e=this.convertPixelToUnit(i.offsetLeft)-this.convertPixelToUnit(f.clientX),t=this.convertPixelToUnit(i.offsetTop)-this.convertPixelToUnit(f.clientY),console.log("mousedown",e,t),i.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",_));}),i.addEventListener("mouseover",()=>{i.style.cursor="grab";});let o=f=>{if(!this.isMoving)return;let re=this.convertPixelToUnit(f.clientX)+e,le=this.convertPixelToUnit(f.clientY)+t;if(i.style.left=`${re}${this.unit}`,i.style.top=`${le}${this.unit}`,this.field.x=re,this.field.y=le,this.field.type==="line"){let V=this.field;V.x2=this.field.x+(V.x2-V.x),V.y2=this.field.y+(V.y2-V.y);}},_=()=>{this.isMoving=!1,i.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",_),this.changed?.emit(this.field);};}handleKeyUp(i){console.log("handleKeyUp",i.key),i.key==="Delete"&&this.handleDeleteKey();}handleDeleteKey(){this.deleted?.emit(this.field);}convertUnitToPixel(i){return this.unit==="mm"?i*3.78:this.unit==="cm"?i*37.8:this.unit==="in"?i*96:i;}convertPixelToUnit(i){return this.unit==="mm"?i/3.78:this.unit==="cm"?i/37.8:this.unit==="in"?i/96:i;}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template-field"]],viewQuery:function(e,t){if(e&1&&q(Oe,7),e&2){let o;k(o=H())&&(t.matMenuTrigger=o.first);}},inputs:{field:"field",unit:"unit"},outputs:{changed:"changed",deleted:"deleted"},standalone:!0,features:[M([x]),c],decls:0,vars:0,template:function(e,t){},dependencies:[T,Q,Ie,W],encapsulation:2});let d=n;return d;})();var ve=(()=>{let n=class n extends P{constructor(){let i=m(y);super(i),this.fb=m(O),this.data=m(A),this.barcodeTypes=["qr","datamatrix"];let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_barcode1",[l.required]],type:["barcode",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],value:[t?.value??"",[l.required]],barcodeType:[t?.barcodeType??"qr",[l.required]],width:[t?.width??16,[l.required]],height:[t?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[M([]),S,c],decls:13,vars:10,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0642\u064A\u0645\u0629";let t;t="\u0627\u0644\u0646\u0645\u0637";let o;o="\u0627\u0644\u0639\u0631\u0636";let _;return _="\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","value","label",e],["formControlName","barcodeType","label",t,3,"source"],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","width","label",o,3,"type"],["formControlName","height","label",_,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-select",4),p(6,"div",5),a(7,"sz-ui-form-field-input",6)(8,"sz-ui-form-field-input",7),u(),p(9,"div",5),a(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),u()()(),a(12,"sz-ui-dialog-actions",10)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),r("formGroup",t.form),s(3),r("source",t.barcodeTypes),s(2),r("type","number"),s(),r("type","number"),s(2),r("type","number"),s(),r("type","number"),s(),r("actions",t.actions));},dependencies:[I,C,g,h,N,L,T,D,F,z,$,b,G,v,R,Le],encapsulation:2});let d=n;return d;})();var Pe=(()=>{let n=class n extends P{constructor(){let i=m(y);super(i),this.fb=m(O),this.data=m(A);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_image1",[l.required]],type:["image",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],url:[t?.url??"",[l.required]],width:[t?.width??16,[l.required]],height:[t?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[M([]),S,c],decls:11,vars:9,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0639\u0631\u0636";let t;return t="\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","width","label",e,3,"type"],["formControlName","height","label",t,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),p(4,"div",3),a(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),u(),p(7,"div",3),a(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),u()()(),a(10,"sz-ui-dialog-actions",8)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),r("formGroup",t.form),s(3),r("type","number"),s(),r("type","number"),s(2),r("type","number"),s(),r("type","number"),s(),r("actions",t.actions));},dependencies:[I,C,g,h,N,L,T,D,F,z,$,b,G,v,R],encapsulation:2});let d=n;return d;})();var be=(()=>{let n=class n extends P{constructor(){let i=m(y);super(i),this.fb=m(O),this.data=m(A);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_line1",[l.required]],type:["line",[l.required]],x:[t?.x??5,[l.required]],y:[t?.y??5,[l.required]],lineColor:[t?.lineColor??"#000",[l.required]],lineWidth:[t?.lineWidth??1,[l.required]],x2:[t?.x2??30,[l.required]],y2:[t?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[M([]),S,c],decls:13,vars:10,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="Color";let t;return t="\u0627\u0644\u0639\u0631\u0636",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","x2","label","X2",3,"type"],["formControlName","y2","label","Y2",3,"type"],["formControlName","lineColor","label",e],["formControlName","lineWidth","label",t,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),p(4,"div",3),a(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),u(),p(7,"div",3),a(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),u(),a(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),u()(),a(12,"sz-ui-dialog-actions",10)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),r("formGroup",t.form),s(3),r("type","number"),s(),r("type","number"),s(2),r("type","number"),s(),r("type","number"),s(2),r("type","number"),s(),r("actions",t.actions));},dependencies:[I,C,g,h,N,L,T,D,F,z,$,b,G,v,R],encapsulation:2});let d=n;return d;})();var Ge=(()=>{let n=class n extends P{constructor(){let i=m(y);super(i),this.fb=m(O),this.data=m(A);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_text1",[l.required]],type:["text",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],text:[t?.text??"",[l.required]],fontSize:[t?.fontSize??12,[l.required]],fontColor:[t?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[M([]),S,c],decls:11,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0646\u0635";let t;t="\u062D\u062C\u0645 \u0627\u0644\u062E\u0637";let o;return o="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","text","label",e],["formControlName","fontSize","label",t,3,"type"],["formControlName","fontColor","label",o],[3,"actions"]];},template:function(e,t){e&1&&(a(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),a(3,"sz-ui-form-field-input",2),p(4,"div",3),a(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),u(),a(7,"sz-ui-form-field-input",6)(8,"sz-ui-form-field-input",7)(9,"sz-ui-form-field-input",8),u()(),a(10,"sz-ui-dialog-actions",9)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),s(2),r("formGroup",t.form),s(3),r("type","number"),s(),r("type","number"),s(2),r("type","number"),s(2),r("actions",t.actions));},dependencies:[I,C,g,h,N,L,T,D,F,z,$,b,G,v,R],encapsulation:2});let d=n;return d;})();var ze=["designer"];function Ve(d,n){if(d&1){let X=Me();p(0,"sz-mgmt-reporting-template-field",6),ce("changed",function(e){Y(X);let t=U();return j(t.fieldChanged(e));})("deleted",function(e){Y(X);let t=U();return j(t.fieldDeleted(e));}),u();}if(d&2){let X=n.$implicit,i=U();r("field",X)("unit",i.size.unit);}}var $e=(()=>{let n=class n{constructor(){this.route=m(Se),this.dialog=m(he),this.srptService=m(x),this.snackBar=m(Ce),this.template=this.route.snapshot.data.template,this.alert=_e(void 0),this.fields=[],this.size={width:210,height:297,unit:"mm"},this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:ye.default().setItems([B.menu([B.text(this.openSaveTextFieldComponent.bind(this)),B.barcode(this.openSaveBarcodeFieldComponent.bind(this)),B.image(this.openSaveImageFieldComponent.bind(this)),B.line(this.openSaveLineFieldComponent.bind(this))])])};}ngAfterViewInit(){this.refresh();}refresh(){this.fields=this.template.content?.fields??[];}getStyle(){return{width:`${this.size.width}${this.size.unit}`,height:`${this.size.height}${this.size.unit}`};}openSaveTextFieldComponent(){this.dialog.open(Ge).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveBarcodeFieldComponent(){this.dialog.open(ve).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveImageFieldComponent(){this.dialog.open(Pe).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveLineFieldComponent(){this.dialog.open(be).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}fieldChanged(i){this.fields=this.fields.map(e=>e.name===i.name?i:e),this.save();}fieldDeleted(i){this.fields=this.fields.filter(e=>e.name!==i.name);}save(){this.srptService.templates.update(this.template.id,ae(se({},this.template),{content:{fields:this.fields}})).subscribe(()=>{this.snackBar.open(J.saved,J.close,{duration:5e3});});}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=E({type:n,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,t){if(e&1&&q(ze,5),e&2){let o;k(o=H())&&(t.designerEl=o.first);}},standalone:!0,features:[M([x]),c],decls:7,vars:4,consts:[["designer",""],[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"field","unit"],[3,"changed","deleted","field","unit"]],template:function(e,t){e&1&&(a(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),p(2,"div",3)(3,"div",4,0),fe(5,Ve,1,2,"sz-mgmt-reporting-template-field",5,ue),u()()),e&2&&(r("config",t.appBarConfig),s(),r("alert",t.alert()),s(2),pe(t.getStyle()),s(2),Ee(t.fields));},dependencies:[T,ge,Q,Fe,Ae,W,Re,Ne],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;background-color:#fff;position:relative}"]});let d=n;return d;})();var li=[{path:"",component:$e}];export{li as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/