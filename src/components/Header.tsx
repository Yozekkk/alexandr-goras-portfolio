import { useActiveSection } from '../hooks/useActiveSection'

const nav = [
  { id: 'projects', href: '#projects', label: 'Мероприятия' },
  { id: 'books', href: '#books', label: 'Книги' },
]

export function Header() {
  const active = useActiveSection()
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="wordmark" aria-label="Александр Горас, наверх">Александр Горас</a>
        <div className="header-rule" aria-hidden="true"><span /></div>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {nav.map(item => <a key={item.href} href={item.href} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  )
}
