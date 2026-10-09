import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { events, projectCopy } from '../content'
import { links } from '../links'
import { Reveal } from './Reveal'

function EventAccordion() {
  const [openId, setOpenId] = useState<string | null>(events[0].id)

  return <div className="event-list">
    {events.map((event, index) => {
      const open = openId === event.id
      return <div className={`event-row ${open ? 'is-open' : ''}`} key={event.id}>
        <h3>
          <button type="button" id={`trigger-${event.id}`} aria-expanded={open} aria-controls={`panel-${event.id}`} onClick={() => setOpenId(open ? null : event.id)}>
            <span className="event-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="event-title">{event.title}</span>
            <span className="event-icon" aria-hidden="true">{open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}</span>
          </button>
        </h3>
        <div className="event-panel" id={`panel-${event.id}`} role="region" aria-labelledby={`trigger-${event.id}`} inert={!open}>
          <div className="event-panel-inner">
            <div className="event-panel-content">
              {'detailTitle' in event && <h4>{event.detailTitle}</h4>}
              <p>{event.description}.</p>
            </div>
          </div>
        </div>
      </div>
    })}
  </div>
}

export function Events() {
  return <section className="events-section" id="projects" aria-labelledby="events-heading">
    <div className="container">
      <div className="section-line" aria-hidden="true"><span>✦</span></div>
      <Reveal className="events-layout">
        <div className="event-logo-column">
          <div className="event-logo-frame">
            <img src="./images/budapest-events.webp" width="1254" height="1254" alt="Золотой логотип проекта «Мероприятия Будапешт» с пятью направлениями" loading="lazy" />
          </div>
        </div>
        <div className="events-content">
          <h2 id="events-heading">Мероприятия<br />Будапешт</h2>
          <p className="section-intro">{projectCopy.events}.</p>
          <EventAccordion />
        </div>
      </Reveal>
      <Reveal className="community">
        <p>{projectCopy.community}.</p>
        <a href={links.community} target="_blank" rel="noopener noreferrer" className="primary-link">Присоединиться к сообществу <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" /></a>
      </Reveal>
    </div>
  </section>
}
