
import Banner from "../Banner/Banner";
import BecomeTeacher from "../BecomeTeacher/BecomeTeacher";
import CourseContent from "../CourseContent/CourseContent";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import Faq from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";
import Testimonial from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Partners></Partners>
            <BecomeTeacher></BecomeTeacher>
            <PopularClasses></PopularClasses>
            <ExtraInfo></ExtraInfo>
            <CourseContent></CourseContent>
            <Faq></Faq>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;