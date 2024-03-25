import{a as p}from"./chunk-YYI2KTIZ.js";import{g as a}from"./chunk-4PE74OIY.js";import{r as i}from"./chunk-AFZEN52O.js";import{P as o,a as r,y as s}from"./chunk-HCTSIB2L.js";var u=class{constructor(t,e){this.http=t,this.path=e}get(t){return this.http.get(`${this.path}`,{params:new i({fromObject:p(t)})})}getAll(t){return this.get(r(r({},a.unpaged()),t))}getItems(t){return this.get(t).pipe(s(e=>e.items))}count(t){return this.get(r(r({},t),a.count())).pipe(s(e=>e.count),o(1))}statistic(t){return this.http.get(`${this.path}/statistic`,{params:new i({fromObject:p(t)})})}getById(t){if(t===null)throw new Error("resource should not be null");return this.http.get(`${this.path}/${t}`)}create(t){return this.http.post(`${this.path}`,t)}batchCreate(t){return this.http.post(`${this.path}/batch`,t)}update(t,e){return this.http.put(`${this.path}/${t}`,e)}delete(t){return this.http.delete(`${this.path}/${t}`)}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t})}};var m=class{constructor(t,e,h){this.http=t,this.basePath=e,this.subPath=h}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new i({fromObject:p(e)})})}getAll(t,e){return this.get(t,r(r({},a.unpaged()),e))}getItems(t,e){return this.get(t,e).pipe(s(h=>h.items))}count(t,e){return this.get(t,r(r({},e),a.count())).pipe(s(h=>h.count),o(1))}getById(t,e){if(t===null||e===null)throw new Error("resource and sub-resource  should not be null");return this.http.get(`${this.getPath(t)}/${e}`)}create(t,e){return this.http.post(`${this.getPath(t)}`,e)}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e)}update(t,e,h){return this.http.put(`${this.getPath(t)}/${e}`,h)}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`)}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e})}};var c=class{constructor(t,e){this.http=t,this.basePath=e}};export{m as a,u as b,c};
/**i18n:34a0aca9a8a7a5b54ef908b3a50021d42a3fb6a7b58cfe4980f9bcbab369501e*/
