var u=class{static object(){return e=>e.value&&typeof e.value!="object"?{invalid:{value:e.value}}:null}static phoneNumber(){return e=>e.value?typeof e.value=="string"&&e.value.startsWith("+")&&e.value.length>=10?null:{phoneNumber:{value:e.value}}:null}};export{u as a};
/**i18n:78deb23436623189b35691a00c31a25bdc017296f03b26aff11dd3cf4cf58478*/
