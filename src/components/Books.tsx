import { projectCopy } from '../content'
import { links } from '../links'
import { Reveal } from './Reveal'
import { SocialIcon } from './SocialIcon'
import { BookLaurel } from './GreekDecor'
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon'
import { HugeiconsIcon } from '@hugeicons/react'
import { useContactEntrance } from '../hooks/useContactEntrance'

const socials = [links.books.telegram, links.books.facebook, links.books.instagram]
const platformLabels = { telegram: 'Telegram', facebook: 'Facebook', instagram: 'Instagram' }

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
              {socials.map(link => <a key={link.platform} className="social-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Открыть ${link.label}`}><SocialIcon name={link.platform} /><span>{platformLabels[link.platform]}</span><HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.6} aria-hidden="true" /></a>)}
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
