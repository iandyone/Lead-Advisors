import './countdown.scss';
import Timer from "../Timer/timer";
import { useEffect, useState } from 'react';

export default function Countdown(props) {
    const { className } = props;
    const eventDate = new Date(`May 31 ${new Date().getFullYear() + 1} 00:00:00`);
    const [mobileFlag, setMobileFlag] = useState(false);

    const [restTime, setRestTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
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
        return (+value < 10) ? `0${+value}` : value;
    }

    function onResize(newTimeFormat) {
        if (window.innerWidth <= 768) {
            setTimeFormat(newTimeFormat)
        }
    }

    useState(() => {
        if (window.innerWidth <= 768) {
            setMobileFlag(true);
        } else {
            setMobileFlag(false)
        }
    })

    useEffect(() => {
        setInterval(eventDateCounter, 1000);
    })

    useEffect(() => {
        if (mobileFlag) {
            const newTimeFormat = {
                days: 'DD',
                hours: 'HH',
                minutes: 'MM',
                seconds: 'SS'
            }
            window.addEventListener('resize', onResize);
            onResize(newTimeFormat);
        }

        return () => window.removeEventListener('resize', onResize);
    }, [] );

    return (
        <div className={`${className} countdown`} data-aos="fade-down" data-aos-delay="500" data-aos-duration="800">
            <Timer className={'countdown__timer'} scale={timeFormat.days} value={restTime.days} />
            <Timer className={'countdown__timer'} scale={timeFormat.hours} value={restTime.hours} />
            <Timer className={'countdown__timer'} scale={timeFormat.minutes} value={restTime.minutes} />
            <Timer className={'countdown__timer'} scale={timeFormat.seconds} value={restTime.seconds} />
        </div>
    );
}