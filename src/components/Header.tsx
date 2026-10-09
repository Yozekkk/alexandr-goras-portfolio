import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { href: '#projects', label: 'Проекты' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="wordmark" aria-label="Александр Горас — наверх" onClick={() => setIsOpen(false)}>Александр Горас</a>
        <div className="header-rule" aria-hidden="true"><span>✦</span></div>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button className="menu-toggle" type="button" aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(current => !current)}>
          {isOpen ? <X size={23} strokeWidth={1.6} /> : <Menu size={23} strokeWidth={1.6} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${isOpen ? 'is-open' : ''}`} aria-label="Мобильная навигация" inert={!isOpen}>
        {nav.map(item => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}
      </nav>
    </header>
  )
}
