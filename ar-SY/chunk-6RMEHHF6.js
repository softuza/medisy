import{xa as a}from"./chunk-XJDYJDV7.js";var u=(()=>{let t=class t{transform(e){if(!e)return"";let r=new Date(),s=new Date(e),i=~~((r.getTime()-s.getTime())/1e3/3600),o=~~(i/24),c=~~(o/7),m=~~(o/30),l=~~(r.getUTCFullYear()-s.getUTCFullYear());return l>0?`${l} `+"\u0633\u0646\u0629":m>0?`${m} `+"\u0634\u0647\u0631":c>0?`${c} `+"\u0623\u0633\u0628\u0648\u0639":o>0?`${o} `+"\u064A\u0648\u0645":i>0?`${i} `+"\u0633\u0627\u0639\u0629":"";}};t.ɵfac=function(r){return new(r||t)();},t.ɵpipe=a({name:"personAge",type:t,pure:!0,standalone:!0});let n=t;return n;})();var h=(()=>{let t=class t{transform(e,r=!1){if(!e||typeof e=="string")return"";if(!e.names||e.names.length===0)return`${e.id}`;let s=e.names[0].firstName,f=e.names[0].lastName,i=f?`${s} ${f}`:`${s}`;return r&&e.birthDate?`${+new Date()-+e.birthDate}`:i;}};t.ɵfac=function(r){return new(r||t)();},t.ɵpipe=a({name:"personName",type:t,pure:!0,standalone:!0});let n=t;return n;})();export{u as a,h as b};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/