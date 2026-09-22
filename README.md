### Hi, I'm Zeeshan 👋

**Technical Lead · Backend & Data Integration** — fourteen years building event-driven platforms, data pipelines and the backend infrastructure that makes everything else fast.

- 🌐 [mzeeshanu.com](https://mzeeshanu.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/mzeeshanu)
- 🛠 C# / .NET · SQL Server · Redis · Azure · event-driven architecture · ETL

---

<details>
<summary>About this repo</summary>

This repository is also the source of [mzeeshanu.com](https://mzeeshanu.com) — a Next.js site deployed on Railway.

```bash
npm install
npm run dev        # http://localhost:3000
```

Content lives in `src/content/public.ts`. Details shown only after unlocking (employers, locations, dates) are
**not** in this repo: they come from the `PRIVATE_CONTENT` environment variable (see `private-content.example.json`),
and the unlock is checked against `ACCESS_CODE`. Locally, put them in `private-content.json` and `.env.local`
(both gitignored).

</details>
