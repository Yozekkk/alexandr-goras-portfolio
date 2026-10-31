# Александр Горас | портфолио

Адаптивный сайт Александра Гораса о проектах «Мероприятия Будапешт» и «Книги объединяют». Построен на React, TypeScript и Vite. Интерфейс использует Manrope Variable, бесплатные Hugeicons, авторскую SVG-графику и CSS-анимации с учётом `prefers-reduced-motion`. На мобильных экранах доступна компактная навигационная панель, а пять направлений мероприятий раскрываются как аккордеон.

## Запуск

Нужен Node.js 22 или новее.

```bash
pnpm install
pnpm dev
```

Проверка типов и production-сборка:

```bash
pnpm run typecheck
pnpm run build
pnpm preview
```

## Социальные сети

Все адреса и сведения об их проверке собраны в [`src/links.ts`](src/links.ts). Ссылки открываются в новой вкладке.

| Проект | Платформа | Адрес |
| --- | --- | --- |
| Мероприятия Будапешт | Telegram | <https://t.me/music_budapest> |
| Мероприятия Будапешт | Facebook | <https://www.facebook.com/groups/musicbudapest/> |
| Книги объединяют | Telegram | <https://t.me/RussianBooksBudapest> |
| Книги объединяют | Facebook | <https://www.facebook.com/groups/rbbudapest/> |
| Книги объединяют | Instagram | <https://www.instagram.com/russianbooks_budapest/> |

Новые Facebook share URL перенаправляют на указанные канонические группы. Группа `rbbudapest` отдаёт заголовок «Russian books. Книга объединяет». У `musicbudapest` Facebook показывает только общий заголовок «Facebook», поэтому её точное название не утверждается; принадлежность разделу мероприятий следует из канонического пути группы и совпадения с именем предоставленного Telegram. Старый адрес `https://www.facebook.com/share/g/1DqER8V5mK/` ведёт на ту же группу `musicbudapest` и сохранён в метаданных, но отдельной кнопкой не дублируется. TikTok и email книжного проекта остаются `null`.

## Изображения

В `public/images` лежат оптимизированные WebP-копии предоставленных портрета и двух логотипов. Исходные PNG в корне проекта не изменены и исключены из Git. Оригинальные изображения нужны только для локального архива; сайт использует WebP-копии.

Manrope Variable подключён локально через `@fontsource-variable/manrope` и не зависит от внешнего CDN.

## Публикация

Код: [GitHub](https://github.com/Yozekkk/alexandr-goras-portfolio). Целевой production-домен: [Vercel](https://goras-portfolio.vercel.app/).

Проект использует `pnpm run build`, выходная папка `dist`. Файл `vercel.json` задаёт параметры сборки и защитные HTTP-заголовки. Подтверждённый проект Vercel: `alexandr-goras-portfolio`, Project ID `prj_MaJsZmw02c6ER765ZGYuVNRxLeCt`, команда `yozekkk1` (`team_cuj7VH9fJ7HKazyHPjs5FL7B`). Домен `goras-portfolio.vercel.app` закреплён за этим проектом. Перед каждым production-деплоем повторно сверяйте Project ID, команду и домен; не создавайте проект с названием домена.

## Cinematic classical experience

The first visit of each browser session plays a short CSS introduction: drawing guides, arch, portrait, name, description and project link. If JavaScript, session storage or animation is unavailable, the completed composition remains visible. `prefers-reduced-motion` bypasses the sequence. The project-specific motion rules live in [`skills/alexandr-goras-motion-direction/SKILL.md`](skills/alexandr-goras-motion-direction/SKILL.md).

Comparative browser captures are stored in `screenshots/cinematic/`. They are evidence for the redesign branch, not production assets.
