import { projectCopy } from '../content'
import { links } from '../links'
import { Reveal } from './Reveal'
import { SocialIcon, type SocialName } from './SocialIcon'

const socials: { key: SocialName; label: string }[] = [
  { key: 'telegram', label: 'Telegram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'email', label: 'Email' },
]

export function Books() {
  return <section className="books-section" id="books" aria-labelledby="books-heading">
    <div className="container">
      <div className="section-line" aria-hidden="true"><span>✦</span></div>
      <Reveal className="books-layout">
        <div className="books-content">
          <h2 id="books-heading">Книги<br />объединяют</h2>
          <p className="section-intro">{projectCopy.books}.</p>
          <div id="contacts" className="social-area">
            <h3>Контакты проекта</h3>
            <div className="social-grid">
              {socials.map(({ key, label }) => {
                const address = links.books[key]
                const inner = <><SocialIcon name={key} /><span>{label}</span></>
                return address ? <a key={key} className="social-link" href={key === 'email' ? `mailto:${address}` : address} target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'}>{inner}</a> : <span key={key} className="social-link is-unavailable" aria-label={`${label}: адрес пока не подтверждён`} title="Адрес пока не подтверждён">{inner}</span>
              })}
            </div>
            <p className="links-note">Адреса этих страниц уточняются.</p>
          </div>
        </div>
        <div className="books-logo-frame">
          <img src="./images/russian-books.webp" width="960" height="850" alt="Оригинальный логотип Russian Books — «Книги объединяют»" loading="lazy" />
        </div>
      </Reveal>
    </div>
  </section>
}
