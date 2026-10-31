import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon'
import { HugeiconsIcon } from '@hugeicons/react'
import type { SocialDestination } from '../links'
import { SocialIcon } from './SocialIcon'

const platformLabels = {
  telegram: 'Telegram',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  email: 'Email',
} as const

export function SocialLink({ link }: { link: SocialDestination }) {
  return <a className="social-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Открыть ${link.label}`}>
    <SocialIcon name={link.platform} />
    <span>{platformLabels[link.platform]}</span>
    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.6} aria-hidden="true" />
  </a>
}
