import React, {useState} from 'react'
export default function Hoptac(){
    const [form, setForm] = useState({
        name:'',
        phone: '',
        email:'',
        url: '',
        title:'',
        content:''

    })
    //show error
    const [error, setError] = useState({
        name:'',
        phone: '',
        email:'',
        url: '',
        title:'',
        content:''
    })
//   trim la ko cho khoang cach dau, replace khoang cach cac tu xa se ko co khoang trang
    function onSubmit(){
        const errorObj = {}
       
        if(!form.name.trim()){
           errorObj.name ='name bat buoc'
           
        }
        if(!form.phone){
            errorObj.phone ='phone bat buoc'
           
        }
        else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
            errorObj.phone ='phone phai dung dinh dang (10 so)'
           
        }
        if(!form.email.trim()){
            errorObj.email ='email bat buoc ko khoang trang'
           
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
            errorObj.email ='email phai dung dinh dang '
           
            }
            
        if(form.url &&!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.url)){
            errorObj.url ='url phai dung dinh dang '
           
        }
        if(!form.title){
            errorObj.title ='title bat buoc'
           
        }
        if(!form.content){
            errorObj.content ='content bat buoc'
           
        }
       
        if(Object.keys(errorObj).length === 0){
            console.log(form)
        }
        setError(errorObj);
        
    }
   
    function inputOnChange(e){
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }
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
              <input type="text" value={form.name} name="name" onChange={inputOnChange} placeholder="Họ và tên bạn" />
               
            </label>
            {error.name ? <p className="text-error">{error.name}</p>:null}
            <label>
              <p>Số điện thoại</p>
              <input type="text" value={form.phone} name="phone" onChange={inputOnChange} placeholder="Số điện thoại" />
           
            </label>
            {
                error.phone && <p className="text-error">{error.phone}</p>
            }
            <label>
              <p>Email<span>*</span></p>
              
            
            <input type="text" value={form.email} name="email" onChange={inputOnChange} placeholder="Email của bạn" />
             
            </label>
            {
                error.email && <p className="text-error">{error.email}</p>
            }
            <label>
              <p>Website</p>
              <input type="text" value={form.url} name="url" onChange={inputOnChange} placeholder="Đường dẫn website http://" />
             
            </label>
            {
                error.url && <p className="text-error">{error.url}</p>
            }
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input type="text" name="title" value={form.title} onChange={inputOnChange} placeholder="Tiêu đề liên hệ" />
              
            </label>
            {
                error.title && <p className="text-error">{error.title}</p>
            }
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea  name="content" value={form.content} onChange={inputOnChange}  id cols={30} rows={10} defaultValue={""} />
              
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