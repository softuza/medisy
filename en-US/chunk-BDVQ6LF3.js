import{b as s}from"./chunk-BQGY2E4W.js";import{v as o}from"./chunk-LUIABQW7.js";import{r as a}from"./chunk-BSUEWO5U.js";import{Q as r,a as p,y as i}from"./chunk-PSKSSTJ7.js";var u=class{constructor(t,e,h){this.http=t,this.basePath=e,this.subPath=h}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new a({fromObject:o(e)})}).pipe(r(1))}getAll(t,e){return this.get(t,p(p({},s.unpaged()),e))}getAllItems(t,e){return this.get(t,p(p({},s.unpaged()),e)).pipe(i(h=>h.items))}getItems(t,e){return this.get(t,e).pipe(i(h=>h.items))}count(t,e){return this.get(t,p(p({},e),s.count())).pipe(i(h=>h.count))}getById(t,e){if(t===null||e===null)throw new Error("resource and sub-resource  should not be null");return this.http.get(`${this.getPath(t)}/${e}`).pipe(r(1))}create(t,e){return this.http.post(`${this.getPath(t)}`,e).pipe(r(1))}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e).pipe(r(1))}update(t,e,h){return this.http.put(`${this.getPath(t)}/${e}`,h).pipe(r(1))}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`).pipe(r(1))}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e}).pipe(r(1))}};var m=class{constructor(t,e){this.http=t,this.path=e}get(t){return this.http.get(`${this.path}`,{params:new a({fromObject:o(t)})}).pipe(r(1))}getAll(t){return this.get(p(p({},s.unpaged()),t))}getItems(t){return this.get(t).pipe(i(e=>e.items))}getFirst(t){return this.get(p(p({},s.minimal()),t)).pipe(i(e=>e.items[0]))}count(t){return this.get(p(p({},t),s.count())).pipe(i(e=>e.count))}statistic(t){return this.http.get(`${this.path}/statistic`,{params:new a({fromObject:o(t)})}).pipe(r(1))}getById(t){if(t===null)throw new Error("resource id not provided");return this.http.get(`${this.path}/${t}`).pipe(r(1))}create(t){return this.http.post(`${this.path}`,t).pipe(r(1))}batchCreate(t){return this.http.post(`${this.path}/batch`,t).pipe(r(1))}update(t,e){return this.http.put(`${this.path}/${t}`,e).pipe(r(1))}delete(t){return this.http.delete(`${this.path}/${t}`).pipe(r(1))}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t}).pipe(r(1))}};var g=class{constructor(t,e){this.http=t,this.basePath=e}};export{u as a,m as b,g as c};
/**i18n:2cc98dd3a3b5bc180bc78b3f1af50b699468d67591cd411b77ad1068c18b35e2*/
