export const BLOG_CATEGORIES = [
  "All",
  "Product Photo Editing",
  "Photo Retouching",
  "Real Estate Photo Editing",
  "Jewellery Photo",
  "Photo Restoration",
  "Motion & Video",
];

export const BLOG_POSTS = Array.from({ length: 12 }, (_, index) => ({
  id: `blog-${index + 1}`,
  title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
  author: "Shovon Ahmed",
  date: "Jan 21, 2025",
  category: "Product Photography",
  readTime: "5 MIN READ",
}));
