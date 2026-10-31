# Проверка социальных ссылок — 2026-10-31

## Источник и соответствие

Пять новых URL предоставлены владельцем. Для Facebook адреса проверены по конечному URL после перенаправления и по доступным метаданным страницы. Успешный HTTP-ответ сам по себе не использовался как доказательство принадлежности.

| Исходный адрес | Конечный адрес | Результат |
| --- | --- | --- |
| `t.me/music_budapest` | тот же | Telegram отдаёт заголовок «Мероприятия Будапешт \| EVENTS». Раздел мероприятий. |
| `t.me/RussianBooksBudapest` | тот же | Telegram отдаёт заголовок «Russian Books Budapest». Раздел книг. |
| `instagram.com/russianbooks_budapest/` | тот же | Instagram отдаёт заголовок профиля «Русские книги Будапешт … (@russianbooks_budapest)». Чистый URL работает без tracking-параметра. |
| `facebook.com/share/g/1cFETJZoQ7/` | `facebook.com/groups/rbbudapest/` | Facebook отдаёт заголовок «Russian books. Книга объединяет». Раздел книг. |
| `facebook.com/share/g/1E6ToHys7C/` | `facebook.com/groups/musicbudapest/` | Канонический путь `musicbudapest` совпадает с тематикой и именем Telegram мероприятий. Facebook выдаёт только общий заголовок «Facebook», поэтому точное название группы не установлено. |
| Прежний `facebook.com/share/g/1DqER8V5mK/` | `facebook.com/groups/musicbudapest/` | Та же группа, что по новой ссылке мероприятий. Сохранён как исходный адрес в `src/links.ts`, отдельная кнопка не нужна. |

Facebook может требовать вход или показывать разную разметку. В браузерной проверке переход по книжной ссылке открыл вкладку с заголовком «Russian books. Книга объединяет», по ссылке мероприятий — вкладку с общим заголовком «Facebook». Это ограничение не меняет конечных канонических путей.

## Проверка сборки

Снимки из локального production preview: [390 px](../screenshots/social-update/390.webp), [768 px](../screenshots/social-update/768.webp), [1440 px](../screenshots/social-update/1440.webp). На всех трёх ширинах нет горизонтального переполнения; пять активных ссылок имеют `target="_blank"` и `rel="noopener noreferrer"`. Playwright открыл отдельные вкладки для обоих Telegram, обеих Facebook-групп и Instagram; консоль осталась без ошибок. Неизвестные TikTok и email остаются `null`.

Vercel preview `dpl_67AQBSvAyEjXK45idaW26HSsmfdG` (`alexandr-goras-portfolio-dszkuyu2g-yozekkk1.vercel.app`) собран из тех же исходников. После устранения инлайнинга шрифта, который нарушал строгий CSP, повторная проверка preview показала 0 ошибок и 0 предупреждений в консоли. Предыдущий рабочий production deployment для возможного отката: `dpl_7JtwLyfasAcz4fmYLzwiABvGTHXo`.
