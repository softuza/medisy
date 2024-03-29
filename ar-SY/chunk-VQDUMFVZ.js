var u=function(n){return n[n.Success=0]="Success",n[n.Error=1]="Error",n[n.Info=2]="Info",n[n.Warning=3]="Warning",n;}(u||{});var e=function(n){return n.GreaterThan="Greater Than",n.GreaterThanOrEqual="Greater Than Or Equal",n.LessThan="Less Than",n.LessThanOrEqual="Less Than Or Equal",n.Equal="Equal",n.NotEqual="Not Equal",n.Contains="Contains",n.InsensitiveContains="Insensitive Contains",n.StartsWith="Starts With",n.InsensitiveStartsWith="Insensitive Starts With",n.EndsWith="Ends With",n.InsensitiveEndsWith="Insensitive Ends With",n.In="In",n.NotIn="Not In",n.IsNull="Is Null",n.Any="Any",n.NotAny="Not Any",n;}(e||{});function c(n){switch(n){case e.GreaterThan:return"\u0623\u0643\u0628\u0631 \u0645\u0646";case e.GreaterThanOrEqual:return"\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case e.LessThan:return"\u0623\u0635\u063A\u0631 \u0645\u0646";case e.LessThanOrEqual:return"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case e.Equal:return"\u062A\u0633\u0627\u0648\u064A";case e.NotEqual:return"\u0644\u0627 \u062A\u0633\u0627\u0648\u064A";case e.Contains:return"\u062A\u062D\u0648\u064A";case e.StartsWith:return"\u062A\u0628\u062F\u0623 \u0645\u0639";case e.EndsWith:return"\u062A\u0646\u062A\u0647\u064A \u0645\u0639";case e.In:return"\u0641\u064A";case e.NotIn:return"\u0644\u064A\u0633 \u0641\u064A";case e.IsNull:return"\u0628\u062F\u0648\u0646 \u0642\u064A\u0645\u0629";case e.InsensitiveContains:return"\u062A\u062D\u0648\u064A \u0645\u0634\u0627\u0628\u0647";case e.InsensitiveStartsWith:return"\u062A\u0628\u062F\u0623 \u0628\u0645\u0634\u0627\u0628\u0647";case e.InsensitiveEndsWith:return"\u062A\u0646\u062A\u0647\u064A \u0628\u0645\u0634\u0627\u0628\u0647";case e.Any:return"\u0623\u064A";case e.NotAny:return"\u0644\u064A\u0633 \u0623\u064A";default:return"";}}var a=function(n){return n.And="And",n.Or="Or",n;}(a||{});function h(n){switch(n){case a.And:return"\u0648";case a.Or:return"\u0623\u0648";default:return"";}}var i=class n{static serializeOperator(t){switch(t){case e.GreaterThan:return"gt";case e.GreaterThanOrEqual:return"gte";case e.LessThan:return"lt";case e.LessThanOrEqual:return"lte";case e.Equal:return"eq";case e.NotEqual:return"neq";case e.Contains:return"cnt";case e.StartsWith:return"sw";case e.EndsWith:return"ew";case e.In:return"in";case e.NotIn:return"ni";case e.IsNull:return"null";case e.InsensitiveContains:return"icnt";case e.InsensitiveEndsWith:return"iew";case e.InsensitiveStartsWith:return"isw";case e.Any:return"any";case e.NotAny:return"nany";}}static getSupportedOperators(t,s){let r=[];return t==="string"?r.push(e.Equal,e.NotEqual,e.Contains,e.StartsWith,e.EndsWith,e.InsensitiveContains,e.InsensitiveStartsWith,e.InsensitiveEndsWith):t==="date"?r.push(e.Equal,e.NotEqual,e.GreaterThan,e.GreaterThanOrEqual,e.LessThan,e.LessThanOrEqual):t==="number"?r.push(e.Equal,e.NotEqual,e.GreaterThan,e.GreaterThanOrEqual,e.LessThan,e.LessThanOrEqual):t==="uuid"?r.push(e.Equal,e.NotEqual,e.In,e.NotIn):t==="enum"?r.push(e.Equal,e.NotEqual,e.In,e.NotIn):t==="bool"&&r.push(e.Equal),s===!0&&r.push(e.IsNull),r;}static serializeValue(t){return t==null?"null":typeof t=="string"?t:typeof t=="number"?t.toString():typeof t=="boolean"?t?"true":"false":t instanceof Date?t.toISOString():t instanceof Array?t.length===0?"[]":`["${t.join('","')}"]`:"";}static serialize(t){let s=n.serializeOperator(t.op),r=n.serializeValue(t.value);return`${t.field}:${s}:${r}`;}};var o=class n{static default(t,s){return{pageSize:s??50,pageIndex:t??1};}static minimal(){return n.default(1,10);}static unpaged(){return{pageSize:-1,pageIndex:1};}static count(){return{pageIndex:1,pageSize:0};}};export{u as a,e as b,c,a as d,h as e,i as f,o as g};/**i18n:1c5a057012127d5b8d089498ac661b5227d0455136ea3b9f25a2d8940ec324d8*/