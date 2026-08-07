import { useMemo } from "react";
import { SERVICES_LIST } from "@/constants/services";
import { BLOG_POSTS } from "@/constants/blogData";

export const useSearch = (query) => {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      return { services: [], blogs: [] };
    }

    const services = SERVICES_LIST.filter((service) =>
      service.label.toLowerCase().includes(trimmed),
    );

    const blogs = BLOG_POSTS.filter((post) =>
      post.title.toLowerCase().includes(trimmed),
    );

    return { services, blogs };
  }, [query]);
};
