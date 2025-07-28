import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    abstract: z.string(),
    editedAt: z.string(),
    image: z.string().optional(),
    backgroundPattern: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};