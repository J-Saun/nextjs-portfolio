// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug) && references('e49ac93c-dc6b-4528-b16b-5c148f2340dc')]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const PROJECTS_QUERY = groq`*[_type == "post" && defined(slug) && references('fe91d74f-7649-44ee-9dcf-1dee5da41ac9')]`;

export const PROJECT_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
