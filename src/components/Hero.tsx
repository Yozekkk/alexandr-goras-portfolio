export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="portrait-wrap">
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-frame">
          <img src="./images/alexandr-goras.webp" width="720" height="720" alt="Александр Горас" fetchPriority="high" />
        </div>
      </div>
      <div className="hero-copy">
        <h1 id="hero-title">Александр<br />Горас</h1>
        <div className="title-rule" aria-hidden="true"><span>✦</span></div>
        <p>Организатор мероприятий проекта «Мероприятия Будапешт». Владелец частной коллекции «Книги объединяют».</p>
        <a className="text-link" href="#projects">Смотреть проекты <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
