import { useDispatch } from 'react-redux';
import { setPopupActivity } from '../../store/reducers/popupSlice';
import './subscribeModal.scss';

export default function SubscribeModal(props) {
    const { className } = props;
    const dispatch = useDispatch();

    return (
        <div className={`${className} modal`}>
            <div className="modal__body">
                <div className="modal__close-button" onClick={() => dispatch(setPopupActivity(false))}></div>
                <h3 className="modal__title">success!</h3>
                <p className="modal__text">You have successfully subscribed to the email newsletter</p>
                <div className="modal__button" onClick={() => dispatch(setPopupActivity(false))}>Close</div>
            </div>
        </div>
    );
}