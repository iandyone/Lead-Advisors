import './main.scss';
import logo from '../../assets/images/svg/logo.svg'
import Countdown from '../Countdown/countdown';
import Subscribe from '../Subscribe/subscribe';

export default function Main() {
    return (
        <main className="main">
            <div className='main__preview preview'>
                <section className="preview__body">
                    <div className="preview__logo">
                        <img src={logo} alt="logo" className="preview__image" />
                    </div>
                    <div className='preview__header'>
                        <h1 className="preview__title">Under Construction</h1>
                        <h5 className="preview__subtitle">We're making lots of improvements and will be back soon</h5>
                    </div>
                    <Countdown className="preview__countdown"/>
                    <div className="preview__link">
                        <p className="preview__text">Check our event page when you wait:</p>
                        <a href="www.google.com" className="preview__button" target='_blank'><span>Go to the event</span></a>
                    </div>
                </section>
                <Subscribe/>
            </div >
        </main>
    );
}