import { Facebook, Instagram, Mail, Send } from 'lucide-react'

export type SocialName = 'telegram' | 'facebook' | 'instagram' | 'tiktok' | 'email'

export function SocialIcon({ name }: { name: SocialName }) {
  const common = { size: 20, strokeWidth: 1.8, 'aria-hidden': true as const }
  switch (name) {
    case 'telegram': return <Send {...common} />
    case 'facebook': return <Facebook {...common} />
    case 'instagram': return <Instagram {...common} />
    case 'email': return <Mail {...common} />
    case 'tiktok': return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M16.7 2c.3 2.3 1.5 3.7 3.8 3.9v3.5a8.4 8.4 0 0 1-3.8-1.1v7a6.3 6.3 0 1 1-6.3-6.3l1 .1v3.6a3 3 0 1 0 2 2.8V2h3.3Z"/></svg>
  }
}
