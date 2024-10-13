var u=class{static object(){return e=>e.value&&typeof e.value!="object"?{invalid:{value:e.value}}:null}static phoneNumber(){return e=>e.value?typeof e.value=="string"&&e.value.startsWith("+")&&e.value.length>=10?null:{phoneNumber:{value:e.value}}:null}};export{u as a};
/**i18n:240fd72ac85948f7f82c5874ad40d30b083c4df6b346146b5f51aef2bd6e49f2*/
