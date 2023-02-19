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

    useEffect(() => {
        setInterval(eventDateCounter, 1000);
    })

    return (
        <div className={`${className} countdown`}>
            <Timer className={'countdown__timer'} scale='Days' value={restTime.days} />
            <Timer className={'countdown__timer'} scale='Hours' value={restTime.hours} />
            <Timer className={'countdown__timer'} scale='Minutes' value={restTime.minutes} />
            <Timer className={'countdown__timer'} scale='Seconds' value={restTime.seconds} />
        </div>
    );
}