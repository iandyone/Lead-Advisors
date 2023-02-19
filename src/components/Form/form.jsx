import axios from "axios";
import { useState } from "react";
import "./form.scss";


export default function Form(props) {
    const { className, API_URL } = props;
    const [email, setEmail] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            alert(email);
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