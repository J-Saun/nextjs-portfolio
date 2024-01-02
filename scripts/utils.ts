import { useRouter } from "next/router";

export const useNavigateToSlug = (slug: string): void => {
  const router = useRouter();
  router.push(`/${slug}`);
};
