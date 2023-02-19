import './countdown.scss';
import Timer from "../Timer/timer";
import { useEffect, useState } from 'react';

export default function Countdown(props) {
    const { className } = props;
    const eventDate = new Date(`May 31 ${new Date().getFullYear() + 1} 00:00:00`);
    const [restTime, setRestTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [timeFormat, setTimeFormat] = useState({
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    })

    function eventDateCounter() {
        const currentTime = new Date();
        const timeBeforeEvent = eventDate - currentTime;

        setRestTime({
            days: getValidValue(Math.floor(timeBeforeEvent / 1000 / 60 / 60 / 24)),
            hours: getValidValue(Math.floor(timeBeforeEvent / 1000 / 60 / 60) % 24),
            minutes: getValidValue(Math.floor(timeBeforeEvent / 1000 / 60) % 60),
            seconds: getValidValue(Math.floor(timeBeforeEvent / 1000) % 60),
        })
    }

    function getValidValue(value) {
        return (value < 10) ? `0${value}` : value;
    }

    function onResize (newTimeFormat) {
        if( window.innerWidth <= 768 ) {
            setTimeFormat(newTimeFormat)
        }
     }

    useEffect(() => {
        setInterval(eventDateCounter, 1000);
    })

    useEffect(() => {
        const newTimeFormat = {
            days: 'DD',
            hours: 'HH',
            minutes: 'MM',
            seconds: 'SS'
        }
        window.addEventListener('resize', onResize);
        onResize(newTimeFormat);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div className={`${className} countdown`}>
            <Timer className={'countdown__timer'} scale={timeFormat.days} value={restTime.days} />
            <Timer className={'countdown__timer'} scale={timeFormat.hours} value={restTime.hours} />
            <Timer className={'countdown__timer'} scale={timeFormat.minutes} value={restTime.minutes} />
            <Timer className={'countdown__timer'} scale={timeFormat.seconds} value={restTime.seconds} />
        </div>
    );
}