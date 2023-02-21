import './timer.scss';

export default function Timer(props) {
    const {className, value, timeFormat, type } = props;
    const currentScale = timeFormat[type];

    return(
        <div className={`${className} timer`}>
            <h3 className="timer__value">{value}</h3>
            <p className="timer__scale">{currentScale}</p>
        </div>
    );
}