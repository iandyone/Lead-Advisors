import AOS from 'aos';
import Main from '../Main/main';
import Popup from '../Popup/popup';
import SubscribeModal from '../SubscribeModal/subscribeModal';
import Events from '../Events/events';
import { useEffect } from 'react';
import './app.scss';
import 'aos/dist/aos.css';

export default function App() {
    
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="wraper">
            <Main />
            <Events />
            <Popup>
                <SubscribeModal className="popup__modal"/>
            </Popup>
        </div>
    );
}