import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Blog | GetB+',
  description: 'India travel payment guides, fintech news, and product updates.'
}

const blogs = [
  {
    title: 'How to pay in India with a foreign credit card in 2026',
    category: 'India Travel Payment Guide',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    excerpt: 'A complete guide to avoiding cash exchange fees and using your international Visa or Mastercard at Indian QR codes.',
    slug: 'pay-india-foreign-card'
  },
  {
    title: 'UPI for International Travelers: Everything you need to know',
    category: 'Product Updates',
    date: 'Oct 05, 2026',
    readTime: '4 min read',
    excerpt: 'What is UPI, why does it matter, and how can a non-resident access the network without an Indian bank account.',
    slug: 'upi-for-international-travelers'
  },
  {
    title: 'The best payment app for India tourists',
    category: 'India Travel Payment Guide',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    excerpt: 'Comparing cash, forex cards, and GetB+ for your upcoming trip to India.',
    slug: 'best-payment-app-india-tourists'
  },
  {
    title: 'NRI using foreign card in India: A survival guide',
    category: 'NRI Finance',
    date: 'Sep 15, 2026',
    readTime: '4 min read',
    excerpt: 'Why opening an NRO account might not be the best solution for short trips back home.',
    slug: 'nri-foreign-card-india-guide'
  },
  {
    title: 'Goa payment methods for tourists',
    category: 'Destination Guides',
    date: 'Sep 02, 2026',
    readTime: '3 min read',
    excerpt: 'From beach shacks to luxury resorts, how to navigate payments in Goa without carrying wads of cash.',
    slug: 'goa-payment-methods-tourists'
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">News & Guides</h1>
          <p className="text-xl text-gray-300">India travel payment guides, fintech news, and product updates.</p>
        </div>
      </section>

      <section className="py-16 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4">

          <div className="flex gap-4 overflow-x-auto pb-8 mb-8 no-scrollbar">
            <span className="bg-gold text-navy font-semibold px-4 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer">All Posts</span>
            <span className="bg-navy border border-white/20 text-gray-300 hover:text-white px-4 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer transition-colors">India Travel Payment Guide</span>
            <span className="bg-navy border border-white/20 text-gray-300 hover:text-white px-4 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer transition-colors">NRI Finance</span>
            <span className="bg-navy border border-white/20 text-gray-300 hover:text-white px-4 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer transition-colors">Destination Guides</span>
            <span className="bg-navy border border-white/20 text-gray-300 hover:text-white px-4 py-1.5 rounded-full whitespace-nowrap text-sm cursor-pointer transition-colors">Product Updates</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, i) => (
              <Card key={i} className="bg-navy border-white/10 hover:border-gold/50 transition-colors group flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-gold mb-3 uppercase tracking-wider">{blog.category}</div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">{blog.title}</h2>
                  <p className="text-gray-400 mb-6 flex-1">{blog.excerpt}</p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} />
                      <span>{blog.date} · {blog.readTime}</span>
                    </div>
                    <Link href={`/blog/${blog.slug}`} className="text-white group-hover:text-gold transition-colors flex items-center gap-1 text-sm font-medium">
                      Read <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}