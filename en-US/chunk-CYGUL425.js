import{a as u}from"./chunk-W4BXEIGK.js";import{a as o}from"./chunk-62HUTBRW.js";import{r as h,s as n}from"./chunk-APP24JVE.js";import{ga as p,ma as s}from"./chunk-JGYGEXT3.js";var U=(()=>{let r=class r{constructor(t,e,a){this.http=e,this.identityService=a,this.environment=t}getPath(){return`${this.environment.authUrl}/admin/realms/${this.identityService.getRealm()}`}getUsers(t){return this.http.get(`${this.getPath()}/users`,{params:new h({fromObject:o(t)})})}getUserById(t){if(t===null)throw new Error("resource should not be null");return this.http.get(`${this.getPath()}/users/${t}`,{})}deleteUser(t){return this.http.delete(`${this.getPath()}/users/${t}`)}updateUser(t,e){return this.http.put(`${this.getPath()}/users/${t}`,e)}createUser(t){return this.http.post(`${this.getPath()}/users`,t)}getUserGroups(t){return this.http.get(`${this.getPath()}/users/${t}/groups`,{})}deleteUserGroup(t,e){return this.http.delete(`${this.getPath()}/users/${t}/groups/${e}`)}addUserGroup(t,e){return this.http.put(`${this.getPath()}/users/${t}/groups/${e}`,{})}getGroups(t){return this.http.get(`${this.getPath()}/groups`,{params:new h({fromObject:o(t)})})}createGroup(t){return this.http.post(`${this.getPath()}/groups`,t)}updateGroup(t,e){return this.http.put(`${this.getPath()}/groups/${t}`,e)}deleteGroup(t){return this.http.delete(`${this.getPath()}/groups/${t}`)}};r.\u0275fac=function(e){return new(e||r)(s("environment"),s(n),s(u))},r.\u0275prov=p({token:r,factory:r.\u0275fac});let i=r;return i})();export{U as a};
/**i18n:11179f1ca69a91f436c039c9a11e363a0ecb69e8d87770d6645a29cc593212ec*/
