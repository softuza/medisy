var u=class{static object(){return e=>e.value&&typeof e.value!="object"?{invalid:{value:e.value}}:null}static phoneNumber(){return e=>e.value?typeof e.value=="string"&&e.value.startsWith("+")&&e.value.length>=10?null:{phoneNumber:{value:e.value}}:null}};export{u as a};
/**i18n:ff9fdde7a6df01557f81548cdf90a4fe127bad3db9779e7a3c30af7012e3a744*/
