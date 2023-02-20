import './app.scss';
import Main from '../Main/main';
import Popup from '../Popup/popup';
import SubscribeModal from '../SubscribeModal/subscribeModal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

export default function App() {
    
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="wraper">
            <Main />
            <Popup >
                <SubscribeModal />
            </Popup>
        </div>
    );
}