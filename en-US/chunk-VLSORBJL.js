import{j as p,z as m}from"./chunk-H22FBATM.js";import{$ as s,Z as n,db as c,hb as a,k as h,kb as l,na as i}from"./chunk-M2QTEBXZ.js";var u=(()=>{let e=class e{constructor(){this.szThresholdPercent=.8,this.szScrollIgnored=!1,this.szScrolled=new a,this._onDestroy=new h}onScroll(t){if(!this.szScrollIgnored)if(this.szThresholdPercent===void 0)this.szScrolled.next();else{let o=this.szThresholdPercent*100*t.target.scrollHeight/100;t.target.scrollTop+t.target.clientHeight>o&&this.szScrolled.next()}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=i({type:e,inputs:{szThresholdPercent:"szThresholdPercent",szScrollIgnored:"szScrollIgnored"},outputs:{szScrolled:"szScrolled"}});let r=e;return r})(),L=(()=>{let e=class e extends u{constructor(t){super(),this.component=t,this.component.opened.pipe(s(()=>{setTimeout(()=>{this.removeScrollEventListener(),this.component.panel.nativeElement.addEventListener("scroll",this.onScroll.bind(this))})}),n(this._onDestroy)).subscribe(),this.component.closed.pipe(s(()=>this.removeScrollEventListener()),n(this._onDestroy)).subscribe()}removeScrollEventListener(){let t=this.component?.panel?.nativeElement;t&&t.removeEventListener("scroll",this.onScroll)}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}};e.\u0275fac=function(o){return new(o||e)(c(p))},e.\u0275dir=i({type:e,selectors:[["mat-autocomplete","szScrolled",""]],standalone:!0,features:[l]});let r=e;return r})(),b=(()=>{let e=class e extends u{constructor(t){super(),this.component=t,this.component.openedChange.pipe(s(()=>{setTimeout(()=>{this.removeScrollEventListener();let o=this.component?.panel?.nativeElement;o&&o.addEventListener("scroll",this.onScroll.bind(this))})}),n(this._onDestroy)).subscribe()}removeScrollEventListener(){let t=this.component?.panel?.nativeElement;t&&t.removeEventListener("scroll",this.onScroll.bind(this))}ngOnDestroy(){this._onDestroy.next(!0),this._onDestroy.complete(),this.removeScrollEventListener()}};e.\u0275fac=function(o){return new(o||e)(c(m))},e.\u0275dir=i({type:e,selectors:[["mat-select","szScrolled",""]],standalone:!0,features:[l]});let r=e;return r})();export{L as a,b};
/**i18n:57d51d98a1caf33655ef4bd810bc01e640b40122eced811536cfa6d9191b03b1*/