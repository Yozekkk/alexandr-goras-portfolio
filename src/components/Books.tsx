import { projectCopy } from '../content'
import { links } from '../links'
import { Reveal } from './Reveal'
import { BookLaurel } from './GreekDecor'
import { SocialLink } from './SocialLink'
import { useContactEntrance } from '../hooks/useContactEntrance'

const socials = [links.books.telegram, links.books.facebook, links.books.instagram]

export function Books() {
  const contactsRef = useContactEntrance<HTMLDivElement>()
  return <section className="books-section" id="books" aria-labelledby="books-heading">
    <div className="container">
      <div className="section-line" aria-hidden="true"><span>✦</span></div>
      <Reveal className="books-layout">
        <div className="books-content">
          <h2 id="books-heading">Книги<br />объединяют</h2>
          <p className="section-intro">{projectCopy.books}.</p>
          <div id="contacts" className="social-area" ref={contactsRef}>
            <h3>Контакты проекта</h3>
            <div className="social-grid">
              {socials.map(link => <SocialLink key={link.platform} link={link} />)}
            </div>
            <p className="links-note">TikTok и email проекта пока не указаны.</p>
          </div>
        </div>
        <div className="books-visual">
          <BookLaurel />
          <div className="books-logo-shell">
            <div className="books-logo-frame">
              <img src="./images/russian-books.webp" width="960" height="850" alt="Оригинальный логотип Russian Books, «Книги объединяют»" loading="lazy" />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
}
