import{a as c,b as s,c as p}from"./chunk-BJI27WIG.js";import{r}from"./chunk-OIZYHDJE.js";import{da as o,ja as a}from"./chunk-GTR6A7KK.js";var e=class extends s{constructor(t,h){super(t,`${h}/v1/notifications`),this.http=t,this.basePath=h,this.recipients=new c(this.http,this.path,"recipients")}},P=(()=>{let t=class t extends p{constructor(){let n=a(r);super(n,"softuza-notification"),this.notifications=new e(this.http,this.basePath),this.categories=new s(this.http,`${this.basePath}/v1/categories`),this.notificationEmails=new s(this.http,`${this.basePath}/v1/notification-emails`),this.notificationSmses=new s(this.http,`${this.basePath}/v1/notification-smses`),this.notificationPushes=new s(this.http,`${this.basePath}/v1/notification-pushes`),this.messages=new s(this.http,`${this.basePath}/v1/messages`),this.pushSubscriptions=new s(this.http,`${this.basePath}/v1/push-subscriptions`)}};t.\u0275fac=function(f){return new(f||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac});let i=t;return i})();export{P as a};
/**i18n:71c33448fc84035c6ee56f25f20b16a3c311d1f911de884d4bce9857c4574a16*/