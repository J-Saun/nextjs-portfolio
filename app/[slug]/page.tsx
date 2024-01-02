import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";

import PostPreview from "@/components/posts/PostPreview";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { ProjectNavbar } from "@/components/navbar/Navbar";

import Carousel from "@/components/carousel/Carousel";
import { BadgeList } from "@/components/elements/lists/List";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  const data = initial.data;
  const carouselImages = data.carouselImages;
  const techStack = data.stack;
  console.log(data.body);
  const images = [];
  const imageAlts = [];
  const imageCaptions = [];
  for (let i = 0; i < carouselImages.length; i++) {
    images.push(carouselImages[i].image.asset._ref);
    imageAlts.push(carouselImages[i].image.alt);
    imageCaptions.push(carouselImages[i].caption);
  }

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <div className="projectPage">
      <div className="container">
        <ProjectNavbar />
      </div>

      <Carousel items={images} alts={imageAlts} captions={imageCaptions} />
      <div className="mx-auto flex space-evenly max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-36 lg:px-8">
        <div className="flex flex-col space-y-7 mt-10">
          <h1 className="text-4xl font-bold leading-tight tracking-wide xl:text-5xl">
            {data.title}
            <span className="sr-only">{data.title}</span>
          </h1>
          <BadgeList badges={techStack} badgeStyle="themed" />
        </div>
        <PortableText value={data.body} />
      </div>
    </div>
  );
}

{
  /* <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-36 lg:px-8">
<div className="flex flex-col space-y-7 text-center"> */
}
//   <h3 className="text-lg font-medium uppercase tracking-wide text-neutral-800 dark:text-neutral-200">
//     Tagline
//   </h3>

//   <h1 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50 xl:text-5xl">
//     {initial.data.title}
//   </h1>

//   <p className="mx-auto max-w-4xl text-lg ">description</p>

//   <div className="flex justify-center space-x-8">
//     <a
//       href="#"
//       className="rounded-md bg-neutral-900 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-400"
//     >
//       Button
//     </a>

//     <a
//       href="#"
//       className="rounded-md bg-transparent px-10 py-3 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-400"
//     >
//       Button
//     </a>
//   </div>
// </div>

// <div className="mx-auto mt-14 lg:mt-24">
//   {/* <Image
//     className="rounded-lg"
//     src={builder
//       .image(props.mainImage.asset)
//       .width(300)
//       .height(300)
//       .quality(80)
//       .url()}
//     width={300}
//     height={300}
//     alt={props.mainImage.alt || ""}
//   /> */}
//   {/* <img
//   src="https://dummyimage.com/1920x1200/d4d4d4/171717"
//   alt="Image"
//   width={1920}
//   height={1200}
//   className="rounded-xl object-cover"
// /> */}
// </div>
// </div>
