interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export default function TeamCard({ name, title, bio, initials }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-navy-light flex items-center justify-center text-gold text-3xl font-display mb-6">
        {initials}
      </div>
      <h3 className="font-display text-[24px] text-navy mb-1">{name}</h3>
      <p className="font-sans font-semibold text-[15px] text-gold mb-4 uppercase tracking-wider">{title}</p>
      <p className="font-sans text-[15px] leading-relaxed text-gray-500 max-w-sm">
        {bio}
      </p>
    </div>
  );
}