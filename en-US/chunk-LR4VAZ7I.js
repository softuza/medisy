import{qa as a}from"./chunk-JPONW3XL.js";var $=(()=>{let t=class t{transform(e,n){if(!e)return;let i=l(e);if(!i)return;let s=new Date(),f=new Date(e),o=~~(i/24),c=~~(o/7),m=~~(o/30),u=~~(s.getUTCFullYear()-f.getUTCFullYear());if(u>0)return`${u} `+(n?"Y":"Year");if(m>0)return`${m} `+(n?"M":"Month");if(c>0)return`${c} `+(n?"W":"Week");if(o>0)return`${o} `+(n?"D":"Day");if(i>0)return`${i} `+(n?"H":"Hour");}};t.ɵfac=function(n){return new(n||t)();},t.ɵpipe=a({name:"personAge",type:t,pure:!0,standalone:!0});let r=t;return r;})();function l(r){if(!r)return;let t=new Date(r);return~~((new Date().getTime()-t.getTime())/1e3/3600);}var D=(()=>{let t=class t{transform(e,n=!1){if(!e||typeof e=="string")return"";if(!e.names||e.names.length===0)return`${e.id}`;let i=e.names[0].firstName,s=e.names[0].lastName,f=s?`${i} ${s}`:`${i}`;return n&&e.birthDate?`${+new Date()-+e.birthDate}`:f;}};t.ɵfac=function(n){return new(n||t)();},t.ɵpipe=a({name:"personName",type:t,pure:!0,standalone:!0});let r=t;return r;})();export{$ as a,D as b};/**i18n:490604af3307a4e77c84ca293db1067566ffe2bc083ef2e1368fbd6dc8c217fd*/