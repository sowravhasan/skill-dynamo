
import { AccordionComponent } from "./Accordian";


const Faq = () => {

    return (
        <div id="faq" className="max-w-6xl mx-auto py-20 px-5 md:px-0">
            <div>
            <div className="flex items-center gap-5 mb-7">
                <div className="bg-blue-400 h-14 w-1 rounded-md"></div>
                <div>
                <h1 className="bg-gradient-to-br from-sky-500  to-sky-800 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">Freequently Asked Questions About Us</h1>
                <p className="text-gray-300">Know what you want</p>
                </div>
                </div>
            </div>

            <div className="px-10 md:px-20">
                <AccordionComponent></AccordionComponent>
            </div>
        </div>
    );
};

export default Faq;