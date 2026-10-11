import { HugeiconsIcon } from '@hugeicons/react'
import BookOpen01Icon from '@hugeicons/core-free-icons/BookOpen01Icon'
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon'
import Home01Icon from '@hugeicons/core-free-icons/Home01Icon'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'

const items: { id: SectionId; href: string; label: string; icon: typeof Home01Icon }[] = [
  { id: 'home', href: '#top', label: 'Главная', icon: Home01Icon },
  { id: 'projects', href: '#projects', label: 'События', icon: Calendar03Icon },
  { id: 'books', href: '#books', label: 'Книги', icon: BookOpen01Icon },
]

export function MobileDock() {
  const active = useActiveSection()

  return (
    <nav className="mobile-dock" aria-label="Навигация по разделам">
      <div className="mobile-dock-inner">
        {items.map(item => (
          <a key={item.id} href={item.href} className={active === item.id ? 'is-active' : undefined} aria-current={active === item.id ? 'location' : undefined}>
            <span className="dock-icon" aria-hidden="true"><HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.6} /></span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
