import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPopupActivity } from "../../store/reducers/popupSlice";
import { setSubscriptionSuccess } from "../../store/reducers/subscribtionSlice";
import axios from "axios";
import "./form.scss";

export default function Form(props) {
    const { className, API_URL } = props;
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    function isValidEmail(email) {
        return /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(email);
    }

    async function submit(event, email) {
        event.preventDefault();
        event.target.blur();
        const isEmailValid = isValidEmail(email);
        dispatch(setSubscriptionSuccess(isEmailValid))

        if (email) {
            try {
                if (isEmailValid) {
                    await axios.post(API_URL, { email })
                }
            } catch (error) {
                console.log(`Fetching error: ${error.message}`);
            } finally {
                dispatch(setPopupActivity(true));
            }
        }
    }

    return (
        <form action="" className={`${className} form`} onSubmit={(e) => submit(e, email)}>
            <input type="email" name="email" className='form__email' placeholder='Enter your Email and get notified' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className='form__button'><span></span></button>
        </form>
    );
}