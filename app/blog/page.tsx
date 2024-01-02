// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/components/posts/Posts";
import PostsPreview from "@/components/posts/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

import { BlogNavbar } from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  // console.log("Initial Data: ", initial.data);
  return draftMode().isEnabled ? (
    <>
      <Banner />
      <PostsPreview initial={initial} />
    </>
  ) : (
    <main className="large-container">
      <BlogNavbar />
      <Banner />
      <Posts posts={initial.data} />
    </main>
  );
}
