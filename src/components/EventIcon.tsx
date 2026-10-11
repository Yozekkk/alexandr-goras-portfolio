import { HugeiconsIcon } from '@hugeicons/react'
import Cards01Icon from '@hugeicons/core-free-icons/Cards01Icon'
import ChefHatIcon from '@hugeicons/core-free-icons/ChefHatIcon'
import DartIcon from '@hugeicons/core-free-icons/DartIcon'
import Fire03Icon from '@hugeicons/core-free-icons/Fire03Icon'
import MusicNote01Icon from '@hugeicons/core-free-icons/MusicNote01Icon'

const eventIcons = {
  'live-music': MusicNote01Icon,
  'saturday-light': Fire03Icon,
  challenge: DartIcon,
  'game-saturday': Cards01Icon,
  gurman: ChefHatIcon,
} as const

export function EventIcon({ id }: { id: keyof typeof eventIcons }) {
  return <HugeiconsIcon icon={eventIcons[id]} size={23} strokeWidth={1.5} aria-hidden="true" />
}
