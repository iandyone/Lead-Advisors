import './events.scss';
import Accordion from '../Accordion/accordion';

export default function Events() {
    return (
        <section className='events' id='events'>
            <h2 className="events__title">All Events</h2>
            <div className='events__body'>
                <Accordion className='events__accordion' />
            </div >
        </section>
    );
}