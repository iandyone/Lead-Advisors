import Slide from "../Slide/slide";
import imageSlide1 from '../../assets/images/accordion/01.webp';
import "./accordion.scss";
import { useState } from "react";


export default function Accordion(props) {
    const { className } = props;
    const [activeSlide, setActiveSlide] = useState(1);

    // const accordionData = [
    //     { id: 1, title: 'Hawaiian party', image: imageSlide1 },
    //     { id: 2, title: 'Мafia party', image: imageSlide1 },
    //     { id: 3, title: 'Party', image: imageSlide1 },
    //     { id: 4, title: 'Party on the beach', image: imageSlide1 },
    //     { id: 5, title: 'Home Security', image: imageSlide1 },
    //     { id: 6, title: 'Network Design & Implementation', image: imageSlide1 },
    //     { id: 7, title: 'System Design & Engineering', image: imageSlide1 },
    //     { id: 8, title: 'lient Care Plans', image: imageSlide1 },
    // ]

    function openSlide(id) {
        setActiveSlide(id);
    }

    return (
        <div className={`${className} accordion`}>
            <Slide className='accordion__item' id={1} isActive={(activeSlide === 1) ? true : false} handlerOnChange={openSlide} title='Hawaiian party' image={imageSlide1} />
            <Slide className='accordion__item' id={2} isActive={(activeSlide === 2) ? true : false} handlerOnChange={openSlide} title='Мafia party' image={imageSlide1} />
            <Slide className='accordion__item' id={3} isActive={(activeSlide === 3) ? true : false} handlerOnChange={openSlide} title='Party' image={imageSlide1} />
            <Slide className='accordion__item' id={4} isActive={(activeSlide === 4) ? true : false} handlerOnChange={openSlide} title='Party on the beach' image={imageSlide1} />
            <Slide className='accordion__item' id={5} isActive={(activeSlide === 5) ? true : false} handlerOnChange={openSlide} title='Home Security' image={imageSlide1} />
            <Slide className='accordion__item' id={6} isActive={(activeSlide === 6) ? true : false} handlerOnChange={openSlide} title='Network Design & Implementation' image={imageSlide1} />
            <Slide className='accordion__item' id={7} isActive={(activeSlide === 7) ? true : false} handlerOnChange={openSlide} title='System Design & Engineering' image={imageSlide1} />
            <Slide className='accordion__item' id={8} isActive={(activeSlide === 8) ? true : false} handlerOnChange={openSlide} title='Client Care Plans' image={imageSlide1} />

            {/* {accordionData.forEach((item, index) => {
                return (<Slide className='accordion__item' id={item.id} isActive={(item.id === activeSlide) ? true : false} handlerOnChange={openSlide} title={item.title} image={item.image} />)
            })} */}

        </div>
    );
}