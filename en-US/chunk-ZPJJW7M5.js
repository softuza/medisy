var u=class{static object(){return e=>e.value&&typeof e.value!="object"?{invalid:{value:e.value}}:null}static phoneNumber(){return e=>e.value?typeof e.value=="string"&&e.value.startsWith("+")&&e.value.length>=10?null:{phoneNumber:{value:e.value}}:null}};export{u as a};
/**i18n:96c2fddb154f4a1848fe398d163a6a54a116f1baa7d907440cc7696997d38bb8*/
