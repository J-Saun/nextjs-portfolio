import styles from "./Projects.module.scss";

import Image from "next/image";

import { draftMode } from "next/headers";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";

// import Post from "@/components/posts/Posts";
import PostsPreview from "@/components/posts/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

import { useNavigateToSlug } from "@/scripts/utils";

import { BadgeList } from "@/components/elements/lists/List";

const builder = imageUrlBuilder({ projectId, dataset });

export default async function Projects() {
  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  // console.log("Initial: ", initial);
  // console.log("Initial.data: ", initial.data);
  // console.log(window.location.href);

  // const linkTo = useNavigateToSlug(post.slug.current);

  return draftMode().isEnabled ? (
    <div className="container">
      <PostsPreview initial={initial} />
    </div>
  ) : (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Recent Work</h2>

        {initial.data.map((props: any) => (
          <>
            <a href={props.slug.current}>
              <div
                className={styles.projectCard}
                // onClick={() => linkTo()}
                key={props._id}
              >
                {props.mainImage ? (
                  <div className={styles.projectCard__preview}>
                    <Image
                      className="rounded-lg"
                      src={builder
                        .image(props.mainImage.asset)
                        .width(300)
                        .height(300)
                        .quality(80)
                        .url()}
                      width={300}
                      height={300}
                      alt={props.mainImage.alt || ""}
                    />
                  </div>
                ) : null}
                <div className={styles.projectCard__desc}>
                  {props.title ? <h3>{props.title}</h3> : null}
                  {props.description ? (
                    <PortableText value={props.description} />
                  ) : null}
                  <BadgeList badges={props.stack} badgeStyle="transparent" />
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </section>
  );
}
