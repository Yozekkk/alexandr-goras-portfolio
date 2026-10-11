import { HugeiconsIcon } from '@hugeicons/react'
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon'
import { HeroArchitecture, OliveBranch } from './GreekDecor'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-frame container">
        <HeroArchitecture />
        <OliveBranch side="left" />
        <OliveBranch side="right" />
        <div className="portrait-wrap">
          <div className="portrait-medallion" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="./images/alexandr-goras.webp" width="720" height="720" alt="Александр Горас" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">Александр<br />Горас</h1>
          <div className="title-rule" aria-hidden="true"><span /></div>
          <p>Организатор мероприятий проекта «Мероприятия Будапешт». Владелец частной коллекции «Книги объединяют».</p>
          <a className="text-link" href="#projects">Смотреть проекты <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={1.6} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
