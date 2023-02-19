import './app.scss';
import AOS from 'aos';
import { useEffect } from 'react';
import  Main  from '../Main/main';

export default function App (){
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="wraper">
            <Main />
            {/* <Main /> */}
        </div>
    );
}