import { HugeiconsIcon } from '@hugeicons/react'
import Facebook01Icon from '@hugeicons/core-free-icons/Facebook01Icon'
import InstagramIcon from '@hugeicons/core-free-icons/InstagramIcon'
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon'
import TelegramIcon from '@hugeicons/core-free-icons/TelegramIcon'
import TiktokIcon from '@hugeicons/core-free-icons/TiktokIcon'
import type { SocialPlatform } from '../links'

export function SocialIcon({ name }: { name: SocialPlatform }) {
  const icons = { telegram: TelegramIcon, facebook: Facebook01Icon, instagram: InstagramIcon, tiktok: TiktokIcon, email: Mail01Icon }
  return <HugeiconsIcon icon={icons[name]} size={20} strokeWidth={1.6} aria-hidden="true" />
}
