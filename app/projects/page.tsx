// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/components/posts/Posts";
import PostsPreview from "@/components/posts/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

// import { BlogNavbar } from "@/components/navbar/Navbar";
// import Banner from "@/components/banner/Banner";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <div className="container">
      {/* <Banner /> */}
      <PostsPreview initial={initial} />
    </div>
  ) : (
    <>
      <h1>Projects</h1>
      {/* <Banner /> */}
      <Posts posts={initial.data} />
    </>
  );
}
