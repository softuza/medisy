import{xa as a}from"./chunk-HXKYWGD2.js";var d=(()=>{let t=class t{transform(e){if(!e)return;let n=p(e);if(!n)return;let s=new Date(),o=new Date(e),i=~~(n/24),f=~~(i/7),c=~~(i/30),m=~~(s.getUTCFullYear()-o.getUTCFullYear());if(m>0)return`${m} `+"Year";if(c>0)return`${c} `+"Month";if(f>0)return`${f} `+"Week";if(i>0)return`${i} `+"Day";if(n>0)return`${n} `+"Hour";}};t.ɵfac=function(n){return new(n||t)();},t.ɵpipe=a({name:"personAge",type:t,pure:!0,standalone:!0});let r=t;return r;})();function p(r){if(!r)return;let t=new Date(r);return~~((new Date().getTime()-t.getTime())/1e3/3600);}var h=(()=>{let t=class t{transform(e,n=!1){if(!e||typeof e=="string")return"";if(!e.names||e.names.length===0)return`${e.id}`;let s=e.names[0].firstName,o=e.names[0].lastName,i=o?`${s} ${o}`:`${s}`;return n&&e.birthDate?`${+new Date()-+e.birthDate}`:i;}};t.ɵfac=function(n){return new(n||t)();},t.ɵpipe=a({name:"personName",type:t,pure:!0,standalone:!0});let r=t;return r;})();export{d as a,p as b,h as c};/**i18n:16b060cd78820ad434cadcf06c146ea03505a76210f247eb6a3abe146386bf6b*/