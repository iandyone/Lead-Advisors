import Form from '../Form/form';
import './subscribe.scss';

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe__body">
                <Form className={'subscribe__form'} API_URL='http://localhost:5000' />
                <a href="#events" className="subscribe__link"><span>Other Events</span></a>
            </div>
        </div>
    );
}