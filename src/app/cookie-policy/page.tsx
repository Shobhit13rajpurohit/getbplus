import { PillBadge } from '@/components';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen py-[100px]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <PillBadge className="mb-4">Legal</PillBadge>
          <h1 className="font-display text-[40px] md:text-[56px] text-navy leading-tight mb-4">
            Cookie Policy
          </h1>
          <p className="font-sans text-[14px] text-gray-500 uppercase tracking-wider font-semibold">
            Last updated: May 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:font-sans prose-p:text-gray-700 prose-p:leading-[1.8] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-li:font-sans prose-li:text-gray-700">

          <p>
            This Cookie Policy explains how Adeshilps E-XP & TravelWithU Private Limited (&quot;GetB+&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at getbplus.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">2. Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">3. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
            <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">4. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that appears upon your first visit to our site.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

        </article>
      </div>
    </div>
  );
}