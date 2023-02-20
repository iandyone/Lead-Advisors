import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPopupActivity } from "../../store/reducers/popupSlice";
import "./form.scss";


export default function Form(props) {
    const { className, API_URL } = props;
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    async function submit(e) {
        e.preventDefault();
        try {
            dispatch(setPopupActivity(true));
            setEmail('');
            const response = await axios.post(API_URL, {
                email: email
            })
            console.log(response.status);
        } catch (error) {
            console.log(`Fetching error: ${error.message}`);
        }

    }

    return (
        <form action="" className={`${className} form`} onSubmit={(e) => submit(e)}>
            <input type="email" name="email" className='form__email' placeholder='Enter your Email and get notified' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className='form__button'><span></span></button>
        </form>
    );
}