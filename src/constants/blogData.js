export const BLOG_CATEGORIES = [
  "All",
  "Product Photo Editing",
  "Photo Retouching",
  "Real Estate Photo Editing",
  "Jewellery Photo",
  "Photo Restoration",
  "Motion & Video",
];

const CATEGORY_POOL = BLOG_CATEGORIES.filter((category) => category !== "All");

export const BLOG_POSTS = CATEGORY_POOL.flatMap((category, categoryIndex) =>
  Array.from({ length: 6 }, (_, index) => ({
    id: `blog-${categoryIndex * 6 + index + 1}`,
    title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
    author: "Shovon Ahmed",
    date: "Jan 21, 2025",
    category,
    readTime: "5 MIN READ",
  })),
);

export const BLOG_TABLE_OF_CONTENTS = [
  "Red Flag 1: They Can't Explain Their Quality Control Process",
  "Red Flag 2: Weak File Handling and No Clear Confidentiality Process",
  "Red Flag 3: They Cannot Scale With You",
  "Red Flag 4: Pricing Is Unclear Until You Are Already Committed",
  "Red Flag 5: No Free Trial or Sample Option",
];

export const BLOG_TAGS = [
  "Ecommerce Photography",
  "Outsourcing",
  "Photo Retouching",
  "Product Photography",
];

export const QUALITY_WORKFLOW_STEPS = [
  {
    id: "upload",
    title: "Upload",
    description: "We receive and organize your images securely.",
  },
  {
    id: "hand-edit",
    title: "Hand-Edit",
    description: "Our expert retouchers carefully enhance each image by hand.",
  },
  {
    id: "review-deliver",
    title: "Review & Deliver",
    description:
      "We review for quality and deliver final images on time, every time.",
  },
];

export const QUALITY_WORKFLOW_FORMATS = ["JPG", "GIF", "TIFF", "PNG"];
