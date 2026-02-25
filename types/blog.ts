// types/blog.ts
export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  readingTime: number;
  featured: boolean;
  published: boolean;
  content: string;
  coverImage?: string;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
  color: string;
}

export interface SearchResult {
  post: Post;
  score: number;
  matches: {
    title?: number;
    description?: number;
    content?: number;
    tags?: number;
  };
}
