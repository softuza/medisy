import{m,o as n}from"./chunk-E2DYYESB.js";import{q as a}from"./chunk-TT7ZQ2V6.js";import{M as p,a as h,w as i}from"./chunk-CQJO6ZYU.js";var u=class{constructor(t,e){this.http=t,this.path=e}get(t){return this.http.get(`${this.path}`,{params:new a({fromObject:n(t)})})}getItems(t){return this.get(t).pipe(i(e=>e.items))}count(t){return this.get(h(h({},t),m.count())).pipe(i(e=>e.count),p(1))}getById(t){if(t===null)throw new Error("resource should not be null");return this.http.get(`${this.path}/${t}`)}};var c=class extends u{constructor(t,e){super(t,e),this.http=t,this.path=e}create(t){return this.http.post(`${this.path}`,t)}batchCreate(t){return this.http.post(`${this.path}/batch`,t)}delete(t){return this.http.delete(`${this.path}/${t}`)}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t})}};var $=class extends c{constructor(t,e){super(t,e),this.http=t,this.path=e}update(t,e){return this.http.put(`${this.path}/${t}`,e)}};var f=class{constructor(t,e,r){this.http=t,this.basePath=e,this.subPath=r}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new a({fromObject:n(e)})})}getItems(t,e){return this.get(t,e).pipe(i(r=>r.items))}count(t,e){return this.get(t,h(h({},e),m.count())).pipe(i(r=>r.count),p(1))}getById(t,e){return this.http.get(`${this.getPath(t)}/${e}`)}};var o=class extends f{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`)}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e})}};var g=class extends o{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}create(t,e){return this.http.post(`${this.getPath(t)}`,e)}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e)}};var l=class extends g{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}update(t,e,r){return this.http.put(`${this.getPath(t)}/${e}`,r)}};var x=class extends o{constructor(t,e,r){super(t,e,r),this.http=t,this.basePath=e,this.subPath=r}update(t,e,r){return this.http.put(`${this.getPath(t)}/${e}`,r)}};export{o as a,u as b,l as c,$ as d,x as e};
/**i18n:70191478f6ac7be8bdb3241746fcd9e1f236a6362603c105af1f0a7330a6840e*/
