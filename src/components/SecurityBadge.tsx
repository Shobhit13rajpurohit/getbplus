import { ShieldCheck, Lock, Fingerprint, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

type BadgeType = 'pci' | 'rbi' | 'npci' | 'dpdp' | 'token' | 'mdes' | 'aws' | 'biometric' | 'default';

interface SecurityBadgeProps {
  type: BadgeType;
  title: string;
  className?: string;
}

export default function SecurityBadge({ type, title, className }: SecurityBadgeProps) {

  const getIcon = () => {
    switch (type) {
      case 'pci':
      case 'rbi':
      case 'dpdp':
      case 'npci':
        return <ShieldCheck className="text-gold" size={24} />;
      case 'token':
      case 'mdes':
        return <Lock className="text-gold" size={24} />;
      case 'biometric':
        return <Fingerprint className="text-gold" size={24} />;
      case 'aws':
        return <Database className="text-gold" size={24} />;
      default:
        return <ShieldCheck className="text-gold" size={24} />;
    }
  };

  return (
    <div
      className={cn(
        "glassmorphism-light rounded-[16px] p-6 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-transform",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
        {getIcon()}
      </div>
      <span className="font-sans font-semibold text-[16px] text-navy">
        {title}
      </span>
    </div>
  );
}