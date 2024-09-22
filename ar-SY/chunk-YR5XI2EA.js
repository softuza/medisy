import{c as $}from"./chunk-BJYZ6EWO.js";import{a as x}from"./chunk-B5R3JV4E.js";import{h as De}from"./chunk-BBJAZ6GP.js";import"./chunk-JX57I4IE.js";import"./chunk-SEQWES4Y.js";import"./chunk-ZCO6OMXC.js";import{d as Ae,e as Z}from"./chunk-3FGMTWPX.js";import{f as z,g as P,h as b,k as G}from"./chunk-BQYTVP5O.js";import"./chunk-QVJ4Z3HM.js";import{b as he}from"./chunk-IK4KAOW7.js";import{a as y,b as R,d as Ce,e as A,g as T}from"./chunk-HQFAQEC3.js";import{c as v,r as Le,u as F}from"./chunk-26COPQ6D.js";import{b as Ne}from"./chunk-5WAYP5D7.js";import"./chunk-4PSVU3RC.js";import{i as D}from"./chunk-N4OOJIAX.js";import{d as l,f as g,g as C,l as h,n as N,q as L,r as O,t as I}from"./chunk-GLZMJYJP.js";import{b as B,c as ye}from"./chunk-QOXR5OPH.js";import{a as Re}from"./chunk-NC2TMKBF.js";import{c as Oe,d as Ie}from"./chunk-OYBNPCR5.js";import"./chunk-ZYAQ56NI.js";import{a as J}from"./chunk-GM2OQK6E.js";import"./chunk-K5FLVMR2.js";import{p as ce}from"./chunk-T4KI57OL.js";import"./chunk-MOGYN3JD.js";import"./chunk-ATJMWBRY.js";import{Ja as W,Ma as Q,ja as ge,r as Te}from"./chunk-UEBH5A2M.js";import{Ea as K,Fb as Ee,Hb as fe,Ib as ue,Jb as p,K as de,Kb as E,Lb as s,Pb as Me,Wb as Se,Yb as q,ac as U,bb as a,bc as k,cc as H,ib as _e,ja as _,kb as me,mb as c,mc as M,na as u,nc as S,wa as Y,xa as j,yb as n,zb as pe}from"./chunk-6J2YPVJB.js";import{a as ae,b as se}from"./chunk-TH7MQ6T4.js";var ve=(()=>{let r=class r{constructor(){this.httpClient=_(Te),this.viewContainerRef=_(_e),this.element=null,this.isMoving=!1,this.changed=new K(),this.deleted=new K();}ngAfterViewInit(){this.render();}render(){console.log("render",this.field),this.field.type==="text"?this.addTextField(this.field):this.field.type==="barcode"?this.addBarcodeField(this.field):this.field.type==="table"?this.addTableField(this.field):this.field.type==="line"?this.addLineField(this.field):this.field.type==="image"&&this.addImageField(this.field);}getContainerElement(){return this.viewContainerRef.element.nativeElement;}addTextField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("p");o.innerText=e.text,o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.fontSize=`${e.fontSize}px`,o.style.color=e.fontColor??"black",t.appendChild(o),this.addMouseEvents(o);}addBarcodeField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=null;if(e.barcodeType==="qr"&&(o=Z.qr(e.value)),e.barcodeType==="datamatrix"&&(o=Z.datamatrix(e.value,!1)),!o)return;let m=Ae.toSVG(o,e.options);m&&(m.style.position="absolute",m.style.left=`${this.getRelativeSize(e.x)}px`,m.style.top=`${this.getRelativeSize(e.y)}px`,m.style.width=`${this.getRelativeSize(e.width??18)}px`,m.style.height=`${this.getRelativeSize(e.height??18)}px`,t.appendChild(m));}addTableField(i){if(!i)return;let t=this.getContainerElement();}addLineField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("div");o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.width=`${this.getRelativeSize(e.x2-e.x)}px`,o.style.height=`${this.getRelativeSize(e.y2-e.y)}px`,o.style.borderBottom=`${e.lineWidth??1}px solid ${e.lineColor??"black"}`,t.appendChild(o),this.addMouseEvents(o);}addImageField(i){let e=i;if(!e)return;let t=this.getContainerElement(),o=document.createElement("img");o.alt="",this.httpClient.get(e.url,{responseType:"blob"}).pipe(de(1)).subscribe(m=>{let f=new FileReader();f.onloadend=()=>{o.src=f.result;},f.readAsDataURL(m);}),o.style.position="absolute",o.style.left=`${this.getRelativeSize(e.x)}px`,o.style.top=`${this.getRelativeSize(e.y)}px`,o.style.width=`${this.getRelativeSize(e.width)}px`,o.style.height=`${this.getRelativeSize(e.height)}px`,t.appendChild(o),this.addMouseEvents(o);}addMouseEvents(i){let e=0,t=0;this.getContainerElement().addEventListener("keypress",this.handleKeyUp.bind(this)),i.addEventListener("mousedown",f=>{f.button===0&&(this.isMoving=!0,e=i.offsetLeft-f.clientX,t=i.offsetTop-f.clientY,i.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",m));}),i.addEventListener("mouseover",()=>{i.style.cursor="grab";});let o=f=>{if(!this.isMoving)return;let ne=f.clientX+e,le=f.clientY+t;if(i.style.left=`${ne}px`,i.style.top=`${le}px`,this.field.x=ne/this.scale,this.field.y=le/this.scale,this.field.type==="line"){let V=this.field;V.x2=this.field.x+this.getRelativeSize(V.x2-V.x),V.y2=this.field.y+this.getRelativeSize(V.y2-V.y);}},m=()=>{this.isMoving=!1,i.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",m),this.changed?.emit(this.field);};}handleKeyUp(i){console.log("handleKeyUp",i.key),i.key==="Delete"&&this.handleDeleteKey();}handleDeleteKey(){this.deleted?.emit(this.field);}getRelativeSize(i){return i*this.scale;}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template-field"]],viewQuery:function(e,t){if(e&1&&U(Oe,7),e&2){let o;k(o=H())&&(t.matMenuTrigger=o.first);}},inputs:{field:"field",scale:"scale"},outputs:{changed:"changed",deleted:"deleted"},standalone:!0,features:[M([x]),S],decls:0,vars:0,template:function(e,t){},dependencies:[T,Q,Ie,W],encapsulation:2});let d=r;return d;})();var Fe=(()=>{let r=class r extends z{constructor(){let i=_(y);super(i),this.fb=_(O),this.data=_(R),this.barcodeTypes=["qr","datamatrix"];let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_barcode1",[l.required]],type:["barcode",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],value:[t?.value??"",[l.required]],barcodeType:[t?.barcodeType??"qr",[l.required]],width:[t?.width??16,[l.required]],height:[t?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template-barcode-field"]],standalone:!0,features:[M([]),c,S],decls:13,vars:10,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0642\u064A\u0645\u0629";let t;t="\u0627\u0644\u0646\u0645\u0637";let o;o="\u0627\u0644\u0639\u0631\u0636";let m;return m="\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],["formControlName","value","label",e],["formControlName","barcodeType","label",t,3,"source"],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","width","label",o,3,"type"],["formControlName","height","label",m,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2)(4,"sz-ui-form-field-input",3)(5,"sz-ui-form-field-select",4),p(6,"div",5),s(7,"sz-ui-form-field-input",6)(8,"sz-ui-form-field-input",7),E(),p(9,"div",5),s(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),E()()(),s(12,"sz-ui-dialog-actions",10)),e&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(3),n("source",t.barcodeTypes),a(2),n("type","number"),a(),n("type","number"),a(2),n("type","number"),a(),n("type","number"),a(),n("actions",t.actions));},dependencies:[I,h,g,C,N,L,T,A,D,$,G,P,b,F,v,Le],encapsulation:2});let d=r;return d;})();var ze=(()=>{let r=class r extends z{constructor(){let i=_(y);super(i),this.fb=_(O),this.data=_(R);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_image1",[l.required]],type:["image",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],url:[t?.url??"",[l.required]],width:[t?.width??16,[l.required]],height:[t?.height??16,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template-image-field"]],standalone:!0,features:[M([]),c,S],decls:11,vars:9,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0639\u0631\u0636";let t;return t="\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","width","label",e,3,"type"],["formControlName","height","label",t,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),p(4,"div",3),s(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),E(),p(7,"div",3),s(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),E()()(),s(10,"sz-ui-dialog-actions",8)),e&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(3),n("type","number"),a(),n("type","number"),a(2),n("type","number"),a(),n("type","number"),a(),n("actions",t.actions));},dependencies:[I,h,g,C,N,L,T,A,D,$,G,P,b,F,v],encapsulation:2});let d=r;return d;})();var Pe=(()=>{let r=class r extends z{constructor(){let i=_(y);super(i),this.fb=_(O),this.data=_(R);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_line1",[l.required]],type:["line",[l.required]],x:[t?.x??5,[l.required]],y:[t?.y??5,[l.required]],lineColor:[t?.lineColor??"#000",[l.required]],lineWidth:[t?.lineWidth??1,[l.required]],x2:[t?.x2??30,[l.required]],y2:[t?.y2??5,[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template-line-field"]],standalone:!0,features:[M([]),c,S],decls:13,vars:10,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="Color";let t;return t="\u0627\u0644\u0639\u0631\u0636",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","x2","label","X2",3,"type"],["formControlName","y2","label","Y2",3,"type"],["formControlName","lineColor","label",e],["formControlName","lineWidth","label",t,3,"type"],[3,"actions"]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),p(4,"div",3),s(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),E(),p(7,"div",3),s(8,"sz-ui-form-field-input",6)(9,"sz-ui-form-field-input",7),E(),s(10,"sz-ui-form-field-input",8)(11,"sz-ui-form-field-input",9),E()(),s(12,"sz-ui-dialog-actions",10)),e&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(3),n("type","number"),a(),n("type","number"),a(2),n("type","number"),a(),n("type","number"),a(2),n("type","number"),a(),n("actions",t.actions));},dependencies:[I,h,g,C,N,L,T,A,D,$,G,P,b,F,v],encapsulation:2});let d=r;return d;})();var be=(()=>{let r=class r extends z{constructor(){let i=_(y);super(i),this.fb=_(O),this.data=_(R);let e=this.fb;this.dialog=i;let t=this.data;this.form=e.group({name:[t?.name??"_text1",[l.required]],type:["text",[l.required]],x:[t?.x??0,[l.required]],y:[t?.y??0,[l.required]],text:[t?.text??"",[l.required]],fontSize:[t?.fontSize??12,[l.required]],fontColor:[t?.fontColor??"#000",[l.required]]});}submit(){this.IsValid()&&this.dialog.close(this.form.value);}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template-text-field"]],standalone:!0,features:[M([]),c,S],decls:11,vars:8,consts:()=>{let i;i="\u0627\u0644\u0627\u0633\u0645";let e;e="\u0627\u0644\u0646\u0635";let t;t="\u062D\u062C\u0645 \u0627\u0644\u062E\u0637";let o;return o="Font Color",[[3,"title","subtitle","alert"],[1,"sz-form",3,"formGroup"],["formControlName","name","label",i],[1,"sz-form-row"],["formControlName","x","label","X",3,"type"],["formControlName","y","label","Y",3,"type"],["formControlName","text","label",e],["formControlName","fontSize","label",t,3,"type"],["formControlName","fontColor","label",o],[3,"actions"]];},template:function(e,t){e&1&&(s(0,"sz-ui-dialog-header",0),p(1,"mat-dialog-content")(2,"form",1),s(3,"sz-ui-form-field-input",2),p(4,"div",3),s(5,"sz-ui-form-field-input",4)(6,"sz-ui-form-field-input",5),E(),s(7,"sz-ui-form-field-input",6)(8,"sz-ui-form-field-input",7)(9,"sz-ui-form-field-input",8),E()(),s(10,"sz-ui-dialog-actions",9)),e&2&&(n("title",t.title)("subtitle",t.subtitle)("alert",t.alert()),a(2),n("formGroup",t.form),a(3),n("type","number"),a(),n("type","number"),a(2),n("type","number"),a(2),n("actions",t.actions));},dependencies:[I,h,g,C,N,L,T,A,D,$,G,P,b,F,v],encapsulation:2});let d=r;return d;})();var $e=["designer"];function Ve(d,r){if(d&1){let w=Me();p(0,"sz-mgmt-reporting-template-field",6),Se("changed",function(e){Y(w);let t=q();return j(t.fieldChanged(e));})("deleted",function(e){Y(w);let t=q();return j(t.fieldDeleted(e));}),E();}if(d&2){let w=r.$implicit,i=q();n("field",w)("scale",i.scale);}}var Ge=(()=>{let r=class r{constructor(){this.route=_(ce),this.dialog=_(Ce),this.srptService=_(x),this.snackBar=_(he),this.template=this.route.snapshot.data.template,this.alert=me(void 0),this.fields=[],this.size={width:210,height:297},this.scale=4,this.appBarConfig={title:this.template.name,subtitle:this.template.description,menu:ye.default().setItems([B.menu([B.text(this.openSaveTextFieldComponent.bind(this)),B.barcode(this.openSaveBarcodeFieldComponent.bind(this)),B.image(this.openSaveImageFieldComponent.bind(this)),B.line(this.openSaveLineFieldComponent.bind(this))])])};}ngAfterViewInit(){this.refresh();}refresh(){this.fields=this.template.content?.fields??[];}getRelativeSize(i){return i*this.scale;}openSaveTextFieldComponent(){this.dialog.open(be).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveBarcodeFieldComponent(){this.dialog.open(Fe).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveImageFieldComponent(){this.dialog.open(ze).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}openSaveLineFieldComponent(){this.dialog.open(Pe).afterClosed().subscribe(i=>{i&&(this.fields.push(i),this.save());});}fieldChanged(i){this.fields=this.fields.map(e=>e.name===i.name?i:e);}fieldDeleted(i){this.fields=this.fields.filter(e=>e.name!==i.name);}save(){this.srptService.templates.update(this.template.id,se(ae({},this.template),{content:{fields:this.fields}})).subscribe(()=>{this.snackBar.open(J.saved,J.close,{duration:5e3});});}};r.ɵfac=function(e){return new(e||r)();},r.ɵcmp=u({type:r,selectors:[["sz-mgmt-reporting-template"]],viewQuery:function(e,t){if(e&1&&U($e,5),e&2){let o;k(o=H())&&(t.designerEl=o.first);}},standalone:!0,features:[M([x]),S],decls:7,vars:6,consts:[["designer",""],[3,"config"],[3,"alert"],[1,"container"],["dir","ltr",1,"designer"],[3,"field","scale"],[3,"changed","deleted","field","scale"]],template:function(e,t){e&1&&(s(0,"sz-ui-app-bar",1)(1,"sz-ui-alert",2),p(2,"div",3)(3,"div",4,0),fe(5,Ve,1,2,"sz-mgmt-reporting-template-field",5,Ee),E()()),e&2&&(n("config",t.appBarConfig),a(),n("alert",t.alert()),a(2),pe("width",t.getRelativeSize(t.size.width),"px")("height",t.getRelativeSize(t.size.height),"px"),a(2),ue(t.fields));},dependencies:[T,ge,Q,De,Re,W,ve,Ne],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.designer[_ngcontent-%COMP%]{border:1px solid #c3c3c3;padding:10px;margin:10px;background-color:#fff;position:relative}"]});let d=r;return d;})();var li=[{path:"",component:Ge}];export{li as default};/**i18n:418516e83c39d18f4d4383e7e7094a47a2de32f450262c69abd400e2ff999647*/