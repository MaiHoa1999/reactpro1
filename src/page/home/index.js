
import Banner from './component/Banner'
import CourseList from './component/CourseList'
import Special from './component/Special'
import Testimonial from './component/Testimonial'
import Gallery from './component/Gallery'
import Action from './component/Action'
export default function Home(){
    return(
        <main className="homepage" id="main">
        <Banner />
        <CourseList/>
        <Special />
        <Testimonial/>
        <Gallery/>
        <Action/>
        
        
      </main>
    )
}
