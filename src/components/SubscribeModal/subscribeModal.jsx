import { useDispatch, useSelector } from 'react-redux';
import { setPopupActivity } from '../../store/reducers/popupSlice';
import './subscribeModal.scss';

export default function SubscribeModal(props) {
    const { className } = props;
    const subStatus = useSelector(state => state.subscription.isSubscriptionSuccess);
    const dispatch = useDispatch();
    const title = (subStatus) ? "success" : "error"
    const text = (subStatus) ? "You have successfully subscribed to the email newsletter" : "Incorrect email address. Subscription declined"

    return (
        <div className={`${className} modal`}>
            <div className="modal__body">
                <div className="modal__close-button" onClick={() => dispatch(setPopupActivity(false))}></div>
                <h3 className="modal__title">{title}!</h3>
                <p className="modal__text">{text}</p>
                <div className="modal__button" onClick={() => dispatch(setPopupActivity(false))}>Close</div>
            </div>
        </div>
    );
}