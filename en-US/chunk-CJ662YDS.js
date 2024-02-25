var o=function(t){return t[t.Success=0]="Success",t[t.Error=1]="Error",t[t.Info=2]="Info",t[t.Warning=3]="Warning",t;}(o||{});var e=function(t){return t.GreaterThan="Greater Than",t.GreaterThanOrEqual="Greater Than Or Equal",t.LessThan="Less Than",t.LessThanOrEqual="Less Than Or Equal",t.Equal="Equal",t.NotEqual="Not Equal",t.Contains="Contains",t.InsensitiveContains="Insensitive Contains",t.StartsWith="Starts With",t.InsensitiveStartsWith="Insensitive Starts With",t.EndsWith="Ends With",t.InsensitiveEndsWith="Insensitive Ends With",t.In="In",t.NotIn="Not In",t.IsNull="Is Null",t;}(e||{});function c(t,n){switch(t){case e.GreaterThan:return n?">":"Greater Than";case e.GreaterThanOrEqual:return n?">=":"Greater Than Or Equal";case e.LessThan:return n?"<":"LessThan";case e.LessThanOrEqual:return n?"<=":"Less Than Or Equal";case e.Equal:return n?"==":"Equal";case e.NotEqual:return n?"!=":"Not Equal";case e.Contains:return n?".???.":"Contains";case e.StartsWith:return n?"?...":"Starts With";case e.EndsWith:return n?"...?":"Ends With";case e.In:return n?"[]":"In";case e.NotIn:return n?"![]":"Not In";case e.IsNull:return n?"null":"Is Null";case e.InsensitiveContains:return n?"%...%":"Contains Like";case e.InsensitiveStartsWith:return n?"%...":"Starts With Like";case e.InsensitiveEndsWith:return n?"...%":"Ends With Like";default:return"";}}var a=function(t){return t.And="And",t.Or="Or",t;}(a||{});function h(t){switch(t){case a.And:return"And";case a.Or:return"Or";default:return"";}}var u=class t{static default(n,r){return{pageSize:r??50,pageIndex:n??1};}static minimal(){return t.default(1,10);}static unpaged(){return{pageSize:-1,pageIndex:1};}static count(){return{pageIndex:1,pageSize:0};}};var i=class t{static serializeOperator(n){switch(n){case e.GreaterThan:return"gt";case e.GreaterThanOrEqual:return"gte";case e.LessThan:return"lt";case e.LessThanOrEqual:return"lte";case e.Equal:return"eq";case e.NotEqual:return"neq";case e.Contains:return"cnt";case e.StartsWith:return"sw";case e.EndsWith:return"ew";case e.In:return"in";case e.NotIn:return"ni";case e.IsNull:return"nul";case e.InsensitiveContains:return"icnt";case e.InsensitiveEndsWith:return"iew";case e.InsensitiveStartsWith:return"isw";}}static getSupportedOperators(n,r){let s=[];return n==="string"?s.push(e.Equal,e.NotEqual,e.Contains,e.StartsWith,e.EndsWith,e.InsensitiveContains,e.InsensitiveStartsWith,e.InsensitiveEndsWith):n==="date"?s.push(e.Equal,e.NotEqual,e.GreaterThan,e.GreaterThanOrEqual,e.LessThan,e.LessThanOrEqual):n==="number"?s.push(e.Equal,e.NotEqual,e.GreaterThan,e.GreaterThanOrEqual,e.LessThan,e.LessThanOrEqual):n==="uuid"?s.push(e.Equal,e.NotEqual,e.In,e.NotIn):n==="enum"?s.push(e.Equal,e.NotEqual,e.In,e.NotIn):n==="bool"&&s.push(e.Equal),r&&s.push(e.IsNull),s;}static serializeValue(n){return n===null||n===void 0?"null":typeof n=="string"?n:typeof n=="number"?n.toString():typeof n=="boolean"?n?"true":"false":n instanceof Date?n.toISOString():"";}static serialize(n){let r=t.serializeOperator(n.op),s=t.serializeValue(n.value);return`${n.field}:${r}:${s}`;}};export{o as a,e as b,c,a as d,h as e,i as f,u as g};/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/