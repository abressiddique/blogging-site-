export interface IPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const posts: IPost[] = [
  {
    title: "Abc Efg",
    slug: "abc-efg",
    author: "Robert Liu",
    date: "2024-02-28",
    category: "Blockchain",
    thumbnail: "/images/thumbnails/green-coding.jpg",
  },
  {
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    slug: "blockchain-beyond-cryptocurrency-real-world-applications",
    author: "Robert Liu",
    date: "2024-02-28",
    category: "Blockchain",
    thumbnail: "/images/thumbnails/blockchain.jpg",
  },
  {
    title: "Cloud Computing: Architecture and Services Explained",
    slug: "cloud-computing-architecture-and-services-explained",
    author: "Linda Garcia",
    date: "2024-04-18",
    category: "Cloud Computing",
    thumbnail: "/images/thumbnails/cloud-computing.jpg",
  },
  {
    title: "CSS Grid: Modern Layout Techniques for Responsive Design",
    slug: "css-grid-modern-layout-techniques-for-responsive-design",
    author: "Alex Thompson",
    date: "2024-02-15",
    category: "CSS",
    thumbnail: "/images/thumbnails/css-grid.jpg",
  },
  {
    title: "Cybersecurity in 2024: Protecting Your Digital Assets",
    slug: "cybersecurity-in-2024-protecting-your-digital-assets",
    author: "Jason Wong",
    date: "2024-01-25",
    category: "Cybersecurity",
    thumbnail: "/images/thumbnails/cybersecurity.jpg",
  },
  {
    title: "Getting Started with Web Development in 2024",
    slug: "getting-started-with-web-development-in-2024",
    author: "Sarah Johnson",
    date: "2024-03-15",
    category: "Web Development",
    thumbnail: "/images/thumbnails/web-development.jpg",
  },
  {
    title: "Green Coding: Building Environmentally Conscious Web Applications",
    slug: "green-coding-building-environmentally-conscious-web-applications",
    author: "Emma Stewart",
    date: "2024-03-10",
    category: "Sustainability",
    thumbnail: "/images/thumbnails/green-coding.jpg",
  },
  {
    title: "Machine Learning: A Beginner's Roadmap",
    slug: "machine-learning-a-beginners-roadmap",
    author: "Rachel Patel",
    date: "2024-03-22",
    category: "AI/ML",
    thumbnail: "/images/thumbnails/machine-learning.jpg",
  },
  {
    title: "Mastering React Hooks: A Comprehensive Guide",
    slug: "mastering-react-hooks-a-comprehensive-guide",
    author: "Michael Chen",
    date: "2024-02-20",
    category: "React",
    thumbnail: "/images/thumbnails/react-hooks.jpg",
  },
  {
    title: "Optimizing Next.js Applications for Maximum Performance",
    slug: "optimizing-nextjs-applications-for-maximum-performance",
    author: "David Kim",
    date: "2024-04-05",
    category: "Performance",
    thumbnail: "/images/thumbnails/nextjs-optimizing.jpg",
  },
  {
    title: "Why TypeScript Will Transform Your JavaScript Development",
    slug: "why-typescript-will-transform-your-javascript-development",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "TypeScript",
    thumbnail: "/images/thumbnails/typescript.jpg",
  },
];
