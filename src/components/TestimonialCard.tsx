'use client';

interface TestimonialCardProps {
  quote: string;
  name: string;
  nationalityTag: string;
  contextTag: string;
}

export default function TestimonialCard({ quote, name, nationalityTag, contextTag }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex flex-col h-full min-w-[300px] shrink-0 md:min-w-0">
      <div className="flex gap-1 mb-6 text-gold text-sm">
        ★★★★★
      </div>

      <div className="mb-6 flex-1 relative">
        <span className="font-display text-[80px] text-gold leading-[0.7] float-left mr-2">
          &quot;
        </span>
        <p className="font-sans text-[17px] text-navy italic leading-[1.6]">
          {quote}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 mt-auto">
        <p className="font-sans font-semibold text-[15px] text-navy mb-1">{name}</p>
        <p className="font-sans text-[13px] text-gray-500">
          {nationalityTag} <span className="mx-1">·</span> {contextTag}
        </p>
      </div>
    </div>
  );
}