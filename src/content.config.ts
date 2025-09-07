import { z, defineCollection } from 'astro:content';

// Langform-Analysen
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    hero: z.string().url().optional(),
    ticker: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Kurzmeldungen / News
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    source: z.string().optional(),
    ticker: z.string().optional(),
  }),
});

export const collections = { articles, news };
