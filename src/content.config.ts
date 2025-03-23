import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
    title : z.string(),
    date : z.string(),
    summary : z.string(),
    tags : z.array(z.string()),
    cover : z.string()
})

const articles = defineCollection({ 
    loader : glob({
        pattern : ['*.md'],
        base : 'src/pages/articles/content'
    }),
    schema : articleSchema
});

export const collections = { articles };

export type Article = CollectionEntry<'articles'>
