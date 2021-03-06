import React, {useState} from 'react'
import useFormValidate from '../../hook/useFormValidate'
export default function Hoptac(){
    let {error, inputChange, check,form}= useFormValidate({
        name:'',
        phone: '',
        email:'',
        url: '',
        title:'',
        content:''
 
    },{
        rule:{
            name:{
            required:true
        } ,
        phone:{
            required:true,
            pattern: 'phone'
        },
        url:{
            required:true,
            pattern: 'url'
        },
        title:{
            required:true,
            pattern: 'title'
        },
        email:{
            required:true,
            pattern: 'email'
        },
        content:{
            required:true,
            pattern: 'content'
        }},
        message:{
          name:{
            pattern: ' name ko dung dinh dang'
          },
          email:{
            pattern: ' email ko dung dinh dang'
          },
          url:{
            pattern: ' url ko dung dinh dang'
          },
          phone:{
            pattern: ' phone ko dung dinh dang'
          }

          
        }
    })
    // const [form, setForm] = useState({
    //     name:'',
    //     phone: '',
    //     email:'',
    //     url: '',
    //     title:'',
    //     content:''

    // })
    // //show error
    // const [error, setError] = useState({
    //     name:'',
    //     phone: '',
    //     email:'',
    //     url: '',
    //     title:'',
    //     content:''
    // })
//   trim la ko cho khoang cach dau, replace khoang cach cac tu xa se ko co khoang trang
    function onSubmit(){
        let errorObj = check()
        // setError(errorObj);
        // console.log(`error`, error)
        if(Object.keys(errorObj).length === 0){
            console.log(form)
        }
        
    }
   
    // function inputOnChange(e){
    //     let name = e.target.name
    //     let value = e.target.value

    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }
    return(
        <main className="register-course" id="main">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">li??n h???</div> */}
          <h2 className="main-title">H???P T??C C??NG CFD</h2>
          <p className="top-des">
            ?????ng ng???n ng???i li??n h??? v???i <strong>CFD</strong> ????? c??ng nhau t???o ra nh???ng s???n ph???m gi?? tr???, c??ng nh??
            vi???c h???p t??c v???i c??c ?????i t??c tuy???n d???ng v?? c??ng ty trong v?? ngo??i n?????c.
          </p>
          <div className="form">
            <label>
              <p>H??? v?? t??n<span>*</span></p>
              <input type="text" value={form.name} name="name" onChange={inputChange} placeholder="H??? v?? t??n b???n" />
               
            </label>
            {error.name ? <p className="text-error">{error.name}</p>:null}
            <label>
              <p>S??? ??i???n tho???i</p>
              <input type="text" value={form.phone} name="phone" onChange={inputChange} placeholder="S??? ??i???n tho???i" />
           
            </label>
            {
                error.phone && <p className="text-error">{error.phone}</p>
            }
            <label>
              <p>Email<span>*</span></p>
              
            
            <input type="text" value={form.email} name="email" onChange={inputChange} placeholder="Email c???a b???n" />
             
            </label>
            {
                error.email && <p className="text-error">{error.email}</p>
            }
            <label>
              <p>Website</p>
              <input type="text" value={form.url} name="url" onChange={inputChange} placeholder="???????ng d???n website http://" />
             
            </label>
            {
                error.url && <p className="text-error">{error.url}</p>
            }
            <label>
              <p>Ti??u ?????<span>*</span></p>
              <input type="text" name="title" value={form.title} onChange={inputChange} placeholder="Ti??u ????? li??n h???" />
              
            </label>
            {
                error.title && <p className="text-error">{error.title}</p>
            }
            <label>
              <p>N???i dung<span>*</span></p>
              <textarea  name="content" value={form.content} onChange={inputChange}  id cols={30} rows={10} defaultValue={""} />
              
            </label>
            {
                error.content && <p className="text-error">{error.content}</p>
            }
            <div className="btn main rect" onClick={onSubmit}>????ng k??</div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">????ng k?? th??nh c??ng</div>
                <p>
                    <strong>Ch??o m???ng Tr???n Ngh??a ???? tr??? th??nh th??nh vi??n m???i c???a CFD Team.</strong> <br>
                    C???m ??n b???n ???? ????ng k?? kh??a h???c t???i <strong>CFD</strong>, ch??ng t??i s??? ch??? ?????ng li??n l???c v???i b???n th??ng qua facebook
                    ho???c s??? ??i???n tho???i c???a b???n.
                </p>
            </div>
            <a href="/" class="btn main rect">v??? trang ch???</a>
        </div> */}
      </main>

    )
}