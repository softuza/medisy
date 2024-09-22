import{c as B}from"./chunk-BJYZ6EWO.js";import{a as X}from"./chunk-LCU6ACMZ.js";import{h as Ne}from"./chunk-IGSRBC3T.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{d as Ce,e as J}from"./chunk-3FGMTWPX.js";import{f as z,g as $,h as b,k as V}from"./chunk-YKMXQFDH.js";import"./chunk-WUVRWIHU.js";import{b as fe}from"./chunk-IK4KAOW7.js";import{a as D,b as y,d as Me,e as F,g as S}from"./chunk-HQFAQEC3.js";import{c as G,r as Te,u as v}from"./chunk-IITPHOLL.js";import"./chunk-JPBZ5DSJ.js";import"./chunk-G7AMUACM.js";import{i as P}from"./chunk-N4OOJIAX.js";import{d as _,f as N,g as O,l as L,n as I,q as h,r as A,t as R}from"./chunk-GLZMJYJP.js";import{b as x,c as ce}from"./chunk-QOXR5OPH.js";import{a as ge}from"./chunk-NC2TMKBF.js";import{c as Se,d as ue}from"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as W}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import{p as me}from"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import{Ja as H,Ma as k,ja as pe,r as de}from"./chunk-UEBH5A2M.js";import{Ea as oe,Fb as _e,Hb as le,Ib as ae,Jb as c,K as ee,Kb as g,Lb as m,Pb as se,Wb as Ee,Yb as j,ac as w,bb as l,bc as U,cc as q,ib as ne,ja as d,mb as C,mc as f,na as M,nc as T,wa as te,xa as ie,yb as r,zb as re}from"./chunk-6J2YPVJB.js";import{a as K,b as Z}from"./chunk-TH7MQ6T4.js";var Oe=(()=>{let n=class n{constructor(){this.httpClient=d(de),this.viewContainerRef=d(ne),this.element=null,this.isMoving=!1,this.changed=new oe();}ngAfterViewInit(){this.render();}render(){console.log("render",this.field),this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.fontSize=`${e.fontSize}px`,o.style.color=e.fontColor??"black",t.appendChild(o),this.addMouseEvents(o);}addBarcodeField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=J.qr(e.value)),e.barcodeType==="datamatrix"&&(o=J.datamatrix(e.value,!1)),!o)return;let s=Ce.toSVG(o,e.options);s&&(s.style.position="absolute",s.style.left=`${this.getRelativeSize(e.x)}px`,s.style.top=`${this.getRelativeSize(e.y)}px`,s.style.width=`${this.getRelativeSize(e.width??18)}px`,s.style.height=`${this.getRelativeSize(e.height??18)}px`,t.appendChild(s));}addTableField(i){if(!i)return;let t=this.getContainerElement();}addLineField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("div");o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.width=`${this.getRelativeSize(e.x2-e.x)}px`,o.style.height=`${this.getRelativeSize(e.y2-e.y)}px`,o.style.borderBottom=`${e.lineWidth??1}px solid ${e.lineColor??"black"}`,t.appendChild(o),this.addMouseEvents(o);}addImageField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(ee(1)).subscribe(s=>{let E=new FileReader();E.onloadend=()=>{o.src=E.result;},E.readAsDataURL(s);}),o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.width=`${this.getRelativeSize(e.width)}px`,o.style.height=`${this.getRelativeSize(e.height)}px`,t.appendChild(o),this.addMouseEvents(o);}addMouseEvents(i){let e=0,t=0;i.addEventListener("mousedown",E=>{E.button===0&&(this.isMoving=!0,e=i.offsetLeft-E.clientX,t=i.offsetTop-E.clientY,i.style.cursor="move",document.addEventListener("mousemove",o),document.addEventListener("mouseup",s));});let o=E=>{if(!this.isMoving)return;let p=E.clientX+e,u=E.clientY+t;i.style.left=`${p}px`,i.style.top=`${u}px`,this.field.x=p/this.scale,this.field.y=u/this.scale;},s=()=>{this.isMoving=!1,i.style.cursor="hand",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",s),this.changed?.emit(this.field);};}onRightClick(i){i.preventDefault(),this.matMenuTrigger.openMenu();}getRelativeSize(i){return i*this.scale;}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-field"]],viewQuery:function(e,t){if(e&1&&w(Se,7),e&2){let o;U(o=q())&&(t.matMenuTrigger=o.first);}},inputs:{field:"field",scale:"scale"},outputs:{changed:"changed"},standalone:!0,features:[f([X]),T],decls:0,vars:0,template:function(e,t){},dependencies:[S,k,ue,H],encapsulation:2});let a=n;return a;})();var De=(()=>{let n=class n extends z{constructor(){let i=d(D);super(i),this.fb=d(A),this.data=d(y),this.barcodeTypes=["qr","datamatrix"];let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_barcode1",[_.required]],type:["barcode",[_.required]],x:[t?.x??0,[_.required]],y:[t?.y??0,[_.required]],value:[t?.value??"",[_.required]],barcodeType:[t?.barcodeType??"qr",[_.required]],width:[t?.width??16,[_.required]],height:[t?.height??16,[_.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[f([]),C,T],decls:11,vars:10,consts:()=>{let i;i="Name";let e;e="X";let t;t="Y";let o;o="value";let s;s="Type";let E;E="Width";let p;return p="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","x","label",e,3,"type"],["formControlName","y","label",t,3,"type"],["formControlName","value","label",o],["formControlName","barcodeType","label",s,3,"source"],["formControlName","width","label",E,3,"type"],["formControlName","height","label",p,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-select",6)(8,"sz-ui-form-field-input",7)(9,"sz-ui-form-field-input",8),g()(),m(10,"sz-ui-dialog-actions",9)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(2),r("type","number"),l(),r("type","number"),l(2),r("source",t.barcodeTypes),l(),r("type","number"),l(),r("type","number"),l(),r("actions",t.actions));},dependencies:[R,L,N,O,I,h,S,F,P,B,V,$,b,v,G,Te],encapsulation:2});let a=n;return a;})();var ye=(()=>{let n=class n extends z{constructor(){let i=d(D);super(i),this.fb=d(A),this.data=d(y);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_image1",[_.required]],type:["image",[_.required]],x:[t?.x??0,[_.required]],y:[t?.y??0,[_.required]],url:[t?.url??"",[_.required]],width:[t?.width??16,[_.required]],height:[t?.height??16,[_.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[f([]),C,T],decls:9,vars:9,consts:()=>{let i;i="Name";let e;e="X";let t;t="Y";let o;o="Width";let s;return s="Height",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","x","label",e,3,"type"],["formControlName","y","label",t,3,"type"],["formControlName","width","label",o,3,"type"],["formControlName","height","label",s,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6),g()(),m(8,"sz-ui-dialog-actions",7)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(2),r("type","number"),l(),r("type","number"),l(),r("type","number"),l(),r("type","number"),l(),r("actions",t.actions));},dependencies:[R,L,N,O,I,h,S,F,P,B,V,$,b,v,G],encapsulation:2});let a=n;return a;})();var Fe=(()=>{let n=class n extends z{constructor(){let i=d(D);super(i),this.fb=d(A),this.data=d(y);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_text1",[_.required]],type:["text",[_.required]],x:[t?.x??0,[_.required]],y:[t?.y??0,[_.required]],text:[t?.text??"",[_.required]],fontSize:[t?.fontSize??12,[_.required]],fontColor:[t?.fontColor??"#000",[_.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[f([]),C,T],decls:10,vars:8,consts:()=>{let i;i="Name";let e;e="X";let t;t="Y";let o;o="Text";let s;s="Font Size";let E;return E="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","x","label",e,3,"type"],["formControlName","y","label",t,3,"type"],["formControlName","text","label",o],["formControlName","fontSize","label",s,3,"type"],["formControlName","fontColor","label",E],[3,"actions"]];},template:function(e,t){e&1&&(m(0,"sz-ui-dialog-header",0),c(1,"mat-dialog-content")(2,"form",1),m(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5)(7,"sz-ui-form-field-input",6)(8,"sz-ui-form-field-input",7),g()(),m(9,"sz-ui-dialog-actions",8)),e&2&&(r("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),l(2),r("formGroup",t.form),l(2),r("type","number"),l(),r("type","number"),l(2),r("type","number"),l(2),r("actions",t.actions));},dependencies:[R,L,N,O,I,h,S,F,P,B,V,$,b,v,G],encapsulation:2});let a=n;return a;})();var Ge=["designer"];function ve(a,n){if(a&1){let Q=se();c(0,"sz-mgmt-reporting-template-field",5),Ee("changed",function(e){te(Q);let t=j();return ie(t.fieldChanged(e));}),g();}if(a&2){let Q=n.$implicit,i=j();r("field",Q)("scale",i.scale);}}var Pe=(()=>{let n=class n{constructor(){this.route=d(me),this.dialog=d(Me),this.srptService=d(X),this.snackBar=d(fe),this.template=this.route.snapshot.data.template,this.fields=[],this.size={width:210,height:297},this.scale=3,this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:ce.default().setItems([x.menu([x.text(this.openSaveTextFieldComponent.bind(this)),x.barcode(this.openSaveBarcodeFieldComponent.bind(this)),x.image(this.openSaveImageFieldComponent.bind(this))])])};}ngAfterViewInit(){this.refresh();}refresh(){this.fields=this.template.content?.fields??[];}getRelativeSize(i){return i*this.scale;}openSaveTextFieldComponent(){this.dialog.open(Fe).afterClosed().subscribe(i=>{i&&this.fields.push(i);});}openSaveBarcodeFieldComponent(){this.dialog.open(De).afterClosed().subscribe(i=>{i&&this.fields.push(i);});}openSaveImageFieldComponent(){this.dialog.open(ye).afterClosed().subscribe(i=>{i&&this.fields.push(i);});}fieldChanged(i){this.fields=this.fields.map(e=>e.name===i.name?i:e),this.save();}save(){this.srptService.templates.update(this.template.id,Z(K({},this.template),{content:{fields:this.fields}})).subscribe(()=>{this.snackBar.open(W.saved,W.close,{duration:5e3});});}};n.ɵfac=function(e){return new(e||n)();},n.ɵcmp=M({type:n,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,t){if(e&1&&w(Ge,5),e&2){let o;U(o=q())&&(t.designerEl=o.first);}},standalone:!0,features:[f([X]),T],decls:6,vars:5,consts:[["designer",""],[3,"config"],[1,"container"],["dir","ltr",1,"designer"],[3,"field","scale"],[3,"changed","field","scale"]],template:function(e,t){e&1&&(m(0,"sz-ui-app-bar",1),c(1,"div",2)(2,"div",3,0),le(4,ve,1,2,"sz-mgmt-reporting-template-field",4,_e),g()()),e&2&&(r("config",t.appBarConfig),l(2),re("width",t.getRelativeSize(t.size.width),"px")("height",t.getRelativeSize(t.size.height),"px"),l(2),ae(t.fields));},dependencies:[S,pe,k,Ne,ge,H,Oe],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;padding:10px;margin:10px;background-color:#fff;position:relative}"]});let a=n;return a;})();var Ht=[{path:"",component:Pe}];export{Ht as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/