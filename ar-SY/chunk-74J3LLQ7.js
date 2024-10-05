import{r as W,z as O}from"./chunk-BN5OIF3Q.js";import{e as q,q as z,r as x}from"./chunk-OMSMEPHM.js";import{K as b,da as A,ja as T}from"./chunk-O34SSFLY.js";import{i as w}from"./chunk-QEH2RDWU.js";var G=(()=>{let e=class e{};e.Users="iam/users",e.User="iam/users/:userId",e.Groups="iam/groups",e.Group="iam/groups/:groupId",e.login="auth/login",e.logout="auth/logout";let h=e;return h})();function Z(h){if(!(this instanceof Z))throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");if(typeof h!="string"&&!Q(h))throw new Error("The 'Keycloak' constructor must be provided with a configuration object, or a URL to a JSON configuration file.");if(Q(h)){let r="oidcProvider"in h?["clientId"]:["url","realm","clientId"];for(let t of r)if(!h[t])throw new Error(`The configuration object is missing the required '${t}' property.`)}var e=this,g,l=[],m,p={enable:!0,callbackList:[],interval:5};e.didInitialize=!1;var M=!0,_=X(console.info),$=X(console.warn);globalThis.isSecureContext||$(`[KEYCLOAK] Keycloak JS must be used in a 'secure context' to function properly as it relies on browser APIs that are otherwise not available.
Continuing to run your application insecurely will lead to unexpected behavior and breakage.

For more information see: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts`),e.init=function(r){if(e.didInitialize)throw new Error("A 'Keycloak' instance can only be initialized once.");e.didInitialize=!0,e.authenticated=!1,m=fe();var t=["default","cordova","cordova-native"];if(r&&t.indexOf(r.adapter)>-1?g=K(r.adapter):r&&typeof r.adapter=="object"?g=r.adapter:window.Cordova||window.cordova?g=K("cordova"):g=K(),r){if(typeof r.useNonce<"u"&&(M=r.useNonce),typeof r.checkLoginIframe<"u"&&(p.enable=r.checkLoginIframe),r.checkLoginIframeInterval&&(p.interval=r.checkLoginIframeInterval),r.onLoad==="login-required"&&(e.loginRequired=!0),r.responseMode)if(r.responseMode==="query"||r.responseMode==="fragment")e.responseMode=r.responseMode;else throw"Invalid value for responseMode";if(r.flow){switch(r.flow){case"standard":e.responseType="code";break;case"implicit":e.responseType="id_token token";break;case"hybrid":e.responseType="code id_token token";break;default:throw"Invalid value for flow"}e.flow=r.flow}if(r.timeSkew!=null&&(e.timeSkew=r.timeSkew),r.redirectUri&&(e.redirectUri=r.redirectUri),r.silentCheckSsoRedirectUri&&(e.silentCheckSsoRedirectUri=r.silentCheckSsoRedirectUri),typeof r.silentCheckSsoFallback=="boolean"?e.silentCheckSsoFallback=r.silentCheckSsoFallback:e.silentCheckSsoFallback=!0,typeof r.pkceMethod<"u"){if(r.pkceMethod!=="S256"&&r.pkceMethod!==!1)throw new TypeError(`Invalid value for pkceMethod', expected 'S256' or false but got ${r.pkceMethod}.`);e.pkceMethod=r.pkceMethod}else e.pkceMethod="S256";typeof r.enableLogging=="boolean"?e.enableLogging=r.enableLogging:e.enableLogging=!1,r.logoutMethod==="POST"?e.logoutMethod="POST":e.logoutMethod="GET",typeof r.scope=="string"&&(e.scope=r.scope),typeof r.acrValues=="string"&&(e.acrValues=r.acrValues),typeof r.messageReceiveTimeout=="number"&&r.messageReceiveTimeout>0?e.messageReceiveTimeout=r.messageReceiveTimeout:e.messageReceiveTimeout=1e4}e.responseMode||(e.responseMode="fragment"),e.responseType||(e.responseType="code",e.flow="standard");var i=v(),s=v();s.promise.then(function(){e.onReady&&e.onReady(e.authenticated),i.setSuccess(e.authenticated)}).catch(function(o){i.setError(o)});var a=ce();function c(){var o=function(f){f||(d.prompt="none"),r&&r.locale&&(d.locale=r.locale),e.login(d).then(function(){s.setSuccess()}).catch(function(k){s.setError(k)})},u=function(){return w(this,null,function*(){var f=document.createElement("iframe"),k=yield e.createLoginUrl({prompt:"none",redirectUri:e.silentCheckSsoRedirectUri});f.setAttribute("src",k),f.setAttribute("sandbox","allow-storage-access-by-user-activation allow-scripts allow-same-origin"),f.setAttribute("title","keycloak-silent-check-sso"),f.style.display="none",document.body.appendChild(f);var U=function(I){if(!(I.origin!==window.location.origin||f.contentWindow!==I.source)){var y=E(I.data);C(y,s),document.body.removeChild(f),window.removeEventListener("message",U)}};window.addEventListener("message",U)})},d={};switch(r.onLoad){case"check-sso":p.enable?H().then(function(){R().then(function(f){f?s.setSuccess():e.silentCheckSsoRedirectUri?u():o(!1)}).catch(function(f){s.setError(f)})}):e.silentCheckSsoRedirectUri?u():o(!1);break;case"login-required":o(!0);break;default:throw"Invalid value for onLoad"}}function n(){var o=E(window.location.href);if(o&&window.history.replaceState(window.history.state,null,o.newUrl),o&&o.valid)return H().then(function(){C(o,s)}).catch(function(u){s.setError(u)});r?r.token&&r.refreshToken?(L(r.token,r.refreshToken,r.idToken),p.enable?H().then(function(){R().then(function(u){u?(e.onAuthSuccess&&e.onAuthSuccess(),s.setSuccess(),N()):s.setSuccess()}).catch(function(u){s.setError(u)})}):e.updateToken(-1).then(function(){e.onAuthSuccess&&e.onAuthSuccess(),s.setSuccess()}).catch(function(u){e.onAuthError&&e.onAuthError(),r.onLoad?c():s.setError(u)})):r.onLoad?c():s.setSuccess():s.setSuccess()}return a.then(function(){de().then(n).catch(function(o){i.setError(o)})}),a.catch(function(o){i.setError(o)}),i.promise},e.login=function(r){return g.login(r)};function te(r){if(typeof crypto>"u"||typeof crypto.getRandomValues>"u")throw new Error("Web Crypto API is not available.");return crypto.getRandomValues(new Uint8Array(r))}function ne(r){return oe(r,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")}function oe(r,t){for(var i=te(r),s=new Array(r),a=0;a<r;a++)s[a]=t.charCodeAt(i[a]%t.length);return String.fromCharCode.apply(null,s)}function ae(r,t){return w(this,null,function*(){if(r!=="S256")throw new TypeError(`Invalid value for 'pkceMethod', expected 'S256' but got '${r}'.`);let i=new Uint8Array(yield pe(t));return he(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")})}function se(r){var t={id_token:{acr:r}};return JSON.stringify(t)}e.createLoginUrl=function(r){return w(this,null,function*(){var t=F(),i=F(),s=g.redirectUri(r),a={state:t,nonce:i,redirectUri:encodeURIComponent(s),loginOptions:r};r&&r.prompt&&(a.prompt=r.prompt);var c;r&&r.action=="register"?c=e.endpoints.register():c=e.endpoints.authorize();var n=r&&r.scope||e.scope;n?n.indexOf("openid")===-1&&(n="openid "+n):n="openid";var o=c+"?client_id="+encodeURIComponent(e.clientId)+"&redirect_uri="+encodeURIComponent(s)+"&state="+encodeURIComponent(t)+"&response_mode="+encodeURIComponent(e.responseMode)+"&response_type="+encodeURIComponent(e.responseType)+"&scope="+encodeURIComponent(n);if(M&&(o=o+"&nonce="+encodeURIComponent(i)),r&&r.prompt&&(o+="&prompt="+encodeURIComponent(r.prompt)),r&&typeof r.maxAge=="number"&&(o+="&max_age="+encodeURIComponent(r.maxAge)),r&&r.loginHint&&(o+="&login_hint="+encodeURIComponent(r.loginHint)),r&&r.idpHint&&(o+="&kc_idp_hint="+encodeURIComponent(r.idpHint)),r&&r.action&&r.action!="register"&&(o+="&kc_action="+encodeURIComponent(r.action)),r&&r.locale&&(o+="&ui_locales="+encodeURIComponent(r.locale)),r&&r.acr){var u=se(r.acr);o+="&claims="+encodeURIComponent(u)}if((r&&r.acrValues||e.acrValues)&&(o+="&acr_values="+encodeURIComponent(r.acrValues||e.acrValues)),e.pkceMethod)try{let d=ne(96),f=yield ae(e.pkceMethod,d);a.pkceCodeVerifier=d,o+="&code_challenge="+f,o+="&code_challenge_method="+e.pkceMethod}catch(d){throw new Error("Failed to generate PKCE challenge.",{cause:d})}return m.add(a),o})},e.logout=function(r){return g.logout(r)},e.createLogoutUrl=function(r){if((r?.logoutMethod??e.logoutMethod)==="POST")return e.endpoints.logout();var i=e.endpoints.logout()+"?client_id="+encodeURIComponent(e.clientId)+"&post_logout_redirect_uri="+encodeURIComponent(g.redirectUri(r,!1));return e.idToken&&(i+="&id_token_hint="+encodeURIComponent(e.idToken)),i},e.register=function(r){return g.register(r)},e.createRegisterUrl=function(r){return w(this,null,function*(){return r||(r={}),r.action="register",yield e.createLoginUrl(r)})},e.createAccountUrl=function(r){var t=S(),i=void 0;return typeof t<"u"&&(i=t+"/account?referrer="+encodeURIComponent(e.clientId)+"&referrer_uri="+encodeURIComponent(g.redirectUri(r))),i},e.accountManagement=function(){return g.accountManagement()},e.hasRealmRole=function(r){var t=e.realmAccess;return!!t&&t.roles.indexOf(r)>=0},e.hasResourceRole=function(r,t){if(!e.resourceAccess)return!1;var i=e.resourceAccess[t||e.clientId];return!!i&&i.roles.indexOf(r)>=0},e.loadUserProfile=function(){var r=S()+"/account",t=new XMLHttpRequest;t.open("GET",r,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+e.token);var i=v();return t.onreadystatechange=function(){t.readyState==4&&(t.status==200?(e.profile=JSON.parse(t.responseText),i.setSuccess(e.profile)):i.setError())},t.send(),i.promise},e.loadUserInfo=function(){var r=e.endpoints.userinfo(),t=new XMLHttpRequest;t.open("GET",r,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+e.token);var i=v();return t.onreadystatechange=function(){t.readyState==4&&(t.status==200?(e.userInfo=JSON.parse(t.responseText),i.setSuccess(e.userInfo)):i.setError())},t.send(),i.promise},e.isTokenExpired=function(r){if(!e.tokenParsed||!e.refreshToken&&e.flow!="implicit")throw"Not authenticated";if(e.timeSkew==null)return _("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),!0;var t=e.tokenParsed.exp-Math.ceil(new Date().getTime()/1e3)+e.timeSkew;if(r){if(isNaN(r))throw"Invalid minValidity";t-=r}return t<0},e.updateToken=function(r){var t=v();if(!e.refreshToken)return t.setError(),t.promise;r=r||5;var i=function(){var a=!1;if(r==-1?(a=!0,_("[KEYCLOAK] Refreshing token: forced refresh")):(!e.tokenParsed||e.isTokenExpired(r))&&(a=!0,_("[KEYCLOAK] Refreshing token: token expired")),!a)t.setSuccess(!1);else{var c="grant_type=refresh_token&refresh_token="+e.refreshToken,n=e.endpoints.token();if(l.push(t),l.length==1){var o=new XMLHttpRequest;o.open("POST",n,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.withCredentials=!0,c+="&client_id="+encodeURIComponent(e.clientId);var u=new Date().getTime();o.onreadystatechange=function(){if(o.readyState==4)if(o.status==200){_("[KEYCLOAK] Token refreshed"),u=(u+new Date().getTime())/2;var d=JSON.parse(o.responseText);L(d.access_token,d.refresh_token,d.id_token,u),e.onAuthRefreshSuccess&&e.onAuthRefreshSuccess();for(var f=l.pop();f!=null;f=l.pop())f.setSuccess(!0)}else{$("[KEYCLOAK] Failed to refresh token"),o.status==400&&e.clearToken(),e.onAuthRefreshError&&e.onAuthRefreshError();for(var f=l.pop();f!=null;f=l.pop())f.setError(!0)}},o.send(c)}}};if(p.enable){var s=R();s.then(function(){i()}).catch(function(a){t.setError(a)})}else i();return t.promise},e.clearToken=function(){e.token&&(L(null,null,null),e.onAuthLogout&&e.onAuthLogout(),e.loginRequired&&e.login())};function S(){if(typeof e.authServerUrl<"u")return e.authServerUrl.charAt(e.authServerUrl.length-1)=="/"?e.authServerUrl+"realms/"+encodeURIComponent(e.realm):e.authServerUrl+"/realms/"+encodeURIComponent(e.realm)}function ie(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}function C(r,t){var i=r.code,s=r.error,a=r.prompt,c=new Date().getTime();if(r.kc_action_status&&e.onActionUpdate&&e.onActionUpdate(r.kc_action_status,r.kc_action),s){if(a!="none")if(r.error_description&&r.error_description==="authentication_expired")e.login(r.loginOptions);else{var n={error:s,error_description:r.error_description};e.onAuthError&&e.onAuthError(n),t&&t.setError(n)}else t&&t.setSuccess();return}else e.flow!="standard"&&(r.access_token||r.id_token)&&f(r.access_token,null,r.id_token,!0);if(e.flow!="implicit"&&i){var o="code="+i+"&grant_type=authorization_code",u=e.endpoints.token(),d=new XMLHttpRequest;d.open("POST",u,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o+="&client_id="+encodeURIComponent(e.clientId),o+="&redirect_uri="+r.redirectUri,r.pkceCodeVerifier&&(o+="&code_verifier="+r.pkceCodeVerifier),d.withCredentials=!0,d.onreadystatechange=function(){if(d.readyState==4)if(d.status==200){var k=JSON.parse(d.responseText);f(k.access_token,k.refresh_token,k.id_token,e.flow==="standard"),N()}else e.onAuthError&&e.onAuthError(),t&&t.setError()},d.send(o)}function f(k,U,I,y){c=(c+new Date().getTime())/2,L(k,U,I,c),M&&e.idTokenParsed&&e.idTokenParsed.nonce!=r.storedNonce?(_("[KEYCLOAK] Invalid nonce, clearing token"),e.clearToken(),t&&t.setError()):y&&(e.onAuthSuccess&&e.onAuthSuccess(),t&&t.setSuccess())}}function ce(){var r=v(),t;typeof h=="string"&&(t=h);function i(n){n?e.endpoints={authorize:function(){return n.authorization_endpoint},token:function(){return n.token_endpoint},logout:function(){if(!n.end_session_endpoint)throw"Not supported by the OIDC server";return n.end_session_endpoint},checkSessionIframe:function(){if(!n.check_session_iframe)throw"Not supported by the OIDC server";return n.check_session_iframe},register:function(){throw'Redirection to "Register user" page not supported in standard OIDC mode'},userinfo:function(){if(!n.userinfo_endpoint)throw"Not supported by the OIDC server";return n.userinfo_endpoint}}:e.endpoints={authorize:function(){return S()+"/protocol/openid-connect/auth"},token:function(){return S()+"/protocol/openid-connect/token"},logout:function(){return S()+"/protocol/openid-connect/logout"},checkSessionIframe:function(){return S()+"/protocol/openid-connect/login-status-iframe.html"},thirdPartyCookiesIframe:function(){return S()+"/protocol/openid-connect/3p-cookies/step1.html"},register:function(){return S()+"/protocol/openid-connect/registrations"},userinfo:function(){return S()+"/protocol/openid-connect/userinfo"}}}if(t){var s=new XMLHttpRequest;s.open("GET",t,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){if(s.readyState==4)if(s.status==200||B(s)){var n=JSON.parse(s.responseText);e.authServerUrl=n["auth-server-url"],e.realm=n.realm,e.clientId=n.resource,i(null),r.setSuccess()}else r.setError()},s.send()}else{e.clientId=h.clientId;var a=h.oidcProvider;if(!a)e.authServerUrl=h.url,e.realm=h.realm,i(null),r.setSuccess();else if(typeof a=="string"){var c;a.charAt(a.length-1)=="/"?c=a+".well-known/openid-configuration":c=a+"/.well-known/openid-configuration";var s=new XMLHttpRequest;s.open("GET",c,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){if(s.readyState==4)if(s.status==200||B(s)){var o=JSON.parse(s.responseText);i(o),r.setSuccess()}else r.setError()},s.send()}else i(a),r.setSuccess()}return r.promise}function B(r){return r.status==0&&r.responseText&&r.responseURL.startsWith("file:")}function L(r,t,i,s){if(e.tokenTimeoutHandle&&(clearTimeout(e.tokenTimeoutHandle),e.tokenTimeoutHandle=null),t?(e.refreshToken=t,e.refreshTokenParsed=V(t)):(delete e.refreshToken,delete e.refreshTokenParsed),i?(e.idToken=i,e.idTokenParsed=V(i)):(delete e.idToken,delete e.idTokenParsed),r){if(e.token=r,e.tokenParsed=V(r),e.sessionId=e.tokenParsed.sid,e.authenticated=!0,e.subject=e.tokenParsed.sub,e.realmAccess=e.tokenParsed.realm_access,e.resourceAccess=e.tokenParsed.resource_access,s&&(e.timeSkew=Math.floor(s/1e3)-e.tokenParsed.iat),e.timeSkew!=null&&(_("[KEYCLOAK] Estimated time difference between browser and server is "+e.timeSkew+" seconds"),e.onTokenExpired)){var a=(e.tokenParsed.exp-new Date().getTime()/1e3+e.timeSkew)*1e3;_("[KEYCLOAK] Token expires in "+Math.round(a/1e3)+" s"),a<=0?e.onTokenExpired():e.tokenTimeoutHandle=setTimeout(e.onTokenExpired,a)}}else delete e.token,delete e.tokenParsed,delete e.subject,delete e.realmAccess,delete e.resourceAccess,e.authenticated=!1}function F(){if(typeof crypto>"u"||typeof crypto.randomUUID>"u")throw new Error("Web Crypto API is not available.");return crypto.randomUUID()}function E(r){var t=le(r);if(t){var i=m.get(t.state);return i&&(t.valid=!0,t.redirectUri=i.redirectUri,t.storedNonce=i.nonce,t.prompt=i.prompt,t.pkceCodeVerifier=i.pkceCodeVerifier,t.loginOptions=i.loginOptions),t}}function le(r){var t;switch(e.flow){case"standard":t=["code","state","session_state","kc_action_status","kc_action","iss"];break;case"implicit":t=["access_token","token_type","id_token","state","session_state","expires_in","kc_action_status","kc_action","iss"];break;case"hybrid":t=["access_token","token_type","id_token","code","state","session_state","expires_in","kc_action_status","kc_action","iss"];break}t.push("error"),t.push("error_description"),t.push("error_uri");var i=r.indexOf("?"),s=r.indexOf("#"),a,c;if(e.responseMode==="query"&&i!==-1?(a=r.substring(0,i),c=Y(r.substring(i+1,s!==-1?s:r.length),t),c.paramsString!==""&&(a+="?"+c.paramsString),s!==-1&&(a+=r.substring(s))):e.responseMode==="fragment"&&s!==-1&&(a=r.substring(0,s),c=Y(r.substring(s+1),t),c.paramsString!==""&&(a+="#"+c.paramsString)),c&&c.oauthParams){if(e.flow==="standard"||e.flow==="hybrid"){if((c.oauthParams.code||c.oauthParams.error)&&c.oauthParams.state)return c.oauthParams.newUrl=a,c.oauthParams}else if(e.flow==="implicit"&&(c.oauthParams.access_token||c.oauthParams.error)&&c.oauthParams.state)return c.oauthParams.newUrl=a,c.oauthParams}}function Y(r,t){for(var i=r.split("&"),s={paramsString:"",oauthParams:{}},a=0;a<i.length;a++){var c=i[a].indexOf("="),n=i[a].slice(0,c);t.indexOf(n)!==-1?s.oauthParams[n]=i[a].slice(c+1):(s.paramsString!==""&&(s.paramsString+="&"),s.paramsString+=i[a])}return s}function v(){var r={setSuccess:function(t){r.resolve(t)},setError:function(t){r.reject(t)}};return r.promise=new Promise(function(t,i){r.resolve=t,r.reject=i}),r}function ue(r,t,i){var s=null,a=new Promise(function(c,n){s=setTimeout(function(){n({error:i||"Promise is not settled within timeout of "+t+"ms"})},t)});return Promise.race([r,a]).finally(function(){clearTimeout(s)})}function H(){var r=v();if(!p.enable||p.iframe)return r.setSuccess(),r.promise;var t=document.createElement("iframe");p.iframe=t,t.onload=function(){var a=e.endpoints.authorize();a.charAt(0)==="/"?p.iframeOrigin=ie():p.iframeOrigin=a.substring(0,a.indexOf("/",8)),r.setSuccess()};var i=e.endpoints.checkSessionIframe();t.setAttribute("src",i),t.setAttribute("sandbox","allow-storage-access-by-user-activation allow-scripts allow-same-origin"),t.setAttribute("title","keycloak-session-iframe"),t.style.display="none",document.body.appendChild(t);var s=function(a){if(!(a.origin!==p.iframeOrigin||p.iframe.contentWindow!==a.source)&&(a.data=="unchanged"||a.data=="changed"||a.data=="error")){a.data!="unchanged"&&e.clearToken();for(var c=p.callbackList.splice(0,p.callbackList.length),n=c.length-1;n>=0;--n){var o=c[n];a.data=="error"?o.setError():o.setSuccess(a.data=="unchanged")}}};return window.addEventListener("message",s,!1),r.promise}function N(){p.enable&&e.token&&setTimeout(function(){R().then(function(r){r&&N()})},p.interval*1e3)}function R(){var r=v();if(p.iframe&&p.iframeOrigin){var t=e.clientId+" "+(e.sessionId?e.sessionId:"");p.callbackList.push(r);var i=p.iframeOrigin;p.callbackList.length==1&&p.iframe.contentWindow.postMessage(t,i)}else r.setSuccess();return r.promise}function de(){var r=v();if(p.enable||e.silentCheckSsoRedirectUri){var t=document.createElement("iframe");t.setAttribute("src",e.endpoints.thirdPartyCookiesIframe()),t.setAttribute("sandbox","allow-storage-access-by-user-activation allow-scripts allow-same-origin"),t.setAttribute("title","keycloak-3p-check-iframe"),t.style.display="none",document.body.appendChild(t);var i=function(s){t.contentWindow===s.source&&(s.data!=="supported"&&s.data!=="unsupported"||(s.data==="unsupported"&&($(`[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:

 - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).
 - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).

For more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers`),p.enable=!1,e.silentCheckSsoFallback&&(e.silentCheckSsoRedirectUri=!1)),document.body.removeChild(t),window.removeEventListener("message",i),r.setSuccess()))};window.addEventListener("message",i,!1)}else r.setSuccess();return ue(r.promise,e.messageReceiveTimeout,"Timeout when waiting for 3rd party check iframe message.")}function K(r){if(!r||r=="default")return{login:function(n){return w(this,null,function*(){return window.location.assign(yield e.createLoginUrl(n)),v().promise})},logout:function(n){return w(this,null,function*(){if((n?.logoutMethod??e.logoutMethod)==="GET"){window.location.replace(e.createLogoutUrl(n));return}let u=e.createLogoutUrl(n),d=yield fetch(u,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({id_token_hint:e.idToken,client_id:e.clientId,post_logout_redirect_uri:g.redirectUri(n,!1)})});if(d.redirected){window.location.href=d.url;return}if(d.ok){window.location.reload();return}throw new Error("Logout failed, request returned an error code.")})},register:function(n){return window.location.assign(e.createRegisterUrl(n)),v().promise},accountManagement:function(){var n=e.createAccountUrl();if(typeof n<"u")window.location.href=n;else throw"Not supported by the OIDC server";return v().promise},redirectUri:function(n,o){return arguments.length==1&&(o=!0),n&&n.redirectUri?n.redirectUri:e.redirectUri?e.redirectUri:location.href}};if(r=="cordova"){p.enable=!1;var t=function(n,o,u){return window.cordova&&window.cordova.InAppBrowser?window.cordova.InAppBrowser.open(n,o,u):window.open(n,o,u)},i=function(n){return n&&n.cordovaOptions?Object.keys(n.cordovaOptions).reduce(function(o,u){return o[u]=n.cordovaOptions[u],o},{}):{}},s=function(n){return Object.keys(n).reduce(function(o,u){return o.push(u+"="+n[u]),o},[]).join(",")},a=function(n){var o=i(n);return o.location="no",n&&n.prompt=="none"&&(o.hidden="yes"),s(o)},c=function(){return e.redirectUri||"http://localhost"};return{login:function(n){return w(this,null,function*(){var o=v(),u=a(n),d=yield e.createLoginUrl(n),f=t(d,"_blank",u),k=!1,U=!1,I=function(){U=!0,f.close()};return f.addEventListener("loadstart",function(y){if(y.url.indexOf(c())==0){var J=E(y.url);C(J,o),I(),k=!0}}),f.addEventListener("loaderror",function(y){if(!k)if(y.url.indexOf(c())==0){var J=E(y.url);C(J,o),I(),k=!0}else o.setError(),I()}),f.addEventListener("exit",function(y){U||o.setError({reason:"closed_by_user"})}),o.promise})},logout:function(n){var o=v(),u=e.createLogoutUrl(n),d=t(u,"_blank","location=no,hidden=yes,clearcache=yes"),f;return d.addEventListener("loadstart",function(k){k.url.indexOf(c())==0&&d.close()}),d.addEventListener("loaderror",function(k){k.url.indexOf(c())==0||(f=!0),d.close()}),d.addEventListener("exit",function(k){f?o.setError():(e.clearToken(),o.setSuccess())}),o.promise},register:function(n){var o=v(),u=e.createRegisterUrl(),d=a(n),f=t(u,"_blank",d);return f.addEventListener("loadstart",function(k){if(k.url.indexOf(c())==0){f.close();var U=E(k.url);C(U,o)}}),o.promise},accountManagement:function(){var n=e.createAccountUrl();if(typeof n<"u"){var o=t(n,"_blank","location=no");o.addEventListener("loadstart",function(u){u.url.indexOf(c())==0&&o.close()})}else throw"Not supported by the OIDC server"},redirectUri:function(n){return c()}}}if(r=="cordova-native")return p.enable=!1,{login:function(n){return w(this,null,function*(){var o=v(),u=yield e.createLoginUrl(n);return universalLinks.subscribe("keycloak",function(d){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close();var f=E(d.url);C(f,o)}),window.cordova.plugins.browsertab.openUrl(u),o.promise})},logout:function(n){var o=v(),u=e.createLogoutUrl(n);return universalLinks.subscribe("keycloak",function(d){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),e.clearToken(),o.setSuccess()}),window.cordova.plugins.browsertab.openUrl(u),o.promise},register:function(n){var o=v(),u=e.createRegisterUrl(n);return universalLinks.subscribe("keycloak",function(d){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close();var f=E(d.url);C(f,o)}),window.cordova.plugins.browsertab.openUrl(u),o.promise},accountManagement:function(){var n=e.createAccountUrl();if(typeof n<"u")window.cordova.plugins.browsertab.openUrl(n);else throw"Not supported by the OIDC server"},redirectUri:function(n){return n&&n.redirectUri?n.redirectUri:e.redirectUri?e.redirectUri:"http://localhost"}};throw"invalid adapter type: "+r}var j=function(){if(!(this instanceof j))return new j;localStorage.setItem("kc-test","test"),localStorage.removeItem("kc-test");var r=this;function t(){for(var i=new Date().getTime(),s=0;s<localStorage.length;s++){var a=localStorage.key(s);if(a&&a.indexOf("kc-callback-")==0){var c=localStorage.getItem(a);if(c)try{var n=JSON.parse(c).expires;(!n||n<i)&&localStorage.removeItem(a)}catch{localStorage.removeItem(a)}}}}r.get=function(i){if(i){var s="kc-callback-"+i,a=localStorage.getItem(s);return a&&(localStorage.removeItem(s),a=JSON.parse(a)),t(),a}},r.add=function(i){t();var s="kc-callback-"+i.state;i.expires=new Date().getTime()+60*60*1e3,localStorage.setItem(s,JSON.stringify(i))}},D=function(){if(!(this instanceof D))return new D;var r=this;r.get=function(a){if(a){var c=i("kc-callback-"+a);if(s("kc-callback-"+a,"",t(-100)),c)return JSON.parse(c)}},r.add=function(a){s("kc-callback-"+a.state,JSON.stringify(a),t(60))},r.removeItem=function(a){s(a,"",t(-100))};var t=function(a){var c=new Date;return c.setTime(c.getTime()+a*60*1e3),c},i=function(a){for(var c=a+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var u=n[o];u.charAt(0)==" ";)u=u.substring(1);if(u.indexOf(c)==0)return u.substring(c.length,u.length)}return""},s=function(a,c,n){var o=a+"="+c+"; expires="+n.toUTCString()+"; ";document.cookie=o}};function fe(){try{return new j}catch{}return new D}function X(r){return function(){e.enableLogging&&r.apply(console,Array.prototype.slice.call(arguments))}}}var ee=Z;function he(h){let e=String.fromCodePoint(...h);return btoa(e)}function pe(h){return w(this,null,function*(){let g=new TextEncoder().encode(h);if(typeof crypto>"u"||typeof crypto.subtle>"u")throw new Error("Web Crypto API is not available.");return yield crypto.subtle.digest("SHA-256",g)})}function V(h){let[e,g]=h.split(".");if(typeof g!="string")throw new Error("Unable to decode token, payload not found.");let l;try{l=me(g)}catch(m){throw new Error("Unable to decode token, payload is not a valid Base64URL value.",{cause:m})}try{return JSON.parse(l)}catch(m){throw new Error("Unable to decode token, payload is not a valid JSON value.",{cause:m})}}function me(h){let e=h.replaceAll("-","+").replaceAll("_","/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("Input is not of the correct length.")}try{return ge(e)}catch{return atob(e)}}function ge(h){return decodeURIComponent(atob(h).replace(/(.)/g,(e,g)=>{let l=g.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}function Q(h){return typeof h=="object"&&h!==null}var P=class{constructor(){this._optionsLocation="@authOptions"}set(e){return localStorage.setItem(this._optionsLocation,JSON.stringify(e)),e}get(){let e=localStorage.getItem(this._optionsLocation);if(!e)return null;try{return JSON.parse(e)}catch(g){console.log(g)}return null}clear(){localStorage.setItem(this._optionsLocation,"")}};var re=(()=>{let e=class e{constructor(){this.router=T(W),this.locationStrategy=T(q),this.http=T(x),this.storage=new P,this.tokenValiditity=300;let l=T("environment");this.environment=l}login(){return w(this,arguments,function*(l={}){let m=new URL(yield this.instance.createLoginUrl(l));window.location.href=m.toString()})}logout(){return w(this,null,function*(){this.storage.clear();let l=this.instance.createLogoutUrl({redirectUri:this.getLoginRedirectUri()});window.location.href=l})}isPWA(){return["fullscreen","standalone","minimal-ui"].some(l=>window.matchMedia("(display-mode: "+l+")").matches)}refreshToken(){this.instance.updateToken(this.tokenValiditity).then(l=>{if(!l){this.router.navigate([G.login]);return}}).catch(l=>{console.log(l)})}loadUserProfile(){return this.instance.loadUserProfile()}getDefaultScope(){return"openid email profile organization"}initialize(){return this.instance=new ee({url:this.environment.authUrl,realm:this.environment.realm,clientId:this.getClinetId()}),this.instance.onTokenExpired=()=>{this.refreshToken()},this.instance.init({onLoad:"check-sso",silentCheckSsoRedirectUri:`${this.getBaseUrl()}assets/silent-check-sso.html`,enableLogging:!this.environment.production,checkLoginIframe:!0,scope:this.getDefaultScope()})}hasResouceRole(l,m){return this.instance.hasResourceRole(m,l)}hasResource(l){return this.instance.resourceAccess?this.instance.resourceAccess[l]!==void 0:!1}getResources(){return Object.keys(this.instance.resourceAccess||{})}hasRealmRole(l){return this.instance.hasRealmRole(l)}getRealm(){return this.instance.realm}getToken(){return this.instance?.token}isAuthenticated(){return this.instance&&this.instance.authenticated===!0}getLoginRedirectUri(){return`${this.getBaseUrl()}${G.login}`}getClinetId(){return this.environment.clientId}getBaseUrl(){return`${window.location.origin}${this.locationStrategy.getBaseHref()}`}};e.\u0275fac=function(m){return new(m||e)},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let h=e;return h})();var Oe=(()=>{let e=class e{constructor(){this.http=T(x),this.identityService=T(re);let l=T("environment");this.environment=l}getPath(){return`${this.environment.authUrl}/admin/realms/${this.identityService.getRealm()}`}getUsers(l){return this.http.get(`${this.getPath()}/users`,{params:new z({fromObject:O(l)})}).pipe(b(1))}getUserById(l){if(l===null)throw new Error("resource should not be null");return this.http.get(`${this.getPath()}/users/${l}`,{}).pipe(b(1))}deleteUser(l){return this.http.delete(`${this.getPath()}/users/${l}`).pipe(b(1))}updateUser(l,m){return this.http.put(`${this.getPath()}/users/${l}`,m).pipe(b(1))}createUser(l){return this.http.post(`${this.getPath()}/users`,l).pipe(b(1))}getUserGroups(l){return this.http.get(`${this.getPath()}/users/${l}/groups`,{}).pipe(b(1))}deleteUserGroup(l,m){return this.http.delete(`${this.getPath()}/users/${l}/groups/${m}`).pipe(b(1))}addUserGroup(l,m){return this.http.put(`${this.getPath()}/users/${l}/groups/${m}`,{}).pipe(b(1))}getGroups(l){return this.http.get(`${this.getPath()}/groups`,{params:new z({fromObject:O(l)})}).pipe(b(1))}createGroup(l){return this.http.post(`${this.getPath()}/groups`,l)}updateGroup(l,m){return this.http.put(`${this.getPath()}/groups/${l}`,m).pipe(b(1))}deleteGroup(l){return this.http.delete(`${this.getPath()}/groups/${l}`).pipe(b(1))}};e.\u0275fac=function(m){return new(m||e)},e.\u0275prov=A({token:e,factory:e.\u0275fac});let h=e;return h})();export{G as a,re as b,Oe as c};
/**i18n:08dc477745c643d8c857c9e8e740bb8fd5d4d2f068a9032e0d444ef2bfb6a6f8*/
