import{f}from"./chunk-IRYEWOMO.js";function s(i){for(let r in i)if((i[r]===void 0||i[r]===null)&&delete i[r],i[r]instanceof Date)i[r]=i[r].toISOString();else if(r=="filters"&&i[r]instanceof Array){let n=[];i[r].forEach(e=>{typeof e=="string"?n.push(e):"field"in e&&"op"in e&&"value"in e&&n.push(f.serialize(e))}),i[r]=n}return i}export{s as a};
/**i18n:93110c93724266b1c17cde4cedf877a4f3393465ad71eafcdf9d2e9828471749*/