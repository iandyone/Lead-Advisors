import './slide.scss';

export default function Slide(props) {
    const { className, id, title, image, isActive, handlerOnChange } = props;
    const slideClass = (isActive) ? 'slide active' : 'slide';
    
    return (
        <div className={`${className} ${slideClass}`}>
            <div className="slide__header" onClick={() => handlerOnChange(id)}>
                <h4 className="slide__title">{title}</h4>
                <p className="slide__order">{(id < 10) ? `0${id}` : id}</p>
            </div>
            <div className="slide__body">
                <div className="slide__menu">
                    <div className="slide__number">{(id < 10) ? `0${id}` : id}</div>
                    <h5 className="slide__name">{title}</h5>
                    <div className="slide__text">13.02.2023</div>
                    <a href="https://iandyone.github.io/CV" target={'_blank'} rel="noreferrer" className="slide__button">More information</a>
                </div>
                <div className="slide__content">
                    <img src={image} alt="slide__image" className="slide__image" />
                </div>
            </div>
        </div>
    );
}