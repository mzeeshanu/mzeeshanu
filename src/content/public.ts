// Everything in this file ships to every visitor. Keep employer names, locations and exact dates in private.ts.

export const profile = {
  name: "Zeeshan Umar",
  role: "Technical Lead · Backend & Data Integration",
  intro:
    "Fourteen years building the systems that move data between the systems — event-driven platforms, pipelines, " +
    "and the quiet infrastructure that makes everything else fast.",
  about: [
    "I lead backend projects from the first requirements conversation through production: solution design, " +
      "code reviews, and the unglamorous work of making integrations reliable.",
    "Most of my career has been spent where systems meet — e-commerce platforms talking to CRMs, airline " +
      "reservation data feeding revenue-management engines, legacy applications learning to speak events. " +
      "I care about performance, about tests that make change safe, and about leaving teams better documented " +
      "than I found them.",
  ],
};

// The headline "impact" cards — the punch lines of the page.
export const impact = [
  {
    value: "Shopify ⇄ Back office",
    label: "Custom events, always in sync",
    text: "Event-driven integration that routes Shopify events into message processors, keeping storefront, CRM and back office in lockstep.",
  },
  {
    value: "min → sec",
    label: "Data healing & API speed",
    text: "Distributed Redis caching took critical API responses from minutes to seconds; automated reconciliation finds and heals missed updates.",
  },
  {
    value: "hrs → min",
    label: "ETL, re-engineered",
    text: "Cursor-based jobs rewritten and re-indexed to run in minutes; airline data pipelines up to 90% faster.",
  },
  {
    value: "Ship on green",
    label: "CI/CD pipelines",
    text: "Automated test suites wired into every pipeline, plus a reusable framework that validates services by replaying real event messages.",
  },
  {
    value: "Teams, levelled up",
    label: "Mentoring & best practices",
    text: "Coaching on SOLID, dependency injection and TDD through code review — and documentation that makes onboarding fast.",
  },
];

export const stack = ["C#", ".NET", "ASP.NET Core", "SQL Server", "Redis", "Azure", "Docker", "Shopify", "GraphQL", "REST", "Cosmos DB", "Serilog", "Datadog", "CI/CD", "Event-driven", "ETL"];

export type Era = {
  id: string;           // joins to private.ts
  year: number;         // drives the year counter
  period: string;       // public, coarse
  title: string;
  where: string;        // public, anonymised
  headline: string;
  points: string[];
};

export const eras: Era[] = [
  {
    id: "current",
    year: 2022,
    period: "2022 — Present",
    title: "Senior Software Engineer · Technical Lead",
    where: "Global e-commerce company",
    headline: "Shopify, in sync.",
    points: [
      "Built an event-driven integration platform: Shopify custom events flow through Hookdeck into message processors that keep storefront, CRM and back-office systems in sync.",
      "Added automated reconciliation — data healing that detects missed or out-of-order updates and repairs them without manual intervention.",
      "Cut critical Subscription Management API response times from minutes to seconds with a distributed Redis cache: automatic invalidation, distributed locking and atomic operations across multi-region Azure deployments.",
      "Built a queue-based notification service that groups payment events, enriches them with distributor hierarchy data and delivers targeted communications.",
      "Established an integration-testing framework and wired automated tests into CI/CD pipelines, so services are validated by replaying representative event messages.",
      "Created a reusable Serilog NuGet package with pluggable sinks — the move to Datadog became a configuration change instead of a rewrite.",
      "Mentor engineers through code reviews and coaching on SOLID principles, dependency injection and TDD; built internal AI utilities for non-engineering staff.",
    ],
  },
  {
    id: "saas",
    year: 2021,
    period: "2021 — 2022",
    title: "Senior Software Engineer",
    where: "Telecom analytics SaaS",
    headline: "Hours, down to minutes.",
    points: [
      "Led customer onboarding and integration delivery, turning client requirements into data mappings, implementation plans and production solutions.",
      "Designed Adobe Analytics integrations that captured user interactions as structured events for product teams.",
      "Rewrote a cursor-based customer data job and its indexing so it finished in minutes instead of hours.",
    ],
  },
  {
    id: "airline",
    year: 2015,
    period: "2015 — 2021",
    title: "Senior Software Engineer",
    where: "Airline technology provider",
    headline: "Airline data, 90% faster.",
    points: [
      "Led bidirectional ETL and secure data-exchange services that turned reservation data into analytics-ready datasets for third-party revenue-management platforms — powering dynamic fare pricing and seat inventory.",
      "Cut airline data-processing times by up to 90% by optimising SQL, stored procedures, indexing and multithreaded ETL across highly normalised databases.",
      "Created a centralised document store for lookup, booking and historical travel data, enabling analytics and personalised offers.",
      "Led legacy-platform migrations with airline customers through data mapping and validation.",
    ],
  },
  {
    id: "first",
    year: 2012,
    period: "2012 — 2015",
    title: "Software Engineer",
    where: "Enterprise document software",
    headline: "First commits.",
    points: [
      "Built enterprise web applications with JavaScript-heavy input workflows, server-side processing and automated PDF generation.",
      "Tuned SQL queries and relational designs to clear complex processing bottlenecks.",
    ],
  },
  {
    id: "degree",
    year: 2008,
    period: "2008 — 2012",
    title: "B.S. Computer Science",
    where: "University",
    headline: "Where it started.",
    points: [],
  },
];

export const projects = [
  {
    name: "AnyJobHere",
    url: "https://anyjobhere.com",
    status: "In development",
    summary:
      "A location-aware job radar: discovers nearby employers, crawls their career pages, aggregates openings and " +
      "surfaces statistics about job types and requested skills. Built on swappable location and search providers " +
      "with layered caching.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C#", ".NET / ASP.NET Core", "T-SQL", "JavaScript", "HTML/CSS"] },
  { group: "Architecture", items: ["Event-driven & service-oriented design", "Microservices", "Message queues", "Distributed caching & locking", "REST & GraphQL APIs"] },
  { group: "Data", items: ["SQL Server", "Redis", "Cosmos DB", "ETL pipelines", "Query & index tuning", "Multithreaded processing"] },
  { group: "Cloud & delivery", items: ["Azure", "Azure Functions", "Docker", "CI/CD", "NuGet"] },
  { group: "Quality", items: ["TDD", "Integration testing", "Structured logging (Serilog, Datadog)", "Code review"] },
  { group: "AI-assisted development", items: ["Claude Code", "GitHub Copilot", "ChatGPT", "Ollama"] },
];

// Personal side — sections with no entries are hidden until filled in.
export const interests: { title: string; text: string }[] = [];

export const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mzeeshanu" },
  { label: "GitHub", href: "https://github.com/mzeeshanu" },
];

export const contactEmail: string | null = null; // TBD — e.g. hi@mzeeshanu.com once email routing is set up
