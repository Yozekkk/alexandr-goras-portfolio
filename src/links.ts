export type SocialPlatform = 'telegram' | 'facebook' | 'instagram' | 'tiktok' | 'email'
export type ProjectId = 'events' | 'books'

export type SocialDestination = {
  platform: SocialPlatform
  project: ProjectId
  label: string
  href: string
  evidence: 'owner-provided' | 'facebook-title' | 'facebook-canonical-path'
  suppliedUrls?: readonly string[]
}

// Facebook share URLs were resolved to their canonical groups on 2026-10-31.
// The former events share URL resolves to the same /groups/musicbudapest/ group.
export const links = {
  events: {
    telegram: {
      platform: 'telegram', project: 'events', label: 'Telegram мероприятий',
      href: 'https://t.me/music_budapest', evidence: 'owner-provided',
    },
    facebook: {
      platform: 'facebook', project: 'events', label: 'Facebook-группа мероприятий',
      href: 'https://www.facebook.com/groups/musicbudapest/', evidence: 'facebook-canonical-path',
      suppliedUrls: [
        'https://www.facebook.com/share/g/1E6ToHys7C/?mibextid=wwXIfr',
        'https://www.facebook.com/share/g/1DqER8V5mK/',
      ],
    },
  },
  books: {
    telegram: {
      platform: 'telegram', project: 'books', label: 'Telegram книжного проекта',
      href: 'https://t.me/RussianBooksBudapest', evidence: 'owner-provided',
    },
    facebook: {
      platform: 'facebook', project: 'books', label: 'Facebook-группа книжного проекта',
      href: 'https://www.facebook.com/groups/rbbudapest/', evidence: 'facebook-title',
      suppliedUrls: ['https://www.facebook.com/share/g/1cFETJZoQ7/?mibextid=wwXIfr'],
    },
    instagram: {
      platform: 'instagram', project: 'books', label: 'Instagram книжного проекта',
      href: 'https://www.instagram.com/russianbooks_budapest/', evidence: 'owner-provided',
    },
    tiktok: null,
    email: null,
  },
} as const satisfies {
  events: { telegram: SocialDestination; facebook: SocialDestination | null }
  books: { telegram: SocialDestination; facebook: SocialDestination | null; instagram: SocialDestination; tiktok: SocialDestination | null; email: SocialDestination | null }
}
