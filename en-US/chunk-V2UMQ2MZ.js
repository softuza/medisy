import{a as p}from"./chunk-BBJCP4OO.js";import{a as n}from"./chunk-VZFPSQUV.js";import{r as h,s as a}from"./chunk-KA2LEAJN.js";import{ga as o,ma as s}from"./chunk-CP3NWJHY.js";var U=(()=>{let r=class r{constructor(t,e,u){this.http=e,this.identityService=u,this.environment=t}getPath(){return`${this.environment.authUrl}/admin/realms/${this.identityService.getRealm()}`}getUsers(t){return this.http.get(`${this.getPath()}/users`,{params:new h({fromObject:n(t)})})}getUserById(t){if(t===null)throw new Error("resource should not be null");return this.http.get(`${this.getPath()}/users/${t}`,{})}deleteUser(t){return this.http.delete(`${this.getPath()}/users/${t}`)}updateUser(t,e){return this.http.put(`${this.getPath()}/users/${t}`,e)}createUser(t){return this.http.post(`${this.getPath()}/users`,t)}getUserGroups(t){return this.http.get(`${this.getPath()}/users/${t}/groups`,{})}deleteUserGroup(t,e){return this.http.delete(`${this.getPath()}/users/${t}/groups/${e}`)}addUserGroup(t,e){return this.http.put(`${this.getPath()}/users/${t}/groups/${e}`,{})}getGroups(t){return this.http.get(`${this.getPath()}/groups`,{params:new h({fromObject:n(t)})})}};r.\u0275fac=function(e){return new(e||r)(s("environment"),s(a),s(p))},r.\u0275prov=o({token:r,factory:r.\u0275fac});let i=r;return i})();export{U as a};
/**i18n:a4535b3079110d8df5f5c221d1d51c34dbcd8c94b76f3a35f790ba996d6c1a07*/