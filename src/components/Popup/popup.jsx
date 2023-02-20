import './popup.scss';
import { setPopupActivity } from '../../store/reducers/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Popup(props) {
    const { children } = props;
    const dispatch = useDispatch();
    const isPopupActive = useSelector(store => store.popup.isPopupActive);
 

    return (
        <div className={isPopupActive ? "popup active" : "popup"} onClick={() => dispatch(setPopupActivity(false))}>
            <div className={isPopupActive ? "popup__content active" : "popup__content"} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}