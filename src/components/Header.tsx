const nav = [
  { href: '#projects', label: 'Мероприятия' },
  { href: '#books', label: 'Книги' },
]

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="wordmark" aria-label="Александр Горас, наверх">Александр Горас</a>
        <div className="header-rule" aria-hidden="true"><span /></div>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  )
}
