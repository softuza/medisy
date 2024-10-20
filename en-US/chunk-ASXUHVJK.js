import{c as s}from"./chunk-GCAF7ZOT.js";import{z as n}from"./chunk-VFFUX6UX.js";import{q as a}from"./chunk-BKKXZCD4.js";import{K as r,s as i}from"./chunk-5UGT7ICT.js";import{a as p}from"./chunk-KKIINILB.js";var u=class{constructor(t,e,h){this.http=t,this.basePath=e,this.subPath=h}getPath(t){return`${this.basePath}/${t}/${this.subPath}`}get(t,e){return this.http.get(`${this.getPath(t)}`,{params:new a({fromObject:n(e)})}).pipe(r(1))}getAll(t,e){return this.get(t,p(p({},s.unpaged()),e))}getAllItems(t,e){return this.get(t,p(p({},s.unpaged()),e)).pipe(i(h=>h.items))}getItems(t,e){return this.get(t,e).pipe(i(h=>h.items))}count(t,e){return this.get(t,p(p({},e),s.count())).pipe(i(h=>h.count))}getById(t,e){if(t===null||e===null)throw new Error("resource and sub-resource  should not be null");return this.http.get(`${this.getPath(t)}/${e}`).pipe(r(1))}create(t,e){return this.http.post(`${this.getPath(t)}`,e).pipe(r(1))}batchCreate(t,e){return this.http.post(`${this.getPath(t)}/batch`,e).pipe(r(1))}update(t,e,h){return this.http.put(`${this.getPath(t)}/${e}`,h).pipe(r(1))}delete(t,e){return this.http.delete(`${this.getPath(t)}/${e}`).pipe(r(1))}batchDelete(t,e){return this.http.delete(`${this.getPath(t)}/batch`,{body:e}).pipe(r(1))}};var m=class{pipe(t,e){throw new Error("Method not implemented.")}constructor(t,e){this.http=t,this.path=e}get(t){return this.http.get(`${this.path}`,{params:new a({fromObject:n(t)})}).pipe(r(1))}getAll(t){return this.get(p(p({},s.unpaged()),t))}getItems(t){return this.get(t).pipe(i(e=>e.items))}getAllItems(t){return this.get(p(p({},s.unpaged()),t)).pipe(i(e=>e.items))}getFirst(t){return this.get(p(p({},s.minimal()),t)).pipe(i(e=>e.items[0]))}count(t){return this.get(p(p({},t),s.count())).pipe(i(e=>e.count))}statistic(t){return this.http.get(`${this.path}/statistic`,{params:new a({fromObject:n(t)})}).pipe(r(1))}getById(t){if(t===null)throw new Error("resource id not provided");return this.http.get(`${this.path}/${t}`).pipe(r(1))}create(t){return this.http.post(`${this.path}`,t).pipe(r(1))}batchCreate(t){return this.http.post(`${this.path}/batch`,t).pipe(r(1))}update(t,e){return this.http.put(`${this.path}/${t}`,e).pipe(r(1))}delete(t){return this.http.delete(`${this.path}/${t}`).pipe(r(1))}batchDelete(t){return this.http.delete(`${this.path}/batch`,{body:t}).pipe(r(1))}getPath(){return this.path}};var g=class{constructor(t,e){this.http=t,this.basePath=e}};export{u as a,m as b,g as c};
/**i18n:52dae1015fb4dcd24d02f3b60578855a39e5cc5be32446a479305eae917c802c*/