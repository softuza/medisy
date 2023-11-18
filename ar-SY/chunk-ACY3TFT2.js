import{a as n}from"./chunk-ZENDRPYK.js";import{oa as m}from"./chunk-MK3KDUIH.js";var l=function(e){return e.Created="Created",e.Pending="Pending",e.Started="Started",e.Finished="Finished",e;}(l||{});var s=function(e){return e.Private="Private",e.Public="Public",e.Work="Work",e;}(s||{}),p=Object.keys(s).map(e=>s[e]);var i=function(e){return e.Home="Home",e.Mobile="Mobile",e.Work="Work",e;}(i||{}),z=Object.keys(i).map(e=>i[e]);var o=function(e){return e.Validated="Validated",e.Returned="Returned",e.Forwarded="Forwarded",e.Destroyed="Destroyed",e.Collected="Collected",e.Accepted="Accepted",e.Created="Created",e;}(o||{});var a=function(e){return e.NationalCard="NationalCard",e.BankCard="BankCard",e.DriverLicense="DriverLicense",e.Passport="Passport",e.TravelDocument="TravelDocument",e.Other="Other",e;}(a||{}),P=Object.keys(a).map(e=>a[e]);var c=function(e){return e.Male="Male",e.Female="Female",e;}(c||{}),x=Object.keys(c).map(e=>c[e]);var d=function(e){return e.Email="Email",e.Sms="Sms",e.Push="Push",e;}(d||{});var L=(()=>{let u=class u{transform(r,t=!1){return r?r in n?this.transformComparisonOperator(r,t):r in l?this.transformTestState(r):r in o?this.transformSpecimenState(r):r in s?this.transformEmailType(r):r in i?this.transformPhoneType(r):r in c?this.transformSex(r):r in a?this.transformDocumentType(r):r in d?this.transformChannelType(r):"":"";}transformComparisonOperator(r,t){switch(r){case n.Equal:return t?"==":"\u062A\u0633\u0627\u0648\u064A";case n.GreaterThan:return t?">":"\u0627\u0643\u0628\u0631 \u0645\u0646";case n.GreaterThanOrEqual:return t?">=":"\u0627\u0643\u0628\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.LessThan:return t?"<":"\u0623\u0635\u063A\u0631 \u0645\u0646";case n.LessThanOrEqual:return t?"<=":"\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0648 \u064A\u0633\u0627\u0648\u064A";case n.RangeWithBoundaries:return t?"<==>":"\u0645\u062C\u0627\u0644 \u0645\u0639 \u0627\u0644\u062D\u062F\u0648\u062F";case n.RangeWithoutBoundaries:return t?"<>":"\u0645\u062C\u0627\u0644 \u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u062F\u0648\u062F";case n.Not:return t?"!=":"\u0644\u064A\u0633 \u0641\u064A";default:return"";}}transformTestState(r){switch(r){case l.Created:return"\u0645\u0646\u0634\u0623\u0629";case l.Started:return"\u0628\u062F\u0623";case l.Finished:return"\u0627\u0646\u062A\u0647\u062A";case l.Pending:return"\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631";default:return"";}}transformSpecimenState(r){switch(r){case o.Accepted:return"\u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644";case o.Collected:return"\u062A\u0645 \u0627\u0644\u062C\u0645\u0639";case o.Destroyed:return"\u062A\u0645 \u0627\u0644\u0627\u062A\u0644\u0627\u0641";case o.Forwarded:return"\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644";case o.Validated:return"\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642";case o.Created:return"\u0645\u0646\u0634\u0623\u0629";default:return"";}}transformEmailType(r){switch(r){case s.Private:return"\u062E\u0627\u0635";case s.Public:return"\u0639\u0627\u0645";case s.Work:return"\u0627\u0644\u0639\u0645\u0644";default:return"";}}transformPhoneType(r){switch(r){case i.Home:return"\u0627\u0644\u0645\u0646\u0632\u0644";case i.Mobile:return"\u0627\u0644\u062C\u0648\u0627\u0644";case i.Work:return"\u0627\u0644\u0639\u0645\u0644";default:return"";}}transformSex(r){switch(r){case c.Female:return"\u0627\u0646\u062B\u0649";case c.Male:return"\u0630\u0643\u0631";default:return"";}}transformDocumentType(r){switch(r){case a.BankCard:return"\u0628\u0637\u0627\u0642\u0629 \u0645\u0635\u0631\u0641";case a.DriverLicense:return"\u0631\u062E\u0635\u0629 \u0642\u064A\u0627\u062F\u0629";case a.NationalCard:return"\u0628\u0637\u0627\u0642\u0629 \u0648\u0637\u0646\u064A\u0629";case a.Passport:return"\u062C\u0648\u0627\u0632 \u0633\u0641\u0631";case a.TravelDocument:return"\u0648\u062B\u064A\u0642\u0629 \u0633\u0641\u0631";case a.Other:return"\u0623\u062E\u0631\u0649";default:return"";}}transformChannelType(r){switch(r){case d.Email:return"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A";case d.Sms:return"\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064A\u0629";case d.Push:return"\u0627\u0634\u0639\u0627\u0631";default:return"";}}};u.ɵfac=function(t){return new(t||u)();},u.ɵpipe=m({name:"typeI18n",type:u,pure:!0,standalone:!0});let e=u;return e;})();export{s as a,i as b,l as c,a as d,c as e,d as f,L as g};/**i18n:33360f080214f876987bd0ecc2f51b8308b133d904c534ef8c974004cf54d934*/