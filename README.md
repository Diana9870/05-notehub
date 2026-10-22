# NoteHub

Застосунок для створення, пошуку та видалення нотаток.
Стек: Vite, React, TypeScript, TanStack Query, Formik + Yup, axios, react-paginate, use-debounce, CSS-модулі.

## Запуск

1. Встановіть залежності: `npm install`
2. Отримайте токен у [документації бекенда](https://notehub-public.goit.study/api/docs)
3. Створіть файл `.env` за зразком `.env.example` і вкажіть токен:

   ```
   VITE_NOTEHUB_TOKEN=ваш_токен
   ```

4. `npm run dev` — запуск у режимі розробки, `npm run build` — збірка.

## Vercel

У налаштуваннях проєкту (Settings → Environment Variables) додайте змінну `VITE_NOTEHUB_TOKEN`.
