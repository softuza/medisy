import{Ca as o,ya as a}from"./chunk-CN6PMKF6.js";import{q as p}from"./chunk-NQOK3G2M.js";import{M as i,a as r,b as u,w as s}from"./chunk-XEAZENSO.js";var m=class{constructor(t,e){this.http=t,this.path=e}get(t){return this.http.get(`${this.path}`,{params:new p({fromObject:o(t)})})}getAll(t){return this.get(u(r({},a.unpaged()),{request:t}))}getItems(t){return this.get(t).pipe(s(e=>e.items))}count(t){return this.get(r(r({},t),a.count())).pipe(s(e=>e.count),i(1))}getById(t){if(t===null)throw new Error("resource should not be null");return this.http.get(`${this.path}/${t}`)}create(t){return this.http.post(`${this.path}`,t)}batchCreate(t){return this.http.post(`${this.path}/batch`,t)}update(t,e){return this.http.put(`${this.path}/${t}`,e)}delete(t){return this.http.delete(`${this.path}/${t}`)}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t})}};var g=class{constructor(t,e,h){this.http=t,this.basePath=e,this.subPath=h}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new p({fromObject:o(e)})})}getAll(t){return this.get(t,r({},a.unpaged()))}getItems(t,e){return this.get(t,e).pipe(s(h=>h.items))}count(t,e){return this.get(t,r(r({},e),a.count())).pipe(s(h=>h.count),i(1))}getById(t,e){return this.http.get(`${this.getPath(t)}/${e}`)}create(t,e){return this.http.post(`${this.getPath(t)}`,e)}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e)}update(t,e,h){return this.http.put(`${this.getPath(t)}/${e}`,h)}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`)}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e})}};var c=class{constructor(t,e){this.http=t,this.basePath=e}};export{g as a,m as b,c};
/**i18n:f1993a9d8de25a460a4edd4e25b48862b3dd863aec93a795c43b451741326090*/
