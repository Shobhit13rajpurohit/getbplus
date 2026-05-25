import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ category, title, excerpt, author, date, readTime, slug }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-[16px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-navy to-navy-light w-full" />

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-offWhite text-gold text-[12px] font-sans font-semibold tracking-wider uppercase">
            {category}
          </span>
        </div>

        <h3 className="font-sans font-semibold text-[20px] text-navy leading-snug mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>

        <p className="font-sans text-[15px] text-gray-500 line-clamp-3 mb-6 flex-1">
          {excerpt}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[13px] text-gray-500 font-sans">
          <div className="flex items-center gap-2">
            <span>{author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{readTime}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}