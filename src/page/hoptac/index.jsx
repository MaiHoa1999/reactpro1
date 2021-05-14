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
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
          <div className="form">
            <label>
              <p>Họ và tên<span>*</span></p>
              <input type="text" value={form.name} name="name" onChange={inputChange} placeholder="Họ và tên bạn" />
               
            </label>
            {error.name ? <p className="text-error">{error.name}</p>:null}
            <label>
              <p>Số điện thoại</p>
              <input type="text" value={form.phone} name="phone" onChange={inputChange} placeholder="Số điện thoại" />
           
            </label>
            {
                error.phone && <p className="text-error">{error.phone}</p>
            }
            <label>
              <p>Email<span>*</span></p>
              
            
            <input type="text" value={form.email} name="email" onChange={inputChange} placeholder="Email của bạn" />
             
            </label>
            {
                error.email && <p className="text-error">{error.email}</p>
            }
            <label>
              <p>Website</p>
              <input type="text" value={form.url} name="url" onChange={inputChange} placeholder="Đường dẫn website http://" />
             
            </label>
            {
                error.url && <p className="text-error">{error.url}</p>
            }
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input type="text" name="title" value={form.title} onChange={inputChange} placeholder="Tiêu đề liên hệ" />
              
            </label>
            {
                error.title && <p className="text-error">{error.title}</p>
            }
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea  name="content" value={form.content} onChange={inputChange}  id cols={30} rows={10} defaultValue={""} />
              
            </label>
            {
                error.content && <p className="text-error">{error.content}</p>
            }
            <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>

    )
}