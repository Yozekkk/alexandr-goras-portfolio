import { useEffect, useState } from 'react'

const sections = ['home', 'projects', 'books'] as const
export type SectionId = typeof sections[number]

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible && sections.includes(visible.target.id as SectionId)) {
        setActive(visible.target.id as SectionId)
      }
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] })

    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return active
}
