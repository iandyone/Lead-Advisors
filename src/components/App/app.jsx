import './app.scss';
import Main from '../Main/main';
import Popup from '../Popup/popup';
import SubscribeModal from '../SubscribeModal/subscribeModal';

export default function App() {
    return (
        <div className="wraper">
            <Main />
            <Popup >
                <SubscribeModal />
            </Popup>
        </div>
    );
}