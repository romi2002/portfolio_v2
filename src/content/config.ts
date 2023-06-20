import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	work_experience: defineCollection({
		schema: z.object({
			title: z.string(),
			job_title: z.string(),
			location: z.string(),
			start_date: z.coerce.date(),
			end_date: z.coerce.date(),
			bullet_points: z.array(z.string())
		})
	}),
	mentions: defineCollection({
		schema: z.object({
			title: z.string(),
			date: z.coerce.date(),
			img: z.string(),
			img_alt: z.string(),
			url: z.string()
		})
	}),
};
