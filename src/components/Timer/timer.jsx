import './timer.scss';

export default function Timer(props) {
    const {className, scale, value } = props;

    return(
        <div className={`${className} timer`}>
            <h3 className="timer__value">{value}</h3>
            <p className="timer__scale">{scale}</p>
        </div>
    );
}