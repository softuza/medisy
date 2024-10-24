var u=class{static object(){return e=>e.value&&typeof e.value!="object"?{invalid:{value:e.value}}:null}static phoneNumber(){return e=>e.value?typeof e.value=="string"&&e.value.startsWith("+")&&e.value.length>=10?null:{phoneNumber:{value:e.value}}:null}};export{u as a};
/**i18n:3baa7a52fa2dfa3c4602a0f5c18b10b468e666f31530cd067c23c1079d9af4f3*/
