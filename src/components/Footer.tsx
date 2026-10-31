import { MeanderDivider } from './GreekDecor'

export function Footer() {
  return <footer className="site-footer">
    <div className="container"><MeanderDivider /></div>
    <div className="container footer-inner">
      <a className="footer-name" href="#top">Александр Горас</a>
      <nav aria-label="Навигация внизу страницы">
        <a href="#top">Наверх</a>
        <a href="#projects">Мероприятия Будапешт</a>
        <a href="#books">Книги объединяют</a>
      </nav>
    </div>
    <div className="container footer-credit">
      <span>Сделано студией</span>
      <a
        className="footer-credit-link"
        href="https://ncea-studio.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="NCEA — сайт студии"
      >NCEA</a>
    </div>
  </footer>
}
