import { HugeiconsIcon } from '@hugeicons/react'
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon'
import { HeroArchitecture, OliveBranch } from './GreekDecor'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-frame container">
        <div className="hero-visual">
          <HeroArchitecture />
          <div className="hero-guide hero-guide-horizontal" aria-hidden="true" />
          <div className="hero-guide hero-guide-vertical" aria-hidden="true" />
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src="./images/alexandr-goras.webp" width="720" height="720" alt="Александр Горас" fetchPriority="high" />
            </div>
          </div>
          <OliveBranch side="left" />
        </div>
        <div className="hero-copy">
          <h1 id="hero-title" aria-label="Александр Горас"><span className="title-line"><span>Александр</span></span><span className="title-line"><span>Горас</span></span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p>Организатор мероприятий проекта «Мероприятия Будапешт». Владелец частной коллекции «Книги объединяют».</p>
          <a className="text-link" href="#projects">Смотреть проекты <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.6} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
