import { useSelector, useDispatch } from "react-redux";
import useFormValidate from "../../../hook/useFormValidate";
import Auth from "../../../service/auth";
import { updateAction } from "../../../redux/action/authAction";
import { useState } from "react";

// import Auth from '../service/auth';

export default function Tab1() {
  let { loginError, setLoginError } = useState(null);

  const { login } = useSelector((store) => store.auth);
  let { error, inputChange, check, form } = useFormValidate(
    {
      name: "",
      phone: "",
    },
    {
      rule: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
      },
      message: {
      

        phone: {
          pattern: " phone không đúng định dạng",
        },
      },
    }
  );
  let dispatch = useDispatch();

  async function updateForm() {
    let errorObj = check();
    // console.log(`error`, error)
    if (Object.keys(errorObj).length === 0) {
      // console.log(`form`, form)
      let res = await Auth.update(form);
      if (res.data) {
        dispatch(updateAction(res.data));
      }
    }
  }
  return (
    <div className="tab1">
      {loginError && <p className="txt-error">{loginError}</p>}

      <label>
        <p>
          Họ và tên<span>*</span>
        </p>

        <input
          type="text"
          value={form.name}
          name="name"
          onChange={inputChange}
          placeholder="Nguyễn Văn A"
        />
      </label>
      {error.name && <p className="text-error">{error.name}</p>}

      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input value={form.phone} name="phone" onChange={inputChange} ></input>
        
      </label>
      {error.phone && <p className="text-error">{error.phone}</p>}
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          disabled
          value={login.email}
          name="email"
          onChange={inputChange}
         
          type="text"
        />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <div className="btn main rect" onClick={updateForm}>
        LƯU LẠI
      </div>
    </div>
  );
}
