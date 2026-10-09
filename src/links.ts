// Адреса книжного проекта заполняются только после проверки владельцем.
// null сохраняет кнопки видимыми, но не отправляет посетителя на выдуманный адрес.
export const links = {
  community: 'https://www.facebook.com/share/g/1DqER8V5mK/',
  books: {
    telegram: null,
    facebook: null,
    instagram: null,
    tiktok: null,
    email: null,
  },
} as const satisfies {
  community: string
  books: Record<string, string | null>
}
