import { useState } from "react";
let patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  //   patternName = /(84|0[3|5|7|8|9])+([0-9]{8})\b/ ,
  patternPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  patternUrl =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

export default function useFormValidate(initiaForm, validate) {
  let [form, setForm] = useState(initiaForm);
  let [error, setError] = useState({});
  function inputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }
  function check() {
    const errorObj = {};
    let { rule, message } = validate;


    for (let i in rule) {
      let r = rule[i];
      let m = message || {}
      if (r.required && !form[i]) {
         errorObj[i] = m[i]?.required || ' truong nay ko dc bo trong';
        continue;
      }
    
      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "phone") pattern = patternPhone;
        if (pattern === "email") pattern = patternEmail;
        if (pattern === "url") pattern = patternUrl;
        if (!pattern.test(form[i])) {
          errorObj[i] = message[i]?.pattern ||  " truong nay ko dung dinh dang";
        }
      }
      if(r.min){
        if(form[i].length < r.min){
          errorObj[i] = m?.min || `truong nay ko dc it hon ${r.min} ki tu`;
        }
        if(form[i].length > r.max){
          errorObj[i] = m?.max || `truong nay ko dc it hon ${r.max} ki tu`;
        }
      }
    }
    // if(!form.name.trim()){
    //    errorObj.name ='name bat buoc'

    // }
    // if(!form.phone){
    //     errorObj.phone ='phone bat buoc'

    // }
    // else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
    //     errorObj.phone ='phone phai dung dinh dang (10 so)'

    // }
    // if(!form.email.trim()){
    //     errorObj.email ='email bat buoc ko khoang trang'

    // }
    // else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
    //     errorObj.email ='email phai dung dinh dang '

    //     }

    // if(form.url &&!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.url)){
    //     errorObj.url ='url phai dung dinh dang '

    // }
    // if(!form.title){
    //     errorObj.title ='title bat buoc'

    // }
    // if(!form.content){
    //     errorObj.content ='content bat buoc'

    // }
    setError(errorObj);
    return errorObj;
  }

  //     ...form,
  //     [name]: value
  // })

  return {
    form,
    error,
    inputChange,
    check,
  };
}
