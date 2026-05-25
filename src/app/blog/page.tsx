'use client';

import { PillBadge, BlogCard, CTABlock } from '@/components';

export default function Blog() {
  const tabs = ["All", "India Travel Payment", "NRI Finance", "City Guides", "Product Updates", "Fintech India"];

  // Placeholder data as requested
  const articles = [
    { slug: "how-to-pay-india-foreign-card", category: "India Travel Payment", title: "How to Pay in India with a Foreign Credit Card (2026 Complete Guide)", excerpt: "Everything you need to know about using Visa, Mastercard, or Amex in a country that runs entirely on QR codes.", author: "Aadesh Jain", date: "May 12, 2026", readTime: "8 min read" },
    { slug: "upi-explained", category: "Fintech India", title: "UPI Explained: What Every International Traveler Needs to Know", excerpt: "Demystifying India's Unified Payments Interface and why your home bank card doesn't work with it natively.", author: "Ruchi Jain", date: "May 10, 2026", readTime: "5 min read" },
    { slug: "india-travel-money-guide", category: "India Travel Payment", title: "The Complete India Travel Money Guide: Cash vs Card vs UPI", excerpt: "Comparing the costs, convenience, and acceptance rates of different payment methods when visiting India.", author: "GetB+ Editorial", date: "May 08, 2026", readTime: "10 min read" },
    { slug: "why-foreign-cards-fail", category: "Product Updates", title: "Why Your Visa or Mastercard Doesn't Work at Indian QR Codes", excerpt: "The technical and regulatory reasons behind the payment gap, and how GetB+ solves it.", author: "Vikas Jain", date: "May 05, 2026", readTime: "6 min read" },
    { slug: "10-payment-tips-india", category: "India Travel Payment", title: "10 Payment Tips Before Visiting India in 2026", excerpt: "Prepare your finances before your flight. What to download, what to avoid, and how to spot a good exchange rate.", author: "GetB+ Editorial", date: "May 01, 2026", readTime: "7 min read" },
    { slug: "nri-foreign-card-guide", category: "NRI Finance", title: "NRI Guide: Using Your Foreign Card in India (2026)", excerpt: "Stop relying on NRO accounts or family members. How NRIs can use their foreign-earned income easily back home.", author: "Akshay Jain", date: "Apr 28, 2026", readTime: "6 min read" },
    { slug: "avoiding-currency-scams", category: "India Travel Payment", title: "Avoiding Currency Exchange Scams at Indian Airports", excerpt: "The true cost of '0% commission' exchange desks and why digital payments save you money.", author: "GetB+ Editorial", date: "Apr 25, 2026", readTime: "5 min read" },
    { slug: "delhi-payment-guide", category: "City Guides", title: "Delhi Tourist Payment Guide: Everything You Need to Know", excerpt: "From the Airport Express line to Paharganj markets, how to navigate Delhi's payment landscape.", author: "GetB+ Local Guides", date: "Apr 22, 2026", readTime: "8 min read" },
    { slug: "getbplus-cost-comparison", category: "Product Updates", title: "How Much Does GetB+ Cost vs Forex Card vs Cash?", excerpt: "A transparent, side-by-side breakdown of what you actually pay when converting foreign currency to INR.", author: "Ruchi Jain", date: "Apr 18, 2026", readTime: "7 min read" },
    { slug: "goa-payment-guide", category: "City Guides", title: "Goa Travel Guide: Paying Like a Local as an International Tourist", excerpt: "Beach shacks, scooter rentals, and flea markets. How to pay in Goa without carrying wads of cash.", author: "GetB+ Local Guides", date: "Apr 15, 2026", readTime: "6 min read" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy py-[100px] text-center px-4">
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
          The <span className="text-gold">GetB+</span> Blog
        </h1>
        <p className="font-sans text-[18px] text-white/60 max-w-[640px] mx-auto leading-relaxed">
          Guides, product updates, and insights on navigating India&apos;s financial landscape as an international traveler.
        </p>
      </section>

      {/* TABS */}
      <section className="border-b border-gray-200 bg-white sticky top-[72px] z-30">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-8">
            {tabs.map((tab, i) => (
              <button key={i} className={`whitespace-nowrap py-4 font-sans font-medium text-[15px] border-b-2 transition-colors ${i === 0 ? 'text-navy border-navy' : 'text-gray-500 border-transparent hover:text-navy hover:border-gray-300'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-offWhite">
        <div className="max-w-[1280px] mx-auto px-4">

          {/* FEATURED */}
          <div className="mb-16 bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm flex flex-col lg:flex-row group cursor-pointer hover:shadow-md transition-shadow">
            <div className="lg:w-2/3 h-[300px] lg:h-auto bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
            </div>
            <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <PillBadge className="self-start mb-6">Featured</PillBadge>
              <h2 className="font-display text-[32px] text-navy mb-4 group-hover:text-gold transition-colors">{articles[0].title}</h2>
              <p className="font-sans text-gray-500 mb-8 line-clamp-3">{articles[0].excerpt}</p>
              <div className="text-[13px] text-gray-400 font-sans mt-auto">
                {articles[0].author} · {articles[0].date}
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, i) => (
              <BlogCard key={i} {...article} />
            ))}
          </div>

        </div>
      </section>

      <CTABlock
        title="Ready to travel cashless?"
        subtitle="Download GetB+ and pay anywhere in India."
      />
    </div>
  );
}