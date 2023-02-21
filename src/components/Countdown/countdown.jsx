import './countdown.scss';
import Timer from "../Timer/timer";
import { useEffect, useState } from 'react';

export default function Countdown(props) {
    const { className } = props;
    const eventDate = new Date(`May 31 ${new Date().getFullYear()} 00:00:00`);
    const [scale, setScale] = useState('full');
    const [restTime, setRestTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const timeFormat = {
        full: {
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds'
        },
        short: {
            days: 'DD',
            hours: 'HH',
            minutes: 'MM',
            seconds: 'SS'
        },
    }

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
        return (+value < 10) ? `0${+value}` : value;
    }

    useEffect(() => {
        setInterval(eventDateCounter, 1000);
    })

    function onResize() {
        window.onresize = () => {
            const currentScale = (window.innerWidth <= 992) ? 'short' : 'full';
            setScale(currentScale);
        }
    }

    useEffect(() => {
        onResize();
    })

    return (
        <div className={`${className} countdown`} data-aos="fade-down" data-aos-delay="500" data-aos-duration="800">
            <Timer className={'countdown__timer'} type={'days'} timeFormat={timeFormat[scale]} value={restTime.days} />
            <Timer className={'countdown__timer'} type={'hours'} timeFormat={timeFormat[scale]} value={restTime.hours} />
            <Timer className={'countdown__timer'} type={'minutes'} timeFormat={timeFormat[scale]} value={restTime.minutes} />
            <Timer className={'countdown__timer'} type={'seconds'} timeFormat={timeFormat[scale]} value={restTime.seconds} />
        </div>
    );
}