import { useHistory } from "react-router"
import $ from "jquery"

export default function useDelayLink(){
    let history = useHistory()
    function DelayLink(e){
        e.preventDefault()
            let href = e.currentTarget.getAttribute('href')
            // console.log(href)
            setTimeout(()=>{
                history.push(href)
       $(".loading").css({"transform":"scale(0)"})

            },1000)
    
    }
        return DelayLink

    }

