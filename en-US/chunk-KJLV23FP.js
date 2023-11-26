import{h as m,j as n}from"./chunk-IMYK7VY7.js";import{q as a}from"./chunk-KZIHA7KF.js";import{L as p,a as h,v as i}from"./chunk-6MBKLWBV.js";var u=class{constructor(t,e){this.http=t,this.path=e}get(t){return console.log(t),this.http.get(`${this.path}`,{params:new a({fromObject:n(t)})})}getItems(t){return this.get(t).pipe(i(e=>e.items))}count(t){return this.get(h(h({},t),m.count())).pipe(i(e=>e.count),p(1))}getById(t){return this.http.get(`${this.path}/${t}`)}};var c=class extends u{constructor(t,e){super(t,e),this.http=t,this.path=e}create(t){return this.http.post(`${this.path}`,t)}batchCreate(t){return this.http.post(`${this.path}/batch`,t)}delete(t){return this.http.delete(`${this.path}/${t}`)}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t})}};var f=class extends c{constructor(t,e){super(t,e),this.http=t,this.path=e}update(t,e){return this.http.put(`${this.path}/${t}`,e)}};var g=class{constructor(t,e,r){this.http=t,this.basePath=e,this.subPath=r}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new a({fromObject:n(e)})})}getItems(t,e){return this.get(t,e).pipe(i(r=>r.items))}count(t,e){return this.get(t,h(h({},e),m.count())).pipe(i(r=>r.count),p(1))}getById(t,e){return this.http.get(`${this.getPath(t)}/${e}`)}};var o=class extends g{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`)}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e})}};var $=class extends o{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}create(t,e){return this.http.post(`${this.getPath(t)}`,e)}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e)}};var x=class extends ${constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}update(t,e,r){return this.http.put(`${this.getPath(t)}/${e}`,r)}};var l=class extends o{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}update(t,e,r){return this.http.put(`${this.getPath(t)}/${e}`,r)}};export{o as a,u as b,x as c,f as d,l as e};
/**i18n:5ebc65b24f90b78d556a3a8c188ab6405e20b5534cf6eb00a5dd3e44f73f97d4*/
