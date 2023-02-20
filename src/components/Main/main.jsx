import './main.scss';
import logo from '../../assets/images/svg/logo.svg'
import Countdown from '../Countdown/countdown';
import Subscribe from '../Subscribe/subscribe';

export default function Main() {
    return (
        <main className="main">
            <div className='main__preview preview'>
                <section className="preview__body">
                    <a href='/' className="preview__logo" data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">
                        <img src={logo} alt="logo" className="preview__image" />
                    </a>
                    <div className='preview__header' data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">
                        <h1 className="preview__title">Under Construction</h1>
                        <h5 className="preview__subtitle">We're making lots of improvements and will be back soon</h5>
                    </div>
                    <Countdown className="preview__countdown"/>
                    <div className="preview__link"  data-aos="fade-down" data-aos-delay="700" data-aos-duration="800">
                        <p className="preview__text">Check our event page when you wait:</p>
                        <a href="http://www.google.com" className="preview__button" target='_blank' rel='noreferrer'><span>Go to the event</span></a>
                    </div>
                </section>
                <Subscribe/>
            </div >
        </main>
    );
}