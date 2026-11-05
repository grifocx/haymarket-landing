# Answers Update Guide

## Overview

The **Answers** section (`/answers`) is a question-and-answer content hub for the website.
Every answer is a single Markdown file, and the site builds everything else automatically:
the answer's own page, its topic page, the Answers index, client-side search, the sitemap,
and the "Common questions" blocks that appear on the Home, Services, and Catalog pages.

Adding or editing an answer requires **no code changes** — save a `.md` file and the
website rebuilds on Netlify with the new content.

## Where Answers Live

All answer files live in one folder:

```
content/answers/
```

Each file is named after its question, in lowercase with hyphens (e.g.
`how-much-does-a-bike-tune-up-cost.md`). The file name does not need to match anything
else — the page address comes from the `slug` line inside the file.

---

## Anatomy of an Answer File

```markdown
---
title: How much does a bike tune-up cost in Haymarket, VA?
slug: how-much-does-a-bike-tune-up-cost
topic: service-repair
featured: true
description: Tune-up pricing at Haymarket Bicycles — Level 1 is $99, Level 2 is $159...
answer_summary: Tune-ups at Haymarket Bicycles start at $99 for a Level 1...
updated: 2026-11-05
related: [whats-included-in-a-tune-up, how-much-does-flat-tire-repair-cost]
---

Body text goes here, written like the rest of the site: clear sentences, short
paragraphs, bold prices, and a closing call to action with the phone number.
```

### Frontmatter fields

| Field | Required? | Purpose |
|-------|-----------|---------|
| `title` | Yes | The question as a page title — how it appears in listings, search, and Google |
| `slug` | Yes | The page address: `/answers/<slug>`. Must be unique across all files, lowercase with hyphens |
| `topic` | Yes | One of the five topics (see below). Controls which topic page the answer appears on |
| `description` | Yes | Search-result blurb, **max 155 characters** — the build fails if it is longer |
| `answer_summary` | Yes | One-or-two-sentence direct answer. Shown in the highlighted box on the answer page, in listings, and read aloud by search engines |
| `updated` | Yes | Last-reviewed date, `YYYY-MM-DD`. Shown on the page as "Last updated" |
| `related` | Yes* | Other answers' slugs in `[slug-one, slug-two]` form — powers the "Related answers" section. Every slug must match a real file |
| `featured` | No | `true` puts the answer in the Home page's "Common questions" block. Keep this flag on only the handful of answers that belong on Home |

`related` is technically required by the loader — use an empty `[]` if there are
genuinely none.

### The five topics

| Value | Label | Answers appear on |
|-------|-------|-------------------|
| `service-repair` | Service and repair | Services page + topic page |
| `e-bikes` | E-bikes | Topic page |
| `buying` | Buying a bike | Catalog page + topic page |
| `bike-fit` | Bike fit | Topic page |
| `riding-local` | Riding locally | Topic page |

---

## How to Add a New Answer

1. **Copy an existing file** in `content/answers/` as a template — pick one with similar
   structure to the question you are writing.
2. **Edit the frontmatter**: new unique `slug`, correct `topic`, a description under 155
   characters, an `answer_summary` that answers the question in one or two sentences, and
   today's date in `updated`.
3. **Write the body.** Keep it direct — answer first, detail second. Use the shop's real
   prices, hours, and address (they live in `src/services.ts` and `src/shopInfo.ts`).
   End with a call to action: "Call (703) 754-1911" or a link to the relevant page.
4. **Check `related` links** — every slug you list must already exist as a file, and it is
   polite to add your new slug to the `related` list of the answers you linked.
5. **Rebuild or push.** The site now has:
   - a new page at `/answers/<slug>` with its own title, description, and FAQ structured
     data for search engines
   - the answer on its topic page and in the Answers index and search
   - the answer in the sitemap automatically
   - the answer in the Home "Common questions" block if you set `featured: true`
   - the answer on the Services or Catalog pages if its topic feeds one of those blocks

## How to Edit an Existing Answer

Open the file, change the text, and **always update the `updated` date** to the day you
made the change. That date is shown on the page and used for the sitemap's last-modified
value.

## What the Build Checks (and why it can fail)

The build validates every answer file and **stops with a clear error message** if any of
these are wrong:

- A required frontmatter field is missing or empty
- `description` is longer than 155 characters
- `updated` is not a real date in `YYYY-MM-DD` form
- `topic` is not one of the five topics
- `featured` is not `true` or `false`
- Two files have the same `slug`
- A `related` slug does not match any answer file

Read the error — it names the file and the problem. Fix the file and rebuild.

## Writing Guidelines

- **Answer the question in the first sentence.** The `answer_summary` and the opening
  line of the body should each stand alone.
- **One question per file.** If a second question appears, it belongs in its own file,
  linked through `related`.
- **Only verifiable facts.** State prices, hours, and policies that are true today. If a
  detail is unknown ("rush service?", "loaner bikes?"), say what *is* known and invite a
  call — do not invent a promise.
- **Prices stay in sync.** Tune-up, e-bike service, flat repair, and fitting prices also
  live in `src/services.ts`. If a price changes, update both the answer files and that
  data file.
- **Match the existing voice**: friendly, plain-spoken, honest, no hype.
